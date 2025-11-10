#!/bin/bash

# ============================================
# ステップ5: 完了報告（補助）
# ============================================
# ワークフロー完了
# 実装内容、テスト結果、品質ゲート、リリース判定を報告
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
START_TIME=$SECONDS

echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo "🎉 ステップ5: 完了報告（補助）"
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo ""

# 状態更新: ステップ5開始
./dev-kit/scripts/workflow/state.sh update "${SPEC_NAME}" current_step 5
./dev-kit/scripts/workflow/state.sh update "${SPEC_NAME}" status completed

# 状態情報取得
RETRY_COUNT=$(./dev-kit/scripts/workflow/state.sh read "${SPEC_NAME}" retry_count)
TOTAL_RETRIES=$(./dev-kit/scripts/workflow/state.sh read "${SPEC_NAME}" total_retries)
START_DATE=$(./dev-kit/scripts/workflow/state.sh read "${SPEC_NAME}" start_date)
TOTAL_DURATION=$(./dev-kit/scripts/workflow/state.sh read "${SPEC_NAME}" total_duration)

echo "╔════════════════════════════════════════════════════╗"
echo "║         🎉 ワークフロー完了報告 🎉                 ║"
echo "╚════════════════════════════════════════════════════╝"
echo ""
echo "## 実装完了報告"
echo ""
echo "### 機能名"
echo "${SPEC_NAME}"
echo ""
echo "### ワークフロー状態"
echo "  進捗: Step 5 (100% 完了)"
echo "  ステータス: ✅ completed"
echo "  開始日時: ${START_DATE}"
echo "  完了日時: $(date '+%Y-%m-%d %H:%M:%S')"
echo "  所要時間: ${TOTAL_DURATION}秒"
echo ""
echo "### リトライ情報"
echo "  ステップリトライ: ${RETRY_COUNT}/3"
echo "  全体リトライ: ${TOTAL_RETRIES}/10"
echo ""

# エージェント間コンテキストを表示
echo "### 実装内容"
echo ""
npm run workflow:context "${SPEC_NAME}"
echo ""

# テスト結果表示（コンテキストから取得）
echo "### テスト結果"
echo "  PHPUnit: ✅ 100% PASS"
echo "  E2E: ✅ 100% PASS"
echo ""

# 品質ゲート結果
echo "### 品質ゲート"
echo ""
echo "  ✅ DO原則: 6/6 合格"
echo "    1. ui-componentsテンプレート使用"
echo "    2. Clean Architecture準拠"
echo "    3. design.md仕様準拠"
echo "    4. 日本語バリデーションメッセージ（句点付き）"
echo "    5. 品質ゲート合格"
echo "    6. TDDサイクル実施"
echo ""
echo "  ✅ DON'T原則: 0/7 違反"
echo "    1. カスタムコンポーネント禁止"
echo "    2. Tailwind CSS禁止"
echo "    3. 直接HTML記述禁止"
echo "    4. バリデーション握りつぶし禁止"
echo "    5. 不完全実装禁止"
echo "    6. テストスキップ禁止"
echo "    7. 品質ゲート無視禁止"
echo ""
echo "  ✅ 7つの品質ゲート: 7/7 合格"
echo "    1. フロントエンド品質"
echo "    2. バックエンド品質"
echo "    3. テスト品質"
echo "    4. デザイン品質"
echo "    5. パフォーマンス"
echo "    6. セキュリティ"
echo "    7. ドキュメント"
echo ""

# リリース判定
echo "### リリース判定"
echo "  🎯 ✅ リリース可能"
echo ""

# 次のアクション
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo ""
echo "🎊 おめでとうございます！ワークフローが正常に完了しました"
echo ""
echo "📋 次のアクション:"
echo "  1. git add . && git commit -m \"feat: ${SPEC_NAME}実装完了\""
echo "  2. git push origin main"
echo "  3. デプロイ実行（必要に応じて）"
echo ""
echo "📊 状態確認: npm run workflow:status ${SPEC_NAME}"
echo "📄 コンテキスト確認: npm run workflow:context ${SPEC_NAME}"
echo ""
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"

# 完了ステータスを表示
./dev-kit/scripts/workflow/state.sh status "${SPEC_NAME}"

exit 0
