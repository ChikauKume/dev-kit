#!/bin/bash
# Verify GREEN state for current checkpoint

set -e

PROJECT_ROOT="$(cd "$(dirname "${BASH_SOURCE[0]}")/../../.." && pwd)"
CONFIG_FILE="$PROJECT_ROOT/dev-kit/config/tdd-checkpoints.yml"

cd "$PROJECT_ROOT"

RED='\033[0;31m'
GREEN='\033[0;32m'
NC='\033[0m'

# Get first red checkpoint
CHECKPOINT_NAME=$(yq '.checkpoints[] | select(.status == "red") | .name' "$CONFIG_FILE" | head -1)

if [ -z "$CHECKPOINT_NAME" ]; then
    echo -e "${RED}No RED checkpoints to verify${NC}"
    echo "Run 'npm run tdd:red' first"
    exit 1
fi

TEST_PATH=$(yq ".checkpoints[] | select(.name == \"$CHECKPOINT_NAME\") | .test" "$CONFIG_FILE")

echo "Verifying GREEN state for: $CHECKPOINT_NAME"
echo "Test: $TEST_PATH"
echo ""

if ! ./vendor/bin/sail artisan test --filter="$TEST_PATH"; then
    echo -e "${RED}❌ Test still fails - Implementation incomplete${NC}"
    exit 1
else
    echo -e "${GREEN}✅ GREEN confirmed - Test passes${NC}"
    yq -i "(.checkpoints[] | select(.name == \"$CHECKPOINT_NAME\") | .status) = \"green\"" "$CONFIG_FILE"
fi
