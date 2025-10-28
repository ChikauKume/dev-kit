#!/bin/bash

# run-integration-playwright-tests.sh
# E2E統合テスト実行スクリプト（Playwright MCP使用）
#
# 責務: フロントエンド + バックエンド統合動作確認
# 検証対象: ユーザーシナリオの完全実行（正常系5+異常系6=11フロー）
# 前提条件: frontend-playwright-tester、backend-test-manager、backend-playwright-tester全て完了

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
echo "E2E統合テスト実行"
echo "========================================"
echo ""
echo "検証対象: E2Eユーザーシナリオ（11フロー）"
echo ""
echo "正常系（5フロー）:"
echo "  ✅ FLOW-001: ユーザー登録"
echo "  ✅ FLOW-002: ログイン"
echo "  ✅ FLOW-003: ログアウト"
echo "  ✅ FLOW-004: パスワードリセット"
echo "  ✅ FLOW-005: 画面遷移リンク"
echo ""
echo "異常系（6フロー）:"
echo "  ✅ FLOW-006: フォームバリデーション"
echo "  ✅ FLOW-007: 誤ったパスワードでのログイン"
echo "  ✅ FLOW-008: 存在しないメールアドレスでのパスワード再設定"
echo "  ✅ FLOW-009: 5回連続失敗ログイン（アカウントロック）"
echo "  ✅ FLOW-010: 無効なトークンでパスワードリセット"
echo "  ✅ FLOW-011: 認証ガード"
echo ""

TOTAL_TESTS=11

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

# 前提条件確認
echo "前提条件確認中..."

# フロントエンド実装確認
if [ ! -d "resources/js/Pages/Auth" ]; then
    echo -e "${RED}❌ フロントエンド実装が存在しません${NC}"
    echo "frontend-developerエージェントを先に実行してください"
    exit 1
fi

echo -e "${GREEN}✅ フロントエンド実装確認${NC}"

# バックエンド実装確認
if [ ! -d "app/Modules/User" ]; then
    echo -e "${RED}❌ バックエンド実装が存在しません${NC}"
    echo "backend-developerエージェントを先に実行してください"
    exit 1
fi

echo -e "${GREEN}✅ バックエンド実装確認${NC}"

# PHPテスト実行確認
TEST_RESULT=$(./vendor/bin/sail artisan test --filter="User" 2>&1 | grep -E "Tests:.*passed" || echo "Tests not passed")

if [[ "$TEST_RESULT" == "Tests not passed" ]]; then
    echo -e "${RED}❌ PHPテストが失敗しています${NC}"
    echo "backend-test-managerエージェントを先に実行してください"
    exit 1
fi

echo -e "${GREEN}✅ PHPテスト合格確認${NC}"
echo "   $TEST_RESULT"
echo ""

# YAML定義ファイル確認
if [ ! -f "dev-kit/docs/specs/user-authentication/tests/playwright-flows.yaml" ]; then
    echo -e "${RED}❌ playwright-flows.yaml が存在しません${NC}"
    exit 1
fi

echo -e "${GREEN}✅ YAML定義ファイル確認${NC}"
echo ""

echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo "🧪 E2E統合テスト実行（11フロー）"
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo ""

echo -e "${YELLOW}⚠️  重要: このスクリプトはPlaywright MCPツールを使用する前提で設計されています${NC}"
echo -e "${YELLOW}    実際のテスト実行はClaude AIがPlaywright MCPツールを使って行います${NC}"
echo ""
echo "【テスト実行方法】"
echo "  1. dev-kit/docs/specs/user-authentication/tests/playwright-flows.yaml を参照"
echo ""
echo "  2. Claude AIに以下11フローのテストを依頼してください:"
echo ""
echo "  正常系フロー:"
echo "    FLOW-001: ユーザー登録"
echo "      - /register にアクセス"
echo "      - フォーム入力（名前、メール、パスワード、パスワード確認、利用規約同意）"
echo "      - 登録ボタンクリック"
echo "      - /dashboard にリダイレクトされることを確認"
echo "      - スクリーンショット保存"
echo ""
echo "    FLOW-002: ログイン"
echo "      - /login にアクセス"
echo "      - メールアドレス・パスワード入力"
echo "      - ログインボタンクリック"
echo "      - /dashboard にリダイレクトされることを確認"
echo ""
echo "    FLOW-003: ログアウト"
echo "      - ログイン後、ログアウトボタンクリック"
echo "      - /login にリダイレクトされることを確認"
echo ""
echo "    FLOW-004: パスワードリセット"
echo "      - /forgot-password にアクセス"
echo "      - メールアドレス入力"
echo "      - リセットリンク送信"
echo "      - メール受信確認（ログで確認）"
echo "      - リセットリンクからパスワード変更"
echo ""
echo "    FLOW-005: 画面遷移リンク"
echo "      - 各ページ間のリンクが正しく動作することを確認"
echo "      - ログイン→新規登録、新規登録→ログイン、ログイン→パスワードリセット等"
echo ""
echo "  異常系フロー:"
echo "    FLOW-006: フォームバリデーション"
echo "      - 必須項目を空のまま送信"
echo "      - 日本語エラーメッセージが表示されることを確認"
echo ""
echo "    FLOW-007: 誤ったパスワードでのログイン"
echo "      - 間違ったパスワードでログイン試行"
echo "      - 'メールアドレスまたはパスワードが正しくありません。' が表示されることを確認"
echo ""
echo "    FLOW-008: 存在しないメールアドレスでのパスワード再設定"
echo "      - 存在しないメールアドレスでパスワードリセット依頼"
echo "      - エラーメッセージが表示されることを確認"
echo ""
echo "    FLOW-009: 5回連続失敗ログイン（アカウントロック）"
echo "      - 5回連続で間違ったパスワードでログイン試行"
echo "      - アカウントロックメッセージが表示されることを確認"
echo ""
echo "    FLOW-010: 無効なトークンでパスワードリセット"
echo "      - 無効なトークンでパスワードリセットページにアクセス"
echo "      - エラーメッセージが表示されることを確認"
echo ""
echo "    FLOW-011: 認証ガード"
echo "      - ログインせずに /dashboard にアクセス"
echo "      - /login にリダイレクトされることを確認"
echo ""
echo "  3. 各フローの実行結果をログファイルに記録:"
echo "     - logs/playwright-manual-flow-001.log"
echo "     - logs/playwright-manual-flow-002.log"
echo "     - ..."
echo "     - logs/playwright-manual-flow-011.log"
echo ""
echo "  4. 各ログファイルに '✅ SUCCESS' または '❌ FAILURE' を記録"
echo ""
echo "  5. スクリーンショットを保存:"
echo "     - docs/test-reports/screenshots/user-authentication/normal/flow-001-user-registration.png"
echo "     - docs/test-reports/screenshots/user-authentication/error/flow-006-form-validation.png"
echo "     - ..."
echo ""

echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo "📊 完了確認コマンド"
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo ""
echo "テスト実行後、以下のコマンドで成功数を確認してください:"
echo ""
echo "  ls -1 logs/playwright-manual-*.log | wc -l"
echo "  # 期待: 11ファイル"
echo ""
echo "  grep -L '✅ SUCCESS' logs/playwright-manual-*.log"
echo "  # 期待: 何も表示されない（全てSUCCESS）"
echo ""
echo "  ls docs/test-reports/screenshots/user-authentication/*.png | wc -l"
echo "  # 期待: 11枚以上"
echo ""

exit 0
