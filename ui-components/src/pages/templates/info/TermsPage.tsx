import React, { useState, useRef } from 'react';
import InfoPageWrapper from '../../../components/layout/InfoPageWrapper';
import { useViewMode } from '../../../hooks/useViewMode';

/**
 * TermsPage Component
 *
 * 利用規約ページのコンポーネント。サービス利用の条件や禁止事項などを
 * 表示します。
 *
 * **React Router不要**: このコンポーネントはReact Routerに依存しません
 * **Inertia.js対応**: onNavigateコールバックを使用してルーティング制御
 *
 * @example Laravel + Inertia.js
 * return Inertia::render('templates/info/TermsPage', [
 *   'hideNavigation' => true,
 * ]);
 */
interface TermsPageProps {
  hideNavigation?: boolean;
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
}

const TermsPage: React.FC<TermsPageProps> = ({ hideNavigation, onNavigate, onLogout }) => {
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

  return (
    <div className={viewMode === 'sp' ? 'force-mobile' : ''}>
      <InfoPageWrapper
        viewMode={viewMode}
        currentPage="terms"
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
            <div className="card-header" style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: viewMode === 'sp' ? 'flex-start' : 'center',
              flexDirection: viewMode === 'sp' ? 'column' : 'row',
              gap: viewMode === 'sp' ? 'var(--spacing-2)' : 0,
              marginBottom: 'var(--spacing-12)'
            }}>
              <h2 className="page-title">利用規約</h2>
              <p style={{ fontSize: 'var(--font-size-sm)', color: 'var(--color-neutral-600)', margin: 0 }}>
                最終更新日: 2024年10月15日
              </p>
            </div>
            <div className="card-body">
              <div style={{
                fontSize: 'var(--font-size-sm)',
                lineHeight: 'var(--line-height-relaxed)',
                color: 'var(--color-neutral-700)'
              }}>
                <section style={{ marginBottom: 'var(--spacing-6)' }}>
              <h3 style={{
                fontSize: 'var(--font-size-lg)',
                fontWeight: 'var(--font-weight-semibold)',
                color: 'var(--color-neutral-900)',
                marginBottom: 'var(--spacing-3)'
              }}>第1条（適用）</h3>
              <p style={{ marginBottom: 'var(--spacing-2)' }}>
                本規約は、当社が提供するサービス（以下「本サービス」といいます）の利用条件を定めるものです。登録ユーザーの皆さま（以下「ユーザー」といいます）には、本規約に従って、本サービスをご利用いただきます。
              </p>
            </section>

            <section style={{ marginBottom: 'var(--spacing-6)' }}>
              <h3 style={{
                fontSize: 'var(--font-size-lg)',
                fontWeight: 'var(--font-weight-semibold)',
                color: 'var(--color-neutral-900)',
                marginBottom: 'var(--spacing-3)'
              }}>第2条（利用登録）</h3>
              <ol style={{ marginLeft: 'var(--spacing-4)', marginBottom: 'var(--spacing-2)' }}>
                <li style={{ marginBottom: 'var(--spacing-2)' }}>
                  本サービスにおいて、登録希望者が当社の定める方法によって利用登録を申請し、当社がこれを承認することによって、利用登録が完了するものとします。
                </li>
                <li style={{ marginBottom: 'var(--spacing-2)' }}>
                  当社は、利用登録の申請者に以下の事由があると判断した場合、利用登録の申請を承認しないことがあり、その理由については一切の開示義務を負わないものとします。
                  <ul style={{ marginLeft: 'var(--spacing-4)', marginTop: 'var(--spacing-2)' }}>
                    <li>利用登録の申請に際して虚偽の事項を届け出た場合</li>
                    <li>本規約に違反したことがある者からの申請である場合</li>
                    <li>その他、当社が利用登録を相当でないと判断した場合</li>
                  </ul>
                </li>
              </ol>
            </section>

            <section style={{ marginBottom: 'var(--spacing-6)' }}>
              <h3 style={{
                fontSize: 'var(--font-size-lg)',
                fontWeight: 'var(--font-weight-semibold)',
                color: 'var(--color-neutral-900)',
                marginBottom: 'var(--spacing-3)'
              }}>第3条（ユーザーIDおよびパスワードの管理）</h3>
              <ol style={{ marginLeft: 'var(--spacing-4)', marginBottom: 'var(--spacing-2)' }}>
                <li style={{ marginBottom: 'var(--spacing-2)' }}>
                  ユーザーは、自己の責任において、本サービスのユーザーIDおよびパスワードを適切に管理するものとします。
                </li>
                <li style={{ marginBottom: 'var(--spacing-2)' }}>
                  ユーザーは、いかなる場合にも、ユーザーIDおよびパスワードを第三者に譲渡または貸与し、もしくは第三者と共用することはできません。
                </li>
                <li style={{ marginBottom: 'var(--spacing-2)' }}>
                  当社は、ユーザーIDとパスワードの組み合わせが登録情報と一致してログインされた場合には、そのユーザーIDを登録しているユーザー自身による利用とみなします。
                </li>
              </ol>
            </section>

            <section style={{ marginBottom: 'var(--spacing-6)' }}>
              <h3 style={{
                fontSize: 'var(--font-size-lg)',
                fontWeight: 'var(--font-weight-semibold)',
                color: 'var(--color-neutral-900)',
                marginBottom: 'var(--spacing-3)'
              }}>第4条（禁止事項）</h3>
              <p style={{ marginBottom: 'var(--spacing-2)' }}>
                ユーザーは、本サービスの利用にあたり、以下の行為をしてはなりません。
              </p>
              <ul style={{ marginLeft: 'var(--spacing-4)' }}>
                <li style={{ marginBottom: 'var(--spacing-1)' }}>法令または公序良俗に違反する行為</li>
                <li style={{ marginBottom: 'var(--spacing-1)' }}>犯罪行為に関連する行為</li>
                <li style={{ marginBottom: 'var(--spacing-1)' }}>本サービスの内容等、本サービスに含まれる著作権、商標権ほか知的財産権を侵害する行為</li>
                <li style={{ marginBottom: 'var(--spacing-1)' }}>当社、ほかのユーザー、またはその他第三者のサーバーまたはネットワークの機能を破壊したり、妨害したりする行為</li>
                <li style={{ marginBottom: 'var(--spacing-1)' }}>本サービスによって得られた情報を商業的に利用する行為</li>
                <li style={{ marginBottom: 'var(--spacing-1)' }}>当社のサービスの運営を妨害するおそれのある行為</li>
                <li style={{ marginBottom: 'var(--spacing-1)' }}>不正アクセスをし、またはこれを試みる行為</li>
                <li style={{ marginBottom: 'var(--spacing-1)' }}>他のユーザーに関する個人情報等を収集または蓄積する行為</li>
                <li style={{ marginBottom: 'var(--spacing-1)' }}>不正な目的を持って本サービスを利用する行為</li>
                <li style={{ marginBottom: 'var(--spacing-1)' }}>本サービスの他のユーザーまたはその他の第三者に不利益、損害、不快感を与える行為</li>
                <li style={{ marginBottom: 'var(--spacing-1)' }}>他のユーザーに成りすます行為</li>
                <li style={{ marginBottom: 'var(--spacing-1)' }}>当社が許諾しない本サービス上での宣伝、広告、勧誘、または営業行為</li>
                <li style={{ marginBottom: 'var(--spacing-1)' }}>その他、当社が不適切と判断する行為</li>
              </ul>
            </section>

            <section style={{ marginBottom: 'var(--spacing-6)' }}>
              <h3 style={{
                fontSize: 'var(--font-size-lg)',
                fontWeight: 'var(--font-weight-semibold)',
                color: 'var(--color-neutral-900)',
                marginBottom: 'var(--spacing-3)'
              }}>第5条（本サービスの提供の停止等）</h3>
              <ol style={{ marginLeft: 'var(--spacing-4)', marginBottom: 'var(--spacing-2)' }}>
                <li style={{ marginBottom: 'var(--spacing-2)' }}>
                  当社は、以下のいずれかの事由があると判断した場合、ユーザーに事前に通知することなく本サービスの全部または一部の提供を停止または中断することができるものとします。
                  <ul style={{ marginLeft: 'var(--spacing-4)', marginTop: 'var(--spacing-2)' }}>
                    <li>本サービスにかかるコンピュータシステムの保守点検または更新を行う場合</li>
                    <li>地震、落雷、火災、停電または天災などの不可抗力により、本サービスの提供が困難となった場合</li>
                    <li>コンピュータまたは通信回線等が事故により停止した場合</li>
                    <li>その他、当社が本サービスの提供が困難と判断した場合</li>
                  </ul>
                </li>
                <li style={{ marginBottom: 'var(--spacing-2)' }}>
                  当社は、本サービスの提供の停止または中断により、ユーザーまたは第三者が被ったいかなる不利益または損害についても、一切の責任を負わないものとします。
                </li>
              </ol>
            </section>

            <section style={{ marginBottom: 'var(--spacing-6)' }}>
              <h3 style={{
                fontSize: 'var(--font-size-lg)',
                fontWeight: 'var(--font-weight-semibold)',
                color: 'var(--color-neutral-900)',
                marginBottom: 'var(--spacing-3)'
              }}>第6条（免責事項）</h3>
              <ol style={{ marginLeft: 'var(--spacing-4)' }}>
                <li style={{ marginBottom: 'var(--spacing-2)' }}>
                  当社は、本サービスに事実上または法律上の瑕疵（安全性、信頼性、正確性、完全性、有効性、特定の目的への適合性、セキュリティなどに関する欠陥、エラーやバグ、権利侵害などを含みます。）がないことを明示的にも黙示的にも保証しておりません。
                </li>
                <li style={{ marginBottom: 'var(--spacing-2)' }}>
                  当社は、本サービスに起因してユーザーに生じたあらゆる損害について一切の責任を負いません。
                </li>
              </ol>
            </section>

            <section style={{ marginBottom: 'var(--spacing-6)' }}>
              <h3 style={{
                fontSize: 'var(--font-size-lg)',
                fontWeight: 'var(--font-weight-semibold)',
                color: 'var(--color-neutral-900)',
                marginBottom: 'var(--spacing-3)'
              }}>第7条（サービス内容の変更等）</h3>
              <p>
                当社は、ユーザーに通知することなく、本サービスの内容を変更しまたは本サービスの提供を中止することができるものとし、これによってユーザーに生じた損害について一切の責任を負いません。
              </p>
            </section>

            <section style={{ marginBottom: 'var(--spacing-6)' }}>
              <h3 style={{
                fontSize: 'var(--font-size-lg)',
                fontWeight: 'var(--font-weight-semibold)',
                color: 'var(--color-neutral-900)',
                marginBottom: 'var(--spacing-3)'
              }}>第8条（利用規約の変更）</h3>
              <p>
                当社は、必要と判断した場合には、ユーザーに通知することなくいつでも本規約を変更することができるものとします。なお、本規約の変更後、本サービスの利用を開始した場合には、当該ユーザーは変更後の規約に同意したものとみなします。
              </p>
            </section>
              </div>
            </div>
          </div>
        </div>
      </InfoPageWrapper>
    </div>
  );
};

export default TermsPage;
