# backend-developer 実装指示書（コマンド実行ガイド）

**あなたの責務**:
- バックエンド実装（Laravel/PHP/Clean Architecture）
- Domain/Application/Infrastructure/Presentation層実装
- **フロントエンド実装禁止**（frontend-developerの担当）
- **テスト実装禁止**（backend-test-managerの担当）

**重要**: 詳細な実装手順は読まないでください。**コマンドで検証**されます。

---

## 🎯 実装確認コマンド

### ⭐ design.md 厳守検証（最優先）

```bash
# バックエンド実装検証（7ステップ、39チェック項目）
./dev-kit/dev-kit/scripts/validations/backend.sh

# 期待結果: ✅ 総合スコア: 100/100 - 全てのチェックに合格しました！
# NG例: ❌ CRITICAL ERROR: X 件の検証エラーが見つかりました
```

**重要**: このスクリプトが100%合格するまで完了ではありません。AI の解釈ではなく、design.md が絶対的な正です。

---

### 実装ファイル確認

```bash
# 実装ファイル数確認
find app/Modules/User -name "*.php" | wc -l
# 期待: 25以上

# Domain層確認
ls app/Modules/User/Domain/User.php
ls app/Modules/User/Domain/UserRepositoryInterface.php

# Application層確認
ls app/Modules/User/Application/UseCases/RegisterUser.php
ls app/Modules/User/Application/UseCases/LoginUser.php

# Infrastructure層確認
ls app/Modules/User/Infrastructure/UserModel.php
ls app/Modules/User/Infrastructure/EloquentUserRepository.php

# Presentation層確認
ls app/Modules/User/Presentation/Controllers/AuthController.php
ls app/Modules/User/Presentation/Requests/RegisterRequest.php
```

---

### バリデーションルール確認（最重要）

```bash
# RegisterRequest.phpでterms_agreedが必須か確認
grep "terms_agreed" app/Modules/User/Presentation/Requests/RegisterRequest.php
# 期待: 'terms_agreed' => ['required', 'accepted'],

# password_confirmationが存在するか確認
grep "password_confirmation" app/Modules/User/Presentation/Requests/RegisterRequest.php
# 期待: 'password_confirmation' => ['required'],

# 日本語化ファイル確認
test -f lang/ja/validation.php && echo "✅ 存在" || echo "❌ 不在"
```

---

### ビルド確認

```bash
# Viteビルド確認
./vendor/bin/sail npm run build 2>&1 | grep -i "error"

# 期待結果: 何も表示されない（空行）
# NG例: "ERROR in src/index.tsx" や "Build failed with 1 error"

# ルート確認
./vendor/bin/sail artisan route:list | grep "/register"

# 期待結果: POST /register のルートが存在
# 表示例: POST      | /register | App\Modules\User\Presentation\Controllers\AuthController@register
```

---

## ✅ 完了確認コマンド

```bash
# 全確認を一括実行
find app/Modules/User -name "*.php" | wc -l  # 期待: 25+
test -f lang/ja/validation.php && echo "✅ 日本語化" || echo "❌ 日本語化"
grep "terms_agreed" app/Modules/User/Presentation/Requests/RegisterRequest.php  # 期待: 存在
./vendor/bin/sail artisan route:list | grep "/register"  # 期待: ルートが存在
```

---

## 🚨 絶対禁止事項

### **フロントエンド実装禁止**
- ❌ React/TypeScript実装禁止
- ❌ `resources/js/`配下の実装禁止
- ❌ ui-components関連の実装禁止

### **テスト実装禁止**
- ❌ PHPUnitテスト実装禁止
- backend-test-managerの担当

### **エラーハンドリング注意**
- ❌ `ValidationException`を独自catchして握りつぶさない（re-throw必須）
- ❌ エラーキー`'error'`使用禁止（`'email'`または`'password'`を使用）

---

## 📚 詳細ドキュメント（エラー時のみ参照）

**エラーが発生した場合のみ**以下を参照:

| ドキュメント | 用途 |
|-------------|------|
| `dev-kit/scripts/README.md` | 全スクリプトの使用方法詳細ガイド |
| `dev-kit/scripts/validations/backend.sh` | バックエンド実装検証（7ステップ、39チェック項目） |
| `dev-kit/docs/architecture/structure.md` | モジュール構造、アーキテクチャパターン |
| `CLAUDE.md` | 開発フロー、テスト要件 |

---

## 🎉 完了報告

backend-developerの実装が完了したら:

```bash
# 最終確認
find app/Modules/User -name "*.php" | wc -l  # 期待: 25+
./vendor/bin/sail artisan route:list | grep "/register"  # 期待: POST /register
```

**次のステップ**: backend-test-manager（PHP単体/統合テスト）

---

**最終更新日**: 2025-10-27
