/**
 * Data model type definition
 *
 * Represents a data/project entity in the system.
 * Based on the formData structure from PagesPage.tsx lines 128-137.
 */
export interface Data {
  /** Unique identifier for the data entry */
  id: number;

  /** Title of the data/project */
  title: string;

  /** Detailed description */
  description: string;

  /** Category classification */
  category: 'web' | 'mobile' | 'design' | string;

  /** Current status of the data/project */
  status: 'draft' | 'in-progress' | 'completed';

  /** Priority level */
  priority: 'low' | 'medium' | 'high';

  /** Comma-separated tags (optional) */
  tags?: string;

  /** Start date in YYYY-MM-DD format (optional) */
  startDate?: string;

  /** End date in YYYY-MM-DD format (optional) */
  endDate?: string;

  /** Timestamp when the data was created (ISO 8601 format) */
  createdAt: string;

  /** Timestamp when the data was last updated (ISO 8601 format) */
  updatedAt: string;
}

/**
 * Project data type definition
 *
 * Represents a project with detailed tracking information.
 * Used in DataListPageExample and sampleProjects.
 */
export interface ProjectData {
  /** Unique identifier for the project */
  id: number;

  /** Project title/name */
  title: string;

  /** Person assigned to the project */
  assignee: string;

  /** Priority level (高, 中, 低) */
  priority: string;

  /** Current status (進行中, 完了, 下書き) */
  status: string;

  /** Progress percentage (0-100) */
  progress: number;

  /** Budget amount in yen */
  budget: number;

  /** Start date in YYYY-MM-DD format */
  start_date: string;

  /** Last updated timestamp in ISO 8601 format */
  updated_at: string;

  /** Whether the project is active */
  is_active: boolean;

  /** Email address of the assignee */
  email: string;

  /** Avatar URL for the assignee */
  avatar: string;

  /** Index signature for dynamic access */
  [key: string]: any;
}

// UserData has been moved to User.ts to consolidate user type definitions
// Import from there instead: import { UserData } from './User';

/**
 * Client data type definition
 *
 * Represents a client company with contract information.
 */
export interface ClientData {
  /** Unique identifier for the client */
  id: number;

  /** Company name */
  company_name: string;

  /** Contact person name */
  contact_person: string;

  /** Email address */
  email: string;

  /** Phone number */
  phone: string;

  /** Company address */
  address: string;

  /** Contract status */
  contract_status: '契約中' | '商談中' | '休眠' | '解約';

  /** Contract value in yen */
  contract_value: number;

  /** Contract date in YYYY-MM-DD format (optional) */
  contract_date?: string;

  /** Whether the client is active */
  is_active: boolean;

  /** Index signature for dynamic access */
  [key: string]: any;
}

/**
 * Product data type definition
 *
 * Represents a product with inventory and pricing information.
 */
export interface ProductData {
  /** Unique identifier for the product */
  id: number;

  /** Product name */
  product_name: string;

  /** Product category */
  category: string;

  /** Price in yen */
  price: number;

  /** Stock quantity */
  stock: number;

  /** Stock Keeping Unit identifier */
  sku: string;

  /** Manufacturer name */
  manufacturer: string;

  /** Whether the product is available for sale */
  is_available: boolean;

  /** Product rating (0-5) (optional) */
  rating?: number;

  /** Release date in YYYY-MM-DD format (optional) */
  release_date?: string;

  /** Index signature for dynamic access */
  [key: string]: any;
}
