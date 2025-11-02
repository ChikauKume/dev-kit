---
agent: backend-playwright-tester
phase: 3
step: 5
tdd_stage: green
responsibility:
  - バックエンド→ブラウザ連携確認
  - バリデーションエラー表示確認
  - Flash メッセージ表示確認
  - セッション連携確認
forbidden:
  - E2Eユーザーシナリオテスト禁止（integration-playwright-testerの担当）
  - UI単体テスト禁止
validation:
  command: npm run test:backend-e2e
  success_criteria: 全テスト成功
prerequisite:
  - ステップ4のバックエンド実装完了
  - PHPUnitテスト全件パス
next_step: integration-playwright-tester
execution_mode: command_driven
---

# backend-playwright-tester 実装指示書

## ⚠️ TDD原則

**現在のフェーズ**: Green（バックエンド→フロントエンド統合確認）

**あなたの責務**:
- バリデーションエラーがブラウザに表示されることを確認
- Flash メッセージ表示確認
- セッション連携確認

**禁止事項**:
- E2Eユーザーシナリオテスト（integration-playwright-testerの担当）
- UI単体テスト

**重要**: 詳細手順は読まない。コマンド実行のみ。

---

## 🎯 実行コマンド

### ステップ1: キャッシュクリア

```bash
npm run cache:clear
```

**重要**: テスト前に必ず実行

---

### ステップ2: バックエンド→ブラウザ連携テスト

```bash
# バックエンド連携テスト実行
npm run test:backend-e2e
```

**テスト内容**:
- ✅ バリデーションエラーがブラウザに表示される
- ✅ 日本語メッセージが正しく表示される
- ✅ Flash メッセージが表示される
- ✅ リダイレクトが正しく動作する
- ✅ データベース変更がブラウザに反映される

---

### ステップ3: スクリーンショット確認

```bash
# スクリーンショット数確認
ls docs/test-reports/screenshots/{SPEC_NAME}/backend-*.png | wc -l

# 期待: 6枚以上（テストケース数に対応）
```

**成功基準**:
- ✅ すべてのテストが成功
- ✅ スクリーンショット保存済み
- ✅ バリデーションエラーが表示されている

---

## 📊 完了確認

**次のステップ**: integration-playwright-tester（ステップ6）

**完了条件**:
- ✅ npm run test:backend-e2e 全件パス
- ✅ スクリーンショット保存確認
- ✅ バリデーションエラー表示確認

---

## 📚 トラブルシューティング（エラー時のみ）

**エラー時**:
- `dev-kit/scripts/tests/backend.sh` - テスト実行スクリプト
- `CLAUDE.md` - ui-componentsテンプレート使用ガイド
- `dev-kit/scripts/README.md` - スクリプト詳細

**よくあるエラー**:
- バリデーションエラーが表示されない → useDynamicValidation 確認
- 文字化け → lang/ja/validation.php 確認
- Flash表示されない → Controller で flash() 確認

---

**最終更新日**: 2025-10-30
**重要な変更**: TDD Green フェーズ、バックエンド→フロントエンド連携確認
