import React, { useState } from 'react';
import Icon from '../../../components/icons/Icon';
import InputField from '../../../components/forms/InputField';
import TemplateNavigation from '../../../components/navigation/TemplateNavigation';
import { useViewMode } from '../../../hooks/useViewMode';
import { BaseAuthPageProps } from '../../../types/inertia';

/**
 * ResetPasswordPage Component
 *
 * パスワード再設定ページ（新しいパスワード入力） - Inertia.js標準Props完全対応
 *
 * **React Router不要**: このコンポーネントはReact Routerに依存しません
 * **Inertia.js標準Props自動対応**: errorsとflashを自動的に読み取ります
 *
 * @example Laravel + Inertia.js（最もシンプルな実装）
 * ```php
 * // app/Http/Controllers/Auth/NewPasswordController.php
 * public function store(Request $request)
 * {
 *     $request->validate([
 *         'password' => 'required|min:8|confirmed',
 *     ]);
 *     // バリデーションエラーは自動的にerrorsプロパティに設定される
 *
 *     // 成功時
 *     return redirect()->route('login')
 *         ->with('status', 'パスワードが更新されました');
 *     // → flash.statusに自動設定される
 * }
 * ```
 *
 * @example React側のカスタマイズ（Inertia.jsページコンポーネント）
 * ```tsx
 * import ResetPasswordPageTemplate from '@/Components/templates/auth/ResetPasswordPage';
 * import { router, useForm } from '@inertiajs/react';
 *
 * export default function ResetPasswordPage({ errors, flash, token, email }) {
 *     const { data, setData, post } = useForm({
 *         password: '', password_confirmation: '', token, email
 *     });
 *
 *     return (
 *         <ResetPasswordPageTemplate
 *             newPassword={data.password}
 *             confirmPassword={data.password_confirmation}
 *             errors={errors}  // Inertia標準
 *             flash={flash}    // Inertia標準
 *             onNewPasswordChange={(v) => setData('password', v)}
 *             onConfirmPasswordChange={(v) => setData('password_confirmation', v)}
 *             onSubmit={(e) => { e.preventDefault(); post(route('password.store')); }}
 *             hideNavigation={true}
 *         />
 *     );
 * }
 * ```
 */
interface ResetPasswordPageProps extends BaseAuthPageProps {
  newPassword?: string;
  confirmPassword?: string;
  passwordResetSuccess?: boolean;
  passwordResetErrors?: {
    newPassword?: string;
    confirmPassword?: string;
  };
  onNewPasswordChange?: (value: string) => void;
  onConfirmPasswordChange?: (value: string) => void;
  onNewPasswordBlur?: (value: string) => void;
  onConfirmPasswordBlur?: (value: string) => void;
  onSubmit?: (e: React.FormEvent<HTMLFormElement>) => void;
}

const ResetPasswordPage: React.FC<ResetPasswordPageProps> = (props) => {
  // View mode state for PC/SP toggle
  const [viewMode, setViewMode] = useViewMode();

  // Internal state for standalone mode
  const [internalNewPassword, setInternalNewPassword] = useState('');
  const [internalConfirmPassword, setInternalConfirmPassword] = useState('');
  const [internalSuccess, setInternalSuccess] = useState(false);
  const [internalErrors, setInternalErrors] = useState<{
    newPassword?: string;
    confirmPassword?: string;
  }>({});

  // Use prop values if provided, otherwise use internal state
  const newPassword = props.newPassword !== undefined ? props.newPassword : internalNewPassword;
  const confirmPassword = props.confirmPassword !== undefined ? props.confirmPassword : internalConfirmPassword;

  // ✅ Inertia.js標準Props自動マッピング
  // Laravel側のバリデーションエラーを自動的に取得
  const passwordResetErrors = {
    newPassword: props.errors?.password || props.passwordResetErrors?.newPassword || internalErrors.newPassword,
    confirmPassword: props.errors?.password_confirmation || props.passwordResetErrors?.confirmPassword || internalErrors.confirmPassword,
  };

  // フラッシュメッセージの自動マッピング（status はパスワードリセット成功時に使用）
  const passwordResetSuccess = props.flash?.status ? true : (props.passwordResetSuccess !== undefined ? props.passwordResetSuccess : internalSuccess);

  // Validation helpers
  const validateNewPassword = (value: string): string | undefined => {
    if (!value) return 'パスワードを入力してください';
    if (value.length < 8) return 'パスワードは8文字以上で入力してください';
    return undefined;
  };

  const validateConfirmPassword = (value: string, password: string): string | undefined => {
    if (!value) return 'パスワード確認を入力してください';
    if (value !== password) return 'パスワードが一致しません';
    return undefined;
  };

  // Event handlers
  const handleNewPasswordChange = (value: string) => {
    if (props.onNewPasswordChange) {
      props.onNewPasswordChange(value);
    } else {
      setInternalNewPassword(value);
      setInternalErrors(prev => ({ ...prev, newPassword: undefined }));
    }
  };

  const handleConfirmPasswordChange = (value: string) => {
    if (props.onConfirmPasswordChange) {
      props.onConfirmPasswordChange(value);
    } else {
      setInternalConfirmPassword(value);
      setInternalErrors(prev => ({ ...prev, confirmPassword: undefined }));
    }
  };

  const handleNewPasswordBlur = (value: string) => {
    if (props.onNewPasswordBlur) {
      props.onNewPasswordBlur(value);
    } else {
      const error = validateNewPassword(value);
      setInternalErrors(prev => ({ ...prev, newPassword: error }));
    }
  };

  const handleConfirmPasswordBlur = (value: string) => {
    if (props.onConfirmPasswordBlur) {
      props.onConfirmPasswordBlur(value);
    } else {
      const error = validateConfirmPassword(value, newPassword);
      setInternalErrors(prev => ({ ...prev, confirmPassword: error }));
    }
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (props.onSubmit) {
      props.onSubmit(e);
    } else {
      // Standalone mode: validate and handle submission
      const newPasswordError = validateNewPassword(newPassword);
      const confirmPasswordError = validateConfirmPassword(confirmPassword, newPassword);

      if (newPasswordError || confirmPasswordError) {
        setInternalErrors({
          newPassword: newPasswordError,
          confirmPassword: confirmPasswordError
        });
        return;
      }

      // Simulate password reset
      console.log('Password reset successful');
      setInternalSuccess(true);
      setInternalErrors({});

      // Navigate to login after a delay
      setTimeout(() => {
        if (typeof window !== 'undefined') {
          window.location.href = '/login';
        }
      }, 2000);
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
          <h2 className="login-title">新しいパスワード設定</h2>
        <p className="login-subtitle">新しいパスワードを入力してください</p>

        <form className="login-form" onSubmit={handleSubmit} noValidate>
          {passwordResetSuccess && (
            <div className="success-message">
              <Icon name="check-circle" className="w-5 h-5" />
              <span>
                パスワードが更新されました。
                <br />
                新しいパスワードでログインしてください。
              </span>
            </div>
          )}

          <InputField
            label="新しいパスワード"
            type="password"
            name="newPassword"
            value={newPassword}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => handleNewPasswordChange(e.target.value)}
            onBlur={(e: React.FocusEvent<HTMLInputElement>) => handleNewPasswordBlur(e.target.value)}
            placeholder="8文字以上"
            required
            error={passwordResetErrors.newPassword}
          />

          <InputField
            label="パスワード確認"
            type="password"
            name="confirmPassword"
            value={confirmPassword}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => handleConfirmPasswordChange(e.target.value)}
            onBlur={(e: React.FocusEvent<HTMLInputElement>) => handleConfirmPasswordBlur(e.target.value)}
            placeholder="もう一度入力してください"
            required
            error={passwordResetErrors.confirmPassword}
          />

          <button type="submit" className="login-button">
            パスワードを更新
          </button>
        </form>
        </div>
      </div>
    </div>
  );
};

export default ResetPasswordPage;
