#!/bin/bash

# ============================================
# ステップ3: フロントエンド実装検証
# ============================================
# TDDサイクル完了確認 + 全E2Eテスト実行
# 全画面のTDDサイクルが完了後に実行
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
PROJECT_ROOT="$(cd "${SCRIPT_DIR}/../../.." && pwd)"
STATE_DIR="$PROJECT_ROOT/dev-kit/state"
TDD_STATE_FILE="$STATE_DIR/tdd-${SPEC_NAME}.json"
START_TIME=$SECONDS

echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo "🎨 ステップ3: フロントエンド実装検証"
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo ""

# TDDサイクル完了チェック
if [ ! -f "$TDD_STATE_FILE" ]; then
  echo "❌ エラー: TDD状態ファイルが見つかりません"
  echo ""
  echo "先に以下を実行してください:"
  echo "  1. npm run workflow:step2 ${SPEC_NAME}"
  echo "  2. 各画面をTDDサイクルで実装（npm run tdd:red, npm run tdd:green）"
  echo ""
  exit 1
fi

# 全画面完了チェック
TOTAL=$(cat "$TDD_STATE_FILE" | grep '"total_pages"' | grep -oE '[0-9]+')
COMPLETED=$(cat "$TDD_STATE_FILE" | grep '"completed_pages"' | grep -oE '[0-9]+')

if [ "$COMPLETED" -lt "$TOTAL" ]; then
  echo "⚠️  TDDサイクルが未完了です"
  echo ""
  echo "📊 進捗状況:"
  echo "  完了: $COMPLETED / $TOTAL 画面"
  echo ""
  echo "📋 現在の状態:"
  npm run tdd:status "${SPEC_NAME}"
  echo ""
  echo "➡️  次のアクション:"
  echo "    残りの画面を実装してください"
  echo "    次の画面: npm run tdd:red ${SPEC_NAME}"
  echo ""
  exit 1
fi

echo "✅ TDDサイクル完了: $TOTAL / $TOTAL 画面"
echo ""

# 状態更新: ステップ3開始
./dev-kit/scripts/workflow/state.sh update "${SPEC_NAME}" current_step 3
./dev-kit/scripts/workflow/state.sh update "${SPEC_NAME}" status in_progress

# 既存証拠のレビュー
echo "⏳ 既存証拠のレビュー中..."
echo ""
echo "▶ 機能ごとの証拠確認"

EVIDENCE_BASE_DIR="$PROJECT_ROOT/test-reports/${SPEC_NAME}"

if [ -d "$EVIDENCE_BASE_DIR" ]; then
  FEATURE_COUNT=$(find "$EVIDENCE_BASE_DIR" -type d -name "feature-*" | wc -l | tr -d ' ')
  echo "✅ 機能証拠: $FEATURE_COUNT 個の機能分の証拠を確認"

  for feature_dir in "$EVIDENCE_BASE_DIR"/feature-*; do
    if [ -d "$feature_dir" ]; then
      FEATURE_NAME=$(basename "$feature_dir" | sed 's/feature-//')
      VIDEO_COUNT=$(find "$feature_dir" -name "*.webm" | wc -l | tr -d ' ')
      echo "  ✅ $FEATURE_NAME: 動画 $VIDEO_COUNT 個"
    fi
  done
else
  echo "⚠️  証拠ディレクトリが見つかりません: $EVIDENCE_BASE_DIR"
  echo "   各機能のtdd:greenで証拠が収集されているはずです"
fi

echo ""
echo "▶ ビルド実行（最終確認）"
npm run build
BUILD_RESULT=$?

if [ $BUILD_RESULT -ne 0 ]; then
  ERROR_MSG="ビルド失敗"
  ./dev-kit/scripts/workflow/state.sh error "${SPEC_NAME}" "${ERROR_MSG}" $BUILD_RESULT

  echo ""
  echo "❌ ビルドエラーが発生しました"
  echo ""
  echo "🔧 対処方法:"
  echo "  1. コンパイルエラーを修正"
  echo "  2. 依存関係を確認: npm install"
  echo "  3. ui-componentsのインポートを確認"
  echo ""
  exit 1
fi

echo ""
echo "▶ 軽量統合確認（機能間連携のみ）"
echo "   ※各機能の詳細テストは既に完了済み"
npm run test:e2e
E2E_RESULT=$?

DURATION=$((SECONDS - START_TIME))

echo ""
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"

# 結果判定
if [ $E2E_RESULT -eq 0 ]; then
  # 成功: コンテキスト記録 + ステップ4へ
  ./dev-kit/scripts/workflow/context.sh record-frontend "${SPEC_NAME}"
  ./dev-kit/scripts/workflow/state.sh advance "${SPEC_NAME}" 4 $DURATION

  # HTMLレポート生成
  npm run test:e2e:show > /dev/null 2>&1 &

  # 状態情報取得
  RETRY_COUNT=$(./dev-kit/scripts/workflow/state.sh read "${SPEC_NAME}" retry_count)
  TOTAL_RETRIES=$(./dev-kit/scripts/workflow/state.sh read "${SPEC_NAME}" total_retries)

  echo "✅ ステップ3: フロントエンド実装検証完了"
  echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
  echo ""
  echo "📊 ワークフロー状態:"
  echo "  進捗: Step 3 → Step 4 (60% 完了)"
  echo "  所要時間: ${DURATION}秒"
  echo ""
  echo "📝 リトライ情報:"
  echo "  ステップリトライ: ${RETRY_COUNT}/3"
  echo "  全体リトライ: ${TOTAL_RETRIES}/10"
  echo ""
  echo "🎨 フロントエンド実装結果:"
  echo "  ビルド: ✅ 成功"
  echo "  E2Eテスト: ✅ 100% PASS"
  echo "  HTMLレポート: バックグラウンドで生成中"
  echo ""
  echo "💾 エージェント間コンテキスト:"
  echo "  フロントエンド実装内容を記録しました"
  echo "  → バックエンド実装時に使用されます"
  echo ""
  echo "➡️  次のステップ: npm run workflow:step4 ${SPEC_NAME}"
  echo ""
  exit 0
else
  # 失敗: エラー記録 + 診断 + リトライ判定
  ERROR_MSG="E2Eテスト失敗"
  ./dev-kit/scripts/workflow/state.sh error "${SPEC_NAME}" "${ERROR_MSG}" $E2E_RESULT

  # 状態情報取得
  RETRY_COUNT=$(./dev-kit/scripts/workflow/state.sh read "${SPEC_NAME}" retry_count)
  TOTAL_RETRIES=$(./dev-kit/scripts/workflow/state.sh read "${SPEC_NAME}" total_retries)

  echo "❌ ステップ3: フロントエンド実装検証失敗"
  echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
  echo ""
  echo "📊 ワークフロー状態:"
  echo "  現在: Step 3 (失敗)"
  echo "  エラー: ${ERROR_MSG}"
  echo ""
  echo "📝 リトライ情報:"
  echo "  ステップリトライ: ${RETRY_COUNT}/3"
  echo "  全体リトライ: ${TOTAL_RETRIES}/10"

  # 自動診断実行
  echo ""
  echo "🔍 自動診断実行中..."
  npm run diagnose:failure "${SPEC_NAME}"

  # HTMLレポート生成（動画で問題箇所を特定）
  npm run test:e2e:show > /dev/null 2>&1 &
  echo ""
  echo "📹 HTMLレポート（動画付き）: バックグラウンドで生成中"
  echo "   失敗箇所を動画で確認できます"

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
    echo "  1. HTMLレポートで動画確認"
    echo "  2. E2Eテスト失敗箇所を修正"
    echo "  3. ui-componentsテンプレート使用を確認"
    echo "  4. カスタムコンポーネント不使用を確認"
    echo ""
    echo "➡️  修正後に再実行: npm run workflow:step3-test ${SPEC_NAME}"
    echo ""
    exit 1
  else
    # リトライ上限到達
    echo ""
    echo "🚨 リトライ上限到達: 人間にエスカレーション"
    echo ""
    echo "📧 通知内容:"
    echo "  - ステップ3（フロントエンド実装）を${RETRY_COUNT}回リトライしましたが失敗しました"
    echo "  - エラー: ${ERROR_MSG}"
    echo "  - HTMLレポートで詳細を確認してください"
    echo "  - 手動での確認と修正が必要です"
    echo ""
    exit 1
  fi
fi
