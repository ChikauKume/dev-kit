# サブエージェント実装指示書 - README

## 📋 概要

このディレクトリには、TDD ワークフローに最適化されたエージェント指示書が格納されています。

**TDD原則**:
```
Red → Green → Refactor → QA
```

**重要原則**:
1. **テストが先、実装が後**: 実装前にテストを作成
2. **design.md が Single Source of Truth**: AI の解釈ではなく、design.md が全ての基準
3. **コマンド駆動**: 詳細な実装手順は読まず、コマンドを実行することで自動的に検証
4. **100%検証**: すべてのチェックが合格するまで完了ではない

---

## 📂 ファイル一覧

### メインドキュメント

| ファイル | 説明 |
|---------|------|
| `README.md` | このファイル（概要・使い方） |

**TDDワークフロー全体像**: `../workflow.md` を参照

### エージェント指示書

| ファイル | エージェント | フェーズ | ステップ | TDD Stage | 説明 |
|---------|-------------|---------|---------|-----------|------|
| `backend-test-manager.md` | backend-test-manager | 1-2 | 1-2 | Red | テスト生成・Red状態確認 |
| `frontend-developer.md` | frontend-developer | 2 | 3 | Green | フロントエンド実装 |
| `backend-developer.md` | backend-developer | 2 | 4 | Green | バックエンド実装 |
| `backend-e2e-tester.md` | backend-e2e-tester | 3 | 5 | Green | バックエンド→ブラウザ連携確認 |
| `integration-playwright-tester.md` | integration-playwright-tester | 3 | 6 | Green | E2E統合テスト |
| `quality-assurance.md` | quality-assurance | 4 | 8 | QA | 品質保証・リリース判定 |

---

## 🎯 新フォーマット（全エージェント統一）

各エージェント指示書は以下のフロントマターを持ちます:

```yaml
---
agent: エージェント名
phase: フェーズ番号
step: ステップ番号
tdd_stage: red|green|refactor|qa
responsibility:
  - 責務1
  - 責務2
forbidden:
  - 禁止事項1
  - 禁止事項2
validation:
  command: 検証コマンド
  success_criteria: 成功基準
prerequisite:
  - 前提条件1
next_step: 次のエージェント
execution_mode: command_driven
---
```

**ドキュメント構造**:
1. **TDD原則セクション**: 現在のフェーズ、責務、禁止事項を簡潔に
2. **実行コマンドセクション**: ステップごとにコマンドのみ記載
3. **完了確認セクション**: 次のステップと完了条件
4. **トラブルシューティング**: エラー時のみ参照する詳細情報

---

## 🚀 TDD ワークフロー（8ステップ）

### フェーズ0: 事前検証（Left Shift Testing）

#### ステップ0: 包括的事前検証

```bash
npm run validate:env              # 環境・Docker確認
npm run validate:deps             # 依存関係
npm run validate:syntax           # 構文エラー
npm run validate:blank-page       # 白画面防止
npm run validate:playwright       # Playwright設定
```

---

### フェーズ1: テスト準備（Red 状態確保）

#### ステップ1-2: テスト生成・Red確認

**担当**: backend-test-manager

```bash
npm run generate:tests {SPEC_NAME}   # PHPUnit生成
npm run generate:e2e {SPEC_NAME}     # E2E生成
./vendor/bin/sail artisan test      # すべて失敗（期待通り）
npm run test:e2e                     # すべて失敗（期待通り）
```

---

### フェーズ2: 実装（Red → Green）

#### ステップ3: フロントエンド実装

**担当**: frontend-developer

```bash
# 実装後検証
npm run validate:frontend {SPEC_NAME}
npm run test:e2e
```

#### ステップ4: バックエンド実装

**担当**: backend-developer

```bash
# 実装後検証
./vendor/bin/sail artisan test
npm run validate {SPEC_NAME}
npm run validate:backend {SPEC_NAME}
```

---

### フェーズ3: 統合テスト（Green 維持）

#### ステップ5: バックエンド→ブラウザ連携

**担当**: backend-playwright-tester

```bash
npm run test:backend-e2e
```

#### ステップ6: E2E統合テスト

**担当**: integration-playwright-tester

```bash
npm run test:e2e
```

---

### フェーズ4: リファクタリング・品質保証

#### ステップ7: リファクタリング（任意）

**TDD Stage**: Refactor

```bash
# リファクタリング後必ず実行
./vendor/bin/sail artisan test
npm run test:e2e
```

#### ステップ8: 品質保証・リリース判定

**担当**: quality-assurance

```bash
npm run qa:full {SPEC_NAME}
```

---

## 🎯 検証スクリプト（最重要）

### 目的

**design.md の仕様に厳密に従っているかを機械的に検証する**

- AI の解釈に依存せず、ファイル存在・コード内容を100%検証
- design.md が絶対的な正として扱われる
- 検証スクリプトが100%合格しない限り、実装完了ではない

### フロントエンド検証

```bash
npm run validate:frontend {SPEC_NAME}
```

**検証内容**:
- useDynamicForm使用検証
- TypeScriptコンパイルチェック
- 禁止パターンチェック
- Tailwind CSS残存チェック
- 推奨パターン使用状況

### バックエンド検証

```bash
npm run validate:backend {SPEC_NAME}
```

**検証内容**:
- Clean Architecture 4層構造確認
- FormRequest バリデーションルール確認
- PHPUnitテスト100%パス
- design.md 整合性確認

---

## 🚨 絶対禁止事項

### 全エージェント共通

- ❌ design.md の内容を AI が解釈して独自実装
- ❌ 検証スクリプトの無視
- ❌ design.md にない仕様を勝手に追加

### frontend-developer

- ❌ Inertia.js の useForm 使用（useDynamicForm のみ）
- ❌ 独自UIコンポーネント作成
- ❌ Tailwind CSS 直接使用

### backend-developer

- ❌ フロントエンド実装
- ❌ テスト実装（backend-test-managerの担当）
- ❌ ValidationException 独自catch

### backend-test-manager

- ❌ 実装コード作成
- ❌ テストスキップ
- ❌ テスト失敗の無視

### integration-playwright-tester

- ❌ 11テストケースのうち1つでも省略
- ❌ npx playwright test コマンド使用（E2E MCPのみ）
- ❌ 固定メールアドレスで新規登録

---

## 🎯 成功基準（全工程完了の判定）

**リリース可能の条件**:

0. ✅ ステップ0: 事前検証合格
1. ✅ ステップ1-2: Red状態確認（すべて失敗が正常）
2. ✅ ステップ3: フロントエンド実装・検証合格
3. ✅ ステップ4: バックエンド実装・検証合格
4. ✅ ステップ5: バックエンド→ブラウザ連携確認
5. ✅ ステップ6: E2E統合テスト全件成功
6. ✅ ステップ7: リファクタリング後もテスト Green 維持（任意）
7. ✅ ステップ8: 品質保証7ゲート全合格

**1つでも満たさない場合はリリース不可**

---

## 📚 参考ドキュメント

**エラーが発生した場合のみ**以下を参照:

| ドキュメント | 用途 |
|-------------|------|
| `../workflow.md` | TDD ワークフロー全体像 |
| `dev-kit/scripts/README.md` | 全スクリプトの使用方法詳細ガイド |
| `CLAUDE.md` | 開発コマンド一覧、UIコンポーネント使用ガイド |
| `dev-kit/ui-components/LARAVEL_INTEGRATION_GUIDE.md` | テンプレート使用方法 |

---

**最終更新日**: 2025-10-30
**重要な変更**: TDD ワークフロー導入、8ステップフロー確定、新フォーマット統一
