import React from 'react';
import type { StatisticsChartConfig } from '../../types/statistics/StatisticsPageConfig';

interface ChartRendererProps {
  /** Chart configuration */
  chart: StatisticsChartConfig;

  /** Additional CSS classes */
  className?: string;
}

const ChartRenderer: React.FC<ChartRendererProps> = ({ chart, className = '' }) => {
  if (!chart.visible && chart.visible !== undefined) {
    return null;
  }

  return (
    <div className={`statistics-chart-card ${className}`}>
      <div className="statistics-chart-card__header">
        <div>
          <h3 className="statistics-chart-card__title">{chart.title}</h3>
          {chart.subtitle && (
            <p className="statistics-chart-card__subtitle">{chart.subtitle}</p>
          )}
        </div>
        {chart.showRefreshButton && chart.onRefresh && (
          <button
            className="statistics-chart-card__refresh-button"
            onClick={chart.onRefresh}
            disabled={chart.loading}
          >
            ↻
          </button>
        )}
      </div>

      <div className="statistics-chart-card__content">
        {chart.loading ? (
          <div className="statistics-chart-card__loading">
            <div className="spinner"></div>
            <p>読み込み中...</p>
          </div>
        ) : (
          <div className="statistics-chart-card__chart">
            {/* Chart placeholder - integrate with your chart library */}
            <div style={{
              width: '100%',
              height: '300px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              background: 'var(--color-neutral-50)',
              borderRadius: 'var(--radius-md)',
              color: 'var(--color-neutral-600)'
            }}>
              {chart.chartType} Chart: {chart.title}
            </div>
          </div>
        )}
      </div>

      {chart.description && (
        <div className="statistics-chart-card__description">
          <p>{chart.description}</p>
        </div>
      )}

      {chart.lastUpdated && (
        <div className="statistics-chart-card__metadata">
          <span className="statistics-chart-card__last-updated">
            最終更新: {new Date(chart.lastUpdated).toLocaleString('ja-JP')}
          </span>
        </div>
      )}
    </div>
  );
};

export default React.memo(ChartRenderer);
