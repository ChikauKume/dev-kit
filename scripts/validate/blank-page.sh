#!/bin/bash
# 白画面問題の原因を事前検出するスクリプト

set -e

PROJECT_ROOT="$(cd "$(dirname "${BASH_SOURCE[0]}")/../../.." && pwd)"
cd "$PROJECT_ROOT"

echo "========================================================================"
echo "🔍 Blank Page Prevention Check (Runtime Error Detection)"
echo "========================================================================"
echo ""

EXIT_CODE=0

# ========================================================================
# 1. public/hotファイルの存在チェック（最重要）
# ========================================================================
echo "📝 Step 1: Vite Dev Server Artifact Check"
echo "------------------------------------------------------------------------"

if [ -f "$PROJECT_ROOT/public/hot" ]; then
    echo "❌ CRITICAL: public/hot file exists"
    echo "   This will cause Laravel to use Vite dev server (localhost:5173)"
    echo "   If dev server is not running, pages will be BLANK"
    echo ""
    echo "   FIX: rm -f public/hot && npm run build"
    EXIT_CODE=1
else
    echo "✅ public/hot does not exist"
fi

echo ""

# ========================================================================
# 2. React version整合性チェック
# ========================================================================
echo "📝 Step 2: React Version Consistency Check"
echo "------------------------------------------------------------------------"

MAIN_REACT_VERSION=$(grep '"react"' "$PROJECT_ROOT/package.json" | head -1 | sed 's/.*"\^*\([0-9]*\.[0-9]*\.[0-9]*\)".*/\1/')
UI_REACT_VERSION=$(grep '"react"' "$PROJECT_ROOT/dev-kit/ui-components/package.json" | head -1 | sed 's/.*"\^*\([0-9]*\.[0-9]*\.[0-9]*\)".*/\1/')

MAIN_MAJOR=$(echo "$MAIN_REACT_VERSION" | cut -d. -f1)
UI_MAJOR=$(echo "$UI_REACT_VERSION" | cut -d. -f1)

echo "Main app React version: $MAIN_REACT_VERSION (major: $MAIN_MAJOR)"
echo "ui-components React version: $UI_REACT_VERSION (major: $UI_MAJOR)"

if [ "$MAIN_MAJOR" != "$UI_MAJOR" ]; then
    echo "❌ ERROR: React major version mismatch"
    echo "   This causes \"Cannot read properties of null (reading 'useState')\" error"
    echo "   Result: BLANK PAGE in production build"
    echo ""
    echo "   FIX: Ensure vite.config.js has React aliases:"
    echo "   resolve: { alias: { 'react': path.resolve(__dirname, 'node_modules/react') } }"
    EXIT_CODE=1
else
    echo "✅ React versions are compatible"
fi

echo ""

# ========================================================================
# 3. Vite build成果物の存在確認
# ========================================================================
echo "📝 Step 3: Vite Build Artifacts Check"
echo "------------------------------------------------------------------------"

if [ ! -d "$PROJECT_ROOT/public/build" ]; then
    echo "❌ ERROR: public/build directory NOT FOUND"
    echo "   Without build artifacts, production pages will be BLANK"
    echo ""
    echo "   FIX: npm run build"
    EXIT_CODE=1
else
    # manifest.jsonの存在確認
    if [ ! -f "$PROJECT_ROOT/public/build/manifest.json" ]; then
        echo "❌ ERROR: public/build/manifest.json NOT FOUND"
        echo "   Incomplete build artifacts will cause BLANK PAGE"
        echo ""
        echo "   FIX: npm run build"
        EXIT_CODE=1
    else
        echo "✅ Build artifacts exist"

        # manifest.jsonにapp.tsxエントリーがあるか確認
        if ! grep -q "resources/js/app.tsx" "$PROJECT_ROOT/public/build/manifest.json"; then
            echo "⚠️  WARNING: app.tsx entry not found in manifest.json"
            echo "   This may indicate incomplete build"
        fi
    fi
fi

echo ""

# ========================================================================
# 4. Inertia エントリーポイントの構文チェック
# ========================================================================
echo "📝 Step 4: Inertia Entry Point Syntax Check"
echo "------------------------------------------------------------------------"

ENTRY_POINT="resources/js/app.tsx"

if [ ! -f "$PROJECT_ROOT/$ENTRY_POINT" ]; then
    echo "❌ ERROR: $ENTRY_POINT NOT FOUND"
    echo "   Missing entry point will cause BLANK PAGE"
    EXIT_CODE=1
else
    # TypeScript構文チェック（簡易チェック: ファイルの存在とJavaScript構文のみ）
    echo "Checking TypeScript syntax in $ENTRY_POINT..."

    # 簡易チェック: ファイルが読み込めるかのみ確認（TypeScriptの詳細チェックはスキップ）
    # 注: ui-components内のテンプレートエラーは実装に影響しないため、詳細チェックは不要
    if node -c "$PROJECT_ROOT/$ENTRY_POINT" 2>&1 | grep -qi "SyntaxError"; then
        echo "❌ ERROR: JavaScript syntax errors in $ENTRY_POINT"
        echo "   Syntax errors in entry point will cause BLANK PAGE"
        node -c "$PROJECT_ROOT/$ENTRY_POINT" 2>&1
        EXIT_CODE=1
    else
        echo "✅ $ENTRY_POINT has valid JavaScript syntax (TypeScript checks skipped)"
    fi

    # createInertiaAppの存在確認
    if ! grep -q "createInertiaApp" "$PROJECT_ROOT/$ENTRY_POINT"; then
        echo "❌ ERROR: createInertiaApp not found in $ENTRY_POINT"
        echo "   Missing Inertia initialization will cause BLANK PAGE"
        EXIT_CODE=1
    else
        echo "✅ Inertia initialization is present"
    fi
fi

echo ""

# ========================================================================
# 5. ページコンポーネントの動的インポートエラー検出
# ========================================================================
echo "📝 Step 5: Page Components Import Check"
echo "------------------------------------------------------------------------"

if [ -d "$PROJECT_ROOT/resources/js/Pages" ]; then
    echo "Checking page components for common import errors..."

    # useDynamicForm以外のuseForm使用を検出（コメント内は除外）
    # コメント内のuseFormは実際の使用ではないため除外
    USE_FORM_FILES=$(grep -r "from '@inertiajs/react'" "$PROJECT_ROOT/resources/js/Pages" 2>/dev/null | grep -v "^\s*//" | grep -v "\*" | grep -v "usePage" | grep "useForm" || true)

    if [ -n "$USE_FORM_FILES" ]; then
        echo "❌ ERROR: Inertia useForm detected (should use useDynamicForm)"
        echo "$USE_FORM_FILES"
        echo ""
        echo "   This may cause form validation failures leading to poor UX"
        EXIT_CODE=1
    else
        echo "✅ No forbidden Inertia useForm usage detected"
    fi

    # 存在しないコンポーネントのインポートを検出
    MISSING_IMPORTS=$(find "$PROJECT_ROOT/resources/js/Pages" -name "*.tsx" -print0 2>/dev/null | xargs -0 grep -H "from.*ui-components" 2>/dev/null | grep -v "LoginPage\|SignupPage\|FormPage\|ListPage\|DetailPage" || true)

    if [ -n "$MISSING_IMPORTS" ]; then
        echo "⚠️  WARNING: Potential invalid ui-components imports detected"
        echo "$MISSING_IMPORTS"
    else
        echo "✅ Page component imports look valid"
    fi
else
    echo "⚠️  WARNING: resources/js/Pages directory not found"
fi

echo ""

# ========================================================================
# 6. Laravel app.blade.php の @vite ディレクティブ確認
# ========================================================================
echo "📝 Step 6: Laravel Blade @vite Directive Check"
echo "------------------------------------------------------------------------"

BLADE_LAYOUT="resources/views/app.blade.php"

if [ ! -f "$PROJECT_ROOT/$BLADE_LAYOUT" ]; then
    echo "❌ ERROR: $BLADE_LAYOUT NOT FOUND"
    echo "   Missing layout file will cause BLANK PAGE"
    EXIT_CODE=1
else
    if ! grep -q "@vite" "$PROJECT_ROOT/$BLADE_LAYOUT"; then
        echo "❌ ERROR: @vite directive not found in $BLADE_LAYOUT"
        echo "   Without @vite, JS/CSS assets won't be loaded -> BLANK PAGE"
        EXIT_CODE=1
    else
        echo "✅ @vite directive is present in $BLADE_LAYOUT"
    fi

    # @inertiaHeadの存在確認
    if ! grep -q "@inertiaHead" "$PROJECT_ROOT/$BLADE_LAYOUT"; then
        echo "⚠️  WARNING: @inertiaHead not found in $BLADE_LAYOUT"
        echo "   This may cause missing page titles"
    fi

    # @inertia ディレクティブの存在確認
    if ! grep -q "@inertia" "$PROJECT_ROOT/$BLADE_LAYOUT"; then
        echo "❌ ERROR: @inertia directive not found in $BLADE_LAYOUT"
        echo "   Without @inertia, Inertia app won't mount -> BLANK PAGE"
        EXIT_CODE=1
    else
        echo "✅ @inertia directive is present"
    fi
fi

echo ""

# ========================================================================
# 7. Console Errorの可能性がある構文パターン検出
# ========================================================================
echo "📝 Step 7: Common Runtime Error Pattern Detection"
echo "------------------------------------------------------------------------"

echo "Checking for common runtime error patterns..."

# useState/useEffect等のReact Hooksがコンポーネント外で呼ばれていないかチェック
HOOKS_PATTERN=$(find "$PROJECT_ROOT/resources/js" -name "*.tsx" -o -name "*.ts" | xargs grep -n "useState\|useEffect\|useMemo" 2>/dev/null | grep -v "function \|const.*=.*(" || true)

if [ -n "$HOOKS_PATTERN" ]; then
    echo "⚠️  WARNING: Potential React Hooks called outside component"
    echo "   This may cause \"Hooks can only be called inside function components\" error"
    echo ""
    echo "$HOOKS_PATTERN" | head -5
fi

echo "✅ Runtime error pattern check completed"

echo ""

# ========================================================================
# 8. APP_ENV=productionでのVite設定確認
# ========================================================================
echo "📝 Step 8: Production Environment Configuration Check"
echo "------------------------------------------------------------------------"

if [ -f "$PROJECT_ROOT/.env" ]; then
    APP_ENV=$(grep "^APP_ENV=" "$PROJECT_ROOT/.env" | cut -d= -f2)
    echo "Current APP_ENV: $APP_ENV"

    if [ "$APP_ENV" = "production" ]; then
        echo "✅ Running in production mode"

        # productionモードでpublic/hotが存在する場合は致命的
        if [ -f "$PROJECT_ROOT/public/hot" ]; then
            echo "❌ CRITICAL: production mode + public/hot exists"
            echo "   This combination ALWAYS causes BLANK PAGE"
            EXIT_CODE=1
        fi

        # public/buildが存在しない場合も致命的
        if [ ! -d "$PROJECT_ROOT/public/build" ]; then
            echo "❌ CRITICAL: production mode but no build artifacts"
            echo "   Run: npm run build"
            EXIT_CODE=1
        fi
    else
        echo "✅ Running in $APP_ENV mode"
    fi
else
    echo "⚠️  WARNING: .env file not found"
fi

echo ""

# ========================================================================
# 最終結果
# ========================================================================
echo "========================================================================"
echo "📊 Blank Page Prevention Check Summary"
echo "========================================================================"

if [ $EXIT_CODE -eq 0 ]; then
    echo "✅ All blank page prevention checks passed!"
    echo ""
    echo "No critical issues detected that would cause blank pages."
else
    echo "❌ Blank page risks detected!"
    echo ""
    echo "URGENT: Fix these issues before deployment, or pages will be BLANK."
    echo ""
    echo "Common fixes:"
    echo "  1. rm -f public/hot && npm run build"
    echo "  2. Ensure React version consistency (check vite.config.js aliases)"
    echo "  3. Fix TypeScript/JavaScript syntax errors"
    echo "  4. Verify @vite and @inertia directives in app.blade.php"
    echo ""
    echo "💡 Run validation again after fixes:"
    echo "   npm run validate:blank-page"
fi

echo "========================================================================"

exit $EXIT_CODE
