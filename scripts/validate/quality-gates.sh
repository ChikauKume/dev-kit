#!/bin/bash
# 品質ゲート統合チェックスクリプト
# すべての品質ゲートの実行と結果統合

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
echo -e "${BLUE}🚦 Quality Gates Validation${NC}"
echo "========================================================================"
echo ""
echo "Principle: すべての品質ゲート通過"
echo ""

SPEC_NAME="${1:-}"
TOTAL_GATES=0
PASSED_GATES=0
FAILED_GATES=0

# 結果を保存する配列
declare -a GATE_RESULTS

# ========================================================================
# Gate 1: 環境検証
# ========================================================================
echo -e "${BLUE}🔍 Gate 1/7: Environment Validation${NC}"
echo "------------------------------------------------------------------------"

TOTAL_GATES=$((TOTAL_GATES + 1))

if "$SCRIPT_DIR/env.sh" > /dev/null 2>&1; then
    echo -e "${GREEN}✅ Environment validation PASSED${NC}"
    PASSED_GATES=$((PASSED_GATES + 1))
    GATE_RESULTS+=("✅ Gate 1: Environment Validation")
else
    echo -e "${RED}❌ Environment validation FAILED${NC}"
    FAILED_GATES=$((FAILED_GATES + 1))
    GATE_RESULTS+=("❌ Gate 1: Environment Validation")
    echo "   Run: npm run validate:env"
fi

echo ""

# ========================================================================
# Gate 2: 依存関係検証
# ========================================================================
echo -e "${BLUE}🔍 Gate 2/7: Dependencies Validation${NC}"
echo "------------------------------------------------------------------------"

TOTAL_GATES=$((TOTAL_GATES + 1))

if "$SCRIPT_DIR/deps.sh" > /dev/null 2>&1; then
    echo -e "${GREEN}✅ Dependencies validation PASSED${NC}"
    PASSED_GATES=$((PASSED_GATES + 1))
    GATE_RESULTS+=("✅ Gate 2: Dependencies Validation")
else
    echo -e "${RED}❌ Dependencies validation FAILED${NC}"
    FAILED_GATES=$((FAILED_GATES + 1))
    GATE_RESULTS+=("❌ Gate 2: Dependencies Validation")
    echo "   Run: npm run validate:deps"
fi

echo ""

# ========================================================================
# Gate 3: 構文検証
# ========================================================================
echo -e "${BLUE}🔍 Gate 3/7: Syntax Validation${NC}"
echo "------------------------------------------------------------------------"

TOTAL_GATES=$((TOTAL_GATES + 1))

if "$SCRIPT_DIR/syntax.sh" > /dev/null 2>&1; then
    echo -e "${GREEN}✅ Syntax validation PASSED${NC}"
    PASSED_GATES=$((PASSED_GATES + 1))
    GATE_RESULTS+=("✅ Gate 3: Syntax Validation")
else
    echo -e "${RED}❌ Syntax validation FAILED${NC}"
    FAILED_GATES=$((FAILED_GATES + 1))
    GATE_RESULTS+=("❌ Gate 3: Syntax Validation")
    echo "   Run: npm run validate:syntax"
fi

echo ""

# ========================================================================
# Gate 4: フロントエンド品質
# ========================================================================
echo -e "${BLUE}🔍 Gate 4/7: Frontend Quality${NC}"
echo "------------------------------------------------------------------------"

TOTAL_GATES=$((TOTAL_GATES + 1))

if [ -n "$SPEC_NAME" ]; then
    if "$SCRIPT_DIR/frontend.sh" "$SPEC_NAME" > /dev/null 2>&1; then
        echo -e "${GREEN}✅ Frontend validation PASSED${NC}"
        PASSED_GATES=$((PASSED_GATES + 1))
        GATE_RESULTS+=("✅ Gate 4: Frontend Quality")
    else
        echo -e "${RED}❌ Frontend validation FAILED${NC}"
        FAILED_GATES=$((FAILED_GATES + 1))
        GATE_RESULTS+=("❌ Gate 4: Frontend Quality")
        echo "   Run: npm run validate:frontend $SPEC_NAME"
    fi
else
    echo -e "${YELLOW}⚠️  Frontend validation SKIPPED (no spec name)${NC}"
    GATE_RESULTS+=("⚠️  Gate 4: Frontend Quality (skipped)")
fi

echo ""

# ========================================================================
# Gate 5: バックエンド品質
# ========================================================================
echo -e "${BLUE}🔍 Gate 5/7: Backend Quality${NC}"
echo "------------------------------------------------------------------------"

TOTAL_GATES=$((TOTAL_GATES + 1))

if [ -n "$SPEC_NAME" ]; then
    if "$SCRIPT_DIR/backend.sh" "$SPEC_NAME" > /dev/null 2>&1; then
        echo -e "${GREEN}✅ Backend validation PASSED${NC}"
        PASSED_GATES=$((PASSED_GATES + 1))
        GATE_RESULTS+=("✅ Gate 5: Backend Quality")
    else
        echo -e "${RED}❌ Backend validation FAILED${NC}"
        FAILED_GATES=$((FAILED_GATES + 1))
        GATE_RESULTS+=("❌ Gate 5: Backend Quality")
        echo "   Run: npm run validate:backend $SPEC_NAME"
    fi
else
    echo -e "${YELLOW}⚠️  Backend validation SKIPPED (no spec name)${NC}"
    GATE_RESULTS+=("⚠️  Gate 5: Backend Quality (skipped)")
fi

echo ""

# ========================================================================
# Gate 6: TDDチェックポイント状態
# ========================================================================
echo -e "${BLUE}🔍 Gate 6/7: TDD Checkpoints Status${NC}"
echo "------------------------------------------------------------------------"

TOTAL_GATES=$((TOTAL_GATES + 1))

TDD_CONFIG="$PROJECT_ROOT/dev-kit/config/tdd-checkpoints.yml"

if [ -f "$TDD_CONFIG" ]; then
    # yqコマンドが利用可能かチェック
    if command -v yq >/dev/null 2>&1; then
        # pending状態のチェックポイントをチェック
        PENDING_COUNT=$(yq '.checkpoints[] | select(.status == "pending") | .name' "$TDD_CONFIG" 2>/dev/null | wc -l | tr -d ' ')
        RED_COUNT=$(yq '.checkpoints[] | select(.status == "red") | .name' "$TDD_CONFIG" 2>/dev/null | wc -l | tr -d ' ')
        GREEN_COUNT=$(yq '.checkpoints[] | select(.status == "green") | .name' "$TDD_CONFIG" 2>/dev/null | wc -l | tr -d ' ')
        REFACTORED_COUNT=$(yq '.checkpoints[] | select(.status == "refactored") | .name' "$TDD_CONFIG" 2>/dev/null | wc -l | tr -d ' ')

        TOTAL_CHECKPOINTS=$((PENDING_COUNT + RED_COUNT + GREEN_COUNT + REFACTORED_COUNT))

        if [ "$TOTAL_CHECKPOINTS" -eq 0 ]; then
            echo -e "${BLUE}ℹ️  No TDD checkpoints configured${NC}"
            PASSED_GATES=$((PASSED_GATES + 1))
            GATE_RESULTS+=("✅ Gate 6: TDD Checkpoints (not configured)")
        elif [ "$PENDING_COUNT" -eq 0 ] && [ "$RED_COUNT" -eq 0 ]; then
            echo -e "${GREEN}✅ All TDD checkpoints completed${NC}"
            echo "   Green: $GREEN_COUNT, Refactored: $REFACTORED_COUNT"
            PASSED_GATES=$((PASSED_GATES + 1))
            GATE_RESULTS+=("✅ Gate 6: TDD Checkpoints")
        else
            echo -e "${RED}❌ TDD checkpoints incomplete${NC}"
            echo "   Pending: $PENDING_COUNT, Red: $RED_COUNT, Green: $GREEN_COUNT, Refactored: $REFACTORED_COUNT"
            FAILED_GATES=$((FAILED_GATES + 1))
            GATE_RESULTS+=("❌ Gate 6: TDD Checkpoints")
            echo "   Run: npm run tdd:next"
        fi
    else
        echo -e "${YELLOW}⚠️  yq not installed, cannot check TDD status${NC}"
        GATE_RESULTS+=("⚠️  Gate 6: TDD Checkpoints (yq not available)")
    fi
else
    echo -e "${BLUE}ℹ️  No TDD checkpoints file found${NC}"
    PASSED_GATES=$((PASSED_GATES + 1))
    GATE_RESULTS+=("✅ Gate 6: TDD Checkpoints (not configured)")
fi

echo ""

# ========================================================================
# Gate 7: テスト実行状態
# ========================================================================
echo -e "${BLUE}🔍 Gate 7/7: Test Execution Status${NC}"
echo "------------------------------------------------------------------------"

TOTAL_GATES=$((TOTAL_GATES + 1))

# PHPUnit テストの存在確認
if [ -d "$PROJECT_ROOT/tests" ]; then
    TEST_FILES=$(find "$PROJECT_ROOT/tests" -name "*Test.php" 2>/dev/null | wc -l | tr -d ' ')

    if [ "$TEST_FILES" -gt 0 ]; then
        echo "Found $TEST_FILES test file(s)"

        # vendor/bin/sail が利用可能かチェック
        if [ -f "$PROJECT_ROOT/vendor/bin/sail" ]; then
            echo "Running PHPUnit tests..."

            # テストを実行（タイムアウト付き）
            if timeout 120 "$PROJECT_ROOT/vendor/bin/sail" artisan test --no-coverage > /dev/null 2>&1; then
                echo -e "${GREEN}✅ All tests PASSED${NC}"
                PASSED_GATES=$((PASSED_GATES + 1))
                GATE_RESULTS+=("✅ Gate 7: Test Execution")
            else
                echo -e "${RED}❌ Tests FAILED${NC}"
                FAILED_GATES=$((FAILED_GATES + 1))
                GATE_RESULTS+=("❌ Gate 7: Test Execution")
                echo "   Run: ./vendor/bin/sail artisan test"
            fi
        else
            echo -e "${YELLOW}⚠️  Sail not available, skipping test execution${NC}"
            GATE_RESULTS+=("⚠️  Gate 7: Test Execution (sail not available)")
        fi
    else
        echo -e "${BLUE}ℹ️  No test files found${NC}"
        PASSED_GATES=$((PASSED_GATES + 1))
        GATE_RESULTS+=("✅ Gate 7: Test Execution (no tests)")
    fi
else
    echo -e "${YELLOW}⚠️  Tests directory not found${NC}"
    GATE_RESULTS+=("⚠️  Gate 7: Test Execution (no tests directory)")
fi

echo ""

# ========================================================================
# 最終サマリー
# ========================================================================
echo "========================================================================"
echo -e "${BLUE}📊 Quality Gates Summary${NC}"
echo "========================================================================"
echo ""

# 結果一覧表示
for result in "${GATE_RESULTS[@]}"; do
    echo "$result"
done

echo ""
echo "------------------------------------------------------------------------"
echo -e "Total Gates:  ${BLUE}$TOTAL_GATES${NC}"
echo -e "Passed:       ${GREEN}$PASSED_GATES${NC}"
echo -e "Failed:       ${RED}$FAILED_GATES${NC}"
echo "------------------------------------------------------------------------"
echo ""

EXIT_CODE=0

if [ $FAILED_GATES -eq 0 ]; then
    echo -e "${GREEN}✅✅✅ ALL QUALITY GATES PASSED ✅✅✅${NC}"
    echo ""
    echo "Principle validated: すべての品質ゲート通過"
    echo ""
else
    echo -e "${RED}❌❌❌ QUALITY GATES VALIDATION FAILED ❌❌❌${NC}"
    echo ""
    echo "CRITICAL: $FAILED_GATES quality gate(s) failed"
    echo ""
    echo "Fix all failed gates before proceeding."
    echo ""
    EXIT_CODE=1
fi

echo "========================================================================"

exit $EXIT_CODE
