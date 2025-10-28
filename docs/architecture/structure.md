# プロジェクト構造

## ディレクトリ構成

```
{AppName}/
├── app/
│   ├── Core/                      # 全体共通基盤
│   │   ├── Exceptions/            # 共通例外クラス
│   │   ├── Middleware/            # 共通処理
│   │   └── Models/                # 共通モデル（User等）
│   ├── Shared/                    # モジュール間共有コード
│   │   ├── Rules/                 # 共通検証規則
│   │   ├── Traits/                # 共通機能
│   │   └── Helpers/               # 補助関数
│   └── Modules/                   # ビジネス機能モジュール
│       ├── Video/                 # 動画管理モジュール
│       │   ├── Domain/            # ビジネスルール（Laravel非依存）
│       │   ├── Application/       # 用途実装（Laravel非依存）
│       │   ├── Infrastructure/    # データ保存（Laravel依存）
│       │   ├── Presentation/      # HTTP処理（Laravel依存）
│       │   ├── Providers/
│       │   └── routes.php
│       ├── User/                  # ユーザー管理モジュール
│       └── Category/              # カテゴリ管理モジュール
│
├── bootstrap/                     # フレームワーク起動処理
├── config/                        # 設定ファイル
├── database/
│   ├── factories/                 # テストデータ生成
│   ├── migrations/                # データベース定義
│   └── seeders/                   # 初期データ投入
├── dev-kit/                       # 開発キット（Git Submodule）
│   ├── docs/
│   │   ├── architecture/          # Steering Documents
│   │   │   ├── db.md              # データベース設計
│   │   │   ├── features.md        # 機能一覧
│   │   │   ├── pages.md           # 画面設計
│   │   │   ├── product.md         # プロダクトビジョン
│   │   │   ├── structure.md       # プロジェクト構造（本ファイル）
│   │   │   ├── tech.md            # 技術スタック
│   │   │   └── workflow.md        # 開発プロセス
│   │   ├── specs/                 # Spec Documents
│   │   │   └── {feature-name}/    # 機能別仕様書
│   │   │       ├── requirements.md # 要件定義
│   │   │       └── design.md       # 設計書（アーキテクチャ、画面遷移、テストケース）
│   │   └── ui-components/         # UIコンポーネントライブラリ
│   └── scripts/                   # 検証・テストスクリプト
│       ├── src/
│       │   ├── components/        # 基本UIコンポーネント
│       │   │   ├── basic/
│       │   │   │   └── ApplicationLogo.tsx
│       │   │   ├── buttons/
│       │   │   │   ├── PrimaryButton.tsx
│       │   │   │   ├── SecondaryButton.tsx
│       │   │   │   └── DangerButton.tsx
│       │   │   ├── forms/
│       │   │   │   ├── InputField.tsx
│       │   │   │   ├── PasswordField.tsx
│       │   │   │   ├── TextArea.tsx
│       │   │   │   ├── Select.tsx
│       │   │   │   ├── RadioButton.tsx
│       │   │   │   └── Checkbox.tsx
│       │   │   ├── icons/
│       │   │   │   └── Icon.tsx          # 200+アイコン定義
│       │   │   ├── layout/
│       │   │   │   ├── InfoPageWrapper.tsx
│       │   │   │   └── PCLayout.tsx
│       │   │   ├── navigation/
│       │   │   │   ├── TemplateNavigation.tsx
│       │   │   │   ├── Breadcrumb.tsx
│       │   │   │   └── TabNavigation.tsx
│       │   │   ├── tables/
│       │   │   │   └── DataTable.tsx
│       │   │   ├── common/
│       │   │   │   ├── Alert.tsx
│       │   │   │   ├── Modal.tsx
│       │   │   │   ├── Toast.tsx
│       │   │   │   └── Accordion.tsx
│       │   │   └── statistics/
│       │   │       ├── ChartRenderer.tsx
│       │   │       └── StatMetricCard.tsx
│       │   ├── pages/
│       │   │   ├── _demo/              # デモページ（開発中のみ使用）
│       │   │   │   ├── HomePage.tsx
│       │   │   │   ├── ComponentsPage.tsx
│       │   │   │   └── components/
│       │   │   │       ├── ButtonsPage.tsx
│       │   │   │       ├── FormsPage.tsx
│       │   │   │       ├── IconsPage.tsx
│       │   │   │       └── ...
│       │   │   └── templates/          # 本番用ページテンプレート（19種類）
│       │   │       ├── auth/           # 認証テンプレート（6種）
│       │   │       │   ├── LoginPage.tsx
│       │   │       │   ├── SignupPage.tsx
│       │   │       │   ├── SignupConfirmPage.tsx
│       │   │       │   ├── SignupCompletePage.tsx
│       │   │       │   ├── ForgotPasswordPage.tsx
│       │   │       │   └── ResetPasswordPage.tsx
│       │   │       ├── dashboard/      # ダッシュボード
│       │   │       │   └── DashboardPage.tsx
│       │   │       ├── settings/       # 設定
│       │   │       │   └── SettingsPage.tsx
│       │   │       ├── notifications/  # 通知
│       │   │       │   └── NotificationsPage.tsx
│       │   │       ├── statistics/     # 統計
│       │   │       │   └── StatisticsPage.tsx
│       │   │       ├── data/           # データ管理（3種）
│       │   │       │   ├── ListPage.tsx
│       │   │       │   ├── DetailPage.tsx
│       │   │       │   └── FormPage.tsx
│       │   │       ├── info/           # 情報ページ（4種）
│       │   │       │   ├── QnaPage.tsx
│       │   │       │   ├── PrivacyPage.tsx
│       │   │       │   ├── TermsPage.tsx
│       │   │       │   └── CommercialPage.tsx
│       │   │       ├── error/          # エラーページ（3種）
│       │   │       │   ├── Error404Page.tsx
│       │   │       │   ├── Error505Page.tsx
│       │   │       │   └── MaintenancePage.tsx
│       │   │       └── INTEGRATION_GUIDE.md
│       │   ├── hooks/              # カスタムフック
│       │   │   ├── forms/
│       │   │   │   ├── useDynamicForm.ts
│       │   │   │   └── useDynamicValidation.ts
│       │   │   ├── tables/
│       │   │   │   ├── useDynamicTable.ts
│       │   │   │   └── useTableSearch.ts
│       │   │   └── useViewMode.ts
│       │   ├── types/              # TypeScript型定義
│       │   │   ├── dashboard/
│       │   │   ├── settings/
│       │   │   ├── notifications/
│       │   │   └── statistics/
│       │   ├── styles/             # スタイル定義
│       │   │   ├── global.css
│       │   │   ├── components/
│       │   │   └── pages/
│       │   ├── config/             # 設定ファイル
│       │   │   └── tablePresets.ts
│       │   ├── router.tsx          # ルーティング設定（デモ用）
│       │   └── main.tsx            # エントリーポイント（デモ用）
│       ├── LARAVEL_INTEGRATION_GUIDE.md  # Laravel統合ガイド
│       ├── README.md               # ライブラリ概要
│       ├── CLAUDE.md               # 開発ガイドライン
│       ├── tsconfig.json
│       ├── vite.config.ts
│       └── package.json
├── docs/                          # プロジェクトドキュメント
│   ├── test-reports/              # テストレポート
│   └── log/                       # 問題管理ログ
├── public/                        # 公開ディレクトリ
├── resources/
│   ├── css/                       # スタイルシート
│   │   ├── app.css                # メインCSS（ui-componentsのスタイルをインポート）
│   │   ├── global.css             # グローバルスタイル（ui-componentsからコピー）
│   │   ├── components/            # コンポーネント別CSS
│   │   │   ├── Button.css
│   │   │   ├── InputField.css
│   │   │   ├── Alert.css
│   │   │   ├── Modal.css
│   │   │   ├── DataTable.css
│   │   │   └── ...
│   │   └── pages/                 # ページテンプレート別CSS
│   │       └── templates/
│   │           ├── TemplatePage.css
│   │           ├── DetailPage.css
│   │           └── ListPage.css
│   │
│   ├── js/                        # JavaScript・React
│   │   ├── app.tsx                # エントリーポイント（Inertia.js設定）
│   │   ├── bootstrap.ts           # 初期設定
│   │   ├── Pages/                 # Inertiaページコンポーネント
│   │   │   ├── Auth/              # 認証画面
│   │   │   │   ├── Login.tsx
│   │   │   │   ├── Register.tsx
│   │   │   │   ├── ForgotPassword.tsx
│   │   │   │   └── ResetPassword.tsx
│   │   │   ├── Dashboard/         # ダッシュボード
│   │   │   │   └── Index.tsx
│   │   │   ├── Videos/            # 動画管理画面
│   │   │   │   ├── Index.tsx
│   │   │   │   ├── Create.tsx
│   │   │   │   ├── Edit.tsx
│   │   │   │   └── Show.tsx
│   │   │   └── Settings/          # 設定画面
│   │   │       └── Profile.tsx
│   │   ├── Components/            # 共有UIコンポーネント（ui-componentsからコピー）
│   │   │   ├── buttons/
│   │   │   │   ├── PrimaryButton.tsx
│   │   │   │   ├── SecondaryButton.tsx
│   │   │   │   └── DangerButton.tsx
│   │   │   ├── forms/
│   │   │   │   ├── InputField.tsx
│   │   │   │   ├── PasswordField.tsx
│   │   │   │   ├── TextArea.tsx
│   │   │   │   ├── Select.tsx
│   │   │   │   ├── RadioButton.tsx
│   │   │   │   └── Checkbox.tsx
│   │   │   ├── icons/
│   │   │   │   └── Icon.tsx
│   │   │   ├── layout/
│   │   │   │   ├── InfoPageWrapper.tsx
│   │   │   │   └── PCLayout.tsx
│   │   │   ├── navigation/
│   │   │   │   ├── TemplateNavigation.tsx
│   │   │   │   ├── Breadcrumb.tsx
│   │   │   │   └── TabNavigation.tsx
│   │   │   ├── tables/
│   │   │   │   └── DataTable.tsx
│   │   │   ├── common/
│   │   │   │   ├── Alert.tsx
│   │   │   │   ├── Modal.tsx
│   │   │   │   ├── Toast.tsx
│   │   │   │   └── Accordion.tsx
│   │   │   └── statistics/
│   │   │       ├── ChartRenderer.tsx
│   │   │       └── StatMetricCard.tsx
│   │   ├── Layouts/               # ページレイアウト
│   │   │   ├── AppLayout.tsx      # アプリケーション共通レイアウト
│   │   │   └── GuestLayout.tsx    # ゲスト用レイアウト
│   │   ├── Types/                 # TypeScript型定義（ui-componentsからコピー）
│   │   │   ├── dashboard/
│   │   │   ├── settings/
│   │   │   ├── notifications/
│   │   │   └── ...
│   │   └── Hooks/                 # カスタムフック（ui-componentsからコピー）
│   │       ├── forms/
│   │       │   ├── useDynamicForm.ts
│   │       │   └── useDynamicValidation.ts
│   │       ├── tables/
│   │       │   ├── useDynamicTable.ts
│   │       │   └── useTableSearch.ts
│   │       └── useViewMode.ts
│   │
│   └── views/                     # Blade テンプレート
│       └── app.blade.php          # Inertiaルートテンプレート
├── routes/                        # URL定義
│   ├── web.php
│   ├── api.php
│   └── console.php
├── storage/                       # ファイル保存領域
├── tests/
│   ├── Unit/                      # 単体テスト
│   └── Feature/                   # 機能テスト
└── vendor/                        # 外部ライブラリ
```

## モジュール構造の詳細

### Clean Architecture 4層構造

各モジュールは以下の4層で構成：

```
app/Modules/{ModuleName}/
├── Domain/                        # 第1層：ビジネスルール
│   ├── {Entity}.php               # エンティティ
│   ├── {Entity}RepositoryInterface.php
│   ├── ValueObjects/              # 値オブジェクト
│   └── Exceptions/                # モジュール固有例外
│
├── Application/                   # 第2層：用途実装
│   ├── UseCases/                  # ビジネスフロー
│   │   ├── Create{Entity}.php
│   │   ├── Get{Entity}.php
│   │   ├── Update{Entity}.php
│   │   └── Delete{Entity}.php
│   └── DTOs/                      # データ転送オブジェクト
│       └── {Entity}Data.php
│
├── Infrastructure/                # 第3層：データ保存
│   ├── {Entity}Model.php          # Eloquentモデル
│   └── Eloquent{Entity}Repository.php
│
├── Presentation/                  # 第4層：HTTP処理
│   ├── {Entity}Controller.php
│   └── Requests/                  # フォーム検証
│       ├── Store{Entity}Request.php
│       └── Update{Entity}Request.php
│
├── Providers/
│   └── {Module}ServiceProvider.php
└── routes.php
```

### レイヤー別の役割

**Domain層（第1層）**:
- 場所: `app/Modules/{ModuleName}/Domain/`
- 特徴: Laravel非依存、純粋なビジネスルール
- 責務: エンティティ、リポジトリ定義、ビジネス規則

**Application層（第2層）**:
- 場所: `app/Modules/{ModuleName}/Application/`
- 特徴: Laravel非依存、ビジネスフロー調整
- 責務: 用途実装、データ転送オブジェクト

**Infrastructure層（第3層)**:
- 場所: `app/Modules/{ModuleName}/Infrastructure/`
- 特徴: Laravel依存、外部システム連携
- 責務: データベース操作、外部API連携

**Presentation層（第4層)**:
- 場所: `app/Modules/{ModuleName}/Presentation/`
- 特徴: Laravel依存、HTTPリクエスト・レスポンス処理
- 責務: コントローラー、フォーム検証、画面表示

## 命名規則

| 対象 | 形式 | 例 |
|------|------|-----|
| **ファイル名** |||
| エンティティ | `{Entity}.php` | Video.php, User.php |
| リポジトリ定義 | `{Entity}RepositoryInterface.php` | VideoRepositoryInterface.php |
| リポジトリ実装 | `Eloquent{Entity}Repository.php` | EloquentVideoRepository.php |
| 用途実装 | `{動詞}{Entity}.php` | CreateVideo.php, GetVideo.php |
| DTO | `{Entity}Data.php` | VideoData.php |
| Eloquentモデル | `{Entity}Model.php` | VideoModel.php |
| コントローラー | `{Entity}Controller.php` | VideoController.php |
| フォーム検証 | `{動詞}{Entity}Request.php` | StoreVideoRequest.php |
| テスト | `{対象クラス}Test.php` | VideoTest.php, CreateVideoTest.php |
| **コード内** |||
| クラス・型 | パスカルケース | Video, VideoData |
| 関数・メソッド | キャメルケース | markAsPublished(), getVideoList() |
| 定数 | 大文字スネークケース | MAX_VIDEO_SIZE, ALLOWED_FORMATS |
| 変数 | キャメルケース | $videoData, $userId |
| 配列キー | スネークケース | user_name, video_title |

## インポート規則

### インポート順序

1. **外部ライブラリ**: Laravel、サードパーティ
2. **内部モジュール**: 自プロジェクトの他モジュール
3. **相対インポート**: 同一モジュール内
4. **スタイル**: CSS等（フロントエンド）

### 名前空間の構成

**基本パターン**:
```php
namespace App\Modules\{ModuleName}\{Layer};

// 例:
namespace App\Modules\Video\Domain;
namespace App\Modules\Video\Application\UseCases;
namespace App\Modules\Video\Infrastructure;
namespace App\Modules\Video\Presentation;
```

**共通コード**:
```php
namespace App\Core\{Type};
namespace App\Shared\{Type};

// 例:
namespace App\Core\Exceptions;
namespace App\Shared\Rules;
```

## コード構成原則

- **1ファイル1クラス**: 単一責任の原則
- **クラス構成順序**: use宣言 → 定数 → プロパティ → コンストラクタ → 公開メソッド → 非公開メソッド
- **テスト可能性**: 各層が独立してテスト可能

## モジュール境界

### Core vs Shared vs Modules

**Core（全体共通基盤）**:
- 用途: アプリケーション全体で使用する基盤機能
- 配置: `app/Core/`
- 例: User（認証用）、例外クラス、処理

**Shared（モジュール間共有）**:
- 用途: 複数モジュールで共有するコード
- 配置: `app/Shared/`
- 例: 検証規則、補助関数、共通機能

**Modules（ビジネス機能）**:
- 用途: 各ビジネス機能の実装
- 配置: `app/Modules/`
- 例: Video（動画管理）、User（ユーザー管理）、Category（カテゴリ管理）

### 依存関係の方向

```
Presentation層 → Application層 → Domain層 ← Infrastructure層
```

**重要**: 上位層は下位層に依存可能、下位層は上位層に依存不可

### レイヤー間の依存制約

- ✅ 許可: Presentation → Application → Domain
- ✅ 許可: Infrastructure → Domain（インターフェース実装）
- ❌ 禁止: Domain → Infrastructure
- ❌ 禁止: Domain → Application
- ❌ 禁止: Application → Infrastructure

## コードサイズ指針

### ファイルサイズ
- **目標**: 300行以内
- **上限**: 500行
- **対応**: 500行超過時は機能を分割

### 関数・メソッドサイズ
- **目標**: 20行以内
- **上限**: 50行
- **対応**: 50行超過時は処理を分割

### クラス複雑度
- **目標**: 条件分岐・繰り返しの複雑さ10以下
- **計測方法**: PHPStanまたは手動で条件分岐（if/switch）と繰り返し（for/while）の数を数える
- **対応**: 複雑度が高い場合は処理を分離

### ネスト深度
- **上限**: 3段階まで
- **対応**: 早期リターンで深いネストを回避

## テスト構造

### 単体テスト

**Domain層・Application層のテスト**:
```
tests/Unit/
└── Modules/
    └── Video/
        ├── Domain/
        │   └── VideoTest.php
        └── Application/
            └── UseCases/
                ├── CreateVideoTest.php
                ├── GetVideoTest.php
                ├── UpdateVideoTest.php
                └── DeleteVideoTest.php
```

### 機能テスト

**Controller・統合テスト**:
```
tests/Feature/
└── Modules/
    └── Video/
        ├── VideoControllerTest.php
        └── VideoApiTest.php
```

### E2Eテスト

**Playwright MCP使用**:
- 場所: Claude Code上で実行
- 方法: Playwright MCPツールを使用してブラウザ操作を自動化

## データベース関連

### マイグレーション命名

**形式**: `{日付}_{連番}_{操作}_{テーブル名}_table.php`

**例**:
```
2024_01_01_000001_create_videos_table.php
2024_01_01_000002_create_users_table.php
2024_01_02_000001_add_published_at_to_videos_table.php
```

### シーダー構成

```
database/seeders/
├── DatabaseSeeder.php             # メインシーダー
├── MasterDataSeeder.php           # 基礎データ
└── DevelopmentSeeder.php          # 開発用データ
```

### ファクトリー配置

```
database/factories/
├── VideoFactory.php
├── UserFactory.php
└── CategoryFactory.php
```

## 文書化基準

- **公開メソッド**: PHPDoc必須（@param, @return, @throws）
- **複雑な処理**: コメントで説明
- **言語規約**: PHPDoc/JSDoc形式

## UIコンポーネント統合フロー

### 初期セットアップ時

プロジェクト開始時、`dev-kit/ui-components/`から必要なファイルをLaravelプロジェクトにコピーします。

**1. コンポーネントのコピー**:
```bash
# プロジェクトルートで実行

# UIコンポーネントをコピー
cp -r dev-kit/ui-components/src/components/* resources/js/Components/

# スタイルをコピー
cp -r dev-kit/ui-components/src/styles/* resources/css/

# カスタムフックをコピー
cp -r dev-kit/ui-components/src/hooks/* resources/js/Hooks/

# 型定義をコピー
cp -r dev-kit/ui-components/src/types/* resources/js/Types/
```

**2. app.cssの設定**:
```css
/* resources/css/app.css */

/* グローバルスタイル */
@import './global.css';

/* ページテンプレート用スタイル */
@import './pages/templates/TemplatePage.css';
@import './pages/templates/DetailPage.css';
@import './pages/templates/ListPage.css';

/* コンポーネント用スタイル */
@import './components/Button.css';
@import './components/InputField.css';
@import './components/Alert.css';
@import './components/Modal.css';
@import './components/DataTable.css';
```

**3. app.tsxの設定**:
```typescript
// resources/js/app.tsx
import './bootstrap';
import '../css/app.css';  // スタイルのインポート

import { createRoot } from 'react-dom/client';
import { createInertiaApp } from '@inertiajs/react';

createInertiaApp({
    title: (title) => `${title} - ${import.meta.env.VITE_APP_NAME || 'Laravel'}`,
    resolve: (name) =>
        resolvePageComponent(
            `./Pages/${name}.tsx`,
            import.meta.glob('./Pages/**/*.tsx')
        ),
    setup({ el, App, props }) {
        const root = createRoot(el);
        root.render(<App {...props} />);
    },
    progress: {
        color: '#4B5563',
    },
});
```

### 新機能開発時のフロー

**1. テンプレート選択**:

`dev-kit/ui-components/src/pages/templates/`から適切なテンプレートを選択します。

| 用途 | テンプレート | パス |
|-----|-------------|------|
| ダッシュボード | DashboardPage | templates/dashboard/DashboardPage.tsx |
| データ一覧 | ListPage | templates/data/ListPage.tsx |
| データ詳細 | DetailPage | templates/data/DetailPage.tsx |
| データ作成・編集 | FormPage | templates/data/FormPage.tsx |
| 設定画面 | SettingsPage | templates/settings/SettingsPage.tsx |
| 通知一覧 | NotificationsPage | templates/notifications/NotificationsPage.tsx |
| ログイン | LoginPage | templates/auth/LoginPage.tsx |
| 新規登録 | SignupPage | templates/auth/SignupPage.tsx |

**2. Inertiaページの作成**:

選択したテンプレートを`resources/js/Pages/`にコピーして使用します。

```bash
# 例: ダッシュボードページを作成
cp dev-kit/ui-components/src/pages/templates/dashboard/DashboardPage.tsx \
   resources/js/Pages/Dashboard/Index.tsx
```

**3. Controllerでデータを渡す**:

```php
// app/Http/Controllers/DashboardController.php
use Inertia\Inertia;

class DashboardController extends Controller
{
    public function index()
    {
        return Inertia::render('Dashboard/Index', [
            // Propsインターフェースに従ってデータを渡す
            'stats' => [
                [
                    'label' => '総ユーザー数',
                    'value' => (string) User::count(),
                    'icon' => 'user',
                    'color' => 'var(--color-primary-500)',
                ],
                // ... 他の統計データ
            ],
            'recentActivities' => Activity::latest()->take(5)->get(),
        ]);
    }
}
```

**4. ルーティング設定**:

```php
// routes/web.php
Route::get('/dashboard', [DashboardController::class, 'index'])
    ->middleware(['auth'])
    ->name('dashboard');
```

### コンポーネント使用時の注意事項

**必須ルール**:
- すべてのUIコンポーネントは`dev-kit/ui-components/src/components/`から使用
- `resources/js/Components/`に独自UIコンポーネントを作成しない
- インタラクティブ要素（フォーム、ボタン等）は直接HTMLで実装せず、ui-componentsを使用

**使用例**:

```tsx
// resources/js/Pages/Videos/Create.tsx
import PrimaryButton from '@/Components/buttons/PrimaryButton';
import InputField from '@/Components/forms/InputField';
import Alert from '@/Components/common/Alert';

export default function Create() {
  return (
    <div>
      <InputField
        label="動画タイトル"
        name="title"
        required
      />

      <PrimaryButton type="submit">
        登録
      </PrimaryButton>

      <Alert type="success">
        登録が完了しました
      </Alert>
    </div>
  );
}
```

### ページテンプレートの分類

**動的テンプレート（データ駆動型）**:
- DashboardPage, SettingsPage, NotificationsPage
- ListPage, DetailPage, FormPage
- StatisticsPage

これらは**Propsインターフェース**でデータ構造を定義し、Laravel側から動的にデータを渡して使用します。

**静的テンプレート（コンテンツ表示）**:
- 認証: LoginPage, SignupPage, ForgotPasswordPage, ResetPasswordPage
- 情報: QnaPage, PrivacyPage, TermsPage, CommercialPage
- エラー: Error404Page, Error505Page, MaintenancePage

これらは主に固定コンテンツを表示し、最小限のPropsで動作します。

### 参照ガイド

**詳細な統合手順**:
- `dev-kit/ui-components/LARAVEL_INTEGRATION_GUIDE.md` - 完全なセットアップ手順とデータ渡し方
- `dev-kit/ui-components/src/pages/templates/INTEGRATION_GUIDE.md` - テンプレート使用例と実装パターン

**UIコンポーネント一覧**:
- `dev-kit/docs/architecture/tech.md` - 利用可能な全コンポーネントとその用途

**アーキテクチャ連携**:
```
Laravel Backend (Clean Architecture)
    ↓
Controller → Use Case → Domain
    ↓ (Inertia::render + Props)
React Templates (Presentation Layer)
    ↓ (ui-components使用)
UIコンポーネント (dev-kit/ui-components/)
```

### トラブルシューティング

**スタイルが適用されない**:
- `resources/css/app.css`でスタイルをインポートしているか確認
- Vite設定で`resources/css/app.css`がビルド対象に含まれているか確認

**コンポーネントが見つからない**:
- `vite.config.js`でパスエイリアス `@` が `/resources/js` に設定されているか確認
- `tsconfig.json`で `@/*` が `./resources/js/*` にマッピングされているか確認

**アイコンが表示されない**:
- `Icon.tsx`に存在するアイコン名を使用しているか確認
- 利用可能なアイコンは200種類以上（user, home, settings, check等）

