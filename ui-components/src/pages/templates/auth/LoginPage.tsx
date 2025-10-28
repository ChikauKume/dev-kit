import React, { useState } from 'react';
import Icon from '../../../components/icons/Icon';
import InputField from '../../../components/forms/InputField';
import Checkbox from '../../../components/forms/Checkbox';
import TemplateNavigation from '../../../components/navigation/TemplateNavigation';
import { useViewMode } from '../../../hooks/useViewMode';
import { BaseAuthPageProps } from '../../../types/inertia';

/**
 * LoginPage Component
 *
 * ログイン画面テンプレート - Inertia.js標準Props完全対応
 *
 * **React Router不要**: このコンポーネントはReact Routerに依存しません
 * **Inertia.js標準Props自動対応**: errorsとflashを自動的に読み取ります
 *
 * @example Laravel + Inertia.js（最もシンプルな実装）
 * ```php
 * // app/Http/Controllers/AuthController.php
 * public function showLoginForm()
 * {
 *     return Inertia::render('Auth/LoginPage', [
 *         'hideNavigation' => true,
 *     ]);
 * }
 *
 * public function login(Request $request)
 * {
 *     $request->validate([
 *         'email' => 'required|email',
 *         'password' => 'required|min:8',
 *     ]);
 *     // バリデーションエラーは自動的にerrorsプロパティに設定される
 *
 *     // 認証失敗時
 *     return back()->with('error', 'メールアドレスまたはパスワードが正しくありません');
 *     // → flash.errorに自動設定される
 * }
 * ```
 *
 * @example React側のカスタマイズ（Inertia.jsページコンポーネント）
 * ```tsx
 * import LoginPageTemplate from '@/Components/templates/auth/LoginPage';
 * import { router, useForm } from '@inertiajs/react';
 *
 * export default function LoginPage({ errors, flash }) {
 *     const { data, setData, post } = useForm({ email: '', password: '', remember: false });
 *
 *     return (
 *         <LoginPageTemplate
 *             email={data.email}
 *             password={data.password}
 *             rememberMe={data.remember}
 *             errors={errors}  // Inertia標準
 *             flash={flash}    // Inertia標準
 *             onEmailChange={(v) => setData('email', v)}
 *             onPasswordChange={(v) => setData('password', v)}
 *             onRememberMeChange={(v) => setData('remember', v)}
 *             onSubmit={(e) => { e.preventDefault(); post(route('login')); }}
 *             onNavigateToForgotPassword={() => router.visit(route('password.request'))}
 *             hideNavigation={true}
 *         />
 *     );
 * }
 * ```
 */
interface LoginPageProps extends BaseAuthPageProps {
  email?: string;
  password?: string;
  rememberMe?: boolean;
  onEmailChange?: (value: string) => void;
  onPasswordChange?: (value: string) => void;
  onRememberMeChange?: (checked: boolean) => void;
  onEmailBlur?: (value: string) => void;
  onPasswordBlur?: (value: string) => void;
  onSubmit?: (e: React.FormEvent<HTMLFormElement>) => void;
  onNavigateToForgotPassword?: () => void;
  onNavigateToSignup?: () => void;
}

const LoginPage: React.FC<LoginPageProps> = (props) => {
  // View mode state for PC/SP toggle
  const [viewMode, setViewMode] = useViewMode();

  // Internal state for standalone mode
  const [internalEmail, setInternalEmail] = useState('');
  const [internalPassword, setInternalPassword] = useState('');
  const [internalRememberMe, setInternalRememberMe] = useState(false);
  const [internalErrors, setInternalErrors] = useState<{
    email?: string;
    password?: string;
  }>({});
  const [internalFormError, setInternalFormError] = useState<string | undefined>();

  // Use prop values if provided, otherwise use internal state
  const email = props.email !== undefined ? props.email : internalEmail;
  const password = props.password !== undefined ? props.password : internalPassword;
  const rememberMe = props.rememberMe !== undefined ? props.rememberMe : internalRememberMe;

  // ✅ Inertia.js標準Props自動マッピング
  // Laravel側のバリデーションエラーを自動的に取得
  const loginErrors = {
    email: props.errors?.email || props.loginErrors?.email || internalErrors.email,
    password: props.errors?.password || props.loginErrors?.password || internalErrors.password,
  };

  // フラッシュメッセージの自動マッピング（旧実装との互換性維持）
  const loginFormError = props.flash?.error || props.loginFormError || internalFormError;

  // Validation helpers
  const validateEmail = (value: string): string | undefined => {
    if (!value) return 'メールアドレスを入力してください';
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
      return '正しいメールアドレスを入力してください';
    }
    return undefined;
  };

  const validatePassword = (value: string): string | undefined => {
    if (!value) return 'パスワードを入力してください';
    if (value.length < 8) return 'パスワードは8文字以上で入力してください';
    return undefined;
  };

  // Event handlers
  const handleEmailChange = (value: string) => {
    if (props.onEmailChange) {
      props.onEmailChange(value);
    } else {
      setInternalEmail(value);
      setInternalErrors(prev => ({ ...prev, email: undefined }));
    }
  };

  const handlePasswordChange = (value: string) => {
    if (props.onPasswordChange) {
      props.onPasswordChange(value);
    } else {
      setInternalPassword(value);
      setInternalErrors(prev => ({ ...prev, password: undefined }));
    }
  };

  const handleRememberMeChange = (checked: boolean) => {
    if (props.onRememberMeChange) {
      props.onRememberMeChange(checked);
    } else {
      setInternalRememberMe(checked);
    }
  };

  const handleEmailBlur = (value: string) => {
    if (props.onEmailBlur) {
      props.onEmailBlur(value);
    } else {
      const error = validateEmail(value);
      setInternalErrors(prev => ({ ...prev, email: error }));
    }
  };

  const handlePasswordBlur = (value: string) => {
    if (props.onPasswordBlur) {
      props.onPasswordBlur(value);
    } else {
      const error = validatePassword(value);
      setInternalErrors(prev => ({ ...prev, password: error }));
    }
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (props.onSubmit) {
      props.onSubmit(e);
    } else {
      // Standalone mode: validate and handle submission
      const emailError = validateEmail(email);
      const passwordError = validatePassword(password);

      if (emailError || passwordError) {
        setInternalErrors({
          email: emailError,
          password: passwordError
        });
        return;
      }

      // Simulate login (in real app, this would call an API)
      console.log('Login attempt:', { email, password, rememberMe });

      // For demo purposes, show an error or navigate
      setInternalFormError(undefined);
      // navigate('/dashboard');
    }
  };

  const handleNavigateToForgotPassword = () => {
    if (props.onNavigateToForgotPassword) {
      props.onNavigateToForgotPassword();
    } else {
      // Fallback: デモ用。本番ではonNavigateToForgotPasswordを渡してください
      if (typeof window !== 'undefined') {
        const currentPath = window.location.pathname;
        const isTemplateRoute = currentPath.startsWith('/templates');
        const routePrefix = isTemplateRoute ? '/templates' : '/pages';
        window.location.href = `${routePrefix}/forgot-password`;
      }
    }
  };

  return (
    <div className={viewMode === 'sp' ? 'force-mobile' : ''}>
      <TemplateNavigation
        hide={props.hideNavigation}
        viewMode={viewMode}
        onViewModeChange={setViewMode}
      />
      <div className="login-screen">
        <div className="login-card">
          <h2 className="login-title">ログイン</h2>
        <p className="login-subtitle">アカウントにログインしてください</p>

        <form className="login-form" onSubmit={handleSubmit} noValidate>
          {loginFormError && (
            <div className="login-error">
              <Icon name="exclamation" className="w-5 h-5" />
              <span>{loginFormError}</span>
            </div>
          )}

          <InputField
            label="メールアドレス"
            type="email"
            name="email"
            value={email}
            onChange={(e) => handleEmailChange(e.target.value)}
            onBlur={(e) => handleEmailBlur(e.target.value)}
            placeholder="example@email.com"
            required
            error={loginErrors.email}
          />

          <InputField
            label="パスワード"
            type="password"
            name="password"
            value={password}
            onChange={(e) => handlePasswordChange(e.target.value)}
            onBlur={(e) => handlePasswordBlur(e.target.value)}
            placeholder="••••••••"
            required
            error={loginErrors.password}
          />

          <label className="remember-me">
            <Checkbox
              checked={rememberMe}
              onChange={(e) => handleRememberMeChange(e.target.checked)}
            />
            <span>ログイン状態を保存する</span>
          </label>

          <div style={{ textAlign: 'center' }}>
            <a
              href="#"
              onClick={(e) => {
                e.preventDefault();
                handleNavigateToForgotPassword();
              }}
              style={{
                color: 'var(--color-primary-600)',
                textDecoration: 'underline',
                fontSize: 'var(--font-size-sm)'
              }}
            >
              パスワードを忘れた場合
            </a>
          </div>

          <button type="submit" className="login-button">
            ログイン
          </button>
        </form>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
