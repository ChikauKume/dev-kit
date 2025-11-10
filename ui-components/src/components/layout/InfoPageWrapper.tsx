import React from 'react';
import Icon, { IconName } from '../icons/Icon';

/**
 * サイドバーメニューアイテムの型定義
 *
 * 【重要】動的サイドバーメニューの設定
 *
 * InfoPageWrapperは以下の固定アイテムを自動的に追加します:
 * - 先頭: ダッシュボード（ホーム） { id: 'dashboard', label: 'ホーム', icon: 'home', page: 'dashboard' }
 * - 末尾: 設定 { id: 'settings', label: '設定', icon: 'cog', page: 'settings' }
 *
 * sidebarMenuItemsプロパティで渡されたアイテムは、この2つの間に配置されます。
 *
 * @example
 * const menuItems: SidebarMenuItem[] = [
 *   { id: 'products', label: '商品管理', icon: 'shopping-bag', page: 'products' },
 *   { id: 'orders', label: '注文一覧', icon: 'shopping-cart', page: 'orders' },
 * ];
 *
 * // 結果のサイドバー:
 * // 1. ホーム（固定）
 * // 2. 商品管理
 * // 3. 注文一覧
 * // 4. 設定（固定）
 */
export interface SidebarMenuItem {
  id: string;
  label: string;
  icon: IconName;
  page: string;
}

interface InfoPageWrapperProps {
  children: React.ReactNode;
  viewMode: 'pc' | 'sp';
  currentPage: string;
  onNavigate: (page: string) => void;

  /**
   * ログアウト処理のコールバック
   *
   * ログアウトはページ遷移ではなく、セッション破棄などのアクションです。
   * Inertia.jsの場合: router.post('/logout')
   * SPAの場合: APIへのPOSTリクエスト + ローカル状態のクリア
   */
  onLogout?: () => void;

  /**
   * ログイン中のユーザー名
   *
   * 右上のユーザーボタンに表示されます。
   * デフォルト: "ゲスト"
   *
   * @example Laravel Controller
   * ```php
   * return Inertia::render('Dashboard', [
   *   'userName' => auth()->user()->name
   * ]);
   * ```
   */
  userName?: string;

  /**
   * 動的サイドバーメニューアイテム
   *
   * 【重要】ダッシュボード（ホーム）と設定は固定で、自動的に追加されます。
   * このプロパティで指定したメニューアイテムは、その間に挿入されます。
   *
   * 指定しない場合のデフォルト:
   * [
   *   { id: 'data-list', label: 'データ一覧', icon: 'table', page: 'data-list' },
   *   { id: 'statistics', label: '統計', icon: 'chart-bar', page: 'statistics' }
   * ]
   */
  sidebarMenuItems?: SidebarMenuItem[];

  unreadCount?: number;
  showNotificationDropdown?: boolean;
  setShowNotificationDropdown?: (show: boolean) => void;
  showUserMenu?: boolean;
  setShowUserMenu?: (show: boolean) => void;
  isHamburgerOpen?: boolean;
  setIsHamburgerOpen?: (open: boolean) => void;
  sidebarCollapsed?: boolean;
  setSidebarCollapsed?: (collapsed: boolean) => void;
  notificationRef?: React.RefObject<HTMLDivElement | null>;
  notifications?: Array<{
    id: string | number;
    title: string;
    message: string;
    time: string;
    read: boolean;
    type?: 'info' | 'warning' | 'success' | 'danger';
  }>;
  onMarkNotificationAsRead?: (notificationId: string | number) => void;
  onMarkAllNotificationsAsRead?: () => void;
  onDismissNotification?: (notificationId: string | number) => void;
}

const InfoPageWrapper: React.FC<InfoPageWrapperProps> = ({
  children,
  viewMode,
  currentPage,
  onNavigate,
  onLogout,
  userName = 'ゲスト',
  sidebarMenuItems,
  unreadCount = 0,
  showNotificationDropdown = false,
  setShowNotificationDropdown = () => {},
  showUserMenu = false,
  setShowUserMenu = () => {},
  isHamburgerOpen = false,
  setIsHamburgerOpen = () => {},
  sidebarCollapsed = false,
  setSidebarCollapsed = () => {},
  notificationRef,
  notifications = [],
  onMarkNotificationAsRead = () => {},
  onMarkAllNotificationsAsRead = () => {},
  onDismissNotification = () => {}
}) => {
  // デフォルトのサイドバーメニューアイテム（ホームのみ）
  const defaultSidebarMenuItems: SidebarMenuItem[] = [
    {
      id: 'dashboard',
      label: 'ホーム',
      icon: 'home',
      page: 'dashboard'
    }
  ];

  // サイドバーメニューアイテムを取得
  // sidebarMenuItemsが明示的に渡された場合（空配列含む）はそれを使用、未定義の場合のみデフォルト
  const allSidebarMenuItems = sidebarMenuItems !== undefined ? sidebarMenuItems : defaultSidebarMenuItems;

  // Get icon name based on notification type
  const getNotificationIcon = (type?: 'info' | 'warning' | 'success' | 'danger'): IconName => {
    switch (type) {
      case 'warning':
        return 'warning';
      case 'success':
        return 'check';
      case 'danger':
        return 'close';
      case 'info':
      default:
        return 'info';
    }
  };
  return (
    <div className="dashboard-container">
      {/* ヘッダー */}
      <div className="dashboard-header">
        <div className="dashboard-logo" onClick={() => onNavigate('dashboard')} style={{ cursor: 'pointer' }}>AppName</div>

        <div className="dashboard-user">
          {viewMode === 'sp' ? (
            <div style={{ position: 'relative', display: 'flex', alignItems: 'center', gap: '8px' }}>
              <button
                style={{
                  background: 'rgba(255, 255, 255, 0.1)',
                  border: '1px solid rgba(255, 255, 255, 0.2)',
                  borderRadius: '8px',
                  cursor: 'pointer',
                  color: 'white',
                  padding: '8px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  position: 'relative'
                }}
                onClick={() => onNavigate('notifications')}
              >
                <Icon name="bell" style={{ width: '20px', height: '20px' }} />
                {unreadCount > 0 && (
                  <span style={{
                    position: 'absolute',
                    top: '-6px',
                    right: '-6px',
                    minWidth: '20px',
                    height: '20px',
                    background: '#ef4444',
                    color: '#ffffff',
                    fontSize: '12px',
                    fontWeight: 'bold',
                    borderRadius: '50%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    padding: '0 4px',
                    border: '2px solid rgb(21, 52, 109)'
                  }}>
                    {unreadCount}
                  </span>
                )}
              </button>
              <button
                style={{
                  background: 'none',
                  border: 'none',
                  cursor: 'pointer',
                  fontSize: '24px',
                  color: 'white',
                  padding: '4px 8px'
                }}
                onClick={() => setIsHamburgerOpen(!isHamburgerOpen)}
              >
                ☰
              </button>
              {isHamburgerOpen && (
                <div className={`sp-hamburger-menu ${isHamburgerOpen ? 'open' : ''}`}>
                  {allSidebarMenuItems.map(item => (
                    <div
                      key={item.id}
                      className="sp-hamburger-item"
                      onClick={() => { setIsHamburgerOpen(false); onNavigate(item.page); }}
                    >
                      <Icon name={item.icon} className="w-4 h-4" style={{ color: 'white', marginRight: '8px' }} />
                      {item.label}
                    </div>
                  ))}
                  <div
                    className="sp-hamburger-item"
                    onClick={() => {
                      setIsHamburgerOpen(false);
                      if (onLogout) {
                        onLogout();
                      } else {
                        // フォールバック: onLogoutが指定されていない場合はログインページへ遷移
                        onNavigate('login');
                      }
                    }}
                  >
                    <Icon name="arrow-right" className="w-4 h-4" style={{ color: 'white', marginRight: '8px' }} />
                    ログアウト
                  </div>
                </div>
              )}
            </div>
          ) : (
            <>
              <div ref={notificationRef} style={{ position: 'relative' }}>
                <button
                  style={{
                    background: 'rgba(255, 255, 255, 0.1)',
                    border: '1px solid rgba(255, 255, 255, 0.2)',
                    borderRadius: '8px',
                    cursor: 'pointer',
                    color: 'white',
                    padding: '8px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    position: 'relative'
                  }}
                  onClick={() => setShowNotificationDropdown(!showNotificationDropdown)}
                >
                  <Icon name="bell" style={{ width: '20px', height: '20px' }} />
                  {unreadCount > 0 && (
                    <span style={{
                      position: 'absolute',
                      top: '-6px',
                      right: '-6px',
                      minWidth: '20px',
                      height: '20px',
                      background: '#ef4444',
                      color: '#ffffff',
                      fontSize: '12px',
                      fontWeight: 'bold',
                      borderRadius: '50%',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      padding: '0 4px',
                      border: '2px solid rgb(21, 52, 109)'
                    }}>
                      {unreadCount}
                    </span>
                  )}
                </button>
                {showNotificationDropdown && notifications.length > 0 && (
                  <div className="notification-dropdown">
                    <div className="notification-dropdown-header">
                      <h3 className="notification-dropdown-title">通知</h3>
                      <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--spacing-2)' }}>
                        {notifications.some(n => !n.read) && (
                          <button
                            className="notification-action-btn"
                            onClick={onMarkAllNotificationsAsRead}
                            style={{ fontSize: 'var(--font-size-xs)' }}
                          >
                            <Icon name="check" className="w-4 h-4" />
                            全て既読にする
                          </button>
                        )}
                        <button
                          className="notification-close-btn"
                          onClick={() => setShowNotificationDropdown(false)}
                        >
                          <Icon name="close" className="w-4 h-4" />
                        </button>
                      </div>
                    </div>
                    <div className="notification-dropdown-content">
                      {notifications.map(notification => (
                        <div
                          key={notification.id}
                          className={`notification-item ${!notification.read ? 'unread' : ''}`}
                          onClick={() => !notification.read && onMarkNotificationAsRead(notification.id)}
                          style={{ cursor: !notification.read ? 'pointer' : 'default' }}
                        >
                          <div style={{ position: 'relative' }}>
                            <Icon name={getNotificationIcon(notification.type)} className="w-5 h-5 notification-icon" />
                            {!notification.read && (
                              <span style={{
                                position: 'absolute',
                                top: '-2px',
                                right: '-2px',
                                width: '8px',
                                height: '8px',
                                background: '#ef4444',
                                borderRadius: '50%',
                                border: '1px solid white'
                              }} />
                            )}
                          </div>
                          <div className="notification-content">
                            <div className="notification-item-header">
                              <h4 className="notification-item-title">{notification.title}</h4>
                              <span className="notification-time">{notification.time}</span>
                            </div>
                            <p className="notification-item-message">{notification.message}</p>
                            <div className="notification-item-actions">
                              {!notification.read && (
                                <button
                                  className="notification-action-btn"
                                  onClick={(e) => {
                                    e.stopPropagation();
                                    onMarkNotificationAsRead(notification.id);
                                  }}
                                >
                                  <Icon name="check" className="w-4 h-4" />
                                  既読にする
                                </button>
                              )}
                              <button
                                className="notification-action-btn"
                                onClick={(e) => {
                                  e.stopPropagation();
                                  onDismissNotification(notification.id);
                                }}
                              >
                                <Icon name="close" className="w-4 h-4" />
                                非表示
                              </button>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                    <div className="notification-dropdown-footer">
                      <a
                        className="notification-footer-link"
                        onClick={() => { setShowNotificationDropdown(false); onNavigate('notifications'); }}
                        style={{ cursor: 'pointer' }}
                      >
                        すべての通知を表示
                      </a>
                    </div>
                  </div>
                )}
              </div>

              <button
                className="user-button"
                onClick={() => setShowUserMenu(!showUserMenu)}
              >
                <Icon name="user" className="w-5 h-5" />
                <span>{userName}</span>
                <Icon name="chevron-down" className="w-4 h-4" />
              </button>

              {showUserMenu && (
                <div className="user-dropdown">
                  <button
                    className="user-dropdown-item"
                    onClick={() => {
                      setShowUserMenu(false);
                      if (onLogout) {
                        onLogout();
                      } else {
                        // フォールバック: onLogoutが指定されていない場合はログインページへ遷移
                        onNavigate('login');
                      }
                    }}
                  >
                    <Icon name="arrow-right" className="w-4 h-4" />
                    ログアウト
                  </button>
                </div>
              )}
            </>
          )}
        </div>
      </div>

      <div className="dashboard-body">
        {/* サイドバー - SPモードでは非表示 */}
        {viewMode === 'pc' && (
          <aside className={`dashboard-sidebar ${sidebarCollapsed ? 'collapsed' : ''}`}>
            <button
              className="sidebar-toggle"
              onClick={() => setSidebarCollapsed(!sidebarCollapsed)}
              aria-label={sidebarCollapsed ? 'サイドバーを展開' : 'サイドバーを最小化'}
            >
              <Icon name={sidebarCollapsed ? 'chevron-right' : 'chevron-left'} className="w-5 h-5" />
            </button>
            <nav className="sidebar-nav">
              <ul className="sidebar-nav">
                {allSidebarMenuItems.map(item => (
                  <li key={item.id} className="sidebar-nav-item">
                    <div className="sidebar-nav-link" onClick={() => onNavigate(item.page)} style={{ cursor: 'pointer' }}>
                      <Icon name={item.icon} className="w-5 h-5" />
                      <span>{item.label}</span>
                    </div>
                  </li>
                ))}
              </ul>
            </nav>
          </aside>
        )}

        {/* メインコンテンツエリア */}
        <div className="dashboard-content">
          {children}
        </div>
      </div>

      {/* フッター */}
      <footer className="page-footer">
        <div className="footer-content" style={{
          display: 'flex',
          flexDirection: viewMode === 'sp' ? 'column' : 'row',
          justifyContent: viewMode === 'sp' ? 'center' : 'space-between',
          alignItems: 'center',
          gap: viewMode === 'sp' ? 'var(--spacing-2)' : 0,
          flexWrap: 'nowrap'
        }}>
          <div style={{ display: 'flex', gap: 'var(--spacing-4)', fontSize: 'var(--font-size-sm)' }}>
            <a href="#" onClick={(e) => { e.preventDefault(); onNavigate('qna'); }} style={{ color: 'white', textDecoration: 'none' }}>Q&A</a>
            <a href="#" onClick={(e) => { e.preventDefault(); onNavigate('privacy'); }} style={{ color: 'white', textDecoration: 'none' }}>プライバシーポリシー</a>
            <a href="#" onClick={(e) => { e.preventDefault(); onNavigate('terms'); }} style={{ color: 'white', textDecoration: 'none' }}>利用規約</a>
            <a href="#" onClick={(e) => { e.preventDefault(); onNavigate('commercial'); }} style={{ color: 'white', textDecoration: 'none' }}>特商法表記</a>
          </div>
          <div className="footer-copyright">
            © 2025 AppName. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default InfoPageWrapper;
