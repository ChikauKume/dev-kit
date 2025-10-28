import type * as React from 'react';
import type { DetailFieldConfig, DetailSection, DetailTab, DetailLayoutConfig } from './DetailFieldConfig';

/**
 * Detail page action button configuration
 * Actions that can be performed on the detail page (edit, delete, etc.)
 */
export interface DetailActionButton {
  /** Action unique identifier */
  id: string;

  /** Action label */
  label: string;

  /** Action icon */
  icon?: string;

  /**
   * Action handler
   * @param data - Current data object
   */
  onClick: (data: Record<string, any>) => void | Promise<void>;

  /** Button variant */
  variant?: 'primary' | 'secondary' | 'danger' | 'text' | 'success' | 'warning';

  /**
   * Whether action is disabled
   * Can be static or dynamic based on data
   */
  disabled?: boolean | ((data: Record<string, any>) => boolean);

  /**
   * Whether action is visible
   * Can be static or dynamic based on data
   */
  visible?: boolean | ((data: Record<string, any>) => boolean);

  /** Tooltip text */
  tooltip?: string;

  /** Confirmation dialog configuration */
  confirm?: {
    title: string;
    message: string;
    confirmText?: string;
    cancelText?: string;
  };

  /** Show loading state */
  loading?: boolean;
}

/**
 * Related data section configuration
 * For displaying related entities (e.g., user's posts, project's tasks)
 */
export interface RelatedDataSection {
  /** Section unique identifier */
  id: string;

  /** Section title */
  title: string;

  /** Section description */
  description?: string;

  /** Section icon */
  icon?: string;

  /**
   * Related data fetcher
   * @param parentData - Parent entity data
   * @returns Promise resolving to related data array
   */
  fetchData?: (parentData: Record<string, any>) => Promise<Record<string, any>[]>;

  /** Related data (if already fetched) */
  data?: Record<string, any>[];

  /**
   * Custom renderer for related data
   * @param data - Related data array
   * @param parentData - Parent entity data
   * @returns Custom content
   */
  renderContent?: (data: Record<string, any>[], parentData: Record<string, any>) => React.ReactNode;

  /** Component to render (e.g., table, list, grid) */
  component?: 'table' | 'list' | 'grid' | 'cards';

  /** Configuration for the component */
  componentConfig?: any;

  /** Whether section is collapsible */
  collapsible?: boolean;

  /** Initial collapsed state */
  defaultCollapsed?: boolean;

  /** Loading state */
  loading?: boolean;

  /** Empty state configuration */
  emptyState?: {
    title: string;
    description?: string;
    icon?: string;
    action?: {
      label: string;
      onClick: () => void;
    };
  };

  /**
   * Conditional visibility
   * @param parentData - Parent entity data
   * @returns true if section should be visible
   */
  visible?: (parentData: Record<string, any>) => boolean;

  /** Additional CSS classes */
  className?: string;
}

/**
 * Activity/timeline item configuration
 * For displaying activity history, audit logs, etc.
 */
export interface ActivityItem {
  /** Activity unique identifier */
  id: string | number;

  /** Activity type/action */
  type: string;

  /** Activity title/description */
  title: string;

  /** Activity details/body */
  description?: string;

  /** Actor (user who performed the action) */
  actor?: {
    name: string;
    avatar?: string;
    id?: string | number;
  };

  /** Timestamp */
  timestamp: string | Date;

  /** Activity icon */
  icon?: string;

  /** Activity color/variant */
  variant?: 'success' | 'warning' | 'error' | 'info' | 'default';

  /** Additional metadata */
  metadata?: Record<string, any>;
}

/**
 * Activity timeline configuration
 * For displaying chronological activity/history
 */
export interface ActivityTimelineConfig {
  /** Timeline title */
  title?: string;

  /** Activity items */
  items: ActivityItem[];

  /**
   * Activity items fetcher
   * @param data - Parent entity data
   * @returns Promise resolving to activity items
   */
  fetchItems?: (data: Record<string, any>) => Promise<ActivityItem[]>;

  /** Maximum items to show initially */
  maxItems?: number;

  /** Show "load more" button */
  showLoadMore?: boolean;

  /** Loading state */
  loading?: boolean;

  /** Empty state message */
  emptyMessage?: string;

  /** Timeline position */
  position?: 'left' | 'center' | 'right';

  /** Show timestamps */
  showTimestamps?: boolean;

  /** Timestamp format */
  timestampFormat?: string;

  /** Group by date */
  groupByDate?: boolean;
}

/**
 * Detail header configuration
 * Customizes the detail page header
 */
export interface DetailHeaderConfig {
  /** Show title */
  showTitle?: boolean;

  /** Title field key (which field to use as title) */
  titleField?: string;

  /** Custom title render function */
  renderTitle?: (data: Record<string, any>) => React.ReactNode;

  /** Show subtitle */
  showSubtitle?: boolean;

  /** Subtitle field key or text */
  subtitle?: string | ((data: Record<string, any>) => string);

  /** Show avatar/image */
  showAvatar?: boolean;

  /** Avatar field key */
  avatarField?: string;

  /** Custom avatar render function */
  renderAvatar?: (data: Record<string, any>) => React.ReactNode;

  /** Show status badge */
  showStatus?: boolean;

  /** Status field key */
  statusField?: string;

  /** Status badge configuration */
  statusBadgeConfig?: {
    [value: string]: {
      label: string;
      variant: 'success' | 'warning' | 'error' | 'info' | 'default' | 'primary' | 'secondary';
    };
  };

  /** Additional header metadata to display */
  metadata?: Array<{
    label: string;
    key: string;
    icon?: string;
    format?: (value: any) => string;
  }>;

  /** Custom header content */
  renderCustomContent?: (data: Record<string, any>) => React.ReactNode;
}

/**
 * Props for DataDetailPage component
 * Main configuration for Laravel-driven dynamic detail/show pages
 */
export interface DataDetailPageProps {
  /** Page title */
  title?: string;

  /** Page subtitle/description */
  subtitle?: string;

  /** Detail data object */
  data: Record<string, any>;

  /** Flat fields configuration (alternative to sections/tabs) */
  fields?: DetailFieldConfig[];

  /** Sections configuration (grouped fields) */
  sections?: DetailSection[];

  /** Tabs configuration (for tabbed interface) */
  tabs?: DetailTab[];

  /** Layout configuration */
  layout?: DetailLayoutConfig;

  /** Header configuration */
  headerConfig?: DetailHeaderConfig;

  /** Primary actions (edit, delete, etc.) */
  actions?: DetailActionButton[];

  /** Secondary/additional actions */
  secondaryActions?: DetailActionButton[];

  /** Related data sections */
  relatedSections?: RelatedDataSection[];

  /** Activity timeline */
  activityTimeline?: ActivityTimelineConfig;

  /** Back button configuration */
  backButton?: {
    label?: string;
    icon?: string;
    onClick?: () => void;
    url?: string;
  };

  /** Loading state (for initial data fetch) */
  loading?: boolean;

  /** Error state */
  error?: {
    message: string;
    retry?: () => void;
  };

  /** Empty state (when data is null/undefined) */
  emptyState?: {
    title: string;
    description?: string;
    icon?: string;
    action?: {
      label: string;
      onClick: () => void;
    };
  };

  /**
   * Refresh handler (reload data)
   */
  onRefresh?: () => void | Promise<void>;

  /** Show refresh button */
  showRefreshButton?: boolean;

  /** Show print button */
  showPrintButton?: boolean;

  /** Show share button */
  showShareButton?: boolean;

  /** Share handler */
  onShare?: () => void;

  /** Show export button */
  showExportButton?: boolean;

  /** Export formats */
  exportFormats?: Array<'pdf' | 'json' | 'csv'>;

  /** Export handler */
  onExport?: (format: string, data: Record<string, any>) => void | Promise<void>;

  /** Additional CSS classes */
  className?: string;

  /**
   * Breadcrumb items for navigation
   * Used with InfoPageWrapper
   */
  breadcrumbs?: Array<{
    label: string;
    path?: string;
  }>;

  /**
   * Header actions/links
   * Displayed in page header
   */
  headerActions?: Array<{
    label: string;
    icon?: string;
    onClick: () => void;
    variant?: 'primary' | 'secondary' | 'text';
  }>;

  /** Enable sticky header */
  stickyHeader?: boolean;

  /** Enable sticky actions bar */
  stickyActions?: boolean;

  /** Show timestamps (created_at, updated_at) */
  showTimestamps?: boolean;

  /** Timestamp format */
  timestampFormat?: string;

  /** Show metadata section (created_by, updated_by, etc.) */
  showMetadata?: boolean;

  /** Metadata fields to display */
  metadataFields?: string[];

  /**
   * Permission check for actions
   * @param action - Action identifier
   * @param data - Current data object
   * @returns true if user has permission
   */
  checkPermission?: (action: string, data: Record<string, any>) => boolean;

  /**
   * Custom sidebar content
   * Rendered on the right side of detail page
   */
  renderSidebar?: (data: Record<string, any>) => React.ReactNode;

  /** Show sidebar */
  showSidebar?: boolean;

  /** Sidebar width */
  sidebarWidth?: string;

  /** Sidebar position */
  sidebarPosition?: 'left' | 'right';

  /**
   * Callback for logout action
   *
   * @example
   * ```tsx
   * onLogout={() => router.post('/logout')}
   * ```
   */
  onLogout?: () => void;
}

/**
 * Props for DynamicDetail component (detail-only, without page wrapper)
 * Use this for embedding detail views within other components
 */
export interface DynamicDetailProps extends Omit<DataDetailPageProps, 'title' | 'subtitle' | 'breadcrumbs' | 'headerActions'> {
  /** Optional detail title */
  title?: string;

  /** Optional detail description */
  description?: string;
}

/**
 * Detail field state
 * Internal state for interactive detail fields
 */
export interface DetailFieldState {
  /** Field key */
  key: string;

  /** Current visibility state */
  visible: boolean;

  /** Current expanded state (for collapsible content) */
  expanded?: boolean;

  /** Loading state (for async operations) */
  loading?: boolean;
}

/**
 * Detail page state
 * Internal state management for detail page
 */
export interface DetailPageState {
  /** Current active tab (if using tabs) */
  activeTab?: string;

  /** Expanded sections (for collapsible sections) */
  expandedSections: Set<string>;

  /** Field states */
  fields: Record<string, DetailFieldState>;

  /** Loading state */
  loading: boolean;

  /** Error state */
  error?: string;

  /** Data refresh timestamp */
  lastRefresh?: Date;
}
