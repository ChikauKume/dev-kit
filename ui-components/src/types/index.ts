/**
 * Central type definition exports
 *
 * This file aggregates all type definitions for easy importing throughout the application.
 *
 * Usage:
 * ```typescript
 * import { User, LoginFormData, ApiResponse } from '@/types';
 * ```
 */

// ============================================================================
// Common/Shared Types - Reusable types across the application
// ============================================================================
export * from './common/shared';

// ============================================================================
// Models - Core entity types
// ============================================================================
export * from './models/User';
export * from './models/Notification';
export * from './models/Data';

// ============================================================================
// Forms - Form data and validation error types
// ============================================================================
export * from './forms/LoginForm';
export * from './forms/SignupForm';
export * from './forms/DataForm';
export type {
  ForgotPasswordFormData,
  ForgotPasswordFormErrors,
  PasswordResetFormData,
  PasswordResetFormErrors
} from './forms/PasswordResetForm';

// ============================================================================
// API - Request and response types for backend communication
// ============================================================================
export * from './api/responses';
export * from './api/requests';

// ============================================================================
// Dynamic System Types - Laravel-driven dynamic forms, tables, and dashboards
// ============================================================================

// Form types
export * from './forms/ValidationRule';
export * from './forms/FormFieldConfig';
export * from './forms/FormProps';

// Table types
export * from './tables/TableColumnConfig';
export * from './tables/SearchFilterConfig';
export * from './tables/TableProps';

// Detail types
export * from './detail/DetailFieldConfig';
export * from './detail/DetailPageProps';

// Dashboard types
export * from './dashboard/WidgetConfig';

// Statistics types
export * from './statistics/StatisticsPageConfig';
export * from './statistics/StatisticsProps';
