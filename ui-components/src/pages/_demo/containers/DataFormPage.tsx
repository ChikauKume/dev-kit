import React, { useState, useRef } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import FormPage from '../../templates/data/FormPage';
import { DynamicFormPageProps } from '../../../types/forms/FormProps';
import { FormFieldConfig, FormSection } from '../../../types/forms/FormFieldConfig';
import { ValidationRule } from '../../../types/forms/ValidationRule';
import InfoPageWrapper from '../../../components/layout/InfoPageWrapper';
import TemplateNavigation from '../../../components/navigation/TemplateNavigation';
import { useViewMode } from '../../../hooks/useViewMode';

/**
 * DataFormPage
 *
 * Complete working example demonstrating all field types and features
 * of the DataFormPage component.
 *
 * This example shows:
 * - All 20+ field types
 * - Validation rules
 * - Grouped sections with collapse
 * - Conditional fields
 * - File uploads
 * - Multi-select
 * - Custom actions
 * - Draft saving
 * - Error handling
 *
 * Usage: Copy this example and modify for your use case
 */
const DataFormPage: React.FC = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const notificationRef = useRef<HTMLDivElement>(null);

  // Header state management
  const [viewMode, setViewMode] = useViewMode();
  const [showNotificationDropdown, setShowNotificationDropdown] = useState(false);
  const [showUserMenu, setShowUserMenu] = useState(false);
  const [isHamburgerOpen, setIsHamburgerOpen] = useState(false);
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);

  // Notification state management
  const [notifications, setNotifications] = useState([
    { id: 1, title: '新しいメッセージ', message: 'システムから重要なお知らせがあります', time: '5分前', read: false },
    { id: 2, title: 'データ更新完了', message: 'データの同期が完了しました', time: '1時間前', read: false },
    { id: 3, title: 'メンテナンスのお知らせ', message: '明日の深夜にメンテナンスを実施します', time: '3時間前', read: true },
  ]);

  // Determine if this is add or edit mode based on URL
  const isEditMode = location.pathname.includes('/edit');
  const pageTitle = isEditMode ? 'データ編集' : 'データ作成';
  const breadcrumbLabel = isEditMode ? 'データ編集' : 'データ作成';

  // Example 1: Flat Fields (Simple Form)
  const simpleFormFields: FormFieldConfig[] = [
    {
      name: 'fullName',
      label: '氏名',
      type: 'text',
      placeholder: '山田 太郎',
      required: true,
      width: 'full',
    },
    {
      name: 'email',
      label: 'メールアドレス',
      type: 'email',
      placeholder: 'example@email.com',
      required: true,
      width: 'half',
    },
    {
      name: 'phone',
      label: '電話番号',
      type: 'tel',
      placeholder: '090-1234-5678',
      width: 'half',
    },
    {
      name: 'birthDate',
      label: '生年月日',
      type: 'date',
      required: true,
      width: 'half',
    },
    {
      name: 'gender',
      label: '性別',
      type: 'radio',
      required: true,
      width: 'half',
      options: [
        { value: 'male', label: '男性' },
        { value: 'female', label: '女性' },
        { value: 'other', label: 'その他' },
      ],
    },
    {
      name: 'bio',
      label: '自己紹介',
      type: 'textarea',
      placeholder: 'あなたについて教えてください',
      rows: 4,
      width: 'full',
      helperText: '最大500文字まで入力できます',
    },
  ];

  const simpleFormValidation: Record<string, ValidationRule[]> = {
    fullName: [
      { type: 'required', message: '氏名は必須です' },
      { type: 'minLength', value: 2, message: '氏名は2文字以上で入力してください' },
    ],
    email: [
      { type: 'required', message: 'メールアドレスは必須です' },
      { type: 'email', message: '有効なメールアドレスを入力してください' },
    ],
    birthDate: [
      { type: 'required', message: '生年月日は必須です' },
      { type: 'date', message: '有効な日付を入力してください' },
    ],
    gender: [
      { type: 'required', message: '性別を選択してください' },
    ],
  };

  // Example 2: Sections (Complex Form)
  const complexFormSections: FormSection[] = [
    {
      id: 'personal',
      title: '個人情報',
      description: '基本的な個人情報を入力してください',
      icon: 'user',
      collapsible: false,
      fields: [
        {
          name: 'firstName',
          label: '名',
          type: 'text',
          required: true,
          width: 'half',
          placeholder: '太郎',
        },
        {
          name: 'lastName',
          label: '姓',
          type: 'text',
          required: true,
          width: 'half',
          placeholder: '山田',
        },
        {
          name: 'email',
          label: 'メールアドレス',
          type: 'email',
          required: true,
          width: 'full',
          placeholder: 'example@email.com',
        },
        {
          name: 'phone',
          label: '電話番号',
          type: 'tel',
          width: 'half',
          placeholder: '09012345678',
          pattern: '^[0-9]+$',
        },
        {
          name: 'alternatePhone',
          label: '予備電話番号',
          type: 'tel',
          width: 'half',
          placeholder: '0312345678',
          pattern: '^[0-9]+$',
        },
      ],
    },
    {
      id: 'address',
      title: '住所情報',
      icon: 'location',
      collapsible: true,
      fields: [
        {
          name: 'postalCode',
          label: '郵便番号',
          type: 'text',
          placeholder: '1234567',
          width: 'third',
          pattern: '^[0-9]{7}$',
        },
        {
          name: 'prefecture',
          label: '都道府県',
          type: 'select',
          required: true,
          width: 'two-thirds',
          placeholder: '選択してください',
          options: [
            { value: 'tokyo', label: '東京都' },
            { value: 'osaka', label: '大阪府' },
            { value: 'kyoto', label: '京都府' },
            { value: 'hokkaido', label: '北海道' },
          ],
        },
        {
          name: 'city',
          label: '市区町村',
          type: 'text',
          required: true,
          width: 'half',
          placeholder: '渋谷区',
          maxLength: 50,
        },
        {
          name: 'address1',
          label: '町名・番地',
          type: 'text',
          required: true,
          width: 'half',
          placeholder: '道玄坂1-2-3',
          maxLength: 50,
        },
        {
          name: 'address2',
          label: '建物名・部屋番号',
          type: 'text',
          width: 'full',
          placeholder: '〇〇ビル 4階',
          maxLength: 50,
        },
      ],
    },
    {
      id: 'employment',
      title: '職業情報',
      icon: 'briefcase',
      collapsible: true,
      defaultCollapsed: true,
      fields: [
        {
          name: 'employmentStatus',
          label: '雇用形態',
          type: 'select',
          width: 'half',
          options: [
            { value: 'fulltime', label: '正社員' },
            { value: 'parttime', label: 'パート・アルバイト' },
            { value: 'contract', label: '契約社員' },
            { value: 'freelance', label: 'フリーランス' },
            { value: 'student', label: '学生' },
            { value: 'unemployed', label: '無職' },
          ],
        },
        {
          name: 'occupation',
          label: '職種',
          type: 'text',
          width: 'half',
          placeholder: 'ソフトウェアエンジニア',
          maxLength: 30,
        },
        {
          name: 'companyName',
          label: '勤務先名',
          type: 'text',
          width: 'full',
          placeholder: '株式会社〇〇',
          maxLength: 50,
        },
        {
          name: 'annualIncome',
          label: '年収',
          type: 'text',
          width: 'half',
          placeholder: '5000000',
          helperText: '税込の年収を入力してください',
          pattern: '^[0-9]+$',
          inputMode: 'numeric',
        },
      ],
    },
    {
      id: 'preferences',
      title: '設定・希望',
      icon: 'settings',
      collapsible: true,
      fields: [
        {
          name: 'skills',
          label: 'スキル・得意分野',
          type: 'checkbox',
          options: [
            { value: 'programming', label: 'プログラミング' },
            { value: 'design', label: 'デザイン' },
            { value: 'marketing', label: 'マーケティング' },
            { value: 'management', label: 'マネジメント' },
            { value: 'sales', label: '営業' },
          ],
        },
        {
          name: 'workLocation',
          label: '希望勤務地',
          type: 'multiselect',
          width: 'full',
          options: [
            { value: 'tokyo', label: '東京' },
            { value: 'osaka', label: '大阪' },
            { value: 'nagoya', label: '名古屋' },
            { value: 'fukuoka', label: '福岡' },
            { value: 'remote', label: 'リモート' },
          ],
          placeholder: '勤務地を選択してください',
          helperText: '複数選択可能です',
        },
        {
          name: 'desiredSalary',
          label: '希望年収',
          type: 'range',
          min: 3000000,
          max: 15000000,
          step: 500000,
          width: 'full',
          helperText: 'スライダーを動かして希望年収を選択してください',
        },
        {
          name: 'availableStartDate',
          label: '就業可能日',
          type: 'date',
          width: 'half',
        },
        {
          name: 'preferredContactTime',
          label: '希望連絡時間',
          type: 'time',
          width: 'half',
        },
      ],
    },
    {
      id: 'documents',
      title: '書類アップロード',
      icon: 'file',
      collapsible: true,
      defaultCollapsed: true,
      fields: [
        {
          name: 'resume',
          label: '履歴書',
          type: 'file',
          accept: '.pdf,.doc,.docx',
          width: 'full',
          helperText: 'PDF、Word形式（最大5MB）',
        },
        {
          name: 'portfolio',
          label: 'ポートフォリオ・作品',
          type: 'file',
          multiple: true,
          accept: 'image/*,.pdf',
          width: 'full',
          helperText: '画像またはPDF形式、複数選択可能（最大5MB）',
        },
        {
          name: 'profilePhoto',
          label: 'プロフィール写真',
          type: 'file',
          accept: 'image/*',
          width: 'full',
          helperText: 'JPG、PNG形式（最大2MB）',
        },
      ],
    },
  ];

  const complexFormValidation: Record<string, ValidationRule[]> = {
    firstName: [
      { type: 'required', message: '名は必須です' },
      { type: 'minLength', value: 1, message: '名を入力してください' },
    ],
    lastName: [
      { type: 'required', message: '姓は必須です' },
      { type: 'minLength', value: 1, message: '姓を入力してください' },
    ],
    email: [
      { type: 'required', message: 'メールアドレスは必須です' },
      { type: 'email', message: '有効なメールアドレスを入力してください' },
      {
        type: 'async',
        asyncValidator: async (value: string) => {
          // Simulate API call to check if email is already in use
          await new Promise(resolve => setTimeout(resolve, 800)); // 800ms delay
          const usedEmails = ['test@example.com', 'admin@example.com', 'user@example.com'];
          return !usedEmails.includes(value.toLowerCase());
        },
        debounce: 500,
        message: 'このメールアドレスは既に使用されています'
      },
    ],
    phone: [
      {
        type: 'pattern',
        value: '^[0-9]+$',
        message: '電話番号は数字のみで入力してください',
      },
    ],
    alternatePhone: [
      {
        type: 'pattern',
        value: '^[0-9]+$',
        message: '電話番号は数字のみで入力してください',
      },
    ],
    postalCode: [
      {
        type: 'pattern',
        value: '^[0-9]{7}$',
        message: '郵便番号は7桁の数字で入力してください（例: 1234567）',
      },
    ],
    prefecture: [
      { type: 'required', message: '都道府県を選択してください' },
    ],
    city: [
      { type: 'required', message: '市区町村は必須です' },
      { type: 'maxLength', value: 50, message: '市区町村は50文字以内で入力してください' },
    ],
    address1: [
      { type: 'required', message: '町名・番地は必須です' },
      { type: 'maxLength', value: 50, message: '町名・番地は50文字以内で入力してください' },
    ],
    address2: [
      { type: 'maxLength', value: 50, message: '建物名・部屋番号は50文字以内で入力してください' },
    ],
    occupation: [
      { type: 'maxLength', value: 30, message: '職種は30文字以内で入力してください' },
    ],
    companyName: [
      { type: 'maxLength', value: 50, message: '勤務先名は50文字以内で入力してください' },
    ],
    annualIncome: [
      {
        type: 'pattern',
        value: '^[0-9]+$',
        message: '年収は数字のみで入力してください',
      },
    ],
    resume: [
      {
        type: 'fileSize',
        value: 5242880, // 5MB in bytes
        message: 'ファイルサイズは5MB以下にしてください',
      },
    ],
    portfolio: [
      {
        type: 'fileSize',
        value: 5242880, // 5MB in bytes
        message: 'ファイルサイズは5MB以下にしてください',
      },
    ],
    profilePhoto: [
      {
        type: 'fileSize',
        value: 2097152, // 2MB in bytes
        message: 'ファイルサイズは2MB以下にしてください',
      },
    ],
  };

  // Example 3: Conditional Fields
  const conditionalFormSections: FormSection[] = [
    {
      id: 'shipping',
      title: '配送情報',
      icon: 'location',
      fields: [
        {
          name: 'shippingMethod',
          label: '配送方法',
          type: 'radio',
          required: true,
          options: [
            { value: 'standard', label: '通常配送（無料）', description: '5-7営業日でお届け' },
            { value: 'express', label: '速達配送（¥500）', description: '2-3営業日でお届け' },
            { value: 'pickup', label: '店舗受取（無料）', description: '最寄りの店舗で受け取り' },
          ],
        },
        {
          name: 'shippingAddress',
          label: '配送先住所',
          type: 'textarea',
          required: true,
          rows: 3,
          visible: (formData) => {
            return formData.shippingMethod !== 'pickup';
          },
        },
        {
          name: 'pickupStore',
          label: '受取店舗',
          type: 'select',
          required: true,
          options: [
            { value: 'shibuya', label: '渋谷店' },
            { value: 'shinjuku', label: '新宿店' },
            { value: 'ginza', label: '銀座店' },
          ],
          visible: (formData) => {
            return formData.shippingMethod === 'pickup';
          },
        },
        {
          name: 'deliveryDate',
          label: '希望配送日',
          type: 'date',
          helperText: '本日から3日後以降の日付を選択してください',
          visible: (formData) => {
            return formData.shippingMethod === 'express';
          },
        },
      ],
    },
  ];

  // Notification handlers
  const handleMarkNotificationAsRead = (notificationId: string | number) => {
    setNotifications(prevNotifications =>
      prevNotifications.map(notification =>
        notification.id === notificationId
          ? { ...notification, read: true }
          : notification
      )
    );
  };

  const handleMarkAllNotificationsAsRead = () => {
    setNotifications(prevNotifications =>
      prevNotifications.map(notification => ({ ...notification, read: true }))
    );
  };

  // Handle navigation
  const handleNavigate = (page: string) => {
    // Map page names to routes
    const routeMap: Record<string, string> = {
      'dashboard': '/pages/dashboard',
      'data-list': '/pages/data/list',
      'statistics': '/pages/statistics',
      'settings': '/pages/settings',
      'notifications': '/pages/notifications',
      'login': '/pages/login',
      'qna': '/pages/qna',
      'privacy': '/pages/privacy',
      'terms': '/pages/terms',
      'commercial': '/pages/commercial',
    };

    const route = routeMap[page] || `/pages/${page}`;
    navigate(route);
  };

  // Handlers
  const handleSubmit = async (data: Record<string, any>) => {
    console.log('Form submitted:', data);

    // Simulate API call
    return new Promise<void>((resolve) => {
      setTimeout(() => {
        // Store flash message in sessionStorage
        sessionStorage.setItem('flashMessage', JSON.stringify({
          type: 'success',
          message: 'データを登録しました'
        }));

        // Redirect to data list using navigate
        navigate('/pages/data/list');
        resolve();
      }, 1000);
    });
  };


  const handleDraftSave = async (data: Record<string, any>) => {
    console.log('Draft saved:', data);

    // Store flash message in sessionStorage
    sessionStorage.setItem('flashMessage', JSON.stringify({
      type: 'success',
      message: '下書きを保存しました'
    }));

    // Redirect to data list using navigate
    navigate('/pages/data/list');
  };

  const handleFieldChange = (fieldName: string, value: any, allData: Record<string, any>) => {
    console.log(`Field ${fieldName} changed to:`, value);
    console.log('All form data:', allData);
  };

  // Example configurations
  const exampleProps: DynamicFormPageProps = {
    title: pageTitle,
    sections: complexFormSections,
    validation: complexFormValidation,
    initialData: isEditMode ? {
      // Pre-fill some data for edit mode
      firstName: '太郎',
      lastName: '山田',
      email: 'taro.yamada@example.com',
      phone: '09012345678',
      alternatePhone: '0312345678',
      postalCode: '1500043',
      prefecture: 'tokyo',
      city: '渋谷区',
      address1: '道玄坂1-2-3',
      address2: '渋谷ビル 4F',
      employmentStatus: 'fulltime',
      occupation: 'ソフトウェアエンジニア',
      companyName: '株式会社サンプル',
      annualIncome: '6000000',
      skills: ['programming', 'design'],
      workLocation: ['tokyo', 'remote'],
      desiredSalary: 6000000,
      availableStartDate: '2025-02-01',
      preferredContactTime: '14:00',
    } : {},
    onSubmit: handleSubmit,
    onDraftSave: handleDraftSave,
    onChange: handleFieldChange,
    breadcrumbs: [
      { label: 'ホーム', path: '/' },
      { label: 'データ一覧', path: '/pages/data/list' },
      { label: breadcrumbLabel },
    ],
    submitButtonText: '登録',
    showDraftButton: true,
    draftButtonText: '下書き保存',
    validateOnBlur: true,
    showInlineErrors: true,
    showErrorSummary: true,
    warnOnUnsavedChanges: true,
    layout: {
      columns: 2,
      gap: 'md',
      responsive: {
        tablet: 2,
        mobile: 1,
      },
    },
  };

  return (
    <div className={viewMode === 'sp' ? 'force-mobile' : ''}>
      <TemplateNavigation
        viewMode={viewMode}
        onViewModeChange={setViewMode}
      />
      <InfoPageWrapper
        viewMode={viewMode}
        currentPage="data-form"
        onNavigate={handleNavigate}
        unreadCount={notifications.filter(n => !n.read).length}
        showNotificationDropdown={showNotificationDropdown}
        setShowNotificationDropdown={setShowNotificationDropdown}
        showUserMenu={showUserMenu}
        setShowUserMenu={setShowUserMenu}
        isHamburgerOpen={isHamburgerOpen}
        setIsHamburgerOpen={setIsHamburgerOpen}
        sidebarCollapsed={sidebarCollapsed}
        setSidebarCollapsed={setSidebarCollapsed}
        notificationRef={notificationRef}
        notifications={notifications}
        onMarkNotificationAsRead={handleMarkNotificationAsRead}
        onMarkAllNotificationsAsRead={handleMarkAllNotificationsAsRead}
      >
        <FormPage {...exampleProps} />
      </InfoPageWrapper>
    </div>
  );
};

export default DataFormPage;
