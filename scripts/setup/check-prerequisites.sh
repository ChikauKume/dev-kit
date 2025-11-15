#!/bin/bash

# ============================================
# 前提条件チェックスクリプト
# ============================================
# 必須ファイルの存在を確認する
# - design.md (機能仕様)
# - phpunit.yaml (PHPUnitテスト設計)
# - e2e.yaml (E2Eシナリオ設計)
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

SPEC_DIR="dev-kit/docs/specs/${SPEC_NAME}"
DESIGN_FILE="${SPEC_DIR}/design.md"
PHPUNIT_FILE="${SPEC_DIR}/tests/phpunit.yaml"
E2E_FILE="${SPEC_DIR}/tests/e2e.yaml"

echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo "📋 前提条件チェック: ${SPEC_NAME}"
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"

ERRORS=0

# design.md チェック
if [ -f "$DESIGN_FILE" ]; then
  echo "✅ design.md: 存在"
else
  echo "❌ design.md: 存在しません"
  echo "   場所: $DESIGN_FILE"
  ERRORS=$((ERRORS + 1))
fi

# phpunit.yaml チェック
if [ -f "$PHPUNIT_FILE" ]; then
  echo "✅ phpunit.yaml: 存在"
else
  echo "❌ phpunit.yaml: 存在しません"
  echo "   場所: $PHPUNIT_FILE"
  ERRORS=$((ERRORS + 1))
fi

# e2e.yaml チェック
if [ -f "$E2E_FILE" ]; then
  echo "✅ e2e.yaml: 存在"
else
  echo "❌ e2e.yaml: 存在しません"
  echo "   場所: $E2E_FILE"
  ERRORS=$((ERRORS + 1))
fi

echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"

if [ $ERRORS -eq 0 ]; then
  echo "✅ 前提条件チェック: 成功"
  echo ""
  echo "次のステップ:"
  echo "  1. Laravel Sailを起動: ./vendor/bin/sail up -d"
  echo "  2. ワークフロー初期化: npm run workflow:init ${SPEC_NAME}"
  echo "  3. ステップ2を実行: ./dev-kit/scripts/setup/init.sh"
  exit 0
else
  echo "❌ 前提条件チェック: 失敗 (${ERRORS}個のエラー)"
  echo ""
  echo "対処方法:"
  echo "  1. 仕様書を作成: $DESIGN_FILE"
  echo "  2. PHPUnitテスト設計を作成: $PHPUNIT_FILE"
  echo "  3. E2Eシナリオ設計を作成: $E2E_FILE"
  exit 1
fi
