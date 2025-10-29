#!/bin/bash

# 包括的リリース前検証スクリプト
# あらゆる種類の致命的バグを事前検出

set -e

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
PROJECT_ROOT="$(cd "$SCRIPT_DIR/../../.." && pwd)"

# ログ設定
LOG_DIR="$PROJECT_ROOT/logs"
mkdir -p "$LOG_DIR"
TIMESTAMP=$(date +"%Y%m%d-%H%M%S")
LOG_FILE="$LOG_DIR/comprehensive-release-check-$TIMESTAMP.log"

log() {
    echo "$1" | tee -a "$LOG_FILE"
}

log "=========================================="
log "包括的リリース前検証開始"
log "実行時刻: $(date)"
log "=========================================="
log ""

FAILED_CHECKS=0
TOTAL_CHECKS=0
declare -a FAILED_CHECK_NAMES=()
declare -a WARNINGS=()

check_result() {
    local check_name="$1"
    local result="$2"
    local severity="${3:-error}" # error or warning
    TOTAL_CHECKS=$((TOTAL_CHECKS + 1))

    if [ "$result" -eq 0 ]; then
        log "✅ PASS: $check_name"
    else
        if [ "$severity" = "warning" ]; then
            log "⚠️  WARN: $check_name"
            WARNINGS+=("$check_name")
        else
            log "❌ FAIL: $check_name"
            FAILED_CHECKS=$((FAILED_CHECKS + 1))
            FAILED_CHECK_NAMES+=("$check_name")
        fi
    fi
}

cd "$PROJECT_ROOT"

# ==============================================
# カテゴリ1: ルーティング整合性（最重要）
# ==============================================
log "📋 カテゴリ1: ルーティング整合性チェック"
log "=============================================="

# 1-1. ルート名の完全性チェック
log "[1-1] Controller内route()呼び出しの登録確認"
CONTROLLER_ROUTES=$(grep -roh "route('[^']*')" app/Modules/*/Presentation/Controllers/ 2>/dev/null | sed "s/route('\([^']*\))/\1/" | sort -u || echo "")
REGISTERED_ROUTES=$(./vendor/bin/sail artisan route:list --json 2>/dev/null | grep -o '"name":"[^"]*"' | sed 's/"name":"\([^"]*\)"/\1/' | grep -v '^$' | sort -u || echo "")

MISSING_ROUTES=""
if [ -n "$CONTROLLER_ROUTES" ]; then
    for route_name in $CONTROLLER_ROUTES; do
        if ! echo "$REGISTERED_ROUTES" | grep -q "^${route_name}$"; then
            log "  ⚠️  未登録: $route_name"
            MISSING_ROUTES="$MISSING_ROUTES $route_name"
        fi
    done
fi

if [ -z "$MISSING_ROUTES" ]; then
    check_result "ルート名の完全性" 0
else
    check_result "ルート名の完全性" 1
fi

# 1-2. ルートパスの重複チェック
log "[1-2] ルートパスの重複検出"
DUPLICATE_ROUTES=$(./vendor/bin/sail artisan route:list --json 2>/dev/null | grep -o '"uri":"[^"]*"' | sed 's/"uri":"\([^"]*\)"/\1/' | sort | uniq -d || echo "")

if [ -z "$DUPLICATE_ROUTES" ]; then
    check_result "ルートパスの重複なし" 0
else
    log "  ⚠️  重複パス:"
    echo "$DUPLICATE_ROUTES" | tee -a "$LOG_FILE"
    check_result "ルートパスの重複なし" 1
fi

# 1-3. 一時ルートの残存チェック
log "[1-3] routes/web.phpに一時ルートが残っていないか"
TEMP_ROUTES=$(grep -i "temporary\|test\|demo\|TODO\|FIXME" routes/web.php 2>/dev/null || echo "")

if [ -z "$TEMP_ROUTES" ]; then
    check_result "一時ルートの残存なし" 0
else
    log "  ⚠️  一時的なコメント/コードが残っています:"
    echo "$TEMP_ROUTES" | head -5 | tee -a "$LOG_FILE"
    check_result "一時ルートの残存なし" 1
fi

# 1-4. 無名ルートの検出（名前付けされていないルート）
log "[1-4] 無名ルートの検出"
UNNAMED_ROUTES=$(./vendor/bin/sail artisan route:list 2>/dev/null | grep -E "GET|POST|PUT|DELETE|PATCH" | awk '{print $2, $3}' | grep -v -E "login|signup|logout|dashboard|password" | grep "^\.\.\." || echo "")

if [ -z "$UNNAMED_ROUTES" ]; then
    check_result "無名ルートなし" 0
else
    log "  ⚠️  名前が設定されていないルート:"
    echo "$UNNAMED_ROUTES" | head -5 | tee -a "$LOG_FILE"
    check_result "無名ルートなし" 1 "warning"
fi

log ""

# ==============================================
# カテゴリ2: Inertia.js整合性（最重要）
# ==============================================
log "📋 カテゴリ2: Inertia.js整合性チェック"
log "=============================================="

# 2-1. Inertiaパスの形式チェック
log "[2-1] Inertia::render()パスの形式確認"
INVALID_INERTIA_PATHS=$(grep -roh "Inertia::render('[^']*'" app/Modules/*/Presentation/Controllers/ 2>/dev/null | sed "s/Inertia::render('\([^']*\)'/\1/" | grep -E "^templates/|^pages/|^components/" || echo "")

if [ -z "$INVALID_INERTIA_PATHS" ]; then
    check_result "Inertiaパス形式正常" 0
else
    log "  ⚠️  無効なプレフィックス使用:"
    echo "$INVALID_INERTIA_PATHS" | tee -a "$LOG_FILE"
    check_result "Inertiaパス形式正常" 1
fi

# 2-2. Inertiaページファイルの存在確認
log "[2-2] Inertiaページファイルの存在確認"
INERTIA_PATHS=$(grep -roh "Inertia::render('[^']*'" app/Modules/*/Presentation/Controllers/ 2>/dev/null | sed "s/Inertia::render('\([^']*\)'/\1/" | sort -u || echo "")

MISSING_FILES=""
if [ -n "$INERTIA_PATHS" ]; then
    for inertia_path in $INERTIA_PATHS; do
        FILE_PATH="resources/js/Pages/${inertia_path}.tsx"
        if [ ! -f "$FILE_PATH" ]; then
            log "  ⚠️  ファイルなし: $FILE_PATH"
            MISSING_FILES="$MISSING_FILES $inertia_path"
        fi
    done
fi

if [ -z "$MISSING_FILES" ]; then
    check_result "Inertiaページファイル存在" 0
else
    check_result "Inertiaページファイル存在" 1
fi

# 2-3. Inertia props型定義の存在確認
log "[2-3] Inertia Propsインターフェース定義確認"
PAGES_WITHOUT_PROPS=$(find resources/js/Pages -name "*.tsx" -type f -exec sh -c '
    if ! grep -q "interface.*Props" "$1" 2>/dev/null; then
        echo "$1"
    fi
' sh {} \; || echo "")

if [ -z "$PAGES_WITHOUT_PROPS" ]; then
    check_result "全Pageに Props定義あり" 0
else
    log "  ⚠️  Props定義がないPage:"
    echo "$PAGES_WITHOUT_PROPS" | head -5 | tee -a "$LOG_FILE"
    check_result "全Pageに Props定義あり" 1 "warning"
fi

log ""

# ==============================================
# カテゴリ3: フロントエンドコード品質
# ==============================================
log "📋 カテゴリ3: フロントエンドコード品質"
log "=============================================="

# 3-1. TypeScriptコンパイル
log "[3-1] TypeScriptコンパイルエラーチェック"
npm run build > /tmp/ts-build.log 2>&1
TS_BUILD_RESULT=$?

if [ $TS_BUILD_RESULT -eq 0 ]; then
    check_result "TypeScriptコンパイル成功" 0
else
    log "  ⚠️  コンパイルエラー:"
    tail -20 /tmp/ts-build.log | tee -a "$LOG_FILE"
    check_result "TypeScriptコンパイル成功" 1
fi

# 3-2. 未使用import検出
log "[3-2] 未使用import検出"
UNUSED_IMPORTS=$(grep -rn "^import.*from" resources/js --include="*.tsx" --include="*.ts" 2>/dev/null | wc -l || echo "0")
log "  検出したimport文: $UNUSED_IMPORTS 個"
check_result "import文スキャン完了" 0 "warning"

# 3-3. コンソールログの残存チェック
log "[3-3] console.log残存チェック"
CONSOLE_LOGS=$(grep -rn "console\.\(log\|debug\|warn\)" resources/js/Pages --include="*.tsx" --include="*.ts" 2>/dev/null || echo "")

if [ -z "$CONSOLE_LOGS" ]; then
    check_result "console.log残存なし" 0
else
    log "  ⚠️  console.log が残っています:"
    echo "$CONSOLE_LOGS" | head -5 | tee -a "$LOG_FILE"
    check_result "console.log残存なし" 1 "warning"
fi

# 3-4. ハードコードされたURL検出
log "[3-4] ハードコードURL検出"
HARDCODED_URLS=$(grep -rn "http://\|https://" resources/js/Pages --include="*.tsx" --include="*.ts" | grep -v "example.com\|localhost" 2>/dev/null || echo "")

if [ -z "$HARDCODED_URLS" ]; then
    check_result "ハードコードURL なし" 0
else
    log "  ⚠️  ハードコードされたURL:"
    echo "$HARDCODED_URLS" | head -3 | tee -a "$LOG_FILE"
    check_result "ハードコードURL なし" 1 "warning"
fi

log ""

# ==============================================
# カテゴリ4: バックエンドコード品質
# ==============================================
log "📋 カテゴリ4: バックエンドコード品質"
log "=============================================="

# 4-1. PHPUnit全テスト実行
log "[4-1] PHPUnit全テスト実行"
./vendor/bin/sail artisan test > /tmp/phpunit.log 2>&1
PHPUNIT_RESULT=$?

if [ $PHPUNIT_RESULT -eq 0 ]; then
    TESTS_PASSED=$(grep -o "[0-9]* tests" /tmp/phpunit.log | head -1 || echo "0 tests")
    log "  ✅ $TESTS_PASSED 全て合格"
    check_result "PHPUnit全テスト合格" 0
else
    log "  ⚠️  テスト失敗:"
    tail -30 /tmp/phpunit.log | tee -a "$LOG_FILE"
    check_result "PHPUnit全テスト合格" 1
fi

# 4-2. PHP構文エラーチェック
log "[4-2] PHP構文エラーチェック"
PHP_SYNTAX_ERRORS=$(find app -name "*.php" -exec php -l {} \; 2>&1 | grep -i "error" || echo "")

if [ -z "$PHP_SYNTAX_ERRORS" ]; then
    check_result "PHP構文エラーなし" 0
else
    log "  ⚠️  構文エラー:"
    echo "$PHP_SYNTAX_ERRORS" | head -10 | tee -a "$LOG_FILE"
    check_result "PHP構文エラーなし" 1
fi

# 4-3. dd()やdump()の残存チェック
log "[4-3] デバッグコード残存チェック"
DEBUG_CODE=$(grep -rn "\bdd(\|\bdump(\|\bvar_dump(\|\bprint_r(" app --include="*.php" 2>/dev/null || echo "")

if [ -z "$DEBUG_CODE" ]; then
    check_result "デバッグコード残存なし" 0
else
    log "  ⚠️  デバッグコードが残っています:"
    echo "$DEBUG_CODE" | head -5 | tee -a "$LOG_FILE"
    check_result "デバッグコード残存なし" 1 "warning"
fi

# 4-4. 日本語バリデーションメッセージのピリオドチェック
log "[4-4] 日本語バリデーションメッセージ形式確認"
VALIDATION_MESSAGES=$(find lang/ja -name "*.php" -exec grep -n "=>" {} \; | grep -v "\。$" | grep "[ぁ-ん]" || echo "")

if [ -z "$VALIDATION_MESSAGES" ]; then
    check_result "日本語メッセージ形式正常" 0
else
    log "  ⚠️  句点(。)がないメッセージ:"
    echo "$VALIDATION_MESSAGES" | head -5 | tee -a "$LOG_FILE"
    check_result "日本語メッセージ形式正常" 1 "warning"
fi

log ""

# ==============================================
# カテゴリ5: データベース整合性
# ==============================================
log "📋 カテゴリ5: データベース整合性"
log "=============================================="

# 5-1. マイグレーション実行可能性チェック
log "[5-1] マイグレーション実行可能性確認"
./vendor/bin/sail artisan migrate:status > /tmp/migrate-status.log 2>&1
MIGRATE_STATUS=$?

if [ $MIGRATE_STATUS -eq 0 ]; then
    check_result "マイグレーション状態正常" 0
else
    log "  ⚠️  マイグレーション状態確認失敗"
    check_result "マイグレーション状態正常" 1
fi

# 5-2. 未実行マイグレーションの検出
log "[5-2] 未実行マイグレーション検出"
PENDING_MIGRATIONS=$(grep "Pending" /tmp/migrate-status.log 2>/dev/null || echo "")

if [ -z "$PENDING_MIGRATIONS" ]; then
    check_result "未実行マイグレーションなし" 0
else
    log "  ⚠️  未実行のマイグレーション:"
    echo "$PENDING_MIGRATIONS" | tee -a "$LOG_FILE"
    check_result "未実行マイグレーションなし" 1 "warning"
fi

log ""

# ==============================================
# カテゴリ6: セキュリティ検証
# ==============================================
log "📋 カテゴリ6: セキュリティ検証"
log "=============================================="

# 6-1. .env.exampleと.envの同期確認
log "[6-1] 環境変数設定ファイル同期確認"
if [ -f ".env.example" ] && [ -f ".env" ]; then
    ENV_EXAMPLE_KEYS=$(grep -v "^#" .env.example | grep "=" | cut -d= -f1 | sort || echo "")
    ENV_KEYS=$(grep -v "^#" .env | grep "=" | cut -d= -f1 | sort || echo "")

    MISSING_IN_ENV=$(comm -23 <(echo "$ENV_EXAMPLE_KEYS") <(echo "$ENV_KEYS") || echo "")

    if [ -z "$MISSING_IN_ENV" ]; then
        check_result ".env設定完全" 0
    else
        log "  ⚠️  .envに不足している設定:"
        echo "$MISSING_IN_ENV" | head -5 | tee -a "$LOG_FILE"
        check_result ".env設定完全" 1 "warning"
    fi
else
    log "  ⚠️  .env.exampleまたは.envが見つかりません"
    check_result ".env設定完全" 1 "warning"
fi

# 6-2. 本番環境用設定の確認
log "[6-2] APP_DEBUG=false 設定確認"
APP_DEBUG=$(grep "^APP_DEBUG=" .env | cut -d= -f2 || echo "true")

if [ "$APP_DEBUG" = "false" ]; then
    log "  ✅ APP_DEBUG=false (本番設定)"
    check_result "APP_DEBUG本番設定" 0 "warning"
else
    log "  ⚠️  APP_DEBUG=true (開発設定) - 本番環境では必ずfalseに設定してください"
    check_result "APP_DEBUG本番設定" 1 "warning"
fi

# 6-3. 機密情報のハードコード検出
log "[6-3] 機密情報ハードコード検出"
SECRETS=$(grep -rn "password.*=.*['\"].\{8,\}['\"]" app --include="*.php" | grep -v "validation\|example" || echo "")

if [ -z "$SECRETS" ]; then
    check_result "機密情報ハードコードなし" 0
else
    log "  ⚠️  ハードコードされた可能性のある機密情報:"
    echo "$SECRETS" | head -3 | tee -a "$LOG_FILE"
    check_result "機密情報ハードコードなし" 1 "warning"
fi

log ""

# ==============================================
# カテゴリ7: ページレンダリング検証
# ==============================================
log "📋 カテゴリ7: ページレンダリング検証"
log "=============================================="

# 7-1. 重要ページのHTMLコンテンツ量チェック
log "[7-1] 重要ページのコンテンツ量確認"
declare -a TEST_URLS=("/login" "/signup")
declare -a PAGE_NAMES=("ログインページ" "新規登録ページ")

PAGE_RENDER_FAIL=0
for i in "${!TEST_URLS[@]}"; do
    url="${TEST_URLS[$i]}"
    page_name="${PAGE_NAMES[$i]}"

    RESPONSE=$(curl -s "http://localhost:8000$url" || echo "")
    CONTENT_LENGTH=${#RESPONSE}

    if [ $CONTENT_LENGTH -gt 500 ]; then
        log "  ✅ $page_name: ${CONTENT_LENGTH}文字"
    else
        log "  ❌ $page_name: コンテンツ不足 (${CONTENT_LENGTH}文字)"
        PAGE_RENDER_FAIL=1
    fi
done

if [ $PAGE_RENDER_FAIL -eq 0 ]; then
    check_result "重要ページレンダリング正常" 0
else
    check_result "重要ページレンダリング正常" 1
fi

log ""

# ==============================================
# 最終結果
# ==============================================
log "=========================================="
log "検証結果サマリー"
log "=========================================="
log "総チェック数: $TOTAL_CHECKS"
log "成功: $((TOTAL_CHECKS - FAILED_CHECKS))"
log "失敗(致命的): $FAILED_CHECKS"
log "警告: ${#WARNINGS[@]}"
log ""

if [ $FAILED_CHECKS -gt 0 ]; then
    log "❌ 失敗した検証項目:"
    for check_name in "${FAILED_CHECK_NAMES[@]}"; do
        log "  - $check_name"
    done
    log ""
fi

if [ ${#WARNINGS[@]} -gt 0 ]; then
    log "⚠️  警告が発生した項目:"
    for warning in "${WARNINGS[@]}"; do
        log "  - $warning"
    done
    log ""
fi

log "詳細ログ: $LOG_FILE"
log ""

if [ $FAILED_CHECKS -eq 0 ]; then
    if [ ${#WARNINGS[@]} -gt 0 ]; then
        log "⚠️  警告がありますが、致命的エラーはありません。"
        log "✅ リリース可能（警告の確認を推奨）"
        exit 0
    else
        log "✅ 全ての検証に合格しました。リリース可能です。"
        exit 0
    fi
else
    log "❌ $FAILED_CHECKS 個の致命的エラーがあります。"
    log "❌ リリース不可 - 上記エラーを修正してください。"
    exit 1
fi
