#!/bin/bash

# リリースゲート検証スクリプト
# 今回発見されたバグを自動検出するための包括的検証
#
# 使い方:
#   ./dev-kit/scripts/validations/release-gate.sh
#
# 終了コード:
#   0: 全検証合格
#   1: 検証失敗（リリース不可）

set -e

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
PROJECT_ROOT="$(cd "$SCRIPT_DIR/../../.." && pwd)"
LOG_FILE="$PROJECT_ROOT/logs/release-gate-$(date +%Y%m%d-%H%M%S).log"

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

# 検証失敗カウンター
FAILED_CHECKS=0

log "=============================================="
log "リリースゲート検証開始"
log "=============================================="

# ============================================
# Gate 0: 仕様書→テスト実装整合性チェック
# ============================================
log ""
log "Gate 0: 仕様書→テスト実装整合性チェック"
log "------------------------------------------"

# 実装済みの全spec名を取得
SPECS_DIR="$PROJECT_ROOT/dev-kit/docs/specs"

if [ -d "$SPECS_DIR" ]; then
    # specs配下のディレクトリ名を取得
    SPEC_NAMES=$(find "$SPECS_DIR" -mindepth 1 -maxdepth 1 -type d -exec basename {} \;)

    for spec_name in $SPEC_NAMES; do
        log "Checking spec: $spec_name"

        FLOWS_FILE="$SPECS_DIR/$spec_name/tests/playwright-flows.yaml"

        if [ -f "$FLOWS_FILE" ]; then
            # spec-testを実行
            if bash "$SCRIPT_DIR/spec-test.sh" "$spec_name"; then
                success "$spec_name - 仕様とテスト実装が一致"
            else
                error "$spec_name - 仕様書に定義されているがテスト未実装のフローが存在"
                ((FAILED_CHECKS++))
            fi
        else
            log "$spec_name - playwright-flows.yaml が存在しません（スキップ）"
        fi
    done
else
    log "specsディレクトリが存在しません（スキップ）"
fi

# ============================================
# Gate 1: ルーティング整合性チェック
# ============================================
log ""
log "Gate 1: ルーティング整合性チェック"
log "------------------------------------------"

# Controllerメソッドとルート定義の整合性チェック
check_route_integrity() {
    local controller_file="$1"
    local routes_file="$2"

    log "Checking: $controller_file"

    # Controllerから public function を抽出（__construct除外）
    controller_methods=$(grep -E '^\s*public function [a-zA-Z]+\(' "$controller_file" | \
        grep -v '__construct' | \
        sed -E 's/.*public function ([a-zA-Z]+)\(.*/\1/' | sort)

    # routes/web.phpからControllerメソッド呼び出しを抽出
    # パターン例: [AuthController::class, 'showSignup']
    route_methods=$(grep -oE "AuthController::class[^]]*'([a-zA-Z]+)'" "$routes_file" | \
        sed -E "s/.*'([a-zA-Z]+)'.*/\1/" | sort | uniq)

    # 差分チェック
    missing_routes=$(comm -23 <(echo "$controller_methods") <(echo "$route_methods"))

    if [ -n "$missing_routes" ]; then
        error "以下のControllerメソッドにルート定義がありません:"
        echo "$missing_routes" | while read method; do
            error "  - $method()"
        done
        ((FAILED_CHECKS++))
        return 1
    else
        success "全Controllerメソッドにルート定義が存在"
        return 0
    fi
}

if [ -f "$PROJECT_ROOT/app/Modules/User/Presentation/Controllers/AuthController.php" ]; then
    check_route_integrity \
        "$PROJECT_ROOT/app/Modules/User/Presentation/Controllers/AuthController.php" \
        "$PROJECT_ROOT/routes/web.php"
else
    log "AuthController not found, skipping route integrity check"
fi

# ============================================
# Gate 2: フロントエンドテンプレートProps整合性チェック
# ============================================
log ""
log "Gate 2: フロントエンドテンプレートProps整合性"
log "------------------------------------------"

check_template_props() {
    local page_file="$1"
    local template_file="$2"

    log "Checking: $(basename $page_file)"

    if [ ! -f "$page_file" ] || [ ! -f "$template_file" ]; then
        log "Files not found, skipping"
        return 0
    fi

    # ページコンポーネントから渡しているpropsを抽出
    page_props=$(grep -A 50 "return (" "$page_file" | \
        grep -E '^\s+[a-zA-Z]+=' | \
        sed -E 's/^\s+([a-zA-Z]+)=.*/\1/' | sort)

    # テンプレートのinterface定義からpropsを抽出
    template_props=$(sed -n '/^interface.*Props/,/^}/p' "$template_file" | \
        grep -E '^\s+[a-zA-Z]+\??' | \
        sed -E 's/^\s+([a-zA-Z]+)\??.*/\1/' | \
        grep -v 'errors\|flash\|hideNavigation' | sort)

    # 差分チェック（必須propsのみ）
    required_template_props=$(sed -n '/^interface.*Props/,/^}/p' "$template_file" | \
        grep -E '^\s+[a-zA-Z]+:' | \
        sed -E 's/^\s+([a-zA-Z]+):.*/\1/' | \
        grep -v 'errors\|flash\|hideNavigation' | sort)

    missing_props=$(comm -23 <(echo "$required_template_props") <(echo "$page_props"))

    if [ -n "$missing_props" ] && [ "$missing_props" != "" ]; then
        error "以下の必須propsが渡されていません:"
        echo "$missing_props" | while read prop; do
            error "  - $prop"
        done
        ((FAILED_CHECKS++))
        return 1
    else
        success "テンプレートpropsが正しく渡されている"
        return 0
    fi
}

# SignupPageのチェック
if [ -f "$PROJECT_ROOT/resources/js/Pages/Auth/SignupPage.tsx" ]; then
    check_template_props \
        "$PROJECT_ROOT/resources/js/Pages/Auth/SignupPage.tsx" \
        "$PROJECT_ROOT/dev-kit/ui-components/src/pages/templates/auth/SignupPage.tsx"
fi

# ============================================
# Gate 3: バリデーションルール整合性チェック
# ============================================
log ""
log "Gate 3: バリデーションルール整合性"
log "------------------------------------------"

check_validation_consistency() {
    local frontend_file="$1"
    local backend_file="$2"

    log "Checking validation rules between frontend and backend"

    if [ ! -f "$frontend_file" ] || [ ! -f "$backend_file" ]; then
        log "Files not found, skipping"
        return 0
    fi

    # フロントエンドからバリデーション対象フィールドを抽出
    frontend_fields=$(awk '/useDynamicValidation\(\{/,/^\s*\}\);/' "$frontend_file" | \
        grep -E '^[[:space:]]+[a-zA-Z_]+:[[:space:]]*\[' | \
        sed -E 's/^[[:space:]]+([a-zA-Z_]+):[[:space:]]*\[.*/\1/' | sort)

    # バックエンドからバリデーションルールのフィールドを抽出
    backend_fields=$(grep -A 50 "public function rules()" "$backend_file" | \
        sed -n '/return \[/,/\];$/p' | \
        grep -E "^\s+['\"]" | \
        sed -E "s/.*['\"]([a-zA-Z_]+)['\"].*/\1/" | sort | uniq)

    # 必須フィールドの差分チェック
    missing_backend=$(comm -23 <(echo "$frontend_fields") <(echo "$backend_fields"))

    if [ -n "$missing_backend" ] && [ "$missing_backend" != "" ]; then
        error "以下のフィールドがバックエンドバリデーションに存在しません:"
        echo "$missing_backend" | while read field; do
            error "  - $field"
        done
        ((FAILED_CHECKS++))
        return 1
    else
        success "フロントエンド・バックエンドのバリデーションルールが一致"
        return 0
    fi
}

# SignupPageのバリデーションチェック
if [ -f "$PROJECT_ROOT/resources/js/Pages/Auth/SignupPage.tsx" ]; then
    check_validation_consistency \
        "$PROJECT_ROOT/resources/js/Pages/Auth/SignupPage.tsx" \
        "$PROJECT_ROOT/app/Modules/User/Presentation/Requests/RegisterRequest.php"
fi

# ============================================
# Gate 4: UIコンポーネントテンプレート使用チェック
# ============================================
log ""
log "Gate 4: UIコンポーネントテンプレート使用チェック"
log "------------------------------------------"

check_template_usage() {
    local page_file="$1"
    local expected_template="$2"

    log "Checking: $(basename $page_file)"

    if [ ! -f "$page_file" ]; then
        log "File not found, skipping"
        return 0
    fi

    # テンプレート使用を確認
    if ! grep -q "$expected_template" "$page_file"; then
        error "$(basename $page_file) が $expected_template を使用していません"
        error "カスタムインラインスタイルの可能性があります"
        ((FAILED_CHECKS++))
        return 1
    else
        success "$(basename $page_file) が正しくテンプレートを使用"
        return 0
    fi
}

# 各ページのテンプレート使用チェック
check_template_usage "$PROJECT_ROOT/resources/js/Pages/Dashboard.tsx" "DashboardPageTemplate"
check_template_usage "$PROJECT_ROOT/resources/js/Pages/Auth/LoginPage.tsx" "LoginPageTemplate"
check_template_usage "$PROJECT_ROOT/resources/js/Pages/Auth/SignupPage.tsx" "SignupPageTemplate"

# ============================================
# Gate 5: 任意項目バリデーションチェック
# ============================================
log ""
log "Gate 5: 任意項目バリデーションチェック"
log "------------------------------------------"

check_optional_field_validation() {
    local frontend_file="$1"
    local backend_file="$2"
    local field_name="$3"

    log "Checking optional field: $field_name"

    if [ ! -f "$frontend_file" ] || [ ! -f "$backend_file" ]; then
        log "Files not found, skipping"
        return 0
    fi

    # バックエンドでnullableかチェック
    is_nullable=$(grep -A 5 "'$field_name'" "$backend_file" | grep -c "nullable")

    if [ "$is_nullable" -gt 0 ]; then
        # フロントエンドで空チェックがあるか確認
        has_empty_check=$(grep -A 20 "$field_name:" "$frontend_file" | \
            grep -c "if (!value.*trim.*===.*''.*return true" || true)

        if [ "$has_empty_check" -eq 0 ]; then
            error "$field_name は任意項目ですが、フロントエンドで空値チェックがありません"
            ((FAILED_CHECKS++))
            return 1
        else
            success "$field_name の任意項目バリデーションが正しく実装されている"
            return 0
        fi
    fi
}

check_optional_field_validation \
    "$PROJECT_ROOT/resources/js/Pages/Auth/SignupPage.tsx" \
    "$PROJECT_ROOT/app/Modules/User/Presentation/Requests/RegisterRequest.php" \
    "phone"

# ============================================
# Gate 6: PHPUnit全テスト実行
# ============================================
log ""
log "Gate 6: PHPUnit全テスト実行"
log "------------------------------------------"

cd "$PROJECT_ROOT"

if ./vendor/bin/sail artisan test --stop-on-failure > /dev/null 2>&1; then
    success "PHPUnit: 全テスト合格"
else
    error "PHPUnit: テスト失敗"
    ./vendor/bin/sail artisan test --stop-on-failure
    ((FAILED_CHECKS++))
fi

# ============================================
# Gate 7: フロントエンドビルド確認
# ============================================
log ""
log "Gate 7: フロントエンドビルド確認"
log "------------------------------------------"

if npm run build > /dev/null 2>&1; then
    success "フロントエンドビルド成功"
else
    error "フロントエンドビルドに失敗しました"
    npm run build
    ((FAILED_CHECKS++))
fi

# ============================================
# Gate 8: フォームバリデーションエラー表示検証
# ============================================
log ""
log "Gate 8: フォームバリデーションエラー表示検証"
log "------------------------------------------"

FORM_VALIDATION_VALIDATOR="$PROJECT_ROOT/dev-kit/scripts/validations/form-error.sh"

if [ -f "$FORM_VALIDATION_VALIDATOR" ]; then
    if bash "$FORM_VALIDATION_VALIDATOR"; then
        success "全フォームでバリデーションエラー表示が正しく実装されています"
    else
        error "フォームバリデーションエラー表示に問題があります"
        ((FAILED_CHECKS++))
    fi
else
    log "フォームバリデーションエラー表示検証スクリプトが存在しません（スキップ）"
fi

# ============================================
# 最終結果
# ============================================
log ""
log "=============================================="
log "リリースゲート検証完了"
log "=============================================="

if [ $FAILED_CHECKS -eq 0 ]; then
    success "全ての検証に合格しました"
    log "ログファイル: $LOG_FILE"
    exit 0
else
    error "検証失敗: $FAILED_CHECKS 件の問題が見つかりました"
    log "ログファイル: $LOG_FILE"
    exit 1
fi
