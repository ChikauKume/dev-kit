/**
 * Shared type definitions used across the application
 *
 * This file contains common types that are reused in multiple components
 * to ensure consistency and type safety throughout the codebase.
 */

/**
 * Button variant types
 * Defines the visual style variations for buttons
 */
export type ButtonVariant = 'primary' | 'secondary' | 'text' | 'danger' | 'success' | 'warning';

/**
 * Alert/Message variant types
 * Defines the visual style variations for alerts and messages
 */
export type AlertVariant = 'success' | 'error' | 'warning' | 'info' | 'default';

/**
 * Badge variant types
 * Defines the visual style variations for badges
 */
export type BadgeVariant = 'primary' | 'secondary' | 'success' | 'warning' | 'error' | 'info' | 'default';

/**
 * Component size types
 * Standard size variations for components
 */
export type Size = 'sm' | 'md' | 'lg';

/**
 * Text alignment types
 */
export type Align = 'left' | 'center' | 'right';

/**
 * Breadcrumb item interface
 * Used for navigation breadcrumb trails
 */
export interface BreadcrumbItem {
  /** Display label for the breadcrumb */
  label: string;

  /** Optional navigation path/URL */
  path?: string;

  /** Optional icon name */
  icon?: string;

  /** Whether this is the current/active item */
  active?: boolean;
}

/**
 * Header action interface
 * Used for action buttons in page headers
 */
export interface HeaderAction {
  /** Display label for the action */
  label: string;

  /** Optional icon name */
  icon?: string;

  /** Click handler */
  onClick: () => void;

  /** Button variant style */
  variant?: ButtonVariant;

  /** Whether action is disabled */
  disabled?: boolean;

  /** Tooltip text */
  tooltip?: string;
}

/**
 * Badge configuration interface
 * Configuration for status badges and labels
 */
export interface BadgeConfig {
  /** Badge display label */
  label: string;

  /** Badge variant style */
  variant: BadgeVariant;

  /** Optional icon name */
  icon?: string;

  /** Tooltip text */
  tooltip?: string;
}

/**
 * Entity with ID interface
 * Base interface for entities with unique identifiers
 */
export interface EntityWithId {
  /** Unique identifier (string or number) */
  id: string | number;

  /** Allow additional properties */
  [key: string]: any;
}

/**
 * Base entity interface with common fields
 * Standard fields for database entities
 */
export interface BaseEntity {
  /** Unique identifier */
  id: string | number;

  /** Creation timestamp */
  created_at?: string | Date;

  /** Last update timestamp */
  updated_at?: string | Date;

  /** Soft delete timestamp */
  deleted_at?: string | Date | null;

  /** User who created the entity */
  created_by?: string | number;

  /** User who last updated the entity */
  updated_by?: string | number;

  /** Allow additional properties */
  [key: string]: any;
}

/**
 * Pagination metadata interface
 * Standard pagination information
 */
export interface PaginationMeta {
  /** Current page number */
  current_page: number;

  /** First page number */
  from: number;

  /** Last item number on current page */
  last_page: number;

  /** Items per page */
  per_page: number;

  /** Last item number on current page */
  to: number;

  /** Total number of items */
  total: number;
}

/**
 * Sort order types
 */
export type SortOrder = 'asc' | 'desc';

/**
 * Sort configuration interface
 */
export interface SortConfig {
  /** Field/column to sort by */
  field: string;

  /** Sort order direction */
  order: SortOrder;
}

/**
 * Loading state interface
 * Tracks loading, error, and success states
 */
export interface LoadingState {
  /** Whether data is currently loading */
  loading: boolean;

  /** Error message if load failed */
  error?: string | null;

  /** Whether load was successful */
  success?: boolean;
}

/**
 * API response wrapper interface
 * Standard structure for API responses
 */
export interface ApiResponse<T = any> {
  /** Whether request was successful */
  success: boolean;

  /** Response data */
  data?: T;

  /** Error message if failed */
  message?: string;

  /** Validation errors */
  errors?: Record<string, string[]>;

  /** Additional metadata */
  meta?: Record<string, any>;
}

/**
 * Paginated response interface
 * API response with pagination
 */
export interface PaginatedResponse<T = any> {
  /** Response data array */
  data: T[];

  /** Pagination metadata */
  meta: PaginationMeta;

  /** Links for pagination navigation */
  links?: {
    first?: string;
    last?: string;
    prev?: string | null;
    next?: string | null;
  };
}

/**
 * Confirmation dialog configuration
 */
export interface ConfirmConfig {
  /** Dialog title */
  title: string;

  /** Dialog message/content */
  message: string;

  /** Confirm button text */
  confirmText?: string;

  /** Cancel button text */
  cancelText?: string;

  /** Confirm button variant */
  confirmVariant?: ButtonVariant;

  /** Whether dialog is dangerous action */
  dangerous?: boolean;
}

/**
 * Empty state configuration
 */
export interface EmptyStateConfig {
  /** Empty state title */
  title: string;

  /** Optional description */
  description?: string;

  /** Optional icon name */
  icon?: string;

  /** Optional action button */
  action?: {
    label: string;
    onClick: () => void;
    variant?: ButtonVariant;
  };
}

/**
 * Color scheme types
 * Primary color variations used throughout the app
 */
export type ColorScheme = 'primary' | 'secondary' | 'success' | 'warning' | 'error' | 'info' | 'default';

/**
 * Icon position types
 */
export type IconPosition = 'left' | 'right' | 'top' | 'bottom';

/**
 * Display mode types
 */
export type DisplayMode = 'list' | 'grid' | 'table' | 'cards';

/**
 * View mode types (PC/Mobile)
 */
export type ViewMode = 'pc' | 'sp';
