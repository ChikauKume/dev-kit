import React, { useState, useRef, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import InfoPageWrapper from '../../../components/layout/InfoPageWrapper';
import TemplateNavigation from '../../../components/navigation/TemplateNavigation';
import SearchFilterPanel from '../../../components/navigation/SearchFilterPanel';
import Icon from '../../../components/icons/Icon';
import { useViewMode } from '../../../hooks/useViewMode';
import type { SearchFilterPanelConfig } from '../../../types/tables/SearchFilterConfig';

// 統計データの型定義
interface MonthlyData {
  month: string;
  users: number;
  sales: number;
  revenue: number;
}

interface CategoryData {
  label: string;
  value: number;
  color: string;
}

// BarChart コンポーネント型定義
interface BarChartProps {
  data: MonthlyData[];
  viewMode?: 'sp' | 'pc';
  height?: number;
  metrics: string[];
}

// BarChart コンポーネント（レスポンシブ対応）
const BarChart: React.FC<BarChartProps> = ({ data, viewMode = 'pc', height = 300, metrics }) => {
  const width = viewMode === 'sp' ? 340 : 800;
  const margin = { top: 20, right: 30, bottom: 60, left: 70 };
  const chartWidth = width - margin.left - margin.right;
  const chartHeight = height - margin.top - margin.bottom;

  const allSeries = [
    { key: 'users' as const, label: 'ユーザー数', color: 'var(--color-primary-500)' },
    { key: 'sales' as const, label: '売上数', color: 'var(--color-info-500)' },
    { key: 'revenue' as const, label: '収益', color: 'var(--color-success-500)' }
  ];

  // フィルタされたメトリクスのみ表示
  const series = allSeries.filter(s => metrics.includes(s.key));

  if (series.length === 0) {
    return (
      <div style={{
        background: 'white',
        border: '1px solid var(--color-neutral-200)',
        borderRadius: 'var(--radius-md)',
        padding: 'var(--spacing-4)',
        textAlign: 'center',
        color: 'var(--color-neutral-500)'
      }}>
        メトリクスを選択してください
      </div>
    );
  }

  const allValues = data.flatMap(d => series.map(s => d[s.key]));
  const maxValue = Math.max(...allValues, 1);

  const groupWidth = chartWidth / data.length * 0.8;
  const barWidth = groupWidth / series.length;
  const groupSpacing = chartWidth / data.length * 0.2;

  return (
    <div style={{
      background: 'white',
      border: '1px solid var(--color-neutral-200)',
      borderRadius: 'var(--radius-md)',
      padding: 'var(--spacing-4)',
      overflow: 'hidden'
    }}>
      <div style={{
        display: 'flex',
        justifyContent: 'center',
        overflow: 'auto',
        maxWidth: '100%'
      }}>
        <svg width={width} height={height} style={{ minWidth: viewMode === 'sp' ? '340px' : undefined }}>
          <g transform={`translate(${margin.left}, ${margin.top})`}>
            {/* グリッドライン */}
            {[0, 1, 2, 3, 4].map(i => (
              <line
                key={i}
                x1={0}
                x2={chartWidth}
                y1={chartHeight * i / 4}
                y2={chartHeight * i / 4}
                stroke="var(--color-neutral-200)"
                strokeWidth={1}
              />
            ))}

            {/* Y軸ラベル */}
            {[0, 1, 2, 3, 4].map(i => {
              const value = Math.round(maxValue * (4 - i) / 4);
              return (
                <text
                  key={i}
                  x={-10}
                  y={chartHeight * i / 4 + 5}
                  textAnchor="end"
                  fontSize="12"
                  fill="var(--color-neutral-600)"
                >
                  {value}
                </text>
              );
            })}

            {/* 複数の棒グラフ */}
            {data.map((d, dataIndex) => {
              const groupX = dataIndex * (chartWidth / data.length) + groupSpacing / 2;

              return (
                <g key={dataIndex}>
                  {series.map((s, seriesIndex) => {
                    const barHeight = (d[s.key] / maxValue) * chartHeight;
                    const x = groupX + seriesIndex * barWidth;

                    return (
                      <rect
                        key={s.key}
                        x={x}
                        y={chartHeight - barHeight}
                        width={barWidth}
                        height={barHeight}
                        fill={s.color}
                        rx={2}
                      />
                    );
                  })}

                  {/* X軸ラベル */}
                  <text
                    x={groupX + groupWidth / 2}
                    y={chartHeight + 20}
                    textAnchor="middle"
                    fontSize="12"
                    fill="var(--color-neutral-600)"
                  >
                    {d.month}
                  </text>
                </g>
              );
            })}
          </g>
        </svg>
      </div>

      {/* 凡例 */}
      <div style={{
        display: 'flex',
        justifyContent: 'center',
        gap: 'var(--spacing-4)',
        marginTop: 'var(--spacing-4)',
        flexWrap: 'wrap'
      }}>
        {series.map(s => (
          <div key={s.key} style={{
            display: 'flex',
            alignItems: 'center',
            gap: 'var(--spacing-2)'
          }}>
            <div style={{
              width: '16px',
              height: '12px',
              backgroundColor: s.color,
              borderRadius: '2px'
            }} />
            <span style={{
              fontSize: 'var(--font-size-sm)',
              color: 'var(--color-neutral-700)',
              fontWeight: 'var(--font-weight-medium)'
            }}>
              {s.label}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

const StatisticsPage: React.FC = () => {
  const navigate = useNavigate();
  const notificationRef = useRef<HTMLDivElement>(null);

  const [viewMode, setViewMode] = useViewMode();
  const [showNotificationDropdown, setShowNotificationDropdown] = useState(false);
  const [showUserMenu, setShowUserMenu] = useState(false);
  const [isHamburgerOpen, setIsHamburgerOpen] = useState(false);
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);

  // 検索フィルター用のstate
  const [searchValues, setSearchValues] = useState<Record<string, any>>({
    period: '6months',
    metrics: ['users', 'sales', 'revenue'],
    chartType: 'bar'
  });

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

  // 全期間のデータ（12ヶ月分）
  const allMonthlyData: MonthlyData[] = [
    { month: '1月', users: 45, sales: 120, revenue: 180 },
    { month: '2月', users: 62, sales: 150, revenue: 210 },
    { month: '3月', users: 58, sales: 140, revenue: 200 },
    { month: '4月', users: 71, sales: 180, revenue: 260 },
    { month: '5月', users: 68, sales: 170, revenue: 240 },
    { month: '6月', users: 85, sales: 220, revenue: 320 },
    { month: '7月', users: 92, sales: 240, revenue: 350 },
    { month: '8月', users: 88, sales: 230, revenue: 330 },
    { month: '9月', users: 95, sales: 250, revenue: 370 },
    { month: '10月', users: 102, sales: 270, revenue: 400 },
    { month: '11月', users: 110, sales: 290, revenue: 430 },
    { month: '12月', users: 125, sales: 320, revenue: 480 },
  ];

  // カテゴリデータ
  const categoryData: CategoryData[] = [
    { label: 'カテゴリA', value: 35, color: 'var(--color-primary-500)' },
    { label: 'カテゴリB', value: 25, color: 'var(--color-success-500)' },
    { label: 'カテゴリC', value: 20, color: 'var(--color-warning-500)' },
    { label: 'カテゴリD', value: 20, color: 'var(--color-info-500)' },
  ];

  // 検索フィルター設定（UserListパターンを適用）
  const searchConfig: SearchFilterPanelConfig = {
    title: 'データフィルター',
    collapsible: true,
    defaultCollapsed: false,
    showClearButton: true,
    showSearchButton: false,
    fields: [
      {
        name: 'period',
        label: '表示期間',
        type: 'select',
        placeholder: '期間を選択',
        options: [
          { label: '3ヶ月', value: '3months' },
          { label: '6ヶ月', value: '6months' },
          { label: '12ヶ月', value: '12months' },
        ],
        width: 'third'
      },
      {
        name: 'metrics',
        label: '表示メトリクス',
        type: 'multiselect',
        placeholder: 'メトリクスを選択',
        options: [
          { label: 'ユーザー数', value: 'users' },
          { label: '売上数', value: 'sales' },
          { label: '収益', value: 'revenue' },
        ],
        width: 'third'
      },
      {
        name: 'chartType',
        label: 'グラフタイプ',
        type: 'select',
        placeholder: 'タイプを選択',
        options: [
          { label: '棒グラフ', value: 'bar' },
          { label: '折れ線グラフ', value: 'line' },
        ],
        width: 'third'
      }
    ]
  };

  // フィルター処理（期間に基づいてデータを抽出）
  const filteredMonthlyData = useMemo(() => {
    const period = searchValues.period || '6months';
    let months = 6;

    if (period === '3months') months = 3;
    else if (period === '6months') months = 6;
    else if (period === '12months') months = 12;

    return allMonthlyData.slice(-months);
  }, [searchValues.period]);

  // 選択されたメトリクスを取得
  const selectedMetrics = useMemo(() => {
    const metrics = searchValues.metrics;
    if (!metrics || (Array.isArray(metrics) && metrics.length === 0)) {
      return ['users', 'sales', 'revenue']; // デフォルト
    }
    return Array.isArray(metrics) ? metrics : [metrics];
  }, [searchValues.metrics]);

  // 統計値の計算
  const stats = useMemo(() => {
    const data = filteredMonthlyData;
    const latestMonth = data[data.length - 1];

    // 選択されたメトリクスの値を集計
    const allValues = data.flatMap(d =>
      selectedMetrics.map(m => d[m as keyof MonthlyData] as number)
    );

    const total = latestMonth ? latestMonth.revenue : 0;
    const average = allValues.length > 0
      ? Math.round(allValues.reduce((sum, val) => sum + val, 0) / allValues.length)
      : 0;
    const maximum = allValues.length > 0 ? Math.max(...allValues) : 0;

    // 成長率の計算（最初の月と最後の月の比較）
    const firstMonth = data[0];
    const lastMonth = data[data.length - 1];
    let growthRate = 0;

    if (firstMonth && lastMonth && firstMonth.revenue > 0) {
      growthRate = Math.round(((lastMonth.revenue - firstMonth.revenue) / firstMonth.revenue) * 100);
    }

    return { total, average, maximum, growthRate };
  }, [filteredMonthlyData, selectedMetrics]);

  const total = categoryData.reduce((sum, item) => sum + item.value, 0);

  // 検索ハンドラー
  const handleSearch = (values: Record<string, any>) => {
    setSearchValues(values);
  };

  // クリアハンドラー
  const handleClear = () => {
    setSearchValues({
      period: '6months',
      metrics: ['users', 'sales', 'revenue'],
      chartType: 'bar'
    });
  };

  return (
    <div className={viewMode === 'sp' ? 'force-mobile' : ''}>
      <TemplateNavigation
        viewMode={viewMode}
        onViewModeChange={setViewMode}
      />
      <InfoPageWrapper
        viewMode={viewMode}
        currentPage="statistics"
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
        <div style={{
          display: 'flex',
          flexDirection: 'column',
          gap: 'var(--spacing-6)'
        }}>
          {/* 検索フィルターパネル */}
          <SearchFilterPanel
            config={searchConfig}
            values={searchValues}
            onChange={handleSearch}
            onClear={handleClear}
          />

          {/* Summary Cards */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
            gap: 'var(--spacing-4)'
          }}>
            <div style={{
              background: 'linear-gradient(135deg, var(--color-primary-500), var(--color-primary-600))',
              borderRadius: 'var(--radius-lg)',
              padding: 'var(--spacing-4)',
              color: 'var(--color-neutral-white)'
            }}>
              <div style={{
                fontSize: 'var(--font-size-sm)',
                marginBottom: 'var(--spacing-2)',
                opacity: 0.9
              }}>
                今月の合計
              </div>
              <div style={{
                fontSize: 'var(--font-size-3xl)',
                fontWeight: 'var(--font-weight-bold)'
              }}>
                {stats.total}
              </div>
            </div>
            <div style={{
              background: 'linear-gradient(135deg, var(--color-success-500), var(--color-success-600))',
              borderRadius: 'var(--radius-lg)',
              padding: 'var(--spacing-4)',
              color: 'var(--color-neutral-white)'
            }}>
              <div style={{
                fontSize: 'var(--font-size-sm)',
                marginBottom: 'var(--spacing-2)',
                opacity: 0.9
              }}>
                平均値
              </div>
              <div style={{
                fontSize: 'var(--font-size-3xl)',
                fontWeight: 'var(--font-weight-bold)'
              }}>
                {stats.average}
              </div>
            </div>
            <div style={{
              background: 'linear-gradient(135deg, var(--color-warning-500), var(--color-warning-600))',
              borderRadius: 'var(--radius-lg)',
              padding: 'var(--spacing-4)',
              color: 'var(--color-neutral-white)'
            }}>
              <div style={{
                fontSize: 'var(--font-size-sm)',
                marginBottom: 'var(--spacing-2)',
                opacity: 0.9
              }}>
                最高値
              </div>
              <div style={{
                fontSize: 'var(--font-size-3xl)',
                fontWeight: 'var(--font-weight-bold)'
              }}>
                {stats.maximum}
              </div>
            </div>
            <div style={{
              background: 'linear-gradient(135deg, var(--color-info-500), var(--color-info-600))',
              borderRadius: 'var(--radius-lg)',
              padding: 'var(--spacing-4)',
              color: 'var(--color-neutral-white)'
            }}>
              <div style={{
                fontSize: 'var(--font-size-sm)',
                marginBottom: 'var(--spacing-2)',
                opacity: 0.9
              }}>
                成長率
              </div>
              <div style={{
                fontSize: 'var(--font-size-3xl)',
                fontWeight: 'var(--font-weight-bold)'
              }}>
                {stats.growthRate > 0 ? '+' : ''}{stats.growthRate}%
              </div>
            </div>
          </div>

          {/* Bar Chart */}
          <div style={{
            background: 'var(--color-neutral-white)',
            borderRadius: 'var(--radius-lg)',
            padding: 'var(--spacing-5)'
          }}>
            <div style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              marginBottom: 'var(--spacing-4)'
            }}>
              <h2 style={{
                fontSize: 'var(--font-size-lg)',
                fontWeight: 'var(--font-weight-semibold)',
                color: 'var(--color-neutral-900)'
              }}>
                月次推移
              </h2>
              <Icon name="chart-bar" size="md" style={{ color: 'var(--color-primary-500)' }} />
            </div>
            <BarChart
              data={filteredMonthlyData}
              viewMode={viewMode}
              height={300}
              metrics={selectedMetrics}
            />
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: viewMode === 'sp' ? '1fr' : 'repeat(auto-fit, minmax(400px, 1fr))',
            gap: 'var(--spacing-4)'
          }}>
            {/* Pie Chart */}
            <div style={{
              background: 'var(--color-neutral-white)',
              border: '1px solid var(--color-neutral-200)',
              borderRadius: 'var(--radius-lg)',
              padding: 'var(--spacing-5)'
            }}>
              <div style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                marginBottom: 'var(--spacing-4)'
              }}>
                <h2 style={{
                  fontSize: 'var(--font-size-lg)',
                  fontWeight: 'var(--font-weight-semibold)',
                  color: 'var(--color-neutral-900)'
                }}>
                  カテゴリ別分布
                </h2>
                <Icon name="chart-pie" size="md" style={{ color: 'var(--color-primary-500)' }} />
              </div>

              <div style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: 'var(--spacing-4)'
              }}>
                {/* Simplified Pie Chart Visualization */}
                <div style={{
                  width: '200px',
                  height: '200px',
                  borderRadius: '50%',
                  background: `conic-gradient(
                    ${categoryData[0].color} 0% ${categoryData[0].value}%,
                    ${categoryData[1].color} ${categoryData[0].value}% ${categoryData[0].value + categoryData[1].value}%,
                    ${categoryData[2].color} ${categoryData[0].value + categoryData[1].value}% ${categoryData[0].value + categoryData[1].value + categoryData[2].value}%,
                    ${categoryData[3].color} ${categoryData[0].value + categoryData[1].value + categoryData[2].value}% 100%
                  )`,
                  position: 'relative'
                }}>
                  <div style={{
                    position: 'absolute',
                    top: '50%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)',
                    width: '120px',
                    height: '120px',
                    borderRadius: '50%',
                    background: 'var(--color-neutral-white)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexDirection: 'column'
                  }}>
                    <div style={{
                      fontSize: 'var(--font-size-2xl)',
                      fontWeight: 'var(--font-weight-bold)',
                      color: 'var(--color-neutral-900)'
                    }}>
                      {total}
                    </div>
                    <div style={{
                      fontSize: 'var(--font-size-xs)',
                      color: 'var(--color-neutral-600)'
                    }}>
                      合計
                    </div>
                  </div>
                </div>

                {/* Legend */}
                <div style={{
                  display: 'flex',
                  flexDirection: 'column',
                  gap: 'var(--spacing-2)',
                  width: '100%'
                }}>
                  {categoryData.map((category, index) => (
                    <div
                      key={index}
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        padding: 'var(--spacing-2)',
                        borderRadius: 'var(--radius-md)',
                        background: 'var(--color-neutral-50)'
                      }}
                    >
                      <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--spacing-2)' }}>
                        <div
                          style={{
                            width: '16px',
                            height: '16px',
                            borderRadius: 'var(--radius-sm)',
                            background: category.color
                          }}
                        />
                        <span style={{
                          fontSize: 'var(--font-size-sm)',
                          color: 'var(--color-neutral-700)'
                        }}>
                          {category.label}
                        </span>
                      </div>
                      <div style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: 'var(--spacing-2)'
                      }}>
                        <span style={{
                          fontSize: 'var(--font-size-sm)',
                          fontWeight: 'var(--font-weight-semibold)',
                          color: 'var(--color-neutral-900)'
                        }}>
                          {category.value}%
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </InfoPageWrapper>
    </div>
  );
};

export default StatisticsPage;
