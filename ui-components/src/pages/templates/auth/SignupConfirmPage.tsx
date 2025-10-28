import React from 'react';
import TemplateNavigation from '../../../components/navigation/TemplateNavigation';
import { useViewMode } from '../../../hooks/useViewMode';
import { BaseAuthPageProps } from '../../../types/inertia';

/**
 * SignupConfirmPage Component
 *
 * ユーザー登録内容の確認ページ - Inertia.js標準Props完全対応
 *
 * **React Router不要**: このコンポーネントはReact Routerに依存しません
 * **Inertia.js標準Props自動対応**: errorsとflashを自動的に読み取ります
 *
 * @example Laravel + Inertia.js（最もシンプルな実装）
 * ```php
 * // app/Http/Controllers/AuthController.php
 * public function confirmRegistration(Request $request)
 * {
 *     return Inertia::render('Auth/SignupConfirmPage', [
 *         'hideNavigation' => true,
 *         'signupName' => $request->session()->get('registration.name'),
 *         'signupEmail' => $request->session()->get('registration.email'),
 *         'signupPhone' => $request->session()->get('registration.phone'),
 *     ]);
 * }
 * ```
 *
 * @example React側のカスタマイズ（Inertia.jsページコンポーネント）
 * ```tsx
 * import SignupConfirmPageTemplate from '@/Components/templates/auth/SignupConfirmPage';
 * import { router } from '@inertiajs/react';
 *
 * export default function SignupConfirmPage({ signupName, signupEmail, signupPhone }) {
 *     return (
 *         <SignupConfirmPageTemplate
 *             signupName={signupName}
 *             signupEmail={signupEmail}
 *             signupPhone={signupPhone}
 *             onConfirm={() => router.post(route('register.store'))}
 *             onBack={() => router.visit(route('register'))}
 *             hideNavigation={true}
 *         />
 *     );
 * }
 * ```
 */
interface SignupConfirmPageProps extends BaseAuthPageProps {
  signupName?: string;
  signupEmail?: string;
  signupPhone?: string;
  onConfirm?: () => void;
  onBack?: () => void;
}

const SignupConfirmPage: React.FC<SignupConfirmPageProps> = (props) => {
  // View mode state for PC/SP toggle
  const [viewMode, setViewMode] = useViewMode();

  // Use prop values if provided, otherwise use defaults
  const signupName = props.signupName || 'サンプル 太郎';
  const signupEmail = props.signupEmail || 'sample@example.com';
  const signupPhone = props.signupPhone || '';

  const handleConfirm = () => {
    if (props.onConfirm) {
      props.onConfirm();
    } else {
      // Standalone mode: navigate to complete page
      console.log('Signup confirmed:', { signupName, signupEmail, signupPhone });
      if (typeof window !== 'undefined') {
        window.location.href = '/signup-complete';
      }
    }
  };

  const handleBack = () => {
    if (props.onBack) {
      props.onBack();
    } else {
      // Standalone mode: navigate back to signup page
      if (typeof window !== 'undefined') {
        window.location.href = '/signup';
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
          <h2 className="login-title">登録内容の確認</h2>
        <p className="login-subtitle">以下の内容で登録します</p>

        <div className="login-form">
          <div style={{
            display: 'flex',
            flexDirection: 'column',
            gap: 'var(--spacing-4)',
            padding: 'var(--spacing-4)',
            background: 'var(--color-neutral-50)',
            borderRadius: 0,
            marginBottom: 'var(--spacing-4)'
          }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <span style={{ color: 'var(--color-neutral-600)', fontSize: 'var(--font-size-sm)' }}>お名前</span>
              <span style={{ fontWeight: 'var(--font-weight-semibold)' }}>{signupName}</span>
            </div>
            <div style={{ height: '1px', background: 'var(--color-neutral-200)' }} />
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <span style={{ color: 'var(--color-neutral-600)', fontSize: 'var(--font-size-sm)' }}>メールアドレス</span>
              <span style={{ fontWeight: 'var(--font-weight-semibold)' }}>{signupEmail}</span>
            </div>
            {signupPhone && (
              <>
                <div style={{ height: '1px', background: 'var(--color-neutral-200)' }} />
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <span style={{ color: 'var(--color-neutral-600)', fontSize: 'var(--font-size-sm)' }}>電話番号</span>
                  <span style={{ fontWeight: 'var(--font-weight-semibold)' }}>{signupPhone}</span>
                </div>
              </>
            )}
          </div>

          <button
            type="button"
            className="login-button"
            onClick={handleConfirm}
          >
            登録する
          </button>

          <button
            type="button"
            className="login-button"
            onClick={handleBack}
            style={{
              background: 'var(--color-neutral-200)',
              color: 'var(--color-neutral-700)',
              marginTop: 'var(--spacing-2)'
            }}
          >
            内容を修正する
          </button>
        </div>
        </div>
      </div>
    </div>
  );
};

export default SignupConfirmPage;
