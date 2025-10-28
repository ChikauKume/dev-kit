import React, { useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import InfoPageWrapper from '../../../components/layout/InfoPageWrapper';
import TemplateNavigation from '../../../components/navigation/TemplateNavigation';
import Icon from '../../../components/icons/Icon';
import { useViewMode } from '../../../hooks/useViewMode';

const NotificationsPage: React.FC = () => {
  const navigate = useNavigate();
  const notificationRef = useRef<HTMLDivElement>(null);

  const [viewMode, setViewMode] = useViewMode();
  const [showNotificationDropdown, setShowNotificationDropdown] = useState(false);
  const [showUserMenu, setShowUserMenu] = useState(false);
  const [isHamburgerOpen, setIsHamburgerOpen] = useState(false);
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);

  const handleNavigate = (page: string) => {
    // Map page names to routes
    const routeMap: Record<string, string> = {
      'dashboard': '/pages/dashboard',
      'data-list': '/pages/data/list',
      'statistics': '/pages/statistics',
      'settings': '/pages/settings',
      'notifications': '/pages/notifications',
      'login': '/pages/login',
      'qna': '/pages/qna',
      'privacy': '/pages/privacy',
      'terms': '/pages/terms',
      'commercial': '/pages/commercial',
    };

    const route = routeMap[page] || `/pages/${page}`;
    navigate(route);
  };

  const [notifications, setNotifications] = useState([
    { id: 1, type: 'info', title: 'システムアップデート', message: '新しい機能が追加されました', time: '2時間前', read: false },
    { id: 2, type: 'success', title: 'データ保存完了', message: 'データが正常に保存されました', time: '5時間前', read: false },
    { id: 3, type: 'warning', title: 'メンテナンス予定', message: '明日の深夜にメンテナンスを実施します', time: '1日前', read: true },
    { id: 4, type: 'error', title: 'エラー発生', message: '一部の機能でエラーが発生しています', time: '2日前', read: true }
  ]);

  // 個別通知を既読にする関数
  const handleMarkNotificationAsRead = (notificationId: string | number) => {
    setNotifications(prevNotifications =>
      prevNotifications.map(notification =>
        notification.id === notificationId
          ? { ...notification, read: true }
          : notification
      )
    );
  };

  // 全ての通知を既読にする関数
  const handleMarkAllNotificationsAsRead = () => {
    setNotifications(prevNotifications =>
      prevNotifications.map(notification => ({ ...notification, read: true }))
    );
  };

  const getIconName = (type: string) => {
    switch (type) {
      case 'success': return 'check-circle';
      case 'warning': return 'warning';
      case 'error': return 'exclamation';
      default: return 'info';
    }
  };

  const getIconColor = (type: string) => {
    switch (type) {
      case 'success': return 'var(--color-success-600)';
      case 'warning': return 'var(--color-warning-600)';
      case 'error': return 'var(--color-error-600)';
      default: return 'var(--color-primary-600)';
    }
  };

  return (
    <div className={viewMode === 'sp' ? 'force-mobile' : ''}>
      <TemplateNavigation
        viewMode={viewMode}
        onViewModeChange={setViewMode}
      />
      <InfoPageWrapper
        viewMode={viewMode}
        currentPage="notifications"
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
        <div style={{ padding: 'var(--spacing-6)', maxWidth: '900px' }}>
          <div style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginBottom: 'var(--spacing-6)'
          }}>
            <h1 style={{
              fontSize: 'var(--font-size-3xl)',
              fontWeight: 'var(--font-weight-bold)',
              color: 'var(--color-neutral-900)',
              margin: 0
            }}>
              通知一覧
            </h1>
            {notifications.some(n => !n.read) && (
              <button
                onClick={handleMarkAllNotificationsAsRead}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: 'var(--spacing-2)',
                  padding: 'var(--spacing-2) var(--spacing-4)',
                  background: 'var(--color-primary-500)',
                  color: 'var(--color-neutral-white)',
                  border: 'none',
                  borderRadius: 'var(--radius-md)',
                  fontSize: 'var(--font-size-sm)',
                  fontWeight: 'var(--font-weight-medium)',
                  cursor: 'pointer',
                  transition: 'background-color 0.2s'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = 'var(--color-primary-600)';
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

          <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--spacing-4)' }}>
            {notifications.map((notification) => (
              <div
                key={notification.id}
                style={{
                  padding: 'var(--spacing-5)',
                  backgroundColor: notification.read ? 'var(--color-neutral-50)' : 'var(--color-neutral-white)',
                  borderRadius: 'var(--radius-lg)',
                  border: '1px solid var(--color-neutral-200)',
                  display: 'flex',
                  gap: 'var(--spacing-4)',
                  alignItems: 'start',
                  boxShadow: notification.read ? 'none' : 'var(--shadow-sm)',
                  position: 'relative'
                }}
              >
                <Icon
                  name={getIconName(notification.type)}
                  style={{
                    width: '24px',
                    height: '24px',
                    color: getIconColor(notification.type),
                    flexShrink: 0
                  }}
                />
                <div style={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
                  <div style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'start',
                    marginBottom: 'var(--spacing-2)'
                  }}>
                    <h3 style={{
                      fontSize: 'var(--font-size-lg)',
                      fontWeight: 'var(--font-weight-semibold)',
                      color: 'var(--color-neutral-900)'
                    }}>
                      {notification.title}
                    </h3>
                    <span style={{
                      fontSize: 'var(--font-size-sm)',
                      color: 'var(--color-neutral-500)',
                      whiteSpace: 'nowrap',
                      marginLeft: 'var(--spacing-3)'
                    }}>
                      {notification.time}
                    </span>
                  </div>
                  <p style={{
                    fontSize: 'var(--font-size-base)',
                    color: 'var(--color-neutral-600)',
                    lineHeight: 'var(--line-height-relaxed)',
                    marginBottom: !notification.read ? 'var(--spacing-3)' : 0
                  }}>
                    {notification.message}
                  </p>
                  {!notification.read && (
                    <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
                      <button
                        onClick={() => handleMarkNotificationAsRead(notification.id)}
                        style={{
                          display: 'flex',
                          alignItems: 'center',
                          gap: 'var(--spacing-1)',
                          padding: 'var(--spacing-1) var(--spacing-3)',
                          background: 'var(--color-neutral-100)',
                          color: 'var(--color-neutral-700)',
                          border: '1px solid var(--color-neutral-300)',
                          borderRadius: 'var(--radius-sm)',
                          fontSize: 'var(--font-size-xs)',
                          fontWeight: 'var(--font-weight-medium)',
                          cursor: 'pointer',
                          transition: 'all 0.2s'
                        }}
                        onMouseEnter={(e) => {
                          e.currentTarget.style.backgroundColor = 'var(--color-neutral-200)';
                          e.currentTarget.style.borderColor = 'var(--color-neutral-400)';
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
            ))}
          </div>
        </div>
      </InfoPageWrapper>
    </div>
  );
};

export default NotificationsPage;
