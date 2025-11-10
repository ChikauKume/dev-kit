#!/bin/bash
# ワークフロー状態管理スクリプト
# Usage: ./dev-kit/scripts/workflow/state.sh {action} {spec_name} [options]

set -e

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
PROJECT_ROOT="$(cd "$SCRIPT_DIR/../../.." && pwd)"
STATE_DIR="$PROJECT_ROOT/dev-kit/state"
CONFIG_DIR="$PROJECT_ROOT/dev-kit/config"

# カラー定義
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

# YAMLパーサー（簡易版）
parse_yaml() {
    local file="$1"
    local prefix="$2"

    if [ ! -f "$file" ]; then
        echo "Error: File not found: $file" >&2
        return 1
    fi

    sed -n -e "s/^\($prefix\)\([^:]*\):[ ]*\(.*\)/\1\2=\3/p" "$file"
}

# 状態ファイルのパスを取得
get_state_file() {
    local spec_name="$1"
    echo "$STATE_DIR/workflow-${spec_name}.yml"
}

# 状態ファイルを初期化
init_state() {
    local spec_name="$1"
    local state_file=$(get_state_file "$spec_name")

    mkdir -p "$STATE_DIR"

    cat > "$state_file" <<EOF
# ワークフロー状態ファイル: $spec_name
# 自動生成日時: $(date -u +"%Y-%m-%dT%H:%M:%SZ")

spec_name: $spec_name
current_step: 1
retry_count: 0
total_retries: 0
status: initialized
started_at: "$(date -u +"%Y-%m-%dT%H:%M:%SZ")"
last_updated: "$(date -u +"%Y-%m-%dT%H:%M:%SZ")"
last_error: null

# ステップ履歴
history: []

# フラグ
flags:
  escalated: false
  paused: false
  completed: false
EOF

    echo -e "${GREEN}✅ 状態ファイルを初期化しました: $state_file${NC}"
}

# 状態を読み取る
read_state() {
    local spec_name="$1"
    local key="$2"
    local state_file=$(get_state_file "$spec_name")

    if [ ! -f "$state_file" ]; then
        echo "Error: State file not found: $state_file" >&2
        return 1
    fi

    if [ -z "$key" ]; then
        cat "$state_file"
    else
        grep "^$key:" "$state_file" | sed "s/^$key:[ ]*//" | sed 's/"//g'
    fi
}

# 状態を更新
update_state() {
    local spec_name="$1"
    local key="$2"
    local value="$3"
    local state_file=$(get_state_file "$spec_name")

    if [ ! -f "$state_file" ]; then
        echo "Error: State file not found: $state_file" >&2
        return 1
    fi

    # last_updated を常に更新
    local temp_file="${state_file}.tmp"

    # キーが存在するか確認
    if grep -q "^${key}:" "$state_file"; then
        # 既存のキーを更新
        sed "s|^${key}:.*|${key}: ${value}|" "$state_file" > "$temp_file"
    else
        # 新しいキーを追加
        echo "${key}: ${value}" >> "$state_file"
        cp "$state_file" "$temp_file"
    fi

    # last_updated を更新
    sed "s|^last_updated:.*|last_updated: \"$(date -u +"%Y-%m-%dT%H:%M:%SZ")\"|" "$temp_file" > "$state_file"
    rm "$temp_file"

    echo -e "${GREEN}✅ 状態を更新しました: ${key} = ${value}${NC}"
}

# ステップを進める
advance_step() {
    local spec_name="$1"
    local next_step="$2"
    local duration="${3:-0}"
    local state_file=$(get_state_file "$spec_name")

    local current_step=$(read_state "$spec_name" "current_step")

    # 履歴に追加
    local history_entry="  - step: ${current_step}\n    status: completed\n    duration: ${duration}\n    completed_at: \"$(date -u +"%Y-%m-%dT%H:%M:%SZ")\""

    # 履歴が空の場合
    if grep -q "^history: \[\]" "$state_file"; then
        sed "s|^history: \[\]|history:\n${history_entry}|" "$state_file" > "${state_file}.tmp"
        mv "${state_file}.tmp" "$state_file"
    else
        # 既存の履歴に追加
        echo -e "$history_entry" >> "$state_file"
    fi

    # ステップを更新
    update_state "$spec_name" "current_step" "$next_step"
    update_state "$spec_name" "retry_count" "0"

    echo -e "${GREEN}✅ ステップ ${current_step} → ${next_step} に進みました${NC}"
}

# エラーを記録
record_error() {
    local spec_name="$1"
    local error_message="$2"
    local exit_code="${3:-1}"
    local state_file=$(get_state_file "$spec_name")

    local current_step=$(read_state "$spec_name" "current_step")
    local retry_count=$(read_state "$spec_name" "retry_count")
    local total_retries=$(read_state "$spec_name" "total_retries")

    retry_count=$((retry_count + 1))
    total_retries=$((total_retries + 1))

    # エラー情報を更新
    update_state "$spec_name" "retry_count" "$retry_count"
    update_state "$spec_name" "total_retries" "$total_retries"
    update_state "$spec_name" "status" "failed"

    # last_error を更新（複数行対応）
    sed -i.bak "s|^last_error:.*|last_error:|" "$state_file"
    cat >> "$state_file" <<EOF
  step: $current_step
  message: "$error_message"
  exit_code: $exit_code
  occurred_at: "$(date -u +"%Y-%m-%dT%H:%M:%SZ")"
  retry_count: $retry_count
EOF
    rm "${state_file}.bak"

    echo -e "${RED}❌ エラーを記録しました (リトライ: ${retry_count})${NC}"
}

# ステータスを表示
show_status() {
    local spec_name="$1"
    local state_file=$(get_state_file "$spec_name")

    if [ ! -f "$state_file" ]; then
        echo -e "${YELLOW}⚠️  状態ファイルが見つかりません: $spec_name${NC}"
        return 1
    fi

    local current_step=$(read_state "$spec_name" "current_step")
    local status=$(read_state "$spec_name" "status")
    local retry_count=$(read_state "$spec_name" "retry_count")
    local started_at=$(read_state "$spec_name" "started_at")

    echo -e "${BLUE}━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━${NC}"
    echo -e "${BLUE}📊 ワークフロー状態: ${spec_name}${NC}"
    echo -e "${BLUE}━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━${NC}"
    echo -e "現在のステップ: Step ${current_step}"
    echo -e "ステータス: ${status}"
    echo -e "リトライ回数: ${retry_count}"
    echo -e "開始日時: ${started_at}"
    echo ""

    # 進捗率を計算
    local progress=$((current_step * 100 / 12))
    echo -e "全体進捗: ${progress}% (${current_step}/12 ステップ完了)"
    echo -e "${BLUE}━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━${NC}"
}

# リトライ上限チェック
check_retry_limit() {
    local spec_name="$1"
    local retry_count=$(read_state "$spec_name" "retry_count")
    local total_retries=$(read_state "$spec_name" "total_retries")

    # limits.ymlから設定を読み取る
    local per_step_limit=$(grep "per_step:" "$CONFIG_DIR/workflow-limits.yml" | awk '{print $2}')
    local total_limit=$(grep "total_workflow:" "$CONFIG_DIR/workflow-limits.yml" | awk '{print $2}')

    if [ "$retry_count" -ge "$per_step_limit" ]; then
        echo -e "${RED}❌ ステップのリトライ上限 (${per_step_limit}回) に達しました${NC}"
        return 1
    fi

    if [ "$total_retries" -ge "$total_limit" ]; then
        echo -e "${RED}❌ ワークフロー全体のリトライ上限 (${total_limit}回) に達しました${NC}"
        return 1
    fi

    return 0
}

# メイン処理
main() {
    local action="$1"
    local spec_name="$2"

    # パストラバーサル対策（spec_nameが指定されている場合）
    if [ -n "$spec_name" ] && [[ "$spec_name" =~ \.\./|^/ ]]; then
        echo -e "${RED}❌ エラー: 不正な仕様名が指定されています${NC}"
        exit 1
    fi

    case "$action" in
        init)
            init_state "$spec_name"
            ;;
        read)
            local key="$3"
            read_state "$spec_name" "$key"
            ;;
        update)
            local key="$3"
            local value="$4"
            update_state "$spec_name" "$key" "$value"
            ;;
        advance)
            local next_step="$3"
            local duration="$4"
            advance_step "$spec_name" "$next_step" "$duration"
            ;;
        error)
            local error_message="$3"
            local exit_code="$4"
            record_error "$spec_name" "$error_message" "$exit_code"
            ;;
        status)
            show_status "$spec_name"
            ;;
        check-limit)
            check_retry_limit "$spec_name"
            ;;
        *)
            echo "Usage: $0 {init|read|update|advance|error|status|check-limit} spec_name [options]"
            echo ""
            echo "Commands:"
            echo "  init spec_name              - 状態ファイルを初期化"
            echo "  read spec_name [key]        - 状態を読み取る"
            echo "  update spec_name key value  - 状態を更新"
            echo "  advance spec_name next_step [duration] - ステップを進める"
            echo "  error spec_name message [exit_code] - エラーを記録"
            echo "  status spec_name            - ステータスを表示"
            echo "  check-limit spec_name       - リトライ上限をチェック"
            exit 1
            ;;
    esac
}

main "$@"
