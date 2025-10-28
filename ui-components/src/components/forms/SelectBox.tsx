import React, { useState, useRef, useEffect } from 'react';
import Icon from '../icons/Icon';

export interface SelectBoxOption {
  value: string;
  label: string;
}

export interface SelectBoxProps {
  label?: string;
  name: string;
  value: string[];
  options: SelectBoxOption[];
  onChange: (value: string[]) => void;
  onBlur?: () => void;
  placeholder?: string;
  error?: string;
  helper?: string;
  disabled?: boolean;
  required?: boolean;
  className?: string;
  fullWidth?: boolean;
}

/**
 * SelectBox Component
 *
 * Multiple selection dropdown component with custom styling
 * matching the FormsPage design.
 *
 * Features:
 * - Multiple selection with checkboxes
 * - Custom dropdown styling
 * - Keyboard navigation
 * - Error state
 * - Helper text
 * - Full accessibility
 */
const SelectBox: React.FC<SelectBoxProps> = ({
  label,
  name,
  value = [],
  options = [],
  onChange,
  onBlur,
  placeholder = '選択してください',
  error,
  helper,
  disabled = false,
  required = false,
  className = '',
  fullWidth = true,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
        setIsOpen(false);
        if (onBlur) onBlur();
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [onBlur]);

  const toggleOption = (optionValue: string) => {
    if (disabled) return;

    const newValue = value.includes(optionValue)
      ? value.filter(v => v !== optionValue)
      : [...value, optionValue];

    onChange(newValue);
  };

  const toggleDropdown = () => {
    if (!disabled) {
      setIsOpen(!isOpen);
    }
  };

  const getDisplayText = () => {
    if (value.length === 0) return placeholder;

    const selectedLabels = options
      .filter(opt => value.includes(opt.value))
      .map(opt => opt.label);

    return selectedLabels.join(', ');
  };

  return (
    <div className={`form-group ${fullWidth ? 'form-group--full' : ''} ${className}`}>
      {label && (
        <label
          htmlFor={name}
          className={`form-label ${required ? 'form-label--required' : ''}`}
        >
          {label}
        </label>
      )}

      <div
        ref={containerRef}
        className={`select-box ${isOpen ? 'select-box--open' : ''} ${error ? 'select-box--error' : ''} ${disabled ? 'select-box--disabled' : ''}`}
      >
        <div
          className="select-box__trigger"
          onClick={toggleDropdown}
          role="button"
          aria-haspopup="listbox"
          aria-expanded={isOpen}
          aria-label={label}
          tabIndex={disabled ? -1 : 0}
          onKeyDown={(e) => {
            if (e.key === 'Enter' || e.key === ' ') {
              e.preventDefault();
              toggleDropdown();
            }
          }}
        >
          <span className="select-box__value">
            {getDisplayText()}
          </span>
          <Icon
            name={isOpen ? 'chevron-up' : 'chevron-down'}
            className="select-box__icon"
          />
        </div>

        {isOpen && (
          <div className="select-box__dropdown" role="listbox">
            {options.map((option) => {
              const isSelected = value.includes(option.value);
              return (
                <div
                  key={option.value}
                  className={`select-box__option ${isSelected ? 'select-box__option--selected' : ''}`}
                  onClick={() => toggleOption(option.value)}
                  role="option"
                  aria-selected={isSelected}
                >
                  <input
                    type="checkbox"
                    checked={isSelected}
                    onChange={() => {}}
                    tabIndex={-1}
                    className="select-box__checkbox"
                  />
                  <span className="select-box__label">{option.label}</span>
                </div>
              );
            })}
          </div>
        )}
      </div>

      {helper && !error && (
        <div className="form-helper">{helper}</div>
      )}

      {error && (
        <div className="form-error" role="alert">
          <svg className="form-error__icon" width="14" height="14" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
          </svg>
          {error}
        </div>
      )}

      <style>{`
        .select-box {
          position: relative;
          width: 100%;
        }

        .select-box__trigger {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: var(--spacing-3);
          background-color: var(--color-neutral-white);
          border: 1px solid rgb(209, 213, 219);
          border-radius: var(--radius-md);
          font-size: var(--font-size-sm);
          cursor: pointer;
          transition: all var(--duration-fast) var(--ease-out);
          min-height: 42px;
        }

        .select-box__trigger:hover {
          border-color: var(--color-primary-500);
        }

        .select-box__trigger:focus {
          outline: 2px solid var(--color-primary-500);
          outline-offset: 2px;
        }

        .select-box--open .select-box__trigger {
          border-color: var(--color-primary-500);
          box-shadow: 0 0 0 3px rgba(21, 52, 109, 0.1);
        }

        .select-box--error .select-box__trigger {
          border-color: var(--color-error-500);
        }

        .select-box--disabled .select-box__trigger {
          background-color: var(--color-neutral-100);
          cursor: not-allowed;
          opacity: 0.6;
        }

        .select-box__value {
          flex: 1;
          color: var(--color-neutral-900);
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
        }

        .select-box__icon {
          width: 16px;
          height: 16px;
          color: var(--color-neutral-500);
          flex-shrink: 0;
          margin-left: var(--spacing-2);
          transition: transform var(--duration-fast) var(--ease-out);
        }

        .select-box--open .select-box__icon {
          transform: rotate(180deg);
        }

        .select-box__dropdown {
          position: absolute;
          top: calc(100% + 4px);
          left: 0;
          right: 0;
          background-color: var(--color-neutral-white);
          border: 1px solid rgb(209, 213, 219);
          border-radius: var(--radius-md);
          box-shadow: var(--shadow-lg);
          max-height: 240px;
          overflow-y: auto;
          z-index: var(--z-index-dropdown);
          animation: slideDown 0.15s ease-out;
        }

        @keyframes slideDown {
          from {
            opacity: 0;
            transform: translateY(-8px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .select-box__option {
          display: flex;
          align-items: center;
          gap: var(--spacing-2);
          padding: var(--spacing-3);
          cursor: pointer;
          transition: background-color var(--duration-fast) var(--ease-out);
        }

        .select-box__option:hover {
          background-color: var(--color-neutral-50);
        }

        .select-box__option--selected {
          background-color: var(--color-primary-50);
        }

        .select-box__option--selected:hover {
          background-color: var(--color-primary-100);
        }

        .select-box__checkbox {
          width: 16px;
          height: 16px;
          cursor: pointer;
          flex-shrink: 0;
        }

        .select-box__label {
          font-size: var(--font-size-sm);
          color: var(--color-neutral-900);
        }

        .select-box__option--selected .select-box__label {
          font-weight: var(--font-weight-medium);
          color: var(--color-primary-700);
        }
      `}</style>
    </div>
  );
};

export default SelectBox;
