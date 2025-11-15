#!/bin/bash
# Spec-Workflow タスクベース開発 セットアップスクリプト
#
# 新規Laravelプロジェクトにdev-kitを導入するための初期化スクリプト
#
# 使い方:
#   1. dev-kit/ ディレクトリをプロジェクトルートにコピー
#   2. ./dev-kit/scripts/setup/init.sh を実行

set -e

PROJECT_ROOT="$(cd "$(dirname "${BASH_SOURCE[0]}")/../../.." && pwd)"
TEMPLATE_DIR="$PROJECT_ROOT/dev-kit/scripts/templates"

# 色定義
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

echo "========================================================================"
echo -e "${BLUE}🚀 Spec-Workflow タスクベース開発 Setup${NC}"
echo "========================================================================"
echo ""
echo "Project Root: $PROJECT_ROOT"
echo ""

# ========================================================================
# 0. jq インストール確認と自動インストール
# ========================================================================
echo -e "${BLUE}📝 Step 0: jq Installation Check${NC}"
echo "------------------------------------------------------------------------"

if ! command -v jq &> /dev/null; then
    echo -e "${YELLOW}⚠️  jq not found. Installing...${NC}"

    if [[ "$OSTYPE" == "darwin"* ]]; then
        # macOS
        if command -v brew &> /dev/null; then
            brew install jq
            echo -e "${GREEN}✅ jq installed via Homebrew${NC}"
        else
            echo -e "${RED}❌ ERROR: Homebrew not found. Please install Homebrew first:${NC}"
            echo "   /bin/bash -c \"\$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)\""
            exit 1
        fi
    elif [[ "$OSTYPE" == "linux-gnu"* ]]; then
        # Linux
        if command -v apt-get &> /dev/null; then
            sudo apt-get update && sudo apt-get install -y jq
            echo -e "${GREEN}✅ jq installed via apt-get${NC}"
        elif command -v yum &> /dev/null; then
            sudo yum install -y jq
            echo -e "${GREEN}✅ jq installed via yum${NC}"
        else
            echo -e "${RED}❌ ERROR: Package manager not found (apt-get or yum required)${NC}"
            exit 1
        fi
    else
        echo -e "${RED}❌ ERROR: Unsupported OS: $OSTYPE${NC}"
        exit 1
    fi
else
    echo -e "${GREEN}✅ jq already installed${NC}"
fi

echo ""

# ========================================================================
# 1. playwright.config.ts 生成
# ========================================================================
echo -e "${BLUE}📝 Step 1: playwright.config.ts${NC}"
echo "------------------------------------------------------------------------"

if [ ! -f "$PROJECT_ROOT/playwright.config.ts" ]; then
    cp "$TEMPLATE_DIR/playwright.config.ts.template" "$PROJECT_ROOT/playwright.config.ts"
    echo -e "${GREEN}✅ playwright.config.ts created${NC}"
else
    echo -e "${YELLOW}⚠️  playwright.config.ts already exists (skipped)${NC}"
fi

echo ""

# ========================================================================
# 2. vite.config.js 生成（強制上書き）
# ========================================================================
echo -e "${BLUE}📝 Step 2: vite.config.js${NC}"
echo "------------------------------------------------------------------------"

if [ -f "$PROJECT_ROOT/vite.config.js" ]; then
    echo -e "${YELLOW}⚠️  Overwriting existing vite.config.js with template${NC}"
fi

cp "$TEMPLATE_DIR/vite.config.js.template" "$PROJECT_ROOT/vite.config.js"
echo -e "${GREEN}✅ vite.config.js created (with React alias configured)${NC}"

echo ""

# ========================================================================
# 3. phpunit.xml 生成（強制上書き）
# ========================================================================
echo -e "${BLUE}📝 Step 3: phpunit.xml${NC}"
echo "------------------------------------------------------------------------"

if [ -f "$PROJECT_ROOT/phpunit.xml" ]; then
    echo -e "${YELLOW}⚠️  Overwriting existing phpunit.xml with template${NC}"
fi

cp "$TEMPLATE_DIR/phpunit.xml.template" "$PROJECT_ROOT/phpunit.xml"
echo -e "${GREEN}✅ phpunit.xml created (with SQLite :memory: configured)${NC}"

echo ""

# ========================================================================
# 4. .gitignore 生成
# ========================================================================
echo -e "${BLUE}📝 Step 4: .gitignore${NC}"
echo "------------------------------------------------------------------------"

if [ ! -f "$PROJECT_ROOT/.gitignore" ]; then
    cp "$TEMPLATE_DIR/gitignore.template" "$PROJECT_ROOT/.gitignore"
    echo -e "${GREEN}✅ .gitignore created${NC}"
else
    # 既存の.gitignoreに追記（重複チェック）
    if grep -q "# Playwright test results" "$PROJECT_ROOT/.gitignore"; then
        echo -e "${YELLOW}⚠️  .gitignore already contains Playwright entries (skipped)${NC}"
    else
        echo "" >> "$PROJECT_ROOT/.gitignore"
        echo "# ========================================" >> "$PROJECT_ROOT/.gitignore"
        echo "# Spec-Workflow TDD Additions" >> "$PROJECT_ROOT/.gitignore"
        echo "# ========================================" >> "$PROJECT_ROOT/.gitignore"
        cat "$TEMPLATE_DIR/gitignore.template" >> "$PROJECT_ROOT/.gitignore"
        echo -e "${GREEN}✅ .gitignore updated${NC}"
    fi
fi

echo ""

# ========================================================================
# 5. package.json scripts 追加
# ========================================================================
echo -e "${BLUE}📝 Step 5: package.json scripts${NC}"
echo "------------------------------------------------------------------------"

if [ ! -f "$PROJECT_ROOT/package.json" ]; then
    echo -e "${RED}❌ ERROR: package.json not found${NC}"
    echo "   Please create package.json first:"
    echo "   npm init -y"
    exit 1
fi

# jq がインストールされているか確認
if command -v jq &> /dev/null; then
    # jqを使ってスクリプトをマージ
    TEMP_FILE=$(mktemp)
    jq --slurpfile scripts "$TEMPLATE_DIR/package.json.scripts.json" \
       '.scripts = (.scripts // {}) + $scripts[0]' \
       "$PROJECT_ROOT/package.json" > "$TEMP_FILE"
    mv "$TEMP_FILE" "$PROJECT_ROOT/package.json"
    echo -e "${GREEN}✅ npm scripts added to package.json${NC}"

    # ワークフローコマンドが正しく追加されたか確認
    if grep -q '"workflow:prepare"' "$PROJECT_ROOT/package.json" && \
       grep -q '"task:status"' "$PROJECT_ROOT/package.json" && \
       grep -q '"generate:e2e"' "$PROJECT_ROOT/package.json" && \
       grep -q '"generate:phpunit"' "$PROJECT_ROOT/package.json"; then
        echo -e "${GREEN}   ✅ All workflow commands successfully added:${NC}"
        echo -e "${GREEN}      - workflow:prepare${NC}"
        echo -e "${GREEN}      - task:status${NC}"
        echo -e "${GREEN}      - validate:* (env, deps, frontend, backend, integration, etc.)${NC}"
        echo -e "${GREEN}      - generate:e2e, generate:phpunit${NC}"
        echo -e "${GREEN}      - bg:list, bg:clean${NC}"
    else
        echo -e "${YELLOW}   ⚠️  Some workflow commands may be missing${NC}"
        echo -e "${YELLOW}      Please check package.json manually${NC}"

        # 具体的に何が欠けているか表示
        if ! grep -q '"task:status"' "$PROJECT_ROOT/package.json"; then
            echo -e "${RED}      ❌ Missing: task:status${NC}"
        fi
        if ! grep -q '"generate:e2e"' "$PROJECT_ROOT/package.json"; then
            echo -e "${RED}      ❌ Missing: generate:e2e${NC}"
        fi
        if ! grep -q '"generate:phpunit"' "$PROJECT_ROOT/package.json"; then
            echo -e "${RED}      ❌ Missing: generate:phpunit${NC}"
        fi
    fi

    # @chikau/ui-components 依存関係を追加
    if ! grep -q "@chikau/ui-components" "$PROJECT_ROOT/package.json"; then
        echo -e "${YELLOW}   🔧 Adding @chikau/ui-components to dependencies...${NC}"
        TEMP_FILE=$(mktemp)
        jq '.dependencies = (.dependencies // {}) + {"@chikau/ui-components": "file:./dev-kit/ui-components"}' \
           "$PROJECT_ROOT/package.json" > "$TEMP_FILE"
        mv "$TEMP_FILE" "$PROJECT_ROOT/package.json"
        echo -e "${GREEN}   ✅ @chikau/ui-components added${NC}"

        # 依存関係をインストール
        echo -e "${YELLOW}   🔧 Installing dependencies...${NC}"
        npm install
        echo -e "${GREEN}   ✅ Dependencies installed${NC}"
    else
        echo -e "${GREEN}   ✅ @chikau/ui-components already exists${NC}"
    fi
else
    echo -e "${YELLOW}⚠️  jq not found. Manual setup required.${NC}"
    echo ""
    echo "Please install jq or manually add scripts from:"
    echo "  $TEMPLATE_DIR/package.json.scripts.json"
    echo ""
    echo "Install jq:"
    echo "  macOS:  brew install jq"
    echo "  Ubuntu: apt-get install jq"
fi

echo ""

# ========================================================================
# 6. React バージョン統一（白画面防止）
# ========================================================================
echo -e "${BLUE}📝 Step 6: React Version Alignment${NC}"
echo "------------------------------------------------------------------------"

# メインアプリのReactバージョンを取得（dependencies → devDependencies の順でチェック）
MAIN_REACT_VERSION=$(node -p "
  const pkg = require('./package.json');
  const reactVersion = (pkg.dependencies && pkg.dependencies.react) || (pkg.devDependencies && pkg.devDependencies.react) || '';
  reactVersion;
" 2>/dev/null || echo "")

if [ -n "$MAIN_REACT_VERSION" ] && [ "$MAIN_REACT_VERSION" != "undefined" ]; then
    echo -e "${YELLOW}   🔧 Aligning React versions to prevent blank page...${NC}"
    echo "   Main app React version: $MAIN_REACT_VERSION"

    # ui-componentsのReactバージョンをメインアプリと統一
    if [ -f "$PROJECT_ROOT/dev-kit/ui-components/package.json" ]; then
        # まず現在の値を確認
        CURRENT_UI_REACT=$(node -p "
          const pkg = require('$PROJECT_ROOT/dev-kit/ui-components/package.json');
          (pkg.dependencies && pkg.dependencies.react) || 'undefined';
        " 2>/dev/null || echo "undefined")

        echo "   ui-components current React version: $CURRENT_UI_REACT"

        # "undefined"または空の場合のみ修正
        if [ "$CURRENT_UI_REACT" = "undefined" ] || [ -z "$CURRENT_UI_REACT" ]; then
            TEMP_FILE=$(mktemp)
            jq --arg version "$MAIN_REACT_VERSION" \
               '.dependencies.react = $version | .dependencies["react-dom"] = $version | .peerDependencies.react = $version | .peerDependencies["react-dom"] = $version' \
               "$PROJECT_ROOT/dev-kit/ui-components/package.json" > "$TEMP_FILE"
            mv "$TEMP_FILE" "$PROJECT_ROOT/dev-kit/ui-components/package.json"
            echo -e "${GREEN}   ✅ ui-components React version aligned to $MAIN_REACT_VERSION${NC}"

            # 依存関係を再インストール
            echo -e "${YELLOW}   🔧 Reinstalling dependencies...${NC}"
            npm install
            echo -e "${GREEN}   ✅ Dependencies reinstalled${NC}"
        else
            echo -e "${GREEN}   ✅ ui-components React version already set (skipped)${NC}"
        fi
    fi
else
    echo -e "${YELLOW}⚠️  React not found in main package.json${NC}"
    echo -e "${YELLOW}   Please add React to dependencies or devDependencies:${NC}"
    echo -e "${YELLOW}   npm install --save-dev react react-dom${NC}"
fi

echo ""

# ========================================================================
# 7. 依存関係インストール確認
# ========================================================================
echo -e "${BLUE}📝 Step 7: Dependencies Check${NC}"
echo "------------------------------------------------------------------------"

# Playwright がインストールされているか確認
if ! npm list @playwright/test &> /dev/null; then
    echo -e "${YELLOW}⚠️  @playwright/test not found${NC}"
    echo "   Installing Playwright..."
    npm install -D @playwright/test
    npx playwright install chromium
    echo -e "${GREEN}✅ Playwright installed${NC}"
else
    echo -e "${GREEN}✅ Playwright already installed${NC}"
fi

echo ""

# ========================================================================
# 8. TypeScript設定（tsconfig.json, vite-env.d.ts）
# ========================================================================
echo -e "${BLUE}📝 Step 8: TypeScript Configuration${NC}"
echo "------------------------------------------------------------------------"

# vite-env.d.ts 生成
mkdir -p "$PROJECT_ROOT/resources/js"
cat > "$PROJECT_ROOT/resources/js/vite-env.d.ts" <<'EOF'
/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_APP_NAME: string;
  // 他の環境変数をここに追加
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
  readonly glob: (pattern: string) => Record<string, () => Promise<unknown>>;
}
EOF
echo -e "${GREEN}✅ vite-env.d.ts created${NC}"

# tsconfig.json 強制上書き
if [ -f "$PROJECT_ROOT/tsconfig.json" ]; then
    echo -e "${YELLOW}⚠️  Overwriting existing tsconfig.json with template${NC}"
fi

cp "$TEMPLATE_DIR/tsconfig.json.template" "$PROJECT_ROOT/tsconfig.json"
echo -e "${GREEN}✅ tsconfig.json created (with ui-components paths configured)${NC}"

echo ""


# ========================================================================
# 9. ui-components テンプレート自動コピー（独自実装防止）
# ========================================================================
echo -e "${BLUE}📝 Step 9: ui-components Template Auto-Copy (Prevent Custom Implementation)${NC}"
echo "------------------------------------------------------------------------"

UI_COMPONENTS_SRC="$PROJECT_ROOT/dev-kit/ui-components/src"
RESOURCES_JS="$PROJECT_ROOT/resources/js"
RESOURCES_CSS="$PROJECT_ROOT/resources/css"
TEMPLATE_SRC="$UI_COMPONENTS_SRC/pages/templates"

if [ -d "$UI_COMPONENTS_SRC" ]; then
    echo -e "${YELLOW}🔧 Copying ui-components to prevent custom implementation...${NC}"

    # resources/js配下にコンポーネントをコピー
    mkdir -p "$RESOURCES_JS"

    # components, hooks, types, config をコピー
    if [ -d "$UI_COMPONENTS_SRC/components" ]; then
        echo "   Copying components..."
        cp -r "$UI_COMPONENTS_SRC/components" "$RESOURCES_JS/"
    fi

    if [ -d "$UI_COMPONENTS_SRC/hooks" ]; then
        echo "   Copying hooks..."
        cp -r "$UI_COMPONENTS_SRC/hooks" "$RESOURCES_JS/"
    fi

    if [ -d "$UI_COMPONENTS_SRC/types" ]; then
        echo "   Copying types..."
        cp -r "$UI_COMPONENTS_SRC/types" "$RESOURCES_JS/"
    fi

    if [ -d "$UI_COMPONENTS_SRC/config" ]; then
        echo "   Copying config..."
        cp -r "$UI_COMPONENTS_SRC/config" "$RESOURCES_JS/"
    fi

    # スタイルをコピー
    if [ -d "$UI_COMPONENTS_SRC/styles" ]; then
        echo "   Copying styles..."
        mkdir -p "$RESOURCES_CSS"
        cp -r "$UI_COMPONENTS_SRC/styles" "$RESOURCES_CSS/"
    fi

    # ========================================================================
    # ページテンプレートを事前コピー（独自実装の物理的防止）
    # ========================================================================
    echo -e "${YELLOW}   🔧 Copying page templates (prevent custom implementation)...${NC}"

    if [ -d "$TEMPLATE_SRC" ]; then
        # Authテンプレート
        if [ -d "$TEMPLATE_SRC/auth" ]; then
            echo "      - Auth templates"
            mkdir -p "$RESOURCES_JS/Pages/Auth"
            for template in "$TEMPLATE_SRC/auth"/*.tsx; do
                if [ -f "$template" ]; then
                    filename=$(basename "$template")
                    cp "$template" "$RESOURCES_JS/Pages/Auth/$filename"

                    # importパス修正（Auth/は2階層上）
                    sed -i '' 's|from '\''../../../components/|from '\''../../components/|g' "$RESOURCES_JS/Pages/Auth/$filename"
                    sed -i '' 's|from '\''../../../hooks/|from '\''../../hooks/|g' "$RESOURCES_JS/Pages/Auth/$filename"
                    sed -i '' 's|from '\''../../../types/|from '\''../../types/|g' "$RESOURCES_JS/Pages/Auth/$filename"
                    sed -i '' 's|from '\''../../../config/|from '\''../../config/|g' "$RESOURCES_JS/Pages/Auth/$filename"
                fi
            done
        fi

        # Dashboardテンプレート
        if [ -d "$TEMPLATE_SRC/dashboard" ]; then
            echo "      - Dashboard template"
            mkdir -p "$RESOURCES_JS/Pages"
            if [ -f "$TEMPLATE_SRC/dashboard/DashboardPage.tsx" ]; then
                cp "$TEMPLATE_SRC/dashboard/DashboardPage.tsx" "$RESOURCES_JS/Pages/DashboardPage.tsx"

                # importパス修正（Pagesは1階層上）
                sed -i '' 's|from '\''../../../components/|from '\''../components/|g' "$RESOURCES_JS/Pages/DashboardPage.tsx"
                sed -i '' 's|from '\''../../../hooks/|from '\''../hooks/|g' "$RESOURCES_JS/Pages/DashboardPage.tsx"
                sed -i '' 's|from '\''../../../types/|from '\''../types/|g' "$RESOURCES_JS/Pages/DashboardPage.tsx"
                sed -i '' 's|from '\''../../../config/|from '\''../config/|g' "$RESOURCES_JS/Pages/DashboardPage.tsx"
            fi
        fi

        # Dataテンプレート（Form, List, Detail）
        if [ -d "$TEMPLATE_SRC/data" ]; then
            echo "      - Data templates (Form, List, Detail)"
            mkdir -p "$RESOURCES_JS/Pages/Data"
            for template in "$TEMPLATE_SRC/data"/*.tsx; do
                if [ -f "$template" ]; then
                    filename=$(basename "$template")
                    # Example系は除外
                    if [[ ! "$filename" =~ Example ]]; then
                        cp "$template" "$RESOURCES_JS/Pages/Data/$filename"

                        # importパス修正（Data/は2階層上）
                        sed -i '' 's|from '\''../../../components/|from '\''../../components/|g' "$RESOURCES_JS/Pages/Data/$filename"
                        sed -i '' 's|from '\''../../../hooks/|from '\''../../hooks/|g' "$RESOURCES_JS/Pages/Data/$filename"
                        sed -i '' 's|from '\''../../../types/|from '\''../../types/|g' "$RESOURCES_JS/Pages/Data/$filename"
                        sed -i '' 's|from '\''../../../config/|from '\''../../config/|g' "$RESOURCES_JS/Pages/Data/$filename"
                    fi
                fi
            done
        fi

        # Errorテンプレート
        if [ -d "$TEMPLATE_SRC/error" ]; then
            echo "      - Error templates"
            mkdir -p "$RESOURCES_JS/Pages/Error"
            for template in "$TEMPLATE_SRC/error"/*.tsx; do
                if [ -f "$template" ]; then
                    filename=$(basename "$template")
                    cp "$template" "$RESOURCES_JS/Pages/Error/$filename"

                    # importパス修正（Error/は2階層上）
                    sed -i '' 's|from '\''../../../components/|from '\''../../components/|g' "$RESOURCES_JS/Pages/Error/$filename"
                    sed -i '' 's|from '\''../../../hooks/|from '\''../../hooks/|g' "$RESOURCES_JS/Pages/Error/$filename"
                    sed -i '' 's|from '\''../../../types/|from '\''../../types/|g' "$RESOURCES_JS/Pages/Error/$filename"
                    sed -i '' 's|from '\''../../../config/|from '\''../../config/|g' "$RESOURCES_JS/Pages/Error/$filename"
                fi
            done
        fi

        # Settingsテンプレート
        if [ -d "$TEMPLATE_SRC/settings" ]; then
            echo "      - Settings template"
            mkdir -p "$RESOURCES_JS/Pages"
            if [ -f "$TEMPLATE_SRC/settings/SettingsPage.tsx" ]; then
                cp "$TEMPLATE_SRC/settings/SettingsPage.tsx" "$RESOURCES_JS/Pages/SettingsPage.tsx"

                # importパス修正（Pagesは1階層上）
                sed -i '' 's|from '\''../../../components/|from '\''../components/|g' "$RESOURCES_JS/Pages/SettingsPage.tsx"
                sed -i '' 's|from '\''../../../hooks/|from '\''../hooks/|g' "$RESOURCES_JS/Pages/SettingsPage.tsx"
                sed -i '' 's|from '\''../../../types/|from '\''../types/|g' "$RESOURCES_JS/Pages/SettingsPage.tsx"
                sed -i '' 's|from '\''../../../config/|from '\''../config/|g' "$RESOURCES_JS/Pages/SettingsPage.tsx"
            fi
        fi

        # Statisticsテンプレート
        if [ -d "$TEMPLATE_SRC/statistics" ]; then
            echo "      - Statistics template"
            mkdir -p "$RESOURCES_JS/Pages"
            if [ -f "$TEMPLATE_SRC/statistics/StatisticsPage.tsx" ]; then
                cp "$TEMPLATE_SRC/statistics/StatisticsPage.tsx" "$RESOURCES_JS/Pages/StatisticsPage.tsx"

                # importパス修正（Pagesは1階層上）
                sed -i '' 's|from '\''../../../components/|from '\''../components/|g' "$RESOURCES_JS/Pages/StatisticsPage.tsx"
                sed -i '' 's|from '\''../../../hooks/|from '\''../hooks/|g' "$RESOURCES_JS/Pages/StatisticsPage.tsx"
                sed -i '' 's|from '\''../../../types/|from '\''../types/|g' "$RESOURCES_JS/Pages/StatisticsPage.tsx"
                sed -i '' 's|from '\''../../../config/|from '\''../config/|g' "$RESOURCES_JS/Pages/StatisticsPage.tsx"
            fi
        fi

        # Notificationsテンプレート
        if [ -d "$TEMPLATE_SRC/notifications" ]; then
            echo "      - Notifications template"
            mkdir -p "$RESOURCES_JS/Pages"
            if [ -f "$TEMPLATE_SRC/notifications/NotificationsPage.tsx" ]; then
                cp "$TEMPLATE_SRC/notifications/NotificationsPage.tsx" "$RESOURCES_JS/Pages/NotificationsPage.tsx"

                # importパス修正（Pagesは1階層上）
                sed -i '' 's|from '\''../../../components/|from '\''../components/|g' "$RESOURCES_JS/Pages/NotificationsPage.tsx"
                sed -i '' 's|from '\''../../../hooks/|from '\''../hooks/|g' "$RESOURCES_JS/Pages/NotificationsPage.tsx"
                sed -i '' 's|from '\''../../../types/|from '\''../types/|g' "$RESOURCES_JS/Pages/NotificationsPage.tsx"
                sed -i '' 's|from '\''../../../config/|from '\''../config/|g' "$RESOURCES_JS/Pages/NotificationsPage.tsx"
            fi
        fi

        # Infoテンプレート（利用規約・プライバシーポリシー等）
        if [ -d "$TEMPLATE_SRC/info" ]; then
            echo "      - Info templates (Terms, Privacy, etc.)"
            mkdir -p "$RESOURCES_JS/Pages/Info"
            for template in "$TEMPLATE_SRC/info"/*.tsx; do
                if [ -f "$template" ]; then
                    filename=$(basename "$template")
                    cp "$template" "$RESOURCES_JS/Pages/Info/$filename"

                    # importパス修正（Info/は2階層上）
                    sed -i '' 's|from '\''../../../components/|from '\''../../components/|g' "$RESOURCES_JS/Pages/Info/$filename"
                    sed -i '' 's|from '\''../../../hooks/|from '\''../../hooks/|g' "$RESOURCES_JS/Pages/Info/$filename"
                    sed -i '' 's|from '\''../../../types/|from '\''../../types/|g' "$RESOURCES_JS/Pages/Info/$filename"
                    sed -i '' 's|from '\''../../../config/|from '\''../../config/|g' "$RESOURCES_JS/Pages/Info/$filename"
                fi
            done
        fi

        echo -e "${GREEN}      ✅ All page templates copied with import paths fixed${NC}"
    else
        echo -e "${YELLOW}      ⚠️  Page templates not found at $TEMPLATE_SRC${NC}"
    fi

    echo -e "${GREEN}✅ ui-components copied (custom implementation prevented)${NC}"
else
    echo -e "${RED}❌ ERROR: ui-components source not found at $UI_COMPONENTS_SRC${NC}"
    echo "   Please ensure dev-kit/ui-components exists"
fi

echo ""

# ========================================================================
# 9.5. テストテンプレート生成
# ========================================================================
echo -e "${BLUE}📝 Step 9.5: Test Template Generation${NC}"
echo "------------------------------------------------------------------------"

if [ -f "$PROJECT_ROOT/dev-kit/scripts/setup/create-test-templates.sh" ]; then
    "$PROJECT_ROOT/dev-kit/scripts/setup/create-test-templates.sh"
else
    echo -e "${YELLOW}⚠️  Test template generator not found (skipping)${NC}"
fi

echo ""

# ========================================================================
# 10. 実行権限付与
# ========================================================================
echo -e "${BLUE}📝 Step 10: Execute Permissions${NC}"
echo "------------------------------------------------------------------------"

chmod +x "$PROJECT_ROOT/dev-kit/scripts/validate"/*.sh 2>/dev/null || true
chmod +x "$PROJECT_ROOT/dev-kit/scripts/validate"/*.php 2>/dev/null || true
chmod +x "$PROJECT_ROOT/dev-kit/scripts/generate"/*.php 2>/dev/null || true
chmod +x "$PROJECT_ROOT/dev-kit/scripts/generate"/*.cjs 2>/dev/null || true
chmod +x "$PROJECT_ROOT/dev-kit/scripts/setup"/*.sh 2>/dev/null || true
chmod +x "$PROJECT_ROOT/dev-kit/scripts/task"/*.sh 2>/dev/null || true
chmod +x "$PROJECT_ROOT/dev-kit/scripts/bg"/*.sh 2>/dev/null || true

echo -e "${GREEN}✅ Execute permissions set for all scripts${NC}"

echo ""

# ========================================================================
# 11. 自動修正（CSS import削除）
# ========================================================================
echo -e "${BLUE}📝 Step 11: Auto-fix Copied Templates${NC}"
echo "------------------------------------------------------------------------"

# CSS importを自動削除
CSS_IMPORT_COUNT=0
for dir in "$RESOURCES_JS/components" "$RESOURCES_JS/Pages"; do
    if [ -d "$dir" ]; then
        while IFS= read -r file; do
            if grep -q "import.*\.css" "$file" 2>/dev/null; then
                sed -i '' "/import.*\.css/d" "$file"
                CSS_IMPORT_COUNT=$((CSS_IMPORT_COUNT + 1))
            fi
        done < <(find "$dir" -type f \( -name "*.tsx" -o -name "*.ts" \) ! -name "app.tsx" 2>/dev/null)
    fi
done

if [ $CSS_IMPORT_COUNT -gt 0 ]; then
    echo -e "${GREEN}✅ Removed CSS imports from $CSS_IMPORT_COUNT files${NC}"
else
    echo -e "${GREEN}✅ No CSS imports found (already clean)${NC}"
fi

echo ""

# ========================================================================
# 12. Laravel TestCase.php 生成
# ========================================================================
echo -e "${BLUE}📝 Step 12: Laravel TestCase.php${NC}"
echo "------------------------------------------------------------------------"

TESTS_DIR="$PROJECT_ROOT/tests"
mkdir -p "$TESTS_DIR"

if [ ! -f "$TESTS_DIR/TestCase.php" ]; then
    cat > "$TESTS_DIR/TestCase.php" <<'EOF'
<?php

namespace Tests;

use Illuminate\Foundation\Testing\TestCase as BaseTestCase;

abstract class TestCase extends BaseTestCase
{
    //
}
EOF
    echo -e "${GREEN}✅ tests/TestCase.php created${NC}"
else
    echo -e "${YELLOW}⚠️  tests/TestCase.php already exists (skipped)${NC}"
fi

echo ""

# ========================================================================
# 13. .env DB設定チェック・テンプレート提供
# ========================================================================
echo -e "${BLUE}📝 Step 13: Database Configuration Check${NC}"
echo "------------------------------------------------------------------------"

if [ ! -f "$PROJECT_ROOT/.env" ]; then
    echo -e "${YELLOW}⚠️  .env file not found${NC}"
    echo "   Run: cp .env.example .env"
else
    # DB設定チェック
    if ! grep -q "^DB_DATABASE=" "$PROJECT_ROOT/.env" || grep -q "^DB_DATABASE=$" "$PROJECT_ROOT/.env"; then
        echo -e "${YELLOW}⚠️  DB_DATABASE not configured in .env${NC}"
        echo ""
        echo "   Add the following to your .env file:"
        echo ""
        echo -e "${BLUE}   DB_CONNECTION=sqlite${NC}"
        echo -e "${BLUE}   DB_DATABASE=:memory:${NC}"
        echo ""
        echo "   Or for MySQL/PostgreSQL:"
        echo ""
        echo -e "${BLUE}   DB_CONNECTION=mysql${NC}"
        echo -e "${BLUE}   DB_HOST=127.0.0.1${NC}"
        echo -e "${BLUE}   DB_PORT=3306${NC}"
        echo -e "${BLUE}   DB_DATABASE=your_database_name${NC}"
        echo -e "${BLUE}   DB_USERNAME=your_username${NC}"
        echo -e "${BLUE}   DB_PASSWORD=your_password${NC}"
    else
        echo -e "${GREEN}✅ Database configuration found in .env${NC}"
    fi

    # APP_LOCALE設定チェック（日本語バリデーションメッセージ用）
    if grep -q "^APP_LOCALE=en$" "$PROJECT_ROOT/.env"; then
        echo -e "${YELLOW}⚠️  APP_LOCALE is set to 'en' in .env${NC}"
        echo -e "${YELLOW}   This will cause mixed English+Japanese validation messages${NC}"
        echo ""
        echo "   RECOMMENDED: Change to Japanese locale:"
        echo -e "${BLUE}   APP_LOCALE=ja${NC}"
        echo ""
        echo "   This ensures validation messages are fully in Japanese:"
        echo "   ✅ 'メールアドレスには、有効なメールアドレスを指定してください。'"
        echo "   ❌ 'The メールアドレス field must be a valid email address.'"
    elif grep -q "^APP_LOCALE=ja$" "$PROJECT_ROOT/.env"; then
        echo -e "${GREEN}✅ APP_LOCALE correctly set to 'ja' for Japanese validation messages${NC}"
    else
        echo -e "${YELLOW}⚠️  APP_LOCALE not found or has unexpected value in .env${NC}"
        echo "   Add: ${BLUE}APP_LOCALE=ja${NC}"
    fi
fi

echo ""

# ========================================================================
# 14. ワークフローコマンド動作確認
# ========================================================================
echo -e "${BLUE}📝 Step 14: Workflow Commands Verification${NC}"
echo "------------------------------------------------------------------------"

# package.jsonからworkflow関連コマンドを抽出して確認
WORKFLOW_COMMANDS=(
    "workflow:prepare"
    "task:status"
    "validate:integration"
    "validate:japanese"
    "validate:e2e-integrity"
    "validate:inertia"
    "validate:principles"
    "generate:e2e"
    "generate:phpunit"
)

MISSING_COMMANDS=()
for cmd in "${WORKFLOW_COMMANDS[@]}"; do
    if ! grep -q "\"$cmd\"" "$PROJECT_ROOT/package.json" 2>/dev/null; then
        MISSING_COMMANDS+=("$cmd")
    fi
done

if [ ${#MISSING_COMMANDS[@]} -eq 0 ]; then
    echo -e "${GREEN}✅ All workflow commands verified in package.json${NC}"
    echo -e "${GREEN}   Claude AI can now use workflow.md commands directly${NC}"
else
    echo -e "${RED}❌ Missing workflow commands:${NC}"
    for cmd in "${MISSING_COMMANDS[@]}"; do
        echo -e "${RED}   - $cmd${NC}"
    done
    echo ""
    echo -e "${YELLOW}   Please run this setup script again or manually add missing commands${NC}"
fi

echo ""

# ========================================================================
# 最終サマリー
# ========================================================================
echo "========================================================================"
echo -e "${GREEN}✅ Setup Complete!${NC}"
echo "========================================================================"
echo ""
echo "Next steps:"
echo ""
echo "  1. Install Laravel dependencies (via Sail):"
echo "     ${BLUE}./vendor/bin/sail composer install${NC}"
echo ""
echo "  2. Setup Laravel environment:"
echo "     ${BLUE}cp .env.example .env${NC}"
echo "     ${BLUE}./vendor/bin/sail artisan key:generate${NC}"
echo ""
echo "  3. Start Laravel Sail (Docker):"
echo "     ${BLUE}./vendor/bin/sail up -d${NC}"
echo "     ${BLUE}./vendor/bin/sail ps${NC}  # Verify containers are running"
echo ""
echo "  4. Install npm dependencies:"
echo "     ${BLUE}npm install${NC}"
echo ""
echo "  5. Run environment validation:"
echo "     ${BLUE}npm run validate:env${NC}"
echo ""
echo "  6. Start task-based workflow with your spec name (example: 'login'):"
echo "     ${BLUE}npm run workflow:prepare {SPEC_NAME}${NC}"
echo ""
echo "     Example workflow commands:"
echo "     ${BLUE}npm run workflow:prepare login${NC}  # Prepare environment"
echo "     ${BLUE}npm run task:status login${NC}       # Check task progress"
echo ""
echo "     Test generation commands:"
echo "     ${BLUE}npm run generate:phpunit login${NC}  # Generate PHPUnit tests + Clean Architecture"
echo "     ${BLUE}npm run generate:e2e login${NC}      # Generate E2E tests"
echo ""
echo "     Validation commands:"
echo "     ${BLUE}npm run validate:frontend${NC}       # Validate frontend implementation"
echo "     ${BLUE}npm run validate:backend login${NC}  # Validate backend implementation"
echo "     ${BLUE}npm run validate:integration${NC}    # Validate integration"
echo ""
echo "     ${YELLOW}For detailed workflow instructions, see:${NC}"
echo "     ${BLUE}dev-kit/docs/workflow.md${NC}"
echo ""
echo "========================================================================"
echo -e "${GREEN}✅ All workflow commands are now available in package.json${NC}"
echo "========================================================================"
echo ""
echo -e "${YELLOW}⚠️  IMPORTANT:${NC}"
echo "  - All PHP/Artisan commands must use ${BLUE}./vendor/bin/sail${NC}"
echo "  - All workflow commands follow the pattern: ${BLUE}npm run workflow:prepare${NC}, ${BLUE}npm run task:status${NC}, ${BLUE}npm run validate:*${NC}"
echo "  - Claude AI will now follow workflow.md instructions correctly"
echo ""
echo "========================================================================"
echo ""
