#!/bin/bash

# run-frontend-playwright-tests.sh
# フロントエンドUI単体テスト実行スクリプト（Playwright MCP使用）
#
# 責務: バックエンド未実装段階でのUI品質保証
# 検証対象: ページ表示、フォーム入力、ボタン動作、dev-kit/ui-componentsセレクタ等
# 検証対象外: バックエンドレスポンス、バリデーションエラー、データベース連携

set -e

# 色定義
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

LOG_DIR="logs"
SCREENSHOT_DIR="docs/test-reports/screenshots/user-authentication"

mkdir -p "$LOG_DIR"
mkdir -p "$SCREENSHOT_DIR"

echo "========================================"
echo "フロントエンドUI単体テスト実行"
echo "========================================"
echo ""
echo "検証対象: UI表示・操作性（8テスト）"
echo "  ✅ ページ表示確認（真っ白でない）"
echo "  ✅ フォーム表示確認"
echo "  ✅ キーボード入力動作"
echo "  ✅ ボタンクリック動作"
echo "  ✅ dev-kit/ui-componentsセレクタ存在確認"
echo "  ✅ フロントエンドリアルタイムバリデーション確認（onBlur時エラー表示）⭐最重要"
echo "  ✅ SPレイアウト表示"
echo "  ✅ ハンバーガーメニュー動作"
echo ""
echo "検証対象外:"
echo "  ❌ バックエンドレスポンス"
echo "  ❌ バリデーションエラー内容"
echo "  ❌ データベース保存"
echo ""

TOTAL_TESTS=8
PASSED_TESTS=0
FAILED_TESTS=0

# Sailが起動しているか確認
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo "📋 事前確認"
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo ""

if ! ./vendor/bin/sail ps | grep -q "laravel.test.*Up"; then
    echo -e "${RED}❌ Laravel Sailが起動していません${NC}"
    echo ""
    echo "以下のコマンドでSailを起動してください:"
    echo "  ./vendor/bin/sail up -d"
    exit 1
fi

echo -e "${GREEN}✅ Laravel Sail起動確認${NC}"
echo ""

# Viteビルド確認
echo "Viteビルド状態確認中..."
if [ ! -d "public/build" ]; then
    echo -e "${YELLOW}⚠️  public/buildが存在しません。ビルドを実行します...${NC}"
    ./vendor/bin/sail npm run build
fi
echo -e "${GREEN}✅ Viteビルド確認${NC}"
echo ""

echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo "🧪 UI単体テスト実行（8テスト）"
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo ""

# 注意事項
echo -e "${YELLOW}⚠️  重要: このスクリプトはPlaywright MCPツールを使用する前提で設計されています${NC}"
echo -e "${YELLOW}    実際のテスト実行はClaude AIがPlaywright MCPツールを使って行います${NC}"
echo ""
echo "【テスト実行方法】"
echo "  1. このスクリプトを参照して、Claude AIに以下8つのテストを依頼してください:"
echo ""
echo "  TC-UI-01: ログインページ表示確認"
echo "    - mcp__playwright__browser_navigate({ url: 'http://localhost/login' })"
echo "    - mcp__playwright__browser_snapshot() でページが真っ白でないことを確認"
echo "    - mcp__playwright__browser_take_screenshot({ filename: 'docs/test-reports/screenshots/user-authentication/frontend-01-login-page.png' })"
echo ""
echo "  TC-UI-02: フォーム入力動作確認（Loginページ）"
echo "    - mcp__playwright__browser_type({ element: 'メールアドレス', ref: 'input[name=\"email\"]', text: 'test@example.com' })"
echo "    - mcp__playwright__browser_type({ element: 'パスワード', ref: 'input[name=\"password\"]', text: 'password123' })"
echo "    - mcp__playwright__browser_snapshot() で入力値を確認"
echo ""
echo "  TC-UI-03: フロントエンドリアルタイムバリデーション確認（⭐最重要）"
echo "    - 目的: useDynamicFormのonBlur時バリデーションを検証"
echo "    - 手順:"
echo "      1. メールアドレス欄に不正な値を入力: 'invalid-email'"
echo "         mcp__playwright__browser_type({ element: 'メールアドレス', ref: 'input[name=\"email\"]', text: 'invalid-email' })"
echo "      2. フォーカスを外す（Tab押下またはクリック）"
echo "         mcp__playwright__browser_press_key({ key: 'Tab' })"
echo "      3. 即座にエラーメッセージが表示されることを確認"
echo "         mcp__playwright__browser_snapshot()"
echo "         → '.form-error' セレクタに '有効なメールアドレスを入力してください' が表示されること"
echo "      4. スクリーンショット保存"
echo "         mcp__playwright__browser_take_screenshot({ filename: 'docs/test-reports/screenshots/user-authentication/frontend-03-realtime-validation.png' })"
echo "      5. 正しい値に修正してエラーが消えることを確認"
echo "         mcp__playwright__browser_type({ element: 'メールアドレス', ref: 'input[name=\"email\"]', text: 'test@example.com' })"
echo "         mcp__playwright__browser_press_key({ key: 'Tab' })"
echo "         → '.form-error' が非表示になること"
echo ""
echo "  TC-UI-04: ボタンクリック動作確認"
echo "    - mcp__playwright__browser_click({ element: 'ログインボタン', ref: 'button[type=\"submit\"]' })"
echo "    - クリック後のページ遷移またはエラー表示を確認"
echo ""
echo "  TC-UI-05: dev-kit/ui-componentsセレクタ存在確認"
echo "    - mcp__playwright__browser_snapshot() で .form-input, .form-error, .alert セレクタの存在を確認"
echo ""
echo "  TC-UI-06: 新規登録ページ表示確認"
echo "    - mcp__playwright__browser_navigate({ url: 'http://localhost/register' })"
echo "    - mcp__playwright__browser_snapshot()"
echo "    - mcp__playwright__browser_take_screenshot({ filename: 'docs/test-reports/screenshots/user-authentication/frontend-06-register-page.png' })"
echo ""
echo "  TC-UI-07: パスワードリセットページ表示確認"
echo "    - mcp__playwright__browser_navigate({ url: 'http://localhost/forgot-password' })"
echo "    - mcp__playwright__browser_snapshot()"
echo ""
echo "  TC-UI-08: SPレイアウト表示確認"
echo "    - mcp__playwright__browser_resize({ width: 375, height: 667 })"
echo "    - mcp__playwright__browser_snapshot() でSPレイアウトを確認"
echo ""
echo "  ⚠️  重要: TC-UI-03（フロントエンドリアルタイムバリデーション）は必須テストです"
echo "     これにより、バックエンド送信前にクライアント側で不正入力を防止できることを確認します"
echo "     dev-kit/ui-componentsのuseDynamicForm + useDynamicValidationの動作を検証します"
echo ""
echo "  2. 各テストの実行結果をログファイルに記録:"
echo "     - logs/playwright-frontend-01.log"
echo "     - logs/playwright-frontend-02.log"
echo "     - ..."
echo "     - logs/playwright-frontend-08.log"
echo ""
echo "  3. 各ログファイルに '✅ SUCCESS' または '❌ FAILURE' を記録"
echo ""
echo "  4. スクリーンショットを保存:"
echo "     - docs/test-reports/screenshots/user-authentication/frontend-01-login-page.png"
echo "     - docs/test-reports/screenshots/user-authentication/frontend-02-form-input.png"
echo "     - ..."
echo ""

echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo "📊 完了確認コマンド"
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo ""
echo "テスト実行後、以下のコマンドで成功数を確認してください:"
echo ""
echo "  grep -l '✅ SUCCESS' logs/playwright-frontend-*.log | wc -l"
echo "  # 期待: 8"
echo ""
echo "  ls docs/test-reports/screenshots/user-authentication/frontend-*.png | wc -l"
echo "  # 期待: 8枚以上"
echo ""

exit 0
