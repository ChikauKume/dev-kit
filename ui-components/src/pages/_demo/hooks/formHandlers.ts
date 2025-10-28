import { ActiveTab, FlashMessage, FormData } from './pageState';

interface FormHandlersProps {
  // Signup states
  signupName: string;
  signupEmail: string;
  signupPhone: string;
  signupPassword: string;
  signupPasswordConfirm: string;
  agreeToTerms: boolean;
  setSignupErrors: React.Dispatch<React.SetStateAction<{
    name: string;
    email: string;
    phone: string;
    password: string;
    passwordConfirm: string;
    agreeToTerms: string;
  }>>;
  setActiveTab: (tab: ActiveTab) => void;

  // Login states
  email: string;
  password: string;
  setLoginErrors: React.Dispatch<React.SetStateAction<{
    email: string;
    password: string;
  }>>;
  setLoginFormError: (error: string) => void;

  // Password reset states
  resetEmail: string;
  setResetEmailError: (error: string) => void;
  setResetEmailSuccess: (success: boolean) => void;
  newPassword: string;
  confirmPassword: string;
  setPasswordResetErrors: React.Dispatch<React.SetStateAction<{
    newPassword: string;
    confirmPassword: string;
  }>>;
  setPasswordResetSuccess: (success: boolean) => void;

  // Settings states
  settingsName: string;
  settingsEmail: string;
  settingsPhone: string;
  settingsNewPassword: string;
  settingsCurrentPassword: string;
  settingsConfirmPassword: string;
  setSettingsErrors: React.Dispatch<React.SetStateAction<{
    name: string;
    email: string;
    phone: string;
    currentPassword: string;
    newPassword: string;
    confirmPassword: string;
    avatar: string;
  }>>;
  settingsErrors: {
    name: string;
    email: string;
    phone: string;
    currentPassword: string;
    newPassword: string;
    confirmPassword: string;
    avatar: string;
  };
  setSettingsUpdateSuccess: (success: boolean) => void;
  setSettingsCurrentPassword: (password: string) => void;
  setSettingsNewPassword: (password: string) => void;
  setSettingsConfirmPassword: (password: string) => void;
  setAvatarPreview: (preview: string | null) => void;

  // Form data states
  formData: FormData;
  setFormErrors: React.Dispatch<React.SetStateAction<{[key: string]: string}>>;
  setIsSubmitting: (submitting: boolean) => void;
  setShowFullScreenLoader: (show: boolean) => void;
  setFlashMessage: (message: FlashMessage | null) => void;
}

export const useFormHandlers = (props: FormHandlersProps) => {
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
        } else if (props.signupPassword !== value) {
          error = 'パスワードが一致しません';
        }
        break;
    }

    props.setSignupErrors(prev => ({ ...prev, [fieldName]: error }));
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
    if (!props.signupName.trim()) {
      errors.name = 'お名前を入力してください';
    }

    // メールアドレスのバリデーション
    if (!props.signupEmail.trim()) {
      errors.email = 'メールアドレスを入力してください';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(props.signupEmail)) {
      errors.email = '正しいメールアドレスを入力してください';
    }

    // 電話番号のバリデーション（任意項目だが、入力されている場合はチェック）
    if (props.signupPhone.trim() && !/^[0-9]{10,11}$/.test(props.signupPhone.replace(/-/g, ''))) {
      errors.phone = '正しい電話番号を入力してください（10〜11桁の数字）';
    }

    // パスワードのバリデーション
    if (!props.signupPassword) {
      errors.password = 'パスワードを入力してください';
    } else if (props.signupPassword.length < 8) {
      errors.password = 'パスワードは8文字以上で入力してください';
    }

    // パスワード確認のバリデーション
    if (!props.signupPasswordConfirm) {
      errors.passwordConfirm = 'パスワード確認を入力してください';
    } else if (props.signupPassword !== props.signupPasswordConfirm) {
      errors.passwordConfirm = 'パスワードが一致しません';
    }

    // 利用規約同意のバリデーション
    if (!props.agreeToTerms) {
      errors.agreeToTerms = '利用規約に同意してください';
    }

    props.setSignupErrors(errors);

    // エラーがあるかチェック
    return !Object.values(errors).some(error => error !== '');
  };

  // フォーム送信ハンドラー
  const handleSignupSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (validateSignupForm()) {
      // バリデーション成功 - 確認画面へ
      props.setActiveTab('signup-confirm');
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
        if (value && props.formData.endDate) {
          if (value > props.formData.endDate) {
            error = '開始日は終了日より前の日付を選択してください';
          }
        }
        break;

      case 'endDate':
        // 終了日が入力されていて、開始日も入力されている場合
        if (value && props.formData.startDate) {
          if (value < props.formData.startDate) {
            error = '終了日は開始日より後の日付を選択してください';
          }
        }
        break;
    }

    props.setFormErrors(prev => ({ ...prev, [fieldName]: error }));
  };

  // データ作成フォームのバリデーションと送信
  const handleDataCreateSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const errors: {[key: string]: string} = {};

    // タイトルのバリデーション
    if (!props.formData.title.trim()) {
      errors.title = 'タイトルを入力してください';
    }

    // 説明のバリデーション
    if (!props.formData.description.trim()) {
      errors.description = '説明を入力してください';
    }

    // カテゴリーのバリデーション
    if (!props.formData.category) {
      errors.category = 'カテゴリーを選択してください';
    }

    // 日付の前後関係チェック（両方入力されている場合のみ）
    if (props.formData.startDate && props.formData.endDate) {
      if (props.formData.startDate > props.formData.endDate) {
        errors.startDate = '開始日は終了日より前の日付を選択してください';
      }
    }

    props.setFormErrors(errors);

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

    props.setIsSubmitting(true);
    props.setShowFullScreenLoader(true);

    // 実際のAPIコールをシミュレート
    setTimeout(() => {
      props.setIsSubmitting(false);
      props.setShowFullScreenLoader(false);
      props.setFlashMessage({ type: 'success', message: 'データの更新が完了しました' });
      props.setActiveTab('data-list');

      // タブ切り替え後に最上部にスクロール
      setTimeout(() => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }, 100);

      // 3秒後にメッセージを非表示
      setTimeout(() => {
        props.setFlashMessage(null);
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

    if (!props.formData.title.trim()) {
      newErrors.title = 'タイトルを入力してください';
      hasError = true;
      if (!firstErrorField) firstErrorField = 'title';
    }

    if (!props.formData.description.trim()) {
      newErrors.description = '説明を入力してください';
      hasError = true;
      if (!firstErrorField) firstErrorField = 'description';
    }

    if (!props.formData.category) {
      newErrors.category = 'カテゴリーを選択してください';
      hasError = true;
      if (!firstErrorField) firstErrorField = 'category';
    }

    // 日付の前後関係チェック（両方入力されている場合のみ）
    if (props.formData.startDate && props.formData.endDate) {
      if (props.formData.startDate > props.formData.endDate) {
        newErrors.startDate = '開始日は終了日より前の日付を選択してください';
        hasError = true;
        if (!firstErrorField) firstErrorField = 'startDate';
      }
    }

    props.setFormErrors(newErrors);

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

    props.setIsSubmitting(true);
    props.setShowFullScreenLoader(true);

    // 実際のAPIコールをシミュレート
    setTimeout(() => {
      props.setIsSubmitting(false);
      props.setShowFullScreenLoader(false);
      props.setFlashMessage({ type: 'success', message: '下書きを更新しました' });
      props.setActiveTab('data-list');

      // タブ切り替え後に最上部にスクロール
      setTimeout(() => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }, 100);

      // 3秒後にメッセージを非表示
      setTimeout(() => {
        props.setFlashMessage(null);
      }, 3000);
    }, 1500);
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
        } else if (props.newPassword !== value) {
          error = 'パスワードが一致しません';
        }
        break;
    }

    props.setPasswordResetErrors(prev => ({ ...prev, [fieldName]: error }));
    return error === '';
  };

  // パスワード再設定フォーム全体のバリデーション
  const validatePasswordResetForm = () => {
    const errors = {
      newPassword: '',
      confirmPassword: ''
    };

    // 新しいパスワードのバリデーション
    if (!props.newPassword) {
      errors.newPassword = 'パスワードを入力してください';
    } else if (props.newPassword.length < 8) {
      errors.newPassword = 'パスワードは8文字以上で入力してください';
    }

    // パスワード確認のバリデーション
    if (!props.confirmPassword) {
      errors.confirmPassword = 'パスワード確認を入力してください';
    } else if (props.newPassword !== props.confirmPassword) {
      errors.confirmPassword = 'パスワードが一致しません';
    }

    props.setPasswordResetErrors(errors);

    // エラーがあるかチェック
    return !Object.values(errors).some(error => error !== '');
  };

  // パスワード再設定フォーム送信ハンドラー
  const handlePasswordResetSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (validatePasswordResetForm()) {
      // バリデーション成功 - 成功メッセージを表示
      props.setPasswordResetSuccess(true);
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

    props.setResetEmailError(error);
    return error === '';
  };

  // 再設定メール送信フォームのハンドラー
  const handleResetEmailSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (validateResetEmail(props.resetEmail)) {
      // バリデーション成功 - 成功メッセージを表示
      props.setResetEmailSuccess(true);
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

    props.setLoginErrors(prev => ({ ...prev, [fieldName]: error }));
    return error === '';
  };

  // ログインフォーム全体のバリデーション
  const validateLoginForm = () => {
    const errors = {
      email: '',
      password: ''
    };

    // メールアドレスのバリデーション
    if (!props.email.trim()) {
      errors.email = 'メールアドレスを入力してください';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(props.email)) {
      errors.email = '正しいメールアドレスを入力してください';
    }

    // パスワードのバリデーション
    if (!props.password) {
      errors.password = 'パスワードを入力してください';
    }

    props.setLoginErrors(errors);

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
      props.setLoginFormError('メールアドレスまたはパスワードが正しくありません');
    }
  };

  // 設定画面用の個別フィールドバリデーション
  const validateSettingsField = (fieldName: string, value: string) => {
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

      case 'currentPassword':
        if (props.settingsNewPassword && !value) {
          error = '現在のパスワードを入力してください';
        }
        break;

      case 'newPassword':
        if (value && value.length < 8) {
          error = 'パスワードは8文字以上で入力してください';
        }
        break;

      case 'confirmPassword':
        if (props.settingsNewPassword && value !== props.settingsNewPassword) {
          error = 'パスワードが一致しません';
        }
        break;
    }

    props.setSettingsErrors(prev => ({ ...prev, [fieldName]: error }));
    return error === '';
  };

  // 設定画面フォーム送信ハンドラー
  const handleSettingsSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const errors = {
      name: '',
      email: '',
      phone: '',
      currentPassword: '',
      newPassword: '',
      confirmPassword: ''
    };

    // 名前のバリデーション
    if (!props.settingsName.trim()) {
      errors.name = 'お名前を入力してください';
    }

    // メールアドレスのバリデーション
    if (!props.settingsEmail.trim()) {
      errors.email = 'メールアドレスを入力してください';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(props.settingsEmail)) {
      errors.email = '正しいメールアドレスを入力してください';
    }

    // 電話番号のバリデーション（任意項目だが、入力されている場合はチェック）
    if (props.settingsPhone.trim() && !/^[0-9]{10,11}$/.test(props.settingsPhone.replace(/-/g, ''))) {
      errors.phone = '正しい電話番号を入力してください（10〜11桁の数字）';
    }

    // パスワード変更のバリデーション（任意）
    if (props.settingsNewPassword) {
      if (!props.settingsCurrentPassword) {
        errors.currentPassword = '現在のパスワードを入力してください';
      }
      if (props.settingsNewPassword.length < 8) {
        errors.newPassword = 'パスワードは8文字以上で入力してください';
      }
      if (props.settingsNewPassword !== props.settingsConfirmPassword) {
        errors.confirmPassword = 'パスワードが一致しません';
      }
    }

    props.setSettingsErrors(errors);

    // エラーがあるかチェック
    const hasErrors = Object.values(errors).some(error => error !== '');

    if (!hasErrors) {
      // バリデーション成功 - 設定更新処理
      props.setSettingsUpdateSuccess(true);
      // パスワードフィールドをクリア
      props.setSettingsCurrentPassword('');
      props.setSettingsNewPassword('');
      props.setSettingsConfirmPassword('');
      // 実際の処理では、ここでAPIを呼び出して設定を更新する

      // 3秒後に成功メッセージを非表示
      setTimeout(() => {
        props.setSettingsUpdateSuccess(false);
      }, 3000);
    }
  };

  // アバター画像変更ハンドラー
  const handleAvatarChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      // GIFファイルのチェック
      if (file.type === 'image/gif') {
        props.setSettingsErrors({ ...props.settingsErrors, avatar: 'GIF画像は使用できません' });
        e.target.value = '';
        return;
      }

      // ファイルサイズのチェック（2MB = 2 * 1024 * 1024 bytes）
      const maxSize = 2 * 1024 * 1024;
      if (file.size > maxSize) {
        props.setSettingsErrors({ ...props.settingsErrors, avatar: 'ファイルサイズは2MB以下にしてください' });
        e.target.value = '';
        return;
      }

      // バリデーション成功時
      props.setSettingsErrors({ ...props.settingsErrors, avatar: '' });
      const reader = new FileReader();
      reader.onloadend = () => {
        props.setAvatarPreview(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  return {
    validateField,
    validateSignupForm,
    handleSignupSubmit,
    validateDataCreateField,
    handleDataCreateSubmit,
    handleDraftSave,
    validatePasswordResetField,
    validatePasswordResetForm,
    handlePasswordResetSubmit,
    validateResetEmail,
    handleResetEmailSubmit,
    validateLoginField,
    validateLoginForm,
    handleLoginSubmit,
    validateSettingsField,
    handleSettingsSubmit,
    handleAvatarChange
  };
};
