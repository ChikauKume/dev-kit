#!/bin/bash

# ============================================
# ステップ4: 品質確認・リリース判定（補助）
# ============================================
# DO/DON'T原則チェック
# 7つの品質ゲート検証
# リリース可否判定
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
echo "🎖️  ステップ4: 品質確認・リリース判定（補助）"
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo ""

# 状態更新: ステップ4開始
./dev-kit/scripts/workflow/state.sh update "${SPEC_NAME}" current_step 4
./dev-kit/scripts/workflow/state.sh update "${SPEC_NAME}" status in_progress

# 品質検証実行
echo "⏳ 品質検証実行中..."
echo ""
echo "▶ DO/DON'T原則 + 7つの品質ゲート検証"
npm run validate:principles "${SPEC_NAME}"
PRINCIPLES_RESULT=$?

DURATION=$((SECONDS - START_TIME))

echo ""
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"

# 結果判定
if [ $PRINCIPLES_RESULT -eq 0 ]; then
  # 成功: ステップ9へ
  ./dev-kit/scripts/workflow/state.sh advance "${SPEC_NAME}" 5 $DURATION

  # 状態情報取得
  RETRY_COUNT=$(./dev-kit/scripts/workflow/state.sh read "${SPEC_NAME}" retry_count)
  TOTAL_RETRIES=$(./dev-kit/scripts/workflow/state.sh read "${SPEC_NAME}" total_retries)

  echo "✅ ステップ4: 品質確認・リリース判定完了"
  echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
  echo ""
  echo "📊 ワークフロー状態:"
  echo "  進捗: Step 4 → Step 5 (80% 完了)"
  echo "  所要時間: ${DURATION}秒"
  echo ""
  echo "📝 リトライ情報:"
  echo "  ステップリトライ: ${RETRY_COUNT}/3"
  echo "  全体リトライ: ${TOTAL_RETRIES}/10"
  echo ""
  echo "🎖️  品質検証結果:"
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
  echo "🎯 リリース判定: ✅ リリース可能"
  echo ""
  echo "➡️  次のステップ: npm run workflow:step5 ${SPEC_NAME}"
  echo "    （ステップ5: 完了報告）"
  echo ""
  exit 0
else
  # 失敗: 該当ステップに戻る
  ERROR_MSG="品質確認失敗"
  ./dev-kit/scripts/workflow/state.sh error "${SPEC_NAME}" "${ERROR_MSG}" $PRINCIPLES_RESULT

  # 状態情報取得
  RETRY_COUNT=$(./dev-kit/scripts/workflow/state.sh read "${SPEC_NAME}" retry_count)
  TOTAL_RETRIES=$(./dev-kit/scripts/workflow/state.sh read "${SPEC_NAME}" total_retries)

  echo "❌ ステップ4: 品質確認失敗"
  echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
  echo ""
  echo "📊 ワークフロー状態:"
  echo "  現在: Step 4 (失敗)"
  echo "  エラー: ${ERROR_MSG}"
  echo ""
  echo "📝 リトライ情報:"
  echo "  ステップリトライ: ${RETRY_COUNT}/3"
  echo "  全体リトライ: ${TOTAL_RETRIES}/10"

  # 自動診断実行
  echo ""
  echo "🔍 自動診断実行中..."
  npm run diagnose:failure "${SPEC_NAME}"

  # リトライ上限チェック
  echo ""
  echo "🔍 リトライ上限チェック中..."
  ./dev-kit/scripts/workflow/state.sh check-limit "${SPEC_NAME}"
  CHECK_RESULT=$?

  if [ $CHECK_RESULT -eq 0 ]; then
    # リトライ可能
    REMAINING_STEP=$((3 - RETRY_COUNT))
    REMAINING_TOTAL=$((10 - TOTAL_RETRIES))

    echo ""
    echo "⚠️  リトライ可能: ステップ残り${REMAINING_STEP}回、全体残り${REMAINING_TOTAL}回"
    echo ""
    echo "🔧 対処方法:"
    echo "  validate:principlesの出力を確認し、該当ステップに戻る:"
    echo "  - フロントエンド/バックエンド品質NG → ステップ2（TDDサイクル）へ"
    echo "  - 統合テスト品質NG → ステップ3（統合検証）へ"
    echo ""
    echo "➡️  修正後に再実行: 該当ステップから"
    echo ""
    exit 1
  else
    # リトライ上限到達
    echo ""
    echo "🚨 リトライ上限到達: 人間にエスカレーション"
    echo ""
    echo "📧 通知内容:"
    echo "  - ステップ4を${RETRY_COUNT}回リトライしましたが失敗しました"
    echo "  - エラー: ${ERROR_MSG}"
    echo "  - 品質基準を満たせません"
    echo "  - DO/DON'T原則または品質ゲートで不合格があります"
    echo "  - 手動での確認と修正が必要です"
    echo ""
    exit 1
  fi
fi
