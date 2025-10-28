import React from 'react';
import Icon from '../icons/Icon';
import type { MetricCardConfig } from '../../types/statistics/StatisticsPageConfig';

interface StatMetricCardProps extends MetricCardConfig {}

const StatMetricCard: React.FC<StatMetricCardProps> = ({
  label,
  value,
  icon,
  iconColor,
  iconBackground,
  trend,
  subtitle,
  format,
  onClick
}) => {
  const formattedValue = format ? format(value) : value;

  return (
    <div
      className={`stat-metric-card ${onClick ? 'stat-metric-card--clickable' : ''}`}
      onClick={onClick}
      role={onClick ? 'button' : undefined}
      tabIndex={onClick ? 0 : undefined}
      onKeyPress={onClick ? (e) => { if (e.key === 'Enter' || e.key === ' ') onClick(); } : undefined}
    >
      <div className="stat-metric-card__content">
        <div className="stat-metric-card__text">
          <p className="stat-metric-card__label">{label}</p>
          <p className="stat-metric-card__value">{formattedValue}</p>
          {subtitle && <p className="stat-metric-card__subtitle">{subtitle}</p>}

          {trend && (
            <div className={`stat-metric-card__trend stat-metric-card__trend--${trend.isPositive ? 'positive' : 'negative'}`}>
              <Icon
                name={trend.direction === 'up' ? 'arrow-up' : trend.direction === 'down' ? 'arrow-down' : 'minus'}
                size="xs"
              />
              <span className="stat-metric-card__trend-value">
                {trend.value > 0 ? '+' : ''}{trend.value}%
              </span>
              {trend.label && <span className="stat-metric-card__trend-label">{trend.label}</span>}
            </div>
          )}
        </div>

        {icon && (
          <div
            className="stat-metric-card__icon"
            style={{
              backgroundColor: iconBackground || 'var(--color-primary-100)',
              color: iconColor || 'var(--color-primary-700)'
            }}
          >
            <Icon name={icon} size="lg" />
          </div>
        )}
      </div>
    </div>
  );
};

export default React.memo(StatMetricCard);
