/**
 * API response type definitions
 *
 * Standard response structures for API endpoints to be used with Laravel + Inertia.js.
 */

import { User } from '../models/User';
import { Data } from '../models/Data';
import { Notification } from '../models/Notification';

/**
 * Generic API response wrapper
 *
 * @template T - The type of data being returned
 */
export interface ApiResponse<T = unknown> {
  /** Whether the request was successful */
  success: boolean;

  /** The response data payload */
  data?: T;

  /** Optional success or info message */
  message?: string;

  /** Validation or other errors (Laravel format: field => [messages]) */
  errors?: Record<string, string[]>;
}

/**
 * Paginated response structure
 *
 * Matches Laravel's paginate() structure for Inertia.js props.
 *
 * @template T - The type of items in the data array
 */
export interface PaginatedResponse<T> {
  /** Array of items for the current page */
  data: T[];

  /** Pagination metadata */
  meta: {
    /** Current page number */
    currentPage: number;

    /** Total number of pages */
    lastPage: number;

    /** Number of items per page */
    perPage: number;

    /** Total number of items across all pages */
    total: number;
  };

  /** Pagination links */
  links: {
    /** URL to first page */
    first: string;

    /** URL to last page */
    last: string;

    /** URL to previous page (null if on first page) */
    prev: string | null;

    /** URL to next page (null if on last page) */
    next: string | null;
  };
}

/**
 * Login response data
 */
export interface LoginResponse {
  /** Authenticated user data */
  user: User;

  /** Optional authentication token (for API-based auth) */
  token?: string;
}

/**
 * Dashboard page data
 *
 * Props passed to the dashboard page via Inertia.js
 */
export interface DashboardData {
  /** Current authenticated user */
  user: User;

  /** User's notifications */
  notifications: Notification[];

  /** Dashboard statistics */
  stats: {
    /** Total number of users in the system */
    totalUsers: number;

    /** Number of active projects */
    activeProjects: number;

    /** Number of pending tasks */
    pendingTasks: number;
  };
}

/**
 * Data list page response
 */
export interface DataListResponse extends PaginatedResponse<Data> {
  /** Current filter values */
  filters?: {
    search?: string;
    category?: string;
    status?: string;
  };
}

/**
 * Flash message structure
 *
 * Used for success/error messages after form submissions
 */
export interface FlashMessage {
  /** Message type affecting display style */
  type: 'success' | 'info' | 'warning' | 'danger';

  /** Flash message content */
  message: string;
}
