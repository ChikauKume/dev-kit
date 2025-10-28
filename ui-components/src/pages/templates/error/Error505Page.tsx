import React from 'react';
import TemplateNavigation from '../../../components/navigation/TemplateNavigation';
import { useViewMode } from '../../../hooks/useViewMode';

/**
 * Error505Page Component
 *
 * 505エラーページ（予期せぬ不具合が発生しました）
 *
 * **React Router不要**: このコンポーネントはReact Routerに依存しません
 * **Inertia.js対応**: そのまま使用可能
 *
 * @example Laravel + Inertia.js
 * return Inertia::render('templates/error/Error505Page', [
 *   'hideNavigation' => true,
 * ]);
 */
interface Error505PageProps {
  onNavigate?: (page: string) => void;
  hideNavigation?: boolean;
}

const Error505Page: React.FC<Error505PageProps> = ({ onNavigate, hideNavigation }) => {
  const [viewMode, setViewMode] = useViewMode();

  const handleHomeClick = () => {
    if (onNavigate) {
      // Controlled mode: use callback
      onNavigate('dashboard');
    } else {
      // Standalone mode: navigate to dashboard
      if (typeof window !== 'undefined') {
        window.location.href = '/dashboard';
      }
    }
  };

  return (
    <div className={viewMode === 'sp' ? 'force-mobile' : ''}>
      <TemplateNavigation
        hide={hideNavigation}
        viewMode={viewMode}
        onViewModeChange={setViewMode}
      />
      <div className="login-screen">
        <div className="login-card" style={{ maxWidth: '500px' }}>
        <div style={{ marginBottom: 'var(--spacing-6)' }}>
          <h2 style={{
            fontSize: 'var(--font-size-xl)',
            fontWeight: 'var(--font-weight-bold)',
            color: 'var(--color-neutral-900)',
            marginBottom: 'var(--spacing-3)',
            textAlign: 'center'
          }}>
            予期せぬ不具合が発生しました
          </h2>
          <p className="login-subtitle" style={{ textAlign: 'left' }}>
            しばらく時間をおいてから、もう一度お試しください。
          </p>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--spacing-3)' }}>
          <button
            type="button"
            className="login-button"
            onClick={handleHomeClick}
            style={{ margin: 0 }}
          >
            ホームに戻る
          </button>
        </div>
        </div>
      </div>
    </div>
  );
};

export default Error505Page;
