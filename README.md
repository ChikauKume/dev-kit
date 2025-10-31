# Spec-Workflow TDD Dev-Kit

**Spec-First Test-Driven Development Kit for Laravel + React + Inertia + Playwright**

このdev-kitは、新規Laravelプロジェクトに導入するだけで、Claude Codeと連携したSpec-First TDD開発を開始できる完全なツールセットです。

---

## 🚀 クイックスタート（3ステップ）

### 1. dev-kitをプロジェクトにコピー

```bash
cp -r /path/to/source/dev-kit /path/to/your-laravel-project/
```

### 2. セットアップスクリプトを実行

```bash
cd /path/to/your-laravel-project
./dev-kit/scripts/setup/init.sh
```

**自動実行される内容:**
- ✅ `playwright.config.ts` 生成
- ✅ `vite.config.js` 生成
- ✅ `phpunit.xml` 生成
- ✅ `.gitignore` 生成/更新
- ✅ `package.json` にnpmスクリプト追加
- ✅ Playwright インストール
- ✅ 実行権限付与

### 3. Claude Codeでmain.mdを開いて開発開始

```bash
# Claude Codeでプロジェクトを開く
code .

# main.mdをClaude Codeに読み込ませる
# 「dev-kit/docs/agents/main.mdを読んで、Spec-First TDD開発を開始してください」
```

---

## 📁 ディレクトリ構造

```
dev-kit/
├── scripts/
│   ├── setup/
│   │   └── init.sh                # 初期セットアップスクリプト
│   ├── templates/
│   │   ├── playwright.config.ts.template
│   │   ├── vite.config.js.template
│   │   ├── phpunit.xml.template
│   │   ├── gitignore.template
│   │   └── package.json.scripts.json
│   ├── common/
│   │   ├── cleanup-vite.sh        # Viteクリーンアップ
│   │   ├── diagnose-blank-page.sh # 白画面診断
│   │   └── clear-cache.sh         # Laravelキャッシュクリア
│   ├── generate/
│   │   ├── phpunit.php            # PHPUnitテスト自動生成
│   │   └── e2e.cjs                # E2Eテスト自動生成
│   └── validate/
│       ├── env.sh                 # 環境検証
│       ├── deps.sh                # 依存関係検証
│       ├── syntax.sh              # 構文エラー検証
│       ├── blank-page.sh          # 白画面防止検証
│       ├── playwright.sh          # Playwright設定検証
│       ├── design.php             # design.md整合性検証
│       ├── frontend.sh            # フロントエンド厳密検証
│       └── backend.sh             # バックエンド厳密検証
├── docs/
│   ├── agents/
│   │   ├── main.md                # メイン開発フロー（8ステップTDD）
│   │   ├── frontend-developer.md
│   │   ├── backend-developer.md
│   │   ├── backend-e2e-tester.md
│   │   ├── integration-e2e-tester.md
│   │   └── quality-assurance.md
│   ├── architecture/
│   │   └── clean-architecture.md
│   └── specs/
│       └── {SPEC_NAME}/
│           ├── requirements.md
│           ├── design.md          # Single Source of Truth
│           └── tests/
│               ├── phpunit.yaml  # PHPUnit（Unit/Feature）
│               └── e2e.yaml      # E2E
└── README.md                      # このファイル
```

---

## 🎯 Spec-First TDD 開発フロー

### フェーズ1: 検証・テスト準備

#### ステップ0: 包括的事前検証（Left Shift Testing）

```bash
npm run validate:env              # 環境ファイル・Docker起動確認
npm run validate:deps             # 依存関係チェック
npm run validate:syntax           # 既存コードの構文エラー
npm run validate:blank-page       # 白画面防止
npm run validate:playwright       # Playwright標準設定チェック
```

#### ステップ1: テストコード自動生成

```bash
npm run generate:tests {SPEC_NAME}
npm run generate:e2e {SPEC_NAME}
```

#### ステップ2: Red状態の確認

```bash
./vendor/bin/sail artisan test
npm run test:e2e tests/e2e/{SPEC_NAME}/
```

### フェーズ2: 実装（Red → Green）

#### ステップ3: フロントエンド実装

Claude Codeで `frontend-developer` エージェントを起動して実装

```bash
npm run test:e2e tests/e2e/{SPEC_NAME}/
npm run validate:frontend {SPEC_NAME}
```

#### ステップ4: バックエンド実装

Claude Codeで `backend-developer` エージェントを起動して実装

```bash
./vendor/bin/sail artisan test
npm run validate {SPEC_NAME}
npm run validate:backend {SPEC_NAME}
```

### フェーズ3: 統合テスト・検証

#### ステップ5-6: 統合テスト

- `backend-e2e-tester` エージェント（バックエンド→フロントエンド統合）
- `integration-e2e-tester` エージェント（E2Eユーザーフロー）

### フェーズ4: 品質保証・リファクタリング

#### ステップ7: リファクタリング

テストが通っている状態でコード改善

#### ステップ8: 最終品質検証

`quality-assurance` エージェントで7つの品質ゲートを確認

---

## 📚 ドキュメント

| ドキュメント | 説明 |
|------------|------|
| [main.md](./docs/agents/main.md) | 8ステップTDDワークフローの詳細 |
| [frontend-developer.md](./docs/agents/frontend-developer.md) | フロントエンド実装ガイド |
| [backend-developer.md](./docs/agents/backend-developer.md) | バックエンド実装ガイド（Clean Architecture） |
| [quality-assurance.md](./docs/agents/quality-assurance.md) | 品質保証チェックリスト |
| [clean-architecture.md](./docs/architecture/clean-architecture.md) | Clean Architecture 実装規約 |

---

## 🛠️ 利用可能なnpmスクリプト

### 開発

```bash
npm run dev                       # Vite開発サーバー起動
npm run build                     # プロダクションビルド
npm run dev:cleanup               # Vite artifactsクリーンアップ
```

### 検証（Validation）

```bash
npm run validate {SPEC_NAME}      # design.md整合性チェック
npm run validate:env              # 環境ファイル・Docker起動確認
npm run validate:deps             # 依存関係チェック
npm run validate:syntax           # 構文エラーチェック
npm run validate:blank-page       # 白画面防止チェック
npm run validate:playwright       # Playwright設定チェック
npm run validate:frontend {SPEC}  # フロントエンド厳密チェック
npm run validate:backend {SPEC}   # バックエンド厳密チェック
```

### テスト生成

```bash
npm run generate:tests {SPEC}     # PHPUnitテスト生成
npm run generate:e2e {SPEC}       # E2Eテスト生成
```

### テスト実行

```bash
npm run test:e2e                  # E2Eテスト実行
npm run test:e2e:ui               # E2E UIモード
npm run test:e2e:headed           # ブラウザ表示モード
npm run test:e2e:debug            # デバッグモード
```

### トラブルシューティング

```bash
npm run fix:blank-page            # 白画面診断
```

---

## 🔧 技術スタック

- **Backend**: Laravel 11 (Clean Architecture)
- **Frontend**: React 19 + Inertia.js + TypeScript
- **Build Tool**: Vite 7
- **Testing**: PHPUnit (Unit/Feature) + Playwright (E2E)
- **E2E**: Playwright with video recording (slowMo: 750ms)
- **UI Components**: 標準化されたui-componentsテンプレート

---

## 📖 開発の進め方

### 1. 仕様書作成（Spec-First）

```
dev-kit/docs/specs/{SPEC_NAME}/
├── requirements.md              # 要件定義
├── design.md                    # 画面設計（Single Source of Truth）
└── tests/
    ├── phpunit.yaml       # PHPUnitテスト定義（Unit/Feature）
    └── e2e.yaml           # E2Eテスト定義
```

### 2. Claude Codeに指示

```
「dev-kit/docs/agents/main.mdを読んで、{SPEC_NAME}機能の実装を開始してください」
```

### 3. TDDサイクル

1. **Red**: テスト自動生成 → すべて失敗（実装がないため）
2. **Green**: 実装 → テストが徐々に通る
3. **Refactor**: コード改善 → テストは引き続き成功

---

## 🚨 トラブルシューティング

### 白画面が表示される

```bash
npm run dev:cleanup
npm run validate:deps
npm run build
./vendor/bin/sail restart
```

### テストが失敗する

```bash
# まず検証スクリプトで問題箇所を特定
npm run validate:frontend {SPEC_NAME}
npm run validate:backend {SPEC_NAME}

# PHPUnitテスト
./vendor/bin/sail artisan test --filter={TestClass}

# E2Eテスト
npm run test:e2e:headed tests/e2e/{SPEC_NAME}/
```

---

## 📦 他プロジェクトへの導入

```bash
# 1. dev-kitをコピー
cp -r /path/to/source/dev-kit /path/to/new-project/

# 2. セットアップスクリプトを実行
cd /path/to/new-project
./dev-kit/scripts/setup/init.sh

# 3. 環境検証を実行
npm run validate:env
```

---

## 🤝 Claude Codeとの連携

このdev-kitは、Claude Codeで読み込むことを前提に設計されています。

**推奨ワークフロー**:
1. Claude Codeでプロジェクトを開く
2. `CLAUDE.md` が自動的に読み込まれる
3. 「dev-kit/docs/agents/main.mdに従って、{SPEC_NAME}を実装してください」と指示
4. Claude Codeが8ステップTDDワークフローを自動実行

---

## 📄 ライセンス

MIT License

---

## 👤 作成者

Spec-Workflow TDD Framework
