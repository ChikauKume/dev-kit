#!/bin/bash
# 白画面問題の自動修復スクリプト
#
# 使い方:
#   ./fix-blank-page.sh          # 自動検出して修復
#   ./fix-blank-page.sh --force  # 強制的に全ての修復を実行

set -e

PROJECT_ROOT="$(cd "$(dirname "${BASH_SOURCE[0]}")/../../.." && pwd)"
cd "$PROJECT_ROOT"

# 色定義
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

FORCE_MODE=false
if [ "$1" = "--force" ]; then
    FORCE_MODE=true
fi

echo ""
echo "========================================================================"
echo -e "${BLUE}🔧 Blank Page Auto-Fix${NC}"
echo "========================================================================"
echo ""

if [ "$FORCE_MODE" = true ]; then
    echo -e "${YELLOW}⚠️  FORCE MODE: All fixes will be applied${NC}"
    echo ""
fi

# ========================================================================
# Fix 1: public/hot ファイル削除
# ========================================================================
echo -e "${BLUE}📝 Fix 1: Remove public/hot file${NC}"
echo "------------------------------------------------------------------------"

if [ -f "$PROJECT_ROOT/public/hot" ]; then
    echo -e "${YELLOW}⚠️  public/hot exists (causes blank page if Vite dev server not running)${NC}"
    echo "   Removing..."
    rm -f "$PROJECT_ROOT/public/hot"
    echo -e "${GREEN}✅ public/hot removed${NC}"
else
    echo -e "${GREEN}✅ public/hot does not exist (OK)${NC}"
fi

echo ""

# ========================================================================
# Fix 2: Vite build 実行
# ========================================================================
echo -e "${BLUE}📝 Fix 2: Build Vite assets${NC}"
echo "------------------------------------------------------------------------"

if [ ! -d "$PROJECT_ROOT/public/build" ] || [ "$FORCE_MODE" = true ]; then
    if [ "$FORCE_MODE" = true ]; then
        echo "Force mode: Rebuilding Vite assets..."
    else
        echo "public/build not found. Building Vite assets..."
    fi

    echo "Running: npm run build"
    npm run build

    if [ -d "$PROJECT_ROOT/public/build" ]; then
        echo -e "${GREEN}✅ Vite build completed${NC}"
    else
        echo -e "${RED}❌ ERROR: Build failed${NC}"
        exit 1
    fi
else
    echo -e "${GREEN}✅ public/build exists (OK)${NC}"
fi

echo ""

# ========================================================================
# Fix 3: Laravel キャッシュクリア
# ========================================================================
echo -e "${BLUE}📝 Fix 3: Clear Laravel caches${NC}"
echo "------------------------------------------------------------------------"

if [ "$FORCE_MODE" = true ] || [ -d "$PROJECT_ROOT/bootstrap/cache" ]; then
    echo "Clearing Laravel caches..."

    # View cache
    if [ -f "$PROJECT_ROOT/artisan" ]; then
        ./vendor/bin/sail artisan view:clear 2>/dev/null || php artisan view:clear 2>/dev/null || true
        echo "   - View cache cleared"

        ./vendor/bin/sail artisan config:clear 2>/dev/null || php artisan config:clear 2>/dev/null || true
        echo "   - Config cache cleared"

        ./vendor/bin/sail artisan route:clear 2>/dev/null || php artisan route:clear 2>/dev/null || true
        echo "   - Route cache cleared"

        echo -e "${GREEN}✅ Laravel caches cleared${NC}"
    else
        echo -e "${YELLOW}⚠️  artisan not found, skipping Laravel cache clear${NC}"
    fi
else
    echo -e "${GREEN}✅ Skipping cache clear (not needed)${NC}"
fi

echo ""

# ========================================================================
# Fix 4: Node modules 再インストール（React version mismatch対策）
# ========================================================================
echo -e "${BLUE}📝 Fix 4: Check React version consistency${NC}"
echo "------------------------------------------------------------------------"

if [ -f "$PROJECT_ROOT/package.json" ] && [ -f "$PROJECT_ROOT/dev-kit/ui-components/package.json" ]; then
    MAIN_REACT=$(grep '"react"' "$PROJECT_ROOT/package.json" | head -1 | sed 's/.*"\^*\([0-9]*\)\..*/\1/')
    UI_REACT=$(grep '"react"' "$PROJECT_ROOT/dev-kit/ui-components/package.json" | head -1 | sed 's/.*"\^*\([0-9]*\)\..*/\1/')

    echo "Main app React major version: $MAIN_REACT"
    echo "ui-components React major version: $UI_REACT"

    if [ "$MAIN_REACT" != "$UI_REACT" ]; then
        echo -e "${RED}❌ ERROR: React version mismatch detected${NC}"
        echo "   This WILL cause blank pages due to React Hooks error"
        echo ""
        echo "   Manual fix required:"
        echo "   1. Check vite.config.js for React aliases"
        echo "   2. Or update package.json to match versions"
        exit 1
    else
        echo -e "${GREEN}✅ React versions are consistent${NC}"
    fi
else
    echo -e "${YELLOW}⚠️  Cannot verify React versions${NC}"
fi

echo ""

# ========================================================================
# Fix 5: Docker/Sail コンテナ再起動（オプション）
# ========================================================================
if [ "$FORCE_MODE" = true ]; then
    echo -e "${BLUE}📝 Fix 5: Restart Docker containers${NC}"
    echo "------------------------------------------------------------------------"

    if command -v docker &> /dev/null; then
        echo "Restarting Sail containers..."
        ./vendor/bin/sail restart 2>/dev/null || true
        echo -e "${GREEN}✅ Docker containers restarted${NC}"
    else
        echo -e "${YELLOW}⚠️  Docker not available${NC}"
    fi

    echo ""
fi

# ========================================================================
# 最終サマリー
# ========================================================================
echo "========================================================================"
echo -e "${BLUE}📊 Auto-Fix Summary${NC}"
echo "========================================================================"
echo ""
echo -e "${GREEN}✅✅✅ AUTO-FIX COMPLETED ✅✅✅${NC}"
echo ""
echo "Applied fixes:"
echo "  ✅ Removed public/hot (if existed)"
echo "  ✅ Built Vite assets (if needed)"
echo "  ✅ Cleared Laravel caches"
echo "  ✅ Verified React version consistency"
if [ "$FORCE_MODE" = true ]; then
    echo "  ✅ Restarted Docker containers"
fi
echo ""
echo "Next steps:"
echo "  1. Access your application in browser"
echo "  2. Check browser console for any errors"
echo "  3. If still blank, check: storage/logs/validations/blank-page-check_latest.log"
echo ""
echo "========================================================================"
