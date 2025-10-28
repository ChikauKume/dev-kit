import React, { useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import InfoPageWrapper from '../../../components/layout/InfoPageWrapper';
import TemplateNavigation from '../../../components/navigation/TemplateNavigation';
import Icon from '../../../components/icons/Icon';
import { useViewMode } from '../../../hooks/useViewMode';

const DashboardPage: React.FC = () => {
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
    { id: 1, title: '新しいメッセージ', message: 'システムから重要なお知らせがあります', time: '5分前', read: false },
    { id: 2, title: 'データ更新完了', message: 'データの同期が完了しました', time: '1時間前', read: false },
    { id: 3, title: 'メンテナンスのお知らせ', message: '明日の深夜にメンテナンスを実施します', time: '3時間前', read: true },
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

  const stats = [
    { label: '総ユーザー数', value: '1,234', icon: 'user', color: 'var(--color-primary-500)' },
    { label: '総データ数', value: '5,678', icon: 'document', color: 'var(--color-success-500)' },
    { label: '今月の新規', value: '234', icon: 'chart-bar', color: 'var(--color-warning-500)' },
    { label: 'アクティブ率', value: '87%', icon: 'chart-pie', color: 'var(--color-info-500)' },
  ];

  const recentActivities = [
    { user: '田中太郎', action: 'データを作成しました', time: '5分前' },
    { user: '佐藤花子', action: 'プロフィールを更新しました', time: '15分前' },
    { user: '鈴木一郎', action: 'データを編集しました', time: '1時間前' },
    { user: '高橋美咲', action: 'データを削除しました', time: '2時間前' },
  ];

  return (
    <div className={viewMode === 'sp' ? 'force-mobile' : ''}>
      <TemplateNavigation
        viewMode={viewMode}
        onViewModeChange={setViewMode}
      />
      <InfoPageWrapper
        viewMode={viewMode}
        currentPage="dashboard"
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
      <div style={{
        display: 'flex',
        flexDirection: 'column',
        gap: 'var(--spacing-6)'
      }}>
        {/* Stats Cards */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
          gap: 'var(--spacing-4)'
        }}>
          {stats.map((stat, index) => (
            <div
              key={index}
              style={{
                background: 'var(--color-neutral-white)',
                border: '1px solid var(--color-neutral-200)',
                borderRadius: 'var(--radius-lg)',
                padding: 'var(--spacing-4)',
                display: 'flex',
                alignItems: 'center',
                gap: 'var(--spacing-3)'
              }}
            >
              <div
                style={{
                  width: '48px',
                  height: '48px',
                  borderRadius: 'var(--radius-md)',
                  background: `${stat.color}20`,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}
              >
                <Icon name={stat.icon as any} size="md" style={{ color: stat.color }} />
              </div>
              <div>
                <div style={{
                  fontSize: 'var(--font-size-sm)',
                  color: 'var(--color-neutral-600)',
                  marginBottom: 'var(--spacing-1)'
                }}>
                  {stat.label}
                </div>
                <div style={{
                  fontSize: 'var(--font-size-2xl)',
                  fontWeight: 'var(--font-weight-bold)',
                  color: 'var(--color-neutral-900)'
                }}>
                  {stat.value}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Recent Activities */}
        <div style={{
          background: 'var(--color-neutral-white)',
          border: '1px solid var(--color-neutral-200)',
          borderRadius: 'var(--radius-lg)',
          padding: 'var(--spacing-5)'
        }}>
          <h2 style={{
            fontSize: 'var(--font-size-lg)',
            fontWeight: 'var(--font-weight-semibold)',
            color: 'var(--color-neutral-900)',
            marginBottom: 'var(--spacing-4)'
          }}>
            最近のアクティビティ
          </h2>
          <div style={{
            display: 'flex',
            flexDirection: 'column',
            gap: 'var(--spacing-3)'
          }}>
            {recentActivities.map((activity, index) => (
              <div
                key={index}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  padding: 'var(--spacing-3)',
                  borderRadius: 'var(--radius-md)',
                  background: 'var(--color-neutral-50)'
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--spacing-2)' }}>
                  <div
                    style={{
                      width: '32px',
                      height: '32px',
                      borderRadius: '50%',
                      background: 'var(--color-primary-500)',
                      color: 'var(--color-neutral-white)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontSize: 'var(--font-size-sm)',
                      fontWeight: 'var(--font-weight-semibold)'
                    }}
                  >
                    {activity.user.charAt(0)}
                  </div>
                  <div>
                    <div style={{
                      fontSize: 'var(--font-size-sm)',
                      fontWeight: 'var(--font-weight-medium)',
                      color: 'var(--color-neutral-900)'
                    }}>
                      {activity.user}
                    </div>
                    <div style={{
                      fontSize: 'var(--font-size-xs)',
                      color: 'var(--color-neutral-600)'
                    }}>
                      {activity.action}
                    </div>
                  </div>
                </div>
                <div style={{
                  fontSize: 'var(--font-size-xs)',
                  color: 'var(--color-neutral-500)'
                }}>
                  {activity.time}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Quick Actions */}
        <div style={{
          background: 'var(--color-neutral-white)',
          border: '1px solid var(--color-neutral-200)',
          borderRadius: 'var(--radius-lg)',
          padding: 'var(--spacing-5)'
        }}>
          <h2 style={{
            fontSize: 'var(--font-size-lg)',
            fontWeight: 'var(--font-weight-semibold)',
            color: 'var(--color-neutral-900)',
            marginBottom: 'var(--spacing-4)'
          }}>
            クイックアクション
          </h2>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
            gap: 'var(--spacing-3)'
          }}>
            <button
              style={{
                padding: 'var(--spacing-3)',
                borderRadius: 'var(--radius-md)',
                border: '1px solid var(--color-neutral-300)',
                background: 'var(--color-neutral-white)',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                gap: 'var(--spacing-2)',
                transition: 'all 0.2s'
              }}
              onMouseOver={(e) => {
                e.currentTarget.style.background = 'var(--color-neutral-50)';
                e.currentTarget.style.borderColor = 'var(--color-primary-500)';
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.background = 'var(--color-neutral-white)';
                e.currentTarget.style.borderColor = 'var(--color-neutral-300)';
              }}
            >
              <Icon name="plus-circle" size="sm" />
              <span style={{
                fontSize: 'var(--font-size-sm)',
                fontWeight: 'var(--font-weight-medium)'
              }}>
                新規データ作成
              </span>
            </button>
            <button
              style={{
                padding: 'var(--spacing-3)',
                borderRadius: 'var(--radius-md)',
                border: '1px solid var(--color-neutral-300)',
                background: 'var(--color-neutral-white)',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                gap: 'var(--spacing-2)',
                transition: 'all 0.2s'
              }}
              onMouseOver={(e) => {
                e.currentTarget.style.background = 'var(--color-neutral-50)';
                e.currentTarget.style.borderColor = 'var(--color-primary-500)';
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.background = 'var(--color-neutral-white)';
                e.currentTarget.style.borderColor = 'var(--color-neutral-300)';
              }}
            >
              <Icon name="table" size="sm" />
              <span style={{
                fontSize: 'var(--font-size-sm)',
                fontWeight: 'var(--font-weight-medium)'
              }}>
                データ一覧表示
              </span>
            </button>
            <button
              style={{
                padding: 'var(--spacing-3)',
                borderRadius: 'var(--radius-md)',
                border: '1px solid var(--color-neutral-300)',
                background: 'var(--color-neutral-white)',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                gap: 'var(--spacing-2)',
                transition: 'all 0.2s'
              }}
              onMouseOver={(e) => {
                e.currentTarget.style.background = 'var(--color-neutral-50)';
                e.currentTarget.style.borderColor = 'var(--color-primary-500)';
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.background = 'var(--color-neutral-white)';
                e.currentTarget.style.borderColor = 'var(--color-neutral-300)';
              }}
            >
              <Icon name="chart-bar" size="sm" />
              <span style={{
                fontSize: 'var(--font-size-sm)',
                fontWeight: 'var(--font-weight-medium)'
              }}>
                統計を確認
              </span>
            </button>
          </div>
        </div>
      </div>
      </InfoPageWrapper>
    </div>
  );
};

export default DashboardPage;
