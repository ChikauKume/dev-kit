/**
 * API request type definitions
 *
 * Request payload structures for API endpoints to be sent to Laravel backend.
 */

import { LoginFormData } from '../forms/LoginForm';
import { SignupFormData } from '../forms/SignupForm';
import { DataFormData } from '../forms/DataForm';
import { ForgotPasswordFormData, PasswordResetFormData } from '../forms/PasswordResetForm';

/**
 * Login request payload
 */
export interface LoginRequest extends LoginFormData {}

/**
 * Signup request payload
 *
 * Transforms frontend camelCase to Laravel snake_case convention
 */
export interface SignupRequest extends Omit<SignupFormData, 'passwordConfirmation'> {
  /** Password confirmation (Laravel convention: snake_case) */
  password_confirmation: string;
}

/**
 * Forgot password request payload
 */
export interface ForgotPasswordRequest extends ForgotPasswordFormData {}

/**
 * Password reset request payload
 *
 * Includes token from reset URL
 */
export interface PasswordResetRequest {
  /** Password reset token from email link */
  token: string;

  /** User's email address */
  email: string;

  /** New password */
  password: string;

  /** Password confirmation */
  password_confirmation: string;
}

/**
 * Data create request payload
 */
export interface DataCreateRequest extends DataFormData {}

/**
 * Data update request payload
 *
 * All fields are optional for partial updates (PATCH)
 */
export interface DataUpdateRequest extends Partial<DataFormData> {
  /** ID of the data entry to update */
  id: number;
}

/**
 * Data delete request payload
 */
export interface DataDeleteRequest {
  /** ID of the data entry to delete */
  id: number;
}

/**
 * Notification mark as read request
 */
export interface NotificationReadRequest {
  /** ID of notification to mark as read */
  id: number;
}

/**
 * Bulk notification mark as read request
 */
export interface NotificationBulkReadRequest {
  /** Array of notification IDs to mark as read */
  ids: number[];
}
