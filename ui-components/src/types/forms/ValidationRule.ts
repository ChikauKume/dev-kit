/**
 * Validation rule type definition
 * Supports common validation patterns used in Laravel
 */
export type ValidationRuleType =
  | 'required'
  | 'email'
  | 'min'
  | 'max'
  | 'minLength'
  | 'maxLength'
  | 'pattern'
  | 'custom'
  | 'date'
  | 'dateAfter'
  | 'dateBefore'
  | 'numeric'
  | 'integer'
  | 'url'
  | 'fileSize'
  | 'confirmed'
  | 'alphanumeric'
  | 'alpha'
  | 'async';

/**
 * Individual validation rule
 * Defines a single validation constraint for a form field
 */
export interface ValidationRule {
  /** Type of validation to perform */
  type: ValidationRuleType;

  /**
   * Value for the validation (e.g., min value, pattern regex)
   * - For min/max: number value
   * - For minLength/maxLength: number value
   * - For pattern: regex string or RegExp
   * - For dateAfter/dateBefore: date string or field name
   * - For confirmed: field name to match
   */
  value?: any;

  /** Error message to display when validation fails */
  message: string;

  /**
   * Optional: Custom validation function
   * @param value - The field value to validate
   * @param formData - Complete form data for cross-field validation
   * @returns true if valid, false if invalid
   */
  validator?: (value: any, formData?: Record<string, any>) => boolean;

  /**
   * Optional: Async validation function
   * Used for server-side validation checks
   * @param value - The field value to validate
   * @param formData - Complete form data for cross-field validation
   * @returns Promise resolving to true if valid, false if invalid
   */
  asyncValidator?: (value: any, formData?: Record<string, any>) => Promise<boolean>;

  /**
   * Optional: API endpoint for server-side validation
   * When provided, a POST request will be sent with { value, fieldName, formData }
   * Expected response: { valid: boolean, message?: string }
   * Example: '/api/check-email'
   */
  endpoint?: string;

  /**
   * Optional: Debounce time in milliseconds for async validation
   * Default: 500ms
   * Prevents excessive API calls during rapid user input
   */
  debounce?: number;
}

/**
 * Field-level validation configuration
 * Groups all validation rules for a single field
 */
export interface FieldValidation {
  /** Name of the field to validate */
  fieldName: string;

  /** Array of validation rules for this field */
  rules: ValidationRule[];
}

/**
 * Complete form validation configuration
 * Maps field names to their validation rules
 */
export interface FormValidationConfig {
  /**
   * Validation rules for each field
   * Key: field name
   * Value: array of validation rules
   */
  fields: Record<string, ValidationRule[]>;
}

/**
 * Validation error result
 * Contains validation failure information
 */
export interface ValidationError {
  /** Field name that failed validation */
  field: string;

  /** Error message */
  message: string;

  /** Rule type that failed */
  ruleType: ValidationRuleType;
}

/**
 * Validation result
 * Contains validation status and any errors
 */
export interface ValidationResult {
  /** Whether validation passed */
  isValid: boolean;

  /** Array of validation errors (empty if valid) */
  errors: ValidationError[];

  /**
   * Errors mapped by field name
   * Key: field name
   * Value: error message
   */
  errorsByField: Record<string, string>;
}
