#!/usr/bin/env php
<?php
/**
 * PHPUnit テストスケルトン自動生成スクリプト
 *
 * 使用方法:
 *   php generate-phpunit-tests.php <spec-name>
 *
 * 例:
 *   php generate-phpunit-tests.php user-authentication
 *
 * 生成されるもの:
 *   - tests/Unit/Modules/{Module}/Application/UseCases/{UseCase}Test.php
 *   - tests/Feature/Modules/{Module}/Presentation/Controllers/{Controller}Test.php
 *
 * 注意:
 *   - 完全なテストコードではなく、スケルトン（テンプレート）を生成します
 *   - TODO コメントで開発者が実装すべき箇所を明示します
 */

declare(strict_types=1);

if ($argc < 2) {
    echo "Usage: php generate-phpunit-tests.php <spec-name>\n";
    echo "Example: php generate-phpunit-tests.php user-authentication\n";
    exit(1);
}

$specName = $argv[1];
$projectRoot = dirname(__DIR__, 3);
$testsDir = $projectRoot . "/dev-kit/docs/specs/{$specName}/tests";

// YAMLファイルのパス
$phpunitYaml = "{$testsDir}/phpunit.yaml";

if (!file_exists($phpunitYaml)) {
    echo "❌ ERROR: {$phpunitYaml} not found\n";
    exit(1);
}

echo "========================================================================\n";
echo "🔧 PHPUnit Test Skeleton Generator\n";
echo "========================================================================\n";
echo "Spec: {$specName}\n";
echo "\n";

/**
 * YAML簡易パーサー（usecases配列からname, class抽出）
 */
function parseYamlForUseCases(string $yamlPath): array
{
    $content = file_get_contents($yamlPath);
    $lines = explode("\n", $content);

    $useCases = [];
    $inUsecasesSection = false;
    $currentUseCase = null;
    $currentClass = null;

    foreach ($lines as $line) {
        // usecases: セクション開始を検出
        if (preg_match('/^usecases:/', $line)) {
            $inUsecasesSection = true;
            continue;
        }

        // usecasesセクション内でなければスキップ
        if (!$inUsecasesSection) {
            continue;
        }

        // 次のトップレベルセクション（unit_tests:等）で終了
        if (preg_match('/^[a-z_]+:/', $line) && !preg_match('/^\s/', $line)) {
            break;
        }

        // name: 行を検出
        if (preg_match('/^\s{2}-\s+name:\s*(.+)$/', $line, $matches)) {
            $currentUseCase = trim($matches[1]);
        }

        // class: 行を検出
        if (preg_match('/^\s{4}class:\s*(.+)$/', $line, $matches)) {
            $currentClass = trim($matches[1]);

            // classからmodule名を抽出（例: App\Modules\User\... → User）
            if ($currentUseCase && $currentClass && preg_match('/App\\\\Modules\\\\([^\\\\]+)\\\\/', $currentClass, $moduleMatches)) {
                $module = $moduleMatches[1];
                $useCases[] = [
                    'use_case' => $currentUseCase,
                    'module' => $module,
                ];
                $currentUseCase = null;
                $currentClass = null;
            }
        }
    }

    return $useCases;
}

/**
 * Unit Testスケルトン生成
 */
function generateUnitTestSkeleton(string $projectRoot, string $module, string $useCase): string
{
    $outputPath = "{$projectRoot}/tests/Unit/Modules/{$module}/Application/UseCases/{$useCase}Test.php";

    if (file_exists($outputPath)) {
        echo "⚠️  SKIP: {$outputPath} already exists\n";
        return $outputPath;
    }

    // ディレクトリ作成
    $dir = dirname($outputPath);
    if (!is_dir($dir)) {
        mkdir($dir, 0755, true);
    }

    $template = <<<PHP
<?php

declare(strict_types=1);

namespace Tests\Unit\Modules\\{$module}\\Application\\UseCases;

use App\Modules\\{$module}\\Application\\UseCases\\{$useCase};
use App\Modules\\{$module}\\Domain\Repositories\\{$module}RepositoryInterface;
use Mockery;
use PHPUnit\Framework\TestCase;

/**
 * {$useCase} UseCase テスト
 *
 * TODO: バックエンド実装完了後、テストコードを記述してください
 * 参考: dev-kit/docs/specs/{{SPEC_NAME}}/tests/phpunit.yaml
 */
final class {$useCase}Test extends TestCase
{
    private {$module}RepositoryInterface \$repository;
    private {$useCase} \$useCase;

    protected function setUp(): void
    {
        parent::setUp();
        \$this->repository = Mockery::mock({$module}RepositoryInterface::class);
        \$this->useCase = new {$useCase}(\$this->repository);
    }

    protected function tearDown(): void
    {
        Mockery::close();
        parent::tearDown();
    }

    // ========================================================================
    // 正常系テスト（30-40%）
    // ========================================================================

    /**
     * @test
     * TODO: 正常系テストを実装してください
     */
    public function executesSuccessfullyWithValidData(): void
    {
        // TODO: Arrange - テストデータとモックの準備
        // \$this->repository->shouldReceive('...')->andReturn(...);

        // TODO: Act - ユースケース実行
        // \$result = \$this->useCase->execute(...);

        // TODO: Assert - 期待通りの結果を確認
        // \$this->assertInstanceOf(..., \$result);

        \$this->markTestIncomplete('TODO: このテストを実装してください');
    }

    // ========================================================================
    // 異常系・境界値テスト（60-70%）
    // ========================================================================

    /**
     * @test
     * TODO: バリデーションエラーテストを実装してください
     */
    public function throwsExceptionWhenValidationFails(): void
    {
        // TODO: Arrange - 不正なデータを準備

        // TODO: Assert - 例外がスローされることを確認
        // \$this->expectException(SomeException::class);

        // TODO: Act - ユースケース実行
        // \$this->useCase->execute(...);

        \$this->markTestIncomplete('TODO: このテストを実装してください');
    }

    /**
     * @test
     * TODO: 境界値テストを実装してください
     */
    public function handlesBoundaryValues(): void
    {
        // TODO: 最小値・最大値・NULL等の境界値テストを実装

        \$this->markTestIncomplete('TODO: このテストを実装してください');
    }
}

PHP;

    file_put_contents($outputPath, $template);
    echo "✅ Created: {$outputPath}\n";

    return $outputPath;
}

/**
 * Domain層: RepositoryInterface生成
 */
function generateRepositoryInterface(string $projectRoot, string $module): string
{
    $outputPath = "{$projectRoot}/app/Modules/{$module}/Domain/Repositories/{$module}RepositoryInterface.php";

    if (file_exists($outputPath)) {
        return $outputPath;
    }

    $dir = dirname($outputPath);
    if (!is_dir($dir)) {
        mkdir($dir, 0755, true);
    }

    $template = <<<PHP
<?php

declare(strict_types=1);

namespace App\Modules\\{$module}\Domain\Repositories;

/**
 * {$module}RepositoryInterface
 *
 * TODO: バックエンド実装時に必要なメソッドを定義してください
 */
interface {$module}RepositoryInterface
{
    // TODO: リポジトリメソッドを定義
    // 例: public function findById(int \$id): ?{$module};
    // 例: public function save({$module} \$entity): void;
}

PHP;

    file_put_contents($outputPath, $template);
    echo "✅ Created: {$outputPath}\n";
    return $outputPath;
}

/**
 * Application層: UseCase生成
 */
function generateUseCaseSkeleton(string $projectRoot, string $module, string $useCase): string
{
    $outputPath = "{$projectRoot}/app/Modules/{$module}/Application/UseCases/{$useCase}.php";

    if (file_exists($outputPath)) {
        return $outputPath;
    }

    $dir = dirname($outputPath);
    if (!is_dir($dir)) {
        mkdir($dir, 0755, true);
    }

    $template = <<<PHP
<?php

declare(strict_types=1);

namespace App\Modules\\{$module}\Application\UseCases;

use App\Modules\\{$module}\Domain\Repositories\\{$module}RepositoryInterface;

/**
 * {$useCase} UseCase
 *
 * TODO: バックエンド実装時にビジネスロジックを実装してください
 */
final class {$useCase}
{
    public function __construct(
        private readonly {$module}RepositoryInterface \$repository
    ) {
    }

    public function execute(/* TODO: パラメータを定義 */): void
    {
        // TODO: ビジネスロジックを実装
        throw new \RuntimeException('{$useCase}::execute() is not implemented yet');
    }
}

PHP;

    file_put_contents($outputPath, $template);
    echo "✅ Created: {$outputPath}\n";
    return $outputPath;
}

/**
 * Infrastructure層: Repository実装生成
 */
function generateRepositoryImplementation(string $projectRoot, string $module): string
{
    $outputPath = "{$projectRoot}/app/Modules/{$module}/Infrastructure/Eloquent{$module}Repository.php";

    if (file_exists($outputPath)) {
        return $outputPath;
    }

    $dir = dirname($outputPath);
    if (!is_dir($dir)) {
        mkdir($dir, 0755, true);
    }

    $template = <<<PHP
<?php

declare(strict_types=1);

namespace App\Modules\\{$module}\Infrastructure;

use App\Modules\\{$module}\Domain\Repositories\\{$module}RepositoryInterface;

/**
 * Eloquent{$module}Repository
 *
 * TODO: バックエンド実装時にリポジトリメソッドを実装してください
 */
final class Eloquent{$module}Repository implements {$module}RepositoryInterface
{
    public function __construct()
    {
        // TODO: Eloquentモデルを注入
    }

    // TODO: インターフェースで定義したメソッドを実装
}

PHP;

    file_put_contents($outputPath, $template);
    echo "✅ Created: {$outputPath}\n";
    return $outputPath;
}

/**
 * Infrastructure層: Eloquentモデル生成
 */
function generateEloquentModel(string $projectRoot, string $module): string
{
    $outputPath = "{$projectRoot}/app/Modules/{$module}/Infrastructure/{$module}.php";

    if (file_exists($outputPath)) {
        return $outputPath;
    }

    $dir = dirname($outputPath);
    if (!is_dir($dir)) {
        mkdir($dir, 0755, true);
    }

    $tableName = strtolower($module) . 's';

    $template = <<<PHP
<?php

declare(strict_types=1);

namespace App\Modules\\{$module}\Infrastructure;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

/**
 * {$module} Eloquent Model
 *
 * TODO: バックエンド実装時にモデル定義を完成させてください
 */
final class {$module} extends Model
{
    use HasFactory;

    protected \$table = '{$tableName}';

    protected \$fillable = [
        // TODO: fillableカラムを定義
    ];

    protected \$hidden = [
        // TODO: hiddenカラムを定義
    ];

    protected \$casts = [
        // TODO: castsを定義
    ];
}

PHP;

    file_put_contents($outputPath, $template);
    echo "✅ Created: {$outputPath}\n";
    return $outputPath;
}

/**
 * Presentation層: Controller生成
 */
function generateController(string $projectRoot, string $module, string $useCase): string
{
    $controllerName = $useCase . 'Controller';
    $outputPath = "{$projectRoot}/app/Modules/{$module}/Presentation/Controllers/{$controllerName}.php";

    if (file_exists($outputPath)) {
        return $outputPath;
    }

    $dir = dirname($outputPath);
    if (!is_dir($dir)) {
        mkdir($dir, 0755, true);
    }

    $requestName = $useCase . 'Request';

    $template = <<<PHP
<?php

declare(strict_types=1);

namespace App\Modules\\{$module}\Presentation\Controllers;

use App\Modules\\{$module}\Application\UseCases\\{$useCase};
use App\Modules\\{$module}\Presentation\Requests\\{$requestName};
use Illuminate\Http\RedirectResponse;

/**
 * {$controllerName}
 *
 * TODO: バックエンド実装時にコントローラーロジックを実装してください
 */
final class {$controllerName}
{
    public function __construct(
        private readonly {$useCase} \$useCase
    ) {
    }

    public function __invoke({$requestName} \$request): RedirectResponse
    {
        // TODO: コントローラーロジックを実装
        throw new \RuntimeException('{$controllerName}::__invoke() is not implemented yet');
    }
}

PHP;

    file_put_contents($outputPath, $template);
    echo "✅ Created: {$outputPath}\n";
    return $outputPath;
}

/**
 * Presentation層: FormRequest生成
 */
function generateFormRequest(string $projectRoot, string $module, string $useCase): string
{
    $requestName = $useCase . 'Request';
    $outputPath = "{$projectRoot}/app/Modules/{$module}/Presentation/Requests/{$requestName}.php";

    if (file_exists($outputPath)) {
        return $outputPath;
    }

    $dir = dirname($outputPath);
    if (!is_dir($dir)) {
        mkdir($dir, 0755, true);
    }

    $template = <<<PHP
<?php

declare(strict_types=1);

namespace App\Modules\\{$module}\Presentation\Requests;

use Illuminate\Foundation\Http\FormRequest;

/**
 * {$requestName}
 *
 * TODO: バックエンド実装時にバリデーションルールを実装してください
 */
final class {$requestName} extends FormRequest
{
    public function authorize(): bool
    {
        return true; // TODO: 認可ロジックを実装
    }

    public function rules(): array
    {
        return [
            // TODO: バリデーションルールを定義
        ];
    }

    public function messages(): array
    {
        return [
            // TODO: カスタムメッセージを定義
        ];
    }
}

PHP;

    file_put_contents($outputPath, $template);
    echo "✅ Created: {$outputPath}\n";
    return $outputPath;
}

/**
 * ServiceProvider生成
 */
function generateServiceProvider(string $projectRoot, string $module): string
{
    $outputPath = "{$projectRoot}/app/Modules/{$module}/Providers/{$module}ServiceProvider.php";

    if (file_exists($outputPath)) {
        return $outputPath;
    }

    $dir = dirname($outputPath);
    if (!is_dir($dir)) {
        mkdir($dir, 0755, true);
    }

    $template = <<<PHP
<?php

declare(strict_types=1);

namespace App\Modules\\{$module}\Providers;

use App\Modules\\{$module}\Domain\Repositories\\{$module}RepositoryInterface;
use App\Modules\\{$module}\Infrastructure\Eloquent{$module}Repository;
use Illuminate\Support\ServiceProvider;

/**
 * {$module}ServiceProvider
 *
 * TODO: バックエンド実装時に必要な依存関係を登録してください
 */
final class {$module}ServiceProvider extends ServiceProvider
{
    public function register(): void
    {
        // Repository binding
        \$this->app->bind(
            {$module}RepositoryInterface::class,
            Eloquent{$module}Repository::class
        );
    }

    public function boot(): void
    {
        // Routes
        \$this->loadRoutesFrom(__DIR__ . '/../routes.php');
    }
}

PHP;

    file_put_contents($outputPath, $template);
    echo "✅ Created: {$outputPath}\n";
    return $outputPath;
}

/**
 * Feature Testスケルトン生成
 */
function generateFeatureTestSkeleton(string $projectRoot, string $module, string $controller): string
{
    $outputPath = "{$projectRoot}/tests/Feature/Modules/{$module}/Presentation/Controllers/{$controller}Test.php";

    if (file_exists($outputPath)) {
        echo "⚠️  SKIP: {$outputPath} already exists\n";
        return $outputPath;
    }

    // ディレクトリ作成
    $dir = dirname($outputPath);
    if (!is_dir($dir)) {
        mkdir($dir, 0755, true);
    }

    $template = <<<PHP
<?php

declare(strict_types=1);

namespace Tests\Feature\Modules\\{$module}\\Presentation\\Controllers;

use Illuminate\Foundation\Testing\RefreshDatabase;
use Tests\TestCase;

/**
 * {$controller} 統合テスト
 *
 * TODO: バックエンド実装完了後、テストコードを記述してください
 * 参考: dev-kit/docs/specs/{{SPEC_NAME}}/tests/phpunit.yaml
 */
final class {$controller}Test extends TestCase
{
    use RefreshDatabase;

    // ========================================================================
    // 正常系テスト（30-40%）
    // ========================================================================

    /**
     * @test
     * TODO: 正常系HTTPリクエストテストを実装してください
     */
    public function returnsSuccessResponseWithValidData(): void
    {
        // TODO: Arrange - テストデータを準備
        // \$user = User::factory()->create();

        // TODO: Act - HTTPリクエスト送信
        // \$response = \$this->actingAs(\$user)->post('/api/endpoint', [...]);

        // TODO: Assert - レスポンス確認
        // \$response->assertStatus(200);
        // \$response->assertJson([...]);

        \$this->markTestIncomplete('TODO: このテストを実装してください');
    }

    // ========================================================================
    // 異常系テスト（60-70%）
    // ========================================================================

    /**
     * @test
     * TODO: バリデーションエラーテストを実装してください
     */
    public function returnsValidationErrorsWithInvalidData(): void
    {
        // TODO: Arrange - 不正なデータを準備

        // TODO: Act - HTTPリクエスト送信
        // \$response = \$this->post('/api/endpoint', [...]);

        // TODO: Assert - バリデーションエラーレスポンス確認
        // \$response->assertStatus(422);
        // \$response->assertJsonValidationErrors(['field']);

        \$this->markTestIncomplete('TODO: このテストを実装してください');
    }

    /**
     * @test
     * TODO: 認証エラーテストを実装してください（必要に応じて）
     */
    public function returnsUnauthorizedWhenNotAuthenticated(): void
    {
        // TODO: 未認証状態でのアクセステストを実装

        \$this->markTestIncomplete('TODO: このテストを実装してください（不要なら削除）');
    }
}

PHP;

    file_put_contents($outputPath, $template);
    echo "✅ Created: {$outputPath}\n";

    return $outputPath;
}

// ========================================================================
// Clean Architecture スケルトン生成
// ========================================================================
echo "📝 Step 1: Generating Clean Architecture Skeleton Files\n";
echo "------------------------------------------------------------------------\n";

$useCases = parseYamlForUseCases($phpunitYaml);

if (empty($useCases)) {
    echo "⚠️  No use cases found in {$phpunitYaml}\n";
} else {
    foreach ($useCases as $uc) {
        $module = $uc['module'];
        $useCase = $uc['use_case'];

        // Domain層
        generateRepositoryInterface($projectRoot, $module);

        // Application層
        generateUseCaseSkeleton($projectRoot, $module, $useCase);

        // Infrastructure層
        generateRepositoryImplementation($projectRoot, $module);
        generateEloquentModel($projectRoot, $module);

        // Presentation層
        generateController($projectRoot, $module, $useCase);
        generateFormRequest($projectRoot, $module, $useCase);
    }

    // ServiceProvider生成
    if (!empty($useCases)) {
        $module = $useCases[0]['module'];
        generateServiceProvider($projectRoot, $module);
    }
}

echo "\n";

// ========================================================================
// Unit Tests生成
// ========================================================================
echo "📝 Step 2: Generating Unit Test Skeletons\n";
echo "------------------------------------------------------------------------\n";

if (!empty($useCases)) {
    foreach ($useCases as $uc) {
        generateUnitTestSkeleton($projectRoot, $uc['module'], $uc['use_case']);
    }
} else {
    echo "⚠️  No use cases found\n";
}

echo "\n";

// ========================================================================
// Feature Tests生成
// ========================================================================
echo "📝 Step 3: Generating Feature Test Skeletons\n";
echo "------------------------------------------------------------------------\n";

if (!empty($useCases)) {
    foreach ($useCases as $uc) {
        generateFeatureTestSkeleton($projectRoot, $uc['module'], $uc['use_case'] . 'Controller');
    }
} else {
    echo "⚠️  No use cases found\n";
}

echo "\n";

// ========================================================================
// 最終サマリー
// ========================================================================
echo "========================================================================\n";
echo "📊 Generation Summary\n";
echo "========================================================================\n";
echo "\n";

if (!empty($useCases)) {
    $useCaseCount = count($useCases);
    echo "✅ Clean Architecture skeleton files generated:\n";
    echo "   - Domain layer (RepositoryInterface): 1 file\n";
    echo "   - Application layer (UseCase): {$useCaseCount} files\n";
    echo "   - Infrastructure layer (Model, Repository): 2 files\n";
    echo "   - Presentation layer (Controller, Request): " . ($useCaseCount * 2) . " files\n";
    echo "   - Provider (ServiceProvider): 1 file\n";
    echo "\n";
    echo "✅ Test skeleton files generated:\n";
    echo "   - Unit tests: {$useCaseCount} files\n";
    echo "   - Feature tests: {$useCaseCount} files\n";
} else {
    echo "⚠️  No files generated (no use cases found in YAML)\n";
}

echo "\n";
echo "⚠️  IMPORTANT: These are SKELETONS with TODO comments!\n";
echo "\n";
echo "📚 Reference:\n";
echo "  - Test specifications: {$phpunitYaml}\n";
echo "\n";

// ========================================================================
// 次のステップの案内
// ========================================================================
echo "------------------------------------------------------------------------\n";
echo "📋 Next Steps\n";
echo "------------------------------------------------------------------------\n";
echo "\n";
echo "1. Implement backend by filling TODO comments in skeleton files:\n";
echo "   - Domain layer: Define repository interface methods\n";
echo "   - Application layer: Implement UseCase business logic\n";
echo "   - Infrastructure layer: Implement Repository and Eloquent Model\n";
echo "   - Presentation layer: Implement Controller and FormRequest validation\n";
echo "\n";
echo "2. Implement test code in test skeleton files:\n";
echo "   - tests/Unit/Modules/{Module}/Application/UseCases/\n";
echo "   - tests/Feature/Modules/{Module}/Presentation/Controllers/\n";
echo "\n";
echo "3. Run tests to achieve Green state:\n";
echo "   ./vendor/bin/sail artisan test\n";
echo "\n";
echo "========================================================================\n";
