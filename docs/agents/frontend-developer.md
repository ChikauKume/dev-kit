---
agent: frontend-developer
phase: 2
step: 3
tdd_stage: green
responsibility:
  - React/TypeScript/ui-components実装
  - useDynamicForm + useDynamicValidation使用
  - テンプレートベース実装
  - E2Eテストを通す最小限の実装
forbidden:
  - Inertia.js useForm使用禁止
  - 独自UIコンポーネント作成禁止
  - Tailwind CSS直接使用禁止
  - HTMLバリデーション属性使用禁止
validation:
  command: npm run validate:frontend {SPEC_NAME}
  success_criteria: 全チェック合格
prerequisite:
  - ステップ2のRed状態確認完了
  - design.md/requirements.md作成済み
next_step: backend-developer
execution_mode: command_driven
---

# frontend-developer 実装指示書

## ⚠️ TDD原則

**現在のフェーズ**: Green（テストを通すための実装）

**あなたの責務**:
- E2Eテストを通すための最小限のフロントエンド実装
- ui-components テンプレート使用
- useDynamicForm + useDynamicValidation 使用

**禁止事項**:
- Inertia.js の useForm 使用（useDynamicForm のみ）
- 独自UIコンポーネント作成
- Tailwind CSS 直接使用

**重要**: 詳細手順は読まない。コマンド実行のみ。

---

## 🎯 実行コマンド

### ステップ1: design.md 確認

```bash
cat dev-kit/docs/specs/{SPEC_NAME}/design.md
```

**確認項目**:
- ページ一覧
- フィールド定義
- バリデーションルール

---

### ステップ2: テンプレート選択・実装

**テンプレート一覧**: `dev-kit/ui-components/templates/`

```bash
# 例: 2カラムフォーム
cp dev-kit/ui-components/templates/two-column-form.tsx resources/js/Pages/{Module}/{PageName}.tsx
```

**実装内容**:
- design.md の通りにフィールド配置
- useDynamicForm, useDynamicValidation 使用
- serverErrors マッピング

---

### ステップ3: ルート設定

**routes/web.php** にルート追加（design.md の通り）

```php
Route::get('/page-path', [Controller::class, 'index'])->name('page.name');
Route::post('/page-path', [Controller::class, 'store']);
```

---

### ステップ4: 検証

```bash
# フロントエンド検証（必須）
npm run validate:frontend {SPEC_NAME}

# E2Eテスト実行
npm run test:e2e
```

**成功基準**:
- ✅ validate:frontend 全チェック合格
- ✅ E2Eテストが通り始める（まだバックエンドがないので一部失敗は正常）

---

## 📊 完了確認

**次のステップ**: backend-developer（ステップ4）

**完了条件**:
- ✅ npm run validate:frontend {SPEC_NAME} 合格
- ✅ ページが表示される
- ✅ フォーム送信が試行できる（バックエンドエラーは正常）

---

## 📚 トラブルシューティング（エラー時のみ）

**エラー時**:
- `dev-kit/ui-components/LARAVEL_INTEGRATION_GUIDE.md` - テンプレート使用方法
- `CLAUDE.md` - useDynamicForm API
- `dev-kit/scripts/README.md` - スクリプト詳細

**よくあるエラー**:
- useForm使用エラー → useDynamicForm に変更
- Tailwind残存 → ui-components のコンポーネント使用
- serverErrors未定義 → useDynamicForm で自動処理

---

**最終更新日**: 2025-10-30
**重要な変更**: TDD Green フェーズ、コマンド駆動徹底
