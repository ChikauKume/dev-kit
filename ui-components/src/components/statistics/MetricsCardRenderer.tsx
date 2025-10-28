import React from 'react';
import Icon from '../icons/Icon';
import type { MetricsCardRendererProps, MetricCardConfig } from '../../types/statistics/StatisticsProps';
import '../../styles/pages/templates/StatisticsPage.css';

const MetricsCardRenderer: React.FC<MetricsCardRendererProps> = ({
  metrics,
  loading = false,
  viewMode = 'pc'
}) => {
  const formatValue = (value: string | number, format?: string): string => {
    if (typeof value === 'string') return value;

    switch (format) {
      case 'currency':
        return `¥${value.toLocaleString('ja-JP')}`;
      case 'percentage':
        return `${value}%`;
      case 'decimal':
        return value.toLocaleString('ja-JP', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
      case 'number':
      default:
        return value.toLocaleString('ja-JP');
    }
  };

  const calculateChange = (current: number, previous: number): number => {
    if (previous === 0) return 0;
    return ((current - previous) / previous) * 100;
  };

  const getChangeDirection = (change: number): 'up' | 'down' | 'neutral' => {
    if (change > 0) return 'up';
    if (change < 0) return 'down';
    return 'neutral';
  };

  const renderMetricCard = (metric: MetricCardConfig) => {
    const colorClass = metric.color ? `metrics-card--${metric.color}` : '';
    const clickableClass = metric.onClick ? 'metrics-card--clickable' : '';

    let change = metric.change;
    if (change === undefined && metric.previousValue !== undefined) {
      const currentValue = typeof metric.value === 'number' ? metric.value : parseFloat(String(metric.value));
      const previousValue = typeof metric.previousValue === 'number' ? metric.previousValue : parseFloat(String(metric.previousValue));
      change = calculateChange(currentValue, previousValue);
    }

    const changeDirection = change !== undefined ? getChangeDirection(change) : undefined;
    const isPositiveChange = metric.isPositive !== undefined ? metric.isPositive : changeDirection === 'up';

    return (
      <div
        key={metric.id}
        className={`metrics-card ${colorClass} ${clickableClass}`}
        onClick={metric.onClick}
      >
        <div className="metrics-card__content">
          {metric.icon && (
            <div className="metrics-card__icon">
              <Icon name={metric.icon} size="lg" />
            </div>
          )}

          <div className="metrics-card__data">
            <div className="metrics-card__label">{metric.label}</div>
            <div className="metrics-card__value">
              {formatValue(metric.value, metric.format)}
            </div>

            {metric.subtitle && (
              <div className="metrics-card__subtitle">{metric.subtitle}</div>
            )}

            {change !== undefined && (
              <div
                className={`metrics-card__change ${
                  isPositiveChange ? 'metrics-card__change--positive' : 'metrics-card__change--negative'
                }`}
              >
                <Icon
                  name={changeDirection === 'up' ? 'arrow-up' : changeDirection === 'down' ? 'arrow-down' : 'minus'}
                  size="sm"
                />
                <span className="metrics-card__change-value">
                  {Math.abs(change).toFixed(1)}%
                </span>
                <span className="metrics-card__change-label">前期比</span>
              </div>
            )}
          </div>
        </div>
      </div>
    );
  };

  const renderSkeleton = () => (
    <div className="metrics-card metrics-card--loading">
      <div className="metrics-card__content">
        <div className="skeleton skeleton--circle"></div>
        <div className="metrics-card__data">
          <div className="skeleton skeleton--text" style={{ width: '60%' }}></div>
          <div className="skeleton skeleton--text skeleton--text-lg" style={{ width: '80%' }}></div>
          <div className="skeleton skeleton--text" style={{ width: '40%' }}></div>
        </div>
      </div>
    </div>
  );

  if (loading) {
    return (
      <div className={`metrics-card-grid metrics-card-grid--${viewMode}`}>
        {[1, 2, 3, 4].map((i) => (
          <React.Fragment key={i}>{renderSkeleton()}</React.Fragment>
        ))}
      </div>
    );
  }

  if (metrics.length === 0) {
    return null;
  }

  return (
    <div className={`metrics-card-grid metrics-card-grid--${viewMode}`}>
      {metrics.map(renderMetricCard)}
    </div>
  );
};

export default React.memo(MetricsCardRenderer);
