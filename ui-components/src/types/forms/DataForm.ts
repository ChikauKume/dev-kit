/**
 * Data form type definitions
 *
 * Types for the data create/edit forms based on PagesPage.tsx lines 128-137.
 */

/**
 * Data form data structure
 */
export interface DataFormData {
  /** Title of the data/project */
  title: string;

  /** Detailed description */
  description: string;

  /** Category selection */
  category: string;

  /** Current status */
  status: 'draft' | 'in-progress' | 'completed';

  /** Priority level */
  priority: 'low' | 'medium' | 'high';

  /** Comma-separated tags */
  tags: string;

  /** Start date (YYYY-MM-DD format) */
  startDate: string;

  /** End date (YYYY-MM-DD format) */
  endDate: string;
}

/**
 * Data form validation errors
 */
export interface DataFormErrors {
  /** Title field validation error message */
  title?: string;

  /** Description field validation error message */
  description?: string;

  /** Category field validation error message */
  category?: string;

  /** Status field validation error message */
  status?: string;

  /** Priority field validation error message */
  priority?: string;

  /** Tags field validation error message */
  tags?: string;

  /** Start date field validation error message */
  startDate?: string;

  /** End date field validation error message */
  endDate?: string;
}
