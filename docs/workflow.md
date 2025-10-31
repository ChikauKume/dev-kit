---
workflow: tdd
phases: 4
total_steps: 8
execution_mode: command_driven
---

# TDD ワークフロー実装指示書

## 事前準備（初回のみ実行）

```bash
./dev-kit/scripts/setup/init.sh
```

---

## 8ステップ実行フロー

### フェーズ0: 事前検証（Left Shift Testing）

#### ステップ0: 包括的事前検証

**目的**: 実装前にチェックできる項目のみ実行

```bash
npm run validate:env              # 環境・Docker確認
npm run validate:deps             # 依存関係（React version等）
npm run validate:syntax           # 構文エラー
npm run validate:blank-page       # 白画面防止
npm run validate:playwright       # Playwright設定
```

**成功基準**:
- ✅ すべてのチェックが合格

**注意**: `validate {SPEC_NAME}`, `validate:frontend`, `validate:backend` は実装後に実行

---

### フェーズ1: テスト準備（Red 状態確保）

#### ステップ1: テスト自動生成

**担当**: backend-test-manager
**TDD Stage**: Red
**指示書**: [backend-test-manager.md](./agents/backend-test-manager.md)

```bash
npm run generate:tests {SPEC_NAME}   # PHPUnit生成
npm run generate:e2e {SPEC_NAME}     # E2E生成
```

**成果物**:
- tests/Unit/Modules/{Module}/ にテストコード
- tests/Feature/Modules/{Module}/ にテストコード
- tests/e2e/{SPEC_NAME}/ にE2Eテスト

---

#### ステップ2: Red 状態確認

**担当**: backend-test-manager
**TDD Stage**: Red
**指示書**: [backend-test-manager.md](./agents/backend-test-manager.md)

```bash
./vendor/bin/sail artisan test      # すべて失敗（期待通り）
npm run test:e2e                     # すべて失敗（期待通り）
```

**成功基準**:
- ❌ すべてのテストが失敗（Red状態 - これが正常）

**重要**: これがTDDの正しいスタート

---

### フェーズ2: 実装（Red → Green）

#### ステップ3: フロントエンド実装

**担当**: frontend-developer
**TDD Stage**: Green
**指示書**: [frontend-developer.md](./agents/frontend-developer.md)

**実装対象**:
- React/TypeScript/ui-components
- useDynamicForm + useDynamicValidation
- 既存テンプレートのカスタマイズ

**実装方法**:

`init.sh`実行後、以下のテンプレートが既に配置されています：

```
resources/js/Pages/
├── Auth/
│   ├── LoginPage.tsx
│   ├── SignupPage.tsx
│   ├── SignupConfirmPage.tsx
│   ├── SignupCompletePage.tsx
│   └── ... (その他認証テンプレート)
├── Data/
│   ├── FormPage.tsx
│   ├── ListPage.tsx
│   └── DetailPage.tsx
├── Error/
│   ├── Error404Page.tsx
│   ├── Error500Page.tsx
│   └── MaintenancePage.tsx
├── Info/
│   ├── TermsPage.tsx
│   ├── PrivacyPage.tsx
│   ├── CommercialPage.tsx
│   └── QnaPage.tsx
├── DashboardPage.tsx
├── SettingsPage.tsx
├── StatisticsPage.tsx
└── NotificationsPage.tsx
```

**実装手順**:
1. 既存のテンプレートファイルを開く（例: `resources/js/Pages/Auth/LoginPage.tsx`）
2. ビジネスロジックのみカスタマイズ
3. UIコンポーネントはそのまま使用（変更不要）

**追加ページが必要な場合**:
既存のテンプレートをコピー&リネームして使用

**実装後検証**:
```bash
npm run build                         # ビルド成功確認
npm run validate:frontend {SPEC_NAME} # フロントエンド包括検証（独自実装検出を含む）
npm run test:e2e                      # E2Eテスト実行
```

**frontend.shが自動検出する問題**:
- 直接HTMLタグの使用（`<input>`, `<button>`, `<form>` 等）
- Tailwind CSSの直接使用
- カスタムコンポーネントの存在
- useDynamicForm/useDynamicValidation使用漏れ
- serverErrorsマッピング漏れ

**成功基準**:
- ✅ ビルドが成功（白画面なし）
- ✅ validate:frontend 合格（独自実装なし）
- ✅ フロントエンドテストが通る（Green）

---

#### ステップ4: バックエンド実装

**担当**: backend-developer
**TDD Stage**: Green
**指示書**: [backend-developer.md](./agents/backend-developer.md)

**実装対象**:
- Laravel/PHP/Clean Architecture（4層）
- FormRequest/Repository/UseCase/Controller

**実装後検証**:
```bash
./vendor/bin/sail artisan test
npm run validate {SPEC_NAME}           # design.md整合性
npm run validate:backend {SPEC_NAME}
```

**成功基準**:
- ✅ バックエンドテストが通る（Green）
- ✅ validate, validate:backend 合格

---

### フェーズ3: 統合テスト（Green 維持）

#### ステップ5: バックエンド→ブラウザ連携テスト

**担当**: backend-playwright-tester
**TDD Stage**: Green
**指示書**: [backend-playwright-tester.md](./agents/backend-playwright-tester.md)

**検証内容**:
- バリデーションエラー表示
- Flash メッセージ表示
- セッション連携

**成功基準**:
- ✅ バックエンド→フロントエンド連携が正常動作

---

#### ステップ6: E2E統合テスト

**担当**: integration-playwright-tester
**TDD Stage**: Green
**指示書**: [integration-playwright-tester.md](./agents/integration-playwright-tester.md)

**検証内容**:
- 完全なユーザーフロー
- 正常系・異常系シナリオ

```bash
npm run test:e2e
```

**成功基準**:
- ✅ すべてのE2Eシナリオが成功

---

### フェーズ4: リファクタリング・品質保証

#### ステップ7: リファクタリング

**TDD Stage**: Refactor

**作業内容**:
- 重複コード削減
- 命名改善
- パフォーマンス最適化

**リファクタリング後必ず実行**:
```bash
./vendor/bin/sail artisan test
npm run test:e2e
```

**成功基準**:
- ✅ すべてのテストが引き続き成功（Green 維持）

---

#### ステップ8: 品質保証・リリース判定

**担当**: quality-assurance
**TDD Stage**: QA
**指示書**: [quality-assurance.md](./agents/quality-assurance.md)

**7つの品質ゲート**:
1. フロントエンド品質
2. バックエンド品質
3. フロントエンド→バックエンド統合
4. E2Eユーザーシナリオ
5. デザイン整合性
6. パフォーマンス
7. セキュリティ

**成功基準**:
- ✅ すべての品質ゲートが合格 → リリース承認

---

## エージェント一覧

| ステップ | エージェント | フェーズ | TDD Stage | 指示書 |
|---------|-------------|---------|-----------|--------|
| 0 | - | 0 | Setup | - |
| 1-2 | backend-test-manager | 1 | Red | [backend-test-manager.md](./agents/backend-test-manager.md) |
| 3 | frontend-developer | 2 | Green | [frontend-developer.md](./agents/frontend-developer.md) |
| 4 | backend-developer | 2 | Green | [backend-developer.md](./agents/backend-developer.md) |
| 5 | backend-playwright-tester | 3 | Green | [backend-playwright-tester.md](./agents/backend-playwright-tester.md) |
| 6 | integration-playwright-tester | 3 | Green | [integration-playwright-tester.md](./agents/integration-playwright-tester.md) |
| 7 | - | 4 | Refactor | - |
| 8 | quality-assurance | 4 | QA | [quality-assurance.md](./agents/quality-assurance.md) |

---

## トラブルシューティング

**エラー時のみ参照**:
- `dev-kit/scripts/README.md` - 全スクリプト詳細ガイド
- `CLAUDE.md` - 開発コマンド一覧
- `docs/troubleshooting/` - 過去の障害事例

---

**最終更新日**: 2025-10-31
**重要な変更**:
- エージェント名修正: `backend-e2e-tester` → `backend-playwright-tester`, `integration-e2e-tester` → `integration-playwright-tester`
- ディレクトリパス修正: `tests/E2E/` → `tests/e2e/`
- コマンド簡略化: `npm run test:e2e tests/E2E/{SPEC_NAME}/` → `npm run test:e2e`
- **ページテンプレート事前配置**: init.sh Step 8 による物理的独自実装防止
