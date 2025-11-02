# プロジェクト構造

## ディレクトリ構成

```
{AppName}/
├── app/
│   ├── Core/                      # 全体共通基盤（User、例外、Middleware）
│   ├── Shared/                    # モジュール間共有（Rules、Traits、Helpers）
│   └── Modules/                   # ビジネス機能モジュール
│       ├── Video/                 # 動画管理モジュール
│       │   ├── Domain/            # 第1層: ビジネスルール（Laravel非依存）
│       │   ├── Application/       # 第2層: 用途実装（Laravel非依存）
│       │   ├── Infrastructure/    # 第3層: データ保存（Laravel依存）
│       │   ├── Presentation/      # 第4層: HTTP処理（Laravel依存）
│       │   ├── Providers/
│       │   └── routes.php
│       ├── User/                  # ユーザー管理モジュール
│       └── Category/              # カテゴリ管理モジュール
│
├── database/
│   ├── factories/                 # テストデータ生成
│   ├── migrations/                # マイグレーション
│   └── seeders/                   # シーダー
│
├── dev-kit/                       # 開発キット
│   ├── docs/
│   │   ├── architecture/          # アーキテクチャドキュメント
│   │   └── specs/{feature-name}/  # 機能別仕様書
│   ├── ui-components/             # UIコンポーネントライブラリ
│   └── scripts/                   # 開発支援スクリプト
│
├── resources/
│   ├── css/                       # スタイルシート
│   │   ├── app.css
│   │   ├── global.css
│   │   ├── components/            # コンポーネント別CSS
│   │   └── pages/                 # ページ別CSS
│   ├── js/
│   │   ├── app.tsx                # エントリーポイント（Inertia.js）
│   │   ├── Pages/                 # Inertiaページコンポーネント
│   │   ├── components/            # UIコンポーネント（ui-componentsからコピー）
│   │   ├── hooks/                 # カスタムフック
│   │   ├── types/                 # TypeScript型定義
│   │   └── config/                # 設定ファイル
│   └── views/
│       └── app.blade.php          # Inertiaルートテンプレート
│
├── routes/
│   ├── web.php
│   ├── api.php
│   └── console.php
│
├── tests/
│   ├── Unit/                      # 単体テスト（Domain/Application）
│   │   └── Modules/{Module}/
│   ├── Feature/                   # 統合テスト（Presentation）
│   │   └── Modules/{Module}/
│   └── e2e/                       # E2Eテスト（Playwright）
│       └── {feature-name}/
│
└── vendor/                        # 外部ライブラリ
```

---

## Clean Architecture 4層構造

### モジュール構造

```
app/Modules/{ModuleName}/
├── Domain/                        # 第1層: ビジネスルール
│   ├── Repositories/
│   │   └── {Module}RepositoryInterface.php
│   ├── ValueObjects/
│   └── Exceptions/
│
├── Application/                   # 第2層: 用途実装
│   ├── UseCases/
│   │   ├── Create{Entity}.php
│   │   ├── Get{Entity}.php
│   │   ├── Update{Entity}.php
│   │   └── Delete{Entity}.php
│   └── DTOs/
│
├── Infrastructure/                # 第3層: データ保存
│   ├── {Entity}.php               # Eloquentモデル
│   └── Eloquent{Module}Repository.php
│
├── Presentation/                  # 第4層: HTTP処理
│   ├── Controllers/
│   │   └── {UseCase}Controller.php
│   └── Requests/
│       └── {UseCase}Request.php
│
├── Providers/
│   └── {Module}ServiceProvider.php
└── routes.php
```

### レイヤー別の役割

| 層 | 場所 | Laravel依存 | 責務 |
|----|------|------------|------|
| Domain | `Domain/` | ❌ なし | エンティティ、リポジトリ定義、ビジネスルール |
| Application | `Application/` | ❌ なし | ユースケース、DTO、ビジネスフロー |
| Infrastructure | `Infrastructure/` | ✅ あり | データベース操作、外部API連携 |
| Presentation | `Presentation/` | ✅ あり | Controller、FormRequest、画面表示 |

### 依存関係

```
Presentation → Application → Domain ← Infrastructure
```

**制約**:
- ✅ 許可: Presentation → Application → Domain
- ✅ 許可: Infrastructure → Domain（インターフェース実装）
- ❌ 禁止: Domain → Application/Infrastructure/Presentation
- ❌ 禁止: Application → Infrastructure

---

## 命名規則

| 対象 | 形式 | 例 |
|------|------|-----|
| モジュール | パスカルケース | Video, User, Category |
| RepositoryInterface | `{Module}RepositoryInterface` | VideoRepositoryInterface |
| Repository実装 | `Eloquent{Module}Repository` | EloquentVideoRepository |
| UseCase | `{動詞}{Entity}` | CreateVideo, GetVideo |
| DTO | `{Entity}Data` | VideoData |
| Eloquentモデル | `{Entity}` | Video, User |
| Controller | `{UseCase}Controller` | CreateVideoController |
| FormRequest | `{UseCase}Request` | CreateVideoRequest |
| Test | `{対象クラス}Test` | CreateVideoTest |

**コード内**:
- クラス・型: パスカルケース（`Video`, `VideoData`）
- 関数・メソッド: キャメルケース（`createVideo()`, `getVideoList()`）
- 定数: 大文字スネークケース（`MAX_VIDEO_SIZE`）
- 変数: キャメルケース（`$videoData`, `$userId`）
- 配列キー: スネークケース（`user_name`, `video_title`）

---

## 名前空間

```php
// モジュール
namespace App\Modules\{ModuleName}\{Layer};

// 例
namespace App\Modules\Video\Domain\Repositories;
namespace App\Modules\Video\Application\UseCases;
namespace App\Modules\Video\Infrastructure;
namespace App\Modules\Video\Presentation\Controllers;

// 共通
namespace App\Core\{Type};
namespace App\Shared\{Type};
```

---

## テスト構造

### 単体テスト（Domain/Application）

```
tests/Unit/Modules/{Module}/
├── Domain/
│   └── {Entity}Test.php
└── Application/UseCases/
    ├── Create{Entity}Test.php
    ├── Get{Entity}Test.php
    ├── Update{Entity}Test.php
    └── Delete{Entity}Test.php
```

**特徴**: Laravel非依存、モック使用

### 統合テスト（Presentation）

```
tests/Feature/Modules/{Module}/Presentation/Controllers/
├── {UseCase}ControllerTest.php
└── {Module}ApiTest.php
```

**特徴**: Laravel依存、RefreshDatabase使用

### E2Eテスト

```
tests/e2e/{feature-name}/
├── {scenario-01}.spec.ts
├── {scenario-02}.spec.ts
└── {scenario-03}.spec.ts
```

**実行**: Playwright

---

## データベース関連

### マイグレーション命名

**形式**: `{日付}_{連番}_{操作}_{テーブル名}_table.php`

**例**:
```
2024_01_01_000001_create_videos_table.php
2024_01_02_000001_add_published_at_to_videos_table.php
```

### シーダー構成

```
database/seeders/
├── DatabaseSeeder.php      # メインシーダー
├── MasterDataSeeder.php    # 基礎データ
└── DevelopmentSeeder.php   # 開発用データ
```

---

## コード品質基準

### ファイルサイズ
- 目標: 300行以内
- 上限: 500行
- 超過時: 機能分割

### メソッドサイズ
- 目標: 20行以内
- 上限: 50行
- 超過時: 処理分割

### ネスト深度
- 上限: 3段階
- 対策: 早期リターン

### 複雑度
- 目標: 10以下（条件分岐・繰り返し）
- 計測: PHPStan
- 超過時: 処理分離

---

## モジュール境界

### Core vs Shared vs Modules

| 区分 | 用途 | 配置 | 例 |
|-----|------|------|-----|
| Core | 全体共通基盤 | `app/Core/` | User（認証）、例外、Middleware |
| Shared | モジュール間共有 | `app/Shared/` | 検証規則、Traits、Helpers |
| Modules | ビジネス機能 | `app/Modules/` | Video、User、Category |

---

## UIコンポーネント統合

### 初期設定

`init.sh`実行で自動コピー:
- `dev-kit/ui-components/src/components/` → `resources/js/components/`
- `dev-kit/ui-components/src/hooks/` → `resources/js/hooks/`
- `dev-kit/ui-components/src/types/` → `resources/js/types/`
- `dev-kit/ui-components/src/styles/` → `resources/css/`

### 使用ルール

**✅ DO**:
- ui-componentsから提供されるコンポーネントを使用
- `resources/js/Pages/`でビジネスロジックのみ実装

**❌ DON'T**:
- `resources/js/components/`に独自UIコンポーネント作成禁止
- 直接HTMLタグ（`<input>`, `<button>`等）使用禁止
- Tailwind CSS直接使用禁止

### 詳細

- テンプレート使用方法: [pages.md](./pages.md)
- コンポーネント一覧: [tech.md](./tech.md)

---

## 参考

- [modules.md](./modules.md) - Clean Architecture詳細
- [pages.md](./pages.md) - ページテンプレート
- [tech.md](./tech.md) - 技術スタック
- [db.md](./db.md) - データベース設計
- [testing.md](./testing.md) - テスト戦略
