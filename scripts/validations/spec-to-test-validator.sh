#!/bin/bash

# 仕様書→テスト実装整合性検証スクリプト
# design.md と playwright-flows.yaml に定義された仕様が、
# 実際のPlaywrightテストとして実装されているかを検証
#
# 使い方:
#   ./dev-kit/scripts/validations/spec-to-test-validator.sh <spec-name>
#
# 例:
#   ./dev-kit/scripts/validations/spec-to-test-validator.sh user-authentication
#
# 終了コード:
#   0: 全仕様がテスト実装済み
#   1: 未実装の仕様が存在

set -e

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
PROJECT_ROOT="$(cd "$SCRIPT_DIR/../../.." && pwd)"
LOG_FILE="$PROJECT_ROOT/logs/spec-to-test-validator-$(date +%Y%m%d-%H%M%S).log"

# ログディレクトリ作成
mkdir -p "$PROJECT_ROOT/logs"

# ログ関数
log() {
    echo "[$(date +'%Y-%m-%d %H:%M:%S')] $1" | tee -a "$LOG_FILE"
}

error() {
    echo "[$(date +'%Y-%m-%d %H:%M:%S')] ❌ ERROR: $1" | tee -a "$LOG_FILE"
}

success() {
    echo "[$(date +'%Y-%m-%d %H:%M:%S')] ✅ $1" | tee -a "$LOG_FILE"
}

# 引数チェック
if [ $# -ne 1 ]; then
    error "使い方: $0 <spec-name>"
    exit 1
fi

SPEC_NAME="$1"
SPEC_DIR="$PROJECT_ROOT/dev-kit/docs/specs/$SPEC_NAME"
FLOWS_FILE="$SPEC_DIR/tests/playwright-flows.yaml"
TESTS_DIR="$PROJECT_ROOT/tests/Playwright"

FAILED_CHECKS=0

log "=============================================="
log "仕様書→テスト実装整合性検証開始: $SPEC_NAME"
log "=============================================="

# ============================================
# Check 1: playwright-flows.yaml 存在確認
# ============================================
log ""
log "Check 1: playwright-flows.yaml 存在確認"
log "------------------------------------------"

if [ ! -f "$FLOWS_FILE" ]; then
    error "playwright-flows.yaml が見つかりません: $FLOWS_FILE"
    exit 1
fi

success "playwright-flows.yaml が存在します"

# ============================================
# Check 2: 定義されたフロー数と実装テスト数の比較
# ============================================
log ""
log "Check 2: 定義フロー数と実装テスト数の比較"
log "------------------------------------------"

# YAMLから定義されているフロー数を抽出
# 例: "- id: FLOW-001" の行数をカウント
DEFINED_FLOWS=$(grep -c "^  - id: FLOW-" "$FLOWS_FILE" || echo "0")

log "定義されているフロー数: $DEFINED_FLOWS"

# 実装されているPlaywrightテストファイル数を確認
# tests/Playwright/**/*.spec.ts のファイル数
if [ -d "$TESTS_DIR" ]; then
    IMPLEMENTED_TESTS=$(find "$TESTS_DIR" -name "*.spec.ts" -o -name "*.spec.js" | wc -l | tr -d ' ')
else
    IMPLEMENTED_TESTS=0
fi

log "実装されているテストファイル数: $IMPLEMENTED_TESTS"

# 定義数 > 実装数の場合は警告
if [ "$DEFINED_FLOWS" -gt "$IMPLEMENTED_TESTS" ]; then
    error "定義されたフロー数($DEFINED_FLOWS)が実装テスト数($IMPLEMENTED_TESTS)より多い"
    error "未実装のE2Eテストが存在する可能性があります"
    ((FAILED_CHECKS++))
else
    success "定義フロー数と実装テスト数が一致またはテストが十分に存在"
fi

# ============================================
# Check 3: 各フローIDに対応するテスト実装確認
# ============================================
log ""
log "Check 3: 各フローIDに対応するテスト実装確認"
log "------------------------------------------"

# YAMLから全フローIDを抽出
FLOW_IDS=$(grep "^  - id: FLOW-" "$FLOWS_FILE" | sed 's/.*id: //' | tr -d ' ')

MISSING_FLOWS=()

for flow_id in $FLOW_IDS; do
    log "Checking: $flow_id"

    # テストファイル内で $flow_id が参照されているか確認
    if [ -d "$TESTS_DIR" ]; then
        if grep -r "$flow_id" "$TESTS_DIR" > /dev/null 2>&1; then
            success "$flow_id - テスト実装済み"
        else
            error "$flow_id - テスト実装が見つかりません"
            MISSING_FLOWS+=("$flow_id")
            ((FAILED_CHECKS++))
        fi
    else
        error "$flow_id - テストディレクトリが存在しません"
        MISSING_FLOWS+=("$flow_id")
        ((FAILED_CHECKS++))
    fi
done

# ============================================
# Check 4: 異常系フローの実装確認
# ============================================
log ""
log "Check 4: 異常系フローの実装確認"
log "------------------------------------------"

# YAML内の異常系フロー（type: errorまたはFLOW-006以降）を抽出
ERROR_FLOWS=$(awk '/type: error/ {print prev} {prev=$0}' "$FLOWS_FILE" | grep "id: FLOW-" | sed 's/.*id: //' | tr -d ' ')

ERROR_FLOW_COUNT=$(echo "$ERROR_FLOWS" | wc -w | tr -d ' ')

log "定義されている異常系フロー数: $ERROR_FLOW_COUNT"

if [ "$ERROR_FLOW_COUNT" -eq 0 ]; then
    error "異常系フローが1つも定義されていません"
    error "バリデーションエラー表示などの異常系テストが必要です"
    ((FAILED_CHECKS++))
else
    success "異常系フローが定義されています: $ERROR_FLOW_COUNT 件"

    # 各異常系フローの実装確認
    for error_flow in $ERROR_FLOWS; do
        if [ -d "$TESTS_DIR" ]; then
            if grep -r "$error_flow" "$TESTS_DIR" > /dev/null 2>&1; then
                success "$error_flow - 異常系テスト実装済み"
            else
                error "$error_flow - 異常系テストが未実装"
                ((FAILED_CHECKS++))
            fi
        fi
    done
fi

# ============================================
# Check 5: バリデーションエラー表示テスト確認
# ============================================
log ""
log "Check 5: バリデーションエラー表示テスト確認"
log "------------------------------------------"

# YAMLに "assert_text" + ".form-error" パターンが存在するか確認
VALIDATION_ERROR_ASSERTIONS=$(grep -c "\.form-error" "$FLOWS_FILE" || echo "0")

log "バリデーションエラー表示アサーション数: $VALIDATION_ERROR_ASSERTIONS"

if [ "$VALIDATION_ERROR_ASSERTIONS" -eq 0 ]; then
    error "playwright-flows.yamlに .form-error のアサーションがありません"
    error "バリデーションエラー表示確認が定義されていません"
    ((FAILED_CHECKS++))
else
    success "バリデーションエラー表示アサーションが定義されています"

    # 実装側でも .form-error を確認しているかチェック
    if [ -d "$TESTS_DIR" ]; then
        if grep -r "\.form-error" "$TESTS_DIR" > /dev/null 2>&1; then
            success "テストコードで .form-error の検証が実装されています"
        else
            error "テストコードで .form-error の検証が見つかりません"
            error "バリデーションエラー表示テストが未実装の可能性"
            ((FAILED_CHECKS++))
        fi
    fi
fi

# ============================================
# 最終結果
# ============================================
log ""
log "=============================================="
log "仕様書→テスト実装整合性検証完了"
log "=============================================="

if [ $FAILED_CHECKS -eq 0 ]; then
    success "全ての仕様がテストとして実装されています"
    log "ログファイル: $LOG_FILE"
    exit 0
else
    error "検証失敗: $FAILED_CHECKS 件の問題が見つかりました"

    if [ ${#MISSING_FLOWS[@]} -gt 0 ]; then
        log ""
        log "未実装のフロー:"
        for flow in "${MISSING_FLOWS[@]}"; do
            log "  - $flow"
        done
    fi

    log "ログファイル: $LOG_FILE"
    exit 1
fi
