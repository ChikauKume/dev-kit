import { useState } from 'react';
import { useFormValidation } from '../forms/formValidation';
import { useFormSubmit } from '../forms/formSubmit';

interface LoginFormData {
  email: string;
  password: string;
  rememberMe?: boolean;
}

export interface UseLoginReturn {
  formData: LoginFormData;
  errors: Record<string, string>;
  isSubmitting: boolean;
  submitError: string | null;
  handleChange: (field: keyof LoginFormData, value: any) => void;
  handleSubmit: (e: React.FormEvent) => Promise<void>;
}

export function useLogin(onSuccess?: () => void, loginSchema?: any): UseLoginReturn {
  const [formData, setFormData] = useState<LoginFormData>({
    email: '',
    password: '',
    rememberMe: false
  });

  const { errors, validateField, validateForm } = useFormValidation<LoginFormData>(loginSchema);

  const { isSubmitting, submitError, handleSubmit: submitForm } = useFormSubmit<LoginFormData>({
    onSubmit: async (data) => {
      // This will be replaced with actual Inertia.js call
      // await router.post('/login', data);
      console.log('Login with:', data);
    },
    onSuccess
  });

  const handleChange = (field: keyof LoginFormData, value: any) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    validateField(field, value);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (validateForm(formData)) {
      await submitForm(formData);
    }
  };

  return {
    formData,
    errors,
    isSubmitting,
    submitError,
    handleChange,
    handleSubmit
  };
}
