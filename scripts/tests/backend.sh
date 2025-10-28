#!/bin/bash

# run-backend-playwright-tests.sh
# バックエンド→ブラウザ連携テスト実行スクリプト（Playwright MCP使用）
#
# 責務: バックエンド実装後のブラウザ連携確認
# 検証対象: バリデーションエラー表示、Flash メッセージ、日本語表示、リダイレクト、DB反映
# 検証対象外: E2Eユーザーシナリオ（integration-playwright-testerの担当）

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
echo "バックエンド→ブラウザ連携テスト実行"
echo "========================================"
echo ""
echo "検証対象: バックエンド連携確認（6テスト）"
echo "  ✅ バリデーションエラーがブラウザに表示される"
echo "  ✅ 日本語が正しく表示される（文字化けなし）"
echo "  ✅ Flash メッセージが表示される"
echo "  ✅ リダイレクトが正しく動作する"
echo "  ✅ データベース変更がブラウザに反映される"
echo "  ✅ エラー処理が適切に動作する"
echo ""
echo "検証対象外:"
echo "  ❌ E2Eユーザーシナリオ（登録→ログイン→ログアウト等）"
echo "  ❌ UI単体テスト"
echo ""

TOTAL_TESTS=6

echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo "📋 事前確認"
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo ""

# Sailが起動しているか確認
if ! ./vendor/bin/sail ps | grep -q "laravel.test.*Up"; then
    echo -e "${RED}❌ Laravel Sailが起動していません${NC}"
    echo ""
    echo "以下のコマンドでSailを起動してください:"
    echo "  ./vendor/bin/sail up -d"
    exit 1
fi

echo -e "${GREEN}✅ Laravel Sail起動確認${NC}"
echo ""

# バックエンド実装確認
if [ ! -d "app/Modules/User" ]; then
    echo -e "${RED}❌ バックエンド実装が存在しません${NC}"
    echo ""
    echo "backend-developerエージェントを先に実行してください"
    exit 1
fi

echo -e "${GREEN}✅ バックエンド実装確認${NC}"
echo ""

# PHPテスト実行確認
echo "PHPテスト実行状態確認中..."
TEST_RESULT=$(./vendor/bin/sail artisan test --filter="User" 2>&1 | grep -E "Tests:.*passed" || echo "Tests not passed")

if [[ "$TEST_RESULT" == "Tests not passed" ]]; then
    echo -e "${RED}❌ PHPテストが失敗しています${NC}"
    echo ""
    echo "backend-test-managerエージェントを先に実行してテストを100%パスさせてください"
    exit 1
fi

echo -e "${GREEN}✅ PHPテスト合格確認${NC}"
echo "   $TEST_RESULT"
echo ""

echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo "🧪 バックエンド→ブラウザ連携テスト実行（6テスト）"
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo ""

echo -e "${YELLOW}⚠️  重要: このスクリプトはPlaywright MCPツールを使用する前提で設計されています${NC}"
echo -e "${YELLOW}    実際のテスト実行はClaude AIがPlaywright MCPツールを使って行います${NC}"
echo ""
echo "【テスト実行方法】"
echo "  1. このスクリプトを参照して、Claude AIに以下6つのテストを依頼してください:"
echo ""
echo "  TC-BE-01: バリデーションエラー表示確認（登録フォーム）"
echo "    - mcp__playwright__browser_navigate({ url: 'http://localhost/register' })"
echo "    - 必須項目を空のまま送信"
echo "    - mcp__playwright__browser_click({ element: '登録ボタン', ref: 'button[type=\"submit\"]' })"
echo "    - mcp__playwright__browser_snapshot() でエラーメッセージを確認"
echo "    - '.form-error' セレクタに日本語エラーメッセージが表示されることを確認"
echo "    - mcp__playwright__browser_take_screenshot({ filename: 'docs/test-reports/screenshots/user-authentication/backend-01-validation-error.png' })"
echo ""
echo "  TC-BE-02: 日本語エラーメッセージ表示確認"
echo "    - mcp__playwright__browser_snapshot() でエラーメッセージに日本語が含まれることを確認"
echo "    - 文字化けがないことを確認（例: '名前は必須です。'）"
echo ""
echo "  TC-BE-03: Flash メッセージ表示確認（成功時）"
echo "    - 正しいデータで登録を実行"
echo "    - mcp__playwright__browser_wait_for({ time: 2 })"
echo "    - mcp__playwright__browser_snapshot() で '.alert' セレクタに成功メッセージが表示されることを確認"
echo ""
echo "  TC-BE-04: リダイレクト動作確認"
echo "    - 登録成功後に /dashboard にリダイレクトされることを確認"
echo "    - expect(page).toHaveURL('http://localhost/dashboard')"
echo ""
echo "  TC-BE-05: データベース反映確認"
echo "    - 登録したユーザーがデータベースに保存されていることを確認"
echo "    - ダッシュボードでユーザー名が表示されることを確認"
echo ""
echo "  TC-BE-06: エラー処理動作確認（重複登録）"
echo "    - 既存ユーザーと同じメールアドレスで登録試行"
echo "    - 'このメールアドレスは既に使用されています。' エラーが表示されることを確認"
echo ""
echo "  2. 各テストの実行結果をログファイルに記録:"
echo "     - logs/playwright-backend-01.log"
echo "     - logs/playwright-backend-02.log"
echo "     - ..."
echo "     - logs/playwright-backend-06.log"
echo ""
echo "  3. 各ログファイルに '✅ SUCCESS' または '❌ FAILURE' を記録"
echo ""
echo "  4. スクリーンショットを保存:"
echo "     - docs/test-reports/screenshots/user-authentication/backend-01-validation-error.png"
echo "     - docs/test-reports/screenshots/user-authentication/backend-02-japanese-message.png"
echo "     - ..."
echo ""

echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo "📊 完了確認コマンド"
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo ""
echo "テスト実行後、以下のコマンドで成功数を確認してください:"
echo ""
echo "  ls docs/test-reports/screenshots/user-authentication/backend-*.png | wc -l"
echo "  # 期待: 6枚以上"
echo ""
echo "  ls logs/playwright-backend-*.log | wc -l"
echo "  # 期待: 6ファイル"
echo ""

exit 0
