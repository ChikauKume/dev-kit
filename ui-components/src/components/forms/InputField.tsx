import React, { useState } from 'react';
import Icon from '../icons/Icon';
import '../../styles/components/InputField.css';

/**
 * InputField component props interface
 */
export interface InputFieldProps {
  /** Input field label */
  label?: string;

  /** HTML input type */
  type?: 'text' | 'email' | 'password' | 'number' | 'tel' | 'url' | 'search' | 'date' | 'time' | 'datetime-local' | 'month' | 'week';

  /** Input name attribute */
  name: string;

  /** Current input value */
  value?: string | number;

  /** Change event handler */
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;

  /** Placeholder text */
  placeholder?: string;

  /** Whether field is required */
  required?: boolean;

  /** Whether field is disabled */
  disabled?: boolean;

  /** Error message */
  error?: string;

  /** Helper text */
  helper?: string;

  /** Icon element to display */
  icon?: React.ReactNode;

  /** Input size */
  size?: 'sm' | 'md' | 'lg';

  /** Whether input should take full width */
  fullWidth?: boolean;

  /** Additional CSS classes */
  className?: string;

  /** Input ID attribute */
  id?: string;

  /** Custom border color */
  borderColor?: string;

  /** Spread props for additional HTML input attributes */
  [key: string]: any;
}

const InputField: React.FC<InputFieldProps> = ({
  label,
  type = 'text',
  name,
  value = '',
  onChange,
  placeholder,
  required = false,
  disabled = false,
  error = '',
  helper = '',
  icon = null,
  size = 'md',
  fullWidth = false,
  className = '',
  id,
  borderColor,
  ...props
}) => {
  const [showPassword, setShowPassword] = useState(false);
  const [isFocused, setIsFocused] = useState(false);
  const inputId = id || `input-${name}`;

  // Determine actual input type (handle password visibility toggle)
  const inputType = type === 'password' && showPassword ? 'text' : type;

  const inputClasses = [
    'form-input',
    `form-input--${size}`,
    error && 'form-input--error',
    fullWidth && 'form-input--full-width',
    icon && 'form-input--with-icon',
    type === 'password' && 'form-input--password',
    className
  ].filter(Boolean).join(' ');

  const wrapperClasses = [
    'form-group',
    fullWidth && 'form-group--full-width'
  ].filter(Boolean).join(' ');

  return (
    <div className={wrapperClasses}>
      {label && (
        <label
          htmlFor={inputId}
          className={`form-label ${required ? 'form-label--required' : ''}`}
        >
          {label}
        </label>
      )}
      <div className="form-input-wrapper">
        {icon && <span className="form-input__icon">{icon}</span>}
        <input
          id={inputId}
          type={inputType}
          name={name}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          disabled={disabled}
          className={inputClasses}
          style={borderColor ? { borderColor } : undefined}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          aria-invalid={!!error}
          aria-describedby={error ? `${inputId}-error` : helper ? `${inputId}-helper` : undefined}
          {...props}
        />
        {type === 'password' && (
          <button
            type="button"
            className="form-input__toggle-password"
            onClick={() => setShowPassword(!showPassword)}
            aria-label={showPassword ? 'パスワードを非表示' : 'パスワードを表示'}
            tabIndex={-1}
          >
            <Icon name={showPassword ? 'eye-off' : 'eye'} style={{ width: '18px', height: '18px' }} />
          </button>
        )}
      </div>
      {error && (
        <div id={`${inputId}-error`} className="form-error" role="alert">
          <svg className="form-error__icon" width="14" height="14" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
          </svg>
          {error}
        </div>
      )}
      {helper && !error && (
        <div id={`${inputId}-helper`} className="form-helper">
          {helper}
        </div>
      )}
    </div>
  );
};

/**
 * TextArea component props interface
 */
export interface TextAreaProps {
  /** Textarea label */
  label?: string;

  /** Textarea name attribute */
  name: string;

  /** Current textarea value */
  value?: string;

  /** Change event handler */
  onChange?: (event: React.ChangeEvent<HTMLTextAreaElement>) => void;

  /** Placeholder text */
  placeholder?: string;

  /** Whether field is required */
  required?: boolean;

  /** Whether field is disabled */
  disabled?: boolean;

  /** Error message */
  error?: string;

  /** Helper text */
  helper?: string;

  /** Number of visible text rows */
  rows?: number;

  /** Whether textarea should take full width */
  fullWidth?: boolean;

  /** Additional CSS classes */
  className?: string;

  /** Textarea ID attribute */
  id?: string;

  /** Spread props for additional HTML textarea attributes */
  [key: string]: any;
}

/* Textarea Component */
export const TextArea: React.FC<TextAreaProps> = ({
  label,
  name,
  value = '',
  onChange,
  placeholder,
  required = false,
  disabled = false,
  error = '',
  helper = '',
  rows = 4,
  fullWidth = false,
  className = '',
  id,
  ...props
}) => {
  const textareaId = id || `textarea-${name}`;
  
  const textareaClasses = [
    'form-textarea',
    error && 'form-textarea--error',
    fullWidth && 'form-textarea--full-width',
    className
  ].filter(Boolean).join(' ');

  return (
    <div className={`form-group ${fullWidth ? 'form-group--full-width' : ''}`}>
      {label && (
        <label 
          htmlFor={textareaId} 
          className={`form-label ${required ? 'form-label--required' : ''}`}
        >
          {label}
        </label>
      )}
      <textarea
        id={textareaId}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        disabled={disabled}
        rows={rows}
        className={textareaClasses}
        aria-invalid={!!error}
        aria-describedby={error ? `${textareaId}-error` : helper ? `${textareaId}-helper` : undefined}
        {...props}
      />
      {error && (
        <div id={`${textareaId}-error`} className="form-error" role="alert">
          <svg className="form-error__icon" width="14" height="14" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
          </svg>
          {error}
        </div>
      )}
      {helper && !error && (
        <div id={`${textareaId}-helper`} className="form-helper">
          {helper}
        </div>
      )}
    </div>
  );
};

/**
 * Select option type
 */
export interface SelectOption {
  /** Option value */
  value: string | number;

  /** Option display label */
  label: string;
}

/**
 * Select component props interface
 */
export interface SelectProps {
  /** Select label */
  label?: string;

  /** Select name attribute */
  name: string;

  /** Current selected value */
  value?: string | number;

  /** Change event handler */
  onChange?: (event: React.ChangeEvent<HTMLSelectElement>) => void;

  /** Available options */
  options?: SelectOption[];

  /** Placeholder text */
  placeholder?: string;

  /** Whether field is required */
  required?: boolean;

  /** Whether field is disabled */
  disabled?: boolean;

  /** Error message */
  error?: string;

  /** Helper text */
  helper?: string;

  /** Whether select should take full width */
  fullWidth?: boolean;

  /** Additional CSS classes */
  className?: string;

  /** Select ID attribute */
  id?: string;

  /** Spread props for additional HTML select attributes */
  [key: string]: any;
}

/* Select Component */
export const Select: React.FC<SelectProps> = ({
  label,
  name,
  value = '',
  onChange,
  options = [],
  placeholder = '選択してください',
  required = false,
  disabled = false,
  error = '',
  helper = '',
  fullWidth = false,
  className = '',
  id,
  ...props
}) => {
  const selectId = id || `select-${name}`;
  
  const selectClasses = [
    'form-select',
    error && 'form-select--error',
    fullWidth && 'form-select--full-width',
    className
  ].filter(Boolean).join(' ');

  return (
    <div className={`form-group ${fullWidth ? 'form-group--full-width' : ''}`}>
      {label && (
        <label 
          htmlFor={selectId} 
          className={`form-label ${required ? 'form-label--required' : ''}`}
        >
          {label}
        </label>
      )}
      <select
        id={selectId}
        name={name}
        value={value}
        onChange={onChange}
        disabled={disabled}
        className={selectClasses}
        aria-invalid={!!error}
        aria-describedby={error ? `${selectId}-error` : helper ? `${selectId}-helper` : undefined}
        {...props}
      >
        <option value="">{placeholder}</option>
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
      {error && (
        <div id={`${selectId}-error`} className="form-error" role="alert">
          <svg className="form-error__icon" width="14" height="14" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
          </svg>
          {error}
        </div>
      )}
      {helper && !error && (
        <div id={`${selectId}-helper`} className="form-helper">
          {helper}
        </div>
      )}
    </div>
  );
};

/**
 * Form data type for examples
 */
interface ExampleFormData {
  name: string;
  email: string;
  password: string;
  message: string;
  country: string;
}

/**
 * Form errors type for examples
 */
interface ExampleFormErrors {
  [key: string]: string;
}

/* サンプル使用例 */
export const InputFieldExamples: React.FC = () => {
  const [formData, setFormData] = useState<ExampleFormData>({
    name: '',
    email: '',
    password: '',
    message: '',
    country: ''
  });

  const [errors, setErrors] = useState<ExampleFormErrors>({});

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));

    // Simple validation example
    if (name === 'email' && value && !value.includes('@')) {
      setErrors(prev => ({ ...prev, email: '有効なメールアドレスを入力してください' }));
    } else {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const EmailIcon: React.FC = () => (
    <svg width="16" height="16" viewBox="0 0 20 20" fill="currentColor">
      <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
      <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
    </svg>
  );

  const LockIcon: React.FC = () => (
    <svg width="16" height="16" viewBox="0 0 20 20" fill="currentColor">
      <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
    </svg>
  );

  const countryOptions: SelectOption[] = [
    { value: 'jp', label: '日本' },
    { value: 'us', label: 'アメリカ' },
    { value: 'uk', label: 'イギリス' },
    { value: 'cn', label: '中国' },
    { value: 'kr', label: '韓国' }
  ];

  return (
    <div className="input-examples">
      <h2>Form Components Examples</h2>

      <section className="example-section">
        <h3>基本的な入力フィールド</h3>
        <form className="example-form">
          <InputField
            label="お名前"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="山田 太郎"
            required
            helper="フルネームを入力してください"
          />

          <InputField
            label="メールアドレス"
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="example@email.com"
            required
            icon={<EmailIcon />}
            error={errors.email}
          />

          <InputField
            label="パスワード"
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            placeholder="8文字以上で入力"
            required
            icon={<LockIcon />}
            helper="英数字を含む8文字以上"
          />
        </form>
      </section>

      <section className="example-section">
        <h3>テキストエリア</h3>
        <TextArea
          label="お問い合わせ内容"
          name="message"
          value={formData.message}
          onChange={handleChange}
          placeholder="ご質問やご要望をお書きください"
          rows={5}
          helper="最大500文字まで入力できます"
        />
      </section>

      <section className="example-section">
        <h3>セレクトボックス</h3>
        <Select
          label="国・地域"
          name="country"
          value={formData.country}
          onChange={handleChange}
          options={countryOptions}
          placeholder="国を選択してください"
          required
        />
      </section>

      <section className="example-section">
        <h3>サイズバリエーション</h3>
        <InputField
          label="Small Input"
          name="small"
          size="sm"
          placeholder="Small size"
        />
        <InputField
          label="Medium Input (Default)"
          name="medium"
          size="md"
          placeholder="Medium size"
        />
        <InputField
          label="Large Input"
          name="large"
          size="lg"
          placeholder="Large size"
        />
      </section>

      <section className="example-section">
        <h3>状態</h3>
        <InputField
          label="無効化された入力"
          name="disabled"
          value="この入力は無効です"
          disabled
        />
        <InputField
          label="エラー状態"
          name="error"
          value="間違った値"
          error="入力値が正しくありません"
        />
        <InputField
          label="全幅表示"
          name="fullwidth"
          placeholder="画面幅いっぱいに表示"
          fullWidth
        />
      </section>
    </div>
  );
};

export default React.memo(InputField);