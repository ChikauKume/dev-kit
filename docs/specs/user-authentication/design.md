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

**確認画面からの戻り動線**:
- 確認画面に「戻る」ボタンを配置
- 確認画面には登録画面で入力された内容を表示（名前、メールアドレス、電話番号）
  - パスワードは表示しない（ハッシュ化されているため）
- 戻るボタンクリック時:
  - セッションに保存された入力データ（name, email, phone）を保持したまま新規登録画面に遷移
  - 新規登録画面は `old` プロパティを使用してフォームに自動入力（name, email, phone）
  - パスワード欄は空欄で表示（再入力必須）

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
    - 確認画面から戻った場合、セッションに保存されたデータでフォームを自動入力
  - `signup(RegisterRequest)`: 新規登録処理（確認画面へ遷移）
    - セッション保存データ: `name`, `email`, `phone`, `password`（passwordはハッシュ化して保存）
  - `showSignupConfirm()`: 登録内容確認画面表示
    - Inertia props: `signupName`, `signupEmail`, `signupPhone`（セッションから取得、パスワードは含まない）
    - 「戻る」ボタン配置（新規登録画面に遷移、入力データ保持）
  - `signupConfirm()`: 登録確定処理
    - セッションデータからユーザー作成、自動ログイン
    - ユーザー作成成功後、登録用セッションデータ（name, email, phone, password）をクリア
  - `showSignupComplete()`: 登録完了画面表示
  - `showLogin()`: ログイン画面表示
  - `login(LoginRequest)`: ログイン処理
  - `logout()`: ログアウト処理
- **Requests**: RegisterRequest（name, email, phone, password, password_confirmation）、LoginRequest
- **Routes**: `app/Modules/User/routes.php` でルート定義

## データベース設計

### テーブル一覧

- **users**: ユーザー情報（id, name, email, phone, password, role）
- **failed_login_attempts**: ログイン失敗記録（id, ip_address, email, attempted_at）

**usersテーブルフィールド詳細**:
- `id`: BIGINT UNSIGNED, PRIMARY KEY, AUTO_INCREMENT
- `name`: VARCHAR(255), NOT NULL（ユーザー名）
- `email`: VARCHAR(255), NOT NULL, UNIQUE（メールアドレス）
- `phone`: VARCHAR(20), NULLABLE（電話番号、任意項目）
- `password`: VARCHAR(255), NOT NULL（ハッシュ化パスワード）
- `role`: ENUM('user', 'admin'), DEFAULT 'user'（ユーザー権限）
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
- `phone`: 任意、半角数字のみ、0から始まる10-11桁（ハイフンなし）
  - **フロントエンド**: 入力時に全角数字→半角数字へ自動変換（onChange/onBlurイベント）
  - **バックエンド**: 半角数字のみ許可（全角数字・ハイフンはバリデーションエラー）
- `password`: 必須、8文字以上255文字以下、英字と数字を少なくとも1文字ずつ含む、記号使用可
- `password_confirmation`: 必須、passwordと一致

**エラーメッセージ詳細**: `dev-kit/docs/specs/user-authentication/tests/test-cases.yaml` を参照

## テスト戦略

**テスト方針・比率**: `tech.md` を参照

**ユーザー認証機能固有のテスト対象**:
- Domain層: Email、HashedPassword値オブジェクトのバリデーション、Userエンティティのビジネスロジック
- Application層: RegisterUser、LoginUser UseCaseのロジック
- Infrastructure層: EloquentUserRepository、認証関連のデータベース連携
- Presentation層: AuthController（8メソッド）、認証フロー全体
- **フロントエンドUI単体テスト（8件）**:
  1. ログイン画面表示テスト（ページが空白でないこと）
  2. 新規登録画面表示テスト（FormPageテンプレート使用確認）
  3. 登録内容確認画面表示テスト（DetailPageテンプレート使用確認）
  4. 登録完了画面表示テスト（MessagePageテンプレート使用確認）
  5. フォーム入力テスト（キーボード入力が機能すること）
  6. ボタンクリックテスト（送信ボタン、戻るボタン）
  7. リアルタイムバリデーションテスト（useDynamicValidation動作確認）
  8. SPレスポンシブレイアウトテスト（ハンバーガーメニュー等）
- **E2E統合テスト（4つの主要機能フロー）**:
  - ユーザー登録フロー（正常系）: 入力 → 確認 → 完了 → ログイン
  - ユーザー登録フロー（戻る動線）: 入力 → 確認 → 戻る → 再入力 → 確認 → 完了
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

| 画面 | URL | テンプレート | 備考 |
|-----|-----|-----------|------|
| ログイン | `/login` | LoginPage | - |
| 新規登録 | `/signup` | FormPage | バリデーション付きフォーム |
| 登録内容確認 | `/signup/confirm` | DetailPage | 読み取り専用、「戻る」「登録」ボタン配置 |
| 登録完了 | `/signup/complete` | MessagePage | 完了メッセージ表示 |
| ダッシュボード | `/dashboard` | DashboardPage | - |
| 404エラー | - | Error404Page | - |
| 500エラー | - | Error500Page | - |

