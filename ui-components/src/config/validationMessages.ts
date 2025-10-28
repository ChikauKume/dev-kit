/**
 * Centralized validation and system messages
 */

/**
 * Validation error messages
 * Used throughout the application for form validation
 */
export const validationMessages = {
  required: (fieldName: string) => `${fieldName}を入力してください`,
  email: '正しいメールアドレスを入力してください',
  minLength: (fieldName: string, min: number) =>
    `${fieldName}は${min}文字以上で入力してください`,
  maxLength: (fieldName: string, max: number) =>
    `${fieldName}は${max}文字以内で入力してください`,
  passwordMismatch: 'パスワードが一致しません',
  passwordRequirements: {
    minLength: 'パスワードは8文字以上で入力してください',
    uppercase: 'パスワードには大文字を1つ以上含めてください',
    lowercase: 'パスワードには小文字を1つ以上含めてください',
    number: 'パスワードには数字を1つ以上含めてください',
    special: 'パスワードには特殊文字を1つ以上含めてください'
  },
  phone: '正しい電話番号を入力してください（10〜11桁の数字）',
  date: '正しい日付形式で入力してください（YYYY-MM-DD）',
  dateRange: {
    startBeforeEnd: '開始日は終了日より前の日付を選択してください',
    endAfterStart: '終了日は開始日より後の日付を選択してください'
  },
  terms: '利用規約に同意してください',
  select: (fieldName: string) => `${fieldName}を選択してください`
} as const;

/**
 * Success messages
 * Used for successful operations throughout the application
 */
export const successMessages = {
  login: 'ログインしました',
  signup: 'アカウントを作成しました',
  logout: 'ログアウトしました',
  dataCreated: 'データを作成しました',
  dataUpdated: 'データを更新しました',
  dataDeleted: 'データを削除しました',
  draftSaved: '下書きを更新しました',
  passwordReset: 'パスワードをリセットしました',
  passwordResetEmailSent: 'パスワード再設定用のメールを送信しました',
  settingsSaved: '設定を保存しました',
  profileUpdated: 'プロフィールを更新しました'
} as const;

/**
 * Error messages
 * Used for error handling throughout the application
 */
export const errorMessages = {
  loginFailed: 'メールアドレスまたはパスワードが正しくありません',
  signupFailed: 'アカウントの作成に失敗しました',
  networkError: 'ネットワークエラーが発生しました',
  serverError: 'サーバーエラーが発生しました',
  unauthorized: '認証が必要です',
  forbidden: 'アクセス権限がありません',
  notFound: 'リソースが見つかりません',
  validationFailed: '入力内容にエラーがあります',
  duplicateEntry: 'すでに登録されています',
  deleteConfirmation: '本当に削除しますか？この操作は取り消せません',
  unsavedChanges: '保存されていない変更があります。ページを離れますか？'
} as const;

/**
 * Info messages
 * Used for informational messages throughout the application
 */
export const infoMessages = {
  loading: '読み込み中...',
  processing: '処理中...',
  saving: '保存中...',
  deleting: '削除中...',
  noData: 'データがありません',
  emptyResults: '検索結果がありません',
  selectItem: '項目を選択してください'
} as const;

/**
 * Field-specific validation messages
 * Maps field names to their validation error messages
 */
export const fieldValidationMessages = {
  name: {
    required: 'お名前を入力してください'
  },
  email: {
    required: 'メールアドレスを入力してください',
    invalid: '正しいメールアドレスを入力してください'
  },
  phone: {
    invalid: '正しい電話番号を入力してください（10〜11桁の数字）'
  },
  password: {
    required: 'パスワードを入力してください',
    minLength: 'パスワードは8文字以上で入力してください'
  },
  passwordConfirm: {
    required: 'パスワード確認を入力してください',
    mismatch: 'パスワードが一致しません'
  },
  title: {
    required: 'タイトルを入力してください'
  },
  description: {
    required: '説明を入力してください'
  },
  category: {
    required: 'カテゴリーを選択してください'
  },
  agreeToTerms: {
    required: '利用規約に同意してください'
  }
} as const;
