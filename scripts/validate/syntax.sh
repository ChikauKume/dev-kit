#!/bin/bash
# 構文エラー・ビルドエラーの事前検出スクリプト

set -e

PROJECT_ROOT="$(cd "$(dirname "${BASH_SOURCE[0]}")/../../.." && pwd)"
cd "$PROJECT_ROOT"

echo "========================================================================"
echo "🔍 Syntax & Build Error Detection (Pre-Implementation Check)"
echo "========================================================================"
echo ""

EXIT_CODE=0

# ========================================================================
# 1. TypeScript構文チェック
# ========================================================================
echo "📝 Step 1: TypeScript Syntax Check"
echo "------------------------------------------------------------------------"

if ! command -v npx &> /dev/null; then
    echo "❌ ERROR: npx not found. Please install Node.js"
    exit 1
fi

# TypeScriptコンパイラによる構文チェック（ビルドなし）
echo "Running TypeScript compiler (tsc --noEmit)..."
if npx tsc --noEmit --skipLibCheck 2>&1 | tee /tmp/tsc-output.log; then
    echo "✅ TypeScript syntax check passed"
else
    echo "❌ ERROR: TypeScript syntax errors detected"
    echo ""
    echo "Errors:"
    cat /tmp/tsc-output.log
    EXIT_CODE=1
fi

echo ""

# ========================================================================
# 2. PHP構文チェック
# ========================================================================
echo "📝 Step 2: PHP Syntax Check"
echo "------------------------------------------------------------------------"

PHP_ERRORS=0

# app/Modules配下の全PHPファイルをチェック
while IFS= read -r -d '' file; do
    if ! php -l "$file" > /dev/null 2>&1; then
        echo "❌ Syntax error in: $file"
        php -l "$file"
        PHP_ERRORS=$((PHP_ERRORS + 1))
        EXIT_CODE=1
    fi
done < <(find app/Modules -name "*.php" -print0 2>/dev/null)

if [ $PHP_ERRORS -eq 0 ]; then
    echo "✅ All PHP files have valid syntax"
else
    echo "❌ ERROR: Found $PHP_ERRORS PHP files with syntax errors"
fi

echo ""

# ========================================================================
# 3. Laravel設定ファイルの整合性チェック
# ========================================================================
echo "📝 Step 3: Laravel Configuration Check"
echo "------------------------------------------------------------------------"

# .envファイルの存在確認
if [ ! -f "$PROJECT_ROOT/.env" ]; then
    echo "❌ ERROR: .env file not found"
    EXIT_CODE=1
else
    echo "✅ .env file exists"

    # 重要な環境変数の存在確認
    REQUIRED_ENV_VARS=("APP_KEY" "DB_CONNECTION" "DB_DATABASE")
    for var in "${REQUIRED_ENV_VARS[@]}"; do
        if ! grep -q "^${var}=" "$PROJECT_ROOT/.env"; then
            echo "⚠️  WARNING: ${var} not set in .env"
        fi
    done
fi

echo ""

# ========================================================================
# 4. Vite設定の検証
# ========================================================================
echo "📝 Step 4: Vite Configuration Check"
echo "------------------------------------------------------------------------"

if [ ! -f "$PROJECT_ROOT/vite.config.js" ]; then
    echo "❌ ERROR: vite.config.js not found"
    EXIT_CODE=1
else
    # React aliasの設定確認
    if grep -q "resolve.*alias" "$PROJECT_ROOT/vite.config.js" && \
       grep -q "'react'" "$PROJECT_ROOT/vite.config.js"; then
        echo "✅ Vite config has React aliases configured"
    else
        echo "⚠️  WARNING: React aliases may not be configured in vite.config.js"
        echo "   This may cause multiple React instances in production build"
    fi
fi

echo ""

# ========================================================================
# 5. Inertia エントリーポイント検証
# ========================================================================
echo "📝 Step 5: Inertia Entry Point Check"
echo "------------------------------------------------------------------------"

ENTRY_POINT="resources/js/app.tsx"
if [ ! -f "$PROJECT_ROOT/$ENTRY_POINT" ]; then
    echo "❌ ERROR: Inertia entry point not found: $ENTRY_POINT"
    EXIT_CODE=1
else
    # createInertiaAppの存在確認
    if grep -q "createInertiaApp" "$PROJECT_ROOT/$ENTRY_POINT"; then
        echo "✅ Inertia entry point is properly configured"
    else
        echo "❌ ERROR: createInertiaApp not found in $ENTRY_POINT"
        EXIT_CODE=1
    fi

    # resolve関数でのページ解決確認
    if grep -q "resolve.*Pages" "$PROJECT_ROOT/$ENTRY_POINT"; then
        echo "✅ Page resolution is configured"
    else
        echo "⚠️  WARNING: Page resolution may not be properly configured"
    fi
fi

echo ""

# ========================================================================
# 6. 重要なディレクトリ構造確認
# ========================================================================
echo "📝 Step 6: Directory Structure Check"
echo "------------------------------------------------------------------------"

REQUIRED_DIRS=(
    "resources/js/Pages"
    "app/Modules"
    "public/build"
)

for dir in "${REQUIRED_DIRS[@]}"; do
    if [ ! -d "$PROJECT_ROOT/$dir" ]; then
        if [ "$dir" == "public/build" ]; then
            echo "⚠️  WARNING: $dir does not exist (run npm run build)"
        else
            echo "❌ ERROR: Required directory not found: $dir"
            EXIT_CODE=1
        fi
    else
        echo "✅ $dir exists"
    fi
done

echo ""

# ========================================================================
# 7. package.jsonとpackage-lock.jsonの整合性
# ========================================================================
echo "📝 Step 7: NPM Dependencies Consistency Check"
echo "------------------------------------------------------------------------"

if [ -f "$PROJECT_ROOT/package-lock.json" ]; then
    # package.jsonとpackage-lock.jsonのバージョン不整合チェック
    echo "Checking package-lock.json consistency..."

    # npm ciの実行推奨（インストールはしない、チェックのみ）
    if npm ls > /dev/null 2>&1; then
        echo "✅ NPM dependencies are consistent"
    else
        echo "⚠️  WARNING: NPM dependencies may have inconsistencies"
        echo "   Run: npm install"
    fi
else
    echo "⚠️  WARNING: package-lock.json not found"
fi

echo ""

# ========================================================================
# 8. composer.jsonとcomposer.lockの整合性
# ========================================================================
echo "📝 Step 8: Composer Dependencies Consistency Check"
echo "------------------------------------------------------------------------"

if [ -f "$PROJECT_ROOT/composer.lock" ]; then
    echo "Checking composer.lock consistency..."

    # composer validateでチェック
    if ./vendor/bin/sail composer validate --no-check-publish 2>&1 | grep -q "is valid"; then
        echo "✅ Composer dependencies are valid"
    else
        echo "⚠️  WARNING: composer.json may have issues"
        echo "   Run: ./vendor/bin/sail composer validate"
    fi
else
    echo "❌ ERROR: composer.lock not found"
    EXIT_CODE=1
fi

echo ""

# ========================================================================
# 9. Routes定義の存在確認
# ========================================================================
echo "📝 Step 9: Routes Definition Check"
echo "------------------------------------------------------------------------"

if [ -f "$PROJECT_ROOT/routes/web.php" ]; then
    # Inertia::render呼び出しの確認
    INERTIA_ROUTES=$(grep -c "Inertia::render" "$PROJECT_ROOT/routes/web.php" || echo "0")
    echo "✅ Found $INERTIA_ROUTES Inertia routes in routes/web.php"

    if [ "$INERTIA_ROUTES" -eq 0 ]; then
        echo "⚠️  WARNING: No Inertia routes found in routes/web.php"
    fi
else
    echo "❌ ERROR: routes/web.php not found"
    EXIT_CODE=1
fi

echo ""

# ========================================================================
# 最終結果
# ========================================================================
echo "========================================================================"
echo "📊 Syntax & Build Check Summary"
echo "========================================================================"

if [ $EXIT_CODE -eq 0 ]; then
    echo "✅ All syntax and build checks passed!"
    echo ""
    echo "You can safely proceed to implementation phase."
else
    echo "❌ Syntax/build errors detected. Please fix them before implementation."
    echo ""
    echo "Common fixes:"
    echo "  - TypeScript errors: Check imports, types, and syntax in .tsx files"
    echo "  - PHP errors: Check syntax in Controllers, Requests, and Models"
    echo "  - Missing files: Run npm install && npm run build"
fi

echo "========================================================================"

exit $EXIT_CODE
