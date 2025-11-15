---
workflow: pattern-task-based-development
execution_mode: task_driven
ai_automation: enabled
pattern: task-by-task-fullstack
---

# タスクベース開発ワークフロー

## 📋 目次

1. [初期設定](./setup.md) ※プロジェクト作成時に1回のみ実施
2. [タスク実装フロー](#タスク実装フロー)
3. [参考資料](#参考資料)

---

## タスク実装フロー

**前提**: [初期設定](./setup.md)が完了していることを確認してください。

初めてこのプロジェクトで開発する場合は、先に[初期設定](./setup.md)を実施してください。

### 実装サイクル

**基本フロー**:
```
[実装] 1. 進捗確認 → 2. 実装（繰り返し）
        ↓ 全実装完了後
[検証] E2E検証 → 統合確認
```

---

#### テスト自動生成（オプション）

YAMLから各種テストとアーキテクチャを自動生成できます：

**E2Eテスト生成**:
```bash
npm run generate:e2e <spec-name>

# 例: login仕様のE2Eテストを生成
npm run generate:e2e login
```

**生成されるファイル**:
- `tests/e2e/{spec-name}/E2E-XXX.spec.ts` - Playwrightテストスケルトン
- 正常系・異常系テストケースの雛形
- 日本語コメント付き

**PHPUnitテスト + Clean Architecture生成**:
```bash
npm run generate:phpunit <spec-name>

# 例: login仕様のPHPUnitテスト + アーキテクチャを生成
npm run generate:phpunit login
```

**生成されるファイル**:
- **Domain層**: `RepositoryInterface`
- **Application層**: `UseCase`
- **Infrastructure層**: `Eloquent Model`, `Repository実装`
- **Presentation層**: `Controller`, `FormRequest`
- **ServiceProvider**: DI設定
- **Unit/Feature Tests**: PHPUnitテストスケルトン

既存ファイルは自動的にスキップされるため、安全に実行できます。

---

#### ステップ1: タスク進捗確認

```bash
npm run task:status {SPEC_NAME}
```

次に実装するタスク（⏳マーク）とそのphaseを確認します。

---

#### ステップ2: タスク実装

**tasks.yamlのphaseに応じて、適切なサブエージェントを起動**:

| phase | サブエージェント | 実装内容 |
|-------|----------------|---------|
| `frontend` | `frontend-developer` | UI実装（React/TypeScript、ui-componentsのみ使用） |
| `backend` | `backend-developer` | Clean Architecture 4層実装、日本語バリデーション |
| `e2e-testing` | `frontend-test-manager` | E2Eテスト実装（Playwright、正常系・異常系） |
| `integration` | `quality-assurance` | 統合検証、品質ゲート確認、リリース判定 |

**実装後の検証**:
```bash
# フロントエンド
npm run validate:frontend

# バックエンド
./vendor/bin/sail artisan test
npm run validate:backend {SPEC_NAME}
```

実装完了後、`tasks.yaml`のstatusを`completed`に更新し、ステップ1に戻ります。

---

#### ステップ3: E2E検証（phase: e2e-testing）

**前提**: frontend/backend phaseのタスクが全て完了済み

```bash
npm run build
npx playwright test tests/e2e/{SPEC_NAME}/
npx playwright show-report
```

**担当**: `frontend-test-manager` サブエージェント

E2Eテスト成功後、該当タスクのstatusを`completed`に更新します。

---

#### ステップ4: 統合確認（phase: integration）

**前提**: frontend/backend/e2e-testing phaseのタスクが全て完了済み

**担当**: `quality-assurance` サブエージェント

```bash
# 統合検証
npm run validate:integration

# フロントエンド品質
npm run validate:frontend

# バックエンド品質
npm run validate:backend {SPEC_NAME}

# デザイン整合性
npm run validate:design

# 日本語メッセージ
npm run validate:japanese

# E2E整合性
npm run validate:e2e-integrity {SPEC_NAME}

# Inertia.js使用確認
npm run validate:inertia

# 原則チェック
npm run validate:principles
```

全E2Eテスト一括実行と品質ゲート確認を行い、リリース判定を行います。

---

## 参考資料

### 関連ドキュメント

- [初期設定](./setup.md) - プロジェクト作成時の初期セットアップ手順
- [tasks.yaml テンプレート](../templates/tasks.template.yaml)
- [Clean Architecture ガイド](./clean-architecture.md)
- [ui-components CLAUDE.md](../../ui-components/CLAUDE.md)
