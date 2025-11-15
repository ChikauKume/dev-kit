#!/bin/bash
# Vite開発サーバー終了時のクリーンアップスクリプト

PROJECT_ROOT="$(cd "$(dirname "${BASH_SOURCE[0]}")/../../.." && pwd)"

echo "🧹 Cleaning up Vite development artifacts..."

# public/hotファイルを削除
if [ -f "$PROJECT_ROOT/public/hot" ]; then
    rm -f "$PROJECT_ROOT/public/hot"
    echo "✅ Removed public/hot"
else
    echo "ℹ️  public/hot not found (already clean)"
fi

# Viteプロセスを確認
if pgrep -f "vite" > /dev/null; then
    echo "⚠️  Warning: Vite process is still running"
    echo "   PID(s): $(pgrep -f 'vite')"
    read -p "   Terminate Vite processes? (y/N): " -n 1 -r
    echo
    if [[ $REPLY =~ ^[Yy]$ ]]; then
        pkill -f "vite"
        echo "✅ Terminated Vite processes"
    fi
fi

echo "✅ Cleanup complete"
