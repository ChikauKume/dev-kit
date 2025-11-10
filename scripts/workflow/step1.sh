#!/bin/bash

# ============================================
# ステップ1: スケルトン生成
# ============================================
# PHPUnitテストとE2Eテストのスケルトンを生成
# Clean Architecture 4層構造のファイルを自動生成
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
echo "🔧 ステップ1: スケルトン生成"
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo ""

# 状態更新: ステップ1開始
./dev-kit/scripts/workflow/state.sh update "${SPEC_NAME}" current_step 1
./dev-kit/scripts/workflow/state.sh update "${SPEC_NAME}" status in_progress

# スケルトン生成実行
echo "⏳ スケルトン生成中..."
echo ""
echo "▶ PHPUnitテスト生成"
npm run generate:phpunit "${SPEC_NAME}"
PHPUNIT_RESULT=$?

echo ""
echo "▶ E2Eテスト生成"
npm run generate:e2e "${SPEC_NAME}"
E2E_RESULT=$?

echo ""
echo "▶ ui-components CSS設定確認"
# app.tsx が ui-components CSS を import しているかチェック
if [ ! -f "resources/js/app.tsx" ]; then
  echo "⚠️  resources/js/app.tsx が存在しません（スキップ）"
elif grep -q "ui-components.*index.css" resources/js/app.tsx; then
  echo "✅ ui-components CSS は既に設定されています"
else
  echo "⚠️  ui-components CSS が未設定です。自動追加します..."

  # ../css/app.css の次の行に追加（macOS互換性のため -i '' を使用）
  if [[ "$OSTYPE" == "darwin"* ]]; then
    # macOS
    sed -i '' "/import.*css\/app.css/a\\
import '@/dev-kit/ui-components/src/index.css';
" resources/js/app.tsx
  else
    # Linux
    sed -i "/import.*css\/app.css/a\\
import '@/dev-kit/ui-components/src/index.css';" resources/js/app.tsx
  fi

  echo "✅ ui-components CSS を追加しました"
  echo "   ファイル: resources/js/app.tsx"
  echo "   内容: import '@/dev-kit/ui-components/src/index.css';"
fi

DURATION=$((SECONDS - START_TIME))

echo ""
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"

# 結果判定
if [ $PHPUNIT_RESULT -eq 0 ] && [ $E2E_RESULT -eq 0 ]; then
  # 成功: ステップ2へ進行
  ./dev-kit/scripts/workflow/state.sh advance "${SPEC_NAME}" 2 $DURATION

  # 状態情報取得
  RETRY_COUNT=$(./dev-kit/scripts/workflow/state.sh read "${SPEC_NAME}" retry_count)
  TOTAL_RETRIES=$(./dev-kit/scripts/workflow/state.sh read "${SPEC_NAME}" total_retries)

  echo "✅ ステップ1: スケルトン生成完了"
  echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
  echo ""
  echo "📊 ワークフロー状態:"
  echo "  進捗: Step 1 → Step 2 (11% 完了)"
  echo "  所要時間: ${DURATION}秒"
  echo ""
  echo "📝 リトライ情報:"
  echo "  ステップリトライ: ${RETRY_COUNT}/3"
  echo "  全体リトライ: ${TOTAL_RETRIES}/10"
  echo ""
  echo "📁 生成されたファイル:"
  echo "  - app/Modules/{Module}/Domain/ (Entity, ValueObject, RepositoryInterface, DomainException)"
  echo "  - app/Modules/{Module}/Application/ (UseCase, DTO, ApplicationException)"
  echo "  - app/Modules/{Module}/Infrastructure/ (Repository実装, Eloquent Model)"
  echo "  - app/Modules/{Module}/Presentation/ (Controller, FormRequest, Routes)"
  echo "  - tests/Unit/ (Unitテスト)"
  echo "  - tests/Feature/ (Featureテスト)"
  echo "  - tests/e2e/${SPEC_NAME}/ (E2Eテスト)"
  echo ""
  echo "➡️  次のステップ: npm run workflow:step2 ${SPEC_NAME}"
  echo ""
  exit 0
else
  # 失敗: エラー記録
  ERROR_MSG="スケルトン生成失敗"
  if [ $PHPUNIT_RESULT -ne 0 ]; then
    ERROR_MSG="${ERROR_MSG} (PHPUnitテスト生成エラー)"
  fi
  if [ $E2E_RESULT -ne 0 ]; then
    ERROR_MSG="${ERROR_MSG} (E2Eテスト生成エラー)"
  fi

  ./dev-kit/scripts/workflow/state.sh error "${SPEC_NAME}" "${ERROR_MSG}" 1

  # 状態情報取得
  RETRY_COUNT=$(./dev-kit/scripts/workflow/state.sh read "${SPEC_NAME}" retry_count)
  TOTAL_RETRIES=$(./dev-kit/scripts/workflow/state.sh read "${SPEC_NAME}" total_retries)

  echo "❌ ステップ1: スケルトン生成失敗"
  echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
  echo ""
  echo "📊 ワークフロー状態:"
  echo "  現在: Step 1 (失敗)"
  echo "  エラー: ${ERROR_MSG}"
  echo ""
  echo "📝 リトライ情報:"
  echo "  ステップリトライ: ${RETRY_COUNT}/3"
  echo "  全体リトライ: ${TOTAL_RETRIES}/10"

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
    echo "  1. YAML構文を確認: dev-kit/docs/specs/${SPEC_NAME}/tests/phpunit.yaml"
    echo "  2. YAML構文を確認: dev-kit/docs/specs/${SPEC_NAME}/tests/e2e.yaml"
    echo "  3. ディレクトリ権限を確認: ls -la app/Modules/"
    echo ""
    echo "➡️  修正後に再実行: npm run workflow:step1 ${SPEC_NAME}"
    echo ""
    exit 1
  else
    # リトライ上限到達
    echo ""
    echo "🚨 リトライ上限到達: 人間にエスカレーション"
    echo ""
    echo "📧 通知内容:"
    echo "  - ステップ1を${RETRY_COUNT}回リトライしましたが失敗しました"
    echo "  - エラー: ${ERROR_MSG}"
    echo "  - 手動での確認と修正が必要です"
    echo ""
    exit 1
  fi
fi
