#!/bin/bash
# TDD Cycle Enforcer
# Forces Red → Green → Refactor cycle for a single checkpoint
#
# Usage:
#   ./dev-kit/scripts/tdd/enforce-cycle.sh <checkpoint-name>
#
# Example:
#   ./dev-kit/scripts/tdd/enforce-cycle.sh "Email validation - required rule"

set -e

PROJECT_ROOT="$(cd "$(dirname "${BASH_SOURCE[0]}")/../../.." && pwd)"
SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
CONFIG_FILE="$PROJECT_ROOT/dev-kit/config/tdd-checkpoints.yml"

cd "$PROJECT_ROOT"

# Color definitions
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

CHECKPOINT_NAME="${1:-}"

if [ -z "$CHECKPOINT_NAME" ]; then
    echo -e "${RED}Error: Checkpoint name required${NC}"
    echo "Usage: $0 <checkpoint-name>"
    echo ""
    echo "Available checkpoints:"
    yq '.checkpoints[].name' "$CONFIG_FILE" 2>/dev/null || echo "  (No checkpoints defined)"
    exit 1
fi

# Get checkpoint details from YAML
TEST_PATH=$(yq ".checkpoints[] | select(.name == \"$CHECKPOINT_NAME\") | .test" "$CONFIG_FILE")
CURRENT_STATUS=$(yq ".checkpoints[] | select(.name == \"$CHECKPOINT_NAME\") | .status" "$CONFIG_FILE")
NOTES=$(yq ".checkpoints[] | select(.name == \"$CHECKPOINT_NAME\") | .notes" "$CONFIG_FILE")

if [ -z "$TEST_PATH" ] || [ "$TEST_PATH" = "null" ]; then
    echo -e "${RED}Error: Checkpoint '$CHECKPOINT_NAME' not found${NC}"
    exit 1
fi

echo "========================================================================"
echo -e "${BLUE}🔄 TDD Cycle Enforcer${NC}"
echo "========================================================================"
echo ""
echo "Checkpoint: $CHECKPOINT_NAME"
echo "Test: $TEST_PATH"
echo "Current Status: $CURRENT_STATUS"
echo "Notes: $NOTES"
echo ""

# ========================================================================
# Step 1: RED Phase
# ========================================================================
echo "========================================================================"
echo -e "${RED}🔴 Phase 1: RED - Test Must Fail${NC}"
echo "========================================================================"
echo ""
echo "Instructions:"
echo "1. Write your test in: $TEST_PATH"
echo "2. Ensure the test FAILS (because implementation doesn't exist yet)"
echo ""
read -p "Press Enter when test is written and ready for RED verification..."

echo ""
echo "Running test to verify RED state..."
if ./vendor/bin/sail artisan test --filter="$TEST_PATH" 2>&1 | grep -q "PASSED"; then
    echo -e "${RED}❌ ERROR: Test is already GREEN!${NC}"
    echo ""
    echo "TDD Rule Violation: Tests must fail BEFORE implementation."
    echo "Please ensure you haven't implemented the feature yet."
    exit 1
else
    echo -e "${GREEN}✅ RED phase confirmed - Test fails as expected${NC}"
    # Update status to 'red'
    yq -i "(.checkpoints[] | select(.name == \"$CHECKPOINT_NAME\") | .status) = \"red\"" "$CONFIG_FILE"
fi

echo ""

# ========================================================================
# Step 2: GREEN Phase
# ========================================================================
echo "========================================================================"
echo -e "${GREEN}🟢 Phase 2: GREEN - Minimal Implementation${NC}"
echo "========================================================================"
echo ""
echo "Instructions:"
echo "1. Write MINIMAL code to make the test pass"
echo "2. Don't over-engineer or add extra features"
echo "3. Focus only on making THIS test green"
echo ""
read -p "Press Enter when implementation is complete and ready for GREEN verification..."

echo ""
echo "Running test to verify GREEN state..."
if ! ./vendor/bin/sail artisan test --filter="$TEST_PATH"; then
    echo -e "${RED}❌ ERROR: Test is still RED!${NC}"
    echo ""
    echo "Implementation incomplete. Please fix and try again."
    exit 1
else
    echo -e "${GREEN}✅ GREEN phase confirmed - Test passes${NC}"
    # Update status to 'green'
    yq -i "(.checkpoints[] | select(.name == \"$CHECKPOINT_NAME\") | .status) = \"green\"" "$CONFIG_FILE"
fi

echo ""

# ========================================================================
# Step 3: REFACTOR Phase (Optional)
# ========================================================================
echo "========================================================================"
echo -e "${YELLOW}🔧 Phase 3: REFACTOR - Improve Code Quality${NC}"
echo "========================================================================"
echo ""
echo "Instructions:"
echo "1. Review your implementation for code quality"
echo "2. Refactor if needed (keep tests green)"
echo "3. Run tests again to ensure nothing broke"
echo ""
read -p "Do you want to refactor? (y/n) " -n 1 -r
echo ""

if [[ $REPLY =~ ^[Yy]$ ]]; then
    echo ""
    read -p "Press Enter when refactoring is complete..."

    echo ""
    echo "Running test to verify refactoring didn't break anything..."
    if ! ./vendor/bin/sail artisan test --filter="$TEST_PATH"; then
        echo -e "${RED}❌ ERROR: Refactoring broke the test!${NC}"
        echo "Please fix and try again."
        exit 1
    else
        echo -e "${GREEN}✅ REFACTOR phase confirmed - Test still passes${NC}"
        # Update status to 'refactored'
        yq -i "(.checkpoints[] | select(.name == \"$CHECKPOINT_NAME\") | .status) = \"refactored\"" "$CONFIG_FILE"
    fi
else
    echo "Skipping refactor phase."
    # Still mark as refactored (no refactoring needed)
    yq -i "(.checkpoints[] | select(.name == \"$CHECKPOINT_NAME\") | .status) = \"refactored\"" "$CONFIG_FILE"
fi

echo ""
echo "========================================================================"
echo -e "${GREEN}✅✅✅ TDD CYCLE COMPLETE ✅✅✅${NC}"
echo "========================================================================"
echo ""
echo "Checkpoint '$CHECKPOINT_NAME' completed successfully!"
echo ""
echo "Next steps:"
echo "  1. Run: npm run tdd:next"
echo "  2. Or commit your changes: git add . && git commit"
echo ""
