#!/bin/bash
# バックエンド厳密検証スクリプト（design.md準拠）

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
echo -e "${BLUE}🔍 Backend Strict Validation (design.md as Single Source of Truth)${NC}"
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
# Part 2: Clean Architecture 構造チェック
# ========================================================================
echo -e "${BLUE}📝 Part 2: Clean Architecture Structure Check${NC}"
echo "------------------------------------------------------------------------"

if [ -n "$SPEC_NAME" ]; then
    # specに基づいてモジュール名を推測（例: user-authentication → User）
    MODULE_NAME=$(echo "$SPEC_NAME" | sed -E 's/user-([a-z]+)/User/' | sed 's/-//g' | awk '{print toupper(substr($0,1,1)) tolower(substr($0,2))}')

    echo "Checking module: $MODULE_NAME"

    # Domain層の存在確認
    if [ -d "$PROJECT_ROOT/app/Modules/$MODULE_NAME/Domain" ]; then
        echo -e "${GREEN}✅ Domain layer exists${NC}"

        # Entityの存在確認
        ENTITY_COUNT=$(find "$PROJECT_ROOT/app/Modules/$MODULE_NAME/Domain" -name "*Entity.php" -o -name "*.php" | grep -v "Interface" | wc -l | tr -d ' ')
        if [ "$ENTITY_COUNT" -gt 0 ]; then
            echo -e "${GREEN}✅ Found $ENTITY_COUNT Domain entity/entities${NC}"
        else
            echo -e "${RED}❌ No Domain entities found${NC}"
            EXIT_CODE=1
        fi

        # RepositoryInterfaceの存在確認
        REPO_INTERFACE_COUNT=$(find "$PROJECT_ROOT/app/Modules/$MODULE_NAME/Domain" -name "*RepositoryInterface.php" | wc -l | tr -d ' ')
        if [ "$REPO_INTERFACE_COUNT" -gt 0 ]; then
            echo -e "${GREEN}✅ Found $REPO_INTERFACE_COUNT Repository interface(s)${NC}"
        else
            echo -e "${RED}❌ No Repository interfaces found${NC}"
            EXIT_CODE=1
        fi
    else
        echo -e "${RED}❌ Domain layer NOT FOUND: app/Modules/$MODULE_NAME/Domain${NC}"
        EXIT_CODE=1
    fi

    # Application層の存在確認
    if [ -d "$PROJECT_ROOT/app/Modules/$MODULE_NAME/Application" ]; then
        echo -e "${GREEN}✅ Application layer exists${NC}"

        # UseCaseの存在確認
        USECASE_COUNT=$(find "$PROJECT_ROOT/app/Modules/$MODULE_NAME/Application" -name "*UseCase.php" | wc -l | tr -d ' ')
        if [ "$USECASE_COUNT" -gt 0 ]; then
            echo -e "${GREEN}✅ Found $USECASE_COUNT UseCase(s)${NC}"
        else
            echo -e "${RED}❌ No UseCases found${NC}"
            EXIT_CODE=1
        fi
    else
        echo -e "${RED}❌ Application layer NOT FOUND: app/Modules/$MODULE_NAME/Application${NC}"
        EXIT_CODE=1
    fi

    # Infrastructure層の存在確認
    if [ -d "$PROJECT_ROOT/app/Modules/$MODULE_NAME/Infrastructure" ]; then
        echo -e "${GREEN}✅ Infrastructure layer exists${NC}"

        # Repository実装の存在確認
        REPO_IMPL_COUNT=$(find "$PROJECT_ROOT/app/Modules/$MODULE_NAME/Infrastructure" -name "*Repository.php" | grep -v "Interface" | wc -l | tr -d ' ')
        if [ "$REPO_IMPL_COUNT" -gt 0 ]; then
            echo -e "${GREEN}✅ Found $REPO_IMPL_COUNT Repository implementation(s)${NC}"
        else
            echo -e "${RED}❌ No Repository implementations found${NC}"
            EXIT_CODE=1
        fi
    else
        echo -e "${RED}❌ Infrastructure layer NOT FOUND: app/Modules/$MODULE_NAME/Infrastructure${NC}"
        EXIT_CODE=1
    fi

    # Presentation層の存在確認
    if [ -d "$PROJECT_ROOT/app/Modules/$MODULE_NAME/Presentation" ]; then
        echo -e "${GREEN}✅ Presentation layer exists${NC}"

        # Controllerの存在確認
        CONTROLLER_COUNT=$(find "$PROJECT_ROOT/app/Modules/$MODULE_NAME/Presentation/Controllers" -name "*Controller.php" 2>/dev/null | wc -l | tr -d ' ')
        if [ "$CONTROLLER_COUNT" -gt 0 ]; then
            echo -e "${GREEN}✅ Found $CONTROLLER_COUNT Controller(s)${NC}"
        else
            echo -e "${YELLOW}⚠️  No Controllers found${NC}"
        fi

        # FormRequestの存在確認
        FORMREQUEST_COUNT=$(find "$PROJECT_ROOT/app/Modules/$MODULE_NAME/Presentation/Requests" -name "*Request.php" 2>/dev/null | wc -l | tr -d ' ')
        if [ "$FORMREQUEST_COUNT" -gt 0 ]; then
            echo -e "${GREEN}✅ Found $FORMREQUEST_COUNT FormRequest(s)${NC}"
        else
            echo -e "${YELLOW}⚠️  No FormRequests found${NC}"
        fi
    else
        echo -e "${RED}❌ Presentation layer NOT FOUND: app/Modules/$MODULE_NAME/Presentation${NC}"
        EXIT_CODE=1
    fi
fi

echo ""

# ========================================================================
# Part 3: PHP構文チェック
# ========================================================================
echo -e "${BLUE}📝 Part 3: PHP Syntax Check${NC}"
echo "------------------------------------------------------------------------"

if [ -n "$SPEC_NAME" ] && [ -n "$MODULE_NAME" ]; then
    PHP_ERRORS=0

    if [ -d "$PROJECT_ROOT/app/Modules/$MODULE_NAME" ]; then
        echo "Checking PHP syntax in app/Modules/$MODULE_NAME..."

        while IFS= read -r -d '' file; do
            if ! php -l "$file" > /dev/null 2>&1; then
                echo -e "${RED}❌ Syntax error in: $file${NC}"
                php -l "$file"
                PHP_ERRORS=$((PHP_ERRORS + 1))
                EXIT_CODE=1
            fi
        done < <(find "$PROJECT_ROOT/app/Modules/$MODULE_NAME" -name "*.php" -print0 2>/dev/null)

        if [ $PHP_ERRORS -eq 0 ]; then
            echo -e "${GREEN}✅ All PHP files have valid syntax${NC}"
        else
            echo -e "${RED}❌ Found $PHP_ERRORS PHP file(s) with syntax errors${NC}"
        fi
    fi
else
    echo -e "${YELLOW}⚠️  No module specified, skipping module-specific PHP syntax check${NC}"
fi

echo ""

# ========================================================================
# Part 4: FormRequest バリデーションルール厳密チェック
# ========================================================================
echo -e "${BLUE}📝 Part 4: FormRequest Validation Rules Strict Check${NC}"
echo "------------------------------------------------------------------------"

if [ -n "$SPEC_NAME" ] && [ -n "$MODULE_NAME" ]; then
    if [ -d "$PROJECT_ROOT/app/Modules/$MODULE_NAME/Presentation/Requests" ]; then
        echo "Checking FormRequests in app/Modules/$MODULE_NAME/Presentation/Requests..."

        FORMREQUEST_FILES=$(find "$PROJECT_ROOT/app/Modules/$MODULE_NAME/Presentation/Requests" -name "*Request.php" 2>/dev/null)

        if [ -n "$FORMREQUEST_FILES" ]; then
            for file in $FORMREQUEST_FILES; do
                echo ""
                echo "Analyzing: $(basename $file)"

                # rules()メソッドの存在確認
                if ! grep -q "public function rules()" "$file"; then
                    echo -e "${RED}❌ rules() method NOT FOUND in $file${NC}"
                    EXIT_CODE=1
                    continue
                fi

                # バリデーションルールの抽出と分析
                RULES_SECTION=$(sed -n '/public function rules()/,/^    }/p' "$file")

                # emailフィールドにuniqueルールがあるかチェック
                if echo "$RULES_SECTION" | grep -q "'email'"; then
                    if ! echo "$RULES_SECTION" | grep "'email'" | grep -q "unique"; then
                        echo -e "${RED}❌ CRITICAL: 'email' field missing 'unique' rule${NC}"
                        echo "   design.md requires: 重複禁止"
                        EXIT_CODE=1
                    else
                        echo -e "${GREEN}✅ 'email' field has 'unique' rule${NC}"
                    fi
                fi

                # terms_agreed/agreeToTermsにacceptedルールがあるかチェック
                if echo "$RULES_SECTION" | grep -qE "'terms_agreed'|'agreeToTerms'"; then
                    if ! echo "$RULES_SECTION" | grep -E "'terms_agreed'|'agreeToTerms'" | grep -q "accepted"; then
                        echo -e "${RED}❌ CRITICAL: 'terms_agreed/agreeToTerms' field missing 'accepted' rule${NC}"
                        echo "   design.md requires: accepted（利用規約への同意）"
                        EXIT_CODE=1
                    else
                        echo -e "${GREEN}✅ 'terms_agreed/agreeToTerms' field has 'accepted' rule${NC}"
                    fi
                fi

                # password_confirmationにsame:passwordルールがあるかチェック
                if echo "$RULES_SECTION" | grep -q "'password_confirmation'"; then
                    if ! echo "$RULES_SECTION" | grep "'password_confirmation'" | grep -q "same:password"; then
                        echo -e "${RED}❌ CRITICAL: 'password_confirmation' field missing 'same:password' rule${NC}"
                        echo "   design.md requires: passwordと一致"
                        EXIT_CODE=1
                    else
                        echo -e "${GREEN}✅ 'password_confirmation' field has 'same:password' rule${NC}"
                    fi
                fi
            done
        else
            echo -e "${YELLOW}⚠️  No FormRequest files found${NC}"
        fi
    fi
fi

echo ""

# ========================================================================
# Part 5: 既存のbackend.sh実行（包括チェック）
# ========================================================================
echo -e "${BLUE}📝 Part 5: Comprehensive Backend Check (legacy backend.sh)${NC}"
echo "------------------------------------------------------------------------"

if [ -x "$SCRIPT_DIR/backend.sh" ]; then
    echo "Running existing backend.sh for comprehensive checks..."
    if "$SCRIPT_DIR/backend.sh"; then
        echo -e "${GREEN}✅ Comprehensive backend check PASSED${NC}"
    else
        echo -e "${RED}❌ Comprehensive backend check FAILED${NC}"
        EXIT_CODE=1
    fi
else
    echo -e "${YELLOW}⚠️  backend.sh not found or not executable${NC}"
fi

echo ""

# ========================================================================
# 最終サマリー
# ========================================================================
echo "========================================================================"
echo -e "${BLUE}📊 Backend Strict Validation Summary${NC}"
echo "========================================================================"
echo ""

if [ $EXIT_CODE -eq 0 ]; then
    echo -e "${GREEN}✅✅✅ ALL BACKEND CHECKS PASSED ✅✅✅${NC}"
    echo ""
    echo "Your backend implementation meets all requirements!"
    echo ""
else
    echo -e "${RED}❌❌❌ BACKEND VALIDATION FAILED ❌❌❌${NC}"
    echo ""
    echo "CRITICAL: Fix all errors before proceeding to testing phase."
    echo ""
    echo "Common issues:"
    echo "  - design.md requirements not implemented"
    echo "  - Missing validation rules (unique, accepted, same)"
    echo "  - Clean Architecture layers incomplete"
    echo "  - PHP syntax errors"
    echo ""
fi

echo "========================================================================"

exit $EXIT_CODE
