# パスワードリセット機能 仕様書

## 概要

この仕様書は **user-authentication** から分離された、パスワードリセット機能専用の設計ドキュメントです。

## なぜ分離したのか？

### タスク量の比較

| 機能 | タスク数 | 複雑度スコア | 外部依存 |
|-----|---------|------------|----------|
| ログイン | 5 | 11 | 0 |
| 新規登録 | 10 | 15 | 0 |
| **パスワードリセット** | **15** | **28** | **5** |

パスワードリセット機能は、ログイン機能の **3倍のタスク量** と **2.5倍の複雑度** を持ちます。

### 主な複雑要因

1. **メール送信システム** - 外部依存（mailpit等のSMTPサーバー）
2. **トークン管理** - 生成・検証・有効期限・削除
3. **セキュリティ要件** - 推測不可能性、再利用防止、レート制限
4. **フラッシュメッセージ** - 成功/失敗の両方を扱う
5. **エラーハンドリング** - メール送信失敗、トークン無効、期限切れ等

## 実装推奨アプローチ

### Phase 1: 基本フロー（メール送信なし）
- ForgotPassword画面実装
- トークン生成・保存ロジック
- メール送信をログ出力で代用

### Phase 2: メール送信実装
- Laravel Mail設定確認
- メールテンプレート作成
- mailpitでのテスト

### Phase 3: パスワード更新実装
- ResetPassword画面実装
- トークン検証ロジック（事前検証含む）
- パスワード更新処理

### Phase 4: 統合テスト
- E2Eフローテスト
- エラーハンドリングテスト
- セキュリティテスト

## ディレクトリ構造

```
dev-kit/docs/specs/user-password-reset/
├── README.md                    # このファイル
├── design.md                    # 設計書（メイン）
├── requirements.md              # 要件定義（未作成）
├── scripts/                     # 実装スクリプト（未作成）
└── tests/                       # テスト定義（未作成）
```

## 前提条件

- `user-authentication` 機能が実装済みであること
- User Domainモジュールが存在すること
- メール送信環境（mailpit等）が設定済みであること

## 関連ドキュメント

- **user-authentication**: `dev-kit/docs/specs/user-authentication/design.md`
- **tech.md**: `dev-kit/docs/architecture/tech.md`
- **pages.md**: `dev-kit/docs/architecture/pages.md`
- **db.md**: `dev-kit/docs/architecture/db.md`

## 実装状況

### ✅ 実装済み（user-authenticationで実装済み）

- SendPasswordResetLink UseCase
- ResetPassword UseCase
- PasswordResetController
- ForgotPassword.tsx
- ResetPassword.tsx

### ❌ 未実装（既知の課題）

1. showResetPassword()でのトークン事前検証
2. メールテンプレートのカスタマイズ
3. フラッシュメッセージの完全な統合
4. レート制限の実装
5. タイミング攻撃対策

## 実装時の注意事項

### セキュリティ
- トークンは64文字のランダム文字列
- データベースにはハッシュ化して保存
- 有効期限は60分
- 使用後は即座に削除

### フラッシュメッセージ
- 成功: `with('status', 'メッセージ')`
- 失敗: `withErrors(['email' => 'メッセージ'])`

### フロントエンド
- 全ての認証画面で `hideNavigation={true}` を設定
- ForgotPasswordPage: `flash?.status` と `errors?.email` の両方を処理
- ResetPasswordPage: `email` フィールドを hidden で含める

## 次のステップ

1. requirements.md の作成
2. scripts/ ディレクトリの整備
3. tests/ ディレクトリの整備
4. Phase 1 から順次実装
