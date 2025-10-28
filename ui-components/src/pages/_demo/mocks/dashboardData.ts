// Dashboard statistics data
export const dashboardStats = [
  { label: '総ユーザー数', value: '1,234', icon: 'users', color: 'primary' },
  { label: 'アクティブセッション', value: '89', icon: 'user-check', color: 'success' },
  { label: '本日の訪問数', value: '456', icon: 'eye', color: 'info' },
  { label: 'エラー率', value: '0.23%', icon: 'warning', color: 'warning' }
];

// Generate initial data list items
export const generateInitialDataListItems = () => {
  const items = [
    { id: 'PRJ-001', title: 'Webサイトリニューアル', assignee: '山田太郎', priority: '高', status: '進行中', created: '2024-09-15', updated: '2024-10-10' },
    { id: 'PRJ-002', title: 'モバイルアプリ開発', assignee: '佐藤花子', priority: '中', status: '進行中', created: '2024-09-20', updated: '2024-10-12' },
    { id: 'PRJ-003', title: 'データ分析レポート', assignee: '鈴木一郎', priority: '低', status: '完了', created: '2024-08-10', updated: '2024-09-28' },
    { id: 'PRJ-004', title: 'セキュリティ監査', assignee: '田中美咲', priority: '高', status: '進行中', created: '2024-10-01', updated: '2024-10-13' },
    { id: 'PRJ-005', title: 'ドキュメント作成', assignee: '伊藤健太', priority: '中', status: '下書き', created: '2024-10-05', updated: '2024-10-11' },
    { id: 'PRJ-006', title: 'パフォーマンス改善', assignee: '山田太郎', priority: '高', status: '進行中', created: '2024-09-25', updated: '2024-10-14' },
    { id: 'PRJ-007', title: 'UI/UXデザイン', assignee: '佐藤花子', priority: '中', status: '完了', created: '2024-08-20', updated: '2024-09-30' },
    { id: 'PRJ-008', title: 'テスト自動化', assignee: '鈴木一郎', priority: '中', status: '進行中', created: '2024-09-30', updated: '2024-10-12' }
  ];

  // 48件分のダミーデータを生成
  for (let i = 9; i <= 48; i++) {
    items.push({
      id: `PRJ-${String(i).padStart(3, '0')}`,
      title: `プロジェクト${i}`,
      assignee: ['山田太郎', '佐藤花子', '鈴木一郎', '田中美咲', '伊藤健太'][i % 5],
      priority: ['高', '中', '低'][i % 3],
      status: ['進行中', '完了', '下書き'][i % 3],
      created: '2024-09-01',
      updated: '2024-10-01'
    });
  }

  return items;
};

// Color styles for dashboard cards
export const getColorStyles = (color: string) => {
  const colorMap = {
    primary: { bg: '#f0f4f8', text: '#2c3e50', icon: '#2c3e50' },
    success: { bg: '#e6f4ea', text: '#137333', icon: '#34a853' },
    info: { bg: '#e8f0fe', text: '#1967d2', icon: '#4285f4' },
    warning: { bg: '#fef7e0', text: '#7a6100', icon: '#fbbc04' }
  };
  return colorMap[color as keyof typeof colorMap] || colorMap.primary;
};
