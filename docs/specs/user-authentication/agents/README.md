# サブエージェント実装指示書 - README

## 📋 概要

このディレクトリには、各サブエージェント（AI）が実装・テスト・検証を行う際の **コマンド実行ガイド** が格納されています。

**重要原則**:
1. **design.md が絶対的な正**: AI の解釈ではなく、design.md/requirements.md の記載内容が全ての基準です
2. **コマンド駆動**: 詳細な実装手順は読まず、**コマンドを実行する**ことで自動的に検証されます
3. **100%検証**: すべてのチェックが合格するまで完了ではありません
4. **フロントエンドバリデーション最優先** ⭐重要:
   - ✅ フロントエンド側でリアルタイムバリデーション（onBlur時にエラー表示）
   - ✅ ui-componentsの`useDynamicForm` + `useDynamicValidation`を活用
   - ✅ バックエンド送信前にクライアント側で不正入力を防止
   - ❌ バリデーションをバックエンドのみに依存しない

---

## 📂 ファイル一覧

### サブエージェント実装指示書

| ファイル | 対象エージェント | 用途 |
|---------|---------------|------|
| `frontend-developer.md` | frontend-developer | フロントエンド実装（React/TypeScript/ui-components） |
| `frontend-playwright-tester.md` | frontend-playwright-tester | UI単体テスト（Playwright MCP） |
| `backend-developer.md` | backend-developer | バックエンド実装（Laravel/PHP/Clean Architecture） |
| `backend-test-manager.md` | backend-test-manager | PHP unit/integration/feature テスト実装・実行 |
| `backend-playwright-tester.md` | backend-playwright-tester | バックエンド→ブラウザ連携テスト（Playwright MCP） |
| `integration-playwright-tester.md` | integration-playwright-tester | E2E統合テスト（Playwright MCP） |
| `quality-assurance.md` | quality-assurance | 最終検証・リリース判定 |

### テスト定義ファイル（機械可読形式）

| ファイル | 用途 | 自動生成対象 |
|---------|------|------------|
| `../tests/test-cases.yaml` | PHPUnit テストケース定義 | Unit/Integration/Feature テスト |
| `../tests/playwright-flows.yaml` | Playwright E2E フロー定義 | E2E統合テスト（11フロー） |

**重要**: テストケースの追加・修正は直接YAMLファイルを編集してください。design.mdには概要のみ記載します。

---

## 🎯 検証スクリプト（最重要）

### 目的

**design.md の仕様に厳密に従っているかを機械的に検証する**

- AI の解釈に依存せず、ファイル存在・コード内容を100%検証
- design.md が絶対的な正として扱われる
- 検証スクリプトが100%合格しない限り、実装完了ではない

### 検証スクリプト一覧

#### **フロントエンド検証**: `./dev-kit/scripts/validations/frontend.sh`

**実行コマンド**:
```bash
./dev-kit/scripts/validations/frontend.sh
```

**検証内容（7フェーズ）**:
- Phase 1: useDynamicForm使用検証
- Phase 2: TypeScriptコンパイルチェック
- Phase 3: 禁止パターンチェック（HTMLバリデーション属性、window.location等）
- Phase 4: Tailwind CSS残存チェック
- Phase 5: 推奨パターン使用状況
- Phase 6: バックエンドテスト要件チェック
- Phase 7: バリデーションロジック検証

**実際に実行されるスクリプト**: `dev-kit/scripts/validations/frontend.sh`

#### **バックエンド検証**: `dev-kit/scripts/validations/backend.sh`

**実行コマンド**:
```bash
./dev-kit/dev-kit/scripts/validations/backend.sh
```

**検証内容（7ステップ）**:
- Step 1: フロントエンド実装検証
- Step 2: フロントエンド Playwright テスト
- Step 3: バックエンド実装 + design.md 整合性確認
- Step 4: バックエンドテスト（最重要）+ エラー分類
- Step 5: バックエンド統合テスト
- Step 6: E2E テスト
- Step 7: 総合品質検証 + セキュリティ要件確認

**期待結果**: `総合スコア: 100/100` で合格

### 使用タイミング

**全エージェントが必ず実行**:
- frontend-developer: `./dev-kit/scripts/validations/frontend.sh` 必須
- backend-developer: `./dev-kit/scripts/validations/backend.sh` 必須
- quality-assurance: 両方実行必須

---

## 🚀 開発フロー

### 1. 仕様確認

```bash
# design.md を確認
cat dev-kit/docs/specs/user-authentication/design.md

# requirements.md を確認
cat dev-kit/docs/specs/user-authentication/requirements.md
```

### 2. 実装（各エージェント）

各エージェントの md ファイルに従って実装を行う。

**重要**: 詳細な実装手順は読まず、**コマンドを実行する**ことで自動的に検証される。

### 3. 実装検証（必須）

```bash
# フロントエンド検証
./dev-kit/scripts/validations/frontend.sh

# バックエンド検証
./dev-kit/dev-kit/scripts/validations/backend.sh
```

**全てのチェックに合格するまで完了ではありません。**

### 4. 各種テスト実行

```bash
# PHPUnit テスト
./vendor/bin/sail artisan test --filter="User"

# Playwright UI単体テスト
./dev-kit/dev-kit/scripts/tests/frontend.sh

# Playwright バックエンド連携テスト
./dev-kit/dev-kit/scripts/tests/backend.sh

# Playwright E2E統合テスト
./dev-kit/dev-kit/scripts/tests/integration.sh
```

### 5. 最終検証（quality-assurance）

```bash
# フロントエンド + バックエンド総合検証
./dev-kit/scripts/validations/frontend.sh && ./dev-kit/scripts/validations/backend.sh
```

---

## 📚 参考ドキュメント

**エラーが発生した場合のみ**以下を参照:

| ドキュメント | 用途 |
|-------------|------|
| `dev-kit/scripts/README.md` | 全スクリプトの使用方法詳細ガイド |
| `dev-kit/scripts/validations/backend.sh` | バックエンド実装検証（7ステップ、39チェック項目） |
| `dev-kit/scripts/validations/frontend.sh` | フロントエンド実装検証（7フェーズ、23チェック項目） |
| `CLAUDE.md` | 開発コマンド一覧、UIコンポーネント使用ガイド、useDynamicForm API |
| `dev-kit/ui-components/LARAVEL_INTEGRATION_GUIDE.md` | 統合ガイド、テンプレート選択、データ渡し方 |

---

## 🚨 絶対禁止事項

### **全エージェント共通**

- ❌ **design.md の内容を AI が解釈して独自実装**: スクリプトが全て検証します
- ❌ **検証スクリプトの無視**: ./dev-kit/scripts/validations/frontend.sh と backend.sh は100%合格必須
- ❌ **design.md にない仕様を勝手に追加**: design.md が全ての基準

### **frontend-developer**

- ❌ シンボリックリンク作成禁止（ラッパーコンポーネントを使用）
- ❌ Inertia.jsの`useForm`使用禁止（`useDynamicForm`のみ使用）
- ❌ 独自UIコンポーネント作成禁止

### **backend-developer**

- ❌ フロントエンド実装禁止
- ❌ テスト実装禁止（backend-test-managerの担当）
- ❌ ValidationExceptionを独自catchして握りつぶさない

### **backend-test-manager**

- ❌ テストスキップ禁止（`$this->markTestSkipped()` 使用禁止）
- ❌ テスト失敗の無視禁止（1件でも失敗は未完了）
- ❌ テストメソッド名に日本語使用禁止（英語のみ）

### **integration-playwright-tester**

- ❌ **11つのテストケース（正常系5+異常系6）のうち1つでも省略は禁止**
- ❌ `npx playwright test`コマンド使用禁止（Playwright MCPツールのみ）
- ❌ 固定メールアドレスで新規登録禁止（ユニークメール生成必須）

---

## 🎯 成功基準

**リリース可能の条件**:

1. ✅ `./dev-kit/scripts/validations/frontend.sh` が100%合格
2. ✅ `./dev-kit/scripts/validations/backend.sh` が100%合格（総合スコア: 100/100）
3. ✅ 全PHPテストが100%パス（Failures: 0, Errors: 0）
4. ✅ 全Playwrightテスト成功（UI単体8件 + バックエンド連携6件 + E2E統合11件）

**1つでも満たさない場合はリリース不可**

---

**最終更新日**: 2025-10-27
