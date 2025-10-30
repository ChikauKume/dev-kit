# 機能実装指示書（Spec-First TDD版）

**最終更新日**: 2025-10-30

**使い方**: このテンプレートは全spec共通です。`{SPEC_NAME}`を実際のspec名に置き換えてください。

---

## 📋 前提条件

以下のドキュメントが作成済みであること:
- ✅ `dev-kit/docs/specs/{SPEC_NAME}/requirements.md` - 要件定義
- ✅ `dev-kit/docs/specs/{SPEC_NAME}/design.md` - 画面設計（Single Source of Truth）
- ✅ `dev-kit/docs/specs/{SPEC_NAME}/tests/test-cases.yaml` - テストケースメタ情報
  - `unit-tests.yaml` - 単体テストケース
  - `feature-tests.yaml` - 統合テストケース
  - `e2e-tests.yaml` - E2Eテストケース

---

## 🎯 実装フロー（Spec-First TDD: 8ステップ）

### フェーズ1: 検証・テスト準備

#### ステップ0: 包括的事前検証（最優先 - Left Shift Testing）

**実装前にチェックできる項目のみ実行**:

```bash
npm run validate:env              # 環境ファイル・Docker起動確認
npm run validate:deps             # 依存関係チェック（React version等）
npm run validate:syntax           # 既存コードの構文エラー
npm run validate:blank-page       # 白画面防止（Vite設定等）
npm run validate:playwright       # Playwright標準設定チェック

# 期待結果: ✅ すべてのチェックが合格
```

**重要**: 全てのチェックが合格するまで次のステップに進まないでください。

**注意**: `validate {SPEC_NAME}`, `validate:frontend`, `validate:backend` は実装後に実行します（ステップ3/4参照）。

---

#### ステップ1: テストコード自動生成（実装前）

```bash
# PHPUnit テスト生成（単体テスト・統合テスト）
npm run generate:tests {SPEC_NAME}

# Playwright E2Eテスト生成
npm run generate:e2e {SPEC_NAME}

# 期待結果:
# - tests/Unit/Modules/{Module}/ にテストコード生成
# - tests/Feature/Modules/{Module}/ にテストコード生成
# - tests/e2e/{SPEC_NAME}/ にE2Eテストコード生成
```

---

#### ステップ2: 生成されたテストを確認・実行（Red状態の確認）

```bash
# PHPUnit実行 → すべて失敗（実装がないため）
./vendor/bin/sail artisan test

# Playwright実行 → すべて失敗（実装がないため）
npm run test:e2e tests/e2e/{SPEC_NAME}/

# 期待結果: ❌ すべてのテストが失敗（Red状態 - これが正常）
```

**これはTDDの正しいスタートです！** テストが先、実装が後。

---

### フェーズ2: 実装（Red → Green）

#### ステップ3: フロントエンド実装（Greenを目指す）

```bash
# サブエージェント起動（frontend-developer）
# 目的: テストを通すための最小限の実装
# 詳細: dev-kit/docs/agents/frontend-developer.md
```

**実装後、即座にテスト実行**:
```bash
npm run test:e2e tests/e2e/{SPEC_NAME}/
npm run validate:frontend {SPEC_NAME}

# 期待結果: ✅ フロントエンドテストが徐々に通る（Green）
```

---

#### ステップ4: バックエンド実装（Greenを目指す）

```bash
# サブエージェント起動（backend-developer）
# 目的: テストを通すための最小限の実装
# 詳細: dev-kit/docs/agents/backend-developer.md
```

**実装後、即座にテスト実行**:
```bash
./vendor/bin/sail artisan test
npm run validate {SPEC_NAME}           # design.md整合性チェック
npm run validate:backend {SPEC_NAME}

# 期待結果: ✅ バックエンドテストが徐々に通る（Green）
```

---

### フェーズ3: 統合テスト・検証

#### ステップ5: 統合テスト実行（すべてGreen確認）

```bash
# バックエンド→フロントエンド統合テスト
# サブエージェント起動（backend-playwright-tester）
# 詳細: dev-kit/docs/agents/backend-playwright-tester.md

# 期待結果: ✅ バリデーションエラー表示、Flash表示等が正常動作
```

---

#### ステップ6: E2E統合テスト実行（完全なユーザーフロー確認）

```bash
# サブエージェント起動（integration-playwright-tester）
# 詳細: dev-kit/docs/agents/integration-playwright-tester.md

# 期待結果: ✅ すべてのE2Eシナリオが成功
```

---

### フェーズ4: 品質保証・リファクタリング

#### ステップ7: リファクタリング（Refactor - コード改善）

**テストが通っている状態でコードを改善**:
- 重複コードの削減
- 命名の改善
- パフォーマンス最適化

**リファクタリング後、必ずテスト実行**:
```bash
./vendor/bin/sail artisan test
npm run test:e2e tests/e2e/{SPEC_NAME}/

# 期待結果: ✅ すべてのテストが引き続き成功（Green維持）
```

---

#### ステップ8: 最終品質検証・リリース判定

```bash
# サブエージェント起動（quality-assurance）
# 詳細: dev-kit/docs/agents/quality-assurance.md

# 7つの品質ゲートを確認:
# 1. フロントエンド品質
# 2. バックエンド品質
# 3. フロントエンド→バックエンド統合
# 4. E2Eユーザーシナリオ
# 5. デザイン整合性
# 6. パフォーマンス
# 7. セキュリティ

# 期待結果: ✅ すべての品質ゲートが合格 → リリース承認
```

---

## 📚 詳細ドキュメント

| ステップ | サブエージェント | 指示書ファイル |
|---------|--------------|-------------|
| 0 | - | [design.php](../../scripts/validate/design.php) |
| 1-2 | - | テスト自動生成・実行 |
| 3 | frontend-developer | [frontend-developer.md](./frontend-developer.md) |
| 4 | backend-developer | [backend-developer.md](./backend-developer.md) |
| 5 | backend-playwright-tester | [backend-playwright-tester.md](./backend-playwright-tester.md) |
| 6 | integration-playwright-tester | [integration-playwright-tester.md](./integration-playwright-tester.md) |
| 7 | - | リファクタリング |
| 8 | quality-assurance | [quality-assurance.md](./quality-assurance.md) |

