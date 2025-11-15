#!/bin/bash

# ========================================================================
# Phase 1: Task Status Display
# ========================================================================
#
# タスクベース開発のステータスを表示します
# Usage: ./phase1-show-status.sh <spec-name>
#
# Example: ./phase1-show-status.sh login
#

set -e

# Colors
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
CYAN='\033[0;36m'
NC='\033[0m' # No Color

# Project root (dev-kit/scripts/task -> dev-kit -> project root)
PROJECT_ROOT="$(cd "$(dirname "${BASH_SOURCE[0]}")/../../.." && pwd)"

# Spec name from argument
SPEC_NAME="$1"

if [ -z "$SPEC_NAME" ]; then
    echo -e "${RED}❌ Error: Spec name is required${NC}"
    echo "Usage: ./phase1-show-status.sh <spec-name>"
    echo "Example: ./phase1-show-status.sh login"
    exit 1
fi

TASKS_FILE="$PROJECT_ROOT/dev-kit/docs/specs/$SPEC_NAME/tasks.yaml"

if [ ! -f "$TASKS_FILE" ]; then
    echo -e "${RED}❌ Error: tasks.yaml not found${NC}"
    echo "Expected: $TASKS_FILE"
    exit 1
fi

# ========================================================================
# Parse tasks.yaml and display status
# ========================================================================

echo ""
echo -e "${CYAN}━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━${NC}"
echo -e "${BLUE}📊 タスク進捗: ${SPEC_NAME}${NC}"
echo -e "${CYAN}━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━${NC}"
echo ""

# Count tasks
TOTAL_TASKS=$(grep -c "^  - id: TASK-" "$TASKS_FILE" || echo "0")
COMPLETED_TASKS=$(grep -c "status: completed" "$TASKS_FILE" || echo "0")
PENDING_TASKS=$((TOTAL_TASKS - COMPLETED_TASKS))

# Calculate progress percentage
if [ "$TOTAL_TASKS" -gt 0 ]; then
    PROGRESS=$((COMPLETED_TASKS * 100 / TOTAL_TASKS))
else
    PROGRESS=0
fi

echo -e "${BLUE}進捗: ${COMPLETED_TASKS} / ${TOTAL_TASKS} タスク完了 (${PROGRESS}%)${NC}"
echo ""

# Parse and display each task
CURRENT_TASK_ID=""
CURRENT_TITLE=""
CURRENT_STATUS=""
CURRENT_PHASE=""
FOUND_NEXT_TASK=false

while IFS= read -r line; do
    # Parse task ID
    if echo "$line" | grep -q "^  - id: TASK-"; then
        # Print previous task if exists
        if [ -n "$CURRENT_TASK_ID" ]; then
            if [ "$CURRENT_STATUS" = "completed" ]; then
                echo -e "  ${GREEN}✅ $CURRENT_TASK_ID: $CURRENT_TITLE${NC}"
            elif [ "$CURRENT_STATUS" = "pending" ] && [ "$FOUND_NEXT_TASK" = false ]; then
                echo -e "  ${YELLOW}⏳ $CURRENT_TASK_ID: $CURRENT_TITLE${NC} ${CYAN}(次のタスク)${NC}"
                FOUND_NEXT_TASK=true
            elif [ "$CURRENT_STATUS" = "pending" ]; then
                echo -e "  ${CYAN}⏸️  $CURRENT_TASK_ID: $CURRENT_TITLE${NC}"
            fi
        fi

        # Start new task
        CURRENT_TASK_ID=$(echo "$line" | sed 's/.*id: //' | tr -d ' ')
        CURRENT_TITLE=""
        CURRENT_STATUS=""
        CURRENT_PHASE=""
    fi

    # Parse title
    if echo "$line" | grep -q "^    title:"; then
        CURRENT_TITLE=$(echo "$line" | sed 's/.*title: //')
    fi

    # Parse status
    if echo "$line" | grep -q "^    status:"; then
        CURRENT_STATUS=$(echo "$line" | sed 's/.*status: //' | tr -d ' ')
    fi

    # Parse phase
    if echo "$line" | grep -q "^    phase:"; then
        CURRENT_PHASE=$(echo "$line" | sed 's/.*phase: //' | tr -d ' ')
    fi
done < "$TASKS_FILE"

# Print last task
if [ -n "$CURRENT_TASK_ID" ]; then
    if [ "$CURRENT_STATUS" = "completed" ]; then
        echo -e "  ${GREEN}✅ $CURRENT_TASK_ID: $CURRENT_TITLE${NC}"
    elif [ "$CURRENT_STATUS" = "pending" ] && [ "$FOUND_NEXT_TASK" = false ]; then
        echo -e "  ${YELLOW}⏳ $CURRENT_TASK_ID: $CURRENT_TITLE${NC} ${CYAN}(次のタスク)${NC}"
    elif [ "$CURRENT_STATUS" = "pending" ]; then
        echo -e "  ${CYAN}⏸️  $CURRENT_TASK_ID: $CURRENT_TITLE${NC}"
    fi
fi

echo ""
echo -e "${CYAN}━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━${NC}"
echo ""

# Display summary
echo -e "${BLUE}📈 Summary:${NC}"
echo -e "  Completed: ${GREEN}$COMPLETED_TASKS${NC}"
echo -e "  Remaining: ${YELLOW}$PENDING_TASKS${NC}"
echo -e "  Total: ${BLUE}$TOTAL_TASKS${NC}"
echo ""

# Suggest next command
if [ "$PENDING_TASKS" -gt 0 ]; then
    echo -e "${YELLOW}💡 Next Steps:${NC}"
    echo -e "  次のタスク (⏳ マーク) を実装してください"
    echo -e "  完了したら、tasks.yaml の status を completed に更新してください"
    echo ""
fi
