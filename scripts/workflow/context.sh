#!/bin/bash
# エージェント間コンテキスト共有スクリプト
# Usage: ./dev-kit/scripts/workflow/context.sh {action} {spec_name} [agent] [data]

set -e

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
PROJECT_ROOT="$(cd "$SCRIPT_DIR/../../.." && pwd)"
STATE_DIR="$PROJECT_ROOT/dev-kit/state"

# カラー定義
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

# コンテキストファイルのパスを取得
get_context_file() {
    local spec_name="$1"
    echo "$STATE_DIR/agent-context-${spec_name}.yml"
}

# コンテキストファイルを初期化
init_context() {
    local spec_name="$1"
    local context_file=$(get_context_file "$spec_name")

    mkdir -p "$STATE_DIR"

    cat > "$context_file" <<EOF
# エージェント間コンテキスト共有ファイル: $spec_name
# 自動生成日時: $(date -u +"%Y-%m-%dT%H:%M:%SZ")

spec_name: $spec_name
created_at: "$(date -u +"%Y-%m-%dT%H:%M:%SZ")"
last_updated: "$(date -u +"%Y-%m-%dT%H:%M:%SZ")"

# フロントエンド開発者の情報
frontend_developer:
  status: not_started
  completed_at: null
  pages_created: []
  components_used: []
  endpoints_used: []
  validation_rules: []

# バックエンド開発者の情報
backend_developer:
  status: not_started
  completed_at: null
  endpoints_implemented: []
  validation_rules: []
  database_tables: []
  migrations: []

# テスト情報
test_results:
  phpunit:
    passed: 0
    failed: 0
    total: 0
  e2e:
    passed: 0
    failed: 0
    total: 0
EOF

    echo -e "${GREEN}✅ コンテキストファイルを初期化しました: $context_file${NC}"
}

# フロントエンド完了情報を記録
record_frontend_completion() {
    local spec_name="$1"
    local context_file=$(get_context_file "$spec_name")

    if [ ! -f "$context_file" ]; then
        init_context "$spec_name"
    fi

    # ページファイルを検出
    local pages=$(find resources/js/Pages -name "*.tsx" 2>/dev/null | sed 's|^|    - |')

    # コンポーネント使用を検出
    local components=$(find resources/js/Pages -name "*.tsx" -print0 2>/dev/null | \
                      xargs -0 grep -h "from.*ui-components" 2>/dev/null | \
                      sed 's/.*{//; s/}.*//' | tr ',' '\n' | sed 's/^[ \t]*//; s/[ \t]*$//' | sort -u | sed 's|^|    - |')

    # エンドポイント使用を検出（routeやaxiosの呼び出し）
    local endpoints=$(find resources/js/Pages -name "*.tsx" -print0 2>/dev/null | \
                     xargs -0 grep -h "route\|axios\.\(get\|post\|put\|delete\)" 2>/dev/null | \
                     grep -o '"/[^"]*"' | sort -u | sed 's|^|    - |')

    # コンテキストファイルを更新
    sed -i.bak "/^frontend_developer:/,/^backend_developer:/ {
        s|status:.*|status: completed|
        s|completed_at:.*|completed_at: \"$(date -u +"%Y-%m-%dT%H:%M:%SZ")\"|
    }" "$context_file"

    # ページリストを追加
    if [ -n "$pages" ]; then
        sed -i.bak "/pages_created: \[\]/c\\
pages_created:\\
$pages" "$context_file"
    fi

    # コンポーネントリストを追加
    if [ -n "$components" ]; then
        sed -i.bak "/components_used: \[\]/c\\
components_used:\\
$components" "$context_file"
    fi

    # エンドポイントリストを追加
    if [ -n "$endpoints" ]; then
        sed -i.bak "/endpoints_used: \[\]/c\\
endpoints_used:\\
$endpoints" "$context_file"
    fi

    rm -f "${context_file}.bak"

    echo -e "${GREEN}✅ フロントエンド完了情報を記録しました${NC}"
}

# バックエンド完了情報を記録
record_backend_completion() {
    local spec_name="$1"
    local context_file=$(get_context_file "$spec_name")

    if [ ! -f "$context_file" ]; then
        init_context "$spec_name"
    fi

    # コントローラーからエンドポイントを検出
    local endpoints=$(find app/Modules -name "*Controller.php" -print0 2>/dev/null | \
                     xargs -0 grep -h "Route::" 2>/dev/null | \
                     grep -o "'[^']*'" | sed "s/'//g" | sort -u | sed 's|^|    - |')

    # マイグレーションファイルを検出
    local migrations=$(find database/migrations -name "*.php" 2>/dev/null | xargs basename -a 2>/dev/null | sed 's|^|    - |')

    # データベーステーブルを検出（マイグレーションから）
    local tables=$(find database/migrations -name "*.php" -print0 2>/dev/null | \
                  xargs -0 grep -h "Schema::create" 2>/dev/null | \
                  grep -o "'[^']*'" | sed "s/'//g" | sort -u | sed 's|^|    - |')

    # バリデーションルールを検出
    local validations=$(find app/Modules -name "*Request.php" -print0 2>/dev/null | \
                       xargs -0 grep -h "required\|email\|min:\|max:" 2>/dev/null | \
                       head -10 | sed 's/^[ \t]*//; s/[ \t]*$//' | sed 's|^|    - |')

    # コンテキストファイルを更新
    sed -i.bak "/^backend_developer:/,/^test_results:/ {
        s|status:.*|status: completed|
        s|completed_at:.*|completed_at: \"$(date -u +"%Y-%m-%dT%H:%M:%SZ")\"|
    }" "$context_file"

    # エンドポイントリストを追加
    if [ -n "$endpoints" ]; then
        sed -i.bak "/endpoints_implemented: \[\]/c\\
endpoints_implemented:\\
$endpoints" "$context_file"
    fi

    # マイグレーションリストを追加
    if [ -n "$migrations" ]; then
        sed -i.bak "/migrations: \[\]/c\\
migrations:\\
$migrations" "$context_file"
    fi

    # テーブルリストを追加
    if [ -n "$tables" ]; then
        sed -i.bak "/database_tables: \[\]/c\\
database_tables:\\
$tables" "$context_file"
    fi

    rm -f "${context_file}.bak"

    echo -e "${GREEN}✅ バックエンド完了情報を記録しました${NC}"
}

# テスト結果を記録
record_test_results() {
    local spec_name="$1"
    local test_type="$2"  # phpunit or e2e
    local context_file=$(get_context_file "$spec_name")

    if [ ! -f "$context_file" ]; then
        init_context "$spec_name"
    fi

    if [ "$test_type" = "phpunit" ]; then
        # PHPUnitテスト結果を取得
        local test_output=$(./vendor/bin/sail artisan test 2>&1)
        local passed=$(echo "$test_output" | grep -o "[0-9]* passed" | awk '{print $1}' || echo "0")
        local failed=$(echo "$test_output" | grep -o "[0-9]* failed" | awk '{print $1}' || echo "0")
        local total=$((passed + failed))

        sed -i.bak "/phpunit:/,/e2e:/ {
            s|passed:.*|passed: $passed|
            s|failed:.*|failed: $failed|
            s|total:.*|total: $total|
        }" "$context_file"

        echo -e "${GREEN}✅ PHPUnitテスト結果を記録しました (Passed: $passed, Failed: $failed)${NC}"

    elif [ "$test_type" = "e2e" ]; then
        # E2Eテスト結果を取得
        local test_output=$(npm run test:e2e 2>&1 || true)
        local passed=$(echo "$test_output" | grep -o "[0-9]* passed" | tail -1 | awk '{print $1}' || echo "0")
        local failed=$(echo "$test_output" | grep -o "[0-9]* failed" | tail -1 | awk '{print $1}' || echo "0")
        local total=$((passed + failed))

        sed -i.bak "/e2e:/,/^[a-z_]*:/ {
            s|passed:.*|passed: $passed|
            s|failed:.*|failed: $failed|
            s|total:.*|total: $total|
        }" "$context_file"

        echo -e "${GREEN}✅ E2Eテスト結果を記録しました (Passed: $passed, Failed: $failed)${NC}"
    fi

    rm -f "${context_file}.bak"
}

# コンテキストを表示
show_context() {
    local spec_name="$1"
    local context_file=$(get_context_file "$spec_name")

    if [ ! -f "$context_file" ]; then
        echo -e "${YELLOW}⚠️  コンテキストファイルが見つかりません: $spec_name${NC}"
        return 1
    fi

    echo -e "${BLUE}━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━${NC}"
    echo -e "${BLUE}📋 エージェント間コンテキスト: ${spec_name}${NC}"
    echo -e "${BLUE}━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━${NC}"
    cat "$context_file"
    echo -e "${BLUE}━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━${NC}"
}

# バックエンドが必要とする情報を取得
get_backend_requirements() {
    local spec_name="$1"
    local context_file=$(get_context_file "$spec_name")

    if [ ! -f "$context_file" ]; then
        echo -e "${YELLOW}⚠️  コンテキストファイルが見つかりません${NC}"
        return 1
    fi

    echo -e "${BLUE}━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━${NC}"
    echo -e "${BLUE}📋 バックエンドが実装すべき項目${NC}"
    echo -e "${BLUE}━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━${NC}"
    echo ""

    echo -e "${YELLOW}フロントエンドが使用しているエンドポイント:${NC}"
    sed -n '/endpoints_used:/,/validation_rules:/p' "$context_file" | grep "    -" | sed 's/    //'

    echo ""
    echo -e "${YELLOW}フロントエンドが使用しているバリデーション:${NC}"
    sed -n '/validation_rules:/,/^backend_developer:/p' "$context_file" | grep "    -" | sed 's/    //'

    echo -e "${BLUE}━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━${NC}"
}

# メイン処理
main() {
    local action="$1"
    local spec_name="$2"

    # spec_nameのバリデーション
    if [ -z "$spec_name" ] && [ "$action" != "help" ] && [ "$action" != "--help" ] && [ "$action" != "-h" ]; then
        echo -e "${RED}❌ エラー: spec_nameが指定されていません${NC}"
        echo "使用方法: $0 {action} spec_name [options]"
        echo ""
        echo "Commands:"
        echo "  init spec_name                    - コンテキストファイルを初期化"
        echo "  record-frontend spec_name         - フロントエンド完了情報を記録"
        echo "  record-backend spec_name          - バックエンド完了情報を記録"
        echo "  record-test spec_name {phpunit|e2e} - テスト結果を記録"
        echo "  show spec_name                    - コンテキストを表示"
        echo "  backend-requirements spec_name    - バックエンドが実装すべき項目を表示"
        exit 1
    fi

    case "$action" in
        init)
            init_context "$spec_name"
            ;;
        record-frontend)
            record_frontend_completion "$spec_name"
            ;;
        record-backend)
            record_backend_completion "$spec_name"
            ;;
        record-test)
            local test_type="$3"
            record_test_results "$spec_name" "$test_type"
            ;;
        show)
            show_context "$spec_name"
            ;;
        backend-requirements)
            get_backend_requirements "$spec_name"
            ;;
        help|--help|-h)
            echo "Usage: $0 {init|record-frontend|record-backend|record-test|show|backend-requirements} spec_name [options]"
            echo ""
            echo "Commands:"
            echo "  init spec_name                    - コンテキストファイルを初期化"
            echo "  record-frontend spec_name         - フロントエンド完了情報を記録"
            echo "  record-backend spec_name          - バックエンド完了情報を記録"
            echo "  record-test spec_name {phpunit|e2e} - テスト結果を記録"
            echo "  show spec_name                    - コンテキストを表示"
            echo "  backend-requirements spec_name    - バックエンドが実装すべき項目を表示"
            exit 0
            ;;
        *)
            echo "Usage: $0 {init|record-frontend|record-backend|record-test|show|backend-requirements} spec_name [options]"
            echo ""
            echo "Commands:"
            echo "  init spec_name                    - コンテキストファイルを初期化"
            echo "  record-frontend spec_name         - フロントエンド完了情報を記録"
            echo "  record-backend spec_name          - バックエンド完了情報を記録"
            echo "  record-test spec_name {phpunit|e2e} - テスト結果を記録"
            echo "  show spec_name                    - コンテキストを表示"
            echo "  backend-requirements spec_name    - バックエンドが実装すべき項目を表示"
            exit 1
            ;;
    esac
}

main "$@"
