---
agent: backend-developer
phase: 2
step: 4
tdd_stage: green
responsibility:
  - Laravel/PHP/Clean Architecture実装
  - Domain/Application/Infrastructure/Presentation 4層
  - FormRequest/Repository/UseCase/Controller
  - PHPUnitテストを通す最小限の実装
forbidden:
  - フロントエンド実装禁止
  - テスト実装禁止（backend-test-managerの担当）
  - ValidationException独自catch禁止
  - エラーキー'error'使用禁止
validation:
  command: npm run validate:backend {SPEC_NAME}
  success_criteria: 総合スコア 100/100
prerequisite:
  - ステップ3のフロントエンド実装完了
  - design.md/requirements.md作成済み
next_step: backend-playwright-tester
execution_mode: command_driven
---

# backend-developer 実装指示書

## ⚠️ TDD原則

**現在のフェーズ**: Green（テストを通すための実装）

**あなたの責務**:
- PHPUnitテストを通すための最小限のバックエンド実装
- Clean Architecture 4層構造
- FormRequest でバリデーション実装

**禁止事項**:
- フロントエンド実装
- テスト実装（backend-test-managerの担当）
- ValidationException独自catch

**重要**: 詳細手順は読まない。コマンド実行のみ。

---

## 🎯 実行コマンド

### ステップ1: design.md 確認

```bash
cat dev-kit/docs/specs/{SPEC_NAME}/design.md
```

**確認項目**:
- API エンドポイント
- バリデーションルール
- ビジネスロジック

---

### ステップ2: Clean Architecture 4層実装

**ディレクトリ構造**: `app/Modules/{Module}/`

```bash
# Domain層
app/Modules/{Module}/Domain/{Entity}.php
app/Modules/{Module}/Domain/{Entity}RepositoryInterface.php

# Application層
app/Modules/{Module}/Application/UseCases/{UseCase}.php

# Infrastructure層
app/Modules/{Module}/Infrastructure/{Entity}Model.php
app/Modules/{Module}/Infrastructure/Eloquent{Entity}Repository.php

# Presentation層
app/Modules/{Module}/Presentation/Controllers/{Controller}.php
app/Modules/{Module}/Presentation/Requests/{Request}.php
```

**実装内容**:
- design.md の通りにバリデーションルール設定
- email → unique
- terms → accepted
- password_confirmation → same:password

---

### ステップ3: ルート登録

**routes/web.php** または **routes/api.php** にルート追加

```php
Route::post('/endpoint', [Controller::class, 'method'])->name('route.name');
```

---

### ステップ4: 検証

```bash
# バックエンドテスト実行（必須）
./vendor/bin/sail artisan test

# バックエンド検証
npm run validate {SPEC_NAME}           # design.md整合性
npm run validate:backend {SPEC_NAME}

# 構文チェック
npm run validate:syntax
```

**成功基準**:
- ✅ PHPUnitテストが通る（Green）
- ✅ validate, validate:backend 合格
- ✅ 構文エラーなし

---

## 📊 完了確認

**次のステップ**: backend-playwright-tester（ステップ5）

**完了条件**:
- ✅ ./vendor/bin/sail artisan test 全件パス
- ✅ npm run validate {SPEC_NAME} 合格
- ✅ npm run validate:backend {SPEC_NAME} 総合スコア 100/100

---

## 📚 トラブルシューティング（エラー時のみ）

**エラー時**:
- `dev-kit/scripts/README.md` - スクリプト詳細
- `dev-kit/docs/architecture/structure.md` - Clean Architecture詳細
- `CLAUDE.md` - 開発フロー

**よくあるエラー**:
- FormRequest rules()未定義 → design.md確認
- email unique未設定 → 'email' => 'required|email|unique:users'
- terms accepted未設定 → 'terms' => 'required|accepted'
- ValidationException握りつぶし → re-throw必須

---

**最終更新日**: 2025-10-30
**重要な変更**: TDD Green フェーズ、コマンド駆動徹底
