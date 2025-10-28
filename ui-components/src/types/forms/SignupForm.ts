/**
 * Signup form type definitions
 *
 * Types for the signup/registration form based on PagesPage.tsx lines 46-74.
 */

/**
 * Signup form data structure
 */
export interface SignupFormData {
  /** User's full name */
  name: string;

  /** User's email address */
  email: string;

  /** User's phone number (optional) */
  phone?: string;

  /** User's password */
  password: string;

  /** Password confirmation for validation */
  passwordConfirmation: string;

  /** Whether user agreed to terms and conditions */
  agreeToTerms: boolean;
}

/**
 * Signup form validation errors
 */
export interface SignupFormErrors {
  /** Name field validation error message */
  name?: string;

  /** Email field validation error message */
  email?: string;

  /** Phone field validation error message */
  phone?: string;

  /** Password field validation error message */
  password?: string;

  /** Password confirmation field validation error message (matches PagesPage.tsx usage) */
  passwordConfirm?: string;

  /** Terms agreement validation error message */
  agreeToTerms?: string;
}
