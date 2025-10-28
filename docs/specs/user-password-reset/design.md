# 設計書: パスワードリセット機能

## 概要

**関連要件ID**: REQ-1-3（パスワードリセット）

**前提条件**:
- ユーザー認証機能（user-authentication）が実装済みであること
- User Domainモジュールが存在すること
- メール送信環境（mailpit等）が設定済みであること

**スコープ**:
- パスワードリセット依頼（メールアドレス入力）
- パスワードリセットリンク送信（メール）
- トークン検証
- 新しいパスワード設定

**スコープ外**:
- ユーザー登録
- ログイン・ログアウト
- プロフィール管理

## モジュール構造

```
app/Modules/User/
├── Domain/                        # 第1層：ビジネスルール（既存）
│   ├── User.php                   # ユーザーエンティティ
│   ├── UserRepositoryInterface.php
│   ├── ValueObjects/
│   │   ├── Email.php
│   │   └── HashedPassword.php
│   └── Exceptions/
│       ├── InvalidEmailException.php
│       └── WeakPasswordException.php
│
├── Application/                   # 第2層：用途実装（新規追加）
│   ├── UseCases/
│   │   ├── SendPasswordResetLink.php  # パスワードリセットリンク送信
│   │   └── ResetPassword.php          # パスワードリセット
│   └── DTOs/
│       └── PasswordResetData.php
│
├── Infrastructure/                # 第3層：データ保存（新規追加）
│   └── PasswordResetTokenModel.php
│
├── Presentation/                  # 第4層：HTTP処理（新規追加）
│   ├── Controllers/
│   │   └── PasswordResetController.php
│   └── Requests/
│       ├── ForgotPasswordRequest.php
│       └── ResetPasswordRequest.php
│
└── routes.php
```

## アーキテクチャ

Clean Architecture（4層構造）を採用。詳細は `tech.md` を参照。

## 画面遷移

**パスワードリセットフロー**（3ステップ）:
```
ログイン画面(/login)
  → パスワードリセット依頼(/forgot-password)
  → メール送信確認（同画面に成功メッセージ表示）
  → ユーザーがメール内のリンクをクリック
  → パスワードリセット実行(/reset-password/{token}?email={email})
  → パスワード更新成功
  → ログイン画面(/login)に成功メッセージ表示
```

画面のビジネスルールや詳細な仕様については `dev-kit/docs/architecture/pages.md` を参照。

## 主要コンポーネント

### Domain層（既存を使用）

- **User（エンティティ）**: ユーザーのビジネスルール
  - `updatePassword(HashedPassword $password)`: パスワード更新メソッド
- **UserRepositoryInterface**: ユーザーデータの永続化
  - `findByEmail()`, `save()`
- **ValueObjects**: Email、HashedPassword

### Application層（新規実装）

- **SendPasswordResetLink**: パスワードリセットリンク送信処理
  - トークン生成
  - メール送信
  - エラーハンドリング（ユーザー存在確認、メール送信失敗）

- **ResetPassword**: パスワードリセット処理
  - トークン検証（有効期限チェック含む）
  - パスワード更新
  - トークン削除（使用済み）

### Infrastructure層（新規実装）

- **PasswordResetTokenModel**: password_reset_tokensテーブルのEloquentモデル
  - トークン保存・検証
  - 有効期限管理（60分）

### Presentation層（新規実装）

- **PasswordResetController**: パスワードリセット関連のHTTPリクエスト処理
  - `showForgotPassword()`: パスワードリセット依頼画面表示
  - `sendResetLink(ForgotPasswordRequest)`: パスワードリセットリンク送信
    - 成功時: `with('status', 'パスワードリセットリンクをメールで送信しました。')`
    - 失敗時: `withErrors(['email' => 'このメールアドレスのユーザーは見つかりません。'])`
  - `showResetPassword(string $token)`: パスワードリセット実行画面表示
    - **重要**: トークン事前検証が必要（不正なURLでアクセスさせない）
    - Inertia props: `token`, `email`（クエリパラメータから取得）
  - `resetPassword(ResetPasswordRequest)`: パスワードリセット実行
    - 成功時: `redirect()->route('login')->with('status', 'パスワードをリセットしました。ログインしてください。')`
    - 失敗時: `withErrors(['email' => 'このリンクは無効または期限切れです。'])`

- **Requests**:
  - ForgotPasswordRequest（email）
  - ResetPasswordRequest（email, token, password, password_confirmation）

## データベース設計

### テーブル一覧

- **users**: ユーザー情報（既存）
- **password_reset_tokens**: パスワードリセットトークン（新規）

**password_reset_tokensテーブル詳細**:
- `email`: VARCHAR(255), PRIMARY KEY（メールアドレス）
- `token`: VARCHAR(255), NOT NULL（ハッシュ化されたトークン）
- `created_at`: TIMESTAMP, NOT NULL（作成日時、有効期限計算に使用）

**Migration**:
```php
Schema::create('password_reset_tokens', function (Blueprint $table) {
    $table->string('email')->primary();
    $table->string('token');
    $table->timestamp('created_at');
});
```

データベーススキーマの詳細については `dev-kit/docs/architecture/db.md` を参照。

## メール送信設計

### メール設定（.env）

```env
MAIL_MAILER=smtp
MAIL_HOST=mailpit
MAIL_PORT=1025
MAIL_FROM_ADDRESS="noreply@example.com"
MAIL_FROM_NAME="${APP_NAME}"
```

### メールテンプレート

**Laravel標準のパスワードリセットメールを使用**:
- `vendor/laravel/framework/src/Illuminate/Auth/Notifications/ResetPassword.php`

**カスタマイズが必要な場合**:
1. `resources/views/emails/password-reset.blade.php` を作成
2. `ResetPassword` Notification をカスタマイズ

**メール内容**:
- 件名: 「パスワードリセットのご案内」
- 本文:
  ```
  パスワードリセットのリクエストを受け付けました。

  以下のリンクをクリックして、新しいパスワードを設定してください。

  [パスワードをリセット]

  このリンクは60分間有効です。

  ※このメールに心当たりがない場合は、無視してください。
  ```

## トークン管理設計

### トークン生成

- **Laravel標準のPassword Brokerを使用**
- トークン長: 64文字（ランダム文字列）
- ハッシュ化: bcrypt

### トークン検証

- **有効期限**: 60分（config/auth.php で設定）
- **検証項目**:
  1. トークンの存在確認
  2. メールアドレスの一致
  3. 有効期限チェック（created_at + 60分）
  4. トークンのハッシュ検証

### トークン削除

- パスワードリセット成功時に自動削除
- 期限切れトークンの定期削除（Laravel標準機能）

## エラー処理

**エラー分類**:
- **バリデーションエラー**: FormRequest層で検証（メール、パスワード等の入力検証）
- **ビジネスロジックエラー**: UseCase層で検証（ユーザー不存在、トークン無効、メール送信失敗等）

**バリデーション項目詳細**:
- **ForgotPasswordRequest**:
  - `email`: 必須、メール形式、255文字以下

- **ResetPasswordRequest**:
  - `token`: 必須、文字列
  - `email`: 必須、メール形式、255文字以下
  - `password`: 必須、8文字以上、英数字含む
  - `password_confirmation`: 必須、passwordと一致

**エラーメッセージ詳細**: `dev-kit/docs/specs/user-password-reset/tests/test-cases.yaml` を参照

## フラッシュメッセージ仕様

### 成功メッセージ（flash.status）

- **メール送信成功**: 「パスワードリセットリンクをメールで送信しました。」
- **パスワード更新成功**: 「パスワードをリセットしました。ログインしてください。」

### エラーメッセージ（errors）

- **ユーザー不存在**: 「このメールアドレスのユーザーは見つかりません。」
- **トークン無効**: 「このリンクは無効または期限切れです。」
- **メール送信失敗**: 「パスワードリセットリンクの送信に失敗しました。」

### フロントエンド実装

**ForgotPasswordPage**:
```tsx
flash={flash}  // { status?: string }
errors={errors}  // { email?: string }
resetEmailSuccess={!!flash?.status}
resetEmailError={errors?.email}
```

**ResetPasswordPage**:
```tsx
flash={flash}  // { status?: string }
errors={errors}  // { email?: string, password?: string, password_confirmation?: string }
passwordResetSuccess={!!flash?.status}
passwordResetErrors={{
  newPassword: errors?.password,
  confirmPassword: errors?.password_confirmation,
  email: errors?.email
}}
```

## セキュリティ要件

### トークンセキュリティ

1. **推測不可能性**: 64文字のランダム文字列
2. **再利用防止**: 使用後即座に削除
3. **有効期限**: 60分
4. **ハッシュ化**: データベースにはハッシュ化されたトークンを保存

### レート制限

- **メール送信**: 同一IPアドレスから5回/時間まで（Laravel標準のスロットリング使用）
- **パスワードリセット**: 同一IPアドレスから5回/時間まで

### 情報漏洩防止

- ユーザー存在チェックのエラーメッセージを統一
  - 「このメールアドレスのユーザーは見つかりません。」（存在しない場合）
  - 「パスワードリセットリンクをメールで送信しました。」（存在する場合）
  - **重要**: タイミング攻撃を防ぐため、処理時間を一定に保つ

## テスト戦略

**テスト方針・比率**: `tech.md` を参照

**パスワードリセット機能固有のテスト対象**:
- Application層: SendPasswordResetLink、ResetPassword UseCaseのロジック
- Infrastructure層: PasswordResetTokenModel、トークン生成・検証
- Presentation層: PasswordResetController（4メソッド）、メール送信統合
- E2E: 2つの主要機能フロー
  - パスワードリセット依頼フロー: メールアドレス入力 → メール送信確認
  - パスワード更新フロー: トークン検証 → パスワード入力 → 更新成功 → ログイン

**メール送信テスト**:
- MailFacadeのモック使用
- Mailableクラスのテスト
- メール内容の検証（件名、本文、リンクURL）

## UI設計

**使用テンプレート**:

| 画面 | URL | テンプレート |
|-----|-----|-----------|
| パスワードリセット依頼 | `/forgot-password` | ForgotPasswordPage |
| パスワードリセット実行 | `/reset-password/{token}?email={email}` | ResetPasswordPage |

**重要事項**:
- 全ての認証画面では `hideNavigation={true}` を設定すること
- ForgotPasswordPage: メールアドレス入力のみ
- ResetPasswordPage: メールアドレス（hidden）、新しいパスワード、パスワード確認

## 実装の優先順位

### Phase 1: 基本フロー実装（メール送信なし）
1. ForgotPassword画面実装
2. トークン生成・保存ロジック
3. メール送信をログ出力で代用

### Phase 2: メール送信実装
1. Laravel Mail設定確認（.env）
2. メールテンプレート作成（カスタマイズする場合）
3. メール送信テスト（mailpit確認）

### Phase 3: パスワード更新実装
1. ResetPassword画面実装
2. トークン検証ロジック（事前検証含む）
3. パスワード更新処理
4. フラッシュメッセージ統合

### Phase 4: 統合テスト
1. E2Eフローテスト
2. エラーハンドリングテスト
3. セキュリティテスト（トークン無効化、有効期限等）

## 既知の課題

**現在の実装で不足している部分**:
1. showResetPassword()でのトークン事前検証
2. メールテンプレートのカスタマイズ
3. フラッシュメッセージの統合テスト
4. レート制限の実装
5. タイミング攻撃対策

これらは順次実装予定。
