#!/bin/bash

# ============================================
# Locale Configuration Validation
# ============================================
# APP_LOCALEがjaに設定されているか、
# またバリデーションメッセージに英語が混在していないかチェック
# ============================================

set -e

PROJECT_ROOT="$(cd "$(dirname "${BASH_SOURCE[0]}")/../../.." && pwd)"

echo ""
echo "========================================================================"
echo -e "\033[0;34m🌐 Locale Configuration Validation\033[0m"
echo "========================================================================"
echo ""
echo "Principle: APP_LOCALE=ja（日本語バリデーションメッセージ）"
echo ""

HAS_ERROR=false

# ========================================================================
# Part 1: .env APP_LOCALE Check
# ========================================================================
echo -e "\033[0;34m📝 Part 1: .env APP_LOCALE Configuration\033[0m"
echo "------------------------------------------------------------------------"

if [ ! -f "$PROJECT_ROOT/.env" ]; then
    echo -e "\033[0;31m❌ .env file not found\033[0m"
    HAS_ERROR=true
else
    if grep -q "^APP_LOCALE=ja$" "$PROJECT_ROOT/.env"; then
        echo -e "\033[0;32m✅ APP_LOCALE correctly set to 'ja'\033[0m"
    elif grep -q "^APP_LOCALE=en$" "$PROJECT_ROOT/.env"; then
        echo -e "\033[0;31m❌ APP_LOCALE is set to 'en' (MUST be 'ja')\033[0m"
        echo "   This causes mixed English+Japanese validation messages"
        echo "   Example: 'The メールアドレス field is required.'"
        echo ""
        echo "   Fix: Change to APP_LOCALE=ja in .env"
        HAS_ERROR=true
    else
        LOCALE_VALUE=$(grep "^APP_LOCALE=" "$PROJECT_ROOT/.env" | cut -d'=' -f2)
        echo -e "\033[1;33m⚠️  APP_LOCALE is set to '$LOCALE_VALUE' (expected 'ja')\033[0m"
        HAS_ERROR=true
    fi
fi

echo ""

# ========================================================================
# Part 2: phpunit.xml APP_LOCALE Check
# ========================================================================
echo -e "\033[0;34m📝 Part 2: phpunit.xml APP_LOCALE Configuration\033[0m"
echo "------------------------------------------------------------------------"

if [ ! -f "$PROJECT_ROOT/phpunit.xml" ]; then
    echo -e "\033[0;31m❌ phpunit.xml not found\033[0m"
    HAS_ERROR=true
else
    if grep -q '<env name="APP_LOCALE" value="ja"/>' "$PROJECT_ROOT/phpunit.xml"; then
        echo -e "\033[0;32m✅ phpunit.xml APP_LOCALE correctly set to 'ja'\033[0m"
    elif grep -q '<env name="APP_LOCALE"' "$PROJECT_ROOT/phpunit.xml"; then
        LOCALE_VALUE=$(grep '<env name="APP_LOCALE"' "$PROJECT_ROOT/phpunit.xml" | sed 's/.*value="\([^"]*\)".*/\1/')
        echo -e "\033[0;31m❌ phpunit.xml APP_LOCALE is set to '$LOCALE_VALUE' (MUST be 'ja')\033[0m"
        HAS_ERROR=true
    else
        echo -e "\033[1;33m⚠️  APP_LOCALE not configured in phpunit.xml\033[0m"
        echo "   Tests will use .env value which may cause inconsistency"
        echo ""
        echo "   Add: <env name=\"APP_LOCALE\" value=\"ja\"/>"
        HAS_ERROR=true
    fi
fi

echo ""

# ========================================================================
# Part 3: Runtime Validation Message Test (Optional)
# ========================================================================
echo -e "\033[0;34m📝 Part 3: Runtime Validation Message Test\033[0m"
echo "------------------------------------------------------------------------"

# Laravel Artisan経由で実際のバリデーションメッセージを取得してチェック
if command -v php &> /dev/null && [ -f "$PROJECT_ROOT/artisan" ]; then
    # 簡易的なバリデーションメッセージ取得（emailルール）
    MESSAGE=$(php "$PROJECT_ROOT/artisan" tinker --execute="echo json_encode(__('validation.email', ['attribute' => 'メールアドレス']));" 2>/dev/null | tail -1 | tr -d '"')

    if [ -n "$MESSAGE" ]; then
        if echo "$MESSAGE" | grep -q "The.*field"; then
            echo -e "\033[0;31m❌ Validation messages contain English phrases\033[0m"
            echo "   Message: $MESSAGE"
            echo "   This indicates APP_LOCALE is not set to 'ja' properly"
            HAS_ERROR=true
        elif echo "$MESSAGE" | grep -q "メールアドレス"; then
            echo -e "\033[0;32m✅ Validation messages are in Japanese\033[0m"
            echo "   Example: $MESSAGE"
        fi
    else
        echo -e "\033[1;33m⚠️  Could not retrieve validation message (skipped)\033[0m"
    fi
else
    echo -e "\033[1;33m⚠️  PHP or artisan not found (skipped)\033[0m"
fi

echo ""

# ========================================================================
# Summary
# ========================================================================
echo "========================================================================"
echo -e "\033[0;34m📊 Locale Configuration Validation Summary\033[0m"
echo "========================================================================"
echo ""

if [ "$HAS_ERROR" = true ]; then
    echo -e "\033[0;31m❌❌❌ LOCALE VALIDATION FAILED ❌❌❌\033[0m"
    echo ""
    echo "CRITICAL: Fix APP_LOCALE configuration"
    echo ""
    echo "Required changes:"
    echo "  1. .env: APP_LOCALE=ja"
    echo "  2. phpunit.xml: <env name=\"APP_LOCALE\" value=\"ja\"/>"
    echo ""
    exit 1
else
    echo -e "\033[0;32m✅✅✅ ALL LOCALE CONFIGURATION CORRECT ✅✅✅\033[0m"
    echo ""
    exit 0
fi
