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
$unitTestsYaml = "{$testsDir}/unit-tests.yaml";
$featureTestsYaml = "{$testsDir}/feature-tests.yaml";

if (!file_exists($unitTestsYaml)) {
    echo "❌ ERROR: {$unitTestsYaml} not found\n";
    exit(1);
}

echo "========================================================================\n";
echo "🔧 PHPUnit Test Skeleton Generator\n";
echo "========================================================================\n";
echo "Spec: {$specName}\n";
echo "\n";

/**
 * YAML簡易パーサー（use_caseとmoduleのみ抽出）
 */
function parseYamlForUseCases(string $yamlPath): array
{
    $content = file_get_contents($yamlPath);
    $lines = explode("\n", $content);

    $useCases = [];
    $currentUseCase = null;
    $currentModule = null;

    foreach ($lines as $line) {
        // use_case行を検出
        if (preg_match('/^\s{2}use_case:\s*(.+)$/', $line, $matches)) {
            $currentUseCase = trim($matches[1]);
        }

        // module行を検出
        if (preg_match('/^\s{2}module:\s*(.+)$/', $line, $matches)) {
            $currentModule = trim($matches[1]);
        }

        // トップレベルキー（次のユースケース）を検出
        if (preg_match('/^([a-z_]+):$/', $line) && $currentUseCase && $currentModule) {
            $useCases[] = [
                'use_case' => $currentUseCase,
                'module' => $currentModule,
            ];
            $currentUseCase = null;
            $currentModule = null;
        }
    }

    // 最後のユースケースを追加
    if ($currentUseCase && $currentModule) {
        $useCases[] = [
            'use_case' => $currentUseCase,
            'module' => $currentModule,
        ];
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
use App\Modules\\{$module}\\Domain\\{$module}RepositoryInterface;
use Mockery;
use PHPUnit\Framework\TestCase;

/**
 * {$useCase} UseCase テスト
 *
 * TODO: このスケルトンを元に実際のテストケースを実装してください
 * 参考: dev-kit/docs/specs/{SPEC_NAME}/tests/unit-tests.yaml
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

    /** @test TODO: 正常系テストを実装 */
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

    /** @test TODO: バリデーションエラーテストを実装 */
    public function throwsExceptionWhenValidationFails(): void
    {
        // TODO: Arrange - 不正なデータを準備

        // TODO: Assert - 例外がスローされることを確認
        // \$this->expectException(SomeException::class);

        // TODO: Act - ユースケース実行
        // \$this->useCase->execute(...);

        \$this->markTestIncomplete('TODO: このテストを実装してください');
    }

    /** @test TODO: 境界値テストを実装 */
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
 * TODO: このスケルトンを元に実際のテストケースを実装してください
 * 参考: dev-kit/docs/specs/{SPEC_NAME}/tests/feature-tests.yaml
 */
final class {$controller}Test extends TestCase
{
    use RefreshDatabase;

    // ========================================================================
    // 正常系テスト（30-40%）
    // ========================================================================

    /** @test TODO: 正常系HTTPリクエストテストを実装 */
    public function returnsSuccessResponseWithValidData(): void
    {
        // TODO: Arrange - テストデータを準備

        // TODO: Act - HTTPリクエスト送信
        // \$response = \$this->post('/api/endpoint', [...]);

        // TODO: Assert - レスポンス確認
        // \$response->assertStatus(200);
        // \$response->assertJson([...]);

        \$this->markTestIncomplete('TODO: このテストを実装してください');
    }

    // ========================================================================
    // 異常系テスト（60-70%）
    // ========================================================================

    /** @test TODO: バリデーションエラーテストを実装 */
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

    /** @test TODO: 認証エラーテストを実装（必要に応じて） */
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
// Unit Tests生成
// ========================================================================
echo "📝 Step 1: Generating Unit Test Skeletons\n";
echo "------------------------------------------------------------------------\n";

$useCases = parseYamlForUseCases($unitTestsYaml);

if (empty($useCases)) {
    echo "⚠️  No use cases found in {$unitTestsYaml}\n";
} else {
    foreach ($useCases as $uc) {
        generateUnitTestSkeleton($projectRoot, $uc['module'], $uc['use_case']);
    }
}

echo "\n";

// ========================================================================
// Feature Tests生成（簡易版）
// ========================================================================
echo "📝 Step 2: Generating Feature Test Skeletons\n";
echo "------------------------------------------------------------------------\n";

// feature-tests.yamlから情報抽出（将来的に実装）
echo "⚠️  Feature test generation is not fully implemented yet.\n";
echo "   Manual creation required for:\n";
echo "   - tests/Feature/Modules/{Module}/Presentation/Controllers/{Controller}Test.php\n";

echo "\n";

// ========================================================================
// 最終サマリー
// ========================================================================
echo "========================================================================\n";
echo "📊 Test Generation Summary\n";
echo "========================================================================\n";
echo "\n";
echo "✅ Unit test skeletons generated: " . count($useCases) . "\n";
echo "\n";
echo "⚠️  IMPORTANT: These are SKELETONS, not complete tests!\n";
echo "\n";
echo "Next steps:\n";
echo "  1. Review generated test files\n";
echo "  2. Implement TODO sections based on test-cases.yaml\n";
echo "  3. Run tests: ./vendor/bin/sail artisan test\n";
echo "  4. Achieve 100% pass rate before proceeding\n";
echo "\n";
echo "📚 Reference:\n";
echo "  - Unit test cases: {$unitTestsYaml}\n";
if (file_exists($featureTestsYaml)) {
    echo "  - Feature test cases: {$featureTestsYaml}\n";
}
echo "\n";
echo "========================================================================\n";
