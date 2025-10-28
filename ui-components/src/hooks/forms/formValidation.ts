import { useState, useCallback } from 'react';

interface ValidationErrors {
  [key: string]: string;
}

export interface UseFormValidationReturn<T> {
  errors: ValidationErrors;
  validateField: (fieldName: keyof T, value: any) => boolean;
  validateForm: (data: T) => boolean;
  clearError: (fieldName: keyof T) => void;
  clearAllErrors: () => void;
  setError: (fieldName: keyof T, message: string) => void;
}

export function useFormValidation<T extends Record<string, any>>(
  validationSchema?: any
): UseFormValidationReturn<T> {
  const [errors, setErrors] = useState<ValidationErrors>({});

  const validateField = useCallback((fieldName: keyof T, value: any): boolean => {
    if (!validationSchema) return true;

    try {
      validationSchema.validateSyncAt(fieldName as string, { [fieldName]: value });
      setErrors(prev => {
        const newErrors = { ...prev };
        delete newErrors[fieldName as string];
        return newErrors;
      });
      return true;
    } catch (error: any) {
      setErrors(prev => ({ ...prev, [fieldName as string]: error.message }));
      return false;
    }
  }, [validationSchema]);

  const validateForm = useCallback((data: T): boolean => {
    if (!validationSchema) return true;

    try {
      validationSchema.validateSync(data, { abortEarly: false });
      setErrors({});
      return true;
    } catch (error: any) {
      const newErrors: ValidationErrors = {};
      error.inner?.forEach((err: any) => {
        if (err.path) {
          newErrors[err.path] = err.message;
        }
      });
      setErrors(newErrors);
      return false;
    }
  }, [validationSchema]);

  const clearError = useCallback((fieldName: keyof T) => {
    setErrors(prev => {
      const newErrors = { ...prev };
      delete newErrors[fieldName as string];
      return newErrors;
    });
  }, []);

  const clearAllErrors = useCallback(() => {
    setErrors({});
  }, []);

  const setError = useCallback((fieldName: keyof T, message: string) => {
    setErrors(prev => ({ ...prev, [fieldName as string]: message }));
  }, []);

  return {
    errors,
    validateField,
    validateForm,
    clearError,
    clearAllErrors,
    setError
  };
}
