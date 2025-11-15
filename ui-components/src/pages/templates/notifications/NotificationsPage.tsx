import React, { useState, useRef } from 'react';
import InfoPageWrapper from '../../../components/layout/InfoPageWrapper';
import Icon from '../../../components/icons/Icon';
import { useViewMode } from '../../../hooks/useViewMode';

/**
 * Notification Type Definition
 *
 * Represents individual notification structure.
 * Map to your Laravel notification model.
 */
export interface Notification {
  /** Unique notification identifier */
  id: string | number;

  /** Notification type - affects icon and color styling */
  type?: 'info' | 'success' | 'warning' | 'danger';

  /** Notification title/subject */
  title: string;

  /** Notification message/body */
  message: string;

  /** Human-readable time string (e.g., "2時間前", "1 day ago") */
  time: string;

  /** Read/unread status */
  read: boolean;

  /** Optional: Associated resource URL */
  url?: string;

  /** Optional: Additional metadata for custom handling */
  metadata?: Record<string, any>;
}

/**
 * NotificationsPage Component Props
 *
 * @description
 * Production-ready notifications page template for Laravel/Inertia integration.
 * Displays a list of notifications with read/unread status management.
 *
 * @example Laravel Controller Usage
 * ```php
 * use Inertia\Inertia;
 *
 * public function index(Request $request)
 * {
 *     $notifications = $request->user()
 *         ->notifications()
 *         ->paginate(20);
 *
 *     return Inertia::render('NotificationsPage', [
 *         'notifications' => $notifications->items()->map(function ($notification) {
 *             return [
 *                 'id' => $notification->id,
 *                 'type' => $notification->data['type'] ?? 'info',
 *                 'title' => $notification->data['title'],
 *                 'message' => $notification->data['message'],
 *                 'time' => $notification->created_at->diffForHumans(),
 *                 'read' => !is_null($notification->read_at),
 *                 'url' => $notification->data['url'] ?? null,
 *             ];
 *         }),
 *         'pagination' => [
 *             'current_page' => $notifications->currentPage(),
 *             'last_page' => $notifications->lastPage(),
 *             'per_page' => $notifications->perPage(),
 *             'total' => $notifications->total(),
 *         ],
 *         'unreadCount' => $request->user()->unreadNotifications()->count(),
 *     ]);
 * }
 * ```
 *
 * @example Laravel API Routes
 * ```php
 * // Mark single notification as read
 * Route::post('/notifications/{id}/mark-as-read', function ($id) {
 *     auth()->user()->notifications()->find($id)?->markAsRead();
 *     return response()->json(['success' => true]);
 * });
 *
 * // Mark all notifications as read
 * Route::post('/notifications/mark-all-as-read', function () {
 *     auth()->user()->unreadNotifications->markAsRead();
 *     return response()->json(['success' => true]);
 * });
 * ```
 */
export interface NotificationsPageProps {
  /**
   * Array of notifications to display
   * @default [] - Empty array if no notifications
   */
  notifications?: Notification[];

  /**
   * Total unread notifications count
   * Used for header badge display
   */
  unreadCount?: number;

  /**
   * Callback when marking a single notification as read
   * Should make API call to backend
   *
   * @param id - Notification ID to mark as read
   * @returns Promise that resolves when operation completes
   *
   * @example
   * ```tsx
   * const handleMarkAsRead = async (id: string | number) => {
   *   await axios.post(`/api/notifications/${id}/mark-as-read`);
   *   // Optionally refetch notifications or update local state
   * };
   * ```
   */
  onMarkAsRead?: (id: string | number) => Promise<void>;

  /**
   * Callback when marking all notifications as read
   * Should make API call to backend
   *
   * @returns Promise that resolves when operation completes
   *
   * @example
   * ```tsx
   * const handleMarkAllAsRead = async () => {
   *   await axios.post('/api/notifications/mark-all-as-read');
   *   // Optionally refetch notifications or update local state
   * };
   * ```
   */
  onMarkAllAsRead?: () => Promise<void>;

  /**
   * Callback when clicking on a notification
   * Use this to navigate to related resource or perform custom action
   *
   * @param notification - The clicked notification object
   */
  onNotificationClick?: (notification: Notification) => void;

  /**
   * Page navigation handler
   * @param page - Page identifier (e.g., 'dashboard', 'settings')
   */
  onNavigate: (page: string) => void;

  /**
   * Callback for logout action
   *
   * @example
   * ```tsx
   * onLogout={() => router.post('/logout')}
   * ```
   */
  onLogout: () => void;

  /**
   * Current active page identifier
   * @default 'notifications'
   */
  currentPage?: string;

  /**
   * Initial view mode override
   * @default undefined - Uses hook default
   */
  initialViewMode?: 'pc' | 'tablet' | 'sp';

  /**
   * Pagination data (optional)
   * For implementing infinite scroll or pagination
   */
  pagination?: {
    currentPage: number;
    lastPage: number;
    perPage: number;
    total: number;
  };

  /**
   * Callback for loading more notifications
   * For pagination or infinite scroll implementation
   */
  onLoadMore?: (page: number) => Promise<void>;

  /**
   * Loading state for async operations
   */
  isLoading?: boolean;

  /**
   * Custom empty state message
   * @default '通知はありません'
   */
  emptyMessage?: string;

  /**
   * Enable filtering by notification type
   * @default false
   */
  enableTypeFilter?: boolean;

  /**
   * Enable filtering by read/unread status
   * @default false
   */
  enableStatusFilter?: boolean;
}

/**
 * NotificationsPage Component
 *
 * @description
 * A production-ready notifications page template with the following features:
 * - Display notifications list with type-based icons and colors
 * - Mark individual notifications as read
 * - Mark all notifications as read
 * - Responsive design (PC, Tablet, Mobile)
 * - Integration with InfoPageWrapper for consistent layout
 * - Backend-ready with proper callback props
 * - Pagination support (optional)
 * - Filtering by type and status (optional)
 *
 * @component
 */
const NotificationsPage: React.FC<NotificationsPageProps> = ({
  notifications = [],
  unreadCount = 0,
  onMarkAsRead,
  onMarkAllAsRead,
  onNotificationClick,
  onNavigate,
  onLogout,
  currentPage = 'notifications',
  initialViewMode,
  pagination,
  onLoadMore,
  isLoading = false,
  emptyMessage = '通知はありません',
  enableTypeFilter = false,
  enableStatusFilter = false,
}) => {
  const notificationRef = useRef<HTMLDivElement>(null);

  // View mode state
  const [viewMode, setViewMode] = useViewMode(initialViewMode);

  // UI state for InfoPageWrapper
  const [showNotificationDropdown, setShowNotificationDropdown] = useState(false);
  const [showUserMenu, setShowUserMenu] = useState(false);
  const [isHamburgerOpen, setIsHamburgerOpen] = useState(false);
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);

  // Local state for optimistic updates
  const [localNotifications, setLocalNotifications] = useState<Notification[]>(notifications);
  const [processingIds, setProcessingIds] = useState<Set<string | number>>(new Set());

  // Filter state (optional)
  const [selectedType, setSelectedType] = useState<string | null>(null);
  const [selectedStatus, setSelectedStatus] = useState<'all' | 'read' | 'unread'>('all');

  // Update local notifications when props change
  React.useEffect(() => {
    setLocalNotifications(notifications);
  }, [notifications]);

  /**
   * Handle marking a single notification as read
   * Implements optimistic UI update
   */
  const handleMarkNotificationAsRead = async (notificationId: string | number) => {
    // Optimistic update
    setLocalNotifications(prev =>
      prev.map(notification =>
        notification.id === notificationId
          ? { ...notification, read: true }
          : notification
      )
    );

    setProcessingIds(prev => new Set(prev).add(notificationId));

    try {
      // Call backend API
      if (onMarkAsRead) {
        await onMarkAsRead(notificationId);
      }
    } catch (error) {
      // Revert optimistic update on error
      setLocalNotifications(notifications);
      console.error('Failed to mark notification as read:', error);
      // Optionally show error toast/alert
    } finally {
      setProcessingIds(prev => {
        const next = new Set(prev);
        next.delete(notificationId);
        return next;
      });
    }
  };

  /**
   * Handle marking all notifications as read
   * Implements optimistic UI update
   */
  const handleMarkAllNotificationsAsRead = async () => {
    // Optimistic update
    const previousNotifications = [...localNotifications];
    setLocalNotifications(prev =>
      prev.map(notification => ({ ...notification, read: true }))
    );

    try {
      // Call backend API
      if (onMarkAllAsRead) {
        await onMarkAllAsRead();
      }
    } catch (error) {
      // Revert optimistic update on error
      setLocalNotifications(previousNotifications);
      console.error('Failed to mark all notifications as read:', error);
      // Optionally show error toast/alert
    }
  };

  /**
   * Handle notification click
   */
  const handleNotificationClick = (notification: Notification) => {
    if (onNotificationClick) {
      onNotificationClick(notification);
    }

    // Optionally mark as read on click
    if (!notification.read) {
      handleMarkNotificationAsRead(notification.id);
    }
  };

  const handleLogout = () => {
    if (onLogout) {
      onLogout();
      return;
    }
    handleNavigate('login');
  };

  /**
   * Get icon name based on notification type
   */
  const getIconName = (type: string = 'info') => {
    switch (type) {
      case 'success': return 'check-circle';
      case 'warning': return 'warning';
      case 'error': return 'exclamation';
      default: return 'info';
    }
  };

  /**
   * Get icon color based on notification type
   */
  const getIconColor = (type: string = 'info') => {
    switch (type) {
      case 'success': return 'var(--color-success-600)';
      case 'warning': return 'var(--color-warning-600)';
      case 'error': return 'var(--color-error-600)';
      default: return 'var(--color-primary-600)';
    }
  };

  /**
   * Apply filters to notifications
   */
  const filteredNotifications = localNotifications.filter(notification => {
    // Type filter
    if (enableTypeFilter && selectedType && notification.type !== selectedType) {
      return false;
    }

    // Status filter
    if (enableStatusFilter) {
      if (selectedStatus === 'read' && !notification.read) return false;
      if (selectedStatus === 'unread' && notification.read) return false;
    }

    return true;
  });

  /**
   * Calculate unread count from local notifications
   */
  const calculatedUnreadCount = unreadCount || localNotifications.filter(n => !n.read).length;

  return (
    <div className={viewMode === 'sp' ? 'force-mobile' : ''}>
      
      <InfoPageWrapper
        viewMode={viewMode}
        currentPage={currentPage}
        onNavigate={onNavigate}
        unreadCount={calculatedUnreadCount}
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
        onLogout={handleLogout}
      >
        <div style={{ padding: 'var(--spacing-6)', maxWidth: '900px' }}>
          {/* Header Section */}
          <div style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginBottom: 'var(--spacing-6)',
            flexWrap: 'wrap',
            gap: 'var(--spacing-4)'
          }}>
            <h1 style={{
              fontSize: 'var(--font-size-3xl)',
              fontWeight: 'var(--font-weight-bold)',
              color: 'var(--color-neutral-900)',
              margin: 0
            }}>
              通知一覧
            </h1>

            {localNotifications.some(n => !n.read) && (
              <button
                onClick={handleMarkAllNotificationsAsRead}
                disabled={isLoading}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: 'var(--spacing-2)',
                  padding: 'var(--spacing-2) var(--spacing-4)',
                  background: 'var(--color-primary-500)',
                  color: 'var(--color-neutral-white)',
                  border: 'none',
                  borderRadius: 0,
                  fontSize: 'var(--font-size-sm)',
                  fontWeight: 'var(--font-weight-medium)',
                  cursor: isLoading ? 'not-allowed' : 'pointer',
                  transition: 'background-color 0.2s',
                  opacity: isLoading ? 0.6 : 1
                }}
                onMouseEnter={(e) => {
                  if (!isLoading) {
                    e.currentTarget.style.backgroundColor = 'var(--color-primary-600)';
                  }
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = 'var(--color-primary-500)';
                }}
              >
                <Icon name="check" style={{ width: '16px', height: '16px' }} />
                全て既読にする
              </button>
            )}
          </div>

          {/* Filter Section (Optional) */}
          {(enableTypeFilter || enableStatusFilter) && (
            <div style={{
              display: 'flex',
              gap: 'var(--spacing-4)',
              marginBottom: 'var(--spacing-6)',
              flexWrap: 'wrap'
            }}>
              {/* Type Filter */}
              {enableTypeFilter && (
                <div style={{ display: 'flex', gap: 'var(--spacing-2)' }}>
                  <button
                    onClick={() => setSelectedType(null)}
                    style={{
                      padding: 'var(--spacing-2) var(--spacing-3)',
                      background: selectedType === null ? 'var(--color-primary-500)' : 'var(--color-neutral-100)',
                      color: selectedType === null ? 'var(--color-neutral-white)' : 'var(--color-neutral-700)',
                      border: 'none',
                      borderRadius: 0,
                      fontSize: 'var(--font-size-sm)',
                      cursor: 'pointer'
                    }}
                  >
                    全て
                  </button>
                  {['info', 'success', 'warning', 'error'].map(type => (
                    <button
                      key={type}
                      onClick={() => setSelectedType(type)}
                      style={{
                        padding: 'var(--spacing-2) var(--spacing-3)',
                        background: selectedType === type ? 'var(--color-primary-500)' : 'var(--color-neutral-100)',
                        color: selectedType === type ? 'var(--color-neutral-white)' : 'var(--color-neutral-700)',
                        border: 'none',
                        borderRadius: 0,
                        fontSize: 'var(--font-size-sm)',
                        cursor: 'pointer'
                      }}
                    >
                      {type}
                    </button>
                  ))}
                </div>
              )}

              {/* Status Filter */}
              {enableStatusFilter && (
                <div style={{ display: 'flex', gap: 'var(--spacing-2)' }}>
                  {(['all', 'read', 'unread'] as const).map(status => (
                    <button
                      key={status}
                      onClick={() => setSelectedStatus(status)}
                      style={{
                        padding: 'var(--spacing-2) var(--spacing-3)',
                        background: selectedStatus === status ? 'var(--color-primary-500)' : 'var(--color-neutral-100)',
                        color: selectedStatus === status ? 'var(--color-neutral-white)' : 'var(--color-neutral-700)',
                        border: 'none',
                        borderRadius: 0,
                        fontSize: 'var(--font-size-sm)',
                        cursor: 'pointer'
                      }}
                    >
                      {status === 'all' ? '全て' : status === 'read' ? '既読' : '未読'}
                    </button>
                  ))}
                </div>
              )}
            </div>
          )}

          {/* Notifications List */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--spacing-4)' }}>
            {filteredNotifications.length === 0 ? (
              // Empty State
              <div style={{
                padding: 'var(--spacing-8)',
                textAlign: 'center',
                backgroundColor: 'var(--color-neutral-50)',
                borderRadius: 0,
                border: '1px solid var(--color-neutral-200)'
              }}>
                <Icon
                  name="info"
                  style={{
                    width: '48px',
                    height: '48px',
                    color: 'var(--color-neutral-400)',
                    margin: '0 auto var(--spacing-4)'
                  }}
                />
                <p style={{
                  fontSize: 'var(--font-size-lg)',
                  color: 'var(--color-neutral-600)',
                  margin: 0
                }}>
                  {emptyMessage}
                </p>
              </div>
            ) : (
              filteredNotifications.map((notification) => (
                <div
                  key={notification.id}
                  onClick={() => handleNotificationClick(notification)}
                  style={{
                    padding: 'var(--spacing-5)',
                    backgroundColor: notification.read ? 'var(--color-neutral-50)' : 'var(--color-neutral-white)',
                    borderRadius: 0,
                    border: '1px solid var(--color-neutral-200)',
                    display: 'flex',
                    gap: 'var(--spacing-4)',
                    alignItems: 'start',
                    boxShadow: notification.read ? 'none' : 'var(--shadow-sm)',
                    position: 'relative',
                    cursor: onNotificationClick ? 'pointer' : 'default',
                    transition: 'transform 0.2s, box-shadow 0.2s',
                    opacity: processingIds.has(notification.id) ? 0.6 : 1
                  }}
                  onMouseEnter={(e) => {
                    if (onNotificationClick && !notification.read) {
                      e.currentTarget.style.transform = 'translateY(-2px)';
                      e.currentTarget.style.boxShadow = 'var(--shadow-md)';
                    }
                  }}
                  onMouseLeave={(e) => {
                    if (onNotificationClick) {
                      e.currentTarget.style.transform = 'translateY(0)';
                      e.currentTarget.style.boxShadow = notification.read ? 'none' : 'var(--shadow-sm)';
                    }
                  }}
                >
                  {/* Notification Icon */}
                  <Icon
                    name={getIconName(notification.type)}
                    style={{
                      width: '24px',
                      height: '24px',
                      color: getIconColor(notification.type),
                      flexShrink: 0
                    }}
                  />

                  {/* Notification Content */}
                  <div style={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
                    <div style={{
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'start',
                      marginBottom: 'var(--spacing-2)',
                      gap: 'var(--spacing-3)'
                    }}>
                      <h3 style={{
                        fontSize: 'var(--font-size-lg)',
                        fontWeight: 'var(--font-weight-semibold)',
                        color: 'var(--color-neutral-900)',
                        margin: 0
                      }}>
                        {notification.title}
                      </h3>
                      <span style={{
                        fontSize: 'var(--font-size-sm)',
                        color: 'var(--color-neutral-500)',
                        whiteSpace: 'nowrap',
                        flexShrink: 0
                      }}>
                        {notification.time}
                      </span>
                    </div>

                    <p style={{
                      fontSize: 'var(--font-size-base)',
                      color: 'var(--color-neutral-600)',
                      lineHeight: 'var(--line-height-relaxed)',
                      marginBottom: !notification.read ? 'var(--spacing-3)' : 0,
                      margin: 0
                    }}>
                      {notification.message}
                    </p>

                    {/* Mark as Read Button */}
                    {!notification.read && (
                      <div style={{ display: 'flex', justifyContent: 'flex-end', marginTop: 'var(--spacing-3)' }}>
                        <button
                          onClick={(e) => {
                            e.stopPropagation(); // Prevent triggering onNotificationClick
                            handleMarkNotificationAsRead(notification.id);
                          }}
                          disabled={processingIds.has(notification.id)}
                          style={{
                            display: 'flex',
                            alignItems: 'center',
                            gap: 'var(--spacing-1)',
                            padding: 'var(--spacing-1) var(--spacing-3)',
                            background: 'var(--color-neutral-100)',
                            color: 'var(--color-neutral-700)',
                            border: '1px solid var(--color-neutral-300)',
                            borderRadius: 0,
                            fontSize: 'var(--font-size-xs)',
                            fontWeight: 'var(--font-weight-medium)',
                            cursor: processingIds.has(notification.id) ? 'not-allowed' : 'pointer',
                            transition: 'all 0.2s'
                          }}
                          onMouseEnter={(e) => {
                            if (!processingIds.has(notification.id)) {
                              e.currentTarget.style.backgroundColor = 'var(--color-neutral-200)';
                              e.currentTarget.style.borderColor = 'var(--color-neutral-400)';
                            }
                          }}
                          onMouseLeave={(e) => {
                            e.currentTarget.style.backgroundColor = 'var(--color-neutral-100)';
                            e.currentTarget.style.borderColor = 'var(--color-neutral-300)';
                          }}
                        >
                          <Icon name="check" style={{ width: '12px', height: '12px' }} />
                          既読にする
                        </button>
                      </div>
                    )}
                  </div>
                </div>
              ))
            )}
          </div>

          {/* Pagination Section (Optional) */}
          {pagination && pagination.lastPage > 1 && (
            <div style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              gap: 'var(--spacing-4)',
              marginTop: 'var(--spacing-6)',
              padding: 'var(--spacing-4)'
            }}>
              <button
                onClick={() => onLoadMore && onLoadMore(pagination.currentPage - 1)}
                disabled={pagination.currentPage === 1 || isLoading}
                style={{
                  padding: 'var(--spacing-2) var(--spacing-4)',
                  background: pagination.currentPage === 1 ? 'var(--color-neutral-100)' : 'var(--color-primary-500)',
                  color: pagination.currentPage === 1 ? 'var(--color-neutral-400)' : 'var(--color-neutral-white)',
                  border: 'none',
                  borderRadius: 0,
                  fontSize: 'var(--font-size-sm)',
                  cursor: pagination.currentPage === 1 || isLoading ? 'not-allowed' : 'pointer'
                }}
              >
                前へ
              </button>

              <span style={{
                fontSize: 'var(--font-size-sm)',
                color: 'var(--color-neutral-700)'
              }}>
                {pagination.currentPage} / {pagination.lastPage}
              </span>

              <button
                onClick={() => onLoadMore && onLoadMore(pagination.currentPage + 1)}
                disabled={pagination.currentPage === pagination.lastPage || isLoading}
                style={{
                  padding: 'var(--spacing-2) var(--spacing-4)',
                  background: pagination.currentPage === pagination.lastPage ? 'var(--color-neutral-100)' : 'var(--color-primary-500)',
                  color: pagination.currentPage === pagination.lastPage ? 'var(--color-neutral-400)' : 'var(--color-neutral-white)',
                  border: 'none',
                  borderRadius: 0,
                  fontSize: 'var(--font-size-sm)',
                  cursor: pagination.currentPage === pagination.lastPage || isLoading ? 'not-allowed' : 'pointer'
                }}
              >
                次へ
              </button>
            </div>
          )}

          {/* Loading Indicator */}
          {isLoading && (
            <div style={{
              textAlign: 'center',
              padding: 'var(--spacing-4)',
              color: 'var(--color-neutral-600)',
              fontSize: 'var(--font-size-sm)'
            }}>
              読み込み中...
            </div>
          )}
        </div>
      </InfoPageWrapper>
    </div>
  );
};

export default NotificationsPage;
