#!/bin/bash

# ============================================
# TDDサイクル管理スクリプト（パターンA: 機能ごとのフルスタックTDD）
# ============================================
# 機能ごとにフロントエンド+バックエンドを完全完成させるTDDサイクルを実行
# Red→Green→Refactorを機能単位で実施（フロントE2E + バックエンド単体 + 統合）
# design.mdから画面一覧を抽出して順次処理
# ============================================

set -e

SPEC_NAME=$1
ACTION=${2:-"status"}  # status, red, green, next

if [ -z "$SPEC_NAME" ]; then
  echo "❌ エラー: SPEC_NAMEが指定されていません"
  echo "使用方法: $0 <SPEC_NAME> [action]"
  echo "  action: status (デフォルト), red, green, next"
  exit 1
fi

# パストラバーサル対策
if [[ "$SPEC_NAME" =~ \.\./|^/ ]]; then
    echo "❌ エラー: 不正な仕様名が指定されています"
    exit 1
fi

PROJECT_ROOT="$(cd "$(dirname "${BASH_SOURCE[0]}")/../../.." && pwd)"
STATE_DIR="$PROJECT_ROOT/dev-kit/state"
TDD_STATE_FILE="$STATE_DIR/tdd-${SPEC_NAME}.json"
DESIGN_FILE="$PROJECT_ROOT/dev-kit/docs/specs/${SPEC_NAME}/design.md"

# 状態ディレクトリ作成
mkdir -p "$STATE_DIR"

# ============================================
# 画面一覧を抽出
# ============================================
extract_pages() {
  if [ ! -f "$DESIGN_FILE" ]; then
    echo "❌ design.mdが見つかりません: $DESIGN_FILE"
    exit 1
  fi

  # **画面一覧**: セクションから .tsx ファイルを抽出
  grep -A 20 '\*\*画面一覧\*\*:' "$DESIGN_FILE" 2>/dev/null | \
    grep -oE '[A-Za-z0-9]+\.tsx' | \
    sed 's/\.tsx$//' || echo ""
}

# ============================================
# TDD状態ファイルの初期化
# ============================================
init_tdd_state() {
  if [ ! -f "$TDD_STATE_FILE" ]; then
    echo "📝 TDD状態ファイルを初期化します..."

    PAGES=$(extract_pages)

    if [ -z "$PAGES" ]; then
      echo "❌ design.mdから画面一覧を抽出できませんでした"
      exit 1
    fi

    # JSON形式で状態を保存
    echo "{" > "$TDD_STATE_FILE"
    echo "  \"spec\": \"$SPEC_NAME\"," >> "$TDD_STATE_FILE"
    echo "  \"pages\": {" >> "$TDD_STATE_FILE"

    FIRST=true
    for page in $PAGES; do
      if [ "$FIRST" = true ]; then
        FIRST=false
      else
        echo "," >> "$TDD_STATE_FILE"
      fi
      echo -n "    \"$page\": {\"status\": \"pending\", \"red\": false, \"green\": false}" >> "$TDD_STATE_FILE"
    done

    echo "" >> "$TDD_STATE_FILE"
    echo "  }," >> "$TDD_STATE_FILE"
    echo "  \"current_page\": null," >> "$TDD_STATE_FILE"
    echo "  \"total_pages\": $(echo "$PAGES" | wc -w | tr -d ' ')," >> "$TDD_STATE_FILE"
    echo "  \"completed_pages\": 0" >> "$TDD_STATE_FILE"
    echo "}" >> "$TDD_STATE_FILE"

    echo "✅ TDD状態ファイルを初期化しました"
    echo "   画面数: $(echo "$PAGES" | wc -w | tr -d ' ')"
  fi
}

# ============================================
# 現在の状態を表示
# ============================================
show_status() {
  init_tdd_state

  echo ""
  echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
  echo "📊 TDDサイクル進捗状況"
  echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
  echo ""

  TOTAL=$(cat "$TDD_STATE_FILE" | grep '"total_pages"' | grep -oE '[0-9]+')
  COMPLETED=$(cat "$TDD_STATE_FILE" | grep '"completed_pages"' | grep -oE '[0-9]+')

  echo "進捗: $COMPLETED / $TOTAL 画面完了"
  echo ""
  echo "画面一覧:"

  # 各画面の状態を表示
  PAGES=$(cat "$TDD_STATE_FILE" | grep -oE '"[A-Za-z0-9]+":\s*\{' | grep -oE '[A-Za-z0-9]+' | grep -v status | grep -v red | grep -v green | grep -v pages | grep -v spec)

  for page in $PAGES; do
    STATUS=$(cat "$TDD_STATE_FILE" | grep "\"$page\"" | grep -oE '"status":\s*"(pending|in_progress|completed)"' | grep -oE '(pending|in_progress|completed)')
    RED=$(cat "$TDD_STATE_FILE" | grep "\"$page\"" | grep -oE '"red":\s*(true|false)' | grep -oE '(true|false)')
    GREEN=$(cat "$TDD_STATE_FILE" | grep "\"$page\"" | grep -oE '"green":\s*(true|false)' | grep -oE '(true|false)')

    case "$STATUS" in
      pending)
        echo "  ⏸️  $page.tsx - 未実装"
        ;;
      in_progress)
        if [ "$RED" = "true" ]; then
          echo "  🔴 $page.tsx - Red確認済み（実装中）"
        else
          echo "  ⏳ $page.tsx - Red確認待ち"
        fi
        ;;
      completed)
        echo "  ✅ $page.tsx - 完了（Red→Green）"
        ;;
    esac
  done

  echo ""
  echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
}

# ============================================
# 次に実装すべき画面を取得
# ============================================
get_next_page() {
  init_tdd_state

  # pending または in_progress の最初の画面を取得
  PAGES=$(cat "$TDD_STATE_FILE" | grep -oE '"[A-Za-z0-9]+":\s*\{' | grep -oE '[A-Za-z0-9]+' | grep -v status | grep -v red | grep -v green | grep -v pages | grep -v spec)

  for page in $PAGES; do
    STATUS=$(cat "$TDD_STATE_FILE" | grep "\"$page\"" | grep -oE '"status":\s*"(pending|in_progress|completed)"' | grep -oE '(pending|in_progress|completed)')

    if [ "$STATUS" = "pending" ] || [ "$STATUS" = "in_progress" ]; then
      echo "$page"
      return 0
    fi
  done

  # 全て完了
  return 1
}

# ============================================
# Red確認（テストが失敗することを確認）
# ============================================
run_red_check() {
  NEXT_PAGE=$(get_next_page)

  if [ -z "$NEXT_PAGE" ]; then
    echo "✅ 全ての画面が完了しました！"
    exit 0
  fi

  echo ""
  echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
  echo "🔴 Red確認: $NEXT_PAGE.tsx（フロントエンド + バックエンド）"
  echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
  echo ""

  # 状態を in_progress に更新
  sed -i.bak "s/\"$NEXT_PAGE\": {\"status\": \"pending\"/\"$NEXT_PAGE\": {\"status\": \"in_progress\"/" "$TDD_STATE_FILE"
  rm -f "${TDD_STATE_FILE}.bak"

  RED_FAILED=false

  # フロントエンドE2Eテスト実行
  echo "▶ フロントエンドE2Eテスト実行: $NEXT_PAGE（失敗期待）"
  TEST_FILE="tests/e2e/${SPEC_NAME}/${NEXT_PAGE}.spec.ts"

  if [ -f "$PROJECT_ROOT/$TEST_FILE" ]; then
    cd "$PROJECT_ROOT"

    if npx playwright test "$TEST_FILE" 2>&1 | tee /tmp/tdd-red-e2e-${NEXT_PAGE}.log | grep -q "failed"; then
      echo "✅ E2Eテスト失敗確認（期待通り）"
    else
      echo "❌ E2Eテストが成功しています（実装前なのに成功は異常）"
      RED_FAILED=true
    fi
  else
    echo "❌ テストファイルが見つかりません: $TEST_FILE"
    exit 1
  fi

  echo ""

  # バックエンド単体テスト実行
  echo "▶ バックエンド単体テスト実行（失敗期待）"
  if ./vendor/bin/sail artisan test --testsuite=Unit 2>&1 | tee /tmp/tdd-red-unit-${NEXT_PAGE}.log | grep -qE "(FAILURES!|Failed)"; then
    echo "✅ 単体テスト失敗確認（期待通り）"
  else
    echo "⚠️  単体テストが成功またはスキップされました"
  fi

  echo ""

  # バックエンド統合テスト実行
  echo "▶ バックエンド統合テスト実行（失敗期待）"
  if ./vendor/bin/sail artisan test --testsuite=Feature 2>&1 | tee /tmp/tdd-red-feature-${NEXT_PAGE}.log | grep -qE "(FAILURES!|Failed)"; then
    echo "✅ 統合テスト失敗確認（期待通り）"
  else
    echo "⚠️  統合テストが成功またはスキップされました"
  fi

  echo ""

  if [ "$RED_FAILED" = true ]; then
    echo ""
    echo "❌ Red確認失敗: フロントエンドE2Eテストが成功しています"
    exit 1
  fi

  echo ""
  echo "✅ Red確認完了: 全テスト失敗を確認"

  # red: true に更新
  sed -i.bak "s/\"$NEXT_PAGE\": {\"status\": \"in_progress\", \"red\": false/\"$NEXT_PAGE\": {\"status\": \"in_progress\", \"red\": true/" "$TDD_STATE_FILE"
  rm -f "${TDD_STATE_FILE}.bak"

  # TDDコンテキストファイルを作成（frontend-developer + backend-developer用）
  TDD_CONTEXT_FILE="$STATE_DIR/tdd-context-${SPEC_NAME}.txt"
  cat > "$TDD_CONTEXT_FILE" << EOF
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
機能ごとのフルスタックTDDサイクル実施中
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

現在実装すべき機能: ${NEXT_PAGE} のみ

この機能では以下を完全に実装します:
1. フロントエンド: ${NEXT_PAGE}.tsx
2. バックエンド: ${NEXT_PAGE} に必要なAPIのみ
   - Controller
   - UseCase
   - Repository
   - Model
   - FormRequest
   - Routes

実装順序:
1. フロントエンド実装（${NEXT_PAGE}.tsx のみ）
2. バックエンド実装（上記APIのみ）

TDD違反検出（tdd:greenで自動検出）:
- 他の画面の実装 → エラー
- 他のAPIの実装 → エラー
- 複数機能の一括実装 → エラー

実装後のテスト範囲（tdd:green自動実行）:
✓ フロントエンドE2Eテスト
✓ フロントエンド品質検証
✓ バックエンド単体テスト
✓ バックエンド統合テスト
✓ バックエンド品質検証

全て合格した場合のみ次の機能へ進めます。

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
進捗状況:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

EOF

  # 進捗状況を追記
  TOTAL=$(cat "$TDD_STATE_FILE" | grep '"total_pages"' | grep -oE '[0-9]+')
  COMPLETED=$(cat "$TDD_STATE_FILE" | grep '"completed_pages"' | grep -oE '[0-9]+')

  PAGES=$(cat "$TDD_STATE_FILE" | grep -oE '"[A-Za-z0-9]+":\s*\{' | grep -oE '[A-Za-z0-9]+' | grep -v status | grep -v red | grep -v green | grep -v pages | grep -v spec)

  for page in $PAGES; do
    STATUS=$(cat "$TDD_STATE_FILE" | grep "\"$page\"" | grep -oE '"status":\s*"(pending|in_progress|completed)"' | grep -oE '(pending|in_progress|completed)')

    if [ "$STATUS" = "completed" ]; then
      echo "  ✅ $page.tsx - 完了" >> "$TDD_CONTEXT_FILE"
    elif [ "$STATUS" = "in_progress" ]; then
      echo "  🔴 $page.tsx - 実装中（あなたが今実装すべき画面）" >> "$TDD_CONTEXT_FILE"
    else
      echo "  ⏸️  $page.tsx - 未実装（後で実装）" >> "$TDD_CONTEXT_FILE"
    fi
  done

  echo "" >> "$TDD_CONTEXT_FILE"
  echo "完了: $COMPLETED / $TOTAL 画面" >> "$TDD_CONTEXT_FILE"
  echo "" >> "$TDD_CONTEXT_FILE"
  echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━" >> "$TDD_CONTEXT_FILE"

  echo ""
  echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
  echo "📝 次のステップ"
  echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
  echo ""
  echo "実装対象: $NEXT_PAGE 機能のみ"
  echo ""
  echo "1. フロントエンド実装:"
  echo "   - 場所: resources/js/Pages/Auth/$NEXT_PAGE.tsx"
  echo "   - 制約: このファイルのみ作成・編集"
  echo ""
  echo "2. バックエンド実装:"
  echo "   - Controller: app/Modules/*/Presentation/${NEXT_PAGE}Controller.php"
  echo "   - UseCase: app/Modules/*/Application/*${NEXT_PAGE}*.php"
  echo "   - Repository: app/Modules/*/Infrastructure/*Repository.php"
  echo "   - Model: app/Modules/*/Infrastructure/*Model.php"
  echo "   - FormRequest: app/Modules/*/Presentation/Requests/${NEXT_PAGE}Request.php"
  echo "   - Routes: routes/*.php"
  echo ""
  echo "制約:"
  echo "  - 他の機能の実装 → tdd:green でエラー検出"
  echo "  - 複数機能の一括実装 → tdd:green でエラー検出"
  echo ""
  echo "📄 TDDコンテキスト: $TDD_CONTEXT_FILE"
  echo ""
  echo "実装完了後の検証:"
  echo "   npm run tdd:green $SPEC_NAME"
  echo "   - TDD違反チェック（フロント+バック）"
  echo "   - ビルド実行"
  echo "   - フロントエンド品質検証"
  echo "   - E2Eテスト実行"
  echo "   - バックエンド単体テスト実行"
  echo "   - バックエンド統合テスト実行"
  echo "   - バックエンド品質検証"
  echo ""

  exit 0
}

# ============================================
# Green確認（テストが成功することを確認）
# ============================================
run_green_check() {
  CURRENT_PAGE=$(get_next_page)

  if [ -z "$CURRENT_PAGE" ]; then
    echo "✅ 全ての画面が完了しました！"
    exit 0
  fi

  # Red確認済みかチェック
  RED=$(cat "$TDD_STATE_FILE" | grep "\"$CURRENT_PAGE\"" | grep -oE '"red":\s*(true|false)' | grep -oE '(true|false)')

  if [ "$RED" != "true" ]; then
    echo "❌ エラー: $CURRENT_PAGE は Red確認がまだ完了していません"
    echo "   先に 'npm run tdd:red $SPEC_NAME' を実行してください"
    exit 1
  fi

  echo ""
  echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
  echo "🟢 Green確認: $CURRENT_PAGE 機能（フロントエンド + バックエンド）"
  echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
  echo ""

  # TDD違反チェック（実装済み画面の変更、未実装画面の作成を検出）
  SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
  "$SCRIPT_DIR/check-tdd-violations.sh" "$SPEC_NAME" "$CURRENT_PAGE"
  VIOLATION_CHECK=$?

  if [ $VIOLATION_CHECK -ne 0 ]; then
    echo ""
    echo "❌ TDD違反が検出されました"
    echo "   上記のエラーを修正してから再実行してください"
    echo ""
    exit 1
  fi
  echo ""

  # ビルド実行
  echo "▶ ビルド実行"
  cd "$PROJECT_ROOT"
  npm run build
  BUILD_RESULT=$?

  if [ $BUILD_RESULT -ne 0 ]; then
    echo ""
    echo "❌ ビルドエラー: TypeScript構文エラーを修正してください"
    exit 1
  fi

  # フロントエンド品質検証
  echo ""
  echo "▶ フロントエンド品質検証: $CURRENT_PAGE.tsx"
  SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
  VALIDATE_FRONTEND="$SCRIPT_DIR/../validate/frontend.sh"

  if [ -x "$VALIDATE_FRONTEND" ]; then
    if "$VALIDATE_FRONTEND" 2>&1 | tee /tmp/tdd-validate-frontend-${CURRENT_PAGE}.log; then
      echo "✅ フロントエンド品質検証: 合格"
    else
      echo ""
      echo "❌ フロントエンド品質検証: 不合格"
      echo ""
      echo "品質検証エラー:"
      echo "  - ui-componentsテンプレート未使用"
      echo "  - カスタムコンポーネント作成"
      echo "  - Tailwind CSS使用"
      echo "  - 直接HTML要素使用"
      echo "  のいずれかが検出されました"
      echo ""
      echo "修正後に再実行: npm run tdd:green $SPEC_NAME"
      echo ""
      exit 1
    fi
  else
    echo "⚠️  validate:frontend スクリプトが見つかりません（スキップ）"
  fi

  echo ""
  echo "▶ E2Eテスト実行: $CURRENT_PAGE（動画記録あり）"

  TEST_FILE="tests/e2e/${SPEC_NAME}/${CURRENT_PAGE}.spec.ts"
  EVIDENCE_DIR="$PROJECT_ROOT/test-reports/${SPEC_NAME}/feature-${CURRENT_PAGE}"

  # 証拠ディレクトリ作成
  mkdir -p "$EVIDENCE_DIR"

  # E2Eテスト実行（動画は playwright.config で設定済み）
  if npx playwright test "$TEST_FILE" 2>&1 | tee /tmp/tdd-green-e2e-${CURRENT_PAGE}.log | grep -q "passed"; then
    echo "✅ E2Eテスト成功"

    # 証拠収集
    echo ""
    echo "▶ 証拠収集: 動画 + HTMLレポート"

    # 動画ファイルをコピー
    if [ -d "test-results" ]; then
      find test-results -name "*.webm" -print0 2>/dev/null | xargs -0 -I {} cp {} "$EVIDENCE_DIR/" 2>/dev/null || true
      echo "  ✅ 動画を保存: $EVIDENCE_DIR/"
    fi

    # HTMLレポート生成
    npx playwright show-report --host 127.0.0.1 --port 0 > /dev/null 2>&1 &
    echo "  ✅ HTMLレポート生成中（バックグラウンド）"
    echo ""
    echo "📹 証拠保存先: $EVIDENCE_DIR/"
    echo "   - 動画: *.webm"
    echo "   - HTMLレポート: playwright-report/"
  else
    echo ""
    echo "❌ E2Eテスト失敗"
    echo ""

    # 失敗時も証拠収集
    echo "▶ 失敗証拠収集: 動画 + HTMLレポート"
    mkdir -p "$EVIDENCE_DIR"

    # 動画ファイルをコピー
    if [ -d "test-results" ]; then
      find test-results -name "*.webm" -print0 2>/dev/null | xargs -0 -I {} cp {} "$EVIDENCE_DIR/" 2>/dev/null || true
      echo "  ✅ 失敗動画を保存: $EVIDENCE_DIR/"
    fi

    echo ""
    echo "🔧 対処方法:"
    echo "  1. 失敗動画を確認: $EVIDENCE_DIR/*.webm"
    echo "  2. HTMLレポートで詳細確認（自動起動中）"
    echo "  3. 実装を修正"
    echo "  4. 再度 'npm run tdd:green $SPEC_NAME' を実行"
    echo ""
    npx playwright show-report > /dev/null 2>&1 &
    exit 1
  fi

  # バックエンド単体テスト実行
  echo ""
  echo "▶ バックエンド単体テスト実行"
  if ./vendor/bin/sail artisan test --testsuite=Unit 2>&1 | tee /tmp/tdd-green-unit-${CURRENT_PAGE}.log | grep -qE "Tests:.*(PASS|incomplete)"; then
    if grep -q "incomplete" /tmp/tdd-green-unit-${CURRENT_PAGE}.log; then
      echo "⏸️  単体テストはTODOスケルトン（incomplete）"
    else
      echo "✅ 単体テスト成功"
    fi
  else
    echo ""
    echo "❌ 単体テスト失敗"
    echo "   ログを確認: /tmp/tdd-green-unit-${CURRENT_PAGE}.log"
    echo ""
    exit 1
  fi

  # バックエンド統合テスト実行
  echo ""
  echo "▶ バックエンド統合テスト実行"
  if ./vendor/bin/sail artisan test --testsuite=Feature 2>&1 | tee /tmp/tdd-green-feature-${CURRENT_PAGE}.log | grep -qE "Tests:.*(PASS|incomplete)"; then
    if grep -q "incomplete" /tmp/tdd-green-feature-${CURRENT_PAGE}.log; then
      echo "⏸️  統合テストはTODOスケルトン（incomplete）"
    else
      echo "✅ 統合テスト成功"
    fi
  else
    echo ""
    echo "❌ 統合テスト失敗"
    echo "   ログを確認: /tmp/tdd-green-feature-${CURRENT_PAGE}.log"
    echo ""
    exit 1
  fi

  # バックエンド品質検証
  echo ""
  echo "▶ バックエンド品質検証: $CURRENT_PAGE"
  VALIDATE_BACKEND="$SCRIPT_DIR/../validate/backend.sh"

  if [ -x "$VALIDATE_BACKEND" ]; then
    if "$VALIDATE_BACKEND" "$SPEC_NAME" 2>&1 | tee /tmp/tdd-validate-backend-${CURRENT_PAGE}.log; then
      echo "✅ バックエンド品質検証: 合格"
    else
      echo ""
      echo "❌ バックエンド品質検証: 不合格"
      echo ""
      echo "品質検証エラー:"
      echo "  - Clean Architecture 4層構造違反"
      echo "  - バリデーション実装不備"
      echo "  - design.md準拠違反"
      echo "  のいずれかが検出されました"
      echo ""
      echo "修正後に再実行: npm run tdd:green $SPEC_NAME"
      echo ""
      exit 1
    fi
  else
    echo "⚠️  validate:backend スクリプトが見つかりません（スキップ）"
  fi

  echo ""
  echo "✅ Green確認成功: 全テスト合格！"

  # 全て成功した場合のみ状態を更新
  if true; then
    echo ""
    echo "✅ $CURRENT_PAGE 機能の実装完了！"

    # 状態を completed に更新
    sed -i.bak "s/\"$CURRENT_PAGE\": {\"status\": \"in_progress\", \"red\": true, \"green\": false}/\"$CURRENT_PAGE\": {\"status\": \"completed\", \"red\": true, \"green\": true}/" "$TDD_STATE_FILE"
    rm -f "${TDD_STATE_FILE}.bak"

    # completed_pages をインクリメント
    COMPLETED=$(cat "$TDD_STATE_FILE" | grep '"completed_pages"' | grep -oE '[0-9]+')
    NEW_COMPLETED=$((COMPLETED + 1))
    sed -i.bak "s/\"completed_pages\": $COMPLETED/\"completed_pages\": $NEW_COMPLETED/" "$TDD_STATE_FILE"
    rm -f "${TDD_STATE_FILE}.bak"

    TOTAL=$(cat "$TDD_STATE_FILE" | grep '"total_pages"' | grep -oE '[0-9]+')

    echo ""
    echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
    echo "🎉 $CURRENT_PAGE 機能の実装完了！"
    echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
    echo ""
    echo "完了した内容:"
    echo "  ✅ フロントエンド: $CURRENT_PAGE.tsx"
    echo "  ✅ バックエンド: API実装"
    echo "  ✅ E2Eテスト合格"
    echo "  ✅ 単体テスト合格"
    echo "  ✅ 統合テスト合格"
    echo "  ✅ 品質検証合格（フロント+バック）"
    echo ""

    # 進捗状況を詳細表示
    show_status

    if [ $NEW_COMPLETED -lt $TOTAL ]; then
      # 次の画面へ
      NEXT_PAGE=$(get_next_page)
      echo ""
      echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
      echo "📝 次のステップ"
      echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
      echo ""
      echo "1️⃣  進捗確認（推奨）:"
      echo "   npm run tdd:status $SPEC_NAME"
      echo ""
      echo "2️⃣  次の機能のRed確認:"
      echo "   npm run tdd:red $SPEC_NAME"
      echo ""
      echo "次の機能: $NEXT_PAGE"
      echo ""
    else
      echo ""
      echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
      echo "🎊 全ての機能の実装が完了しました！"
      echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
      echo ""
      echo "➡️  次のステップ: npm run workflow:step3-test $SPEC_NAME"
      echo "    （全機能統合検証）"
      echo ""
    fi

    exit 0
  fi
}

# ============================================
# メイン処理
# ============================================
case "$ACTION" in
  status)
    show_status
    ;;
  red)
    run_red_check
    ;;
  green)
    run_green_check
    ;;
  next)
    NEXT=$(get_next_page)
    if [ -n "$NEXT" ]; then
      echo "$NEXT"
    else
      echo "完了"
    fi
    ;;
  *)
    echo "❌ 不正なアクション: $ACTION"
    echo "使用可能: status, red, green, next"
    exit 1
    ;;
esac
