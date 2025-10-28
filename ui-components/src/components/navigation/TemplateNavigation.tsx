import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import Icon from '../icons/Icon';
import Dropdown from './Dropdown';

/**
 * Props for TemplateNavigation component
 */
interface TemplateNavigationProps {
  /** Current view mode (PC or SP) */
  viewMode?: 'pc' | 'sp';
  /** Callback when view mode changes */
  onViewModeChange?: (mode: 'pc' | 'sp') => void;
  /** Additional CSS classes */
  className?: string;
  /** Hide navigation (used when nested in parent with navigation) */
  hide?: boolean;
  /** Show category dropdowns (default: auto-detect based on route) */
  showCategories?: boolean;
  /** Show view mode toggle (default: auto-detect based on route) */
  showViewMode?: boolean;
}

/**
 * TemplateNavigation Component
 *
 * Provides navigation between different template pages with dropdown menus
 * and an optional view mode toggle (PC/SP).
 *
 * @example
 * ```tsx
 * // With view mode toggle
 * <TemplateNavigation
 *   viewMode={viewMode}
 *   onViewModeChange={setViewMode}
 * />
 *
 * // Navigation only (no view mode toggle)
 * <TemplateNavigation />
 * ```
 *
 * Features:
 * - Three category dropdowns: Pre-login, Post-login, and Other pages
 * - Active page highlighting based on current route
 * - Optional PC/SP view mode toggle
 * - Fully responsive design
 */
const TemplateNavigation: React.FC<TemplateNavigationProps> = ({
  viewMode = 'pc',
  onViewModeChange,
  className = '',
  hide = false,
  showCategories,
  showViewMode
}) => {
  // Don't render if hide prop is true
  if (hide) {
    return null;
  }

  // Try to use React Router hooks, but handle gracefully if not in Router context
  let navigate: ReturnType<typeof useNavigate> | undefined;
  let location: ReturnType<typeof useLocation> | undefined;

  try {
    navigate = useNavigate();
    location = useLocation();
  } catch (error) {
    // Not in Router context - navigation will be disabled
    console.warn('TemplateNavigation: React Router hooks not available. Navigation disabled.');
  }

  // Detect current route prefix (/pages or /templates)
  const currentPath = location?.pathname || '';
  const isTemplateRoute = currentPath.startsWith('/templates');
  const routePrefix = isTemplateRoute ? '/templates' : '/pages';

  // Auto-detect: Hide categories and view mode when on /templates/* routes
  // Show them on localhost:3000 (root or /pages routes)
  const shouldShowCategories = showCategories !== undefined
    ? showCategories
    : !isTemplateRoute;

  const shouldShowViewMode = showViewMode !== undefined
    ? showViewMode
    : !isTemplateRoute;

  // Determine which category is active based on current path
  const isPreLoginActive = location ? [
    `${routePrefix}/login`,
    `${routePrefix}/signup`,
    `${routePrefix}/signup-confirm`,
    `${routePrefix}/signup-complete`,
    `${routePrefix}/forgot-password`,
    `${routePrefix}/reset-password`,
    `${routePrefix}/password-reset-email`
  ].some(path => location.pathname.startsWith(path)) : false;

  const isPostLoginActive = location ? [
    `${routePrefix}/dashboard`,
    `${routePrefix}/data/`,
    `${routePrefix}/statistics`,
    `${routePrefix}/notifications`,
    `${routePrefix}/settings`
  ].some(path => location.pathname.startsWith(path)) : false;

  const isOtherActive = location ? [
    `${routePrefix}/error-404`,
    `${routePrefix}/error-505`,
    `${routePrefix}/maintenance`,
    `${routePrefix}/qna`,
    `${routePrefix}/terms`,
    `${routePrefix}/privacy`,
    `${routePrefix}/commercial`
  ].some(path => location.pathname.startsWith(path)) : false;

  // Get display text for pre-login dropdown
  const getPreLoginDisplayText = () => {
    if (!location) return 'ページを選択';
    if (location.pathname.startsWith(`${routePrefix}/login`)) return 'ログイン';
    if (location.pathname.startsWith(`${routePrefix}/signup-complete`)) return '登録完了';
    if (location.pathname.startsWith(`${routePrefix}/signup-confirm`)) return '登録確認';
    if (location.pathname.startsWith(`${routePrefix}/signup`)) return '新規登録';
    if (location.pathname.startsWith(`${routePrefix}/forgot-password`)) return '再設定URL送信';
    if (location.pathname.startsWith(`${routePrefix}/reset-password`)) return 'パスワード再設定';
    if (location.pathname.startsWith(`${routePrefix}/password-reset-email`)) return 'リセットメール';
    return 'ページを選択';
  };

  // Get display text for post-login dropdown
  const getPostLoginDisplayText = () => {
    if (!location) return 'ページを選択';
    if (location.pathname.startsWith(`${routePrefix}/dashboard`)) return 'ダッシュボード';
    if (location.pathname.startsWith(`${routePrefix}/data/list`)) return 'データ一覧';
    if (location.pathname.startsWith(`${routePrefix}/data/add`)) return 'データ作成';
    if (location.pathname.startsWith(`${routePrefix}/data/edit`)) return 'データ編集';
    if (location.pathname.startsWith(`${routePrefix}/data/detail`)) return 'データ詳細';
    if (location.pathname.startsWith(`${routePrefix}/statistics`)) return '統計';
    if (location.pathname.startsWith(`${routePrefix}/notifications`)) return '通知一覧';
    if (location.pathname.startsWith(`${routePrefix}/settings`)) return '設定';
    return 'ページを選択';
  };

  // Get display text for other dropdown
  const getOtherDisplayText = () => {
    if (!location) return 'ページを選択';
    if (location.pathname.startsWith(`${routePrefix}/qna`)) return 'Q&A';
    if (location.pathname.startsWith(`${routePrefix}/terms`)) return '利用規約';
    if (location.pathname.startsWith(`${routePrefix}/privacy`)) return 'プライバシーポリシー';
    if (location.pathname.startsWith(`${routePrefix}/commercial`)) return '特定商取引法';
    if (location.pathname.startsWith(`${routePrefix}/error-404`)) return '404エラー';
    if (location.pathname.startsWith(`${routePrefix}/error-505`)) return '505エラー';
    if (location.pathname.startsWith(`${routePrefix}/maintenance`)) return 'メンテナンス';
    return 'ページを選択';
  };

  return (
    <div className={`template-navigation ${className}`}>
      {shouldShowCategories && (
        <div className="navigation-group">
          {/* Pre-login Pages */}
          <div className="navigation-section">
            <div className="navigation-label">ログイン前</div>
            <Dropdown>
              <Dropdown.Trigger>
                <button className={`page-select-button ${isPreLoginActive ? 'active' : ''}`}>
                  {getPreLoginDisplayText()}
                  <Icon name="chevron-down" style={{ width: '16px', height: '16px' }} />
                </button>
              </Dropdown.Trigger>
              <Dropdown.Content align="left">
                <Dropdown.Link onClick={() => navigate?.(`${routePrefix}/login`)}>ログイン</Dropdown.Link>
                <Dropdown.Link onClick={() => navigate?.(`${routePrefix}/signup`)}>新規登録</Dropdown.Link>
                <Dropdown.Link onClick={() => navigate?.(`${routePrefix}/signup-confirm`)}>登録確認</Dropdown.Link>
                <Dropdown.Link onClick={() => navigate?.(`${routePrefix}/signup-complete`)}>登録完了</Dropdown.Link>
                <Dropdown.Link onClick={() => navigate?.(`${routePrefix}/forgot-password`)}>再設定URL送信</Dropdown.Link>
                <Dropdown.Link onClick={() => navigate?.(`${routePrefix}/reset-password`)}>パスワード再設定</Dropdown.Link>
                <Dropdown.Link onClick={() => navigate?.(`${routePrefix}/password-reset-email`)}>リセットメール</Dropdown.Link>
              </Dropdown.Content>
            </Dropdown>
          </div>

          {/* Post-login Pages */}
          <div className="navigation-section">
            <div className="navigation-label">ログイン後</div>
            <Dropdown>
              <Dropdown.Trigger>
                <button className={`page-select-button ${isPostLoginActive ? 'active' : ''}`}>
                  {getPostLoginDisplayText()}
                  <Icon name="chevron-down" style={{ width: '16px', height: '16px' }} />
                </button>
              </Dropdown.Trigger>
              <Dropdown.Content align="left">
                <Dropdown.Link onClick={() => navigate?.(`${routePrefix}/dashboard`)}>ダッシュボード</Dropdown.Link>
                <Dropdown.Link onClick={() => navigate?.(`${routePrefix}/data/list`)}>データ一覧</Dropdown.Link>
                <Dropdown.Link onClick={() => navigate?.(`${routePrefix}/data/add`)}>データ作成</Dropdown.Link>
                <Dropdown.Link onClick={() => navigate?.(`${routePrefix}/data/edit`)}>データ編集</Dropdown.Link>
                <Dropdown.Link onClick={() => navigate?.(`${routePrefix}/data/detail`)}>データ詳細</Dropdown.Link>
                <Dropdown.Link onClick={() => navigate?.(`${routePrefix}/statistics`)}>統計</Dropdown.Link>
                <Dropdown.Link onClick={() => navigate?.(`${routePrefix}/notifications`)}>通知一覧</Dropdown.Link>
                <Dropdown.Link onClick={() => navigate?.(`${routePrefix}/settings`)}>設定</Dropdown.Link>
              </Dropdown.Content>
            </Dropdown>
          </div>

          {/* Other Pages */}
          <div className="navigation-section">
            <div className="navigation-label">その他</div>
            <Dropdown>
              <Dropdown.Trigger>
                <button className={`page-select-button ${isOtherActive ? 'active' : ''}`}>
                  {getOtherDisplayText()}
                  <Icon name="chevron-down" style={{ width: '16px', height: '16px' }} />
                </button>
              </Dropdown.Trigger>
              <Dropdown.Content align="left">
                <div style={{
                  padding: 'var(--spacing-2) var(--spacing-3)',
                  fontSize: 'var(--font-size-xs)',
                  fontWeight: 'var(--font-weight-semibold)',
                  color: 'var(--color-neutral-600)'
                }}>
                  情報ページ
                </div>
                <Dropdown.Link onClick={() => navigate?.(`${routePrefix}/qna`)}>Q&A</Dropdown.Link>
                <Dropdown.Link onClick={() => navigate?.(`${routePrefix}/terms`)}>利用規約</Dropdown.Link>
                <Dropdown.Link onClick={() => navigate?.(`${routePrefix}/privacy`)}>プライバシーポリシー</Dropdown.Link>
                <Dropdown.Link onClick={() => navigate?.(`${routePrefix}/commercial`)}>特定商取引法</Dropdown.Link>
                <div style={{
                  padding: 'var(--spacing-2) var(--spacing-3)',
                  fontSize: 'var(--font-size-xs)',
                  fontWeight: 'var(--font-weight-semibold)',
                  color: 'var(--color-neutral-600)',
                  borderTop: '1px solid var(--color-neutral-200)',
                  marginTop: 'var(--spacing-1)'
                }}>
                  エラー/メンテナンス
                </div>
                <Dropdown.Link onClick={() => navigate?.(`${routePrefix}/error-404`)}>404エラー</Dropdown.Link>
                <Dropdown.Link onClick={() => navigate?.(`${routePrefix}/error-505`)}>505エラー</Dropdown.Link>
                <Dropdown.Link onClick={() => navigate?.(`${routePrefix}/maintenance`)}>メンテナンス</Dropdown.Link>
              </Dropdown.Content>
            </Dropdown>
          </div>
        </div>
      )}

      {/* View Mode Toggle - Only show if callback is provided and shouldShowViewMode is true */}
      {shouldShowViewMode && onViewModeChange && (
        <div className="navigation-section">
          <div className="navigation-label">表示モード</div>
          <div className="view-mode-toggle">
            <button
              className={`view-mode-button ${viewMode === 'pc' ? 'active' : ''}`}
              onClick={() => onViewModeChange('pc')}
            >
              <Icon name="desktop" style={{ width: '16px', height: '16px' }} />
              PC
            </button>
            <button
              className={`view-mode-button ${viewMode === 'sp' ? 'active' : ''}`}
              onClick={() => onViewModeChange('sp')}
            >
              <Icon name="device-mobile" style={{ width: '16px', height: '16px' }} />
              SP
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default TemplateNavigation;
