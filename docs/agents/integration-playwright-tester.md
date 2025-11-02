---
agent: integration-playwright-tester
phase: 3
step: 6
tdd_stage: green
responsibility:
  - E2E統合テスト実装・実行
  - フロントエンド + バックエンド統合動作確認
  - ユーザーシナリオの完全実行
  - QA証跡作成
forbidden:
  - 11テストケースのうち1つでも省略禁止
  - npx playwright test コマンド使用禁止（E2E MCPのみ）
  - 固定メールアドレスで新規登録禁止
validation:
  command: npm run test:e2e
  success_criteria: 全テスト成功（正常系5+異常系6）
prerequisite:
  - ステップ5のバックエンド→ブラウザ連携確認完了
  - PHPUnitテスト全件パス
next_step: quality-assurance（ステップ7スキップ後）
execution_mode: command_driven
---

# integration-playwright-tester 実装指示書

## ⚠️ TDD原則

**現在のフェーズ**: Green（E2E統合テスト）

**あなたの責務**:
- 完全なユーザーフロー確認
- 正常系・異常系シナリオ実行
- QA証跡作成

**禁止事項**:
- 11テストケースのうち1つでも省略
- npx playwright test 使用
- 固定メールアドレスで新規登録

**重要**: 詳細手順は読まない。コマンド実行のみ。

---

## 🎯 実行コマンド

### ステップ1: キャッシュクリア・データベース準備

```bash
# キャッシュクリア
npm run cache:clear

# データベース準備（マイグレーション・シーダー実行）
./vendor/bin/sail artisan migrate:fresh --seed
```

**期待結果**:
- ✅ テストユーザー3件作成完了

---

### ステップ2: E2E統合テスト実行

```bash
# E2E統合テスト実行（正常系5+異常系6=11ケース）
npm run test:e2e
```

**11つの必須テストケース**:

**正常系（5ケース）**:
1. ユーザー登録
2. ログイン
3. ログアウト
4. パスワードリセット
5. 画面遷移リンク

**異常系（6ケース）**:
6. フォームバリデーション
7. 誤ったパスワードでのログイン
8. 存在しないメールアドレスでのパスワード再設定
9. 5回連続失敗ログイン（アカウントロック）
10. 無効なトークンでパスワードリセット
11. 認証ガード

**成功基準**:
- ✅ 全11テストが成功
- ✅ スクリーンショット11枚以上保存
- ✅ 操作ログ11ファイル作成

---

### ステップ3: QA証跡確認

```bash
# 詳細操作ログ確認
ls -1 logs/playwright-manual-*.log | wc -l  # 期待: 11

# スクリーンショット確認
ls docs/test-reports/screenshots/{SPEC_NAME}/*.png | wc -l  # 期待: 11+

# E2E自動テスト結果確認
test -f tests/playwright-results.json && echo "✅ 自動テスト結果存在"
```

**成功基準**:
- ✅ 詳細操作ログ11ファイル
- ✅ スクリーンショット11枚以上
- ✅ E2E自動テスト結果存在

---

## 📊 完了確認

**次のステップ**: quality-assurance（ステップ8） ※ステップ7リファクタリングは任意

**完了条件**:
- ✅ npm run test:e2e 全件パス（11ケース）
- ✅ QA証跡3種類確認完了
- ✅ すべてのスクリーンショットでUIが正しく表示

---

## 📚 トラブルシューティング（エラー時のみ）

**エラー時**:
- `dev-kit/scripts/tests/integration.sh` - E2E統合テスト実行スクリプト
- `dev-kit/docs/specs/{SPEC_NAME}/tests/e2e.yaml` - E2Eテストシナリオ定義
- `dev-kit/scripts/README.md` - スクリプト詳細

**よくあるエラー**:
- テストケース省略 → 11ケース全実行必須
- 固定メール登録エラー → ユニークメール生成
- パスワードリセット後エラー → 元に戻す処理追加

---

**最終更新日**: 2025-10-30
**重要な変更**: TDD Green フェーズ、E2E統合テスト11ケース必須
