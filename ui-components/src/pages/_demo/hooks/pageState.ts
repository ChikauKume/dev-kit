import { useState, useRef } from 'react';

export type ActiveTab =
  | 'login'
  | 'dashboard'
  | 'forgot-password'
  | 'reset-password'
  | 'signup'
  | 'signup-confirm'
  | 'signup-complete'
  | 'settings'
  | 'error-404'
  | 'error-505'
  | 'maintenance'
  | 'notifications'
  | 'data-list'
  | 'data-detail'
  | 'data-create'
  | 'data-edit'
  | 'statistics'
  | 'qna'
  | 'terms'
  | 'privacy'
  | 'commercial';

export interface FlashMessage {
  type: 'success' | 'info' | 'warning' | 'danger';
  message: string;
}

export interface FormData {
  title: string;
  description: string;
  category: string;
  status: string;
  priority: string;
  tags: string;
  startDate: string;
  endDate: string;
}

export const usePageState = () => {
  // Tab and navigation states
  const [activeTab, setActiveTab] = useState<ActiveTab>('login');
  const [viewMode, setViewMode] = useState<'pc' | 'sp'>('pc');

  // UI states
  const [showUserMenu, setShowUserMenu] = useState(false);
  const [showNotificationDropdown, setShowNotificationDropdown] = useState(false);
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);
  const [isHamburgerOpen, setIsHamburgerOpen] = useState(false);
  const [showFullScreenLoader, setShowFullScreenLoader] = useState(false);
  const [flashMessage, setFlashMessage] = useState<FlashMessage | null>(null);

  // Notification states
  const [unreadCount, setUnreadCount] = useState(2);
  const notificationRef = useRef<HTMLDivElement>(null);
  const [notifications, setNotifications] = useState([
    { id: 1, type: 'info', title: 'システムアップデート', message: '新しい機能が追加されました', time: '2時間前', read: false },
    { id: 2, type: 'success', title: 'データ保存完了', message: 'データが正常に保存されました', time: '5時間前', read: false },
    { id: 3, type: 'warning', title: 'メンテナンス予定', message: '明日の深夜にメンテナンスを実施します', time: '1日前', read: true },
    { id: 4, type: 'error', title: 'エラー発生', message: '一部の機能でエラーが発生しています', time: '2日前', read: true }
  ]);

  // Login states
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);
  const [loginErrors, setLoginErrors] = useState({
    email: '',
    password: ''
  });
  const [loginFormError, setLoginFormError] = useState('');

  // Password reset states
  const [resetEmail, setResetEmail] = useState('');
  const [resetEmailSuccess, setResetEmailSuccess] = useState(false);
  const [resetEmailError, setResetEmailError] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [passwordResetSuccess, setPasswordResetSuccess] = useState(false);
  const [passwordResetErrors, setPasswordResetErrors] = useState({
    newPassword: '',
    confirmPassword: ''
  });

  // Signup states
  const [signupName, setSignupName] = useState('');
  const [signupEmail, setSignupEmail] = useState('');
  const [signupPhone, setSignupPhone] = useState('');
  const [signupPassword, setSignupPassword] = useState('');
  const [signupPasswordConfirm, setSignupPasswordConfirm] = useState('');
  const [agreeToTerms, setAgreeToTerms] = useState(false);
  const [signupErrors, setSignupErrors] = useState({
    name: '',
    email: '',
    phone: '',
    password: '',
    passwordConfirm: '',
    agreeToTerms: ''
  });

  // Settings states
  const [settingsName, setSettingsName] = useState('田中 太郎');
  const [settingsEmail, setSettingsEmail] = useState('tanaka@example.com');
  const [settingsPhone, setSettingsPhone] = useState('09012345678');
  const [settingsCurrentPassword, setSettingsCurrentPassword] = useState('');
  const [settingsNewPassword, setSettingsNewPassword] = useState('');
  const [settingsConfirmPassword, setSettingsConfirmPassword] = useState('');
  const [settingsErrors, setSettingsErrors] = useState({
    name: '',
    email: '',
    phone: '',
    currentPassword: '',
    newPassword: '',
    confirmPassword: '',
    avatar: ''
  });
  const [settingsUpdateSuccess, setSettingsUpdateSuccess] = useState(false);
  const [avatarPreview, setAvatarPreview] = useState<string | null>(null);

  // Accordion states
  const [openAccordions, setOpenAccordions] = useState<Record<number, boolean>>({ 0: true });

  // Data list states
  const [dataListCurrentPage, setDataListCurrentPage] = useState(1);
  const [dataListItemsPerPage, setDataListItemsPerPage] = useState(8);
  const [selectedDataListItems, setSelectedDataListItems] = useState<string[]>([]);
  const [dataListSearchKeyword, setDataListSearchKeyword] = useState('');
  const [dataListSearchCategory, setDataListSearchCategory] = useState('');
  const [dataListSearchDateFrom, setDataListSearchDateFrom] = useState('');
  const [dataListSearchDateTo, setDataListSearchDateTo] = useState('');
  const [dataListSearchStatus, setDataListSearchStatus] = useState('');
  const [isSearchFilterOpen, setIsSearchFilterOpen] = useState(false);
  const [dataListActiveFilters, setDataListActiveFilters] = useState({
    keyword: '',
    category: '',
    dateFrom: '',
    dateTo: '',
    status: ''
  });
  const [sortConfig, setSortConfig] = useState<{ key: string | null; direction: 'asc' | 'desc' | null }>({
    key: null,
    direction: null
  });

  // Form states
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formErrors, setFormErrors] = useState<{[key: string]: string}>({});
  const [successMessage, setSuccessMessage] = useState('');
  const [formData, setFormData] = useState<FormData>({
    title: '',
    description: '',
    category: '',
    status: 'draft',
    priority: 'medium',
    tags: '',
    startDate: '',
    endDate: ''
  });

  // Modal states
  const [showDataListDeleteModal, setShowDataListDeleteModal] = useState(false);
  const [showDataDetailDeleteModal, setShowDataDetailDeleteModal] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [selectedItemForDelete, setSelectedItemForDelete] = useState<any>(null);

  // Search states
  const [searchQuery, setSearchQuery] = useState('');

  return {
    // Tab and navigation
    activeTab,
    setActiveTab,
    viewMode,
    setViewMode,

    // UI states
    showUserMenu,
    setShowUserMenu,
    showNotificationDropdown,
    setShowNotificationDropdown,
    sidebarCollapsed,
    setSidebarCollapsed,
    isHamburgerOpen,
    setIsHamburgerOpen,
    showFullScreenLoader,
    setShowFullScreenLoader,
    flashMessage,
    setFlashMessage,

    // Notification states
    unreadCount,
    setUnreadCount,
    notificationRef,
    notifications,
    setNotifications,

    // Login states
    email,
    setEmail,
    password,
    setPassword,
    rememberMe,
    setRememberMe,
    loginErrors,
    setLoginErrors,
    loginFormError,
    setLoginFormError,

    // Password reset states
    resetEmail,
    setResetEmail,
    resetEmailSuccess,
    setResetEmailSuccess,
    resetEmailError,
    setResetEmailError,
    newPassword,
    setNewPassword,
    confirmPassword,
    setConfirmPassword,
    passwordResetSuccess,
    setPasswordResetSuccess,
    passwordResetErrors,
    setPasswordResetErrors,

    // Signup states
    signupName,
    setSignupName,
    signupEmail,
    setSignupEmail,
    signupPhone,
    setSignupPhone,
    signupPassword,
    setSignupPassword,
    signupPasswordConfirm,
    setSignupPasswordConfirm,
    agreeToTerms,
    setAgreeToTerms,
    signupErrors,
    setSignupErrors,

    // Settings states
    settingsName,
    setSettingsName,
    settingsEmail,
    setSettingsEmail,
    settingsPhone,
    setSettingsPhone,
    settingsCurrentPassword,
    setSettingsCurrentPassword,
    settingsNewPassword,
    setSettingsNewPassword,
    settingsConfirmPassword,
    setSettingsConfirmPassword,
    settingsErrors,
    setSettingsErrors,
    settingsUpdateSuccess,
    setSettingsUpdateSuccess,
    avatarPreview,
    setAvatarPreview,

    // Accordion states
    openAccordions,
    setOpenAccordions,

    // Data list states
    dataListCurrentPage,
    setDataListCurrentPage,
    dataListItemsPerPage,
    setDataListItemsPerPage,
    selectedDataListItems,
    setSelectedDataListItems,
    dataListSearchKeyword,
    setDataListSearchKeyword,
    dataListSearchCategory,
    setDataListSearchCategory,
    dataListSearchDateFrom,
    setDataListSearchDateFrom,
    dataListSearchDateTo,
    setDataListSearchDateTo,
    dataListSearchStatus,
    setDataListSearchStatus,
    isSearchFilterOpen,
    setIsSearchFilterOpen,
    dataListActiveFilters,
    setDataListActiveFilters,
    sortConfig,
    setSortConfig,

    // Form states
    isSubmitting,
    setIsSubmitting,
    formErrors,
    setFormErrors,
    successMessage,
    setSuccessMessage,
    formData,
    setFormData,

    // Modal states
    showDataListDeleteModal,
    setShowDataListDeleteModal,
    showDataDetailDeleteModal,
    setShowDataDetailDeleteModal,
    showDeleteModal,
    setShowDeleteModal,
    selectedItemForDelete,
    setSelectedItemForDelete,

    // Search states
    searchQuery,
    setSearchQuery
  };
};
