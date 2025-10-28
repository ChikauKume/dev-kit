import { FormFieldConfig, FormSection, FormLayoutConfig } from './FormFieldConfig';
import { ValidationRule } from './ValidationRule';

/**
 * Form submit handler result
 * Allows async validation and error handling
 */
export interface FormSubmitResult {
  /** Whether submission was successful */
  success: boolean;

  /** Server-side validation errors (if any) */
  errors?: Record<string, string>;

  /** Success message */
  message?: string;

  /** Redirect URL after successful submission */
  redirectUrl?: string;
}

/**
 * Form action button configuration
 */
export interface FormActionButton {
  /** Button label */
  label: string;

  /** Button variant */
  variant?: 'primary' | 'secondary' | 'danger' | 'text';

  /** Button icon */
  icon?: string;

  /** Click handler */
  onClick: (formData: Record<string, any>) => void | Promise<void>;

  /** Whether button is disabled */
  disabled?: boolean;

  /** Whether button shows loading state */
  loading?: boolean;
}

/**
 * Props for DynamicFormPage component
 * Main configuration for Laravel-driven dynamic forms
 */
export interface DynamicFormPageProps {
  /** Page title */
  title: string;

  /** Page subtitle/description */
  subtitle?: string;

  /** Form fields configuration (flat structure) */
  fields?: FormFieldConfig[];

  /** Form sections (grouped structure, alternative to flat fields) */
  sections?: FormSection[];

  /**
   * Validation rules for each field
   * Key: field name
   * Value: array of validation rules
   */
  validation: Record<string, ValidationRule[]>;

  /** Initial form data (for edit mode) */
  initialData?: Record<string, any>;

  /** Server-side validation errors (from Laravel) */
  errors?: Record<string, string>;

  /** Whether the form is currently submitting */
  isSubmitting?: boolean;

  /**
   * Submit handler
   * @param data - Form data as key-value pairs
   * @returns Promise that resolves to submit result
   */
  onSubmit: (data: Record<string, any>) => void | Promise<FormSubmitResult | void>;

  /** Cancel handler */
  onCancel?: () => void;

  /**
   * Draft save handler (optional auto-save)
   * @param data - Current form data
   */
  onDraftSave?: (data: Record<string, any>) => void | Promise<void>;

  /**
   * Field change handler (for real-time updates)
   * @param fieldName - Name of changed field
   * @param value - New field value
   * @param allData - Complete form data
   */
  onChange?: (fieldName: string, value: any, allData: Record<string, any>) => void;

  /** Submit button text */
  submitButtonText?: string;

  /** Cancel button text */
  cancelButtonText?: string;

  /** Show draft save button */
  showDraftButton?: boolean;

  /** Draft button text */
  draftButtonText?: string;

  /** Custom action buttons */
  customActions?: FormActionButton[];

  /** Form layout configuration */
  layout?: FormLayoutConfig;

  /** Enable client-side validation on blur */
  validateOnBlur?: boolean;

  /** Enable client-side validation on change */
  validateOnChange?: boolean;

  /** Show validation errors inline */
  showInlineErrors?: boolean;

  /** Show validation summary at top of form */
  showErrorSummary?: boolean;

  /** Auto-save interval in milliseconds */
  autoSaveInterval?: number;

  /** Show unsaved changes warning */
  warnOnUnsavedChanges?: boolean;

  /** Form ID (for multiple forms on same page) */
  formId?: string;

  /** Additional CSS classes */
  className?: string;

  /** Success message display */
  successMessage?: string;

  /** Whether form is in read-only mode */
  readOnly?: boolean;

  /** Loading state (for fetching initial data) */
  loading?: boolean;

  /**
   * Breadcrumb items for navigation
   * Used with InfoPageWrapper
   */
  breadcrumbs?: Array<{
    label: string;
    path?: string;
  }>;

  /**
   * Related actions/links
   * Displayed in page header
   */
  headerActions?: Array<{
    label: string;
    icon?: string;
    onClick: () => void;
    variant?: 'primary' | 'secondary' | 'text';
  }>;

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
 * Props for DynamicForm component (form-only, without page wrapper)
 * Use this for embedding forms within other components
 */
export interface DynamicFormProps extends Omit<DynamicFormPageProps, 'title' | 'subtitle' | 'breadcrumbs' | 'headerActions'> {
  /** Optional form title (for embedded forms) */
  title?: string;

  /** Optional form description */
  description?: string;
}

/**
 * Form field state
 * Internal state management for form fields
 */
export interface FormFieldState {
  /** Current field value */
  value: any;

  /** Whether field has been touched/visited */
  touched: boolean;

  /** Current validation error (if any) */
  error?: string;

  /** Whether field is currently being validated */
  validating: boolean;

  /** Whether field has been modified from initial value */
  dirty: boolean;
}

/**
 * Complete form state
 * Internal state management for entire form
 */
export interface FormState {
  /** Field states by field name */
  fields: Record<string, FormFieldState>;

  /** Whether form is currently submitting */
  isSubmitting: boolean;

  /** Whether form is valid */
  isValid: boolean;

  /** Whether form has unsaved changes */
  isDirty: boolean;

  /** Global form errors (not field-specific) */
  globalErrors: string[];

  /** Submission attempts count */
  submitCount: number;
}
