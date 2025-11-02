#!/bin/bash
# 品質保証: 7つの品質ゲート完全検証スクリプト
#
# 使用方法:
#   ./dev-kit/scripts/qa/full.sh <spec-name>
#
# 例:
#   ./dev-kit/scripts/qa/full.sh user-authentication

set -e

PROJECT_ROOT="$(cd "$(dirname "${BASH_SOURCE[0]}")/../../.." && pwd)"
cd "$PROJECT_ROOT"

# 色定義
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
CYAN='\033[0;36m'
NC='\033[0m' # No Color

SPEC_NAME="${1:-}"

if [ -z "$SPEC_NAME" ]; then
    echo -e "${RED}❌ ERROR: spec-name is required${NC}"
    echo ""
    echo "Usage: ./dev-kit/scripts/qa/full.sh <spec-name>"
    echo "Example: ./dev-kit/scripts/qa/full.sh user-authentication"
    exit 1
fi

echo ""
echo "========================================================================"
echo -e "${CYAN}🔍 Quality Assurance: Full Verification (7 Gates)${NC}"
echo "========================================================================"
echo -e "Spec: ${YELLOW}${SPEC_NAME}${NC}"
echo ""

TOTAL_GATES=7
PASSED_GATES=0
FAILED_GATES=()

# ========================================================================
# Gate 1: フロントエンド品質
# ========================================================================
echo -e "${BLUE}[1/7] Gate 1: Frontend Quality${NC}"
echo "------------------------------------------------------------------------"
if npm run validate:frontend "$SPEC_NAME"; then
    echo -e "${GREEN}✅ Gate 1: PASSED${NC}"
    ((PASSED_GATES++))
else
    echo -e "${RED}❌ Gate 1: FAILED${NC}"
    FAILED_GATES+=("Gate 1: Frontend Quality")
fi
echo ""

# ========================================================================
# Gate 2: バックエンド品質
# ========================================================================
echo -e "${BLUE}[2/7] Gate 2: Backend Quality${NC}"
echo "------------------------------------------------------------------------"
if npm run validate:backend "$SPEC_NAME"; then
    echo -e "${GREEN}✅ Gate 2: PASSED${NC}"
    ((PASSED_GATES++))
else
    echo -e "${RED}❌ Gate 2: FAILED${NC}"
    FAILED_GATES+=("Gate 2: Backend Quality")
fi
echo ""

# ========================================================================
# Gate 3: バックエンド→ブラウザ統合
# ========================================================================
echo -e "${BLUE}[3/7] Gate 3: Backend-to-Browser Integration${NC}"
echo "------------------------------------------------------------------------"
if npm run test:backend-e2e; then
    echo -e "${GREEN}✅ Gate 3: PASSED${NC}"
    ((PASSED_GATES++))
else
    echo -e "${RED}❌ Gate 3: FAILED${NC}"
    FAILED_GATES+=("Gate 3: Backend-to-Browser Integration")
fi
echo ""

# ========================================================================
# Gate 4: PHPUnit完全実行
# ========================================================================
echo -e "${BLUE}[4/7] Gate 4: PHPUnit Tests (100% pass required)${NC}"
echo "------------------------------------------------------------------------"
if ./vendor/bin/sail artisan test; then
    echo -e "${GREEN}✅ Gate 4: PASSED${NC}"
    ((PASSED_GATES++))
else
    echo -e "${RED}❌ Gate 4: FAILED${NC}"
    FAILED_GATES+=("Gate 4: PHPUnit Tests")
fi
echo ""

# ========================================================================
# Gate 5: E2E統合テスト
# ========================================================================
echo -e "${BLUE}[5/7] Gate 5: E2E Integration Tests${NC}"
echo "------------------------------------------------------------------------"
if npm run test:e2e; then
    echo -e "${GREEN}✅ Gate 5: PASSED${NC}"
    ((PASSED_GATES++))
else
    echo -e "${RED}❌ Gate 5: FAILED${NC}"
    FAILED_GATES+=("Gate 5: E2E Integration Tests")
fi
echo ""

# ========================================================================
# Gate 6: デザイン整合性
# ========================================================================
echo -e "${BLUE}[6/7] Gate 6: Design Consistency (design.md validation)${NC}"
echo "------------------------------------------------------------------------"
if npm run validate "$SPEC_NAME"; then
    echo -e "${GREEN}✅ Gate 6: PASSED${NC}"
    ((PASSED_GATES++))
else
    echo -e "${RED}❌ Gate 6: FAILED${NC}"
    FAILED_GATES+=("Gate 6: Design Consistency")
fi
echo ""

# ========================================================================
# Gate 7: 環境・依存関係・構文
# ========================================================================
echo -e "${BLUE}[7/7] Gate 7: Environment, Dependencies, and Syntax${NC}"
echo "------------------------------------------------------------------------"
GATE7_PASS=true

echo "  [7-1] Environment check..."
if ! npm run validate:env > /dev/null 2>&1; then
    echo -e "  ${RED}❌ Environment check failed${NC}"
    GATE7_PASS=false
fi

echo "  [7-2] Dependencies check..."
if ! npm run validate:deps > /dev/null 2>&1; then
    echo -e "  ${RED}❌ Dependencies check failed${NC}"
    GATE7_PASS=false
fi

echo "  [7-3] Syntax check..."
if ! npm run validate:syntax > /dev/null 2>&1; then
    echo -e "  ${RED}❌ Syntax check failed${NC}"
    GATE7_PASS=false
fi

if [ "$GATE7_PASS" = true ]; then
    echo -e "${GREEN}✅ Gate 7: PASSED${NC}"
    ((PASSED_GATES++))
else
    echo -e "${RED}❌ Gate 7: FAILED${NC}"
    FAILED_GATES+=("Gate 7: Environment/Dependencies/Syntax")
fi
echo ""

# ========================================================================
# 最終結果
# ========================================================================
echo "========================================================================"
echo -e "${CYAN}📊 Quality Assurance Results${NC}"
echo "========================================================================"
echo ""
echo -e "Spec: ${YELLOW}${SPEC_NAME}${NC}"
echo -e "Total Gates: ${TOTAL_GATES}"
echo -e "Passed: ${GREEN}${PASSED_GATES}${NC}"
echo -e "Failed: ${RED}$((TOTAL_GATES - PASSED_GATES))${NC}"
echo ""

if [ ${#FAILED_GATES[@]} -gt 0 ]; then
    echo -e "${RED}❌ FAILED GATES:${NC}"
    for gate in "${FAILED_GATES[@]}"; do
        echo -e "  - ${gate}"
    done
    echo ""
    echo -e "${RED}🚫 RELEASE BLOCKED${NC}"
    echo ""
    echo "Action required: Fix failed gates and re-run validation"
    exit 1
else
    echo -e "${GREEN}✅ ALL GATES PASSED${NC}"
    echo ""
    echo -e "${GREEN}🎉 RELEASE APPROVED${NC}"
    echo ""
    echo "Ready for production deployment!"
    exit 0
fi
