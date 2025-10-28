# AI完全自動駆動開発ガイド

このドキュメントは、AIがこのUIコンポーネントライブラリをLaravel + Inertia.jsプロジェクトに自動統合するためのガイドです。

## 概要

このプロジェクトは、AI自動駆動開発を前提に設計されています。AIは以下のファイルを読み込むだけで、完全なLaravel + Inertia.jsアプリケーションを生成できます。

## ディレクトリ構造

```
ui-components/
├── src/
│   ├── config/
│   │   └── routes.config.ts          # ★ ルート設定（AI参照）
│   ├── pages/
│   │   └── templates/                # ★ テンプレートコンポーネント
│   │       ├── auth/                 # 認証関連
│   │       ├── dashboard/            # ダッシュボード
│   │       ├── data/                 # データ管理
│   │       ├── info/                 # 情報ページ
│   │       └── error/                # エラーページ
│   ├── components/                   # 共通コンポーネント
│   ├── hooks/                        # カスタムフック
│   └── styles/                       # スタイル
└── AI_INTEGRATION_GUIDE.md           # ★ このファイル
```

## AI自動生成フロー

### ステップ1: 設定ファイルの読み込み

AIは `src/config/routes.config.ts` を読み込みます。このファイルには以下が定義されています：

- ルートパス（例: `/login`, `/dashboard`）
- Laravel route name（例: `login`, `dashboard`）
- テンプレートコンポーネントのパス
- Inertia.jsページコンポーネントの出力先
- 認証要否、ミドルウェア設定

### ステップ2: Laravelルートファイルの生成

AIは `routes.config.ts` を元に、以下のファイルを自動生成します：

**生成先: `routes/web.php`**

```php
<?php

use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

// ========================================
// ゲスト専用ルート（認証前）
// ========================================
Route::middleware('guest')->group(function () {
    Route::get('/login', function () {
        return Inertia::render('Auth/LoginPage', [
            'hideNavigation' => true,
        ]);
    })->name('login');

    Route::get('/signup', function () {
        return Inertia::render('Auth/SignupPage', [
            'hideNavigation' => true,
        ]);
    })->name('register');

    Route::get('/signup-confirm', function () {
        return Inertia::render('Auth/SignupConfirmPage', [
            'hideNavigation' => true,
        ]);
    })->name('register.confirm');

    Route::get('/signup-complete', function () {
        return Inertia::render('Auth/SignupCompletePage', [
            'hideNavigation' => true,
        ]);
    })->name('register.complete');

    Route::get('/forgot-password', function () {
        return Inertia::render('Auth/ForgotPasswordPage', [
            'hideNavigation' => true,
        ]);
    })->name('password.request');

    Route::get('/reset-password/{token}', function ($token) {
        return Inertia::render('Auth/ResetPasswordPage', [
            'token' => $token,
            'hideNavigation' => true,
        ]);
    })->name('password.reset');
});

// ========================================
// 認証済みユーザー専用ルート
// ========================================
Route::middleware(['auth', 'verified'])->group(function () {
    Route::get('/dashboard', function () {
        return Inertia::render('Dashboard/DashboardPage', [
            'stats' => [],
            'notifications' => [],
        ]);
    })->name('dashboard');

    Route::get('/data/list', function () {
        return Inertia::render('Data/DataListPage');
    })->name('data.index');

    Route::get('/data/form', function () {
        return Inertia::render('Data/DataFormPage');
    })->name('data.create');

    Route::get('/statistics', function () {
        return Inertia::render('Statistics/StatisticsPage');
    })->name('statistics.index');

    Route::get('/settings', function () {
        return Inertia::render('Settings/SettingsPage');
    })->name('settings.index');

    Route::get('/notifications', function () {
        return Inertia::render('Notifications/NotificationsPage');
    })->name('notifications.index');
});

// ========================================
// 公開ルート
// ========================================
Route::get('/qna', function () {
    return Inertia::render('Info/QnaPage');
})->name('qna');

Route::get('/privacy', function () {
    return Inertia::render('Info/PrivacyPage');
})->name('privacy');

Route::get('/terms', function () {
    return Inertia::render('Info/TermsPage');
})->name('terms');

Route::get('/commercial', function () {
    return Inertia::render('Info/CommercialPage');
})->name('commercial');

// ========================================
// エラーページ
// ========================================
Route::get('/404', function () {
    return Inertia::render('Error/NotFoundPage');
})->name('404');

Route::get('/500', function () {
    return Inertia::render('Error/ServerErrorPage');
})->name('500');

Route::get('/maintenance', function () {
    return Inertia::render('Error/MaintenancePage');
})->name('maintenance');
```

### ステップ3: Inertia.jsページコンポーネントの生成

AIは各テンプレートコンポーネントをラップするInertia.jsページコンポーネントを生成します。

**生成例: `resources/js/Pages/Auth/LoginPage.tsx`**

```tsx
import React from 'react';
import LoginPageTemplate from '@/Components/templates/auth/LoginPage';
import { router, useForm } from '@inertiajs/react';

export default function LoginPage() {
    const { data, setData, post, processing, errors } = useForm({
        email: '',
        password: '',
        remember: false,
    });

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        post(route('login'));
    };

    const handleNavigateToSignup = () => {
        router.visit(route('register'));
    };

    const handleNavigateToForgotPassword = () => {
        router.visit(route('password.request'));
    };

    return (
        <LoginPageTemplate
            email={data.email}
            password={data.password}
            rememberMe={data.remember}
            loginErrors={errors}
            onEmailChange={(value) => setData('email', value)}
            onPasswordChange={(value) => setData('password', value)}
            onRememberMeChange={(checked) => setData('remember', checked)}
            onSubmit={handleSubmit}
            onNavigateToSignup={handleNavigateToSignup}
            onNavigateToForgotPassword={handleNavigateToForgotPassword}
            hideNavigation={true}
        />
    );
}
```

**生成例: `resources/js/Pages/Dashboard/DashboardPage.tsx`**

```tsx
import React from 'react';
import DashboardPageTemplate from '@/Components/templates/dashboard/DashboardPage';
import { router } from '@inertiajs/react';

interface DashboardPageProps {
    stats: any[];
    notifications: any[];
}

export default function DashboardPage({ stats, notifications }: DashboardPageProps) {
    const handleNavigate = (page: string) => {
        const routeMap: Record<string, string> = {
            'dashboard': route('dashboard'),
            'data-list': route('data.index'),
            'statistics': route('statistics.index'),
            'settings': route('settings.index'),
            'notifications': route('notifications.index'),
        };

        const targetRoute = routeMap[page];
        if (targetRoute) {
            router.visit(targetRoute);
        }
    };

    const handleLogout = () => {
        router.post(route('logout'));
    };

    return (
        <DashboardPageTemplate
            stats={stats}
            notifications={notifications}
            onNavigate={handleNavigate}
            onLogout={handleLogout}
        />
    );
}
```

### ステップ4: 共通コンポーネントのコピー

AIは以下のディレクトリを `resources/js/Components/` にコピーします：

```
ui-components/src/components/     → resources/js/Components/
ui-components/src/hooks/          → resources/js/Hooks/
ui-components/src/styles/         → resources/js/Styles/
ui-components/src/pages/templates/ → resources/js/Components/templates/
```

### ステップ5: TypeScript設定

AIは以下のTypeScript設定を生成します：

**生成先: `resources/js/tsconfig.json`**

```json
{
    "compilerOptions": {
        "target": "ES2020",
        "useDefineForClassFields": true,
        "lib": ["ES2020", "DOM", "DOM.Iterable"],
        "module": "ESNext",
        "skipLibCheck": true,

        /* Bundler mode */
        "moduleResolution": "bundler",
        "allowImportingTsExtensions": true,
        "resolveJsonModule": true,
        "isolatedModules": true,
        "noEmit": true,
        "jsx": "react-jsx",

        /* Linting */
        "strict": true,
        "noUnusedLocals": true,
        "noUnusedParameters": true,
        "noFallthroughCasesInSwitch": true,

        /* Path mapping */
        "baseUrl": ".",
        "paths": {
            "@/*": ["./*"]
        }
    },
    "include": ["**/*.ts", "**/*.tsx"],
    "references": [{ "path": "./tsconfig.node.json" }]
}
```

## AI自動生成コマンド例

AIが実行するべきコマンドのシーケンス：

```bash
# 1. routes.config.tsを読み込み
# 2. routes/web.phpを生成
# 3. 各Inertia.jsページコンポーネントを生成
# 4. 共通コンポーネントをコピー
# 5. package.jsonの依存関係を更新
```

## 重要な設計原則

### 1. ゼロ依存の原則

テンプレートコンポーネントは以下に依存しません：

- ❌ React Router
- ❌ Redux / Zustand
- ❌ 外部ルーティングライブラリ

すべてのナビゲーションはコールバック経由で制御可能です。

### 2. Prop-driven Navigation

すべての画面遷移は`onNavigate`、`onSubmit`などのコールバックで制御：

```tsx
<LoginPageTemplate
    onNavigateToSignup={() => router.visit(route('register'))}
    onNavigateToForgotPassword={() => router.visit(route('password.request'))}
    onSubmit={(e) => { e.preventDefault(); post(route('login')); }}
/>
```

### 3. hideNavigationフラグ

デモ用のナビゲーションを非表示にするため、すべてのテンプレートで`hideNavigation={true}`を設定：

```tsx
<LoginPageTemplate hideNavigation={true} />
```

### 4. カスタムバリデーション

すべてのフォームは`noValidate`属性を使用し、カスタムバリデーションのみを実行：

- HTMLデフォルトバリデーションは無効
- `required`プロップによる赤いアスタリスク表示
- カスタムバリデーション関数による検証

## AIが参照すべきファイル

### 必須参照ファイル

1. **`src/config/routes.config.ts`**
   - ルート定義の単一情報源
   - AIはこのファイルからすべてのルート情報を取得

2. **`CLAUDE.md`**
   - プロジェクト全体の設計思想
   - コーディング規約
   - コンポーネント設計パターン

3. **`AI_INTEGRATION_GUIDE.md`** (このファイル)
   - Laravel + Inertia.js統合手順
   - 自動生成のテンプレート

### テンプレートコンポーネントの仕様

各テンプレートコンポーネント（`src/pages/templates/`配下）には、以下の情報がJSDocコメントで記載されています：

```tsx
/**
 * LoginPage Component
 *
 * ユーザーログイン画面テンプレート
 *
 * **React Router不要**: このコンポーネントはReact Routerに依存しません
 * **Inertia.js対応**: そのまま使用可能
 *
 * @example Laravel + Inertia.js
 * return Inertia::render('Auth/LoginPage', [
 *   'hideNavigation' => true,
 * ]);
 */
```

AIはこれらのコメントを読み込み、適切なLaravelコントローラーとInertia.jsページを生成します。

## トラブルシューティング（AI向け）

### 問題: パスの不一致

**症状**: `/templates/login`にアクセスしようとする

**原因**: デモ用のフォールバックナビゲーションが動作している

**解決策**: すべてのナビゲーションコールバック（`onNavigate`、`onNavigateToLogin`等）を適切に実装する

### 問題: バリデーションが二重実行される

**症状**: HTMLバリデーションとカスタムバリデーションが両方動く

**原因**: `noValidate`属性が設定されていない

**解決策**: すべての`<form>`タグに`noValidate`を追加済み（修正済み）

### 問題: スタイルが適用されない

**症状**: コンポーネントが正しく表示されない

**原因**: CSSファイルがインポートされていない

**解決策**:
```tsx
// resources/js/app.tsx
import '@/dev-kit/ui-components/src/index.css';  // これ1つだけでOK

createInertiaApp({
    // ... Inertia設定
});
```

**重要**:
- ✅ `index.css` **1つだけ**をimportすれば、すべてのスタイルが適用されます
- ❌ 個別のCSSファイル（`Button.css`、`InputField.css`等）を個別にimportする必要は**ありません**

## まとめ

このUIコンポーネントライブラリは、AI完全自動駆動開発のために以下のように設計されています：

1. **設定ファイル駆動**: `routes.config.ts`が単一情報源
2. **ゼロ依存**: React Router等に依存しない
3. **コールバック制御**: すべての画面遷移はコールバック経由
4. **明示的な仕様**: JSDocコメントによる詳細な説明
5. **型安全**: TypeScriptによる完全な型定義

AIはこれらのファイルを読み込むだけで、完全なLaravel + Inertia.jsアプリケーションを自動生成できます。
