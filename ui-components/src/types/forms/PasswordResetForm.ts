/**
 * Password reset form type definitions
 *
 * Types for forgot password and password reset forms based on PagesPage.tsx lines 38-66.
 */

/**
 * Forgot password form data (email submission)
 */
export interface ForgotPasswordFormData {
  /** Email address for password reset */
  email: string;
}

/**
 * Forgot password form validation errors
 */
export interface ForgotPasswordFormErrors {
  /** Email field validation error message */
  email?: string;
}

/**
 * Password reset form data (new password submission)
 */
export interface PasswordResetFormData {
  /** New password */
  newPassword: string;

  /** Password confirmation */
  confirmPassword: string;
}

/**
 * Password reset form validation errors
 */
export interface PasswordResetFormErrors {
  /** New password field validation error message */
  newPassword?: string;

  /** Confirm password field validation error message */
  confirmPassword?: string;
}
