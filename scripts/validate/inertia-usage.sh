#!/bin/bash

# ===================================================================
# Inertia.js使用検証スクリプト
# ===================================================================
# Inertia.jsの正しい使用方法を検証し、アンチパターンを検出
#
# 検証項目:
#   1. 従来のform submitを使用していないか（router.post/delete/putを使うべき）
#   2. document.createElement('form')を使用していないか
#   3. CSRF tokenの手動処理をしていないか（Inertiaが自動処理）
#   4. router.visit()の使用（パス解決の統一）
#
# 使用方法:
#   ./dev-kit/scripts/validate/inertia-usage.sh
#
# 終了コード:
#   0: 検証成功（問題なし）
#   1: 検証失敗（アンチパターン検出）
# ===================================================================

set -e

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
PROJECT_ROOT="$(cd "$SCRIPT_DIR/../../.." && pwd)"

# Color output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

echo "=========================================="
echo "🔍 Inertia.js Usage Validation"
echo "=========================================="
echo ""

ERRORS=0

# 1. document.createElement('form')のチェック
echo "📋 Checking for manual form creation..."
if grep -r "document.createElement.*form" "$PROJECT_ROOT/resources/js" --include="*.tsx" --include="*.ts" 2>/dev/null; then
    echo -e "${RED}❌ FAIL: Manual form creation detected${NC}"
    echo "   → Use router.post(), router.delete(), router.put() instead"
    echo ""
    ERRORS=$((ERRORS + 1))
else
    echo -e "${GREEN}✅ PASS: No manual form creation${NC}"
    echo ""
fi

# 2. form.submit()のチェック
echo "📋 Checking for manual form submission..."
if grep -r "\.submit()" "$PROJECT_ROOT/resources/js" --include="*.tsx" --include="*.ts" 2>/dev/null; then
    echo -e "${RED}❌ FAIL: Manual form submission detected${NC}"
    echo "   → Use router.post(), router.delete(), router.put() instead"
    echo ""
    ERRORS=$((ERRORS + 1))
else
    echo -e "${GREEN}✅ PASS: No manual form submission${NC}"
    echo ""
fi

# 3. 手動CSRF token処理のチェック（fetch APIでの使用は除外）
echo "📋 Checking for manual CSRF token handling in form submissions..."
# document.createElement('form')と組み合わせた使用のみを検出（Dashboard.tsxのような使い方）
# fetch APIでのX-CSRF-TOKEN使用は妥当なので除外
if grep -r "csrf-token.*getAttribute" "$PROJECT_ROOT/resources/js/Pages" --include="*.tsx" --include="*.ts" 2>/dev/null | grep -v "fetch\|X-CSRF-TOKEN" > /dev/null 2>&1; then
    echo -e "${RED}❌ FAIL: Manual CSRF token handling in form submission detected${NC}"
    echo "   → Use router.post() instead of manual form creation"
    echo ""
    ERRORS=$((ERRORS + 1))
else
    echo -e "${GREEN}✅ PASS: No manual CSRF token handling in form submissions${NC}"
    echo ""
fi

# 4. window.location直接操作のチェック
echo "📋 Checking for direct window.location manipulation..."
if grep -r "window\.location\s*=" "$PROJECT_ROOT/resources/js" --include="*.tsx" --include="*.ts" 2>/dev/null; then
    echo -e "${YELLOW}⚠️  WARNING: Direct window.location assignment detected${NC}"
    echo "   → Consider using router.visit() for better SPA experience"
    echo ""
    # これは警告のみでエラーカウントには含めない
fi

# 5. bootstrap.js でのCSRF token設定確認
echo "📋 Checking axios CSRF token configuration..."
if grep -q "X-CSRF-TOKEN" "$PROJECT_ROOT/resources/js/bootstrap.js" 2>/dev/null; then
    echo -e "${GREEN}✅ PASS: Axios CSRF token configured${NC}"
    echo ""
else
    echo -e "${RED}❌ FAIL: Axios CSRF token not configured in bootstrap.js${NC}"
    echo "   → Add: window.axios.defaults.headers.common['X-CSRF-TOKEN'] = token.content"
    echo ""
    ERRORS=$((ERRORS + 1))
fi

# 6. router importのチェック
echo "📋 Checking Inertia router import usage..."
ROUTER_IMPORT_COUNT=$(grep -r "import.*router.*from '@inertiajs" "$PROJECT_ROOT/resources/js/Pages" --include="*.tsx" --include="*.ts" 2>/dev/null | wc -l | tr -d ' ')
if [ "$ROUTER_IMPORT_COUNT" -gt 0 ]; then
    echo -e "${GREEN}✅ PASS: Inertia router is imported ($ROUTER_IMPORT_COUNT files)${NC}"
    echo ""
else
    echo -e "${YELLOW}⚠️  WARNING: No Inertia router imports found${NC}"
    echo "   → Consider using router.visit(), router.post() for navigation"
    echo ""
fi

# 7. 手動session()->regenerate()呼び出しのチェック (Inertia.js SPA と相性が悪い)
echo "📋 Checking for manual session()->regenerate() in controllers..."
# コメント行を除外して検索（//で始まる行を除外）
REGENERATE_MATCHES=$(grep -r "\$request->session()->regenerate()\|session()->regenerate()" "$PROJECT_ROOT/app/Modules" --include="*Controller.php" 2>/dev/null | grep -v "//" || true)
if [ -n "$REGENERATE_MATCHES" ]; then
    echo "$REGENERATE_MATCHES"
    echo -e "${RED}❌ FAIL: Manual session()->regenerate() detected in controllers${NC}"
    echo "   → Auth::login() already regenerates session automatically"
    echo "   → Manual regeneration causes CSRF token mismatch in Inertia.js SPAs"
    echo "   → Remove manual session()->regenerate() calls from login methods"
    echo ""
    ERRORS=$((ERRORS + 1))
else
    echo -e "${GREEN}✅ PASS: No manual session()->regenerate() calls${NC}"
    echo ""
fi

# 結果サマリー
echo "=========================================="
if [ $ERRORS -eq 0 ]; then
    echo -e "${GREEN}✅ Validation PASSED${NC}"
    echo "=========================================="
    echo ""
    echo "All Inertia.js usage patterns are correct."
    exit 0
else
    echo -e "${RED}❌ Validation FAILED${NC}"
    echo "=========================================="
    echo ""
    echo "Found $ERRORS error(s). Please fix the issues above."
    echo ""
    echo "Recommended fixes:"
    echo "  1. Replace document.createElement('form') with router.post()"
    echo "  2. Replace form.submit() with router.post()"
    echo "  3. Remove manual CSRF token handling"
    echo "  4. Ensure bootstrap.js configures axios CSRF header"
    echo ""
    exit 1
fi
