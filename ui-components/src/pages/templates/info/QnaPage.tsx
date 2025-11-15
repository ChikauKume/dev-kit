import React, { useState, useRef } from 'react';
import Accordion from '../../../components/common/Accordion';
import InfoPageWrapper from '../../../components/layout/InfoPageWrapper';
import { useViewMode } from '../../../hooks/useViewMode';

/**
 * QnaPage Component
 *
 * よくある質問(Q&A)ページのコンポーネント。サービスに関する質問と回答を
 * アコーディオン形式で表示します。
 *
 * **React Router不要**: このコンポーネントはReact Routerに依存しません
 * **Inertia.js対応**: onNavigateコールバックを使用してルーティング制御
 *
 * @example Laravel + Inertia.js
 * return Inertia::render('templates/info/QnaPage', [
 *   'hideNavigation' => true,
 * ]);
 */
interface QnaPageProps {
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

const QnaPage: React.FC<QnaPageProps> = ({ hideNavigation, onNavigate, onLogout }) => {
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
    { id: 1, title: '新しいメッセージ', message: 'よくある質問が更新されました', time: '2時間前', read: false },
    { id: 2, title: 'システムお知らせ', message: 'サポート体制の強化について', time: '1日前', read: true },
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

  const qnaItems = [
    {
      title: 'Q. アカウントの登録方法を教えてください',
      content: (
        <>
          <p>アカウント登録は以下の手順で行えます:</p>
          <ol style={{ marginTop: 'var(--spacing-2)', marginLeft: 'var(--spacing-4)' }}>
            <li>トップページの「新規登録」ボタンをクリック</li>
            <li>メールアドレスとパスワードを入力</li>
            <li>利用規約に同意し、「登録」ボタンをクリック</li>
            <li>確認メールが送信されるので、記載されたリンクをクリックして認証完了</li>
          </ol>
        </>
      )
    },
    {
      title: 'Q. パスワードを忘れた場合はどうすればいいですか?',
      content: (
        <>
          <p>パスワードを忘れた場合は、以下の手順でリセットできます:</p>
          <ol style={{ marginTop: 'var(--spacing-2)', marginLeft: 'var(--spacing-4)' }}>
            <li>ログインページの「パスワードをお忘れですか?」リンクをクリック</li>
            <li>登録したメールアドレスを入力</li>
            <li>パスワードリセット用のメールが送信されます</li>
            <li>メール内のリンクから新しいパスワードを設定</li>
          </ol>
        </>
      )
    },
    {
      title: 'Q. データのエクスポートは可能ですか?',
      content: (
        <p>はい、可能です。データ一覧画面の「エクスポート」ボタンからCSV形式でデータをダウンロードできます。また、APIを利用してJSON形式でのデータ取得も可能です。</p>
      )
    },
    {
      title: 'Q. アカウントを削除したい場合はどうすればいいですか?',
      content: (
        <>
          <p>アカウント削除は以下の手順で行えます:</p>
          <ol style={{ marginTop: 'var(--spacing-2)', marginLeft: 'var(--spacing-4)' }}>
            <li>アカウント設定画面を開く</li>
            <li>ページ最下部の「アカウントを削除」ボタンをクリック</li>
            <li>確認ダイアログで「削除」を選択</li>
          </ol>
          <p style={{ marginTop: 'var(--spacing-2)', color: 'var(--color-danger-600)', fontWeight: 'var(--font-weight-medium)' }}>
            ※ 削除したアカウントと関連データは復元できませんのでご注意ください。
          </p>
        </>
      )
    },
    {
      title: 'Q. プランのアップグレード方法は?',
      content: (
        <>
          <p>プランのアップグレードは以下の手順で行えます:</p>
          <ol style={{ marginTop: 'var(--spacing-2)', marginLeft: 'var(--spacing-4)' }}>
            <li>アカウント設定画面の「プラン管理」タブを開く</li>
            <li>希望するプランを選択</li>
            <li>支払い情報を入力し、「アップグレード」ボタンをクリック</li>
          </ol>
          <p style={{ marginTop: 'var(--spacing-2)' }}>
            プランは即座に適用され、日割り計算で請求されます。
          </p>
        </>
      )
    },
    {
      title: 'Q. サポートへの問い合わせ方法は?',
      content: (
        <>
          <p>以下の方法でサポートチームへお問い合わせいただけます:</p>
          <ul style={{ marginTop: 'var(--spacing-2)', marginLeft: 'var(--spacing-4)' }}>
            <li><strong>メール:</strong> support@example.com</li>
            <li><strong>チャット:</strong> 画面右下のチャットアイコンからリアルタイムサポート（平日9:00-18:00）</li>
            <li><strong>お問い合わせフォーム:</strong> ヘルプセンターから送信可能</li>
          </ul>
          <p style={{ marginTop: 'var(--spacing-2)' }}>
            通常、1営業日以内に返信いたします。
          </p>
        </>
      )
    }
  ];

  return (
    <div className={viewMode === 'sp' ? 'force-mobile' : ''}>
      <InfoPageWrapper
        viewMode={viewMode}
        currentPage="qna"
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
            <div className="card-header" style={{ marginBottom: viewMode === 'sp' ? 'var(--spacing-6)' : 'var(--spacing-8)' }}>
              <h2 className="page-title" style={{ marginBottom: 'var(--spacing-2)' }}>よくある質問</h2>
              <p className="card-description" style={{ fontSize: viewMode === 'sp' ? 'var(--font-size-sm)' : undefined }}>
                サービスに関するよくある質問をご覧いただけます
              </p>
            </div>
            <div className="card-body">
              <Accordion items={qnaItems} allowMultiple={false} />
            </div>
          </div>
        </div>
      </InfoPageWrapper>
    </div>
  );
};

export default QnaPage;
