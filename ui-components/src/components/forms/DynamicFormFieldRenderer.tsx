import React from 'react';
import InputField, { TextArea, Select } from './InputField';
import Checkbox from './Checkbox';
import SelectBox from './SelectBox';
import { FormFieldConfig } from '../../types/forms/FormFieldConfig';

interface DynamicFormFieldRendererProps {
  field: FormFieldConfig;
  value: any;
  error?: string;
  onChange: (value: any) => void;
  onBlur: () => void;
  disabled?: boolean;
  readOnly?: boolean;
  formData?: Record<string, any>;
}

/**
 * DynamicFormFieldRenderer Component
 *
 * Renders a single form field based on its configuration.
 * Supports all field types defined in FormFieldConfig.
 *
 * Features:
 * - Handles 20+ field types
 * - Conditional visibility and disabled state
 * - Custom render functions
 * - File upload support
 * - Multi-select support
 * - Checkbox and radio groups
 * - Integration with existing InputField components
 *
 * @param props - Field rendering props
 * @returns Rendered form field
 */
const DynamicFormFieldRenderer: React.FC<DynamicFormFieldRendererProps> = ({
  field,
  value,
  error,
  onChange,
  onBlur,
  disabled = false,
  readOnly = false,
  formData = {}
}) => {
  // Check conditional visibility
  if (field.visible && !field.visible(formData)) {
    return null;
  }

  // Check conditional disabled state
  const isDisabled = disabled || field.disabled ||
    (field.conditionalDisabled && field.conditionalDisabled(formData));

  const isReadOnly = readOnly || field.readOnly;

  // Custom render function takes precedence
  if (field.render) {
    return (
      <div className={field.wrapperClassName}>
        {field.render({ value, onChange, onBlur, error })}
      </div>
    );
  }

  // Render based on field type
  switch (field.type) {
    case 'text':
    case 'email':
    case 'password':
    case 'tel':
    case 'url':
    case 'number':
    case 'date':
    case 'datetime-local':
    case 'time':
    case 'month':
    case 'week':
    case 'search':
      return (
        <InputField
          type={field.type}
          label={field.label}
          name={field.name}
          id={field.name}
          value={value || ''}
          onChange={(e) => onChange(e.target.value)}
          onBlur={onBlur}
          placeholder={field.placeholder}
          required={field.required}
          disabled={isDisabled}
          readOnly={isReadOnly}
          error={error}
          helper={field.helperText}
          min={field.min}
          max={field.max}
          step={field.step}
          maxLength={field.maxLength}
          pattern={field.pattern}
          autoComplete={field.autoComplete}
          autoFocus={field.autoFocus}
          inputMode={field.inputMode}
          className={field.className}
          fullWidth={field.width === 'full'}
          {...field.attributes}
        />
      );

    case 'textarea':
      return (
        <TextArea
          label={field.label}
          name={field.name}
          id={field.name}
          value={value || ''}
          onChange={(e) => onChange(e.target.value)}
          onBlur={onBlur}
          placeholder={field.placeholder}
          required={field.required}
          disabled={isDisabled}
          readOnly={isReadOnly}
          error={error}
          helper={field.helperText}
          rows={field.rows || 4}
          maxLength={field.maxLength}
          className={field.className}
          fullWidth={field.width === 'full'}
          {...field.attributes}
        />
      );

    case 'select':
      return (
        <Select
          label={field.label}
          name={field.name}
          id={field.name}
          value={field.multiple ? (Array.isArray(value) ? value : []) : (value || '')}
          onChange={(e) => {
            if (field.multiple) {
              const options = Array.from(e.target.selectedOptions, (option: any) => option.value);
              onChange(options);
            } else {
              onChange(e.target.value);
            }
          }}
          onBlur={onBlur}
          options={field.options || []}
          placeholder={field.placeholder}
          required={field.required}
          disabled={isDisabled}
          error={error}
          helper={field.helperText}
          className={field.className}
          fullWidth={field.width === 'full'}
          multiple={field.multiple}
          {...field.attributes}
        />
      );

    case 'multiselect':
      return (
        <SelectBox
          label={field.label}
          name={field.name}
          value={Array.isArray(value) ? value : []}
          options={field.options || []}
          onChange={onChange}
          onBlur={onBlur}
          placeholder={field.placeholder}
          required={field.required}
          disabled={isDisabled}
          error={error}
          helper={field.helperText}
          className={field.className}
          fullWidth={field.width === 'full'}
        />
      );

    case 'checkbox':
      // Single checkbox
      if (!field.options || field.options.length === 0) {
        return (
          <div className={`form-group ${field.wrapperClassName || ''}`}>
            <label style={{ display: 'flex', alignItems: 'center', gap: 'var(--spacing-2)', cursor: isDisabled ? 'not-allowed' : 'pointer' }}>
              <Checkbox
                name={field.name}
                checked={!!value}
                onChange={(e) => onChange(e.target.checked)}
                onBlur={onBlur}
                disabled={isDisabled}
                required={field.required}
                {...field.attributes}
              />
              <span style={{
                fontSize: 'var(--font-size-sm)',
                color: isDisabled ? 'var(--color-neutral-400)' : 'var(--color-neutral-700)'
              }}>
                {field.label}
                {field.required && <span style={{ color: '#dc2626', marginLeft: '4px' }}>*</span>}
              </span>
            </label>
            {field.helperText && !error && (
              <div className="form-helper" style={{ marginLeft: '28px' }}>
                {field.helperText}
              </div>
            )}
            {error && (
              <div className="form-error" role="alert" style={{ marginLeft: '28px' }}>
                <svg className="form-error__icon" width="14" height="14" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                </svg>
                {error}
              </div>
            )}
          </div>
        );
      }

      // Multiple checkboxes (checkbox group)
      const checkedValues = Array.isArray(value) ? value : [];
      return (
        <div className={`form-group ${field.wrapperClassName || ''}`}>
          <label className={`form-label ${field.required ? 'form-label--required' : ''}`}>
            {field.label}
          </label>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--spacing-3)' }}>
            {field.options.map((option) => (
              <label
                key={option.value}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: 'var(--spacing-2)',
                  cursor: (isDisabled || option.disabled) ? 'not-allowed' : 'pointer'
                }}
              >
                <Checkbox
                  name={`${field.name}[]`}
                  value={option.value}
                  checked={checkedValues.includes(option.value)}
                  onChange={(e) => {
                    const newValues = e.target.checked
                      ? [...checkedValues, option.value]
                      : checkedValues.filter(v => v !== option.value);
                    onChange(newValues);
                  }}
                  onBlur={onBlur}
                  disabled={isDisabled || option.disabled}
                  {...field.attributes}
                />
                <span style={{
                  fontSize: 'var(--font-size-sm)',
                  color: (isDisabled || option.disabled) ? 'var(--color-neutral-400)' : 'var(--color-neutral-700)'
                }}>
                  {option.label}
                  {option.description && (
                    <span style={{
                      display: 'block',
                      fontSize: 'var(--font-size-xs)',
                      color: 'var(--color-neutral-500)',
                      marginTop: '2px'
                    }}>
                      {option.description}
                    </span>
                  )}
                </span>
              </label>
            ))}
          </div>
          {field.helperText && !error && (
            <div className="form-helper">{field.helperText}</div>
          )}
          {error && (
            <div className="form-error" role="alert">
              <svg className="form-error__icon" width="14" height="14" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
              </svg>
              {error}
            </div>
          )}
        </div>
      );

    case 'radio':
      return (
        <div className={`form-group ${field.wrapperClassName || ''}`}>
          <label className={`form-label ${field.required ? 'form-label--required' : ''}`}>
            {field.label}
          </label>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--spacing-3)' }}>
            {(field.options || []).map((option) => (
              <label
                key={option.value}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: 'var(--spacing-2)',
                  cursor: (isDisabled || option.disabled) ? 'not-allowed' : 'pointer'
                }}
              >
                <input
                  type="radio"
                  name={field.name}
                  value={option.value}
                  checked={value === option.value}
                  onChange={(e) => onChange(e.target.value)}
                  onBlur={onBlur}
                  disabled={isDisabled || option.disabled}
                  required={field.required}
                  style={{
                    width: '16px',
                    height: '16px',
                    cursor: (isDisabled || option.disabled) ? 'not-allowed' : 'pointer'
                  }}
                  {...field.attributes}
                />
                <span style={{
                  fontSize: 'var(--font-size-sm)',
                  color: (isDisabled || option.disabled) ? 'var(--color-neutral-400)' : 'var(--color-neutral-700)'
                }}>
                  {option.label}
                  {option.description && (
                    <span style={{
                      display: 'block',
                      fontSize: 'var(--font-size-xs)',
                      color: 'var(--color-neutral-500)',
                      marginTop: '2px'
                    }}>
                      {option.description}
                    </span>
                  )}
                </span>
              </label>
            ))}
          </div>
          {field.helperText && !error && (
            <div className="form-helper">{field.helperText}</div>
          )}
          {error && (
            <div className="form-error" role="alert">
              <svg className="form-error__icon" width="14" height="14" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
              </svg>
              {error}
            </div>
          )}
        </div>
      );

    case 'file':
      return (
        <div className={`form-group ${field.wrapperClassName || ''}`}>
          <label
            htmlFor={field.name}
            className={`form-label ${field.required ? 'form-label--required' : ''}`}
          >
            {field.label}
          </label>
          <input
            type="file"
            id={field.name}
            name={field.name}
            onChange={(e) => {
              const files = e.target.files;
              if (field.multiple) {
                onChange(files);
              } else {
                onChange(files && files.length > 0 ? files[0] : null);
              }
              // Trigger validation immediately after file selection
              setTimeout(() => onBlur(), 0);
            }}
            onBlur={onBlur}
            accept={field.accept}
            multiple={field.multiple}
            disabled={isDisabled}
            required={field.required}
            style={{
              width: '100%',
              padding: 'var(--spacing-3)',
              border: `1px solid ${error ? '#dc2626' : 'rgb(209, 213, 219)'}`,
              borderRadius: 'var(--radius-md)',
              fontSize: 'var(--font-size-sm)',
              fontFamily: 'inherit',
              cursor: isDisabled ? 'not-allowed' : 'pointer'
            }}
            className={field.className}
            {...field.attributes}
          />
          {field.helperText && !error && (
            <div className="form-helper">{field.helperText}</div>
          )}
          {error && (
            <div className="form-error" role="alert">
              <svg className="form-error__icon" width="14" height="14" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
              </svg>
              {error}
            </div>
          )}
        </div>
      );

    case 'color':
      return (
        <div className={`form-group ${field.wrapperClassName || ''}`}>
          <label
            htmlFor={field.name}
            className={`form-label ${field.required ? 'form-label--required' : ''}`}
          >
            {field.label}
          </label>
          <input
            type="color"
            id={field.name}
            name={field.name}
            value={value || '#000000'}
            onChange={(e) => onChange(e.target.value)}
            onBlur={onBlur}
            disabled={isDisabled}
            required={field.required}
            style={{
              width: '100%',
              height: '40px',
              padding: 'var(--spacing-1)',
              border: `1px solid ${error ? '#dc2626' : 'rgb(209, 213, 219)'}`,
              borderRadius: 'var(--radius-md)',
              cursor: isDisabled ? 'not-allowed' : 'pointer'
            }}
            className={field.className}
            {...field.attributes}
          />
          {field.helperText && !error && (
            <div className="form-helper">{field.helperText}</div>
          )}
          {error && (
            <div className="form-error" role="alert">
              <svg className="form-error__icon" width="14" height="14" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
              </svg>
              {error}
            </div>
          )}
        </div>
      );

    case 'range':
      return (
        <div className={`form-group ${field.wrapperClassName || ''}`}>
          <label
            htmlFor={field.name}
            className={`form-label ${field.required ? 'form-label--required' : ''}`}
          >
            {field.label}
            <span style={{
              marginLeft: 'var(--spacing-2)',
              color: 'var(--color-neutral-500)',
              fontWeight: 'normal'
            }}>
              ({value || field.min || 0})
            </span>
          </label>
          <input
            type="range"
            id={field.name}
            name={field.name}
            value={value || field.min || 0}
            onChange={(e) => onChange(Number(e.target.value))}
            onBlur={onBlur}
            min={field.min}
            max={field.max}
            step={field.step}
            disabled={isDisabled}
            required={field.required}
            style={{
              width: '100%',
              cursor: isDisabled ? 'not-allowed' : 'pointer'
            }}
            className={field.className}
            {...field.attributes}
          />
          {field.helperText && !error && (
            <div className="form-helper">{field.helperText}</div>
          )}
          {error && (
            <div className="form-error" role="alert">
              <svg className="form-error__icon" width="14" height="14" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
              </svg>
              {error}
            </div>
          )}
        </div>
      );

    case 'hidden':
      return (
        <input
          type="hidden"
          name={field.name}
          value={value || ''}
          {...field.attributes}
        />
      );

    default:
      console.warn(`Unsupported field type: ${field.type}`);
      return null;
  }
};

export default DynamicFormFieldRenderer;
