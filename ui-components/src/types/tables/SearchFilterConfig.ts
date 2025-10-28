import { FieldOption } from '../forms/FormFieldConfig';

/**
 * Search field type
 * Types of search/filter inputs available
 */
export type SearchFieldType =
  | 'text'
  | 'select'
  | 'multiselect'
  | 'date'
  | 'daterange'
  | 'number'
  | 'numberrange'
  | 'checkbox'
  | 'radio'
  | 'boolean';

/**
 * Search operator for advanced filtering
 */
export type SearchOperator =
  | 'equals'
  | 'notEquals'
  | 'contains'
  | 'notContains'
  | 'startsWith'
  | 'endsWith'
  | 'greaterThan'
  | 'greaterThanOrEqual'
  | 'lessThan'
  | 'lessThanOrEqual'
  | 'between'
  | 'in'
  | 'notIn'
  | 'isNull'
  | 'isNotNull';

/**
 * Search field configuration
 * Defines a single search/filter field
 */
export interface SearchFieldConfig {
  /** Field name (matches column key or data property) */
  name: string;

  /** Field label */
  label: string;

  /** Field type */
  type: SearchFieldType;

  /** Placeholder text */
  placeholder?: string;

  /** Options for select/multiselect/radio/checkbox types */
  options?: FieldOption[];

  /** Default value */
  defaultValue?: any;

  /** Default operator for advanced filters */
  defaultOperator?: SearchOperator;

  /** Available operators for this field */
  operators?: SearchOperator[];

  /** Minimum value (for number/date types) */
  min?: number | string;

  /** Maximum value (for number/date types) */
  max?: number | string;

  /** Step value (for number type) */
  step?: number;

  /** Date format string */
  dateFormat?: string;

  /** Field width in grid */
  width?: 'full' | 'half' | 'third' | 'quarter';

  /** Grid column start position (1-based, for precise grid placement) */
  gridColumn?: number;

  /** Grid row start position (1-based, for precise grid placement) */
  gridRow?: number;

  /** Grid column span (how many columns to occupy) */
  gridColumnSpan?: number;

  /** Display order (lower numbers appear first, useful for reordering without changing array order) */
  order?: number;

  /** Whether field is disabled */
  disabled?: boolean;

  /** Helper text */
  helperText?: string;

  /** Icon to display with field */
  icon?: string;

  /**
   * Custom validation function
   * @param value - Field value to validate
   * @returns true if valid, error message if invalid
   */
  validate?: (value: any) => boolean | string;

  /**
   * Transform value before submitting to backend
   * @param value - Raw field value
   * @returns Transformed value
   */
  transform?: (value: any) => any;

  /**
   * Conditional visibility based on other field values
   * @param values - All current filter values
   * @returns true if field should be visible
   */
  visible?: (values: Record<string, any>) => boolean;
}

/**
 * Search filter group
 * Groups related filters together
 */
export interface SearchFilterGroup {
  /** Group unique identifier */
  id: string;

  /** Group label */
  label: string;

  /** Fields in this group */
  fields: SearchFieldConfig[];

  /** Whether group is collapsible */
  collapsible?: boolean;

  /** Initial collapsed state */
  defaultCollapsed?: boolean;

  /** Group icon */
  icon?: string;
}

/**
 * Search and filter panel configuration
 * Main configuration for search/filter UI
 */
export interface SearchFilterPanelConfig {
  /** Search fields (flat structure) */
  fields?: SearchFieldConfig[];

  /** Search filter groups (grouped structure) */
  groups?: SearchFilterGroup[];

  /** Whether panel is collapsible */
  collapsible?: boolean;

  /** Initial collapsed state */
  defaultCollapsed?: boolean;

  /** Panel title */
  title?: string;

  /** Panel description */
  description?: string;

  /** Show clear/reset button */
  showClearButton?: boolean;

  /** Clear button text */
  clearButtonText?: string;

  /** Show search/apply button */
  showSearchButton?: boolean;

  /** Search button text */
  searchButtonText?: string;

  /** Enable live search (search on change) */
  liveSearch?: boolean;

  /** Debounce delay for live search (ms) */
  debounceDelay?: number;

  /** Show active filter count */
  showFilterCount?: boolean;

  /** Enable saved filter presets */
  enablePresets?: boolean;

  /** Saved filter presets */
  presets?: SearchFilterPreset[];

  /** Layout mode */
  layout?: 'horizontal' | 'vertical' | 'inline';

  /** Number of columns in horizontal layout */
  columns?: 1 | 2 | 3 | 4;

  /** Gap between fields (CSS gap value, e.g., '16px', '1rem', 'var(--spacing-4)') */
  gap?: string;

  /** Row gap between fields (if different from column gap) */
  rowGap?: string;

  /** Column gap between fields (if different from row gap) */
  columnGap?: string;

  /** Position of panel */
  position?: 'top' | 'left' | 'right';

  /** Additional CSS classes */
  className?: string;

  /** Border color for input fields (e.g., '#d1d5db') */
  borderColor?: string;
}

/**
 * Saved filter preset
 * Allows users to save and reuse filter combinations
 */
export interface SearchFilterPreset {
  /** Preset unique identifier */
  id: string;

  /** Preset name */
  name: string;

  /** Preset description */
  description?: string;

  /** Filter values */
  values: Record<string, any>;

  /** Whether preset is default */
  isDefault?: boolean;

  /** Whether preset is shared (vs user-specific) */
  isShared?: boolean;

  /** Preset icon */
  icon?: string;
}

/**
 * Active filter value
 * Represents a single active filter
 */
export interface ActiveFilter {
  /** Field name */
  field: string;

  /** Field label */
  label: string;

  /** Operator */
  operator: SearchOperator;

  /** Filter value */
  value: any;

  /** Display value (formatted) */
  displayValue: string;
}

/**
 * Search filter state
 * Current state of search/filter panel
 */
export interface SearchFilterState {
  /** Current filter values */
  values: Record<string, any>;

  /** Active filters */
  activeFilters: ActiveFilter[];

  /** Number of active filters */
  activeCount: number;

  /** Currently selected preset */
  activePreset?: string;

  /** Whether panel is expanded */
  isExpanded: boolean;

  /** Whether filters have been modified from preset */
  isDirty: boolean;
}
