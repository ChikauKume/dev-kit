# UI Components Library

React + TypeScript用のUIコンポーネントライブラリです。ネイビーテーマの一貫したデザインシステムと200個以上のSVGアイコン、19種類の本番利用可能なページテンプレートを提供します。

## ✨ 主な特徴

- 🎨 **200個以上のSVGアイコン**: 27カテゴリーに分類された包括的なアイコンライブラリ
- 📄 **20種類のページテンプレート**: 認証、ダッシュボード、設定、データ管理など、すぐに使える本番品質のテンプレート
- 🔧 **再利用可能なコンポーネント**: ボタン、フォーム、テーブル、ナビゲーションなど豊富なUIコンポーネント
- 🚀 **Laravel + Inertia.js対応**: Laravelプロジェクトへの統合ガイド完備
- 💪 **TypeScript完全対応**: 型安全な開発体験
- 📱 **レスポンシブデザイン**: モバイルファーストアプローチ

## 🚀 Quick Start

### 1. 依存関係のインストール
```bash
npm install
```

### 2. 開発サーバー起動
```bash
npm run dev
```
ブラウザで `http://localhost:3000` (または自動的に割り当てられたポート) にアクセスしてください。

### 3. プロダクションビルド
```bash
npm run build
```

### 4. 配信サーバー起動
```bash
# 推奨方法（React Router対応）
npm run serve

# または手動で
npx serve -s dist -p 3000 --single
```

## 🔗 利用可能なURLパス

### デモページ

| URL | 内容 | 説明 |
|-----|------|------|
| `/` | ホームページ | プロジェクト全体の概要とコンポーネントカテゴリ一覧 |
| `/components` | コンポーネント一覧 | 基本コンポーネントのカタログ |
| `/buttons` | Buttonコンポーネント | ボタンの全バリエーションと使用例 |
| `/forms` | Formコンポーネント | 入力フィールド、テキストエリア、セレクト等 |
| `/messages` | メッセージ/通知 | アラート、通知、モーダル、ローダー等 |
| `/tables` | テーブル・グラフ | データテーブル、リスト、チャート等 |
| `/navigation` | ナビゲーション | タブ、ブレッドクラム、サイドバー等 |
| `/layout` | レイアウト | PC/SPレイアウト、グリッド等 |
| `/icons` | アイコン一覧 | 200個以上のSVGアイコンライブラリ |

### ページテンプレート

#### 動的テンプレート(データ駆動型)

| URL | 内容 | 説明 |
|-----|------|------|
| `/pages/dashboard` | ダッシュボード | 統計カード、アクティビティ、クイックアクション |
| `/pages/settings` | 設定画面 | プロフィール編集、インライン編集機能 |
| `/pages/notifications` | 通知一覧 | 通知管理、既読/未読、フィルタリング |
| `/pages/data/list` | データ一覧 | テーブル、ソート、検索、ページネーション |
| `/pages/data/detail` | データ詳細 | セクション別詳細表示 |
| `/pages/data/add` | データ作成 | フォーム、バリデーション |
| `/pages/statistics` | 統計 | グラフ、チャート、メトリクス |

#### 静的テンプレート(認証・情報・エラー)

| URL | 内容 | 説明 |
|-----|------|------|
| `/pages/login` | ログイン | メール/パスワード認証フォーム |
| `/pages/signup` | 新規登録 | ユーザー登録フォーム |
| `/pages/forgot-password` | パスワード忘れ | パスワードリセット依頼 |
| `/pages/reset-password` | パスワードリセット | 新しいパスワード設定 |
| `/pages/password-reset-email` | リセットメール | パスワードリセットメールプレビュー |
| `/pages/qna` | よくある質問 | FAQ、アコーディオン形式 |
| `/pages/privacy` | プライバシーポリシー | 個人情報保護方針 |
| `/pages/terms` | 利用規約 | サービス利用規約 |
| `/pages/commercial` | 特定商取引法 | 特商法に基づく表記 |
| `/pages/error-404` | 404エラー | ページが見つかりません |
| `/pages/error-505` | 505エラー | サーバーエラー |
| `/pages/maintenance` | メンテナンス | メンテナンス中画面 |

## 📦 提供されるコンテンツ

### 📄 ページテンプレート (20種類)

#### 動的テンプレート (6種類)
本番環境で使用できる、データ駆動型のページテンプレート:

1. **DashboardPage** - ダッシュボード
   - 統計カード表示
   - 最近のアクティビティ
   - クイックアクション
   - 通知統合

2. **SettingsPage** - 設定画面
   - プロフィール編集(インライン編集)
   - Flash message対応
   - 非同期保存処理

3. **NotificationsPage** - 通知一覧
   - 通知管理(既読/未読)
   - タイプ・ステータスフィルター
   - ページネーション
   - 楽観的UI更新

4. **ListPage** - データ一覧
   - テーブル表示
   - ソート・検索・フィルター
   - ページネーション
   - アクション(編集・削除等)

5. **DetailPage** - データ詳細
   - セクション別フィールド表示
   - パンくずリスト
   - アクションボタン

6. **FormPage** - データ作成・編集
   - 動的フォームフィールド
   - クライアント側バリデーション
   - 非同期バリデーション対応

#### 静的テンプレート (14種類)
主に固定コンテンツを表示するテンプレート:

**認証テンプレート (7種類)**
- LoginPage - ログイン画面
- SignupPage - 新規登録画面
- SignupConfirmPage - 新規登録確認画面
- SignupCompletePage - 新規登録完了画面
- ForgotPasswordPage - パスワード忘れ画面
- ResetPasswordPage - パスワードリセット画面
- PasswordResetEmailPage - パスワードリセットメールプレビュー

**情報テンプレート (4種類)**
- QnaPage - よくある質問
- PrivacyPage - プライバシーポリシー
- TermsPage - 利用規約
- CommercialPage - 特定商取引法

**エラーテンプレート (3種類)**
- Error404Page - 404エラー
- Error505Page - 505エラー
- MaintenancePage - メンテナンス画面

### 🧩 UIコンポーネント

### 🔘 Button Component
- **バリエーション**: Primary, Secondary, Text, Danger
- **サイズ**: Small, Medium, Large
- **機能**: アイコン対応、ローディング状態、無効化、全幅表示

### 📝 Form Components
- **InputField**: テキスト、メール、パスワード入力（アイコン対応）
- **TextArea**: 複数行テキスト入力
- **Select**: ドロップダウン選択
- **RadioButton**: ラジオボタングループ
- **Checkbox**: チェックボックス（個別・グループ）
- **機能**: バリデーション、エラー表示、ヘルパーテキスト、必須フィールド対応

### 💬 Message & Notification Components
- **Alert**: Info, Success, Warning, Errorの4タイプ
- **Toast**: 自動消去機能付き通知
- **Modal**: 確認・情報・フォーム用モーダル
- **Loader**: スピナー、スケルトン、プログレスバー
- **機能**: アニメーション、カスタマイズ可能なスタイル

### 📊 Table & Graph Components
- **DataTable**: ソート、フィルター、ページネーション対応
- **ResponsiveTable**: モバイル最適化テーブル
- **List**: カード型・リスト型データ表示
- **Charts**: バー、ライン、パイチャート
- **機能**: 検索、エクスポート、カスタムレンダリング

### 🧭 Navigation Components
- **TabNavigation**: 水平・垂直タブ
- **Breadcrumb**: パンくずナビゲーション
- **Sidebar**: 固定・折りたたみ可能サイドバー
- **MegaMenu**: 大規模メニューシステム
- **機能**: アクティブ状態、アイコン対応

### 📐 Layout Components
- **PC Layout**: ヘッダー・サイドバー・フッターレイアウト
- **SP Layout**: モバイル最適化レイアウト
- **Grid System**: 12カラムグリッド
- **Container**: レスポンシブコンテナ
- **機能**: テーマ切り替え、ダークモード対応

### ⭐ Icon Library
- **200個以上のSVGアイコン**: 27カテゴリーに分類
- **カテゴリー**: ナビゲーション、ユーザー、ビジネス、メディア、天気、交通、医療、教育など
- **機能**: サイズ調整、カラー変更、検索・フィルター機能、クリックでコードコピー

## 🎨 デザインシステム

### カラーパレット
- **プライマリ**: Blue (`#3b82f6`) - 50から950までの10段階
- **セマンティック**: Success (Green), Warning (Orange), Error (Red), Info (Blue)
- **ニュートラル**: グレースケール（50から950まで）

### 特徴
- **TypeScript**: 完全な型安全性
- **アクセシビリティファースト**: ARIA属性、キーボードナビゲーション対応
- **レスポンシブデザイン**: モバイルファーストアプローチ
- **CSS変数**: 統一されたデザイントークン
- **アニメーション**: スムーズなトランジション効果
- **ダークモード**: カラーテーマ切り替え対応

## 🛠️ 技術スタック

- **React**: 18.2.0
- **TypeScript**: 5.6.3
- **React Router**: 6.8.1
- **Vite**: 5.4.20（高速ビルドツール）
- **CSS**: バニラCSS（CSS変数使用）
- **フォント**: Noto Sans JP

## 📂 プロジェクト構成

```
ui-components/
├── dist/                           # ビルド出力
├── public/
│   └── vite.svg
├── src/
│   ├── components/                 # UIコンポーネント
│   │   ├── basic/
│   │   │   └── ApplicationLogo.tsx
│   │   ├── buttons/
│   │   │   └── Button.tsx
│   │   ├── forms/
│   │   │   ├── InputField.tsx
│   │   │   ├── Checkbox.tsx
│   │   │   ├── RadioButton.tsx
│   │   │   └── Select.tsx
│   │   ├── icons/
│   │   │   └── Icon.tsx            # 200+アイコン定義
│   │   ├── layout/
│   │   │   └── InfoPageWrapper.tsx # ページレイアウト
│   │   ├── navigation/
│   │   │   ├── TemplateNavigation.tsx
│   │   │   └── Breadcrumb.tsx
│   │   ├── tables/
│   │   │   └── DataTable.tsx
│   │   ├── common/
│   │   │   ├── Alert.tsx
│   │   │   ├── Modal.tsx
│   │   │   └── Accordion.tsx
│   │   └── statistics/
│   │       ├── ChartRenderer.tsx
│   │       └── StatMetricCard.tsx
│   ├── pages/
│   │   ├── _demo/                  # デモページ
│   │   │   ├── HomePage.tsx
│   │   │   ├── ComponentsPage.tsx
│   │   │   └── components/
│   │   │       ├── ButtonsPage.tsx
│   │   │       ├── FormsPage.tsx
│   │   │       └── IconsPage.tsx
│   │   └── templates/              # 本番用テンプレート
│   │       ├── auth/               # 認証(6ファイル)
│   │       │   ├── LoginPage.tsx
│   │       │   ├── SignupPage.tsx
│   │       │   └── ...
│   │       ├── dashboard/          # ダッシュボード
│   │       │   └── DashboardPage.tsx
│   │       ├── settings/           # 設定
│   │       │   └── SettingsPage.tsx
│   │       ├── notifications/      # 通知
│   │       │   └── NotificationsPage.tsx
│   │       ├── statistics/         # 統計
│   │       │   └── StatisticsPage.tsx
│   │       ├── data/               # データ管理(4ファイル)
│   │       │   ├── ListPage.tsx
│   │       │   ├── DetailPage.tsx
│   │       │   ├── FormPage.tsx
│   │       │   └── DetailPageExample.tsx
│   │       ├── info/               # 情報(4ファイル)
│   │       │   ├── QnaPage.tsx
│   │       │   ├── PrivacyPage.tsx
│   │       │   └── ...
│   │       ├── error/              # エラー(3ファイル)
│   │       │   ├── Error404Page.tsx
│   │       │   ├── Error505Page.tsx
│   │       │   └── MaintenancePage.tsx
│   │       └── INTEGRATION_GUIDE.md
│   ├── types/                      # TypeScript型定義
│   │   ├── dashboard/
│   │   ├── settings/
│   │   ├── notifications/
│   │   └── statistics/
│   ├── styles/                     # スタイル
│   │   ├── global.css
│   │   ├── components/
│   │   └── pages/
│   ├── hooks/                      # カスタムフック
│   │   ├── useViewMode.ts
│   │   ├── useSynchronizedScroll.ts
│   │   └── useTableHeight.ts
│   ├── config/                     # 設定ファイル
│   │   └── tablePresets.ts
│   ├── router.tsx                  # ルーティング設定
│   ├── main.tsx                    # エントリーポイント
│   └── index.css                   # グローバルスタイル
├── LARAVEL_INTEGRATION_GUIDE.md    # Laravel統合ガイド
├── CLAUDE.md                       # 開発ガイドライン
├── tsconfig.json                   # TypeScript設定
├── vite.config.ts                  # Vite設定
└── package.json
```

## 🎯 アイコンの使い方

### 基本的な使用方法
```tsx
import Icon from './components/icon/Icon';

// 基本
<Icon name="home" />

// サイズとカラー指定
<Icon name="user" size="lg" color="#3b82f6" />

// クリックハンドラー
<Icon name="settings" onClick={() => console.log('clicked')} />
```

### 利用可能なアイコンカテゴリー
- **ナビゲーション**: home, menu, dashboard, arrows
- **ユーザー**: user, users, user-plus, user-shield
- **ビジネス**: briefcase, project, tasks, chart
- **コミュニケーション**: mail, message, comment, phone
- **メディア**: video, music, camera, microphone
- **ショッピング**: shopping-cart, credit-card, tag
- **ソーシャル**: heart, thumbs-up, share, flag
- **時間**: calendar, clock, history
- **位置**: map, location, globe, compass
- **天気**: sun, moon, cloud, bolt
- **デバイス**: laptop, mobile, tablet, wifi
- **その他**: 教育、医療、交通、飲食、ゲームなど

詳細は `/icons` ページで確認できます。

## 🚀 Laravel + Inertia.js 統合

このライブラリはLaravel + Inertia.jsプロジェクトへの統合を想定して設計されています。

### クイックスタート

1. **統合ガイドを確認**
   ```bash
   # プロジェクトルートの統合ガイドを参照
   cat LARAVEL_INTEGRATION_GUIDE.md
   ```

2. **コンポーネントをLaravelプロジェクトにコピー**
   ```bash
   # テンプレート
   cp -r src/pages/templates/* your-laravel-project/resources/js/Pages/

   # コンポーネント
   cp -r src/components/* your-laravel-project/resources/js/Components/

   # 型定義
   cp -r src/types/* your-laravel-project/resources/js/Types/

   # スタイル
   cp -r src/styles/* your-laravel-project/resources/css/
   ```

3. **Laravelコントローラーでテンプレートを使用**
   ```php
   use Inertia\Inertia;

   class DashboardController extends Controller
   {
       public function index()
       {
           return Inertia::render('templates/dashboard/DashboardPage', [
               'stats' => [
                   [
                       'label' => '総ユーザー数',
                       'value' => (string) User::count(),
                       'icon' => 'user',
                       'color' => 'var(--color-primary-500)',
                   ],
               ],
           ]);
       }
   }
   ```

### テンプレートのカスタマイズ

静的テンプレート(認証、情報、エラー)をプロジェクトに合わせてカスタマイズ:

```bash
# テンプレートをコピーしてカスタマイズ
cp resources/js/Pages/templates/auth/LoginPage.tsx \
   resources/js/Pages/Auth/Login.tsx

# プロジェクト固有の要件に合わせて編集
# 例: メール認証 → ユーザーID認証に変更
```

### 詳細ドキュメント

- 📖 **完全な統合ガイド**: [`LARAVEL_INTEGRATION_GUIDE.md`](./LARAVEL_INTEGRATION_GUIDE.md)
  - セットアップ手順(8ステップ)
  - 全19テンプレートのデータ渡し方
  - Clean Architecture対応パターン
  - トラブルシューティング

- 📖 **実装例**: [`src/pages/templates/INTEGRATION_GUIDE.md`](./src/pages/templates/INTEGRATION_GUIDE.md)
  - 5つの統合パターン
  - コンポーネント統合の詳細

### 主な利点

- ✅ **Props駆動**: TypeScriptインターフェースに従ってデータを渡すだけ
- ✅ **Clean Architecture対応**: テンプレートは純粋なPresentation Layer
- ✅ **カスタマイズ可能**: テンプレートをコピーして自由に編集
- ✅ **型安全**: 完全なTypeScript対応でコンパイル時エラー検出
- ✅ **AI駆動開発**: 統合ガイドをClaude等に読み込ませて自動実装

## 🔧 トラブルシューティング

### 404 エラーが発生する場合

React Router使用時に直接URLにアクセスして404エラーが発生する場合：

1. **npm run serve を使用（推奨）**
   ```bash
   npm run serve
   ```

2. **開発サーバーを使用**
   ```bash
   npm run dev
   ```

### TypeScriptエラー

型エラーが発生した場合：
```bash
# 型定義を再インストール
npm install --save-dev @types/react @types/react-dom @types/react-router-dom
```

### ビルドサイズ警告

バンドルサイズが大きい場合は、コード分割を検討：
```tsx
// 動的インポート
const IconsPage = React.lazy(() => import('./pages/IconsPage'));
```

## 📝 ライセンス

MIT License

## 👨‍💻 Author

chikau

---

**🌟 このライブラリがお役に立てば幸いです！**

## 📚 関連ドキュメント

- [React公式ドキュメント](https://react.dev/)
- [TypeScript公式ドキュメント](https://www.typescriptlang.org/)
- [Vite公式ドキュメント](https://vitejs.dev/)
- [React Router公式ドキュメント](https://reactrouter.com/)
