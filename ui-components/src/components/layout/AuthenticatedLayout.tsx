import React, { useState, useRef, useEffect } from 'react';
import Icon from '../icons/Icon';

interface AuthenticatedLayoutProps {
  children: React.ReactNode;
  viewMode: 'pc' | 'sp';
  currentPage: string;
  onNavigate: (page: string) => void;
  unreadCount?: number;
  onUnreadCountChange?: (count: number) => void;
}

const AuthenticatedLayout: React.FC<AuthenticatedLayoutProps> = ({
  children,
  viewMode,
  currentPage,
  onNavigate,
  unreadCount = 0,
  onUnreadCountChange
}) => {
  const [showUserMenu, setShowUserMenu] = useState(false);
  const [showNotificationDropdown, setShowNotificationDropdown] = useState(false);
  const [isHamburgerOpen, setIsHamburgerOpen] = useState(false);
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);
  const notificationRef = useRef<HTMLDivElement>(null);

  // サイドバーのアクティブリンクを判定
  const isActive = (page: string) => currentPage === page;

  // 通知ドロップダウンの外側クリックを検知
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (notificationRef.current && !notificationRef.current.contains(event.target as Node)) {
        setShowNotificationDropdown(false);
      }
    };

    if (showNotificationDropdown) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [showNotificationDropdown]);

  return (
    <div className="dashboard-container">
      {/* ヘッダー */}
      <div className="dashboard-header">
        <div className="dashboard-logo" onClick={() => onNavigate('dashboard')} style={{ cursor: 'pointer' }}>
          AppName
        </div>

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
                  <div className="sp-hamburger-item" onClick={() => { setIsHamburgerOpen(false); onNavigate('dashboard'); }}>
                    <Icon name="home" className="w-4 h-4" style={{ color: 'white', marginRight: '8px' }} />
                    ホーム
                  </div>
                  <div className="sp-hamburger-item" onClick={() => { setIsHamburgerOpen(false); onNavigate('data-list'); }}>
                    <Icon name="table" className="w-4 h-4" style={{ color: 'white', marginRight: '8px' }} />
                    データ一覧
                  </div>
                  <div className="sp-hamburger-item" onClick={() => { setIsHamburgerOpen(false); onNavigate('statistics'); }}>
                    <Icon name="chart-bar" className="w-4 h-4" style={{ color: 'white', marginRight: '8px' }} />
                    統計
                  </div>
                  <div className="sp-hamburger-item" onClick={() => { setIsHamburgerOpen(false); onNavigate('settings'); }}>
                    <Icon name="cog" className="w-4 h-4" style={{ color: 'white', marginRight: '8px' }} />
                    設定
                  </div>
                  <div className="sp-hamburger-item" onClick={() => { setIsHamburgerOpen(false); onNavigate('login'); }}>
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

                {showNotificationDropdown && (
                  <div className="notification-dropdown">
                    <div className="notification-dropdown-header">
                      <h3 className="notification-dropdown-title">通知</h3>
                      <button
                        className="notification-close-btn"
                        onClick={() => setShowNotificationDropdown(false)}
                      >
                        <Icon name="close" className="w-4 h-4" />
                      </button>
                    </div>

                    <div className="notification-dropdown-content">
                      <div className="notification-item">
                        <Icon name="info" className="w-5 h-5 notification-icon" />
                        <div className="notification-content">
                          <div className="notification-item-header">
                            <h4 className="notification-item-title">新しいメッセージ</h4>
                            <span className="notification-time">2分前</span>
                          </div>
                          <p className="notification-item-message">管理者からの重要なお知らせがあります。</p>
                          <div className="notification-item-actions">
                            <button
                              className="notification-action-btn"
                              onClick={() => onUnreadCountChange && onUnreadCountChange(Math.max(0, unreadCount - 1))}
                            >
                              <Icon name="check" className="w-4 h-4" />
                              既読にする
                            </button>
                            <button className="notification-action-btn">
                              <Icon name="close" className="w-4 h-4" />
                              非表示
                            </button>
                          </div>
                        </div>
                      </div>

                      <div className="notification-item unread">
                        <Icon name="warning" className="w-5 h-5 notification-icon" />
                        <div className="notification-content">
                          <div className="notification-item-header">
                            <h4 className="notification-item-title">システムメンテナンス</h4>
                            <span className="notification-time">1時間前</span>
                          </div>
                          <p className="notification-item-message">本日22:00よりシステムメンテナンスを実施します。</p>
                          <div className="notification-item-actions">
                            <button
                              className="notification-action-btn"
                              onClick={() => onUnreadCountChange && onUnreadCountChange(Math.max(0, unreadCount - 1))}
                            >
                              <Icon name="check" className="w-4 h-4" />
                              既読にする
                            </button>
                            <button className="notification-action-btn">
                              <Icon name="close" className="w-4 h-4" />
                              非表示
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="notification-dropdown-footer">
                      <a
                        href="#"
                        className="notification-footer-link"
                        onClick={(e) => {
                          e.preventDefault();
                          onNavigate('notifications');
                          setShowNotificationDropdown(false);
                        }}
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
                <span>田中 太郎</span>
                <Icon name="chevron-down" className="w-4 h-4" />
              </button>

              {showUserMenu && (
                <div className="user-dropdown">
                  <button
                    className="user-dropdown-item"
                    onClick={() => {
                      setShowUserMenu(false);
                      onNavigate('login');
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

      {/* ボディ */}
      <div className="dashboard-body">
        {/* サイドバー */}
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
              <li className="sidebar-nav-item">
                <a
                  className={`sidebar-nav-link ${isActive('dashboard') ? 'active' : ''}`}
                  onClick={() => onNavigate('dashboard')}
                >
                  <Icon name="home" className="w-5 h-5" />
                  <span>ホーム</span>
                </a>
              </li>
              <li className="sidebar-nav-item">
                <a
                  className={`sidebar-nav-link ${isActive('data-list') ? 'active' : ''}`}
                  onClick={() => onNavigate('data-list')}
                >
                  <Icon name="table" className="w-5 h-5" />
                  <span>データ一覧</span>
                </a>
              </li>
              <li className="sidebar-nav-item">
                <a
                  className={`sidebar-nav-link ${isActive('statistics') ? 'active' : ''}`}
                  onClick={() => onNavigate('statistics')}
                >
                  <Icon name="chart-bar" className="w-5 h-5" />
                  <span>統計</span>
                </a>
              </li>
              <li className="sidebar-nav-item">
                <a
                  className={`sidebar-nav-link ${isActive('settings') ? 'active' : ''}`}
                  onClick={() => onNavigate('settings')}
                >
                  <Icon name="cog" className="w-5 h-5" />
                  <span>設定</span>
                </a>
              </li>
            </ul>
          </nav>
        </aside>

        {/* メインコンテンツ */}
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

export default AuthenticatedLayout;
