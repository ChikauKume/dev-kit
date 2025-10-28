import type * as React from 'react';

/**
 * Column data type for formatting
 * Determines how column values are rendered and formatted
 */
export type ColumnDataType =
  | 'text'
  | 'number'
  | 'date'
  | 'datetime'
  | 'time'
  | 'boolean'
  | 'currency'
  | 'percentage'
  | 'badge'
  | 'link'
  | 'email'
  | 'phone'
  | 'image'
  | 'avatar'
  | 'actions'
  | 'custom';

/**
 * Column alignment
 */
export type ColumnAlign = 'left' | 'center' | 'right';

/**
 * Badge variant for badge type columns
 * Maps data values to badge styles
 */
export interface BadgeConfig {
  [value: string]: {
    /** Display label for the badge */
    label: string;
    /** Badge color variant */
    variant: 'success' | 'warning' | 'error' | 'info' | 'default' | 'primary' | 'secondary';
  };
}

/**
 * Sort configuration for column
 */
export interface ColumnSortConfig {
  /** Whether column is sortable */
  enabled: boolean;

  /**
   * Custom sort function
   * @param a - First row data
   * @param b - Second row data
   * @param direction - Sort direction
   * @returns Comparison result (-1, 0, 1)
   */
  customSort?: (a: Record<string, any>, b: Record<string, any>, direction: 'asc' | 'desc') => number;
}

/**
 * Table column configuration
 * Defines structure and behavior of a single table column
 */
export interface TableColumnConfig {
  /** Unique column key (matches data property) */
  key: string;

  /** Column header label */
  label: string;

  /** Data type for formatting */
  dataType?: ColumnDataType;

  /** Whether the column is sortable */
  sortable?: boolean | ColumnSortConfig;

  /** Column width (CSS value: px, %, fr, auto) */
  width?: string;

  /** Minimum column width */
  minWidth?: string;

  /** Maximum column width */
  maxWidth?: string;

  /** Text alignment */
  align?: ColumnAlign;

  /** Whether the column is sticky (fixed position) */
  sticky?: boolean | 'left' | 'right';

  /**
   * Custom render function
   * @param value - Cell value
   * @param row - Complete row data
   * @param index - Row index
   * @returns React element to render
   */
  render?: (value: any, row: Record<string, any>, index: number) => React.ReactNode;

  /** Badge configuration for badge type */
  badgeConfig?: BadgeConfig;

  /** Date format string (for date/datetime types) */
  dateFormat?: string;

  /** Time format (12-hour or 24-hour) */
  timeFormat?: '12h' | '24h';

  /** Currency symbol (for currency type) */
  currencySymbol?: string;

  /** Currency code (ISO 4217) */
  currencyCode?: string;

  /** Number of decimal places (for number/currency/percentage) */
  decimals?: number;

  /** Thousands separator */
  thousandsSeparator?: string;

  /** Whether the column is hidden */
  hidden?: boolean;

  /** Tooltip text for column header */
  tooltip?: string;

  /** Whether column is resizable */
  resizable?: boolean;

  /** Whether column is reorderable (drag and drop) */
  reorderable?: boolean;

  /**
   * Footer content (for totals, summaries, etc.)
   * Can be a static value or function
   */
  footer?: React.ReactNode | ((data: Record<string, any>[]) => React.ReactNode);

  /**
   * Cell CSS class
   * Can be static or dynamic based on cell value
   */
  cellClassName?: string | ((value: any, row: Record<string, any>) => string);

  /**
   * Header CSS class
   */
  headerClassName?: string;

  /**
   * Truncate long text with ellipsis
   */
  truncate?: boolean;

  /**
   * Number of lines before truncating (for multi-line cells)
   */
  maxLines?: number;

  /**
   * Enable text wrapping
   */
  wrap?: boolean;

  /**
   * Filter configuration for column
   */
  filterable?: boolean | {
    /** Filter type */
    type: 'text' | 'select' | 'number' | 'date' | 'boolean';
    /** Options for select filter */
    options?: Array<{ label: string; value: any }>;
    /** Placeholder text */
    placeholder?: string;
  };

  /**
   * Group rows by this column
   */
  groupable?: boolean;

  /**
   * Aggregate function for grouped data
   */
  aggregate?: 'sum' | 'avg' | 'count' | 'min' | 'max' | ((values: any[]) => any);

  /**
   * Export configuration
   */
  exportable?: boolean;

  /**
   * Custom export formatter
   */
  exportFormat?: (value: any, row: Record<string, any>) => string;
}

/**
 * Column group configuration
 * For multi-level column headers
 */
export interface ColumnGroup {
  /** Group label */
  label: string;

  /** Column keys in this group */
  columns: string[];

  /** Group alignment */
  align?: ColumnAlign;

  /** Group CSS class */
  className?: string;
}

/**
 * Table column preset
 * Reusable column configurations
 */
export interface TableColumnPreset {
  /** Preset name/identifier */
  name: string;

  /** Preset display label */
  label: string;

  /** Column configurations */
  columns: TableColumnConfig[];

  /** Column groups (optional) */
  groups?: ColumnGroup[];
}
