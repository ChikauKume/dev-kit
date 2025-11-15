#!/bin/bash
# バックエンド厳密検証スクリプト（design.md準拠）
#
# 最適化ポイント:
# - Login/Authenticate系Requestのemailフィールドはuniqueルール不要と判定
#   (既存ユーザーの認証なので重複チェック不要)
# - 登録系Request (Signup/Register) のみemailのuniqueルールを必須とする

set -e

PROJECT_ROOT="$(cd "$(dirname "${BASH_SOURCE[0]}")/../../.." && pwd)"
SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"

cd "$PROJECT_ROOT"

# 色定義
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

echo ""
echo "========================================================================"
echo -e "${BLUE}🔍 Backend Strict Validation (design.md as Single Source of Truth)${NC}"
echo "========================================================================"
echo ""

EXIT_CODE=0
SPEC_NAME="${1:-}"

# パストラバーサル対策（SPEC_NAMEが指定されている場合のみ）
if [ -n "$SPEC_NAME" ] && [[ "$SPEC_NAME" =~ \.\./|^/ ]]; then
    echo -e "${RED}❌ エラー: 不正な仕様名が指定されています${NC}"
    exit 1
fi

# ========================================================================
# Part 1: design.md整合性チェック（最優先）
# ========================================================================
echo -e "${BLUE}📝 Part 1: design.md Integrity Check${NC}"
echo "------------------------------------------------------------------------"

if [ -n "$SPEC_NAME" ]; then
    echo "Checking spec: $SPEC_NAME"
    if [ -x "$SCRIPT_DIR/design.php" ]; then
        if "$SCRIPT_DIR/design.php" "$SPEC_NAME"; then
            echo -e "${GREEN}✅ design.md integrity check PASSED${NC}"
        else
            echo -e "${RED}❌ design.md integrity check FAILED${NC}"
            echo ""
            echo "CRITICAL: design.md に記載された要件が実装されていません"
            EXIT_CODE=1
        fi
    else
        echo -e "${YELLOW}⚠️  design.php not found${NC}"
    fi
else
    echo -e "${YELLOW}⚠️  No spec name provided, skipping design.md check${NC}"
    echo "   Usage: $0 <spec-name>"
fi

echo ""

# ========================================================================
# Part 2: Clean Architecture 構造チェック
# ========================================================================
echo -e "${BLUE}📝 Part 2: Clean Architecture Structure Check${NC}"
echo "------------------------------------------------------------------------"

if [ -n "$SPEC_NAME" ]; then
    # specに基づいてモジュール名を推測（例: user-authentication → User）
    MODULE_NAME=$(echo "$SPEC_NAME" | sed -E 's/user-([a-z]+)/User/' | sed 's/-//g' | awk '{print toupper(substr($0,1,1)) tolower(substr($0,2))}')

    echo "Checking module: $MODULE_NAME"

    # Domain層の存在確認
    if [ -d "$PROJECT_ROOT/app/Modules/$MODULE_NAME/Domain" ]; then
        echo -e "${GREEN}✅ Domain layer exists${NC}"

        # Entityの存在確認
        ENTITY_COUNT=$(find "$PROJECT_ROOT/app/Modules/$MODULE_NAME/Domain" -name "*Entity.php" -o -name "*.php" | grep -v "Interface" | wc -l | tr -d ' ')
        if [ "$ENTITY_COUNT" -gt 0 ]; then
            echo -e "${GREEN}✅ Found $ENTITY_COUNT Domain entity/entities${NC}"
        else
            echo -e "${RED}❌ No Domain entities found${NC}"
            EXIT_CODE=1
        fi

        # RepositoryInterfaceの存在確認
        REPO_INTERFACE_COUNT=$(find "$PROJECT_ROOT/app/Modules/$MODULE_NAME/Domain" -name "*RepositoryInterface.php" | wc -l | tr -d ' ')
        if [ "$REPO_INTERFACE_COUNT" -gt 0 ]; then
            echo -e "${GREEN}✅ Found $REPO_INTERFACE_COUNT Repository interface(s)${NC}"
        else
            echo -e "${RED}❌ No Repository interfaces found${NC}"
            EXIT_CODE=1
        fi
    else
        echo -e "${RED}❌ Domain layer NOT FOUND: app/Modules/$MODULE_NAME/Domain${NC}"
        EXIT_CODE=1
    fi

    # Application層の存在確認
    if [ -d "$PROJECT_ROOT/app/Modules/$MODULE_NAME/Application" ]; then
        echo -e "${GREEN}✅ Application layer exists${NC}"

        # UseCaseの存在確認
        USECASE_COUNT=$(find "$PROJECT_ROOT/app/Modules/$MODULE_NAME/Application" -name "*UseCase.php" | wc -l | tr -d ' ')
        if [ "$USECASE_COUNT" -gt 0 ]; then
            echo -e "${GREEN}✅ Found $USECASE_COUNT UseCase(s)${NC}"
        else
            echo -e "${RED}❌ No UseCases found${NC}"
            EXIT_CODE=1
        fi
    else
        echo -e "${RED}❌ Application layer NOT FOUND: app/Modules/$MODULE_NAME/Application${NC}"
        EXIT_CODE=1
    fi

    # Infrastructure層の存在確認
    if [ -d "$PROJECT_ROOT/app/Modules/$MODULE_NAME/Infrastructure" ]; then
        echo -e "${GREEN}✅ Infrastructure layer exists${NC}"

        # Repository実装の存在確認
        REPO_IMPL_COUNT=$(find "$PROJECT_ROOT/app/Modules/$MODULE_NAME/Infrastructure" -name "*Repository.php" | grep -v "Interface" | wc -l | tr -d ' ')
        if [ "$REPO_IMPL_COUNT" -gt 0 ]; then
            echo -e "${GREEN}✅ Found $REPO_IMPL_COUNT Repository implementation(s)${NC}"
        else
            echo -e "${RED}❌ No Repository implementations found${NC}"
            EXIT_CODE=1
        fi
    else
        echo -e "${RED}❌ Infrastructure layer NOT FOUND: app/Modules/$MODULE_NAME/Infrastructure${NC}"
        EXIT_CODE=1
    fi

    # Presentation層の存在確認
    if [ -d "$PROJECT_ROOT/app/Modules/$MODULE_NAME/Presentation" ]; then
        echo -e "${GREEN}✅ Presentation layer exists${NC}"

        # Controllerの存在確認
        CONTROLLER_COUNT=$(find "$PROJECT_ROOT/app/Modules/$MODULE_NAME/Presentation/Controllers" -name "*Controller.php" 2>/dev/null | wc -l | tr -d ' ')
        if [ "$CONTROLLER_COUNT" -gt 0 ]; then
            echo -e "${GREEN}✅ Found $CONTROLLER_COUNT Controller(s)${NC}"
        else
            echo -e "${YELLOW}⚠️  No Controllers found${NC}"
        fi

        # FormRequestの存在確認
        FORMREQUEST_COUNT=$(find "$PROJECT_ROOT/app/Modules/$MODULE_NAME/Presentation/Requests" -name "*Request.php" 2>/dev/null | wc -l | tr -d ' ')
        if [ "$FORMREQUEST_COUNT" -gt 0 ]; then
            echo -e "${GREEN}✅ Found $FORMREQUEST_COUNT FormRequest(s)${NC}"
        else
            echo -e "${YELLOW}⚠️  No FormRequests found${NC}"
        fi
    else
        echo -e "${RED}❌ Presentation layer NOT FOUND: app/Modules/$MODULE_NAME/Presentation${NC}"
        EXIT_CODE=1
    fi
fi

echo ""

# ========================================================================
# Part 3: PHP構文チェック
# ========================================================================
echo -e "${BLUE}📝 Part 3: PHP Syntax Check${NC}"
echo "------------------------------------------------------------------------"

if [ -n "$SPEC_NAME" ] && [ -n "$MODULE_NAME" ]; then
    PHP_ERRORS=0

    if [ -d "$PROJECT_ROOT/app/Modules/$MODULE_NAME" ]; then
        echo "Checking PHP syntax in app/Modules/$MODULE_NAME..."

        while IFS= read -r -d '' file; do
            if ! ./vendor/bin/sail php -l "$file" > /dev/null 2>&1; then
                echo -e "${RED}❌ Syntax error in: $file${NC}"
                ./vendor/bin/sail php -l "$file"
                PHP_ERRORS=$((PHP_ERRORS + 1))
                EXIT_CODE=1
            fi
        done < <(find "$PROJECT_ROOT/app/Modules/$MODULE_NAME" -name "*.php" -print0 2>/dev/null)

        if [ $PHP_ERRORS -eq 0 ]; then
            echo -e "${GREEN}✅ All PHP files have valid syntax${NC}"
        else
            echo -e "${RED}❌ Found $PHP_ERRORS PHP file(s) with syntax errors${NC}"
        fi
    fi
else
    echo -e "${YELLOW}⚠️  No module specified, skipping module-specific PHP syntax check${NC}"
fi

echo ""

# ========================================================================
# Part 3.5: Password Hashing Configuration Check
# ========================================================================
echo -e "${BLUE}📝 Part 3.5: Password Hashing Configuration Check${NC}"
echo "------------------------------------------------------------------------"

if [ -n "$SPEC_NAME" ] && [ -n "$MODULE_NAME" ]; then
    # UserModel または UserModel.php を検索
    USER_MODEL_PATH=$(find "$PROJECT_ROOT/app/Modules/$MODULE_NAME" -name "*UserModel.php" -o -name "*User.php" 2>/dev/null | grep -v "Interface" | head -1)

    if [ -n "$USER_MODEL_PATH" ] && [ -f "$USER_MODEL_PATH" ]; then
        echo "Checking: $(basename $USER_MODEL_PATH)"

        # 'password' => 'hashed' の存在確認
        if grep -q "'password'\s*=>\s*'hashed'" "$USER_MODEL_PATH" || grep -q '"password"\s*=>\s*"hashed"' "$USER_MODEL_PATH"; then
            echo -e "${RED}❌ CRITICAL: UserModel has 'password' => 'hashed' cast${NC}"
            echo "   This causes DOUBLE HASHING when combined with ValueObject hashing"
            echo "   File: $USER_MODEL_PATH"
            echo ""
            echo "   Fix: Remove 'password' => 'hashed' from casts() method"
            echo "   Password hashing should only occur in ValueObject layer"
            echo ""
            EXIT_CODE=1
        else
            echo -e "${GREEN}✅ Password cast not found (correct - hashing in ValueObject)${NC}"
        fi

        # DatabaseSeederでの正しいハッシュ化確認
        SEEDER_PATH="$PROJECT_ROOT/database/seeders/DatabaseSeeder.php"
        if [ -f "$SEEDER_PATH" ]; then
            if grep -q "Hash::make.*password" "$SEEDER_PATH"; then
                echo -e "${YELLOW}⚠️  WARNING: DatabaseSeeder uses Hash::make()${NC}"
                echo "   Consider using password_hash() for consistency with ValueObject"
            elif grep -q "password_hash.*PASSWORD_BCRYPT" "$SEEDER_PATH"; then
                echo -e "${GREEN}✅ DatabaseSeeder uses password_hash() (consistent with ValueObject)${NC}"
            fi
        fi
    else
        echo -e "${YELLOW}⚠️  UserModel not found in $MODULE_NAME module${NC}"
    fi
else
    echo -e "${YELLOW}⚠️  No module specified, skipping password hashing check${NC}"
fi

echo ""

# ========================================================================
# Part 4: FormRequest バリデーションルール厳密チェック（YAML-based）
# ========================================================================
echo -e "${BLUE}📝 Part 4: FormRequest Validation Rules Check (YAML-based)${NC}"
echo "------------------------------------------------------------------------"

if [ -n "$SPEC_NAME" ] && [ -n "$MODULE_NAME" ]; then
    if [ -d "$PROJECT_ROOT/app/Modules/$MODULE_NAME/Presentation/Requests" ]; then
        echo "Checking FormRequests in app/Modules/$MODULE_NAME/Presentation/Requests..."

        FORMREQUEST_FILES=$(find "$PROJECT_ROOT/app/Modules/$MODULE_NAME/Presentation/Requests" -name "*Request.php" 2>/dev/null)

        if [ -n "$FORMREQUEST_FILES" ]; then
            for file in $FORMREQUEST_FILES; do
                echo ""
                REQUEST_CLASSNAME=$(basename "$file" .php)
                echo "Analyzing: $REQUEST_CLASSNAME"

                # rules()メソッドの存在確認
                if ! grep -q "public function rules()" "$file"; then
                    echo -e "${RED}❌ rules() method NOT FOUND in $file${NC}"
                    EXIT_CODE=1
                    continue
                fi

                # バリデーションルールの抽出
                RULES_SECTION=$(sed -n '/public function rules()/,/^    }/p' "$file")

                # YAMLから期待値を取得
                if command -v php >/dev/null 2>&1 && [ -f "$SCRIPT_DIR/parse-validation.php" ]; then
                    EXPECTED_JSON=$(./vendor/bin/sail php "$SCRIPT_DIR/parse-validation.php" "$MODULE_NAME" "$REQUEST_CLASSNAME" 2>/dev/null)

                    if grep -q '"found".*true' <<< "$EXPECTED_JSON"; then
                        # YAML設定が見つかった場合
                        CONTEXT=$(echo "$EXPECTED_JSON" | ./vendor/bin/sail php -r 'echo json_decode(file_get_contents("php://stdin"))->context ?? "unknown";')
                        DESCRIPTION=$(echo "$EXPECTED_JSON" | ./vendor/bin/sail php -r 'echo json_decode(file_get_contents("php://stdin"))->description ?? "";')

                        echo -e "${BLUE}ℹ️  Context: $CONTEXT${NC}"
                        if [ -n "$DESCRIPTION" ]; then
                            echo "   Description: $DESCRIPTION"
                        fi

                        # YAML定義からフィールドリストを取得
                        FIELD_NAMES=$(echo "$EXPECTED_JSON" | ./vendor/bin/sail php -r '
                            $data = json_decode(file_get_contents("php://stdin"), true);
                            if (isset($data["fields"]) && !empty($data["fields"])) {
                                echo implode("\n", array_keys($data["fields"]));
                            }
                        ')

                        if [ -z "$FIELD_NAMES" ]; then
                            echo -e "${BLUE}ℹ️  No fields defined in YAML (empty request)${NC}"
                        else
                            # 各フィールドのバリデーションルールをチェック
                            echo "$FIELD_NAMES" | while IFS= read -r field_name; do
                                # YAML定義から期待されるルールを取得
                                EXPECTED_RULES=$(echo "$EXPECTED_JSON" | ./vendor/bin/sail php -r "
                                    \$data = json_decode(file_get_contents('php://stdin'), true);
                                    if (isset(\$data['fields']['$field_name']['rules'])) {
                                        echo implode(',', \$data['fields']['$field_name']['rules']);
                                    }
                                ")

                                # フィールドが実装に存在するかチェック
                                if echo "$RULES_SECTION" | grep -q "'$field_name'"; then
                                    FIELD_RULES_LINE=$(echo "$RULES_SECTION" | grep "'$field_name'")

                                    # 各期待ルールが実装に含まれているかチェック
                                    MISSING_RULES=""
                                    IFS=',' read -ra RULES_ARRAY <<< "$EXPECTED_RULES"
                                    for expected_rule in "${RULES_ARRAY[@]}"; do
                                        # ルール名を抽出（例: "unique:users,email" → "unique"）
                                        RULE_NAME=$(echo "$expected_rule" | sed 's/:.*$//' | sed "s/'//g")

                                        if ! echo "$FIELD_RULES_LINE" | grep -q "$RULE_NAME"; then
                                            if [ -z "$MISSING_RULES" ]; then
                                                MISSING_RULES="$expected_rule"
                                            else
                                                MISSING_RULES="$MISSING_RULES, $expected_rule"
                                            fi
                                        fi
                                    done

                                    if [ -n "$MISSING_RULES" ]; then
                                        echo -e "${RED}❌ '$field_name' field missing rules: [$MISSING_RULES]${NC}"
                                        EXIT_CODE=1
                                    else
                                        echo -e "${GREEN}✅ '$field_name' field has all required rules${NC}"
                                    fi
                                else
                                    echo -e "${RED}❌ CRITICAL: '$field_name' field NOT FOUND in implementation${NC}"
                                    echo "   YAML expects: [$EXPECTED_RULES]"
                                    EXIT_CODE=1
                                fi
                            done
                        fi
                    else
                        # YAML設定がない場合は従来のヒューリスティック検証にフォールバック
                        echo -e "${YELLOW}⚠️  No YAML config for $REQUEST_CLASSNAME, using heuristic validation${NC}"

                        # 従来のロジック（簡略版）
                        FILENAME=$(basename "$file")
                        IS_LOGIN_REQUEST=false
                        if echo "$FILENAME" | grep -qiE "(Login|Authenticate|Auth).*Request\.php"; then
                            IS_LOGIN_REQUEST=true
                        fi

                        # emailフィールドチェック
                        if echo "$RULES_SECTION" | grep -q "'email'"; then
                            if [ "$IS_LOGIN_REQUEST" = true ]; then
                                echo -e "${BLUE}ℹ️  'email' field found (Login/Auth - unique not required)${NC}"
                            else
                                if ! echo "$RULES_SECTION" | grep "'email'" | grep -q "unique"; then
                                    echo -e "${RED}❌ CRITICAL: 'email' field missing 'unique' rule${NC}"
                                    EXIT_CODE=1
                                else
                                    echo -e "${GREEN}✅ 'email' field has 'unique' rule${NC}"
                                fi
                            fi
                        fi
                    fi
                else
                    echo -e "${YELLOW}⚠️  parse-validation.php not available, skipping YAML validation${NC}"
                fi
            done
        else
            echo -e "${YELLOW}⚠️  No FormRequest files found${NC}"
        fi
    fi
fi

echo ""

# ========================================================================
# Part 5: PHPStan 静的解析（型チェック・クラス存在チェック）
# ========================================================================
echo -e "${BLUE}📝 Part 5: PHPStan Static Analysis (Type & Class Existence Check)${NC}"
echo "------------------------------------------------------------------------"

if [ -f "$PROJECT_ROOT/vendor/bin/phpstan" ] && [ -f "$PROJECT_ROOT/phpstan.neon" ]; then
    echo "Running PHPStan analysis..."

    # PHPStanを実行し、結果をキャプチャ
    PHPSTAN_OUTPUT=$("$PROJECT_ROOT/vendor/bin/phpstan" analyse --memory-limit=512M --error-format=table 2>&1)
    PHPSTAN_EXIT_CODE=$?

    if [ $PHPSTAN_EXIT_CODE -eq 0 ]; then
        echo -e "${GREEN}✅ PHPStan analysis PASSED - No type errors or missing classes detected${NC}"
    else
        echo -e "${RED}❌ PHPStan analysis FAILED${NC}"
        echo ""
        echo "$PHPSTAN_OUTPUT"
        echo ""
        echo -e "${RED}CRITICAL: Fix all PHPStan errors before proceeding.${NC}"
        echo "Common issues detected by PHPStan:"
        echo "  - Missing classes (e.g., UserModel::class referencing non-existent class)"
        echo "  - Type mismatches"
        echo "  - Undefined methods or properties"
        echo ""
        EXIT_CODE=1
    fi
else
    echo -e "${YELLOW}⚠️  PHPStan not installed or phpstan.neon not found${NC}"
    echo "Consider installing Larastan for enhanced type checking:"
    echo "  composer require --dev nunomaduro/larastan"
fi

echo ""

# ========================================================================
# Part 6: Auth Configuration Class Existence Check
# ========================================================================
echo -e "${BLUE}📝 Part 6: Auth Configuration Validation${NC}"
echo "------------------------------------------------------------------------"

AUTH_CONFIG="$PROJECT_ROOT/config/auth.php"
if [ -f "$AUTH_CONFIG" ]; then
    echo "Checking config/auth.php..."

    # authプロバイダのモデルクラスを抽出（BSD grep対応）
    MODEL_CLASS=$(grep "'model' => " "$AUTH_CONFIG" 2>/dev/null | head -1 | sed "s/.*'model' => //" | sed "s/,$//" | sed "s/'//g" | sed 's/::class//' | xargs)

    if [ -z "$MODEL_CLASS" ]; then
        # ダブルクォートで試行
        MODEL_CLASS=$(grep '"model" => ' "$AUTH_CONFIG" 2>/dev/null | head -1 | sed 's/.*"model" => //' | sed 's/,$//' | sed 's/"//g' | sed 's/::class//' | xargs)
    fi

    if [ -n "$MODEL_CLASS" ]; then
        echo "Auth model class: $MODEL_CLASS"

        # クラスパスをファイルパスに変換
        MODEL_FILE=$(echo "$MODEL_CLASS" | sed 's/App\\/app\//' | sed 's/\\/\//g').php
        FULL_MODEL_PATH="$PROJECT_ROOT/$MODEL_FILE"

        if [ -f "$FULL_MODEL_PATH" ]; then
            echo -e "${GREEN}✅ Auth model class exists: $MODEL_CLASS${NC}"
            echo "   File: $MODEL_FILE"
        else
            echo -e "${RED}❌ CRITICAL: Auth model class NOT FOUND${NC}"
            echo "   Expected class: $MODEL_CLASS"
            echo "   Expected file: $MODEL_FILE"
            echo "   Actual file: NOT FOUND"
            echo ""
            echo "   Common issues:"
            echo "   - Missing 'Eloquent' subdirectory in namespace"
            echo "   - Incorrect module path"
            echo ""
            echo "   Example fix:"
            echo "   Wrong: App\Modules\User\Infrastructure\UserModel::class"
            echo "   Right: App\Modules\User\Infrastructure\Eloquent\UserModel::class"
            echo ""
            EXIT_CODE=1
        fi
    else
        echo -e "${YELLOW}⚠️  Could not extract model class from auth.php${NC}"
        echo "   This may be OK if using default Laravel auth configuration"
    fi
else
    echo -e "${RED}❌ CRITICAL: config/auth.php not found${NC}"
    EXIT_CODE=1
fi

echo ""

# ========================================================================
# Part 7: Laravel 11 Exception Handling Configuration (Inertia)
# ========================================================================
echo -e "${BLUE}📝 Part 7: Laravel 11 Exception Handling Configuration${NC}"
echo "------------------------------------------------------------------------"

BOOTSTRAP_APP="$PROJECT_ROOT/bootstrap/app.php"

if [ ! -f "$BOOTSTRAP_APP" ]; then
    echo -e "${RED}❌ bootstrap/app.php not found${NC}"
    EXIT_CODE=1
else
    echo "Checking Laravel 11 exception handling configuration..."

    # withExceptions() メソッドの存在確認
    if grep -q "->withExceptions(" "$BOOTSTRAP_APP"; then
        echo -e "${GREEN}✅ withExceptions() configuration found${NC}"

        # 404エラーハンドリングの確認
        if grep -A 20 "withExceptions" "$BOOTSTRAP_APP" | grep -q "NotFoundHttpException"; then
            echo -e "${GREEN}✅ 404 error handling configured${NC}"

            # Inertia renderの確認
            if grep -A 30 "NotFoundHttpException" "$BOOTSTRAP_APP" | grep -q "Inertia::render.*Error/404"; then
                echo -e "${GREEN}✅ 404 renders Inertia Error/404 page${NC}"
            else
                echo -e "${RED}❌ 404 does not render Inertia Error/404 page${NC}"
                echo "   Expected: Inertia::render('Error/404')"
                echo ""
                echo "   Fix: In bootstrap/app.php, add:"
                echo "   ->withExceptions(function (Exceptions \$exceptions): void {"
                echo "       \$exceptions->render(function (\Symfony\Component\HttpKernel\Exception\NotFoundHttpException \$e) {"
                echo "           return \Inertia\Inertia::render('Error/404')"
                echo "               ->toResponse(request())"
                echo "               ->setStatusCode(404);"
                echo "       });"
                echo "   })"
                echo ""
                EXIT_CODE=1
            fi
        fi

        # 500エラーハンドリングの確認
        if grep -A 30 "withExceptions" "$BOOTSTRAP_APP" | grep -q "Throwable"; then
            echo -e "${GREEN}✅ 500 error handling configured${NC}"

            # Inertia renderの確認
            if grep -A 40 "Throwable" "$BOOTSTRAP_APP" | grep -q "Inertia::render.*Error/500"; then
                echo -e "${GREEN}✅ 500 renders Inertia Error/500 page${NC}"
            else
                echo -e "${YELLOW}⚠️  500 may not render Inertia Error/500 page${NC}"
                echo "   Recommended: Inertia::render('Error/500')"
            fi
        fi
    else
        echo -e "${RED}❌ withExceptions() configuration NOT FOUND${NC}"
        echo ""
        echo "   CRITICAL: Laravel 11 requires exception handling in bootstrap/app.php"
        echo "   Old: app/Exceptions/Handler.php (Laravel 10 and earlier)"
        echo "   New: bootstrap/app.php with ->withExceptions() (Laravel 11+)"
        echo ""
        echo "   Fix: Add exception handling in bootstrap/app.php:"
        echo "   ->withExceptions(function (Exceptions \$exceptions): void {"
        echo "       \$exceptions->render(function (\Symfony\Component\HttpKernel\Exception\NotFoundHttpException \$e) {"
        echo "           return \Inertia\Inertia::render('Error/404')"
        echo "               ->toResponse(request())"
        echo "               ->setStatusCode(404);"
        echo "       });"
        echo "       \$exceptions->render(function (\Throwable \$e) {"
        echo "           if (! \$e instanceof \Symfony\Component\HttpKernel\Exception\HttpException) {"
        echo "               return \Inertia\Inertia::render('Error/500')"
        echo "                   ->toResponse(request())"
        echo "                   ->setStatusCode(500);"
        echo "           }"
        echo "           return null;"
        echo "       });"
        echo "   })"
        echo ""
        EXIT_CODE=1
    fi
fi

echo ""

# ========================================================================
# 最終サマリー
# ========================================================================
echo "========================================================================"
echo -e "${BLUE}📊 Backend Strict Validation Summary${NC}"
echo "========================================================================"
echo ""

if [ $EXIT_CODE -eq 0 ]; then
    echo -e "${GREEN}✅✅✅ ALL BACKEND CHECKS PASSED ✅✅✅${NC}"
    echo ""
    echo "Your backend implementation meets all requirements!"
    echo ""
else
    echo -e "${RED}❌❌❌ BACKEND VALIDATION FAILED ❌❌❌${NC}"
    echo ""
    echo "CRITICAL: Fix all errors before proceeding to testing phase."
    echo ""
    echo "Common issues:"
    echo "  - design.md requirements not implemented"
    echo "  - Missing validation rules (unique, accepted, same)"
    echo "  - Clean Architecture layers incomplete"
    echo "  - PHP syntax errors"
    echo ""
fi

echo "========================================================================"

exit $EXIT_CODE
