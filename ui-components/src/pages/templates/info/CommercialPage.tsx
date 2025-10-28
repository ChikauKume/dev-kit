import React, { useState, useRef } from 'react';
import TemplateNavigation from '../../../components/navigation/TemplateNavigation';
import InfoPageWrapper from '../../../components/layout/InfoPageWrapper';
import { useViewMode } from '../../../hooks/useViewMode';

/**
 * CommercialPage Component
 *
 * 特定商取引法に基づく表記ページのコンポーネント。販売事業者情報や
 * 決済情報などを表示します。
 *
 * **React Router不要**: このコンポーネントはReact Routerに依存しません
 * **Inertia.js対応**: onNavigateコールバックを使用してルーティング制御
 *
 * @example Laravel + Inertia.js
 * return Inertia::render('templates/info/CommercialPage', [
 *   'hideNavigation' => true,
 * ]);
 */
interface CommercialPageProps {
  hideNavigation?: boolean;
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
}

const CommercialPage: React.FC<CommercialPageProps> = ({ hideNavigation, onNavigate, onLogout }) => {
  const notificationRef = useRef<HTMLDivElement>(null);

  const [viewMode, setViewMode] = useViewMode();
  const [showNotificationDropdown, setShowNotificationDropdown] = useState(false);
  const [showUserMenu, setShowUserMenu] = useState(false);
  const [isHamburgerOpen, setIsHamburgerOpen] = useState(false);
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);

  const handleNavigate = (page: string) => {
    if (onNavigate) {
      onNavigate(page);
    } else {
      // Fallback: デモ用
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
      if (typeof window !== 'undefined') {
        window.location.href = route;
      }
    }
  };

  const handleLogout = () => {
    if (onLogout) {
      onLogout();
      return;
    }
    handleNavigate('login');
  };

  const [notifications, setNotifications] = useState([
    { id: 1, title: '新しいメッセージ', message: 'システムから重要なお知らせがあります', time: '5分前', read: false },
    { id: 2, title: 'データ更新完了', message: 'データの同期が完了しました', time: '1時間前', read: true },
  ]);

  const handleMarkNotificationAsRead = (notificationId: string | number) => {
    setNotifications(prevNotifications =>
      prevNotifications.map(notification =>
        notification.id === notificationId
          ? { ...notification, read: true }
          : notification
      )
    );
  };

  const handleMarkAllNotificationsAsRead = () => {
    setNotifications(prevNotifications =>
      prevNotifications.map(notification => ({ ...notification, read: true }))
    );
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
        currentPage="commercial"
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
        onLogout={handleLogout}
      >
        <div style={{ maxWidth: '1000px', margin: '0 auto', padding: 'var(--spacing-6)' }}>
          <div className="card">
            <div className="card-header" style={{ marginBottom: 'var(--spacing-12)' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: viewMode === 'sp' ? 'flex-start' : 'center', marginBottom: viewMode === 'sp' ? 'var(--spacing-2)' : 0, flexDirection: viewMode === 'sp' ? 'column' : 'row' }}>
                <h2 className="page-title" style={{ alignSelf: viewMode === 'sp' ? 'flex-start' : undefined }}>特定商取引法に基づく表記</h2>
                {viewMode !== 'sp' && <p style={{ fontSize: 'var(--font-size-sm)', color: 'var(--color-neutral-600)', margin: 0 }}>最終更新日: 2024年10月15日</p>}
              </div>
              {viewMode === 'sp' && <p style={{ fontSize: 'var(--font-size-sm)', color: 'var(--color-neutral-600)', margin: 0 }}>最終更新日: 2024年10月15日</p>}
            </div>
            <div className="card-body">
              <div style={{
                fontSize: 'var(--font-size-sm)',
                lineHeight: 'var(--line-height-relaxed)',
                color: 'var(--color-neutral-700)'
              }}>
            <table style={{
              width: '100%',
              borderCollapse: 'collapse',
              border: '1px solid var(--color-neutral-200)'
            }}>
              <tbody>
                <tr style={{ borderBottom: '1px solid var(--color-neutral-200)' }}>
                  <th style={{
                    padding: 'var(--spacing-3)',
                    textAlign: 'left',
                    backgroundColor: 'var(--color-neutral-50)',
                    fontWeight: 'var(--font-weight-semibold)',
                    width: '30%',
                    verticalAlign: 'top'
                  }}>販売事業者名</th>
                  <td style={{
                    padding: 'var(--spacing-3)',
                    backgroundColor: 'var(--color-neutral-white)'
                  }}>株式会社サンプル</td>
                </tr>
                <tr style={{ borderBottom: '1px solid var(--color-neutral-200)' }}>
                  <th style={{
                    padding: 'var(--spacing-3)',
                    textAlign: 'left',
                    backgroundColor: 'var(--color-neutral-50)',
                    fontWeight: 'var(--font-weight-semibold)',
                    verticalAlign: 'top'
                  }}>代表者名</th>
                  <td style={{
                    padding: 'var(--spacing-3)',
                    backgroundColor: 'var(--color-neutral-white)'
                  }}>代表取締役 山田太郎</td>
                </tr>
                <tr style={{ borderBottom: '1px solid var(--color-neutral-200)' }}>
                  <th style={{
                    padding: 'var(--spacing-3)',
                    textAlign: 'left',
                    backgroundColor: 'var(--color-neutral-50)',
                    fontWeight: 'var(--font-weight-semibold)',
                    verticalAlign: 'top'
                  }}>所在地</th>
                  <td style={{
                    padding: 'var(--spacing-3)',
                    backgroundColor: 'var(--color-neutral-white)'
                  }}>〒150-0000<br />東京都渋谷区〇〇 1-2-3 サンプルビル 5F</td>
                </tr>
                <tr style={{ borderBottom: '1px solid var(--color-neutral-200)' }}>
                  <th style={{
                    padding: 'var(--spacing-3)',
                    textAlign: 'left',
                    backgroundColor: 'var(--color-neutral-50)',
                    fontWeight: 'var(--font-weight-semibold)',
                    verticalAlign: 'top'
                  }}>電話番号</th>
                  <td style={{
                    padding: 'var(--spacing-3)',
                    backgroundColor: 'var(--color-neutral-white)'
                  }}>03-1234-5678<br />
                  <span style={{ fontSize: 'var(--font-size-xs)', color: 'var(--color-neutral-600)' }}>
                    ※お問い合わせはメールにてお願いいたします
                  </span></td>
                </tr>
                <tr style={{ borderBottom: '1px solid var(--color-neutral-200)' }}>
                  <th style={{
                    padding: 'var(--spacing-3)',
                    textAlign: 'left',
                    backgroundColor: 'var(--color-neutral-50)',
                    fontWeight: 'var(--font-weight-semibold)',
                    verticalAlign: 'top'
                  }}>メールアドレス</th>
                  <td style={{
                    padding: 'var(--spacing-3)',
                    backgroundColor: 'var(--color-neutral-white)'
                  }}>support@example.com</td>
                </tr>
                <tr style={{ borderBottom: '1px solid var(--color-neutral-200)' }}>
                  <th style={{
                    padding: 'var(--spacing-3)',
                    textAlign: 'left',
                    backgroundColor: 'var(--color-neutral-50)',
                    fontWeight: 'var(--font-weight-semibold)',
                    verticalAlign: 'top'
                  }}>運営統括責任者</th>
                  <td style={{
                    padding: 'var(--spacing-3)',
                    backgroundColor: 'var(--color-neutral-white)'
                  }}>山田花子</td>
                </tr>
                <tr style={{ borderBottom: '1px solid var(--color-neutral-200)' }}>
                  <th style={{
                    padding: 'var(--spacing-3)',
                    textAlign: 'left',
                    backgroundColor: 'var(--color-neutral-50)',
                    fontWeight: 'var(--font-weight-semibold)',
                    verticalAlign: 'top'
                  }}>追加手数料等の<br />追加料金</th>
                  <td style={{
                    padding: 'var(--spacing-3)',
                    backgroundColor: 'var(--color-neutral-white)'
                  }}>サービス利用料以外に、振込手数料等がかかる場合があります。詳細は各プランページをご確認ください。</td>
                </tr>
                <tr style={{ borderBottom: '1px solid var(--color-neutral-200)' }}>
                  <th style={{
                    padding: 'var(--spacing-3)',
                    textAlign: 'left',
                    backgroundColor: 'var(--color-neutral-50)',
                    fontWeight: 'var(--font-weight-semibold)',
                    verticalAlign: 'top'
                  }}>交換および返品<br />（返金ポリシー）</th>
                  <td style={{
                    padding: 'var(--spacing-3)',
                    backgroundColor: 'var(--color-neutral-white)'
                  }}>サービスの性質上、お客様都合による返金はお受けできません。ただし、サービス提供に不備があった場合は、個別に対応させていただきます。</td>
                </tr>
                <tr style={{ borderBottom: '1px solid var(--color-neutral-200)' }}>
                  <th style={{
                    padding: 'var(--spacing-3)',
                    textAlign: 'left',
                    backgroundColor: 'var(--color-neutral-50)',
                    fontWeight: 'var(--font-weight-semibold)',
                    verticalAlign: 'top'
                  }}>引渡時期</th>
                  <td style={{
                    padding: 'var(--spacing-3)',
                    backgroundColor: 'var(--color-neutral-white)'
                  }}>お申し込み後、即時ご利用いただけます。</td>
                </tr>
                <tr style={{ borderBottom: '1px solid var(--color-neutral-200)' }}>
                  <th style={{
                    padding: 'var(--spacing-3)',
                    textAlign: 'left',
                    backgroundColor: 'var(--color-neutral-50)',
                    fontWeight: 'var(--font-weight-semibold)',
                    verticalAlign: 'top'
                  }}>受付可能な決済手段</th>
                  <td style={{
                    padding: 'var(--spacing-3)',
                    backgroundColor: 'var(--color-neutral-white)'
                  }}>
                    <ul style={{ margin: 0, paddingLeft: 0, listStylePosition: 'inside' }}>
                      <li>クレジットカード（VISA、Mastercard、JCB、American Express）</li>
                      <li>銀行振込</li>
                      <li>コンビニ決済</li>
                    </ul>
                  </td>
                </tr>
                <tr style={{ borderBottom: '1px solid var(--color-neutral-200)' }}>
                  <th style={{
                    padding: 'var(--spacing-3)',
                    textAlign: 'left',
                    backgroundColor: 'var(--color-neutral-50)',
                    fontWeight: 'var(--font-weight-semibold)',
                    verticalAlign: 'top'
                  }}>決済期間</th>
                  <td style={{
                    padding: 'var(--spacing-3)',
                    backgroundColor: 'var(--color-neutral-white)'
                  }}>クレジットカード決済の場合は即時決済となります。<br />銀行振込、コンビニ決済の場合は、お申し込み後7日以内にお支払いください。</td>
                </tr>
                <tr style={{ borderBottom: '1px solid var(--color-neutral-200)' }}>
                  <th style={{
                    padding: 'var(--spacing-3)',
                    textAlign: 'left',
                    backgroundColor: 'var(--color-neutral-50)',
                    fontWeight: 'var(--font-weight-semibold)',
                    verticalAlign: 'top'
                  }}>販売価格</th>
                  <td style={{
                    padding: 'var(--spacing-3)',
                    backgroundColor: 'var(--color-neutral-white)'
                  }}>各プランページに記載の金額（税込）となります。</td>
                </tr>
                <tr>
                  <th style={{
                    padding: 'var(--spacing-3)',
                    textAlign: 'left',
                    backgroundColor: 'var(--color-neutral-50)',
                    fontWeight: 'var(--font-weight-semibold)',
                    verticalAlign: 'top'
                  }}>サービス提供期間</th>
                  <td style={{
                    padding: 'var(--spacing-3)',
                    backgroundColor: 'var(--color-neutral-white)'
                  }}>月額プランの場合は、毎月自動更新されます。解約のお申し出がない限り、継続してサービスを提供いたします。</td>
                </tr>
              </tbody>
            </table>

            <section style={{ marginTop: 'var(--spacing-6)', marginBottom: 'var(--spacing-6)' }}>
              <h3 style={{
                fontSize: 'var(--font-size-lg)',
                fontWeight: 'var(--font-weight-semibold)',
                color: 'var(--color-neutral-900)',
                marginBottom: 'var(--spacing-3)'
              }}>お問い合わせ</h3>
              <p style={{ marginBottom: 'var(--spacing-2)' }}>
                本表記に関するお問い合わせは、以下の連絡先までお願いいたします。
              </p>
              <div style={{
                background: 'var(--color-neutral-white)',
                padding: 'var(--spacing-4)',
                borderRadius: 0,
                border: '1px solid var(--color-neutral-200)'
              }}>
                <p style={{ marginBottom: 'var(--spacing-1)', fontWeight: 'var(--font-weight-medium)' }}>Eメールアドレス: support@example.com</p>
                <p style={{ marginBottom: 'var(--spacing-1)', fontWeight: 'var(--font-weight-medium)' }}>受付時間: 平日 9:00〜18:00（土日祝日を除く）</p>
              </div>
            </section>
              </div>
            </div>
          </div>
        </div>
      </InfoPageWrapper>
    </div>
  );
};

export default CommercialPage;
