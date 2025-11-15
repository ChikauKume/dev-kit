---
type: setup
execution: once-per-project
---

# 初期設定

このドキュメントは**プロジェクト作成時に1回だけ実施**する初期設定手順です。

## 📋 目次

1. [プロジェクト初期化](#プロジェクト初期化)
2. [環境準備](#環境準備)

---

## プロジェクト初期化

**新規プロジェクトで最初に1回だけ実行**:

**前提条件**:
- ✅ Laravel 11.x プロジェクトが作成済み
- ✅ **Laravel Breeze (React) がインストール済み**
  ```bash
  composer create-project laravel/laravel my-app
  cd my-app
  composer require laravel/breeze --dev
  php artisan breeze:install react
  npm install
  ```
- ✅ `dev-kit/` ディレクトリがプロジェクトルートに配置済み
- ✅ specファイル作成済み（`dev-kit/docs/specs/{SPEC_NAME}/design.md`, `tasks.yaml`）

**実行コマンド**:
```bash
./dev-kit/scripts/setup/init.sh
```

**実行内容**:
1. Playwrightセットアップ - `playwright.config.ts` 生成
2. Vite設定 - `vite.config.js` 生成（React alias設定）
3. PHPUnit設定 - `phpunit.xml` 生成（SQLite :memory: 設定）
4. .gitignore更新 - Playwright/テスト結果を除外
5. package.json scripts追加 - ワークフローコマンドを自動追加
6. @chikau/ui-components依存追加
7. tsconfig.json生成 - TypeScript設定
8. ui-components統合 - コンポーネント・ページテンプレートをコピー
9. resources/js/app.tsx更新 - ui-components CSSインポート追加
10. 実行権限付与 - 全スクリプトに実行権限付与
11. 自動修正 - コピーされたテンプレートからCSS importを削除
12. 型定義コピー - ui-components型定義を配置
13. DB設定チェック - .envのDB設定を確認

**実行後の手順**:
1. npm パッケージインストール: `npm install`
2. Laravel Sail起動: `./vendor/bin/sail up -d`
3. 環境準備: `npm run workflow:prepare {SPEC_NAME}`

**注意**:
- このスクリプトは**プロジェクト全体の初期セットアップ**です
- 既存ファイルは上書きされる場合があります
- **1度実行すれば、以降は不要**です

---

## 環境準備

以下のコマンドで開発環境の準備を一括実行:

```bash
npm run workflow:prepare {SPEC_NAME}
```

**実行内容**:
1. バックグラウンドプロセスクリーンアップ
2. 前提条件チェック（design.md, tasks.yaml の存在確認）
3. Laravel Sail起動確認・起動
4. 仕様書確認（design.md, tasks.yaml の内容表示）
5. 初期設定（vite.config.js, phpunit.xml, tsconfig.json）
6. 環境検証（validate:env, validate:deps, validate:syntax, validate:playwright）

---

## 次のステップ

初期設定が完了したら、[タスクベース開発ワークフロー](./workflow.md)に従って実装を開始してください。
