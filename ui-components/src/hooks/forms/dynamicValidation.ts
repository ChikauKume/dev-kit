import { useState, useCallback, useRef } from 'react';
import type { ValidationRule } from '../../types/forms/ValidationRule';

/**
 * Return type for useDynamicValidation hook
 */
export interface UseDynamicValidationReturn {
  /** Current validation errors by field name */
  errors: Record<string, string>;
  /** Validate a single field */
  validateField: (fieldName: string, value: any, formData?: Record<string, any>) => boolean;
  /** Validate a single field asynchronously */
  validateFieldAsync: (fieldName: string, value: any, formData?: Record<string, any>) => Promise<boolean>;
  /** Validate all fields in the form */
  validateForm: (data: Record<string, any>) => boolean;
  /** Clear error for a specific field */
  clearError: (fieldName: string) => void;
  /** Clear all validation errors */
  clearAllErrors: () => void;
  /** Manually set an error for a field */
  setError: (fieldName: string, message: string) => void;
  /** Whether there are any validation errors */
  hasErrors: boolean;
  /** Set of field names currently being validated asynchronously */
  validatingFields: Set<string>;
  /** Whether any field is currently being validated */
  isValidating: boolean;
}

/**
 * Custom hook for dynamic form validation
 *
 * Validates form fields based on validation rules passed from Laravel.
 * Supports a wide range of validation types including:
 * - required, email, pattern
 * - min/max length and values
 * - numeric, integer, url, date validations
 * - date comparisons (before/after)
 * - custom validators
 * - async validators (server-side validation)
 *
 * @param validationConfig - Object mapping field names to arrays of validation rules
 * @returns Validation state and methods
 *
 * @example Basic validation
 * ```tsx
 * const { errors, validateField, validateForm } = useDynamicValidation({
 *   email: [
 *     { type: 'required', message: 'Email is required' },
 *     { type: 'email', message: 'Invalid email format' }
 *   ],
 *   age: [
 *     { type: 'required', message: 'Age is required' },
 *     { type: 'numeric', message: 'Age must be a number' },
 *     { type: 'min', value: 18, message: 'Must be 18 or older' }
 *   ]
 * });
 * ```
 *
 * @example Async validation
 * ```tsx
 * const { errors, validateFieldAsync, isValidating, validatingFields } = useDynamicValidation({
 *   email: [
 *     { type: 'required', message: 'メールアドレスは必須です' },
 *     { type: 'email', message: 'メールアドレスの形式が正しくありません' },
 *     {
 *       type: 'async',
 *       endpoint: '/api/check-email',
 *       debounce: 500,
 *       message: 'このメールアドレスは既に使用されています'
 *     }
 *   ],
 *   username: [
 *     { type: 'required', message: 'ユーザー名は必須です' },
 *     {
 *       type: 'async',
 *       asyncValidator: async (value) => {
 *         const res = await fetch(`/api/check-username?username=${value}`);
 *         const data = await res.json();
 *         return data.available;
 *       },
 *       debounce: 300,
 *       message: 'このユーザー名は既に使用されています'
 *     }
 *   ]
 * });
 *
 * // Usage
 * <InputField
 *   value={email}
 *   onChange={async (e) => {
 *     setEmail(e.target.value);
 *     await validateFieldAsync('email', e.target.value, formData);
 *   }}
 *   error={errors.email}
 *   loading={validatingFields.has('email')}
 * />
 * ```
 */
export function useDynamicValidation(
  validationConfig: Record<string, ValidationRule[]>
): UseDynamicValidationReturn {
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [validatingFields, setValidatingFields] = useState<Set<string>>(new Set());

  // Debounce timers for each field
  const debounceTimers = useRef<Record<string, NodeJS.Timeout>>({});

  /**
   * Apply a single validation rule to a value
   *
   * @param value - The value to validate
   * @param rule - The validation rule to apply
   * @param formData - Complete form data for cross-field validation
   * @returns Error message if validation fails, null if passes
   */
  const applyRule = useCallback((
    value: any,
    rule: ValidationRule,
    formData?: Record<string, any>
  ): string | null => {
    // Skip async validation rules in synchronous validation
    if (rule.type === 'async') {
      return null;
    }

    switch (rule.type) {
      case 'required':
        if (value === null || value === undefined || value === '' ||
            (typeof value === 'string' && !value.trim())) {
          return rule.message;
        }
        break;

      case 'email':
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (value && !emailRegex.test(String(value))) {
          return rule.message;
        }
        break;

      case 'min':
      case 'minLength':
        if (typeof value === 'string' && value.length < rule.value) {
          return rule.message;
        }
        if (typeof value === 'number' && value < rule.value) {
          return rule.message;
        }
        break;

      case 'max':
      case 'maxLength':
        if (typeof value === 'string' && value.length > rule.value) {
          return rule.message;
        }
        if (typeof value === 'number' && value > rule.value) {
          return rule.message;
        }
        break;

      case 'pattern':
        const regex = new RegExp(rule.value);
        if (value && !regex.test(String(value))) {
          return rule.message;
        }
        break;

      case 'numeric':
        if (value && isNaN(Number(value))) {
          return rule.message;
        }
        break;

      case 'integer':
        if (value && (!Number.isInteger(Number(value)) || isNaN(Number(value)))) {
          return rule.message;
        }
        break;

      case 'url':
        try {
          if (value) {
            new URL(value);
          }
        } catch {
          return rule.message;
        }
        break;

      case 'date':
        const date = new Date(value);
        if (value && isNaN(date.getTime())) {
          return rule.message;
        }
        break;

      case 'dateAfter':
        if (value && rule.value) {
          const inputDate = new Date(value);
          const compareDate = new Date(rule.value);
          if (inputDate <= compareDate) {
            return rule.message;
          }
        }
        break;

      case 'dateBefore':
        if (value && rule.value) {
          const inputDate = new Date(value);
          const compareDate = new Date(rule.value);
          if (inputDate >= compareDate) {
            return rule.message;
          }
        }
        break;

      case 'fileSize':
        // Validate file size (value is File or FileList)
        if (value) {
          const files = value instanceof FileList ? Array.from(value) : [value];
          for (const file of files) {
            if (file instanceof File && file.size > rule.value) {
              return rule.message;
            }
          }
        }
        break;

      case 'custom':
        if (rule.validator && !rule.validator(value, formData)) {
          return rule.message;
        }
        break;

      default:
        console.warn(`Unknown validation rule type: ${rule.type}`);
    }
    return null;
  }, []);

  /**
   * Validate a single field against its rules
   *
   * @param fieldName - Name of the field to validate
   * @param value - Current value of the field
   * @param formData - Complete form data for cross-field validation
   * @returns true if validation passes, false otherwise
   */
  const validateField = useCallback((
    fieldName: string,
    value: any,
    formData?: Record<string, any>
  ): boolean => {
    const rules = validationConfig[fieldName];
    if (!rules || rules.length === 0) return true;

    for (const rule of rules) {
      const error = applyRule(value, rule, formData);
      if (error) {
        setErrors(prev => ({ ...prev, [fieldName]: error }));
        return false;
      }
    }

    // Clear error if validation passes
    setErrors(prev => {
      const newErrors = { ...prev };
      delete newErrors[fieldName];
      return newErrors;
    });
    return true;
  }, [validationConfig, applyRule]);

  /**
   * Validate a single field asynchronously
   * Handles async validation rules with debouncing and API calls
   *
   * @param fieldName - Name of the field to validate
   * @param value - Current value of the field
   * @param formData - Complete form data for cross-field validation
   * @returns Promise resolving to true if validation passes, false otherwise
   */
  const validateFieldAsync = useCallback(async (
    fieldName: string,
    value: any,
    formData?: Record<string, any>
  ): Promise<boolean> => {
    const rules = validationConfig[fieldName];
    if (!rules || rules.length === 0) return true;

    // Find async rules
    const asyncRules = rules.filter(rule => rule.type === 'async');
    if (asyncRules.length === 0) return true;

    // Clear any existing debounce timer for this field
    if (debounceTimers.current[fieldName]) {
      clearTimeout(debounceTimers.current[fieldName]);
    }

    // Return a promise that resolves after debounce
    return new Promise((resolve) => {
      const debounceTime = asyncRules[0].debounce ?? 500;

      debounceTimers.current[fieldName] = setTimeout(async () => {
        // Add field to validating set
        setValidatingFields(prev => new Set(prev).add(fieldName));

        try {
          // Run all async rules
          for (const rule of asyncRules) {
            let isValid = false;

            // Use asyncValidator if provided
            if (rule.asyncValidator) {
              try {
                isValid = await rule.asyncValidator(value, formData);
              } catch (error) {
                console.error(`Async validation error for ${fieldName}:`, error);
                // On error, consider validation as passed (don't block user due to server issues)
                isValid = true;
              }
            }
            // Use endpoint if provided
            else if (rule.endpoint) {
              try {
                const controller = new AbortController();
                const timeoutId = setTimeout(() => controller.abort(), 10000); // 10 second timeout

                const response = await fetch(rule.endpoint, {
                  method: 'POST',
                  headers: {
                    'Content-Type': 'application/json',
                  },
                  body: JSON.stringify({
                    value,
                    fieldName,
                    formData,
                  }),
                  signal: controller.signal,
                });

                clearTimeout(timeoutId);

                if (response.ok) {
                  const data = await response.json();
                  isValid = data.valid === true;

                  // Use server-provided message if available
                  if (!isValid && data.message) {
                    rule.message = data.message;
                  }
                } else {
                  console.error(`API validation error for ${fieldName}:`, response.statusText);
                  // On error, consider validation as passed
                  isValid = true;
                }
              } catch (error) {
                console.error(`Network error during validation for ${fieldName}:`, error);
                // On error, consider validation as passed
                isValid = true;
              }
            }

            // If validation failed, set error and return
            if (!isValid) {
              setErrors(prev => ({ ...prev, [fieldName]: rule.message }));
              setValidatingFields(prev => {
                const newSet = new Set(prev);
                newSet.delete(fieldName);
                return newSet;
              });
              resolve(false);
              return;
            }
          }

          // All async validations passed - clear error
          setErrors(prev => {
            const newErrors = { ...prev };
            delete newErrors[fieldName];
            return newErrors;
          });
          setValidatingFields(prev => {
            const newSet = new Set(prev);
            newSet.delete(fieldName);
            return newSet;
          });
          resolve(true);
        } catch (error) {
          console.error(`Unexpected error during async validation for ${fieldName}:`, error);
          setValidatingFields(prev => {
            const newSet = new Set(prev);
            newSet.delete(fieldName);
            return newSet;
          });
          resolve(true); // Consider as passed on unexpected errors
        }
      }, debounceTime);
    });
  }, [validationConfig]);

  /**
   * Validate all fields in the form
   *
   * @param data - Complete form data
   * @returns true if all validations pass, false otherwise
   */
  const validateForm = useCallback((data: Record<string, any>): boolean => {
    const newErrors: Record<string, string> = {};
    let isValid = true;

    Object.keys(validationConfig).forEach(fieldName => {
      const rules = validationConfig[fieldName];
      const value = data[fieldName];

      for (const rule of rules) {
        const error = applyRule(value, rule, data);
        if (error) {
          newErrors[fieldName] = error;
          isValid = false;
          break; // Stop at first error for this field
        }
      }
    });

    setErrors(newErrors);
    return isValid;
  }, [validationConfig, applyRule]);

  /**
   * Clear validation error for a specific field
   *
   * @param fieldName - Name of the field to clear error for
   */
  const clearError = useCallback((fieldName: string) => {
    setErrors(prev => {
      const newErrors = { ...prev };
      delete newErrors[fieldName];
      return newErrors;
    });
  }, []);

  /**
   * Clear all validation errors
   */
  const clearAllErrors = useCallback(() => {
    setErrors({});
  }, []);

  /**
   * Manually set an error for a field
   * Useful for server-side validation errors
   *
   * @param fieldName - Name of the field
   * @param message - Error message to display
   */
  const setError = useCallback((fieldName: string, message: string) => {
    setErrors(prev => ({ ...prev, [fieldName]: message }));
  }, []);

  const hasErrors = Object.keys(errors).length > 0;
  const isValidating = validatingFields.size > 0;

  return {
    errors,
    validateField,
    validateFieldAsync,
    validateForm,
    clearError,
    clearAllErrors,
    setError,
    hasErrors,
    validatingFields,
    isValidating
  };
}
