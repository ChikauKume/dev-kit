import type * as React from 'react';
import type { ChartType, ChartDataset, ChartOptions } from '../dashboard/WidgetConfig';

/**
 * Date range preset types
 */
export type DateRangePreset = 'today' | 'yesterday' | 'this_week' | 'last_week' | 'this_month' | 'last_month' | 'this_year' | 'last_year' | 'custom';

/**
 * Chart aggregation level
 */
export type AggregationLevel = 'hourly' | 'daily' | 'weekly' | 'monthly' | 'quarterly' | 'yearly';

/**
 * Export format types
 */
export type ExportFormat = 'csv' | 'png' | 'jpeg' | 'pdf';

/**
 * Comparison period types
 */
export type ComparisonPeriod = 'none' | 'previous_period' | 'year_over_year' | 'month_over_month';

/**
 * Date range configuration
 */
export interface DateRangeConfig {
  /** Start date */
  startDate: string | Date;

  /** End date */
  endDate: string | Date;

  /** Preset type */
  preset?: DateRangePreset;

  /** Comparison period */
  comparison?: ComparisonPeriod;

  /** Comparison start date (if comparison enabled) */
  comparisonStartDate?: string | Date;

  /** Comparison end date (if comparison enabled) */
  comparisonEndDate?: string | Date;
}

/**
 * Metric card configuration
 * Summary statistics displayed at top of page
 */
export interface MetricCardConfig {
  /** Unique identifier */
  id: string;

  /** Metric label */
  label: string;

  /** Current value */
  value: string | number;

  /** Format for value (currency, percentage, number, etc.) */
  format?: 'currency' | 'percentage' | 'number' | 'decimal';

  /** Icon name */
  icon?: string;

  /** Color theme */
  color?: 'primary' | 'success' | 'warning' | 'error' | 'info' | 'default';

  /** Previous period value (for comparison) */
  previousValue?: string | number;

  /** Change from previous period (percentage) */
  change?: number;

  /** Is increase positive? */
  isPositive?: boolean;

  /** Subtitle/description */
  subtitle?: string;

  /** Click handler for drill-down */
  onClick?: () => void;

  /** Loading state */
  loading?: boolean;
}

/**
 * Chart action configuration
 */
export interface ChartActionConfig {
  /** Enable drill-down on chart click */
  drillDown?: boolean;

  /** Export formats available */
  export?: ExportFormat[];

  /** Show fullscreen button */
  fullscreen?: boolean;

  /** Show refresh button */
  refresh?: boolean;

  /** Show download data button */
  downloadData?: boolean;

  /** Show view table button */
  viewTable?: boolean;
}

/**
 * Extended chart configuration for statistics
 * Extends ChartWidgetConfig with statistics-specific features
 */
export interface StatisticsChartConfig {
  /** Unique identifier */
  id: string;

  /** Chart title */
  title: string;

  /** Chart type */
  chartType: ChartType;

  /** Chart datasets */
  datasets: ChartDataset[];

  /** Labels for x-axis */
  labels?: string[];

  /** Chart options */
  options?: ChartOptions;

  /** Subtitle/description */
  subtitle?: string;

  /** Aggregation level */
  aggregation?: AggregationLevel;

  /** Available actions */
  actions?: ChartActionConfig;

  /** Show data table below chart */
  showDataTable?: boolean;

  /** Enable legend toggle */
  enableLegendToggle?: boolean;

  /** Enable zoom/pan */
  enableZoom?: boolean;

  /** Click handler for drill-down */
  onChartClick?: (dataPoint: any) => void;

  /** Refresh handler */
  onRefresh?: () => void;

  /** Export handler */
  onExport?: (format: ExportFormat) => void;

  /** Loading state */
  loading?: boolean;

  /** Grid span (for layout) */
  span?: number;
}

/**
 * Filter option configuration
 */
export interface FilterOption {
  /** Option label */
  label: string;

  /** Option value */
  value: string | number;

  /** Is selected */
  selected?: boolean;

  /** Option count (optional) */
  count?: number;
}

/**
 * Filter field configuration
 */
export interface FilterFieldConfig {
  /** Filter unique identifier */
  id: string;

  /** Filter label */
  label: string;

  /** Filter type */
  type: 'select' | 'multiselect' | 'daterange' | 'toggle' | 'search';

  /** Available options (for select/multiselect) */
  options?: FilterOption[];

  /** Current value */
  value?: any;

  /** Placeholder text */
  placeholder?: string;

  /** Is required */
  required?: boolean;

  /** Change handler */
  onChange?: (value: any) => void;
}

/**
 * Statistics filter configuration
 */
export interface StatisticsFilterConfig {
  /** Date range filter */
  dateRange?: DateRangeConfig;

  /** Custom filter fields */
  filters?: FilterFieldConfig[];

  /** Aggregation level selector */
  aggregationLevel?: AggregationLevel;

  /** Available aggregation levels */
  availableAggregations?: AggregationLevel[];

  /** Show filter panel by default */
  showByDefault?: boolean;

  /** Change handler for date range */
  onDateRangeChange?: (dateRange: DateRangeConfig) => void;

  /** Change handler for aggregation level */
  onAggregationChange?: (level: AggregationLevel) => void;

  /** Apply filters handler */
  onApplyFilters?: (filters: Record<string, any>) => void;

  /** Reset filters handler */
  onResetFilters?: () => void;
}

/**
 * Statistics export configuration
 */
export interface StatisticsExportConfig {
  /** Available export formats */
  formats: ExportFormat[];

  /** Export all data handler */
  onExportAll?: (format: ExportFormat) => void;

  /** Show export button */
  showExportButton?: boolean;

  /** Custom export label */
  exportLabel?: string;
}

/**
 * Real-time update configuration
 */
export interface RealtimeUpdateConfig {
  /** Enable real-time updates */
  enabled: boolean;

  /** Update interval in milliseconds */
  interval?: number;

  /** WebSocket URL (if using WebSocket) */
  websocketUrl?: string;

  /** Update handler */
  onUpdate?: (data: any) => void;
}

/**
 * Props for StatisticsPage component
 * Main configuration for Laravel-driven dynamic statistics pages
 */
export interface StatisticsPageProps {
  /** Page title */
  title: string;

  /** Page subtitle/description */
  subtitle?: string;

  /** Summary metric cards */
  metrics?: MetricCardConfig[];

  /** Chart configurations */
  charts: StatisticsChartConfig[];

  /** Filter configuration */
  filterConfig?: StatisticsFilterConfig;

  /** Export configuration */
  exportConfig?: StatisticsExportConfig;

  /** Real-time update configuration */
  realtimeConfig?: RealtimeUpdateConfig;

  /** View mode (PC or mobile) */
  viewMode?: 'pc' | 'sp';

  /**
   * Navigation handler
   * @param page - Page/route to navigate to
   */
  onNavigate?: (page: string) => void;

  /** Show back button */
  showBackButton?: boolean;

  /** Back button handler */
  onBack?: () => void;

  /** Loading state (for initial load) */
  loading?: boolean;

  /** Error state */
  error?: string | null;

  /** Empty state message */
  emptyMessage?: string;

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

  /** Unread notification count */
  unreadCount?: number;

  /** Unread count change handler */
  onUnreadCountChange?: (count: number) => void;

  /** Show notification dropdown */
  showNotificationDropdown?: boolean;

  /** Set notification dropdown visibility */
  setShowNotificationDropdown?: (show: boolean) => void;

  /** Show user menu */
  showUserMenu?: boolean;

  /** Set user menu visibility */
  setShowUserMenu?: (show: boolean) => void;

  /** Hamburger menu open state (mobile) */
  isHamburgerOpen?: boolean;

  /** Set hamburger menu state */
  setIsHamburgerOpen?: (open: boolean) => void;

  /** Sidebar collapsed state */
  sidebarCollapsed?: boolean;

  /** Set sidebar collapsed state */
  setSidebarCollapsed?: (collapsed: boolean) => void;

  /** Notification list */
  notifications?: Array<{
    id: string | number;
    title: string;
    message: string;
    time: string;
    read: boolean;
  }>;
}

/**
 * Props for MetricsCardRenderer component
 */
export interface MetricsCardRendererProps {
  /** Metric cards to render */
  metrics: MetricCardConfig[];

  /** Loading state */
  loading?: boolean;

  /** View mode */
  viewMode?: 'pc' | 'sp';
}

/**
 * Props for StatisticsFilterPanel component
 */
export interface StatisticsFilterPanelProps {
  /** Filter configuration */
  config: StatisticsFilterConfig;

  /** Is panel collapsed */
  collapsed?: boolean;

  /** Toggle collapsed state */
  onToggleCollapsed?: () => void;

  /** View mode */
  viewMode?: 'pc' | 'sp';
}

/**
 * Props for ChartDataTable component
 */
export interface ChartDataTableProps {
  /** Chart data to display in table */
  datasets: ChartDataset[];

  /** Labels for rows */
  labels?: string[];

  /** Table title */
  title?: string;

  /** Show export button */
  showExport?: boolean;

  /** Export handler */
  onExport?: (format: ExportFormat) => void;

  /** Max rows to display */
  maxRows?: number;

  /** Loading state */
  loading?: boolean;
}

/**
 * Props for ExportToolbar component
 */
export interface ExportToolbarProps {
  /** Available export formats */
  formats: ExportFormat[];

  /** Export handler */
  onExport: (format: ExportFormat) => void;

  /** Custom label */
  label?: string;

  /** Disabled state */
  disabled?: boolean;

  /** Loading state */
  loading?: boolean;

  /** Alignment */
  align?: 'left' | 'center' | 'right';
}

/**
 * Chart renderer props
 * For rendering individual charts
 */
export interface StatisticsChartRendererProps extends StatisticsChartConfig {
  /** View mode */
  viewMode?: 'pc' | 'sp';
}
