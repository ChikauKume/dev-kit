import type * as React from 'react';

/**
 * Detail field display type
 * Determines how field values are rendered in detail/show pages
 * Mirrors TableColumnConfig data types for consistency
 */
export type DetailFieldType =
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
  | 'url'
  | 'list'
  | 'json'
  | 'markdown'
  | 'html'
  | 'file'
  | 'color'
  | 'progress'
  | 'rating'
  | 'custom';

/**
 * Field alignment for detail display
 */
export type DetailFieldAlign = 'left' | 'center' | 'right';

/**
 * Badge configuration for badge type fields
 * Maps data values to badge styles
 */
export interface DetailBadgeConfig {
  [value: string]: {
    /** Display label for the badge */
    label: string;
    /** Badge color variant */
    variant: 'success' | 'warning' | 'error' | 'info' | 'default' | 'primary' | 'secondary';
  };
}

/**
 * List item configuration for list type fields
 */
export interface DetailListConfig {
  /** Key to extract from list items (if array of objects) */
  itemKey?: string;

  /** Label key for display (if array of objects) */
  itemLabel?: string;

  /** Render function for custom list items */
  renderItem?: (item: any, index: number) => React.ReactNode;

  /** List style */
  style?: 'bullets' | 'numbers' | 'none' | 'inline';

  /** Maximum items to show initially */
  maxItems?: number;

  /** Show "see more" button when maxItems is reached */
  showMoreButton?: boolean;
}

/**
 * Progress bar configuration for progress type fields
 */
export interface DetailProgressConfig {
  /** Maximum value (defaults to 100) */
  max?: number;

  /** Minimum value (defaults to 0) */
  min?: number;

  /** Show percentage label */
  showLabel?: boolean;

  /** Progress bar color */
  color?: 'primary' | 'success' | 'warning' | 'error' | 'info';

  /** Progress bar size */
  size?: 'sm' | 'md' | 'lg';
}

/**
 * Rating configuration for rating type fields
 */
export interface DetailRatingConfig {
  /** Maximum rating value (defaults to 5) */
  max?: number;

  /** Icon for filled stars */
  icon?: string;

  /** Icon for empty stars */
  emptyIcon?: string;

  /** Allow half ratings */
  allowHalf?: boolean;

  /** Read-only (always true for detail pages) */
  readOnly?: boolean;

  /** Rating color */
  color?: 'primary' | 'warning' | 'error' | 'success';
}

/**
 * File display configuration for file type fields
 */
export interface DetailFileConfig {
  /** Show file size */
  showSize?: boolean;

  /** Show file type/extension */
  showType?: boolean;

  /** Show download button */
  showDownload?: boolean;

  /** Show preview (for images/PDFs) */
  showPreview?: boolean;

  /** Preview size */
  previewSize?: 'sm' | 'md' | 'lg' | 'full';

  /** Download handler */
  onDownload?: (fileUrl: string, fileName?: string) => void;
}

/**
 * Detail field configuration
 * Defines how a single field is displayed in a detail/show page
 */
export interface DetailFieldConfig {
  /** Unique field key (matches data property) */
  key: string;

  /** Display label for the field */
  label: string;

  /** Display type for formatting */
  type?: DetailFieldType;

  /** Field value alignment */
  align?: DetailFieldAlign;

  /**
   * Custom render function
   * @param value - Field value
   * @param data - Complete data object
   * @returns React element to render
   */
  render?: (value: any, data: Record<string, any>) => React.ReactNode;

  /** Badge configuration for badge type */
  badgeConfig?: DetailBadgeConfig;

  /** List configuration for list type */
  listConfig?: DetailListConfig;

  /** Progress configuration for progress type */
  progressConfig?: DetailProgressConfig;

  /** Rating configuration for rating type */
  ratingConfig?: DetailRatingConfig;

  /** File configuration for file type */
  fileConfig?: DetailFileConfig;

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

  /** Whether the field is hidden */
  hidden?: boolean;

  /** Tooltip text for field label */
  tooltip?: string;

  /**
   * Field CSS class
   * Can be static or dynamic based on field value
   */
  className?: string | ((value: any, data: Record<string, any>) => string);

  /**
   * Label CSS class
   */
  labelClassName?: string;

  /**
   * Value CSS class
   */
  valueClassName?: string;

  /**
   * Truncate long text with ellipsis
   */
  truncate?: boolean;

  /**
   * Number of lines before truncating (for multi-line values)
   */
  maxLines?: number;

  /**
   * Enable text wrapping
   */
  wrap?: boolean;

  /**
   * Copy to clipboard button
   */
  copyable?: boolean;

  /**
   * Show empty state text when value is null/undefined/empty
   */
  emptyText?: string;

  /**
   * Field width in detail layout
   */
  width?: 'full' | 'half' | 'third' | 'two-thirds' | 'quarter';

  /**
   * Conditional visibility
   * Function that determines if field should be shown
   * @param data - Complete data object
   * @returns true if field should be visible
   */
  visible?: (data: Record<string, any>) => boolean;

  /**
   * Prefix icon or text
   */
  prefix?: string;

  /**
   * Suffix icon or text
   */
  suffix?: string;

  /**
   * Format value before display (for simple transformations)
   * For complex formatting, use render function
   * @param value - Raw value
   * @returns Formatted string
   */
  format?: (value: any) => string;

  /**
   * Link configuration (for clickable values)
   */
  link?: {
    /** URL pattern (can use {field} placeholders) */
    href: string | ((value: any, data: Record<string, any>) => string);
    /** Open in new tab */
    target?: '_blank' | '_self';
    /** Link text (defaults to value) */
    text?: string | ((value: any, data: Record<string, any>) => string);
  };
}

/**
 * Detail section grouping
 * Groups related fields into collapsible/expandable sections
 */
export interface DetailSection {
  /** Section unique identifier */
  id: string;

  /** Section title */
  title: string;

  /** Section description */
  description?: string;

  /** Fields in this section */
  fields: DetailFieldConfig[];

  /** Whether section is collapsible */
  collapsible?: boolean;

  /** Initial collapsed state */
  defaultCollapsed?: boolean;

  /** Icon for section header */
  icon?: string;

  /**
   * Conditional visibility
   * Function that determines if section should be shown
   * @param data - Complete data object
   * @returns true if section should be visible
   */
  visible?: (data: Record<string, any>) => boolean;

  /** Additional CSS classes for section */
  className?: string;

  /** Section layout */
  layout?: 'horizontal' | 'vertical' | 'grid';

  /** Number of columns for grid layout */
  columns?: 1 | 2 | 3 | 4;
}

/**
 * Detail tab configuration
 * For organizing fields into tabbed interface
 */
export interface DetailTab {
  /** Tab unique identifier */
  id: string;

  /** Tab label */
  label: string;

  /** Tab icon */
  icon?: string;

  /** Sections in this tab (alternative to flat fields) */
  sections?: DetailSection[];

  /** Fields in this tab (flat structure, alternative to sections) */
  fields?: DetailFieldConfig[];

  /**
   * Custom content renderer (alternative to fields/sections)
   * @param data - Complete data object
   * @returns Custom tab content
   */
  renderContent?: (data: Record<string, any>) => React.ReactNode;

  /**
   * Conditional visibility
   * Function that determines if tab should be shown
   * @param data - Complete data object
   * @returns true if tab should be visible
   */
  visible?: (data: Record<string, any>) => boolean;

  /** Badge count/indicator for tab */
  badge?: number | string | ((data: Record<string, any>) => number | string);

  /** Whether tab is disabled */
  disabled?: boolean;
}

/**
 * Detail layout configuration
 * Controls overall detail page appearance
 */
export interface DetailLayoutConfig {
  /** Layout type */
  type: 'vertical' | 'horizontal' | 'grid' | 'tabs' | 'cards';

  /** Number of columns for grid/horizontal layouts */
  columns?: 1 | 2 | 3 | 4;

  /** Gap between fields */
  gap?: 'sm' | 'md' | 'lg';

  /** Label position */
  labelPosition?: 'top' | 'left' | 'inline';

  /** Label width (when labelPosition is 'left') */
  labelWidth?: string;

  /** Show field borders */
  showBorders?: boolean;

  /** Responsive breakpoints */
  responsive?: {
    /** Columns on tablet (768px+) */
    tablet?: 1 | 2 | 3;
    /** Columns on mobile (<768px) */
    mobile?: 1;
  };

  /** Background style for sections */
  sectionBackground?: 'white' | 'gray' | 'transparent';

  /** Section border style */
  sectionBorder?: boolean;
}
