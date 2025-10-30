#!/bin/bash
# React バージョン整合性チェックスクリプト

PROJECT_ROOT="$(cd "$(dirname "${BASH_SOURCE[0]}")/../../.." && pwd)"

echo "🔍 Checking React version consistency..."

MAIN_REACT_VERSION=$(grep '"react"' "$PROJECT_ROOT/package.json" | head -1 | sed 's/.*"\^*\([0-9]*\.[0-9]*\.[0-9]*\)".*/\1/')
UI_REACT_VERSION=$(grep '"react"' "$PROJECT_ROOT/dev-kit/ui-components/package.json" | head -1 | sed 's/.*"\^*\([0-9]*\.[0-9]*\.[0-9]*\)".*/\1/')

echo "Main app React version: $MAIN_REACT_VERSION"
echo "ui-components React version: $UI_REACT_VERSION"

MAIN_MAJOR=$(echo "$MAIN_REACT_VERSION" | cut -d. -f1)
UI_MAJOR=$(echo "$UI_REACT_VERSION" | cut -d. -f1)

if [ "$MAIN_MAJOR" != "$UI_MAJOR" ]; then
    echo "❌ ERROR: React major version mismatch detected!"
    echo "   Main app: React $MAIN_REACT_VERSION"
    echo "   ui-components: React $UI_REACT_VERSION"
    echo ""
    echo "   This may cause runtime errors in production builds."
    echo "   Please ensure vite.config.js has React aliases configured:"
    echo "   resolve: { alias: { 'react': path.resolve(__dirname, 'node_modules/react') } }"
    exit 1
else
    echo "✅ React versions are compatible (major version: $MAIN_MAJOR)"
fi

# public/hotファイルの存在チェック
if [ -f "$PROJECT_ROOT/public/hot" ]; then
    echo "⚠️  WARNING: public/hot file exists"
    echo "   This will cause Laravel to use Vite dev server instead of build assets."
    echo "   Run: rm -f public/hot"
    exit 1
else
    echo "✅ public/hot file does not exist"
fi

echo ""
echo "✅ All dependency checks passed"
