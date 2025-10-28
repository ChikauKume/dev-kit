import React, { useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import InfoPageWrapper from '../../../components/layout/InfoPageWrapper';
import TemplateNavigation from '../../../components/navigation/TemplateNavigation';
import Button from '../../../components/buttons/Button';
import InputField from '../../../components/forms/InputField';
import Icon from '../../../components/icons/Icon';
import { useViewMode } from '../../../hooks/useViewMode';

const SettingsPage: React.FC = () => {
  const navigate = useNavigate();
  const notificationRef = useRef<HTMLDivElement>(null);

  const [viewMode, setViewMode] = useViewMode();
  const [showNotificationDropdown, setShowNotificationDropdown] = useState(false);
  const [showUserMenu, setShowUserMenu] = useState(false);
  const [isHamburgerOpen, setIsHamburgerOpen] = useState(false);
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);

  // Profile editing state
  const [isEditing, setIsEditing] = useState(false);
  const [flashMessage, setFlashMessage] = useState<string | null>(null);
  const [profileData, setProfileData] = useState({
    username: '管理者',
    email: 'admin@example.com',
    role: 'システム管理者',
    displayName: '田中 太郎',
    phone: '090-1234-5678',
    department: '開発部'
  });

  const [editedData, setEditedData] = useState({ ...profileData });

  const handleNavigate = (page: string) => {
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

  const handleEdit = () => {
    setEditedData({ ...profileData });
    setIsEditing(true);
  };

  const handleSave = () => {
    setProfileData({ ...editedData });
    setIsEditing(false);
    setFlashMessage('プロフィールを保存しました');
    setTimeout(() => setFlashMessage(null), 3000);
  };

  const handleCancel = () => {
    setEditedData({ ...profileData });
    setIsEditing(false);
  };

  const handleInputChange = (field: string, value: string) => {
    setEditedData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <div className={viewMode === 'sp' ? 'force-mobile' : ''}>
      <TemplateNavigation
        viewMode={viewMode}
        onViewModeChange={setViewMode}
      />
      <InfoPageWrapper
        viewMode={viewMode}
        currentPage="settings"
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
              borderRadius: 'var(--radius-md)',
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
            borderRadius: 'var(--radius-lg)',
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
                  value={editedData.displayName}
                  onChange={(e) => handleInputChange('displayName', e.target.value)}
                  placeholder="表示名を入力"
                />
                <InputField
                  label="ユーザー名"
                  value={editedData.username}
                  onChange={(e) => handleInputChange('username', e.target.value)}
                  placeholder="ユーザー名を入力"
                />
                <InputField
                  label="メールアドレス"
                  type="email"
                  value={editedData.email}
                  onChange={(e) => handleInputChange('email', e.target.value)}
                  placeholder="メールアドレスを入力"
                />
                <InputField
                  label="電話番号"
                  value={editedData.phone}
                  onChange={(e) => handleInputChange('phone', e.target.value)}
                  placeholder="電話番号を入力"
                />
                <InputField
                  label="部署"
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
