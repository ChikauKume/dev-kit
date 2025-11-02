#!/bin/bash
# バックエンド・フロントエンド統合整合性チェック
# Backend-Frontend Integration Validation Script

# set -e を削除してエラーハンドリングを明示的に行う

PROJECT_ROOT="$(cd "$(dirname "${BASH_SOURCE[0]}")/../../.." && pwd)"
SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"

cd "$PROJECT_ROOT"

# 色定義
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

echo ""
echo "========================================================================"
echo -e "${BLUE}🔗 Backend-Frontend Integration Validation${NC}"
echo "========================================================================"
echo ""

EXIT_CODE=0
SPEC_NAME="${1:-}"
MODULE_NAME=""

if [ -n "$SPEC_NAME" ]; then
    # design.mdからモジュール名を抽出
    DESIGN_PATH="$PROJECT_ROOT/dev-kit/docs/specs/$SPEC_NAME/design.md"
    if [ -f "$DESIGN_PATH" ]; then
        MODULE_NAME=$(grep -E "^\*\*モジュール名\*\*:" "$DESIGN_PATH" | sed -E 's/.*`([^`]+)`.*/\1/') || MODULE_NAME=""
    fi

    # モジュール名が見つからない場合は、app/Modulesから推測
    if [ -z "$MODULE_NAME" ]; then
        # user-authentication → User, video-management → Video
        # 簡易的にspec名の最初の単語を抽出してPascalCaseに変換
        MODULE_NAME=$(echo "$SPEC_NAME" | sed -E 's/^([a-z]+)-.*/\1/' | sed 's/.*/\u&/')

        # モジュールディレクトリが存在するか確認
        if [ ! -d "$PROJECT_ROOT/app/Modules/$MODULE_NAME" ]; then
            # 存在しない場合は、app/Modulesから最初に見つかったモジュールを使用
            FIRST_MODULE=$(ls -1 "$PROJECT_ROOT/app/Modules" 2>/dev/null | head -1) || FIRST_MODULE=""
            if [ -n "$FIRST_MODULE" ]; then
                MODULE_NAME="$FIRST_MODULE"
            fi
        fi
    fi

    if [ -n "$MODULE_NAME" ]; then
        echo -e "${GREEN}Module: $MODULE_NAME${NC}"
    fi
fi

# ========================================================================
# Part 1: Inertia::render() Props整合性チェック
# ========================================================================
echo -e "${BLUE}📝 Part 1: Inertia Props Consistency Check${NC}"
echo "------------------------------------------------------------------------"

if [ -n "$SPEC_NAME" ] && [ -n "$MODULE_NAME" ]; then
    CONTROLLER_DIR="$PROJECT_ROOT/app/Modules/$MODULE_NAME/Presentation/Controllers"
    PAGES_DIR="$PROJECT_ROOT/resources/js/Pages"

    if [ -d "$CONTROLLER_DIR" ]; then
        echo "Checking Inertia::render() calls in Controllers..."

        # Controllerファイルを検索
        CONTROLLER_FILES=$(find "$CONTROLLER_DIR" -name "*Controller.php" 2>/dev/null) || CONTROLLER_FILES=""

        if [ -n "$CONTROLLER_FILES" ]; then
            for controller in $CONTROLLER_FILES; do
                echo ""
                echo "Analyzing: $(basename $controller)"

                # Inertia::render() を抽出
                # 例: Inertia::render('Auth/SignupConfirmPage', [...])
                INERTIA_RENDERS=$(grep -n "Inertia::render" "$controller" 2>/dev/null) || INERTIA_RENDERS=""

                if [ -n "$INERTIA_RENDERS" ]; then
                    while IFS= read -r line; do
                        LINE_NUM=$(echo "$line" | cut -d: -f1)

                        # ページ名を抽出 (例: 'Auth/SignupConfirmPage')
                        PAGE_NAME=$(echo "$line" | grep -oE "'[A-Za-z/]+Page'" | tr -d "'") || PAGE_NAME=""

                        if [ -n "$PAGE_NAME" ]; then
                            echo "  Found: $PAGE_NAME (line $LINE_NUM)"

                            # ページファイルの存在確認
                            PAGE_FILE="$PAGES_DIR/${PAGE_NAME}.tsx"

                            if [ -f "$PAGE_FILE" ]; then
                                echo -e "    ${GREEN}✅ Page file exists${NC}"

                                # Controllerから渡されるpropsキーを抽出（簡易版）
                                # 次の行からInertia::render終わりまでを取得
                                PROPS_SECTION=$(sed -n "${LINE_NUM},/^\s*\]\)\;/p" "$controller" 2>/dev/null) || PROPS_SECTION=""

                                # propsキーを抽出 (例: 'signupName' => ...)
                                BACKEND_PROPS=$(echo "$PROPS_SECTION" | grep -oE "'[a-zA-Z_]+'\s*=>" | sed "s/'//g" | sed "s/ =>//g" | sort) || BACKEND_PROPS=""

                                if [ -n "$BACKEND_PROPS" ]; then
                                    echo "    Backend props keys:"
                                    echo "$BACKEND_PROPS" | while read -r prop; do
                                        echo "      - $prop"
                                    done

                                    # TypeScriptインターフェースからpropsを抽出
                                    INTERFACE_NAME="${PAGE_NAME##*/}Props"
                                    FRONTEND_PROPS=$(grep -A 50 "interface $INTERFACE_NAME" "$PAGE_FILE" 2>/dev/null | \
                                                    grep -E "^\s+[a-zA-Z_]+[?]?:" | \
                                                    sed -E 's/^\s+([a-zA-Z_]+)[?]?:.*/\1/' | \
                                                    sort) || FRONTEND_PROPS=""

                                    if [ -n "$FRONTEND_PROPS" ]; then
                                        echo "    Frontend props keys:"
                                        echo "$FRONTEND_PROPS" | while read -r prop; do
                                            echo "      - $prop"
                                        done

                                        # 差分チェック
                                        MISSING_IN_FRONTEND=$(comm -23 <(echo "$BACKEND_PROPS") <(echo "$FRONTEND_PROPS") 2>/dev/null) || MISSING_IN_FRONTEND=""
                                        MISSING_IN_BACKEND=$(comm -13 <(echo "$BACKEND_PROPS") <(echo "$FRONTEND_PROPS") 2>/dev/null) || MISSING_IN_BACKEND=""

                                        if [ -n "$MISSING_IN_FRONTEND" ]; then
                                            echo -e "    ${RED}❌ Props missing in Frontend interface:${NC}"
                                            echo "$MISSING_IN_FRONTEND" | while read -r prop; do
                                                [ -n "$prop" ] && echo "      - $prop"
                                            done
                                            EXIT_CODE=1
                                        fi

                                        if [ -n "$MISSING_IN_BACKEND" ]; then
                                            echo -e "    ${YELLOW}⚠️  Props defined in Frontend but not sent from Backend:${NC}"
                                            echo "$MISSING_IN_BACKEND" | while read -r prop; do
                                                [ -n "$prop" ] && echo "      - $prop (may use default value)"
                                            done
                                        fi

                                        if [ -z "$MISSING_IN_FRONTEND" ] && [ -z "$MISSING_IN_BACKEND" ]; then
                                            echo -e "    ${GREEN}✅ Props keys match perfectly${NC}"
                                        fi
                                    else
                                        echo -e "    ${YELLOW}⚠️  Could not extract Frontend props interface${NC}"
                                    fi
                                else
                                    echo -e "    ${YELLOW}⚠️  No props passed (may be intentional)${NC}"
                                fi
                            else
                                echo -e "    ${RED}❌ Page file NOT FOUND: $PAGE_FILE${NC}"
                                EXIT_CODE=1
                            fi
                        fi
                    done <<< "$INERTIA_RENDERS"
                else
                    echo -e "  ${YELLOW}⚠️  No Inertia::render() calls found${NC}"
                fi
            done
        else
            echo -e "${YELLOW}⚠️  No Controller files found in $CONTROLLER_DIR${NC}"
        fi
    else
        echo -e "${YELLOW}⚠️  Controller directory not found: $CONTROLLER_DIR${NC}"
    fi
else
    echo -e "${YELLOW}⚠️  No spec name provided or module name not found${NC}"
    echo "   Usage: $0 <spec-name>"
fi

echo ""

# ========================================================================
# Part 2: ルート存在チェック（TypeScript → routes/web.php）
# ========================================================================
echo -e "${BLUE}📝 Part 2: Route Existence Check (TypeScript → Laravel Routes)${NC}"
echo "------------------------------------------------------------------------"

if [ -d "$PAGES_DIR" ]; then
    echo "Checking router.post/get calls in TypeScript files..."

    # router.post('/path') や router.get('/path') を抽出
    ROUTE_CALLS=$(grep -rn "router\.\(post\|get\|put\|delete\|patch\)(['\"]" "$PAGES_DIR" --include="*.tsx" 2>/dev/null) || ROUTE_CALLS=""

    if [ -n "$ROUTE_CALLS" ]; then
        while IFS= read -r line; do
            FILE_PATH=$(echo "$line" | cut -d: -f1)
            LINE_NUM=$(echo "$line" | cut -d: -f2)

            # ルートパスを抽出
            ROUTE_PATH=$(echo "$line" | grep -oE "router\.[a-z]+\(['\"][^'\"]+['\"]" | sed -E "s/router\.[a-z]+\(['\"]([^'\"]+)['\"].*/\1/") || ROUTE_PATH=""

            if [ -n "$ROUTE_PATH" ]; then
                echo ""
                echo "Found route call: $ROUTE_PATH"
                echo "  File: $(basename $FILE_PATH):$LINE_NUM"

                # routes/web.php に該当ルートが存在するか確認
                ROUTES_FILE="$PROJECT_ROOT/routes/web.php"

                if [ -f "$ROUTES_FILE" ]; then
                    # Route::post('/signup/confirm') のようなパターンを検索
                    if grep -qE "Route::(post|get|put|delete|patch)\(['\"]$ROUTE_PATH['\"]" "$ROUTES_FILE" 2>/dev/null; then
                        echo -e "  ${GREEN}✅ Route exists in routes/web.php${NC}"
                    else
                        echo -e "  ${RED}❌ Route NOT FOUND in routes/web.php${NC}"
                        echo -e "  ${RED}   Expected: Route::post('$ROUTE_PATH', ...)${NC}"
                        EXIT_CODE=1
                    fi
                else
                    echo -e "  ${YELLOW}⚠️  routes/web.php not found${NC}"
                fi
            fi
        done <<< "$ROUTE_CALLS"
    else
        echo -e "${YELLOW}⚠️  No router calls found in TypeScript files${NC}"
    fi
else
    echo -e "${YELLOW}⚠️  Pages directory not found: $PAGES_DIR${NC}"
fi

echo ""

# ========================================================================
# Part 3: Ziggy route()名前チェック（TypeScript → routes/web.php）
# ========================================================================
echo -e "${BLUE}📝 Part 3: Ziggy Route Name Check (TypeScript → Laravel Named Routes)${NC}"
echo "------------------------------------------------------------------------"

if [ -d "$PAGES_DIR" ]; then
    echo "Checking route('name') calls in TypeScript files..."

    # route('signup.confirm') のようなパターンを抽出
    ROUTE_NAME_CALLS=$(grep -rn "route(['\"][a-zA-Z._-]+['\"]" "$PAGES_DIR" --include="*.tsx" 2>/dev/null) || ROUTE_NAME_CALLS=""

    if [ -n "$ROUTE_NAME_CALLS" ]; then
        while IFS= read -r line; do
            FILE_PATH=$(echo "$line" | cut -d: -f1)
            LINE_NUM=$(echo "$line" | cut -d: -f2)

            # ルート名を抽出
            ROUTE_NAME=$(echo "$line" | grep -oE "route\(['\"]([a-zA-Z._-]+)['\"]" | sed -E "s/route\(['\"]([^'\"]+)['\"].*/\1/") || ROUTE_NAME=""

            if [ -n "$ROUTE_NAME" ]; then
                echo ""
                echo "Found Ziggy route call: route('$ROUTE_NAME')"
                echo "  File: $(basename $FILE_PATH):$LINE_NUM"

                # routes/web.php に該当する名前付きルートが存在するか確認
                ROUTES_FILE="$PROJECT_ROOT/routes/web.php"

                if [ -f "$ROUTES_FILE" ]; then
                    # ->name('signup.confirm') のようなパターンを検索
                    if grep -qE "->name\(['\"]$ROUTE_NAME['\"]" "$ROUTES_FILE" 2>/dev/null; then
                        echo -e "  ${GREEN}✅ Named route exists in routes/web.php${NC}"
                    else
                        echo -e "  ${RED}❌ Named route NOT FOUND in routes/web.php${NC}"
                        echo -e "  ${RED}   Expected: ->name('$ROUTE_NAME')${NC}"
                        EXIT_CODE=1
                    fi
                else
                    echo -e "  ${YELLOW}⚠️  routes/web.php not found${NC}"
                fi
            fi
        done <<< "$ROUTE_NAME_CALLS"
    else
        echo -e "${YELLOW}⚠️  No Ziggy route() calls found in TypeScript files${NC}"
    fi
else
    echo -e "${YELLOW}⚠️  Pages directory not found: $PAGES_DIR${NC}"
fi

echo ""

# ========================================================================
# 最終サマリー
# ========================================================================
echo "========================================================================"
echo -e "${BLUE}📊 Integration Validation Summary${NC}"
echo "========================================================================"
echo ""

if [ $EXIT_CODE -eq 0 ]; then
    echo -e "${GREEN}✅✅✅ ALL INTEGRATION CHECKS PASSED ✅✅✅${NC}"
    echo ""
    echo "Backend and Frontend are properly integrated!"
    echo ""
    echo "Confirmed:"
    echo "  ✅ Inertia props keys match between Controller and TypeScript"
    echo "  ✅ All router.post/get calls have corresponding Laravel routes"
    echo "  ✅ All Ziggy route() calls have corresponding named routes"
    echo ""
else
    echo -e "${RED}❌❌❌ INTEGRATION VALIDATION FAILED ❌❌❌${NC}"
    echo ""
    echo "CRITICAL: Fix all integration errors before proceeding."
    echo ""
    echo "Common issues:"
    echo "  - Props key mismatch (Controller sends 'name', Frontend expects 'signupName')"
    echo "  - Route path mismatch (TypeScript uses '/signup/store', but route is '/signup/confirm')"
    echo "  - Missing named routes (TypeScript uses route('signup.confirm'), but route not defined)"
    echo ""
    echo "Prevention:"
    echo "  - Implement Backend FIRST (Controller + Routes)"
    echo "  - Then implement Frontend based on confirmed Backend contract"
    echo "  - Run this validation script before E2E testing"
    echo ""
fi

echo "========================================================================"

exit $EXIT_CODE
