import React, { useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import DetailPage from '../../templates/data/DetailPage';
import InfoPageWrapper from '../../../components/layout/InfoPageWrapper';
import TemplateNavigation from '../../../components/navigation/TemplateNavigation';
import type { DetailSection, DetailTab } from '../../../types/detail/DetailFieldConfig';
import type { DetailActionButton } from '../../../types/detail/DetailPageProps';
import { useViewMode } from '../../../hooks/useViewMode';

/**
 * DataDetailPage
 *
 * Comprehensive example demonstrating all features of DataDetailPage:
 * - Multiple field types (text, badge, list, date, etc.)
 * - Section-based layout with collapsible sections
 * - Tab-based organization
 * - Action buttons with confirmations
 * - Conditional visibility
 * - Custom rendering
 * - Loading and error states
 */

const DataDetailPage: React.FC = () => {
  const navigate = useNavigate();
  const notificationRef = useRef<HTMLDivElement>(null);

  // Header state management
  const [viewMode, setViewMode] = useViewMode();
  const [showNotificationDropdown, setShowNotificationDropdown] = useState(false);
  const [showUserMenu, setShowUserMenu] = useState(false);
  const [isHamburgerOpen, setIsHamburgerOpen] = useState(false);
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);

  // Handle navigation
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

  // Notification state management
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

  // Sample user data
  const projectData = {
    // Personal Information
    firstName: '太郎',
    lastName: '山田',
    email: 'taro.yamada@example.com',
    phone: '09012345678',
    alternatePhone: '0312345678',

    // Address Information
    postalCode: '1500043',
    prefecture: '東京都',
    city: '渋谷区',
    address1: '道玄坂1-2-3',
    address2: '渋谷ビル 4F',

    // Employment Information
    employmentStatus: '正社員',
    occupation: 'ソフトウェアエンジニア',
    companyName: '株式会社サンプル',
    annualIncome: 6000000,

    // Preferences
    skills: ['プログラミング', 'デザイン'],
    workLocation: ['東京', 'リモート'],
    desiredSalary: 6000000,
    availableStartDate: '2025/02/01',
    preferredContactTime: '14:00'
  };

  // Example 1: Basic Detail Page with Flat Fields
  const basicSections: DetailSection[] = [
    {
      id: 'personal',
      title: '個人情報',
      icon: 'user',
      columns: 2,
      layout: 'grid',
      collapsible: true,
      defaultCollapsed: false,
      fields: [
        { key: 'firstName', label: '名', type: 'text' },
        { key: 'lastName', label: '姓', type: 'text' },
        { key: 'email', label: 'メールアドレス', type: 'email' },
        { key: 'phone', label: '電話番号', type: 'text' }
      ]
    },
    {
      id: 'address',
      title: '住所情報',
      icon: 'location',
      columns: 2,
      layout: 'grid',
      collapsible: true,
      defaultCollapsed: false,
      fields: [
        { key: 'postalCode', label: '郵便番号', type: 'text' },
        {
          key: 'prefecture',
          label: '都道府県',
          type: 'badge',
          badgeConfig: {
            tokyo: { label: '東京都', variant: 'info' },
            osaka: { label: '大阪府', variant: 'info' },
            kyoto: { label: '京都府', variant: 'info' },
            hokkaido: { label: '北海道', variant: 'info' }
          }
        },
        { key: 'city', label: '市区町村', type: 'text' },
        { key: 'address1', label: '町名・番地', type: 'text' },
        { key: 'address2', label: '建物名・部屋番号', type: 'text' }
      ]
    },
    {
      id: 'employment',
      title: '職業情報',
      icon: 'briefcase',
      columns: 2,
      layout: 'grid',
      collapsible: true,
      defaultCollapsed: false,
      fields: [
        {
          key: 'employmentStatus',
          label: '雇用形態',
          type: 'badge',
          badgeConfig: {
            fulltime: { label: '正社員', variant: 'success' },
            parttime: { label: 'パート・アルバイト', variant: 'info' },
            contract: { label: '契約社員', variant: 'warning' },
            freelance: { label: 'フリーランス', variant: 'info' },
            student: { label: '学生', variant: 'default' },
            unemployed: { label: '無職', variant: 'error' }
          }
        },
        { key: 'occupation', label: '職種', type: 'text' },
        { key: 'companyName', label: '勤務先名', type: 'text' },
        {
          key: 'annualIncome',
          label: '年収',
          type: 'currency',
          currencySymbol: '¥',
          decimals: 0
        }
      ]
    },
    {
      id: 'preferences',
      title: '設定・希望',
      icon: 'settings',
      collapsible: true,
      defaultCollapsed: false,
      fields: [
        {
          key: 'skills',
          label: 'スキル・得意分野',
          type: 'list',
          listConfig: {
            style: 'inline',
            renderItem: (skill: string) => {
              const labels: Record<string, string> = {
                programming: 'プログラミング',
                design: 'デザイン',
                marketing: 'マーケティング',
                management: 'マネジメント',
                sales: '営業'
              };
              return (
                <span
                  style={{
                    display: 'inline-block',
                    padding: 'var(--spacing-2) var(--spacing-3)',
                    background: 'var(--color-primary-100)',
                    color: 'var(--color-primary-700)',
                    borderRadius: 'var(--radius-full)',
                    fontSize: 'var(--font-size-sm)',
                    fontWeight: 'var(--font-weight-medium)',
                    marginRight: 'var(--spacing-2)',
                    marginBottom: 'var(--spacing-2)'
                  }}
                >
                  {labels[skill] || skill}
                </span>
              );
            }
          }
        },
        {
          key: 'workLocation',
          label: '希望勤務地',
          type: 'list',
          listConfig: {
            style: 'inline',
            renderItem: (location: string) => {
              const labels: Record<string, string> = {
                tokyo: '東京',
                osaka: '大阪',
                nagoya: '名古屋',
                fukuoka: '福岡',
                remote: 'リモート'
              };
              return (
                <span
                  style={{
                    display: 'inline-block',
                    padding: 'var(--spacing-2) var(--spacing-3)',
                    background: 'var(--color-neutral-100)',
                    color: 'var(--color-neutral-700)',
                    borderRadius: 'var(--radius-md)',
                    fontSize: 'var(--font-size-sm)',
                    marginRight: 'var(--spacing-2)',
                    marginBottom: 'var(--spacing-2)'
                  }}
                >
                  {labels[location] || location}
                </span>
              );
            }
          }
        },
        {
          key: 'desiredSalary',
          label: '希望年収',
          type: 'currency',
          currencySymbol: '¥',
          decimals: 0
        },
        {
          key: 'availableStartDate',
          label: '就業可能日',
          type: 'text',
          render: (value) => value ? value.replace(/-/g, '/') : '-'
        },
        { key: 'preferredContactTime', label: '希望連絡時間', type: 'text' }
      ]
    }
  ];

  // Example 2: Tabbed Interface
  const tabs: DetailTab[] = [
    {
      id: 'personal',
      label: '個人情報',
      icon: 'user',
      sections: [
        {
          id: 'personal',
          title: '基本情報',
          columns: 2,
          layout: 'grid',
          fields: [
            { key: 'firstName', label: '名', type: 'text' },
            { key: 'lastName', label: '姓', type: 'text' },
            { key: 'email', label: 'メールアドレス', type: 'email' },
            { key: 'phone', label: '電話番号', type: 'text' },
            { key: 'alternatePhone', label: '予備電話番号', type: 'text' }
          ]
        }
      ]
    },
    {
      id: 'address',
      label: '住所',
      icon: 'location',
      sections: [
        {
          id: 'address',
          title: '住所情報',
          columns: 2,
          layout: 'grid',
          fields: [
            { key: 'postalCode', label: '郵便番号', type: 'text' },
            {
              key: 'prefecture',
              label: '都道府県',
              type: 'badge',
              badgeConfig: {
                tokyo: { label: '東京都', variant: 'info' },
                osaka: { label: '大阪府', variant: 'info' },
                kyoto: { label: '京都府', variant: 'info' },
                hokkaido: { label: '北海道', variant: 'info' }
              }
            },
            { key: 'city', label: '市区町村', type: 'text' },
            { key: 'address1', label: '町名・番地', type: 'text' },
            { key: 'address2', label: '建物名・部屋番号', type: 'text' }
          ]
        }
      ]
    },
    {
      id: 'employment',
      label: '職業',
      icon: 'briefcase',
      sections: [
        {
          id: 'employment',
          title: '職業情報',
          columns: 2,
          layout: 'grid',
          fields: [
            {
              key: 'employmentStatus',
              label: '雇用形態',
              type: 'badge',
              badgeConfig: {
                fulltime: { label: '正社員', variant: 'success' },
                parttime: { label: 'パート・アルバイト', variant: 'info' },
                contract: { label: '契約社員', variant: 'warning' },
                freelance: { label: 'フリーランス', variant: 'info' }
              }
            },
            { key: 'occupation', label: '職種', type: 'text' },
            { key: 'companyName', label: '勤務先名', type: 'text' },
            {
              key: 'annualIncome',
              label: '年収',
              type: 'currency',
              currencySymbol: '¥',
              decimals: 0
            }
          ]
        }
      ]
    },
    {
      id: 'preferences',
      label: '希望',
      icon: 'settings',
      sections: [
        {
          id: 'preferences',
          title: '設定・希望',
          fields: [
            {
              key: 'skills',
              label: 'スキル・得意分野',
              type: 'list',
              listConfig: {
                style: 'inline',
                renderItem: (skill: string) => {
                  const labels: Record<string, string> = {
                    programming: 'プログラミング',
                    design: 'デザイン',
                    marketing: 'マーケティング',
                    management: 'マネジメント',
                    sales: '営業'
                  };
                  return (
                    <span
                      style={{
                        display: 'inline-block',
                        padding: 'var(--spacing-2) var(--spacing-3)',
                        background: 'var(--color-primary-100)',
                        color: 'var(--color-primary-700)',
                        borderRadius: 'var(--radius-full)',
                        fontSize: 'var(--font-size-sm)',
                        fontWeight: 'var(--font-weight-medium)',
                        marginRight: 'var(--spacing-2)',
                        marginBottom: 'var(--spacing-2)'
                      }}
                    >
                      {labels[skill] || skill}
                    </span>
                  );
                }
              }
            },
            {
              key: 'workLocation',
              label: '希望勤務地',
              type: 'list',
              listConfig: {
                style: 'inline',
                renderItem: (location: string) => {
                  const labels: Record<string, string> = {
                    tokyo: '東京',
                    osaka: '大阪',
                    nagoya: '名古屋',
                    fukuoka: '福岡',
                    remote: 'リモート'
                  };
                  return (
                    <span
                      style={{
                        display: 'inline-block',
                        padding: 'var(--spacing-2) var(--spacing-3)',
                        background: 'var(--color-neutral-100)',
                        color: 'var(--color-neutral-700)',
                        borderRadius: 'var(--radius-md)',
                        fontSize: 'var(--font-size-sm)',
                        marginRight: 'var(--spacing-2)',
                        marginBottom: 'var(--spacing-2)'
                      }}
                    >
                      {labels[location] || location}
                    </span>
                  );
                }
              }
            },
            {
              key: 'desiredSalary',
              label: '希望年収',
              type: 'currency',
              currencySymbol: '¥',
              decimals: 0
            },
            {
              key: 'availableStartDate',
              label: '就業可能日',
              type: 'text',
              render: (value) => value ? value.replace(/-/g, '/') : '-'
            },
            { key: 'preferredContactTime', label: '希望連絡時間', type: 'text' }
          ]
        }
      ]
    }
  ];

  // Action buttons
  const actions: DetailActionButton[] = [
    {
      id: 'edit',
      label: '編集',
      icon: 'edit',
      variant: 'primary',
      onClick: (data) => {
        navigate('/pages/data/edit');
      }
    },
    {
      id: 'delete',
      label: '削除',
      icon: 'delete',
      variant: 'danger',
      onClick: (data) => {
        // 削除処理
        sessionStorage.setItem('flashMessage', JSON.stringify({
          type: 'success',
          message: 'データを削除しました'
        }));
        navigate('/pages/data/list');
      },
      confirm: {
        title: '削除の確認',
        message: 'このユーザーを削除してもよろしいですか？この操作は取り消せません。',
        confirmText: '削除',
        cancelText: 'キャンセル'
      }
    }
  ];

  const breadcrumbs = [
    { label: 'ホーム', path: '/' },
    { label: 'データ一覧', path: '/pages/data/list' },
    { label: 'データ詳細' }
  ];

  return (
    <div className={viewMode === 'sp' ? 'force-mobile' : ''}>
      <TemplateNavigation
        viewMode={viewMode}
        onViewModeChange={setViewMode}
      />
      <InfoPageWrapper
        viewMode={viewMode}
        currentPage="data-detail"
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
        <DetailPage
          title="データ詳細"
          data={projectData}
          sections={basicSections}
          actions={actions}
          breadcrumbs={breadcrumbs}
          layout={{
            type: 'grid',
            columns: 2
          }}
        />
      </InfoPageWrapper>
    </div>
  );
};

export default DataDetailPage;
