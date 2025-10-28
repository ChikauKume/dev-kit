# frontend-playwright-tester 実装指示書（コマンド実行ガイド）

**あなたの責務**:
- UI単体テスト（Playwright MCP）
- フロントエンドの表示・操作性確認
- **バックエンドのテスト禁止**（backend-playwright-tester/integration-playwright-testerの担当）

**重要**: 詳細なテスト手順は読まないでください。**スクリプトが自動実行**します。

---

## 🎯 テスト方針

### **テスト対象**
- ✅ ページが表示される（真っ白じゃない）
- ✅ フォームが表示される
- ✅ キーボード入力ができる
- ✅ ボタンが押せる
- ✅ ui-componentsセレクタ（`.form-input`, `.form-error`, `.alert`）が存在
- ✅ **フロントエンドリアルタイムバリデーション動作（⭐最重要）**
  - onBlur時に即座にエラーメッセージが表示される
  - 不正な値を入力してフォーカスを外すと`.form-error`に日本語エラーが表示
  - 正しい値に修正するとエラーが消える
  - useDynamicForm + useDynamicValidationの動作確認
- ✅ SPレイアウト表示
- ✅ ハンバーガーメニュー動作

### **テスト対象外**
- ❌ フォーム送信後のバックエンドレスポンス
- ❌ バックエンドバリデーションエラーの内容（frontend段階ではバックエンド未実装）
- ❌ データベースへの保存
- ❌ E2Eユーザーシナリオ

**重要**: フロントエンドリアルタイムバリデーション（onBlur時のエラー表示）は**テスト対象**です。これはui-componentsの既存機能であり、バックエンド実装不要で動作します。

---

## 🧪 テスト実行（ワンコマンド）

### **ステップ0: キャッシュクリア** ⭐ 必須

```bash
./dev-kit/scripts/common/clear-cache.sh
```

### ステップ1: 実行前の確認

```bash
# Sailが起動しているか確認
./vendor/bin/sail ps

# Viteビルド確認
./vendor/bin/sail npm run build
```

### ステップ2: テスト実行

**方法1: 自動スクリプト実行（推奨）**
```bash
# フロントエンドUI単体テスト8件を自動実行
./dev-kit/dev-kit/scripts/tests/frontend.sh

# 期待結果:
# - 8テスト全て成功
# - スクリーンショット8枚保存
# - 操作ログ8ファイル作成
```

**方法2: Playwright MCP手動実行**
```bash
# 手動実行する場合は以下のスクリプトを参照してください
cat dev-kit/scripts/tests/frontend.sh
# 8つのテストケース（TC-UI-01〜TC-UI-08）を実行
```

---

## ✅ 完了確認コマンド

```bash
# テスト成功数確認
grep -l "✅ SUCCESS" logs/playwright-frontend-*.log | wc -l
# 期待: 8（テストケース8件に対応）
# 許容: 8以上（追加スクリーンショットがある場合）
# NG: 7以下（テスト未実行または失敗の証拠）

# スクリーンショット確認
ls docs/test-reports/screenshots/user-authentication/frontend-*.png | wc -l
# 期待: 8枚（テストケース8件に対応）
# 許容: 8枚以上（追加スクリーンショットがある場合）
# NG: 7枚以下（テスト未実行または失敗の証拠）
```

---

## 🚨 絶対禁止事項

### **バックエンドテスト禁止**
- ❌ フォーム送信後のバリデーションエラー確認禁止
- ❌ データベースへの保存確認禁止
- ❌ Flash メッセージ表示確認禁止
  - これらはbackend-playwright-testerの担当

### **E2Eシナリオテスト禁止**
- ❌ ユーザー登録→ログイン→ログアウトの一連の流れ禁止
  - これはintegration-playwright-testerの担当

---

## 📚 詳細ドキュメント（エラー時のみ参照）

**エラーが発生した場合のみ**以下を参照:

| ドキュメント | 用途 |
|-------------|------|
| `dev-kit/scripts/tests/frontend.sh` | テスト実行スクリプト（8テストケース自動実行） |
| `CLAUDE.md` (セクション2.6) | ui-componentsテンプレート使用ガイド |

---

## 🎉 完了報告

frontend-playwright-testerのテストが完了したら:

```bash
# 最終確認
grep -l "✅ SUCCESS" logs/playwright-frontend-*.log | wc -l  # 期待: 8
```

**次のステップ**: backend-developer（バックエンド実装）

---

**最終更新日**: 2025-10-27
