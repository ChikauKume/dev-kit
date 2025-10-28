import React, { useState, useRef } from 'react';
import InfoPageWrapper, { SidebarMenuItem } from '../../../components/layout/InfoPageWrapper';
import TemplateNavigation from '../../../components/navigation/TemplateNavigation';
import Icon from '../../../components/icons/Icon';
import { useViewMode } from '../../../hooks/useViewMode';
import type { IconName } from '../../../components/icons/Icon';

/**
 * Dashboard Statistics Card Interface
 *
 * @interface DashboardStat
 * @property {string} label - Display label for the statistic
 * @property {string} value - Display value (can be number, percentage, etc.)
 * @property {IconName} icon - Icon name from Icon component library
 * @property {string} color - CSS color value (use CSS variables)
 *
 * @example Laravel Controller
 * ```php
 * return Inertia::render('Dashboard', [
 *   'stats' => [
 *     [
 *       'label' => '総ユーザー数',
 *       'value' => (string) $totalUsers,
 *       'icon' => 'user',
 *       'color' => 'var(--color-primary-500)'
 *     ],
 *     [
 *       'label' => '総データ数',
 *       'value' => (string) $totalData,
 *       'icon' => 'document',
 *       'color' => 'var(--color-success-500)'
 *     ],
 *     // ... more stats
 *   ]
 * ]);
 * ```
 */
export interface DashboardStat {
  label: string;
  value: string;
  icon: IconName;
  color: string;
}

/**
 * Recent Activity Item Interface
 *
 * @interface RecentActivity
 * @property {string} user - User name who performed the action
 * @property {string} action - Description of the action performed
 * @property {string} time - Relative or absolute time string
 * @property {string} [avatarUrl] - Optional URL to user avatar image
 *
 * @example Laravel Controller
 * ```php
 * return Inertia::render('Dashboard', [
 *   'recentActivities' => Activity::latest()
 *     ->take(10)
 *     ->get()
 *     ->map(fn($activity) => [
 *       'user' => $activity->user->name,
 *       'action' => $activity->description,
 *       'time' => $activity->created_at->diffForHumans(),
 *       'avatarUrl' => $activity->user->avatar_url ?? null,
 *     ])
 * ]);
 * ```
 */
export interface RecentActivity {
  user: string;
  action: string;
  time: string;
  avatarUrl?: string;
}

/**
 * Quick Action Button Interface
 *
 * @interface QuickAction
 * @property {string} label - Display label for the action button
 * @property {IconName} icon - Icon name from Icon component library
 * @property {() => void} onClick - Click handler function
 * @property {string} [href] - Optional URL for navigation
 *
 * @example Laravel Controller
 * ```php
 * // Quick actions are typically defined client-side with onClick handlers
 * // However, you can pass URLs for navigation:
 * return Inertia::render('Dashboard', [
 *   'quickActions' => [
 *     [
 *       'label' => '新規データ作成',
 *       'icon' => 'plus-circle',
 *       'href' => route('data.create')
 *     ],
 *     // ... more actions
 *   ]
 * ]);
 * ```
 */
export interface QuickAction {
  label: string;
  icon: IconName;
  onClick?: () => void;
  href?: string;
}

/**
 * Notification Interface
 *
 * @interface Notification
 * @property {number | string} id - Unique identifier
 * @property {string} title - Notification title
 * @property {string} message - Notification message body
 * @property {string} time - Relative or absolute time string
 * @property {boolean} read - Read status
 *
 * @example Laravel Controller
 * ```php
 * return Inertia::render('Dashboard', [
 *   'notifications' => auth()->user()
 *     ->notifications()
 *     ->latest()
 *     ->take(10)
 *     ->get()
 *     ->map(fn($notification) => [
 *       'id' => $notification->id,
 *       'title' => $notification->data['title'],
 *       'message' => $notification->data['message'],
 *       'time' => $notification->created_at->diffForHumans(),
 *       'read' => !is_null($notification->read_at),
 *     ])
 * ]);
 * ```
 */
export interface Notification {
  id: number | string;
  title: string;
  message: string;
  time: string;
  read: boolean;
}

/**
 * Dashboard Page Component Props
 *
 * @interface DashboardPageProps
 * @property {DashboardStat[]} [stats] - Array of statistics cards to display
 * @property {RecentActivity[]} [recentActivities] - Array of recent activity items
 * @property {QuickAction[]} [quickActions] - Array of quick action buttons
 * @property {Notification[]} [notifications] - Array of user notifications
 * @property {string} [title] - Page title (default: 'ダッシュボード')
 * @property {string} [currentPage] - Current page identifier for navigation highlighting
 * @property {(page: string) => void} [onNavigate] - Navigation handler function
 * @property {(notificationId: string | number) => void} [onMarkNotificationAsRead] - Handler for marking single notification as read
 * @property {() => void} [onMarkAllNotificationsAsRead] - Handler for marking all notifications as read
 *
 * @example Laravel Controller with Inertia.js
 * ```php
 * use Inertia\Inertia;
 *
 * class DashboardController extends Controller
 * {
 *   public function index()
 *   {
 *     return Inertia::render('Dashboard', [
 *       'stats' => [
 *         [
 *           'label' => '総ユーザー数',
 *           'value' => (string) User::count(),
 *           'icon' => 'user',
 *           'color' => 'var(--color-primary-500)'
 *         ],
 *         [
 *           'label' => '総データ数',
 *           'value' => (string) Data::count(),
 *           'icon' => 'document',
 *           'color' => 'var(--color-success-500)'
 *         ],
 *         [
 *           'label' => '今月の新規',
 *           'value' => (string) User::whereMonth('created_at', now()->month)->count(),
 *           'icon' => 'chart-bar',
 *           'color' => 'var(--color-warning-500)'
 *         ],
 *         [
 *           'label' => 'アクティブ率',
 *           'value' => round(User::where('last_login_at', '>=', now()->subDays(30))->count() / User::count() * 100) . '%',
 *           'icon' => 'chart-pie',
 *           'color' => 'var(--color-info-500)'
 *         ],
 *       ],
 *       'recentActivities' => Activity::with('user')
 *         ->latest()
 *         ->take(4)
 *         ->get()
 *         ->map(fn($activity) => [
 *           'user' => $activity->user->name,
 *           'action' => $activity->description,
 *           'time' => $activity->created_at->diffForHumans(),
 *         ]),
 *       'quickActions' => [
 *         [
 *           'label' => '新規データ作成',
 *           'icon' => 'plus-circle',
 *           'href' => route('data.create')
 *         ],
 *         [
 *           'label' => 'データ一覧表示',
 *           'icon' => 'table',
 *           'href' => route('data.index')
 *         ],
 *         [
 *           'label' => '統計を確認',
 *           'icon' => 'chart-bar',
 *           'href' => route('statistics.index')
 *         ],
 *       ],
 *       'notifications' => auth()->user()
 *         ->notifications()
 *         ->latest()
 *         ->take(10)
 *         ->get()
 *         ->map(fn($notification) => [
 *           'id' => $notification->id,
 *           'title' => $notification->data['title'],
 *           'message' => $notification->data['message'],
 *           'time' => $notification->created_at->diffForHumans(),
 *           'read' => !is_null($notification->read_at),
 *         ])
 *     ]);
 *   }
 * }
 * ```
 *
 * @example Routes Configuration
 * ```php
 * // routes/web.php
 * Route::middleware(['auth', 'verified'])->group(function () {
 *   Route::get('/dashboard', [DashboardController::class, 'index'])->name('dashboard');
 *   Route::post('/notifications/{id}/read', [NotificationController::class, 'markAsRead'])->name('notifications.read');
 *   Route::post('/notifications/read-all', [NotificationController::class, 'markAllAsRead'])->name('notifications.read-all');
 * });
 * ```
 */
export interface DashboardPageProps {
  /**
   * 統計カード配列
   *
   * 【重要】プロジェクトごとにダッシュボードの内容は大きく変わります。
   * デフォルト（空配列）: 統計カードは表示されません
   *
   * システム固有の統計を表示したい場合にのみ、この配列を渡してください。
   *
   * @example
   * stats={[
   *   { label: '総ユーザー数', value: '1,234', icon: 'user', color: 'var(--color-primary-500)' },
   *   { label: '売上高', value: '¥5,678,900', icon: 'currency-yen', color: 'var(--color-success-500)' }
   * ]}
   */
  stats?: DashboardStat[];

  /**
   * 最近のアクティビティ配列
   *
   * 【重要】プロジェクトごとにアクティビティの種類は異なります。
   * デフォルト（空配列）: アクティビティセクションは表示されません
   *
   * @example
   * recentActivities={[
   *   { user: '田中太郎', action: '注文を作成しました', time: '5分前' },
   *   { user: '佐藤花子', action: '商品を更新しました', time: '15分前' }
   * ]}
   */
  recentActivities?: RecentActivity[];

  /**
   * クイックアクション配列
   *
   * 【重要】プロジェクトごとに必要なアクションは異なります。
   * デフォルト（空配列）: クイックアクションセクションは表示されません
   *
   * @example
   * quickActions={[
   *   { label: '新規注文', icon: 'plus-circle', onClick: () => router.visit('/orders/create') },
   *   { label: '在庫確認', icon: 'clipboard-list', onClick: () => router.visit('/inventory') }
   * ]}
   */
  quickActions?: QuickAction[];

  /**
   * 通知配列
   */
  notifications?: Notification[];

  /**
   * フラッシュメッセージ（オプション）
   *
   * デフォルト: { type: 'success', message: 'こちらはダッシュボードです' }
   *
   * ページ読み込み時に一時的に表示されるメッセージ。
   * null を渡すとフラッシュメッセージを非表示にできます。
   */
  flashMessage?: { type: 'success' | 'error' | 'warning' | 'info'; message: string } | null;

  /**
   * ページタイトル
   *
   * デフォルト: "ダッシュボード"
   *
   * すべてのコンテンツ（stats, recentActivities, quickActions）が空の場合、
   * このタイトルのみが中央に大きく表示されます。
   */
  title?: string;

  currentPage?: string;
  hideNavigation?: boolean;

  /**
   * サイドバーメニューアイテム（動的設定可能）
   *
   * 【重要】"ダッシュボード（ホーム）"と"設定"は自動的に追加される固定アイテムです。
   * このプロパティで指定したアイテムは、ダッシュボードと設定の間に挿入されます。
   *
   * 最終的なサイドバーの順序:
   * 1. ホーム（ダッシュボード）← 固定
   * 2. [sidebarMenuItemsで指定したアイテム]
   * 3. 設定 ← 固定
   *
   * @example
   * const customItems: SidebarMenuItem[] = [
   *   { id: 'products', label: '商品管理', icon: 'shopping-bag', page: 'products' },
   *   { id: 'orders', label: '注文一覧', icon: 'shopping-cart', page: 'orders' },
   * ];
   *
   * デフォルト値（指定しない場合）:
   * [
   *   { id: 'data-list', label: 'データ一覧', icon: 'table', page: 'data-list' },
   *   { id: 'statistics', label: '統計', icon: 'chart-bar', page: 'statistics' }
   * ]
   */
  sidebarMenuItems?: SidebarMenuItem[];

  onNavigate?: (page: string) => void;
  onLogout?: () => void;
  onMarkNotificationAsRead?: (notificationId: string | number) => void;
  onMarkAllNotificationsAsRead?: () => void;
}

/**
 * Dashboard Page Template Component
 *
 * A comprehensive dashboard page template with statistics cards, recent activities,
 * and quick action buttons. Designed for integration with Laravel/Inertia.js backend.
 *
 * @component
 * @param {DashboardPageProps} props - Component props
 *
 * @features
 * - Statistics Cards Grid: Responsive grid layout displaying key metrics
 * - Recent Activities Feed: Real-time activity feed with user avatars
 * - Quick Actions Panel: Customizable action buttons for common tasks
 * - Dynamic Sidebar: Customizable navigation menu (Dashboard & Settings are fixed)
 * - Notification System: Integrated with InfoPageWrapper notification dropdown
 * - Responsive Design: Mobile-first approach with adaptive layouts
 * - View Mode Support: PC/Tablet/SP view mode switching
 *
 * @example Basic Usage
 * ```tsx
 * import DashboardPage from './pages/templates/dashboard/DashboardPage';
 *
 * function App() {
 *   return (
 *     <DashboardPage
 *       stats={[
 *         { label: '総ユーザー数', value: '1,234', icon: 'user', color: 'var(--color-primary-500)' }
 *       ]}
 *       recentActivities={[
 *         { user: '田中太郎', action: 'データを作成しました', time: '5分前' }
 *       ]}
 *       quickActions={[
 *         { label: '新規作成', icon: 'plus-circle', onClick: () => console.log('Create') }
 *       ]}
 *     />
 *   );
 * }
 * ```
 *
 * **React Router不要**: このコンポーネントはReact Routerに依存しません
 * **Inertia.js対応**: onNavigateコールバックでルーティング制御
 *
 * @example With Laravel/Inertia.js
 * ```tsx
 * // resources/js/Pages/Dashboard.tsx
 * import React from 'react';
 * import DashboardPage from '@/Components/templates/dashboard/DashboardPage';
 * import { router } from '@inertiajs/react';
 *
 * export default function Dashboard({ stats, recentActivities, quickActions, notifications }) {
 *   const handleNavigate = (page: string) => {
 *     const routeMap = {
 *       'dashboard': '/dashboard',
 *       'data-list': '/data',
 *       'statistics': '/statistics',
 *       'settings': '/settings',
 *     };
 *
 *     const route = routeMap[page] || `/${page}`;
 *     router.visit(route);
 *   };
 *
 *   const handleMarkAsRead = (notificationId: string | number) => {
 *     router.post(`/notifications/${notificationId}/read`);
 *   };
 *
 *   const handleMarkAllAsRead = () => {
 *     router.post('/notifications/read-all');
 *   };
 *
 *   return (
 *     <DashboardPage
 *       stats={stats}
 *       recentActivities={recentActivities}
 *       quickActions={quickActions}
 *       notifications={notifications}
 *       onNavigate={handleNavigate}
 *       onMarkNotificationAsRead={handleMarkAsRead}
 *       onMarkAllNotificationsAsRead={handleMarkAllAsRead}
 *     />
 *   );
 * }
 * ```
 *
 * @example Dynamic Sidebar Configuration
 * ```tsx
 * // カスタムサイドバーメニューの設定
 * // 注意: "ダッシュボード"と"設定"は自動的に追加される固定アイテムです
 * import { SidebarMenuItem } from '@/Components/layout/InfoPageWrapper';
 *
 * const customSidebarItems: SidebarMenuItem[] = [
 *   { id: 'products', label: '商品管理', icon: 'shopping-bag', page: 'products' },
 *   { id: 'orders', label: '注文一覧', icon: 'shopping-cart', page: 'orders' },
 *   { id: 'customers', label: '顧客管理', icon: 'users', page: 'customers' },
 *   { id: 'analytics', label: '分析', icon: 'chart-bar', page: 'analytics' },
 * ];
 *
 * // 最終的なサイドバーの順序:
 * // 1. ダッシュボード (固定)
 * // 2. 商品管理 (動的)
 * // 3. 注文一覧 (動的)
 * // 4. 顧客管理 (動的)
 * // 5. 分析 (動的)
 * // 6. 設定 (固定)
 *
 * <DashboardPage
 *   sidebarMenuItems={customSidebarItems}
 *   onNavigate={handleNavigate}
 *   // ... other props
 * />
 * ```
 *
 * @accessibility
 * - Semantic HTML structure with proper heading hierarchy
 * - Keyboard navigation support
 * - ARIA labels for icon-only buttons
 * - Focus management for interactive elements
 *
 * @responsive
 * - Mobile: Stacked layout with full-width cards
 * - Tablet: 2-column grid for stats cards
 * - Desktop: 4-column grid for stats cards
 *
 * @cssVariables
 * Uses the project's CSS variable system for theming:
 * - Colors: --color-primary-*, --color-neutral-*, etc.
 * - Spacing: --spacing-*
 * - Typography: --font-size-*, --font-weight-*
 * - Borders: --radius-*
 */
const DashboardPage: React.FC<DashboardPageProps> = ({
  stats = [],
  hideNavigation = true,
  recentActivities = [],
  quickActions = [],
  notifications = [],
  flashMessage = { type: 'success', message: 'こちらはダッシュボードです' },
  title = 'ダッシュボード',
  currentPage = 'dashboard',
  sidebarMenuItems,
  onNavigate,
  onLogout,
  onMarkNotificationAsRead,
  onMarkAllNotificationsAsRead,
}) => {
  const notificationRef = useRef<HTMLDivElement>(null);

  const [viewMode, setViewMode] = useViewMode();
  const [showNotificationDropdown, setShowNotificationDropdown] = useState(false);
  const [showUserMenu, setShowUserMenu] = useState(false);
  const [isHamburgerOpen, setIsHamburgerOpen] = useState(false);
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);
  const [localNotifications, setLocalNotifications] = useState(notifications);

  /**
   * Navigation handler
   * Uses provided callback or falls back to window.location
   *
   * @param {string} page - Page identifier
   */
  const handleNavigate = (page: string) => {
    if (onNavigate) {
      onNavigate(page);
      return;
    }

    // Fallback navigation for demo/standalone usage
    // Detect current route prefix (/pages or /templates)
    const currentPath = typeof window !== 'undefined' ? window.location.pathname : '';
    const isTemplateRoute = currentPath.startsWith('/templates');
    const routePrefix = isTemplateRoute ? '/templates' : '/pages';

    const routeMap: Record<string, string> = {
      'dashboard': `${routePrefix}/dashboard`,
      'data-list': `${routePrefix}/data/list`,
      'statistics': `${routePrefix}/statistics`,
      'settings': `${routePrefix}/settings`,
      'notifications': `${routePrefix}/notifications`,
      'login': `${routePrefix}/login`,
      'qna': `${routePrefix}/qna`,
      'privacy': `${routePrefix}/privacy`,
      'terms': `${routePrefix}/terms`,
      'commercial': `${routePrefix}/commercial`,
    };

    const route = routeMap[page] || `${routePrefix}/${page}`;
    window.location.href = route;
  };

  /**
   * Handle logout action
   *
   * @example Inertia.js integration
   * ```typescript
   * const handleLogout = () => {
   *   router.post('/logout');
   * };
   * ```
   *
   * @example SPA with API
   * ```typescript
   * const handleLogout = async () => {
   *   await fetch('/api/logout', { method: 'POST' });
   *   // Clear local state and redirect to login
   *   window.location.href = '/login';
   * };
   * ```
   */
  const handleLogout = () => {
    if (onLogout) {
      onLogout();
      return;
    }

    // Fallback: Navigate to login page
    handleNavigate('login');
  };

  /**
   * Mark individual notification as read
   *
   * @param {string | number} notificationId - Notification ID
   */
  const handleMarkNotificationAsRead = (notificationId: string | number) => {
    if (onMarkNotificationAsRead) {
      onMarkNotificationAsRead(notificationId);
    }

    // Update local state
    setLocalNotifications(prevNotifications =>
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
    if (onMarkAllNotificationsAsRead) {
      onMarkAllNotificationsAsRead();
    }

    // Update local state
    setLocalNotifications(prevNotifications =>
      prevNotifications.map(notification => ({ ...notification, read: true }))
    );
  };

  /**
   * Default quick actions if none provided
   */
  const defaultQuickActions: QuickAction[] = [
    {
      label: '新規データ作成',
      icon: 'plus-circle',
      onClick: () => handleNavigate('data-form'),
    },
    {
      label: 'データ一覧表示',
      icon: 'table',
      onClick: () => handleNavigate('data-list'),
    },
    {
      label: '統計を確認',
      icon: 'chart-bar',
      onClick: () => handleNavigate('statistics'),
    },
  ];

  const actionsToDisplay = quickActions.length > 0 ? quickActions : defaultQuickActions;

  return (
    <div className={viewMode === 'sp' ? 'force-mobile' : ''}>
      <TemplateNavigation
        hide={hideNavigation}
        viewMode={viewMode}
        onViewModeChange={setViewMode}
      />
      <InfoPageWrapper
        viewMode={viewMode}
        currentPage={currentPage}
        onNavigate={handleNavigate}
        onLogout={handleLogout}
        sidebarMenuItems={sidebarMenuItems}
        unreadCount={localNotifications.filter(n => !n.read).length}
        showNotificationDropdown={showNotificationDropdown}
        setShowNotificationDropdown={setShowNotificationDropdown}
        showUserMenu={showUserMenu}
        setShowUserMenu={setShowUserMenu}
        isHamburgerOpen={isHamburgerOpen}
        setIsHamburgerOpen={setIsHamburgerOpen}
        sidebarCollapsed={sidebarCollapsed}
        setSidebarCollapsed={setSidebarCollapsed}
        notificationRef={notificationRef}
        notifications={localNotifications}
        onMarkNotificationAsRead={handleMarkNotificationAsRead}
        onMarkAllNotificationsAsRead={handleMarkAllNotificationsAsRead}
      >
        {/*
          【重要】ダッシュボードコンテンツは動的に設定可能

          デフォルト表示: "ダッシュボード"というタイトルのみ表示

          カスタマイズ方法:
          - stats配列を渡すと統計カードが表示されます
          - recentActivities配列を渡すと最近のアクティビティが表示されます
          - quickActions配列を渡すとクイックアクションボタンが表示されます

          すべて空配列（デフォルト）の場合、シンプルな"ダッシュボード"タイトルのみ表示されます
        */}

        {/* フラッシュメッセージ */}
        {flashMessage && (
          <div
            style={{
              padding: 'var(--spacing-4)',
              marginBottom: 'var(--spacing-4)',
              background: flashMessage.type === 'success' ? 'var(--color-success-50)' :
                         flashMessage.type === 'error' ? 'var(--color-error-50)' :
                         flashMessage.type === 'warning' ? 'var(--color-warning-50)' :
                         'var(--color-info-50)',
              border: `1px solid ${
                flashMessage.type === 'success' ? 'var(--color-success-200)' :
                flashMessage.type === 'error' ? 'var(--color-error-200)' :
                flashMessage.type === 'warning' ? 'var(--color-warning-200)' :
                'var(--color-info-200)'
              }`,
              borderRadius: 0,
              color: flashMessage.type === 'success' ? 'var(--color-success-900)' :
                     flashMessage.type === 'error' ? 'var(--color-error-900)' :
                     flashMessage.type === 'warning' ? 'var(--color-warning-900)' :
                     'var(--color-info-900)',
              display: 'flex',
              alignItems: 'center',
              gap: 'var(--spacing-2)',
            }}
          >
            <Icon
              name={flashMessage.type === 'success' ? 'check-circle' :
                    flashMessage.type === 'error' ? 'exclamation' :
                    flashMessage.type === 'warning' ? 'warning' :
                    'information-circle'}
              style={{
                color: flashMessage.type === 'success' ? 'var(--color-success-600)' :
                       flashMessage.type === 'error' ? 'var(--color-error-600)' :
                       flashMessage.type === 'warning' ? 'var(--color-warning-600)' :
                       'var(--color-info-600)',
                width: '20px',
                height: '20px',
              }}
            />
            <span style={{ fontSize: 'var(--font-size-sm)', fontWeight: 'var(--font-weight-medium)' }}>
              {flashMessage.message}
            </span>
          </div>
        )}

        {/* デフォルト表示: コンテンツが何もない場合は何も表示しない（フラッシュメッセージのみ） */}
        {stats.length === 0 && recentActivities.length === 0 && quickActions.length === 0 ? null : (
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: 'var(--spacing-6)',
            }}
          >
            {/* Statistics Cards Grid */}
            {stats.length > 0 && (
              <div
                style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
                  gap: 'var(--spacing-4)',
                }}
                role="region"
                aria-label="統計情報"
              >
                {stats.map((stat, index) => (
                  <div
                    key={index}
                    style={{
                      background: 'var(--color-neutral-white)',
                      border: '1px solid var(--color-neutral-200)',
                      borderRadius: 0,
                      padding: 'var(--spacing-4)',
                      display: 'flex',
                      alignItems: 'center',
                      gap: 'var(--spacing-3)',
                    }}
                    role="article"
                    aria-label={`${stat.label}: ${stat.value}`}
                  >
                    <div
                      style={{
                        width: '48px',
                        height: '48px',
                        borderRadius: 0,
                        background: `${stat.color}20`,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                      }}
                      aria-hidden="true"
                    >
                      <Icon name={stat.icon} size="md" style={{ color: stat.color }} />
                    </div>
                    <div>
                      <div
                        style={{
                          fontSize: 'var(--font-size-sm)',
                          color: 'var(--color-neutral-600)',
                          marginBottom: 'var(--spacing-1)',
                        }}
                      >
                        {stat.label}
                      </div>
                      <div
                        style={{
                          fontSize: 'var(--font-size-2xl)',
                          fontWeight: 'var(--font-weight-bold)',
                          color: 'var(--color-neutral-900)',
                        }}
                      >
                        {stat.value}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}

            {/* Recent Activities Section */}
            {recentActivities.length > 0 && (
              <div
                style={{
                  background: 'var(--color-neutral-white)',
                  border: '1px solid var(--color-neutral-200)',
                  borderRadius: 0,
                  padding: 'var(--spacing-5)',
                }}
                role="region"
                aria-label="最近のアクティビティ"
              >
                <h2
                  style={{
                    fontSize: 'var(--font-size-lg)',
                    fontWeight: 'var(--font-weight-semibold)',
                    color: 'var(--color-neutral-900)',
                    marginBottom: 'var(--spacing-4)',
                  }}
                >
                  最近のアクティビティ
                </h2>
                <div
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    gap: 'var(--spacing-3)',
                  }}
                >
                  {recentActivities.map((activity, index) => (
                    <div
                      key={index}
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        padding: 'var(--spacing-3)',
                        borderRadius: 0,
                        background: 'var(--color-neutral-50)',
                      }}
                      role="article"
                    >
                      <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--spacing-2)' }}>
                        {activity.avatarUrl ? (
                          <img
                            src={activity.avatarUrl}
                            alt={`${activity.user}のアバター`}
                            style={{
                              width: '32px',
                              height: '32px',
                              borderRadius: 0,
                              objectFit: 'cover',
                            }}
                          />
                        ) : (
                          <div
                            style={{
                              width: '32px',
                              height: '32px',
                              borderRadius: 0,
                              background: 'var(--color-primary-500)',
                              color: 'var(--color-neutral-white)',
                              display: 'flex',
                              alignItems: 'center',
                              justifyContent: 'center',
                              fontSize: 'var(--font-size-sm)',
                              fontWeight: 'var(--font-weight-semibold)',
                            }}
                            aria-hidden="true"
                          >
                            {activity.user.charAt(0)}
                          </div>
                        )}
                        <div>
                          <div
                            style={{
                              fontSize: 'var(--font-size-sm)',
                              fontWeight: 'var(--font-weight-medium)',
                              color: 'var(--color-neutral-900)',
                            }}
                          >
                            {activity.user}
                          </div>
                          <div
                            style={{
                              fontSize: 'var(--font-size-xs)',
                              color: 'var(--color-neutral-600)',
                            }}
                          >
                            {activity.action}
                          </div>
                        </div>
                      </div>
                      <div
                        style={{
                          fontSize: 'var(--font-size-xs)',
                          color: 'var(--color-neutral-500)',
                        }}
                      >
                        {activity.time}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Quick Actions Section */}
            {quickActions.length > 0 && (
              <div
                style={{
                  background: 'var(--color-neutral-white)',
                  border: '1px solid var(--color-neutral-200)',
                  borderRadius: 0,
                  padding: 'var(--spacing-5)',
                }}
                role="region"
                aria-label="クイックアクション"
              >
                <h2
                  style={{
                    fontSize: 'var(--font-size-lg)',
                    fontWeight: 'var(--font-weight-semibold)',
                    color: 'var(--color-neutral-900)',
                    marginBottom: 'var(--spacing-4)',
                  }}
                >
                  クイックアクション
                </h2>
                <div
                  style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
                    gap: 'var(--spacing-3)',
                  }}
                >
                  {actionsToDisplay.map((action, index) => (
                    <button
                      key={index}
                      onClick={action.onClick}
                      style={{
                        padding: 'var(--spacing-3)',
                        borderRadius: 0,
                        border: '1px solid var(--color-neutral-300)',
                        background: 'var(--color-neutral-white)',
                        cursor: 'pointer',
                        display: 'flex',
                        alignItems: 'center',
                        gap: 'var(--spacing-2)',
                        transition: 'all 0.2s',
                      }}
                      onMouseOver={(e) => {
                        e.currentTarget.style.background = 'var(--color-neutral-50)';
                        e.currentTarget.style.borderColor = 'var(--color-primary-500)';
                      }}
                      onMouseOut={(e) => {
                        e.currentTarget.style.background = 'var(--color-neutral-white)';
                        e.currentTarget.style.borderColor = 'var(--color-neutral-300)';
                      }}
                      aria-label={action.label}
                    >
                      <Icon name={action.icon} size="sm" />
                      <span
                        style={{
                          fontSize: 'var(--font-size-sm)',
                          fontWeight: 'var(--font-weight-medium)',
                        }}
                      >
                        {action.label}
                      </span>
                    </button>
                  ))}
                </div>
              </div>
            )}
          </div>
        )}
      </InfoPageWrapper>
    </div>
  );
};

export default DashboardPage;
