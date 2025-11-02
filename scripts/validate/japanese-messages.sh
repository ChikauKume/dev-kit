#!/bin/bash
# 日本語メッセージ句点チェックスクリプト
# すべての日本語メッセージが句点（。）で終わることを検証

set -e

PROJECT_ROOT="$(cd "$(dirname "${BASH_SOURCE[0]}")/../../.." && pwd)"
cd "$PROJECT_ROOT"

# 色定義
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

echo ""
echo "========================================================================"
echo -e "${BLUE}🔍 Japanese Messages Period Check${NC}"
echo "========================================================================"
echo ""
echo "Principle: 日本語メッセージは句点（。）で終わる"
echo ""

EXIT_CODE=0
SPEC_NAME="${1:-}"

# ========================================================================
# Part 1: lang/ja/validation.php のメッセージチェック
# ========================================================================
echo -e "${BLUE}📝 Part 1: Validation Messages Check (lang/ja/validation.php)${NC}"
echo "------------------------------------------------------------------------"

VALIDATION_FILE="$PROJECT_ROOT/lang/ja/validation.php"

if [ -f "$VALIDATION_FILE" ]; then
    echo "Checking validation messages..."

    # メッセージ行を抽出（'key' => 'message' の形式）
    # 'attributes' セクションは除外（属性名は句点不要）
    ERRORS_FOUND=0
    LINE_NUM=0
    IN_ATTRIBUTES_SECTION=false

    while IFS= read -r line; do
        LINE_NUM=$((LINE_NUM + 1))

        # 'attributes' セクションの開始を検出
        if echo "$line" | grep -q "'attributes' =>"; then
            IN_ATTRIBUTES_SECTION=true
            continue
        fi

        # 'attributes' セクションの終了を検出（次のトップレベルキーまたはファイル終端）
        if [ "$IN_ATTRIBUTES_SECTION" = true ] && echo "$line" | grep -qE "^    \],?$"; then
            IN_ATTRIBUTES_SECTION=false
            continue
        fi

        # attributes セクション内はスキップ
        if [ "$IN_ATTRIBUTES_SECTION" = true ]; then
            continue
        fi

        # メッセージ行を検出（'=>' の後に日本語がある行）
        if echo "$line" | grep -q "=>" && echo "$line" | grep -qE '[ぁ-んァ-ヶー一-龠]+'; then
            # メッセージ部分を抽出
            MESSAGE=$(echo "$line" | sed "s/.*=> *'//" | sed "s/'.*//")

            # 空でない場合のみチェック
            if [ -n "$MESSAGE" ]; then
                # 句点で終わっているかチェック
                if ! echo "$MESSAGE" | grep -q '。$'; then
                    echo -e "${RED}❌ Line $LINE_NUM: Missing period (。)${NC}"
                    echo "   Message: $MESSAGE"
                    ERRORS_FOUND=$((ERRORS_FOUND + 1))
                    EXIT_CODE=1
                fi
            fi
        fi
    done < "$VALIDATION_FILE"

    if [ $ERRORS_FOUND -eq 0 ]; then
        echo -e "${GREEN}✅ All validation messages end with period (。)${NC}"
    else
        echo -e "${RED}❌ Found $ERRORS_FOUND validation message(s) without period (。)${NC}"
    fi
else
    echo -e "${YELLOW}⚠️  Validation file not found: $VALIDATION_FILE${NC}"
fi

echo ""

# ========================================================================
# Part 2: FormRequest カスタムメッセージチェック
# ========================================================================
echo -e "${BLUE}📝 Part 2: FormRequest Custom Messages Check${NC}"
echo "------------------------------------------------------------------------"

if [ -n "$SPEC_NAME" ]; then
    # specに基づいてモジュール名を推測
    MODULE_NAME=$(echo "$SPEC_NAME" | sed -E 's/user-([a-z]+)/User/' | sed 's/-//g' | awk '{print toupper(substr($0,1,1)) tolower(substr($0,2))}')

    REQUESTS_DIR="$PROJECT_ROOT/app/Modules/$MODULE_NAME/Presentation/Requests"

    if [ -d "$REQUESTS_DIR" ]; then
        echo "Checking FormRequest messages in: $REQUESTS_DIR"

        FORMREQUEST_FILES=$(find "$REQUESTS_DIR" -name "*Request.php" 2>/dev/null || true)

        if [ -n "$FORMREQUEST_FILES" ]; then
            for file in $FORMREQUEST_FILES; do
                echo ""
                echo "Analyzing: $(basename "$file")"

                # messages() メソッドの存在確認
                if grep -q "public function messages()" "$file"; then
                    echo -e "  ${BLUE}ℹ️  Has custom messages() method${NC}"

                    # messages()メソッド内のメッセージを抽出してチェック
                    MESSAGES_SECTION=$(sed -n '/public function messages()/,/^    }/p' "$file")

                    # 日本語メッセージを含む行を抽出
                    JAPANESE_LINES=$(echo "$MESSAGES_SECTION" | grep -E '[ぁ-んァ-ヶー一-龠]+' || true)

                    if [ -n "$JAPANESE_LINES" ]; then
                        ERRORS_IN_FILE=0

                        while IFS= read -r line; do
                            # メッセージ部分を抽出
                            if echo "$line" | grep -q "=>"; then
                                MESSAGE=$(echo "$line" | sed "s/.*=> *'//" | sed "s/'.*//")

                                if [ -n "$MESSAGE" ] && ! echo "$MESSAGE" | grep -q '。$'; then
                                    echo -e "  ${RED}❌ Missing period (。): $MESSAGE${NC}"
                                    ERRORS_IN_FILE=$((ERRORS_IN_FILE + 1))
                                    EXIT_CODE=1
                                fi
                            fi
                        done <<< "$JAPANESE_LINES"

                        if [ $ERRORS_IN_FILE -eq 0 ]; then
                            echo -e "  ${GREEN}✅ All custom messages end with period (。)${NC}"
                        else
                            echo -e "  ${RED}❌ Found $ERRORS_IN_FILE message(s) without period (。)${NC}"
                        fi
                    else
                        echo -e "  ${BLUE}ℹ️  No Japanese messages in custom messages${NC}"
                    fi
                else
                    echo -e "  ${BLUE}ℹ️  No custom messages() method${NC}"
                fi
            done
        else
            echo -e "${YELLOW}⚠️  No FormRequest files found${NC}"
        fi
    else
        echo -e "${YELLOW}⚠️  Requests directory not found: $REQUESTS_DIR${NC}"
    fi
else
    echo -e "${YELLOW}⚠️  No spec name provided, checking all modules${NC}"

    # すべてのモジュールをチェック
    MODULES_DIR="$PROJECT_ROOT/app/Modules"

    if [ -d "$MODULES_DIR" ]; then
        for module_dir in "$MODULES_DIR"/*; do
            if [ -d "$module_dir/Presentation/Requests" ]; then
                MODULE_NAME=$(basename "$module_dir")
                echo ""
                echo "Checking module: $MODULE_NAME"

                FORMREQUEST_FILES=$(find "$module_dir/Presentation/Requests" -name "*Request.php" 2>/dev/null || true)

                for file in $FORMREQUEST_FILES; do
                    if grep -q "public function messages()" "$file"; then
                        echo "  Checking: $(basename "$file")"

                        MESSAGES_SECTION=$(sed -n '/public function messages()/,/^    }/p' "$file")
                        JAPANESE_LINES=$(echo "$MESSAGES_SECTION" | grep -E '[ぁ-んァ-ヶー一-龠]+' || true)

                        if [ -n "$JAPANESE_LINES" ]; then
                            while IFS= read -r line; do
                                if echo "$line" | grep -q "=>"; then
                                    MESSAGE=$(echo "$line" | sed "s/.*=> *'//" | sed "s/'.*//")

                                    if [ -n "$MESSAGE" ] && ! echo "$MESSAGE" | grep -q '。$'; then
                                        echo -e "    ${RED}❌ Missing period (。): $MESSAGE${NC}"
                                        EXIT_CODE=1
                                    fi
                                fi
                            done <<< "$JAPANESE_LINES"
                        fi
                    fi
                done
            fi
        done
    fi
fi

echo ""

# ========================================================================
# Part 3: Controller Flash メッセージチェック
# ========================================================================
echo -e "${BLUE}📝 Part 3: Controller Flash Messages Check${NC}"
echo "------------------------------------------------------------------------"

if [ -n "$SPEC_NAME" ] && [ -n "$MODULE_NAME" ]; then
    CONTROLLERS_DIR="$PROJECT_ROOT/app/Modules/$MODULE_NAME/Presentation/Controllers"

    if [ -d "$CONTROLLERS_DIR" ]; then
        echo "Checking Controller flash messages in: $CONTROLLERS_DIR"

        CONTROLLER_FILES=$(find "$CONTROLLERS_DIR" -name "*Controller.php" 2>/dev/null || true)

        if [ -n "$CONTROLLER_FILES" ]; then
            for file in $CONTROLLER_FILES; do
                # flash/with メソッドを含む行を検索
                FLASH_LINES=$(grep -nE "(->flash\(|->with\()" "$file" | grep -E '[ぁ-んァ-ヶー一-龠]+' || true)

                if [ -n "$FLASH_LINES" ]; then
                    echo ""
                    echo "Analyzing: $(basename "$file")"

                    ERRORS_IN_FILE=0

                    while IFS= read -r line; do
                        # メッセージ部分を抽出
                        MESSAGE=$(echo "$line" | sed "s/.*['\"]\\([^'\"]*[ぁ-んァ-ヶー一-龠][^'\"]*\\)['\"].*/\\1/" || true)

                        if [ -n "$MESSAGE" ] && ! echo "$MESSAGE" | grep -q '。$'; then
                            LINE_NUM=$(echo "$line" | cut -d: -f1)
                            echo -e "  ${RED}❌ Line $LINE_NUM: Missing period (。)${NC}"
                            echo "     Message: $MESSAGE"
                            ERRORS_IN_FILE=$((ERRORS_IN_FILE + 1))
                            EXIT_CODE=1
                        fi
                    done <<< "$FLASH_LINES"

                    if [ $ERRORS_IN_FILE -eq 0 ]; then
                        echo -e "  ${GREEN}✅ All flash messages end with period (。)${NC}"
                    else
                        echo -e "  ${RED}❌ Found $ERRORS_IN_FILE flash message(s) without period (。)${NC}"
                    fi
                fi
            done
        else
            echo -e "${YELLOW}⚠️  No Controller files found${NC}"
        fi
    else
        echo -e "${YELLOW}⚠️  Controllers directory not found: $CONTROLLERS_DIR${NC}"
    fi
else
    echo -e "${YELLOW}⚠️  No spec name provided, checking all modules${NC}"

    MODULES_DIR="$PROJECT_ROOT/app/Modules"

    if [ -d "$MODULES_DIR" ]; then
        for module_dir in "$MODULES_DIR"/*; do
            if [ -d "$module_dir/Presentation/Controllers" ]; then
                CONTROLLER_FILES=$(find "$module_dir/Presentation/Controllers" -name "*Controller.php" 2>/dev/null || true)

                for file in $CONTROLLER_FILES; do
                    FLASH_LINES=$(grep -nE "(->flash\(|->with\()" "$file" | grep -E '[ぁ-んァ-ヶー一-龠]+' || true)

                    if [ -n "$FLASH_LINES" ]; then
                        while IFS= read -r line; do
                            MESSAGE=$(echo "$line" | sed "s/.*['\"]\\([^'\"]*[ぁ-んァ-ヶー一-龠][^'\"]*\\)['\"].*/\\1/" || true)

                            if [ -n "$MESSAGE" ] && ! echo "$MESSAGE" | grep -q '。$'; then
                                echo -e "${RED}❌ $(basename "$file"): Missing period (。) - $MESSAGE${NC}"
                                EXIT_CODE=1
                            fi
                        done <<< "$FLASH_LINES"
                    fi
                done
            fi
        done
    fi
fi

echo ""

# ========================================================================
# 最終サマリー
# ========================================================================
echo "========================================================================"
echo -e "${BLUE}📊 Japanese Messages Validation Summary${NC}"
echo "========================================================================"
echo ""

if [ $EXIT_CODE -eq 0 ]; then
    echo -e "${GREEN}✅✅✅ ALL JAPANESE MESSAGES END WITH PERIOD (。) ✅✅✅${NC}"
    echo ""
    echo "Principle validated: 日本語メッセージは句点（。）で終わる"
    echo ""
else
    echo -e "${RED}❌❌❌ JAPANESE MESSAGE VALIDATION FAILED ❌❌❌${NC}"
    echo ""
    echo "CRITICAL: All Japanese messages must end with period (。)"
    echo ""
    echo "Checked locations:"
    echo "  - lang/ja/validation.php"
    echo "  - FormRequest messages() methods"
    echo "  - Controller flash/with messages"
    echo ""
    echo "Fix all messages to end with 。 before proceeding."
    echo ""
fi

echo "========================================================================"

exit $EXIT_CODE
