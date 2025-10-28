#!/bin/bash

# フロントエンド実装の自動検証スクリプト（Pre-commit Hook用）
# このスクリプトは、コミット前に自動実行され、問題を事前に検出します

# set -e を削除（全フェーズを実行するため）

PROJECT_ROOT="/Users/chikau/dev/chikau/spec-workflow"
PAGES_DIR="$PROJECT_ROOT/resources/js/Pages"
ERRORS=0
WARNINGS=0

echo "=================================================="
echo "🔍 フロントエンド実装自動検証"
echo "=================================================="
echo ""

# ==========================================
# Phase 1: useDynamicForm使用検証
# ==========================================
echo "【Phase 1】useDynamicForm使用検証"
echo "--------------------------------------------------"

# 1. form.setField の使用をチェック（存在しないメソッド）
if grep -r "form\.setField" "$PAGES_DIR" 2>/dev/null; then
    echo "❌ CRITICAL ERROR: form.setField が使用されています"
    echo "   正しくは: form.handleChange()"
    echo "   参照: CLAUDE.md セクション2.2.1"
    ERRORS=$((ERRORS + 1))
else
    echo "✅ PASS: form.setField は使用されていません"
fi

# 2. form.data の使用をチェック（存在しないプロパティ）
if grep -r "form\.data\." "$PAGES_DIR" 2>/dev/null; then
    echo "❌ CRITICAL ERROR: form.data が使用されています"
    echo "   正しくは: form.formData"
    echo "   参照: CLAUDE.md セクション2.2.1"
    ERRORS=$((ERRORS + 1))
else
    echo "✅ PASS: form.data は使用されていません"
fi

# 3. validateField の引数チェック（2引数は不要）
if grep -r "validateField.*,.*formData\." "$PAGES_DIR" 2>/dev/null; then
    echo "⚠️  WARNING: validateField に2つ目の引数が渡されています"
    echo "   推奨: handleBlur() を使用してください"
    echo "   例: onEmailBlur={() => form.handleBlur('email')}"
    echo "   参照: CLAUDE.md セクション2.2.1"
    WARNINGS=$((WARNINGS + 1))
fi

# 4. Inertia useFormの使用をチェック（useDynamicFormを使うべき）
if grep -r "from '@inertiajs/react'" "$PAGES_DIR" 2>/dev/null | grep -q "useForm"; then
    echo "❌ CRITICAL ERROR: Inertia.js の useForm が使用されています"
    echo "   正しくは: useDynamicForm を使用してください"
    echo "   参照: CLAUDE.md セクション2.2.1"
    echo ""
    echo "   【正しいインポート】"
    echo "   import { useDynamicForm } from '@/dev-kit/ui-components/src/hooks/forms/dynamicForm';"
    echo ""
    echo "   【誤ったインポート】"
    echo "   import { useForm } from '@inertiajs/react';  // ❌"
    ERRORS=$((ERRORS + 1))
else
    echo "✅ PASS: Inertia useForm は使用されていません"
fi

# 5. setData() の使用をチェック（Inertia useFormのメソッド）
if grep -r "setData(" "$PAGES_DIR" 2>/dev/null | grep -v "^//" | grep -v "/\*" | grep -q .; then
    echo "⚠️  WARNING: setData() が使用されています"
    echo "   これはInertia.js useFormのメソッドです"
    echo "   useDynamicFormでは handleChange() を使用してください"
    echo "   参照: CLAUDE.md セクション2.2.1"
    WARNINGS=$((WARNINGS + 1))
fi

# 6. useDynamicValidation 未使用検出（CRITICAL-010）
DYNAMIC_FORM_PAGES=$(grep -rl "useDynamicForm" "$PAGES_DIR" 2>/dev/null)
if [ -n "$DYNAMIC_FORM_PAGES" ]; then
    for page in $DYNAMIC_FORM_PAGES; do
        if ! grep -q "useDynamicValidation" "$page" 2>/dev/null; then
            if [ -z "$VALIDATION_WARNING_SHOWN" ]; then
                echo "❌ CRITICAL ERROR: useDynamicValidation が使用されていません"
                echo "   useDynamicForm を使用する場合は useDynamicValidation も必須です"
                echo "   参照: tech.md - 'フロントエンドバリデーションは useDynamicForm + useDynamicValidation'"
                echo ""
                echo "   【正しいインポート】"
                echo "   import { useDynamicForm } from '@/dev-kit/ui-components/src/hooks/forms/dynamicForm';"
                echo "   import { useDynamicValidation } from '@/dev-kit/ui-components/src/hooks/forms/dynamicValidation';"
                ERRORS=$((ERRORS + 1))
                VALIDATION_WARNING_SHOWN=1
            fi
            echo "   - $page"
        fi
    done
fi

# 7. form.submit() の直接呼び出し検出（CRITICAL-019）
DIRECT_SUBMIT=$(grep -r "form\.submit()" "$PAGES_DIR" 2>/dev/null | grep -v "handleSubmit" | grep -v "//" | grep -v "/\*")
if [ -n "$DIRECT_SUBMIT" ]; then
    echo "❌ CRITICAL ERROR: form.submit() が直接呼び出されています"
    echo "   推奨: バリデーション付きの handleSubmit を使用してください"
    echo "   例: const handleSubmit = (e) => { e.preventDefault(); if (form.validate()) form.submit(); }"
    echo "   参照: dev-kit/ui-components/src/hooks/README.md"
    echo "$DIRECT_SUBMIT" | head -3
    ERRORS=$((ERRORS + 1))
fi

echo ""

# ==========================================
# Phase 2: TypeScriptコンパイルチェック
# ==========================================
echo "【Phase 2】TypeScriptコンパイルチェック"
echo "--------------------------------------------------"

cd "$PROJECT_ROOT"

# TypeScriptエラーをチェック（resources/js配下のみ）
TS_ERRORS=$(./vendor/bin/sail exec laravel.test npx tsc --noEmit 2>&1 | grep "resources/js" | grep -i "error" || true)
if [ -n "$TS_ERRORS" ]; then
    echo "❌ CRITICAL ERROR: TypeScriptコンパイルエラーが検出されました"
    echo "$TS_ERRORS"
    echo "   詳細: 上記のエラーメッセージを確認してください"
    ERRORS=$((ERRORS + 1))
else
    echo "✅ PASS: TypeScriptコンパイルエラーなし（resources/js配下）"
fi

# 警告-005: any型の使用検出
ANY_TYPE_COUNT=$(grep -r ": any\|<any>" "$PAGES_DIR" 2>/dev/null | grep -v "//" | grep -v "/\*" | wc -l)
if [ "$ANY_TYPE_COUNT" -gt 0 ]; then
    echo "⚠️  WARNING: any型の使用が検出されました ($ANY_TYPE_COUNT 箇所)"
    echo "   推奨: 具体的な型定義を使用してください"
    echo "   参照: TypeScript型安全性のベストプラクティス"
    grep -rn ": any\|<any>" "$PAGES_DIR" 2>/dev/null | grep -v "//" | grep -v "/\*" | head -5
    WARNINGS=$((WARNINGS + 1))
fi

echo ""

# ==========================================
# Phase 3: 禁止パターンチェック
# ==========================================
echo "【Phase 3】禁止パターンチェック"
echo "--------------------------------------------------"

# 1. シンボリックリンクチェック（禁止）
if find "$PAGES_DIR" -type l 2>/dev/null | grep -q .; then
    echo "❌ CRITICAL ERROR: シンボリックリンクが検出されました"
    echo "   禁止: dev-kit/ui-componentsテンプレートへのシンボリックリンク"
    echo "   正しくは: ラッパーコンポーネントを作成"
    echo "   詳細: CLAUDE.md セクション2.2"
    find "$PAGES_DIR" -type l 2>/dev/null
    ERRORS=$((ERRORS + 1))
else
    echo "✅ PASS: シンボリックリンクは使用されていません"
fi

# 2. 独自UIコンポーネントチェック（推奨しない）
CUSTOM_COMPONENTS=$(find "$PROJECT_ROOT/resources/js/Components" -type f -name "*.tsx" 2>/dev/null | wc -l)
if [ "$CUSTOM_COMPONENTS" -gt 0 ]; then
    echo "⚠️  WARNING: 独自UIコンポーネントが検出されました ($CUSTOM_COMPONENTS 件)"
    echo "   推奨: dev-kit/ui-componentsテンプレートを使用してください"
    echo "   詳細: CLAUDE.md セクション2.2"
    WARNINGS=$((WARNINGS + 1))
else
    echo "✅ PASS: 独自UIコンポーネントは使用されていません"
fi

# 3. インタラクティブHTML要素の直接使用チェック
if grep -r "<input\|<button\|<select\|<textarea" "$PAGES_DIR" 2>/dev/null | grep -v "// " | grep -v "/\*" | grep -q .; then
    echo "⚠️  WARNING: インタラクティブHTML要素の直接使用が検出されました"
    echo "   推奨: dev-kit/ui-componentsコンポーネントを使用してください"
    echo "   参照: CLAUDE.md セクション2.1"
    WARNINGS=$((WARNINGS + 1))
fi

# 4. hideNavigationプロパティのチェック（デモUI非表示）
# 認証ページ（Auth/）では hideNavigation={true} が必須
AUTH_PAGES_DIR="$PAGES_DIR/Auth"

if [ -d "$AUTH_PAGES_DIR" ]; then
    # 認証ページで hideNavigation={false} を検出（CRITICAL ERROR）
    AUTH_HIDE_NAV_FALSE=$(grep -r "hideNavigation={false}" "$AUTH_PAGES_DIR" 2>/dev/null)
    if [ -n "$AUTH_HIDE_NAV_FALSE" ]; then
        echo "❌ CRITICAL ERROR: 認証ページで hideNavigation={false} が検出されました"
        echo "   全ての認証ページ（ログイン前）では必ず hideNavigation={true} を設定すること"
        echo "   理由: Inertia.jsではReact Router未使用のため、明示的に指定しないとデモ用カテゴリーメニューが表示される"
        echo "   対象ページ: LoginPage, SignupPage, SignupConfirmPage, SignupCompletePage, ForgotPasswordPage, ResetPasswordPage"
        echo "   参照: CLAUDE.md フロントエンド実装セクション"
        echo ""
        echo "$AUTH_HIDE_NAV_FALSE"
        ERRORS=$((ERRORS + 1))
    fi

    # 認証ページで hideNavigation 未設定を検出（CRITICAL ERROR）
    AUTH_MISSING_HIDE_NAV=$(grep -rL "hideNavigation" "$AUTH_PAGES_DIR" 2>/dev/null | grep -E "\.(tsx|jsx)$")
    if [ -n "$AUTH_MISSING_HIDE_NAV" ]; then
        echo "❌ CRITICAL ERROR: 認証ページで hideNavigation プロパティが未設定です"
        echo "   全ての認証ページ（ログイン前）では必ず hideNavigation={true} を設定すること"
        echo "   理由: Inertia.jsではReact Router未使用のため、明示的に指定しないとデモ用カテゴリーメニューが表示される"
        echo "   参照: CLAUDE.md フロントエンド実装セクション"
        echo ""
        echo "$AUTH_MISSING_HIDE_NAV"
        ERRORS=$((ERRORS + 1))
    fi

    if [ -z "$AUTH_HIDE_NAV_FALSE" ] && [ -z "$AUTH_MISSING_HIDE_NAV" ]; then
        echo "✅ PASS: 全ての認証ページで hideNavigation={true} が設定されています"
    fi
fi

# その他のページでの hideNavigation={false} は WARNING レベル
OTHER_HIDE_NAV_FALSE=$(grep -r "hideNavigation={false}" "$PAGES_DIR" 2>/dev/null | grep -v "/Auth/")
if [ -n "$OTHER_HIDE_NAV_FALSE" ]; then
    echo "⚠️  WARNING: hideNavigation={false} が検出されました（認証ページ以外）"
    echo "   デモUI要素（カテゴリー、表示モード等）が表示される可能性があります"
    echo "   推奨: hideNavigation={true} を設定してください"
    echo "$OTHER_HIDE_NAV_FALSE"
    WARNINGS=$((WARNINGS + 1))
fi

# 5. dev-kit/ui-componentsディレクトリの直接編集チェック（禁止）
UI_COMPONENTS_DIR="$PROJECT_ROOT/dev-kit/ui-components"
if [ -d "$UI_COMPONENTS_DIR/.git" ]; then
    # dev-kit/ui-componentsがGitサブモジュールの場合
    cd "$UI_COMPONENTS_DIR"
    MODIFIED_FILES=$(git status --porcelain 2>/dev/null | grep -E "^ M|^M " | wc -l)
    if [ "$MODIFIED_FILES" -gt 0 ]; then
        echo "❌ CRITICAL ERROR: dev-kit/ui-componentsディレクトリ内のファイルが変更されています"
        echo "   禁止: dev-kit/ui-componentsのファイルを直接編集してはいけません"
        echo "   参照: CLAUDE.md セクション2.1"
        git status --porcelain | grep -E "^ M|^M "
        ERRORS=$((ERRORS + 1))
    fi
    cd "$PROJECT_ROOT"
fi

# 6. CSS読込設定チェック（STEP 3）
APP_TSX="$PROJECT_ROOT/resources/js/app.tsx"
if [ -f "$APP_TSX" ]; then
    # dev-kit/ui-components CSSインポート確認
    if ! grep -q "import.*@/\dev-kit/ui-components.*index\.css" "$APP_TSX" 2>/dev/null; then
        echo "⚠️  WARNING: dev-kit/ui-components CSSのインポートが見つかりません"
        echo "   app.tsxに以下を追加してください:"
        echo "   import '@/dev-kit/ui-components/src/index.css';"
        echo "   参照: CLAUDE.md セクション2.1 STEP 3"
        WARNINGS=$((WARNINGS + 1))
    fi

    # Tailwind CSS削除後の app.css インポート残存チェック
    if grep -q "import.*\.\.\/css\/app\.css" "$APP_TSX" 2>/dev/null; then
        echo "⚠️  WARNING: app.cssのインポートが残存しています"
        echo "   Tailwind CSS削除後は不要です（削除推奨）"
        echo "   参照: CLAUDE.md セクション2.1 STEP 3"
        WARNINGS=$((WARNINGS + 1))
    fi
fi

# 7. デモUI用propsの使用チェック（禁止）
DEMO_PROPS=$(grep -r "categories={\|viewMode=\|showFilters={" "$PAGES_DIR" 2>/dev/null)
if [ -n "$DEMO_PROPS" ]; then
    echo "⚠️  WARNING: デモUI用propsが使用されています"
    echo "   禁止: categories, viewMode, showFilters プロパティ"
    echo "   参照: CLAUDE.md セクション2.2"
    echo "$DEMO_PROPS"
    WARNINGS=$((WARNINGS + 1))
fi

# 8. HTMLネイティブバリデーション属性検出（CRITICAL-020）
HTML_VALIDATION=$(grep -r "required\|type=\"email\"\|minlength\|maxlength\|pattern" "$PAGES_DIR" 2>/dev/null | grep -v "// " | grep -v "/\*" | grep -v "inputType=" | grep -v "fieldType=")
if [ -n "$HTML_VALIDATION" ]; then
    HTML_VALIDATION_COUNT=$(echo "$HTML_VALIDATION" | wc -l)
    echo "❌ CRITICAL ERROR: HTMLネイティブバリデーション属性が使用されています ($HTML_VALIDATION_COUNT 箇所)"
    echo "   禁止: required, type=\"email\", minlength, maxlength, pattern 属性"
    echo "   推奨: useDynamicValidation でバリデーションルールを定義"
    echo "   参照: tech.md - 'HTMLネイティブのバリデーション属性は使用禁止'"
    echo ""
    echo "   【正しい実装例】"
    echo "   const validationRules = {"
    echo "     email: [{ type: 'required' }, { type: 'email' }],"
    echo "     password: [{ type: 'required' }, { type: 'min', value: 8 }]"
    echo "   };"
    echo ""
    echo "$HTML_VALIDATION" | head -5
    ERRORS=$((ERRORS + 1))
fi

# 9. console.log 残存検出（警告-006）
CONSOLE_LOG_COUNT=$(grep -r "console\.log\|console\.error" "$PAGES_DIR" 2>/dev/null | grep -v "// " | grep -v "/\*" | wc -l)
if [ "$CONSOLE_LOG_COUNT" -gt 0 ]; then
    echo "⚠️  WARNING: console.log/console.error が残存しています ($CONSOLE_LOG_COUNT 箇所)"
    echo "   推奨: プロダクションコードからデバッグコードを削除してください"
    echo "   参照: コード品質ベストプラクティス"
    grep -rn "console\.log\|console\.error" "$PAGES_DIR" 2>/dev/null | grep -v "// " | grep -v "/\*" | head -5
    WARNINGS=$((WARNINGS + 1))
fi

# 10. window.location.href 直接使用検出（CRITICAL-021）
WINDOW_LOCATION=$(grep -r "window\.location\.href\|window\.location\.replace" "$PAGES_DIR" 2>/dev/null | grep -v "// " | grep -v "/\*")
if [ -n "$WINDOW_LOCATION" ]; then
    echo "❌ CRITICAL ERROR: window.location の直接使用が検出されました"
    echo "   推奨: Inertia.js の router.visit() を使用してください"
    echo "   例: import { router } from '@inertiajs/react';"
    echo "       router.visit('/login');"
    echo "   参照: Inertia.js ドキュメント"
    echo "$WINDOW_LOCATION" | head -3
    ERRORS=$((ERRORS + 1))
fi

echo ""

# ==========================================
# Phase 4: Tailwind CSS残存チェック
# ==========================================
echo "【Phase 4】Tailwind CSS残存チェック"
echo "--------------------------------------------------"

if grep -r "tailwind" "$PROJECT_ROOT/package.json" "$PROJECT_ROOT/resources/css/" 2>/dev/null; then
    echo "❌ CRITICAL ERROR: Tailwind CSS の残存が検出されました"
    echo "   必須: Tailwind CSSを完全削除してください"
    echo "   詳細: CLAUDE.md 初期セットアップ"
    ERRORS=$((ERRORS + 1))
else
    echo "✅ PASS: Tailwind CSSは削除されています"
fi

# CRITICAL-022: className に Tailwind クラス名検出
TAILWIND_CLASSES=$(grep -r "className=\".*\(flex\|grid\|bg-\|text-\|p-\|m-\|w-\|h-\)" "$PAGES_DIR" 2>/dev/null | grep -v "// " | grep -v "/\*")
if [ -n "$TAILWIND_CLASSES" ]; then
    TAILWIND_CLASS_COUNT=$(echo "$TAILWIND_CLASSES" | wc -l)
    echo "❌ CRITICAL ERROR: Tailwind CSSクラス名が使用されています ($TAILWIND_CLASS_COUNT 箇所)"
    echo "   禁止: flex, grid, bg-, text-, p-, m-, w-, h- 等のTailwindクラス"
    echo "   推奨: dev-kit/ui-components のコンポーネントを使用"
    echo "   参照: tech.md - 'Tailwind CSS禁止'"
    echo "$TAILWIND_CLASSES" | head -5
    ERRORS=$((ERRORS + 1))
fi

echo ""

# ==========================================
# Phase 5: 推奨パターン使用状況
# ==========================================
echo "【Phase 5】推奨パターン使用状況"
echo "--------------------------------------------------"

# useDynamicForm使用状況
HANDLE_CHANGE_COUNT=$(grep -r "form\.handleChange" "$PAGES_DIR" 2>/dev/null | wc -l || echo "0")
HANDLE_BLUR_COUNT=$(grep -r "form\.handleBlur" "$PAGES_DIR" 2>/dev/null | wc -l || echo "0")
FORM_DATA_COUNT=$(grep -r "form\.formData\." "$PAGES_DIR" 2>/dev/null | wc -l || echo "0")
DYNAMIC_FORM_IMPORT=$(grep -r "useDynamicForm" "$PAGES_DIR" 2>/dev/null | wc -l || echo "0")

echo "【useDynamicForm使用状況】"
echo "  - useDynamicFormインポート: $DYNAMIC_FORM_IMPORT 件"
echo "  - form.handleChange: $HANDLE_CHANGE_COUNT 件"
echo "  - form.handleBlur: $HANDLE_BLUR_COUNT 件"
echo "  - form.formData: $FORM_DATA_COUNT 件"
echo ""

# hideNavigation使用状況
HIDE_NAV_TRUE=$(grep -r "hideNavigation={true}" "$PAGES_DIR" 2>/dev/null | wc -l || echo "0")
echo "【デモUI非表示設定】"
echo "  - hideNavigation={true}: $HIDE_NAV_TRUE 件"
echo ""

# ラッパーコンポーネント使用状況
WRAPPER_IMPORTS=$(grep -r "from '@/\dev-kit/ui-components" "$PAGES_DIR" 2>/dev/null | wc -l || echo "0")
echo "【dev-kit/ui-componentsテンプレート使用状況】"
echo "  - テンプレートインポート: $WRAPPER_IMPORTS 件"
echo ""

if [ "$HANDLE_CHANGE_COUNT" -eq 0 ] && [ "$HANDLE_BLUR_COUNT" -eq 0 ] && [ "$FORM_DATA_COUNT" -eq 0 ]; then
    echo "⚠️  INFO: useDynamicFormの使用が検出されませんでした"
    echo "   フォームを実装する場合は useDynamicForm を使用してください"
    echo "   参照: CLAUDE.md セクション2.2.1"
else
    echo "✅ PASS: useDynamicFormが正しく使用されています"
fi

echo ""

# ==========================================
# Phase 6: バックエンドテスト要件チェック（任意）
# ==========================================
TESTS_DIR="$PROJECT_ROOT/tests"
if [ -d "$TESTS_DIR" ]; then
    echo "【Phase 6】バックエンドテスト要件チェック"
    echo "--------------------------------------------------"

    # 1. テストメソッド名に日本語使用チェック
    JP_TEST_NAMES=$(grep -r "public function test" "$TESTS_DIR" 2>/dev/null | grep -E "[ぁ-んァ-ヶ一-龠]")
    if [ -n "$JP_TEST_NAMES" ]; then
        echo "⚠️  WARNING: テストメソッド名に日本語が使用されています"
        echo "   要件: テストメソッド名は英語のみ使用"
        echo "   参照: CLAUDE.md セクション4"
        echo "$JP_TEST_NAMES" | head -5
        WARNINGS=$((WARNINGS + 1))
    fi

    # 2. @test コメント未記載チェック
    MISSING_TEST_COMMENT=$(grep -r "public function test" "$TESTS_DIR" 2>/dev/null | wc -l)
    TEST_COMMENTS=$(grep -r "/\*\* @test" "$TESTS_DIR" 2>/dev/null | wc -l)
    if [ "$MISSING_TEST_COMMENT" -gt "$TEST_COMMENTS" ]; then
        echo "⚠️  INFO: @test コメントが不足している可能性があります"
        echo "   テストメソッド数: $MISSING_TEST_COMMENT"
        echo "   @test コメント数: $TEST_COMMENTS"
        echo "   推奨形式: /** @test <処理種別> - <処理内容> */"
        echo "   参照: CLAUDE.md セクション4"
    fi

    # 3. テストスキップの使用チェック（禁止）
    SKIP_USAGE=$(grep -r "markTestSkipped\|@skip" "$TESTS_DIR" 2>/dev/null)
    if [ -n "$SKIP_USAGE" ]; then
        echo "❌ CRITICAL ERROR: テストスキップが使用されています"
        echo "   禁止: テスト失敗の無視・スキップ"
        echo "   参照: CLAUDE.md セクション4"
        echo "$SKIP_USAGE"
        ERRORS=$((ERRORS + 1))
    else
        echo "✅ PASS: テストスキップは使用されていません"
    fi

    echo ""
fi

# ==========================================
# Phase 7: バリデーションロジック検証
# ==========================================
echo "【Phase 7】バリデーションロジック検証"
echo "--------------------------------------------------"

# CRITICAL-023: フロントエンドバリデーション未実装検出
FORM_PAGE_USAGE=$(grep -rl "FormPage" "$PAGES_DIR" 2>/dev/null)
if [ -n "$FORM_PAGE_USAGE" ]; then
    for page in $FORM_PAGE_USAGE; do
        if ! grep -q "validationRules" "$page" 2>/dev/null; then
            if [ -z "$VALIDATION_RULES_WARNING_SHOWN" ]; then
                echo "❌ CRITICAL ERROR: FormPage を使用していますが validationRules が定義されていません"
                echo "   tech.md 要件: フロントエンドとバックエンドの両方でバリデーション"
                echo "   参照: tech.md - '二段階バリデーション戦略'"
                echo ""
                echo "   【実装例】"
                echo "   const validationRules = {"
                echo "     email: [{ type: 'required', message: 'メールアドレスは必須です。' }, { type: 'email' }],"
                echo "     password: [{ type: 'required' }, { type: 'min', value: 8 }]"
                echo "   };"
                ERRORS=$((ERRORS + 1))
                VALIDATION_RULES_WARNING_SHOWN=1
            fi
            echo "   - $page"
        fi
    done
fi

# 警告-007: バリデーションメッセージのハードコード検出
HARDCODED_MESSAGES=$(grep -r "message:\s*['\"].*は必須\|message:\s*['\"].*が正しくありません" "$PAGES_DIR" 2>/dev/null)
if [ -n "$HARDCODED_MESSAGES" ]; then
    HARDCODED_COUNT=$(echo "$HARDCODED_MESSAGES" | wc -l)
    echo "⚠️  WARNING: バリデーションメッセージがハードコードされています ($HARDCODED_COUNT 箇所)"
    echo "   推奨: エラーメッセージは lang/ja/validation.php で一元管理"
    echo "   参照: tech.md - 'バリデーションメッセージの統一'"
    echo "$HARDCODED_MESSAGES" | head -3
    WARNINGS=$((WARNINGS + 1))
fi

echo ""

# ==========================================
# 結果サマリー
# ==========================================
echo "=================================================="
echo "📊 検証結果サマリー"
echo "=================================================="
echo ""

if [ "$ERRORS" -eq 0 ] && [ "$WARNINGS" -eq 0 ]; then
    echo "✅ 全てのチェックに合格しました！"
    echo ""
    echo "【次のステップ】"
    echo "  1. エラーがなければ実装完了"
    echo "  2. 必要に応じてビルド実行:"
    echo "     ./vendor/bin/sail npm run build"
    echo ""
    exit 0
elif [ "$ERRORS" -eq 0 ] && [ "$WARNINGS" -gt 0 ]; then
    echo "⚠️  警告が $WARNINGS 件検出されました"
    echo ""
    echo "【警告の確認】"
    echo "  - 上記の警告内容を確認してください"
    echo "  - 可能であれば修正を推奨します"
    echo ""
    echo "【次のステップ】"
    echo "  1. 警告を確認・修正（推奨）"
    echo "  2. 実装完了"
    echo ""
    exit 0
else
    echo "❌ $ERRORS 件のCRITICAL ERRORが検出されました"
    echo ""
    echo "【修正方法】"
    echo "  1. 上記のエラーメッセージを確認"
    echo "  2. CLAUDE.md セクション2 を参照"
    echo "  3. dev-kit/ui-components/src/hooks/README.md を参照"
    echo ""
    echo "【よくあるエラーと修正方法】"
    echo ""
    echo "  ❌ form.setField → ✅ form.handleChange"
    echo "  ❌ form.data.xxx → ✅ form.formData.xxx"
    echo "  ❌ form.validateField(field, value) → ✅ form.handleBlur(field)"
    echo ""
    echo "【詳細ドキュメント】"
    echo "  - CLAUDE.md (セクション2: UIコンポーネント)"
    echo "  - dev-kit/ui-components/src/hooks/README.md (useDynamicForm API)"
    echo "  - dev-kit/ui-components/LARAVEL_INTEGRATION_GUIDE.md"
    echo ""
    exit 1
fi
