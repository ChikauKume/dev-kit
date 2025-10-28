# Laravel + Inertia.js統合ガイド（AI自動駆動開発対応）

このドキュメントは、ui-componentsライブラリをLaravel + Inertia.jsプロジェクトに統合する際の**完全自動化**を実現するためのガイドです。

## ✅ 完全対応済み

**すべての認証テンプレート**がInertia.js標準Props（`errors`、`flash`）に完全対応しました：

- ✅ LoginPage
- ✅ SignupPage
- ✅ SignupConfirmPage
- ✅ SignupCompletePage
- ✅ ForgotPasswordPage
- ✅ ResetPasswordPage

## 🎯 設計思想：ゼロコンフィグ原則

Laravel側で特別な設定やprop渡しを**一切不要**にする設計：

```php
// ❌ 従来の実装（Laravel側の負担大）
return Inertia::render('Auth/LoginPage', [
    'loginErrors' => session('errors')->getBag('default')->toArray(),
    'loginFormError' => session('error'),
    'hideNavigation' => true,
]);

// ✅ 新実装（Laravel側はシンプル）
return Inertia::render('Auth/LoginPage', [
    'hideNavigation' => true,
]);
// errors と flash は Inertia.js が自動的に渡す
```

## 📚 Inertia.js標準Props自動対応

| Prop | 型 | Laravel側の設定方法 |
|------|---|-------------------|
| `errors` | `Record<string, string>` | `$request->validate()` で自動設定 |
| `flash.success` | `string` | `->with('success', '...')` |
| `flash.error` | `string` | `->with('error', '...')` |
| `flash.status` | `string` | `->with('status', '...')` |

## 🚀 導入手順

### 1. CSS読込の設定（最重要）

**必須**: アプリケーションのエントリーポイントで、ui-componentsのCSSを読み込んでください。

```tsx
// resources/js/app.tsx
import '@/dev-kit/ui-components/src/index.css';

createInertiaApp({
    // ... Inertia設定
});
```

**重要**:
- ✅ `index.css` **1つだけ**をimportすれば、すべてのスタイルが適用されます
- ❌ 個別のCSSファイル（`Button.css`等）を個別にimportする必要は**ありません**

### 2. HandleInertiaRequestsの設定

```php
// app/Http/Middleware/HandleInertiaRequests.php
public function share(Request $request): array
{
    return array_merge(parent::share($request), [
        'auth' => ['user' => $request->user()],
        'flash' => [
            'success' => fn () => $request->session()->get('success'),
            'error' => fn () => $request->session()->get('error'),
            'status' => fn () => $request->session()->get('status'),
        ],
    ]);
}
```

### 3. Laravelコントローラー例

```php
// app/Http/Controllers/AuthController.php
public function login(Request $request)
{
    // ✅ バリデーションエラーは自動的に errors に設定
    $credentials = $request->validate([
        'email' => 'required|email',
        'password' => 'required|min:8',
    ]);

    if (Auth::attempt($credentials, $request->boolean('remember'))) {
        return redirect()->intended('/dashboard')
            ->with('success', 'ログインに成功しました');  // ✅ flash.success
    }

    return back()->with('error', 'ログインに失敗しました');  // ✅ flash.error
}
```

### 4. Inertia.jsページコンポーネント例

```tsx
// resources/js/Pages/Auth/LoginPage.tsx
import LoginPageTemplate from '@/Components/templates/auth/LoginPage';
import { router, useForm } from '@inertiajs/react';

export default function LoginPage({ errors, flash }) {
    const { data, setData, post } = useForm({ email: '', password: '', remember: false });

    return (
        <LoginPageTemplate
            email={data.email}
            password={data.password}
            rememberMe={data.remember}
            errors={errors}  // ✅ Inertia標準
            flash={flash}    // ✅ Inertia標準
            onEmailChange={(v) => setData('email', v)}
            onPasswordChange={(v) => setData('password', v)}
            onRememberMeChange={(v) => setData('remember', v)}
            onSubmit={(e) => { e.preventDefault(); post(route('login')); }}
            onNavigateToForgotPassword={() => router.visit(route('password.request'))}
            hideNavigation={true}
        />
    );
}
```

## 💡 ベストプラクティス

```php
// ✅ Good: Inertia標準に従う
$request->validate([...]);
return back()->with('error', 'エラーメッセージ');

// ❌ Bad: 独自prop名は使わない
return back()->with('loginError', 'エラー');  // テンプレートが認識できない
```

詳細は`AI_INTEGRATION_GUIDE.md`を参照してください。
