#!/bin/bash
# 白画面問題のシナリオ別診断・修復スクリプト
#
# Port問題、Vite設定、React version等を自動判定して適切に修復

set -e

PROJECT_ROOT="$(cd "$(dirname "${BASH_SOURCE[0]}")/../../.." && pwd)"
cd "$PROJECT_ROOT"

# 色定義
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
CYAN='\033[0;36m'
NC='\033[0m' # No Color

# ログディレクトリ
LOG_DIR="$PROJECT_ROOT/storage/logs/validations"
mkdir -p "$LOG_DIR"

TIMESTAMP=$(date +"%Y%m%d_%H%M%S")
LOG_FILE="$LOG_DIR/diagnose-blank-page_${TIMESTAMP}.log"

# ログと画面両方に出力
exec > >(tee -a "$LOG_FILE") 2>&1

echo "========================================================================"
echo -e "${CYAN}🔍 Blank Page Diagnosis & Auto-Fix (Scenario-Based)${NC}"
echo "========================================================================"
echo "Timestamp: $(date '+%Y-%m-%d %H:%M:%S')"
echo "Log file: $LOG_FILE"
echo ""

ISSUES_FOUND=()
FIXES_APPLIED=()

# ========================================================================
# シナリオ1: Port/URL問題（最頻出）
# ========================================================================
echo -e "${BLUE}📝 Scenario 1: Port/URL Configuration Check${NC}"
echo "========================================================================"
echo ""

# .envのAPP_URL確認
if [ -f "$PROJECT_ROOT/.env" ]; then
    APP_URL=$(grep "^APP_URL=" "$PROJECT_ROOT/.env" | cut -d= -f2 | tr -d '"')
    echo "APP_URL in .env: $APP_URL"

    # localhost vs 127.0.0.1 の確認
    if echo "$APP_URL" | grep -q "localhost"; then
        echo -e "${YELLOW}⚠️  ISSUE: APP_URL uses 'localhost'${NC}"
        echo "   Playwright config uses '127.0.0.1' (comment: to avoid CORS issues)"
        echo "   This mismatch can cause asset loading failures"
        ISSUES_FOUND+=("Port/URL mismatch: APP_URL=localhost vs Playwright=127.0.0.1")

        # 自動修復提案
        echo ""
        read -p "   Fix: Change APP_URL to http://127.0.0.1? (y/n): " -n 1 -r
        echo ""
        if [[ $REPLY =~ ^[Yy]$ ]]; then
            sed -i.bak 's|APP_URL=.*localhost.*|APP_URL=http://127.0.0.1|' "$PROJECT_ROOT/.env"
            echo -e "${GREEN}   ✅ Fixed: APP_URL changed to http://127.0.0.1${NC}"
            FIXES_APPLIED+=("Changed APP_URL to 127.0.0.1")
        fi
    elif echo "$APP_URL" | grep -q "127.0.0.1"; then
        echo -e "${GREEN}✅ APP_URL uses 127.0.0.1 (consistent with Playwright config)${NC}"
    fi

    # Port番号確認
    if echo "$APP_URL" | grep -qE ":[0-9]+"; then
        PORT=$(echo "$APP_URL" | sed 's|.*:\([0-9]*\).*|\1|')
        echo "Detected port: $PORT"

        # Sailコンテナのポート確認
        if command -v docker &> /dev/null; then
            SAIL_PORT=$(docker port laravel.test-1 80 2>/dev/null | cut -d: -f2 || echo "80")
            echo "Sail container port mapping: 80 -> $SAIL_PORT"

            if [ "$PORT" != "$SAIL_PORT" ] && [ "$SAIL_PORT" != "80" ]; then
                echo -e "${YELLOW}⚠️  ISSUE: Port mismatch${NC}"
                echo "   APP_URL port: $PORT"
                echo "   Sail maps to: $SAIL_PORT"
                ISSUES_FOUND+=("Port mismatch: APP_URL=$PORT vs Sail=$SAIL_PORT")

                read -p "   Fix: Update APP_URL to http://127.0.0.1:$SAIL_PORT? (y/n): " -n 1 -r
                echo ""
                if [[ $REPLY =~ ^[Yy]$ ]]; then
                    sed -i.bak "s|APP_URL=.*|APP_URL=http://127.0.0.1:$SAIL_PORT|" "$PROJECT_ROOT/.env"
                    echo -e "${GREEN}   ✅ Fixed: APP_URL updated to include port $SAIL_PORT${NC}"
                    FIXES_APPLIED+=("Updated APP_URL port to $SAIL_PORT")
                fi
            fi
        fi
    else
        echo "No explicit port in APP_URL (using default 80)"
    fi
else
    echo -e "${RED}❌ ERROR: .env file not found${NC}"
    ISSUES_FOUND+=(".env file missing")
fi

echo ""

# ========================================================================
# シナリオ2: public/hot問題（Vite dev server参照）
# ========================================================================
echo -e "${BLUE}📝 Scenario 2: Vite Dev Server Artifact (public/hot)${NC}"
echo "========================================================================"
echo ""

if [ -f "$PROJECT_ROOT/public/hot" ]; then
    echo -e "${RED}❌ CRITICAL ISSUE: public/hot exists${NC}"
    echo "   This file makes Laravel use Vite dev server (typically localhost:5173)"
    echo "   If dev server is NOT running, you get a BLANK PAGE"
    ISSUES_FOUND+=("public/hot exists (causes dev server dependency)")

    # Vite dev serverが起動しているか確認
    if lsof -i:5173 &> /dev/null; then
        echo "   Vite dev server IS running on port 5173"
        echo -e "${YELLOW}   ⚠️  Pages will work but depend on dev server${NC}"
    else
        echo "   Vite dev server is NOT running"
        echo -e "${RED}   ❌ This is WHY you see a blank page!${NC}"
    fi

    read -p "   Fix: Remove public/hot and build production assets? (y/n): " -n 1 -r
    echo ""
    if [[ $REPLY =~ ^[Yy]$ ]]; then
        rm -f "$PROJECT_ROOT/public/hot"
        echo -e "${GREEN}   ✅ Removed public/hot${NC}"

        echo "   Building production assets..."
        npm run build

        if [ -d "$PROJECT_ROOT/public/build" ]; then
            echo -e "${GREEN}   ✅ Production build completed${NC}"
            FIXES_APPLIED+=("Removed public/hot and built production assets")
        else
            echo -e "${RED}   ❌ Build failed${NC}"
        fi
    fi
else
    echo -e "${GREEN}✅ public/hot does not exist (OK)${NC}"

    # public/buildの存在確認
    if [ ! -d "$PROJECT_ROOT/public/build" ]; then
        echo -e "${RED}❌ CRITICAL ISSUE: public/build directory missing${NC}"
        echo "   Without production assets, pages will be BLANK"
        ISSUES_FOUND+=("public/build missing (no production assets)")

        read -p "   Fix: Build production assets now? (y/n): " -n 1 -r
        echo ""
        if [[ $REPLY =~ ^[Yy]$ ]]; then
            npm run build
            if [ -d "$PROJECT_ROOT/public/build" ]; then
                echo -e "${GREEN}   ✅ Production build completed${NC}"
                FIXES_APPLIED+=("Built production assets")
            fi
        fi
    else
        echo -e "${GREEN}✅ public/build exists (production assets ready)${NC}"
    fi
fi

echo ""

# ========================================================================
# シナリオ3: React version不一致（Hooks error）
# ========================================================================
echo -e "${BLUE}📝 Scenario 3: React Version Consistency${NC}"
echo "========================================================================"
echo ""

if [ -f "$PROJECT_ROOT/package.json" ] && [ -f "$PROJECT_ROOT/dev-kit/ui-components/package.json" ]; then
    MAIN_REACT=$(grep '"react"' "$PROJECT_ROOT/package.json" | head -1 | sed 's/.*"[\^~]*\([0-9]*\)\..*/\1/')
    UI_REACT=$(grep '"react"' "$PROJECT_ROOT/dev-kit/ui-components/package.json" | head -1 | sed 's/.*"[\^~]*\([0-9]*\)\..*/\1/')

    echo "Main app React major version: $MAIN_REACT"
    echo "ui-components React major version: $UI_REACT"

    if [ "$MAIN_REACT" != "$UI_REACT" ]; then
        echo -e "${RED}❌ CRITICAL ISSUE: React major version mismatch${NC}"
        echo "   This causes: 'Cannot read properties of null (reading useState)'"
        echo "   Result: BLANK PAGE in production"
        ISSUES_FOUND+=("React version mismatch: $MAIN_REACT vs $UI_REACT")

        echo ""
        echo "   Manual fix required in vite.config.js:"
        echo "   Add React alias to resolve to single version:"
        echo ""
        echo "   resolve: {"
        echo "     alias: {"
        echo "       'react': path.resolve(__dirname, 'node_modules/react'),"
        echo "       'react-dom': path.resolve(__dirname, 'node_modules/react-dom')"
        echo "     }"
        echo "   }"
    else
        echo -e "${GREEN}✅ React versions are consistent${NC}"
    fi
fi

echo ""

# ========================================================================
# シナリオ4: Laravel cache 問題
# ========================================================================
echo -e "${BLUE}📝 Scenario 4: Laravel Cache Issues${NC}"
echo "========================================================================"
echo ""

# View cache確認
if [ -d "$PROJECT_ROOT/storage/framework/views" ]; then
    VIEW_CACHE_COUNT=$(find "$PROJECT_ROOT/storage/framework/views" -name "*.php" | wc -l)
    echo "View cache files: $VIEW_CACHE_COUNT"

    if [ "$VIEW_CACHE_COUNT" -gt 50 ]; then
        echo -e "${YELLOW}⚠️  Many view cache files exist${NC}"
        read -p "   Fix: Clear view cache? (y/n): " -n 1 -r
        echo ""
        if [[ $REPLY =~ ^[Yy]$ ]]; then
            ./vendor/bin/sail artisan view:clear 2>/dev/null || php artisan view:clear
            echo -e "${GREEN}   ✅ View cache cleared${NC}"
            FIXES_APPLIED+=("Cleared view cache")
        fi
    else
        echo -e "${GREEN}✅ View cache looks normal${NC}"
    fi
fi

echo ""

# ========================================================================
# シナリオ5: Browser cache / Hard refresh required
# ========================================================================
echo -e "${BLUE}📝 Scenario 5: Browser Cache Check${NC}"
echo "========================================================================"
echo ""

echo "Common browser cache issues:"
echo "  - Old JavaScript cached in browser"
echo "  - Service Worker caching old assets"
echo "  - Cookie/session conflicts"
echo ""
echo "Manual actions required:"
echo "  1. Hard refresh: Ctrl+Shift+R (Windows/Linux) or Cmd+Shift+R (Mac)"
echo "  2. Clear browser cache for localhost/127.0.0.1"
echo "  3. Try incognito/private browsing mode"
echo ""

# ========================================================================
# シナリオ6: Docker/Sail コンテナ問題
# ========================================================================
echo -e "${BLUE}📝 Scenario 6: Docker/Sail Container Status${NC}"
echo "========================================================================"
echo ""

if command -v docker &> /dev/null; then
    if docker ps --format '{{.Names}}' | grep -q "laravel.test"; then
        echo -e "${GREEN}✅ Laravel Sail container is running${NC}"

        # コンテナのログを確認
        ERROR_LOGS=$(docker logs laravel.test-1 2>&1 | tail -20 | grep -i "error\|fatal\|exception" || true)
        if [ -n "$ERROR_LOGS" ]; then
            echo -e "${YELLOW}⚠️  Recent errors found in container logs:${NC}"
            echo "$ERROR_LOGS" | head -5
            ISSUES_FOUND+=("Container errors detected (see logs)")
        fi
    else
        echo -e "${RED}❌ CRITICAL ISSUE: Laravel Sail container NOT running${NC}"
        ISSUES_FOUND+=("Sail container not running")

        read -p "   Fix: Start Sail containers? (y/n): " -n 1 -r
        echo ""
        if [[ $REPLY =~ ^[Yy]$ ]]; then
            ./vendor/bin/sail up -d
            echo -e "${GREEN}   ✅ Sail containers started${NC}"
            FIXES_APPLIED+=("Started Sail containers")
        fi
    fi
else
    echo -e "${RED}❌ Docker not found${NC}"
    ISSUES_FOUND+=("Docker not available")
fi

echo ""

# ========================================================================
# 最終サマリー
# ========================================================================
echo "========================================================================"
echo -e "${CYAN}📊 Diagnosis Summary${NC}"
echo "========================================================================"
echo ""

if [ ${#ISSUES_FOUND[@]} -eq 0 ]; then
    echo -e "${GREEN}✅✅✅ NO CRITICAL ISSUES FOUND ✅✅✅${NC}"
    echo ""
    echo "Your configuration looks good!"
    echo ""
    echo "If you still see a blank page, check:"
    echo "  1. Browser console for JavaScript errors (F12)"
    echo "  2. Network tab for failed asset requests"
    echo "  3. Laravel logs: storage/logs/laravel.log"
else
    echo -e "${RED}⚠️  ISSUES DETECTED (${#ISSUES_FOUND[@]})${NC}"
    echo ""
    for issue in "${ISSUES_FOUND[@]}"; do
        echo "  ❌ $issue"
    done
fi

echo ""

if [ ${#FIXES_APPLIED[@]} -gt 0 ]; then
    echo -e "${GREEN}✅ FIXES APPLIED (${#FIXES_APPLIED[@]})${NC}"
    echo ""
    for fix in "${FIXES_APPLIED[@]}"; do
        echo "  ✅ $fix"
    done
    echo ""
    echo "🔄 Next steps:"
    echo "  1. Restart browser (or hard refresh: Ctrl+Shift+R)"
    echo "  2. Access your application"
    echo "  3. Check if blank page is resolved"
fi

echo ""
echo "📁 Detailed log: $LOG_FILE"
echo "========================================================================"
