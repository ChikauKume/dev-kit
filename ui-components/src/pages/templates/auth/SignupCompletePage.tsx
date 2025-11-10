import React from 'react';
import Icon from '../../../components/icons/Icon';
import TemplateNavigation from '../../../components/navigation/TemplateNavigation';
import { useViewMode } from '../../../hooks/useViewMode';
import { BaseAuthPageProps } from '../../../types/inertia';

/**
 * SignupCompletePage Component
 *
 * ユーザー登録完了ページ - Inertia.js標準Props完全対応
 *
 * **React Router不要**: このコンポーネントはReact Routerに依存しません
 * **Inertia.js標準Props自動対応**: errorsとflashを自動的に読み取ります
 *
 * @example Laravel + Inertia.js（最もシンプルな実装）
 * ```php
 * // app/Http/Controllers/AuthController.php
 * public function completeRegistration()
 * {
 *     return Inertia::render('Auth/SignupCompletePage', [
 *         'hideNavigation' => true,
 *     ]);
 * }
 * ```
 *
 * @example React側のカスタマイズ（Inertia.jsページコンポーネント）
 * ```tsx
 * import SignupCompletePageTemplate from '@/Components/templates/auth/SignupCompletePage';
 * import { router } from '@inertiajs/react';
 *
 * export default function SignupCompletePage() {
 *     return (
 *         <SignupCompletePageTemplate
 *             onNavigateToLogin={() => router.visit(route('login'))}
 *             hideNavigation={true}
 *         />
 *     );
 * }
 * ```
 */
interface SignupCompletePageProps extends BaseAuthPageProps {
  onNavigateToLogin?: () => void;
}

const SignupCompletePage: React.FC<SignupCompletePageProps> = (props) => {
  // View mode state for PC/SP toggle
  const [viewMode, setViewMode] = useViewMode();

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
          <div style={{ textAlign: 'center', marginBottom: 'var(--spacing-6)' }}>
          <div style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            margin: '0 auto var(--spacing-4) auto'
          }}>
            <Icon name="check-circle" style={{ width: '80px', height: '80px', color: '#10b981' }} />
          </div>
          <h1 className="login-title">アカウント登録完了</h1>
          <p className="login-subtitle">
            ご登録いただきありがとうございます。
          </p>
        </div>
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <button
            type="button"
            className="login-button"
            onClick={handleNavigateToLogin}
            style={{ margin: 0 }}
          >
            ログイン画面へ
          </button>
        </div>
        </div>
      </div>
    </div>
  );
};

export default SignupCompletePage;
