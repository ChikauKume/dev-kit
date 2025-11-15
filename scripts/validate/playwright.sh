#!/bin/bash
# Playwright 標準設定チェックスクリプト
#
# playwright.config.ts がプロジェクト標準に準拠しているか検証
# 参照: dev-kit/docs/testing/playwright-standards.md

set -e

PROJECT_ROOT="$(cd "$(dirname "${BASH_SOURCE[0]}")/../../.." && pwd)"
cd "$PROJECT_ROOT"

# 色定義
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

echo "========================================================================"
echo -e "${BLUE}🔍 Playwright Standards Compliance Check${NC}"
echo "========================================================================"
echo ""
echo "Checking: playwright.config.ts"
echo ""

EXIT_CODE=0
CONFIG_FILE="$PROJECT_ROOT/playwright.config.ts"

if [ ! -f "$CONFIG_FILE" ]; then
    echo -e "${RED}❌ ERROR: playwright.config.ts not found${NC}"
    exit 1
fi

# ========================================================================
# 1. 動画録画設定チェック
# ========================================================================
echo -e "${BLUE}📝 Check 1: Video Recording (video: 'on')${NC}"
echo "------------------------------------------------------------------------"

if grep -q "video: 'on'" "$CONFIG_FILE"; then
    echo -e "${GREEN}✅ video: 'on' is configured (recommended)${NC}"
else
    echo -e "${YELLOW}⚠️  WARNING: video is not set to 'on'${NC}"
    echo "   Standard: video: 'on' for better debugging"
    echo "   Current setting:"
    grep "video:" "$CONFIG_FILE" || echo "   (video setting not found)"
    EXIT_CODE=1
fi

echo ""

# ========================================================================
# 2. スクリーンショット設定チェック
# ========================================================================
echo -e "${BLUE}📝 Check 2: Screenshot (screenshot: 'off')${NC}"
echo "------------------------------------------------------------------------"

if grep -q "screenshot: 'off'" "$CONFIG_FILE"; then
    echo -e "${GREEN}✅ screenshot: 'off' is configured (recommended with video)${NC}"
else
    echo -e "${YELLOW}⚠️  WARNING: screenshot is not set to 'off'${NC}"
    echo "   Standard: screenshot: 'off' when video is enabled"
    echo "   Current setting:"
    grep "screenshot:" "$CONFIG_FILE" || echo "   (screenshot setting not found)"
    EXIT_CODE=1
fi

echo ""

# ========================================================================
# 3. スロー実行モード（slowMo）チェック
# ========================================================================
echo -e "${BLUE}📝 Check 3: Slow Motion (slowMo: 750)${NC}"
echo "------------------------------------------------------------------------"

if grep -q "slowMo: 750" "$CONFIG_FILE"; then
    echo -e "${GREEN}✅ slowMo: 750 is configured (recommended for local dev)${NC}"
elif grep -q "slowMo:" "$CONFIG_FILE"; then
    SLOW_MO_VALUE=$(grep "slowMo:" "$CONFIG_FILE" | sed 's/.*slowMo: \([0-9]*\).*/\1/')
    echo -e "${YELLOW}⚠️  INFO: slowMo is set to ${SLOW_MO_VALUE}ms${NC}"
    echo "   Standard: 750ms for local development"
    echo "   Alternative values:"
    echo "     - 0ms: CI environment (fast execution)"
    echo "     - 750ms: Local development (recommended)"
    echo "     - 1000-1500ms: Demo/presentation"
else
    echo -e "${RED}❌ ERROR: slowMo is not configured${NC}"
    echo "   Standard: slowMo: 750 for visible video recording"
    EXIT_CODE=1
fi

echo ""

# ========================================================================
# 4. Base URL設定チェック
# ========================================================================
echo -e "${BLUE}📝 Check 4: Base URL (127.0.0.1 not localhost)${NC}"
echo "------------------------------------------------------------------------"

if grep -q "baseURL.*127.0.0.1" "$CONFIG_FILE"; then
    echo -e "${GREEN}✅ baseURL uses 127.0.0.1 (recommended)${NC}"
elif grep -q "baseURL.*localhost" "$CONFIG_FILE"; then
    echo -e "${YELLOW}⚠️  WARNING: baseURL uses 'localhost'${NC}"
    echo "   Standard: http://127.0.0.1 to avoid CORS issues"
    echo "   Current setting:"
    grep "baseURL:" "$CONFIG_FILE"
    EXIT_CODE=1
else
    echo -e "${YELLOW}⚠️  INFO: baseURL found but format unclear${NC}"
    grep "baseURL:" "$CONFIG_FILE" || echo "   (baseURL not found)"
fi

echo ""

# ========================================================================
# 5. 並列実行設定チェック
# ========================================================================
echo -e "${BLUE}📝 Check 5: Parallel Execution (workers: 1, fullyParallel: false)${NC}"
echo "------------------------------------------------------------------------"

PARALLEL_OK=true

if grep -q "fullyParallel: false" "$CONFIG_FILE"; then
    echo -e "${GREEN}✅ fullyParallel: false (recommended for DB tests)${NC}"
else
    echo -e "${YELLOW}⚠️  INFO: fullyParallel is not set to false${NC}"
    echo "   Standard: false to avoid database conflicts"
    PARALLEL_OK=false
fi

if grep -q "workers: 1" "$CONFIG_FILE"; then
    echo -e "${GREEN}✅ workers: 1 (recommended for sequential execution)${NC}"
else
    echo -e "${YELLOW}⚠️  INFO: workers is not set to 1${NC}"
    echo "   Standard: 1 for stable test execution"
    PARALLEL_OK=false
fi

if [ "$PARALLEL_OK" = false ]; then
    EXIT_CODE=1
fi

echo ""

# ========================================================================
# 6. E2Eテストファイルのtest.step()使用チェック
# ========================================================================
echo -e "${BLUE}📝 Check 6: Japanese test.step() Usage in E2E Tests${NC}"
echo "------------------------------------------------------------------------"

if [ -d "$PROJECT_ROOT/tests/E2E" ]; then
    E2E_FILES=$(find "$PROJECT_ROOT/tests/E2E" -name "*.spec.ts" 2>/dev/null)

    if [ -n "$E2E_FILES" ]; then
        TOTAL_FILES=0
        FILES_WITH_STEPS=0

        for file in $E2E_FILES; do
            TOTAL_FILES=$((TOTAL_FILES + 1))
            if grep -q "test.step(" "$file"; then
                FILES_WITH_STEPS=$((FILES_WITH_STEPS + 1))
            fi
        done

        echo "Total E2E test files: $TOTAL_FILES"
        echo "Files using test.step(): $FILES_WITH_STEPS"

        if [ $FILES_WITH_STEPS -eq $TOTAL_FILES ]; then
            echo -e "${GREEN}✅ All E2E tests use test.step() (recommended)${NC}"
        else
            echo -e "${YELLOW}⚠️  WARNING: Not all E2E tests use test.step()${NC}"
            echo "   Standard: Use test.step() with Japanese labels for better HTML reports"
            echo "   Missing in $((TOTAL_FILES - FILES_WITH_STEPS)) file(s)"
            EXIT_CODE=1
        fi
    else
        echo -e "${YELLOW}⚠️  INFO: No E2E test files found${NC}"
    fi
else
    echo -e "${YELLOW}⚠️  INFO: tests/E2E directory not found${NC}"
fi

echo ""

# ========================================================================
# 7. レポート出力先チェック（TODO: E2Eテスト完成後に有効化）
# ========================================================================
# echo -e "${BLUE}📝 Check 7: Report Output Directory${NC}"
# echo "------------------------------------------------------------------------"
#
# if grep -q "outputFolder.*docs/test-reports" "$CONFIG_FILE"; then
#     echo -e "${GREEN}✅ HTML report outputs to docs/test-reports/ (recommended)${NC}"
# else
#     echo -e "${YELLOW}⚠️  INFO: HTML report output location may differ from standard${NC}"
#     echo "   Standard: docs/test-reports/playwright-html/"
# fi
#
# if grep -q "outputFile.*docs/test-reports" "$CONFIG_FILE"; then
#     echo -e "${GREEN}✅ JSON report outputs to docs/test-reports/ (recommended)${NC}"
# else
#     echo -e "${YELLOW}⚠️  INFO: JSON report output location may differ from standard${NC}"
#     echo "   Standard: docs/test-reports/playwright-results.json"
# fi
#
# echo ""

# ========================================================================
# 7. E2E Test Prerequisites Implementation Check
# ========================================================================
echo -e "${BLUE}📝 Check 7: E2E Test Prerequisites Implementation${NC}"
echo "------------------------------------------------------------------------"

SPEC_NAME="${1:-}"

if [ -n "$SPEC_NAME" ]; then
    echo "Checking E2E prerequisites implementation for spec: $SPEC_NAME"

    # Call e2e-integrity.sh if it exists
    E2E_INTEGRITY_SCRIPT="$PROJECT_ROOT/dev-kit/scripts/validate/e2e-integrity.sh"

    if [ -x "$E2E_INTEGRITY_SCRIPT" ]; then
        echo "Running e2e-integrity check..."
        if "$E2E_INTEGRITY_SCRIPT" "$SPEC_NAME"; then
            echo -e "${GREEN}✅ E2E prerequisites correctly implemented${NC}"
        else
            echo -e "${RED}❌ E2E prerequisites validation failed${NC}"
            echo "   Run: npm run validate:e2e-integrity $SPEC_NAME"
            EXIT_CODE=1
        fi
    else
        echo -e "${YELLOW}⚠️  e2e-integrity.sh not found (skipping prerequisites check)${NC}"
        echo "   Location: $E2E_INTEGRITY_SCRIPT"
    fi
else
    echo -e "${YELLOW}⚠️  No spec name provided, skipping E2E prerequisites check${NC}"
    echo "   Usage: $0 <spec-name>"
fi

echo ""

# ========================================================================
# 最終サマリー
# ========================================================================
echo "========================================================================"
echo -e "${BLUE}📊 Playwright Standards Compliance Summary${NC}"
echo "========================================================================"
echo ""

if [ $EXIT_CODE -eq 0 ]; then
    echo -e "${GREEN}✅✅✅ ALL CHECKS PASSED ✅✅✅${NC}"
    echo ""
    echo "Your Playwright configuration follows project standards!"
else
    echo -e "${YELLOW}⚠️  WARNINGS DETECTED${NC}"
    echo ""
    echo "Some settings differ from project standards."
    echo ""
    echo "To fix automatically, consider updating playwright.config.ts to match standards."
fi

echo "========================================================================"

exit $EXIT_CODE
