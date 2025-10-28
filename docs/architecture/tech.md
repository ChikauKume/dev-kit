# 技術スタック

## 基本情報

- **プロジェクト種別**: Webアプリケーション
- **アプリケーション名**: video-platform
- **開発手法**: SDD（仕様書駆動開発） + Spec-Workflow

## 技術スタック一覧

| 分類 | 技術 | 備考 |
|------|------|------|
| **バックエンド** | Laravel (PHP) | Clean Architecture（4層構造） |
| **フロントエンド** | React + TypeScript + Inertia.js | SPA体験をサーバーサイド中心で実現 |
| **スタイリング** | CSS変数デザインシステム | `dev-kit/ui-components/`のみ使用 |
| **データベース** | MySQL（主要DB）、Redis（キャッシュ・セッション） | - |
| **実行環境** | Laravel Sail (Docker) | 開発環境統一 |
| **認証** | Laravel Breeze | - |
| **ビルドツール** | Vite | ホットリロード対応 |
| **テスト** | PHPUnit、Playwright MCP | 単体・統合・E2E |
| **品質管理** | PHPStan、PHP CS Fixer | 静的解析、コード整形 |
| **バージョン管理** | Git (GitHub Flow) | プルリクエストベース |

## アーキテクチャ

### Clean Architecture（4層構造）

```
Presentation層（表現層）
    ↓ 依存
Application層（用途層）
    ↓ 依存
Domain層（領域層）
    ↑ 実装
Infrastructure層（基盤層）
```

**特徴**:
- Domain層・Application層: Laravel非依存（純粋なPHP）
- Infrastructure層・Presentation層: Laravel依存
- 依存性逆転の原則（DIP）を厳守
- モジュール単位での機能分離

## UIコンポーネント

**🚨 絶対ルール**: すべてのUI実装は`dev-kit/ui-components/src/components/`から使用

### 概要

- **ライブラリ名**: UI Components Library (React + TypeScript)
- **テーマ**: ネイビーベースの統一デザインシステム
- **アイコン**: 200個以上のSVGアイコン（27カテゴリ）
- **ページテンプレート**: 19種類（動的6種、静的13種）
- **スタイリング**: CSS変数（Tailwind CSS禁止）

---

### 基本コンポーネント

**禁止事項**:
- ❌ `resources/js/Components/`に独自UIコンポーネント作成
- ❌ インタラクティブHTML要素の直接使用: `<input>`, `<textarea>`, `<select>`, `<button>`
- ❌ Tailwind CSSの使用

**許可事項**:
- ✅ レイアウト・構造要素: `<div>`, `<main>`, `<section>`, `<header>`, `<footer>`, `<nav>`
- ✅ テキスト要素: `<h1>`~`<h6>`, `<p>`, `<span>`, `<ul>`, `<li>`

#### 主要コンポーネント一覧

| カテゴリ | コンポーネント | 用途 |
|---------|-------------|------|
| **Button** | PrimaryButton, SecondaryButton, TextButton, DangerButton | アクション実行 |
| **Form** | InputField, PasswordField, TextArea, Select, RadioButton, Checkbox | 入力フォーム |
| **Message** | Alert, Toast, Modal | 通知・確認ダイアログ |
| **Table** | DataTable, ResponsiveTable | データ一覧表示 |
| **Navigation** | TabNavigation, Breadcrumb, Sidebar | ページ遷移 |
| **Layout** | InfoPageWrapper（PC/SPレイアウト）, Container, Grid | 画面構成 |
| **Icon** | Icon (200+種類) | アイコン表示 |

**詳細**: `dev-kit/ui-components/README.md`

---

### ページテンプレート

**動的テンプレート（データ駆動型）** - Props経由でデータを渡してレンダリング:

| テンプレート | パス | 用途 | 主な機能 |
|-------------|------|------|----------|
| **DashboardPage** | `templates/dashboard/DashboardPage.tsx` | ダッシュボード | 統計カード、アクティビティ、クイックアクション |
| **SettingsPage** | `templates/settings/SettingsPage.tsx` | 設定画面 | プロフィール編集（インライン編集）、Flash message |
| **NotificationsPage** | `templates/notifications/NotificationsPage.tsx` | 通知一覧 | 通知管理（既読/未読）、フィルタリング |
| **ListPage** | `templates/data/ListPage.tsx` | データ一覧 | テーブル、ソート、検索、ページネーション |
| **DetailPage** | `templates/data/DetailPage.tsx` | データ詳細 | セクション別フィールド表示、パンくずリスト |
| **FormPage** | `templates/data/FormPage.tsx` | データ作成・編集 | 動的フォーム、バリデーション |

**静的テンプレート（主に固定コンテンツ表示）**:

| カテゴリ | テンプレート | パス | 用途 |
|---------|-------------|------|------|
| **認証** (6種) | LoginPage | `templates/auth/LoginPage.tsx` | ログイン |
| | SignupPage | `templates/auth/SignupPage.tsx` | 新規登録 |
| | SignupConfirmPage | `templates/auth/SignupConfirmPage.tsx` | 新規登録確認 |
| | SignupCompletePage | `templates/auth/SignupCompletePage.tsx` | 新規登録完了 |
| | ForgotPasswordPage | `templates/auth/ForgotPasswordPage.tsx` | パスワード忘れ |
| | ResetPasswordPage | `templates/auth/ResetPasswordPage.tsx` | パスワードリセット |
| **情報** (4種) | QnaPage | `templates/info/QnaPage.tsx` | よくある質問 |
| | PrivacyPage | `templates/info/PrivacyPage.tsx` | プライバシーポリシー |
| | TermsPage | `templates/info/TermsPage.tsx` | 利用規約 |
| | CommercialPage | `templates/info/CommercialPage.tsx` | 特定商取引法 |
| **エラー** (3種) | Error404Page | `templates/error/Error404Page.tsx` | 404エラー |
| | Error505Page | `templates/error/Error505Page.tsx` | 505エラー |
| | MaintenancePage | `templates/error/MaintenancePage.tsx` | メンテナンス |

---

### カスタムフック

**フォーム管理**:

| フック | ファイル | 機能 |
|-------|---------|------|
| **useDynamicForm** | `hooks/forms/useDynamicForm.ts` | フォーム状態管理 + 統合バリデーション + 送信処理 |
| **useDynamicValidation** | `hooks/forms/useDynamicValidation.ts` | 15種類の検証ルール対応（required, email, min/max, pattern, custom等） |

**テーブル管理**:

| フック | ファイル | 機能 |
|-------|---------|------|
| **useDynamicTable** | `hooks/tables/useDynamicTable.ts` | ソート、選択、ページネーション |
| **useTableSearch** | `hooks/tables/useTableSearch.ts` | 検索・フィルター管理（クライアント/サーバー両対応） |

**UI状態管理**:

| フック | ファイル | 機能 |
|-------|---------|------|
| **useViewMode** | `hooks/useViewMode.ts` | PC/SPモード永続化（localStorage） |

**詳細**: `dev-kit/ui-components/src/hooks/README.md`

---

### Laravel + Inertia.js統合パターン

#### Props駆動のデータ渡し

```php
// Controller例
use Inertia\Inertia;

class UserController extends Controller
{
    public function index(Request $request)
    {
        $users = User::paginate(20);

        return Inertia::render('templates/data/ListPage', [
            'title' => 'ユーザー一覧',
            'columns' => [
                ['key' => 'id', 'label' => 'ID', 'type' => 'number', 'sortable' => true],
                ['key' => 'name', 'label' => '名前', 'type' => 'text', 'sortable' => true],
                ['key' => 'email', 'label' => 'メール', 'type' => 'email', 'sortable' => true],
            ],
            'data' => $users->items(),
            'pagination' => [
                'currentPage' => $users->currentPage(),
                'lastPage' => $users->lastPage(),
                'total' => $users->total(),
            ]
        ]);
    }
}
```

#### TypeScriptインターフェースに従った型安全なデータ構造

- Laravel側: `Inertia::render()`でPropsインターフェース準拠のデータを渡す
- React側: テンプレートがPropsを受け取って自動レンダリング
- **Clean Architecture対応**: テンプレートは純粋なPresentation Layer

#### メリット

- ✅ TypeScript型定義に従ってデータを渡すだけで動作
- ✅ Clean Architecture対応（テンプレートはPresentation Layer）
- ✅ 型安全でコンパイル時エラー検出
- ✅ ビジネスロジックはLaravel側のUse Case層に集約

**詳細**: `dev-kit/ui-components/LARAVEL_INTEGRATION_GUIDE.md`

---

### 統合ガイド参照先

| ドキュメント | パス | 内容 |
|------------|------|------|
| **README** | `dev-kit/ui-components/README.md` | 概要、コンポーネント一覧、アイコン |
| **Laravel統合ガイド** | `dev-kit/ui-components/LARAVEL_INTEGRATION_GUIDE.md` | セットアップ手順（8ステップ）、全19テンプレートのデータ渡し方、トラブルシューティング |
| **実装例ガイド** | `dev-kit/ui-components/src/pages/templates/INTEGRATION_GUIDE.md` | 5つの統合パターン、コンポーネント統合詳細 |
| **カスタムフック詳細** | `dev-kit/ui-components/src/hooks/README.md` | useDynamicForm、useDynamicValidation、useDynamicTable、useTableSearch使用方法 |

---

### 開発時の注意事項

1. **CSS読込必須**: app.tsxで `import '@/dev-kit/ui-components/src/index.css';` を追加
2. **Tailwind CSS削除必須**: 初期セットアップ時にTailwind CSSを完全削除（`CLAUDE.md`参照）
3. **E2Eテストでの検証**: ui-componentsの使用を検証（`.form-input`, `.form-error`, `.alert`等のクラス名確認）
4. **インポートパス**: `@/dev-kit/ui-components/src/components/` からインポート

## 開発環境

### 環境構成

- **コンテナ**: Laravel Sail (Docker Compose)
- **パッケージ管理**: Composer (PHP), npm (JavaScript)
- **ポート管理**:
  - Laravel: 80
  - Vite: 5173
  - MySQL: 3306
  - Redis: 6379

### テスト方針

- **テストメソッド名**: 英語のみ使用
- **テスト比率**: 正常系30-40% / 異常系60-70%
- **カバレッジ目標**: 全体80%以上、Domain層90%以上
- **3層のテスト**: 単体テスト、統合テスト、E2Eテスト
- **先祖帰り検出**: Git管理されたJSON結果で過去との比較
- **レポート形式**: JSON、Excel、PDF（詳細は `docs/test-reports/README.md`）
- **実行コマンド**: `./vendor/bin/sail artisan test:run --spec={spec-name}`

## 性能要件（MVP段階）

- **動画読み込み開始**: 3秒以内
- **画面遷移**: 2秒以内
- **検索応答時間**: 1秒以内
- **同時視聴者数**: 100人対応
- **動画ファイルサイズ**: 最大2GB

## セキュリティ

### 基本対策

- パスワードハッシュ化（Bcrypt）
- CSRF対策（Laravel標準）
- XSS対策（Bladeエスケープ）
- SQLインジェクション対策（Eloquent ORM）
- ファイルアップロード検証（形式・サイズ）

### ユーザー列挙攻撃対策

- **ログイン認証エラー**: 存在しないメールでも誤パスワードでも同じメッセージ
  - エラーメッセージ: 「メールアドレスまたはパスワードが正しくありません」
- **パスワードリセット**: 存在しないメールでも成功メッセージを表示
  - 成功メッセージ: 「パスワードリセットリンクを送信しました」
  - 実装: UIでは成功表示、バックエンドでは実際に送信しない

---

## バリデーション実装方針

**プロジェクト全体の標準**: すべてのフォーム実装において、**フロントエンドとバックエンドの両方でバリデーション**を実施します（二段階バリデーション戦略）。

### 概要

- **第一段階**: フロントエンドバリデーション（React/TypeScript + useDynamicForm）
  - 目的: UX向上、即座のフィードバック
  - 検証: 必須項目、メール形式、文字数制限、パスワード一致等
- **第二段階**: バックエンドバリデーション（Laravel FormRequest + Domain層）
  - 目的: セキュリティ確保、データ整合性保証
  - 検証: フロントエンドと同じルール + DB制約 + ビジネスロジック

### 重要ポイント

1. **バリデーション実装方式**:
   - ✅ フロントエンド: ui-componentsの`useDynamicForm`フックのみ使用
   - ❌ **HTMLネイティブのバリデーション属性（`required`, `type="email"`, `minlength`, `maxlength`, `pattern`等）は使用禁止**
   - 理由: バリデーションロジックの一元管理、日本語エラーメッセージの統一、バックエンドとの完全一致

2. **バリデーションメッセージの統一**:
   - 日本語、末尾にピリオド（。）必須
   - フロントエンドとバックエンドで完全一致
   - `lang/ja/validation.php`で一元管理

3. **セキュリティ原則**:
   - フロントエンドのバリデーションを信頼しない
   - バックエンドは「フロントエンドバリデーションが存在しない」前提で実装
   - ValidationExceptionを握りつぶさない（catch → re-throw）

4. **適用範囲**: すべてのフォーム実装（user-authentication、動画アップロード、プロフィール編集等）

**詳細**: `dev-kit/scripts/validations/frontend.sh` で自動検証

## MVP段階での制約

| 制約 | 影響 | 今後の対応 |
|------|------|----------|
| **動画形式**: MP4のみ | ユーザーが事前変換必要 | 第2フェーズで動画変換機能 |
| **リアルタイム更新**: なし | ページリロード必須 | 第2フェーズでWebSocket |
| **同時視聴者数**: 100人まで | それ以上で性能低下 | CDN導入、負荷分散 |
| **検索機能**: タイトルのみ | 説明文検索不可 | 第2フェーズでElasticsearch |
