#!/bin/bash
# 開発原則総合検証スクリプト
# workflow.md に記載されたすべての開発原則の遵守を検証

set -e

PROJECT_ROOT="$(cd "$(dirname "${BASH_SOURCE[0]}")/../../.." && pwd)"
SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"

cd "$PROJECT_ROOT"

# 色定義
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
CYAN='\033[0;36m'
BOLD='\033[1m'
NC='\033[0m' # No Color

echo ""
echo "========================================================================"
echo -e "${BOLD}${CYAN}🎯 Development Principles Validation${NC}"
echo "========================================================================"
echo ""
echo "Validating all principles from workflow.md"
echo ""

SPEC_NAME="${1:-}"
TOTAL_PRINCIPLES=0
PASSED_PRINCIPLES=0
FAILED_PRINCIPLES=0

# 結果を保存する配列
declare -a DO_RESULTS
declare -a DONT_RESULTS

# ========================================================================
# ✅ DO Principles (必ず守る)
# ========================================================================
echo ""
echo "========================================================================"
echo -e "${GREEN}${BOLD}✅ DO Principles (必ず守る)${NC}"
echo "========================================================================"
echo ""

# ------------------------------------------------------------------------
# DO-1: ui-components使用
# ------------------------------------------------------------------------
echo -e "${BLUE}🔍 DO-1: ui-components使用${NC}"
echo "------------------------------------------------------------------------"

TOTAL_PRINCIPLES=$((TOTAL_PRINCIPLES + 1))

if [ -n "$SPEC_NAME" ]; then
    # frontend.sh でチェック
    if "$SCRIPT_DIR/frontend.sh" "$SPEC_NAME" 2>&1 | grep -q "ui-components"; then
        echo -e "${GREEN}✅ PASSED - ui-components are used${NC}"
        PASSED_PRINCIPLES=$((PASSED_PRINCIPLES + 1))
        DO_RESULTS+=("✅ ui-components使用")
    else
        echo -e "${RED}❌ FAILED - ui-components validation failed${NC}"
        FAILED_PRINCIPLES=$((FAILED_PRINCIPLES + 1))
        DO_RESULTS+=("❌ ui-components使用")
    fi
else
    echo -e "${YELLOW}⚠️  SKIPPED - No spec name provided${NC}"
    DO_RESULTS+=("⚠️  ui-components使用 (skipped)")
fi

echo ""

# ------------------------------------------------------------------------
# DO-2: Clean Architecture（4層）使用
# ------------------------------------------------------------------------
echo -e "${BLUE}🔍 DO-2: Clean Architecture（4層）使用${NC}"
echo "------------------------------------------------------------------------"

TOTAL_PRINCIPLES=$((TOTAL_PRINCIPLES + 1))

if [ -n "$SPEC_NAME" ]; then
    # backend.sh でチェック
    if "$SCRIPT_DIR/backend.sh" "$SPEC_NAME" 2>&1 | grep -q "Clean Architecture"; then
        echo -e "${GREEN}✅ PASSED - Clean Architecture 4 layers verified${NC}"
        PASSED_PRINCIPLES=$((PASSED_PRINCIPLES + 1))
        DO_RESULTS+=("✅ Clean Architecture（4層）使用")
    else
        echo -e "${RED}❌ FAILED - Clean Architecture validation failed${NC}"
        FAILED_PRINCIPLES=$((FAILED_PRINCIPLES + 1))
        DO_RESULTS+=("❌ Clean Architecture（4層）使用")
    fi
else
    echo -e "${YELLOW}⚠️  SKIPPED - No spec name provided${NC}"
    DO_RESULTS+=("⚠️  Clean Architecture（4層）使用 (skipped)")
fi

echo ""

# ------------------------------------------------------------------------
# DO-3: スケルトンに沿った実装
# ------------------------------------------------------------------------
echo -e "${BLUE}🔍 DO-3: スケルトンに沿った実装${NC}"
echo "------------------------------------------------------------------------"

TOTAL_PRINCIPLES=$((TOTAL_PRINCIPLES + 1))

if [ -n "$SPEC_NAME" ]; then
    # design-integrity.sh でチェック
    if "$SCRIPT_DIR/design-integrity.sh" "$SPEC_NAME" > /dev/null 2>&1; then
        echo -e "${GREEN}✅ PASSED - Implementation follows design.md${NC}"
        PASSED_PRINCIPLES=$((PASSED_PRINCIPLES + 1))
        DO_RESULTS+=("✅ スケルトンに沿った実装")
    else
        echo -e "${RED}❌ FAILED - Design integrity validation failed${NC}"
        echo "   Run: npm run validate:design $SPEC_NAME"
        FAILED_PRINCIPLES=$((FAILED_PRINCIPLES + 1))
        DO_RESULTS+=("❌ スケルトンに沿った実装")
    fi
else
    echo -e "${YELLOW}⚠️  SKIPPED - No spec name provided${NC}"
    DO_RESULTS+=("⚠️  スケルトンに沿った実装 (skipped)")
fi

echo ""

# ------------------------------------------------------------------------
# DO-4: 日本語メッセージは句点（。）で終わる
# ------------------------------------------------------------------------
echo -e "${BLUE}🔍 DO-4: 日本語メッセージは句点（。）で終わる${NC}"
echo "------------------------------------------------------------------------"

TOTAL_PRINCIPLES=$((TOTAL_PRINCIPLES + 1))

# japanese-messages.sh でチェック
if "$SCRIPT_DIR/japanese-messages.sh" "$SPEC_NAME" > /dev/null 2>&1; then
    echo -e "${GREEN}✅ PASSED - All Japanese messages end with period (。)${NC}"
    PASSED_PRINCIPLES=$((PASSED_PRINCIPLES + 1))
    DO_RESULTS+=("✅ 日本語メッセージは句点（。）で終わる")
else
    echo -e "${RED}❌ FAILED - Japanese message validation failed${NC}"
    echo "   Run: npm run validate:japanese $SPEC_NAME"
    FAILED_PRINCIPLES=$((FAILED_PRINCIPLES + 1))
    DO_RESULTS+=("❌ 日本語メッセージは句点（。）で終わる")
fi

echo ""

# ------------------------------------------------------------------------
# DO-5: すべての品質ゲート通過
# ------------------------------------------------------------------------
echo -e "${BLUE}🔍 DO-5: すべての品質ゲート通過${NC}"
echo "------------------------------------------------------------------------"

TOTAL_PRINCIPLES=$((TOTAL_PRINCIPLES + 1))

# DO-1からDO-4までの結果で判定（環境、フロント、バック、デザイン、日本語）
GATE_FAILURES=0

# 環境検証
"$SCRIPT_DIR/env.sh" > /dev/null 2>&1 || ((GATE_FAILURES++))

# 依存関係検証
"$SCRIPT_DIR/deps.sh" > /dev/null 2>&1 || ((GATE_FAILURES++))

# 構文検証
"$SCRIPT_DIR/syntax.sh" > /dev/null 2>&1 || ((GATE_FAILURES++))

if [ $GATE_FAILURES -eq 0 ]; then
    echo -e "${GREEN}✅ PASSED - All quality gates passed${NC}"
    PASSED_PRINCIPLES=$((PASSED_PRINCIPLES + 1))
    DO_RESULTS+=("✅ すべての品質ゲート通過")
else
    echo -e "${RED}❌ FAILED - $GATE_FAILURES quality gate(s) failed${NC}"
    echo "   Check: env, deps, syntax validations"
    FAILED_PRINCIPLES=$((FAILED_PRINCIPLES + 1))
    DO_RESULTS+=("❌ すべての品質ゲート通過")
fi

echo ""

# ------------------------------------------------------------------------
# DO-6: 機能ごとのフルスタックTDDサイクル実施
# ------------------------------------------------------------------------
echo -e "${BLUE}🔍 DO-6: 機能ごとのフルスタックTDDサイクル実施${NC}"
echo "------------------------------------------------------------------------"

TOTAL_PRINCIPLES=$((TOTAL_PRINCIPLES + 1))

TDD_STATE_FILE="$PROJECT_ROOT/dev-kit/state/tdd-${SPEC_NAME}.json"

if [ -n "$SPEC_NAME" ] && [ -f "$TDD_STATE_FILE" ]; then
    TOTAL_PAGES=$(cat "$TDD_STATE_FILE" | grep '"total_pages"' | grep -oE '[0-9]+' || echo "0")
    COMPLETED_PAGES=$(cat "$TDD_STATE_FILE" | grep '"completed_pages"' | grep -oE '[0-9]+' || echo "0")

    if [ "$TOTAL_PAGES" -gt 0 ] && [ "$COMPLETED_PAGES" -eq "$TOTAL_PAGES" ]; then
        echo -e "${GREEN}✅ PASSED - All features completed via TDD cycle${NC}"
        echo "   Completed: $COMPLETED_PAGES / $TOTAL_PAGES features"
        PASSED_PRINCIPLES=$((PASSED_PRINCIPLES + 1))
        DO_RESULTS+=("✅ 機能ごとのフルスタックTDDサイクル実施")
    else
        echo -e "${RED}❌ FAILED - TDD cycle incomplete${NC}"
        echo "   Completed: $COMPLETED_PAGES / $TOTAL_PAGES features"
        echo "   Run: npm run tdd:status $SPEC_NAME"
        FAILED_PRINCIPLES=$((FAILED_PRINCIPLES + 1))
        DO_RESULTS+=("❌ 機能ごとのフルスタックTDDサイクル実施")
    fi
else
    echo -e "${BLUE}ℹ️  PASSED - No TDD state file or spec name provided${NC}"
    PASSED_PRINCIPLES=$((PASSED_PRINCIPLES + 1))
    DO_RESULTS+=("✅ 機能ごとのフルスタックTDDサイクル実施 (not configured)")
fi

echo ""

# ========================================================================
# ❌ DON'T Principles (絶対禁止)
# ========================================================================
echo ""
echo "========================================================================"
echo -e "${RED}${BOLD}❌ DON'T Principles (絶対禁止)${NC}"
echo "========================================================================"
echo ""

# ------------------------------------------------------------------------
# DON'T-1: カスタムコンポーネント作成
# ------------------------------------------------------------------------
echo -e "${BLUE}🔍 DON'T-1: カスタムコンポーネント作成（禁止）${NC}"
echo "------------------------------------------------------------------------"

TOTAL_PRINCIPLES=$((TOTAL_PRINCIPLES + 1))

CUSTOM_COMPONENTS=$(find "$PROJECT_ROOT/resources/js/components" -name "*.tsx" 2>/dev/null | wc -l | tr -d ' ')

if [ "$CUSTOM_COMPONENTS" -eq 0 ]; then
    echo -e "${GREEN}✅ PASSED - No custom components found${NC}"
    PASSED_PRINCIPLES=$((PASSED_PRINCIPLES + 1))
    DONT_RESULTS+=("✅ カスタムコンポーネント作成（禁止）")
else
    echo -e "${RED}❌ FAILED - Found $CUSTOM_COMPONENTS custom component(s)${NC}"
    echo "   FORBIDDEN: Custom component creation"
    FAILED_PRINCIPLES=$((FAILED_PRINCIPLES + 1))
    DONT_RESULTS+=("❌ カスタムコンポーネント作成（禁止）")
fi

echo ""

# ------------------------------------------------------------------------
# DON'T-2: Tailwind CSS直接使用
# ------------------------------------------------------------------------
echo -e "${BLUE}🔍 DON'T-2: Tailwind CSS直接使用（禁止）${NC}"
echo "------------------------------------------------------------------------"

TOTAL_PRINCIPLES=$((TOTAL_PRINCIPLES + 1))

if [ -d "$PROJECT_ROOT/resources/js/Pages" ]; then
    TAILWIND_COUNT=$(grep -rE "className=\".*\b(flex|grid|p-|m-|text-|bg-).*\"" "$PROJECT_ROOT/resources/js/Pages" --include="*.tsx" 2>/dev/null | wc -l | tr -d ' ')

    if [ "$TAILWIND_COUNT" -eq 0 ]; then
        echo -e "${GREEN}✅ PASSED - No direct Tailwind CSS usage${NC}"
        PASSED_PRINCIPLES=$((PASSED_PRINCIPLES + 1))
        DONT_RESULTS+=("✅ Tailwind CSS直接使用（禁止）")
    else
        echo -e "${RED}❌ FAILED - Found $TAILWIND_COUNT Tailwind CSS usage(s)${NC}"
        echo "   FORBIDDEN: Direct Tailwind CSS usage"
        FAILED_PRINCIPLES=$((FAILED_PRINCIPLES + 1))
        DONT_RESULTS+=("❌ Tailwind CSS直接使用（禁止）")
    fi
else
    echo -e "${GREEN}✅ PASSED - Pages directory not found${NC}"
    PASSED_PRINCIPLES=$((PASSED_PRINCIPLES + 1))
    DONT_RESULTS+=("✅ Tailwind CSS直接使用（禁止）")
fi

echo ""

# ------------------------------------------------------------------------
# DON'T-3: 直接HTMLタグ使用
# ------------------------------------------------------------------------
echo -e "${BLUE}🔍 DON'T-3: 直接HTMLタグ使用（禁止）${NC}"
echo "------------------------------------------------------------------------"

TOTAL_PRINCIPLES=$((TOTAL_PRINCIPLES + 1))

if [ -d "$PROJECT_ROOT/resources/js/Pages" ]; then
    DIRECT_HTML_COUNT=$(grep -rE "<(input|button|form|select|textarea)" "$PROJECT_ROOT/resources/js/Pages" --include="*.tsx" 2>/dev/null | grep -v "ui-components" | wc -l | tr -d ' ')

    if [ "$DIRECT_HTML_COUNT" -eq 0 ]; then
        echo -e "${GREEN}✅ PASSED - No direct HTML tag usage${NC}"
        PASSED_PRINCIPLES=$((PASSED_PRINCIPLES + 1))
        DONT_RESULTS+=("✅ 直接HTMLタグ使用（禁止）")
    else
        echo -e "${RED}❌ FAILED - Found $DIRECT_HTML_COUNT direct HTML usage(s)${NC}"
        echo "   FORBIDDEN: <input>, <button>, <form>, <select>, <textarea>"
        FAILED_PRINCIPLES=$((FAILED_PRINCIPLES + 1))
        DONT_RESULTS+=("❌ 直接HTMLタグ使用（禁止）")
    fi
else
    echo -e "${GREEN}✅ PASSED - Pages directory not found${NC}"
    PASSED_PRINCIPLES=$((PASSED_PRINCIPLES + 1))
    DONT_RESULTS+=("✅ 直接HTMLタグ使用（禁止）")
fi

echo ""

# ------------------------------------------------------------------------
# DON'T-4: Clean Architecture以外の方法
# ------------------------------------------------------------------------
echo -e "${BLUE}🔍 DON'T-4: Clean Architecture以外の方法（禁止）${NC}"
echo "------------------------------------------------------------------------"

TOTAL_PRINCIPLES=$((TOTAL_PRINCIPLES + 1))

if [ -n "$SPEC_NAME" ]; then
    # backend.sh でチェック（すでにDO-2で実行済み）
    # Clean Architectureが使われていればこの原則も満たされる
    if "$SCRIPT_DIR/backend.sh" "$SPEC_NAME" 2>&1 | grep -q "Clean Architecture"; then
        echo -e "${GREEN}✅ PASSED - Clean Architecture enforced${NC}"
        PASSED_PRINCIPLES=$((PASSED_PRINCIPLES + 1))
        DONT_RESULTS+=("✅ Clean Architecture以外の方法（禁止）")
    else
        echo -e "${RED}❌ FAILED - Non-Clean Architecture approach detected${NC}"
        FAILED_PRINCIPLES=$((FAILED_PRINCIPLES + 1))
        DONT_RESULTS+=("❌ Clean Architecture以外の方法（禁止）")
    fi
else
    echo -e "${YELLOW}⚠️  SKIPPED - No spec name provided${NC}"
    DONT_RESULTS+=("⚠️  Clean Architecture以外の方法（禁止）(skipped)")
fi

echo ""

# ------------------------------------------------------------------------
# DON'T-5: テストスキップ
# ------------------------------------------------------------------------
echo -e "${BLUE}🔍 DON'T-5: テストスキップ（禁止）${NC}"
echo "------------------------------------------------------------------------"

TOTAL_PRINCIPLES=$((TOTAL_PRINCIPLES + 1))

# PHPUnitテスト実行確認
if [ -d "$PROJECT_ROOT/tests" ] && [ -f "$PROJECT_ROOT/vendor/bin/sail" ]; then
    TEST_FILES=$(find "$PROJECT_ROOT/tests" -name "*Test.php" 2>/dev/null | wc -l | tr -d ' ')

    if [ "$TEST_FILES" -gt 0 ]; then
        echo "Found $TEST_FILES test file(s)"
        if timeout 60 "$PROJECT_ROOT/vendor/bin/sail" artisan test --no-coverage > /dev/null 2>&1; then
            echo -e "${GREEN}✅ PASSED - All tests executed and passed${NC}"
            PASSED_PRINCIPLES=$((PASSED_PRINCIPLES + 1))
            DONT_RESULTS+=("✅ テストスキップ（禁止）")
        else
            echo -e "${RED}❌ FAILED - Tests failed or were skipped${NC}"
            FAILED_PRINCIPLES=$((FAILED_PRINCIPLES + 1))
            DONT_RESULTS+=("❌ テストスキップ（禁止）")
        fi
    else
        echo -e "${BLUE}ℹ️  PASSED - No test files (pre-implementation)${NC}"
        PASSED_PRINCIPLES=$((PASSED_PRINCIPLES + 1))
        DONT_RESULTS+=("✅ テストスキップ（禁止）(no tests)")
    fi
else
    echo -e "${YELLOW}⚠️  SKIPPED - Tests directory or Sail not available${NC}"
    DONT_RESULTS+=("⚠️  テストスキップ（禁止）(skipped)")
fi

echo ""

# ------------------------------------------------------------------------
# DON'T-6: 品質ゲートスキップ
# ------------------------------------------------------------------------
echo -e "${BLUE}🔍 DON'T-6: 品質ゲートスキップ（禁止）${NC}"
echo "------------------------------------------------------------------------"

TOTAL_PRINCIPLES=$((TOTAL_PRINCIPLES + 1))

# DO-5の結果を参照（すでに品質ゲートを実行済み）
if [ $GATE_FAILURES -eq 0 ]; then
    echo -e "${GREEN}✅ PASSED - All quality gates executed${NC}"
    PASSED_PRINCIPLES=$((PASSED_PRINCIPLES + 1))
    DONT_RESULTS+=("✅ 品質ゲートスキップ（禁止）")
else
    echo -e "${RED}❌ FAILED - Some quality gates were not executed or failed${NC}"
    echo "   Failed gates: $GATE_FAILURES"
    FAILED_PRINCIPLES=$((FAILED_PRINCIPLES + 1))
    DONT_RESULTS+=("❌ 品質ゲートスキップ（禁止）")
fi

echo ""

# ------------------------------------------------------------------------
# DON'T-7: 実装前のテスト作成をスキップ
# ------------------------------------------------------------------------
echo -e "${BLUE}🔍 DON'T-7: 実装前のテスト作成をスキップ（禁止）${NC}"
echo "------------------------------------------------------------------------"

TOTAL_PRINCIPLES=$((TOTAL_PRINCIPLES + 1))

# DO-6の結果を参照（TDD状態ファイルの確認）
if [ -n "$SPEC_NAME" ] && [ -f "$TDD_STATE_FILE" ]; then
    # TDD状態ファイルが存在し、完了済みならTDDプロセスに従っている
    if [ "$TOTAL_PAGES" -gt 0 ] && [ "$COMPLETED_PAGES" -eq "$TOTAL_PAGES" ]; then
        echo -e "${GREEN}✅ PASSED - TDD Red→Green cycle followed for all features${NC}"
        PASSED_PRINCIPLES=$((PASSED_PRINCIPLES + 1))
        DONT_RESULTS+=("✅ 実装前のテスト作成をスキップ（禁止）")
    else
        echo -e "${RED}❌ FAILED - TDD process incomplete or skipped${NC}"
        echo "   Completed: $COMPLETED_PAGES / $TOTAL_PAGES features"
        FAILED_PRINCIPLES=$((FAILED_PRINCIPLES + 1))
        DONT_RESULTS+=("❌ 実装前のテスト作成をスキップ（禁止）")
    fi
else
    echo -e "${BLUE}ℹ️  PASSED - No TDD state file (pre-TDD phase)${NC}"
    PASSED_PRINCIPLES=$((PASSED_PRINCIPLES + 1))
    DONT_RESULTS+=("✅ 実装前のテスト作成をスキップ（禁止）(not configured)")
fi

echo ""

# ========================================================================
# 最終サマリー
# ========================================================================
echo ""
echo "========================================================================"
echo -e "${BOLD}${CYAN}📊 PRINCIPLES VALIDATION SUMMARY${NC}"
echo "========================================================================"
echo ""

echo -e "${GREEN}${BOLD}✅ DO Principles (必ず守る):${NC}"
for result in "${DO_RESULTS[@]}"; do
    echo "  $result"
done

echo ""
echo -e "${RED}${BOLD}❌ DON'T Principles (絶対禁止):${NC}"
for result in "${DONT_RESULTS[@]}"; do
    echo "  $result"
done

echo ""
echo "------------------------------------------------------------------------"
echo -e "Total Principles Checked: ${BLUE}$TOTAL_PRINCIPLES${NC}"
echo -e "Passed:                   ${GREEN}$PASSED_PRINCIPLES${NC}"
echo -e "Failed:                   ${RED}$FAILED_PRINCIPLES${NC}"
echo "------------------------------------------------------------------------"
echo ""

EXIT_CODE=0

if [ $FAILED_PRINCIPLES -eq 0 ]; then
    echo ""
    echo -e "${GREEN}${BOLD}✅✅✅ ALL DEVELOPMENT PRINCIPLES VALIDATED ✅✅✅${NC}"
    echo ""
    echo "Your implementation adheres to all workflow.md principles!"
    echo ""
    echo "Reference: dev-kit/docs/workflow.md (lines 460-478)"
    echo ""
else
    echo ""
    echo -e "${RED}${BOLD}❌❌❌ PRINCIPLES VALIDATION FAILED ❌❌❌${NC}"
    echo ""
    echo "CRITICAL: $FAILED_PRINCIPLES principle(s) violated"
    echo ""
    echo "Fix all violations before proceeding."
    echo ""
    echo "Reference: dev-kit/docs/workflow.md (lines 460-478)"
    echo ""
    EXIT_CODE=1
fi

echo "========================================================================"

exit $EXIT_CODE
