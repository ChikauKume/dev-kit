# dev-kit - 開発キット

このディレクトリは、複数プロジェクト間で共有可能な開発ツールとテンプレートを含む**独立したGitリポジトリ**として管理されることを想定しています。

## 📁 ディレクトリ構造

```
dev-kit/
├── .git/                   # dev-kit自体のGitリポジトリ
├── .gitignore             # システム固有ファイルを除外
├── ui-components/         # 共通UIライブラリ（Git管理）
├── docs/                  # ドキュメント類
│   ├── architecture/      # システム固有（.gitignore対象）
│   ├── specs/            # システム固有（.gitignore対象）
│   ├── test-reports/     # システム固有（.gitignore対象）
│   └── templates/        # 共通テンプレート（Git管理）
└── scripts/              # 共通スクリプト（Git管理）
    ├── validations/      # 検証スクリプト
    ├── tests/           # テストスクリプト
    └── common/          # 共通ユーティリティ
```

## 🎯 設計思想

### Git管理の分離

**dev-kit リポジトリが管理するもの**:
- ✅ `scripts/` - 検証・テストスクリプト
- ✅ `docs/templates/` - ドキュメントテンプレート
- ✅ `ui-components/` - UIコンポーネントライブラリ

**システム側のリポジトリが管理するもの**:
- ✅ `docs/architecture/` - システム固有の技術仕様
- ✅ `docs/specs/` - システム固有の機能仕様
- ✅ `docs/test-reports/` - システム固有のテストレポート

### .gitignore設定

dev-kitの`.gitignore`では以下を除外:
```gitignore
/docs/architecture/
/docs/specs/
/docs/test-reports/
```

これにより:
- dev-kitリポジトリは共通ツールのみをバージョン管理
- システム固有のドキュメントは各プロジェクトのGitで管理
- 両方のリポジトリが干渉せずに共存可能

## 🚀 新規プロジェクトでの使い方

### 方法1: Git Submodule（推奨）

```bash
# 新規プロジェクトで
git submodule add git@github.com:your-org/dev-kit.git dev-kit

# 初回クローン後
git submodule update --init --recursive
```

### 方法2: 直接コピー

```bash
# dev-kitをコピー
cp -r /path/to/dev-kit /path/to/new-project/dev-kit

# dev-kit/.git を削除して独立させる（非推奨）
rm -rf dev-kit/.git
```

## 📝 システム固有ドキュメントの作成

新規プロジェクトでは以下のディレクトリを作成してドキュメントを配置:

```bash
# システム固有のドキュメントディレクトリを作成
mkdir -p dev-kit/docs/architecture
mkdir -p dev-kit/docs/specs/{feature-name}
mkdir -p dev-kit/docs/test-reports

# テンプレートからコピー（存在する場合）
cp dev-kit/docs/templates/tech.md dev-kit/docs/architecture/tech.md
cp dev-kit/docs/templates/spec-template.md dev-kit/docs/specs/{feature-name}/design.md
```

## 🔧 スクリプトの使い方

### フロントエンド検証

```bash
# Makefileから実行（推奨）
./dev-kit/scripts/validations/frontend.sh

# 直接実行
./dev-kit/scripts/validations/frontend.sh
```

### バックエンド検証

```bash
./dev-kit/scripts/validations/backend.sh
```

### キャッシュクリア

```bash
./dev-kit/scripts/common/clear-cache.sh
```

詳細は `dev-kit/scripts/README.md` を参照してください。

## 🎨 UIコンポーネントの使い方

詳細は以下のドキュメントを参照:
- `dev-kit/ui-components/README.md` - 概要
- `dev-kit/ui-components/LARAVEL_INTEGRATION_GUIDE.md` - Laravel統合ガイド
- `dev-kit/ui-components/src/hooks/README.md` - useDynamicForm完全ガイド

## 📦 更新の反映

### dev-kitの更新を全プロジェクトに反映

```bash
# Submodule使用時
cd dev-kit
git pull origin main
cd ..
git add dev-kit
git commit -m "Update dev-kit"

# 他のプロジェクトでも同様に
cd /path/to/other-project
git submodule update --remote dev-kit
```

## 🔍 トラブルシューティング

### 問題: スクリプトが実行できない

```bash
# 実行権限を付与
chmod +x dev-kit/scripts/validations/frontend.sh
chmod +x dev-kit/scripts/validations/backend.sh
chmod +x dev-kit/scripts/common/clear-cache.sh
```

### 問題: パスが見つからない

CLAUDE.mdやMakefileで参照しているパスが正しいか確認:
- ❌ `scripts/validations/` → ✅ `dev-kit/scripts/validations/`
- ❌ `docs/specs/` → ✅ `dev-kit/docs/specs/`
- ❌ `ui-components/` → ✅ `dev-kit/ui-components/`

## 📚 関連ドキュメント

- `/CLAUDE.md` - AIアシスタント向け開発指示書
- `/Makefile` - 開発タスクランナー
- `dev-kit/scripts/README.md` - スクリプト詳細ガイド

---

**最終更新日**: 2025-10-28
**メンテナー**: Claude AI
