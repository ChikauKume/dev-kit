#!/bin/bash
# Display next TDD checkpoint

PROJECT_ROOT="$(cd "$(dirname "${BASH_SOURCE[0]}")/../../.." && pwd)"
CONFIG_FILE="$PROJECT_ROOT/dev-kit/config/tdd-checkpoints.yml"

BLUE='\033[0;34m'
YELLOW='\033[1;33m'
GREEN='\033[0;32m'
NC='\033[0m'

# Get current feature
FEATURE=$(yq '.feature' "$CONFIG_FILE")

echo "========================================================================"
echo -e "${BLUE}📋 TDD Progress - Feature: $FEATURE${NC}"
echo "========================================================================"
echo ""

# Show all checkpoints with status
yq -r '.checkpoints[] | "[\(.status)] \(.name)"' "$CONFIG_FILE" | while IFS= read -r line; do
    if echo "$line" | grep -q "\[pending\]"; then
        echo -e "${YELLOW}⏳ $line${NC}"
    elif echo "$line" | grep -q "\[red\]"; then
        echo -e "\033[0;31m🔴 $line${NC}"
    elif echo "$line" | grep -q "\[green\]"; then
        echo -e "${GREEN}🟢 $line${NC}"
    elif echo "$line" | grep -q "\[refactored\]"; then
        echo -e "${GREEN}✅ $line${NC}"
    fi
done

echo ""

# Get next pending checkpoint
NEXT=$(yq '.checkpoints[] | select(.status == "pending") | .name' "$CONFIG_FILE" | head -1)

if [ -z "$NEXT" ]; then
    echo -e "${GREEN}🎉 All checkpoints completed!${NC}"
else
    echo "========================================================================"
    echo -e "${BLUE}🎯 Next Checkpoint: $NEXT${NC}"
    echo "========================================================================"
    echo ""
    NOTES=$(yq ".checkpoints[] | select(.name == \"$NEXT\") | .notes" "$CONFIG_FILE")
    echo "Notes: $NOTES"
    echo ""
    echo "To start this checkpoint:"
    echo "  npm run tdd:cycle \"$NEXT\""
fi
