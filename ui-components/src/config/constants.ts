/**
 * Application-wide constants
 */

/**
 * Application name
 */
export const APP_NAME = 'UIコンポーネントライブラリ';

/**
 * Application routes
 * Used for navigation throughout the application
 */
export const ROUTES = {
  HOME: '/',
  LOGIN: '/login',
  SIGNUP: '/signup',
  SIGNUP_CONFIRM: '/signup-confirm',
  SIGNUP_COMPLETE: '/signup-complete',
  FORGOT_PASSWORD: '/forgot-password',
  RESET_PASSWORD: '/reset-password',
  DASHBOARD: '/dashboard',
  DATA_LIST: '/data',
  DATA_CREATE: '/data/create',
  DATA_EDIT: '/data/:id/edit',
  DATA_DETAIL: '/data/:id',
  PROFILE: '/profile',
  SETTINGS: '/settings',
  NOTIFICATIONS: '/notifications',
  STATISTICS: '/statistics',
  QNA: '/qna',
  TERMS: '/terms',
  PRIVACY: '/privacy',
  COMMERCIAL: '/commercial',
  ERROR_404: '/404',
  ERROR_505: '/505',
  MAINTENANCE: '/maintenance'
} as const;

/**
 * Page tab identifiers
 * Used for tab navigation in PagesPage
 */
export const PAGE_TABS = {
  LOGIN: 'login',
  SIGNUP: 'signup',
  SIGNUP_CONFIRM: 'signup-confirm',
  SIGNUP_COMPLETE: 'signup-complete',
  FORGOT_PASSWORD: 'forgot-password',
  RESET_PASSWORD: 'reset-password',
  DASHBOARD: 'dashboard',
  SETTINGS: 'settings',
  NOTIFICATIONS: 'notifications',
  DATA_LIST: 'data-list',
  DATA_DETAIL: 'data-detail',
  DATA_CREATE: 'data-create',
  DATA_EDIT: 'data-edit',
  STATISTICS: 'statistics',
  QNA: 'qna',
  TERMS: 'terms',
  PRIVACY: 'privacy',
  COMMERCIAL: 'commercial',
  ERROR_404: 'error-404',
  ERROR_505: 'error-505',
  MAINTENANCE: 'maintenance'
} as const;

/**
 * Page tab labels
 * Human-readable labels for page tabs
 */
export const PAGE_TAB_LABELS: Record<string, string> = {
  [PAGE_TABS.LOGIN]: 'ログイン',
  [PAGE_TABS.SIGNUP]: '新規登録',
  [PAGE_TABS.SIGNUP_CONFIRM]: '登録確認',
  [PAGE_TABS.SIGNUP_COMPLETE]: '登録完了',
  [PAGE_TABS.FORGOT_PASSWORD]: '再設定URL送信',
  [PAGE_TABS.RESET_PASSWORD]: 'パスワード再設定',
  [PAGE_TABS.DASHBOARD]: 'ダッシュボード',
  [PAGE_TABS.SETTINGS]: '設定',
  [PAGE_TABS.NOTIFICATIONS]: '通知一覧',
  [PAGE_TABS.DATA_LIST]: 'データ一覧',
  [PAGE_TABS.DATA_DETAIL]: 'データ詳細',
  [PAGE_TABS.DATA_CREATE]: 'データ作成',
  [PAGE_TABS.DATA_EDIT]: 'データ編集',
  [PAGE_TABS.STATISTICS]: '統計',
  [PAGE_TABS.QNA]: 'Q&A',
  [PAGE_TABS.TERMS]: '利用規約',
  [PAGE_TABS.PRIVACY]: 'プライバシーポリシー',
  [PAGE_TABS.COMMERCIAL]: '特定商取引法に基づく表記',
  [PAGE_TABS.ERROR_404]: '404エラー',
  [PAGE_TABS.ERROR_505]: '505エラー',
  [PAGE_TABS.MAINTENANCE]: 'メンテナンス'
} as const;

/**
 * Pagination settings
 */
export const PAGINATION = {
  DEFAULT_PAGE_SIZE: 10,
  PAGE_SIZE_OPTIONS: [10, 25, 50, 100]
} as const;

/**
 * Status options with colors
 * Used for status badges and select options
 */
export const STATUS_OPTIONS = [
  { value: 'draft', label: '下書き', color: '#94a3b8' },
  { value: 'in-progress', label: '進行中', color: '#3b82f6' },
  { value: 'review', label: 'レビュー中', color: '#f59e0b' },
  { value: 'completed', label: '完了', color: '#10b981' },
  { value: 'active', label: '有効', color: '#10b981' },
  { value: 'inactive', label: '無効', color: '#ef4444' },
  { value: 'pending', label: '保留中', color: '#f59e0b' }
] as const;

/**
 * Priority options with colors
 * Used for priority badges and select options
 */
export const PRIORITY_OPTIONS = [
  { value: 'low', label: '低', color: '#94a3b8' },
  { value: 'medium', label: '中', color: '#f59e0b' },
  { value: 'high', label: '高', color: '#ef4444' }
] as const;

/**
 * Department options
 * Used for department select fields
 */
export const DEPARTMENT_OPTIONS = [
  { value: '', label: '選択してください' },
  { value: '営業部', label: '営業部' },
  { value: '開発部', label: '開発部' },
  { value: '人事部', label: '人事部' },
  { value: '総務部', label: '総務部' },
  { value: '経理部', label: '経理部' },
  { value: '企画部', label: '企画部' }
] as const;

/**
 * Category options
 * Used for project category select fields
 */
export const CATEGORY_OPTIONS = [
  { value: '', label: '選択してください' },
  { value: 'web', label: 'Web開発' },
  { value: 'app', label: 'アプリ開発' },
  { value: 'design', label: 'デザイン' },
  { value: 'marketing', label: 'マーケティング' },
  { value: 'other', label: 'その他' }
] as const;

/**
 * Notification types
 * Used for notification badges and filtering
 */
export const NOTIFICATION_TYPES = {
  INFO: 'info',
  SUCCESS: 'success',
  WARNING: 'warning',
  ERROR: 'error'
} as const;

/**
 * Sample notifications data
 * Used for demo and testing purposes
 */
export const SAMPLE_NOTIFICATIONS = [
  {
    id: 1,
    type: 'info',
    title: 'システムアップデート',
    message: '新しい機能が追加されました',
    time: '2時間前',
    read: false
  },
  {
    id: 2,
    type: 'success',
    title: 'データ保存完了',
    message: 'データが正常に保存されました',
    time: '5時間前',
    read: false
  },
  {
    id: 3,
    type: 'warning',
    title: 'メンテナンス予定',
    message: '明日の深夜にメンテナンスを実施します',
    time: '1日前',
    read: true
  },
  {
    id: 4,
    type: 'error',
    title: 'エラー発生',
    message: '一部の機能でエラーが発生しています',
    time: '2日前',
    read: true
  }
] as const;

/**
 * View modes
 * Used for responsive layout switching
 */
export const VIEW_MODES = {
  PC: 'pc',
  SP: 'sp'
} as const;

/**
 * Flash message types
 * Used for flash message alerts
 */
export const FLASH_MESSAGE_TYPES = {
  SUCCESS: 'success',
  INFO: 'info',
  WARNING: 'warning',
  DANGER: 'danger'
} as const;

/**
 * Form submission states
 */
export const FORM_STATES = {
  IDLE: 'idle',
  SUBMITTING: 'submitting',
  SUCCESS: 'success',
  ERROR: 'error'
} as const;

/**
 * API timeout settings (in milliseconds)
 */
export const TIMEOUTS = {
  API_REQUEST: 30000,
  FLASH_MESSAGE: 3000,
  DEBOUNCE: 300
} as const;

/**
 * Regular expressions for validation
 */
export const VALIDATION_PATTERNS = {
  EMAIL: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
  PHONE: /^[0-9]{10,11}$/,
  PASSWORD_MIN_LENGTH: 8
} as const;
