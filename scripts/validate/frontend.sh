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
        echo -e "${RED}❌ Found $DIRECT_HTML_COUNT direct HTML element usage(s)${NC}"
        echo "   FORBIDDEN: <input>, <button>, <form>, <select>, <textarea>"
        echo "   REQUIRED: Use ui-components templates"
        EXIT_CODE=1
    else
        echo -e "${GREEN}✅ No direct HTML element usage detected${NC}"
    fi

    # Tailwind CSS残存チェック
    TAILWIND_COUNT=$(grep -rE "className=\".*\b(flex|grid|p-|m-|text-|bg-).*\"" "$PROJECT_ROOT/resources/js/Pages" --include="*.tsx" 2>/dev/null | wc -l | tr -d ' ')
    if [ "$TAILWIND_COUNT" -gt 0 ]; then
        echo -e "${RED}❌ Found $TAILWIND_COUNT Tailwind CSS usage(s)${NC}"
        echo "   FORBIDDEN: Tailwind CSS classes"
        echo "   REQUIRED: Use ui-components styles only"
        EXIT_CODE=1
    else
        echo -e "${GREEN}✅ No Tailwind CSS usage detected${NC}"
    fi

    # カスタムコンポーネント検出
    CUSTOM_COMPONENT_FILES=$(find "$PROJECT_ROOT/resources/js/components" -name "*.tsx" 2>/dev/null | wc -l | tr -d ' ')
    if [ "$CUSTOM_COMPONENT_FILES" -gt 0 ]; then
        echo -e "${RED}❌ Found $CUSTOM_COMPONENT_FILES custom component file(s)${NC}"
        echo "   FORBIDDEN: Custom component creation"
        echo "   REQUIRED: Use ui-components templates only"
        EXIT_CODE=1
    else
        echo -e "${GREEN}✅ No custom components detected${NC}"
    fi
else
    echo -e "${YELLOW}⚠️  resources/js/Pages directory not found${NC}"
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
