import React, { useState } from 'react';
import Icon from '../../../components/icons/Icon';
import InputField from '../../../components/forms/InputField';
import TemplateNavigation from '../../../components/navigation/TemplateNavigation';
import { useViewMode } from '../../../hooks/useViewMode';
import { BaseAuthPageProps } from '../../../types/inertia';

/**
 * ForgotPasswordPage Component
 *
 * パスワード再設定のためのメールアドレス入力ページ - Inertia.js標準Props完全対応
 *
 * **React Router不要**: このコンポーネントはReact Routerに依存しません
 * **Inertia.js標準Props自動対応**: errorsとflashを自動的に読み取ります
 *
 * @example Laravel + Inertia.js（最もシンプルな実装）
 * ```php
 * // app/Http/Controllers/Auth/PasswordResetLinkController.php
 * public function store(Request $request)
 * {
 *     $request->validate([
 *         'email' => 'required|email',
 *     ]);
 *     // バリデーションエラーは自動的にerrorsプロパティに設定される
 *
 *     // 成功時
 *     return back()->with('status', 'パスワードリセットリンクを送信しました');
 *     // → flash.statusに自動設定される
 * }
 * ```
 *
 * @example React側のカスタマイズ（Inertia.jsページコンポーネント）
 * ```tsx
 * import ForgotPasswordPageTemplate from '@/Components/templates/auth/ForgotPasswordPage';
 * import { router, useForm } from '@inertiajs/react';
 *
 * export default function ForgotPasswordPage({ errors, flash }) {
 *     const { data, setData, post } = useForm({ email: '' });
 *
 *     return (
 *         <ForgotPasswordPageTemplate
 *             resetEmail={data.email}
 *             errors={errors}  // Inertia標準
 *             flash={flash}    // Inertia標準
 *             onResetEmailChange={(v) => setData('email', v)}
 *             onSubmit={(e) => { e.preventDefault(); post(route('password.email')); }}
 *             onNavigateToLogin={() => router.visit(route('login'))}
 *             hideNavigation={true}
 *         />
 *     );
 * }
 * ```
 */
interface ForgotPasswordPageProps extends BaseAuthPageProps {
  resetEmail?: string;
  resetEmailError?: string;
  resetEmailSuccess?: boolean;
  onResetEmailChange?: (value: string) => void;
  onResetEmailBlur?: (value: string) => void;
  onSubmit?: (e: React.FormEvent<HTMLFormElement>) => void;
  onNavigateToLogin?: () => void;
}

const ForgotPasswordPage: React.FC<ForgotPasswordPageProps> = (props) => {
  // View mode state for PC/SP toggle
  const [viewMode, setViewMode] = useViewMode();

  // Internal state for standalone mode
  const [internalEmail, setInternalEmail] = useState('');
  const [internalError, setInternalError] = useState<string | undefined>();
  const [internalSuccess, setInternalSuccess] = useState(false);

  // Use prop values if provided, otherwise use internal state
  const resetEmail = props.resetEmail !== undefined ? props.resetEmail : internalEmail;

  // ✅ Inertia.js標準Props自動マッピング
  // Laravel側のバリデーションエラーを自動的に取得
  const resetEmailError = props.errors?.email || props.resetEmailError || internalError;

  // フラッシュメッセージの自動マッピング（status はパスワードリセット成功時に使用）
  const resetEmailSuccess = props.flash?.status ? true : (props.resetEmailSuccess !== undefined ? props.resetEmailSuccess : internalSuccess);

  // Validation helper
  const validateEmail = (value: string): string | undefined => {
    if (!value) return 'メールアドレスを入力してください';
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
      return '正しいメールアドレスを入力してください';
    }
    return undefined;
  };

  // Event handlers
  const handleEmailChange = (value: string) => {
    if (props.onResetEmailChange) {
      props.onResetEmailChange(value);
    } else {
      setInternalEmail(value);
      setInternalError(undefined);
      setInternalSuccess(false);
    }
  };

  const handleEmailBlur = (value: string) => {
    if (props.onResetEmailBlur) {
      props.onResetEmailBlur(value);
    } else {
      const error = validateEmail(value);
      setInternalError(error);
    }
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (props.onSubmit) {
      props.onSubmit(e);
    } else {
      // Standalone mode: validate and handle submission
      const emailError = validateEmail(resetEmail);

      if (emailError) {
        setInternalError(emailError);
        return;
      }

      // Simulate sending password reset email
      console.log('Password reset requested for:', resetEmail);
      setInternalSuccess(true);
      setInternalError(undefined);
    }
  };

  const handleNavigateToLogin = () => {
    if (props.onNavigateToLogin) {
      props.onNavigateToLogin();
    } else {
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
          <h2 className="login-title">パスワード再設定</h2>
        <p className="login-subtitle">メールアドレスに再設定用URLを送信します</p>

        <form className="login-form" onSubmit={handleSubmit} noValidate>
          {resetEmailSuccess && (
            <div className="success-message">
              <Icon name="check-circle" className="w-5 h-5" />
              <span>
                再設定用URLを送信しました。
                <br />
                メールをご確認ください。
              </span>
            </div>
          )}

          <InputField
            label="メールアドレス"
            type="email"
            name="resetEmail"
            value={resetEmail}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => handleEmailChange(e.target.value)}
            onBlur={(e: React.FocusEvent<HTMLInputElement>) => handleEmailBlur(e.target.value)}
            placeholder="example@email.com"
            required
            error={resetEmailError}
          />

          <button type="submit" className="login-button">
            再設定用URLを送信
          </button>

          <div style={{ textAlign: 'center', marginTop: 'var(--spacing-4)' }}>
            <a
              href="#"
              onClick={(e: React.MouseEvent<HTMLAnchorElement>) => {
                e.preventDefault();
                handleNavigateToLogin();
              }}
              style={{
                color: 'var(--color-primary-600)',
                textDecoration: 'none',
                fontSize: 'var(--font-size-sm)'
              }}
            >
              ログイン画面に戻る
            </a>
          </div>
        </form>
        </div>
      </div>
    </div>
  );
};

export default ForgotPasswordPage;
