# user-authentication機能実装指示書（コマンド実行ガイド）

**重要**: 詳細説明は読まないでください。**コマンドを実行する**ことで自動的に検証されます。

---

## 🎯 実装フロー（完全版: 8ステップ）

### ステップ1: フロントエンド実装
```bash
# サブエージェント起動（frontend-developer）
# 詳細: frontend-developer.md
```

### ステップ2: フロントエンドテスト
```bash
# サブエージェント起動（frontend-playwright-tester）
# 詳細: frontend-playwright-tester.md
```

### ステップ3: バックエンド実装
```bash
# サブエージェント起動（backend-developer）
# 詳細: backend-developer.md
```

### ステップ4: バックエンドテスト実装
```bash
# サブエージェント起動（backend-test-manager）
# 詳細: backend-test-manager.md
```

### ステップ5: バックエンド統合テスト
```bash
# サブエージェント起動（backend-playwright-tester）
# 詳細: backend-playwright-tester.md
```

### ステップ6: E2Eユーザーシナリオテスト
```bash
# サブエージェント起動（integration-playwright-tester）
# 詳細: integration-playwright-tester.md
```

### ステップ7: 総合品質検証
```bash
# サブエージェント起動（quality-assurance）
# 詳細: quality-assurance.md
```

### ステップ8: ユーザー最終確認
```bash
# 全自動テストレポート確認
cat docs/test-reports/final-qa-report.md

# Excel/PDFレポート確認
open docs/test-reports/test-report-*.xlsx
open docs/test-reports/test-report-*.pdf
```

---

## ✅ 完了確認コマンド（各ステップ）

### ステップ1完了確認
```bash
# フロントエンド実装検証（21項目自動チェック）
./dev-kit/scripts/validations/frontend.sh

# 期待結果: "✅ 全てのチェックに合格しました！"
```

### ステップ2完了確認
```bash
# テスト成功数確認
grep -l "✅ SUCCESS" logs/playwright-frontend-*.log | wc -l

# 期待結果: 8以上（UI単体テスト8件）
# 内訳: ページ表示、フォーム入力、リアルタイムバリデーション、ui-componentsセレクタ、SPレイアウト等

# スクリーンショット確認
ls docs/test-reports/screenshots/user-authentication/frontend-*.png | wc -l
# 期待結果: 8枚以上
```

### ステップ3完了確認
```bash
# 型チェック
./vendor/bin/sail exec laravel.test vendor/bin/phpstan analyse

# 期待結果: エラー0件

# 実装ファイル確認
ls -la app/Domain/User/
ls -la app/Application/User/
ls -la app/Infrastructure/User/
ls -la app/Presentation/Http/Controllers/Auth/
```

### ステップ4完了確認
```bash
# 全テスト実行（100%パス必須）
./vendor/bin/sail artisan test

# 期待結果: Tests: X passed (すべて成功)
```

### ステップ5完了確認
```bash
# バックエンド統合テスト成功数確認
grep -l "✅ SUCCESS" logs/playwright-backend-*.log | wc -l

# 期待結果: バックエンドテストケース数以上
# 検証内容: バリデーションエラー表示、Flash メッセージ、日本語文字化け、リダイレクト、DB反映等
```

### ステップ6完了確認
```bash
# E2Eテスト成功数確認
grep -l "✅ SUCCESS" logs/playwright-integration-*.log | wc -l

# 期待結果: E2Eシナリオ数以上
# 検証内容: ユーザー登録→ログイン→ログアウト等の完全なユーザーフロー
```

### ステップ7完了確認
```bash
# 総合品質検証レポート確認
cat docs/test-reports/final-qa-report.md

# 期待結果: 全7つのゲート（フロント、バックエンド、統合、E2E、デザイン、DB、セキュリティ）が合格
```

### ステップ8完了確認
```bash
# 最終成果物確認
ls -la docs/test-reports/

# 期待成果物:
# - final-qa-report.md（総合レポート）
# - test-report-*.json（機械可読レポート）
# - test-report-*.xlsx（Excel レポート）
# - test-report-*.pdf（PDF レポート）
# - screenshots/user-authentication/*.png（全スクリーンショット）
```

---

## 🚨 禁止事項（コマンドで自動検出）

### フロントエンド禁止事項
すべて `./dev-kit/scripts/validations/frontend.sh` で自動検出されます:

- ❌ シンボリックリンク作成（ラッパーコンポーネントを使用）
- ❌ `<input>`, `<button>`等の直接使用
- ❌ Tailwind CSS残存
- ❌ 独自コンポーネント作成
- ❌ Inertia useForm使用（useDynamicFormのみ使用）

### バックエンド禁止事項
すべて `./vendor/bin/sail artisan test` で自動検出されます:

- ❌ テストスキップ（markTestSkipped, @skip）
- ❌ バリデーション例外の握りつぶし（ValidationExceptionを捕捉して無視）
- ❌ 日本語バリデーションメッセージ未設定
- ❌ テスト失敗を放置（100%パス必須）

---

## 📚 詳細ドキュメント（エラー時のみ参照）

| ステップ | サブエージェント | 指示書ファイル |
|---------|--------------|-------------|
| 1 | frontend-developer | [frontend-developer.md](./frontend-developer.md) |
| 2 | frontend-playwright-tester | [frontend-playwright-tester.md](./frontend-playwright-tester.md) |
| 3 | backend-developer | [backend-developer.md](./backend-developer.md) |
| 4 | backend-test-manager | [backend-test-manager.md](./backend-test-manager.md) |
| 5 | backend-playwright-tester | [backend-playwright-tester.md](./backend-playwright-tester.md) |
| 6 | integration-playwright-tester | [integration-playwright-tester.md](./integration-playwright-tester.md) |
| 7 | quality-assurance | [quality-assurance.md](./quality-assurance.md) |

---

## 📊 進捗確認

```bash
# 現在の進捗状況を確認
./vendor/bin/sail artisan test:status --spec=user-authentication

# 期待出力:
# ステップ1: ✅ 完了 or ⏭️ 未実施
# ステップ2: ✅ 完了 or ⏭️ 未実施
# ステップ3: ✅ 完了 or ⏭️ 未実施
# ...
```

---

## 🎉 全工程完了の判定基準

以下のすべてが満たされた場合、**リリース準備完了**と判定:

1. ✅ `./dev-kit/scripts/validations/frontend.sh` - 全チェック合格
2. ✅ `./vendor/bin/sail artisan test` - 100%パス
3. ✅ フロントエンドUI単体テスト - 8件以上成功
4. ✅ バックエンド統合テスト - 全件成功
5. ✅ E2Eユーザーシナリオテスト - 全件成功
6. ✅ quality-assuranceレポート - 全7ゲート合格
7. ✅ ユーザー最終確認 - 問題なし

---

**最終更新日**: 2025-10-27
**実装フロー**: 完全版（8ステップ）
