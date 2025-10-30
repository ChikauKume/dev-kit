#!/usr/bin/env php
<?php
/**
 * design.md を Single Source of Truth として、実装との整合性を検証（汎用版）
 *
 * 使用方法:
 *   ./validate-design.php [spec-name]
 *
 * 例:
 *   ./validate-design.php user-authentication
 *   ./validate-design.php user-password-reset
 *
 * spec-nameが指定されない場合、全てのspecをチェックします。
 *
 * 検証項目：
 * 1. design.md で定義されたバリデーションルールが FormRequest に実装されているか
 * 2. フロントエンド (useDynamicForm) とバックエンド (FormRequest) のフィールド名が一致しているか
 * 3. 必須フィールドが both sides で required になっているか
 */

declare(strict_types=1);

$projectRoot = dirname(__DIR__, 3);
require_once $projectRoot . '/vendor/autoload.php';

// 色定義
const RED = "\033[0;31m";
const GREEN = "\033[0;32m";
const YELLOW = "\033[1;33m";
const BLUE = "\033[0;34m";
const NC = "\033[0m"; // No Color

$errors = 0;
$warnings = 0;

// コマンドライン引数から spec name を取得
$specName = $argv[1] ?? null;

echo BLUE . "🔍 Validation Integrity Check (design.md as Single Source of Truth)" . NC . "\n";
echo str_repeat("=", 80) . "\n";
if ($specName) {
    echo "Spec: " . BLUE . $specName . NC . "\n";
} else {
    echo YELLOW . "No spec specified. Checking all specs..." . NC . "\n";
}
echo "\n";

/**
 * design.md からバリデーション要件を抽出
 *
 * セクションタイトル「**バリデーション項目詳細**:」で抽出（汎用的）
 */
function parseDesignMd(string $designPath): array
{
    if (!file_exists($designPath)) {
        return [];
    }

    $content = file_get_contents($designPath);
    $validationRules = [];

    // バリデーション項目詳細セクションを抽出（タイトルベース、行番号に依存しない）
    if (preg_match('/\*\*バリデーション項目詳細\*\*:(.*?)(?=\n\n\*\*|$)/s', $content, $matches)) {
        $validationSection = $matches[1];

        // 各フィールドのルールを解析
        $lines = explode("\n", $validationSection);
        foreach ($lines as $line) {
            // 例: - `name`: 必須、2文字以上、255文字以下
            // または: - `agreeToTerms`: 必須、チェックボックス、利用規約への同意（accepted）
            if (preg_match('/- `([a-zA-Z_]+)`:\s*(.+)/', $line, $fieldMatch)) {
                $field = $fieldMatch[1];
                $rules = $fieldMatch[2];

                $validationRules[$field] = [
                    'raw' => $rules,
                    'required' => str_contains($rules, '必須'),
                    'min' => preg_match('/(\d+)文字以上/', $rules, $m) ? (int)$m[1] : null,
                    'max' => preg_match('/(\d+)文字以下/', $rules, $m) ? (int)$m[1] : null,
                    'email' => str_contains($rules, 'メール形式'),
                    'unique' => str_contains($rules, '重複禁止'),
                    'regex' => str_contains($rules, '英字と数字') || str_contains($rules, '半角数字のみ'),
                    'accepted' => str_contains($rules, 'accepted') || str_contains($rules, '同意'),
                    'same' => preg_match('/(.+)と一致/', $rules, $m) ? $m[1] : null,
                ];
            }
        }
    }

    return $validationRules;
}

/**
 * design.mdから対応するFormRequestクラス名を推測
 */
function inferFormRequestClass(string $specName, array $designRules): ?string
{
    // design.mdに記載されているRequestクラスを探す
    $designPath = dirname(__DIR__, 2) . "/docs/specs/$specName/design.md";
    if (!file_exists($designPath)) {
        return null;
    }

    $content = file_get_contents($designPath);

    // Presentation層のRequestsセクションを探す
    if (preg_match('/Requests.*?:\s*([A-Z][a-zA-Z]+Request)/s', $content, $matches)) {
        $requestClassName = $matches[1];

        // モジュール名を推測（spec-nameからPascalCaseへ変換）
        $moduleName = str_replace(' ', '', ucwords(str_replace('-', ' ', explode('-', $specName)[0])));

        return "App\\Modules\\{$moduleName}\\Presentation\\Requests\\{$requestClassName}";
    }

    return null;
}

/**
 * design.mdから対応するフロントエンドファイルを推測
 */
function inferFrontendFile(string $specName, string $projectRoot): ?string
{
    // spec-name から推測（例: user-authentication → Auth/Signup.tsx, Auth/Login.tsx）
    $designPath = dirname(__DIR__, 2) . "/docs/specs/$specName/design.md";
    if (!file_exists($designPath)) {
        return null;
    }

    $content = file_get_contents($designPath);

    // UI設計セクションから画面URLとテンプレートを抽出
    if (preg_match_all('/\|\s*([^\|]+?)\s*\|\s*`([^`]+)`\s*\|/m', $content, $matches, PREG_SET_ORDER)) {
        foreach ($matches as $match) {
            $screenName = trim($match[1]);
            $url = trim($match[2]);

            // 登録・サインアップ系の画面を優先
            if (str_contains($screenName, '登録') || str_contains($url, 'signup') || str_contains($url, 'register')) {
                // URLからファイル名を推測
                $path = trim($url, '/');
                $fileName = ucfirst($path) . '.tsx';

                // よくあるパターンを試す
                $possibilities = [
                    $projectRoot . "/resources/js/Pages/Auth/Signup.tsx",
                    $projectRoot . "/resources/js/Pages/Auth/Register.tsx",
                    $projectRoot . "/resources/js/Pages/" . ucfirst($path) . ".tsx",
                ];

                foreach ($possibilities as $possiblePath) {
                    if (file_exists($possiblePath)) {
                        return $possiblePath;
                    }
                }
            }
        }
    }

    return null;
}

/**
 * FormRequest からバリデーションルールを抽出
 */
function parseFormRequest(string $className): array
{
    if (!class_exists($className)) {
        return [];
    }

    $instance = new $className();
    if (!method_exists($instance, 'rules')) {
        return [];
    }

    return $instance->rules();
}

/**
 * フロントエンドファイルからバリデーション定義を抽出
 */
function parseFrontendValidation(string $tsxPath): array
{
    if (!file_exists($tsxPath)) {
        return [];
    }

    $content = file_get_contents($tsxPath);
    $validationFields = [];

    // validation オブジェクトを抽出（ネストされた構造に対応）
    if (preg_match('/validation:\s*\{(.*?)(?=\s*\},\s*onSubmit)/s', $content, $matches)) {
        $validationBlock = $matches[1];

        // 各フィールドを抽出（改行とインデントに対応）
        preg_match_all('/^\s+([a-z_]+):\s*\[(.*?)\]/sm', $validationBlock, $fieldMatches, PREG_SET_ORDER);

        foreach ($fieldMatches as $match) {
            $field = trim($match[1]);
            $rules = $match[2];

            // 複数行にまたがるルール定義を結合
            $rules = preg_replace('/\s+/', ' ', $rules);

            // customバリデーションでも必須チェックしている場合があるため確認
            $isCustomRequired = str_contains($rules, "type: 'custom'") &&
                                (str_contains($rules, 'value === true') || str_contains($rules, '同意'));

            $validationFields[$field] = [
                'required' => str_contains($rules, "type: 'required'") || $isCustomRequired,
                'email' => str_contains($rules, "type: 'email'"),
                'minLength' => preg_match('/minLength.*?value:\s*(\d+)/', $rules, $m) ? (int)$m[1] : null,
                'maxLength' => preg_match('/maxLength.*?value:\s*(\d+)/', $rules, $m) ? (int)$m[1] : null,
                'pattern' => str_contains($rules, "type: 'pattern'"),
                'custom' => str_contains($rules, "type: 'custom'"),
            ];
        }
    }

    return $validationFields;
}

/**
 * design.md のルールと FormRequest の実装を比較
 */
function validateBackendImplementation(array $designRules, array $backendRules, string $requestName): int
{
    global $errors, $warnings;
    $localErrors = 0;

    echo BLUE . "\n📋 Checking: $requestName" . NC . "\n";
    echo str_repeat("-", 80) . "\n";

    if (empty($backendRules)) {
        echo RED . "❌ No validation rules found in $requestName" . NC . "\n";
        return 1;
    }

    foreach ($designRules as $field => $expectedRules) {
        if (!isset($backendRules[$field])) {
            echo RED . "❌ Field '$field' is defined in design.md but missing in $requestName" . NC . "\n";
            $localErrors++;
            continue;
        }

        $actualRules = is_array($backendRules[$field]) ? $backendRules[$field] : explode('|', $backendRules[$field]);

        // 必須チェック
        if ($expectedRules['required'] && !in_array('required', $actualRules)) {
            echo RED . "❌ Field '$field': design.md says REQUIRED but 'required' rule is missing" . NC . "\n";
            $localErrors++;
        }

        // ユニークチェック
        if ($expectedRules['unique']) {
            $hasUnique = false;
            foreach ($actualRules as $rule) {
                if (str_starts_with($rule, 'unique:')) {
                    $hasUnique = true;
                    break;
                }
            }
            if (!$hasUnique) {
                echo RED . "❌ Field '$field': design.md says UNIQUE but 'unique' rule is missing" . NC . "\n";
                $localErrors++;
            }
        }

        // メール形式チェック
        if ($expectedRules['email'] && !in_array('email', $actualRules)) {
            echo RED . "❌ Field '$field': design.md says EMAIL FORMAT but 'email' rule is missing" . NC . "\n";
            $localErrors++;
        }

        // accepted チェック
        if ($expectedRules['accepted'] && !in_array('accepted', $actualRules)) {
            echo RED . "❌ Field '$field': design.md says ACCEPTED but 'accepted' rule is missing" . NC . "\n";
            $localErrors++;
        }

        // 最小値チェック
        if ($expectedRules['min'] !== null) {
            $hasMin = false;
            foreach ($actualRules as $rule) {
                if (str_starts_with($rule, 'min:') && (int)substr($rule, 4) === $expectedRules['min']) {
                    $hasMin = true;
                    break;
                }
            }
            if (!$hasMin) {
                echo YELLOW . "⚠️  Field '$field': design.md says MIN:{$expectedRules['min']} but rule is missing or different" . NC . "\n";
                $warnings++;
            }
        }

        // 最大値チェック
        if ($expectedRules['max'] !== null) {
            $hasMax = false;
            foreach ($actualRules as $rule) {
                if (str_starts_with($rule, 'max:') && (int)substr($rule, 4) === $expectedRules['max']) {
                    $hasMax = true;
                    break;
                }
            }
            if (!$hasMax) {
                echo YELLOW . "⚠️  Field '$field': design.md says MAX:{$expectedRules['max']} but rule is missing or different" . NC . "\n";
                $warnings++;
            }
        }

        // 正規表現チェック
        if ($expectedRules['regex']) {
            $hasRegex = false;
            foreach ($actualRules as $rule) {
                if (str_starts_with($rule, 'regex:')) {
                    $hasRegex = true;
                    break;
                }
            }
            if (!$hasRegex) {
                echo RED . "❌ Field '$field': design.md says REGEX PATTERN but 'regex' rule is missing" . NC . "\n";
                $localErrors++;
            }
        }

        // same チェック
        if ($expectedRules['same'] !== null) {
            $hasSame = false;
            foreach ($actualRules as $rule) {
                if (str_starts_with($rule, 'same:')) {
                    $hasSame = true;
                    break;
                }
            }
            if (!$hasSame) {
                echo RED . "❌ Field '$field': design.md says SAME:{$expectedRules['same']} but 'same' rule is missing" . NC . "\n";
                $localErrors++;
            }
        }
    }

    if ($localErrors === 0) {
        echo GREEN . "✅ All backend validation rules match design.md" . NC . "\n";
    }

    $errors += $localErrors;
    return $localErrors;
}

/**
 * design.md のルールとフロントエンドの実装を比較
 */
function validateFrontendImplementation(array $designRules, array $frontendRules, string $componentName): int
{
    global $errors, $warnings;
    $localErrors = 0;

    echo BLUE . "\n📋 Checking: $componentName (Frontend)" . NC . "\n";
    echo str_repeat("-", 80) . "\n";

    if (empty($frontendRules)) {
        echo YELLOW . "⚠️  No frontend validation found in $componentName" . NC . "\n";
        $warnings++;
        return 0;
    }

    foreach ($designRules as $field => $expectedRules) {
        // フロントエンドでは terms_agreed を使用
        $actualField = ($field === 'agreeToTerms') ? 'terms_agreed' : $field;

        if (!isset($frontendRules[$actualField])) {
            echo YELLOW . "⚠️  Field '$field' (frontend: $actualField) is defined in design.md but missing in frontend validation" . NC . "\n";
            $warnings++;
            continue;
        }

        $actualRules = $frontendRules[$actualField];

        // 必須チェック
        if ($expectedRules['required'] && !$actualRules['required']) {
            echo RED . "❌ Field '$field': design.md says REQUIRED but frontend validation is missing" . NC . "\n";
            $localErrors++;
        }

        // メール形式チェック
        if ($expectedRules['email'] && !$actualRules['email']) {
            echo RED . "❌ Field '$field': design.md says EMAIL FORMAT but frontend validation is missing" . NC . "\n";
            $localErrors++;
        }

        // 最小値チェック
        if ($expectedRules['min'] !== null && $actualRules['minLength'] !== $expectedRules['min']) {
            echo YELLOW . "⚠️  Field '$field': design.md says MIN:{$expectedRules['min']} but frontend has MIN:{$actualRules['minLength']}" . NC . "\n";
            $warnings++;
        }

        // 最大値チェック
        if ($expectedRules['max'] !== null && $actualRules['maxLength'] !== $expectedRules['max']) {
            echo YELLOW . "⚠️  Field '$field': design.md says MAX:{$expectedRules['max']} but frontend has MAX:{$actualRules['maxLength']}" . NC . "\n";
            $warnings++;
        }
    }

    if ($localErrors === 0) {
        echo GREEN . "✅ All frontend validation rules match design.md" . NC . "\n";
    }

    $errors += $localErrors;
    return $localErrors;
}

/**
 * design.mdから必要なページ一覧を抽出
 */
function extractPagesFromDesignMd(string $designPath): array
{
    if (!file_exists($designPath)) {
        return [];
    }

    $content = file_get_contents($designPath);
    $pages = [];

    // **画面一覧**: セクションからページを抽出
    if (preg_match('/\*\*画面一覧\*\*:(.*?)(?=\n\n\*\*|$)/s', $content, $matches)) {
        $section = $matches[1];
        $lines = explode("\n", $section);
        foreach ($lines as $line) {
            // 例: - ログイン画面 (`Login.tsx`)
            if (preg_match('/`([A-Za-z]+\.tsx)`/', $line, $m)) {
                $pages[] = $m[1];
            }
        }
    }

    return $pages;
}

/**
 * design.mdから必要なルート一覧を抽出
 */
function extractRoutesFromDesignMd(string $designPath): array
{
    if (!file_exists($designPath)) {
        return [];
    }

    $content = file_get_contents($designPath);
    $routes = [];

    // **エンドポイント**: セクションからルートを抽出
    if (preg_match('/\*\*エンドポイント\*\*:(.*?)(?=\n\n\*\*|$)/s', $content, $matches)) {
        $section = $matches[1];
        $lines = explode("\n", $section);
        foreach ($lines as $line) {
            // 例: - POST `/register` - ユーザー登録処理
            if (preg_match('/(GET|POST|PUT|DELETE|PATCH)\s+`([^`]+)`/', $line, $m)) {
                $routes[] = [
                    'method' => $m[1],
                    'path' => $m[2],
                ];
            }
        }
    }

    return $routes;
}

/**
 * ページコンポーネントの存在確認
 */
function validatePages(string $specName, array $pages): int
{
    global $projectRoot, $errors;

    $localErrors = 0;

    echo "\n" . str_repeat("=", 80) . "\n";
    echo "Page Components Existence Check\n";
    echo str_repeat("=", 80) . "\n";

    if (empty($pages)) {
        echo YELLOW . "⚠️  No pages defined in design.md" . NC . "\n";
        return 0;
    }

    echo "Checking " . count($pages) . " page component(s)...\n";

    foreach ($pages as $page) {
        $pagePath = "$projectRoot/resources/js/Pages/Auth/$page";
        if (!file_exists($pagePath)) {
            echo RED . "❌ Page component NOT FOUND: $page" . NC . "\n";
            echo RED . "   Expected at: $pagePath" . NC . "\n";
            $localErrors++;
            $errors++;
        } else {
            echo GREEN . "✅ $page exists" . NC . "\n";

            // useDynamicFormの使用確認
            $content = file_get_contents($pagePath);
            if (!str_contains($content, 'useDynamicForm')) {
                echo RED . "❌ $page does NOT use useDynamicForm hook" . NC . "\n";
                echo RED . "   This violates the project requirement" . NC . "\n";
                $localErrors++;
                $errors++;
            }

            // Inertia useFormの使用検出（禁止事項）
            if (str_contains($content, 'useForm')) {
                echo RED . "❌ $page uses Inertia useForm (FORBIDDEN)" . NC . "\n";
                echo RED . "   Must use useDynamicForm instead" . NC . "\n";
                $localErrors++;
                $errors++;
            }
        }
    }

    return $localErrors;
}

/**
 * ルート定義の存在確認
 */
function validateRoutes(string $specName, array $routes): int
{
    global $projectRoot, $errors;

    $localErrors = 0;

    echo "\n" . str_repeat("=", 80) . "\n";
    echo "Routes Definition Check\n";
    echo str_repeat("=", 80) . "\n";

    if (empty($routes)) {
        echo YELLOW . "⚠️  No routes defined in design.md" . NC . "\n";
        return 0;
    }

    $webRoutesPath = "$projectRoot/routes/web.php";
    if (!file_exists($webRoutesPath)) {
        echo RED . "❌ routes/web.php NOT FOUND" . NC . "\n";
        $errors++;
        return 1;
    }

    $routesContent = file_get_contents($webRoutesPath);

    echo "Checking " . count($routes) . " route(s)...\n";

    foreach ($routes as $route) {
        $method = strtolower($route['method']);
        $path = $route['path'];

        // ルート定義のパターンを検索
        // 例: Route::post('/register', ...)
        $pattern = "/Route::$method\s*\(\s*['\"]" . preg_quote($path, '/') . "['\"]/";

        if (!preg_match($pattern, $routesContent)) {
            echo RED . "❌ Route NOT FOUND: {$route['method']} $path" . NC . "\n";
            echo RED . "   Expected in: routes/web.php" . NC . "\n";
            $localErrors++;
            $errors++;
        } else {
            echo GREEN . "✅ {$route['method']} $path is defined" . NC . "\n";
        }
    }

    return $localErrors;
}

/**
 * 指定されたspecを検証
 */
function validateSpec(string $specName): void
{
    global $projectRoot, $errors, $warnings;

    echo "\n" . str_repeat("=", 80) . "\n";
    echo BLUE . "Validating Spec: $specName" . NC . "\n";
    echo str_repeat("=", 80) . "\n";

    // 1. design.md を解析
    $designPath = dirname(__DIR__, 2) . "/docs/specs/$specName/design.md";
    echo "📖 Parsing design.md...\n";

    if (!file_exists($designPath)) {
        echo YELLOW . "⚠️  design.md not found at: $designPath" . NC . "\n";
        echo YELLOW . "   Skipping spec: $specName" . NC . "\n";
        return;
    }

    $designRules = parseDesignMd($designPath);

    if (empty($designRules)) {
        echo YELLOW . "⚠️  No validation rules found in design.md for spec: $specName" . NC . "\n";
        echo YELLOW . "   Make sure '**バリデーション項目詳細**:' section exists" . NC . "\n";
        // バリデーションルールがなくても、ページとルートはチェックする
    } else {
        echo GREEN . "✅ Found " . count($designRules) . " field validation rules in design.md" . NC . "\n";
        foreach ($designRules as $field => $rules) {
            echo "   - $field: {$rules['raw']}\n";
        }
    }

    // フィールド名マッピング（design.md → backend）
    $backendFieldMapping = [
        'agreeToTerms' => 'terms_agreed',
    ];

    // design.mdのフィールドをバックエンド用にマッピング
    $backendDesignRules = [];
    foreach ($designRules as $field => $rules) {
        $backendField = $backendFieldMapping[$field] ?? $field;
        $backendDesignRules[$backendField] = $rules;
        $backendDesignRules[$backendField]['originalField'] = $field;
    }

    // 2. FormRequest を検証
    $formRequestClass = inferFormRequestClass($specName, $designRules);
    if ($formRequestClass && class_exists($formRequestClass)) {
        $requestRules = parseFormRequest($formRequestClass);
        validateBackendImplementation($backendDesignRules, $requestRules, basename(str_replace('\\', '/', $formRequestClass)));
    } else {
        if (!empty($designRules)) {
            echo RED . "\n❌ CRITICAL: FormRequest class NOT FOUND for spec: $specName" . NC . "\n";
            echo RED . "   design.md defines validation rules but backend implementation is missing" . NC . "\n";
            $errors++;
        }
    }

    // 3. Frontend を検証
    $frontendFile = inferFrontendFile($specName, $projectRoot);
    if ($frontendFile && file_exists($frontendFile)) {
        $frontendRules = parseFrontendValidation($frontendFile);
        validateFrontendImplementation($designRules, $frontendRules, basename($frontendFile));
    } else {
        if (!empty($designRules)) {
            echo RED . "\n❌ CRITICAL: Frontend file NOT FOUND for spec: $specName" . NC . "\n";
            echo RED . "   design.md defines validation rules but frontend implementation is missing" . NC . "\n";
            $errors++;
        }
    }

    // 4. ページコンポーネントの存在確認（NEW）
    $pages = extractPagesFromDesignMd($designPath);
    if (!empty($pages)) {
        validatePages($specName, $pages);
    }

    // 5. ルート定義の存在確認（NEW）
    $routes = extractRoutesFromDesignMd($designPath);
    if (!empty($routes)) {
        validateRoutes($specName, $routes);
    }
}

// ============================================================
// メイン処理
// ============================================================

if ($specName) {
    // 特定のspecのみ検証
    validateSpec($specName);
} else {
    // 全てのspecを検証
    $specsDir = dirname(__DIR__, 2) . "/docs/specs";
    $specs = [];

    if (is_dir($specsDir)) {
        $dirs = scandir($specsDir);
        foreach ($dirs as $dir) {
            if ($dir === '.' || $dir === '..') {
                continue;
            }
            $specPath = "$specsDir/$dir";
            if (is_dir($specPath) && file_exists("$specPath/design.md")) {
                $specs[] = $dir;
            }
        }
    }

    if (empty($specs)) {
        echo RED . "❌ No specs found in $specsDir" . NC . "\n";
        exit(1);
    }

    echo "Found " . count($specs) . " specs: " . implode(', ', $specs) . "\n";

    foreach ($specs as $spec) {
        validateSpec($spec);
    }
}

// ============================================================
// サマリー
// ============================================================
echo "\n" . str_repeat("=", 80) . "\n";
echo BLUE . "📊 Validation Integrity Summary" . NC . "\n";
echo str_repeat("=", 80) . "\n";

if ($errors === 0 && $warnings === 0) {
    echo GREEN . "✅ Perfect! All validation rules match design.md (Single Source of Truth)" . NC . "\n";
    exit(0);
} elseif ($errors === 0) {
    echo YELLOW . "⚠️  Found $warnings warning(s), but no critical errors" . NC . "\n";
    echo "   Review warnings to ensure consistency with design.md" . NC . "\n";
    exit(0);
} else {
    echo RED . "❌ Found $errors error(s) and $warnings warning(s)" . NC . "\n";
    echo "   Implementation does NOT match design.md specifications" . NC . "\n";
    echo "   Fix errors before deploying to production" . NC . "\n";
    exit(1);
}
