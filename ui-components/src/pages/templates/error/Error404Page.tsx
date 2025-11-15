import React from 'react';
import { useViewMode } from '../../../hooks/useViewMode';

/**
 * Error404Page Component
 *
 * 404エラーページ（ページが見つかりません）
 *
 * **React Router不要**: このコンポーネントはReact Routerに依存しません
 * **Inertia.js対応**: そのまま使用可能
 *
 * @example Laravel + Inertia.js
 * return Inertia::render('templates/error/Error404Page', [
 *   'hideNavigation' => true,
 * ]);
 */
interface Error404PageProps {
  onNavigate: (page: string) => void;
  hideNavigation?: boolean;
}

const Error404Page: React.FC<Error404PageProps> = ({ onNavigate, hideNavigation }) => {
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
      <div className="login-screen">
        <div className="login-card" style={{ maxWidth: '500px' }}>
        <div style={{ marginBottom: 'var(--spacing-6)' }}>
          <h2 style={{
            fontSize: 'var(--font-size-lg)',
            fontWeight: 'var(--font-weight-bold)',
            color: 'var(--color-neutral-900)',
            marginBottom: 'var(--spacing-3)',
            textAlign: 'center'
          }}>
            お探しのページは見つかりませんでした
          </h2>
          <p className="login-subtitle" style={{ textAlign: 'left' }}>
            お探しのページは存在しないか、移動または削除された可能性があります。
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
          <button
            type="button"
            className="login-button"
            onClick={() => window.history.back()}
            style={{
              margin: 0,
              background: 'var(--color-neutral-200)',
              color: 'var(--color-neutral-700)'
            }}
          >
            前のページに戻る
          </button>
        </div>
        </div>
      </div>
    </div>
  );
};

export default Error404Page;
