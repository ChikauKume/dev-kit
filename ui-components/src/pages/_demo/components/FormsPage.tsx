import React, { useState, useRef, useEffect } from 'react';
import InputField from '../../../components/forms/InputField.tsx';
import Checkbox from '../../../components/forms/Checkbox.tsx';
import SelectBox from '../../../components/forms/SelectBox.tsx';
import Icon from '../../../components/icons/Icon.tsx';
import PrimaryButton from '../../../components/buttons/PrimaryButton.tsx';
import SecondaryButton from '../../../components/buttons/SecondaryButton.tsx';
import DangerButton from '../../../components/buttons/DangerButton.tsx';

const FormsPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    message: '',
    prefecture: '',
    gender: '',
    priority: '',
    notifications: false,
    darkMode: false,
    agreeToTerms: false,
    newsletter: false
  });

  const [errors, setErrors] = useState({});

  // 検索フィルタの状態
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedFilters, setSelectedFilters] = useState({
    status: 'all',
    category: 'all'
  });

  // Switch/Slider/Chips用の状態管理
  const [switchEnabled, setSwitchEnabled] = useState(true);
  const [sliderValue, setSliderValue] = useState(50);
  const [rangeSliderValue, setRangeSliderValue] = useState([20, 80]);
  const [selectedChips, setSelectedChips] = useState(['react', 'javascript']);
  const [chips, setChips] = useState(['react', 'javascript', 'typescript', 'nodejs', 'css']);

  // DatePicker/FileUpload/Textarea用の状態管理
  const [selectedDate, setSelectedDate] = useState('');
  const [uploadedFiles, setUploadedFiles] = useState([]);
  const [textareaValue, setTextareaValue] = useState('');

  // SelectBox (MultiSelect) 用の状態管理
  const [workLocation, setWorkLocation] = useState(['tokyo', 'remote']);


  // バリデーション関数の拡張
  const validateForm = () => {
    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = 'お名前を入力してください';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'メールアドレスを入力してください';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = '有効なメールアドレスを入力してください';
    }

    if (!formData.password) {
      newErrors.password = 'パスワードを入力してください';
    } else if (formData.password.length < 8) {
      newErrors.password = 'パスワードは8文字以上で入力してください';
    }

    if (!skillsValue.trim()) {
      newErrors.skills = 'スキルを入力してください';
    }

    if (!selectedDate) {
      newErrors.startDate = '開始日を選択してください';
    }

    if (uploadedFiles.length === 0) {
      newErrors.files = 'ファイルを選択してください';
    }

    if (!textareaValue.trim()) {
      newErrors.description = '詳細説明を入力してください';
    } else if (textareaValue.length > 200) {
      newErrors.description = '詳細説明は200文字以内で入力してください';
    }

    if (!formData.gender) {
      newErrors.gender = '性別を選択してください';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Rating用の状態管理
  const [starRating, setStarRating] = useState(0);
  const [heartRating, setHeartRating] = useState(0);
  const [thumbRating, setThumbRating] = useState(0);

  // AutoComplete用の状態管理
  const [autoCompleteValue, setAutoCompleteValue] = useState('');
  const [autoCompleteSuggestions, setAutoCompleteSuggestions] = useState([]);
  const [skillsValue, setSkillsValue] = useState('');
  const [showSuggestions, setShowSuggestions] = useState(false);

  // PasswordInput用の状態管理
  const [passwordValue, setPasswordValue] = useState('mySecretPassword123');
  const [confirmPasswordValue, setConfirmPasswordValue] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  // RadioGroup用の状態管理
  const [planValue, setPlanValue] = useState('basic');

  // SearchInput用の状態管理
  const [basicSearchValue, setBasicSearchValue] = useState('');
  const [advancedSearchValue, setAdvancedSearchValue] = useState('');
  const [instantSearchValue, setInstantSearchValue] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  // FilterChips用の状態管理
  const [selectedCategories, setSelectedCategories] = useState(['React']);
  const [selectedTags, setSelectedTags] = useState(['新着', 'おすすめ']);
  const [selectedStatus, setSelectedStatus] = useState([]);

  // SearchableSelect用の状態管理
  const [selectedCountry, setSelectedCountry] = useState('');
  const [selectedUsers, setSelectedUsers] = useState([]);
  const [selectedPriority, setSelectedPriority] = useState('');

  // Tooltip component
  const Tooltip = ({ children, content, position = 'top' }) => {
    const [isVisible, setIsVisible] = useState(false);

    const positionStyles = {
      top: {
        bottom: '100%',
        left: '50%',
        transform: 'translateX(-50%)',
        marginBottom: '8px'
      },
      bottom: {
        top: '100%',
        left: '50%',
        transform: 'translateX(-50%)',
        marginTop: '8px'
      },
      left: {
        top: '50%',
        right: '100%',
        transform: 'translateY(-50%)',
        marginRight: '8px'
      },
      right: {
        top: '50%',
        left: '100%',
        transform: 'translateY(-50%)',
        marginLeft: '8px'
      }
    };

    return (
      <div
        style={{ position: 'relative', display: 'inline-block' }}
        onMouseEnter={() => setIsVisible(true)}
        onMouseLeave={() => setIsVisible(false)}
        onFocus={() => setIsVisible(true)}
        onBlur={() => setIsVisible(false)}
      >
        {children}
        {isVisible && (
          <div
            style={{
              position: 'absolute',
              ...positionStyles[position],
              background: 'var(--color-neutral-900)',
              color: 'white',
              padding: 'var(--spacing-1) var(--spacing-2)',
              borderRadius: 'var(--radius-sm)',
              fontSize: 'var(--font-size-xs)',
              lineHeight: 'var(--line-height-tight)',
              whiteSpace: 'nowrap',
              zIndex: 1000,
              boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
              opacity: isVisible ? 1 : 0,
              transition: 'opacity 0.2s ease-in-out',
              pointerEvents: 'none'
            }}
            role="tooltip"
            aria-label={content}
          >
            {content}
            {/* Arrow */}
            <div
              style={{
                position: 'absolute',
                width: 0,
                height: 0,
                ...(position === 'top' && {
                  top: '100%',
                  left: '50%',
                  transform: 'translateX(-50%)',
                  borderLeft: '4px solid transparent',
                  borderRight: '4px solid transparent',
                  borderTop: '4px solid var(--color-neutral-900)'
                }),
                ...(position === 'bottom' && {
                  bottom: '100%',
                  left: '50%',
                  transform: 'translateX(-50%)',
                  borderLeft: '4px solid transparent',
                  borderRight: '4px solid transparent',
                  borderBottom: '4px solid var(--color-neutral-900)'
                }),
                ...(position === 'left' && {
                  top: '50%',
                  left: '100%',
                  transform: 'translateY(-50%)',
                  borderTop: '4px solid transparent',
                  borderBottom: '4px solid transparent',
                  borderLeft: '4px solid var(--color-neutral-900)'
                }),
                ...(position === 'right' && {
                  top: '50%',
                  right: '100%',
                  transform: 'translateY(-50%)',
                  borderTop: '4px solid transparent',
                  borderBottom: '4px solid transparent',
                  borderRight: '4px solid var(--color-neutral-900)'
                })
              }}
            />
          </div>
        )}
      </div>
    );
  };

  // Chips component
  const Chips = ({ items, selected, onSelectionChange, removable = true, onRemove }) => {
    return (
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: 'var(--spacing-2)' }}>
        {items.map((item, index) => (
          <div
            key={index}
            onClick={() => onSelectionChange && onSelectionChange(item)}
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: 'var(--spacing-2)',
              padding: 'var(--spacing-1) var(--spacing-3)',
              backgroundColor: selected.includes(item) ? 'rgb(21, 52, 109)' : 'var(--color-neutral-200)',
              color: selected.includes(item) ? 'white' : 'var(--color-neutral-700)',
              borderRadius: 'var(--radius-full)',
              fontSize: 'var(--font-size-sm)',
              cursor: onSelectionChange ? 'pointer' : 'default',
              transition: 'all 0.2s',
              border: 'none'
            }}
          >
            <span>{item}</span>
            {removable && onRemove && (
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  onRemove(item);
                }}
                style={{
                  background: 'none',
                  border: 'none',
                  color: 'inherit',
                  cursor: 'pointer',
                  padding: '0',
                  fontSize: 'var(--font-size-xs)',
                  fontWeight: 'bold'
                }}
              >
                ×
              </button>
            )}
          </div>
        ))}
      </div>
    );
  };

  // Switch component
  const Switch = ({ checked, onChange, label, size = 'md' }) => {
    const sizeStyles = {
      sm: { width: 32, height: 18, knobSize: 14, translateX: 14 },
      md: { width: 44, height: 24, knobSize: 18, translateX: 20 },
      lg: { width: 56, height: 32, knobSize: 26, translateX: 24 }
    };

    const style = sizeStyles[size];

    return (
      <label style={{ display: 'flex', alignItems: 'center', gap: 'var(--spacing-3)', cursor: 'pointer' }}>
        <div style={{
          position: 'relative',
          width: `${style.width}px`,
          height: `${style.height}px`,
          backgroundColor: checked ? 'rgb(21, 52, 109)' : 'var(--color-neutral-300)',
          borderRadius: `${style.height}px`,
          transition: 'all 0.3s',
          cursor: 'pointer'
        }}>
          <div style={{
            position: 'absolute',
            top: '50%',
            left: checked ? `${style.translateX}px` : '3px',
            width: `${style.knobSize}px`,
            height: `${style.knobSize}px`,
            backgroundColor: 'white',
            borderRadius: '50%',
            transform: 'translateY(-50%)',
            transition: 'all 0.3s',
            boxShadow: '0 2px 4px rgba(0, 0, 0, 0.2)'
          }} />
        </div>
        <input
          type="checkbox"
          checked={checked}
          onChange={onChange}
          style={{ display: 'none' }}
        />
        {label && (
          <span style={{ fontSize: 'var(--font-size-sm)', color: 'var(--color-neutral-700)' }}>
            {label}
          </span>
        )}
      </label>
    );
  };

  // DatePicker component
  const DatePicker = ({ value, onChange, label, error, required = false }) => {
    return (
      <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--spacing-2)' }}>
        {label && (
          <label style={{
            fontSize: 'var(--font-size-sm)',
            fontWeight: 'var(--font-weight-medium)',
            color: 'var(--color-neutral-700)'
          }}>
            {label} {required && <span style={{ color: 'red' }}>*</span>}
          </label>
        )}
        <input
          type="date"
          value={value}
          onChange={(e) => onChange(e.target.value)}
          style={{
            width: '100%',
            padding: 'var(--spacing-2) var(--spacing-3)',
            border: `1px solid ${error ? 'var(--color-error-500)' : 'var(--color-neutral-300)'}`,
            borderRadius: 'var(--radius-md)',
            fontSize: 'var(--font-size-sm)',
            color: 'var(--color-neutral-900)',
            background: 'white',
            transition: 'border-color 0.2s, box-shadow 0.2s',
            outline: 'none'
          }}
          onFocus={(e) => {
            e.target.style.borderColor = error ? 'var(--color-error-500)' : 'rgb(21, 52, 109)';
            e.target.style.boxShadow = error
              ? '0 0 0 3px rgba(239, 68, 68, 0.1)'
              : '0 0 0 3px rgba(21, 52, 109, 0.1)';
          }}
          onBlur={(e) => {
            e.target.style.borderColor = error ? 'var(--color-error-500)' : 'var(--color-neutral-300)';
            e.target.style.boxShadow = 'none';
          }}
        />
        {error && (
          <span style={{
            fontSize: 'var(--font-size-xs)',
            color: 'var(--color-error-500)',
            marginTop: 'var(--spacing-1)'
          }}>
            {error}
          </span>
        )}
      </div>
    );
  };

  // FileUpload component
  const FileUpload = ({ onFilesChange, multiple = false, accept, label, error, required = false }) => {
    const [dragOver, setDragOver] = useState(false);
    const fileInputRef = useRef(null);

    const handleFileChange = (files) => {
      const fileArray = Array.from(files);
      onFilesChange(fileArray);
    };

    const handleDrop = (e) => {
      e.preventDefault();
      setDragOver(false);
      const files = e.dataTransfer.files;
      handleFileChange(files);
    };

    const handleDragOver = (e) => {
      e.preventDefault();
      setDragOver(true);
    };

    const handleDragLeave = (e) => {
      e.preventDefault();
      setDragOver(false);
    };

    return (
      <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--spacing-2)' }}>
        {label && (
          <label style={{
            fontSize: 'var(--font-size-sm)',
            fontWeight: 'var(--font-weight-medium)',
            color: 'var(--color-neutral-700)'
          }}>
            {label} {required && <span style={{ color: 'red' }}>*</span>}
          </label>
        )}
        <div
          onDrop={handleDrop}
          onDragOver={handleDragOver}
          onDragLeave={handleDragLeave}
          onClick={() => fileInputRef.current?.click()}
          style={{
            border: `2px dashed ${dragOver ? 'rgb(21, 52, 109)' : (error ? 'var(--color-error-500)' : 'var(--color-neutral-300)')}`,
            borderRadius: 'var(--radius-md)',
            padding: 'var(--spacing-6)',
            textAlign: 'center',
            cursor: 'pointer',
            background: dragOver ? 'rgba(21, 52, 109, 0.05)' : 'var(--color-neutral-50)',
            transition: 'all 0.2s',
            minHeight: '120px',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            gap: 'var(--spacing-2)'
          }}
        >
          <Icon name="upload" style={{ width: '32px', height: '32px', color: 'var(--color-neutral-500)' }} />
          <div style={{ fontSize: 'var(--font-size-sm)', color: 'var(--color-neutral-600)' }}>
            ファイルをドラッグ&ドロップまたはクリックして選択
          </div>
          <div style={{ fontSize: 'var(--font-size-xs)', color: 'var(--color-neutral-500)' }}>
            {accept && `対応形式: ${accept}`}
            {multiple && '（複数ファイル選択可）'}
          </div>
          <input
            ref={fileInputRef}
            type="file"
            multiple={multiple}
            accept={accept}
            onChange={(e) => handleFileChange(e.target.files)}
            style={{ display: 'none' }}
          />
        </div>
        {error && (
          <span style={{
            fontSize: 'var(--font-size-xs)',
            color: 'var(--color-error-500)',
            marginTop: 'var(--spacing-1)'
          }}>
            {error}
          </span>
        )}
      </div>
    );
  };

  // Textarea component
  const Textarea = ({ value, onChange, placeholder, rows = 4, label, error, required = false, maxLength }) => {
    return (
      <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--spacing-2)' }}>
        {label && (
          <label style={{
            fontSize: 'var(--font-size-sm)',
            fontWeight: 'var(--font-weight-medium)',
            color: 'var(--color-neutral-700)'
          }}>
            {label} {required && <span style={{ color: 'red' }}>*</span>}
          </label>
        )}
        <textarea
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder={placeholder}
          rows={rows}
          maxLength={maxLength}
          style={{
            width: '100%',
            padding: 'var(--spacing-3)',
            border: `1px solid ${error ? 'var(--color-error-500)' : 'var(--color-neutral-300)'}`,
            borderRadius: 'var(--radius-md)',
            fontSize: 'var(--font-size-sm)',
            color: 'var(--color-neutral-900)',
            background: 'white',
            transition: 'border-color 0.2s, box-shadow 0.2s',
            outline: 'none',
            fontFamily: 'inherit',
            resize: 'vertical',
            lineHeight: 'var(--line-height-relaxed)'
          }}
          onFocus={(e) => {
            e.target.style.borderColor = error ? 'var(--color-error-500)' : 'rgb(21, 52, 109)';
            e.target.style.boxShadow = error
              ? '0 0 0 3px rgba(239, 68, 68, 0.1)'
              : '0 0 0 3px rgba(21, 52, 109, 0.1)';
          }}
          onBlur={(e) => {
            e.target.style.borderColor = error ? 'var(--color-error-500)' : 'var(--color-neutral-300)';
            e.target.style.boxShadow = 'none';
          }}
        />
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          {error ? (
            <span style={{
              fontSize: 'var(--font-size-xs)',
              color: 'var(--color-error-500)'
            }}>
              {error}
            </span>
          ) : <div></div>}
          {maxLength && (
            <span style={{
              fontSize: 'var(--font-size-xs)',
              color: 'var(--color-neutral-500)'
            }}>
              {value.length}/{maxLength}
            </span>
          )}
        </div>
      </div>
    );
  };

  // AutoComplete component
  const AutoComplete = ({ value, onChange, suggestions = [], placeholder, label, error, required = false, maxSuggestions = 5 }) => {
    const [inputValue, setInputValue] = useState(value || '');
    const [filteredSuggestions, setFilteredSuggestions] = useState([]);
    const [showDropdown, setShowDropdown] = useState(false);
    const [highlightedIndex, setHighlightedIndex] = useState(-1);
    const inputRef = useRef(null);
    const dropdownRef = useRef(null);

    // サンプルデータ
    const defaultSuggestions = suggestions.length > 0 ? suggestions : [
      '東京都', '大阪府', '愛知県', '神奈川県', '埼玉県', '千葉県', '兵庫県', '北海道', '福岡県', '静岡県',
      'JavaScript', 'React', 'Vue.js', 'Angular', 'TypeScript', 'Node.js', 'Python', 'Java', 'PHP', 'Go'
    ];

    useEffect(() => {
      setInputValue(value || '');
    }, [value]);

    const handleInputChange = (e) => {
      const newValue = e.target.value;
      setInputValue(newValue);

      if (newValue.length > 0) {
        const filtered = defaultSuggestions
          .filter(suggestion =>
            suggestion.toLowerCase().includes(newValue.toLowerCase())
          )
          .slice(0, maxSuggestions);
        setFilteredSuggestions(filtered);
        setShowDropdown(filtered.length > 0);
      } else {
        setFilteredSuggestions([]);
        setShowDropdown(false);
      }
      setHighlightedIndex(-1);

      if (onChange) {
        onChange(newValue);
      }
    };

    const handleSuggestionClick = (suggestion) => {
      setInputValue(suggestion);
      setShowDropdown(false);
      setHighlightedIndex(-1);
      if (onChange) {
        onChange(suggestion);
      }
    };

    const handleKeyDown = (e) => {
      if (!showDropdown) return;

      switch (e.key) {
        case 'ArrowDown':
          e.preventDefault();
          setHighlightedIndex(prev =>
            prev < filteredSuggestions.length - 1 ? prev + 1 : prev
          );
          break;
        case 'ArrowUp':
          e.preventDefault();
          setHighlightedIndex(prev => prev > 0 ? prev - 1 : -1);
          break;
        case 'Enter':
          e.preventDefault();
          if (highlightedIndex >= 0) {
            handleSuggestionClick(filteredSuggestions[highlightedIndex]);
          }
          break;
        case 'Escape':
          setShowDropdown(false);
          setHighlightedIndex(-1);
          break;
      }
    };

    const handleBlur = (e) => {
      // ドロップダウン内のクリックかチェック
      if (dropdownRef.current && dropdownRef.current.contains(e.relatedTarget)) {
        return;
      }
      setTimeout(() => {
        setShowDropdown(false);
        setHighlightedIndex(-1);
      }, 100);
    };

    return (
      <div style={{ position: 'relative', display: 'flex', flexDirection: 'column', gap: 'var(--spacing-2)' }}>
        {label && (
          <label style={{
            fontSize: 'var(--font-size-sm)',
            fontWeight: 'var(--font-weight-medium)',
            color: 'var(--color-neutral-700)'
          }}>
            {label} {required && <span style={{ color: 'red' }}>*</span>}
          </label>
        )}

        <div style={{ position: 'relative' }}>
          <input
            ref={inputRef}
            type="text"
            value={inputValue}
            onChange={handleInputChange}
            onKeyDown={handleKeyDown}
            onBlur={handleBlur}
            onFocus={(e) => {
              if (filteredSuggestions.length > 0) {
                setShowDropdown(true);
              }
              e.target.style.borderColor = error ? 'var(--color-error-500)' : 'rgb(21, 52, 109)';
              e.target.style.boxShadow = error
                ? '0 0 0 3px rgba(239, 68, 68, 0.1)'
                : '0 0 0 3px rgba(21, 52, 109, 0.1)';
            }}
            placeholder={placeholder}
            style={{
              width: '100%',
              padding: 'var(--spacing-2) var(--spacing-3)',
              border: `1px solid ${error ? 'var(--color-error-500)' : 'var(--color-neutral-300)'}`,
              borderRadius: 'var(--radius-md)',
              fontSize: 'var(--font-size-sm)',
              color: 'var(--color-neutral-900)',
              background: 'white',
              transition: 'border-color 0.2s, box-shadow 0.2s',
              outline: 'none'
            }}
          />

          {showDropdown && (
            <div
              ref={dropdownRef}
              style={{
                position: 'absolute',
                top: '100%',
                left: 0,
                right: 0,
                backgroundColor: 'white',
                border: '1px solid var(--color-neutral-200)',
                borderRadius: 'var(--radius-md)',
                boxShadow: '0 4px 12px rgba(0, 0, 0, 0.15)',
                zIndex: 1000,
                maxHeight: '200px',
                overflowY: 'auto'
              }}
            >
              {filteredSuggestions.map((suggestion, index) => (
                <div
                  key={index}
                  onClick={() => handleSuggestionClick(suggestion)}
                  style={{
                    padding: 'var(--spacing-2) var(--spacing-3)',
                    cursor: 'pointer',
                    fontSize: 'var(--font-size-sm)',
                    backgroundColor: index === highlightedIndex ? 'var(--color-primary-50)' : 'transparent',
                    color: index === highlightedIndex ? 'rgb(21, 52, 109)' : 'var(--color-neutral-700)',
                    borderBottom: index < filteredSuggestions.length - 1 ? '1px solid var(--color-neutral-100)' : 'none',
                    transition: 'all 0.2s'
                  }}
                  onMouseEnter={() => setHighlightedIndex(index)}
                  onMouseLeave={() => setHighlightedIndex(-1)}
                >
                  {suggestion}
                </div>
              ))}
            </div>
          )}
        </div>

        {error && (
          <span style={{
            fontSize: 'var(--font-size-xs)',
            color: 'var(--color-error-500)',
            marginTop: 'var(--spacing-1)'
          }}>
            {error}
          </span>
        )}
      </div>
    );
  };

  // Rating component
  const Rating = ({ value, onChange, max = 5, icon = 'star', size = 'md', label, readOnly = false, showValue = false }) => {
    const [hoverValue, setHoverValue] = useState(0);

    const iconSizes = {
      sm: { width: '16px', height: '16px' },
      md: { width: '24px', height: '24px' },
      lg: { width: '32px', height: '32px' }
    };

    const iconStyle = iconSizes[size] || iconSizes.md;

    const handleClick = (rating) => {
      if (!readOnly && onChange) {
        onChange(rating);
      }
    };

    const handleMouseEnter = (rating) => {
      if (!readOnly) {
        setHoverValue(rating);
      }
    };

    const handleMouseLeave = () => {
      if (!readOnly) {
        setHoverValue(0);
      }
    };

    const getIconColor = (index) => {
      const currentValue = hoverValue || value;
      if (index <= currentValue) {
        switch (icon) {
          case 'heart':
            return '#ef4444'; // red
          case 'thumb':
            return '#10b981'; // green
          default:
            return '#fbbf24'; // yellow for stars
        }
      }
      return '#d1d5db'; // gray
    };

    return (
      <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--spacing-2)' }}>
        {label && (
          <label style={{
            fontSize: 'var(--font-size-sm)',
            fontWeight: 'var(--font-weight-medium)',
            color: 'var(--color-neutral-700)'
          }}>
            {label}
          </label>
        )}
        <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--spacing-1)' }}>
          <div style={{ display: 'flex', gap: 'var(--spacing-1)' }}>
            {Array.from({ length: max }, (_, index) => {
              const rating = index + 1;
              return (
                <button
                  key={index}
                  type="button"
                  onClick={() => handleClick(rating)}
                  onMouseEnter={() => handleMouseEnter(rating)}
                  onMouseLeave={handleMouseLeave}
                  disabled={readOnly}
                  style={{
                    background: 'none',
                    border: 'none',
                    cursor: readOnly ? 'default' : 'pointer',
                    padding: 'var(--spacing-1)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    borderRadius: 'var(--radius-sm)',
                    transition: 'all 0.2s'
                  }}
                >
                  <Icon
                    name={icon}
                    style={{
                      ...iconStyle,
                      color: getIconColor(rating),
                      transition: 'color 0.2s'
                    }}
                  />
                </button>
              );
            })}
          </div>
          {showValue && (
            <span style={{
              fontSize: 'var(--font-size-sm)',
              color: 'var(--color-neutral-600)',
              marginLeft: 'var(--spacing-2)'
            }}>
              {value}/{max}
            </span>
          )}
        </div>
      </div>
    );
  };

  // Enhanced Slider component
  const Slider = ({
    value,
    onChange,
    min = 0,
    max = 100,
    step = 1,
    showLabel = false,
    color = 'primary',
    size = 'medium',
    disabled = false
  }) => {
    const percentage = ((value - min) / (max - min)) * 100;

    const colorStyles = {
      primary: 'rgb(21, 52, 109)',
      success: '#10b981',
      warning: '#f59e0b',
      error: '#ef4444'
    };

    const sizeStyles = {
      small: { height: '4px', thumbSize: '12px' },
      medium: { height: '6px', thumbSize: '16px' },
      large: { height: '8px', thumbSize: '20px' }
    };

    const trackColor = colorStyles[color] || colorStyles.primary;
    const sizeConfig = sizeStyles[size] || sizeStyles.medium;

    return (
      <div style={{ width: '100%', opacity: disabled ? 0.6 : 1 }}>
        {showLabel && (
          <div style={{
            display: 'flex',
            justifyContent: 'space-between',
            marginBottom: 'var(--spacing-2)',
            fontSize: 'var(--font-size-sm)',
            color: 'var(--color-neutral-700)'
          }}>
            <span>値: {value}</span>
            <span>{min} - {max}</span>
          </div>
        )}
        <div style={{
          position: 'relative',
          width: '100%',
          height: '24px',
          display: 'flex',
          alignItems: 'center',
          cursor: disabled ? 'not-allowed' : 'pointer'
        }}>
          <div style={{
            width: '100%',
            height: sizeConfig.height,
            backgroundColor: 'var(--color-neutral-200)',
            borderRadius: sizeConfig.height,
            position: 'relative'
          }}>
            <div style={{
              width: `${percentage}%`,
              height: '100%',
              backgroundColor: disabled ? 'var(--color-neutral-400)' : trackColor,
              borderRadius: sizeConfig.height,
              transition: 'width 0.2s'
            }} />
          </div>
          <input
            type="range"
            min={min}
            max={max}
            step={step}
            value={value}
            disabled={disabled}
            onChange={(e) => onChange(Number(e.target.value))}
            style={{
              position: 'absolute',
              width: '100%',
              height: '100%',
              opacity: 0,
              cursor: disabled ? 'not-allowed' : 'pointer',
              margin: 0,
              padding: 0
            }}
          />
          <div style={{
            position: 'absolute',
            left: `${percentage}%`,
            transform: 'translateX(-50%)',
            width: sizeConfig.thumbSize,
            height: sizeConfig.thumbSize,
            backgroundColor: disabled ? 'var(--color-neutral-400)' : trackColor,
            borderRadius: '50%',
            border: '2px solid white',
            boxShadow: '0 2px 4px rgba(0, 0, 0, 0.2)',
            cursor: disabled ? 'not-allowed' : 'pointer',
            transition: 'left 0.2s'
          }} />
        </div>
      </div>
    );
  };

  // RangeSlider component for dual-handle range selection
  const RangeSlider = ({
    value = [0, 100],
    onChange,
    min = 0,
    max = 100,
    step = 1,
    color = 'primary',
    size = 'medium',
    disabled = false
  }) => {
    const [minValue, maxValue] = value;
    const minPercentage = ((minValue - min) / (max - min)) * 100;
    const maxPercentage = ((maxValue - min) / (max - min)) * 100;

    const colorStyles = {
      primary: 'rgb(21, 52, 109)',
      success: '#10b981',
      warning: '#f59e0b',
      error: '#ef4444'
    };

    const sizeStyles = {
      small: { height: '4px', thumbSize: '12px' },
      medium: { height: '6px', thumbSize: '16px' },
      large: { height: '8px', thumbSize: '20px' }
    };

    const trackColor = colorStyles[color] || colorStyles.primary;
    const sizeConfig = sizeStyles[size] || sizeStyles.medium;

    const handleMinChange = (newMin) => {
      const validMin = Math.min(newMin, maxValue - step);
      onChange([validMin, maxValue]);
    };

    const handleMaxChange = (newMax) => {
      const validMax = Math.max(newMax, minValue + step);
      onChange([minValue, validMax]);
    };

    return (
      <div style={{ width: '100%', opacity: disabled ? 0.6 : 1 }}>
        <div style={{
          position: 'relative',
          width: '100%',
          height: '24px',
          display: 'flex',
          alignItems: 'center'
        }}>
          {/* Track background */}
          <div style={{
            width: '100%',
            height: sizeConfig.height,
            backgroundColor: 'var(--color-neutral-200)',
            borderRadius: sizeConfig.height,
            position: 'relative'
          }}>
            {/* Active range */}
            <div style={{
              position: 'absolute',
              left: `${minPercentage}%`,
              width: `${maxPercentage - minPercentage}%`,
              height: '100%',
              backgroundColor: disabled ? 'var(--color-neutral-400)' : trackColor,
              borderRadius: sizeConfig.height,
              transition: 'all 0.2s'
            }} />
          </div>

          {/* Min value input */}
          <input
            type="range"
            min={min}
            max={max}
            step={step}
            value={minValue}
            disabled={disabled}
            onChange={(e) => handleMinChange(Number(e.target.value))}
            style={{
              position: 'absolute',
              width: '100%',
              height: '100%',
              opacity: 0,
              cursor: disabled ? 'not-allowed' : 'pointer',
              margin: 0,
              padding: 0,
              zIndex: 1
            }}
          />

          {/* Max value input */}
          <input
            type="range"
            min={min}
            max={max}
            step={step}
            value={maxValue}
            disabled={disabled}
            onChange={(e) => handleMaxChange(Number(e.target.value))}
            style={{
              position: 'absolute',
              width: '100%',
              height: '100%',
              opacity: 0,
              cursor: disabled ? 'not-allowed' : 'pointer',
              margin: 0,
              padding: 0,
              zIndex: 2
            }}
          />

          {/* Min thumb */}
          <div style={{
            position: 'absolute',
            left: `${minPercentage}%`,
            transform: 'translateX(-50%)',
            width: sizeConfig.thumbSize,
            height: sizeConfig.thumbSize,
            backgroundColor: disabled ? 'var(--color-neutral-400)' : trackColor,
            borderRadius: '50%',
            border: '2px solid white',
            boxShadow: '0 2px 4px rgba(0, 0, 0, 0.2)',
            cursor: disabled ? 'not-allowed' : 'pointer',
            transition: 'left 0.2s',
            zIndex: 3
          }} />

          {/* Max thumb */}
          <div style={{
            position: 'absolute',
            left: `${maxPercentage}%`,
            transform: 'translateX(-50%)',
            width: sizeConfig.thumbSize,
            height: sizeConfig.thumbSize,
            backgroundColor: disabled ? 'var(--color-neutral-400)' : trackColor,
            borderRadius: '50%',
            border: '2px solid white',
            boxShadow: '0 2px 4px rgba(0, 0, 0, 0.2)',
            cursor: disabled ? 'not-allowed' : 'pointer',
            transition: 'left 0.2s',
            zIndex: 4
          }} />
        </div>
      </div>
    );
  };

  // SearchInput component
  const SearchInput = ({
    value,
    onChange,
    placeholder = '検索...',
    size = 'medium',
    variant = 'default',
    showIcon = true,
    showClearButton = true,
    disabled = false,
    loading = false,
    autoComplete = false,
    suggestions = [],
    onSearch = null,
    onSuggestionSelect = null,
    debounceDelay = 300,
    style = {}
  }) => {
    const [isFocused, setIsFocused] = useState(false);
    const [showSuggestions, setShowSuggestions] = useState(false);
    const [localValue, setLocalValue] = useState(value || '');
    const [debounceTimer, setDebounceTimer] = useState(null);
    const inputRef = useRef(null);
    const suggestionsRef = useRef(null);

    // Debounced search functionality
    useEffect(() => {
      if (onSearch && localValue !== value) {
        if (debounceTimer) {
          clearTimeout(debounceTimer);
        }

        const timer = setTimeout(() => {
          onSearch(localValue);
        }, debounceDelay);

        setDebounceTimer(timer);

        return () => clearTimeout(timer);
      }
    }, [localValue, onSearch, debounceDelay]);

    useEffect(() => {
      setLocalValue(value || '');
    }, [value]);

    const handleInputChange = (e) => {
      const newValue = e.target.value;
      setLocalValue(newValue);
      onChange && onChange(e);

      if (autoComplete && suggestions.length > 0) {
        setShowSuggestions(newValue.length > 0);
      }
    };

    const handleClear = () => {
      setLocalValue('');
      setShowSuggestions(false);
      const syntheticEvent = {
        target: { value: '' }
      };
      onChange && onChange(syntheticEvent);
      inputRef.current?.focus();
    };

    const handleSuggestionClick = (suggestion) => {
      setLocalValue(suggestion);
      setShowSuggestions(false);
      onSuggestionSelect && onSuggestionSelect(suggestion);
      const syntheticEvent = {
        target: { value: suggestion }
      };
      onChange && onChange(syntheticEvent);
    };

    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        setShowSuggestions(false);
        inputRef.current?.blur();
      }
    };

    // Click outside to close suggestions
    useEffect(() => {
      const handleClickOutside = (event) => {
        if (
          suggestionsRef.current &&
          !suggestionsRef.current.contains(event.target) &&
          !inputRef.current?.contains(event.target)
        ) {
          setShowSuggestions(false);
        }
      };

      document.addEventListener('mousedown', handleClickOutside);
      return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    const sizeStyles = {
      small: {
        padding: '6px 12px',
        fontSize: '14px',
        height: '32px'
      },
      medium: {
        padding: '8px 16px',
        fontSize: '16px',
        height: '40px'
      },
      large: {
        padding: '12px 20px',
        fontSize: '18px',
        height: '48px'
      }
    };

    const variantStyles = {
      default: {
        border: '1px solid #d1d5db',
        backgroundColor: '#ffffff',
        color: '#374151'
      },
      outline: {
        border: '2px solid #e5e7eb',
        backgroundColor: 'transparent',
        color: '#374151'
      },
      filled: {
        border: '1px solid transparent',
        backgroundColor: '#f3f4f6',
        color: '#374151'
      }
    };

    const focusStyles = isFocused ? {
      borderColor: '#2563eb',
      boxShadow: '0 0 0 3px rgba(37, 99, 235, 0.1)',
      outline: 'none'
    } : {};

    const containerStyle = {
      position: 'relative',
      width: '100%',
      ...style
    };

    const inputStyle = {
      width: '100%',
      borderRadius: '6px',
      transition: 'all 0.2s',
      paddingLeft: showIcon ? '40px' : sizeStyles[size].padding.split(' ')[1],
      paddingRight: (showClearButton && localValue) || loading ? '40px' : sizeStyles[size].padding.split(' ')[1],
      paddingTop: sizeStyles[size].padding.split(' ')[0],
      paddingBottom: sizeStyles[size].padding.split(' ')[0],
      fontSize: sizeStyles[size].fontSize,
      height: sizeStyles[size].height,
      ...variantStyles[variant],
      ...focusStyles,
      ...(disabled && {
        backgroundColor: '#f9fafb',
        color: '#9ca3af',
        cursor: 'not-allowed'
      })
    };

    const iconStyle = {
      position: 'absolute',
      left: '12px',
      top: '50%',
      transform: 'translateY(-50%)',
      color: '#6b7280',
      pointerEvents: 'none'
    };

    const clearButtonStyle = {
      position: 'absolute',
      right: '8px',
      top: '50%',
      transform: 'translateY(-50%)',
      background: 'none',
      border: 'none',
      color: '#6b7280',
      cursor: 'pointer',
      padding: '4px',
      borderRadius: '4px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    };

    const suggestionsStyle = {
      position: 'absolute',
      top: '100%',
      left: 0,
      right: 0,
      backgroundColor: 'white',
      border: '1px solid #d1d5db',
      borderTop: 'none',
      borderRadius: '0 0 6px 6px',
      maxHeight: '200px',
      overflowY: 'auto',
      zIndex: 1000,
      boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)'
    };

    const suggestionItemStyle = {
      padding: '8px 16px',
      cursor: 'pointer',
      borderBottom: '1px solid #f3f4f6'
    };

    return (
      <div style={containerStyle}>
        {showIcon && (
          <Icon
            name="search"
            style={iconStyle}
          />
        )}

        <input
          ref={inputRef}
          type="text"
          value={localValue}
          onChange={handleInputChange}
          onFocus={() => {
            setIsFocused(true);
            if (autoComplete && suggestions.length > 0 && localValue) {
              setShowSuggestions(true);
            }
          }}
          onBlur={() => setIsFocused(false)}
          onKeyDown={handleKeyDown}
          placeholder={placeholder}
          disabled={disabled}
          style={inputStyle}
        />

        {loading && (
          <div style={clearButtonStyle}>
            <div style={{
              width: '16px',
              height: '16px',
              border: '2px solid #e5e7eb',
              borderTop: '2px solid #2563eb',
              borderRadius: '50%',
              animation: 'spin 1s linear infinite'
            }} />
          </div>
        )}

        {showClearButton && localValue && !loading && (
          <button
            type="button"
            onClick={handleClear}
            style={clearButtonStyle}
            aria-label="検索をクリア"
          >
            <Icon name="x" style={{ width: '16px', height: '16px' }} />
          </button>
        )}

        {showSuggestions && suggestions.length > 0 && (
          <div ref={suggestionsRef} style={suggestionsStyle}>
            {suggestions
              .filter(suggestion =>
                suggestion.toLowerCase().includes(localValue.toLowerCase())
              )
              .slice(0, 10)
              .map((suggestion, index) => (
                <div
                  key={index}
                  style={{
                    ...suggestionItemStyle,
                    ':hover': {
                      backgroundColor: '#f3f4f6'
                    }
                  }}
                  onClick={() => handleSuggestionClick(suggestion)}
                  onMouseEnter={(e) => {
                    e.target.style.backgroundColor = '#f3f4f6';
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.backgroundColor = 'transparent';
                  }}
                >
                  {suggestion}
                </div>
              ))
            }
          </div>
        )}

        <style jsx>{`
          @keyframes spin {
            from { transform: rotate(0deg); }
            to { transform: rotate(360deg); }
          }
        `}</style>
      </div>
    );
  };

  // FilterChips component
  const FilterChips = ({
    options = [],
    selectedValues = [],
    onChange,
    variant = 'default',
    size = 'medium',
    color = 'primary',
    allowMultiple = true,
    allowClear = true,
    maxSelected = null,
    placeholder = 'フィルターを選択...',
    style = {}
  }) => {
    const handleChipClick = (value) => {
      if (!allowMultiple) {
        // Single selection mode
        onChange(selectedValues.includes(value) ? [] : [value]);
        return;
      }

      // Multiple selection mode
      if (selectedValues.includes(value)) {
        // Remove if already selected
        onChange(selectedValues.filter(v => v !== value));
      } else {
        // Add if not selected (check max limit)
        if (maxSelected && selectedValues.length >= maxSelected) {
          return; // Don't add if max reached
        }
        onChange([...selectedValues, value]);
      }
    };

    const handleClearAll = () => {
      onChange([]);
    };

    const sizeStyles = {
      small: {
        padding: '4px 8px',
        fontSize: '12px',
        height: '24px',
        borderRadius: '12px'
      },
      medium: {
        padding: '6px 12px',
        fontSize: '14px',
        height: '32px',
        borderRadius: '16px'
      },
      large: {
        padding: '8px 16px',
        fontSize: '16px',
        height: '40px',
        borderRadius: '20px'
      }
    };

    const colorThemes = {
      primary: {
        selected: { bg: '#2563eb', color: '#ffffff', border: '#2563eb' },
        unselected: { bg: 'transparent', color: '#374151', border: '#d1d5db' }
      },
      secondary: {
        selected: { bg: '#6b7280', color: '#ffffff', border: '#6b7280' },
        unselected: { bg: 'transparent', color: '#374151', border: '#d1d5db' }
      },
      success: {
        selected: { bg: '#10b981', color: '#ffffff', border: '#10b981' },
        unselected: { bg: 'transparent', color: '#374151', border: '#d1d5db' }
      },
      warning: {
        selected: { bg: '#f59e0b', color: '#ffffff', border: '#f59e0b' },
        unselected: { bg: 'transparent', color: '#374151', border: '#d1d5db' }
      },
      error: {
        selected: { bg: '#ef4444', color: '#ffffff', border: '#ef4444' },
        unselected: { bg: 'transparent', color: '#374151', border: '#d1d5db' }
      }
    };

    const variantStyles = {
      default: {},
      outlined: {
        border: '1px solid',
        backgroundColor: 'transparent'
      },
      filled: {
        border: 'none'
      }
    };

    const containerStyle = {
      display: 'flex',
      flexWrap: 'wrap',
      gap: '8px',
      alignItems: 'center',
      ...style
    };

    const getChipStyle = (value) => {
      const isSelected = selectedValues.includes(value);
      const theme = colorThemes[color];
      const sizeStyle = sizeStyles[size];
      const themeColors = isSelected ? theme.selected : theme.unselected;

      return {
        ...sizeStyle,
        ...variantStyles[variant],
        backgroundColor: themeColors.bg,
        color: themeColors.color,
        border: variant === 'outlined' ? `1px solid ${themeColors.border}` : 'none',
        cursor: 'pointer',
        transition: 'all 0.2s',
        userSelect: 'none',
        display: 'inline-flex',
        alignItems: 'center',
        gap: '4px',
        fontWeight: isSelected ? '500' : '400',
        ':hover': {
          opacity: 0.8,
          transform: 'translateY(-1px)'
        }
      };
    };

    const clearButtonStyle = {
      ...sizeStyles[size],
      backgroundColor: '#ef4444',
      color: '#ffffff',
      border: 'none',
      cursor: 'pointer',
      transition: 'all 0.2s',
      display: 'inline-flex',
      alignItems: 'center',
      gap: '4px',
      fontWeight: '500'
    };

    return (
      <div style={containerStyle}>
        {options.length === 0 && (
          <span style={{
            color: '#9ca3af',
            fontSize: sizeStyles[size].fontSize,
            fontStyle: 'italic'
          }}>
            {placeholder}
          </span>
        )}

        {options.map((option) => {
          const value = typeof option === 'string' ? option : option.value;
          const label = typeof option === 'string' ? option : option.label;
          const isSelected = selectedValues.includes(value);
          const isDisabled = maxSelected && !isSelected && selectedValues.length >= maxSelected;

          return (
            <div
              key={value}
              onClick={() => !isDisabled && handleChipClick(value)}
              style={{
                ...getChipStyle(value),
                opacity: isDisabled ? 0.5 : 1,
                cursor: isDisabled ? 'not-allowed' : 'pointer'
              }}
              onMouseEnter={(e) => {
                if (!isDisabled) {
                  e.target.style.opacity = '0.8';
                  e.target.style.transform = 'translateY(-1px)';
                }
              }}
              onMouseLeave={(e) => {
                if (!isDisabled) {
                  e.target.style.opacity = '1';
                  e.target.style.transform = 'translateY(0)';
                }
              }}
            >
              <span>{label}</span>
              {isSelected && (
                <Icon
                  name="check"
                  style={{
                    width: '14px',
                    height: '14px'
                  }}
                />
              )}
            </div>
          );
        })}

        {allowClear && selectedValues.length > 0 && (
          <button
            onClick={handleClearAll}
            style={clearButtonStyle}
            onMouseEnter={(e) => {
              e.target.style.opacity = '0.8';
              e.target.style.transform = 'translateY(-1px)';
            }}
            onMouseLeave={(e) => {
              e.target.style.opacity = '1';
              e.target.style.transform = 'translateY(0)';
            }}
          >
            <Icon
              name="x"
              style={{
                width: '14px',
                height: '14px'
              }}
            />
            <span>クリア</span>
          </button>
        )}
      </div>
    );
  };

  // SearchableSelect component
  const SearchableSelect = ({
    options = [],
    value = '',
    onChange,
    placeholder = '選択してください...',
    searchPlaceholder = '検索...',
    size = 'medium',
    disabled = false,
    multiple = false,
    maxSelected = null,
    clearable = true,
    searchable = true,
    loading = false,
    noOptionsText = 'オプションが見つかりません',
    style = {}
  }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [searchQuery, setSearchQuery] = useState('');
    const [highlightedIndex, setHighlightedIndex] = useState(-1);
    const selectRef = useRef(null);
    const optionsRef = useRef(null);
    const searchInputRef = useRef(null);

    // Handle click outside to close dropdown
    useEffect(() => {
      const handleClickOutside = (event) => {
        if (selectRef.current && !selectRef.current.contains(event.target)) {
          setIsOpen(false);
          setSearchQuery('');
          setHighlightedIndex(-1);
        }
      };

      document.addEventListener('mousedown', handleClickOutside);
      return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    // Filter options based on search query
    const filteredOptions = options.filter(option => {
      const label = typeof option === 'string' ? option : option.label;
      return label.toLowerCase().includes(searchQuery.toLowerCase());
    });

    // Handle option selection
    const handleOptionSelect = (selectedOption) => {
      const optionValue = typeof selectedOption === 'string' ? selectedOption : selectedOption.value;

      if (multiple) {
        const currentValues = Array.isArray(value) ? value : [];

        if (currentValues.includes(optionValue)) {
          // Remove if already selected
          onChange(currentValues.filter(v => v !== optionValue));
        } else {
          // Add if not selected (check max limit)
          if (maxSelected && currentValues.length >= maxSelected) {
            return;
          }
          onChange([...currentValues, optionValue]);
        }
      } else {
        onChange(optionValue);
        setIsOpen(false);
        setSearchQuery('');
      }
      setHighlightedIndex(-1);
    };

    // Handle keyboard navigation
    const handleKeyDown = (e) => {
      if (!isOpen) {
        if (e.key === 'Enter' || e.key === ' ' || e.key === 'ArrowDown') {
          e.preventDefault();
          setIsOpen(true);
          setHighlightedIndex(0);
        }
        return;
      }

      switch (e.key) {
        case 'Escape':
          setIsOpen(false);
          setSearchQuery('');
          setHighlightedIndex(-1);
          break;
        case 'ArrowDown':
          e.preventDefault();
          setHighlightedIndex(prev =>
            prev < filteredOptions.length - 1 ? prev + 1 : 0
          );
          break;
        case 'ArrowUp':
          e.preventDefault();
          setHighlightedIndex(prev =>
            prev > 0 ? prev - 1 : filteredOptions.length - 1
          );
          break;
        case 'Enter':
          e.preventDefault();
          if (highlightedIndex >= 0 && highlightedIndex < filteredOptions.length) {
            handleOptionSelect(filteredOptions[highlightedIndex]);
          }
          break;
      }
    };

    // Clear selection
    const handleClear = (e) => {
      e.stopPropagation();
      onChange(multiple ? [] : '');
    };

    // Get display value
    const getDisplayValue = () => {
      if (multiple) {
        const values = Array.isArray(value) ? value : [];
        if (values.length === 0) return placeholder;
        if (values.length === 1) {
          const option = options.find(opt =>
            (typeof opt === 'string' ? opt : opt.value) === values[0]
          );
          return typeof option === 'string' ? option : option?.label || values[0];
        }
        return `${values.length}個選択済み`;
      } else {
        if (!value) return placeholder;
        const option = options.find(opt =>
          (typeof opt === 'string' ? opt : opt.value) === value
        );
        return typeof option === 'string' ? option : option?.label || value;
      }
    };

    const sizeStyles = {
      small: {
        padding: '6px 12px',
        fontSize: '14px',
        minHeight: '32px'
      },
      medium: {
        padding: '8px 16px',
        fontSize: '16px',
        minHeight: '40px'
      },
      large: {
        padding: '12px 20px',
        fontSize: '18px',
        minHeight: '48px'
      }
    };

    const containerStyle = {
      position: 'relative',
      width: '100%',
      ...style
    };

    const selectStyle = {
      width: '100%',
      border: '1px solid #d1d5db',
      borderRadius: '6px',
      backgroundColor: disabled ? '#f9fafb' : '#ffffff',
      color: disabled ? '#9ca3af' : '#374151',
      cursor: disabled ? 'not-allowed' : 'pointer',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      transition: 'border-color 0.2s, box-shadow 0.2s',
      ...sizeStyles[size],
      ...(isOpen && {
        borderColor: '#2563eb',
        boxShadow: '0 0 0 3px rgba(37, 99, 235, 0.1)'
      })
    };

    const dropdownStyle = {
      position: 'absolute',
      top: '100%',
      left: 0,
      right: 0,
      backgroundColor: 'white',
      border: '1px solid #d1d5db',
      borderTop: 'none',
      borderRadius: '0 0 6px 6px',
      maxHeight: '200px',
      overflowY: 'auto',
      zIndex: 1000,
      boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)'
    };

    const searchInputStyle = {
      width: '100%',
      padding: '8px 12px',
      border: 'none',
      borderBottom: '1px solid #e5e7eb',
      fontSize: '14px',
      outline: 'none'
    };

    const optionStyle = (option, index) => ({
      padding: '8px 12px',
      cursor: 'pointer',
      backgroundColor: highlightedIndex === index ? '#f3f4f6' : 'transparent',
      borderBottom: '1px solid #f3f4f6',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between'
    });

    const selectedValues = multiple ? (Array.isArray(value) ? value : []) : [];

    return (
      <div ref={selectRef} style={containerStyle}>
        <div
          style={selectStyle}
          onClick={() => !disabled && setIsOpen(!isOpen)}
          onKeyDown={handleKeyDown}
          tabIndex={disabled ? -1 : 0}
        >
          <span style={{
            color: (!value || (multiple && selectedValues.length === 0)) ? '#9ca3af' : 'inherit'
          }}>
            {getDisplayValue()}
          </span>

          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            {clearable && ((multiple && selectedValues.length > 0) || (!multiple && value)) && (
              <button
                onClick={handleClear}
                style={{
                  background: 'none',
                  border: 'none',
                  color: '#6b7280',
                  cursor: 'pointer',
                  padding: '2px',
                  display: 'flex',
                  alignItems: 'center'
                }}
              >
                <Icon name="x" style={{ width: '16px', height: '16px' }} />
              </button>
            )}

            {loading ? (
              <div style={{
                width: '16px',
                height: '16px',
                border: '2px solid #e5e7eb',
                borderTop: '2px solid #2563eb',
                borderRadius: '50%',
                animation: 'spin 1s linear infinite'
              }} />
            ) : (
              <Icon
                name={isOpen ? 'chevron-up' : 'chevron-down'}
                style={{
                  width: '16px',
                  height: '16px',
                  color: '#6b7280',
                  transition: 'transform 0.2s'
                }}
              />
            )}
          </div>
        </div>

        {isOpen && (
          <div ref={optionsRef} style={dropdownStyle}>
            {searchable && (
              <input
                ref={searchInputRef}
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder={searchPlaceholder}
                style={searchInputStyle}
                autoFocus
              />
            )}

            {filteredOptions.length === 0 ? (
              <div style={{
                padding: '12px',
                color: '#9ca3af',
                textAlign: 'center',
                fontStyle: 'italic'
              }}>
                {noOptionsText}
              </div>
            ) : (
              filteredOptions.map((option, index) => {
                const optionValue = typeof option === 'string' ? option : option.value;
                const optionLabel = typeof option === 'string' ? option : option.label;
                const isSelected = multiple
                  ? selectedValues.includes(optionValue)
                  : value === optionValue;

                return (
                  <div
                    key={optionValue}
                    style={optionStyle(option, index)}
                    onClick={() => handleOptionSelect(option)}
                    onMouseEnter={() => setHighlightedIndex(index)}
                  >
                    <span>{optionLabel}</span>
                    {isSelected && (
                      <Icon
                        name="check"
                        style={{
                          width: '16px',
                          height: '16px',
                          color: '#2563eb'
                        }}
                      />
                    )}
                  </div>
                );
              })
            )}
          </div>
        )}

        <style jsx>{`
          @keyframes spin {
            from { transform: rotate(0deg); }
            to { transform: rotate(360deg); }
          }
        `}</style>
      </div>
    );
  };

  // サンプルフィルターオプション
  const filterOptions = {
    status: [
      { value: 'all', label: 'すべて' },
      { value: 'active', label: 'アクティブ' },
      { value: 'inactive', label: '非アクティブ' }
    ],
    category: [
      { value: 'all', label: 'すべてのカテゴリ' },
      { value: 'business', label: 'ビジネス' },
      { value: 'personal', label: 'パーソナル' }
    ]
  };

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));

    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };


  const handleSearch = (query) => {
    setSearchQuery(query);
    console.log('検索:', query);
  };

  const handleFilterChange = (filterName, value) => {
    setSelectedFilters(prev => ({
      ...prev,
      [filterName]: value
    }));
    console.log('フィルター変更:', filterName, value);
  };

  const handleChipSelection = (chip) => {
    setSelectedChips(prev =>
      prev.includes(chip)
        ? prev.filter(c => c !== chip)
        : [...prev, chip]
    );
  };

  const handleChipRemove = (chip) => {
    setChips(prev => prev.filter(c => c !== chip));
    setSelectedChips(prev => prev.filter(c => c !== chip));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      alert('フォームが正常に送信されました！');
    }
  };

  const handleValidationTest = () => {
    // 意図的にバリデーションエラーを発生させる
    setErrors({
      name: 'お名前は必須です',
      email: '有効なメールアドレスを入力してください',
      password: 'パスワードは8文字以上で入力してください',
      prefecture: '都道府県を選択してください',
      startDate: '開始日を選択してください',
      files: 'ファイルを選択してください',
      description: '詳細説明を入力してください',
      gender: '性別を選択してください',
      notifications: '通知設定を有効にしてください',
      agreeToTerms: '利用規約への同意は必須です'
    });
  };


  return (
    <div className="forms-page">
      <style jsx>{`
        .forms-page {
          padding: var(--spacing-8);
          max-width: 1200px;
          margin: 0 auto;
        }

        .page-header {
          margin-bottom: var(--spacing-8);
        }

        .page-title {
          font-size: var(--font-size-3xl);
          font-weight: var(--font-weight-bold);
          color: var(--color-neutral-900);
          margin-bottom: var(--spacing-4);
        }

        .page-description {
          color: var(--color-neutral-600);
          font-size: var(--font-size-lg);
          line-height: var(--line-height-relaxed);
        }

        .component-section {
          margin-bottom: var(--spacing-12);
        }

        .section-title {
          font-size: var(--font-size-2xl);
          font-weight: var(--font-weight-semibold);
          color: var(--color-neutral-900);
          margin-bottom: var(--spacing-6);
          border-bottom: 2px solid var(--color-primary-200);
          padding-bottom: var(--spacing-3);
        }

        .component-card {
          background: var(--color-neutral-white);
          border: 1px solid var(--color-neutral-200);
          border-radius: var(--radius-lg);
          padding: var(--spacing-6);
          margin-bottom: var(--spacing-6);
        }

        .component-info {
          margin-bottom: var(--spacing-4);
        }

        .component-name {
          font-size: var(--font-size-lg);
          font-weight: var(--font-weight-semibold);
          color: var(--color-neutral-900);
          margin-bottom: var(--spacing-2);
        }

        .component-description {
          font-size: var(--font-size-sm);
          color: var(--color-neutral-600);
          margin-bottom: var(--spacing-4);
        }

        .component-demo {
          padding: var(--spacing-4);
          background: var(--color-neutral-50);
          border: 1px solid var(--color-neutral-200);
          border-radius: var(--radius-md);
        }

        .demo-form {
          display: flex;
          flex-direction: column;
          gap: var(--spacing-4);
          max-width: 400px;
        }

        .demo-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
          gap: var(--spacing-6);
        }

        .code-snippet {
          background: var(--color-neutral-900);
          color: var(--color-neutral-100);
          padding: var(--spacing-3);
          border-radius: var(--radius-md);
          font-family: var(--font-family-mono);
          font-size: var(--font-size-xs);
          margin-top: var(--spacing-3);
          overflow-x: auto;
        }

        .checkbox-group {
          display: flex;
          flex-direction: column;
          gap: var(--spacing-3);
        }

        .select-wrapper {
          position: relative;
          display: inline-block;
          width: 100%;
        }

        .select-input {
          width: 100%;
          padding: var(--spacing-2) var(--spacing-3);
          border: 1px solid var(--color-neutral-300);
          border-radius: var(--radius-md);
          background: white;
          font-size: var(--font-size-sm);
          color: var(--color-neutral-900);
          cursor: pointer;
          transition: border-color 0.2s, box-shadow 0.2s;
          appearance: none;
          background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 12 12'%3E%3Cpath fill='%23666' d='M6 8.825L2.075 4.9l.85-.85L6 7.125 9.075 4.05l.85.85L6 8.825z'/%3E%3C/svg%3E");
          background-repeat: no-repeat;
          background-position: right 12px center;
          padding-right: 40px;
        }

        .select-input:focus {
          outline: none;
          border-color: var(--color-primary-600);
          box-shadow: 0 0 0 3px rgba(21, 52, 109, 0.1);
        }

        .select-input.error {
          border-color: var(--color-error-500);
        }

        .select-input.error:focus {
          border-color: var(--color-error-500);
          box-shadow: 0 0 0 3px rgba(239, 68, 68, 0.1);
        }

        .radio-group {
          display: flex;
          flex-direction: column;
          gap: var(--spacing-3);
        }

        .radio-group-horizontal {
          display: flex;
          flex-direction: row;
          gap: var(--spacing-4);
          flex-wrap: wrap;
        }

        .radio-option {
          display: flex;
          align-items: center;
          gap: var(--spacing-2);
        }

        .radio-input {
          width: 16px;
          height: 16px;
          border: 2px solid var(--color-neutral-300);
          border-radius: 50%;
          background: white;
          position: relative;
          cursor: pointer;
          appearance: none;
          transition: border-color 0.2s, background-color 0.2s;
        }

        .radio-input:checked {
          border-color: var(--color-primary-600);
          background-color: var(--color-primary-600);
        }

        .radio-input:checked::after {
          content: '';
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          width: 6px;
          height: 6px;
          border-radius: 50%;
          background: white;
        }

        .radio-input:focus {
          outline: none;
          box-shadow: 0 0 0 3px rgba(21, 52, 109, 0.1);
        }

        .radio-label {
          font-size: var(--font-size-sm);
          color: var(--color-neutral-700);
          cursor: pointer;
        }

        .error-state .select-input {
          border-color: var(--color-error-500);
        }

        .error-state .radio-input {
          border-color: var(--color-error-500);
        }

        .toggle-wrapper {
          display: flex;
          align-items: center;
          gap: var(--spacing-3);
        }

        .toggle-switch {
          position: relative;
          display: inline-block;
          width: 44px;
          height: 24px;
        }

        .toggle-input {
          opacity: 0;
          width: 0;
          height: 0;
          position: absolute;
        }

        .toggle-slider {
          position: absolute;
          cursor: pointer;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background-color: var(--color-neutral-300);
          transition: 0.3s;
          border-radius: 24px;
        }

        .toggle-slider:before {
          position: absolute;
          content: "";
          height: 18px;
          width: 18px;
          left: 3px;
          bottom: 3px;
          background-color: white;
          transition: 0.3s;
          border-radius: 50%;
          box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
        }

        .toggle-input:checked + .toggle-slider {
          background-color: rgb(21, 52, 109);
        }

        .toggle-input:focus + .toggle-slider {
          box-shadow: 0 0 0 3px rgba(21, 52, 109, 0.1);
        }

        .toggle-input:checked + .toggle-slider:before {
          transform: translateX(20px);
        }

        .toggle-label {
          font-size: var(--font-size-sm);
          color: var(--color-neutral-700);
          cursor: pointer;
          user-select: none;
        }

        .toggle-group {
          display: flex;
          flex-direction: column;
          gap: var(--spacing-3);
        }

        .toggle-group.error-state .toggle-slider {
          border: 2px solid #dc2626;
        }

        .toggle-group.error-state .toggle-input:focus + .toggle-slider {
          box-shadow: 0 0 0 3px rgba(220, 38, 38, 0.1);
        }

        .form-actions {
          display: flex;
          gap: var(--spacing-3);
          justify-content: flex-end;
          margin-top: var(--spacing-6);
        }

        .search-filter-demo {
          max-width: 600px;
        }

        .search-filter-panel {
          background: white;
          border: 1px solid var(--color-neutral-200);
          border-radius: var(--radius-md);
          padding: var(--spacing-4);
          margin-bottom: var(--spacing-4);
        }

        .search-section {
          margin-bottom: var(--spacing-4);
        }

        .search-label {
          display: block;
          font-weight: var(--font-weight-medium);
          color: var(--color-neutral-700);
          margin-bottom: var(--spacing-1);
          font-size: var(--font-size-sm);
        }

        .search-input {
          width: 100%;
          padding: var(--spacing-2) var(--spacing-3);
          border: 1px solid var(--color-neutral-300);
          border-radius: var(--radius-md);
          font-size: var(--font-size-sm);
          transition: border-color 0.2s, box-shadow 0.2s;
        }

        .search-input:focus {
          outline: none;
          border-color: rgb(21, 52, 109);
          box-shadow: 0 0 0 3px rgba(21, 52, 109, 0.1);
        }

        .filter-section {
          display: flex;
          gap: var(--spacing-4);
          flex-wrap: wrap;
        }

        .filter-item {
          min-width: 150px;
          flex: 1;
        }

        .filter-label {
          display: block;
          font-weight: var(--font-weight-medium);
          color: var(--color-neutral-700);
          margin-bottom: var(--spacing-1);
          font-size: var(--font-size-sm);
        }

        .filter-select {
          width: 100%;
          padding: var(--spacing-2) var(--spacing-3);
          border: 1px solid var(--color-neutral-300);
          border-radius: var(--radius-md);
          font-size: var(--font-size-sm);
          background: white;
          cursor: pointer;
        }

        .filter-select:focus {
          outline: none;
          border-color: rgb(21, 52, 109);
          box-shadow: 0 0 0 3px rgba(21, 52, 109, 0.1);
        }

        .demo-results {
          background: var(--color-neutral-50);
          border: 1px solid var(--color-neutral-200);
          border-radius: var(--radius-md);
          padding: var(--spacing-3);
        }

        .results-text {
          margin: 0;
          font-size: var(--font-size-sm);
          color: var(--color-neutral-600);
          font-family: var(--font-family-mono);
        }

        @media (max-width: 768px) {
          .filter-section {
            flex-direction: column;
          }
        }

        .advanced-demo-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
          gap: var(--spacing-6);
        }

        .slider-demo-section {
          display: flex;
          flex-direction: column;
          gap: var(--spacing-4);
        }

        .chips-demo-section {
          display: flex;
          flex-direction: column;
          gap: var(--spacing-4);
        }

        .switch-demo-section {
          display: flex;
          flex-direction: column;
          gap: var(--spacing-4);
        }
      `}</style>

      <div className="page-header">
        <h1 className="page-title">フォーム / 入力</h1>
        <p className="page-description">
          フォーム入力とデータ収集に関するコンポーネント群。
          基本的なフォーム要素から高度な入力コンポーネントまで包括的に提供します。
        </p>
      </div>

      <div className="component-section">
        <h2 className="section-title">フォームコンポーネント</h2>

        <div className="demo-grid">
          {/* InputField - Basic */}
          <div className="component-card">
            <div className="component-info">
              <h3 className="component-name">InputField</h3>
              <p className="component-description">
                ラベル付きテキスト入力フィールド
              </p>
            </div>
            <div className="component-demo">
              <InputField
                name="demo-field"
                label="サンプルラベル"
                value="サンプルテキスト"
                placeholder="テキストを入力してください"
                onChange={() => {}}
              />
            </div>
            <div className="code-snippet">
              {`<InputField
  name="fieldName"
  label="ラベルテキスト"
  value={value}
  onChange={handleChange}
  placeholder="プレースホルダー"
/>`}
            </div>
          </div>

          {/* InputField - Error State */}
          <div className="component-card">
            <div className="component-info">
              <h3 className="component-name">InputField (error)</h3>
              <p className="component-description">
                エラー状態の入力フィールド
              </p>
            </div>
            <div className="component-demo">
              <InputField
                name="demo-error"
                label="メールアドレス"
                value="invalid-email"
                error="このフィールドは必須です"
                onChange={() => {}}
              />
            </div>
            <div className="code-snippet">
              {`<InputField
  name="email"
  label="メールアドレス"
  value={value}
  onChange={handleChange}
  error="エラーメッセージ"
/>`}
            </div>
          </div>

          {/* InputField - Without Label */}
          <div className="component-card">
            <div className="component-info">
              <h3 className="component-name">InputField (ラベルなし)</h3>
              <p className="component-description">
                ラベルなしの入力フィールド
              </p>
            </div>
            <div className="component-demo">
              <InputField
                name="demo-no-label"
                value=""
                placeholder="ラベルなしの入力"
                onChange={() => {}}
              />
            </div>
            <div className="code-snippet">
              {`<InputField
  name="fieldName"
  value={value}
  onChange={handleChange}
  placeholder="プレースホルダー"
/>`}
            </div>
          </div>

          {/* PasswordInput */}
          <div className="component-card">
            <div className="component-info">
              <h3 className="component-name">PasswordInput</h3>
              <p className="component-description">
                パスワード表示切り替え機能付き入力フィールド
              </p>
            </div>
            <div className="component-demo">
              <div className="password-input-container">
                {/* PasswordInput コンポーネント */}
                <div className="password-input-wrapper">
                  <div className="input-group">
                    <label htmlFor="password" className="input-label">
                      パスワード
                    </label>
                    <div className="password-field">
                      <input
                        id="password"
                        type={showPassword ? 'text' : 'password'}
                        value={passwordValue}
                        onChange={(e) => setPasswordValue(e.target.value)}
                        placeholder="パスワードを入力してください"
                        className="password-input"
                      />
                      <button
                        type="button"
                        onClick={() => setShowPassword(!showPassword)}
                        className="password-toggle"
                        aria-label={showPassword ? 'パスワードを隠す' : 'パスワードを表示する'}
                      >
                        {showPassword ? (
                          <Icon name="eye" className="w-4 h-4" />
                        ) : (
                          <Icon name="eye-off" className="w-4 h-4" />
                        )}
                      </button>
                    </div>
                  </div>
                </div>

                {/* パスワード確認用 */}
                <div className="password-input-wrapper">
                  <div className="input-group">
                    <label htmlFor="confirmPassword" className="input-label">
                      パスワード確認
                    </label>
                    <div className="password-field">
                      <input
                        id="confirmPassword"
                        type={showConfirmPassword ? 'text' : 'password'}
                        value={confirmPasswordValue}
                        onChange={(e) => setConfirmPasswordValue(e.target.value)}
                        placeholder="パスワードを再入力してください"
                        className="password-input"
                      />
                      <button
                        type="button"
                        onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                        className="password-toggle"
                        aria-label={showConfirmPassword ? 'パスワードを隠す' : 'パスワードを表示する'}
                      >
                        {showConfirmPassword ? (
                          <Icon name="eye" className="w-4 h-4" />
                        ) : (
                          <Icon name="eye-off" className="w-4 h-4" />
                        )}
                      </button>
                    </div>
                  </div>
                </div>

                <style jsx>{`
                  .password-input-container {
                    display: flex;
                    flex-direction: column;
                    gap: var(--spacing-4);
                    max-width: 400px;
                  }

                  .password-input-wrapper {
                    width: 100%;
                  }

                  .input-group {
                    display: flex;
                    flex-direction: column;
                    gap: var(--spacing-2);
                  }

                  .input-label {
                    font-size: var(--font-size-sm);
                    font-weight: var(--font-weight-medium);
                    color: var(--color-neutral-700);
                  }

                  .password-field {
                    position: relative;
                    display: flex;
                    align-items: center;
                  }

                  .password-input {
                    width: 100%;
                    padding: var(--spacing-3);
                    padding-right: var(--spacing-10);
                    border: 1px solid var(--color-neutral-300);
                    border-radius: var(--radius-md);
                    font-size: var(--font-size-sm);
                    transition: border-color 0.2s, box-shadow 0.2s;
                    background: var(--color-neutral-white);
                  }

                  .password-input:focus {
                    outline: none;
                    border-color: var(--color-primary-500);
                    box-shadow: 0 0 0 3px var(--color-primary-100);
                  }

                  .password-input::placeholder {
                    color: var(--color-neutral-400);
                  }

                  .password-toggle {
                    position: absolute;
                    right: var(--spacing-3);
                    top: 50%;
                    transform: translateY(-50%);
                    background: none;
                    border: none;
                    color: var(--color-neutral-500);
                    cursor: pointer;
                    padding: var(--spacing-1);
                    border-radius: var(--radius-sm);
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    transition: color 0.2s, background-color 0.2s;
                  }

                  .password-toggle:hover {
                    color: var(--color-neutral-700);
                    background-color: var(--color-neutral-100);
                  }

                  .password-toggle:focus {
                    outline: none;
                    color: var(--color-primary-600);
                    background-color: var(--color-primary-50);
                  }
                `}</style>
              </div>
            </div>
            <div className="code-snippet">
              {`// PasswordInput コンポーネントの使用例
import { useState } from 'react';
import Icon from '../../../components/icons/Icon.tsx';

function PasswordInputDemo() {
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="input-group">
      <label htmlFor="password" className="input-label">
        パスワード
      </label>
      <div className="password-field">
        <input
          id="password"
          type={showPassword ? 'text' : 'password'}
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="パスワードを入力してください"
          className="password-input"
        />
        <button
          type="button"
          onClick={() => setShowPassword(!showPassword)}
          className="password-toggle"
        >
          {showPassword ? (
            <Icon name="eye" className="w-4 h-4" />
          ) : (
            <Icon name="eye-off" className="w-4 h-4" />
          )}
        </button>
      </div>
    </div>
  );
}`}
            </div>
          </div>

          {/* Checkbox */}
          <div className="component-card">
            <div className="component-info">
              <h3 className="component-name">Checkbox</h3>
              <p className="component-description">
                チェックボックス入力コンポーネント
              </p>
            </div>
            <div className="component-demo">
              <div className="checkbox-group">
                <label className="flex items-center">
                  <Checkbox
                    name="agreeToTerms"
                    checked={formData.agreeToTerms}
                    onChange={handleInputChange}
                  />
                  <span className="ms-2 text-sm text-gray-600">
                    利用規約に同意します
                  </span>
                </label>

                <label className="flex items-center">
                  <Checkbox
                    name="newsletter"
                    checked={formData.newsletter}
                    onChange={handleInputChange}
                  />
                  <span className="ms-2 text-sm text-gray-600">
                    ニュースレターを受信します
                  </span>
                </label>
              </div>
            </div>
            <div className="code-snippet">
              {`<label className="flex items-center">
  <Checkbox
    name="agreeToTerms"
    checked={agreeToTerms}
    onChange={handleChange}
  />
  <span className="ms-2 text-sm text-gray-600">
    利用規約に同意します
  </span>
</label>`}
            </div>
          </div>

          {/* SelectBox */}
          <div className="component-card">
            <div className="component-info">
              <h3 className="component-name">SelectBox</h3>
              <p className="component-description">
                ドロップダウン選択コンポーネント
              </p>
            </div>
            <div className="component-demo">
              <div className="select-wrapper">
                <select
                  className="select-input"
                  value={formData.prefecture}
                  onChange={handleInputChange}
                  name="prefecture"
                >
                  <option value="">都道府県を選択</option>
                  <option value="tokyo">東京都</option>
                  <option value="osaka">大阪府</option>
                  <option value="kyoto">京都府</option>
                  <option value="kanagawa">神奈川県</option>
                  <option value="saitama">埼玉県</option>
                </select>
              </div>
            </div>
            <div className="code-snippet">
              {`<div className="select-wrapper">
  <select
    className="select-input"
    value={selectedValue}
    onChange={handleChange}
    name="fieldName"
  >
    <option value="">選択してください</option>
    <option value="option1">オプション1</option>
    <option value="option2">オプション2</option>
  </select>
</div>`}
            </div>
          </div>

          {/* MultiSelectBox */}
          <div className="component-card">
            <div className="component-info">
              <h3 className="component-name">MultiSelectBox (複数選択ドロップダウン)</h3>
              <p className="component-description">
                複数選択可能なカスタムドロップダウンコンポーネント - チェックボックス付き
              </p>
            </div>
            <div className="component-demo">
              <SelectBox
                label="希望勤務地"
                name="workLocation"
                value={workLocation}
                options={[
                  { value: 'tokyo', label: '東京' },
                  { value: 'osaka', label: '大阪' },
                  { value: 'nagoya', label: '名古屋' },
                  { value: 'fukuoka', label: '福岡' },
                  { value: 'remote', label: 'リモート' },
                ]}
                onChange={setWorkLocation}
                placeholder="勤務地を選択してください"
                helper="複数選択可能です"
                required
              />
            </div>
            <div className="code-snippet">
              {`<SelectBox
  label="希望勤務地"
  name="workLocation"
  value={workLocation}
  options={[
    { value: 'tokyo', label: '東京' },
    { value: 'osaka', label: '大阪' },
    { value: 'nagoya', label: '名古屋' },
    { value: 'fukuoka', label: '福岡' },
    { value: 'remote', label: 'リモート' },
  ]}
  onChange={setWorkLocation}
  placeholder="勤務地を選択してください"
  helper="複数選択可能です"
  required
/>`}
            </div>
          </div>

          {/* RadioGroup - Enhanced */}
          <div className="component-card">
            <div className="component-info">
              <h3 className="component-name">RadioGroup</h3>
              <p className="component-description">
                高度なラジオボタン選択コンポーネント - エラー状態、説明文、無効化対応
              </p>
            </div>
            <div className="component-demo">
              {/* RadioGroup コンポーネント */}
              <div className="radio-group-wrapper">
                {/* 基本的なラジオグループ */}
                <div className="radio-group-section">
                  <label className="radio-group-label">性別 *</label>
                  <div className="radio-group vertical">
                    <label className="radio-option">
                      <input
                        type="radio"
                        className="radio-input"
                        name="gender"
                        value="male"
                        checked={formData.gender === 'male'}
                        onChange={handleInputChange}
                      />
                      <span className="radio-custom"></span>
                      <span className="radio-label">男性</span>
                    </label>
                    <label className="radio-option">
                      <input
                        type="radio"
                        className="radio-input"
                        name="gender"
                        value="female"
                        checked={formData.gender === 'female'}
                        onChange={handleInputChange}
                      />
                      <span className="radio-custom"></span>
                      <span className="radio-label">女性</span>
                    </label>
                    <label className="radio-option">
                      <input
                        type="radio"
                        className="radio-input"
                        name="gender"
                        value="other"
                        checked={formData.gender === 'other'}
                        onChange={handleInputChange}
                      />
                      <span className="radio-custom"></span>
                      <span className="radio-label">その他</span>
                    </label>
                    <label className="radio-option">
                      <input
                        type="radio"
                        className="radio-input"
                        name="gender"
                        value="no-answer"
                        checked={formData.gender === 'no-answer'}
                        onChange={handleInputChange}
                      />
                      <span className="radio-custom"></span>
                      <span className="radio-label">回答しない</span>
                    </label>
                  </div>
                </div>

                {/* 横並びレイアウト */}
                <div className="radio-group-section">
                  <label className="radio-group-label">優先度</label>
                  <div className="radio-group horizontal">
                    <label className="radio-option">
                      <input
                        type="radio"
                        className="radio-input"
                        name="priority"
                        value="high"
                        checked={formData.priority === 'high'}
                        onChange={handleInputChange}
                      />
                      <span className="radio-custom"></span>
                      <span className="radio-label">高</span>
                    </label>
                    <label className="radio-option">
                      <input
                        type="radio"
                        className="radio-input"
                        name="priority"
                        value="medium"
                        checked={formData.priority === 'medium'}
                        onChange={handleInputChange}
                      />
                      <span className="radio-custom"></span>
                      <span className="radio-label">中</span>
                    </label>
                    <label className="radio-option">
                      <input
                        type="radio"
                        className="radio-input"
                        name="priority"
                        value="low"
                        checked={formData.priority === 'low'}
                        onChange={handleInputChange}
                      />
                      <span className="radio-custom"></span>
                      <span className="radio-label">低</span>
                    </label>
                  </div>
                </div>

                {/* 説明文付きオプション */}
                <div className="radio-group-section">
                  <label className="radio-group-label">プランを選択</label>
                  <div className="radio-group vertical with-descriptions">
                    <label className="radio-option">
                      <input
                        type="radio"
                        className="radio-input"
                        name="plan"
                        value="basic"
                        checked={formData.plan === 'basic'}
                        onChange={handleInputChange}
                      />
                      <span className="radio-custom"></span>
                      <div className="radio-content">
                        <span className="radio-label">ベーシックプラン</span>
                        <span className="radio-description">基本機能のみ利用可能</span>
                      </div>
                    </label>
                    <label className="radio-option">
                      <input
                        type="radio"
                        className="radio-input"
                        name="plan"
                        value="premium"
                        checked={formData.plan === 'premium'}
                        onChange={handleInputChange}
                      />
                      <span className="radio-custom"></span>
                      <div className="radio-content">
                        <span className="radio-label">プレミアムプラン</span>
                        <span className="radio-description">全機能利用可能、優先サポート付き</span>
                      </div>
                    </label>
                  </div>
                </div>

                {/* 無効化状態 */}
                <div className="radio-group-section">
                  <label className="radio-group-label">配送方法（現在利用不可）</label>
                  <div className="radio-group vertical disabled">
                    <label className="radio-option disabled">
                      <input
                        type="radio"
                        className="radio-input"
                        name="shipping"
                        value="standard"
                        disabled
                      />
                      <span className="radio-custom"></span>
                      <span className="radio-label">通常配送</span>
                    </label>
                    <label className="radio-option disabled">
                      <input
                        type="radio"
                        className="radio-input"
                        name="shipping"
                        value="express"
                        disabled
                      />
                      <span className="radio-custom"></span>
                      <span className="radio-label">速達配送</span>
                    </label>
                  </div>
                </div>

                <style jsx>{`
                  .radio-group-wrapper {
                    display: flex;
                    flex-direction: column;
                    gap: var(--spacing-6);
                    max-width: 500px;
                  }

                  .radio-group-section {
                    display: flex;
                    flex-direction: column;
                    gap: var(--spacing-3);
                  }

                  .radio-group-label {
                    font-size: var(--font-size-sm);
                    font-weight: var(--font-weight-medium);
                    color: var(--color-neutral-700);
                  }

                  .radio-group {
                    display: flex;
                    gap: var(--spacing-3);
                  }

                  .radio-group.vertical {
                    flex-direction: column;
                  }

                  .radio-group.horizontal {
                    flex-direction: row;
                    flex-wrap: wrap;
                  }

                  .radio-option {
                    display: flex;
                    align-items: flex-start;
                    gap: var(--spacing-2);
                    cursor: pointer;
                    padding: var(--spacing-2);
                    border-radius: var(--radius-md);
                    transition: background-color 0.2s;
                  }

                  .radio-option:hover:not(.disabled) {
                    background-color: var(--color-neutral-50);
                  }

                  .radio-option.disabled {
                    cursor: not-allowed;
                    opacity: 0.6;
                  }

                  .radio-input {
                    position: absolute;
                    opacity: 0;
                    pointer-events: none;
                  }

                  .radio-custom {
                    width: 18px;
                    height: 18px;
                    border: 2px solid var(--color-neutral-300);
                    border-radius: 50%;
                    position: relative;
                    flex-shrink: 0;
                    transition: border-color 0.2s, background-color 0.2s;
                    margin-top: 1px;
                  }

                  .radio-input:checked + .radio-custom {
                    border-color: var(--color-primary-500);
                    background-color: var(--color-primary-500);
                  }

                  .radio-input:checked + .radio-custom::after {
                    content: '';
                    position: absolute;
                    top: 3px;
                    left: 3px;
                    width: 8px;
                    height: 8px;
                    border-radius: 50%;
                    background-color: white;
                  }

                  .radio-input:focus + .radio-custom {
                    box-shadow: 0 0 0 3px var(--color-primary-100);
                  }

                  .radio-input:disabled + .radio-custom {
                    border-color: var(--color-neutral-200);
                    background-color: var(--color-neutral-100);
                  }

                  .radio-content {
                    display: flex;
                    flex-direction: column;
                    gap: var(--spacing-1);
                  }

                  .radio-label {
                    font-size: var(--font-size-sm);
                    font-weight: var(--font-weight-medium);
                    color: var(--color-neutral-700);
                    line-height: var(--line-height-tight);
                  }

                  .radio-description {
                    font-size: var(--font-size-xs);
                    color: var(--color-neutral-500);
                    line-height: var(--line-height-relaxed);
                  }

                  .radio-group.horizontal .radio-option {
                    min-width: auto;
                    padding: var(--spacing-2) var(--spacing-3);
                  }

                  .radio-group.with-descriptions .radio-option {
                    padding: var(--spacing-3);
                    border: 1px solid var(--color-neutral-200);
                    border-radius: var(--radius-lg);
                  }

                  .radio-group.with-descriptions .radio-option:hover:not(.disabled) {
                    border-color: var(--color-primary-300);
                    background-color: var(--color-primary-25);
                  }

                  .radio-input:checked ~ .radio-content .radio-label {
                    color: var(--color-primary-700);
                  }
                `}</style>
              </div>
            </div>
            <div className="code-snippet">
              {`// 基本的なRadioGroup
<div className="radio-group-section">
  <label className="radio-group-label">性別 *</label>
  <div className="radio-group vertical">
    <label className="radio-option">
      <input
        type="radio"
        className="radio-input"
        name="gender"
        value="male"
        checked={value === 'male'}
        onChange={handleChange}
      />
      <span className="radio-custom"></span>
      <span className="radio-label">男性</span>
    </label>
    <label className="radio-option">
      <input
        type="radio"
        className="radio-input"
        name="gender"
        value="female"
        checked={value === 'female'}
        onChange={handleChange}
      />
      <span className="radio-custom"></span>
      <span className="radio-label">女性</span>
    </label>
  </div>
</div>

// 説明文付きRadioGroup
<div className="radio-group vertical with-descriptions">
  <label className="radio-option">
    <input type="radio" className="radio-input" name="plan" value="basic" />
    <span className="radio-custom"></span>
    <div className="radio-content">
      <span className="radio-label">ベーシックプラン</span>
      <span className="radio-description">基本機能のみ利用可能</span>
    </div>
  </label>
</div>`}
            </div>
          </div>


          {/* ToggleButton/Switch */}
          <div className="component-card">
            <div className="component-info">
              <h3 className="component-name">ToggleButton / Switch</h3>
              <p className="component-description">
                ON/OFFを切り替えるトグルスイッチコンポーネント
              </p>
            </div>
            <div className="component-demo">
              <div className="demo-grid">
                <div>
                  <h4 style={{ marginBottom: 'var(--spacing-3)', fontSize: 'var(--font-size-sm)', fontWeight: 'var(--font-weight-medium)' }}>基本的なトグルボタン</h4>
                  <div className="toggle-group">
                    <label className="toggle-wrapper">
                      <div className="toggle-switch">
                        <input
                          type="checkbox"
                          className="toggle-input"
                          name="notifications"
                          checked={formData.notifications}
                          onChange={handleInputChange}
                        />
                        <span className="toggle-slider"></span>
                      </div>
                      <span className="toggle-label">通知を受け取る</span>
                    </label>

                    <label className="toggle-wrapper">
                      <div className="toggle-switch">
                        <input
                          type="checkbox"
                          className="toggle-input"
                          name="darkMode"
                          checked={formData.darkMode}
                          onChange={handleInputChange}
                        />
                        <span className="toggle-slider"></span>
                      </div>
                      <span className="toggle-label">ダークモード</span>
                    </label>
                  </div>
                </div>
                <div>
                  <h4 style={{ marginBottom: 'var(--spacing-3)', fontSize: 'var(--font-size-sm)', fontWeight: 'var(--font-weight-medium)' }}>サイズバリエーション</h4>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--spacing-3)' }}>
                    <Switch checked={switchEnabled} onChange={(e) => setSwitchEnabled(e.target.checked)} label="小サイズ" size="sm" />
                    <Switch checked={switchEnabled} onChange={(e) => setSwitchEnabled(e.target.checked)} label="中サイズ（デフォルト）" size="md" />
                    <Switch checked={switchEnabled} onChange={(e) => setSwitchEnabled(e.target.checked)} label="大サイズ" size="lg" />
                  </div>
                </div>
                <div>
                  <h4 style={{ marginBottom: 'var(--spacing-3)', fontSize: 'var(--font-size-sm)', fontWeight: 'var(--font-weight-medium)' }}>実用例</h4>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--spacing-2)' }}>
                    <Switch checked={switchEnabled} onChange={(e) => setSwitchEnabled(e.target.checked)} label="プッシュ通知を有効にする" />
                    <Switch checked={false} onChange={() => {}} label="ダークモード" />
                    <Switch checked={true} onChange={() => {}} label="自動保存" />
                  </div>
                </div>
              </div>
            </div>
            <div className="code-snippet">
              {`// 基本的なトグルボタン
<label className="toggle-wrapper">
  <div className="toggle-switch">
    <input
      type="checkbox"
      className="toggle-input"
      name="fieldName"
      checked={isToggled}
      onChange={handleChange}
    />
    <span className="toggle-slider"></span>
  </div>
  <span className="toggle-label">ラベルテキスト</span>
</label>

// Switchコンポーネント（基本）
<Switch
  checked={isEnabled}
  onChange={(e) => setIsEnabled(e.target.checked)}
  label="機能を有効にする"
/>

// Switchコンポーネント（サイズ指定）
<Switch size="sm" checked={value} onChange={handler} label="小サイズ" />
<Switch size="lg" checked={value} onChange={handler} label="大サイズ" />`}
            </div>
          </div>

          {/* DatePicker */}
          <div className="component-card">
            <div className="component-info">
              <h3 className="component-name">DatePicker</h3>
              <p className="component-description">
                日付選択用のピッカーコンポーネント
              </p>
            </div>
            <div className="component-demo">
              <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--spacing-4)', maxWidth: '400px' }}>
                <div>
                  <h4 style={{ marginBottom: 'var(--spacing-3)', fontSize: 'var(--font-size-sm)', fontWeight: 'var(--font-weight-medium)' }}>基本的な日付選択</h4>
                  <DatePicker
                    value={selectedDate}
                    onChange={setSelectedDate}
                    label="開始日"
                  />
                </div>
                <div>
                  <h4 style={{ marginBottom: 'var(--spacing-3)', fontSize: 'var(--font-size-sm)', fontWeight: 'var(--font-weight-medium)' }}>必須フィールド</h4>
                  <DatePicker
                    value=""
                    onChange={() => {}}
                    label="締切日"
                    required={true}
                  />
                </div>
                <div>
                  <h4 style={{ marginBottom: 'var(--spacing-3)', fontSize: 'var(--font-size-sm)', fontWeight: 'var(--font-weight-medium)' }}>日時選択（時間含む）</h4>
                  <div>
                    <label style={{
                      display: 'block',
                      fontSize: 'var(--font-size-sm)',
                      fontWeight: 'var(--font-weight-medium)',
                      color: 'var(--color-neutral-700)',
                      marginBottom: 'var(--spacing-2)'
                    }}>
                      開催日時 <span style={{ color: 'red' }}>*</span>
                    </label>
                    <input
                      type="datetime-local"
                      value=""
                      onChange={() => {}}
                      style={{
                        width: '100%',
                        padding: 'var(--spacing-2) var(--spacing-3)',
                        border: '1px solid var(--color-neutral-300)',
                        borderRadius: 'var(--radius-md)',
                        fontSize: 'var(--font-size-sm)',
                        color: 'var(--color-neutral-900)',
                        background: 'white',
                        transition: 'border-color 0.2s, box-shadow 0.2s',
                        outline: 'none'
                      }}
                      onFocus={(e) => {
                        e.target.style.borderColor = 'rgb(21, 52, 109)';
                        e.target.style.boxShadow = '0 0 0 3px rgba(21, 52, 109, 0.1)';
                      }}
                      onBlur={(e) => {
                        e.target.style.borderColor = 'var(--color-neutral-300)';
                        e.target.style.boxShadow = 'none';
                      }}
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="code-snippet">
              {`// 基本的な日付選択
<DatePicker
  value={selectedDate}
  onChange={setSelectedDate}
  label="開始日"
/>

// 必須フィールド
<DatePicker
  value={date}
  onChange={setDate}
  label="締切日"
  required={true}
/>

// 日時選択（時間含む）
<input
  type="datetime-local"
  value={dateTime}
  onChange={(e) => setDateTime(e.target.value)}
  style={{
    width: '100%',
    padding: 'var(--spacing-2) var(--spacing-3)',
    border: '1px solid var(--color-neutral-300)',
    borderRadius: 'var(--radius-md)',
    fontSize: 'var(--font-size-sm)'
  }}
/>`}
            </div>
          </div>

          {/* FileUpload */}
          <div className="component-card">
            <div className="component-info">
              <h3 className="component-name">FileUpload</h3>
              <p className="component-description">
                ドラッグ&ドロップ対応のファイルアップロードコンポーネント
              </p>
            </div>
            <div className="component-demo">
              <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--spacing-4)', maxWidth: '450px' }}>
                <div>
                  <h4 style={{ marginBottom: 'var(--spacing-3)', fontSize: 'var(--font-size-sm)', fontWeight: 'var(--font-weight-medium)' }}>単一ファイル</h4>
                  <FileUpload
                    onFilesChange={(files) => setUploadedFiles(files)}
                    label="プロフィール画像"
                    accept="image/*"
                  />
                  {uploadedFiles.length > 0 && (
                    <div style={{ marginTop: 'var(--spacing-2)', fontSize: 'var(--font-size-xs)', color: 'var(--color-neutral-600)' }}>
                      選択ファイル: {uploadedFiles.map(f => f.name).join(', ')}
                    </div>
                  )}
                </div>
                <div>
                  <h4 style={{ marginBottom: 'var(--spacing-3)', fontSize: 'var(--font-size-sm)', fontWeight: 'var(--font-weight-medium)' }}>複数ファイル</h4>
                  <FileUpload
                    onFilesChange={() => {}}
                    multiple={true}
                    label="ドキュメント"
                    accept=".pdf,.doc,.docx"
                  />
                </div>
              </div>
            </div>
            <div className="code-snippet">
              {`// 単一ファイル
<FileUpload
  onFilesChange={setFiles}
  label="プロフィール画像"
  accept="image/*"
/>

// 複数ファイル
<FileUpload
  onFilesChange={setFiles}
  multiple={true}
  label="ドキュメント"
  accept=".pdf,.doc,.docx"
/>`}
            </div>
          </div>

          {/* Textarea */}
          <div className="component-card">
            <div className="component-info">
              <h3 className="component-name">Textarea</h3>
              <p className="component-description">
                複数行テキスト入力用のテキストエリアコンポーネント
              </p>
            </div>
            <div className="component-demo">
              <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--spacing-4)', maxWidth: '500px' }}>
                <div>
                  <h4 style={{ marginBottom: 'var(--spacing-3)', fontSize: 'var(--font-size-sm)', fontWeight: 'var(--font-weight-medium)' }}>基本的なテキストエリア</h4>
                  <Textarea
                    value={textareaValue}
                    onChange={setTextareaValue}
                    label="メッセージ"
                    placeholder="ご意見・ご要望をお聞かせください"
                    rows={4}
                  />
                </div>
                <div>
                  <h4 style={{ marginBottom: 'var(--spacing-3)', fontSize: 'var(--font-size-sm)', fontWeight: 'var(--font-weight-medium)' }}>文字数制限付き</h4>
                  <Textarea
                    value=""
                    onChange={() => {}}
                    label="自己紹介"
                    placeholder="200文字以内で自己紹介をお書きください"
                    rows={3}
                    maxLength={200}
                  />
                </div>
              </div>
            </div>
            <div className="code-snippet">
              {`// 基本的なテキストエリア
<Textarea
  value={value}
  onChange={setValue}
  label="メッセージ"
  placeholder="ご意見をお聞かせください"
  rows={4}
/>

// 文字数制限付き
<Textarea
  value={value}
  onChange={setValue}
  label="自己紹介"
  placeholder="200文字以内で入力"
  maxLength={200}
  rows={3}
/>`}
            </div>
          </div>
        </div>
      </div>

      {/* Advanced Form Components */}
      <div className="component-section">
        <h2 className="section-title">高度なフォーム要素</h2>

        <div className="advanced-demo-grid">

          {/* Slider / RangeSlider */}
          <div className="component-card">
            <div className="component-info">
              <h3 className="component-name">Slider / RangeSlider</h3>
              <p className="component-description">
                単一値または範囲選択に対応した高度なスライダーコンポーネント
              </p>
            </div>
            <div className="component-demo">
              <div className="slider-wrapper">
                {/* 基本スライダー */}
                <div className="slider-section">
                  <h4 className="slider-section-title">基本スライダー</h4>
                  <div className="slider-item">
                    <label className="slider-label">音量: {sliderValue}%</label>
                    <Slider
                      value={sliderValue}
                      onChange={setSliderValue}
                      min={0}
                      max={100}
                      showLabel={false}
                    />
                  </div>
                </div>

                {/* レンジスライダー */}
                <div className="slider-section">
                  <h4 className="slider-section-title">レンジスライダー（範囲選択）</h4>
                  <div className="slider-item">
                    <label className="slider-label">価格範囲: ¥{rangeSliderValue[0].toLocaleString()} - ¥{rangeSliderValue[1].toLocaleString()}</label>
                    <RangeSlider
                      value={rangeSliderValue}
                      onChange={setRangeSliderValue}
                      min={0}
                      max={100000}
                      step={1000}
                    />
                  </div>
                </div>

                {/* サイズバリエーション */}
                <div className="slider-section">
                  <h4 className="slider-section-title">サイズバリエーション</h4>
                  <div className="slider-sizes">
                    <div className="slider-item">
                      <label className="slider-label">小サイズ</label>
                      <Slider
                        value={sliderValue}
                        onChange={setSliderValue}
                        size="small"
                      />
                    </div>
                    <div className="slider-item">
                      <label className="slider-label">標準サイズ</label>
                      <Slider
                        value={sliderValue}
                        onChange={setSliderValue}
                        size="medium"
                      />
                    </div>
                    <div className="slider-item">
                      <label className="slider-label">大サイズ</label>
                      <Slider
                        value={sliderValue}
                        onChange={setSliderValue}
                        size="large"
                      />
                    </div>
                  </div>
                </div>

                {/* カラーバリエーション */}
                <div className="slider-section">
                  <h4 className="slider-section-title">カラーバリエーション</h4>
                  <div className="slider-colors">
                    <div className="slider-item">
                      <label className="slider-label">Primary</label>
                      <Slider value={sliderValue} onChange={setSliderValue} color="primary" />
                    </div>
                    <div className="slider-item">
                      <label className="slider-label">Success</label>
                      <Slider value={sliderValue} onChange={setSliderValue} color="success" />
                    </div>
                    <div className="slider-item">
                      <label className="slider-label">Warning</label>
                      <Slider value={sliderValue} onChange={setSliderValue} color="warning" />
                    </div>
                    <div className="slider-item">
                      <label className="slider-label">Error</label>
                      <Slider value={sliderValue} onChange={setSliderValue} color="error" />
                    </div>
                  </div>
                </div>

                {/* 無効状態 */}
                <div className="slider-section">
                  <h4 className="slider-section-title">無効状態</h4>
                  <div className="slider-item">
                    <label className="slider-label">設定不可（無効化）</label>
                    <Slider
                      value={30}
                      onChange={() => {}}
                      disabled={true}
                    />
                  </div>
                </div>

                <style jsx>{`
                  .slider-wrapper {
                    display: flex;
                    flex-direction: column;
                    gap: var(--spacing-6);
                    max-width: 600px;
                  }

                  .slider-section {
                    display: flex;
                    flex-direction: column;
                    gap: var(--spacing-3);
                  }

                  .slider-section-title {
                    font-size: var(--font-size-sm);
                    font-weight: var(--font-weight-semibold);
                    color: var(--color-neutral-800);
                    margin: 0;
                  }

                  .slider-item {
                    display: flex;
                    flex-direction: column;
                    gap: var(--spacing-2);
                  }

                  .slider-label {
                    font-size: var(--font-size-xs);
                    font-weight: var(--font-weight-medium);
                    color: var(--color-neutral-600);
                  }

                  .slider-sizes, .slider-colors {
                    display: flex;
                    flex-direction: column;
                    gap: var(--spacing-4);
                  }
                `}</style>
              </div>
            </div>
            <div className="code-snippet">
              {`// 基本スライダー
<Slider
  value={value}
  onChange={setValue}
  min={0}
  max={100}
  showLabel={true}
/>

// レンジスライダー（範囲選択）
<RangeSlider
  value={[min, max]}
  onChange={setRange}
  min={0}
  max={100000}
  step={1000}
/>

// サイズとカラー指定
<Slider
  value={value}
  onChange={setValue}
  size="large"
  color="success"
  disabled={false}
/>

// カスタム設定例
<Slider
  value={volume}
  onChange={setVolume}
  min={0}
  max={100}
  step={5}
  size="medium"
  color="primary"
  formatLabel={(val) => \`\${val}%\`}
/>`}
            </div>
          </div>

          {/* Tooltip */}
          <div className="component-card">
            <div className="component-info">
              <h3 className="component-name">Tooltip</h3>
              <p className="component-description">
                ホバー時にヒントやヘルプ情報を表示するツールチップコンポーネント
              </p>
            </div>
            <div className="component-demo">
              <div className="chips-demo-section">
                <div>
                  <h4 style={{ marginBottom: 'var(--spacing-3)', fontSize: 'var(--font-size-sm)', fontWeight: 'var(--font-weight-medium)' }}>基本的なツールチップ</h4>
                  <div style={{ display: 'flex', gap: 'var(--spacing-4)', alignItems: 'center', flexWrap: 'wrap' }}>
                    <Tooltip content="上に表示" position="top">
                      <button style={{ padding: 'var(--spacing-2) var(--spacing-3)', border: '1px solid var(--color-neutral-300)', borderRadius: 'var(--radius-md)', background: 'white', cursor: 'pointer' }}>
                        上にホバー
                      </button>
                    </Tooltip>
                    <Tooltip content="下に表示" position="bottom">
                      <button style={{ padding: 'var(--spacing-2) var(--spacing-3)', border: '1px solid var(--color-neutral-300)', borderRadius: 'var(--radius-md)', background: 'white', cursor: 'pointer' }}>
                        下にホバー
                      </button>
                    </Tooltip>
                    <Tooltip content="左に表示" position="left">
                      <button style={{ padding: 'var(--spacing-2) var(--spacing-3)', border: '1px solid var(--color-neutral-300)', borderRadius: 'var(--radius-md)', background: 'white', cursor: 'pointer' }}>
                        左にホバー
                      </button>
                    </Tooltip>
                    <Tooltip content="右に表示" position="right">
                      <button style={{ padding: 'var(--spacing-2) var(--spacing-3)', border: '1px solid var(--color-neutral-300)', borderRadius: 'var(--radius-md)', background: 'white', cursor: 'pointer' }}>
                        右にホバー
                      </button>
                    </Tooltip>
                  </div>
                </div>
                <div>
                  <h4 style={{ marginBottom: 'var(--spacing-3)', fontSize: 'var(--font-size-sm)', fontWeight: 'var(--font-weight-medium)' }}>アイコンにツールチップ</h4>
                  <div style={{ display: 'flex', gap: 'var(--spacing-3)', alignItems: 'center' }}>
                    <Tooltip content="ヘルプ情報">
                      <Icon name="help" style={{ cursor: 'pointer', color: 'var(--color-primary-600)' }} />
                    </Tooltip>
                    <Tooltip content="詳細情報">
                      <Icon name="info" style={{ cursor: 'pointer', color: 'var(--color-info-600)' }} />
                    </Tooltip>
                  </div>
                </div>
                <div>
                  <h4 style={{ marginBottom: 'var(--spacing-3)', fontSize: 'var(--font-size-sm)', fontWeight: 'var(--font-weight-medium)' }}>フォーム要素との組み合わせ</h4>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--spacing-3)' }}>
                    <div>
                      <label style={{ display: 'flex', alignItems: 'center', gap: 'var(--spacing-2)', fontSize: 'var(--font-size-sm)', fontWeight: 'var(--font-weight-medium)' }}>
                        パスワード
                        <Tooltip content="8文字以上、英数字含む">
                          <Icon name="help" style={{ cursor: 'pointer', color: 'var(--color-neutral-500)', width: '18px', height: '18px' }} />
                        </Tooltip>
                      </label>
                      <input
                        type="password"
                        placeholder="パスワードを入力"
                        style={{ marginTop: 'var(--spacing-1)', width: '250px', padding: '8px', border: '1px solid #ccc', borderRadius: '4px' }}
                      />
                    </div>
                    <div>
                      <label style={{ display: 'flex', alignItems: 'center', gap: 'var(--spacing-2)', fontSize: 'var(--font-size-sm)', fontWeight: 'var(--font-weight-medium)' }}>
                        メールアドレス
                        <Tooltip content="確認メールが送信されます">
                          <Icon name="info" style={{ cursor: 'pointer', color: 'var(--color-info-500)', width: '18px', height: '18px' }} />
                        </Tooltip>
                      </label>
                      <input
                        type="email"
                        placeholder="example@email.com"
                        style={{ marginTop: 'var(--spacing-1)', width: '250px', padding: '8px', border: '1px solid #ccc', borderRadius: '4px' }}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="code-snippet">
              {`// 基本的なツールチップ
<Tooltip content="ヒントテキスト" position="top">
  <button>ホバーしてください</button>
</Tooltip>

// 位置指定
<Tooltip content="下に表示" position="bottom">
  <span>要素</span>
</Tooltip>

// アイコンと組み合わせ
<Tooltip content="ヘルプ情報">
  <Icon name="help" />
</Tooltip>

// フォームラベルと組み合わせ
<label>
  フィールド名
  <Tooltip content="入力形式の説明">
    <Icon name="info" />
  </Tooltip>
</label>`}
            </div>
          </div>


          {/* Rating */}
          <div className="component-card">
            <div className="component-info">
              <h3 className="component-name">Rating</h3>
              <p className="component-description">
                星評価やいいね機能などの評価入力コンポーネント
              </p>
            </div>
            <div className="component-demo">
              <div className="slider-demo-section">
                <div>
                  <h4 style={{ marginBottom: 'var(--spacing-3)', fontSize: 'var(--font-size-sm)', fontWeight: 'var(--font-weight-medium)' }}>星評価</h4>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--spacing-3)' }}>
                    <Rating
                      value={starRating}
                      onChange={setStarRating}
                      label="総合評価"
                      showValue={true}
                    />
                    <Rating
                      value={4}
                      readOnly={true}
                      label="平均評価（読み取り専用）"
                      showValue={true}
                    />
                  </div>
                </div>
                <div>
                  <h4 style={{ marginBottom: 'var(--spacing-3)', fontSize: 'var(--font-size-sm)', fontWeight: 'var(--font-weight-medium)' }}>サイズバリエーション</h4>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--spacing-3)' }}>
                    <div>
                      <div style={{ fontSize: 'var(--font-size-xs)', color: 'var(--color-neutral-600)', marginBottom: 'var(--spacing-2)' }}>小サイズ</div>
                      <Rating value={3} onChange={() => {}} size="sm" />
                    </div>
                    <div>
                      <div style={{ fontSize: 'var(--font-size-xs)', color: 'var(--color-neutral-600)', marginBottom: 'var(--spacing-2)' }}>中サイズ（デフォルト）</div>
                      <Rating value={3} onChange={() => {}} size="md" />
                    </div>
                    <div>
                      <div style={{ fontSize: 'var(--font-size-xs)', color: 'var(--color-neutral-600)', marginBottom: 'var(--spacing-2)' }}>大サイズ</div>
                      <Rating value={3} onChange={() => {}} size="lg" />
                    </div>
                  </div>
                </div>
                <div>
                  <h4 style={{ marginBottom: 'var(--spacing-3)', fontSize: 'var(--font-size-sm)', fontWeight: 'var(--font-weight-medium)' }}>3段階評価</h4>
                  <Rating
                    value={2}
                    onChange={() => {}}
                    max={3}
                    label="満足度評価"
                    showValue={true}
                  />
                </div>
              </div>
            </div>
            <div className="code-snippet">
              {`// 基本的な星評価
<Rating
  value={rating}
  onChange={setRating}
  label="総合評価"
  showValue={true}
/>

// 読み取り専用
<Rating
  value={4}
  readOnly={true}
  label="平均評価"
  showValue={true}
/>

// カスタム段階数とサイズ
<Rating
  value={rating}
  onChange={setRating}
  max={3}
  size="lg"
  label="3段階評価"
  showValue={true}
/>`}
            </div>
          </div>

          {/* AutoComplete */}
          <div className="component-card">
            <div className="component-info">
              <h3 className="component-name">AutoComplete</h3>
              <p className="component-description">
                入力支援機能を提供するオートコンプリートコンポーネント
              </p>
            </div>
            <div className="component-demo">
              <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--spacing-4)', maxWidth: '400px' }}>
                <div>
                  <h4 style={{ marginBottom: 'var(--spacing-3)', fontSize: 'var(--font-size-sm)', fontWeight: 'var(--font-weight-medium)' }}>技術スタック</h4>
                  <AutoComplete
                    value=""
                    onChange={() => {}}
                    suggestions={['JavaScript', 'React', 'Vue.js', 'Angular', 'TypeScript', 'Node.js', 'Python', 'Java', 'PHP', 'Go']}
                    placeholder="使用技術を入力してください"
                    label="スキル"
                  />
                </div>
              </div>
            </div>
            <div className="code-snippet">
              {`// 技術スタック選択
<AutoComplete
  value={value}
  onChange={setValue}
  suggestions={['JavaScript', 'React', 'Vue.js', 'Angular', 'TypeScript', 'Node.js']}
  placeholder="使用技術を入力してください"
  label="スキル"
  maxSuggestions={5}
/>`}
            </div>
          </div>

          {/* Chips */}
          <div className="component-card">
            <div className="component-info">
              <h3 className="component-name">Chips</h3>
              <p className="component-description">
                タグ選択や複数項目の管理に使用するチップコンポーネント
              </p>
            </div>
            <div className="component-demo">
              <div className="chips-demo-section">
                <div>
                  <h4 style={{ marginBottom: 'var(--spacing-3)', fontSize: 'var(--font-size-sm)', fontWeight: 'var(--font-weight-medium)' }}>選択可能チップス</h4>
                  <div style={{ marginBottom: 'var(--spacing-2)', fontSize: 'var(--font-size-xs)', color: 'var(--color-neutral-600)' }}>
                    選択中: {selectedChips.join(', ')}
                  </div>
                  <Chips
                    items={chips}
                    selected={selectedChips}
                    onSelectionChange={handleChipSelection}
                    removable={false}
                  />
                </div>
                <div>
                  <h4 style={{ marginBottom: 'var(--spacing-3)', fontSize: 'var(--font-size-sm)', fontWeight: 'var(--font-weight-medium)' }}>削除可能チップス</h4>
                  <div style={{ marginBottom: 'var(--spacing-2)', fontSize: 'var(--font-size-xs)', color: 'var(--color-neutral-600)' }}>
                    ×ボタンでチップを削除できます
                  </div>
                  <Chips
                    items={chips}
                    selected={chips}
                    onSelectionChange={() => {}}
                    removable={true}
                    onRemove={handleChipRemove}
                  />
                </div>
                <div>
                  <h4 style={{ marginBottom: 'var(--spacing-3)', fontSize: 'var(--font-size-sm)', fontWeight: 'var(--font-weight-medium)' }}>カテゴリ例</h4>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--spacing-3)' }}>
                    <div>
                      <div style={{ fontSize: 'var(--font-size-xs)', color: 'var(--color-neutral-600)', marginBottom: 'var(--spacing-2)' }}>スキル</div>
                      <Chips
                        items={['JavaScript', 'React', 'Node.js', 'TypeScript', 'Python']}
                        selected={['JavaScript', 'React']}
                        onSelectionChange={() => {}}
                        removable={false}
                      />
                    </div>
                    <div>
                      <div style={{ fontSize: 'var(--font-size-xs)', color: 'var(--color-neutral-600)', marginBottom: 'var(--spacing-2)' }}>興味のあるトピック</div>
                      <Chips
                        items={['Web開発', 'AI', 'デザイン', 'マーケティング', 'データ分析']}
                        selected={['Web開発', 'デザイン']}
                        onSelectionChange={() => {}}
                        removable={false}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="code-snippet">
              {`// 選択可能チップス
<Chips
  items={['tag1', 'tag2', 'tag3']}
  selected={selectedTags}
  onSelectionChange={handleSelection}
  removable={false}
/>

// 削除可能チップス
<Chips
  items={allTags}
  selected={allTags}
  onSelectionChange={() => {}}
  removable={true}
  onRemove={handleRemove}
/>

// 使用例：スキル選択
<Chips
  items={skills}
  selected={selectedSkills}
  onSelectionChange={toggleSkill}
  removable={false}
/>`}
            </div>
          </div>
        </div>
      </div>

      <div className="component-section">
        <h2 className="section-title">実用的なフォーム例</h2>

        <div className="component-card">
          <div className="component-info">
            <h3 className="component-name">統合フォームデモ</h3>
            <p className="component-description">
              フォームコンポーネントを組み合わせた実用例。「エラー表示テスト」ボタンでバリデーションエラーの表示を確認できます。
            </p>
          </div>
          <div className="component-demo">
            <form onSubmit={handleSubmit} className="demo-form">
              <InputField
                id="form-name"
                name="name"
                label={<>お名前 <span style={{ color: 'red' }}>*</span></>}
                value={formData.name}
                onChange={handleInputChange}
                placeholder="山田 太郎"
                required
                error={errors.name}
                fullWidth
              />

              <InputField
                id="form-email"
                type="email"
                name="email"
                label={<>メールアドレス <span style={{ color: 'red' }}>*</span></>}
                value={formData.email}
                onChange={handleInputChange}
                placeholder="example@email.com"
                required
                error={errors.email}
                fullWidth
              />

              <div>
                <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--spacing-2)', marginBottom: '4px' }}>
                  <label className="form-label" style={{ marginBottom: 0 }}>
                    パスワード <span style={{ color: 'red' }}>*</span>
                  </label>
                  <Tooltip content="8文字以上、英数字含む">
                    <Icon name="help" style={{ cursor: 'pointer', color: 'var(--color-neutral-500)', width: '18px', height: '18px' }} />
                  </Tooltip>
                </div>
                <InputField
                  id="form-password"
                  type="password"
                  name="password"
                  value={formData.password}
                  onChange={handleInputChange}
                  placeholder="8文字以上で入力"
                  required
                  error={errors.password}
                  fullWidth
                />
              </div>

              <div>
                <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--spacing-2)', marginBottom: '4px' }}>
                  <label className="form-label" style={{ marginBottom: 0 }}>
                    スキル <span style={{ color: 'red' }}>*</span>
                  </label>
                  <Tooltip content="お持ちの技術スキルを入力してください">
                    <Icon name="help" style={{ cursor: 'pointer', color: 'var(--color-neutral-500)', width: '18px', height: '18px' }} />
                  </Tooltip>
                </div>
                <AutoComplete
                  value={skillsValue}
                  onChange={setSkillsValue}
                  suggestions={['JavaScript', 'React', 'Vue.js', 'Angular', 'TypeScript', 'Node.js', 'Python', 'Java', 'PHP', 'Go', 'C++', 'CSS', 'HTML', 'SQL']}
                  placeholder="使用技術を入力してください"
                  label=""
                  required={true}
                />
                {errors.skills && <div className="form-error mt-2" role="alert">{errors.skills}</div>}
              </div>

              <div>
                <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--spacing-2)', marginBottom: '4px' }}>
                  <label className="form-label" style={{ marginBottom: 0 }}>
                    開始日 <span style={{ color: 'red' }}>*</span>
                  </label>
                  <Tooltip content="プロジェクトの開始予定日">
                    <Icon name="help" style={{ cursor: 'pointer', color: 'var(--color-neutral-500)', width: '18px', height: '18px' }} />
                  </Tooltip>
                </div>
                <DatePicker
                  value={selectedDate}
                  onChange={setSelectedDate}
                  error={errors.startDate}
                />
                {errors.startDate && <div className="form-error mt-2" role="alert">{errors.startDate}</div>}
              </div>

              <div>
                <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--spacing-2)', marginBottom: '4px' }}>
                  <label className="form-label" style={{ marginBottom: 0 }}>
                    添付ファイル <span style={{ color: 'red' }}>*</span>
                  </label>
                  <Tooltip content="PDF, Word, Excel形式対応">
                    <Icon name="help" style={{ cursor: 'pointer', color: 'var(--color-neutral-500)', width: '18px', height: '18px' }} />
                  </Tooltip>
                </div>
                <FileUpload
                  onFilesChange={(files) => setUploadedFiles(files)}
                  accept=".pdf,.doc,.docx,.xls,.xlsx"
                  multiple={true}
                  error={errors.files}
                />
                {errors.files && <div className="form-error mt-2" role="alert">{errors.files}</div>}
              </div>

              <div>
                <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--spacing-2)', marginBottom: '4px' }}>
                  <label className="form-label" style={{ marginBottom: 0 }}>
                    詳細説明 <span style={{ color: 'red' }}>*</span>
                  </label>
                  <Tooltip content="200文字以内で入力してください">
                    <Icon name="help" style={{ cursor: 'pointer', color: 'var(--color-neutral-500)', width: '18px', height: '18px' }} />
                  </Tooltip>
                </div>
                <Textarea
                  value={textareaValue}
                  onChange={setTextareaValue}
                  placeholder="プロジェクトの詳細をお書きください"
                  rows={4}
                  maxLength={200}
                  error={errors.description}
                />
                {errors.description && <div className="form-error mt-2" role="alert">{errors.description}</div>}
              </div>

              <div>
                <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--spacing-2)', marginBottom: '4px' }}>
                  <label className="form-label" style={{ marginBottom: 0 }}>
                    性別 <span style={{ color: 'red' }}>*</span>
                  </label>
                  <Tooltip content="回答したくない場合は「回答しない」を選択">
                    <Icon name="help" style={{ cursor: 'pointer', color: 'var(--color-neutral-500)', width: '18px', height: '18px' }} />
                  </Tooltip>
                </div>
                <div className={`radio-group mt-1 ${errors.gender ? 'error-state' : ''}`}>
                  <label className="radio-option">
                    <input
                      type="radio"
                      className="radio-input"
                      name="gender"
                      value="male"
                      checked={formData.gender === 'male'}
                      onChange={handleInputChange}
                      required
                    />
                    <span className="radio-label">男性</span>
                  </label>
                  <label className="radio-option">
                    <input
                      type="radio"
                      className="radio-input"
                      name="gender"
                      value="female"
                      checked={formData.gender === 'female'}
                      onChange={handleInputChange}
                      required
                    />
                    <span className="radio-label">女性</span>
                  </label>
                  <label className="radio-option">
                    <input
                      type="radio"
                      className="radio-input"
                      name="gender"
                      value="other"
                      checked={formData.gender === 'other'}
                      onChange={handleInputChange}
                      required
                    />
                    <span className="radio-label">その他</span>
                  </label>
                  <label className="radio-option">
                    <input
                      type="radio"
                      className="radio-input"
                      name="gender"
                      value="none"
                      checked={formData.gender === 'none'}
                      onChange={handleInputChange}
                      required
                    />
                    <span className="radio-label">回答しない</span>
                  </label>
                </div>
                {errors.gender && <div className="form-error mt-2" role="alert">{errors.gender}</div>}
              </div>

              <div>
                <label className="form-label">優先度</label>
                <div className="radio-group-horizontal mt-1">
                  <label className="radio-option">
                    <input
                      type="radio"
                      className="radio-input"
                      name="priority"
                      value="high"
                      checked={formData.priority === 'high'}
                      onChange={handleInputChange}
                    />
                    <span className="radio-label">高</span>
                  </label>
                  <label className="radio-option">
                    <input
                      type="radio"
                      className="radio-input"
                      name="priority"
                      value="medium"
                      checked={formData.priority === 'medium'}
                      onChange={handleInputChange}
                    />
                    <span className="radio-label">中</span>
                  </label>
                  <label className="radio-option">
                    <input
                      type="radio"
                      className="radio-input"
                      name="priority"
                      value="low"
                      checked={formData.priority === 'low'}
                      onChange={handleInputChange}
                    />
                    <span className="radio-label">低</span>
                  </label>
                </div>
              </div>

              <div>
                <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--spacing-2)', marginBottom: '4px' }}>
                  <label className="form-label" style={{ marginBottom: 0 }}>設定オプション</label>
                  <Tooltip content="重要なお知らせを受け取るため推奨">
                    <Icon name="info" style={{ cursor: 'pointer', color: 'var(--color-info-500)', width: '18px', height: '18px' }} />
                  </Tooltip>
                </div>
                <div className={`toggle-group mt-1 ${errors.notifications ? 'error-state' : ''}`}>
                  <label className="toggle-wrapper">
                    <div className="toggle-switch">
                      <input
                        type="checkbox"
                        className="toggle-input"
                        name="notifications"
                        checked={formData.notifications}
                        onChange={handleInputChange}
                        required
                      />
                      <span className="toggle-slider"></span>
                    </div>
                    <span className="toggle-label">プッシュ通知を受け取る <span style={{ color: 'red' }}>*</span></span>
                  </label>

                  <label className="toggle-wrapper">
                    <div className="toggle-switch">
                      <input
                        type="checkbox"
                        className="toggle-input"
                        name="darkMode"
                        checked={formData.darkMode}
                        onChange={handleInputChange}
                      />
                      <span className="toggle-slider"></span>
                    </div>
                    <span className="toggle-label">ダークモード</span>
                  </label>
                </div>
                {errors.notifications && <div className="form-error mt-2" role="alert">{errors.notifications}</div>}
              </div>

              <div className="checkbox-group">
                <label className="flex items-center">
                  <Checkbox
                    name="agreeToTerms"
                    checked={formData.agreeToTerms}
                    onChange={handleInputChange}
                    required
                  />
                  <span className="ms-2 text-sm text-gray-600">
                    利用規約に同意します <span style={{ color: 'red' }}>*</span>
                  </span>
                </label>
                {errors.agreeToTerms && <div className="form-error mt-2" role="alert">{errors.agreeToTerms}</div>}

                <label className="flex items-center">
                  <Checkbox
                    name="newsletter"
                    checked={formData.newsletter}
                    onChange={handleInputChange}
                  />
                  <span className="ms-2 text-sm text-gray-600">
                    ニュースレターを受信します
                  </span>
                </label>
              </div>

              <div className="form-actions">
                <button
                  type="button"
                  style={{
                    padding: '8px 16px',
                    border: '1px solid #ccc',
                    borderRadius: '4px',
                    background: 'white',
                    cursor: 'pointer'
                  }}
                  onClick={() => {
                    setFormData({
                      name: '',
                      email: '',
                      password: '',
                      prefecture: '',
                      gender: '',
                      priority: '',
                      notifications: false,
                      darkMode: false,
                      agreeToTerms: false,
                      newsletter: false
                    });
                    setErrors({});
                  }}
                >
                  リセット
                </button>
                <button
                  type="button"
                  style={{
                    padding: '8px 16px',
                    border: '1px solid #dc2626',
                    borderRadius: '4px',
                    background: '#dc2626',
                    color: 'white',
                    cursor: 'pointer',
                    marginRight: '8px'
                  }}
                  onClick={handleValidationTest}
                >
                  エラー表示テスト
                </button>
                <button
                  type="submit"
                  style={{
                    padding: '8px 16px',
                    border: 'none',
                    borderRadius: '4px',
                    background: 'rgb(21, 52, 109)',
                    color: 'white',
                    cursor: 'pointer'
                  }}
                >
                  送信
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>

      <div className="component-section">
        <h2 className="section-title">使用方法</h2>
        <div className="component-card">
          <div className="component-info">
            <h3 className="component-name">インポートと基本的な使用方法</h3>
          </div>
          <div className="code-snippet">
            {`// インポート
import InputField from '../../../components/forms/InputField.tsx';
import Checkbox from '../../../components/forms/Checkbox.tsx';
import DatePicker from '../../../components/basic/DatePicker.tsx';
import FileUpload from '../../../components/basic/FileUpload.tsx';
import Textarea from '../../../components/basic/Textarea.tsx';

// 基本的な使用
function MyForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    agreeToTerms: false
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  return (
    <form>
      <InputField
        name="name"
        label="お名前"
        value={formData.name}
        onChange={handleChange}
        placeholder="山田 太郎"
        error={errors.name}
        required
      />

      <InputField
        name="email"
        type="email"
        label="メールアドレス"
        value={formData.email}
        onChange={handleChange}
        placeholder="example@email.com"
        error={errors.email}
        required
      />

      <label className="flex items-center">
        <Checkbox
          name="agreeToTerms"
          checked={formData.agreeToTerms}
          onChange={handleChange}
        />
        <span>利用規約に同意します</span>
      </label>
    </form>
  );
}`}
          </div>
        </div>
      </div>


      {/* 検索・フィルター */}
      <div className="component-section">
        <h2 className="section-title">検索・フィルターパネル</h2>

        <div className="component-card">
          <div className="component-info">
            <h3 className="component-name">SearchFilterPanel</h3>
            <p className="component-description">
              検索ボックスとフィルター機能を組み合わせたパネルコンポーネント
            </p>
          </div>
          <div className="component-demo">
            <div className="search-filter-demo">
              <div className="search-filter-panel">
                <div className="search-section">
                  <label htmlFor="demo-search" className="search-label">検索</label>
                  <input
                    id="demo-search"
                    type="text"
                    className="search-input"
                    placeholder="検索キーワードを入力..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                  />
                </div>

                <div className="filter-section">
                  <div className="filter-item">
                    <label htmlFor="status-filter" className="filter-label">ステータス</label>
                    <select
                      id="status-filter"
                      className="filter-select"
                      value={selectedFilters.status}
                      onChange={(e) => handleFilterChange('status', e.target.value)}
                    >
                      {filterOptions.status.map((option) => (
                        <option key={option.value} value={option.value}>
                          {option.label}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div className="filter-item">
                    <label htmlFor="category-filter" className="filter-label">カテゴリ</label>
                    <select
                      id="category-filter"
                      className="filter-select"
                      value={selectedFilters.category}
                      onChange={(e) => handleFilterChange('category', e.target.value)}
                    >
                      {filterOptions.category.map((option) => (
                        <option key={option.value} value={option.value}>
                          {option.label}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>
              </div>

              <div className="demo-results">
                <p className="results-text">
                  検索: "{searchQuery}" | ステータス: {filterOptions.status.find(opt => opt.value === selectedFilters.status)?.label} |
                  カテゴリ: {filterOptions.category.find(opt => opt.value === selectedFilters.category)?.label}
                </p>
              </div>
            </div>
          </div>
          <div className="code-snippet">
            {`<SearchFilterPanel
  searchPlaceholder="検索..."
  searchValue={searchQuery}
  onSearch={handleSearch}
  filters={[
    {
      name: 'status',
      label: 'ステータス',
      options: [...],
      value: selectedValue,
      onChange: handleChange
    }
  ]}
/>`}
          </div>
        </div>
      </div>

      {/* SearchableSelect */}
      <div className="component-section">
        <h2 className="section-title">検索可能セレクト</h2>

        <div className="component-card">
          <div className="component-info">
            <h3 className="component-name">SearchableSelect</h3>
            <p className="component-description">
              検索機能付きの高機能セレクトコンポーネント - 単一選択、複数選択、キーボードナビゲーション対応
            </p>
          </div>
          <div className="component-demo">
            <div style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>

              {/* 基本的な単一選択 */}
              <div>
                <h4 style={{ marginBottom: '16px', fontSize: '16px', fontWeight: '600' }}>基本的な単一選択</h4>
                <div style={{ marginBottom: '12px' }}>
                  <label style={{ display: 'block', marginBottom: '8px', fontSize: '14px', fontWeight: '500' }}>国を選択</label>
                  <SearchableSelect
                    options={[
                      { value: 'jp', label: '日本' },
                      { value: 'us', label: 'アメリカ' },
                      { value: 'uk', label: 'イギリス' },
                      { value: 'fr', label: 'フランス' },
                      { value: 'de', label: 'ドイツ' },
                      { value: 'kr', label: '韓国' },
                      { value: 'cn', label: '中国' },
                      { value: 'ca', label: 'カナダ' },
                      { value: 'au', label: 'オーストラリア' },
                      { value: 'in', label: 'インド' }
                    ]}
                    value={selectedCountry}
                    onChange={setSelectedCountry}
                    placeholder="国を選択してください..."
                    searchPlaceholder="国名で検索..."
                  />
                  <div style={{ marginTop: '8px', fontSize: '12px', color: '#666' }}>
                    選択中: {selectedCountry || '未選択'}
                  </div>
                </div>
              </div>

              {/* 複数選択 */}
              <div>
                <h4 style={{ marginBottom: '16px', fontSize: '16px', fontWeight: '600' }}>複数選択</h4>
                <div style={{ marginBottom: '12px' }}>
                  <label style={{ display: 'block', marginBottom: '8px', fontSize: '14px', fontWeight: '500' }}>チームメンバー</label>
                  <SearchableSelect
                    options={[
                      { value: 'tanaka', label: '田中太郎' },
                      { value: 'suzuki', label: '鈴木花子' },
                      { value: 'sato', label: '佐藤一郎' },
                      { value: 'takahashi', label: '高橋美咲' },
                      { value: 'watanabe', label: '渡辺健太' },
                      { value: 'yamada', label: '山田美香' },
                      { value: 'nakamura', label: '中村悠太' },
                      { value: 'kobayashi', label: '小林由美' }
                    ]}
                    value={selectedUsers}
                    onChange={setSelectedUsers}
                    placeholder="メンバーを選択..."
                    searchPlaceholder="名前で検索..."
                    multiple={true}
                  />
                  <div style={{ marginTop: '8px', fontSize: '12px', color: '#666' }}>
                    選択中 ({selectedUsers.length}): {selectedUsers.join(', ') || '未選択'}
                  </div>
                </div>
              </div>

            </div>
          </div>
          <div className="code-snippet">
            {`// 基本的な単一選択
<SearchableSelect
  options={[
    { value: 'jp', label: '日本' },
    { value: 'us', label: 'アメリカ' }
  ]}
  value={selectedValue}
  onChange={setSelectedValue}
  placeholder="選択してください..."
/>

// 複数選択
<SearchableSelect
  options={['オプション1', 'オプション2', 'オプション3']}
  value={selectedValues}
  onChange={setSelectedValues}
  multiple={true}
  placeholder="複数選択可能..."
/>

// 選択数制限付き複数選択
<SearchableSelect
  options={options}
  value={selectedValues}
  onChange={setSelectedValues}
  multiple={true}
  maxSelected={3}
  placeholder="最大3個まで選択可能..."
/>

// カスタマイズ
<SearchableSelect
  options={options}
  value={selectedValue}
  onChange={setSelectedValue}
  size="large"
  searchable={true}
  clearable={true}
  loading={isLoading}
  disabled={isDisabled}
  placeholder="カスタマイズ例..."
  searchPlaceholder="検索..."
  noOptionsText="見つかりません"
/>`}
          </div>
        </div>

      </div>

      <div className="component-section">
        <h2 className="section-title">使用上の注意</h2>
        <div className="component-card">
          <ul style={{ lineHeight: 'var(--line-height-relaxed)', color: 'var(--color-neutral-700)' }}>
            <li>InputFieldは適切なtype属性を設定してください（email, password等）</li>
            <li>InputFieldにlabel属性を指定すると、ラベルと入力フィールドが自動的に関連付けられます</li>
            <li>InputFieldのerror属性でバリデーションエラーを表示できます</li>
            <li>Checkboxは重要な同意事項や設定項目に使用してください</li>
            <li>SelectBoxには適切なデフォルトオプションを設定してください</li>
            <li>RadioButtonは排他的な選択肢に使用し、同じname属性を設定してください</li>
            <li>縦並び（radio-group）は選択肢が多い場合や説明が長い場合に適しています</li>
            <li>横並び（radio-group-horizontal）は選択肢が少ない場合やコンパクトな表示が必要な場合に適しています</li>
            <li>ToggleButtonは設定項目やON/OFF切り替えに使用してください</li>
            <li>ToggleButtonは直感的な操作ができるよう適切なラベルを設定してください</li>
            <li>ToggleButtonでエラー状態を表示する場合は、error-stateクラスを親要素に追加してください</li>
            <li>必須のToggleButtonには「*」マークとrequired属性を設定してください</li>
            <li>Switchコンポーネントは設定の即座適用が期待される場合に使用してください</li>
            <li>Sliderは連続的な数値選択（音量、価格範囲等）に適しています</li>
            <li>Sliderには最小値・最大値・ステップを適切に設定してください</li>
            <li>Chipsは複数選択やタグ管理に有効で、選択状態を視覚的に分かりやすく表現します</li>
            <li>削除可能なChipsはユーザーが追加したタグの管理に適しています</li>
            <li>フォームには適切なバリデーションとエラーハンドリングを実装してください</li>
            <li>エラー状態の要素には適切なCSSクラスやaria属性を設定してください</li>
            <li>検索・フィルターパネルはリアルタイム検索または送信ボタンでの適用を検討してください</li>
            <li>フィルター項目は用途に応じて適切なオプションを設定してください</li>
            <li>Tooltipはユーザビリティ向上のため、入力規則や説明が必要な項目に使用してください</li>
            <li>Tooltipのテキストは簡潔で分かりやすい内容にしてください</li>
            <li>Tooltipの位置は画面端での表示を考慮して適切に設定してください</li>
            <li>アイコンと組み合わせたTooltipはヘルプアイコンや情報アイコンの使用を推奨します</li>
            <li>DatePickerは日付の入力が必要な場面で使用し、適切なラベルを設定してください</li>
            <li>DatePickerにはmin/max属性で日付範囲の制限を設けることも可能です</li>
            <li>FileUploadはaccept属性で対応ファイル形式を明確にしてください</li>
            <li>FileUploadはドラッグ&ドロップとクリック選択の両方に対応しています</li>
            <li>複数ファイル選択が必要な場合はmultiple属性を設定してください</li>
            <li>Textareaは長文入力が必要な場面で使用し、適切な行数を設定してください</li>
            <li>Textareaには文字数制限（maxLength）を設定してユーザーに入力量の目安を示してください</li>
            <li>Textareaのresizeプロパティで垂直方向のリサイズを許可しています</li>
            <li>Ratingコンポーネントは評価やフィードバック収集に適しています</li>
            <li>星評価は1-5段階評価に適しており、デフォルトで星アイコンを使用します</li>
            <li>読み取り専用モードで既存の評価値を表示できます</li>
            <li>max属性で評価段階数をカスタマイズ可能です（3段階、5段階など）</li>
            <li>ホバー効果でユーザビリティを向上させています</li>
            <li>AutoCompleteは入力支援によりユーザビリティを向上させます</li>
            <li>キーボード操作（矢印キー、Enter、Escape）に対応しています</li>
            <li>部分一致でのフィルタリングにより候補を絞り込みます</li>
            <li>maxSuggestionsで表示候補数を制限できます</li>
            <li>住所、技術スタック、商品名など様々な用途に適用可能です</li>
          </ul>
        </div>
      </div>


    </div>
  );
};

export default FormsPage;