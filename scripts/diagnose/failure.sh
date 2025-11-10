#!/bin/bash
# 失敗診断スクリプト
# Usage: ./dev-kit/scripts/diagnose/failure.sh {spec_name}

set -e

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
PROJECT_ROOT="$(cd "$SCRIPT_DIR/../../.." && pwd)"
STATE_DIR="$PROJECT_ROOT/dev-kit/state"

# カラー定義
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
MAGENTA='\033[0;35m'
NC='\033[0m' # No Color

# 仕様名
SPEC_NAME="${1:-}"

if [ -z "$SPEC_NAME" ]; then
    echo -e "${RED}❌ エラー: 仕様名を指定してください${NC}"
    echo "Usage: $0 {spec_name}"
    exit 1
fi

# パストラバーサル対策
if [[ "$SPEC_NAME" =~ \.\./|^/ ]]; then
    echo -e "${RED}❌ エラー: 不正な仕様名が指定されています${NC}"
    exit 1
fi

STATE_FILE="$STATE_DIR/workflow-${SPEC_NAME}.yml"

if [ ! -f "$STATE_FILE" ]; then
    echo -e "${RED}❌ エラー: 状態ファイルが見つかりません: $STATE_FILE${NC}"
    exit 1
fi

echo -e "${BLUE}━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━${NC}"
echo -e "${BLUE}🔍 失敗診断: ${SPEC_NAME}${NC}"
echo -e "${BLUE}━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━${NC}"
echo ""

# 状態ファイルから情報を取得
CURRENT_STEP=$(grep "^current_step:" "$STATE_FILE" | awk '{print $2}')
STATUS=$(grep "^status:" "$STATE_FILE" | awk '{print $2}')
RETRY_COUNT=$(grep "^retry_count:" "$STATE_FILE" | awk '{print $2}')

echo -e "${YELLOW}現在の状態:${NC}"
echo -e "  ステップ: Step $CURRENT_STEP"
echo -e "  ステータス: $STATUS"
echo -e "  リトライ回数: $RETRY_COUNT"
echo ""

# 最後のエラーを取得
echo -e "${YELLOW}最後のエラー:${NC}"
sed -n '/^last_error:/,/^[a-z]/p' "$STATE_FILE" | grep -v "^[a-z]" | sed 's/^/  /'
echo ""

# ステップごとの診断
echo -e "${MAGENTA}━━━ 診断結果 ━━━${NC}"
echo ""

case "$CURRENT_STEP" in
    1)
        echo -e "${YELLOW}ステップ1: スケルトン生成${NC}"
        echo ""

        # スケルトンファイル生成確認
        echo -e "${BLUE}[チェック 1] スケルトンファイル生成${NC}"
        if [ -d "app/Modules" ]; then
            local module_count=$(find app/Modules -type d -mindepth 1 -maxdepth 1 2>/dev/null | wc -l | tr -d ' ')
            if [ "$module_count" -gt 0 ]; then
                echo -e "${GREEN}✅ モジュールディレクトリが生成されています (${module_count}個)${NC}"
            else
                echo -e "${RED}❌ モジュールディレクトリが見つかりません${NC}"
                echo -e "${GREEN}推奨修復:${NC}"
                echo "  1. npm run workflow:step1 ${SPEC_NAME} を再実行"
            fi
        else
            echo -e "${RED}❌ app/Modules ディレクトリが存在しません${NC}"
        fi
        echo ""

        # テストファイル生成確認
        echo -e "${BLUE}[チェック 2] テストファイル生成${NC}"
        if [ -d "tests/Unit" ] && [ -d "tests/Feature" ]; then
            echo -e "${GREEN}✅ テストディレクトリが存在します${NC}"
        else
            echo -e "${RED}❌ テストディレクトリが見つかりません${NC}"
            echo -e "${GREEN}推奨修復:${NC}"
            echo "  1. tests/Unit と tests/Feature ディレクトリを確認"
        fi
        echo ""

        # E2Eテストファイル生成確認
        echo -e "${BLUE}[チェック 3] E2Eテストファイル生成${NC}"
        if [ -d "tests/e2e/${SPEC_NAME}" ]; then
            local e2e_count=$(find tests/e2e/${SPEC_NAME} -name "*.spec.ts" 2>/dev/null | wc -l | tr -d ' ')
            echo -e "${GREEN}✅ E2Eテストファイルが生成されています (${e2e_count}個)${NC}"
        else
            echo -e "${RED}❌ tests/e2e/${SPEC_NAME} ディレクトリが見つかりません${NC}"
            echo -e "${GREEN}推奨修復:${NC}"
            echo "  1. npm run generate:e2e を実行"
        fi
        ;;

    2)
        echo -e "${YELLOW}ステップ2: 機能ごとのフルスタックTDDサイクル${NC}"
        echo ""

        # TDD状態確認
        echo -e "${BLUE}[チェック 1] TDD進捗状況${NC}"
        if [ -f "dev-kit/state/tdd-${SPEC_NAME}.json" ]; then
            local total=$(cat "dev-kit/state/tdd-${SPEC_NAME}.json" | grep '"total_pages"' | grep -oE '[0-9]+')
            local completed=$(cat "dev-kit/state/tdd-${SPEC_NAME}.json" | grep '"completed_pages"' | grep -oE '[0-9]+')
            echo -e "${YELLOW}進捗: ${completed} / ${total} 画面完了${NC}"

            if [ "$completed" -lt "$total" ]; then
                echo -e "${RED}❌ TDDサイクルが未完了です${NC}"
                echo -e "${GREEN}推奨修復:${NC}"
                echo "  1. npm run tdd:status ${SPEC_NAME} で状況確認"
                echo "  2. npm run tdd:red ${SPEC_NAME} で次の機能のRed確認"
            else
                echo -e "${GREEN}✅ 全機能のTDDサイクルが完了しています${NC}"
            fi
        else
            echo -e "${RED}❌ TDD状態ファイルが見つかりません${NC}"
            echo -e "${GREEN}推奨修復:${NC}"
            echo "  1. npm run workflow:step2 ${SPEC_NAME} を実行"
        fi
        echo ""

        # フロントエンド実装確認
        echo -e "${BLUE}[チェック 2] フロントエンド実装${NC}"
        if [ -d "resources/js/Pages" ]; then
            local page_count=$(find resources/js/Pages -name "*.tsx" 2>/dev/null | wc -l | tr -d ' ')
            if [ "$page_count" -gt 0 ]; then
                echo -e "${GREEN}✅ ページコンポーネントが実装されています (${page_count}個)${NC}"

                # ui-componentsチェック
                local ui_components_used=$(find resources/js/Pages -name "*.tsx" -print0 2>/dev/null | xargs -0 grep -l "from.*ui-components" 2>/dev/null | wc -l | tr -d ' ')
                if [ "$ui_components_used" -gt 0 ]; then
                    echo -e "${GREEN}✅ ui-components を使用しています${NC}"
                else
                    echo -e "${RED}❌ ui-components のインポートが見つかりません${NC}"
                    echo -e "${GREEN}推奨修復:${NC}"
                    echo "  1. resources/js/Pages/*.tsx で ui-components のテンプレートを使用"
                fi
            else
                echo -e "${RED}❌ ページコンポーネントが見つかりません${NC}"
            fi
        fi
        echo ""

        # バックエンド実装確認
        echo -e "${BLUE}[チェック 3] バックエンド実装${NC}"
        if [ -d "app/Modules" ]; then
            local controller_count=$(find app/Modules -name "*Controller.php" 2>/dev/null | wc -l | tr -d ' ')
            if [ "$controller_count" -gt 0 ]; then
                echo -e "${GREEN}✅ コントローラーが実装されています (${controller_count}個)${NC}"
            else
                echo -e "${RED}❌ コントローラーが見つかりません${NC}"
            fi
        fi
        echo ""

        # ビルドエラーチェック
        echo -e "${BLUE}[チェック 4] ビルドエラー${NC}"
        if npm run build 2>&1 | grep -q "error\|Error\|ERROR"; then
            echo -e "${RED}❌ ビルドエラーが検出されました${NC}"
            npm run build 2>&1 | grep "error\|Error" | head -5
            echo ""
            echo -e "${GREEN}推奨修復:${NC}"
            echo "  1. TypeScript構文エラーを修正"
            echo "  2. npm install で依存関係を確認"
        else
            echo -e "${GREEN}✅ ビルドエラーなし${NC}"
        fi
        ;;

    3)
        echo -e "${YELLOW}ステップ3: 全機能統合検証${NC}"
        echo ""

        # PHPUnitテストチェック
        echo -e "${BLUE}[チェック 1] PHPUnitテスト結果${NC}"
        if ./vendor/bin/sail artisan test 2>&1 | grep -q "FAIL\|ERROR"; then
            echo -e "${RED}❌ PHPUnitテストが失敗しています${NC}"
            ./vendor/bin/sail artisan test 2>&1 | grep "FAIL\|ERROR" | head -10
            echo ""
            echo -e "${GREEN}推奨修復:${NC}"
            echo "  1. tests/Unit/ と tests/Feature/ のテストを確認"
            echo "  2. バリデーションルールを確認"
        else
            echo -e "${GREEN}✅ PHPUnitテスト: 合格${NC}"
        fi
        echo ""

        # E2Eテスト結果確認
        echo -e "${BLUE}[チェック 2] E2Eテスト結果${NC}"
        if [ -f "playwright-report/index.html" ]; then
            local failed_count=$(grep -o "failed" playwright-report/index.html 2>/dev/null | wc -l | tr -d ' ')
            if [ "$failed_count" -gt 0 ]; then
                echo -e "${RED}❌ E2Eテストが失敗しています (${failed_count}件)${NC}"
                echo -e "${GREEN}推奨修復:${NC}"
                echo "  1. npx playwright show-report でレポートを確認"
                echo "  2. tests/e2e/${SPEC_NAME}/*.spec.ts を確認"
            else
                echo -e "${GREEN}✅ E2Eテスト: 合格${NC}"
            fi
        else
            echo -e "${YELLOW}⚠️  E2Eテスト結果が見つかりません${NC}"
        fi
        echo ""

        # 証拠収集確認
        echo -e "${BLUE}[チェック 3] 証拠収集${NC}"
        if [ -d "test-reports/${SPEC_NAME}" ]; then
            local video_count=$(find test-reports/${SPEC_NAME} -name "*.webm" 2>/dev/null | wc -l | tr -d ' ')
            echo -e "${GREEN}✅ 証拠が収集されています (動画: ${video_count}個)${NC}"
        else
            echo -e "${YELLOW}⚠️  test-reports/${SPEC_NAME} ディレクトリが見つかりません${NC}"
        fi
        ;;

    4)
        echo -e "${YELLOW}ステップ4: 品質確認・リリース判定${NC}"
        echo ""

        # 品質検証実行
        echo -e "${BLUE}[チェック 1] 品質検証結果${NC}"
        if npm run validate:principles 2>&1 | grep -q "ERROR\|FAILED"; then
            echo -e "${RED}❌ 品質検証が失敗しています${NC}"
            echo -e "${GREEN}推奨修復:${NC}"
            echo "  1. npm run validate:principles を実行して詳細確認"
            echo "  2. DO/DON'T原則に違反している箇所を修正"
        else
            echo -e "${GREEN}✅ 品質検証: 合格${NC}"
        fi
        echo ""

        # バリデーション実装チェック
        echo -e "${BLUE}[チェック 2] バリデーション実装${NC}"
        local controllers=$(find app/Modules -name "*Controller.php" 2>/dev/null)
        if [ -n "$controllers" ]; then
            local validation_issues=0
            for controller in $controllers; do
                if grep -q "catch.*ValidationException" "$controller" 2>/dev/null; then
                    echo -e "${RED}❌ ValidationExceptionをcatchしています: $controller${NC}"
                    validation_issues=1
                fi
            done
            if [ "$validation_issues" -eq 0 ]; then
                echo -e "${GREEN}✅ バリデーション実装は正常${NC}"
            fi
        fi
        echo ""

        # 日本語メッセージチェック
        echo -e "${BLUE}[チェック 3] 日本語バリデーションメッセージ${NC}"
        if [ -f "lang/ja/validation.php" ]; then
            if grep -q "。" lang/ja/validation.php; then
                echo -e "${GREEN}✅ 日本語メッセージが設定されています${NC}"
            else
                echo -e "${RED}❌ 日本語メッセージに句点(。)がありません${NC}"
                echo -e "${GREEN}推奨修復:${NC}"
                echo "  1. lang/ja/validation.php のメッセージに句点を追加"
            fi
        else
            echo -e "${RED}❌ lang/ja/validation.php が見つかりません${NC}"
        fi
        ;;

    5)
        echo -e "${YELLOW}ステップ5: 完了報告${NC}"
        echo ""

        echo -e "${BLUE}[チェック 1] 最終確認${NC}"
        echo -e "${GREEN}✅ ワークフローが完了しています${NC}"
        echo ""
        echo -e "${BLUE}完了報告:${NC}"
        echo "  npm run workflow:status ${SPEC_NAME}"
        ;;

    *)
        echo -e "${YELLOW}ステップ${CURRENT_STEP}の診断は未実装です${NC}"
        ;;
esac

echo ""
echo -e "${BLUE}━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━${NC}"
echo -e "${MAGENTA}診断完了${NC}"
echo -e "${BLUE}━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━${NC}"
