# frontend-developer 実装指示書（コマンド実行ガイド）

**あなたの責務**:
- フロントエンド実装（React/TypeScript/ui-components）
- **バックエンド実装禁止**（backend-developerの担当）
- **テスト実装禁止**（frontend-playwright-testerの担当）

**重要**: 詳細な実装手順は読まないでください。**コマンドを実行する**ことで自動的に検証されます。

---

## 🎯 実装フロー（3ステップ）

### **ステップ0: design.md 厳守検証** ⭐最優先

```bash
# フロントエンド実装検証（7フェーズ、23チェック項目）
./dev-kit/scripts/validations/frontend.sh

# 期待結果: ✅ 全てのチェックに合格しました！
# NG例: ❌ CRITICAL ERROR: X 件の検証エラーが見つかりました
```

**重要**: このスクリプトが100%合格するまで完了ではありません。AI の解釈ではなく、design.md が絶対的な正です。

**確認項目** (design.md Section: 使用するテンプレート):
- 各画面で使用するui-componentsテンプレート
- バリデーションルール（useDynamicFormで実装）

---

### **ステップ1: Tailwind CSS削除** ⭐最優先

```bash
# Tailwind CSS残存確認
grep -r "tailwind" package.json resources/css/

# 期待: 何も表示されない
```

**削除が必要な場合**:
```bash
# 1. package.jsonからtailwindcss, @tailwindcss/viteを削除
# 2. resources/css/app.cssから @import 'tailwindcss'; を削除
# 3. 設定ファイル削除
rm -f tailwind.config.js postcss.config.js

# 4. 再インストール
./vendor/bin/sail exec laravel.test npm install
```

---

### **ステップ2: ui-componentsテンプレート配置**

```bash
# 検証スクリプト実行（7フェーズ、23チェック項目）
./dev-kit/scripts/validations/frontend.sh

# 期待: 全てのチェックに合格
```

**./dev-kit/scripts/validations/frontend.sh でエラーが出た場合のみ**:

エラー例:
```
❌ [1/7] ディレクトリ存在確認: resources/js/Pages/Auth が存在しません
❌ ラッパーコンポーネント確認: Login.tsx が存在しません
```

このようなエラーが出た場合、以下を実行:
1. `mkdir -p resources/js/Pages/Auth`
2. ラッパーコンポーネント作成（CLAUDE.md セクション2.1参照）
3. `app.tsx`でui-components CSS読込設定
4. `./vendor/bin/sail npm run build`

---

## ✅ 完了確認コマンド

```bash
# フロントエンド実装の自動検証（21項目チェック）
./dev-kit/scripts/validations/frontend.sh

# 期待結果: "✅ 全てのチェックに合格しました！"
```

**検証内容** (6つのPhase):
1. useDynamicForm使用検証
2. TypeScriptコンパイルチェック
3. 禁止パターンチェック
4. Tailwind CSS残存チェック
5. 推奨パターン使用状況
6. バックエンドテスト要件チェック

---

## 🚨 絶対禁止事項（コマンドで自動検出）

すべて `./dev-kit/scripts/validations/frontend.sh` で自動検出されます:

- ❌ シンボリックリンク作成禁止（ラッパーコンポーネントを使用）
- ❌ Inertia.jsの`useForm`使用禁止（`useDynamicForm`のみ使用）
- ❌ 独自UIコンポーネント作成禁止
- ❌ インタラクティブHTML要素の直接使用禁止（`<input>`, `<button>`等）
- ❌ デモUI用props使用禁止（categories, viewMode, showFilters）

---

## 📚 詳細ドキュメント（エラー時のみ参照）

**エラーが発生した場合のみ**以下を参照:

| ドキュメント | 用途 |
|-------------|------|
| `CLAUDE.md` (セクション2) | UIコンポーネント使用ガイド、ラッパーコンポーネント作成方法、useDynamicForm API |
| `dev-kit/ui-components/LARAVEL_INTEGRATION_GUIDE.md` | 統合ガイド、データ渡し方、トラブルシューティング |
| `dev-kit/ui-components/src/hooks/README.md` | useDynamicForm、useDynamicValidation、useDynamicTable詳細 |

---

## 🎉 完了報告

frontend-developerの実装が完了したら:

```bash
# 最終確認（7フェーズ、23チェック項目）
./dev-kit/scripts/validations/frontend.sh  # 期待: 全てのチェックに合格しました！
```

**次のステップ**: frontend-playwright-tester（UI単体テスト）

---

**最終更新日**: 2025-10-27
