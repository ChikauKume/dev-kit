#!/bin/bash

# ============================================
# ステップ2: Red状態確認 + TDDサイクル開始
# ============================================
# TDDサイクル初期化と最初の画面のRed確認
# 画面ごとにRed→Green→Refactorサイクルを実行
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
echo "🔴 ステップ2: Red状態確認 + TDDサイクル開始"
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo ""

# 状態更新: ステップ2開始
./dev-kit/scripts/workflow/state.sh update "${SPEC_NAME}" current_step 2
./dev-kit/scripts/workflow/state.sh update "${SPEC_NAME}" status in_progress

# PHPUnit Red確認（バックエンド未実装を確認）
echo "⏳ バックエンドRed状態確認中..."
echo ""
echo "▶ PHPUnitテスト実行（全て失敗することを期待）"
./vendor/bin/sail artisan test 2>&1 | tee /tmp/phpunit-red-${SPEC_NAME}.log
PHPUNIT_EXIT=$?

# Red状態の確認（FAILまたはincompleteが含まれるか）
PHPUNIT_HAS_FAIL=$(grep -c "FAIL" /tmp/phpunit-red-${SPEC_NAME}.log 2>/dev/null || true)
PHPUNIT_HAS_INCOMPLETE=$(grep -c "incomplete" /tmp/phpunit-red-${SPEC_NAME}.log 2>/dev/null || true)

if [ -z "$PHPUNIT_HAS_FAIL" ] || [ "$PHPUNIT_HAS_FAIL" = "" ]; then
  PHPUNIT_HAS_FAIL=0
fi
if [ -z "$PHPUNIT_HAS_INCOMPLETE" ] || [ "$PHPUNIT_HAS_INCOMPLETE" = "" ]; then
  PHPUNIT_HAS_INCOMPLETE=0
fi

PHPUNIT_TOTAL_ISSUES=$((PHPUNIT_HAS_FAIL + PHPUNIT_HAS_INCOMPLETE))

if [ $PHPUNIT_TOTAL_ISSUES -eq 0 ]; then
  ERROR_MSG="PHPUnit Red状態確認失敗: テストが成功しています（実装前なのに成功は異常）"
  ./dev-kit/scripts/workflow/state.sh error "${SPEC_NAME}" "${ERROR_MSG}" 1

  echo ""
  echo "❌ PHPUnit Red状態確認失敗"
  echo ""
  echo "🔍 異常検出:"
  echo "  PHPUnit失敗件数: ${PHPUNIT_HAS_FAIL}"
  echo "  PHPUnit incomplete件数: ${PHPUNIT_HAS_INCOMPLETE}"
  echo "  → 実装前なのにテストが成功しています"
  echo ""
  echo "🔧 対処方法:"
  echo "  1. スケルトン生成が正しいか確認"
  echo "  2. テストファイルの内容を確認（空実装になっているか）"
  echo "  3. ステップ1からやり直す: npm run workflow:step1 ${SPEC_NAME}"
  echo ""
  exit 1
fi

echo ""
echo "✅ PHPUnit Red状態確認完了: ${PHPUNIT_HAS_FAIL}件の失敗 + ${PHPUNIT_HAS_INCOMPLETE}件のincomplete（期待通り）"
echo ""

# TDDサイクル開始: 最初の画面のRed確認
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo "🔄 TDDサイクル開始: フロントエンド実装"
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo ""

# TDD状態表示
npm run tdd:status "${SPEC_NAME}"

echo ""
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo "🔴 最初の画面のRed確認を実行"
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo ""

# 最初の画面のRed確認を実行
npm run tdd:red "${SPEC_NAME}"
TDD_RED_RESULT=$?

DURATION=$((SECONDS - START_TIME))

if [ $TDD_RED_RESULT -eq 0 ]; then
  # 成功: TDDサイクル開始、フロントエンド実装フェーズへ
  # 注意: まだステップ3には進まない（全画面完了後にステップ3で検証）

  # 状態情報取得
  RETRY_COUNT=$(./dev-kit/scripts/workflow/state.sh read "${SPEC_NAME}" retry_count)
  TOTAL_RETRIES=$(./dev-kit/scripts/workflow/state.sh read "${SPEC_NAME}" total_retries)

  echo ""
  echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
  echo "✅ ステップ2: TDDサイクル開始完了"
  echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
  echo ""
  echo "📊 ワークフロー状態:"
  echo "  進捗: Step 2 進行中（22% 完了）"
  echo "  所要時間: ${DURATION}秒"
  echo ""
  echo "📝 リトライ情報:"
  echo "  ステップリトライ: ${RETRY_COUNT}/3"
  echo "  全体リトライ: ${TOTAL_RETRIES}/10"
  echo ""
  echo "🔴 Red状態確認結果:"
  echo "  PHPUnit: ✅ ${PHPUNIT_HAS_FAIL}件の失敗（期待通り）"
  echo "  E2E: ✅ 最初の画面のRed確認完了"
  echo ""
  echo "📌 TDDサイクルフロー:"
  echo "  1. 🔴 Red: E2Eテスト失敗を確認 → npm run tdd:red ${SPEC_NAME}"
  echo "  2. 🟢 Green: 実装してテスト成功 → npm run tdd:green ${SPEC_NAME}"
  echo "  3. 🔵 Refactor: 次の画面へ → 自動的に次のtdd:redへ"
  echo "  4. 繰り返し: 全画面が完了するまで継続"
  echo ""
  echo "📋 現在の状態:"
  npm run tdd:status "${SPEC_NAME}"
  echo ""
  echo "➡️  次のアクション:"
  echo "    tdd:red で指示された画面を frontend-developer エージェントで実装してください"
  echo "    実装完了後: npm run tdd:green ${SPEC_NAME}"
  echo ""
  echo "💡 ヒント:"
  echo "    各画面を1つずつ Red→Green→Refactor のサイクルで実装します"
  echo "    全画面完了後、npm run workflow:step3-test ${SPEC_NAME} で最終検証へ進みます"
  echo ""
  exit 0
else
  # 失敗: テストが成功している（Red状態確認失敗）
  ERROR_MSG="Red状態確認失敗: テストが成功しています（実装前なのに成功は異常）"
  ./dev-kit/scripts/workflow/state.sh error "${SPEC_NAME}" "${ERROR_MSG}" 1

  # 状態情報取得
  RETRY_COUNT=$(./dev-kit/scripts/workflow/state.sh read "${SPEC_NAME}" retry_count)
  TOTAL_RETRIES=$(./dev-kit/scripts/workflow/state.sh read "${SPEC_NAME}" total_retries)

  echo "❌ ステップ2: Red状態確認失敗"
  echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
  echo ""
  echo "📊 ワークフロー状態:"
  echo "  現在: Step 2 (失敗)"
  echo "  エラー: ${ERROR_MSG}"
  echo ""
  echo "📝 リトライ情報:"
  echo "  ステップリトライ: ${RETRY_COUNT}/3"
  echo "  全体リトライ: ${TOTAL_RETRIES}/10"
  echo ""
  echo "🔍 異常検出:"
  echo "  E2Eテストが実装前なのに成功しています"
  echo ""

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
    echo "  1. E2Eテストファイルの内容を確認"
    echo "  2. design.mdの画面一覧を確認"
    echo "  3. ステップ1からやり直す: npm run workflow:step1 ${SPEC_NAME}"
    echo ""
    echo "➡️  修正後に再実行: npm run workflow:step2 ${SPEC_NAME}"
    echo ""
    exit 1
  else
    # リトライ上限到達
    echo ""
    echo "🚨 リトライ上限到達: 人間にエスカレーション"
    echo ""
    echo "📧 通知内容:"
    echo "  - ステップ2を${RETRY_COUNT}回リトライしましたが失敗しました"
    echo "  - エラー: ${ERROR_MSG}"
    echo "  - E2Eテスト生成に問題がある可能性があります"
    echo "  - 手動での確認と修正が必要です"
    echo ""
    exit 1
  fi
fi
