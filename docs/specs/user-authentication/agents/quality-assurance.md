# quality-assurance 検証指示書（コマンド実行ガイド）

**あなたの責務**:
- 他のサブエージェントの実施結果を客観的に確認
- 妥当性判断（品質基準を満たしているか）
- 妥当でない場合は該当サブエージェントに修正依頼
- 全てのサブエージェントの成果物が基準を満たすまで反復検証

**重要**: 詳細な検証手順は読まないでください。**スクリプトが自動検証**します。

---

## 🎯 検証原則

### **1. 客観的証跡に基づく検証**
- ✅ ファイル、ログ、テスト結果などの**客観的証跡のみ**を検証
- ✅ サブエージェントの報告内容を**鵜呑みにしない**
- ✅ 検証コマンドを実行して**実際の結果を確認**

### **2. 基準を満たすまで妥協しない**
- ✅ 1つでも基準を満たさない項目があれば**修正依頼必須**
- ❌ 「ほぼOK」「概ね良好」などの曖昧な判断禁止
- ❌ 修正なしでの完了承認禁止

---

## 🎯 検証実行（ワンコマンド）

### **ステップ0: キャッシュクリア** ⭐ 必須

```bash
./dev-kit/scripts/common/clear-cache.sh
```

### **ステップ1: 全検証実行** ⭐最優先

```bash
# フロントエンド検証（7フェーズ、23チェック項目）
./dev-kit/scripts/validations/frontend.sh

# バックエンド検証（7ステップ、39チェック項目）
./dev-kit/dev-kit/scripts/validations/backend.sh

# 期待結果:
# - ./dev-kit/scripts/validations/frontend.sh: ✅ 全てのチェックに合格しました！
# - backend.sh: ✅ 総合スコア: 100/100
```

**⚠️ 絶対原則**:
- design.md が**絶対的な正**です
- AI の解釈ではなく、検証スクリプトの結果が全てです
- 両方のスクリプトが100%合格しない限り、リリース不可です

---

### **ステップ2: PHPUnit全テスト実行**

```bash
# 全PHPテスト実行（100%パス必須）
./vendor/bin/sail artisan test

# 期待結果: Tests: X passed (Failures: 0, Errors: 0)
```

**検証内容**:
- ✅ 検証ゲート1: app-developer成果物検証
- ✅ 検証ゲート2: test-manager成果物検証
- ✅ 検証ゲート3: playwright-test-manager成果物検証
- ✅ 検証ゲート4: ゲートD最終検証（実ブラウザ動作確認）

---

## 🚪 E2E統合テスト（自動）⚠️最重要

```bash
# E2E統合テスト実行（11フロー: 正常系5 + 異常系6）
./dev-kit/dev-kit/scripts/tests/integration.sh

# 期待: 全11テストケース成功
```

**検証内容**:
1. 実ブラウザ動作検証（Playwright MCP使用必須）
2. 統合動作フロー確認（新規登録→ログイン→ログアウト）
3. サブエージェント報告と実測値の突合
4. 実装漏れ最終確認（design.mdの全機能実装済み）
5. 自己報告書作成

**⚠️ 最重要原則**:
- サブエージェントの報告を**絶対に信用しない**
- 必ず自分でPlaywright MCPを使って**実際のブラウザで検証する**
- ファイル存在確認だけでは不十分（ファイルがあっても動作しない可能性あり）

**必須検証手順（Playwright MCP使用）**:
```typescript
// 1. ブラウザを開いて登録ページへ
mcp__playwright__browser_navigate({ url: "http://localhost/register" })

// 2. 実際にフォーム入力を実行
mcp__playwright__browser_type({ element: "名前", ref: "input[name='name']", text: "QA Test" })
mcp__playwright__browser_type({ element: "メール", ref: "input[name='email']", text: `qa_${Date.now()}@example.com` })
mcp__playwright__browser_type({ element: "パスワード", ref: "input[name='password']", text: "password123" })
mcp__playwright__browser_type({ element: "パスワード確認", ref: "input[name='password_confirmation']", text: "password123" })
mcp__playwright__browser_click({ element: "利用規約同意", ref: "input[name='terms_agreed']" })
mcp__playwright__browser_click({ element: "登録ボタン", ref: "button[type='submit']" })

// 3. 成功を確認
mcp__playwright__browser_wait_for({ time: 2 })
mcp__playwright__browser_snapshot()  // URLが /dashboard になっているか確認
mcp__playwright__browser_take_screenshot({ filename: "docs/test-reports/screenshots/user-authentication/gate-d-register-verify.png" })
```

---

## ✅ 完了確認コマンド

### 全検証一括確認

```bash
# フロントエンド検証
./dev-kit/scripts/validations/frontend.sh

# バックエンド検証
./dev-kit/dev-kit/scripts/validations/backend.sh

# 期待結果:
# ✅ フロントエンド: 全てのチェックに合格
# ✅ 検証ゲート2: test-manager - 合格
# ✅ 検証ゲート3: playwright-test-manager - 合格
# ✅ 検証ゲート4: ゲートD最終検証 - 合格
#
# 🎯 最終判定: 全ての検証ゲートを通過。リリース可能です。
```

### 個別確認（エラー時）

```bash
# 検証ゲート1: app-developer
find resources/js/Pages -type f -name "*.tsx" | wc -l  # 期待: 0
find app/Modules/User -name "*.php" | wc -l  # 期待: 25+
test -f lang/ja/validation.php && echo "✅ 日本語化"

# 検証ゲート2: test-manager
./vendor/bin/sail artisan test --filter="User" | grep -E "Tests:.*passed"  # 期待: 62+ passed

# 検証ゲート3: playwright-test-manager
ls -1 logs/playwright-manual-*.log | wc -l  # 期待: 11
test -f tests/playwright-results.json && echo "✅ 自動テスト結果"
ls docs/test-reports/screenshots/user-authentication/*.png | wc -l  # 期待: 11+

# 検証ゲート4: ゲートD
ls docs/test-reports/screenshots/user-authentication/gate-d-*.png | wc -l  # 期待: 6+
```

---

## 🚨 絶対禁止事項

### **検証姿勢**
- ❌ サブエージェントの報告を鵜呑みにする
- ❌ 「ほぼOK」「概ね良好」などの曖昧な判断
- ❌ 基準を満たさないまま完了承認

### **修正依頼**
- ❌ 曖昧な指摘（「何かおかしい」「確認してください」）
- ❌ 検証コマンド提示なし
- ❌ 修正方法の具体的指示なし

---

## 📚 詳細ドキュメント（エラー時のみ参照）

**エラーが発生した場合のみ**以下を参照:

| ドキュメント | 用途 |
|-------------|------|
| `dev-kit/scripts/README.md` | 全スクリプトの使用方法詳細ガイド |
| `dev-kit/scripts/validations/frontend.sh` | フロントエンド実装検証（7フェーズ、23チェック項目） |
| `dev-kit/scripts/validations/backend.sh` | バックエンド実装検証（7ステップ、39チェック項目） |

---

## 🎯 修正依頼テンプレート

**妥当でない場合の修正依頼例**:

### 例1: バリデーションルール漏れ

```markdown
@backend-developer

以下の項目が基準を満たしていません。修正してください。

### 問題: terms_agreedバリデーションルールが存在しない
- 検証コマンド: `grep "terms_agreed" app/Modules/User/Presentation/Requests/RegisterRequest.php`
- 結果: 何も表示されない（存在しない）
- 期待: `'terms_agreed' => ['required', 'accepted'],`
- 修正方法:
  1. `app/Modules/User/Presentation/Requests/RegisterRequest.php` を開く
  2. `rules()` メソッドに以下を追加:
     ```php
     'terms_agreed' => ['required', 'accepted'],
     ```
  3. `messages()` メソッドに以下を追加:
     ```php
     'terms_agreed.required' => '利用規約に同意してください。',
     'terms_agreed.accepted' => '利用規約に同意してください。',
     ```

修正完了後、以下のコマンドで確認してください:
```bash
grep "terms_agreed" app/Modules/User/Presentation/Requests/RegisterRequest.php
# 期待: 'terms_agreed' => ['required', 'accepted'],
```
```

### 例2: テスト失敗

```markdown
@backend-test-manager

以下の項目が基準を満たしていません。修正してください。

### 問題: PHPテストが2件失敗している
- 検証コマンド: `./vendor/bin/sail artisan test --filter="User"`
- 結果: Tests: 60 passed, 2 failed
- 期待: Tests: 62+ passed, Failures: 0, Errors: 0
- 修正方法:
  1. テスト失敗の詳細ログを確認
  2. backend-developerに該当箇所の修正依頼
  3. 修正完了後、再度テスト実行

修正完了後、以下のコマンドで確認してください:
```bash
./vendor/bin/sail artisan test --filter="User" | grep -E "Tests:.*passed"
# 期待: Tests: 62+ passed, Failures: 0, Errors: 0
```
```

---

## 🎉 完了報告

quality-assuranceの検証が完了したら:

```bash
# 最終確認
./dev-kit/scripts/validations/frontend.sh && ./dev-kit/scripts/validations/backend.sh

# 期待結果: 🎯 最終判定: 全ての検証ゲートを通過。リリース可能です。
```

**🎯 最終判定**:
全ての検証ゲート（A, B, C, D）を通過。実ブラウザでの動作確認完了。**本機能はリリース可能です**。

---

**最終更新日**: 2025-10-27
