import React, { useState } from 'react';
import InputField from '../../../components/forms/InputField';
import Checkbox from '../../../components/forms/Checkbox';
import TemplateNavigation from '../../../components/navigation/TemplateNavigation';
import { useViewMode } from '../../../hooks/useViewMode';
import { BaseAuthPageProps } from '../../../types/inertia';

/**
 * SignupPage Component
 *
 * 新規アカウント登録画面テンプレート - Inertia.js標準Props完全対応
 *
 * **React Router不要**: このコンポーネントはReact Routerに依存しません
 * **Inertia.js標準Props自動対応**: errorsとflashを自動的に読み取ります
 *
 * @example Laravel + Inertia.js（最もシンプルな実装）
 * ```php
 * // app/Http/Controllers/AuthController.php
 * public function store(Request $request)
 * {
 *     $request->validate([
 *         'name' => 'required|min:2',
 *         'email' => 'required|email|unique:users',
 *         'phone' => 'nullable|regex:/^0\d{9,10}$/',
 *         'password' => 'required|min:8|confirmed',
 *     ]);
 *     // バリデーションエラーは自動的にerrorsプロパティに設定される
 *
 *     // 認証失敗時
 *     return back()->with('error', 'アカウントの作成に失敗しました');
 *     // → flash.errorに自動設定される
 * }
 * ```
 *
 * @example React側のカスタマイズ（Inertia.jsページコンポーネント）
 * ```tsx
 * import SignupPageTemplate from '@/Components/templates/auth/SignupPage';
 * import { router, useForm } from '@inertiajs/react';
 *
 * export default function SignupPage({ errors, flash }) {
 *     const { data, setData, post } = useForm({
 *         name: '', email: '', phone: '', password: '', password_confirmation: ''
 *     });
 *
 *     return (
 *         <SignupPageTemplate
 *             signupName={data.name}
 *             signupEmail={data.email}
 *             signupPhone={data.phone}
 *             signupPassword={data.password}
 *             signupPasswordConfirm={data.password_confirmation}
 *             errors={errors}  // Inertia標準
 *             flash={flash}    // Inertia標準
 *             onNameChange={(v) => setData('name', v)}
 *             onEmailChange={(v) => setData('email', v)}
 *             onPhoneChange={(v) => setData('phone', v)}
 *             onPasswordChange={(v) => setData('password', v)}
 *             onPasswordConfirmChange={(v) => setData('password_confirmation', v)}
 *             onSubmit={(e) => { e.preventDefault(); post(route('register')); }}
 *             onNavigateToLogin={() => router.visit(route('login'))}
 *             hideNavigation={true}
 *         />
 *     );
 * }
 * ```
 */
interface SignupPageProps extends BaseAuthPageProps {
  signupName?: string;
  signupEmail?: string;
  signupPhone?: string;
  signupPassword?: string;
  signupPasswordConfirm?: string;
  agreeToTerms?: boolean;
  signupErrors?: {
    name?: string;
    email?: string;
    phone?: string;
    password?: string;
    passwordConfirm?: string;
    agreeToTerms?: string;
  };
  onNameChange?: (value: string) => void;
  onEmailChange?: (value: string) => void;
  onPhoneChange?: (value: string) => void;
  onPasswordChange?: (value: string) => void;
  onPasswordConfirmChange?: (value: string) => void;
  onAgreeToTermsChange?: (checked: boolean) => void;
  onNameBlur?: (value: string) => void;
  onEmailBlur?: (value: string) => void;
  onPhoneBlur?: (value: string) => void;
  onPasswordBlur?: (value: string) => void;
  onPasswordConfirmBlur?: (value: string) => void;
  onSubmit?: (e: React.FormEvent<HTMLFormElement>) => void;
  onNavigateToLogin?: () => void;
}

const SignupPage: React.FC<SignupPageProps> = (props) => {
  // View mode state for PC/SP toggle
  const [viewMode, setViewMode] = useViewMode();

  // Internal state for standalone mode
  const [internalName, setInternalName] = useState('');
  const [internalEmail, setInternalEmail] = useState('');
  const [internalPhone, setInternalPhone] = useState('');
  const [internalPassword, setInternalPassword] = useState('');
  const [internalPasswordConfirm, setInternalPasswordConfirm] = useState('');
  const [internalAgreeToTerms, setInternalAgreeToTerms] = useState(false);
  const [internalErrors, setInternalErrors] = useState<{
    name?: string;
    email?: string;
    phone?: string;
    password?: string;
    passwordConfirm?: string;
    agreeToTerms?: string;
  }>({});

  // Use prop values if provided, otherwise use internal state
  const signupName = props.signupName !== undefined ? props.signupName : internalName;
  const signupEmail = props.signupEmail !== undefined ? props.signupEmail : internalEmail;
  const signupPhone = props.signupPhone !== undefined ? props.signupPhone : internalPhone;
  const signupPassword = props.signupPassword !== undefined ? props.signupPassword : internalPassword;
  const signupPasswordConfirm = props.signupPasswordConfirm !== undefined ? props.signupPasswordConfirm : internalPasswordConfirm;
  const agreeToTerms = props.agreeToTerms !== undefined ? props.agreeToTerms : internalAgreeToTerms;

  // ✅ Inertia.js標準Props自動マッピング
  // Laravel側のバリデーションエラーを自動的に取得
  const signupErrors = {
    name: props.errors?.name || props.signupErrors?.name || internalErrors.name,
    email: props.errors?.email || props.signupErrors?.email || internalErrors.email,
    phone: props.errors?.phone || props.signupErrors?.phone || internalErrors.phone,
    password: props.errors?.password || props.signupErrors?.password || internalErrors.password,
    passwordConfirm: props.errors?.password_confirmation || props.signupErrors?.passwordConfirm || internalErrors.passwordConfirm,
    agreeToTerms: props.errors?.agreeToTerms || props.signupErrors?.agreeToTerms || internalErrors.agreeToTerms,
  };

  // Validation helpers
  const validateName = (value: string): string | undefined => {
    if (!value) return 'お名前を入力してください';
    if (value.length < 2) return 'お名前は2文字以上で入力してください';
    return undefined;
  };

  const validateEmail = (value: string): string | undefined => {
    if (!value) return 'メールアドレスを入力してください';
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
      return '正しいメールアドレスを入力してください';
    }
    return undefined;
  };

  const validatePhone = (value: string): string | undefined => {
    if (value && !/^0\d{9,10}$/.test(value)) {
      return '正しい電話番号を入力してください';
    }
    return undefined;
  };

  const validatePassword = (value: string): string | undefined => {
    if (!value) return 'パスワードを入力してください';
    if (value.length < 8) return 'パスワードは8文字以上で入力してください';
    return undefined;
  };

  const validatePasswordConfirm = (value: string, password: string): string | undefined => {
    if (!value) return 'パスワード確認を入力してください';
    if (value !== password) return 'パスワードが一致しません';
    return undefined;
  };

  // Event handlers
  const handleNameChange = (value: string) => {
    if (props.onNameChange) {
      props.onNameChange(value);
    } else {
      setInternalName(value);
      setInternalErrors(prev => ({ ...prev, name: undefined }));
    }
  };

  const handleEmailChange = (value: string) => {
    if (props.onEmailChange) {
      props.onEmailChange(value);
    } else {
      setInternalEmail(value);
      setInternalErrors(prev => ({ ...prev, email: undefined }));
    }
  };

  const handlePhoneChange = (value: string) => {
    const numericValue = value.replace(/[^0-9]/g, '');
    if (props.onPhoneChange) {
      props.onPhoneChange(numericValue);
    } else {
      setInternalPhone(numericValue);
      setInternalErrors(prev => ({ ...prev, phone: undefined }));
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

  const handlePasswordConfirmChange = (value: string) => {
    if (props.onPasswordConfirmChange) {
      props.onPasswordConfirmChange(value);
    } else {
      setInternalPasswordConfirm(value);
      setInternalErrors(prev => ({ ...prev, passwordConfirm: undefined }));
    }
  };

  const handleAgreeToTermsChange = (checked: boolean) => {
    if (props.onAgreeToTermsChange) {
      props.onAgreeToTermsChange(checked);
    } else {
      setInternalAgreeToTerms(checked);
      setInternalErrors(prev => ({ ...prev, agreeToTerms: undefined }));
    }
  };

  const handleNameBlur = (value: string) => {
    if (props.onNameBlur) {
      props.onNameBlur(value);
    } else {
      const error = validateName(value);
      setInternalErrors(prev => ({ ...prev, name: error }));
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

  const handlePhoneBlur = (value: string) => {
    if (props.onPhoneBlur) {
      props.onPhoneBlur(value);
    } else {
      const error = validatePhone(value);
      setInternalErrors(prev => ({ ...prev, phone: error }));
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

  const handlePasswordConfirmBlur = (value: string) => {
    if (props.onPasswordConfirmBlur) {
      props.onPasswordConfirmBlur(value);
    } else {
      const error = validatePasswordConfirm(value, signupPassword);
      setInternalErrors(prev => ({ ...prev, passwordConfirm: error }));
    }
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (props.onSubmit) {
      props.onSubmit(e);
    } else {
      // Standalone mode: validate and handle submission
      const nameError = validateName(signupName);
      const emailError = validateEmail(signupEmail);
      const phoneError = validatePhone(signupPhone);
      const passwordError = validatePassword(signupPassword);
      const passwordConfirmError = validatePasswordConfirm(signupPasswordConfirm, signupPassword);
      const agreeToTermsError = !agreeToTerms ? '利用規約に同意してください' : undefined;

      if (nameError || emailError || phoneError || passwordError || passwordConfirmError || agreeToTermsError) {
        setInternalErrors({
          name: nameError,
          email: emailError,
          phone: phoneError,
          password: passwordError,
          passwordConfirm: passwordConfirmError,
          agreeToTerms: agreeToTermsError
        });
        return;
      }

      // Simulate signup confirmation (in real app, this would navigate to confirm page)
      console.log('Signup attempt:', { signupName, signupEmail, signupPhone });
      // navigate('/signup-confirm');
    }
  };

  const handleNavigateToLogin = () => {
    if (props.onNavigateToLogin) {
      props.onNavigateToLogin();
    } else {
      // Fallback: デモ用。Inertia.jsではonNavigateToLoginを渡してください
      if (typeof window !== 'undefined') {
        const currentPath = window.location.pathname;
        const isTemplateRoute = currentPath.startsWith('/templates');
        const routePrefix = isTemplateRoute ? '/templates' : '/pages';
        window.location.href = `${routePrefix}/login`;
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
          <h2 className="login-title">新規アカウント作成</h2>
        <p className="login-subtitle">アカウント情報を入力してください</p>

        <form className="login-form" onSubmit={handleSubmit} noValidate>
          <InputField
            label="お名前"
            type="text"
            name="name"
            value={signupName}
            onChange={(e) => handleNameChange(e.target.value)}
            onBlur={(e) => handleNameBlur(e.target.value)}
            placeholder="山田 太郎"
            required
            error={signupErrors.name}
          />

          <InputField
            label="メールアドレス"
            type="email"
            name="email"
            value={signupEmail}
            onChange={(e) => handleEmailChange(e.target.value)}
            onBlur={(e) => handleEmailBlur(e.target.value)}
            placeholder="example@email.com"
            required
            error={signupErrors.email}
          />

          <InputField
            label="電話番号"
            type="tel"
            name="phone"
            value={signupPhone}
            onChange={(e) => handlePhoneChange(e.target.value)}
            onBlur={(e) => handlePhoneBlur(e.target.value)}
            placeholder="09012345678"
            error={signupErrors.phone}
          />

          <InputField
            label="パスワード"
            type="password"
            name="password"
            value={signupPassword}
            onChange={(e) => handlePasswordChange(e.target.value)}
            onBlur={(e) => handlePasswordBlur(e.target.value)}
            placeholder="8文字以上"
            required
            error={signupErrors.password}
          />

          <InputField
            label="パスワード確認"
            type="password"
            name="password_confirmation"
            value={signupPasswordConfirm}
            onChange={(e) => handlePasswordConfirmChange(e.target.value)}
            onBlur={(e) => handlePasswordConfirmBlur(e.target.value)}
            placeholder="もう一度入力してください"
            required
            error={signupErrors.passwordConfirm}
          />

          <div>
            <label className="remember-me">
              <Checkbox
                name="agreeToTerms"
                checked={agreeToTerms}
                onChange={(e) => handleAgreeToTermsChange(e.target.checked)}
              />
              <span>利用規約に同意する</span>
            </label>
            {signupErrors.agreeToTerms && (
              <div style={{
                color: 'var(--color-error-600)',
                fontSize: 'var(--font-size-xs)',
                marginTop: 'var(--spacing-1)',
                display: 'flex',
                alignItems: 'center',
                gap: 'var(--spacing-1)'
              }}>
                <svg width="14" height="14" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                </svg>
                {signupErrors.agreeToTerms}
              </div>
            )}
          </div>

          <button type="submit" className="login-button">
            登録内容を確認
          </button>

          <div style={{ textAlign: 'center', marginTop: 'var(--spacing-4)' }}>
            <a
              href="#"
              onClick={(e) => {
                e.preventDefault();
                handleNavigateToLogin();
              }}
              style={{
                color: 'var(--color-primary-600)',
                textDecoration: 'none',
                fontSize: 'var(--font-size-sm)'
              }}
            >
              すでにアカウントをお持ちの方
            </a>
          </div>
        </form>
        </div>
      </div>
    </div>
  );
};

export default SignupPage;
