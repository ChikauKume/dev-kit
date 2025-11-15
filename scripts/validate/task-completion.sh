#!/bin/bash

##############################################################################
# Task Completion Verification Script (タスク完了検証スクリプト)
#
# このスクリプトは、タスクを "completed" にマークする前に実行し、
# タスク完了の要件が満たされているかを検証します。
#
# 使用方法:
#   ./dev-kit/scripts/validate/task-completion.sh <spec-name> <task-id>
#
# 例:
#   ./dev-kit/scripts/validate/task-completion.sh login TASK-009
#
# 検証項目:
#   1. タスクで指定されたファイルが存在するか
#   2. frontend/backend フェーズのタスクにE2Eテストが存在するか
#   3. E2Eテストのステップコメントが日本語か(英語でないか)
#   4. すべてのE2Eテストがパスしているか (100% pass rate)
#
##############################################################################

set -e

# 色設定
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

# 引数チェック
if [ $# -ne 2 ]; then
    echo -e "${RED}Error: 引数が不足しています${NC}"
    echo "Usage: $0 <spec-name> <task-id>"
    echo "Example: $0 login TASK-009"
    exit 1
fi

SPEC_NAME=$1
TASK_ID=$2
TASKS_FILE="dev-kit/docs/specs/${SPEC_NAME}/tasks.yaml"

echo -e "${BLUE}=== Task Completion Verification ===${NC}"
echo -e "Spec: ${YELLOW}${SPEC_NAME}${NC}"
echo -e "Task ID: ${YELLOW}${TASK_ID}${NC}"
echo ""

# tasks.yamlの存在確認
if [ ! -f "$TASKS_FILE" ]; then
    echo -e "${RED}❌ Error: tasks.yaml not found at ${TASKS_FILE}${NC}"
    exit 1
fi

echo -e "${GREEN}✓ tasks.yaml found${NC}"

# タスク情報を抽出（簡易的なYAML解析）
# 注: 本格的なYAMLパーサーが必要な場合は yq などを使用
TASK_PHASE=$(grep -A 10 "id: ${TASK_ID}" "$TASKS_FILE" | grep "phase:" | head -1 | awk '{print $2}')
TASK_TYPE=$(grep -A 10 "id: ${TASK_ID}" "$TASKS_FILE" | grep "type:" | head -1 | awk '{print $2}')
TASK_STATUS=$(grep -A 10 "id: ${TASK_ID}" "$TASKS_FILE" | grep "status:" | head -1 | awk '{print $2}')

echo -e "Phase: ${YELLOW}${TASK_PHASE}${NC}"
echo -e "Type: ${YELLOW}${TASK_TYPE}${NC}"
echo -e "Current Status: ${YELLOW}${TASK_STATUS}${NC}"
echo ""

ERRORS=0
WARNINGS=0

# ========================================================================
# 検証1: タスクで指定されたファイルの存在確認
# ========================================================================
echo -e "${BLUE}[1/4] Checking task files...${NC}"

# files: セクションを抽出（簡易的）
FILES_SECTION=$(awk "/id: ${TASK_ID}/,/^  - id:/" "$TASKS_FILE" | grep "files:" -A 100 | grep "^      -" | sed 's/^      - //')

if [ -z "$FILES_SECTION" ]; then
    echo -e "${YELLOW}⚠ Warning: No files specified in task${NC}"
    WARNINGS=$((WARNINGS + 1))
else
    while IFS= read -r file; do
        if [ -f "$file" ]; then
            echo -e "${GREEN}  ✓ ${file}${NC}"
        else
            echo -e "${RED}  ❌ ${file} (NOT FOUND)${NC}"
            ERRORS=$((ERRORS + 1))
        fi
    done <<< "$FILES_SECTION"
fi

echo ""

# ========================================================================
# 検証2: E2Eテストの存在確認 (frontend/backend フェーズの場合)
# ========================================================================
echo -e "${BLUE}[2/4] Checking E2E tests...${NC}"

if [[ "$TASK_PHASE" == "frontend" ]] || [[ "$TASK_PHASE" == "backend" ]] || [[ "$TASK_PHASE" == "e2e-testing" ]]; then
    # E2Eテストディレクトリを探す
    E2E_DIR="tests/e2e/${SPEC_NAME}"

    if [ ! -d "$E2E_DIR" ]; then
        echo -e "${RED}  ❌ E2E test directory not found: ${E2E_DIR}${NC}"
        ERRORS=$((ERRORS + 1))
    else
        E2E_FILES=$(find "$E2E_DIR" -name "*.spec.ts" -type f | wc -l)
        if [ "$E2E_FILES" -eq 0 ]; then
            echo -e "${RED}  ❌ No E2E test files found in ${E2E_DIR}${NC}"
            ERRORS=$((ERRORS + 1))
        else
            echo -e "${GREEN}  ✓ Found ${E2E_FILES} E2E test file(s)${NC}"

            # test_file が tasks.yaml に指定されている場合、その存在を確認
            TEST_FILE=$(grep -A 15 "id: ${TASK_ID}" "$TASKS_FILE" | grep "test_file:" | head -1 | awk '{print $2}')
            if [ -n "$TEST_FILE" ]; then
                if [ -f "$TEST_FILE" ]; then
                    echo -e "${GREEN}  ✓ Test file exists: ${TEST_FILE}${NC}"
                else
                    echo -e "${RED}  ❌ Test file not found: ${TEST_FILE}${NC}"
                    ERRORS=$((ERRORS + 1))
                fi
            fi
        fi
    fi
else
    echo -e "${YELLOW}  ⊘ Skipping (not a frontend/backend/e2e-testing phase)${NC}"
fi

echo ""

# ========================================================================
# 検証3: E2Eテストのコメントが日本語か確認
# ========================================================================
echo -e "${BLUE}[3/4] Checking Japanese comments in E2E tests...${NC}"

if [[ "$TASK_PHASE" == "frontend" ]] || [[ "$TASK_PHASE" == "backend" ]] || [[ "$TASK_PHASE" == "e2e-testing" ]]; then
    E2E_DIR="tests/e2e/${SPEC_NAME}"

    if [ -d "$E2E_DIR" ]; then
        # "Step 1:", "Step 2:" などの英語ステップコメントを検索
        ENGLISH_STEPS=$(grep -r "// Step [0-9]" "$E2E_DIR" 2>/dev/null || true)

        if [ -n "$ENGLISH_STEPS" ]; then
            echo -e "${RED}  ❌ English step comments found:${NC}"
            echo "$ENGLISH_STEPS" | while read -r line; do
                echo -e "${RED}     $line${NC}"
            done
            ERRORS=$((ERRORS + 1))
        else
            # 日本語ステップコメントの存在確認
            JAPANESE_STEPS=$(grep -r "// ステップ[0-9]" "$E2E_DIR" 2>/dev/null | wc -l || true)
            if [ "$JAPANESE_STEPS" -gt 0 ]; then
                echo -e "${GREEN}  ✓ All step comments are in Japanese (${JAPANESE_STEPS} found)${NC}"
            else
                echo -e "${YELLOW}  ⚠ Warning: No Japanese step comments found (may not have step comments)${NC}"
                WARNINGS=$((WARNINGS + 1))
            fi
        fi
    fi
else
    echo -e "${YELLOW}  ⊘ Skipping (not a frontend/backend/e2e-testing phase)${NC}"
fi

echo ""

# ========================================================================
# 検証4: E2Eテストの実行とパス率確認 (100% pass必須)
# ========================================================================
echo -e "${BLUE}[4/4] Running E2E tests...${NC}"

if [[ "$TASK_PHASE" == "e2e-testing" ]]; then
    E2E_DIR="tests/e2e/${SPEC_NAME}"

    if [ -d "$E2E_DIR" ]; then
        # Playwrightテスト実行
        echo -e "${YELLOW}  Running: npx playwright test ${E2E_DIR}${NC}"

        # テスト実行（出力をキャプチャ）
        if npx playwright test "$E2E_DIR" --reporter=list > /tmp/playwright-test-output.txt 2>&1; then
            echo -e "${GREEN}  ✓ All E2E tests passed (100% pass rate)${NC}"

            # テスト結果のサマリーを表示
            PASSED=$(grep "passed" /tmp/playwright-test-output.txt | tail -1 || echo "0 passed")
            echo -e "${GREEN}     Result: ${PASSED}${NC}"
        else
            echo -e "${RED}  ❌ E2E tests failed${NC}"
            echo -e "${RED}     Some tests did not pass. 100% pass rate is required.${NC}"

            # 失敗したテストの詳細を表示
            echo -e "${YELLOW}  Failed test details:${NC}"
            tail -20 /tmp/playwright-test-output.txt

            ERRORS=$((ERRORS + 1))
        fi
    else
        echo -e "${RED}  ❌ E2E test directory not found: ${E2E_DIR}${NC}"
        ERRORS=$((ERRORS + 1))
    fi
else
    echo -e "${YELLOW}  ⊘ Skipping (not an e2e-testing phase)${NC}"
    echo -e "${YELLOW}     Note: For frontend/backend tasks, run E2E tests separately${NC}"
fi

echo ""

# ========================================================================
# 最終結果
# ========================================================================
echo -e "${BLUE}=== Verification Result ===${NC}"

if [ $ERRORS -eq 0 ]; then
    echo -e "${GREEN}✓ All checks passed!${NC}"
    if [ $WARNINGS -gt 0 ]; then
        echo -e "${YELLOW}  (with ${WARNINGS} warning(s))${NC}"
    fi
    echo ""
    echo -e "${GREEN}Task ${TASK_ID} is ready to be marked as 'completed'${NC}"
    exit 0
else
    echo -e "${RED}✗ Verification failed with ${ERRORS} error(s)${NC}"
    if [ $WARNINGS -gt 0 ]; then
        echo -e "${YELLOW}  and ${WARNINGS} warning(s)${NC}"
    fi
    echo ""
    echo -e "${RED}Please fix the errors before marking task as 'completed'${NC}"
    exit 1
fi
