#!/bin/bash

# ui-componentsテンプレートの実際の構造を抽出してドキュメント化
# 使い方: ./dev-kit/scripts/validate/ui-components-spec.sh [template-name]

set -e

UI_COMPONENTS_DIR="dev-kit/ui-components/src/pages/templates"
OUTPUT_DIR="dev-kit/docs/ui-components-specs"

# 出力ディレクトリ作成
mkdir -p "$OUTPUT_DIR"

# テンプレート名を引数から取得、または全テンプレートを処理
TEMPLATE_NAME="${1:-}"

echo "🔍 ui-componentsテンプレート構造の抽出..."

# Error404Pageの構造を抽出
extract_error404_spec() {
  local file="$UI_COMPONENTS_DIR/error/Error404Page.tsx"
  local output="$OUTPUT_DIR/Error404Page.json"

  echo "📄 Error404Page.tsx を解析中..."

  # h2テキストを抽出
  local h2_text=$(grep -A 1 "<h2" "$file" | grep -v "h2" | grep -v "^--$" | sed 's/^[[:space:]]*//' | head -1)

  # pテキストを抽出
  local p_text=$(grep "className=\"login-subtitle\"" "$file" -A 1 | tail -1 | sed 's/^[[:space:]]*//' | sed 's/<[^>]*>//g')

  # ボタンテキストを抽出
  local button1_text=$(grep -A 5 "onClick={handleHomeClick}" "$file" | grep ">" | grep -v "<button" | grep -v "</button" | sed 's/^[[:space:]]*//' | head -1)
  local button2_text=$(grep -A 5 "onClick={() => window.history.back()}" "$file" | grep ">" | grep -v "<button" | grep -v "</button" | sed 's/^[[:space:]]*//' | head -1)

  # onNavigateの引数を抽出
  local navigate_target=$(grep "onNavigate" "$file" | grep -v "interface" | grep -v "//" | head -1 | sed "s/.*onNavigate('\([^']*\)').*/\1/")

  # JSON形式で出力
  cat > "$output" <<EOF
{
  "component": "Error404Page",
  "file": "$file",
  "structure": {
    "heading": $(echo "$h2_text" | jq -Rs .),
    "message": $(echo "$p_text" | jq -Rs .),
    "buttons": [
      {
        "text": $(echo "$button1_text" | jq -Rs .),
        "action": "onNavigate('$navigate_target')",
        "navigateTo": "/dashboard"
      },
      {
        "text": $(echo "$button2_text" | jq -Rs .),
        "action": "window.history.back()"
      }
    ]
  },
  "e2e_selectors": {
    "heading": "h2:has-text(\"$h2_text\")",
    "message": "text=$p_text",
    "homeButton": "button:has-text(\"$button1_text\")",
    "backButton": "button:has-text(\"$button2_text\")"
  }
}
EOF

  echo "✅ Error404Page仕様を出力: $output"
}

# Error500Pageの構造を抽出
extract_error500_spec() {
  local file="$UI_COMPONENTS_DIR/error/Error500Page.tsx"
  local output="$OUTPUT_DIR/Error500Page.json"

  echo "📄 Error500Page.tsx を解析中..."

  # h2テキストを抽出
  local h2_text=$(grep -A 1 "<h2" "$file" | grep -v "h2" | grep -v "^--$" | sed 's/^[[:space:]]*//' | head -1)

  # pテキストを抽出
  local p_text=$(grep "className=\"login-subtitle\"" "$file" -A 1 | tail -1 | sed 's/^[[:space:]]*//' | sed 's/<[^>]*>//g')

  # ボタンテキストを抽出
  local button_text=$(grep -A 5 "onClick={handleHomeClick}" "$file" | grep ">" | grep -v "<button" | grep -v "</button" | sed 's/^[[:space:]]*//' | head -1)

  # onNavigateの引数を抽出
  local navigate_target=$(grep "onNavigate" "$file" | grep -v "interface" | grep -v "//" | head -1 | sed "s/.*onNavigate('\([^']*\)').*/\1/")

  # JSON形式で出力
  cat > "$output" <<EOF
{
  "component": "Error500Page",
  "file": "$file",
  "structure": {
    "heading": $(echo "$h2_text" | jq -Rs .),
    "message": $(echo "$p_text" | jq -Rs .),
    "buttons": [
      {
        "text": $(echo "$button_text" | jq -Rs .),
        "action": "onNavigate('$navigate_target')",
        "navigateTo": "/dashboard"
      }
    ]
  },
  "e2e_selectors": {
    "heading": "h2:has-text(\"$h2_text\")",
    "message": "text=$p_text",
    "homeButton": "button:has-text(\"$button_text\")"
  }
}
EOF

  echo "✅ Error500Page仕様を出力: $output"
}

# DashboardPageの構造を抽出 (参考用)
extract_dashboard_spec() {
  echo "📄 DashboardPage の構造ドキュメント..."

  cat > "$OUTPUT_DIR/DashboardPage.md" <<'EOF'
# DashboardPage構造

## UI階層

```
DashboardPage
├── Header
│   ├── Logo
│   └── User Dropdown ⚠️ クリック必要
│       ├── User Name Display (例: "山田 太郎")
│       └── Logout Button ("ログアウト")
└── Main Content
```

## E2Eテスト時の注意点

### ログアウトボタンへのアクセス

```typescript
// ❌ 直接クリックできない
await page.getByText('ログアウト').click();

// ✅ 正しい手順
// Step 1: ドロップダウンを開く
await page.getByRole('button', { name: 'ユーザー名' }).click();
await page.waitForSelector('text=ログアウト', { state: 'visible' });

// Step 2: ログアウトボタンをクリック
await page.getByText('ログアウト').click();
```

### セレクター

- User Dropdown Button: `button:has-text("ユーザー名")`
- Logout Button (in dropdown): `text=ログアウト`
EOF

  echo "✅ DashboardPage構造ドキュメントを出力: $OUTPUT_DIR/DashboardPage.md"
}

# すべてのテンプレートを抽出
if [ -z "$TEMPLATE_NAME" ]; then
  extract_error404_spec
  extract_error500_spec
  extract_dashboard_spec

  echo ""
  echo "📊 抽出完了サマリー:"
  echo "  - Error404Page.json"
  echo "  - Error500Page.json"
  echo "  - DashboardPage.md"
  echo ""
  echo "📁 出力ディレクトリ: $OUTPUT_DIR"
else
  case "$TEMPLATE_NAME" in
    "Error404Page"|"404")
      extract_error404_spec
      ;;
    "Error500Page"|"500")
      extract_error500_spec
      ;;
    "DashboardPage"|"dashboard")
      extract_dashboard_spec
      ;;
    *)
      echo "❌ 不明なテンプレート: $TEMPLATE_NAME"
      echo "利用可能: Error404Page, Error500Page, DashboardPage"
      exit 1
      ;;
  esac
fi

echo ""
echo "✅ ui-componentsテンプレート構造の抽出が完了しました"
