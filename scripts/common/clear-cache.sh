#!/bin/bash

# キャッシュクリアスクリプト
# テスト・検証実行前に必ず実行すること

echo "🧹 Laravelキャッシュクリア中..."

./vendor/bin/sail artisan route:clear
./vendor/bin/sail artisan config:clear
./vendor/bin/sail artisan cache:clear
./vendor/bin/sail artisan view:clear

echo ""
echo "✅ キャッシュクリア完了"
