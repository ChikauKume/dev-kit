import React, { useState, useRef } from 'react';
import InfoPageWrapper from '../../../components/layout/InfoPageWrapper';
import TemplateNavigation from '../../../components/navigation/TemplateNavigation';
import Button from '../../../components/buttons/Button';
import InputField from '../../../components/forms/InputField';
import Icon from '../../../components/icons/Icon';
import { useViewMode } from '../../../hooks/useViewMode';

/**
 * Profile data structure for user settings
 * @interface ProfileData
 * @property {string} username - User's unique username
 * @property {string} email - User's email address
 * @property {string} role - User's role/permission level (read-only)
 * @property {string} displayName - User's display name (editable)
 * @property {string} phone - User's phone number (editable)
 * @property {string} department - User's department (editable)
 */
export interface ProfileData {
  username: string;
  email: string;
  role: string;
  displayName: string;
  phone: string;
  department: string;
}

/**
 * Notification structure for the notification dropdown
 * @interface Notification
 * @property {string | number} id - Unique notification identifier
 * @property {string} title - Notification title
 * @property {string} message - Notification message content
 * @property {string} time - Relative time string
 * @property {boolean} read - Read/unread status
 */
export interface Notification {
  id: string | number;
  title: string;
  message: string;
  time: string;
  read: boolean;
}

/**
 * Props for SettingsPage component
 * @interface SettingsPageProps
 *
 * @description
 * This component provides a user settings page with profile editing functionality.
 * Designed for Laravel/Inertia integration with props-driven data management.
 *
 * @example
 * // Laravel Controller Example:
 * ```php
 * use Inertia\Inertia;
 *
 * public function show()
 * {
 *     return Inertia::render('Settings/SettingsPage', [
 *         'profileData' => [
 *             'username' => auth()->user()->username,
 *             'email' => auth()->user()->email,
 *             'role' => auth()->user()->role->name,
 *             'displayName' => auth()->user()->display_name,
 *             'phone' => auth()->user()->phone,
 *             'department' => auth()->user()->department,
 *         ],
 *         'notifications' => Notification::where('user_id', auth()->id())
 *             ->latest()
 *             ->get()
 *             ->map(fn($n) => [
 *                 'id' => $n->id,
 *                 'title' => $n->title,
 *                 'message' => $n->message,
 *                 'time' => $n->created_at->diffForHumans(),
 *                 'read' => !is_null($n->read_at),
 *             ]),
 *         'currentPage' => 'settings',
 *     ]);
 * }
 *
 * public function update(Request $request)
 * {
 *     $validated = $request->validate([
 *         'displayName' => 'required|string|max:255',
 *         'username' => 'required|string|max:255|unique:users,username,' . auth()->id(),
 *         'email' => 'required|email|unique:users,email,' . auth()->id(),
 *         'phone' => 'nullable|string|max:20',
 *         'department' => 'nullable|string|max:255',
 *     ]);
 *
 *     auth()->user()->update([
 *         'display_name' => $validated['displayName'],
 *         'username' => $validated['username'],
 *         'email' => $validated['email'],
 *         'phone' => $validated['phone'],
 *         'department' => $validated['department'],
 *     ]);
 *
 *     return back()->with('success', 'プロフィールを保存しました');
 * }
 * ```
 *
 * **React Router不要**: このコンポーネントはReact Routerに依存しません
 * **Inertia.js対応**: onNavigateコールバックでルーティング制御
 *
 * @example
 * // React/Inertia Usage:
 * ```tsx
 * import { router } from '@inertiajs/react';
 * import SettingsPage from '@/pages/templates/settings/SettingsPage';
 *
 * <SettingsPage
 *   profileData={profileData}
 *   notifications={notifications}
 *   currentPage="settings"
 *   onSave={async (data) => {
 *     router.put('/settings/profile', data, {
 *       preserveScroll: true,
 *       onSuccess: () => console.log('Profile updated'),
 *       onError: (errors) => console.error('Validation errors:', errors)
 *     });
 *   }}
 *   onNavigate={(page) => router.visit(`/${page}`)}
 *   onMarkNotificationAsRead={(id) => router.post(`/notifications/${id}/read`)}
 *   onMarkAllNotificationsAsRead={() => router.post('/notifications/read-all')}
 *   flashMessage={flashMessage}
 * />
 * ```
 */
export interface SettingsPageProps {
  /**
   * プロフィールデータ
   *
   * 【重要】このプロパティが渡されない場合、すべてのフィールドは空で表示されます。
   * バックエンドからユーザーデータを渡すことを推奨します。
   *
   * @default 空オブジェクト（すべてのフィールドが空文字）
   *
   * @example
   * ```tsx
   * profileData={{
   *   username: user.name,
   *   email: user.email,
   *   role: user.role,
   *   displayName: user.display_name || user.name,
   *   phone: user.phone || '',
   *   department: user.department || ''
   * }}
   * ```
   */
  profileData?: ProfileData;

  /**
   * List of notifications for the header dropdown
   * @default Demo notifications (see defaultProps)
   */
  notifications?: Notification[];

  /**
   * Current active page identifier for navigation highlighting
   * @default 'settings'
   */
  currentPage?: string;

  /**
   * Callback when user saves profile changes
   * @param data - Updated profile data
   * @returns Promise that resolves when save is complete
   *
   * @example
   * ```tsx
   * onSave={async (data) => {
   *   await fetch('/api/profile', {
   *     method: 'PUT',
   *     body: JSON.stringify(data)
   *   });
   * }}
   * ```
   */
  onSave?: (data: ProfileData) => Promise<void>;

  /**
   * Callback for page navigation
   * @param page - Page identifier (e.g., 'dashboard', 'data-list')
   *
   * @example
   * ```tsx
   * onNavigate={(page) => router.visit(`/${page}`)}
   * ```
   */
  onNavigate?: (page: string) => void;

  /**
   * Callback for logout action
   *
   * @example
   * ```tsx
   * onLogout={() => router.post('/logout')}
   * ```
   */
  onLogout?: () => void;

  /**
   * Callback to mark a single notification as read
   * @param notificationId - ID of notification to mark as read
   *
   * @example
   * ```tsx
   * onMarkNotificationAsRead={(id) => {
   *   router.post(`/notifications/${id}/read`);
   * }}
   * ```
   */
  onMarkNotificationAsRead?: (notificationId: string | number) => void;

  /**
   * Callback to mark all notifications as read
   *
   * @example
   * ```tsx
   * onMarkAllNotificationsAsRead={() => {
   *   router.post('/notifications/read-all');
   * }}
   * ```
   */
  onMarkAllNotificationsAsRead?: () => void;

  /**
   * Flash message from backend (success/error)
   * Pass from Laravel session flash or Inertia shared data
   *
   * @example
   * ```php
   * // Laravel Controller:
   * return back()->with('success', 'Profile updated successfully');
   *
   * // HandleInertiaRequests middleware:
   * public function share(Request $request)
   * {
   *     return array_merge(parent::share($request), [
   *         'flash' => [
   *             'success' => $request->session()->get('success'),
   *             'error' => $request->session()->get('error'),
   *         ],
   *     ]);
   * }
   * ```
   */
  flashMessage?: string | null;

  /**
   * Initial view mode (pc, tablet, sp)
   * @default 'pc'
   */
  initialViewMode?: 'pc' | 'tablet' | 'sp';

  /**
   * Hide template navigation (category dropdowns)
   * Set to true to hide "ログイン前/ログイン後/その他" navigation
   * @default false
   */
  hideNavigation?: boolean;
}

/**
 * Settings Page Component
 *
 * @description
 * A production-ready settings page template with profile editing functionality.
 * Features include:
 * - Inline profile editing with save/cancel
 * - Flash message notifications
 * - InfoPageWrapper integration (header, sidebar, notifications)
 * - Responsive design support (PC/Tablet/SP)
 * - Props-driven for Laravel/Inertia backend integration
 *
 * @component
 *
 * @architectural-notes
 * - Uses InfoPageWrapper for consistent layout
 * - Supports both controlled (props) and demo mode
 * - Flash messages auto-dismiss after 3 seconds
 * - Form validation should be handled by backend
 * - Role field is read-only (managed server-side)
 *
 * @accessibility
 * - Semantic HTML structure
 * - ARIA labels on interactive elements
 * - Keyboard navigation support
 * - Screen reader friendly
 *
 * @responsive-behavior
 * - PC: Full layout with sidebar
 * - Tablet: Collapsible sidebar
 * - SP: Hamburger menu navigation
 *
 * @state-management
 * - Local editing state (isEditing, editedData)
 * - Props override demo data when provided
 * - Flash messages managed locally with auto-dismiss
 *
 * @integration-checklist
 * 1. [ ] Set up Laravel route: PUT /settings/profile
 * 2. [ ] Implement validation rules in controller
 * 3. [ ] Pass profileData from Inertia
 * 4. [ ] Wire up onSave callback to Inertia router
 * 5. [ ] Configure flash messages in middleware
 * 6. [ ] Set up notification endpoints
 * 7. [ ] Test responsive behavior
 * 8. [ ] Add loading states during save
 */
const SettingsPage: React.FC<SettingsPageProps> = ({
  profileData: initialProfileData,
  notifications: initialNotifications,
  currentPage = 'settings',
  onSave,
  onNavigate,
  onLogout,
  onMarkNotificationAsRead,
  onMarkAllNotificationsAsRead,
  flashMessage: initialFlashMessage = null,
  initialViewMode = 'pc',
  hideNavigation = true
}) => {
  const notificationRef = useRef<HTMLDivElement>(null);

  // View mode and UI state
  const [viewMode, setViewMode] = useViewMode(initialViewMode);
  const [showNotificationDropdown, setShowNotificationDropdown] = useState(false);
  const [showUserMenu, setShowUserMenu] = useState(false);
  const [isHamburgerOpen, setIsHamburgerOpen] = useState(false);
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);

  // Profile editing state
  const [isEditing, setIsEditing] = useState(false);
  const [flashMessage, setFlashMessage] = useState<string | null>(initialFlashMessage);

  // Default empty profile data (used when props not provided)
  const defaultProfileData: ProfileData = {
    username: '',
    email: '',
    role: '',
    displayName: '',
    phone: '',
    department: ''
  };

  const [profileData, setProfileData] = useState<ProfileData>(
    initialProfileData || defaultProfileData
  );
  const [editedData, setEditedData] = useState<ProfileData>({ ...profileData });

  // Demo notifications (used when props not provided)
  const defaultNotifications: Notification[] = [
    { id: 1, title: '新しいメッセージ', message: 'システムから重要なお知らせがあります', time: '5分前', read: false },
    { id: 2, title: 'データ更新完了', message: 'データの同期が完了しました', time: '1時間前', read: false },
    { id: 3, title: 'メンテナンスのお知らせ', message: '明日の深夜にメンテナンスを実施します', time: '3時間前', read: true },
  ];

  const [notifications, setNotifications] = useState<Notification[]>(
    initialNotifications || defaultNotifications
  );

  /**
   * Navigation handler
   * Uses provided callback or falls back to window.location
   */
  const handleNavigate = (page: string) => {
    if (onNavigate) {
      onNavigate(page);
      return;
    }

    // Fallback navigation for demo mode
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
   */
  const handleLogout = () => {
    if (onLogout) {
      onLogout();
      return;
    }
    handleNavigate('login');
  };

  /**
   * Mark individual notification as read
   */
  const handleMarkNotificationAsRead = (notificationId: string | number) => {
    if (onMarkNotificationAsRead) {
      onMarkNotificationAsRead(notificationId);
    } else {
      // Fallback: local state update for demo mode
      setNotifications(prevNotifications =>
        prevNotifications.map(notification =>
          notification.id === notificationId
            ? { ...notification, read: true }
            : notification
        )
      );
    }
  };

  /**
   * Mark all notifications as read
   */
  const handleMarkAllNotificationsAsRead = () => {
    if (onMarkAllNotificationsAsRead) {
      onMarkAllNotificationsAsRead();
    } else {
      // Fallback: local state update for demo mode
      setNotifications(prevNotifications =>
        prevNotifications.map(notification => ({ ...notification, read: true }))
      );
    }
  };

  /**
   * Enter edit mode
   */
  const handleEdit = () => {
    setEditedData({ ...profileData });
    setIsEditing(true);
  };

  /**
   * Save profile changes
   * Calls provided onSave callback or updates local state
   */
  const handleSave = async () => {
    if (onSave) {
      try {
        await onSave(editedData);
        setProfileData({ ...editedData });
        setIsEditing(false);
        // Flash message should come from backend via props
        // But we can show a temporary message if not provided
        if (!initialFlashMessage) {
          setFlashMessage('プロフィールを保存しました');
          setTimeout(() => setFlashMessage(null), 3000);
        }
      } catch (error) {
        // Error handling should be done by parent component/backend
        console.error('Save failed:', error);
        setFlashMessage('保存に失敗しました');
        setTimeout(() => setFlashMessage(null), 3000);
      }
    } else {
      // Fallback: local state update for demo mode
      setProfileData({ ...editedData });
      setIsEditing(false);
      setFlashMessage('プロフィールを保存しました');
      setTimeout(() => setFlashMessage(null), 3000);
    }
  };

  /**
   * Cancel editing and revert changes
   */
  const handleCancel = () => {
    setEditedData({ ...profileData });
    setIsEditing(false);
  };

  /**
   * Handle input field changes
   */
  const handleInputChange = (field: keyof ProfileData, value: string) => {
    setEditedData(prev => ({ ...prev, [field]: value }));
  };

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
        <div style={{ padding: 'var(--spacing-6)', maxWidth: '1000px', margin: '0 auto' }}>
          <h1 style={{
            fontSize: 'var(--font-size-3xl)',
            fontWeight: 'var(--font-weight-bold)',
            marginBottom: 'var(--spacing-6)',
            color: 'var(--color-neutral-900)'
          }}>
            設定
          </h1>

          {/* Flash Message */}
          {flashMessage && (
            <div style={{
              padding: 'var(--spacing-4)',
              marginBottom: 'var(--spacing-4)',
              backgroundColor: 'var(--color-success-50)',
              border: '1px solid var(--color-success-200)',
              borderRadius: 0,
              color: 'var(--color-success-700)',
              display: 'flex',
              alignItems: 'center',
              gap: 'var(--spacing-2)'
            }}>
              <Icon name="check-circle" style={{ width: '20px', height: '20px' }} />
              {flashMessage}
            </div>
          )}

          {/* Profile Settings */}
          <div style={{
            marginBottom: 'var(--spacing-8)',
            padding: 'var(--spacing-6)',
            backgroundColor: 'var(--color-neutral-white)',
            borderRadius: 0,
            border: '1px solid var(--color-neutral-200)'
          }}>
            <div style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              marginBottom: 'var(--spacing-4)'
            }}>
              <h2 style={{
                fontSize: 'var(--font-size-xl)',
                fontWeight: 'var(--font-weight-semibold)',
                color: 'var(--color-neutral-900)',
                margin: 0
              }}>
                プロフィール設定
              </h2>
              {!isEditing && (
                <button
                  className="btn btn--primary"
                  onClick={handleEdit}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: 'var(--spacing-2)'
                  }}
                >
                  <Icon name="edit" style={{ width: '16px', height: '16px' }} />
                  編集
                </button>
              )}
            </div>

            {isEditing ? (
              <div style={{ display: 'flex', flexDirection: 'column', gap: viewMode === 'sp' ? 'var(--spacing-2)' : 'var(--spacing-1_5)' }}>
                <InputField
                  label="表示名"
                  name="displayName"
                  value={editedData.displayName}
                  onChange={(e) => handleInputChange('displayName', e.target.value)}
                  placeholder="表示名を入力"
                />
                <InputField
                  label="ユーザー名"
                  name="username"
                  value={editedData.username}
                  onChange={(e) => handleInputChange('username', e.target.value)}
                  placeholder="ユーザー名を入力"
                />
                <InputField
                  label="メールアドレス"
                  name="email"
                  type="email"
                  value={editedData.email}
                  onChange={(e) => handleInputChange('email', e.target.value)}
                  placeholder="メールアドレスを入力"
                />
                <InputField
                  label="電話番号"
                  name="phone"
                  value={editedData.phone}
                  onChange={(e) => handleInputChange('phone', e.target.value)}
                  placeholder="電話番号を入力"
                />
                <InputField
                  label="部署"
                  name="department"
                  value={editedData.department}
                  onChange={(e) => handleInputChange('department', e.target.value)}
                  placeholder="部署を入力"
                />
                <div style={{
                  display: 'flex',
                  gap: 'var(--spacing-2)',
                  justifyContent: 'flex-end',
                  marginTop: 'var(--spacing-2)'
                }}>
                  <Button
                    variant="text"
                    onClick={handleCancel}
                  >
                    キャンセル
                  </Button>
                  <Button
                    variant="primary"
                    onClick={handleSave}
                  >
                    保存
                  </Button>
                </div>
              </div>
            ) : (
              <div style={{ color: 'var(--color-neutral-600)' }}>
                <p style={{ marginBottom: 'var(--spacing-2)' }}>
                  <strong>表示名:</strong> {profileData.displayName}
                </p>
                <p style={{ marginBottom: 'var(--spacing-2)' }}>
                  <strong>ユーザー名:</strong> {profileData.username}
                </p>
                <p style={{ marginBottom: 'var(--spacing-2)' }}>
                  <strong>メールアドレス:</strong> {profileData.email}
                </p>
                <p style={{ marginBottom: 'var(--spacing-2)' }}>
                  <strong>電話番号:</strong> {profileData.phone}
                </p>
                <p style={{ marginBottom: 'var(--spacing-2)' }}>
                  <strong>部署:</strong> {profileData.department}
                </p>
                <p><strong>役割:</strong> {profileData.role}</p>
              </div>
            )}
          </div>
        </div>
      </InfoPageWrapper>
    </div>
  );
};

export default SettingsPage;
