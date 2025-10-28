# 設計書: ユーザー認証機能

## 概要

**関連要件ID**: REQ-1-1（ユーザー登録）, REQ-1-2（ログイン・ログアウト）

**スコープ**:
- ユーザー登録（3ステップ）
- ログイン
- ログアウト

**スコープ外**:
- パスワードリセット（別仕様書: user-password-reset/design.md）
- プロフィール管理機能（将来実装予定）
- プロフィール画像アップロード・管理機能（将来実装予定）

## モジュール構造

```
app/Modules/User/
├── Domain/                        # 第1層：ビジネスルール（Laravel非依存）
│   ├── User.php                   # ユーザーエンティティ
│   ├── UserRepositoryInterface.php
│   ├── ValueObjects/
│   │   ├── Email.php              # メールアドレス値オブジェクト
│   │   └── HashedPassword.php     # ハッシュ化パスワード値オブジェクト
│   └── Exceptions/
│       ├── InvalidEmailException.php
│       └── WeakPasswordException.php
│
├── Application/                   # 第2層：用途実装（Laravel非依存）
│   ├── UseCases/
│   │   ├── RegisterUser.php       # ユーザー登録
│   │   ├── LoginUser.php          # ログイン
│   │   └── LogoutUser.php         # ログアウト
│   └── DTOs/
│       ├── UserData.php
│       └── LoginData.php
│
├── Infrastructure/                # 第3層：データ保存（Laravel依存）
│   ├── UserModel.php              # Eloquentモデル
│   └── EloquentUserRepository.php
│
├── Presentation/                  # 第4層：HTTP処理（Laravel依存）
│   ├── Controllers/
│   │   └── AuthController.php
│   └── Requests/
│       ├── RegisterRequest.php
│       └── LoginRequest.php
│
├── Providers/
│   └── UserServiceProvider.php
└── routes.php
```

## アーキテクチャ

Clean Architecture（4層構造）を採用。詳細は `tech.md` を参照。

## 画面遷移

**ユーザー登録フロー**（3ステップ - 必須）:
```
新規登録画面(/signup)
  → 登録内容確認(/signup/confirm)
  → 登録完了(/signup/complete)
  → ログイン画面(/login)
```

**ログイン・ログアウトフロー**:
```
ログイン画面(/login) → ログイン成功 → ダッシュボード(/dashboard)
ダッシュボード → ログアウト → ログイン画面(/login)
```

画面のビジネスルールや詳細な仕様については `dev-kit/docs/architecture/pages.md` を参照。

**注記**: パスワードリセット機能は別仕様書 `user-password-reset/design.md` を参照してください。

## 主要コンポーネント

### Domain層

- **User（エンティティ）**: ユーザーのビジネスルール
  - `getId()`, `getEmail()`, `getName()`, `isAdmin()`
- **UserRepositoryInterface**: ユーザーデータの永続化
  - `findByEmail()`, `findById()`, `save()`, `delete()`
- **ValueObjects**: Email、HashedPassword

### Application層

- **RegisterUser**: ユーザー登録処理
- **LoginUser**: ログイン処理
- **LogoutUser**: ログアウト処理

### Infrastructure層

- **EloquentUserRepository**: UserRepositoryInterfaceのEloquent実装
- **UserModel**: usersテーブルのEloquentモデル

### Presentation層

- **AuthController**: 認証関連のHTTPリクエスト処理
  - `showSignup()`: 新規登録画面表示
    - Inertia props: `old` (セッションからの復元データ: name, email, phone)
  - `signup(RegisterRequest)`: 新規登録処理（確認画面へ遷移）
    - セッション保存データ: `name`, `email`, `phone`, `password`
  - `showSignupConfirm()`: 登録内容確認画面表示
    - Inertia props: `signupName`, `signupEmail`, `signupPhone`（セッションから取得）
  - `signupConfirm()`: 登録確定処理
    - セッションデータからユーザー作成、自動ログイン
  - `showSignupComplete()`: 登録完了画面表示
  - `showLogin()`: ログイン画面表示
  - `login(LoginRequest)`: ログイン処理
  - `logout()`: ログアウト処理
- **Requests**: RegisterRequest（name, email, phone, password, password_confirmation）、LoginRequest
- **Routes**: `app/Modules/User/routes.php` でルート定義

## データベース設計

### テーブル一覧

- **users**: ユーザー情報（id, name, email, phone, password, role, remember_token）
- **failed_login_attempts**: ログイン失敗記録（id, ip_address, email, attempted_at）

**usersテーブルフィールド詳細**:
- `id`: BIGINT UNSIGNED, PRIMARY KEY, AUTO_INCREMENT
- `name`: VARCHAR(255), NOT NULL（ユーザー名）
- `email`: VARCHAR(255), NOT NULL, UNIQUE（メールアドレス）
- `phone`: VARCHAR(20), NULLABLE（電話番号、任意項目）
- `password`: VARCHAR(255), NOT NULL（ハッシュ化パスワード）
- `role`: ENUM('user', 'admin'), DEFAULT 'user'（ユーザー権限）
- `remember_token`: VARCHAR(100), NULLABLE（Remember Me機能用）
- `created_at`: TIMESTAMP, NOT NULL
- `updated_at`: TIMESTAMP, NOT NULL

データベーススキーマの詳細については `dev-kit/docs/architecture/db.md` を参照。

## エラー処理

**エラー分類**:
- **バリデーションエラー**: FormRequest層で検証（名前、メール、電話番号、パスワード等の入力検証）
- **ビジネスロジックエラー**: UseCase層で検証（認証失敗、トークン検証、レート制限等）
- **システムエラー**: ミドルウェア層で検証（権限、セッション等）

**バリデーション項目詳細**:
- `name`: 必須、2文字以上、255文字以下
- `email`: 必須、メール形式、255文字以下、重複禁止
- `phone`: 任意、電話番号形式（0から始まる10-11桁）
- `password`: 必須、8文字以上、英数字含む
- `password_confirmation`: 必須、passwordと一致

**エラーメッセージ詳細**: `dev-kit/docs/specs/user-authentication/tests/test-cases.yaml` を参照

## テスト戦略

**テスト方針・比率**: `tech.md` を参照

**ユーザー認証機能固有のテスト対象**:
- Domain層: Email、HashedPassword値オブジェクトのバリデーション、Userエンティティのビジネスロジック
- Application層: RegisterUser、LoginUser UseCaseのロジック
- Infrastructure層: EloquentUserRepository、認証関連のデータベース連携
- Presentation層: AuthController（6メソッド）、認証フロー全体
- E2E: 3つの主要機能フロー
  - ユーザー登録フロー（3ステップ）: 入力 → 確認 → 完了 → ログイン
  - ログインフロー: ログイン → ダッシュボード
  - ログアウトフロー: ログアウト → ログイン画面

## テストケース定義

テストケースは機械可読形式（YAML）で定義されており、自動的にテストコードを生成します:

**ファイル構成**:
- **PHPUnit テスト定義**: `dev-kit/docs/specs/user-authentication/tests/test-cases.yaml`
  - 各UseCase（RegisterUser, LoginUser, ResetPassword等）のパラメータ定義
  - 状態定義（正常値、異常値、境界値）
  - 単体テスト・統合テストのテストケース一覧
  - E2Eテストシナリオ一覧

- **Playwright E2E フロー定義**: `dev-kit/docs/specs/user-authentication/tests/playwright-flows.yaml`
  - 11の統合フロー定義（正常系5件、異常系6件）
  - 各フローのステップ詳細（navigate, type, click, assert等）
  - スクリーンショット保存パス

**自動生成**:
これらのYAMLファイルから、PHPUnitテストコードとPlaywrightテストスクリプトを自動生成します。テストケースの追加・修正はYAMLファイルを編集してください。

**テスト要件詳細**: `tech.md` を参照（テスト比率、カバレッジ目標等）


## UI設計

**使用テンプレート**:

| 画面 | URL | テンプレート |
|-----|-----|-----------|
| ログイン | `/login` | LoginPage |
| 新規登録 | `/signup` | SignupPage |
| 登録内容確認 | `/signup/confirm` | SignupConfirmPage |
| 登録完了 | `/signup/complete` | SignupCompletePage |
| ダッシュボード | `/dashboard` | DashboardPage |
| 404エラー | - | Error404Page |
| 500エラー | - | Error505Page |

