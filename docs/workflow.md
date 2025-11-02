---
workflow: simplified-tdd
phases: 4
total_steps: 12
execution_mode: command_driven
---

# TDDワークフロー実装指示書

## 前提条件

以下のファイルが存在すること：
- `dev-kit/docs/specs/{SPEC_NAME}/design.md` - 機能仕様
- `dev-kit/docs/specs/{SPEC_NAME}/tests/phpunit.yaml` - PHPUnitテスト設計
- `dev-kit/docs/specs/{SPEC_NAME}/tests/e2e.yaml` - E2Eシナリオ設計

---

## 12ステップ実行フロー

### ステップ1: 作業依頼受領

```bash
cat dev-kit/docs/specs/{SPEC_NAME}/design.md
cat dev-kit/docs/specs/{SPEC_NAME}/tests/phpunit.yaml
cat dev-kit/docs/specs/{SPEC_NAME}/tests/e2e.yaml
```

---

### ステップ2: 初期設定（初回のみ）

```bash
./dev-kit/scripts/setup/init.sh
```

**注意**: 設定ファイル（vite.config.js, phpunit.xml, tsconfig.json）は上書きされます

---

### ステップ3: 環境検証

```bash
npm run validate:env
npm run validate:deps
npm run validate:syntax
npm run validate:blank-page
npm run validate:playwright
```

---

### ステップ4: スケルトン生成

**エージェント**: backend-test-manager（推奨）

```bash
npm run generate:tests {SPEC_NAME}
npm run generate:e2e {SPEC_NAME}
```

**生成物**:
- `app/Modules/{Module}/` - Clean Architecture 4層
- `tests/Unit/`, `tests/Feature/` - PHPUnitテスト
- `tests/e2e/{SPEC_NAME}/` - E2Eテスト

---

### ステップ5: Red状態確認

```bash
# TDDチェックポイント設定（初回のみ）
vim dev-kit/config/tdd-checkpoints.yml
npm run tdd:next

# Red確認（すべて失敗＝正常）
./vendor/bin/sail artisan test
npm run test:e2e

# RED状態をHTMLレポートで確認（動画で失敗を視覚的に把握）
npm run test:e2e:show
```

---

### ステップ6: フロントエンド実装

**エージェント**: frontend-developer

**実装サイクル**:
```bash
# 1. コンポーネント/機能を実装
# 2. テスト実行 + GREEN確認（失敗時は停止）
npm run build && npm run test:e2e || (echo "❌ テスト失敗" && exit 1)
# 3. 次へ（繰り返し）

# 失敗時はHTMLレポート確認（動画で問題箇所を特定）
npm run test:e2e:show
```

---

### ステップ7: フロントエンド検証

```bash
npm run build
npm run validate:frontend {SPEC_NAME}
npm run validate:integration {SPEC_NAME}
npm run validate:japanese
npm run validate:design {SPEC_NAME}
```

**不合格**: ステップ6に戻る

---

### ステップ8: バックエンド実装

**エージェント**: backend-developer

**実装サイクル（Domain → Application → Infrastructure → Presentation）**:
```bash
# 各層ごとに実装 → テスト → GREEN確認（失敗時は停止）
./vendor/bin/sail artisan test || (echo "❌ テスト失敗" && exit 1)
```

---

### ステップ9: バックエンド検証

```bash
npm run validate {SPEC_NAME}
npm run validate:backend {SPEC_NAME}
npm run validate:japanese {SPEC_NAME}
npm run validate:design {SPEC_NAME}
```

**不合格**: ステップ8に戻る

---

### ステップ10: 全テスト実行（Green達成）

#### 10-1: TDDサイクル実装

**エージェント**: backend-test-manager

```bash
# 1. 次のチェックポイント確認
npm run tdd:next

# 2. テストを書く

# 3. RED確認
npm run tdd:red

# 4. 実装

# 5. GREEN確認
npm run tdd:green

# 6. 次へ（繰り返し）

# 自動実行オプション
npm run tdd:cycle "<checkpoint-name>"
```

#### 10-2: バックエンド→ブラウザ連携確認

**エージェント**: backend-playwright-tester

#### 10-3: 最終統合テスト

**エージェント**: integration-playwright-tester

```bash
./vendor/bin/sail artisan test
npm run test:e2e

# HTMLレポート確認（動画付き）
npm run test:e2e:show
```

**期待**: 100% PASS（ステップ6,8で各テストはGREEN済み）

**HTMLレポート**: 動画付きレポートで全テストの動作を視覚的に確認可能

---

### ステップ11: 品質確認・リリース判定

**エージェント**: quality-assurance

```bash
npm run validate:principles {SPEC_NAME}
```

**自動検証内容**:
- DO原則6つ（ui-components、Clean Architecture、design.md準拠、日本語句点、品質ゲート、TDD）
- DON'T原則7つ（カスタム禁止、Tailwind禁止、直接HTML禁止など）
- 7つの品質ゲート（フロントエンド、バックエンド、テスト、デザイン、パフォーマンス、セキュリティ、ドキュメント）

**不合格**: 該当ステップに戻る

---

### ステップ12: 完了報告

```
## 実装完了報告

### 機能名
{SPEC_NAME}

### テスト結果
- PHPUnit: {成功数}/{総数} passed (100%)
- E2E: {成功数}/{総数} passed (100%)

### リリース判定
✅ リリース可能
```

---

## エージェント対応表

| ステップ | エージェント | 必須/推奨 |
|---------|-------------|----------|
| 4 | backend-test-manager | 推奨 |
| 6 | frontend-developer | 必須 |
| 8 | backend-developer | 必須 |
| 10-1 | backend-test-manager | 必須 |
| 10-2 | backend-playwright-tester | 必須 |
| 10-3 | integration-playwright-tester | 必須 |
| 11 | quality-assurance | 必須 |

---

## 参考ドキュメント

### アーキテクチャ
- [modules.md](./architecture/modules.md) - Clean Architecture
- [structure.md](./architecture/structure.md) - ディレクトリ構造
- [tech.md](./architecture/tech.md) - 技術スタック
- [db.md](./architecture/db.md) - データベース設計
- [pages.md](./architecture/pages.md) - ページテンプレート
- [error-handling.md](./architecture/error-handling.md) - エラーハンドリング

### テスト
- [testing.md](./architecture/testing.md) - テスト戦略

### エージェント
- [backend-test-manager.md](./agents/backend-test-manager.md)
- [frontend-developer.md](./agents/frontend-developer.md)
- [backend-developer.md](./agents/backend-developer.md)
- [backend-playwright-tester.md](./agents/backend-playwright-tester.md)
- [integration-playwright-tester.md](./agents/integration-playwright-tester.md)
- [quality-assurance.md](./agents/quality-assurance.md)
