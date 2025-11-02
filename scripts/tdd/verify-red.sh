#!/bin/bash
# Verify RED state for current checkpoint

set -e

PROJECT_ROOT="$(cd "$(dirname "${BASH_SOURCE[0]}")/../../.." && pwd)"
CONFIG_FILE="$PROJECT_ROOT/dev-kit/config/tdd-checkpoints.yml"

cd "$PROJECT_ROOT"

RED='\033[0;31m'
GREEN='\033[0;32m'
NC='\033[0m'

# Get first pending checkpoint
CHECKPOINT_NAME=$(yq '.checkpoints[] | select(.status == "pending") | .name' "$CONFIG_FILE" | head -1)

if [ -z "$CHECKPOINT_NAME" ]; then
    echo -e "${GREEN}No pending checkpoints${NC}"
    exit 0
fi

TEST_PATH=$(yq ".checkpoints[] | select(.name == \"$CHECKPOINT_NAME\") | .test" "$CONFIG_FILE")

echo "Verifying RED state for: $CHECKPOINT_NAME"
echo "Test: $TEST_PATH"
echo ""

if ./vendor/bin/sail artisan test --filter="$TEST_PATH" 2>&1 | grep -q "PASSED"; then
    echo -e "${RED}❌ Test is GREEN - TDD violation!${NC}"
    echo "Tests must FAIL before implementation."
    exit 1
else
    echo -e "${GREEN}✅ RED confirmed - Test fails as expected${NC}"
    yq -i "(.checkpoints[] | select(.name == \"$CHECKPOINT_NAME\") | .status) = \"red\"" "$CONFIG_FILE"
fi
