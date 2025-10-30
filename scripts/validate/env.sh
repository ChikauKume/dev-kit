#!/bin/bash
# 環境ファイル・基本設定チェックスクリプト
#
# チェック内容:
# 1. 必須環境ファイルの存在確認 (.env, package.json, composer.json)
# 2. Docker/Sail の起動状態確認
# 3. 基本的なディレクトリ構造の確認

set -e

PROJECT_ROOT="$(cd "$(dirname "${BASH_SOURCE[0]}")/../../.." && pwd)"
cd "$PROJECT_ROOT"

# 色定義
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

echo ""
echo "========================================================================"
echo -e "${BLUE}🔍 Environment Check${NC}"
echo "========================================================================"
echo ""

EXIT_CODE=0

# ========================================================================
# 1. 必須環境ファイルの存在確認
# ========================================================================
echo -e "${BLUE}📝 Step 1: Required Environment Files${NC}"
echo "------------------------------------------------------------------------"

REQUIRED_FILES=(
    ".env"
    "package.json"
    "composer.json"
    "vite.config.js"
    "phpunit.xml"
)

for file in "${REQUIRED_FILES[@]}"; do
    if [ -f "$PROJECT_ROOT/$file" ]; then
        echo -e "${GREEN}✅ $file exists${NC}"
    else
        echo -e "${RED}❌ CRITICAL: $file not found${NC}"
        EXIT_CODE=1
    fi
done

# ========================================================================
# 2. Docker/Sail 起動状態確認
# ========================================================================
echo ""
echo -e "${BLUE}📝 Step 2: Docker/Sail Status${NC}"
echo "------------------------------------------------------------------------"

if command -v docker &> /dev/null; then
    echo -e "${GREEN}✅ Docker command available${NC}"

    # Sailコンテナが起動しているか確認
    if docker ps --format '{{.Names}}' | grep -q "laravel.test"; then
        echo -e "${GREEN}✅ Laravel Sail container is running${NC}"
    else
        echo -e "${YELLOW}⚠️  WARNING: Laravel Sail container not running${NC}"
        echo "   To start: ./vendor/bin/sail up -d"
    fi
else
    echo -e "${RED}❌ Docker not found${NC}"
    echo "   Docker is required for this project"
    EXIT_CODE=1
fi

# ========================================================================
# 3. 基本ディレクトリ構造確認
# ========================================================================
echo ""
echo -e "${BLUE}📝 Step 3: Directory Structure${NC}"
echo "------------------------------------------------------------------------"

REQUIRED_DIRS=(
    "app"
    "resources"
    "resources/js"
    "resources/js/Pages"
    "tests"
    "tests/Unit"
    "tests/Feature"
    "tests/e2e"
    "dev-kit"
    "dev-kit/docs"
    "dev-kit/scripts"
)

for dir in "${REQUIRED_DIRS[@]}"; do
    if [ -d "$PROJECT_ROOT/$dir" ]; then
        echo -e "${GREEN}✅ $dir/ exists${NC}"
    else
        echo -e "${RED}❌ CRITICAL: $dir/ not found${NC}"
        EXIT_CODE=1
    fi
done

# ========================================================================
# 4. Node modules / Vendor チェック
# ========================================================================
echo ""
echo -e "${BLUE}📝 Step 4: Dependencies Installation${NC}"
echo "------------------------------------------------------------------------"

if [ -d "$PROJECT_ROOT/node_modules" ]; then
    echo -e "${GREEN}✅ node_modules/ exists${NC}"
else
    echo -e "${RED}❌ WARNING: node_modules/ not found${NC}"
    echo "   Run: npm install"
    EXIT_CODE=1
fi

if [ -d "$PROJECT_ROOT/vendor" ]; then
    echo -e "${GREEN}✅ vendor/ exists${NC}"
else
    echo -e "${RED}❌ WARNING: vendor/ not found${NC}"
    echo "   Run: ./vendor/bin/sail composer install"
    EXIT_CODE=1
fi

# ========================================================================
# 最終サマリー
# ========================================================================
echo ""
echo "========================================================================"
echo -e "${BLUE}📊 Environment Check Summary${NC}"
echo "========================================================================"
echo ""

if [ $EXIT_CODE -eq 0 ]; then
    echo -e "${GREEN}✅✅✅ ENVIRONMENT CHECK PASSED ✅✅✅${NC}"
    echo ""
    echo "Your environment is properly configured!"
else
    echo -e "${RED}❌❌❌ ENVIRONMENT CHECK FAILED ❌❌❌${NC}"
    echo ""
    echo "Please fix the issues above before proceeding."
    echo ""
fi

echo "========================================================================"

exit $EXIT_CODE
