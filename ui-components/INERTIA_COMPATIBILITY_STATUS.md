# Inertia.js標準Props対応状況

最終更新: 2025-10-21

## ✅ 完全対応済み（100%）

すべての認証テンプレートがInertia.js標準Props（`errors`、`flash`）に完全対応しました。

### 認証テンプレート（6/6）

| テンプレート | 対応状況 | errors自動マッピング | flash自動マッピング | BaseAuthPageProps |
|------------|---------|-------------------|------------------|------------------|
| LoginPage | ✅ 完了 | ✅ | ✅ | ✅ |
| SignupPage | ✅ 完了 | ✅ | ✅ | ✅ |
| SignupConfirmPage | ✅ 完了 | N/A | ✅ | ✅ |
| SignupCompletePage | ✅ 完了 | N/A | ✅ | ✅ |
| ForgotPasswordPage | ✅ 完了 | ✅ | ✅ | ✅ |
| ResetPasswordPage | ✅ 完了 | ✅ | ✅ | ✅ |

## 🎯 実装パターン

すべてのテンプレートで以下の統一パターンを実装：

### 1. 型定義の拡張

```typescript
import { BaseAuthPageProps } from '../../../types/inertia';

interface LoginPageProps extends BaseAuthPageProps {
  // テンプレート固有のprops
}
```

### 2. errors自動マッピング

```typescript
// ✅ Inertia.js標準Props自動マッピング
const loginErrors = {
  email: props.errors?.email || props.loginErrors?.email || internalErrors.email,
  password: props.errors?.password || props.loginErrors?.password || internalErrors.password,
};
```

### 3. flash自動マッピング

```typescript
// フラッシュメッセージの自動マッピング
const loginFormError = props.flash?.error || props.loginFormError || internalFormError;
```

## 📝 Laravel側の実装例

### 最小限の実装（推奨）

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

public function showLoginForm()
{
    return Inertia::render('Auth/LoginPage', [
        'hideNavigation' => true,  // これだけでOK
    ]);
}
```

## 🔄 後方互換性

旧実装のカスタムprops（`loginErrors`、`signupErrors`等）も引き続きサポート：

```typescript
// どちらの実装でも動作
props.errors?.email          // ✅ Inertia標準（推奨）
props.loginErrors?.email     // ✅ 旧実装（互換性維持）
```

## 🚀 利点

1. **Laravel側の実装が超シンプル** - カスタムprop不要
2. **Inertia標準に準拠** - どんなLaravelプロジェクトでもそのまま使える
3. **後方互換性** - 既存の実装も動作する
4. **AI自動生成が容易** - 標準パターンのみで統一

## 📚 関連ドキュメント

- [LARAVEL_INTEGRATION_GUIDE.md](./LARAVEL_INTEGRATION_GUIDE.md) - Laravel統合ガイド
- [AI_INTEGRATION_GUIDE.md](./AI_INTEGRATION_GUIDE.md) - AI自動駆動開発ガイド
- [src/types/inertia.ts](./src/types/inertia.ts) - Inertia型定義
