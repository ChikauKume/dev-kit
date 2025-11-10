# PHPUnit YAML ガイド

## 概要

`phpunit.yaml` は PHPUnit のUnit/Featureテストを自動生成するための設定ファイルです。E2Eテストと同じように、YAMLからテストコードを自動生成できます。

## ファイル構造

```yaml
spec_name: user-authentication
test_type: phpunit
framework: phpunit

meta:
  version: 1.0.0
  description: 機能の説明

# Unitテスト定義（ビジネスロジックの単体テスト）
unit_tests:
  - id: Unit-001
    name: テスト名
    target_class: App\Http\Requests\SignupRequest
    test_class: Tests\Unit\Http\Requests\SignupRequestTest
    test_cases: [...]

# Featureテスト定義（エンドポイントの統合テスト）
feature_tests:
  - id: Feature-001
    name: テスト名
    endpoint: POST /signup
    test_class: Tests\Feature\Auth\SignupTest
    test_cases: [...]
```

## Unit テストと Feature テストの違い

### Unit テスト（単体テスト）
- **目的**: ビジネスロジックの単体テスト
- **スコープ**: クラス単位、メソッド単位
- **テスト対象**:
  - FormRequest バリデーション
  - UseCase ビジネスロジック
  - Domain Entity
  - Value Object
- **データベース**: 使用しない（モック使用）
- **実行速度**: 高速
- **テスト比率**: 60-70%

### Feature テスト（統合テスト）
- **目的**: エンドポイントの統合テスト
- **スコープ**: API エンドポイント単位
- **テスト対象**:
  - Controller
  - ミドルウェア
  - ルーティング
  - データベース連携
- **データベース**: 使用する（RefreshDatabase）
- **実行速度**: 中速
- **テスト比率**: 30-40%

## Unit テストの書き方

### 基本構造

```yaml
unit_tests:
  - id: Unit-001
    name: SignupRequestバリデーションテスト
    target_class: App\Http\Requests\SignupRequest
    test_class: Tests\Unit\Http\Requests\SignupRequestTest
    test_cases:
      - name: 正常なユーザー登録データでバリデーション成功
        setup: |
          $data = [
              'name' => '山田 太郎',
              'email' => 'test@example.com',
              'password' => 'Password123!',
          ];
          $validator = Validator::make($data, (new SignupRequest())->rules());
        assertions:
          - type: assertFalse
            expression: $validator->fails()
```

### フィールド説明

| フィールド | 必須 | 説明 |
|----------|------|------|
| `id` | ✅ | テストID（例: Unit-001） |
| `name` | ✅ | テスト名（日本語可） |
| `target_class` | ✅ | テスト対象クラス（FQCN） |
| `test_class` | ✅ | テストクラス（FQCN） |
| `test_cases` | ✅ | テストケース配列 |

### テストケースフィールド

| フィールド | 必須 | 説明 |
|----------|------|------|
| `name` | ✅ | テストケース名 |
| `setup` | ❌ | セットアップコード（PHP） |
| `assertions` | ✅ | アサーション配列 |

## Feature テストの書き方

### 基本構造

```yaml
feature_tests:
  - id: Feature-001
    name: POST /signup エンドポイントテスト
    endpoint: POST /signup
    test_class: Tests\Feature\Auth\SignupTest
    test_cases:
      - name: 正しいデータで登録確認画面に遷移
        setup: |
          Session::flush();
        request:
          method: POST
          url: /signup
          data:
            name: 山田 太郎
            email: test@example.com
            password: Password123!
        assertions:
          - type: assertStatus
            params: [302]
          - type: assertRedirect
            params: ['/signup/confirm']
```

### フィールド説明

| フィールド | 必須 | 説明 |
|----------|------|------|
| `id` | ✅ | テストID（例: Feature-001） |
| `name` | ✅ | テスト名 |
| `endpoint` | ✅ | エンドポイント（例: POST /login） |
| `test_class` | ✅ | テストクラス（FQCN） |
| `test_cases` | ✅ | テストケース配列 |

### テストケースフィールド

| フィールド | 必須 | 説明 |
|----------|------|------|
| `name` | ✅ | テストケース名 |
| `setup` | ❌ | セットアップコード |
| `request` | ✅ | リクエスト定義 |
| `assertions` | ✅ | アサーション配列 |

### リクエスト定義

```yaml
request:
  method: POST
  url: /signup
  data:
    name: 山田 太郎
    email: test@example.com
```

| フィールド | 必須 | 説明 |
|----------|------|------|
| `method` | ✅ | HTTPメソッド（GET/POST/PUT/DELETE） |
| `url` | ✅ | エンドポイントURL |
| `data` | ❌ | リクエストデータ（POSTのみ） |

## アサーション一覧

### Unit テスト用アサーション

#### assertTrue
```yaml
- type: assertTrue
  expression: $validator->passes()
```

#### assertFalse
```yaml
- type: assertFalse
  expression: $validator->fails()
```

#### assertEquals
```yaml
- type: assertEquals
  params: [1, $user->getId()]
```

#### assertNull
```yaml
- type: assertNull
  expression: $user->getPhone()
```

#### assertArrayHasKey
```yaml
- type: assertArrayHasKey
  params: ['email', $validator->errors()->toArray()]
```

### Feature テスト用アサーション

#### assertStatus
HTTPステータスコードの検証
```yaml
- type: assertStatus
  params: [200]
```

#### assertRedirect
リダイレクト先の検証
```yaml
- type: assertRedirect
  params: ['/dashboard']
```

#### assertSessionHas
セッションキーの存在検証
```yaml
- type: assertSessionHas
  params: ['signup_data']
```

#### assertSessionHasErrors
バリデーションエラーの検証
```yaml
- type: assertSessionHasErrors
  params: [['name', 'email']]
```

#### assertAuthenticatedAs
認証ユーザーの検証
```yaml
- type: assertAuthenticatedAs
  params: [$user]
```

#### assertGuest
未認証状態の検証
```yaml
- type: assertGuest
```

#### assertDatabaseHas
データベースレコードの存在検証
```yaml
- type: assertDatabaseHas
  params: ['users', ['email' => 'test@example.com']]
```

#### assertInertia
Inertia.js レスポンスの検証
```yaml
- type: assertInertia
  params: |
    fn (Assert $page) => $page
        ->component('Dashboard')
        ->where('userName', '山田 太郎')
```

## 実例: user-authentication

### Unit テスト例

```yaml
unit_tests:
  - id: Unit-001
    name: SignupRequestバリデーションテスト
    target_class: App\Http\Requests\SignupRequest
    test_class: Tests\Unit\Http\Requests\SignupRequestTest
    test_cases:
      - name: 正常なユーザー登録データでバリデーション成功
        setup: |
          $data = [
              'name' => '山田 太郎',
              'email' => 'test@example.com',
              'password' => 'Password123!',
              'password_confirmation' => 'Password123!',
              'agreeToTerms' => true,
          ];
          $validator = Validator::make($data, (new SignupRequest())->rules());
        assertions:
          - type: assertFalse
            expression: $validator->fails()

      - name: 名前が1文字の場合バリデーション失敗
        setup: |
          $data = [
              'name' => 'A',
              'email' => 'test@example.com',
              'password' => 'Password123!',
          ];
          $validator = Validator::make($data, (new SignupRequest())->rules());
        assertions:
          - type: assertTrue
            expression: $validator->fails()
          - type: assertArrayHasKey
            params: ['name', $validator->errors()->toArray()]
```

### Feature テスト例

```yaml
feature_tests:
  - id: Feature-001
    name: POST /signup エンドポイントテスト
    endpoint: POST /signup
    test_class: Tests\Feature\Auth\SignupTest
    test_cases:
      - name: 正しいデータで登録確認画面に遷移
        setup: |
          Session::flush();
        request:
          method: POST
          url: /signup
          data:
            name: 山田 太郎
            email: test@example.com
            password: Password123!
            password_confirmation: Password123!
            agreeToTerms: true
        assertions:
          - type: assertStatus
            params: [302]
          - type: assertRedirect
            params: ['/signup/confirm']
          - type: assertSessionHas
            params: ['signup_data']

      - name: バリデーションエラーで元の画面に戻る
        setup: |
          Session::flush();
        request:
          method: POST
          url: /signup
          data:
            name: A
            email: invalid-email
            password: short
        assertions:
          - type: assertStatus
            params: [302]
          - type: assertSessionHasErrors
            params: [['name', 'email', 'password']]
```

## テスト生成コマンド

### 基本的な使い方

```bash
# Node.js版（推奨）
npm run generate:phpunit user-authentication

# または直接実行
node dev-kit/scripts/generate/phpunit.cjs user-authentication
```

### オプション

```bash
# 既存ファイルを上書き
npm run generate:phpunit user-authentication -- --force
```

### PHP版（既存）

```bash
# PHP版も利用可能
npm run generate:tests user-authentication
```

## ベストプラクティス

### 1. テストケース命名規則
- **正常系**: 「正常な〜で〜できる」
- **異常系**: 「〜が不正な場合〜失敗する」
- **境界値**: 「〜が最小値/最大値の場合〜」

### 2. テストの粒度
- **Unit**: 1つのメソッド、1つのバリデーションルール
- **Feature**: 1つのエンドポイント、1つのユースケース

### 3. setup の使い方
- **データ準備**: ユーザー作成、セッション設定
- **モック設定**: Repository、外部サービス
- **状態初期化**: データベースクリア

### 4. assertions の書き方
- **1テストケース = 1-3アサーション**
- **重要な検証を先に書く**
- **エラーメッセージが明確になるように**

### 5. データベーステスト
- **Feature テストで使用**
- **RefreshDatabase を必ず使用**
- **テストデータは Factory で作成**

## トラブルシューティング

### エラー: phpunit.yaml not found
- ファイルパスを確認: `dev-kit/docs/specs/{spec-name}/tests/phpunit.yaml`
- spec-name が正しいか確認

### エラー: No PHPUnit tests found
- `unit_tests:` または `feature_tests:` セクションが存在するか確認
- YAMLのインデントが正しいか確認

### 生成されたテストが実行できない
- namespace が正しいか確認
- use 文が不足していないか確認
- Factory が定義されているか確認

## 参考資料

- E2E YAML: `dev-kit/docs/specs/user-authentication/tests/e2e.yaml`
- PHPUnit YAML: `dev-kit/docs/specs/user-authentication/tests/phpunit.yaml`
- E2E 生成スクリプト: `dev-kit/scripts/generate/e2e.cjs`
- PHPUnit 生成スクリプト: `dev-kit/scripts/generate/phpunit.cjs`
- Laravel Testing: https://laravel.com/docs/testing
- PHPUnit: https://phpunit.de/documentation.html
