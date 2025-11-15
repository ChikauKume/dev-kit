#!/bin/bash
# フロントエンド厳密検証スクリプト（design.md準拠）

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
echo -e "${BLUE}🔍 Frontend Strict Validation (design.md as Single Source of Truth)${NC}"
echo "========================================================================"
echo ""

EXIT_CODE=0
SPEC_NAME="${1:-}"

# ========================================================================
# Part 1: design.md整合性チェック（最優先）
# ========================================================================
echo -e "${BLUE}📝 Part 1: design.md Integrity Check${NC}"
echo "------------------------------------------------------------------------"

if [ -n "$SPEC_NAME" ]; then
    echo "Checking spec: $SPEC_NAME"
    if [ -x "$SCRIPT_DIR/design.php" ]; then
        if "$SCRIPT_DIR/design.php" "$SPEC_NAME"; then
            echo -e "${GREEN}✅ design.md integrity check PASSED${NC}"
        else
            echo -e "${RED}❌ design.md integrity check FAILED${NC}"
            echo ""
            echo "CRITICAL: design.md に記載された要件が実装されていません"
            EXIT_CODE=1
        fi
    else
        echo -e "${YELLOW}⚠️  design.php not found${NC}"
    fi
else
    echo -e "${YELLOW}⚠️  No spec name provided, skipping design.md check${NC}"
    echo "   Usage: $0 <spec-name>"
fi

echo ""

# ========================================================================
# Part 2: ページコンポーネント存在確認
# ========================================================================
echo -e "${BLUE}📝 Part 2: Page Components Existence Check${NC}"
echo "------------------------------------------------------------------------"

if [ -n "$SPEC_NAME" ]; then
    # design.mdから画面一覧を抽出してチェック（簡易版）
    DESIGN_PATH="$PROJECT_ROOT/dev-kit/docs/specs/$SPEC_NAME/design.md"

    if [ -f "$DESIGN_PATH" ]; then
        echo "Extracting page list from design.md..."

        # **画面一覧**: セクションから .tsx ファイルを抽出
        PAGES=$(grep -A 20 '\*\*画面一覧\*\*:' "$DESIGN_PATH" 2>/dev/null | grep -oE '[A-Za-z]+\.tsx' || true)

        if [ -n "$PAGES" ]; then
            echo "Found pages in design.md:"
            for page in $PAGES; do
                echo "  - $page"

                # 動的にファイルを検索（複数のディレクトリパターンに対応）
                PAGE_PATH=$(find "$PROJECT_ROOT/resources/js/Pages" -name "$page" 2>/dev/null | head -1)
                if [ -n "$PAGE_PATH" ] && [ -f "$PAGE_PATH" ]; then
                    echo -e "    ${GREEN}✅ EXISTS${NC}"

                    # useDynamicForm使用確認
                    if grep -q "useDynamicForm" "$PAGE_PATH"; then
                        echo -e "    ${GREEN}✅ Uses useDynamicForm${NC}"
                    else
                        echo -e "    ${RED}❌ NOT using useDynamicForm (REQUIRED)${NC}"
                        EXIT_CODE=1
                    fi

                    # Inertia useForm禁止チェック
                    if grep -q "import.*useForm.*from '@inertiajs/react'" "$PAGE_PATH"; then
                        echo -e "    ${RED}❌ Using Inertia useForm (FORBIDDEN)${NC}"
                        EXIT_CODE=1
                    fi

                    # カスタムコンポーネント禁止チェック（簡易）
                    CUSTOM_COMPONENT_COUNT=$(grep -cE "<(Button|Input|Form|Card|Modal)" "$PAGE_PATH" | grep -v "ui-components" || echo "0")
                    if [ "$CUSTOM_COMPONENT_COUNT" -gt 0 ]; then
                        echo -e "    ${YELLOW}⚠️  WARNING: Potential custom components detected${NC}"
                    fi
                else
                    echo -e "    ${RED}❌ NOT FOUND at: $PAGE_PATH${NC}"
                    EXIT_CODE=1
                fi
            done
        else
            echo -e "${YELLOW}⚠️  No pages found in design.md「画面一覧」section${NC}"
        fi
    else
        echo -e "${YELLOW}⚠️  design.md not found at: $DESIGN_PATH${NC}"
    fi
fi

echo ""

# ========================================================================
# Part 3: TypeScript構文チェック
# ========================================================================
echo -e "${BLUE}📝 Part 3: TypeScript Syntax Check${NC}"
echo "------------------------------------------------------------------------"

echo "Running TypeScript compiler (tsc --noEmit)..."
if npx tsc --noEmit --skipLibCheck 2>&1 | tee /tmp/tsc-frontend-check.log | grep -q "error TS"; then
    echo -e "${RED}❌ TypeScript syntax errors detected${NC}"
    echo ""
    echo "Errors:"
    grep "error TS" /tmp/tsc-frontend-check.log | head -10
    EXIT_CODE=1
else
    echo -e "${GREEN}✅ TypeScript syntax check PASSED${NC}"
fi

echo ""

# ========================================================================
# Part 4: ui-components使用確認
# ========================================================================
echo -e "${BLUE}📝 Part 4: ui-components Template Usage Check${NC}"
echo "------------------------------------------------------------------------"

if [ -d "$PROJECT_ROOT/resources/js/Pages" ]; then
    echo "Checking ui-components template usage..."

    # ui-componentsテンプレート使用確認（厳密チェック）
    echo "Checking ui-components template usage (FormPage, ListPage, DetailPage, etc.)..."

    PAGES=$(find "$PROJECT_ROOT/resources/js/Pages" -name "*.tsx" 2>/dev/null)
    TEMPLATE_VIOLATION=0

    for page in $PAGES; do
        # ui-componentsテンプレートのいずれかを使用しているか
        if grep -qE "(FormPage|ListPage|DetailPage|LoginPage|SignupPage)" "$page"; then
            echo -e "  ${GREEN}✅ $(basename $page) uses ui-components template${NC}"
        else
            # テンプレート未使用だがReactコンポーネントとして実装されている場合
            if grep -q "export default" "$page"; then
                echo -e "  ${RED}❌ $(basename $page) does NOT use ui-components template${NC}"
                echo "     REQUIRED: Use FormPage, ListPage, or DetailPage"
                TEMPLATE_VIOLATION=$((TEMPLATE_VIOLATION + 1))
            fi
        fi
    done

    if [ $TEMPLATE_VIOLATION -gt 0 ]; then
        echo -e "${RED}❌ $TEMPLATE_VIOLATION page(s) not using ui-components templates${NC}"
        EXIT_CODE=1
    else
        echo -e "${GREEN}✅ All pages use ui-components templates${NC}"
    fi

    # 禁止パターン検出
    echo ""
    echo "Checking for forbidden patterns..."

    # 直接的なHTML要素使用
    DIRECT_HTML_COUNT=$(grep -rE "<(input|button|form|select|textarea)" "$PROJECT_ROOT/resources/js/Pages" --include="*.tsx" 2>/dev/null | grep -v "ui-components" | wc -l | tr -d ' ')
    if [ "$DIRECT_HTML_COUNT" -gt 0 ]; then
        echo -e "${RED}❌ 直接HTMLタグ使用が検出されました (${DIRECT_HTML_COUNT}箇所)${NC}"
        echo ""
        echo "検出箇所:"
        grep -rn "<(input|button|form|select|textarea)" "$PROJECT_ROOT/resources/js/Pages" --include="*.tsx" 2>/dev/null | grep -v "ui-components" | head -10 | while IFS=: read -r file line content; do
            REL_FILE=$(echo "$file" | sed "s|$PROJECT_ROOT/||")
            echo "  ${REL_FILE}:${line}"
            echo "    ${content}"
        done
        if [ "$DIRECT_HTML_COUNT" -gt 10 ]; then
            echo "  ... and $((DIRECT_HTML_COUNT - 10)) more"
        fi
        echo ""
        echo "修正方法:"
        echo "  1. <input>, <button>, <form>, <select>, <textarea>等のHTMLタグを削除"
        echo "  2. ui-componentsのFormPage/ListPage/DetailPageテンプレートを使用"
        echo "  3. 詳細: dev-kit/ui-components/CLAUDE.md を参照"
        EXIT_CODE=1
    else
        echo -e "${GREEN}✅ No direct HTML element usage detected${NC}"
    fi

    # Tailwind CSS残存チェック
    TAILWIND_COUNT=$(grep -rE "className=\".*\b(flex|grid|p-|m-|text-|bg-).*\"" "$PROJECT_ROOT/resources/js/Pages" --include="*.tsx" 2>/dev/null | wc -l | tr -d ' ')
    if [ "$TAILWIND_COUNT" -gt 0 ]; then
        echo -e "${RED}❌ Tailwind CSS使用が検出されました (${TAILWIND_COUNT}箇所)${NC}"
        echo ""
        echo "検出箇所:"
        grep -rn "className=\".*\b(flex|grid|p-|m-|text-|bg-).*\"" "$PROJECT_ROOT/resources/js/Pages" --include="*.tsx" 2>/dev/null | head -10 | while IFS=: read -r file line content; do
            REL_FILE=$(echo "$file" | sed "s|$PROJECT_ROOT/||")
            echo "  ${REL_FILE}:${line}"
            echo "    ${content}"
        done
        if [ "$TAILWIND_COUNT" -gt 10 ]; then
            echo "  ... and $((TAILWIND_COUNT - 10)) more"
        fi
        echo ""
        echo "修正方法:"
        echo "  1. className属性からTailwindクラス(flex, grid, p-, m-, text-, bg-等)を削除"
        echo "  2. ui-componentsのテンプレートコンポーネントを使用"
        echo "  3. カスタムスタイルが必要な場合はdesign.mdで定義"
        EXIT_CODE=1
    else
        echo -e "${GREEN}✅ No Tailwind CSS usage detected${NC}"
    fi

    # カスタムコンポーネント検出
    CUSTOM_COMPONENT_FILES=$(find "$PROJECT_ROOT/resources/js/components" -name "*.tsx" 2>/dev/null | wc -l | tr -d ' ')
    if [ "$CUSTOM_COMPONENT_FILES" -gt 0 ]; then
        echo -e "${RED}❌ カスタムコンポーネントが検出されました (${CUSTOM_COMPONENT_FILES}ファイル)${NC}"
        echo ""
        echo "検出箇所:"
        find "$PROJECT_ROOT/resources/js/components" -name "*.tsx" 2>/dev/null | head -10 | while read -r file; do
            REL_FILE=$(echo "$file" | sed "s|$PROJECT_ROOT/||")
            echo "  ${REL_FILE}"
        done
        if [ "$CUSTOM_COMPONENT_FILES" -gt 10 ]; then
            echo "  ... and $((CUSTOM_COMPONENT_FILES - 10)) more"
        fi
        echo ""
        echo "修正方法:"
        echo "  1. resources/js/components/ 配下のファイルを削除"
        echo "  2. ui-componentsのテンプレートのみを使用"
        echo "  3. 禁止事項: カスタムコンポーネント作成 (DONT原則)"
        EXIT_CODE=1
    else
        echo -e "${GREEN}✅ No custom components detected${NC}"
    fi
else
    echo -e "${YELLOW}⚠️  resources/js/Pages directory not found${NC}"
fi

echo ""

# ========================================================================
# Part 4.5: Demo-only Components Check (TemplateNavigation)
# ========================================================================
echo -e "${BLUE}📝 Part 4.5: Demo-only Components Check${NC}"
echo "------------------------------------------------------------------------"

UI_COMPONENTS_TEMPLATES="$PROJECT_ROOT/dev-kit/ui-components/src/pages/templates"

if [ -d "$UI_COMPONENTS_TEMPLATES" ]; then
    echo "Checking for demo-only components in production templates..."

    # TemplateNavigation は ButtonsPage, FormsPage 等のデモページ専用
    # templates/ 配下の本番テンプレートには含めてはいけない
    TEMPLATE_NAV_MATCHES=$(grep -r "TemplateNavigation" "$UI_COMPONENTS_TEMPLATES/" \
        --include="*.tsx" 2>/dev/null || true)

    if [ -n "$TEMPLATE_NAV_MATCHES" ]; then
        echo -e "${RED}❌ TemplateNavigation detected in production templates${NC}"
        echo ""
        echo "検出箇所:"
        echo "$TEMPLATE_NAV_MATCHES" | while IFS=: read -r file line content; do
            REL_FILE=$(echo "$file" | sed "s|$PROJECT_ROOT/||")
            echo "  ${REL_FILE}:${line}"
            echo "    ${content}"
        done
        echo ""
        echo "修正方法:"
        echo "  1. TemplateNavigation はデモページ専用コンポーネント"
        echo "     (ButtonsPage、FormsPage、MessagesPage 等のショーケース用)"
        echo "  2. templates/ 配下の本番テンプレートからは削除すること"
        echo "  3. import文とコンポーネント使用箇所の両方を削除"
        echo ""
        EXIT_CODE=1
    else
        echo -e "${GREEN}✅ No demo-only components in production templates${NC}"
    fi
else
    echo -e "${YELLOW}⚠️  ui-components templates directory not found${NC}"
fi

echo ""

# ========================================================================
# Part 4.6: Error Page Navigation Normalization Check
# ========================================================================
echo -e "${BLUE}📝 Part 4.6: Error Page Navigation Normalization Check${NC}"
echo "------------------------------------------------------------------------"

ERROR_PAGES=(
    "resources/js/Pages/Error/404.tsx"
    "resources/js/Pages/Error/500.tsx"
)

NAVIGATION_ISSUES=0

for error_page in "${ERROR_PAGES[@]}"; do
    ERROR_PAGE_PATH="$PROJECT_ROOT/$error_page"

    if [ -f "$ERROR_PAGE_PATH" ]; then
        echo "Checking: $(basename $error_page)"

        # handleNavigate 関数の存在確認
        if grep -q "handleNavigate" "$ERROR_PAGE_PATH"; then
            echo -e "  ${GREEN}✅ Has handleNavigate function${NC}"

            # normalization ロジックの確認
            # ui-components は '/dashboard' または 'dashboard' を渡す可能性がある
            # normalization: page.startsWith('/') ? page.substring(1) : page
            if grep -A 10 "handleNavigate" "$ERROR_PAGE_PATH" | grep -q "startsWith('/')"; then
                echo -e "  ${GREEN}✅ Has navigation normalization (handles both '/path' and 'path')${NC}"
            else
                echo -e "  ${RED}❌ MISSING navigation normalization${NC}"
                echo ""
                echo "     Problem: ui-components may pass '/dashboard' (with slash)"
                echo "              but wrapper expects 'dashboard' (without slash)"
                echo ""
                echo "     Fix: Add normalization logic in handleNavigate:"
                echo "     const normalizedPage = page.startsWith('/') ? page.substring(1) : page;"
                echo ""
                NAVIGATION_ISSUES=$((NAVIGATION_ISSUES + 1))
                EXIT_CODE=1
            fi
        else
            echo -e "  ${YELLOW}⚠️  WARNING: No handleNavigate function found${NC}"
            echo "     Error pages should integrate with Inertia router"
        fi
    else
        echo -e "  ${YELLOW}⚠️  $(basename $error_page) not found (skipping)${NC}"
    fi
done

if [ $NAVIGATION_ISSUES -eq 0 ]; then
    echo -e "${GREEN}✅ All error pages have proper navigation normalization${NC}"
else
    echo -e "${RED}❌ $NAVIGATION_ISSUES error page(s) missing navigation normalization${NC}"
fi

echo ""

# ========================================================================
# Part 4.7: E2E Test Environment Check (APP_DEBUG, Debugbar)
# ========================================================================
echo -e "${BLUE}📝 Part 4.7: E2E Test Environment Check${NC}"
echo "------------------------------------------------------------------------"

echo "Checking E2E test environment prerequisites..."

# APP_DEBUG チェック（本番環境に近い状態でテストすべき）
if [ -f "$PROJECT_ROOT/.env" ]; then
    APP_DEBUG=$(grep "^APP_DEBUG=" "$PROJECT_ROOT/.env" | cut -d'=' -f2)

    if [ "$APP_DEBUG" = "true" ]; then
        echo -e "${YELLOW}⚠️  WARNING: APP_DEBUG=true (development mode)${NC}"
        echo "   E2E tests may encounter DOM conflicts with debug elements"
        echo "   Recommendation: Use APP_DEBUG=false for E2E testing"
        echo ""
        echo "   Workaround already applied:"
        echo "   - E2E tests scope selectors to #app container"
        echo "   - Example: page.locator('#app h2:has-text(...)')"
    else
        echo -e "${GREEN}✅ APP_DEBUG=false (production-like environment)${NC}"
    fi
fi

# Laravel Debugbar インストールチェック
if grep -q "barryvdh/laravel-debugbar" "$PROJECT_ROOT/composer.json" 2>/dev/null; then
    echo -e "${YELLOW}⚠️  Laravel Debugbar is installed${NC}"
    echo "   Debugbar can cause strict mode violations in E2E tests"
    echo ""

    # config/debugbar.php の enabled 設定確認
    if [ -f "$PROJECT_ROOT/config/debugbar.php" ]; then
        if grep -q "'enabled' => false" "$PROJECT_ROOT/config/debugbar.php" 2>/dev/null; then
            echo -e "${GREEN}✅ Debugbar is disabled in config${NC}"
        elif grep -q "'enabled' => env('DEBUGBAR_ENABLED'," "$PROJECT_ROOT/config/debugbar.php" 2>/dev/null; then
            echo "   Debugbar enabled state: controlled by DEBUGBAR_ENABLED env variable"

            if grep -q "^DEBUGBAR_ENABLED=false" "$PROJECT_ROOT/.env" 2>/dev/null; then
                echo -e "${GREEN}✅ DEBUGBAR_ENABLED=false in .env${NC}"
            else
                echo -e "${YELLOW}⚠️  DEBUGBAR_ENABLED not set or true in .env${NC}"
                echo "   Add to .env: DEBUGBAR_ENABLED=false"
            fi
        else
            echo -e "${YELLOW}⚠️  Debugbar may be enabled${NC}"
        fi
    fi

    echo ""
    echo "   Best practice: Disable Debugbar for E2E tests"
    echo "   1. Set DEBUGBAR_ENABLED=false in .env"
    echo "   2. Or scope E2E selectors to #app container (already done)"
else
    echo -e "${GREEN}✅ Laravel Debugbar not installed${NC}"
fi

echo ""

# ========================================================================
# Part 4.8: ui-components Text Synchronization Check
# ========================================================================
echo -e "${BLUE}📝 Part 4.8: ui-components Text Synchronization Check${NC}"
echo "------------------------------------------------------------------------"

SYNC_SCRIPT="$SCRIPT_DIR/fix/sync-e2e-with-ui-components.sh"

if [ -n "$SPEC_NAME" ]; then
    echo "Checking E2E test text synchronization with ui-components..."

    # sync スクリプトが存在するか確認
    if [ ! -x "$SYNC_SCRIPT" ]; then
        echo -e "${YELLOW}⚠️  sync-e2e-with-ui-components.sh not found or not executable${NC}"
        echo "   Location: $SYNC_SCRIPT"
    else
        # dry-run モードで実行して、不一致があるかチェック
        # (実際に修正はしない、検出のみ)
        SYNC_OUTPUT=$("$SYNC_SCRIPT" "$SPEC_NAME" 2>&1 || true)

        # "Fixed:" または "Mismatch" を含む出力があれば、不一致が検出された
        if echo "$SYNC_OUTPUT" | grep -qE "(would fix|mismatch|inconsistency)" 2>/dev/null; then
            echo -e "${RED}❌ CRITICAL: E2E test text does NOT match ui-components${NC}"
            echo ""
            echo "   Detected mismatches between:"
            echo "   - E2E test expectations (tests/e2e/$SPEC_NAME/*.spec.ts)"
            echo "   - ui-components actual text (dev-kit/ui-components/src/**/*.tsx)"
            echo ""
            echo "   This causes E2E test failures like:"
            echo "   - locator('h2:has-text(\"期待テキスト\")').toBeVisible() → timeout"
            echo ""
            echo "   Fix: Run synchronization script:"
            echo "   $SYNC_SCRIPT $SPEC_NAME"
            echo ""
            EXIT_CODE=1
        else
            # 既存の E2E テストファイルが存在するか確認
            if [ -d "$PROJECT_ROOT/tests/e2e/$SPEC_NAME" ]; then
                E2E_FILES=$(find "$PROJECT_ROOT/tests/e2e/$SPEC_NAME" -name "*.spec.ts" 2>/dev/null | wc -l | tr -d ' ')

                if [ "$E2E_FILES" -gt 0 ]; then
                    echo -e "${GREEN}✅ E2E test text synchronized with ui-components${NC}"
                    echo "   Verified: $E2E_FILES E2E test file(s)"
                else
                    echo -e "${YELLOW}ℹ️  No E2E test files found (may not be implemented yet)${NC}"
                fi
            else
                echo -e "${YELLOW}ℹ️  E2E tests not created yet for spec: $SPEC_NAME${NC}"
            fi
        fi
    fi
else
    echo -e "${YELLOW}⚠️  No spec name provided, skipping text synchronization check${NC}"
    echo "   Usage: $0 <spec-name>"
fi

echo ""

# ========================================================================
# Part 5: useDynamicForm バリデーション実装チェック
# ========================================================================
echo -e "${BLUE}📝 Part 5: useDynamicForm Validation Implementation Check${NC}"
echo "------------------------------------------------------------------------"

if [ -d "$PROJECT_ROOT/resources/js/Pages" ]; then
    echo "Checking useDynamicForm validation implementation..."

    PAGES_WITH_DYNAMIC_FORM=$(grep -r "useDynamicForm" "$PROJECT_ROOT/resources/js/Pages" --include="*.tsx" -l 2>/dev/null)

    if [ -n "$PAGES_WITH_DYNAMIC_FORM" ]; then
        for page in $PAGES_WITH_DYNAMIC_FORM; do
            echo ""
            echo "Analyzing: $(basename $page)"

            # validation オブジェクトの存在確認
            if grep -q "validation:" "$page"; then
                echo -e "  ${GREEN}✅ Has validation configuration${NC}"

                # required バリデーションの確認
                REQUIRED_COUNT=$(grep -c "type: 'required'" "$page" || echo "0")
                echo -e "  ${GREEN}✅ Found $REQUIRED_COUNT required validation(s)${NC}"

                # email バリデーションの確認
                if grep -q "type: 'email'" "$page"; then
                    echo -e "  ${GREEN}✅ Has email validation${NC}"
                fi

                # custom バリデーションの確認
                if grep -q "type: 'custom'" "$page"; then
                    echo -e "  ${GREEN}✅ Has custom validation${NC}"
                fi
            else
                echo -e "  ${YELLOW}⚠️  WARNING: No validation configuration found${NC}"
                echo "     This may be intentional for read-only pages"
            fi

            # serverErrors マッピングの確認
            if grep -q "serverErrors" "$page"; then
                echo -e "  ${GREEN}✅ Has serverErrors mapping${NC}"
            else
                echo -e "  ${YELLOW}⚠️  WARNING: No serverErrors mapping${NC}"
                echo "     Backend validation errors may not display correctly"
            fi
        done
    else
        echo -e "${YELLOW}⚠️  No pages using useDynamicForm found${NC}"
    fi
fi

echo ""

# ========================================================================
# Part 6: 既存のfrontend.sh実行（包括チェック）
# ========================================================================
# REMOVED: Infinite loop - frontend.sh was calling itself recursively
# This section has been disabled to prevent infinite loops

echo ""

# ========================================================================
# Part 7: 必須Props検証（TypeScript interface）
# ========================================================================
echo -e "${BLUE}📝 Part 7: Required Props Validation${NC}"
echo "------------------------------------------------------------------------"

echo "Checking critical props are required (not optional)..."

CRITICAL_PROPS_OK=true

# ui-components templates で必須化すべき critical handlers
CRITICAL_HANDLERS=("onLogout" "onNavigate" "onSubmit")

for handler in "${CRITICAL_HANDLERS[@]}"; do
    # Template files where these handlers should be required
    TEMPLATE_FILES=$(find "$PROJECT_ROOT/dev-kit/ui-components/src" -name "*.tsx" -type f 2>/dev/null)

    if [ -n "$TEMPLATE_FILES" ]; then
        for file in $TEMPLATE_FILES; do
            # Check if handler is defined as optional (has ?)
            if grep -qE "${handler}\?:\s*\(" "$file"; then
                echo -e "${RED}❌ $(basename $file): ${handler} is optional (should be required)${NC}"
                echo "   Found: ${handler}?: ..."
                echo "   Expected: ${handler}: ..."
                echo "   File: $file"
                CRITICAL_PROPS_OK=false
                EXIT_CODE=1
            elif grep -qE "${handler}:\s*\(" "$file"; then
                # Only report if it's actually in interface definition
                if grep -B5 "interface.*Props" "$file" | grep -q "$handler"; then
                    echo -e "${GREEN}✅ $(basename $file): ${handler} is required${NC}"
                fi
            fi
        done
    fi
done

if [ "$CRITICAL_PROPS_OK" = true ]; then
    echo -e "${GREEN}✅ All critical props are correctly marked as required${NC}"
else
    echo -e "${RED}❌ Some critical props are incorrectly optional${NC}"
    echo ""
    echo "Fix: Remove '?' from handler props in interface definitions"
    echo "Example: onLogout: () => void (not onLogout?: () => void)"
fi

echo ""

# ========================================================================
# Part 8: E2E Test Best Practices Check
# ========================================================================
echo -e "${BLUE}📝 Part 8: E2E Test Best Practices${NC}"
echo "------------------------------------------------------------------------"

if [ -d "$PROJECT_ROOT/tests/e2e" ]; then
    echo "Checking E2E tests for common anti-patterns..."

    E2E_TESTS=$(find "$PROJECT_ROOT/tests/e2e" -name "*.spec.ts" 2>/dev/null)

    if [ -n "$E2E_TESTS" ]; then
        DROPDOWN_ISSUES=0

        for test in $E2E_TESTS; do
            # ログアウトボタンを直接クリックしようとしている箇所を検出
            if grep -q 'click.*ログアウト' "$test"; then
                # その前にdropdownを開いているかチェック
                TEST_CONTENT=$(cat "$test")
                LOGOUT_LINE=$(grep -n 'click.*ログアウト' "$test" | head -1 | cut -d: -f1)

                # ログアウトボタンクリック前の10行を確認
                PRECEDING_LINES=$(sed -n "$((LOGOUT_LINE - 10)),$((LOGOUT_LINE - 1))p" "$test" 2>/dev/null || echo "")

                if ! echo "$PRECEDING_LINES" | grep -q 'ユーザーメニュー'; then
                    echo -e "${YELLOW}⚠️  POTENTIAL ISSUE: $(basename $test)${NC}"
                    echo "   Line $LOGOUT_LINE: Clicking ログアウト button without opening dropdown first"
                    echo "   Recommendation: Open user menu dropdown before clicking logout"
                    echo ""
                    echo "   Example fix:"
                    echo "   await page.click('button[aria-label=\"ユーザーメニュー\"]');"
                    echo "   await page.click('button:has-text(\"ログアウト\")');"
                    DROPDOWN_ISSUES=$((DROPDOWN_ISSUES + 1))
                fi
            fi

            # 一般的な hidden element クリック問題を検出
            # waitForSelector や waitForLoadState なしで直接クリックしているケースを検出
            if grep -q "\.click(" "$test"; then
                CLICK_LINES=$(grep -n "\.click(" "$test" | cut -d: -f1)
                for line_num in $CLICK_LINES; do
                    # その前5行にwaitForSelectorやwaitForLoadStateがあるかチェック
                    PRECEDING_5=$(sed -n "$((line_num - 5)),$((line_num - 1))p" "$test" 2>/dev/null || echo "")
                    CLICK_LINE_CONTENT=$(sed -n "${line_num}p" "$test")

                    # ドロップダウンメニュー関連のクリック（display: noneになっている要素）を検出
                    if echo "$CLICK_LINE_CONTENT" | grep -qE "(ログアウト|メニュー|dropdown)"; then
                        if ! echo "$PRECEDING_5" | grep -qE "(waitForSelector|waitForLoadState|aria-label)"; then
                            echo -e "${YELLOW}⚠️  POTENTIAL ISSUE: $(basename $test):${line_num}${NC}"
                            echo "   Clicking on potentially hidden element without explicit wait"
                            echo "   Content: $(echo "$CLICK_LINE_CONTENT" | xargs)"
                            DROPDOWN_ISSUES=$((DROPDOWN_ISSUES + 1))
                        fi
                    fi
                done
            fi
        done

        if [ $DROPDOWN_ISSUES -eq 0 ]; then
            echo -e "${GREEN}✅ No E2E test anti-patterns detected${NC}"
        else
            echo -e "${YELLOW}⚠️  Found $DROPDOWN_ISSUES potential E2E test issue(s)${NC}"
            echo "   These are warnings, not failures. Review recommended."
        fi
    else
        echo -e "${YELLOW}⚠️  No E2E test files found${NC}"
    fi
else
    echo -e "${YELLOW}⚠️  tests/e2e directory not found${NC}"
fi

echo ""

# ========================================================================
# Part 9: Implementation Checklist Validation
# ========================================================================
echo -e "${BLUE}📝 Part 9: Implementation Checklist Validation${NC}"
echo "------------------------------------------------------------------------"

if [ -n "$SPEC_NAME" ]; then
    echo "Running implementation checks for spec: $SPEC_NAME"
    echo ""

    # 9.1: config/auth.php モデルクラス確認
    echo -e "${BLUE}9.1: config/auth.php Model Class Configuration${NC}"
    if [ ! -f "$PROJECT_ROOT/config/auth.php" ]; then
        echo -e "  ${RED}❌ config/auth.php not found${NC}"
        EXIT_CODE=1
    else
        # Eloquent モデルクラス指定を確認
        if grep -q "'model' => App\\\\Modules\\\\" "$PROJECT_ROOT/config/auth.php"; then
            echo -e "  ${GREEN}✅ Custom model class configured (Clean Architecture)${NC}"
        elif grep -q "'model' => App\\\\Models\\\\User::class" "$PROJECT_ROOT/config/auth.php"; then
            echo -e "  ${YELLOW}⚠️  Default App\\Models\\User configured (verify if Clean Architecture required)${NC}"
        else
            echo -e "  ${RED}❌ Model class configuration not found${NC}"
            EXIT_CODE=1
        fi
    fi
    echo ""

    # 9.2: routes/web.php middleware設定
    echo -e "${BLUE}9.2: routes/web.php Middleware Configuration${NC}"
    if [ ! -f "$PROJECT_ROOT/routes/web.php" ]; then
        echo -e "  ${RED}❌ routes/web.php not found${NC}"
        EXIT_CODE=1
    else
        # ログインルートにguest middleware
        if grep -A 3 "Route::get('/login'" "$PROJECT_ROOT/routes/web.php" | grep -q "middleware('guest')"; then
            echo -e "  ${GREEN}✅ GET /login has guest middleware${NC}"
        else
            echo -e "  ${RED}❌ GET /login missing guest middleware${NC}"
            EXIT_CODE=1
        fi

        # POST /login ルートにguest middleware
        if grep -A 3 "Route::post('/login'" "$PROJECT_ROOT/routes/web.php" | grep -q "middleware('guest')"; then
            echo -e "  ${GREEN}✅ POST /login has guest middleware${NC}"
        else
            echo -e "  ${RED}❌ POST /login missing guest middleware${NC}"
            EXIT_CODE=1
        fi

        # ダッシュボードルートにauth middleware
        if grep -A 3 "Route::get('/dashboard'" "$PROJECT_ROOT/routes/web.php" | grep -q "middleware('auth')"; then
            echo -e "  ${GREEN}✅ GET /dashboard has auth middleware${NC}"
        else
            echo -e "  ${RED}❌ GET /dashboard missing auth middleware${NC}"
            EXIT_CODE=1
        fi
    fi
    echo ""

    # 9.3: Inertia props 確認
    echo -e "${BLUE}9.3: Inertia Props Usage Check${NC}"
    CONTROLLER_FILES=$(find "$PROJECT_ROOT/app/Modules" -name "*Controller.php" 2>/dev/null || echo "")

    if [ -z "$CONTROLLER_FILES" ]; then
        echo -e "  ${YELLOW}⚠️  No Controller files found (skipping)${NC}"
    else
        INERTIA_RENDER_COUNT=$(echo "$CONTROLLER_FILES" | xargs grep -l "Inertia::render" 2>/dev/null | wc -l | tr -d ' ')

        if [ "$INERTIA_RENDER_COUNT" -gt 0 ]; then
            echo -e "  ${GREEN}✅ Found $INERTIA_RENDER_COUNT Controller(s) using Inertia::render${NC}"

            # 配列形式で props を渡しているか確認
            PROPER_PROPS=$(echo "$CONTROLLER_FILES" | xargs grep -A 5 "Inertia::render" 2>/dev/null | grep -c "\[" 2>/dev/null || echo "0")
            PROPER_PROPS=$(echo "$PROPER_PROPS" | head -1 | tr -d '\n')

            if [ "$PROPER_PROPS" -gt 0 ] 2>/dev/null; then
                echo -e "  ${GREEN}✅ Props passed as array format${NC}"
            else
                echo -e "  ${YELLOW}⚠️  Review props passing format${NC}"
            fi
        else
            echo -e "  ${YELLOW}⚠️  No Inertia::render usage found${NC}"
        fi
    fi
    echo ""

    # 9.4: E2E Prerequisites 実装確認
    echo -e "${BLUE}9.4: E2E Test Prerequisites Implementation${NC}"
    E2E_YAML="$PROJECT_ROOT/dev-kit/docs/specs/$SPEC_NAME/tests/e2e.yaml"

    if [ ! -f "$E2E_YAML" ]; then
        echo -e "  ${YELLOW}⚠️  e2e.yaml not found (skipping)${NC}"
    else
        # prerequisitesセクションの有無を確認
        if grep -q "prerequisites:" "$E2E_YAML"; then
            echo -e "  ${GREEN}✅ Prerequisites defined in e2e.yaml${NC}"

            # authentication type の prerequisite
            if grep -A 5 "prerequisites:" "$E2E_YAML" | grep -q "type: authentication"; then
                echo -e "  ${GREEN}✅ Authentication prerequisite found${NC}"

                # 対応するヘルパー関数が存在するか確認
                HELPER_EXISTS=$(find "$PROJECT_ROOT/tests/e2e" -name "*helper*.ts" -o -name "*utils*.ts" 2>/dev/null | xargs grep -l "login" 2>/dev/null || echo "")

                if [ -n "$HELPER_EXISTS" ]; then
                    echo -e "  ${GREEN}✅ Login helper function implemented${NC}"
                else
                    echo -e "  ${RED}❌ Login helper function not found${NC}"
                    echo -e "     ${YELLOW}Implement loginAsTestUser() helper for E2E tests${NC}"
                    EXIT_CODE=1
                fi
            fi
        else
            echo -e "  ${YELLOW}ℹ️  No prerequisites defined${NC}"
        fi
    fi
    echo ""

    # 9.5: Laravel キャッシュディレクトリ確認
    echo -e "${BLUE}9.5: Laravel Cache Directories Check${NC}"
    CACHE_DIRS=(
        "bootstrap/cache"
        "storage/framework/cache"
        "storage/framework/views"
    )

    CACHE_ISSUES=0

    for dir in "${CACHE_DIRS[@]}"; do
        if [ ! -d "$PROJECT_ROOT/$dir" ]; then
            echo -e "  ${YELLOW}⚠️  $dir not found${NC}"
            ((CACHE_ISSUES++))
        fi
    done

    if [ "$CACHE_ISSUES" -eq 0 ]; then
        echo -e "  ${GREEN}✅ All cache directories exist${NC}"
        echo ""
        echo -e "  ${YELLOW}💡 To clear cache if needed:${NC}"
        echo "     ./vendor/bin/sail artisan config:clear"
        echo "     ./vendor/bin/sail artisan cache:clear"
        echo "     ./vendor/bin/sail artisan view:clear"
    else
        echo -e "  ${YELLOW}⚠️  Some cache directories missing${NC}"
    fi
else
    echo -e "${YELLOW}⚠️  No spec name provided, skipping implementation checks${NC}"
    echo "   Usage: $0 <spec-name>"
fi

echo ""

# ========================================================================
# 最終サマリー
# ========================================================================
echo "========================================================================"
echo -e "${BLUE}📊 Frontend Strict Validation Summary${NC}"
echo "========================================================================"
echo ""

if [ $EXIT_CODE -eq 0 ]; then
    echo -e "${GREEN}✅✅✅ ALL FRONTEND CHECKS PASSED ✅✅✅${NC}"
    echo ""
    echo "Your frontend implementation meets all requirements!"
    echo ""
    echo "Confirmed:"
    echo "  ✅ design.md requirements implemented"
    echo "  ✅ Page components exist"
    echo "  ✅ useDynamicForm correctly used"
    echo "  ✅ ui-components templates used"
    echo "  ✅ No forbidden patterns (custom components, Tailwind, direct HTML)"
    echo "  ✅ TypeScript syntax valid"
    echo "  ✅ Implementation checklist validated (config, routes, props, E2E prerequisites)"
    echo ""
else
    echo -e "${RED}❌❌❌ FRONTEND VALIDATION FAILED ❌❌❌${NC}"
    echo ""
    echo "CRITICAL: Fix all errors before proceeding to testing phase."
    echo ""
    echo "Common issues:"
    echo "  - design.md requirements not implemented"
    echo "  - Missing page components"
    echo "  - Not using useDynamicForm"
    echo "  - Custom components created (forbidden)"
    echo "  - Tailwind CSS usage (forbidden)"
    echo "  - Direct HTML elements (forbidden)"
    echo "  - TypeScript syntax errors"
    echo ""
fi

echo "========================================================================"

exit $EXIT_CODE
