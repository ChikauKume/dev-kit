---
workflow: pattern-a-fullstack-tdd
total_steps: 5
execution_mode: command_driven
ai_automation: enabled
pattern: feature-by-feature-fullstack
---

# TDDワークフロー実装指示書

## 📋 目次

1. [前提条件とワークフロー準備](#前提条件とワークフロー準備)
   - [🚀 初回セットアップ（init.sh）](#-初回セットアップinitsh)
   - [ワンコマンド準備](#ワンコマンド準備)
2. [メイン実装フェーズ](#メイン実装フェーズ)
   - [ステップ1: スケルトン生成](#ステップ1-スケルトン生成)
   - [ステップ2: 機能ごとのフルスタックTDDサイクル（メイン）](#ステップ2-機能ごとのフルスタックtddサイクルメイン)
3. [最終検証フェーズ](#最終検証フェーズ)
   - [ステップ3: 全機能統合検証](#ステップ3-全機能統合検証)
   - [ステップ4: 品質確認・リリース判定](#ステップ4-品質確認リリース判定)
   - [ステップ5: 完了報告](#ステップ5-完了報告)

---

## 前提条件とワークフロー準備

### 🚀 初回セットアップ（init.sh）

**新規プロジェクトで最初に1回だけ実行**:

**前提条件**:
- ✅ Laravel 11.x プロジェクトが作成済み
- ✅ **Laravel Breeze (React) がインストール済み**
  ```bash
  # 新規Laravelプロジェクト作成
  composer create-project laravel/laravel my-app
  cd my-app

  # Laravel Breeze (React) インストール
  composer require laravel/breeze --dev
  php artisan breeze:install react
  npm install
  ```
- ✅ `dev-kit/` ディレクトリがプロジェクトルートに配置済み
- ✅ specファイル作成済み（`dev-kit/docs/specs/{SPEC_NAME}/design.md`, `tests/phpunit.yaml`, `tests/e2e.yaml`）

**実行コマンド**:

```bash
./dev-kit/scripts/setup/init.sh
```

**実行内容**:
1. **Playwrightセットアップ** - `playwright.config.ts` 生成
2. **Vite設定** - `vite.config.js` 生成（React alias設定）
3. **PHPUnit設定** - `phpunit.xml` 生成（SQLite :memory: 設定）
4. **.gitignore更新** - Playwright/テスト結果を除外
5. **package.json scripts追加** - ワークフローコマンドを自動追加
   - ✅ `generate:phpunit` - PHPUnitテストコード生成
   - ✅ `generate:e2e` - E2Eテスト生成
   - ✅ `workflow:prepare`, `workflow:step1-5` - ワークフローコマンド
   - ✅ `tdd:status`, `tdd:red`, `tdd:green` - TDDサイクルコマンド
   - ✅ `bg:list`, `bg:clean` - バックグラウンドプロセス管理
6. **@chikau/ui-components依存追加** - package.jsonに自動追加
7. **tsconfig.json生成** - TypeScript設定
8. **ui-components統合** - コンポーネント・ページテンプレートをコピー
9. **resources/js/app.tsx更新** - ui-components CSSインポート追加
10. **実行権限付与** - 全スクリプトに実行権限付与
11. **自動修正** - コピーされたテンプレートからCSS importを削除
12. **型定義コピー** - ui-components型定義を配置
13. **DB設定チェック** - .envのDB設定を確認
14. **ワークフローコマンド検証** - 11個のコマンドが正しく追加されたか確認

**検証項目**:
- ✅ `workflow:prepare`, `workflow:step1-5` の存在確認
- ✅ `generate:phpunit`, `generate:e2e` の存在確認
- ✅ `tdd:status`, `tdd:red`, `tdd:green` の存在確認
- ✅ 欠落コマンドがある場合は具体的に表示

**実行後の確認**:
```bash
npm run  # 全スクリプトを表示
npm run generate:phpunit  # コマンドが存在することを確認
npm run generate:e2e      # コマンドが存在することを確認
```

**実行後の手順** (初回のみ):

1. **npm パッケージインストール**:
   ```bash
   npm install
   ```

2. **Laravel Sail起動**:
   ```bash
   ./vendor/bin/sail up -d
   ./vendor/bin/sail ps  # コンテナ起動確認
   ```

3. **ワークフローコマンド確認**:
   ```bash
   npm run  # 全コマンド表示
   npm run generate:phpunit  # コマンド存在確認
   npm run generate:e2e      # コマンド存在確認
   ```

4. **ワークフロー開始**:
   ```bash
   npm run workflow:prepare {SPEC_NAME}
   ```

**注意**:
- このスクリプトは**プロジェクト全体の初期セットアップ**です
- 既存ファイルは上書きされる場合があります（vite.config.js, phpunit.xml等）
- **1度実行すれば、以降は不要**です

---

### ワンコマンド準備

以下のコマンドでワークフロー開始前の準備を一括実行:

```bash
npm run workflow:prepare {SPEC_NAME}
```

**実行内容**:
0. バックグラウンドプロセスクリーンアップ
1. 前提条件チェック（`npm run workflow:check-prerequisites` を実行）
   - design.md, phpunit.yaml, e2e.yaml の存在確認
2. Laravel Sail起動確認・起動（`npm run workflow:start-sail` を実行）
3. 仕様書確認（design.md, phpunit.yaml, e2e.yaml の内容表示）
4. 初期設定（vite.config.js, phpunit.xml, tsconfig.json 設定）
5. 環境検証（validate:env, validate:deps, validate:syntax, validate:blank-page, validate:playwright）
5.5. HTML出力ポート準備（test-reports/, playwright-report/ ディレクトリ作成、ポート確認）
6. ワークフロー状態初期化（`npm run workflow:init {SPEC_NAME}` を実行）

**個別コマンド**:
- `npm run workflow:check-prerequisites {SPEC_NAME}` - 前提条件チェック
- `npm run workflow:start-sail` - Laravel Sail起動
- `npm run workflow:init {SPEC_NAME}` - ワークフロー状態初期化
- `npm run workflow:status {SPEC_NAME}` - ワークフロー状態確認

---

## メイン実装フェーズ

**このフェーズが開発の中心です。**

各機能をフロントエンド+バックエンドのフルスタックで完全完成させます。全ての品質検証・テスト・証拠収集もこのフェーズで完了します。

- ステップ2完了時点で、全機能が動画証拠付きで品質保証済み
- 以降のステップ（3-5）は最終確認のみ

---

### ステップ1: スケルトン生成

**実行コマンド**:

```bash
npm run workflow:step1 {SPEC_NAME}
```

スクリプト: `./dev-kit/scripts/workflow/step1.sh`

**AIエージェント**: backend-test-manager

スクリプトが自動的に以下を実行します:
- 状態更新（ステップ1開始）
- スケルトン生成
  - `npm run generate:phpunit` - PHPUnitテスト生成
  - `npm run generate:e2e` - E2Eテスト生成
- 結果判定と次ステップへの進行
- 失敗時の診断とリトライ上限チェック

**生成されるファイル**:
- `app/Modules/{Module}/Domain/` - Entity, ValueObject, RepositoryInterface, DomainException
- `app/Modules/{Module}/Application/` - UseCase, DTO, ApplicationException
- `app/Modules/{Module}/Infrastructure/` - Repository実装, Eloquent Model
- `app/Modules/{Module}/Presentation/` - Controller, FormRequest, Routes
- `tests/Unit/` - Unitテスト
- `tests/Feature/` - Featureテスト
- `tests/e2e/{SPEC_NAME}/` - E2Eテスト

---

### ステップ2: 機能ごとのフルスタックTDDサイクル（メイン）

**このステップで全機能の実装と品質保証が完了します。**

**実行コマンド**:

```bash
npm run workflow:step2 {SPEC_NAME}
```

スクリプト: `./dev-kit/scripts/workflow/step2.sh`

**AIエージェント**: frontend-test-manager, frontend-developer, backend-test-manager, backend-developer

スクリプトが自動的に以下を実行します:
- 状態更新（ステップ2開始）
- PHPUnitテスト実行（全て失敗することを期待）
- TDDサイクル初期化（design.mdから画面一覧を抽出）
- 最初の機能のRed確認（E2E + 単体 + 統合テスト実行、失敗を期待）
- HTMLレポート生成（バックグラウンド）

**機能ごとのフルスタックTDDサイクル**:

ステップ2完了後、以下のサイクルを各機能ごとに繰り返します:

**0. 進捗確認** - 現在の状況を確認（各サイクル開始時に実行推奨）
   ```bash
   npm run tdd:status {SPEC_NAME}
   ```

   スクリプト: `./dev-kit/scripts/workflow/tdd-status.sh`

   実行内容:
   - 完了済み機能、実装中機能、未実装機能を表示
   - 全体の進捗率を確認

**1. Red確認** - テスト実行（失敗を確認）
   ```bash
   npm run tdd:red {SPEC_NAME}
   ```

   スクリプト: `./dev-kit/scripts/workflow/tdd-red.sh`

   **AIエージェント**: frontend-test-manager, backend-test-manager

   実行内容:
   - フロントエンドE2Eテスト（失敗期待）
   - バックエンド単体テスト（Unit Test、失敗期待）
     - FormRequest バリデーションテスト
     - UseCase ビジネスロジックテスト
     - Entity/ValueObject テスト
   - バックエンド統合テスト（Feature Test、失敗期待）
     - エンドポイント統合テスト
     - ミドルウェアテスト
     - データベース連携テスト
   - TDDコンテキストファイル生成（`dev-kit/state/tdd-context-{SPEC_NAME}.txt`）

   **TDDコンテキストファイルの役割**:

   `tdd:red` 実行後に生成される `dev-kit/state/tdd-context-{SPEC_NAME}.txt` には以下の情報が含まれます:

   - **実装対象機能**: 現在実装すべき機能を明示（例: Login画面のみ、Dashboard画面のみ）
   - **フロントエンド実装ファイル**: 実装が必要なReact/TypeScriptファイルのパス
   - **バックエンド実装ファイル**: 実装が必要なPHP/Laravelファイルのパス（Domain/Application/Presentation層）
   - **テスト定義参照**: phpunit.yaml および e2e.yaml のパス

   **コンテキストファイルの例**:
   ```
   TDD Context for user-authentication
   ====================================

   Current Implementation Target: Login Feature

   Frontend Files to Implement:
   - resources/js/Pages/Auth/LoginPage.tsx

   Backend Files to Implement:
   - app/Domain/User/Entity/User.php
   - app/Application/User/UseCase/LoginUseCase.php
   - app/Presentation/Http/Controllers/Auth/LoginController.php

   Test References:
   - PHPUnit: dev-kit/docs/specs/user-authentication/tests/phpunit.yaml
   - E2E: dev-kit/docs/specs/user-authentication/tests/e2e.yaml
   ```

   このファイルを確認することで、次の「**2. 実装**」フェーズで何を実装すべきかが明確になります。

**2. 実装** - 機能を実装

   **実装対象の確認**:
   ```bash
   # TDDコンテキストファイルで実装対象を確認
   cat dev-kit/state/tdd-context-{SPEC_NAME}.txt

   # 出力例:
   # ========================================
   # 実装対象機能: Login (ログイン画面)
   # ========================================
   # フロントエンド: resources/js/Pages/Auth/LoginPage.tsx
   # バックエンド: LoginController, LoginUseCase
   # 参照テスト: tests/e2e/user-authentication/E2E-002.spec.ts
   #            tests/Feature/.../LoginControllerTest.php
   # ========================================
   ```

   **実装手順** (重要):

   **この段階ではAIエージェントを手動起動してください。**

   a) **バックエンド実装** (backend-developerエージェント使用):
      ```
      1. Claude CodeのTask toolで `backend-developer` エージェントを起動
      2. TDDコンテキストファイルを参照して実装対象を確認
      3. phpunit.yamlのテスト定義に従って実装
      4. 以下のファイルを実装:
         - Controller: app/Modules/*/Presentation/*Controller.php
         - UseCase: app/Modules/*/Application/*UseCase.php
         - Repository: app/Modules/*/Infrastructure/*Repository.php
         - Model: app/Modules/*/Infrastructure/*.php
         - FormRequest: app/Modules/*/Presentation/Requests/*Request.php
         - Routes: routes/*.php
      ```

   b) **フロントエンド実装** (frontend-developerエージェント使用):
      ```
      1. Claude CodeのTask toolで `frontend-developer` エージェントを起動
      2. TDDコンテキストファイルを参照して実装対象を確認
      3. e2e.yamlのシナリオに従って実装
      4. 実装場所: resources/js/Pages/{Module}/{PageName}.tsx
      5. ui-componentsテンプレートのみ使用（カスタムコンポーネント禁止）
      ```

   **実装完了後**:
   ```bash
   npm run tdd:green {SPEC_NAME}  # Green確認へ進む
   ```

   **注意**:
   - ✅ 実装対象は1機能のみ（TDDコンテキストファイル参照）
   - ❌ 複数機能の同時実装は禁止（TDD違反検出でエラー）
   - ❌ 未実装機能の作成は禁止（TDD違反検出でエラー）
   - 実装ファイル:
     - Controller: `app/Modules/*/Presentation/*Controller.php`
     - UseCase: `app/Modules/*/Application/*UseCase.php`
     - Repository: `app/Modules/*/Infrastructure/*Repository.php`
     - Model: `app/Modules/*/Infrastructure/*Model.php`
     - FormRequest: `app/Modules/*/Presentation/Requests/*Request.php`
     - Routes: `routes/*.php`

**3. Green確認** - 全テスト実行（成功を確認）
   ```bash
   npm run tdd:green {SPEC_NAME}
   ```

   スクリプト: `./dev-kit/scripts/workflow/tdd-green.sh`

   **AIエージェント**: frontend-test-manager, backend-test-manager

   実行内容:
   - TDD違反自動検出（git diffベース）:
     - 実装済み機能の変更（フロント+バック） → エラー
     - 未実装機能の作成 → エラー
     - 複数機能の一括実装 → エラー
   - ビルド実行（`npm run build`）
   - フロントエンド品質検証（`npm run validate:frontend`）:
     - ui-componentsテンプレート使用確認
     - カスタムコンポーネント禁止確認
     - Tailwind CSS禁止確認
     - 直接HTML要素禁止確認
   - フロントエンドE2Eテスト（成功確認）
   - **証拠収集**（動画のみ）:
     - E2Eテスト実行動画の記録
     - HTML出力レポート生成
     - 証拠保存先: `test-reports/{SPEC_NAME}/feature-{PageName}/`
   - バックエンド単体テスト（成功確認）
   - バックエンド統合テスト（成功確認）
   - バックエンド品質検証（`npm run validate:backend {SPEC_NAME}`）:
     - Clean Architecture 4層構造確認
     - バリデーション実装確認
     - design.md準拠検証
   - 全て成功時に進捗状況を自動表示

**4. 次の機能へ** - 自動的に次の機能のRed確認へ進む（ステップ0に戻る）

**全機能完了後**:
```bash
npm run workflow:step3-test {SPEC_NAME}
```
で最終統合検証へ進む

---

## 最終検証フェーズ

**このフェーズは最終確認のみです。**

ステップ2で各機能は完全完成済み（動画証拠付き品質保証済み）です。このフェーズでは証拠レビューと軽い統合確認を行います。

- ステップ3: 既存証拠のレビュー + 機能間統合確認
- ステップ4: 最終品質ゲート確認
- ステップ5: 完了レポート生成

---

### ステップ3: 全機能統合検証

**役割**: 証拠レビュー + 軽量統合確認（補助的）

**実行コマンド**:

```bash
npm run workflow:step3-test {SPEC_NAME}
```

スクリプト: `./dev-kit/scripts/workflow/step3-test.sh`

**AIエージェント**: integration-playwright-tester

スクリプトが自動的に以下を実行します:
- **TDDサイクル完了チェック**（`completed_pages == total_pages`）
  - 未完了 → エラー終了、`tdd:red` から再開を指示
  - 完了 → 次の処理へ進行
- 状態更新（ステップ3開始）
- **既存証拠のレビュー**:
  - 各機能のHTML出力レポート確認
  - 各機能の動画証拠確認（`test-reports/{SPEC_NAME}/feature-*/`）
  - 機能間の整合性確認
- **軽量統合確認**（必要に応じて部分的に再実行）:
  - 機能間連携の動作確認
  - 画面遷移の統合確認
- 全PHPUnitテスト実行（最終確認）
- コンテキスト記録（実装内容）
- 統合レポート生成（機能ごとの証拠をまとめる）
- 結果判定と次ステップへの進行
- 失敗時の診断とリトライ上限チェック

**注記**:
- 機能ごとのフルスタックTDDサイクル（ステップ2）で各機能は完成済み
- 各機能のHTML出力・動画証拠は既に収集済み
- このステップでは証拠レビュー + 機能間統合確認のみを実行

---

### ステップ4: 品質確認・リリース判定

**役割**: 最終品質ゲート確認（補助的）

**実行コマンド**:

```bash
npm run workflow:step4 {SPEC_NAME}
```

スクリプト: `./dev-kit/scripts/workflow/step4.sh`

**AIエージェント**: quality-assurance（必須）

スクリプトが自動的に以下を実行します:
- 状態更新（ステップ4開始）
- 品質検証実行（`npm run validate:principles`）
- DO/DON'T原則チェック
- 7つの品質ゲート検証
- 結果判定と次ステップへの進行
- 失敗時は該当ステップに戻る
- 診断とリトライ上限チェック

**検証項目**:

**DO原則（6項目）**:
1. ✅ ui-componentsテンプレート使用
2. ✅ Clean Architecture準拠
3. ✅ design.md仕様準拠
4. ✅ 日本語バリデーションメッセージ（句点付き）
5. ✅ 品質ゲート合格
6. ✅ 機能ごとのフルスタックTDDサイクル実施

**DON'T原則（7項目）**:
1. ❌ カスタムコンポーネント禁止
2. ❌ Tailwind CSS禁止
3. ❌ 直接HTML記述禁止
4. ❌ バリデーション握りつぶし禁止
5. ❌ 不完全実装禁止
6. ❌ テストスキップ禁止
7. ❌ 品質ゲート無視禁止

**7つの品質ゲート**:
1. フロントエンド品質（ui-components使用、カスタム禁止）
2. バックエンド品質（Clean Architecture、バリデーション正常）
3. テスト品質（100% PASS、カバレッジ80%以上）
4. デザイン品質（design.md準拠）
5. パフォーマンス（ビルドサイズ、レスポンスタイム）
6. セキュリティ（バリデーション、CSRF、認証）
7. ドキュメント（コメント、README更新）

---

### ステップ5: 完了報告

**役割**: 最終レポート生成（補助的）

**実行コマンド**:

```bash
npm run workflow:step5 {SPEC_NAME}
```

スクリプト: `./dev-kit/scripts/workflow/step5.sh`

**AIエージェント**: なし（自動生成）

スクリプトが自動的に以下を実行します:
- 状態更新（ステップ5開始、completed）
- 完了報告の生成と表示
- 実装内容サマリー（`npm run workflow:context {SPEC_NAME}`）
- テスト結果サマリー
- 品質ゲート結果
- リリース判定
- 所要時間とリトライ回数

