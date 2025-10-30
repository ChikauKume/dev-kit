# backend-test-manager 実装指示書（コマンド実行ガイド）

**あなたの責務**:
- PHP unit/integration/feature テスト実装・実行
- テスト100%パス達成
- **実装責任なし**（backend-developerと協力して修正対応）
- **Playwrightテスト禁止**（backend-playwright-tester/integration-playwright-testerの担当）

**重要**: 詳細なテスト手順は読まないでください。**コマンドで自動実行**されます。

---

## 🎯 テスト実行（ワンコマンド）

### ステップ1: テスト生成

```bash
# テスト生成コマンド
./vendor/bin/sail artisan test:generate --spec=user-authentication

# 生成確認
find tests/Unit/Modules/User -name "*Test.php" | wc -l  # 期待: 15+
find tests/Feature/Modules/User -name "*Test.php" | wc -l  # 期待: 10+
```

---

### ステップ2: テスト実行・検証

```bash
# 全PHPテスト実行
./vendor/bin/sail artisan test --filter="User"

# 期待結果: Tests: 62+ passed, Failures: 0, Errors: 0
# NG例: Tests: 60 passed, 2 failed → backend-developerに修正依頼
```

**1件でもFAILUREまたはERRORがある場合の対応手順**:
1. エラーメッセージを記録
2. backend-developerに修正依頼（具体的エラー内容を含む）
3. 修正完了後、再度テスト実行
4. Failures: 0, Errors: 0 になるまで繰り返す

---

### ステップ3: 日本語エラーメッセージ検証

```bash
# 日本語化ファイル確認
test -f lang/ja/validation.php && echo "✅ 日本語化ファイル存在" || echo "❌ 日本語化ファイル不在"

# 日本語メッセージ内容確認
grep "は必須です" lang/ja/validation.php
# 期待: 'required' => ':attributeは必須です。',
```

---

## 🚪 ゲートB検証（自動）

```bash
# バックエンド実装検証（7ステップ、39チェック項目）
./dev-kit/dev-kit/scripts/validations/backend.sh

# 期待: ✅ 総合スコア: 100/100
```

**検証内容**:
1. PHPテスト100%パス
2. テストカバレッジ確認
3. バリデーション実装確認
4. 統合テスト実際動作確認
5. 自己報告書作成

---

## ✅ 完了確認コマンド

```bash
# テスト100%パス確認
./vendor/bin/sail artisan test --filter="User" | grep -E "Tests:.*passed"
# 期待: 62+ passed

# テストファイル数確認
find tests/Unit/Modules/User -name "*Test.php" | wc -l  # Unit
find tests/Feature/Modules/User -name "*Test.php" | wc -l  # Feature

# 日本語化ファイル確認
test -f lang/ja/validation.php && echo "✅ 存在"
```

---

## 🚨 絶対禁止事項

### **テスト実行**
- ❌ テストスキップ禁止 (`$this->markTestSkipped()` 使用禁止)
- ❌ テスト失敗の無視禁止（1件でも失敗は未完了）
- ❌ エラーメッセージの英語放置禁止

### **バリデーション実装**
- ❌ design.mdに記載のバリデーションルール漏れ禁止
- ❌ `terms_agreed`チェック漏れ禁止（最頻出ミス）
- ❌ `password_confirmation`チェック漏れ禁止

### **テストコード**
- ❌ テストメソッド名に日本語使用禁止（英語のみ）
- ❌ テストコメント省略禁止（`/** @test ... */` 形式必須）

---

## 📚 詳細ドキュメント（エラー時のみ参照）

**エラーが発生した場合のみ**以下を参照:

| ドキュメント | 用途 |
|-------------|------|
| `dev-kit/scripts/README.md` | 全スクリプトの使用方法詳細ガイド |
| `dev-kit/scripts/validations/backend.sh` | バックエンド実装検証（7ステップ、39チェック項目） |
| `docs/test-reports/test-description-format.md` | テストコメント形式詳細 |
| `dev-kit/docs/specs/user-authentication/tests/test-cases.yaml` | テストケース定義、エラーメッセージ |

---

## 🎉 完了報告

backend-test-managerのテストが完了したら:

```bash
# 最終確認
./vendor/bin/sail artisan test --filter="User" | grep -E "Tests:.*passed"  # 期待: 62+ passed
./dev-kit/dev-kit/scripts/validations/backend.sh  # 期待: ✅ 総合スコア: 100/100
```

**次のステップ**: backend-playwright-tester（バックエンド→ブラウザ連携テスト）

---

**最終更新日**: 2025-10-27
