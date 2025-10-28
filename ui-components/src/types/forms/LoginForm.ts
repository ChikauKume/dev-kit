/**
 * Login form type definitions
 *
 * Types for the login form based on PagesPage.tsx lines 34-36, 55-59.
 */

/**
 * Login form data structure
 */
export interface LoginFormData {
  /** User email address */
  email: string;

  /** User password */
  password: string;

  /** Optional remember me checkbox */
  rememberMe?: boolean;
}

/**
 * Login form validation errors
 */
export interface LoginFormErrors {
  /** Email field validation error message */
  email?: string;

  /** Password field validation error message */
  password?: string;
}
