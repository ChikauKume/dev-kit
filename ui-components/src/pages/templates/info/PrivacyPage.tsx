import React, { useState, useRef } from 'react';
import InfoPageWrapper from '../../../components/layout/InfoPageWrapper';
import { useViewMode } from '../../../hooks/useViewMode';

/**
 * PrivacyPage Component
 *
 * プライバシーポリシーページのコンポーネント。個人情報の取り扱いに関する
 * 方針を表示します。
 *
 * **React Router不要**: このコンポーネントはReact Routerに依存しません
 * **Inertia.js対応**: onNavigateコールバックを使用してルーティング制御
 *
 * @example Laravel + Inertia.js
 * return Inertia::render('templates/info/PrivacyPage', [
 *   'hideNavigation' => true,
 * ]);
 */
interface PrivacyPageProps {
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

const PrivacyPage: React.FC<PrivacyPageProps> = ({ hideNavigation, onNavigate, onLogout }) => {
  const [viewMode, setViewMode] = useViewMode();
  const notificationRef = useRef<HTMLDivElement>(null);

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
      <InfoPageWrapper
        viewMode={viewMode}
        currentPage="privacy"
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
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: viewMode === 'sp' ? 'var(--spacing-2)' : 0, flexDirection: viewMode === 'sp' ? 'column' : 'row', alignItems: viewMode === 'sp' ? 'flex-start' : 'center' }}>
                <h2 className="page-title">プライバシーポリシー</h2>
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
                <section style={{ marginBottom: 'var(--spacing-6)' }}>
              <p style={{ marginBottom: 'var(--spacing-2)' }}>
                当社は、お客様の個人情報について、以下のとおりプライバシーポリシー（以下、「本ポリシー」といいます。）を定めます。本ポリシーは、当社がどのような個人情報を取得し、どのように利用・共有するか、お客様がどのようにご自身の個人情報を管理できるかをご説明するものです。
              </p>
            </section>

            <section style={{ marginBottom: 'var(--spacing-6)' }}>
              <h3 style={{
                fontSize: 'var(--font-size-lg)',
                fontWeight: 'var(--font-weight-semibold)',
                color: 'var(--color-neutral-900)',
                marginBottom: 'var(--spacing-3)'
              }}>1. 事業者情報</h3>
              <ul style={{ marginLeft: 'var(--spacing-4)' }}>
                <li style={{ marginBottom: 'var(--spacing-1)' }}>事業者名: 株式会社サンプル</li>
                <li style={{ marginBottom: 'var(--spacing-1)' }}>所在地: 東京都渋谷区〇〇 1-2-3</li>
                <li style={{ marginBottom: 'var(--spacing-1)' }}>代表者: 代表取締役 山田太郎</li>
                <li style={{ marginBottom: 'var(--spacing-1)' }}>連絡先: privacy@example.com</li>
              </ul>
            </section>

            <section style={{ marginBottom: 'var(--spacing-6)' }}>
              <h3 style={{
                fontSize: 'var(--font-size-lg)',
                fontWeight: 'var(--font-weight-semibold)',
                color: 'var(--color-neutral-900)',
                marginBottom: 'var(--spacing-3)'
              }}>2. 取得する個人情報</h3>
              <p style={{ marginBottom: 'var(--spacing-2)' }}>
                当社は、以下の個人情報を取得します。
              </p>
              <ul style={{ marginLeft: 'var(--spacing-4)' }}>
                <li style={{ marginBottom: 'var(--spacing-1)' }}>氏名</li>
                <li style={{ marginBottom: 'var(--spacing-1)' }}>メールアドレス</li>
                <li style={{ marginBottom: 'var(--spacing-1)' }}>電話番号</li>
                <li style={{ marginBottom: 'var(--spacing-1)' }}>住所</li>
                <li style={{ marginBottom: 'var(--spacing-1)' }}>生年月日</li>
                <li style={{ marginBottom: 'var(--spacing-1)' }}>クレジットカード情報</li>
                <li style={{ marginBottom: 'var(--spacing-1)' }}>IPアドレス</li>
                <li style={{ marginBottom: 'var(--spacing-1)' }}>Cookie情報</li>
                <li style={{ marginBottom: 'var(--spacing-1)' }}>ご利用履歴</li>
              </ul>
            </section>

            <section style={{ marginBottom: 'var(--spacing-6)' }}>
              <h3 style={{
                fontSize: 'var(--font-size-lg)',
                fontWeight: 'var(--font-weight-semibold)',
                color: 'var(--color-neutral-900)',
                marginBottom: 'var(--spacing-3)'
              }}>3. 個人情報の利用目的</h3>
              <p style={{ marginBottom: 'var(--spacing-2)' }}>
                当社は、取得した個人情報を以下の目的で利用します。
              </p>
              <ul style={{ marginLeft: 'var(--spacing-4)' }}>
                <li style={{ marginBottom: 'var(--spacing-1)' }}>本サービスの提供・運営のため</li>
                <li style={{ marginBottom: 'var(--spacing-1)' }}>ユーザーからのお問い合わせに回答するため</li>
                <li style={{ marginBottom: 'var(--spacing-1)' }}>ユーザーが利用中のサービスの新機能、更新情報、キャンペーン等の案内のメールを送付するため</li>
                <li style={{ marginBottom: 'var(--spacing-1)' }}>メンテナンス、重要なお知らせなど必要に応じたご連絡のため</li>
                <li style={{ marginBottom: 'var(--spacing-1)' }}>利用規約に違反したユーザーや、不正・不当な目的でサービスを利用しようとするユーザーの特定をし、ご利用をお断りするため</li>
                <li style={{ marginBottom: 'var(--spacing-1)' }}>ユーザーにご自身の登録情報の閲覧や変更、削除、ご利用状況の閲覧を行っていただくため</li>
                <li style={{ marginBottom: 'var(--spacing-1)' }}>サービスの改善や新サービスの開発等に役立てるため</li>
                <li style={{ marginBottom: 'var(--spacing-1)' }}>その他、上記利用目的に付随する目的のため</li>
              </ul>
            </section>

            <section style={{ marginBottom: 'var(--spacing-6)' }}>
              <h3 style={{
                fontSize: 'var(--font-size-lg)',
                fontWeight: 'var(--font-weight-semibold)',
                color: 'var(--color-neutral-900)',
                marginBottom: 'var(--spacing-3)'
              }}>4. 個人情報の第三者提供</h3>
              <p style={{ marginBottom: 'var(--spacing-2)' }}>
                当社は、個人情報を適切に管理し、次のいずれかに該当する場合を除き、個人情報を第三者に開示することはありません。
              </p>
              <ul style={{ marginLeft: 'var(--spacing-4)' }}>
                <li style={{ marginBottom: 'var(--spacing-1)' }}>ユーザーの同意がある場合</li>
                <li style={{ marginBottom: 'var(--spacing-1)' }}>法令に基づく場合</li>
                <li style={{ marginBottom: 'var(--spacing-1)' }}>人の生命、身体または財産の保護のために必要がある場合であって、本人の同意を得ることが困難であるとき</li>
                <li style={{ marginBottom: 'var(--spacing-1)' }}>公衆衛生の向上または児童の健全な育成の推進のために特に必要がある場合であって、本人の同意を得ることが困難であるとき</li>
                <li style={{ marginBottom: 'var(--spacing-1)' }}>国の機関もしくは地方公共団体またはその委託を受けた者が法令の定める事務を遂行することに対して協力する必要がある場合であって、本人の同意を得ることにより当該事務の遂行に支障を及ぼすおそれがあるとき</li>
              </ul>
            </section>

            <section style={{ marginBottom: 'var(--spacing-6)' }}>
              <h3 style={{
                fontSize: 'var(--font-size-lg)',
                fontWeight: 'var(--font-weight-semibold)',
                color: 'var(--color-neutral-900)',
                marginBottom: 'var(--spacing-3)'
              }}>5. 個人情報の開示・訂正・削除</h3>
              <p style={{ marginBottom: 'var(--spacing-2)' }}>
                ユーザーは、当社の保有する自己の個人情報について、開示、訂正、削除を請求することができます。その場合は、以下の窓口までご連絡ください。確認後、合理的な期間内に対応いたします。
              </p>
              <p style={{ marginBottom: 'var(--spacing-2)', fontWeight: 'var(--font-weight-medium)' }}>
                個人情報お問い合わせ窓口: privacy@example.com
              </p>
            </section>

            <section style={{ marginBottom: 'var(--spacing-6)' }}>
              <h3 style={{
                fontSize: 'var(--font-size-lg)',
                fontWeight: 'var(--font-weight-semibold)',
                color: 'var(--color-neutral-900)',
                marginBottom: 'var(--spacing-3)'
              }}>6. Cookie（クッキー）その他の技術の利用</h3>
              <p style={{ marginBottom: 'var(--spacing-2)' }}>
                当社のサービスは、Cookie及びこれに類する技術を利用することがあります。これらの技術は、当社による本サービスの利用状況等の把握に役立ち、サービス向上に資するものです。Cookieを無効化されたいユーザーは、ウェブブラウザの設定を変更することによりCookieを無効化することができます。ただし、Cookieを無効化すると、本サービスの一部の機能をご利用いただけなくなる場合があります。
              </p>
            </section>

            <section style={{ marginBottom: 'var(--spacing-6)' }}>
              <h3 style={{
                fontSize: 'var(--font-size-lg)',
                fontWeight: 'var(--font-weight-semibold)',
                color: 'var(--color-neutral-900)',
                marginBottom: 'var(--spacing-3)'
              }}>7. プライバシーポリシーの変更</h3>
              <p style={{ marginBottom: 'var(--spacing-2)' }}>
                本ポリシーの内容は、法令その他本ポリシーに別段の定めのある事項を除いて、ユーザーに通知することなく、変更することができるものとします。
              </p>
              <p style={{ marginBottom: 'var(--spacing-2)' }}>
                当社が別途定める場合を除いて、変更後のプライバシーポリシーは、本ウェブサイトに掲載したときから効力を生じるものとします。
              </p>
            </section>

            <section style={{ marginBottom: 'var(--spacing-6)' }}>
              <h3 style={{
                fontSize: 'var(--font-size-lg)',
                fontWeight: 'var(--font-weight-semibold)',
                color: 'var(--color-neutral-900)',
                marginBottom: 'var(--spacing-3)'
              }}>8. お問い合わせ</h3>
              <p style={{ marginBottom: 'var(--spacing-2)' }}>
                本ポリシーに関するお問い合わせは、下記の窓口までお願いいたします。
              </p>
              <div style={{
                background: 'var(--color-neutral-white)',
                padding: 'var(--spacing-4)',
                borderRadius: 0,
                border: '1px solid var(--color-neutral-200)'
              }}>
                <p style={{ marginBottom: 'var(--spacing-1)', fontWeight: 'var(--font-weight-medium)' }}>Eメールアドレス: privacy@example.com</p>
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

export default PrivacyPage;
