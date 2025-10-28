#!/bin/bash

# バリデーションエラー表示E2Eテスト
# 今回発見された2つのバグを自動検出するためのPlaywrightテスト
#
# 使い方:
#   ./dev-kit/scripts/validations/validation-error-display-test.sh
#
# 終了コード:
#   0: 全テスト合格
#   1: テスト失敗

set -e

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
PROJECT_ROOT="$(cd "$SCRIPT_DIR/../../.." && pwd)"
LOG_FILE="$PROJECT_ROOT/logs/validation-error-display-test-$(date +%Y%m%d-%H%M%S).log"

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

FAILED_TESTS=0

log "=============================================="
log "バリデーションエラー表示E2Eテスト開始"
log "=============================================="

# ============================================
# テスト1: パスワード不一致エラー表示確認
# ============================================
log ""
log "Test 1: パスワード不一致エラー表示確認"
log "------------------------------------------"

TEST_SCRIPT="$PROJECT_ROOT/dev-kit/scripts/validations/playwright-tests/password-mismatch-error-test.js"

if [ ! -f "$TEST_SCRIPT" ]; then
    error "テストスクリプトが見つかりません: $TEST_SCRIPT"
    ((FAILED_TESTS++))
else
    log "Playwrightテスト実行中..."

    # Playwrightテスト実行
    if npx playwright test "$TEST_SCRIPT" --reporter=line > /dev/null 2>&1; then
        success "パスワード不一致エラーが正しく表示される"
    else
        error "パスワード不一致エラーが表示されません"
        npx playwright test "$TEST_SCRIPT" --reporter=line
        ((FAILED_TESTS++))
    fi
fi

# ============================================
# テスト2: 利用規約同意エラー表示確認
# ============================================
log ""
log "Test 2: 利用規約同意エラー表示確認"
log "------------------------------------------"

TEST_SCRIPT="$PROJECT_ROOT/dev-kit/scripts/validations/playwright-tests/terms-agreement-error-test.js"

if [ ! -f "$TEST_SCRIPT" ]; then
    error "テストスクリプトが見つかりません: $TEST_SCRIPT"
    ((FAILED_TESTS++))
else
    log "Playwrightテスト実行中..."

    # Playwrightテスト実行
    if npx playwright test "$TEST_SCRIPT" --reporter=line > /dev/null 2>&1; then
        success "利用規約同意エラーが正しく表示される"
    else
        error "利用規約同意エラーが表示されません"
        npx playwright test "$TEST_SCRIPT" --reporter=line
        ((FAILED_TESTS++))
    fi
fi

# ============================================
# 最終結果
# ============================================
log ""
log "=============================================="
log "バリデーションエラー表示E2Eテスト完了"
log "=============================================="

if [ $FAILED_TESTS -eq 0 ]; then
    success "全てのバリデーションエラー表示テストに合格"
    log "ログファイル: $LOG_FILE"
    exit 0
else
    error "テスト失敗: $FAILED_TESTS 件の問題が見つかりました"
    log "ログファイル: $LOG_FILE"
    exit 1
fi
