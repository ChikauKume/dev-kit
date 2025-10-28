#!/bin/bash
################################################################################
# 統合検証スクリプト（フロント・バックエンド両方）
# 用途: design.md を唯一の真実として、全ステップを検証
# 使用方法: ./scripts/validate.sh [step_number|all]
# 終了コード: 0=合格, 1=不合格
################################################################################

set -e

PROJECT_ROOT="/Users/chikau/dev/chikau/spec-workflow"
cd "$PROJECT_ROOT"

# 色付き出力
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m'

# 結果表示用
TOTAL_CHECKS=0
PASSED_CHECKS=0
FAILED_CHECKS=0

# チェック結果を記録
check_result() {
    local name="$1"
    local expected="$2"
    local actual="$3"
    local comparison="${4:-eq}"

    TOTAL_CHECKS=$((TOTAL_CHECKS + 1))

    case $comparison in
        eq)
            if [ "$actual" -eq "$expected" ]; then
                echo -e "${GREEN}✅ PASS${NC}: $name (期待: $expected, 実際: $actual)"
                PASSED_CHECKS=$((PASSED_CHECKS + 1))
                return 0
            else
                echo -e "${RED}❌ FAIL${NC}: $name (期待: $expected, 実際: $actual)"
                FAILED_CHECKS=$((FAILED_CHECKS + 1))
                return 1
            fi
            ;;
        ge)
            if [ "$actual" -ge "$expected" ]; then
                echo -e "${GREEN}✅ PASS${NC}: $name (期待: >=$expected, 実際: $actual)"
                PASSED_CHECKS=$((PASSED_CHECKS + 1))
                return 0
            else
                echo -e "${RED}❌ FAIL${NC}: $name (期待: >=$expected, 実際: $actual)"
                FAILED_CHECKS=$((FAILED_CHECKS + 1))
                return 1
            fi
            ;;
        le)
            if [ "$actual" -le "$expected" ]; then
                echo -e "${GREEN}✅ PASS${NC}: $name (期待: <=$expected, 実際: $actual)"
                PASSED_CHECKS=$((PASSED_CHECKS + 1))
                return 0
            else
                echo -e "${RED}❌ FAIL${NC}: $name (期待: <=$expected, 実際: $actual)"
                FAILED_CHECKS=$((FAILED_CHECKS + 1))
                return 1
            fi
            ;;
    esac
}

calculate_score() {
    if [ "$TOTAL_CHECKS" -eq 0 ]; then
        echo "0"
    else
        echo $(( (PASSED_CHECKS * 100) / TOTAL_CHECKS ))
    fi
}

################################################################################
# Step 1: フロントエンド実装検証
################################################################################
validate_step_1() {
    echo "=========================================="
    echo "Step 1: フロントエンド実装検証"
    echo "=========================================="

    TOTAL_CHECKS=0
    PASSED_CHECKS=0
    FAILED_CHECKS=0

    # 1. ./dev-kit/scripts/validations/frontend.sh
    echo "チェック 1/6: ./dev-kit/scripts/validations/frontend.sh 実行中..."
    if ./dev-kit/scripts/validations/frontend.sh > /tmp/check-frontend.log 2>&1; then
        check_result "./dev-kit/scripts/validations/frontend.sh" 0 0 "eq"
    else
        check_result "./dev-kit/scripts/validations/frontend.sh" 0 1 "eq"
    fi

    # 2. TypeScript コンパイル
    echo "チェック 2/6: TypeScript コンパイルエラー確認..."
    ./vendor/bin/sail npm run build > /tmp/ts-build.log 2>&1 || true
    TS_ERRORS=$(grep -c "error TS" /tmp/ts-build.log || echo "0")
    check_result "TypeScript エラー数" 0 "$TS_ERRORS" "eq"

    # 3. Tailwind CSS 残存確認
    echo "チェック 3/6: Tailwind CSS 残存確認..."
    TAILWIND_COUNT=$(grep -r "tailwind" package.json resources/css/ 2>/dev/null | wc -l | tr -d ' ')
    check_result "Tailwind CSS 残存" 0 "$TAILWIND_COUNT" "eq"

    # 4. useDynamicForm 使用確認
    echo "チェック 4/6: useDynamicForm 使用確認..."
    DYNAMIC_FORM_COUNT=$(grep -r "useDynamicForm" resources/js/Pages --include="*.tsx" 2>/dev/null | wc -l | tr -d ' ')
    check_result "useDynamicForm 使用数" 6 "$DYNAMIC_FORM_COUNT" "ge"

    # 5. カスタムコンポーネント検出
    echo "チェック 5/6: カスタムコンポーネント検出..."
    CUSTOM_COMPONENTS=$(find resources/js/Components -name "*.tsx" 2>/dev/null | wc -l | tr -d ' ')
    check_result "カスタムコンポーネント数" 0 "$CUSTOM_COMPONENTS" "eq"

    # 6. Playwright テスト成功数
    echo "チェック 6/6: Playwright テスト成功数..."
    FRONTEND_SUCCESS=$(grep -l "✅ SUCCESS\|PASS\|RESULT: PASS" logs/playwright-frontend-*.log 2>/dev/null | wc -l | tr -d ' ')
    check_result "Playwright テスト成功数" 8 "$FRONTEND_SUCCESS" "ge"

    return $([ "$FAILED_CHECKS" -eq 0 ] && echo 0 || echo 1)
}

################################################################################
# Step 2: フロントエンド Playwright テスト検証
################################################################################
validate_step_2() {
    echo "=========================================="
    echo "Step 2: フロントエンド Playwright テスト検証"
    echo "=========================================="

    TOTAL_CHECKS=0
    PASSED_CHECKS=0
    FAILED_CHECKS=0

    echo "チェック 1/3: テストログ存在確認..."
    LOG_COUNT=$(ls logs/playwright-frontend-*.log 2>/dev/null | wc -l | tr -d ' ')
    check_result "テストログファイル数" 8 "$LOG_COUNT" "ge"

    echo "チェック 2/3: スクリーンショット数確認..."
    SCREENSHOT_COUNT=$(ls docs/test-reports/screenshots/user-authentication/frontend-*.png 2>/dev/null | wc -l | tr -d ' ')
    check_result "スクリーンショット数" 8 "$SCREENSHOT_COUNT" "ge"

    echo "チェック 3/3: テスト成功数確認..."
    SUCCESS_COUNT=$(grep -l "✅ SUCCESS\|PASS\|RESULT: PASS" logs/playwright-frontend-*.log 2>/dev/null | wc -l | tr -d ' ')
    check_result "成功テスト数" 8 "$SUCCESS_COUNT" "ge"

    return $([ "$FAILED_CHECKS" -eq 0 ] && echo 0 || echo 1)
}

################################################################################
# Step 3: バックエンド実装検証
################################################################################
validate_step_3() {
    echo "=========================================="
    echo "Step 3: バックエンド実装検証"
    echo "=========================================="

    TOTAL_CHECKS=0
    PASSED_CHECKS=0
    FAILED_CHECKS=0

    echo "チェック 1/6: Domain レイヤーファイル確認..."
    DOMAIN_FILES=$(find app/Modules/User/Domain -name "*.php" 2>/dev/null | wc -l | tr -d ' ')
    check_result "Domain レイヤーファイル数" 4 "$DOMAIN_FILES" "ge"

    echo "チェック 2/6: Application レイヤーファイル確認..."
    APP_FILES=$(find app/Modules/User/Application -name "*.php" 2>/dev/null | wc -l | tr -d ' ')
    check_result "Application レイヤーファイル数" 4 "$APP_FILES" "ge"

    echo "チェック 3/6: Infrastructure レイヤーファイル確認..."
    INFRA_FILES=$(find app/Modules/User/Infrastructure -name "*.php" 2>/dev/null | wc -l | tr -d ' ')
    check_result "Infrastructure レイヤーファイル数" 2 "$INFRA_FILES" "ge"

    echo "チェック 4/6: Presentation レイヤーファイル確認..."
    PRES_FILES=$(find app/Modules/User/Presentation -name "*.php" 2>/dev/null | wc -l | tr -d ' ')
    check_result "Presentation レイヤーファイル数" 4 "$PRES_FILES" "ge"

    echo "チェック 5/6: ルート登録数確認..."
    ROUTE_COUNT=$(./vendor/bin/sail artisan route:list 2>/dev/null | grep -c "signup\|login\|forgot-password\|reset-password" || echo "0")
    check_result "登録ルート数" 8 "$ROUTE_COUNT" "ge"

    echo "チェック 6/6: マイグレーションファイル確認..."
    MIGRATION_COUNT=$(ls database/migrations/*_create_users_table.php database/migrations/*_password_reset*.php 2>/dev/null | wc -l | tr -d ' ')
    check_result "マイグレーションファイル数" 2 "$MIGRATION_COUNT" "ge"

    # ルート不整合の詳細検出
    echo ""
    echo "=========================================="
    echo "design.md との整合性確認"
    echo "=========================================="

    # CRITICAL-005: /register ルート検出（design.md は /signup）
    REGISTER_ROUTE_COUNT=$(./vendor/bin/sail artisan route:list 2>/dev/null | grep -c "register" || echo "0")
    if [ "$REGISTER_ROUTE_COUNT" -gt 0 ]; then
        echo ""
        echo -e "${RED}🔴 CRITICAL-005: 非推奨ルート /register 検出${NC}"
        echo "   📁 場所: app/Modules/User/routes.php または routes/web.php"
        echo "   🔍 原因: design.md では新規登録は /signup だが、/register が存在"
        echo "   💥 影響: フロントエンド Register.tsx が /register に送信して 404 エラー"
        echo "   ✅ 推奨修正:"
        echo "      1. resources/js/Pages/Auth/Register.tsx で router.post('/signup/confirm') に変更"
        echo "      2. /register ルートを削除（冗長）"
        echo "      3. design.md を絶対的な正として /signup のみを使用"
        ./vendor/bin/sail artisan route:list 2>/dev/null | grep "register"
    fi

    # CRITICAL-006: /password/email ルート検出（design.md は /forgot-password）
    PASSWORD_EMAIL_ROUTE=$(./vendor/bin/sail artisan route:list 2>/dev/null | grep -c "password/email" || echo "0")
    if [ "$PASSWORD_EMAIL_ROUTE" -gt 0 ]; then
        echo ""
        echo -e "${RED}🔴 CRITICAL-006: 非推奨ルート /password/email 検出${NC}"
        echo "   📁 場所: routes/auth.php または routes/web.php"
        echo "   🔍 原因: design.md ではパスワードリセットは /forgot-password"
        echo "   💥 影響: ForgotPassword.tsx が /password/email に送信して 404 エラー"
        echo "   ✅ 推奨修正:"
        echo "      1. resources/js/Pages/Auth/ForgotPassword.tsx の form action を /forgot-password に変更"
        echo "      2. /password/email ルートを削除（冗長）"
        ./vendor/bin/sail artisan route:list 2>/dev/null | grep "password/email"
    fi

    # CRITICAL-009: HTMLネイティブバリデーション属性の使用検出
    HTML_VALIDATION_COUNT=$(grep -r "required\|type=\"email\"\|minlength\|maxlength\|pattern" resources/js/Pages --include="*.tsx" 2>/dev/null | grep -v "// @ts-ignore" | wc -l | tr -d ' ')
    if [ "$HTML_VALIDATION_COUNT" -gt 0 ]; then
        echo ""
        echo -e "${RED}🔴 CRITICAL-009: HTMLネイティブバリデーション属性の使用検出 (${HTML_VALIDATION_COUNT}箇所)${NC}"
        echo "   📁 場所: resources/js/Pages/**/*.tsx"
        echo "   🔍 原因: HTMLネイティブバリデーション属性（required, type=\"email\", minlength等）を使用"
        echo "   💥 影響: tech.md 違反、バリデーションロジック分散、エラーメッセージ不統一"
        echo "   ✅ 推奨修正:"
        echo "      1. すべての required, type=\"email\", minlength, maxlength, pattern 属性を削除"
        echo "      2. useDynamicValidation フックでバリデーションルールを定義"
        echo "      3. 参照: tech.md - 'HTMLネイティブのバリデーション属性は使用禁止'"
        grep -rn "required\|type=\"email\"\|minlength\|maxlength\|pattern" resources/js/Pages --include="*.tsx" 2>/dev/null | grep -v "// @ts-ignore" | head -5
    fi

    # CRITICAL-011: ServiceProvider 登録漏れ検出
    if [ -f "config/app.php" ]; then
        SERVICE_PROVIDER_REGISTERED=$(grep -c "UserServiceProvider" config/app.php || echo "0")
        if [ "$SERVICE_PROVIDER_REGISTERED" -eq 0 ]; then
            echo ""
            echo -e "${RED}🔴 CRITICAL-011: UserServiceProvider 登録漏れ${NC}"
            echo "   📁 場所: config/app.php"
            echo "   🔍 原因: App\Modules\User\Providers\UserServiceProvider が providers 配列に未登録"
            echo "   💥 影響: Repository の DI が動作せず、ControllerでUserRepositoryInterfaceが解決できない"
            echo "   ✅ 推奨修正:"
            echo "      1. config/app.php の 'providers' 配列に追加:"
            echo "         App\Modules\User\Providers\UserServiceProvider::class,"
        fi
    fi

    # 警告-001: CSS読込設定の未確認
    if [ -f "resources/js/app.tsx" ]; then
        CSS_IMPORT_EXISTS=$(grep -c "@/\dev-kit/ui-components/src/index\.css" resources/js/app.tsx || echo "0")
        if [ "$CSS_IMPORT_EXISTS" -eq 0 ]; then
            echo ""
            echo -e "${YELLOW}⚠️  警告-001: dev-kit/ui-components CSS読込設定が未確認${NC}"
            echo "   📁 場所: resources/js/app.tsx"
            echo "   🔍 原因: import '@/dev-kit/ui-components/src/index.css'; が存在しない"
            echo "   💥 影響: dev-kit/ui-components のスタイルが適用されない"
            echo "   ✅ 推奨修正:"
            echo "      1. resources/js/app.tsx の先頭に以下を追加:"
            echo "         import '@/dev-kit/ui-components/src/index.css';"
        fi
    fi

    return $([ "$FAILED_CHECKS" -eq 0 ] && echo 0 || echo 1)
}

################################################################################
# Step 4: バックエンドテスト検証（最重要）
################################################################################
validate_step_4() {
    echo "=========================================="
    echo "Step 4: バックエンドテスト検証（最重要）"
    echo "=========================================="

    TOTAL_CHECKS=0
    PASSED_CHECKS=0
    FAILED_CHECKS=0

    echo "チェック 1/5: バックエンドテスト実行中..."
    ./vendor/bin/sail artisan test > /tmp/phpunit-result.log 2>&1 || true

    echo "チェック 2/5: 失敗テスト数確認..."
    FAILED_TESTS=$(grep -oE "[0-9]+ failed" /tmp/phpunit-result.log | grep -oE "[0-9]+" || echo "0")
    check_result "失敗テスト数" 0 "$FAILED_TESTS" "eq"

    echo "チェック 3/5: 合格テスト数確認..."
    PASSED_TESTS=$(grep -oE "[0-9]+ passed" /tmp/phpunit-result.log | grep -oE "[0-9]+" || echo "0")
    check_result "合格テスト数" 1 "$PASSED_TESTS" "ge"

    echo "チェック 4/5: 合格率計算..."
    if [ "$PASSED_TESTS" -gt 0 ]; then
        TOTAL_TESTS=$((PASSED_TESTS + FAILED_TESTS))
        PASS_RATE=$(( (PASSED_TESTS * 100) / TOTAL_TESTS ))
        check_result "テスト合格率（%）" 100 "$PASS_RATE" "eq"
    else
        check_result "テスト合格率（%）" 100 0 "eq"
    fi

    echo "チェック 5/5: テストファイル数確認..."
    TEST_FILES=$(find tests/Unit/Modules/User tests/Feature/Modules/User -name "*Test.php" 2>/dev/null | wc -l | tr -d ' ')
    check_result "テストファイル数" 8 "$TEST_FILES" "ge"

    # 失敗テストがある場合は詳細分析を実施
    if [ "$FAILED_TESTS" -gt 0 ]; then
        echo ""
        echo "=========================================="
        echo "エラー原因の詳細分析"
        echo "=========================================="

        # CRITICAL-002: UserData DTO null エラー検出
        NULL_ID_COUNT=$(grep -c "User ID must not be null" /tmp/phpunit-result.log || echo "0")
        if [ "$NULL_ID_COUNT" -gt 0 ]; then
            echo ""
            echo -e "${RED}🔴 CRITICAL-002: UserData DTO null ID エラー (${NULL_ID_COUNT}件検出)${NC}"
            echo "   📁 場所: app/Modules/User/Application/DTOs/UserData.php:35"
            echo "   🔍 原因: User Entity の ID が null のまま UserData DTO に渡されている"
            echo "   💥 影響範囲: LoginUserTest, CreateUserUseCaseTest など複数のテスト"
            echo "   ✅ 推奨修正:"
            echo "      1. UserData::fromEntity() で null ID をチェック"
            echo "      2. User Entity 生成時に ID を必ず設定"
            echo "      3. または DTO 側で null 許容にして呼び出し側で判定"
        fi

        # CRITICAL-003: パスワードハッシュ設定エラー検出
        HASH_CONFIG_COUNT=$(grep -c "Could not verify the hashed value's configuration" /tmp/phpunit-result.log || echo "0")
        if [ "$HASH_CONFIG_COUNT" -gt 0 ]; then
            echo ""
            echo -e "${RED}🔴 CRITICAL-003: パスワードハッシュ設定エラー (${HASH_CONFIG_COUNT}件検出)${NC}"
            echo "   📁 場所: app/Modules/User/Domain/ValueObjects/HashedPassword.php"
            echo "   🔍 原因: bcrypt 設定の不一致またはハッシュアルゴリズム不整合"
            echo "   💥 影響範囲: PasswordResetControllerTest::failsToResetPasswordWithUsedToken など"
            echo "   ✅ 推奨修正:"
            echo "      1. config/hashing.php で bcrypt 設定を確認"
            echo "      2. Hash::make() と Hash::check() の整合性を確認"
            echo "      3. テストでのハッシュ生成方法を本番と統一"
        fi

        # CRITICAL-004: バリデーションメッセージ言語混在エラー検出
        VALIDATION_LANG_COUNT=$(grep -c "The メールアドレス field must not be greater than" /tmp/phpunit-result.log || echo "0")
        if [ "$VALIDATION_LANG_COUNT" -gt 0 ]; then
            echo ""
            echo -e "${RED}🔴 CRITICAL-004: バリデーションメッセージ言語混在 (${VALIDATION_LANG_COUNT}件検出)${NC}"
            echo "   📁 場所: lang/ja/validation.php (不完全な日本語化)"
            echo "   🔍 原因: Laravel デフォルトの英語メッセージが残存している"
            echo "   💥 影響範囲: PasswordResetControllerTest, AuthControllerTest など"
            echo "   ✅ 推奨修正:"
            echo "      1. lang/ja/validation.php に 'max.string' の翻訳を追加"
            echo "         'max' => ['string' => ':attributeは:max文字以内で入力してください。']"
            echo "      2. config/app.php で locale='ja', fallback_locale='ja' を確認"
            echo "      3. FormRequest で attributes() メソッドを実装"
        fi

        # その他のエラーパターン検出
        UNKNOWN_TYPE_COUNT=$(grep -c "UnknownTypeException" /tmp/phpunit-result.log || echo "0")
        if [ "$UNKNOWN_TYPE_COUNT" -gt 0 ]; then
            echo ""
            echo -e "${YELLOW}⚠️  その他のエラー: UnknownTypeException (${UNKNOWN_TYPE_COUNT}件検出)${NC}"
            echo "   💥 影響範囲: SendPasswordResetLinkTest など"
            echo "   ✅ 推奨: ログを確認して型定義を修正"
        fi

        # 修正優先順位の提示
        echo ""
        echo "=========================================="
        echo "推奨される修正順序（影響度順）"
        echo "=========================================="

        if [ "$NULL_ID_COUNT" -gt 0 ]; then
            echo "1️⃣  CRITICAL-002 (UserData DTO null ID) を修正"
            echo "   → 修正後に合格見込み: 約 ${NULL_ID_COUNT} 件のテスト"
        fi

        if [ "$HASH_CONFIG_COUNT" -gt 0 ]; then
            echo "2️⃣  CRITICAL-003 (パスワードハッシュ設定) を修正"
            echo "   → 修正後に合格見込み: 約 ${HASH_CONFIG_COUNT} 件のテスト"
        fi

        if [ "$VALIDATION_LANG_COUNT" -gt 0 ]; then
            echo "3️⃣  CRITICAL-004 (バリデーションメッセージ) を修正"
            echo "   → 修正後に合格見込み: 約 ${VALIDATION_LANG_COUNT} 件のテスト"
        fi

        if [ "$UNKNOWN_TYPE_COUNT" -gt 0 ]; then
            echo "4️⃣  その他のエラー (UnknownTypeException等) を修正"
            echo "   → 修正後に合格見込み: 約 ${UNKNOWN_TYPE_COUNT} 件のテスト"
        fi

        echo ""
        echo "📊 修正完了後の期待値:"
        echo "   現在: ${PASSED_TESTS}/${TOTAL_TESTS} 合格 (${PASS_RATE}%)"
        echo "   目標: ${TOTAL_TESTS}/${TOTAL_TESTS} 合格 (100%)"
        echo ""
    fi

    # CRITICAL-013: ValidationException 握りつぶし検出
    echo ""
    echo "=========================================="
    echo "ValidationException 握りつぶしチェック"
    echo "=========================================="
    VALIDATION_CATCH_COUNT=$(grep -r "catch.*ValidationException" app/Modules/User/Application/UseCases 2>/dev/null | wc -l | tr -d ' ')
    if [ "$VALIDATION_CATCH_COUNT" -gt 0 ]; then
        VALIDATION_RETHROW_COUNT=$(grep -A 5 "catch.*ValidationException" app/Modules/User/Application/UseCases 2>/dev/null | grep -c "throw" || echo "0")
        if [ "$VALIDATION_RETHROW_COUNT" -lt "$VALIDATION_CATCH_COUNT" ]; then
            echo ""
            echo -e "${RED}🔴 CRITICAL-013: ValidationException 握りつぶし検出${NC}"
            echo "   📁 場所: app/Modules/User/Application/UseCases/*.php"
            echo "   🔍 原因: catch (ValidationException) で throw していない"
            echo "   💥 影響: バリデーションエラーがフロントエンドに届かず、エラー表示されない"
            echo "   ✅ 推奨修正:"
            echo "      1. catch (ValidationException \$e) { throw \$e; } で再スロー"
            echo "      2. または catch ブロック自体を削除"
            echo "      3. 参照: tech.md - 'ValidationExceptionを握りつぶさない（catch → re-throw）'"
            grep -rn "catch.*ValidationException" app/Modules/User/Application/UseCases 2>/dev/null
        fi
    fi

    # 警告-002: @test コメント不足検出
    TEST_METHOD_COUNT=$(grep -r "public function test" tests/Unit tests/Feature --include="*Test.php" 2>/dev/null | wc -l | tr -d ' ')
    TEST_COMMENT_COUNT=$(grep -B 1 "public function test" tests/Unit tests/Feature --include="*Test.php" 2>/dev/null | grep -c "@test" || echo "0")
    if [ "$TEST_METHOD_COUNT" -gt "$TEST_COMMENT_COUNT" ]; then
        MISSING_COMMENT=$((TEST_METHOD_COUNT - TEST_COMMENT_COUNT))
        echo ""
        echo -e "${YELLOW}⚠️  警告-002: @test コメント不足 (${MISSING_COMMENT}個)${NC}"
        echo "   📁 場所: tests/Unit/**/*Test.php, tests/Feature/**/*Test.php"
        echo "   🔍 原因: テストメソッドに @test コメントがない"
        echo "   💥 影響: テストの意図・目的が不明瞭"
        echo "   ✅ 推奨修正:"
        echo "      1. 各テストメソッドの上に /** @test */ を追加"
        echo "      2. または @test の代わりに詳細なPHPDocを記述"
    fi

    return $([ "$FAILED_CHECKS" -eq 0 ] && echo 0 || echo 1)
}

################################################################################
# Step 5: バックエンド統合テスト検証
################################################################################
validate_step_5() {
    echo "=========================================="
    echo "Step 5: バックエンド統合テスト検証"
    echo "=========================================="

    TOTAL_CHECKS=0
    PASSED_CHECKS=0
    FAILED_CHECKS=0

    echo "チェック 1/3: バックエンドPlaywrightログ確認..."
    BACKEND_LOGS=$(ls logs/playwright-backend-*.log 2>/dev/null | wc -l | tr -d ' ')
    check_result "バックエンドPlaywrightログ数" 6 "$BACKEND_LOGS" "ge"

    echo "チェック 2/3: 成功テスト数確認..."
    BACKEND_SUCCESS=$(grep -l "✅ SUCCESS\|PASS" logs/playwright-backend-*.log 2>/dev/null | wc -l | tr -d ' ')
    check_result "成功テスト数" 6 "$BACKEND_SUCCESS" "ge"

    echo "チェック 3/3: スクリーンショット数確認..."
    BACKEND_SCREENSHOTS=$(ls .playwright-mcp/backend-*.png 2>/dev/null | wc -l | tr -d ' ')
    check_result "スクリーンショット数" 6 "$BACKEND_SCREENSHOTS" "ge"

    return $([ "$FAILED_CHECKS" -eq 0 ] && echo 0 || echo 1)
}

################################################################################
# Step 6: E2E統合テスト検証
################################################################################
validate_step_6() {
    echo "=========================================="
    echo "Step 6: E2E統合テスト検証"
    echo "=========================================="

    TOTAL_CHECKS=0
    PASSED_CHECKS=0
    FAILED_CHECKS=0

    echo "チェック 1/2: E2Eログ確認..."
    E2E_LOGS=$(ls logs/playwright-integration-*.log 2>/dev/null | wc -l | tr -d ' ')
    check_result "E2Eログ数" 6 "$E2E_LOGS" "ge"

    echo "チェック 2/2: 成功シナリオ数確認..."
    E2E_SUCCESS=$(grep -l "✅ SUCCESS\|SCENARIO PASSED" logs/playwright-integration-*.log 2>/dev/null | wc -l | tr -d ' ')
    check_result "成功シナリオ数" 6 "$E2E_SUCCESS" "ge"

    return $([ "$FAILED_CHECKS" -eq 0 ] && echo 0 || echo 1)
}

################################################################################
# Step 7: 総合品質検証
################################################################################
validate_step_7() {
    echo "=========================================="
    echo "Step 7: 総合品質検証"
    echo "=========================================="

    TOTAL_CHECKS=0
    PASSED_CHECKS=0
    FAILED_CHECKS=0

    echo "チェック 1/7: 最終QAレポート確認..."
    if [ -f "docs/test-reports/final-qa-report.md" ]; then
        check_result "最終QAレポート存在" 1 1 "eq"
    else
        check_result "最終QAレポート存在" 1 0 "eq"
    fi

    echo "チェック 2/7: Gate 1 検証..."
    if ./dev-kit/scripts/validations/frontend.sh > /dev/null 2>&1; then
        check_result "Gate 1: フロントエンド品質" 1 1 "eq"
    else
        check_result "Gate 1: フロントエンド品質" 1 0 "eq"
    fi

    echo "チェック 3/7: Gate 2 検証..."
    ./vendor/bin/sail artisan test > /tmp/gate2-test.log 2>&1 || true
    GATE2_FAILED=$(grep -oE "[0-9]+ failed" /tmp/gate2-test.log | grep -oE "[0-9]+" || echo "0")
    check_result "Gate 2: バックエンドテスト失敗数" 0 "$GATE2_FAILED" "eq"

    echo "チェック 4/7: Gate 3 検証（ルート整合性）..."
    FRONTEND_ROUTES=$(grep -r "router.post\|router.visit" resources/js/Pages/Auth --include="*.tsx" 2>/dev/null | grep -oE '"/[^"]*"' | sort -u | wc -l | tr -d ' ')
    BACKEND_ROUTES=$(./vendor/bin/sail artisan route:list 2>/dev/null | grep -E "signup|login|forgot-password|reset-password" | wc -l | tr -d ' ')
    ROUTE_DIFF=$((FRONTEND_ROUTES - BACKEND_ROUTES))
    if [ "$ROUTE_DIFF" -lt 0 ]; then
        ROUTE_DIFF=$((-ROUTE_DIFF))
    fi
    check_result "Gate 3: ルート不一致数" 2 "$ROUTE_DIFF" "le"

    echo "チェック 5/7: Gate 4 検証（セキュリティ）..."
    SECURITY_SCORE=0
    if grep -q "bcrypt\|Hash::make" app/Modules/User/Domain/ValueObjects/HashedPassword.php 2>/dev/null; then
        SECURITY_SCORE=$((SECURITY_SCORE + 1))
    fi
    if grep -q "incrementLoginAttempts\|RateLimiter" app/Modules/User/Presentation/Requests/LoginRequest.php 2>/dev/null; then
        SECURITY_SCORE=$((SECURITY_SCORE + 1))
    fi
    check_result "Gate 4: セキュリティ実装数" 2 "$SECURITY_SCORE" "ge"

    echo "チェック 6/7: Gate 5 検証（データベース）..."
    MIGRATED_COUNT=$(./vendor/bin/sail artisan migrate:status 2>/dev/null | grep -c "Ran" || echo "0")
    check_result "Gate 5: 実行済みマイグレーション数" 2 "$MIGRATED_COUNT" "ge"

    echo "チェック 7/7: Gate 6 検証（日本語）..."
    if [ -f "lang/ja/validation.php" ]; then
        check_result "Gate 6: 日本語バリデーション存在" 1 1 "eq"
    else
        check_result "Gate 6: 日本語バリデーション存在" 1 0 "eq"
    fi

    # セキュリティ要件の詳細検出
    echo ""
    echo "=========================================="
    echo "セキュリティ要件の詳細確認"
    echo "=========================================="

    # CRITICAL-007: Rate Limiting 未実装検出
    RATE_LIMIT_IMPL=$(grep -r "RateLimiter\|throttle" app/Modules/User/Presentation 2>/dev/null | wc -l | tr -d ' ')
    if [ "$RATE_LIMIT_IMPL" -eq 0 ]; then
        echo ""
        echo -e "${RED}🔴 CRITICAL-007: Rate Limiting 未実装${NC}"
        echo "   📁 場所: app/Modules/User/Presentation/Requests/LoginRequest.php"
        echo "   🔍 原因: ログイン試行回数の制限が実装されていない"
        echo "   💥 影響: ブルートフォース攻撃に対して脆弱"
        echo "   ✅ 推奨修正:"
        echo "      1. LoginRequest に RateLimiter を実装（5回/15分）"
        echo "      2. または routes/web.php で middleware('throttle:5,15') を追加"
        echo "      3. エラーメッセージを日本語化（'しばらくしてから再試行してください。'）"
    fi

    # CRITICAL-008: エラーページテンプレート未使用検出
    ERROR_404_EXISTS=$(grep -l "Error404Page" resources/views/errors/404.blade.php 2>/dev/null | wc -l | tr -d ' ')
    if [ "$ERROR_404_EXISTS" -eq 0 ]; then
        echo ""
        echo -e "${RED}🔴 CRITICAL-008: エラーページ dev-kit/ui-components 未使用${NC}"
        echo "   📁 場所: resources/views/errors/404.blade.php, 500.blade.php"
        echo "   🔍 原因: Laravel デフォルトのエラーページ（Tailwind 使用）が残存"
        echo "   💥 影響: CLAUDE.md 違反（dev-kit/ui-components 使用必須）"
        echo "   ✅ 推奨修正:"
        echo "      1. app/Exceptions/Handler.php で Inertia レンダリングに変更"
        echo "      2. Error404Page, Error505Page テンプレートを使用"
        echo "      3. resources/views/errors/ のデフォルトファイルを削除"
    fi

    # CRITICAL-014: バリデーションメッセージ末尾ピリオド不足
    if [ -f "lang/ja/validation.php" ]; then
        VALIDATION_NO_PERIOD=$(grep -E "'=>\s*'[^']*[^。']'" lang/ja/validation.php 2>/dev/null | grep -v "attribute" | wc -l | tr -d ' ')
        if [ "$VALIDATION_NO_PERIOD" -gt 0 ]; then
            echo ""
            echo -e "${RED}🔴 CRITICAL-014: バリデーションメッセージ末尾ピリオド不足${NC}"
            echo "   📁 場所: lang/ja/validation.php"
            echo "   🔍 原因: 日本語バリデーションメッセージの末尾に「。」がない"
            echo "   💥 影響: tech.md 違反、エラーメッセージの表記統一性欠如"
            echo "   ✅ 推奨修正:"
            echo "      1. すべての日本語メッセージ末尾に「。」を追加"
            echo "      2. 例: ':attributeは必須です' → ':attributeは必須です。'"
            echo "      3. 参照: tech.md - '日本語、末尾にピリオド(。)必須'"
        fi
    fi

    # CRITICAL-015: failed_login_attempts テーブル未作成検出
    FAILED_ATTEMPTS_MIGRATION=$(ls database/migrations/*_create_failed_login_attempts_table.php 2>/dev/null | wc -l | tr -d ' ')
    if [ "$FAILED_ATTEMPTS_MIGRATION" -eq 0 ]; then
        echo ""
        echo -e "${RED}🔴 CRITICAL-015: failed_login_attempts テーブル未作成${NC}"
        echo "   📁 場所: database/migrations/"
        echo "   🔍 原因: ログイン失敗記録テーブルのマイグレーションファイルが存在しない"
        echo "   💥 影響: Rate Limiting、ブルートフォース攻撃対策が実装できない"
        echo "   ✅ 推奨修正:"
        echo "      1. マイグレーションファイルを作成:"
        echo "         ./vendor/bin/sail artisan make:migration create_failed_login_attempts_table"
        echo "      2. カラム定義（design.md参照）:"
        echo "         - id, ip_address, email, attempted_at"
        echo "      3. 参照: design.md - 'failed_login_attempts: ログイン失敗記録'"
    fi

    # CRITICAL-016: ユーザー列挙攻撃対策メッセージ統一確認
    if [ -f "app/Modules/User/Presentation/Controllers/AuthController.php" ]; then
        ENUMERATION_MSG_COUNT=$(grep -c "メールアドレスまたはパスワードが正しくありません" app/Modules/User/Presentation/Controllers/AuthController.php || echo "0")
        if [ "$ENUMERATION_MSG_COUNT" -eq 0 ]; then
            echo ""
            echo -e "${YELLOW}⚠️  警告-003: ユーザー列挙攻撃対策メッセージ確認推奨${NC}"
            echo "   📁 場所: app/Modules/User/Presentation/Controllers/AuthController.php"
            echo "   🔍 確認項目: ログイン失敗時のエラーメッセージ統一"
            echo "   ✅ 推奨実装:"
            echo "      1. 存在しないメール・誤パスワード両方で同じメッセージ"
            echo "      2. エラーメッセージ: 「メールアドレスまたはパスワードが正しくありません。」"
            echo "      3. 参照: tech.md - 'ユーザー列挙攻撃対策'"
        fi
    fi

    # 警告-004: PHPStan 実行チェック
    if [ -f "vendor/bin/phpstan" ]; then
        echo ""
        echo "=========================================="
        echo "PHPStan 静的解析実行"
        echo "=========================================="
        ./vendor/bin/sail exec laravel.test vendor/bin/phpstan analyse --no-progress --error-format=raw > /tmp/phpstan-result.log 2>&1 || true
        PHPSTAN_ERRORS=$(grep -c "ERROR" /tmp/phpstan-result.log || echo "0")
        if [ "$PHPSTAN_ERRORS" -gt 0 ]; then
            echo -e "${YELLOW}⚠️  警告-004: PHPStan エラー検出 (${PHPSTAN_ERRORS}件)${NC}"
            echo "   詳細: /tmp/phpstan-result.log を確認"
            head -10 /tmp/phpstan-result.log
        else
            echo -e "${GREEN}✅ PHPStan: エラーなし${NC}"
        fi
    fi

    # CRITICAL-017: パスワードハッシュアルゴリズム確認
    if [ -f "config/hashing.php" ]; then
        BCRYPT_DRIVER=$(grep -c "'driver' => 'bcrypt'" config/hashing.php || echo "0")
        if [ "$BCRYPT_DRIVER" -eq 0 ]; then
            echo ""
            echo -e "${RED}🔴 CRITICAL-017: パスワードハッシュアルゴリズム設定エラー${NC}"
            echo "   📁 場所: config/hashing.php"
            echo "   🔍 原因: 'driver' => 'bcrypt' 設定が存在しない"
            echo "   💥 影響: パスワードハッシュ化が正しく動作しない"
            echo "   ✅ 推奨修正:"
            echo "      1. config/hashing.php で 'driver' => 'bcrypt' を設定"
            echo "      2. 参照: tech.md - 'パスワードハッシュ化（Bcrypt）'"
        fi
    fi

    # CRITICAL-018: CSRF対策確認
    if [ -f "app/Http/Middleware/VerifyCsrfToken.php" ]; then
        CSRF_EXCEPT_AUTH=$(grep -A 10 "protected \$except" app/Http/Middleware/VerifyCsrfToken.php 2>/dev/null | grep -E "signup|login|forgot-password" | wc -l | tr -d ' ')
        if [ "$CSRF_EXCEPT_AUTH" -gt 0 ]; then
            echo ""
            echo -e "${RED}🔴 CRITICAL-018: CSRF対策除外設定エラー${NC}"
            echo "   📁 場所: app/Http/Middleware/VerifyCsrfToken.php"
            echo "   🔍 原因: 認証ルート（signup, login, forgot-password）が \$except に含まれている"
            echo "   💥 影響: CSRF攻撃に対して脆弱"
            echo "   ✅ 推奨修正:"
            echo "      1. \$except 配列から signup, login, forgot-password を削除"
            echo "      2. フロントエンドで @csrf トークンを正しく送信"
            echo "      3. 参照: tech.md - 'CSRF対策（Laravel標準）'"
        fi
    fi

    return $([ "$FAILED_CHECKS" -eq 0 ] && echo 0 || echo 1)
}

################################################################################
# メイン処理
################################################################################
main() {
    STEP=${1:-all}

    echo ""
    echo "=========================================="
    echo "統合検証スクリプト（design.md 準拠）"
    echo "=========================================="
    echo ""

    if [ "$STEP" = "all" ]; then
        # 全ステップ実行
        TOTAL_STEPS=7
        PASSED_STEPS=0

        for i in {1..7}; do
            echo -e "${BLUE}>>> ステップ${i} 検証中...${NC}"

            if validate_step_${i}; then
                SCORE=$(calculate_score)
                echo -e "${GREEN}✅ ステップ${i}: 合格 (スコア: ${SCORE}/100)${NC}"
                PASSED_STEPS=$((PASSED_STEPS + 1))
            else
                SCORE=$(calculate_score)
                echo -e "${RED}❌ ステップ${i}: 不合格 (スコア: ${SCORE}/100)${NC}"
            fi
            echo ""
        done

        # 総合評価
        echo "=========================================="
        echo "総合評価"
        echo "=========================================="
        echo "合格ステップ数: ${PASSED_STEPS}/${TOTAL_STEPS}"
        PASS_RATE=$(( (PASSED_STEPS * 100) / TOTAL_STEPS ))
        echo "達成率: ${PASS_RATE}%"
        echo ""

        if [ "$PASSED_STEPS" -eq "$TOTAL_STEPS" ]; then
            echo -e "${GREEN}✅ 全ステップ合格 - リリース可能${NC}"
            exit 0
        else
            echo -e "${RED}❌ リリース不可 - 修正が必要${NC}"
            exit 1
        fi
    else
        # 個別ステップ実行
        if validate_step_${STEP}; then
            SCORE=$(calculate_score)
            echo ""
            echo "スコア: ${SCORE}/100"
            echo -e "${GREEN}✅ ステップ${STEP}は完了基準を満たしています${NC}"
            exit 0
        else
            SCORE=$(calculate_score)
            echo ""
            echo "スコア: ${SCORE}/100"
            echo -e "${RED}❌ ステップ${STEP}は完了基準を満たしていません${NC}"
            exit 1
        fi
    fi
}

main "$@"
