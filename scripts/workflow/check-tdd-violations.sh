#!/bin/bash

# ============================================
# TDD違反チェック
# ============================================
# 実装済み画面が変更されていないかチェック
# 複数画面が同時に実装されていないかチェック
# ============================================

set -e

SPEC_NAME=$1
CURRENT_PAGE=$2

if [ -z "$SPEC_NAME" ] || [ -z "$CURRENT_PAGE" ]; then
  echo "❌ エラー: 引数が不足しています"
  echo "使用方法: $0 <SPEC_NAME> <CURRENT_PAGE>"
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

if [ ! -f "$TDD_STATE_FILE" ]; then
  echo "⚠️  TDD状態ファイルが見つかりません"
  exit 0
fi

# 実装済み画面のリストを取得
COMPLETED_PAGES=$(cat "$TDD_STATE_FILE" | grep -oE '"[A-Za-z0-9]+": *\{"status": *"completed"' | grep -oE '^"[A-Za-z0-9]+' | tr -d '"')

VIOLATIONS=0

echo ""
echo "🔍 TDD違反チェック: 実装済み機能の変更確認（フロント+バック）"
echo ""

# フロントエンド: git diffで実装済み画面が変更されていないかチェック
echo "▶ フロントエンド変更チェック"
for page in $COMPLETED_PAGES; do
  if [ "$page" = "$CURRENT_PAGE" ]; then
    continue
  fi

  # 動的にファイルを検索（複数のディレクトリパターンに対応）
  FILE_PATH=$(find "$PROJECT_ROOT/resources/js/Pages" -name "${page}.tsx" 2>/dev/null | head -1)

  if [ -n "$FILE_PATH" ]; then
    # 相対パスに変換
    RELATIVE_PATH="${FILE_PATH#$PROJECT_ROOT/}"

    # git diffで変更があるかチェック
    cd "$PROJECT_ROOT"
    if git diff --name-only 2>/dev/null | grep -q "$RELATIVE_PATH"; then
      echo "⚠️  違反検出: $RELATIVE_PATH が変更されています"
      echo "   → $page.tsx は既に実装完了済みです"
      echo "   → 現在実装すべき機能は $CURRENT_PAGE のみです"
      echo ""
      VIOLATIONS=$((VIOLATIONS + 1))
    fi
  fi
done

# バックエンド: 完了済み機能のバックエンドファイルが変更されていないかチェック
echo "▶ バックエンド変更チェック"
for page in $COMPLETED_PAGES; do
  if [ "$page" = "$CURRENT_PAGE" ]; then
    continue
  fi

  # Controller変更チェック
  if git diff --name-only 2>/dev/null | grep -qE "app/Modules/.*/Presentation/.*${page}Controller\.php"; then
    echo "⚠️  違反検出: ${page}Controller.php が変更されています"
    echo "   → ${page} のバックエンドは既に実装完了済みです"
    echo "   → 現在実装すべき機能は $CURRENT_PAGE のみです"
    echo ""
    VIOLATIONS=$((VIOLATIONS + 1))
  fi

  # UseCase変更チェック
  if git diff --name-only 2>/dev/null | grep -qE "app/Modules/.*/Application/.*${page}.*\.php"; then
    echo "⚠️  違反検出: ${page} UseCaseが変更されています"
    echo "   → ${page} のバックエンドは既に実装完了済みです"
    echo "   → 現在実装すべき機能は $CURRENT_PAGE のみです"
    echo ""
    VIOLATIONS=$((VIOLATIONS + 1))
  fi

  # FormRequest変更チェック
  if git diff --name-only 2>/dev/null | grep -qE "app/Modules/.*/Presentation/Requests/.*${page}Request\.php"; then
    echo "⚠️  違反検出: ${page}Request.php が変更されています"
    echo "   → ${page} のバックエンドは既に実装完了済みです"
    echo "   → 現在実装すべき機能は $CURRENT_PAGE のみです"
    echo ""
    VIOLATIONS=$((VIOLATIONS + 1))
  fi
done

# 未実装画面が作成されていないかチェック
PENDING_PAGES=$(cat "$TDD_STATE_FILE" | grep -oE '"[A-Za-z0-9]+": *\{"status": *"pending"' | grep -oE '^"[A-Za-z0-9]+' | tr -d '"')

for page in $PENDING_PAGES; do
  # 動的にファイルを検索（複数のディレクトリパターンに対応）
  FILE_PATH=$(find "$PROJECT_ROOT/resources/js/Pages" -name "${page}.tsx" 2>/dev/null | head -1)

  if [ -n "$FILE_PATH" ]; then
    # 相対パスに変換
    RELATIVE_PATH="${FILE_PATH#$PROJECT_ROOT/}"

    echo "⚠️  違反検出: $RELATIVE_PATH が作成されています"
    echo "   → $page.tsx はまだ実装フェーズではありません"
    echo "   → 現在実装すべき画面は $CURRENT_PAGE.tsx のみです"
    echo ""
    VIOLATIONS=$((VIOLATIONS + 1))
  fi
done

if [ $VIOLATIONS -gt 0 ]; then
  echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
  echo "🚨 TDD違反検出: ${VIOLATIONS}件"
  echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
  echo ""
  echo "機能ごとのフルスタックTDDサイクルでは、1機能ずつ実装します。"
  echo "複数機能を同時に実装すると、テストが失敗した際に"
  echo "どの機能が原因か特定が困難になります。"
  echo ""
  echo "対処方法:"
  echo "  1. 不要な変更を元に戻す: git checkout -- <FILE_PATH>"
  echo "  2. 現在の機能のみを実装:"
  echo "     - フロントエンド: $CURRENT_PAGE.tsx"
  echo "     - バックエンド: $CURRENT_PAGE に必要なAPIのみ"
  echo "  3. 再度実行: npm run tdd:green $SPEC_NAME"
  echo ""
  exit 1
else
  echo "✅ TDD違反なし: $CURRENT_PAGE 機能のみが変更されています"
  echo ""
  exit 0
fi
