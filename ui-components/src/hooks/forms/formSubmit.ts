import { useState, useCallback } from 'react';

interface UseFormSubmitOptions<T> {
  onSubmit: (data: T) => Promise<void>;
  onSuccess?: () => void;
  onError?: (error: Error) => void;
}

export interface UseFormSubmitReturn<T> {
  isSubmitting: boolean;
  submitError: string | null;
  handleSubmit: (data: T) => Promise<void>;
  resetSubmitState: () => void;
}

export function useFormSubmit<T>({
  onSubmit,
  onSuccess,
  onError
}: UseFormSubmitOptions<T>): UseFormSubmitReturn<T> {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);

  const handleSubmit = useCallback(async (data: T) => {
    setIsSubmitting(true);
    setSubmitError(null);

    try {
      await onSubmit(data);
      onSuccess?.();
    } catch (error) {
      const errorMessage = error instanceof Error ? error.message : 'エラーが発生しました';
      setSubmitError(errorMessage);
      onError?.(error instanceof Error ? error : new Error(errorMessage));
    } finally {
      setIsSubmitting(false);
    }
  }, [onSubmit, onSuccess, onError]);

  const resetSubmitState = useCallback(() => {
    setIsSubmitting(false);
    setSubmitError(null);
  }, []);

  return {
    isSubmitting,
    submitError,
    handleSubmit,
    resetSubmitState
  };
}
