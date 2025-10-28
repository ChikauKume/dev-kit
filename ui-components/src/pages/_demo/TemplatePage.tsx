import React, { useState, useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Icon from '../../components/icons/Icon.tsx';
import Dropdown from '../../components/navigation/Dropdown.tsx';
import TemplateNavigation from '../../components/navigation/TemplateNavigation.tsx';
import '../../styles/pages/TemplatePage.css';
import LoginPage from '../templates/auth/LoginPage';
import ForgotPasswordPage from '../templates/auth/ForgotPasswordPage';
import ResetPasswordPage from '../templates/auth/ResetPasswordPage';
import SignupPage from '../templates/auth/SignupPage';
import SignupConfirmPage from '../templates/auth/SignupConfirmPage';
import SignupCompletePage from '../templates/auth/SignupCompletePage';
import Error404Page from '../templates/error/Error404Page';
import Error505Page from '../templates/error/Error505Page';
import MaintenancePage from '../templates/error/MaintenancePage';
import CommercialPage from '../templates/info/CommercialPage';
import TermsPage from '../templates/info/TermsPage';
import PrivacyPage from '../templates/info/PrivacyPage';
import QnaPage from '../templates/info/QnaPage';
// import StatisticsPage from './statistics/StatisticsPage';  // ← Removed: Use StatisticsPage
import InfoPageWrapper from '../../components/layout/InfoPageWrapper';
// import DataEditPage from './data/DataEditPage';  // ← Removed: Use FormPage
import DetailPage from '../templates/data/DetailPage';
// import DataListPage from './data/DataListPage';  // ← Removed: Use ListPage
// import DataCreatePage from './data/DataCreatePage';  // ← Removed: Use FormPage

// 動的コンポーネントのContainer（デモ用）
import DataFormPage from './containers/DataFormPage';

const TemplatePage: React.FC = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState<'login' | 'forgot-password' | 'reset-password' | 'signup' | 'signup-confirm' | 'signup-complete' | 'error-404' | 'error-505' | 'maintenance' | 'data-list' | 'data-detail' | 'data-create' | 'data-edit' | 'statistics' | 'qna' | 'terms' | 'privacy' | 'commercial'>('login');
  const [showUserMenu, setShowUserMenu] = useState(false);
  const [showNotificationDropdown, setShowNotificationDropdown] = useState(false);
  const notificationRef = useRef<HTMLDivElement>(null);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);
  const [resetEmail, setResetEmail] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  // FlashMessage用のstate
  const [flashMessage, setFlashMessage] = useState<{ type: 'success' | 'info' | 'warning' | 'danger'; message: string } | null>(null);


  // 新規登録用のstate
  const [signupName, setSignupName] = useState('');
  const [signupEmail, setSignupEmail] = useState('');
  const [signupPhone, setSignupPhone] = useState('');
  const [signupPassword, setSignupPassword] = useState('');
  const [signupPasswordConfirm, setSignupPasswordConfirm] = useState('');
  const [agreeToTerms, setAgreeToTerms] = useState(false);

  // エラー状態（サンプル用）
  const [loginErrors, setLoginErrors] = useState({
    email: '',
    password: ''
  });
  const [loginFormError, setLoginFormError] = useState('');
  const [resetEmailSuccess, setResetEmailSuccess] = useState(false);
  const [resetEmailError, setResetEmailError] = useState('');
  const [passwordResetSuccess, setPasswordResetSuccess] = useState(false);
  const [passwordResetErrors, setPasswordResetErrors] = useState({
    newPassword: '',
    confirmPassword: ''
  });
  const [signupErrors, setSignupErrors] = useState({
    name: '',
    email: '',
    phone: '',
    password: '',
    passwordConfirm: '',
    agreeToTerms: ''
  });

  // レイアウト切り替え用のstate
  const [viewMode, setViewMode] = useState<'pc' | 'sp'>('pc');

  // ハンバーガーメニュー用のstate
  const [isHamburgerOpen, setIsHamburgerOpen] = useState(false);

  // データ作成フォーム用のstate
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formErrors, setFormErrors] = useState<{[key: string]: string}>({});

  // データ詳細削除確認モーダル
  const [showDataDetailDeleteModal, setShowDataDetailDeleteModal] = useState(false);

  // 外部クリックで通知ドロップダウンを閉じる
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (notificationRef.current && !notificationRef.current.contains(event.target as Node)) {
        setShowNotificationDropdown(false);
      }
    };

    if (showNotificationDropdown) {
      document.addEventListener('mousedown', handleClickOutside);
      return () => {
        document.removeEventListener('mousedown', handleClickOutside);
      };
    }
  }, [showNotificationDropdown]);

  // データ編集画面でフォームに初期値をセット
  useEffect(() => {
    if (activeTab === 'data-edit') {
      setFormData({
        title: 'Webサイトリニューアル',
        description: 'コーポレートサイトの全面リニューアルプロジェクト。レスポンシブデザイン対応とSEO最適化を実施します。',
        category: 'web',
        status: 'in-progress',
        priority: 'high',
        tags: 'Web, デザイン, SEO',
        startDate: '2024-09-15',
        endDate: '2024-12-31'
      });
    }
  }, [activeTab]);

  // 通知データ
  const [notifications, setNotifications] = useState([
    { id: 1, type: 'info', title: 'システムアップデート', message: '新しい機能が追加されました', time: '2時間前', read: false },
    { id: 2, type: 'success', title: 'データ保存完了', message: 'データが正常に保存されました', time: '5時間前', read: false },
    { id: 3, type: 'warning', title: 'メンテナンス予定', message: '明日の深夜にメンテナンスを実施します', time: '1日前', read: true },
    { id: 4, type: 'error', title: 'エラー発生', message: '一部の機能でエラーが発生しています', time: '2日前', read: true }
  ]);

  // 未読通知数を計算
  const unreadCount = notifications.filter(notification => !notification.read).length;

  // 個別通知を既読にする関数
  const handleMarkNotificationAsRead = (notificationId: string | number) => {
    setNotifications(prevNotifications =>
      prevNotifications.map(notification =>
        notification.id === notificationId
          ? { ...notification, read: true }
          : notification
      )
    );
  };

  // 全ての通知を既読にする関数
  const handleMarkAllNotificationsAsRead = () => {
    setNotifications(prevNotifications =>
      prevNotifications.map(notification => ({ ...notification, read: true }))
    );
  };

  const [formData, setFormData] = useState({
    title: '',
    description: '',
    category: '',
    status: 'draft',
    priority: 'medium',
    tags: '',
    startDate: '',
    endDate: ''
  });

  // 個別フィールドのバリデーション関数
  const validateField = (fieldName: string, value: string) => {
    let error = '';

    switch (fieldName) {
      case 'name':
        if (!value.trim()) {
          error = 'お名前を入力してください';
        }
        break;

      case 'email':
        if (!value.trim()) {
          error = 'メールアドレスを入力してください';
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
          error = '正しいメールアドレスを入力してください';
        }
        break;

      case 'phone':
        if (value.trim() && !/^[0-9]{10,11}$/.test(value.replace(/-/g, ''))) {
          error = '正しい電話番号を入力してください（10〜11桁の数字）';
        }
        break;

      case 'password':
        if (!value) {
          error = 'パスワードを入力してください';
        } else if (value.length < 8) {
          error = 'パスワードは8文字以上で入力してください';
        }
        break;

      case 'passwordConfirm':
        if (!value) {
          error = 'パスワード確認を入力してください';
        } else if (signupPassword !== value) {
          error = 'パスワードが一致しません';
        }
        break;
    }

    setSignupErrors(prev => ({ ...prev, [fieldName]: error }));
    return error === '';
  };

  // 全フィールドのバリデーション
  const validateSignupForm = () => {
    const errors = {
      name: '',
      email: '',
      phone: '',
      password: '',
      passwordConfirm: '',
      agreeToTerms: ''
    };

    // 名前のバリデーション
    if (!signupName.trim()) {
      errors.name = 'お名前を入力してください';
    }

    // メールアドレスのバリデーション
    if (!signupEmail.trim()) {
      errors.email = 'メールアドレスを入力してください';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(signupEmail)) {
      errors.email = '正しいメールアドレスを入力してください';
    }

    // 電話番号のバリデーション（任意項目だが、入力されている場合はチェック）
    if (signupPhone.trim() && !/^[0-9]{10,11}$/.test(signupPhone.replace(/-/g, ''))) {
      errors.phone = '正しい電話番号を入力してください（10〜11桁の数字）';
    }

    // パスワードのバリデーション
    if (!signupPassword) {
      errors.password = 'パスワードを入力してください';
    } else if (signupPassword.length < 8) {
      errors.password = 'パスワードは8文字以上で入力してください';
    }

    // パスワード確認のバリデーション
    if (!signupPasswordConfirm) {
      errors.passwordConfirm = 'パスワード確認を入力してください';
    } else if (signupPassword !== signupPasswordConfirm) {
      errors.passwordConfirm = 'パスワードが一致しません';
    }

    // 利用規約同意のバリデーション
    if (!agreeToTerms) {
      errors.agreeToTerms = '利用規約に同意してください';
    }

    setSignupErrors(errors);

    // エラーがあるかチェック
    return !Object.values(errors).some(error => error !== '');
  };

  // フォーム送信ハンドラー
  const handleSignupSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (validateSignupForm()) {
      // バリデーション成功 - 確認画面へ
      setActiveTab('signup-confirm');
    }
  };

  // データ作成フォームの個別フィールドバリデーション（onBlur用）
  const validateDataCreateField = (fieldName: string, value: string) => {
    let error = '';

    switch (fieldName) {
      case 'title':
        if (!value.trim()) {
          error = 'タイトルを入力してください';
        }
        break;

      case 'description':
        if (!value.trim()) {
          error = '説明を入力してください';
        }
        break;

      case 'category':
        if (!value) {
          error = 'カテゴリーを選択してください';
        }
        break;

      case 'startDate':
        // 開始日が入力されていて、終了日も入力されている場合
        if (value && formData.endDate) {
          if (value > formData.endDate) {
            error = '開始日は終了日より前の日付を選択してください';
          }
        }
        break;

      case 'endDate':
        // 終了日が入力されていて、開始日も入力されている場合
        if (value && formData.startDate) {
          if (value < formData.startDate) {
            error = '終了日は開始日より後の日付を選択してください';
          }
        }
        break;
    }

    setFormErrors(prev => ({ ...prev, [fieldName]: error }));
  };

  // データ作成フォームのバリデーションと送信
  const handleDataCreateSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const errors: {[key: string]: string} = {};

    // タイトルのバリデーション
    if (!formData.title.trim()) {
      errors.title = 'タイトルを入力してください';
    }

    // 説明のバリデーション
    if (!formData.description.trim()) {
      errors.description = '説明を入力してください';
    }

    // カテゴリーのバリデーション
    if (!formData.category) {
      errors.category = 'カテゴリーを選択してください';
    }

    // 日付の前後関係チェック（両方入力されている場合のみ）
    if (formData.startDate && formData.endDate) {
      if (formData.startDate > formData.endDate) {
        errors.startDate = '開始日は終了日より前の日付を選択してください';
      }
    }

    setFormErrors(errors);

    // エラーがある場合は最初のエラーフィールドまでスクロール
    if (Object.keys(errors).length > 0) {
      const firstErrorField = Object.keys(errors)[0];
      const fieldElement = document.querySelector(`[name="${firstErrorField}"]`);
      if (fieldElement) {
        fieldElement.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }
      return;
    }

    // バリデーション成功 - 画面最上部にスクロールしてから登録処理開始
    window.scrollTo({ top: 0, behavior: 'smooth' });

    setIsSubmitting(true);

    // 実際のAPIコールをシミュレート
    setTimeout(() => {
      setIsSubmitting(false);
      setFlashMessage({ type: 'success', message: 'データの更新が完了しました' });
      setActiveTab('data-list');

      // タブ切り替え後に最上部にスクロール
      setTimeout(() => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }, 100);

      // 3秒後にメッセージを非表示
      setTimeout(() => {
        setFlashMessage(null);
      }, 3000);
    }, 1500);
  };

  // 下書き保存処理
  const handleDraftSave = () => {
    // 下書き保存は必須項目のみチェック（日付は任意）
    const newErrors = {
      title: '',
      description: '',
      category: '',
      startDate: '',
      endDate: '',
      priority: ''
    };

    let hasError = false;
    let firstErrorField: string | null = null;

    if (!formData.title.trim()) {
      newErrors.title = 'タイトルを入力してください';
      hasError = true;
      if (!firstErrorField) firstErrorField = 'title';
    }

    if (!formData.description.trim()) {
      newErrors.description = '説明を入力してください';
      hasError = true;
      if (!firstErrorField) firstErrorField = 'description';
    }

    if (!formData.category) {
      newErrors.category = 'カテゴリーを選択してください';
      hasError = true;
      if (!firstErrorField) firstErrorField = 'category';
    }

    // 日付の前後関係チェック（両方入力されている場合のみ）
    if (formData.startDate && formData.endDate) {
      if (formData.startDate > formData.endDate) {
        newErrors.startDate = '開始日は終了日より前の日付を選択してください';
        hasError = true;
        if (!firstErrorField) firstErrorField = 'startDate';
      }
    }

    setFormErrors(newErrors);

    if (hasError) {
      // 最初のエラーフィールドにスクロール
      if (firstErrorField) {
        setTimeout(() => {
          const errorElement = document.querySelector(`[name="${firstErrorField}"]`) as HTMLElement;
          if (errorElement) {
            errorElement.scrollIntoView({ behavior: 'smooth', block: 'center' });
            errorElement.focus();
          }
        }, 100);
      }
      return;
    }

    // バリデーション成功 - 画面最上部にスクロールしてから下書き保存処理開始
    window.scrollTo({ top: 0, behavior: 'smooth' });

    setIsSubmitting(true);

    // 実際のAPIコールをシミュレート
    setTimeout(() => {
      setIsSubmitting(false);
      setFlashMessage({ type: 'success', message: '下書きを更新しました' });
      setActiveTab('data-list');

      // タブ切り替え後に最上部にスクロール
      setTimeout(() => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }, 100);

      // 3秒後にメッセージを非表示
      setTimeout(() => {
        setFlashMessage(null);
      }, 3000);
    }, 1500);
  };

  // onNavigate用のラッパー関数（型エラー回避）
  const handleNavigate = (page: string) => {
    setActiveTab(page as any);
  };

  // パスワード再設定用の個別フィールドバリデーション
  const validatePasswordResetField = (fieldName: string, value: string) => {
    let error = '';

    switch (fieldName) {
      case 'newPassword':
        if (!value) {
          error = 'パスワードを入力してください';
        } else if (value.length < 8) {
          error = 'パスワードは8文字以上で入力してください';
        }
        break;

      case 'confirmPassword':
        if (!value) {
          error = 'パスワード確認を入力してください';
        } else if (newPassword !== value) {
          error = 'パスワードが一致しません';
        }
        break;
    }

    setPasswordResetErrors(prev => ({ ...prev, [fieldName]: error }));
    return error === '';
  };

  // パスワード再設定フォーム全体のバリデーション
  const validatePasswordResetForm = () => {
    const errors = {
      newPassword: '',
      confirmPassword: ''
    };

    // 新しいパスワードのバリデーション
    if (!newPassword) {
      errors.newPassword = 'パスワードを入力してください';
    } else if (newPassword.length < 8) {
      errors.newPassword = 'パスワードは8文字以上で入力してください';
    }

    // パスワード確認のバリデーション
    if (!confirmPassword) {
      errors.confirmPassword = 'パスワード確認を入力してください';
    } else if (newPassword !== confirmPassword) {
      errors.confirmPassword = 'パスワードが一致しません';
    }

    setPasswordResetErrors(errors);

    // エラーがあるかチェック
    return !Object.values(errors).some(error => error !== '');
  };

  // パスワード再設定フォーム送信ハンドラー
  const handlePasswordResetSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (validatePasswordResetForm()) {
      // バリデーション成功 - 成功メッセージを表示
      setPasswordResetSuccess(true);
      // 実際の処理では、ここでAPIを呼び出してパスワードを更新する
    }
  };

  // 再設定メール送信用のバリデーション
  const validateResetEmail = (email: string) => {
    let error = '';

    if (!email.trim()) {
      error = 'メールアドレスを入力してください';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      error = '正しいメールアドレスを入力してください';
    }

    setResetEmailError(error);
    return error === '';
  };

  // 再設定メール送信フォームのハンドラー
  const handleResetEmailSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (validateResetEmail(resetEmail)) {
      // バリデーション成功 - 成功メッセージを表示
      setResetEmailSuccess(true);
      // 実際の処理では、ここでAPIを呼び出して再設定URLを送信する
    }
  };

  // ログイン用の個別フィールドバリデーション
  const validateLoginField = (fieldName: string, value: string) => {
    let error = '';

    switch (fieldName) {
      case 'email':
        if (!value.trim()) {
          error = 'メールアドレスを入力してください';
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
          error = '正しいメールアドレスを入力してください';
        }
        break;

      case 'password':
        if (!value) {
          error = 'パスワードを入力してください';
        }
        break;
    }

    setLoginErrors(prev => ({ ...prev, [fieldName]: error }));
    return error === '';
  };

  // ログインフォーム全体のバリデーション
  const validateLoginForm = () => {
    const errors = {
      email: '',
      password: ''
    };

    // メールアドレスのバリデーション
    if (!email.trim()) {
      errors.email = 'メールアドレスを入力してください';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      errors.email = '正しいメールアドレスを入力してください';
    }

    // パスワードのバリデーション
    if (!password) {
      errors.password = 'パスワードを入力してください';
    }

    setLoginErrors(errors);

    // エラーがあるかチェック
    return !Object.values(errors).some(error => error !== '');
  };

  // ログインフォーム送信ハンドラー
  const handleLoginSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (validateLoginForm()) {
      // バリデーション成功 - ログイン処理
      // 実際の処理では、ここでAPIを呼び出してログイン認証を行う
      // ここではデモとして、認証失敗のエラーメッセージを表示
      setLoginFormError('メールアドレスまたはパスワードが正しくありません');
    }
  };

  return (
    <div className={`template-page ${viewMode === 'sp' ? 'force-mobile' : ''}`}>
      {/* ナビゲーション */}
      <TemplateNavigation
        viewMode={viewMode}
        onViewModeChange={setViewMode}
      />

      {activeTab === 'login' && (
        <LoginPage
          email={email}
          password={password}
          rememberMe={rememberMe}
          loginFormError={loginFormError}
          loginErrors={loginErrors}
          onEmailChange={setEmail}
          onPasswordChange={setPassword}
          onRememberMeChange={setRememberMe}
          onEmailBlur={(value) => validateLoginField('email', value)}
          onPasswordBlur={(value) => validateLoginField('password', value)}
          onSubmit={handleLoginSubmit}
          onNavigateToForgotPassword={() => setActiveTab('forgot-password')}
          hideNavigation={true}
        />
      )}

      {activeTab === 'forgot-password' && (
        <ForgotPasswordPage
          resetEmail={resetEmail}
          resetEmailError={resetEmailError}
          resetEmailSuccess={resetEmailSuccess}
          onResetEmailChange={setResetEmail}
          onResetEmailBlur={validateResetEmail}
          onSubmit={handleResetEmailSubmit}
          onNavigateToLogin={() => setActiveTab('login')}
          hideNavigation={true}
        />
      )}

      {activeTab === 'reset-password' && (
        <ResetPasswordPage
          newPassword={newPassword}
          confirmPassword={confirmPassword}
          passwordResetSuccess={passwordResetSuccess}
          passwordResetErrors={passwordResetErrors}
          onNewPasswordChange={setNewPassword}
          onConfirmPasswordChange={setConfirmPassword}
          onNewPasswordBlur={(value) => validatePasswordResetField('newPassword', value)}
          onConfirmPasswordBlur={(value) => validatePasswordResetField('confirmPassword', value)}
          onSubmit={handlePasswordResetSubmit}
          hideNavigation={true}
        />
      )}

      {activeTab === 'signup' && (
        <SignupPage
          signupName={signupName}
          signupEmail={signupEmail}
          signupPhone={signupPhone}
          signupPassword={signupPassword}
          signupPasswordConfirm={signupPasswordConfirm}
          agreeToTerms={agreeToTerms}
          signupErrors={signupErrors}
          onNameChange={setSignupName}
          onEmailChange={setSignupEmail}
          onPhoneChange={setSignupPhone}
          onPasswordChange={setSignupPassword}
          onPasswordConfirmChange={setSignupPasswordConfirm}
          onAgreeToTermsChange={setAgreeToTerms}
          onNameBlur={(value) => validateField('name', value)}
          onEmailBlur={(value) => validateField('email', value)}
          onPhoneBlur={(value) => validateField('phone', value)}
          onPasswordBlur={(value) => validateField('password', value)}
          onPasswordConfirmBlur={(value) => validateField('passwordConfirm', value)}
          onSubmit={handleSignupSubmit}
          onNavigateToLogin={() => setActiveTab('login')}
          hideNavigation={true}
        />
      )}

      {activeTab === 'signup-confirm' && (
        <SignupConfirmPage
          signupName={signupName}
          signupEmail={signupEmail}
          signupPhone={signupPhone}
          onConfirm={() => setActiveTab('signup-complete')}
          onBack={() => setActiveTab('signup')}
          hideNavigation={true}
        />
      )}

      {activeTab === 'signup-complete' && (
        <SignupCompletePage
          onNavigateToLogin={() => setActiveTab('login')}
          hideNavigation={true}
        />
      )}

      {activeTab === 'error-404' && (
        <Error404Page onNavigate={handleNavigate} hideNavigation={true} />
      )}

      {activeTab === 'error-505' && (
        <Error505Page onNavigate={handleNavigate} hideNavigation={true} />
      )}

      {activeTab === 'maintenance' && (
        <MaintenancePage hideNavigation={true} />
      )}


      {/* データ詳細画面 */}
      {activeTab === 'data-detail' && (
        <DetailPage
          viewMode={viewMode}
          onNavigate={handleNavigate}
          unreadCount={unreadCount}
          onUnreadCountChange={setUnreadCount}
          showFlashMessage={flashMessage}
          onFlashMessageChange={setFlashMessage}
          showDeleteModal={showDataDetailDeleteModal}
          onDeleteModalChange={setShowDataDetailDeleteModal}
        />
      )}

      {/* データ作成フォーム */}
      {activeTab === 'data-create' && (
        <InfoPageWrapper
          viewMode={viewMode}
          currentPage="data-create"
          onNavigate={handleNavigate}
          unreadCount={unreadCount}
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
          <DataFormPage />
        </InfoPageWrapper>
      )}

      {/* データ編集フォーム */}
      {activeTab === 'data-edit' && (
        <InfoPageWrapper
          viewMode={viewMode}
          currentPage="data-edit"
          onNavigate={handleNavigate}
          unreadCount={unreadCount}
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
          <DataFormPage />
        </InfoPageWrapper>
      )}

      {/* Q&A画面 */}
      {activeTab === 'qna' && (
        <InfoPageWrapper
          viewMode={viewMode}
          currentPage="qna"
          onNavigate={handleNavigate}
          unreadCount={unreadCount}
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
          <QnaPage viewMode={viewMode} hideNavigation={true} />
        </InfoPageWrapper>
      )}

      {/* 利用規約ページ */}
      {activeTab === 'terms' && (
        <InfoPageWrapper
          viewMode={viewMode}
          currentPage="terms"
          onNavigate={handleNavigate}
          unreadCount={unreadCount}
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
          <TermsPage viewMode={viewMode} hideNavigation={true} />
        </InfoPageWrapper>
      )}

      {/* プライバシーポリシーページ */}
      {activeTab === 'privacy' && (
        <InfoPageWrapper
          viewMode={viewMode}
          currentPage="privacy"
          onNavigate={handleNavigate}
          unreadCount={unreadCount}
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
          <PrivacyPage viewMode={viewMode} hideNavigation={true} />
        </InfoPageWrapper>
      )}

      {/* 特定商取引法に基づく表記ページ */}
      {activeTab === 'commercial' && (
        <InfoPageWrapper
          viewMode={viewMode}
          currentPage="commercial"
          onNavigate={handleNavigate}
          unreadCount={unreadCount}
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
          <CommercialPage viewMode={viewMode} hideNavigation={true} />
        </InfoPageWrapper>
      )}

    </div>
  );
};

export default TemplatePage;
