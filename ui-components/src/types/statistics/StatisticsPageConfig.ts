import type { ChartWidgetConfig } from '../dashboard/WidgetConfig';

/**
 * Filter configuration for statistics page
 * Defines available filters and their current values
 */
export interface FilterConfig {
  /** Filter unique identifier */
  id: string;

  /** Filter label */
  label: string;

  /** Filter type */
  type: 'date-range' | 'select' | 'multi-select' | 'checkbox' | 'text';

  /** Current filter value(s) */
  value?: any;

  /** Options for select/multi-select filters */
  options?: Array<{
    value: string | number;
    label: string;
  }>;

  /** Placeholder text */
  placeholder?: string;

  /** Whether filter is required */
  required?: boolean;
}

/**
 * Date range filter value
 */
export interface DateRangeValue {
  /** Start date (ISO string or Date) */
  startDate: string | Date;

  /** End date (ISO string or Date) */
  endDate: string | Date;
}

/**
 * Metric card configuration
 * Displays a single KPI/metric
 */
export interface MetricCardConfig {
  /** Metric unique identifier */
  id: string;

  /** Metric label/title */
  label: string;

  /** Metric value */
  value: string | number;

  /** Metric icon name */
  icon?: string;

  /** Icon color */
  iconColor?: string;

  /** Icon background color */
  iconBackground?: string;

  /** Trend indicator */
  trend?: {
    /** Trend value (percentage or absolute) */
    value: number;
    /** Trend direction */
    direction: 'up' | 'down' | 'neutral';
    /** Trend label */
    label?: string;
    /** Whether increase is positive */
    isPositive?: boolean;
  };

  /** Subtitle/description */
  subtitle?: string;

  /** Format function for value */
  format?: (value: number | string) => string;

  /** Click handler */
  onClick?: () => void;
}

/**
 * Export configuration
 * Defines export options for statistics data
 */
export interface ExportConfig {
  /** Enable CSV export */
  enableCsv?: boolean;

  /** Enable PNG export */
  enablePng?: boolean;

  /** Enable PDF export */
  enablePdf?: boolean;

  /** Custom export handler */
  onExport?: (format: 'csv' | 'png' | 'pdf') => void;

  /** Export filename */
  filename?: string;
}

/**
 * Chart configuration with metadata
 * Extends ChartWidgetConfig with additional statistics-specific fields
 */
export interface StatisticsChartConfig extends ChartWidgetConfig {
  /** Chart category/group */
  category?: string;

  /** Chart description (markdown supported) */
  description?: string;

  /** Whether chart is visible by default */
  visible?: boolean;

  /** Chart order/position */
  order?: number;

  /** Data update timestamp */
  lastUpdated?: string | Date;

  /** Whether chart supports export */
  exportable?: boolean;
}

/**
 * Props for StatisticsPage component
 * Main configuration for Laravel-driven statistics pages
 */
export interface StatisticsPageProps {
  /** Page title */
  title: string;

  /** Page subtitle/description */
  subtitle?: string;

  /** Metric cards displayed at the top */
  metrics?: MetricCardConfig[];

  /** Chart configurations */
  charts: StatisticsChartConfig[];

  /** Filter configurations */
  filters?: FilterConfig[];

  /** Export configuration */
  exportConfig?: ExportConfig;

  /**
   * Filter change handler
   * @param filterId - Filter identifier
   * @param value - New filter value
   */
  onFilterChange?: (filterId: string, value: any) => void;

  /**
   * Apply filters handler
   * Called when user submits filter changes
   */
  onApplyFilters?: () => void;

  /**
   * Reset filters handler
   * Called when user resets all filters
   */
  onResetFilters?: () => void;

  /**
   * Export handler
   * @param format - Export format
   */
  onExport?: (format: 'csv' | 'png' | 'pdf') => void;

  /** View mode (PC or mobile) */
  viewMode?: 'pc' | 'sp';

  /**
   * Navigation handler
   * @param page - Page/route to navigate to
   */
  onNavigate?: (page: string) => void;

  /**
   * Callback for logout action
   *
   * @example
   * ```tsx
   * onLogout={() => router.post('/logout')}
   * ```
   */
  onLogout?: () => void;

  /** Show filter panel */
  showFilters?: boolean;

  /** Show export button */
  showExport?: boolean;

  /** Show metrics section */
  showMetrics?: boolean;

  /** Chart grid columns (default: 1) */
  chartColumns?: number;

  /** Loading state (for initial load) */
  loading?: boolean;

  /** Error message */
  error?: string;

  /** Additional CSS classes */
  className?: string;

  /**
   * Breadcrumb items for navigation
   * Used with InfoPageWrapper
   */
  breadcrumbs?: Array<{
    label: string;
    path?: string;
  }>;

  /**
   * Header actions/links
   * Displayed in page header
   */
  headerActions?: Array<{
    label: string;
    icon?: string;
    onClick: () => void;
    variant?: 'primary' | 'secondary' | 'text';
  }>;
}
