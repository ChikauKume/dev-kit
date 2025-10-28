import { useState, useCallback } from 'react';
import { useDynamicValidation } from './dynamicValidation';
import type { ValidationRule } from '../../types/forms/ValidationRule';

/**
 * Options for useDynamicForm hook
 */
export interface UseDynamicFormOptions {
  /** Initial form data */
  initialData?: Record<string, any>;
  /** Validation rules by field name */
  validation: Record<string, ValidationRule[]>;
  /** Form submission handler */
  onSubmit: (data: Record<string, any>) => void | Promise<void>;
  /** Success callback */
  onSuccess?: () => void;
  /** Error callback */
  onError?: (error: Error) => void;
}

/**
 * Return type for useDynamicForm hook
 */
export interface UseDynamicFormReturn {
  /** Current form data */
  formData: Record<string, any>;
  /** Current validation errors */
  errors: Record<string, string>;
  /** Whether form is currently submitting */
  isSubmitting: boolean;
  /** Whether form has been modified from initial state */
  isDirty: boolean;
  /** Whether there are any validation errors */
  hasErrors: boolean;
  /** Set a single field value */
  setValue: (fieldName: string, value: any) => void;
  /** Set multiple field values */
  setValues: (values: Record<string, any>) => void;
  /** Handle field change (clears error on change) */
  handleChange: (fieldName: string, value: any) => void;
  /** Handle field blur (validates on blur) */
  handleBlur: (fieldName: string) => void;
  /** Handle form submission */
  handleSubmit: (e?: React.FormEvent) => Promise<void>;
  /** Reset form to initial state */
  resetForm: () => void;
  /** Validate a single field */
  validateField: (fieldName: string, value: any) => boolean;
  /** Validate entire form */
  validateForm: () => boolean;
  /** Clear error for a specific field */
  clearError: (fieldName: string) => void;
  /** Set error for a specific field */
  setError: (fieldName: string, message: string) => void;
}

/**
 * Custom hook for managing dynamic forms
 *
 * Combines form state management, validation, and submission logic.
 * Integrates with useDynamicValidation for comprehensive validation support.
 *
 * Features:
 * - State management for form fields
 * - Real-time and on-blur validation
 * - Dirty state tracking
 * - Async form submission with loading states
 * - Error handling
 * - Form reset capability
 *
 * @param options - Configuration options
 * @returns Form state and handlers
 *
 * @example
 * ```tsx
 * const form = useDynamicForm({
 *   initialData: { name: '', email: '' },
 *   validation: {
 *     name: [{ type: 'required', message: 'Name is required' }],
 *     email: [
 *       { type: 'required', message: 'Email is required' },
 *       { type: 'email', message: 'Invalid email' }
 *     ]
 *   },
 *   onSubmit: async (data) => {
 *     await api.submitForm(data);
 *   },
 *   onSuccess: () => {
 *     console.log('Form submitted successfully');
 *   }
 * });
 *
 * return (
 *   <form onSubmit={form.handleSubmit}>
 *     <input
 *       value={form.formData.name}
 *       onChange={(e) => form.handleChange('name', e.target.value)}
 *       onBlur={() => form.handleBlur('name')}
 *     />
 *     {form.errors.name && <span>{form.errors.name}</span>}
 *     <button type="submit" disabled={form.isSubmitting}>
 *       Submit
 *     </button>
 *   </form>
 * );
 * ```
 */
export function useDynamicForm({
  initialData = {},
  validation,
  onSubmit,
  onSuccess,
  onError
}: UseDynamicFormOptions): UseDynamicFormReturn {
  const [formData, setFormData] = useState<Record<string, any>>(initialData);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [touchedFields, setTouchedFields] = useState<Set<string>>(new Set());

  const {
    errors,
    validateField: validate,
    validateFieldAsync,
    validateForm: validateAll,
    clearError,
    setError,
    hasErrors
  } = useDynamicValidation(validation);

  // Track if form has been modified from initial state
  const isDirty = JSON.stringify(formData) !== JSON.stringify(initialData);

  /**
   * Set a single field value without clearing errors
   *
   * @param fieldName - Name of the field
   * @param value - New value for the field
   */
  const setValue = useCallback((fieldName: string, value: any) => {
    setFormData(prev => ({ ...prev, [fieldName]: value }));
  }, []);

  /**
   * Set multiple field values at once
   *
   * @param values - Object with field names and values
   */
  const setValues = useCallback((values: Record<string, any>) => {
    setFormData(prev => ({ ...prev, ...values }));
  }, []);

  /**
   * Handle field change
   * Updates value and clears any existing error for the field
   *
   * @param fieldName - Name of the field
   * @param value - New value for the field
   */
  const handleChange = useCallback((fieldName: string, value: any) => {
    setValue(fieldName, value);
    clearError(fieldName);
  }, [setValue, clearError]);

  /**
   * Handle field blur
   * Validates the field when user leaves it (if it was touched)
   * Also triggers async validation if configured
   *
   * @param fieldName - Name of the field
   */
  const handleBlur = useCallback(async (fieldName: string) => {
    setTouchedFields(prev => new Set(prev).add(fieldName));
    // Run synchronous validation first
    validate(fieldName, formData[fieldName], formData);
    // Then run async validation if configured
    await validateFieldAsync(fieldName, formData[fieldName], formData);
  }, [formData, validate, validateFieldAsync]);

  /**
   * Validate a single field
   *
   * @param fieldName - Name of the field to validate
   * @param value - Value to validate
   * @returns true if validation passes, false otherwise
   */
  const validateField = useCallback((fieldName: string, value: any): boolean => {
    return validate(fieldName, value, formData);
  }, [formData, validate]);

  /**
   * Validate entire form
   *
   * @returns true if all validations pass, false otherwise
   */
  const validateForm = useCallback((): boolean => {
    return validateAll(formData);
  }, [formData, validateAll]);

  /**
   * Handle form submission
   * Validates form, calls onSubmit, and handles success/error callbacks
   *
   * @param e - Optional form event (will be prevented)
   */
  const handleSubmit = useCallback(async (e?: React.FormEvent) => {
    if (e) {
      e.preventDefault();
    }

    // Validate all fields before submission
    if (!validateForm()) {
      // Scroll to top of page when validation fails
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }

    setIsSubmitting(true);

    try {
      await onSubmit(formData);
      onSuccess?.();
    } catch (error) {
      const err = error instanceof Error ? error : new Error('Submit failed');
      onError?.(err);
      console.error('Form submission error:', err);
    } finally {
      setIsSubmitting(false);
    }
  }, [formData, validateForm, onSubmit, onSuccess, onError]);

  /**
   * Reset form to initial state
   * Clears all values, errors, and touched fields
   */
  const resetForm = useCallback(() => {
    setFormData(initialData);
    setTouchedFields(new Set());
  }, [initialData]);

  return {
    formData,
    errors,
    isSubmitting,
    isDirty,
    hasErrors,
    setValue,
    setValues,
    handleChange,
    handleBlur,
    handleSubmit,
    resetForm,
    validateField,
    validateForm,
    clearError,
    setError
  };
}
