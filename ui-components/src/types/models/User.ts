/**
 * Base user interface with common properties
 */
interface BaseUser {
  /** Unique identifier for the user */
  id: number;

  /** Full name of the user */
  name: string;

  /** Email address (must be unique) */
  email: string;

  /** Optional profile avatar URL */
  avatar?: string;
}

/**
 * User model type definition
 *
 * Represents a user entity in the system with authentication and profile information.
 * This type should match the Laravel User model structure.
 * Uses camelCase for consistency with React/TypeScript conventions.
 */
export interface User extends BaseUser {
  /** User role for authorization */
  role: 'admin' | 'user' | 'guest';

  /** Timestamp when the user was created (ISO 8601 format) */
  createdAt: string;

  /** Timestamp when the user was last updated (ISO 8601 format) */
  updatedAt: string;
}

/**
 * User data type definition
 *
 * Represents a user with role and department information.
 * Uses snake_case for API compatibility with Laravel backend.
 * This is used for data list/table displays.
 */
export interface UserData extends BaseUser {
  /** User role */
  role: 'admin' | 'manager' | 'member' | 'guest';

  /** Department name */
  department: string;

  /** Whether the user account is active */
  is_active: boolean;

  /** Account creation timestamp in ISO 8601 format */
  created_at: string;

  /** Last login timestamp in ISO 8601 format (optional) */
  last_login?: string;

  /** Index signature for dynamic access */
  [key: string]: any;
}
