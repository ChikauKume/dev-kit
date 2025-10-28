import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import ListPage from '../../templates/data/ListPage';
import InfoPageWrapper from '../../../components/layout/InfoPageWrapper';
import TemplateNavigation from '../../../components/navigation/TemplateNavigation';
import FlashMessage from '../../../components/common/FlashMessage';
import type { TableColumnConfig } from '../../../types/tables/TableColumnConfig';
import type { RowAction, BulkAction } from '../../../types/tables/TableProps';
import type { SearchFilterPanelConfig } from '../../../types/tables/SearchFilterConfig';
import { userTableData } from '../mocks/tableData';
import { useViewMode } from '../../../hooks/useViewMode';

/**
 * User List - Laravel + Inertia format
 * Props are structured exactly as they would be passed from Laravel
 *
 * In production with Laravel + Inertia:
 * ```php
 * return Inertia::render('Users/Index', [
 *   'title' => 'ユーザー一覧',
 *   'columns' => [...],
 *   'data' => User::paginate(10),
 *   ...
 * ]);
 * ```
 */
const UserList: React.FC = () => {
  const navigate = useNavigate();
  const notificationRef = useRef<HTMLDivElement>(null);
  const [flashMessage, setFlashMessage] = useState<{ type: string; message: string } | null>(null);

  // Header state management
  const [viewMode, setViewMode] = useViewMode();
  const [showNotificationDropdown, setShowNotificationDropdown] = useState(false);
  const [showUserMenu, setShowUserMenu] = useState(false);
  const [isHamburgerOpen, setIsHamburgerOpen] = useState(false);
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);

  // Search/filter state
  const [searchValues, setSearchValues] = useState<Record<string, any>>({});
  const [filteredData, setFilteredData] = useState<any[]>(userTableData);

  // Notification state
  const [notifications, setNotifications] = useState([
    { id: 1, title: '新しいメッセージ', message: 'システムから重要なお知らせがあります', time: '5分前', read: false },
    { id: 2, title: 'データ更新完了', message: 'データの同期が完了しました', time: '1時間前', read: false },
    { id: 3, title: 'メンテナンスのお知らせ', message: '明日の深夜にメンテナンスを実施します', time: '3時間前', read: true },
  ]);

  // Check for flash message from sessionStorage
  useEffect(() => {
    const storedMessage = sessionStorage.getItem('flashMessage');
    if (storedMessage) {
      try {
        const message = JSON.parse(storedMessage);
        setFlashMessage(message);
        sessionStorage.removeItem('flashMessage');

        // Auto-hide after 5 seconds
        setTimeout(() => {
          setFlashMessage(null);
        }, 5000);
      } catch (error) {
        console.error('Failed to parse flash message:', error);
      }
    }
  }, []);

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

  // Notification handlers
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

  // Handle search/filter
  const handleSearch = (values: Record<string, any>) => {
    setSearchValues(values);

    // Filter the data based on search criteria
    const filtered = userTableData.filter((user) => {
      // Filter by name (partial match, case-insensitive) - search in both firstName and lastName
      if (values.name) {
        const searchName = values.name.toLowerCase();
        const fullName = `${user.lastName} ${user.firstName}`.toLowerCase();
        const reverseName = `${user.firstName} ${user.lastName}`.toLowerCase();
        if (!fullName.includes(searchName) && !reverseName.includes(searchName)) {
          return false;
        }
      }

      // Filter by email (partial match, case-insensitive)
      if (values.email) {
        const searchEmail = values.email.toLowerCase();
        if (!user.email.toLowerCase().includes(searchEmail)) {
          return false;
        }
      }

      // Filter by prefecture (exact match)
      if (values.prefecture) {
        if (user.prefecture !== values.prefecture) {
          return false;
        }
      }

      // Filter by employmentStatus (exact match)
      if (values.employmentStatus) {
        if (user.employmentStatus !== values.employmentStatus) {
          return false;
        }
      }

      // Filter by occupation (partial match, case-insensitive)
      if (values.occupation) {
        const searchOccupation = values.occupation.toLowerCase();
        if (!user.occupation || !user.occupation.toLowerCase().includes(searchOccupation)) {
          return false;
        }
      }

      return true;
    });

    setFilteredData(filtered);
  };
  // Column configuration matching DataFormPage fields
  const columns: TableColumnConfig[] = [
    {
      key: 'id',
      label: 'ID',
      dataType: 'number',
      sortable: true,
      width: '60px',
      align: 'center'
    },
    // 個人情報セクション
    {
      key: 'fullName',
      label: '氏名',
      dataType: 'text',
      sortable: true,
      width: '120px',
      render: (value, row) => `${row.lastName} ${row.firstName}`
    },
    {
      key: 'email',
      label: 'メールアドレス',
      dataType: 'email',
      sortable: true,
      width: '200px'
    },
    {
      key: 'phone',
      label: '電話番号',
      dataType: 'text',
      sortable: true,
      width: '120px'
    },
    // 住所情報セクション
    {
      key: 'postalCode',
      label: '郵便番号',
      dataType: 'text',
      sortable: true,
      width: '100px'
    },
    {
      key: 'prefecture',
      label: '都道府県',
      dataType: 'text',
      sortable: true,
      width: '100px',
      render: (value) => {
        const prefectureMap: Record<string, string> = {
          'tokyo': '東京都',
          'osaka': '大阪府',
          'kyoto': '京都府',
          'hokkaido': '北海道'
        };
        return prefectureMap[value] || value;
      }
    },
    {
      key: 'city',
      label: '市区町村',
      dataType: 'text',
      sortable: true,
      width: '150px'
    },
    // 職業情報セクション
    {
      key: 'employmentStatus',
      label: '雇用形態',
      dataType: 'badge',
      sortable: true,
      width: '120px',
      badgeConfig: {
        'fulltime': { label: '正社員', variant: 'success' },
        'parttime': { label: 'パート・アルバイト', variant: 'info' },
        'contract': { label: '契約社員', variant: 'warning' },
        'freelance': { label: 'フリーランス', variant: 'primary' },
        'student': { label: '学生', variant: 'default' },
        'unemployed': { label: '無職', variant: 'danger' }
      }
    },
    {
      key: 'occupation',
      label: '職種',
      dataType: 'text',
      sortable: true,
      width: '150px'
    },
    {
      key: 'companyName',
      label: '勤務先名',
      dataType: 'text',
      sortable: true,
      width: '200px'
    },
    {
      key: 'annualIncome',
      label: '年収',
      dataType: 'currency',
      sortable: true,
      width: '120px',
      align: 'right',
      render: (value) => {
        const numValue = Number(value);
        if (!value || isNaN(numValue) || numValue === 0) return '-';
        return `¥${numValue.toLocaleString()}`;
      }
    },
    // 設定・希望セクション
    {
      key: 'skills',
      label: 'スキル',
      dataType: 'text',
      sortable: false,
      width: '200px',
      render: (value) => {
        if (!value || !Array.isArray(value) || value.length === 0) return '-';
        const skillMap: Record<string, string> = {
          'programming': 'プログラミング',
          'design': 'デザイン',
          'marketing': 'マーケティング',
          'management': 'マネジメント',
          'sales': '営業'
        };
        return value.map(skill => skillMap[skill] || skill).join('、');
      }
    },
    {
      key: 'workLocation',
      label: '希望勤務地',
      dataType: 'text',
      sortable: false,
      width: '150px',
      render: (value) => {
        if (!value || !Array.isArray(value) || value.length === 0) return '-';
        const locationMap: Record<string, string> = {
          'tokyo': '東京',
          'osaka': '大阪',
          'nagoya': '名古屋',
          'fukuoka': '福岡',
          'remote': 'リモート'
        };
        return value.map(loc => locationMap[loc] || loc).join('、');
      }
    },
    {
      key: 'desiredSalary',
      label: '希望年収',
      dataType: 'currency',
      sortable: true,
      width: '120px',
      align: 'right',
      render: (value) => {
        const numValue = Number(value);
        if (!value || isNaN(numValue) || numValue === 0) return '-';
        return `¥${numValue.toLocaleString()}`;
      }
    }
  ];

  // Search configuration matching DataFormPage fields
  const searchConfig: SearchFilterPanelConfig = {
    title: '検索・フィルター',
    collapsible: true,
    defaultCollapsed: true,
    showClearButton: true,
    showSearchButton: true,
    borderColor: '#d1d5db',
    fields: [
      {
        name: 'name',
        label: '氏名',
        type: 'text',
        placeholder: '氏名で検索...',
        width: 'half'
      },
      {
        name: 'email',
        label: 'メールアドレス',
        type: 'text',
        placeholder: 'メールアドレスで検索...',
        width: 'half'
      },
      {
        name: 'prefecture',
        label: '都道府県',
        type: 'select',
        placeholder: 'すべて',
        options: [
          { label: '東京都', value: 'tokyo' },
          { label: '大阪府', value: 'osaka' },
          { label: '京都府', value: 'kyoto' },
          { label: '北海道', value: 'hokkaido' }
        ],
        width: 'half'
      },
      {
        name: 'employmentStatus',
        label: '雇用形態',
        type: 'select',
        placeholder: 'すべて',
        options: [
          { label: '正社員', value: 'fulltime' },
          { label: 'パート・アルバイト', value: 'parttime' },
          { label: '契約社員', value: 'contract' },
          { label: 'フリーランス', value: 'freelance' },
          { label: '学生', value: 'student' },
          { label: '無職', value: 'unemployed' }
        ],
        width: 'half'
      },
      {
        name: 'occupation',
        label: '職種',
        type: 'text',
        placeholder: '職種で検索...',
        width: 'half'
      }
    ]
  };

  // Row actions
  const rowActions: RowAction[] = [
    {
      id: 'view',
      label: '',
      icon: 'eye',
      onClick: (row) => {
        console.log('View user:', row);
        navigate('/pages/data/detail');
      },
      tooltip: '詳細を表示'
    },
    {
      id: 'edit',
      label: '',
      icon: 'edit',
      onClick: (row) => {
        navigate('/pages/data/edit');
      },
      tooltip: '編集'
    }
  ];

  // Bulk actions
  const bulkActions: BulkAction[] = [
    {
      id: 'delete',
      label: '削除',
      icon: 'delete',
      variant: 'danger',
      onClick: (ids) => {
        console.log('削除:', ids);
        // In real implementation, show confirmation modal
      },
      minSelections: 1
    }
  ];

  // Toolbar actions
  const toolbarActions = [
    {
      label: 'エクスポート',
      icon: 'download' as const,
      onClick: () => {
        console.log('エクスポート');
        alert('ユーザーデータをエクスポートします');
      }
    }
  ];

  // Create button configuration
  const createButton = {
    label: '新規登録',
    icon: 'plus' as const,
    onClick: () => {
      console.log('Navigate to /pages/data/add');
      navigate('/pages/data/add');
    }
  };

  // Empty state configuration
  const emptyState = {
    title: searchValues && Object.keys(searchValues).length > 0 ? 'お探しのデータは見つかりませんでした' : 'データがありません',
    description: searchValues && Object.keys(searchValues).length > 0 ? '検索条件を変更してお試しください' : '新しいデータを作成してください',
    icon: searchValues && Object.keys(searchValues).length > 0 ? 'search' : 'user',
    action: searchValues && Object.keys(searchValues).length > 0 ? undefined : {
      label: '新規作成',
      onClick: () => {
        navigate('/pages/data/add');
      }
    }
  };

  // Props structure that Laravel + Inertia would pass
  const props = {
    title: 'データ一覧',
    subtitle: undefined,
    columns,
    data: filteredData,
    searchConfig,
    searchValues,
    onSearchChange: handleSearch,
    rowActions,
    bulkActions,
    toolbarActions,
    createButton,
    emptyState,
    selectable: true,
    showRowNumbers: false,
    density: 'normal' as const,
    headerActions: []
  };

  return (
    <div className={viewMode === 'sp' ? 'force-mobile' : ''}>
      <TemplateNavigation
        viewMode={viewMode}
        onViewModeChange={setViewMode}
      />
      <InfoPageWrapper
        viewMode={viewMode}
        currentPage="data-list"
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
        <ListPage {...props} flashMessage={flashMessage ? (
          <FlashMessage
            type={flashMessage.type as 'success' | 'info' | 'warning' | 'danger'}
            message={flashMessage.message}
            onClose={() => setFlashMessage(null)}
          />
        ) : undefined} />
      </InfoPageWrapper>
    </div>
  );
};

export default UserList;
