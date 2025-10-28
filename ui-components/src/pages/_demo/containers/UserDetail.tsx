import React from 'react';
import DetailPage from '../../templates/data/DetailPage';
import type { DetailSection } from '../../../types/detail/DetailFieldConfig';
import { userTableData } from '../mocks/tableData';

/**
 * User Detail - Laravel + Inertia format
 * Props are structured exactly as they would be passed from Laravel
 *
 * In production with Laravel + Inertia:
 * ```php
 * return Inertia::render('Users/Show', [
 *   'title' => 'ユーザー詳細',
 *   'subtitle' => 'ユーザーのプロフィールと権限情報',
 *   'data' => User::find($id),
 *   'sections' => [...],
 *   ...
 * ]);
 * ```
 */
const UserDetail: React.FC = () => {
  // Use first user from sample data
  const userData = userTableData[0];

  // Field sections configuration
  const sections: DetailSection[] = [
    {
      id: 'profile',
      title: 'プロフィール情報',
      icon: 'user',
      collapsible: false,
      layout: 'grid',
      columns: 2,
      fields: [
        {
          key: 'avatar',
          label: 'アバター',
          type: 'avatar',
          width: 'full'
        },
        {
          key: 'id',
          label: 'ユーザーID',
          type: 'number',
          width: 'half',
          copyable: true
        },
        {
          key: 'name',
          label: '名前',
          type: 'text',
          width: 'half',
          valueClassName: 'text-lg font-semibold'
        },
        {
          key: 'email',
          label: 'メールアドレス',
          type: 'email',
          width: 'full',
          copyable: true,
          link: {
            href: (value) => `mailto:${value}`,
            text: (value) => value
          }
        },
        {
          key: 'role',
          label: '権限',
          type: 'badge',
          width: 'half',
          badgeConfig: {
            'admin': { label: '管理者', variant: 'error' },
            'manager': { label: 'マネージャー', variant: 'warning' },
            'member': { label: 'メンバー', variant: 'info' },
            'guest': { label: 'ゲスト', variant: 'default' }
          }
        },
        {
          key: 'department',
          label: '部署',
          type: 'text',
          width: 'half'
        },
        {
          key: 'is_active',
          label: 'アカウント状態',
          type: 'boolean',
          width: 'half',
          render: (value) => value ? '有効' : '無効'
        }
      ]
    },
    {
      id: 'activity',
      title: 'アクティビティ情報',
      icon: 'clock',
      collapsible: false,
      layout: 'grid',
      columns: 2,
      fields: [
        {
          key: 'last_login',
          label: '最終ログイン',
          type: 'datetime',
          width: 'half',
          dateFormat: 'YYYY-MM-DD HH:mm:ss',
          prefix: 'login'
        },
        {
          key: 'created_at',
          label: '登録日時',
          type: 'datetime',
          width: 'half',
          dateFormat: 'YYYY-MM-DD HH:mm:ss'
        }
      ]
    },
    {
      id: 'permissions',
      title: '権限・アクセス',
      icon: 'shield',
      collapsible: true,
      defaultCollapsed: true,
      layout: 'vertical',
      fields: [
        {
          key: 'role',
          label: 'ロール',
          type: 'text',
          width: 'full',
          render: (value, data) => {
            const roleDescriptions: Record<string, string> = {
              'admin': 'すべての機能にアクセスでき、システム設定を変更できます',
              'manager': '部門内のデータを管理し、メンバーを監督できます',
              'member': '通常のユーザー機能にアクセスできます',
              'guest': '限定的な読み取りアクセスのみです'
            };
            return roleDescriptions[value] || '不明な権限';
          }
        }
      ]
    }
  ];

  // Action buttons configuration
  const actions = [
    {
      id: 'back',
      label: '一覧に戻る',
      icon: 'arrow-left',
      variant: 'secondary' as const,
      onClick: (data: Record<string, any>) => {
        console.log('Navigate back to user list');
        // In real app: navigate('/users')
      }
    },
    {
      id: 'edit',
      label: '編集',
      icon: 'edit',
      variant: 'primary' as const,
      onClick: (data: Record<string, any>) => {
        console.log('Edit user:', data);
        // In real app: navigate(\`/users/\${data.id}/edit\`)
      },
      disabled: (data) => data.role === 'admin' && data.id !== 1
    },
    {
      id: 'reset-password',
      label: 'パスワードリセット',
      icon: 'key',
      variant: 'secondary' as const,
      onClick: (data: Record<string, any>) => {
        console.log('Reset password for user:', data);
        alert(`${data.name}にパスワードリセットメールを送信しました`);
      }
    },
    {
      id: 'deactivate',
      label: 'アカウント無効化',
      icon: 'x-circle',
      variant: 'danger' as const,
      onClick: (data: Record<string, any>) => {
        console.log('Deactivate user:', data);
        // In real app: call deactivate API
      },
      visible: (data) => data.is_active === true,
      confirm: {
        title: 'アカウント無効化確認',
        message: 'このユーザーのアカウントを無効化してもよろしいですか？',
        confirmText: '無効化',
        cancelText: 'キャンセル'
      }
    }
  ];

  // Secondary actions
  const secondaryActions = [
    {
      id: 'send-message',
      label: 'メッセージ送信',
      icon: 'mail',
      variant: 'text' as const,
      onClick: (data: Record<string, any>) => {
        console.log('Send message to:', data);
      }
    },
    {
      id: 'view-activity',
      label: 'アクティビティログ',
      icon: 'list',
      variant: 'text' as const,
      onClick: (data: Record<string, any>) => {
        console.log('View activity log for:', data);
      }
    }
  ];

  // Layout configuration
  const layout = {
    type: 'vertical' as const,
    columns: 1,
    gap: 'lg' as const,
    labelPosition: 'top' as const,
    showBorders: true,
    sectionBackground: 'white' as const,
    sectionBorder: true
  };

  // Header configuration
  const headerConfig = {
    showTitle: true,
    titleField: 'name',
    showSubtitle: true,
    subtitle: (data: Record<string, any>) => `${data.department} | ${data.email}`,
    showAvatar: true,
    avatarField: 'avatar',
    showStatus: true,
    statusField: 'is_active',
    statusBadgeConfig: {
      'true': { label: 'アクティブ', variant: 'success' as const },
      'false': { label: '無効', variant: 'default' as const }
    },
    metadata: [
      {
        label: '権限',
        key: 'role',
        icon: 'shield',
        format: (value: string) => {
          const roleLabels: Record<string, string> = {
            'admin': '管理者',
            'manager': 'マネージャー',
            'member': 'メンバー',
            'guest': 'ゲスト'
          };
          return roleLabels[value] || value;
        }
      },
      {
        label: '最終ログイン',
        key: 'last_login',
        icon: 'clock'
      }
    ]
  };

  // Breadcrumbs for navigation
  const breadcrumbs = [
    { label: 'ホーム', path: '/' },
    { label: 'ユーザー一覧', path: '/users' },
    { label: userData.name }
  ];

  // Back button configuration
  const backButton = {
    label: '一覧に戻る',
    icon: 'arrow-left',
    onClick: () => {
      console.log('Navigate back to users');
    }
  };

  // Props structure that Laravel + Inertia would pass
  const props = {
    title: 'ユーザー詳細',
    subtitle: 'ユーザーのプロフィールと権限情報',
    data: userData,
    sections,
    layout,
    headerConfig,
    actions,
    secondaryActions,
    breadcrumbs,
    showRefreshButton: true,
    showTimestamps: true,
    timestampFormat: 'YYYY-MM-DD HH:mm:ss',
    onRefresh: () => {
      console.log('Refresh user data');
    },
    backButton
  };

  return <DetailPage {...props} />;
};

export default UserDetail;
