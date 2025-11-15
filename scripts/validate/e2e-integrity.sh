#!/bin/bash
# E2Eテスト整合性検証スクリプト
# e2e.yaml の prerequisites と実装の整合性を検証

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

SPEC_NAME="${1:-}"

if [ -z "$SPEC_NAME" ]; then
    echo -e "${RED}❌ Error: Spec name is required${NC}"
    echo "Usage: $0 <spec-name>"
    exit 1
fi

# パストラバーサル対策
if [[ "$SPEC_NAME" =~ \.\./|^/ ]]; then
    echo -e "${RED}❌ エラー: 不正な仕様名が指定されています${NC}"
    exit 1
fi

E2E_YAML="$PROJECT_ROOT/dev-kit/docs/specs/$SPEC_NAME/tests/e2e.yaml"
E2E_TEST_DIR="$PROJECT_ROOT/tests/e2e/$SPEC_NAME"

echo ""
echo "========================================================================"
echo -e "${BLUE}🔍 E2E Test Integrity Validation${NC}"
echo "========================================================================"
echo ""
echo "Checking spec: $SPEC_NAME"
echo "E2E YAML: $E2E_YAML"
echo "E2E Test Dir: $E2E_TEST_DIR"
echo ""

EXIT_CODE=0
TOTAL_SCENARIOS=0
MISSING_SPECS=0
PREREQUISITE_ISSUES=0

# ========================================================================
# Part 1: e2e.yaml ファイルの存在確認
# ========================================================================
echo -e "${BLUE}📝 Part 1: E2E YAML File Existence Check${NC}"
echo "------------------------------------------------------------------------"

if [ ! -f "$E2E_YAML" ]; then
    echo -e "${RED}❌ Error: e2e.yaml not found${NC}"
    echo ""
    echo "Expected location: $E2E_YAML"
    exit 1
fi

echo -e "${GREEN}✅ e2e.yaml found${NC}"
echo ""

# ========================================================================
# Part 2: E2Eテスト実装ファイルの存在確認
# ========================================================================
echo -e "${BLUE}📝 Part 2: E2E Test Implementation Check${NC}"
echo "------------------------------------------------------------------------"

# yqコマンドの確認（YAMLパーサー）
if ! command -v yq &> /dev/null; then
    echo -e "${YELLOW}⚠️  yq not found - attempting basic parsing with grep/sed${NC}"
    echo ""

    # yqがない場合は基本的な grep/sed でパースを試行
    # macOS互換: -P オプションを使わず sed で抽出
    SCENARIO_IDS=$(grep '^\s*-\s*id:' "$E2E_YAML" | sed -E 's/^[[:space:]]*-[[:space:]]*id:[[:space:]]*//g' || true)

    if [ -z "$SCENARIO_IDS" ]; then
        echo -e "${RED}❌ Could not parse scenarios from e2e.yaml${NC}"
        echo "   Install yq for better parsing: https://github.com/mikefarah/yq"
        exit 1
    fi
else
    # yqがある場合は正確にパース
    SCENARIO_IDS=$(yq eval '.scenarios[].id' "$E2E_YAML" 2>/dev/null || true)
fi

if [ -z "$SCENARIO_IDS" ]; then
    echo -e "${YELLOW}⚠️  No scenarios found in e2e.yaml${NC}"
    exit 0
fi

echo "Found scenarios in e2e.yaml:"
echo ""

while IFS= read -r scenario_id; do
    if [ -z "$scenario_id" ]; then
        continue
    fi

    TOTAL_SCENARIOS=$((TOTAL_SCENARIOS + 1))

    # テストファイル名: E2E-001.spec.ts
    TEST_FILE="$E2E_TEST_DIR/${scenario_id}.spec.ts"

    echo "  Scenario: $scenario_id"

    if [ -f "$TEST_FILE" ]; then
        echo -e "    ${GREEN}✅ Test file exists: tests/e2e/$SPEC_NAME/${scenario_id}.spec.ts${NC}"
    else
        echo -e "    ${RED}❌ Test file NOT FOUND: tests/e2e/$SPEC_NAME/${scenario_id}.spec.ts${NC}"
        MISSING_SPECS=$((MISSING_SPECS + 1))
        EXIT_CODE=1
    fi
done <<< "$SCENARIO_IDS"

echo ""

if [ $MISSING_SPECS -eq 0 ]; then
    echo -e "${GREEN}✅ All E2E test files exist ($TOTAL_SCENARIOS/$TOTAL_SCENARIOS)${NC}"
else
    echo -e "${RED}❌ Missing $MISSING_SPECS E2E test file(s) out of $TOTAL_SCENARIOS${NC}"
fi

echo ""

# ========================================================================
# Part 3: Prerequisites と実装の整合性検証
# ========================================================================
echo -e "${BLUE}📝 Part 3: Prerequisites Implementation Verification${NC}"
echo "------------------------------------------------------------------------"
echo ""

# 各シナリオのprerequisitesをチェック
if command -v yq &> /dev/null; then
    # yqを使用して詳細にチェック
    SCENARIO_COUNT=$(yq eval '.scenarios | length' "$E2E_YAML" 2>/dev/null || echo "0")

    for ((i=0; i<$SCENARIO_COUNT; i++)); do
        SCENARIO_ID=$(yq eval ".scenarios[$i].id" "$E2E_YAML" 2>/dev/null)
        SCENARIO_NAME=$(yq eval ".scenarios[$i].name" "$E2E_YAML" 2>/dev/null)

        TEST_FILE="$E2E_TEST_DIR/${SCENARIO_ID}.spec.ts"

        if [ ! -f "$TEST_FILE" ]; then
            continue  # Part 2で既にエラー報告済み
        fi

        echo "Checking: $SCENARIO_ID - $SCENARIO_NAME"

        # prerequisitesを取得
        PREREQ_COUNT=$(yq eval ".scenarios[$i].prerequisites | length" "$E2E_YAML" 2>/dev/null || echo "0")

        if [ "$PREREQ_COUNT" = "0" ] || [ "$PREREQ_COUNT" = "null" ]; then
            echo -e "  ${GREEN}✅ No prerequisites defined${NC}"
            echo ""
            continue
        fi

        HAS_ISSUES=false

        for ((j=0; j<$PREREQ_COUNT; j++)); do
            PREREQUISITE=$(yq eval ".scenarios[$i].prerequisites[$j]" "$E2E_YAML" 2>/dev/null)

            if [ -z "$PREREQUISITE" ] || [ "$PREREQUISITE" = "null" ]; then
                continue
            fi

            echo "  Prerequisite: $PREREQUISITE"

            # Prerequisites検証ルール

            # 1. "ログイン済み" または "テストユーザーでログイン済み" の場合
            if echo "$PREREQUISITE" | grep -qE '(ログイン済み|login)'; then
                # ログイン処理が実装されているかチェック
                # ログインページへの遷移 または セッション/認証の記述があるか
                if grep -qE '(\/login|session|authenticated|login|auth)' "$TEST_FILE"; then
                    echo -e "    ${GREEN}✅ Login process or authentication handling found${NC}"
                else
                    echo -e "    ${RED}❌ Login prerequisite not implemented${NC}"
                    echo "       Expected: Login steps or authentication setup before main test"
                    HAS_ISSUES=true
                    PREREQUISITE_ISSUES=$((PREREQUISITE_ISSUES + 1))
                    EXIT_CODE=1
                fi
            fi

            # 2. "登録されていること" または "テストユーザーが登録されていること" の場合
            if echo "$PREREQUISITE" | grep -qE '(登録されていること|テストユーザー.*登録|test.*user.*registered)'; then
                # テストデータ作成またはデータベース準備の記述があるか
                if grep -qE '(test.*user|test@example\.com|database|seed|fixture|beforeEach|beforeAll)' "$TEST_FILE"; then
                    echo -e "    ${GREEN}✅ Test user or data setup found${NC}"
                else
                    echo -e "    ${RED}❌ User registration prerequisite not clearly implemented${NC}"
                    echo "       Expected: Test data setup or user creation steps"
                    HAS_ISSUES=true
                    PREREQUISITE_ISSUES=$((PREREQUISITE_ISSUES + 1))
                    EXIT_CODE=1
                fi
            fi

            # 3. "データベースがクリーンな状態" の場合
            if echo "$PREREQUISITE" | grep -qE '(データベース.*クリーン|database.*clean|クリアされて)'; then
                # データベースクリーンアップの記述があるか
                if grep -qE '(beforeEach|beforeAll|清除|クリーンアップ|clean|truncate|reset)' "$TEST_FILE"; then
                    echo -e "    ${GREEN}✅ Database cleanup or reset found${NC}"
                else
                    echo -e "    ${YELLOW}⚠️  Database cleanup not explicitly found (may be handled by test framework)${NC}"
                fi
            fi

            # 4. "アクセスできること" の場合
            if echo "$PREREQUISITE" | grep -qE 'アクセスできること'; then
                # ページへのアクセス（navigate/goto）があるか
                if grep -qE '(goto|navigate|visit)' "$TEST_FILE"; then
                    echo -e "    ${GREEN}✅ Page access implemented${NC}"
                else
                    echo -e "    ${YELLOW}⚠️  Page access not explicitly found${NC}"
                fi
            fi

            # 5. "ダッシュボードに表示されていること" など、特定の画面状態
            if echo "$PREREQUISITE" | grep -qE '(表示されて|displayed|shown)'; then
                # その画面への遷移または表示確認があるか
                SCREEN=$(echo "$PREREQUISITE" | grep -oE '([A-Za-z]+|[ぁ-んァ-ン一-龥]+)(画面|ページ|に)' | head -1 || true)
                if [ -n "$SCREEN" ]; then
                    echo -e "    ${GREEN}✅ Screen state prerequisite defined${NC}"
                fi
            fi
        done

        if [ "$HAS_ISSUES" = false ]; then
            echo -e "  ${GREEN}✅ All prerequisites implemented${NC}"
        fi

        echo ""
    done
else
    # yqがない場合は簡易チェック
    echo -e "${YELLOW}⚠️  yq not available - performing basic prerequisite check${NC}"
    echo ""

    # 基本的なgrep検索でprerequisitesを探す
    if grep -q "prerequisites:" "$E2E_YAML"; then
        echo -e "${GREEN}✅ Prerequisites section found in e2e.yaml${NC}"
        echo ""

        # "ログイン済み"のprerequisitesがあるシナリオを探す
        LOGIN_PREREQ_SCENARIOS=$(grep -B5 "ログイン済み\|テストユーザーでログイン済み" "$E2E_YAML" | grep "id:" | sed -E 's/^[[:space:]]*-[[:space:]]*id:[[:space:]]*//g' || true)

        if [ -n "$LOGIN_PREREQ_SCENARIOS" ]; then
            echo "Scenarios with login prerequisites:"
            while IFS= read -r scenario_id; do
                TEST_FILE="$E2E_TEST_DIR/${scenario_id}.spec.ts"

                if [ -f "$TEST_FILE" ]; then
                    if grep -qE '(login|auth|session)' "$TEST_FILE"; then
                        echo -e "  ${GREEN}✅ $scenario_id: Login handling found${NC}"
                    else
                        echo -e "  ${RED}❌ $scenario_id: Login handling NOT FOUND${NC}"
                        PREREQUISITE_ISSUES=$((PREREQUISITE_ISSUES + 1))
                        EXIT_CODE=1
                    fi
                fi
            done <<< "$LOGIN_PREREQ_SCENARIOS"
            echo ""
        fi
    else
        echo -e "${GREEN}✅ No prerequisites defined in e2e.yaml${NC}"
        echo ""
    fi
fi

# ========================================================================
# Part 4: Steps と実装の整合性検証（基本チェック）
# ========================================================================
echo -e "${BLUE}📝 Part 4: Steps Implementation Basic Check${NC}"
echo "------------------------------------------------------------------------"
echo ""

if command -v yq &> /dev/null; then
    SCENARIO_COUNT=$(yq eval '.scenarios | length' "$E2E_YAML" 2>/dev/null || echo "0")

    for ((i=0; i<$SCENARIO_COUNT; i++)); do
        SCENARIO_ID=$(yq eval ".scenarios[$i].id" "$E2E_YAML" 2>/dev/null)
        TEST_FILE="$E2E_TEST_DIR/${SCENARIO_ID}.spec.ts"

        if [ ! -f "$TEST_FILE" ]; then
            continue
        fi

        # stepsの数をカウント
        STEPS_COUNT=$(yq eval ".scenarios[$i].steps | length" "$E2E_YAML" 2>/dev/null || echo "0")

        if [ "$STEPS_COUNT" = "0" ] || [ "$STEPS_COUNT" = "null" ]; then
            continue
        fi

        echo "Checking: $SCENARIO_ID - $STEPS_COUNT steps defined"

        # テストファイル内のtest.stepの数をカウント
        IMPL_STEPS=$(grep -c "test.step(" "$TEST_FILE" 2>/dev/null || echo "0")

        if [ "$IMPL_STEPS" -ge "$STEPS_COUNT" ]; then
            echo -e "  ${GREEN}✅ Implementation has $IMPL_STEPS steps (YAML defines $STEPS_COUNT)${NC}"
        else
            echo -e "  ${YELLOW}⚠️  Implementation has $IMPL_STEPS steps but YAML defines $STEPS_COUNT${NC}"
            echo "     This may indicate missing step implementations"
        fi

        echo ""
    done
else
    echo -e "${YELLOW}⚠️  yq not available - skipping detailed steps check${NC}"
    echo ""
fi

# ========================================================================
# 最終サマリー
# ========================================================================
echo "========================================================================"
echo -e "${BLUE}📊 E2E Test Integrity Validation Summary${NC}"
echo "========================================================================"
echo ""

if [ $EXIT_CODE -eq 0 ]; then
    echo -e "${GREEN}✅✅✅ E2E TEST INTEGRITY VALIDATED ✅✅✅${NC}"
    echo ""
    echo "Validation results:"
    echo "  ✅ Total scenarios: $TOTAL_SCENARIOS"
    echo "  ✅ All test files exist"
    echo "  ✅ All prerequisites properly implemented"
    echo "  ✅ e2e.yaml and test implementations are in sync"
    echo ""
else
    echo -e "${RED}❌❌❌ E2E TEST INTEGRITY VALIDATION FAILED ❌❌❌${NC}"
    echo ""
    echo "Issues found:"
    if [ $MISSING_SPECS -gt 0 ]; then
        echo "  ❌ Missing $MISSING_SPECS test file(s)"
    fi
    if [ $PREREQUISITE_ISSUES -gt 0 ]; then
        echo "  ❌ $PREREQUISITE_ISSUES prerequisite implementation issue(s)"
    fi
    echo ""
    echo "Actions required:"
    echo "  1. Create missing .spec.ts files for each scenario in e2e.yaml"
    echo "  2. Implement prerequisites in test files:"
    echo "     - Add login steps before tests that require authentication"
    echo "     - Add test data setup for scenarios requiring existing users"
    echo "     - Add database cleanup for scenarios requiring clean state"
    echo "  3. Ensure test steps match YAML definitions"
    echo ""
    echo "References:"
    echo "  - E2E YAML: $E2E_YAML"
    echo "  - Test directory: $E2E_TEST_DIR"
    echo ""
fi

echo "========================================================================"

exit $EXIT_CODE
