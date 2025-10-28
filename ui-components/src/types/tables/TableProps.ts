import type * as React from 'react';
import type { TableColumnConfig, ColumnGroup, TableColumnPreset } from './TableColumnConfig';
import type { SearchFilterPanelConfig } from './SearchFilterConfig';

/**
 * Pagination configuration (Laravel-compatible)
 * Matches Laravel's pagination response structure
 */
export interface PaginationConfig {
  /** Current page number (1-indexed) */
  currentPage: number;

  /** Total number of pages */
  lastPage: number;

  /** Number of items per page */
  perPage: number;

  /** Total number of items */
  total: number;

  /** First item number on current page */
  from: number;

  /** Last item number on current page */
  to: number;

  /** Available per-page options */
  perPageOptions?: number[];

  /** Show page size selector */
  showPerPageSelector?: boolean;

  /** Show page info text */
  showPageInfo?: boolean;

  /** Show quick jump to page */
  showQuickJump?: boolean;

  /** Maximum page buttons to show */
  maxPageButtons?: number;
}

/**
 * Row action configuration
 * Defines actions that can be performed on individual rows
 */
export interface RowAction {
  /** Action unique identifier */
  id: string;

  /** Action label */
  label: string;

  /** Action icon */
  icon?: string;

  /**
   * Action handler
   * @param row - Row data
   * @param index - Row index
   */
  onClick: (row: Record<string, any>, index: number) => void | Promise<void>;

  /** Button variant */
  variant?: 'primary' | 'secondary' | 'danger' | 'text' | 'success' | 'warning';

  /**
   * Whether action is disabled
   * Can be static or dynamic based on row data
   */
  disabled?: boolean | ((row: Record<string, any>) => boolean);

  /**
   * Whether action is visible
   * Can be static or dynamic based on row data
   */
  visible?: boolean | ((row: Record<string, any>) => boolean);

  /** Tooltip text */
  tooltip?: string;

  /** Confirmation dialog configuration */
  confirm?: {
    title: string;
    message: string;
    confirmText?: string;
    cancelText?: string;
  };

  /** Show loading state */
  loading?: boolean;
}

/**
 * Bulk action configuration
 * Defines actions that can be performed on multiple selected rows
 */
export interface BulkAction {
  /** Action unique identifier */
  id: string;

  /** Action label */
  label: string;

  /** Action icon */
  icon?: string;

  /**
   * Action handler
   * @param selectedIds - Array of selected row IDs
   * @param selectedRows - Array of selected row data
   */
  onClick: (selectedIds: (string | number)[], selectedRows: Record<string, any>[]) => void | Promise<void>;

  /** Button variant */
  variant?: 'primary' | 'secondary' | 'danger' | 'success' | 'warning';

  /** Whether action is disabled */
  disabled?: boolean;

  /** Confirmation dialog configuration */
  confirm?: {
    title: string;
    message: string;
    confirmText?: string;
    cancelText?: string;
  };

  /** Minimum number of selections required */
  minSelections?: number;

  /** Maximum number of selections allowed */
  maxSelections?: number;

  /** Show loading state */
  loading?: boolean;
}

/**
 * Sort configuration
 * Current table sort state
 */
export interface SortConfig {
  /** Column key to sort by */
  column: string;

  /** Sort direction */
  direction: 'asc' | 'desc';
}

/**
 * Table row configuration
 * Controls row behavior and appearance
 */
export interface TableRowConfig {
  /** Row unique identifier key (defaults to 'id') */
  idKey?: string;

  /**
   * Row CSS class
   * Can be static or dynamic based on row data
   */
  className?: string | ((row: Record<string, any>, index: number) => string);

  /**
   * Row click handler
   * @param row - Row data
   * @param index - Row index
   */
  onClick?: (row: Record<string, any>, index: number) => void;

  /**
   * Whether row is clickable
   */
  clickable?: boolean;

  /**
   * Whether row is expandable (for detail views)
   */
  expandable?: boolean;

  /**
   * Render function for expanded row content
   * @param row - Row data
   * @param index - Row index
   * @returns Expanded content
   */
  renderExpanded?: (row: Record<string, any>, index: number) => React.ReactNode;

  /**
   * Whether row is disabled
   * Can be static or dynamic based on row data
   */
  disabled?: boolean | ((row: Record<string, any>) => boolean);
}

/**
 * Table export configuration
 * Controls data export functionality for tables
 */
export interface TableExportConfig {
  /** Enable export */
  enabled: boolean;

  /** Available export formats */
  formats?: Array<'csv' | 'excel' | 'pdf' | 'json'>;

  /** Export filename (without extension) */
  filename?: string;

  /** Export all data or only visible/filtered */
  scope?: 'all' | 'visible' | 'selected';

  /** Custom export handler */
  onExport?: (format: string, data: Record<string, any>[]) => void | Promise<void>;
}

/**
 * Props for DataListPage component
 * Main configuration for Laravel-driven dynamic tables
 */
export interface DataListPageProps {
  /** Page title */
  title: string;

  /** Page subtitle/description */
  subtitle?: string;

  /** Table columns configuration */
  columns: TableColumnConfig[];

  /** Column groups (for multi-level headers) */
  columnGroups?: ColumnGroup[];

  /** Table data */
  data: Record<string, any>[];

  /** Search/filter configuration */
  searchConfig?: SearchFilterPanelConfig;

  /** Pagination configuration */
  pagination?: PaginationConfig;

  /** Row actions */
  rowActions?: RowAction[];

  /** Bulk actions */
  bulkActions?: BulkAction[];

  /** Create button configuration */
  createButton?: {
    label: string;
    icon?: string;
    onClick: () => void;
    variant?: 'primary' | 'secondary';
  };

  /** Additional toolbar actions */
  toolbarActions?: Array<{
    label: string;
    icon?: string;
    onClick: () => void;
    variant?: 'primary' | 'secondary' | 'text';
    disabled?: boolean;
  }>;

  /** Current sort configuration */
  sort?: SortConfig;

  /** Current search/filter values */
  searchValues?: Record<string, any>;

  /**
   * Sort change handler
   * @param column - Column key to sort by
   * @param direction - Sort direction
   */
  onSortChange?: (column: string, direction: 'asc' | 'desc') => void;

  /**
   * Page change handler
   * @param page - New page number
   */
  onPageChange?: (page: number) => void;

  /**
   * Per page change handler
   * @param perPage - New items per page
   */
  onPerPageChange?: (perPage: number) => void;

  /**
   * Search change handler
   * @param values - New filter values
   */
  onSearchChange?: (values: Record<string, any>) => void;

  /**
   * Refresh handler (reload data)
   */
  onRefresh?: () => void;

  /** Enable row selection */
  selectable?: boolean;

  /** Initially selected row IDs */
  selectedIds?: (string | number)[];

  /**
   * Selection change handler
   * @param selectedIds - Array of selected row IDs
   * @param selectedRows - Array of selected row data
   */
  onSelectionChange?: (selectedIds: (string | number)[], selectedRows: Record<string, any>[]) => void;

  /** Row configuration */
  rowConfig?: TableRowConfig;

  /** Empty state configuration */
  emptyState?: {
    title: string;
    description?: string;
    icon?: string;
    action?: {
      label: string;
      onClick: () => void;
    };
  };

  /** Loading state */
  loading?: boolean;

  /** Error state */
  error?: {
    message: string;
    retry?: () => void;
  };

  /** Export configuration */
  exportConfig?: TableExportConfig;

  /** Column presets */
  columnPresets?: TableColumnPreset[];

  /** Active column preset ID */
  activePreset?: string;

  /**
   * Column preset change handler
   * @param presetId - New preset ID
   */
  onPresetChange?: (presetId: string) => void;

  /** Enable column visibility toggle */
  enableColumnToggle?: boolean;

  /** Enable column reordering */
  enableColumnReorder?: boolean;

  /** Enable column resizing */
  enableColumnResize?: boolean;

  /** Sticky header */
  stickyHeader?: boolean;

  /** Table height (for virtual scrolling) */
  height?: string | number;

  /** Enable virtual scrolling (for large datasets) */
  virtualScroll?: boolean;

  /** Row height for virtual scrolling */
  rowHeight?: number;

  /** Table density */
  density?: 'compact' | 'normal' | 'comfortable';

  /** Show row numbers */
  showRowNumbers?: boolean;

  /** Show table footer */
  showFooter?: boolean;

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

  /**
   * Flash message component
   * Displayed below the page title
   */
  flashMessage?: React.ReactNode;

  /**
   * Callback for logout action
   *
   * @example
   * ```tsx
   * onLogout={() => router.post('/logout')}
   * ```
   */
  onLogout?: () => void;
}

/**
 * Props for DynamicTable component (table-only, without page wrapper)
 * Use this for embedding tables within other components
 */
export interface DynamicTableProps extends Omit<DataListPageProps, 'title' | 'subtitle' | 'breadcrumbs' | 'headerActions' | 'createButton'> {
  /** Optional table title */
  title?: string;

  /** Optional table description */
  description?: string;
}
