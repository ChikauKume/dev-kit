#!/bin/bash

# フォームバリデーションエラー表示検証スクリプト
# 全フォームページで異常系バリデーションエラーが表示されることを検証
#
# 使い方:
#   ./dev-kit/scripts/validations/form-validation-error-display-validator.sh
#
# 終了コード:
#   0: 全フォームで異常系バリデーションが正しく実装されている
#   1: バリデーションエラー表示に問題がある

set -e

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
PROJECT_ROOT="$(cd "$SCRIPT_DIR/../../.." && pwd)"
LOG_FILE="$PROJECT_ROOT/logs/form-validation-error-display-$(date +%Y%m%d-%H%M%S).log"

mkdir -p "$PROJECT_ROOT/logs"

log() {
    echo "[$(date +'%Y-%m-%d %H:%M:%S')] $1" | tee -a "$LOG_FILE"
}

error() {
    echo "[$(date +'%Y-%m-%d %H:%M:%S')] ❌ ERROR: $1" | tee -a "$LOG_FILE"
}

success() {
    echo "[$(date +'%Y-%m-%d %H:%M:%S')] ✅ $1" | tee -a "$LOG_FILE"
}

FAILED_CHECKS=0

log "=============================================="
log "フォームバリデーションエラー表示検証開始"
log "=============================================="

# ============================================
# Step 1: フォームページの検出
# ============================================
log ""
log "Step 1: フォームページの検出"
log "------------------------------------------"

PAGES_DIR="$PROJECT_ROOT/resources/js/Pages"
FORM_PAGES=()

# useDynamicValidation を使用しているページを検出
while IFS= read -r -d '' page_file; do
    if grep -q "useDynamicValidation" "$page_file"; then
        FORM_PAGES+=("$page_file")
        log "検出: $(basename "$page_file")"
    fi
done < <(find "$PAGES_DIR" -name "*.tsx" -print0)

if [ ${#FORM_PAGES[@]} -eq 0 ]; then
    log "フォームページが見つかりませんでした"
    exit 0
fi

log "検出されたフォームページ数: ${#FORM_PAGES[@]}"

# ============================================
# Step 2: 各フォームページのバリデーションルール抽出
# ============================================
log ""
log "Step 2: バリデーションルール抽出"
log "------------------------------------------"

for page_file in "${FORM_PAGES[@]}"; do
    page_name=$(basename "$page_file" .tsx)
    log "解析中: $page_name"

    # useDynamicValidation({ ... }) 内のフィールドを抽出
    validation_fields=$(awk '/useDynamicValidation\(\{/,/\}\);/' "$page_file" | \
        grep -E '^[[:space:]]+[a-zA-Z_]+:[[:space:]]*\[' | \
        sed -E 's/^[[:space:]]+([a-zA-Z_]+):[[:space:]]*\[.*/\1/')

    if [ -n "$validation_fields" ]; then
        field_count=$(echo "$validation_fields" | wc -l | tr -d ' ')
        log "  → $field_count 個のバリデーションフィールドを検出"
    else
        error "  → バリデーションルールが見つかりません"
        ((FAILED_CHECKS++))
    fi
done

# ============================================
# Step 3: バリデーションエラー表示要素の確認
# ============================================
log ""
log "Step 3: バリデーションエラー表示要素の確認"
log "------------------------------------------"

for page_file in "${FORM_PAGES[@]}"; do
    page_name=$(basename "$page_file" .tsx)
    log "確認中: $page_name"

    # ui-componentsテンプレートを使用しているか確認
    uses_template=$(grep -c "PageTemplate" "$page_file" || echo "0")

    if [ "$uses_template" -gt 0 ]; then
        # テンプレート使用の場合: errors props を渡しているか確認
        if grep -q "errors=" "$page_file"; then
            success "  → テンプレートに errors props を渡しています"

            # validation.errors の使用確認
            if grep -q "validation\.errors\." "$page_file"; then
                success "  → validation.errors を使用しています"
            else
                error "  → validation.errors が使用されていません"
                error "     バリデーションエラーの表示ロジックが欠落しています"
                ((FAILED_CHECKS++))
            fi
        else
            error "  → テンプレートに errors props が渡されていません"
            error "     バリデーションエラーがUIに表示されません"
            ((FAILED_CHECKS++))
        fi
    else
        # テンプレート未使用の場合: .form-error クラスの使用確認
        if ! grep -q "form-error" "$page_file"; then
            error "  → .form-error クラスが使用されていません"
            error "     バリデーションエラーがUIに表示されない可能性があります"
            ((FAILED_CHECKS++))
            continue
        fi

        # validation.errors の使用確認
        if ! grep -q "validation\.errors\." "$page_file"; then
            error "  → validation.errors が使用されていません"
            error "     バリデーションエラーの表示ロジックが欠落しています"
            ((FAILED_CHECKS++))
            continue
        fi

        success "  → バリデーションエラー表示要素が実装されています"
    fi
done

# ============================================
# Step 4: 各フィールドのエラー表示確認
# ============================================
log ""
log "Step 4: 各フィールドのエラー表示確認"
log "------------------------------------------"

for page_file in "${FORM_PAGES[@]}"; do
    page_name=$(basename "$page_file" .tsx)

    log "確認中: $page_name"

    # useDynamicValidation({ ... }) 内のフィールドを再抽出
    validation_fields=$(awk '/useDynamicValidation\(\{/,/\}\);/' "$page_file" | \
        grep -E '^[[:space:]]+[a-zA-Z_]+:[[:space:]]*\[' | \
        sed -E 's/^[[:space:]]+([a-zA-Z_]+):[[:space:]]*\[.*/\1/')

    if [ -z "$validation_fields" ]; then
        continue
    fi

    while IFS= read -r field_name; do
        # validation.errors.{field_name} が表示されているか確認
        if grep -q "validation\.errors\.$field_name" "$page_file" || \
           grep -q "errors\?.$field_name" "$page_file"; then
            log "  ✅ $field_name - エラー表示実装済み"
        else
            error "  ❌ $field_name - エラー表示が実装されていません"
            error "     validation.errors.$field_name をUIに表示してください"
            ((FAILED_CHECKS++))
        fi
    done <<< "$validation_fields"
done

# ============================================
# Step 5: フォーム送信前のバリデーション実行確認（任意）
# ============================================
log ""
log "Step 5: フォーム送信前のバリデーション実行確認"
log "------------------------------------------"

for page_file in "${FORM_PAGES[@]}"; do
    page_name=$(basename "$page_file" .tsx)
    log "確認中: $page_name"

    # ui-componentsテンプレートを使用しているか確認
    uses_template=$(grep -c "PageTemplate" "$page_file" || echo "0")

    if [ "$uses_template" -gt 0 ]; then
        log "  ℹ️  INFO: ui-componentsテンプレートを使用しています"
        log "     テンプレート側でバリデーションを実行している可能性があります"
        log "     （validation.validateForm()の明示的な呼び出しは任意）"
        continue
    fi

    # テンプレート未使用の場合のみ厳密にチェック
    # handleSubmit または onSubmit 内で validation.validateForm() が呼ばれているか
    if grep -A 10 "handleSubmit\|onSubmit" "$page_file" | grep -q "validation\.validateForm()"; then
        success "  → フォーム送信前にバリデーションを実行しています"
    else
        error "  → フォーム送信前のバリデーション実行が見つかりません"
        error "     validation.validateForm() を呼び出してください"
        ((FAILED_CHECKS++))
    fi

    # validateForm() の返り値をチェックしているか
    if grep -A 10 "handleSubmit\|onSubmit" "$page_file" | grep -q "if.*validation\.validateForm()"; then
        success "  → バリデーション結果を正しくチェックしています"
    else
        error "  → バリデーション結果のチェックが不足しています"
        error "     if (!validation.validateForm()) { return; } を実装してください"
        ((FAILED_CHECKS++))
    fi
done

# ============================================
# Step 6: playwright-flows.yaml との整合性確認
# ============================================
log ""
log "Step 6: playwright-flows.yaml との整合性確認"
log "------------------------------------------"

SPECS_DIR="$PROJECT_ROOT/dev-kit/docs/specs"

if [ ! -d "$SPECS_DIR" ]; then
    log "specs ディレクトリが存在しません（スキップ）"
else
    # 各spec の playwright-flows.yaml を確認
    for spec_dir in "$SPECS_DIR"/*; do
        if [ ! -d "$spec_dir" ]; then
            continue
        fi

        spec_name=$(basename "$spec_dir")
        flows_file="$spec_dir/tests/playwright-flows.yaml"

        if [ ! -f "$flows_file" ]; then
            continue
        fi

        log "確認中: $spec_name"

        # FLOW-006 または type: error のフローが存在するか
        error_flow_count=$(grep -c "type: error" "$flows_file" || echo "0")

        if [ "$error_flow_count" -eq 0 ]; then
            error "  → 異常系フロー（type: error）が定義されていません"
            error "     フォームバリデーションエラー表示のE2Eテストが必要です"
            ((FAILED_CHECKS++))
        else
            success "  → $error_flow_count 件の異常系フローが定義されています"

            # .form-error アサーションの存在確認
            form_error_assertions=$(grep -c "\.form-error" "$flows_file" || echo "0")

            if [ "$form_error_assertions" -eq 0 ]; then
                error "  → .form-error のアサーションが定義されていません"
                error "     バリデーションエラー表示を確認するステップを追加してください"
                ((FAILED_CHECKS++))
            else
                success "  → .form-error のアサーション定義済み"
            fi
        fi
    done
fi

# ============================================
# 最終結果
# ============================================
log ""
log "=============================================="
log "フォームバリデーションエラー表示検証完了"
log "=============================================="

if [ $FAILED_CHECKS -eq 0 ]; then
    success "全フォームでバリデーションエラー表示が正しく実装されています"
    log "ログファイル: $LOG_FILE"
    exit 0
else
    error "検証失敗: $FAILED_CHECKS 件の問題が見つかりました"
    log ""
    log "【再発防止のポイント】"
    log "1. 全フォームで validation.errors.{field_name} をUIに表示"
    log "2. .form-error クラスを使用してエラーメッセージを表示"
    log "3. フォーム送信前に validation.validateForm() を実行"
    log "4. playwright-flows.yaml に異常系フロー（type: error）を定義"
    log "5. .form-error のアサーションでエラー表示を確認"
    log ""
    log "ログファイル: $LOG_FILE"
    exit 1
fi
