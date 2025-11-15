#!/bin/bash

##############################################################################
# Test Template Generator (テストテンプレート生成スクリプト)
#
# このスクリプトは、テスト作成時に参照するテンプレートファイルを自動生成します。
#
# 生成されるテンプレート:
#   - tests/Unit/.template.UnitTest.php
#   - tests/Feature/.template.FeatureTest.php
#   - tests/e2e/.template.spec.ts
#
# 使用方法:
#   ./dev-kit/scripts/setup/create-test-templates.sh
#
##############################################################################

set -e

PROJECT_ROOT="$(cd "$(dirname "${BASH_SOURCE[0]}")/../../.." && pwd)"

# 色設定
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

echo -e "${BLUE}=== Test Template Generator ===${NC}"
echo ""

# ========================================================================
# 1. Unit Test Template
# ========================================================================
echo -e "${BLUE}[1/3] Generating Unit Test Template...${NC}"

mkdir -p "$PROJECT_ROOT/tests/Unit"

cat > "$PROJECT_ROOT/tests/Unit/.template.UnitTest.php" <<'UNIT_TEMPLATE_EOF'
<?php

declare(strict_types=1);

namespace Tests\Unit\Modules\[Module]\[Layer]\[Component];

use Tests\TestCase;

/**
 * [Component]Test
 *
 * [コンポーネントの説明を日本語で記述]
 *
 * Unit Test Template Usage Guidelines:
 * - テストメソッド名は英語で記述する（test_メソッド名）
 * - 各テストメソッドの上に日本語でPHPDocコメントを記述する
 * - AAA（Arrange-Act-Assert）パターンに従う
 * - 正常系30-40%, 異常系60-70%の比率を目指す
 */
class TemplateTest extends TestCase
{
    private $dependency;

    protected function setUp(): void
    {
        parent::setUp();

        // テスト前の共通セットアップ処理
        // 依存オブジェクトのモック作成など
    }

    protected function tearDown(): void
    {
        // テスト後のクリーンアップ処理
        parent::tearDown();
    }

    /**
     * 正しいデータで処理が成功すること
     *
     * @test 正常系テストの例
     */
    public function test_succeeds_with_valid_data(): void
    {
        // Arrange: テストデータとモックの準備
        $input = 'valid_data';

        // Act: テスト対象メソッドの実行
        $result = $this->someMethod($input);

        // Assert: 期待される結果の検証
        $this->assertEquals('expected_value', $result);
    }

    /**
     * 無効なデータで例外がスローされること
     *
     * @test 異常系テストの例
     */
    public function test_throws_exception_with_invalid_data(): void
    {
        // Arrange: 無効なテストデータの準備
        $invalidInput = 'invalid_data';

        // Assert: 例外が発生することを期待
        $this->expectException(\InvalidArgumentException::class);
        $this->expectExceptionMessage('無効なデータです。');

        // Act: テスト対象メソッドの実行
        $this->someMethod($invalidInput);
    }

    /**
     * 空の入力で例外がスローされること
     */
    public function test_throws_exception_with_empty_input(): void
    {
        // Arrange
        $emptyInput = '';

        // Assert
        $this->expectException(\InvalidArgumentException::class);

        // Act
        $this->someMethod($emptyInput);
    }

    /**
     * 境界値テスト：最小値で成功すること
     */
    public function test_succeeds_with_minimum_value(): void
    {
        // Arrange
        $minValue = 0;

        // Act
        $result = $this->someMethod($minValue);

        // Assert
        $this->assertTrue($result);
    }

    /**
     * 境界値テスト：最大値で成功すること
     */
    public function test_succeeds_with_maximum_value(): void
    {
        // Arrange
        $maxValue = 999;

        // Act
        $result = $this->someMethod($maxValue);

        // Assert
        $this->assertTrue($result);
    }

    /**
     * 境界値テスト：最小値未満で失敗すること
     */
    public function test_fails_below_minimum_value(): void
    {
        // Arrange
        $belowMin = -1;

        // Assert
        $this->expectException(\OutOfRangeException::class);

        // Act
        $this->someMethod($belowMin);
    }

    // ========================================
    // プライベートヘルパーメソッド
    // ========================================

    private function someMethod($input)
    {
        // テスト対象メソッドの実装（実際のテストではこれは別クラスに存在）
        return $input;
    }
}

/**
 * PHPUnit Unit Test Template Guidelines
 *
 * ## メソッド命名規則
 *
 * ### ✅ 理想的な形式
 * ```php
 * /**
 *  * ユーザーが有効な認証情報でログインできること
 *  */
 * public function test_user_can_login_with_valid_credentials(): void
 * {
 *     // テスト実装
 * }
 * ```
 *
 * ### ❌ 避けるべき形式
 * ```php
 * // メソッド名が日本語（PHPUnitでは動作するが、推奨されない）
 * public function test_有効な認証情報でログインできること(): void
 * {
 *     // テスト実装
 * }
 * ```
 *
 * ## テスト構成
 *
 * 1. **正常系テスト（30-40%）**
 *    - 基本的な成功フロー
 *    - 有効なデータでの動作確認
 *
 * 2. **異常系テスト（60-70%）**
 *    - バリデーションエラー
 *    - 境界値テスト
 *    - 例外処理の確認
 *    - null/空値の処理
 *    - 型エラーの処理
 *
 * ## AAAパターン
 *
 * すべてのテストは以下の構造に従う：
 *
 * ```php
 * public function test_example(): void
 * {
 *     // Arrange: テストデータとモックの準備
 *     $input = 'test_data';
 *
 *     // Act: テスト対象メソッドの実行
 *     $result = $this->targetMethod($input);
 *
 *     // Assert: 期待される結果の検証
 *     $this->assertEquals('expected', $result);
 * }
 * ```
 *
 * ## アサーションメソッド
 *
 * - `assertEquals($expected, $actual)` - 値の等価性
 * - `assertSame($expected, $actual)` - 値と型の同一性
 * - `assertTrue($condition)` - 条件がtrueであること
 * - `assertFalse($condition)` - 条件がfalseであること
 * - `assertNull($value)` - 値がnullであること
 * - `assertCount($count, $array)` - 配列の要素数
 * - `assertInstanceOf($class, $object)` - インスタンスの型
 * - `expectException($exception)` - 例外が発生すること
 *
 * ## モックの使用
 *
 * ```php
 * use Mockery;
 *
 * protected function setUp(): void
 * {
 *     parent::setUp();
 *
 *     $this->repository = Mockery::mock(UserRepositoryInterface::class);
 *     $this->repository
 *         ->shouldReceive('findById')
 *         ->once()
 *         ->with(1)
 *         ->andReturn($user);
 * }
 *
 * protected function tearDown(): void
 * {
 *     Mockery::close();
 *     parent::tearDown();
 * }
 * ```
 *
 * ## テストデータの準備
 *
 * ```php
 * // ファクトリメソッドパターン
 * private function createValidUser(): User
 * {
 *     return User::reconstruct(
 *         id: UserId::from(1),
 *         name: UserName::from('山田 太郎'),
 *         email: Email::from('test@example.com'),
 *         password: HashedPassword::fromPlainText('Password123!'),
 *         createdAt: new DateTimeImmutable(),
 *     );
 * }
 * ```
 *
 * ## 日本語バリデーションメッセージのテスト
 *
 * ```php
 * /**
 *  * メールアドレスが空の場合にバリデーションエラーが発生すること
 *  */
 * public function test_throws_validation_exception_when_email_is_empty(): void
 * {
 *     // Arrange
 *     $input = new LoginInputDTO('', 'Password123!');
 *
 *     // Assert
 *     $this->expectException(ValidationException::class);
 *     $this->expectExceptionMessage('メールアドレスは必須です。');
 *
 *     // Act
 *     $this->useCase->execute($input);
 * }
 * ```
 */

UNIT_TEMPLATE_EOF

echo -e "${GREEN}  ✓ tests/Unit/.template.UnitTest.php${NC}"
echo ""

# ========================================================================
# 2. Feature Test Template
# ========================================================================
echo -e "${BLUE}[2/3] Generating Feature Test Template...${NC}"

mkdir -p "$PROJECT_ROOT/tests/Feature"

cat > "$PROJECT_ROOT/tests/Feature/.template.FeatureTest.php" <<'FEATURE_TEMPLATE_EOF'
<?php

declare(strict_types=1);

namespace Tests\Feature\Modules\[Module]\Presentation\Controllers;

use Tests\TestCase;
use Illuminate\Foundation\Testing\RefreshDatabase;

/**
 * [Controller]Test
 *
 * [コントローラーの説明を日本語で記述]
 *
 * Feature Test Template Usage Guidelines:
 * - テストメソッド名は英語で記述する（test_メソッド名）
 * - 各テストメソッドの上に日本語でPHPDocコメントを記述する
 * - HTTPリクエスト/レスポンスのテストに使用
 * - 正常系30-40%, 異常系60-70%の比率を目指す
 * - 日本語バリデーションメッセージの検証を忘れない
 */
class TemplateControllerTest extends TestCase
{
    use RefreshDatabase;

    protected function setUp(): void
    {
        parent::setUp();

        // テスト前の共通セットアップ処理
        // データベースのシード、認証ユーザーの作成など
    }

    /**
     * 正常系: 有効なデータでリクエストが成功すること
     *
     * @test 正常系テストの例
     */
    public function test_succeeds_with_valid_data(): void
    {
        // Arrange: テストデータの準備
        $requestData = [
            'email' => 'test@example.com',
            'password' => 'Password123!',
        ];

        // Act: HTTPリクエストの実行
        $response = $this->postJson('/api/endpoint', $requestData);

        // Assert: レスポンスの検証
        $response->assertStatus(200);
        $response->assertJson([
            'success' => true,
            'message' => '成功しました。',
        ]);
    }

    /**
     * 異常系: 無効なデータでバリデーションエラーが返されること
     *
     * @test 異常系テストの例
     */
    public function test_returns_validation_error_with_invalid_data(): void
    {
        // Arrange: 無効なテストデータの準備
        $invalidData = [
            'email' => 'invalid-email',  // 不正な形式
            'password' => '',             // 必須項目が空
        ];

        // Act: HTTPリクエストの実行
        $response = $this->postJson('/api/endpoint', $invalidData);

        // Assert: バリデーションエラーの検証
        $response->assertStatus(422);
        $response->assertJsonValidationErrors(['email', 'password']);

        // 日本語エラーメッセージの検証
        $response->assertJsonFragment([
            'email' => ['メールアドレスの形式が正しくありません。'],
            'password' => ['パスワードは必須です。'],
        ]);
    }

    /**
     * 認証が必要なエンドポイントで未認証時に401が返されること
     */
    public function test_returns_unauthorized_when_not_authenticated(): void
    {
        // Act: 認証なしでリクエスト
        $response = $this->getJson('/api/protected-endpoint');

        // Assert
        $response->assertStatus(401);
    }

    /**
     * 認証済みユーザーが保護されたエンドポイントにアクセスできること
     */
    public function test_authenticated_user_can_access_protected_endpoint(): void
    {
        // Arrange: 認証ユーザーの作成
        $user = $this->createAuthenticatedUser();

        // Act: 認証付きでリクエスト
        $response = $this->actingAs($user)->getJson('/api/protected-endpoint');

        // Assert
        $response->assertStatus(200);
    }

    /**
     * 存在しないリソースへのアクセスで404が返されること
     */
    public function test_returns_not_found_for_nonexistent_resource(): void
    {
        // Arrange
        $nonexistentId = 99999;

        // Act
        $response = $this->getJson("/api/resource/{$nonexistentId}");

        // Assert
        $response->assertStatus(404);
        $response->assertJson([
            'error' => 'リソースが見つかりません。',
        ]);
    }

    /**
     * GETリクエスト: リソース一覧の取得が成功すること
     */
    public function test_can_retrieve_resource_list(): void
    {
        // Arrange: テストデータの作成
        $this->createTestResources(3);

        // Act
        $response = $this->getJson('/api/resources');

        // Assert
        $response->assertStatus(200);
        $response->assertJsonCount(3, 'data');
        $response->assertJsonStructure([
            'data' => [
                '*' => ['id', 'name', 'created_at'],
            ],
        ]);
    }

    /**
     * POSTリクエスト: リソースの作成が成功すること
     */
    public function test_can_create_resource(): void
    {
        // Arrange
        $data = [
            'name' => 'テストリソース',
            'description' => '説明文',
        ];

        // Act
        $response = $this->postJson('/api/resources', $data);

        // Assert
        $response->assertStatus(201);
        $response->assertJsonFragment($data);

        // データベースに保存されたことを確認
        $this->assertDatabaseHas('resources', $data);
    }

    /**
     * PUTリクエスト: リソースの更新が成功すること
     */
    public function test_can_update_resource(): void
    {
        // Arrange
        $resource = $this->createTestResource();
        $updateData = ['name' => '更新後の名前'];

        // Act
        $response = $this->putJson("/api/resources/{$resource->id}", $updateData);

        // Assert
        $response->assertStatus(200);
        $response->assertJsonFragment($updateData);

        // データベースが更新されたことを確認
        $this->assertDatabaseHas('resources', [
            'id' => $resource->id,
            'name' => '更新後の名前',
        ]);
    }

    /**
     * DELETEリクエスト: リソースの削除が成功すること
     */
    public function test_can_delete_resource(): void
    {
        // Arrange
        $resource = $this->createTestResource();

        // Act
        $response = $this->deleteJson("/api/resources/{$resource->id}");

        // Assert
        $response->assertStatus(204);

        // データベースから削除されたことを確認
        $this->assertDatabaseMissing('resources', [
            'id' => $resource->id,
        ]);
    }

    /**
     * 必須フィールドが空の場合にバリデーションエラーが返されること
     */
    public function test_returns_validation_error_when_required_field_is_empty(): void
    {
        // Arrange
        $data = [
            'name' => '',  // 必須フィールドが空
        ];

        // Act
        $response = $this->postJson('/api/resources', $data);

        // Assert
        $response->assertStatus(422);
        $response->assertJsonValidationErrors(['name']);
        $response->assertJsonFragment([
            'name' => ['名前は必須です。'],
        ]);
    }

    // ========================================
    // プライベートヘルパーメソッド
    // ========================================

    private function createAuthenticatedUser()
    {
        // 認証ユーザーの作成
        return \App\Modules\User\Domain\Entities\User::factory()->create();
    }

    private function createTestResource()
    {
        // テストリソースの作成
        return \App\Models\Resource::factory()->create();
    }

    private function createTestResources(int $count): void
    {
        // 複数のテストリソースを作成
        \App\Models\Resource::factory()->count($count)->create();
    }
}

/**
 * PHPUnit Feature Test Template Guidelines
 *
 * ## Feature Test の目的
 *
 * - Presentation層（Controller/Middleware/Routes）のテスト
 * - HTTPリクエスト/レスポンスのテスト
 * - 認証・認可のテスト
 * - バリデーションのテスト（日本語メッセージ含む）
 * - データベース統合テスト
 *
 * ## メソッド命名規則
 *
 * ### ✅ 理想的な形式
 * ```php
 * /**
 *  * 有効な認証情報でログインが成功すること
 *  */
 * public function test_login_succeeds_with_valid_credentials(): void
 * {
 *     // テスト実装
 * }
 * ```
 *
 * ## HTTPメソッドとアサーション
 *
 * ### GET リクエスト
 * ```php
 * $response = $this->get('/endpoint');
 * $response = $this->getJson('/api/endpoint');
 * ```
 *
 * ### POST リクエスト
 * ```php
 * $response = $this->post('/endpoint', $data);
 * $response = $this->postJson('/api/endpoint', $data);
 * ```
 *
 * ### PUT/PATCH リクエスト
 * ```php
 * $response = $this->put('/endpoint', $data);
 * $response = $this->patchJson('/api/endpoint', $data);
 * ```
 *
 * ### DELETE リクエスト
 * ```php
 * $response = $this->delete('/endpoint');
 * $response = $this->deleteJson('/api/endpoint');
 * ```
 *
 * ## レスポンスアサーション
 *
 * ### ステータスコード
 * ```php
 * $response->assertStatus(200);          // 成功
 * $response->assertStatus(201);          // 作成成功
 * $response->assertStatus(204);          // 削除成功（コンテンツなし）
 * $response->assertStatus(400);          // リクエストエラー
 * $response->assertStatus(401);          // 未認証
 * $response->assertStatus(403);          // 認可エラー
 * $response->assertStatus(404);          // 見つからない
 * $response->assertStatus(422);          // バリデーションエラー
 * $response->assertStatus(500);          // サーバーエラー
 * ```
 *
 * ### JSONレスポンス
 * ```php
 * $response->assertJson(['key' => 'value']);
 * $response->assertJsonFragment(['key' => 'value']);
 * $response->assertJsonStructure(['data' => ['id', 'name']]);
 * $response->assertJsonCount(10, 'data');
 * ```
 *
 * ### バリデーションエラー
 * ```php
 * $response->assertJsonValidationErrors(['email', 'password']);
 * $response->assertJsonFragment([
 *     'email' => ['メールアドレスは必須です。'],
 * ]);
 * ```
 *
 * ## 認証テスト
 *
 * ### 認証付きリクエスト
 * ```php
 * $user = User::factory()->create();
 * $response = $this->actingAs($user)->getJson('/api/protected');
 * ```
 *
 * ### セッションテスト
 * ```php
 * $response->assertSessionHas('key', 'value');
 * $response->assertSessionHasErrors(['field']);
 * ```
 *
 * ## データベースアサーション
 *
 * ```php
 * $this->assertDatabaseHas('users', ['email' => 'test@example.com']);
 * $this->assertDatabaseMissing('users', ['email' => 'deleted@example.com']);
 * $this->assertDatabaseCount('users', 10);
 * ```
 *
 * ## RefreshDatabase トレイト
 *
 * 各テスト実行前にデータベースをリセット：
 *
 * ```php
 * use Illuminate\Foundation\Testing\RefreshDatabase;
 *
 * class MyTest extends TestCase
 * {
 *     use RefreshDatabase;
 * }
 * ```
 *
 * ## 日本語バリデーションメッセージのテスト
 *
 * **重要**: バリデーションエラーメッセージが日本語で返されることを確認：
 *
 * ```php
 * $response->assertJsonFragment([
 *     'email' => ['メールアドレスは必須です。'],
 *     'password' => ['パスワードは8文字以上である必要があります。'],
 * ]);
 * ```
 */

FEATURE_TEMPLATE_EOF

echo -e "${GREEN}  ✓ tests/Feature/.template.FeatureTest.php${NC}"
echo ""

# ========================================================================
# 3. E2E Test Template
# ========================================================================
echo -e "${BLUE}[3/3] Generating E2E Test Template...${NC}"

mkdir -p "$PROJECT_ROOT/tests/e2e"

cat > "$PROJECT_ROOT/tests/e2e/.template.spec.ts" <<'E2E_TEMPLATE_EOF'
import { test, expect } from '@playwright/test';

/**
 * E2E-XXX: [テスト名]
 *
 * [テストの目的と概要を日本語で記述]
 *
 * Prerequisites:
 * - [前提条件を日本語で記述]
 */
test.describe('E2E-XXX: [テスト名]', () => {
  test('[テストシナリオを日本語で記述]', async ({ page }) => {
    // ステップ1: [アクションを日本語で記述]
    await page.goto('/path-to-page', { waitUntil: 'networkidle' });

    // ステップ2: [検証内容を日本語で記述]
    const element = page.locator('[data-testid="element-id"]');
    await expect(element).toBeVisible({ timeout: 10000 });

    // ステップ3: [次のアクションを日本語で記述]
    // await element.click();

    // 検証: [最終的な検証内容を日本語で記述]
    // await expect(page).toHaveURL('/expected-url');
  });

  // 異常系テストの例
  test('[エラーケースのシナリオを日本語で記述]', async ({ page }) => {
    // 前提条件: [前提条件を日本語で記述]

    // ステップ1: [アクションを日本語で記述]

    // ステップ2: [エラー状態の確認を日本語で記述]

    // 検証: [期待される結果を日本語で記述]
  });
});

/**
 * E2E Test Template Usage Guidelines (E2Eテストテンプレート使用ガイドライン)
 *
 * このテンプレートを使用して新しいE2Eテストを作成する際の注意事項:
 *
 * 1. **すべてのコメントは日本語で記述する**
 *    - ステップコメント: 「ステップ1: 〜」「ステップ2: 〜」
 *    - 検証コメント: 「検証: 〜」
 *    - 前提条件: 「前提条件: 〜」
 *
 * 2. **test.describe()とtest()の引数は日本語**
 *    - test.describe('E2E-001: ログイン機能テスト', () => {})
 *    - test('有効な認証情報でログインできること', async ({ page }) => {})
 *
 * 3. **テストファイル名規則**
 *    - E2E-001.spec.ts, E2E-002.spec.ts, ... (連番)
 *    - 機能ごとにディレクトリ分割: tests/e2e/login/, tests/e2e/video/, etc.
 *
 * 4. **タイムアウト設定**
 *    - 要素の表示待機: { timeout: 10000 } (10秒)
 *    - ページナビゲーション: { waitUntil: 'networkidle' }
 *
 * 5. **テスト構成**
 *    - 正常系テスト: 基本的な成功フロー
 *    - 異常系テスト: エラーケース、バリデーションエラー、権限エラー
 *    - 比率: 正常系 30-40%, 異常系 60-70%
 *
 * 6. **セレクタ優先順位**
 *    - data-testid属性 > CSS class > has-text() locator
 *    - 例: page.locator('[data-testid="login-button"]')
 *    - 例: page.locator('.login-button')
 *    - 例: page.locator('button:has-text("ログイン")')
 *
 * 7. **before/afterフック**
 *    必要に応じて、テスト前後の共通処理を追加:
 *    ```typescript
 *    test.beforeEach(async ({ page }) => {
 *      // ステップ0: 共通の前提条件をセットアップ
 *    });
 *
 *    test.afterEach(async ({ page }) => {
 *      // テスト後のクリーンアップ処理
 *    });
 *    ```
 *
 * 8. **認証が必要なテスト**
 *    ログインが必要な場合は、beforeEach()でログイン処理を実装:
 *    ```typescript
 *    test.beforeEach(async ({ page }) => {
 *      // ステップ0: ログイン処理
 *      await page.goto('/login');
 *      await page.fill('#input-email', 'test@example.com');
 *      await page.fill('#input-password', 'Password123!');
 *      await page.click('button[type="submit"]');
 *      await page.waitForURL('/dashboard');
 *    });
 *    ```
 */

E2E_TEMPLATE_EOF

echo -e "${GREEN}  ✓ tests/e2e/.template.spec.ts${NC}"
echo ""

# ========================================================================
# 完了
# ========================================================================
echo -e "${GREEN}=== Test Templates Successfully Generated ===${NC}"
echo ""
echo "作成されたテンプレート:"
echo "  - tests/Unit/.template.UnitTest.php"
echo "  - tests/Feature/.template.FeatureTest.php"
echo "  - tests/e2e/.template.spec.ts"
echo ""
echo "これらのテンプレートを参照して新しいテストを作成してください。"
echo ""
