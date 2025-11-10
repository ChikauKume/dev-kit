/**
 * Chart widget configuration
 * Base configuration for chart widgets used in dashboard and statistics pages
 */
export interface ChartWidgetConfig {
  /** Widget/Chart unique identifier */
  id: string;

  /** Chart title */
  title: string;

  /** Chart subtitle */
  subtitle?: string;

  /** Chart type */
  chartType?: 'line' | 'bar' | 'pie' | 'doughnut' | 'area' | 'scatter';

  /** Chart data */
  data?: any;

  /** Chart options */
  options?: any;

  /** Loading state */
  loading?: boolean;

  /** Show refresh button */
  showRefreshButton?: boolean;

  /** Refresh handler */
  onRefresh?: () => void;

  /** Click handler */
  onClick?: () => void;

  /** Additional CSS classes */
  className?: string;
}
