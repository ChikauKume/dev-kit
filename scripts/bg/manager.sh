#!/bin/bash
# バックグラウンドプロセス管理スクリプト
# Usage: ./dev-kit/scripts/bg/manager.sh {action} [options]

set -e

# カラー定義
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

# プロセス一覧を表示
list_processes() {
    echo -e "${BLUE}━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━${NC}"
    echo -e "${BLUE}📋 バックグラウンドプロセス一覧${NC}"
    echo -e "${BLUE}━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━${NC}"

    # npm run test:e2e のプロセスを検索
    local e2e_processes=$(ps aux | grep "npm run test:e2e\|playwright test" | grep -v grep | wc -l | tr -d ' ')

    # その他のnpmプロセス
    local npm_processes=$(ps aux | grep "npm run" | grep -v grep | grep -v "test:e2e" | wc -l | tr -d ' ')

    # sleep プロセス
    local sleep_processes=$(ps aux | grep "sleep" | grep -v grep | wc -l | tr -d ' ')

    # tail プロセス
    local tail_processes=$(ps aux | grep "tail -f\|tail -100" | grep -v grep | wc -l | tr -d ' ')

    echo -e "E2E テストプロセス: ${e2e_processes}"
    echo -e "その他の npm プロセス: ${npm_processes}"
    echo -e "sleep プロセス: ${sleep_processes}"
    echo -e "tail プロセス: ${tail_processes}"
    echo ""
    echo -e "合計: $((e2e_processes + npm_processes + sleep_processes + tail_processes)) プロセス"
    echo -e "${BLUE}━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━${NC}"

    # 詳細表示
    if [ "${1:-}" = "-v" ] || [ "${1:-}" = "--verbose" ]; then
        echo ""
        echo -e "${YELLOW}詳細:${NC}"
        ps aux | grep -E "npm run|playwright|sleep|tail -f" | grep -v grep | head -20
    fi
}

# E2Eテストプロセスのみをクリーンアップ
clean_e2e() {
    echo -e "${YELLOW}🧹 E2Eテストプロセスをクリーンアップ中...${NC}"

    # playwright test プロセスを停止
    pkill -f "playwright test" 2>/dev/null || true

    # npm run test:e2e プロセスを停止
    pkill -f "npm run test:e2e" 2>/dev/null || true

    # 少し待つ
    sleep 1

    echo -e "${GREEN}✅ E2Eテストプロセスをクリーンアップしました${NC}"
}

# すべてのバックグラウンドプロセスをクリーンアップ
clean_all() {
    echo -e "${YELLOW}🧹 すべてのバックグラウンドプロセスをクリーンアップ中...${NC}"

    # E2Eテストプロセス
    pkill -f "playwright test" 2>/dev/null || true
    pkill -f "npm run test:e2e" 2>/dev/null || true

    # バリデーションプロセス
    pkill -f "npm run validate" 2>/dev/null || true

    # sleep プロセス（注意: システムの重要なsleepも停止される可能性）
    # 特定のsleepのみを停止（180秒、120秒など）
    SLEEP_PIDS=$(ps aux | grep "sleep 180\|sleep 120\|sleep 300\|sleep 30" | grep -v grep | awk '{print $2}')
    [ -n "$SLEEP_PIDS" ] && echo "$SLEEP_PIDS" | xargs kill 2>/dev/null || true

    # tail プロセス（/tmpファイルに関連するもののみ）
    TAIL_PIDS=$(ps aux | grep "tail.*e2e.*log\|tail.*playwright" | grep -v grep | awk '{print $2}')
    [ -n "$TAIL_PIDS" ] && echo "$TAIL_PIDS" | xargs kill 2>/dev/null || true

    # Playwright ブラウザプロセス
    pkill -f "chromium\|firefox\|webkit" 2>/dev/null || true

    # 少し待つ
    sleep 2

    echo -e "${GREEN}✅ すべてのバックグラウンドプロセスをクリーンアップしました${NC}"
}

# ログファイルをクリーンアップ
clean_logs() {
    echo -e "${YELLOW}🧹 ログファイルをクリーンアップ中...${NC}"

    # /tmpのE2Eログ
    rm -f /tmp/e2e-*.log 2>/dev/null || true

    # logs/ディレクトリ
    rm -f logs/*.log 2>/dev/null || true

    # playwright-reportディレクトリ（再生成可能）
    rm -rf playwright-report 2>/dev/null || true

    # test-resultsディレクトリ（再生成可能）
    rm -rf test-results 2>/dev/null || true

    echo -e "${GREEN}✅ ログファイルをクリーンアップしました${NC}"
}

# 完全クリーンアップ（プロセス + ログ）
clean_full() {
    echo -e "${YELLOW}🧹 完全クリーンアップ中...${NC}"
    clean_all
    clean_logs
    echo -e "${GREEN}✅ 完全クリーンアップが完了しました${NC}"
}

# 停滞プロセスを検出
detect_stuck() {
    echo -e "${BLUE}🔍 停滞プロセスを検出中...${NC}"

    # 30分以上実行中のnpmプロセス
    local stuck_npm=$(ps aux | grep "npm run" | grep -v grep | awk '{if($10 > 30) print $0}' | wc -l | tr -d ' ')

    # 60分以上実行中のplaywrightプロセス
    local stuck_playwright=$(ps aux | grep "playwright" | grep -v grep | awk '{if($10 > 60) print $0}' | wc -l | tr -d ' ')

    if [ "$stuck_npm" -gt 0 ] || [ "$stuck_playwright" -gt 0 ]; then
        echo -e "${RED}⚠️  停滞の可能性があるプロセスが見つかりました:${NC}"
        echo -e "  NPM: $stuck_npm プロセス"
        echo -e "  Playwright: $stuck_playwright プロセス"
        echo ""
        echo -e "${YELLOW}詳細:${NC}"
        ps aux | grep -E "npm run|playwright" | grep -v grep | awk '{if($10 > 30) print $0}'
        echo ""
        echo -e "${YELLOW}これらのプロセスをクリーンアップしますか? (y/n)${NC}"
    else
        echo -e "${GREEN}✅ 停滞プロセスは見つかりませんでした${NC}"
    fi
}

# プロセス統計を表示
stats() {
    echo -e "${BLUE}━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━${NC}"
    echo -e "${BLUE}📊 プロセス統計${NC}"
    echo -e "${BLUE}━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━${NC}"

    # CPU使用率トップ5
    echo -e "${YELLOW}CPU使用率 Top 5:${NC}"
    ps aux | grep -E "npm|playwright|node" | grep -v grep | sort -rn -k 3 | head -5 | awk '{printf "  %s %s%% %s\n", $11, $3, $2}'

    echo ""

    # メモリ使用率トップ5
    echo -e "${YELLOW}メモリ使用率 Top 5:${NC}"
    ps aux | grep -E "npm|playwright|node" | grep -v grep | sort -rn -k 4 | head -5 | awk '{printf "  %s %s%% %s\n", $11, $4, $2}'

    echo -e "${BLUE}━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━${NC}"
}

# 特定のプロセスをkill
kill_process() {
    local pattern="$1"

    if [ -z "$pattern" ]; then
        echo -e "${RED}❌ エラー: パターンを指定してください${NC}"
        exit 1
    fi

    echo -e "${YELLOW}🔪 プロセスを停止中: $pattern${NC}"

    local pids=$(ps aux | grep "$pattern" | grep -v grep | awk '{print $2}')

    if [ -z "$pids" ]; then
        echo -e "${YELLOW}⚠️  該当するプロセスが見つかりませんでした${NC}"
        return 0
    fi

    [ -n "$pids" ] && echo "$pids" | xargs kill 2>/dev/null || true
    sleep 1

    # 強制終了が必要な場合
    local remaining=$(ps aux | grep "$pattern" | grep -v grep | awk '{print $2}')
    if [ -n "$remaining" ]; then
        echo -e "${YELLOW}⚠️  プロセスが残っています。強制終了中...${NC}"
        echo "$remaining" | xargs kill -9 2>/dev/null || true
    fi

    echo -e "${GREEN}✅ プロセスを停止しました${NC}"
}

# メイン処理
main() {
    local action="${1:-list}"

    case "$action" in
        list|ls)
            list_processes "${@:2}"
            ;;
        clean-e2e)
            clean_e2e
            ;;
        clean-all|clean)
            clean_all
            ;;
        clean-logs)
            clean_logs
            ;;
        clean-full|full)
            clean_full
            ;;
        detect-stuck|stuck)
            detect_stuck
            ;;
        stats)
            stats
            ;;
        kill)
            kill_process "${2:-}"
            ;;
        help|--help|-h)
            echo "Usage: $0 {action} [options]"
            echo ""
            echo "Actions:"
            echo "  list, ls              - プロセス一覧を表示 (-v で詳細表示)"
            echo "  clean-e2e             - E2Eテストプロセスのみクリーンアップ"
            echo "  clean-all, clean      - すべてのバックグラウンドプロセスをクリーンアップ"
            echo "  clean-logs            - ログファイルをクリーンアップ"
            echo "  clean-full, full      - プロセスとログを完全クリーンアップ"
            echo "  detect-stuck, stuck   - 停滞プロセスを検出"
            echo "  stats                 - プロセス統計を表示"
            echo "  kill <pattern>        - パターンに一致するプロセスをkill"
            echo "  help                  - このヘルプを表示"
            ;;
        *)
            echo -e "${RED}❌ 不明なアクション: $action${NC}"
            echo "Usage: $0 {list|clean-e2e|clean-all|clean-logs|clean-full|detect-stuck|stats|kill|help}"
            exit 1
            ;;
    esac
}

main "$@"
