/**
 * Supported form field types
 * Covers all standard HTML5 input types and common form controls
 */
export type FormFieldType =
  | 'text'
  | 'email'
  | 'password'
  | 'tel'
  | 'url'
  | 'number'
  | 'date'
  | 'datetime-local'
  | 'time'
  | 'month'
  | 'week'
  | 'select'
  | 'multiselect'
  | 'textarea'
  | 'checkbox'
  | 'radio'
  | 'file'
  | 'color'
  | 'range'
  | 'search'
  | 'hidden';

/**
 * Option for select, radio, or checkbox fields
 * Represents a single selectable choice
 */
export interface FieldOption {
  /** Option value (what gets submitted) */
  value: string | number;

  /** Display label (what user sees) */
  label: string;

  /** Optional: Disabled state */
  disabled?: boolean;

  /** Optional: Additional description/help text */
  description?: string;

  /** Optional: Icon name to display with option */
  icon?: string;
}

/**
 * Form field configuration
 * Defines a single field in a dynamic form
 */
export interface FormFieldConfig {
  /** Unique field name (matches database column) */
  name: string;

  /** Display label for the field */
  label: string;

  /** Input type */
  type: FormFieldType;

  /** Placeholder text */
  placeholder?: string;

  /** Whether the field is required */
  required?: boolean;

  /** Default value */
  defaultValue?: any;

  /** Options for select/radio/checkbox fields */
  options?: FieldOption[];

  /** Helper text displayed below the field */
  helperText?: string;

  /** Number of rows for textarea */
  rows?: number;

  /** Number of columns for textarea */
  cols?: number;

  /** Minimum value for number/date inputs */
  min?: number | string;

  /** Maximum value for number/date inputs */
  max?: number | string;

  /** Step value for number/range inputs */
  step?: number;

  /** Maximum length for text inputs */
  maxLength?: number;

  /** Pattern regex for text inputs */
  pattern?: string;

  /** Whether the field is disabled */
  disabled?: boolean;

  /** Whether the field is read-only */
  readOnly?: boolean;

  /** Whether multiple selections are allowed (for select/file) */
  multiple?: boolean;

  /** Accepted file types (for file input) */
  accept?: string;

  /** Autocomplete attribute value */
  autoComplete?: string;

  /** Auto focus on mount */
  autoFocus?: boolean;

  /** Input mode for mobile keyboards */
  inputMode?: 'text' | 'numeric' | 'decimal' | 'tel' | 'email' | 'url' | 'search';

  /** Additional CSS classes */
  className?: string;

  /** Wrapper CSS classes */
  wrapperClassName?: string;

  /** Field width (grid columns, e.g., "full", "half", "third") */
  width?: 'full' | 'half' | 'third' | 'two-thirds' | 'quarter';

  /**
   * Conditional visibility
   * Function that determines if field should be shown
   * @param formData - Current form values
   * @returns true if field should be visible
   */
  visible?: (formData: Record<string, any>) => boolean;

  /**
   * Conditional disabled state
   * Function that determines if field should be disabled
   * @param formData - Current form values
   * @returns true if field should be disabled
   */
  conditionalDisabled?: (formData: Record<string, any>) => boolean;

  /** Custom attributes */
  attributes?: Record<string, any>;

  /** Prefix content (icon, text, etc.) */
  prefix?: string;

  /** Suffix content (icon, text, etc.) */
  suffix?: string;

  /** Custom render function for complex fields */
  render?: (props: {
    value: any;
    onChange: (value: any) => void;
    onBlur: () => void;
    error?: string;
  }) => React.ReactNode;
}

/**
 * Form section grouping
 * Groups related fields into collapsible sections
 */
export interface FormSection {
  /** Section unique identifier */
  id: string;

  /** Section title */
  title: string;

  /** Section description */
  description?: string;

  /** Fields in this section */
  fields: FormFieldConfig[];

  /** Whether section is collapsible */
  collapsible?: boolean;

  /** Initial collapsed state */
  defaultCollapsed?: boolean;

  /** Icon for section header */
  icon?: string;

  /**
   * Conditional visibility
   * Function that determines if section should be shown
   * @param formData - Current form values
   * @returns true if section should be visible
   */
  visible?: (formData: Record<string, any>) => boolean;

  /** Additional CSS classes for section */
  className?: string;
}

/**
 * Form layout configuration
 * Controls overall form appearance and behavior
 */
export interface FormLayoutConfig {
  /** Number of columns in the form grid */
  columns?: 1 | 2 | 3 | 4;

  /** Gap between fields */
  gap?: 'sm' | 'md' | 'lg';

  /** Label position */
  labelPosition?: 'top' | 'left' | 'inline';

  /** Label width (when labelPosition is 'left') */
  labelWidth?: string;

  /** Show required indicator (*) */
  showRequiredIndicator?: boolean;

  /** Responsive breakpoints */
  responsive?: {
    /** Columns on tablet (768px+) */
    tablet?: 1 | 2 | 3;
    /** Columns on mobile (<768px) */
    mobile?: 1;
  };
}
