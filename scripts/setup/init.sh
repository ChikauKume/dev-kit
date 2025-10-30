#!/bin/bash
# Spec-Workflow TDD セットアップスクリプト
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
echo -e "${BLUE}🚀 Spec-Workflow TDD Setup${NC}"
echo "========================================================================"
echo ""
echo "Project Root: $PROJECT_ROOT"
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
# 2. vite.config.js 生成
# ========================================================================
echo -e "${BLUE}📝 Step 2: vite.config.js${NC}"
echo "------------------------------------------------------------------------"

if [ ! -f "$PROJECT_ROOT/vite.config.js" ]; then
    cp "$TEMPLATE_DIR/vite.config.js.template" "$PROJECT_ROOT/vite.config.js"
    echo -e "${GREEN}✅ vite.config.js created${NC}"
else
    echo -e "${YELLOW}⚠️  vite.config.js already exists (skipped)${NC}"
fi

echo ""

# ========================================================================
# 3. phpunit.xml 生成
# ========================================================================
echo -e "${BLUE}📝 Step 3: phpunit.xml${NC}"
echo "------------------------------------------------------------------------"

if [ ! -f "$PROJECT_ROOT/phpunit.xml" ]; then
    cp "$TEMPLATE_DIR/phpunit.xml.template" "$PROJECT_ROOT/phpunit.xml"
    echo -e "${GREEN}✅ phpunit.xml created${NC}"
else
    echo -e "${YELLOW}⚠️  phpunit.xml already exists (skipped)${NC}"
fi

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
    jq --argfile scripts "$TEMPLATE_DIR/package.json.scripts.json" \
       '.scripts = (.scripts // {}) + $scripts' \
       "$PROJECT_ROOT/package.json" > "$TEMP_FILE"
    mv "$TEMP_FILE" "$PROJECT_ROOT/package.json"
    echo -e "${GREEN}✅ npm scripts added to package.json${NC}"
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
# 6. 依存関係インストール確認
# ========================================================================
echo -e "${BLUE}📝 Step 6: Dependencies Check${NC}"
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
# 7. 実行権限付与
# ========================================================================
echo -e "${BLUE}📝 Step 7: Execute Permissions${NC}"
echo "------------------------------------------------------------------------"

chmod +x "$PROJECT_ROOT/dev-kit/scripts/validate"/*.sh 2>/dev/null || true
chmod +x "$PROJECT_ROOT/dev-kit/scripts/validate"/*.php 2>/dev/null || true
chmod +x "$PROJECT_ROOT/dev-kit/scripts/common"/*.sh 2>/dev/null || true
chmod +x "$PROJECT_ROOT/dev-kit/scripts/generate"/*.php 2>/dev/null || true
chmod +x "$PROJECT_ROOT/dev-kit/scripts/generate"/*.cjs 2>/dev/null || true
chmod +x "$PROJECT_ROOT/dev-kit/scripts/setup"/*.sh 2>/dev/null || true

echo -e "${GREEN}✅ Execute permissions set${NC}"

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
echo "  1. Install Laravel dependencies:"
echo "     ${BLUE}composer install${NC}"
echo ""
echo "  2. Setup Laravel environment:"
echo "     ${BLUE}cp .env.example .env${NC}"
echo "     ${BLUE}php artisan key:generate${NC}"
echo ""
echo "  3. Install npm dependencies:"
echo "     ${BLUE}npm install${NC}"
echo ""
echo "  4. Run environment validation:"
echo "     ${BLUE}npm run validate:env${NC}"
echo ""
echo "  5. Start TDD workflow:"
echo "     ${BLUE}Open dev-kit/docs/agents/main.md in Claude Code${NC}"
echo ""
echo "========================================================================"
echo ""
