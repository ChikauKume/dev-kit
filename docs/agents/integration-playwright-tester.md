# integration-playwright-tester 実装指示書（コマンド実行ガイド）

**あなたの責務**:
- E2E統合テスト実装・実行（Playwright MCP）
- フロントエンド + バックエンド統合動作確認
- ユーザーシナリオの完全実行
- QA証跡作成（詳細操作ログ、スクリーンショット、Playwright自動テスト実行結果）

**重要**: 詳細なテストシナリオは読まないでください。**スクリプトが自動実行**します。

---

## 🎯 前提条件

- ✅ frontend-playwright-tester完了（UI品質保証済み）
- ✅ backend-test-manager完了（バックエンド品質保証済み）
- ✅ backend-playwright-tester完了（バックエンド→ブラウザ連携保証済み）

**この段階では、UI単体もバックエンド単体も完璧な状態です。ここではE2Eシナリオの統合動作のみに集中してください。**

---

## 🎯 E2Eテスト実行（ワンコマンド）

### **ステップ0: キャッシュクリア** ⭐ 必須

```bash
./dev-kit/scripts/common/clear-cache.sh
```

### **ステップ1: データベース準備**

```bash
# データベースセットアップスクリプト実行
./dev-kit/scripts/setup-test-database.sh

# 期待結果: テストユーザー3件作成完了
```

**作成されるテストユーザー**:
| 名前 | メールアドレス | パスワード | 役割 |
|----|------------|----------|------|
| Test User | `test@example.com` | `password123` | user |
| Admin User | `admin@example.com` | `admin123` | admin |
| Existing User | `existing@example.com` | `password123` | user |

---

### **ステップ2: E2Eテスト実行** ⭐最重要

```bash
# E2E統合テスト11件を自動実行（正常系5+異常系6）
./dev-kit/dev-kit/scripts/tests/integration.sh

# 期待結果:
# - 11ログファイル作成: ls -1 logs/playwright-manual-*.log | wc -l → 11
# - 各ログに "✅ SUCCESS" が記録されている
# - スクリーンショット11枚以上保存: ls docs/test-reports/screenshots/user-authentication/*.png | wc -l → 11+

# 検証コマンド（全11テストの成功確認）:
grep -L "✅ SUCCESS" logs/playwright-manual-*.log
# 期待: 何も表示されない（全てSUCCESS）
# NG例: "logs/playwright-manual-login.log" が表示される → loginテスト失敗
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

❌ **1つでも省略したらリリース不可**

---

### **ステップ3: QA証跡作成** 🔴必須

```bash
# 詳細操作ログ作成確認
ls -1 logs/playwright-manual-*.log | wc -l
# 期待: 11ファイル

# Playwright自動テスト結果確認
test -f tests/playwright-results.json && echo "✅ 自動テスト結果存在"
```

**QA証跡（quality-assuranceが検証）**:
- ✅ 詳細操作ログ11ファイル (logs/playwright-manual-*.log)
- ✅ Playwright自動テスト結果 (tests/playwright-results.json)
- ✅ スクリーンショット11枚以上

---

## 🚪 ゲートC検証（自動）

```bash
# ゲートC検証スクリプト実行（6ステップ自動検証）
./dev-kit/scripts/integration-quality-gate-c.sh

# 期待: 全6ステップ合格
```

**検証内容**:
1. 全11テスト実行完了確認
2. キーボード入力動作確認
3. Flash メッセージ表示確認
4. ナビゲーション・ログアウト動作確認
5. トークン有効期限確認
6. SPレイアウト・ハンバーガーメニュー確認

---

## ✅ 完了確認コマンド

```bash
# データベース準備確認
./vendor/bin/sail artisan tinker --execute="echo App\Modules\User\Infrastructure\UserModel::count();"
# 期待: 3

# テスト実行確認
ls -1 logs/playwright-manual-*.log | wc -l  # 期待: 11
test -f tests/playwright-results.json && echo "✅ 自動テスト結果存在"
ls docs/test-reports/screenshots/user-authentication/*.png | wc -l  # 期待: 11+
```

---

## 🚨 絶対禁止事項

### **テスト実行**
- ❌ **11つのテストケース（正常系5+異常系6）のうち1つでも省略は禁止**（最頻出ミス）
- ❌ `npx playwright test`コマンド使用禁止（Playwright MCPツールのみ）
- ❌ 直接URL遷移禁止 → ユーザー操作フロー必須

### **データ管理**
- ❌ 固定メールアドレスで新規登録禁止（ユニークメール生成必須）
- ❌ パスワードリセット後に元に戻さない（次回テスト失敗の原因）
- ❌ Seeder使用禁止（tinkerで直接作成）

**パスワードリセット後の正しい手順**:
```bash
# テストケース4実行後、必ずパスワードを元に戻す
./vendor/bin/sail artisan tinker --execute="
  \$user = App\Modules\User\Infrastructure\UserModel::where('email', 'test@example.com')->first();
  \$user->password = Hash::make('password123');
  \$user->save();
"
# 期待: パスワードが 'password123' に戻る
```

### **QA証跡**
- ❌ 詳細操作ログ作成省略禁止（11ファイル必須）
- ❌ Playwright自動テスト実行省略禁止（playwright-results.json必須）
- ❌ スクリーンショット保存省略禁止（11枚以上必須）

---

## 📚 詳細ドキュメント（エラー時のみ参照）

**エラーが発生した場合のみ**以下を参照:

| ドキュメント | 用途 |
|-------------|------|
| `dev-kit/scripts/tests/integration.sh` | E2E統合テスト実行スクリプト（11テストケース自動実行） |
| `scripts/integration-quality-gate-c.sh` | ゲートC検証スクリプト（6ステップ自動検証） |
| `dev-kit/docs/specs/user-authentication/tests/playwright-flows.yaml` | E2Eテストシナリオ定義 |

---

## 🎉 完了報告

integration-playwright-testerのテストが完了したら:

```bash
# 最終確認
ls -1 logs/playwright-manual-*.log | wc -l  # 期待: 11
./dev-kit/scripts/integration-quality-gate-c.sh  # 期待: 全6ステップ合格
```

**次のステップ**: quality-assurance（最終検証・リリース判定）

---

**最終更新日**: 2025-10-27
