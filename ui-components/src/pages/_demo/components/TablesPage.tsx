import React, { useState } from 'react';
import Icon from '../../../components/icons/Icon.tsx';
import DataTable from '../../../components/tables/DataTable.tsx';
import PaginationPanel from '../../../components/tables/PaginationPanel.tsx';

const TablesPage = () => {
  // テーブル用のサンプルデータ
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(5);
  const [sortConfig, setSortConfig] = useState({ key: null, direction: null });

  // List用のサンプルデータと状態管理
  const [selectedListItems, setSelectedListItems] = useState([]);

  const sampleData = [
    { id: 1, name: '田中太郎', email: 'tanaka@example.com', role: '管理者', status: 'アクティブ', department: '営業部', joined_date: '2023-04-01', last_login: '2024-01-15 14:30' },
    { id: 2, name: '鈴木花子', email: 'suzuki@example.com', role: 'ユーザー', status: 'アクティブ', department: '営業部', joined_date: '2023-04-01', last_login: '2024-01-15 14:30' },
    { id: 3, name: '佐藤次郎', email: 'sato@example.com', role: 'ユーザー', status: '非アクティブ', department: '営業部', joined_date: '2023-04-01', last_login: '2024-01-15 14:30' },
    { id: 4, name: '高橋三郎', email: 'takahashi@example.com', role: 'エディター', status: 'アクティブ', department: '営業部', joined_date: '2023-04-01', last_login: '2024-01-15 14:30' },
    { id: 5, name: '伊藤四郎', email: 'ito@example.com', role: 'ユーザー', status: 'アクティブ', department: '営業部', joined_date: '2023-04-01', last_login: '2024-01-15 14:30' },
    { id: 6, name: '渡辺五郎', email: 'watanabe@example.com', role: '管理者', status: 'アクティブ', department: '営業部', joined_date: '2023-04-01', last_login: '2024-01-15 14:30' },
    { id: 7, name: '山本六子', email: 'yamamoto@example.com', role: 'ユーザー', status: '非アクティブ', department: '営業部', joined_date: '2023-04-01', last_login: '2024-01-15 14:30' },
    { id: 8, name: '中村七美', email: 'nakamura@example.com', role: 'エディター', status: 'アクティブ', department: '営業部', joined_date: '2023-04-01', last_login: '2024-01-15 14:30' }
  ];




  // ステータスバッジコンポーネント
  const StatusBadge = ({ status }) => {
    const isActive = status === 'アクティブ';
    return (
      <span style={{
        display: 'inline-block',
        padding: 'var(--spacing-1) var(--spacing-2)',
        borderRadius: 'var(--radius-sm)',
        fontSize: 'var(--font-size-xs)',
        fontWeight: 'var(--font-weight-medium)',
        backgroundColor: isActive ? 'var(--color-success-100)' : 'var(--color-neutral-100)',
        color: isActive ? 'var(--color-success-800)' : 'var(--color-neutral-600)'
      }}>
        {status}
      </span>
    );
  };

  // List/ListItem コンポーネント
  const List = ({ children, className = '', style = {} }) => {
    return (
      <div
        className={className}
        style={{
          backgroundColor: 'var(--color-neutral-white)',
          border: '1px solid var(--color-neutral-200)',
          borderRadius: 'var(--radius-lg)',
          overflow: 'hidden',
          ...style
        }}
      >
        {children}
      </div>
    );
  };

  const ListItem = ({ children, onClick, selected = false, className = '', style = {} }) => {
    return (
      <div
        className={className}
        onClick={onClick}
        style={{
          padding: 'var(--spacing-4)',
          borderBottom: '1px solid var(--color-neutral-100)',
          backgroundColor: selected ? 'var(--color-primary-50)' : 'transparent',
          cursor: onClick ? 'pointer' : 'default',
          transition: 'background-color 0.2s ease',
          ':hover': onClick ? {
            backgroundColor: selected ? 'var(--color-primary-100)' : 'var(--color-neutral-50)'
          } : {},
          ...style
        }}
        onMouseEnter={(e) => {
          if (onClick) {
            e.target.style.backgroundColor = selected ? 'var(--color-primary-100)' : 'var(--color-neutral-50)';
          }
        }}
        onMouseLeave={(e) => {
          if (onClick) {
            e.target.style.backgroundColor = selected ? 'var(--color-primary-50)' : 'transparent';
          }
        }}
      >
        {children}
      </div>
    );
  };




  const columns = [
    { key: 'id', label: 'ID', width: '60px' },
    { key: 'name', label: '名前', width: '120px' },
    { key: 'email', label: 'メールアドレス', width: '200px' },
    { key: 'role', label: 'ロール', width: '120px' },
    { key: 'status', label: 'ステータス', width: '120px' }
  ];

  const extendedColumns = [
    ...columns,
    { key: 'department', label: '部門', width: '100px' },
    { key: 'joined_date', label: '入社日', width: '120px' },
    { key: 'last_login', label: '最終ログイン', width: '160px' }
  ];

  // ソート機能
  const handleSort = (key) => {
    let direction = 'asc';
    if (sortConfig.key === key && sortConfig.direction === 'asc') {
      direction = 'desc';
    } else if (sortConfig.key === key && sortConfig.direction === 'desc') {
      direction = null;
    }
    setSortConfig({ key: direction ? key : null, direction });
  };

  // データソート処理
  const sortedData = React.useMemo(() => {
    if (!sortConfig.key || !sortConfig.direction) {
      return [...sampleData];
    }

    return [...sampleData].sort((a, b) => {
      const aValue = a[sortConfig.key];
      const bValue = b[sortConfig.key];

      if (aValue === null || aValue === undefined) return 1;
      if (bValue === null || bValue === undefined) return -1;

      if (aValue < bValue) {
        return sortConfig.direction === 'asc' ? -1 : 1;
      }
      if (aValue > bValue) {
        return sortConfig.direction === 'asc' ? 1 : -1;
      }
      return 0;
    });
  }, [sortConfig]);

  // ページネーション計算
  const totalPages = Math.ceil(sortedData.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const paginatedData = sortedData.slice(startIndex, startIndex + itemsPerPage);

  // チャート用のサンプルデータ
  const chartData = [
    { month: '1月', users: 120, sales: 1800, revenue: 2400 },
    { month: '2月', users: 190, sales: 2100, revenue: 2800 },
    { month: '3月', users: 300, sales: 2800, revenue: 3200 },
    { month: '4月', users: 280, sales: 2600, revenue: 3600 },
    { month: '5月', users: 320, sales: 3200, revenue: 4200 },
    { month: '6月', users: 380, sales: 3800, revenue: 4800 }
  ];

  // 折れ線グラフコンポーネント
  const LineChart = ({ data, width = 600, height = 300 }) => {
    const margin = { top: 20, right: 30, bottom: 60, left: 70 };
    const chartWidth = width - margin.left - margin.right;
    const chartHeight = height - margin.top - margin.bottom;

    // 複数系列のデータを処理
    const series = [
      { key: 'users', label: 'ユーザー数', color: 'rgb(21, 52, 109)' },
      { key: 'sales', label: '売上数', color: '#6366f1' },
      { key: 'revenue', label: '収益', color: '#10b981' }
    ];

    // 全ての値の最大・最小を計算
    const allValues = data.flatMap(d => [d.users, d.sales, d.revenue]);
    const maxValue = Math.max(...allValues);
    const minValue = Math.min(...allValues);
    const range = maxValue - minValue;
    const padding = range * 0.1;

    const yScale = (value) => chartHeight - ((value - minValue + padding) / (range + padding * 2)) * chartHeight;
    const xScale = (index) => (index / (data.length - 1)) * chartWidth;

    return (
      <div style={{
        background: 'white',
        border: '1px solid var(--color-neutral-200)',
        borderRadius: 'var(--radius-md)',
        padding: 'var(--spacing-4)'
      }}>
        <h4 style={{ margin: '0 0 var(--spacing-4) 0', fontSize: 'var(--font-size-base)', fontWeight: 'var(--font-weight-semibold)', textAlign: 'center' }}>
          複数データ系列の推移
        </h4>
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <svg width={width} height={height} style={{ overflow: 'visible' }}>
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
              const value = Math.round(maxValue + padding - (range + padding * 2) * i / 4);
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

            {/* 複数の折れ線 */}
            {series.map(s => {
              const pathData = data.map((d, i) => `${i === 0 ? 'M' : 'L'} ${xScale(i)} ${yScale(d[s.key])}`).join(' ');
              return (
                <g key={s.key}>
                  <path
                    d={pathData}
                    fill="none"
                    stroke={s.color}
                    strokeWidth={3}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  {/* データポイント */}
                  {data.map((d, i) => (
                    <circle
                      key={i}
                      cx={xScale(i)}
                      cy={yScale(d[s.key])}
                      r={4}
                      fill={s.color}
                      stroke="white"
                      strokeWidth={2}
                    />
                  ))}
                </g>
              );
            })}

            {/* X軸ラベル */}
            {data.map((d, i) => (
              <text
                key={i}
                x={xScale(i)}
                y={chartHeight + 20}
                textAnchor="middle"
                fontSize="12"
                fill="var(--color-neutral-600)"
              >
                {d.month}
              </text>
            ))}

            {/* X軸タイトル */}
            <text
              x={chartWidth / 2}
              y={chartHeight + 45}
              textAnchor="middle"
              fontSize="14"
              fontWeight="600"
              fill="var(--color-neutral-700)"
            >
              期間
            </text>

            {/* Y軸タイトル */}
            <text
              x={-68}
              y={-25}
              textAnchor="start"
              fontSize="14"
              fontWeight="600"
              fill="var(--color-neutral-700)"
            >
              データ値
            </text>
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
                height: '3px',
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

  // 棒グラフコンポーネント（縦）
  const BarChart = ({ data, width = 600, height = 300 }) => {
    const margin = { top: 20, right: 30, bottom: 60, left: 70 };
    const chartWidth = width - margin.left - margin.right;
    const chartHeight = height - margin.top - margin.bottom;

    // 複数系列のデータを処理
    const series = [
      { key: 'users', label: 'ユーザー数', color: 'rgb(21, 52, 109)' },
      { key: 'sales', label: '売上数', color: '#6366f1' },
      { key: 'revenue', label: '収益', color: '#10b981' }
    ];

    // 全ての値の最大値を計算
    const allValues = data.flatMap(d => [d.users, d.sales, d.revenue]);
    const maxValue = Math.max(...allValues);

    const groupWidth = chartWidth / data.length * 0.8;
    const barWidth = groupWidth / series.length;
    const groupSpacing = chartWidth / data.length * 0.2;

    return (
      <div style={{
        background: 'white',
        border: '1px solid var(--color-neutral-200)',
        borderRadius: 'var(--radius-md)',
        padding: 'var(--spacing-4)'
      }}>
        <h4 style={{ margin: '0 0 var(--spacing-4) 0', fontSize: 'var(--font-size-base)', fontWeight: 'var(--font-weight-semibold)', textAlign: 'center' }}>
          複数データ系列の比較
        </h4>
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <svg width={width} height={height} style={{ overflow: 'visible' }}>
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

              {/* X軸タイトル */}
              <text
                x={chartWidth / 2}
                y={chartHeight + 45}
                textAnchor="middle"
                fontSize="14"
                fontWeight="600"
                fill="var(--color-neutral-700)"
              >
                期間
              </text>

              {/* Y軸タイトル */}
              <text
                x={-68}
                y={-25}
                textAnchor="start"
                fontSize="14"
                fontWeight="600"
                fill="var(--color-neutral-700)"
              >
                データ値
              </text>
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

  // 横棒グラフコンポーネント
  const HorizontalBarChart = ({ data, width = 600, height = 300 }) => {
    const margin = { top: 20, right: 80, bottom: 60, left: 120 };
    const chartWidth = width - margin.left - margin.right;
    const chartHeight = height - margin.top - margin.bottom;

    // 複数系列のデータを処理
    const series = [
      { key: 'users', label: 'ユーザー数', color: 'rgb(21, 52, 109)' },
      { key: 'sales', label: '売上数', color: '#6366f1' },
      { key: 'revenue', label: '収益', color: '#10b981' }
    ];

    // 全ての値の最大値を計算
    const allValues = data.flatMap(d => [d.users, d.sales, d.revenue]);
    const maxValue = Math.max(...allValues);

    const groupHeight = chartHeight / data.length * 0.8;
    const barHeight = groupHeight / series.length;
    const groupSpacing = chartHeight / data.length * 0.2;

    return (
      <div style={{
        background: 'white',
        border: '1px solid var(--color-neutral-200)',
        borderRadius: 'var(--radius-md)',
        padding: 'var(--spacing-4)'
      }}>
        <h4 style={{ margin: '0 0 var(--spacing-4) 0', fontSize: 'var(--font-size-base)', fontWeight: 'var(--font-weight-semibold)', textAlign: 'center' }}>
          複数データ系列の比較（横棒）
        </h4>
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <svg width={width} height={height} style={{ overflow: 'visible' }}>
            <g transform={`translate(${margin.left}, ${margin.top})`}>
              {/* グリッドライン */}
              {[0, 1, 2, 3, 4].map(i => (
                <line
                  key={i}
                  x1={chartWidth * i / 4}
                  x2={chartWidth * i / 4}
                  y1={0}
                  y2={chartHeight}
                  stroke="var(--color-neutral-200)"
                  strokeWidth={1}
                />
              ))}

              {/* X軸ラベル */}
              {[0, 1, 2, 3, 4].map(i => {
                const value = Math.round(maxValue * i / 4);
                return (
                  <text
                    key={i}
                    x={chartWidth * i / 4}
                    y={chartHeight + 20}
                    textAnchor="middle"
                    fontSize="12"
                    fill="var(--color-neutral-600)"
                  >
                    {value}
                  </text>
                );
              })}

              {/* 複数の横棒グラフ */}
              {data.map((d, dataIndex) => {
                const groupY = dataIndex * (chartHeight / data.length) + groupSpacing / 2;

                return (
                  <g key={dataIndex}>
                    {series.map((s, seriesIndex) => {
                      const barWidth = (d[s.key] / maxValue) * chartWidth;
                      const y = groupY + seriesIndex * barHeight;

                      return (
                        <rect
                          key={s.key}
                          x={0}
                          y={y}
                          width={barWidth}
                          height={barHeight}
                          fill={s.color}
                          rx={2}
                        />
                      );
                    })}

                    {/* Y軸ラベル */}
                    <text
                      x={-10}
                      y={groupY + groupHeight / 2 + 5}
                      textAnchor="end"
                      fontSize="12"
                      fill="var(--color-neutral-600)"
                    >
                      {d.month}
                    </text>
                  </g>
                );
              })}

              {/* X軸タイトル */}
              <text
                x={chartWidth / 2}
                y={chartHeight + 45}
                textAnchor="middle"
                fontSize="14"
                fontWeight="600"
                fill="var(--color-neutral-700)"
              >
                データ値
              </text>

              {/* Y軸タイトル */}
              <text
                x={-35}
                y={-5}
                textAnchor="start"
                fontSize="14"
                fontWeight="600"
                fill="var(--color-neutral-700)"
              >
                期間
              </text>
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

  // ドーナツチャートコンポーネント
  const DonutChart = ({ data, width = 350, height = 350 }) => {
    const radius = Math.min(width, height) / 2 - 30;
    const innerRadius = radius * 0.45;
    const centerX = width / 2;
    const centerY = height / 2;

    const total = data.reduce((sum, d) => sum + d.value, 0);
    let currentAngle = -Math.PI / 2;

    const colors = ['rgb(21, 52, 109)', '#6366f1', '#8b5cf6', '#ec4899', '#f59e0b'];

    return (
      <div style={{
        background: 'white',
        border: '1px solid var(--color-neutral-200)',
        borderRadius: 'var(--radius-md)',
        padding: 'var(--spacing-4)',
        textAlign: 'center'
      }}>
        <h4 style={{ margin: '0 0 var(--spacing-4) 0', fontSize: 'var(--font-size-base)', fontWeight: 'var(--font-weight-semibold)', textAlign: 'center' }}>
          部門別売上比率
        </h4>
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <svg width={width} height={height}>
          {data.map((d, i) => {
            const angle = (d.value / total) * 2 * Math.PI;
            const startAngle = currentAngle;
            const endAngle = currentAngle + angle;

            const x1 = centerX + Math.cos(startAngle) * radius;
            const y1 = centerY + Math.sin(startAngle) * radius;
            const x2 = centerX + Math.cos(endAngle) * radius;
            const y2 = centerY + Math.sin(endAngle) * radius;

            const x3 = centerX + Math.cos(endAngle) * innerRadius;
            const y3 = centerY + Math.sin(endAngle) * innerRadius;
            const x4 = centerX + Math.cos(startAngle) * innerRadius;
            const y4 = centerY + Math.sin(startAngle) * innerRadius;

            const largeArcFlag = angle > Math.PI ? 1 : 0;

            const pathData = [
              `M ${x1} ${y1}`,
              `A ${radius} ${radius} 0 ${largeArcFlag} 1 ${x2} ${y2}`,
              `L ${x3} ${y3}`,
              `A ${innerRadius} ${innerRadius} 0 ${largeArcFlag} 0 ${x4} ${y4}`,
              'Z'
            ].join(' ');

            // ラベル位置計算（セグメントの中央）
            const midAngle = (startAngle + endAngle) / 2;
            const labelRadius = (radius + innerRadius) / 2;
            const labelX = centerX + Math.cos(midAngle) * labelRadius;
            const labelY = centerY + Math.sin(midAngle) * labelRadius;
            const percentage = ((d.value / total) * 100).toFixed(1);

            currentAngle = endAngle;

            return (
              <g key={i}>
                <path
                  d={pathData}
                  fill={colors[i % colors.length]}
                  stroke="white"
                  strokeWidth={2}
                />
                {/* セグメント内のデータラベル */}
                <text
                  x={labelX}
                  y={labelY - 10}
                  textAnchor="middle"
                  fontSize="11"
                  fontWeight="bold"
                  fill="white"
                >
                  {d.label.length > 5 ? d.label.substring(0, 4) + '...' : d.label}
                </text>
                <text
                  x={labelX}
                  y={labelY + 4}
                  textAnchor="middle"
                  fontSize="12"
                  fontWeight="bold"
                  fill="white"
                >
                  {percentage}%
                </text>
                <text
                  x={labelX}
                  y={labelY + 18}
                  textAnchor="middle"
                  fontSize="9"
                  fill="white"
                >
                  {d.value.toLocaleString()}万円
                </text>
              </g>
            );
          })}

          {/* 中央のテキスト */}
          <text
            x={centerX}
            y={centerY}
            textAnchor="middle"
            fontSize="20"
            fontWeight="bold"
            fill="var(--color-neutral-900)"
          >
            総売上
          </text>
          <text
            x={centerX}
            y={centerY + 25}
            textAnchor="middle"
            fontSize="16"
            fill="var(--color-neutral-600)"
          >
            {total.toLocaleString()}万円
          </text>
        </svg>
        </div>

        {/* 凡例と詳細内訳 */}
        <div style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap', gap: 'var(--spacing-4)', marginTop: 'var(--spacing-4)' }}>
          {data.map((d, i) => {
            const percentage = ((d.value / total) * 100).toFixed(1);
            return (
              <div key={i} style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: 'var(--spacing-1)',
                padding: 'var(--spacing-2)',
                background: 'var(--color-neutral-50)',
                borderRadius: 'var(--radius-md)',
                minWidth: '80px'
              }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--spacing-1)' }}>
                  <div style={{
                    width: '12px',
                    height: '12px',
                    backgroundColor: colors[i % colors.length],
                    borderRadius: '2px'
                  }} />
                  <span style={{ fontSize: 'var(--font-size-sm)', color: 'var(--color-neutral-700)', fontWeight: 'var(--font-weight-medium)' }}>
                    {d.label}
                  </span>
                </div>
                <div style={{ textAlign: 'center' }}>
                  <div style={{ fontSize: 'var(--font-size-lg)', fontWeight: 'var(--font-weight-bold)', color: 'var(--color-neutral-900)' }}>
                    {d.value.toLocaleString()}万円
                  </div>
                  <div style={{ fontSize: 'var(--font-size-sm)', color: 'var(--color-neutral-600)' }}>
                    ({percentage}%)
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    );
  };

  const pieData = [
    { label: '営業部', value: 4200 },
    { label: '開発部', value: 3100 },
    { label: '管理部', value: 2800 },
    { label: 'マーケティング部', value: 1900 }
  ];

  return (
    <div className="tables-page">
      <style jsx>{`
        .tables-page {
          padding: var(--spacing-6);
          max-width: 1200px;
          margin: 0 auto;
        }

        .page-header {
          margin-bottom: var(--spacing-8);
        }

        .page-title {
          font-size: var(--font-size-3xl);
          font-weight: var(--font-weight-bold);
          color: var(--color-neutral-900);
          margin-bottom: var(--spacing-4);
        }

        .page-description {
          font-size: var(--font-size-lg);
          color: var(--color-neutral-600);
          line-height: 1.6;
        }

        .component-section {
          margin-bottom: var(--spacing-12);
        }

        .section-title {
          font-size: var(--font-size-2xl);
          font-weight: var(--font-weight-semibold);
          color: var(--color-neutral-900);
          margin-bottom: var(--spacing-6);
          border-bottom: 2px solid var(--color-primary-200);
          padding-bottom: var(--spacing-3);
        }

        .component-card {
          background: var(--color-neutral-white);
          border: 1px solid var(--color-neutral-200);
          border-radius: var(--radius-lg);
          padding: var(--spacing-6);
          margin-bottom: var(--spacing-6);
        }

        .component-info {
          margin-bottom: var(--spacing-4);
        }

        .component-name {
          font-size: var(--font-size-lg);
          font-weight: var(--font-weight-semibold);
          color: var(--color-neutral-900);
          margin-bottom: var(--spacing-2);
        }

        .component-description {
          font-size: var(--font-size-sm);
          color: var(--color-neutral-600);
          margin-bottom: var(--spacing-4);
        }

        .component-demo {
          padding: var(--spacing-4);
          background: var(--color-neutral-50);
          border: 1px solid var(--color-neutral-200);
          border-radius: var(--radius-md);
          overflow-x: auto;
        }

        .code-snippet {
          background: var(--color-neutral-900);
          color: var(--color-neutral-100);
          padding: var(--spacing-4);
          border-radius: var(--radius-md);
          font-family: 'Monaco', 'Menlo', 'Ubuntu Mono', monospace;
          font-size: var(--font-size-sm);
          line-height: 1.5;
          overflow-x: auto;
          white-space: pre;
          margin-top: var(--spacing-4);
        }

        .usage-notes {
          background: var(--color-info-50);
          border: 1px solid var(--color-info-200);
          border-radius: var(--radius-md);
          padding: var(--spacing-6);
          margin-top: var(--spacing-8);
        }

        .usage-notes h2 {
          color: var(--color-info-800);
          margin-bottom: var(--spacing-4);
        }

        .usage-notes ul {
          color: var(--color-info-700);
          padding-left: var(--spacing-5);
        }

        .usage-notes li {
          margin-bottom: var(--spacing-2);
        }
      `}</style>

      <div className="page-header">
        <h1 className="page-title">テーブル・リスト・グラフコンポーネント</h1>
        <p className="page-description">
          データ表示とページネーション機能を提供するテーブルコンポーネント群、一覧表示に特化したリストコンポーネント、そしてデータ可視化のためのグラフコンポーネント。
          基本的なデータテーブルから高機能な統合テーブル、ページネーション、基本的なリスト表示機能、そして折れ線グラフ・棒グラフ・ドーナツグラフまで包括的にカバーします。
        </p>
      </div>

      {/* テーブルコンポーネント */}
      <div className="component-section">
        <h2 className="section-title">基本テーブル機能</h2>

        <div className="component-card">
          <div className="component-info">
            <h3 className="component-name">DataTable</h3>
            <p className="component-description">
              データテーブルの基本的な表示例
            </p>
          </div>
          <div className="component-demo">
            <div style={{ overflowX: 'auto' }}>
              <table style={{
                width: '100%',
                borderCollapse: 'collapse',
                fontSize: 'var(--font-size-sm)'
              }}>
                <thead>
                  <tr style={{ backgroundColor: 'var(--color-neutral-50)' }}>
                    {columns.map((column) => (
                      <th key={column.key} style={{
                        padding: 'var(--spacing-3)',
                        textAlign: 'left',
                        fontWeight: 'var(--font-weight-medium)',
                        borderBottom: '1px solid var(--color-neutral-200)',
                        cursor: 'pointer',
                        userSelect: 'none',
                        position: 'relative'
                      }}
                      onClick={() => handleSort(column.key)}
                      >
                        <div style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                          {column.label}
                          <span style={{
                            display: 'inline-flex',
                            flexDirection: 'column',
                            fontSize: '10px',
                            lineHeight: '1',
                            marginLeft: '4px'
                          }}>
                            <span style={{
                              color: sortConfig.key === column.key && sortConfig.direction === 'asc'
                                ? 'var(--color-primary-600)'
                                : 'var(--color-neutral-400)',
                              transition: 'color 0.2s'
                            }}>▲</span>
                            <span style={{
                              color: sortConfig.key === column.key && sortConfig.direction === 'desc'
                                ? 'var(--color-primary-600)'
                                : 'var(--color-neutral-400)',
                              transition: 'color 0.2s',
                              marginTop: '-2px'
                            }}>▼</span>
                          </span>
                        </div>
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {paginatedData.map((item, index) => (
                    <tr key={item.id} style={{
                      borderBottom: '1px solid var(--color-neutral-200)',
                      backgroundColor: index % 2 === 0 ? 'var(--color-neutral-white)' : 'var(--color-neutral-25)'
                    }}>
                      {columns.map((column) => (
                        <td key={column.key} style={{
                          padding: 'var(--spacing-3)',
                          borderBottom: '1px solid var(--color-neutral-200)'
                        }}>
                          {column.key === 'status' ? (
                            <StatusBadge status={item.status} />
                          ) : (
                            item[column.key]
                          )}
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
          <div className="code-snippet">
            {`<table>
  <thead>
    <tr>
      {columns.map(column => (
        <th key={column.key}>{column.label}</th>
      ))}
    </tr>
  </thead>
  <tbody>
    {data.map(item => (
      <tr key={item.id}>
        {columns.map(column => (
          <td key={column.key}>{item[column.key]}</td>
        ))}
      </tr>
    ))}
  </tbody>
</table>`}
          </div>
        </div>

        <div className="component-card">
          <div className="component-info">
            <h3 className="component-name">PaginationPanel</h3>
            <p className="component-description">
              ページネーション機能を提供するパネルコンポーネント
            </p>
          </div>
          <div className="component-demo">
            <PaginationPanel
              pagination={{
                current_page: currentPage,
                last_page: totalPages,
                total: sampleData.length,
                per_page: itemsPerPage,
                from: startIndex + 1,
                to: Math.min(startIndex + itemsPerPage, sampleData.length),
                prev_page_url: currentPage > 1 ? '#' : null,
                next_page_url: currentPage < totalPages ? '#' : null
              }}
              onPageChange={setCurrentPage}
              onPerPageChange={(value) => {
                setItemsPerPage(value);
                setCurrentPage(1);
              }}
              config={{
                perPageOptions: [5, 10, 20],
                showInfo: true
              }}
            />
          </div>
          <div className="code-snippet">
            {`<PaginationPanel
  pagination={{
    current_page: 1,
    last_page: 10,
    total: 100,
    per_page: 10,
    from: 1,
    to: 10
  }}
  onPageChange={setCurrentPage}
  onPerPageChange={setItemsPerPage}
  config={{
    showInfo: true
  }}
/>`}
          </div>
        </div>

      </div>

      {/* List/ListItem コンポーネント */}
      <div className="component-section">
        <h2 className="section-title">リスト表示機能</h2>

        <div className="component-card">
          <div className="component-info">
            <h3 className="component-name">基本リスト</h3>
            <p className="component-description">
              シンプルなリスト表示コンポーネント
            </p>
          </div>
          <div className="component-demo">
            <List style={{ maxWidth: '400px' }}>
              <ListItem>リストアイテム 1</ListItem>
              <ListItem>リストアイテム 2</ListItem>
              <ListItem>リストアイテム 3</ListItem>
              <ListItem>リストアイテム 4</ListItem>
            </List>
          </div>
          <div className="code-snippet">
            {`<List>
  <ListItem>リストアイテム 1</ListItem>
  <ListItem>リストアイテム 2</ListItem>
  <ListItem>リストアイテム 3</ListItem>
  <ListItem>リストアイテム 4</ListItem>
</List>`}
          </div>
        </div>

        <div className="component-card">
          <div className="component-info">
            <h3 className="component-name">クリック可能リスト</h3>
            <p className="component-description">
              クリックイベントと選択状態を持つリスト
            </p>
          </div>
          <div className="component-demo">
            <List style={{ maxWidth: '400px' }}>
              {['オプション 1', 'オプション 2', 'オプション 3', 'オプション 4'].map((item, index) => (
                <ListItem
                  key={index}
                  onClick={() => setSelectedListItems([index])}
                  selected={selectedListItems.includes(index)}
                >
                  {item}
                </ListItem>
              ))}
            </List>
          </div>
          <div className="code-snippet">
            {`<List>
  {items.map((item, index) => (
    <ListItem
      key={index}
      onClick={() => handleSelect(index)}
      selected={selectedItems.includes(index)}
    >
      {item}
    </ListItem>
  ))}
</List>`}
          </div>
        </div>




      </div>

      {/* グラフコンポーネント */}
      <div className="component-section">
        <h2 className="section-title">グラフ機能</h2>

        <div className="component-card">
          <div className="component-info">
            <h3 className="component-name">LineChart</h3>
            <p className="component-description">
              時系列データの推移を表示する折れ線グラフ
            </p>
          </div>
          <div className="component-demo">
            <LineChart data={chartData} width={600} height={300} />
          </div>
          <div className="code-snippet">
            {`<LineChart
  data={chartData}
  width={600}
  height={300}
/>`}
          </div>
        </div>

        <div className="component-card">
          <div className="component-info">
            <h3 className="component-name">BarChart（縦棒）</h3>
            <p className="component-description">
              数値の比較を分かりやすく表示する縦棒グラフ
            </p>
          </div>
          <div className="component-demo">
            <BarChart data={chartData} width={600} height={300} />
          </div>
          <div className="code-snippet">
            {`<BarChart
  data={chartData}
  width={600}
  height={300}
/>`}
          </div>
        </div>

        <div className="component-card">
          <div className="component-info">
            <h3 className="component-name">HorizontalBarChart（横棒）</h3>
            <p className="component-description">
              数値の比較を横棒で表示し、項目名を読みやすくした横棒グラフ
            </p>
          </div>
          <div className="component-demo">
            <HorizontalBarChart data={chartData} width={600} height={300} />
          </div>
          <div className="code-snippet">
            {`<HorizontalBarChart
  data={chartData}
  width={600}
  height={300}
/>`}
          </div>
        </div>

        <div className="component-card">
          <div className="component-info">
            <h3 className="component-name">DonutChart</h3>
            <p className="component-description">
              割合や構成比を視覚的に表示するドーナツチャート
            </p>
          </div>
          <div className="component-demo">
            <div style={{ display: 'flex', justifyContent: 'center' }}>
              <DonutChart data={pieData} width={400} height={400} />
            </div>
          </div>
          <div className="code-snippet">
            {`<DonutChart
  data={pieData}
  width={350}
  height={350}
/>`}
          </div>
        </div>
      </div>

      {/* Usage Guidelines */}
      <div className="component-section">
        <h2 className="section-title">使用上の注意</h2>
        <div className="component-card">
          <ul style={{ lineHeight: 'var(--line-height-relaxed)', color: 'var(--color-neutral-700)' }}>
            <li>テーブルは大量のデータを扱う場合、ページネーションと併用してください</li>
            <li>データテーブルのプリセット設定により、一貫したスタイリングが適用されます</li>
            <li>レスポンシブデザインを考慮し、モバイルでの表示を確認してください</li>
            <li>ページネーションの表示件数は用途に応じて適切に設定してください</li>
            <li>Listコンポーネントは統一されたスタイルで一覧表示を実現します</li>
            <li>ListItemにはクリックイベントと選択状態を設定できます</li>
            <li>リストアイテムの選択状態は配列で管理することを推奨します</li>
            <li>折れ線グラフは時系列データや傾向の表示に適しています</li>
            <li>縦棒グラフは数値の比較や順位の表示に効果的です</li>
            <li>横棒グラフは項目名が長い場合や多数の項目がある場合に適しています</li>
            <li>ドーナツグラフは割合や構成比の可視化に最適です</li>
            <li>グラフのサイズは画面サイズに応じて調整してください</li>
            <li>カラーパレットはブランドカラーに統一することを推奨します</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default TablesPage;