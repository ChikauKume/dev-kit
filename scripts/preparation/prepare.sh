#!/bin/bash

# ============================================
# ワークフロー準備スクリプト
# ============================================
# 1. 前提条件チェック（ファイル存在確認）
# 2. Laravel Sail起動
# 3. ワークフロー状態初期化
# ============================================

set -e

SPEC_NAME=$1

if [ -z "$SPEC_NAME" ]; then
  echo "❌ エラー: SPEC_NAMEが指定されていません"
  echo "使用方法: $0 <SPEC_NAME>"
  exit 1
fi

# パストラバーサル対策
if [[ "$SPEC_NAME" =~ \.\./|^/ ]]; then
    echo "❌ エラー: 不正な仕様名が指定されています"
    exit 1
fi

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"

echo "╔════════════════════════════════════════════════════╗"
echo "║  ワークフロー準備: ${SPEC_NAME}"
echo "╚════════════════════════════════════════════════════╝"
echo ""

# ステップ0: バックグラウンドプロセスクリーンアップ
echo "▶ ステップ0: バックグラウンドプロセスクリーンアップ"
echo ""
./dev-kit/scripts/bg/manager.sh clean-full
if [ $? -ne 0 ]; then
  echo ""
  echo "⚠️  警告: プロセスクリーンアップで一部エラーが発生しましたが、続行します"
fi
echo ""

# ステップ1: 前提条件チェック
echo "▶ ステップ1: 前提条件チェック"
echo ""
"${SCRIPT_DIR}/check-prerequisites.sh" "${SPEC_NAME}"
if [ $? -ne 0 ]; then
  echo ""
  echo "❌ 準備失敗: 前提条件チェックでエラーが発生しました"
  exit 1
fi
echo ""

# ステップ2: Laravel Sail起動
echo "▶ ステップ2: Laravel Sail起動"
echo ""
"${SCRIPT_DIR}/start-sail.sh"
if [ $? -ne 0 ]; then
  echo ""
  echo "❌ 準備失敗: Laravel Sailの起動に失敗しました"
  exit 1
fi
echo ""

# ステップ3: 仕様書確認（作業依頼受領）
echo "▶ ステップ3: 仕様書確認"
echo ""
echo "📄 design.md:"
cat "dev-kit/docs/specs/${SPEC_NAME}/design.md" | head -50
echo ""
echo "📄 phpunit.yaml:"
cat "dev-kit/docs/specs/${SPEC_NAME}/tests/phpunit.yaml" | head -30
echo ""
echo "📄 e2e.yaml:"
cat "dev-kit/docs/specs/${SPEC_NAME}/tests/e2e.yaml" | head -30
echo ""

# ステップ4: 初期設定（初回のみ実行推奨）
echo "▶ ステップ4: 初期設定"
echo ""
if [ -f "./dev-kit/scripts/setup/init.sh" ]; then
  ./dev-kit/scripts/setup/init.sh
  echo ""
else
  echo "⚠️  初期設定スクリプトが見つかりません（スキップ）"
  echo ""
fi

# ステップ5: 環境検証
echo "▶ ステップ5: 環境検証"
echo ""
npm run validate:env
npm run validate:deps
npm run validate:syntax
npm run validate:blank-page
npm run validate:playwright
if [ $? -ne 0 ]; then
  echo ""
  echo "❌ 準備失敗: 環境検証でエラーが発生しました"
  exit 1
fi
echo ""

# ステップ5.5: HTML出力ポート準備
echo "▶ ステップ5.5: HTML出力ポート準備"
echo ""

# test-reportsディレクトリ作成
PROJECT_ROOT="$(cd "${SCRIPT_DIR}/../../.." && pwd)"
TEST_REPORTS_DIR="$PROJECT_ROOT/test-reports"
mkdir -p "$TEST_REPORTS_DIR"
echo "✅ 証拠保存ディレクトリ作成: test-reports/"

# Playwrightレポート用ディレクトリ
mkdir -p "$PROJECT_ROOT/playwright-report"
echo "✅ HTMLレポートディレクトリ作成: playwright-report/"

# ポート確認（9323はPlaywrightデフォルト）
PORT_STATUS=$(lsof -i :9323 -t 2>/dev/null || echo "")
if [ -n "$PORT_STATUS" ]; then
  echo "⚠️  ポート9323は既に使用中です（Playwright HTML出力）"
  echo "   プロセスID: $PORT_STATUS"
else
  echo "✅ ポート9323: 利用可能（Playwright HTML出力用）"
fi

echo ""

# ステップ6: ワークフロー状態初期化
echo "▶ ステップ6: ワークフロー状態初期化"
echo ""
./dev-kit/scripts/workflow/state.sh init "${SPEC_NAME}"
if [ $? -ne 0 ]; then
  echo ""
  echo "❌ 準備失敗: ワークフロー状態の初期化に失敗しました"
  exit 1
fi
echo ""

# 完了メッセージ
echo "╔════════════════════════════════════════════════════╗"
echo "║  ✅ ワークフロー準備完了"
echo "╚════════════════════════════════════════════════════╝"
echo ""
echo "📋 準備完了内容:"
echo "  ✅ プロセスクリーンアップ"
echo "  ✅ 前提条件チェック"
echo "  ✅ Laravel Sail起動"
echo "  ✅ 仕様書確認"
echo "  ✅ 初期設定"
echo "  ✅ 環境検証"
echo "  ✅ HTML出力ポート準備"
echo "  ✅ ワークフロー状態初期化"
echo ""
echo "📹 証拠保存先: test-reports/${SPEC_NAME}/"
echo "   各機能のTDDサイクル完了時に動画が保存されます"
echo ""
echo "➡️  次のステップ: npm run workflow:step1 ${SPEC_NAME}"
echo "    （ステップ1: スケルトン生成）"
echo ""
echo "📊 状態確認: npm run workflow:status ${SPEC_NAME}"
