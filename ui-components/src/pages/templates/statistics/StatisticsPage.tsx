import React, { useState } from 'react';
import InfoPageWrapper from '../../../components/layout/InfoPageWrapper';
import StatMetricCard from '../../../components/statistics/StatMetricCard';
import FilterPanel from '../../../components/statistics/FilterPanel';
import ChartRenderer from '../../../components/statistics/ChartRenderer';
import Button from '../../../components/buttons/Button';
import Icon from '../../../components/icons/Icon';
import type { StatisticsPageProps } from '../../../types/statistics/StatisticsPageConfig';
import '../../../styles/pages/templates/StatisticsPage.css';

const StatisticsPage: React.FC<StatisticsPageProps> = ({
  title,
  subtitle,
  metrics = [],
  charts,
  filters = [],
  exportConfig,
  onFilterChange,
  onApplyFilters,
  onResetFilters,
  onExport,
  viewMode: initialViewMode = 'pc',
  onNavigate = () => {},
  onLogout,
  showFilters = true,
  showExport = true,
  showMetrics = true,
  chartColumns = 1,
  loading = false,
  error,
  className = '',
  breadcrumbs,
  headerActions
}) => {
  const [viewMode, setViewMode] = useState<'pc' | 'tablet' | 'sp'>(initialViewMode);
  const [filterCollapsed, setFilterCollapsed] = useState(false);

  // Navigation handler
  const handleNavigate = (page: string) => {
    if (onNavigate) {
      onNavigate(page);
      return;
    }

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
    window.location.href = route;
  };

  const handleLogout = () => {
    if (onLogout) {
      onLogout();
      return;
    }
    handleNavigate('login');
  };

  const handleExport = (format: 'csv' | 'png' | 'pdf') => {
    if (onExport) {
      onExport(format);
    } else if (exportConfig?.onExport) {
      exportConfig.onExport(format);
    }
  };

  const sortedCharts = [...charts].sort((a, b) => {
    const orderA = a.order ?? 0;
    const orderB = b.order ?? 0;
    return orderA - orderB;
  });

  const renderContent = () => {
    if (loading) {
      return (
        <div className="statistics-page__loading">
          <div className="statistics-page__spinner">
            <Icon name="refresh" size="xl" />
          </div>
          <p>データを読み込んでいます...</p>
        </div>
      );
    }

    if (error) {
      return (
        <div className="statistics-page__error">
          <Icon name="exclamation" size="xl" />
          <h3>エラーが発生しました</h3>
          <p>{error}</p>
        </div>
      );
    }

    return (
      <>
        {/* Page Header */}
        <div className="statistics-page__header">
          <div className="statistics-page__header-content">
            <h1 className="statistics-page__title">{title}</h1>
            {subtitle && <p className="statistics-page__subtitle">{subtitle}</p>}
          </div>

          {showExport && (exportConfig?.enableCsv || exportConfig?.enablePng || exportConfig?.enablePdf) && (
            <div className="statistics-page__header-actions">
              <div className="statistics-page__export-group">
                {exportConfig.enableCsv && (
                  <Button
                    variant="secondary"
                    size="sm"
                    onClick={() => handleExport('csv')}
                    icon="download"
                  >
                    CSV
                  </Button>
                )}
                {exportConfig.enablePng && (
                  <Button
                    variant="secondary"
                    size="sm"
                    onClick={() => handleExport('png')}
                    icon="image"
                  >
                    PNG
                  </Button>
                )}
                {exportConfig.enablePdf && (
                  <Button
                    variant="secondary"
                    size="sm"
                    onClick={() => handleExport('pdf')}
                    icon="file"
                  >
                    PDF
                  </Button>
                )}
              </div>

              {headerActions?.map((action, index) => (
                <Button
                  key={index}
                  variant={action.variant || 'secondary'}
                  size="sm"
                  onClick={action.onClick}
                  icon={action.icon}
                >
                  {action.label}
                </Button>
              ))}
            </div>
          )}
        </div>

        {/* Filters */}
        {showFilters && filters.length > 0 && onFilterChange && (
          <FilterPanel
            filters={filters}
            onFilterChange={onFilterChange}
            onApplyFilters={onApplyFilters}
            onResetFilters={onResetFilters}
            collapsed={filterCollapsed}
            onToggleCollapsed={() => setFilterCollapsed(!filterCollapsed)}
          />
        )}

        {/* Metrics */}
        {showMetrics && metrics.length > 0 && (
          <div className="statistics-page__metrics">
            {metrics.map((metric) => (
              <StatMetricCard key={metric.id} {...metric} />
            ))}
          </div>
        )}

        {/* Charts */}
        {charts.length > 0 && (
          <div
            className="statistics-page__charts"
            style={{
              gridTemplateColumns: chartColumns > 1 ? `repeat(${chartColumns}, 1fr)` : '1fr'
            }}
          >
            {sortedCharts.map((chart) => (
              <ChartRenderer key={chart.id} chart={chart} />
            ))}
          </div>
        )}

        {charts.length === 0 && (
          <div className="statistics-page__empty">
            <Icon name="chart-bar" size="xl" />
            <h3>統計データがありません</h3>
            <p>表示する統計データがありません。</p>
          </div>
        )}
      </>
    );
  };

  return (
    <div className={viewMode === 'sp' ? 'force-mobile' : ''}>
      
      <InfoPageWrapper
        viewMode={viewMode}
        currentPage="statistics"
        onNavigate={handleNavigate}
        unreadCount={0}
        notifications={[]}
        onMarkNotificationAsRead={() => {}}
        onMarkAllNotificationsAsRead={() => {}}
        onLogout={handleLogout}
      >
        <div className={`statistics-page ${className}`}>
          {renderContent()}
        </div>
      </InfoPageWrapper>
    </div>
  );
};

export default StatisticsPage;
