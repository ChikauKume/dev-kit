import React, { useState } from 'react';
import DetailPage from './DetailPage';
import type { DataDetailPageProps } from '../../../types/detail/DetailPageProps';

/**
 * DetailPageExample
 *
 * **React Router不要**: このコンポーネントはReact Routerに依存しません
 * **Inertia.js対応**: onNavigateコールバックでルーティング制御
 *
 * Demonstrates two usage patterns for the refactored DetailPage component:
 * 1. Controlled Mode - Used within parent components (e.g., TemplatePage)
 * 2. Standalone Mode - Independent usage with window.location
 */

// Sample data for demonstration
const sampleProject = {
  id: 1,
  name: 'UIコンポーネントライブラリ',
  description: 'React + TypeScriptベースの再利用可能なUIコンポーネント',
  status: 'active',
  priority: 'high',
  startDate: '2025-01-01',
  endDate: '2025-12-31',
  budget: 5000000,
  progress: 65,
  owner: '山田太郎',
  team: ['山田太郎', '佐藤花子', '鈴木一郎'],
  tags: ['React', 'TypeScript', 'UI'],
  created_at: '2025-01-01T09:00:00Z',
  updated_at: '2025-10-17T14:30:00Z'
};

/**
 * Example 1: Standalone Mode
 * DetailPage works independently with window.location
 */
export const StandaloneDetailPageExample: React.FC = () => {
  const detailConfig: DataDetailPageProps = {
    title: 'プロジェクト詳細',
    data: sampleProject,

    // Back button with URL for window.location navigation
    backButton: {
      label: '一覧に戻る',
      icon: 'arrow-left',
      url: '/data/list' // window.location will handle navigation
    },

    // Breadcrumbs with paths for window.location navigation
    breadcrumbs: [
      { label: 'ホーム', path: '/dashboard' },
      { label: 'データ管理', path: '/data/list' },
      { label: 'プロジェクト詳細' }
    ],

    // Header configuration
    headerConfig: {
      titleField: 'name',
      subtitle: (data) => `ID: ${data.id} | 更新日: ${new Date(data.updated_at).toLocaleDateString()}`,
      showStatus: true,
      statusField: 'status',
      statusBadgeConfig: {
        active: { label: '進行中', variant: 'success' },
        pending: { label: '保留', variant: 'warning' },
        completed: { label: '完了', variant: 'info' },
        cancelled: { label: '中止', variant: 'error' }
      }
    },

    // Sections with fields
    sections: [
      {
        id: 'basic',
        title: '基本情報',
        icon: 'info',
        fields: [
          { key: 'name', label: 'プロジェクト名', type: 'text' },
          { key: 'description', label: '説明', type: 'text', width: 'full' },
          { key: 'status', label: 'ステータス', type: 'text' },
          { key: 'priority', label: '優先度', type: 'text' }
        ]
      },
      {
        id: 'schedule',
        title: 'スケジュール',
        icon: 'calendar',
        fields: [
          { key: 'startDate', label: '開始日', type: 'text' },
          { key: 'endDate', label: '終了日', type: 'text' },
          { key: 'progress', label: '進捗率', type: 'text', render: (value) => `${value}%` }
        ]
      },
      {
        id: 'team',
        title: 'チーム情報',
        icon: 'users',
        collapsible: true,
        fields: [
          { key: 'owner', label: 'オーナー', type: 'text' },
          {
            key: 'team',
            label: 'チームメンバー',
            type: 'text',
            width: 'full',
            render: (value) => value.join(', ')
          }
        ]
      }
    ],

    // Actions (edit, delete)
    actions: [
      {
        id: 'edit',
        label: '編集',
        icon: 'edit',
        variant: 'primary',
        onClick: (data) => {
          // In standalone mode, navigate using window.location
          window.location.href = `/data/edit/${data.id}`;
        }
      }
    ],

    secondaryActions: [
      {
        id: 'delete',
        label: '削除',
        icon: 'delete',
        variant: 'danger',
        onClick: async (data) => {
          console.log('Deleting project:', data.id);
          // Delete logic here
        },
        confirm: {
          title: 'プロジェクトの削除',
          message: 'このプロジェクトを削除してもよろしいですか？この操作は取り消せません。',
          confirmText: '削除する',
          cancelText: 'キャンセル'
        }
      },
      {
        id: 'duplicate',
        label: '複製',
        icon: 'copy',
        variant: 'secondary',
        onClick: (data) => {
          console.log('Duplicating project:', data.id);
        }
      }
    ],

    stickyHeader: true
  };

  return <DetailPage {...detailConfig} />;
};

/**
 * Example 2: Controlled Mode
 * DetailPage integrated with parent component state management
 */
export const ControlledDetailPageExample: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<'list' | 'detail'>('detail');

  const handleNavigate = (page: string) => {
    console.log('Navigating to:', page);
    setCurrentPage(page as 'list' | 'detail');
  };

  const handleEdit = (data: any) => {
    console.log('Editing:', data);
    // Parent component handles navigation
    setCurrentPage('list'); // or navigate to edit page
  };

  const handleDelete = async (data: any) => {
    console.log('Deleting:', data);
    // After deletion, navigate back
    handleNavigate('list');
  };

  const detailConfig: DataDetailPageProps = {
    title: 'プロジェクト詳細',
    data: sampleProject,

    // Back button with callback for controlled navigation
    backButton: {
      label: '一覧に戻る',
      icon: 'arrow-left',
      onClick: () => handleNavigate('list')
    },

    // Sections
    sections: [
      {
        id: 'basic',
        title: '基本情報',
        icon: 'info',
        fields: [
          { key: 'name', label: 'プロジェクト名', type: 'text' },
          { key: 'description', label: '説明', type: 'text', width: 'full' },
          { key: 'status', label: 'ステータス', type: 'text' }
        ]
      }
    ],

    // Actions with controlled callbacks
    actions: [
      {
        id: 'edit',
        label: '編集',
        icon: 'edit',
        variant: 'primary',
        onClick: handleEdit
      }
    ],

    secondaryActions: [
      {
        id: 'delete',
        label: '削除',
        icon: 'delete',
        variant: 'danger',
        onClick: handleDelete,
        confirm: {
          title: 'プロジェクトの削除',
          message: 'このプロジェクトを削除してもよろしいですか？',
          confirmText: '削除する',
          cancelText: 'キャンセル'
        }
      }
    ]
  };

  if (currentPage === 'list') {
    return (
      <div style={{ padding: 'var(--spacing-4)' }}>
        <h2>データ一覧ページ</h2>
        <button
          className="btn btn--primary"
          onClick={() => setCurrentPage('detail')}
        >
          詳細を表示
        </button>
      </div>
    );
  }

  return <DetailPage {...detailConfig} />;
};

/**
 * Example 3: Advanced Tabs Layout
 */
export const DetailPageWithTabsExample: React.FC = () => {
  const detailConfig: DataDetailPageProps = {
    title: 'プロジェクト詳細',
    data: sampleProject,

    backButton: {
      label: '戻る',
      url: '/data/list'
    },

    // Tabs configuration
    tabs: [
      {
        id: 'overview',
        label: '概要',
        icon: 'info',
        sections: [
          {
            id: 'basic',
            title: '基本情報',
            fields: [
              { key: 'name', label: 'プロジェクト名', type: 'text' },
              { key: 'description', label: '説明', type: 'text', width: 'full' },
              { key: 'status', label: 'ステータス', type: 'text' }
            ]
          }
        ]
      },
      {
        id: 'schedule',
        label: 'スケジュール',
        icon: 'calendar',
        sections: [
          {
            id: 'dates',
            title: '日程',
            fields: [
              { key: 'startDate', label: '開始日', type: 'text' },
              { key: 'endDate', label: '終了日', type: 'text' },
              { key: 'progress', label: '進捗率', type: 'text', render: (value) => `${value}%` }
            ]
          }
        ]
      },
      {
        id: 'team',
        label: 'チーム',
        icon: 'users',
        badge: (data) => data.team?.length || 0,
        sections: [
          {
            id: 'members',
            title: 'メンバー',
            fields: [
              { key: 'owner', label: 'オーナー', type: 'text' },
              {
                key: 'team',
                label: 'メンバー',
                type: 'text',
                width: 'full',
                render: (value) => value.join(', ')
              }
            ]
          }
        ]
      }
    ],

    actions: [
      {
        id: 'edit',
        label: '編集',
        icon: 'edit',
        variant: 'primary',
        onClick: (data) => console.log('Edit:', data)
      }
    ]
  };

  return <DetailPage {...detailConfig} />;
};

/**
 * Example 4: Loading and Error States
 */
export const DetailPageStatesExample: React.FC = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<{ message: string; retry?: () => void } | undefined>(undefined);
  const [data, setData] = useState<any>(null);

  const fetchData = async () => {
    setLoading(true);
    setError(undefined);

    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1000));
      setData(sampleProject);
    } catch (err) {
      setError({
        message: 'データの読み込みに失敗しました',
        retry: fetchData
      });
    } finally {
      setLoading(false);
    }
  };

  React.useEffect(() => {
    fetchData();
  }, []);

  const detailConfig: DataDetailPageProps = {
    title: 'プロジェクト詳細',
    data: data || {},
    loading,
    error,

    emptyState: {
      title: 'データが見つかりません',
      description: '指定されたプロジェクトは存在しないか、削除された可能性があります。',
      icon: 'inbox',
      action: {
        label: '一覧に戻る',
        onClick: () => console.log('Back to list')
      }
    },

    sections: [
      {
        id: 'basic',
        title: '基本情報',
        fields: [
          { key: 'name', label: 'プロジェクト名', type: 'text' },
          { key: 'description', label: '説明', type: 'text' }
        ]
      }
    ]
  };

  return <DetailPage {...detailConfig} />;
};

/**
 * Example 5: With InfoPageWrapper Integration
 * Complete pattern showing DetailPage integrated with InfoPageWrapper,
 * TemplateNavigation, notification system, and route mapping.
 * This is the recommended pattern for production use.
 *
 * **React Router不要**: このコンポーネントはReact Routerに依存しません
 * **Inertia.js対応**: onNavigateコールバックでルーティング制御
 */
export const DetailPageWithInfoPageWrapperExample: React.FC = () => {
  // Navigation function (uses window.location in standalone mode)
  const navigate = (route: string) => {
    console.log('Navigating to:', route);
    // In production, use Inertia.js router or window.location
    window.location.href = route;
  };

  /**
   * View mode state management
   * Controls PC/SP responsive display modes
   */
  const [viewMode, setViewMode] = React.useState<'pc' | 'sp'>('pc');

  /**
   * UI state management for dropdowns and menus
   */
  const [showNotificationDropdown, setShowNotificationDropdown] = React.useState(false);
  const [showUserMenu, setShowUserMenu] = React.useState(false);
  const [isHamburgerOpen, setIsHamburgerOpen] = React.useState(false);
  const [sidebarCollapsed, setSidebarCollapsed] = React.useState(false);

  /**
   * Notification system state
   * Manages notifications with read/unread status
   */
  const [notifications, setNotifications] = React.useState([
    {
      id: 1,
      title: '新しいメッセージ',
      message: 'プロジェクトが更新されました',
      time: '5分前',
      read: false
    },
    {
      id: 2,
      title: 'データ更新完了',
      message: 'データの同期が完了しました',
      time: '1時間前',
      read: false
    }
  ]);

  const notificationRef = React.useRef<HTMLDivElement>(null);

  /**
   * Mark individual notification as read
   */
  const handleMarkNotificationAsRead = (notificationId: string | number) => {
    setNotifications(prevNotifications =>
      prevNotifications.map(notification =>
        notification.id === notificationId
          ? { ...notification, read: true }
          : notification
      )
    );
  };

  /**
   * Mark all notifications as read
   */
  const handleMarkAllNotificationsAsRead = () => {
    setNotifications(prevNotifications =>
      prevNotifications.map(notification => ({ ...notification, read: true }))
    );
  };

  /**
   * Route mapping function
   * Maps logical page names to actual routes
   * This pattern allows InfoPageWrapper to be agnostic of routing structure
   */
  const handleNavigate = (page: string) => {
    const routeMap: Record<string, string> = {
      'dashboard': '/dashboard',
      'data-list': '/data/list',
      'data-detail': '/data/detail',
      'data-edit': '/data/edit',
      'statistics': '/statistics',
      'settings': '/settings',
      'notifications': '/notifications',
      'login': '/login',
      'qna': '/qna',
      'privacy': '/privacy',
      'terms': '/terms',
      'commercial': '/commercial',
    };

    const route = routeMap[page] || `/${page}`;
    navigate(route);
  };

  /**
   * DetailPage configuration
   */
  const detailConfig = {
    title: 'プロジェクト詳細',
    data: sampleProject,

    breadcrumbs: [
      { label: 'ホーム', path: '/' },
      { label: 'データ一覧', path: '/data/list' },
      { label: 'プロジェクト詳細' }
    ],

    headerConfig: {
      titleField: 'name',
      subtitle: (data: any) => `ID: ${data.id} | 更新日: ${new Date(data.updated_at).toLocaleDateString()}`,
      showStatus: true,
      statusField: 'status',
      statusBadgeConfig: {
        active: { label: '進行中', variant: 'success' },
        pending: { label: '保留', variant: 'warning' },
        completed: { label: '完了', variant: 'info' },
        cancelled: { label: '中止', variant: 'error' }
      }
    },

    sections: [
      {
        id: 'basic',
        title: '基本情報',
        icon: 'info',
        fields: [
          { key: 'name', label: 'プロジェクト名', type: 'text' },
          { key: 'description', label: '説明', type: 'text', width: 'full' },
          { key: 'status', label: 'ステータス', type: 'text' },
          { key: 'priority', label: '優先度', type: 'text' }
        ]
      }
    ],

    actions: [
      {
        id: 'edit',
        label: '編集',
        icon: 'edit',
        variant: 'primary',
        onClick: () => handleNavigate('data-edit')
      }
    ],

    secondaryActions: [
      {
        id: 'delete',
        label: '削除',
        icon: 'delete',
        variant: 'danger',
        onClick: () => {
          // Show flash message and navigate
          sessionStorage.setItem('flashMessage', JSON.stringify({
            type: 'success',
            message: 'データを削除しました'
          }));
          handleNavigate('data-list');
        },
        confirm: {
          title: 'プロジェクトの削除',
          message: 'このプロジェクトを削除してもよろしいですか？',
          confirmText: '削除する',
          cancelText: 'キャンセル'
        }
      }
    ]
  };

  /**
   * Render pattern:
   * 1. TemplateNavigation (top-level navigation and view mode toggle)
   * 2. InfoPageWrapper (provides header, sidebar, footer, notifications)
   * 3. DetailPage (actual content)
   *
   * This pattern provides:
   * - Consistent navigation across all pages
   * - Responsive PC/SP view modes
   * - Centralized notification management
   * - Reusable layout structure
   * - Clean separation of concerns
   */
  return (
    <div className={viewMode === 'sp' ? 'force-mobile' : ''}>
      {/* Template Navigation - Top-level navigation bar */}
      <div style={{
        background: 'var(--color-neutral-100)',
        borderBottom: '1px solid var(--color-neutral-200)',
        padding: 'var(--spacing-2)'
      }}>
        <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
          <h3 style={{ margin: 0, marginBottom: 'var(--spacing-2)' }}>TemplateNavigation Component</h3>
          <p style={{ margin: 0, fontSize: 'var(--font-size-sm)', color: 'var(--color-neutral-600)' }}>
            Provides page navigation and view mode toggle
          </p>
        </div>
      </div>

      {/* InfoPageWrapper - Wraps the entire page with header, sidebar, footer */}
      <div style={{
        background: 'var(--color-neutral-50)',
        borderBottom: '1px solid var(--color-neutral-200)',
        padding: 'var(--spacing-2)'
      }}>
        <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
          <h3 style={{ margin: 0, marginBottom: 'var(--spacing-2)' }}>InfoPageWrapper Component</h3>
          <p style={{ margin: 0, fontSize: 'var(--font-size-sm)', color: 'var(--color-neutral-600)' }}>
            Provides header (logo, notifications, user menu), sidebar navigation, and footer
          </p>
        </div>
      </div>

      {/* Actual DetailPage content */}
      <div style={{
        maxWidth: '1400px',
        margin: '0 auto',
        padding: 'var(--spacing-4)',
        background: 'white'
      }}>
        <h3 style={{ marginTop: 0 }}>DetailPage Content</h3>
        <p style={{ fontSize: 'var(--font-size-sm)', color: 'var(--color-neutral-600)', marginBottom: 'var(--spacing-4)' }}>
          The actual DetailPage component is rendered here
        </p>
        <DetailPage {...detailConfig} />
      </div>

      {/* Code Example */}
      <div style={{
        maxWidth: '1400px',
        margin: 'var(--spacing-6) auto',
        padding: 'var(--spacing-4)',
        background: 'var(--color-neutral-50)',
        borderRadius: 0,
        border: '1px solid var(--color-neutral-200)'
      }}>
        <h3 style={{ marginTop: 0 }}>Integration Code Pattern</h3>
        <pre style={{
          padding: 'var(--spacing-4)',
          background: 'var(--color-neutral-900)',
          color: 'var(--color-neutral-100)',
          borderRadius: 0,
          overflow: 'auto',
          fontSize: 'var(--font-size-sm)',
          lineHeight: '1.6'
        }}>
{`/**
 * Complete integration example with InfoPageWrapper
 *
 * **React Router不要**: このコンポーネントはReact Routerに依存しません
 * **Inertia.js対応**: onNavigateコールバックでルーティング制御
 */
import React, { useState, useRef } from 'react';
import DetailPage from '../../templates/data/DetailPage';
import InfoPageWrapper from '../../../components/layout/InfoPageWrapper';
import { useViewMode } from '../../../hooks/useViewMode';

const DataDetailPage: React.FC = () => {
  const notificationRef = useRef<HTMLDivElement>(null);

  // State management
  const [viewMode, setViewMode] = useViewMode();
  const [showNotificationDropdown, setShowNotificationDropdown] = useState(false);
  const [showUserMenu, setShowUserMenu] = useState(false);
  const [isHamburgerOpen, setIsHamburgerOpen] = useState(false);
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);

  // Notification state
  const [notifications, setNotifications] = useState([...]);

  // Route mapping
  const handleNavigate = (page: string) => {
    const routeMap: Record<string, string> = {
      'dashboard': '/dashboard',
      'data-list': '/data/list',
      // ... other routes
    };
    const route = routeMap[page] || \`/\${page}\`;
    window.location.href = route;
  };

  // Notification handlers
  const handleMarkNotificationAsRead = (id: string | number) => {
    setNotifications(prev =>
      prev.map(n => n.id === id ? { ...n, read: true } : n)
    );
  };

  const handleMarkAllNotificationsAsRead = () => {
    setNotifications(prev => prev.map(n => ({ ...n, read: true })));
  };

  return (
    <div className={viewMode === 'sp' ? 'force-mobile' : ''}>
      
      <InfoPageWrapper
        viewMode={viewMode}
        currentPage="data-detail"
        onNavigate={handleNavigate}
        unreadCount={notifications.filter(n => !n.read).length}
        showNotificationDropdown={showNotificationDropdown}
        setShowNotificationDropdown={setShowNotificationDropdown}
        showUserMenu={showUserMenu}
        setShowUserMenu={setShowUserMenu}
        isHamburgerOpen={isHamburgerOpen}
        setIsHamburgerOpen={setIsHamburgerOpen}
        sidebarCollapsed={sidebarCollapsed}
        setSidebarCollapsed={setSidebarCollapsed}
        notificationRef={notificationRef}
        notifications={notifications}
        onMarkNotificationAsRead={handleMarkNotificationAsRead}
        onMarkAllNotificationsAsRead={handleMarkAllNotificationsAsRead}
      >
        <DetailPage
          title="データ詳細"
          data={yourData}
          sections={sections}
          actions={actions}
          breadcrumbs={breadcrumbs}
        />
      </InfoPageWrapper>
    </div>
  );
};`}
        </pre>

        <div style={{ marginTop: 'var(--spacing-4)' }}>
          <h4 style={{ marginBottom: 'var(--spacing-2)' }}>Key Integration Points:</h4>
          <ul style={{
            fontSize: 'var(--font-size-sm)',
            lineHeight: '1.8',
            color: 'var(--color-neutral-700)'
          }}>
            <li><strong>TemplateNavigation:</strong> Provides top-level page navigation and view mode toggle</li>
            <li><strong>InfoPageWrapper:</strong> Wraps content with header, sidebar, footer, and notification system</li>
            <li><strong>Route Mapping:</strong> Use routeMap to decouple component logic from routing structure</li>
            <li><strong>Notification System:</strong> Manage notifications with read/unread status and callbacks</li>
            <li><strong>View Mode:</strong> Force mobile view with 'force-mobile' class when viewMode is 'sp'</li>
            <li><strong>Flash Messages:</strong> Use sessionStorage for success/error messages after navigation</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

/**
 * Default export: Standalone example
 */
const DetailPageExample: React.FC = () => {
  return (
    <div>
      <h1 style={{ padding: 'var(--spacing-4)' }}>DetailPage 使用例</h1>
      <StandaloneDetailPageExample />
    </div>
  );
};

export default DetailPageExample;
