#!/bin/bash
# デザイン整合性チェックスクリプト
# design.mdに記載された要件が正しく実装されているかを検証

set -e

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
echo -e "${BLUE}🔍 Design Integrity Validation${NC}"
echo "========================================================================"
echo ""
echo "Principle: スケルトンに沿った実装"
echo ""

EXIT_CODE=0
SPEC_NAME="${1:-}"

if [ -z "$SPEC_NAME" ]; then
    echo -e "${RED}❌ Error: Spec name is required${NC}"
    echo ""
    echo "Usage: $0 <spec-name>"
    echo ""
    echo "Example: $0 user-authentication"
    exit 1
fi

DESIGN_FILE="$PROJECT_ROOT/dev-kit/docs/specs/$SPEC_NAME/design.md"

if [ ! -f "$DESIGN_FILE" ]; then
    echo -e "${RED}❌ Error: design.md not found${NC}"
    echo ""
    echo "Expected location: $DESIGN_FILE"
    exit 1
fi

echo "Checking spec: $SPEC_NAME"
echo "Design file: $DESIGN_FILE"
echo ""

# ========================================================================
# Part 1: design.php による包括的チェック（最優先）
# ========================================================================
echo -e "${BLUE}📝 Part 1: Comprehensive Design Check (design.php)${NC}"
echo "------------------------------------------------------------------------"

if [ -x "$SCRIPT_DIR/design.php" ]; then
    echo "Running design.php validation..."

    if "$SCRIPT_DIR/design.php" "$SPEC_NAME"; then
        echo -e "${GREEN}✅ design.php validation PASSED${NC}"
    else
        echo -e "${RED}❌ design.php validation FAILED${NC}"
        echo ""
        echo "CRITICAL: design.md requirements are not fully implemented"
        EXIT_CODE=1
    fi
else
    echo -e "${YELLOW}⚠️  design.php not found or not executable${NC}"
    echo "   This is the primary validation tool - please ensure it exists"
    EXIT_CODE=1
fi

echo ""

# ========================================================================
# Part 2: 画面一覧の実装確認
# ========================================================================
echo -e "${BLUE}📝 Part 2: Screen Implementation Check${NC}"
echo "------------------------------------------------------------------------"

# **画面一覧**: セクションから .tsx ファイルを抽出
SCREENS_SECTION=$(sed -n '/\*\*画面一覧\*\*:/,/^##/p' "$DESIGN_FILE" 2>/dev/null || true)

if [ -n "$SCREENS_SECTION" ]; then
    SCREEN_FILES=$(echo "$SCREENS_SECTION" | grep -oE '[A-Za-z]+\.tsx' | sort -u || true)

    if [ -n "$SCREEN_FILES" ]; then
        echo "Found screen definitions:"

        MISSING_SCREENS=0

        while IFS= read -r screen; do
            echo "  - $screen"

            # 画面ファイルの存在確認（複数の可能な場所を探す）
            FOUND=false

            # 1. resources/js/Pages/Auth/
            if [ -f "$PROJECT_ROOT/resources/js/Pages/Auth/$screen" ]; then
                echo -e "    ${GREEN}✅ EXISTS at: resources/js/Pages/Auth/$screen${NC}"
                FOUND=true
            # 2. resources/js/Pages/
            elif [ -f "$PROJECT_ROOT/resources/js/Pages/$screen" ]; then
                echo -e "    ${GREEN}✅ EXISTS at: resources/js/Pages/$screen${NC}"
                FOUND=true
            # 3. サブディレクトリを探す
            else
                FOUND_PATH=$(find "$PROJECT_ROOT/resources/js/Pages" -name "$screen" 2>/dev/null | head -1 || true)
                if [ -n "$FOUND_PATH" ]; then
                    REL_PATH=$(echo "$FOUND_PATH" | sed "s|$PROJECT_ROOT/||")
                    echo -e "    ${GREEN}✅ EXISTS at: $REL_PATH${NC}"
                    FOUND=true
                fi
            fi

            if [ "$FOUND" = false ]; then
                echo -e "    ${RED}❌ NOT FOUND${NC}"
                MISSING_SCREENS=$((MISSING_SCREENS + 1))
                EXIT_CODE=1
            fi
        done <<< "$SCREEN_FILES"

        if [ $MISSING_SCREENS -eq 0 ]; then
            echo ""
            echo -e "${GREEN}✅ All screens implemented${NC}"
        else
            echo ""
            echo -e "${RED}❌ Missing $MISSING_SCREENS screen(s)${NC}"
        fi
    else
        echo -e "${YELLOW}⚠️  No screen files found in 画面一覧 section${NC}"
    fi
else
    echo -e "${YELLOW}⚠️  画面一覧 section not found in design.md${NC}"
fi

echo ""

# ========================================================================
# Part 3: APIエンドポイントの実装確認
# ========================================================================
echo -e "${BLUE}📝 Part 3: API Endpoints Implementation Check${NC}"
echo "------------------------------------------------------------------------"

# **APIエンドポイント**: セクションを抽出
API_SECTION=$(sed -n '/\*\*APIエンドポイント\*\*:/,/^##/p' "$DESIGN_FILE" 2>/dev/null || true)

if [ -n "$API_SECTION" ]; then
    # メソッドとパスを抽出 (例: POST /register, GET /login)
    API_ENDPOINTS=$(echo "$API_SECTION" | grep -oE '(GET|POST|PUT|PATCH|DELETE) /[a-zA-Z0-9/_-]+' || true)

    if [ -n "$API_ENDPOINTS" ]; then
        echo "Found API endpoint definitions:"

        ROUTES_FILE="$PROJECT_ROOT/routes/web.php"
        MISSING_ROUTES=0

        if [ -f "$ROUTES_FILE" ]; then
            while IFS= read -r endpoint; do
                METHOD=$(echo "$endpoint" | awk '{print $1}')
                PATH=$(echo "$endpoint" | awk '{print $2}')

                echo "  - $METHOD $PATH"

                # routes/web.php でルート定義を検索
                # Route::post('/register', ...) などの形式を探す
                if grep -qiE "Route::${METHOD,,}\s*\(\s*['\"]${PATH}['\"]" "$ROUTES_FILE"; then
                    echo -e "    ${GREEN}✅ Route defined${NC}"
                else
                    echo -e "    ${RED}❌ Route NOT FOUND in routes/web.php${NC}"
                    MISSING_ROUTES=$((MISSING_ROUTES + 1))
                    EXIT_CODE=1
                fi
            done <<< "$API_ENDPOINTS"

            if [ $MISSING_ROUTES -eq 0 ]; then
                echo ""
                echo -e "${GREEN}✅ All API endpoints defined${NC}"
            else
                echo ""
                echo -e "${RED}❌ Missing $MISSING_ROUTES API endpoint(s)${NC}"
            fi
        else
            echo -e "${RED}❌ routes/web.php not found${NC}"
            EXIT_CODE=1
        fi
    else
        echo -e "${YELLOW}⚠️  No API endpoints found in APIエンドポイント section${NC}"
    fi
else
    echo -e "${YELLOW}⚠️  APIエンドポイント section not found in design.md${NC}"
fi

echo ""

# ========================================================================
# Part 4: データベーステーブルの実装確認
# ========================================================================
echo -e "${BLUE}📝 Part 4: Database Tables Implementation Check${NC}"
echo "------------------------------------------------------------------------"

# **データベース設計**: セクションを抽出
DB_SECTION=$(sed -n '/\*\*データベース設計\*\*:/,/^##/p' "$DESIGN_FILE" 2>/dev/null || true)

if [ -n "$DB_SECTION" ]; then
    # テーブル名を抽出 (例: ### users, ### password_resets)
    TABLE_NAMES=$(echo "$DB_SECTION" | grep -oE '^###\s+[a-z_]+' | sed 's/###\s*//' || true)

    if [ -n "$TABLE_NAMES" ]; then
        echo "Found table definitions:"

        MIGRATIONS_DIR="$PROJECT_ROOT/database/migrations"
        MISSING_MIGRATIONS=0

        if [ -d "$MIGRATIONS_DIR" ]; then
            while IFS= read -r table; do
                echo "  - $table"

                # マイグレーションファイルを検索
                # create_{table_name}_table.php の形式を探す
                MIGRATION_FILE=$(find "$MIGRATIONS_DIR" -name "*create_${table}_table.php" 2>/dev/null | head -1 || true)

                if [ -n "$MIGRATION_FILE" ]; then
                    echo -e "    ${GREEN}✅ Migration exists: $(basename "$MIGRATION_FILE")${NC}"
                else
                    echo -e "    ${RED}❌ Migration NOT FOUND${NC}"
                    MISSING_MIGRATIONS=$((MISSING_MIGRATIONS + 1))
                    EXIT_CODE=1
                fi
            done <<< "$TABLE_NAMES"

            if [ $MISSING_MIGRATIONS -eq 0 ]; then
                echo ""
                echo -e "${GREEN}✅ All database migrations exist${NC}"
            else
                echo ""
                echo -e "${RED}❌ Missing $MISSING_MIGRATIONS migration(s)${NC}"
            fi
        else
            echo -e "${RED}❌ Migrations directory not found${NC}"
            EXIT_CODE=1
        fi
    else
        echo -e "${YELLOW}⚠️  No table definitions found in データベース設計 section${NC}"
    fi
else
    echo -e "${YELLOW}⚠️  データベース設計 section not found in design.md${NC}"
fi

echo ""

# ========================================================================
# Part 5: Clean Architecture 4層構造の確認
# ========================================================================
echo -e "${BLUE}📝 Part 5: Clean Architecture Structure Check${NC}"
echo "------------------------------------------------------------------------"

# specに基づいてモジュール名を推測
MODULE_NAME=$(echo "$SPEC_NAME" | sed -E 's/user-([a-z]+)/User/' | sed 's/-//g' | awk '{print toupper(substr($0,1,1)) tolower(substr($0,2))}')

echo "Checking module: $MODULE_NAME"

MODULE_DIR="$PROJECT_ROOT/app/Modules/$MODULE_NAME"

if [ -d "$MODULE_DIR" ]; then
    LAYERS_OK=true

    # Domain層
    if [ -d "$MODULE_DIR/Domain" ]; then
        echo -e "${GREEN}✅ Domain layer exists${NC}"
    else
        echo -e "${RED}❌ Domain layer NOT FOUND${NC}"
        LAYERS_OK=false
        EXIT_CODE=1
    fi

    # Application層
    if [ -d "$MODULE_DIR/Application" ]; then
        echo -e "${GREEN}✅ Application layer exists${NC}"
    else
        echo -e "${RED}❌ Application layer NOT FOUND${NC}"
        LAYERS_OK=false
        EXIT_CODE=1
    fi

    # Infrastructure層
    if [ -d "$MODULE_DIR/Infrastructure" ]; then
        echo -e "${GREEN}✅ Infrastructure layer exists${NC}"
    else
        echo -e "${RED}❌ Infrastructure layer NOT FOUND${NC}"
        LAYERS_OK=false
        EXIT_CODE=1
    fi

    # Presentation層
    if [ -d "$MODULE_DIR/Presentation" ]; then
        echo -e "${GREEN}✅ Presentation layer exists${NC}"
    else
        echo -e "${RED}❌ Presentation layer NOT FOUND${NC}"
        LAYERS_OK=false
        EXIT_CODE=1
    fi

    if [ "$LAYERS_OK" = true ]; then
        echo ""
        echo -e "${GREEN}✅ Clean Architecture 4-layer structure verified${NC}"
    else
        echo ""
        echo -e "${RED}❌ Clean Architecture structure incomplete${NC}"
    fi
else
    echo -e "${RED}❌ Module directory NOT FOUND: $MODULE_DIR${NC}"
    EXIT_CODE=1
fi

echo ""

# ========================================================================
# 最終サマリー
# ========================================================================
echo "========================================================================"
echo -e "${BLUE}📊 Design Integrity Validation Summary${NC}"
echo "========================================================================"
echo ""

if [ $EXIT_CODE -eq 0 ]; then
    echo -e "${GREEN}✅✅✅ DESIGN INTEGRITY VALIDATED ✅✅✅${NC}"
    echo ""
    echo "Principle validated: スケルトンに沿った実装"
    echo ""
    echo "Confirmed:"
    echo "  ✅ design.php comprehensive check passed"
    echo "  ✅ All screens implemented"
    echo "  ✅ All API endpoints defined"
    echo "  ✅ All database migrations exist"
    echo "  ✅ Clean Architecture 4-layer structure verified"
    echo ""
else
    echo -e "${RED}❌❌❌ DESIGN INTEGRITY VALIDATION FAILED ❌❌❌${NC}"
    echo ""
    echo "CRITICAL: Implementation does not match design.md specifications"
    echo ""
    echo "Common issues:"
    echo "  - Missing screen components"
    echo "  - Undefined API routes"
    echo "  - Missing database migrations"
    echo "  - Incomplete Clean Architecture structure"
    echo ""
    echo "Review design.md and ensure all requirements are implemented:"
    echo "  $DESIGN_FILE"
    echo ""
fi

echo "========================================================================"

exit $EXIT_CODE
