import React, { useState, useEffect } from 'react';
import InfoPageWrapper from '../../../components/layout/InfoPageWrapper';
import Icon from '../../../components/icons/Icon';
import DynamicFormFieldRenderer from '../../../components/forms/DynamicFormFieldRenderer';
import { DynamicFormPageProps } from '../../../types/forms/FormProps';
import { FormFieldConfig, FormSection } from '../../../types/forms/FormFieldConfig';
import { useDynamicForm } from '../../../hooks/forms/dynamicForm';

/**
 * FormPage Component
 *
 * A unified, dynamic form component that replaces DataCreatePage and DataEditPage.
 * Supports Laravel + Inertia.js integration with dynamic field configuration.
 *
 * Features:
 * - Dynamic field rendering from Laravel backend
 * - Support for 20+ field types
 * - Integrated validation with error display
 * - Flat fields or grouped sections
 * - Collapsible sections
 * - Draft saving capability
 * - Auto-save support
 * - Responsive design
 * - Full accessibility
 *
 * @param props - Dynamic form page configuration from Laravel
 * @returns Complete form page with all features
 */
const FormPage: React.FC<DynamicFormPageProps> = ({
  title,
  subtitle,
  fields = [],
  sections = [],
  validation,
  initialData = {},
  errors: serverErrors = {},
  isSubmitting: externalIsSubmitting = false,
  onSubmit,
  onCancel,
  onDraftSave,
  onChange,
  submitButtonText = '登録',
  cancelButtonText = 'キャンセル',
  showDraftButton = true,
  draftButtonText = '下書き保存',
  customActions = [],
  layout,
  validateOnBlur = true,
  validateOnChange = false,
  showInlineErrors = true,
  showErrorSummary = false,
  autoSaveInterval,
  warnOnUnsavedChanges = false,
  formId = 'dynamic-form',
  className = '',
  successMessage,
  readOnly = false,
  loading = false,
  breadcrumbs = [],
  headerActions = [],
  onLogout
}) => {
  // View mode state
  const [viewMode, setViewMode] = useState<'pc' | 'tablet' | 'sp'>('pc');

  const [collapsedSections, setCollapsedSections] = useState<Set<string>>(
    new Set(sections.filter(s => s.defaultCollapsed).map(s => s.id))
  );
  const [showSuccess, setShowSuccess] = useState(false);

  // Navigation handler
  const handleNavigate = (page: string) => {
    const currentPath = typeof window !== 'undefined' ? window.location.pathname : '';
    const isTemplateRoute = currentPath.startsWith('/templates');
    const routePrefix = isTemplateRoute ? '/templates' : '/pages';

    const routeMap: Record<string, string> = {
      'dashboard': `${routePrefix}/dashboard`,
      'data-list': `${routePrefix}/data/list`,
      'statistics': `${routePrefix}/statistics`,
      'settings': `${routePrefix}/settings`,
      'notifications': `${routePrefix}/notifications`,
      'login': `${routePrefix}/login`,
      'qna': `${routePrefix}/qna`,
      'privacy': `${routePrefix}/privacy`,
      'terms': `${routePrefix}/terms`,
      'commercial': `${routePrefix}/commercial`,
    };

    const route = routeMap[page] || `${routePrefix}/${page}`;
    window.location.href = route;
  };

  const handleLogout = () => {
    if (onLogout) {
      onLogout();
      return;
    }
    handleNavigate('login');
  };

  // Initialize form with dynamic form hook
  const form = useDynamicForm({
    initialData,
    validation,
    onSubmit: async (data) => {
      const result = await onSubmit(data);
      if (result && result.success) {
        setShowSuccess(true);
        setTimeout(() => setShowSuccess(false), 3000);
      }
    },
    onError: (error) => {
      console.error('Form submission error:', error);
    }
  });

  // Sync server-side errors with form state
  useEffect(() => {
    if (serverErrors && Object.keys(serverErrors).length > 0) {
      Object.entries(serverErrors).forEach(([fieldName, message]) => {
        form.setError(fieldName, message);
      });
    }
  }, [serverErrors]);

  // Auto-save functionality
  useEffect(() => {
    if (!autoSaveInterval || !onDraftSave) return;

    const interval = setInterval(() => {
      if (form.isDirty && !form.isSubmitting) {
        onDraftSave(form.formData);
      }
    }, autoSaveInterval);

    return () => clearInterval(interval);
  }, [autoSaveInterval, form.isDirty, form.isSubmitting, form.formData, onDraftSave]);

  // Warn on unsaved changes
  useEffect(() => {
    if (!warnOnUnsavedChanges) return;

    const handleBeforeUnload = (e: BeforeUnloadEvent) => {
      if (form.isDirty) {
        e.preventDefault();
        e.returnValue = '';
      }
    };

    window.addEventListener('beforeunload', handleBeforeUnload);
    return () => window.removeEventListener('beforeunload', handleBeforeUnload);
  }, [warnOnUnsavedChanges, form.isDirty]);

  // Handle field change
  const handleFieldChange = (fieldName: string, value: any) => {
    if (validateOnChange) {
      form.handleChange(fieldName, value);
    } else {
      form.setValue(fieldName, value);
      form.clearError(fieldName);
    }

    // Call external onChange if provided
    if (onChange) {
      onChange(fieldName, value, { ...form.formData, [fieldName]: value });
    }
  };

  // Handle field blur
  const handleFieldBlur = (fieldName: string) => {
    if (validateOnBlur) {
      form.handleBlur(fieldName);
    }
  };

  // Handle draft save
  const handleDraftSave = () => {
    if (onDraftSave) {
      onDraftSave(form.formData);
    }
  };

  // Toggle section collapse
  const toggleSection = (sectionId: string) => {
    setCollapsedSections(prev => {
      const next = new Set(prev);
      if (next.has(sectionId)) {
        next.delete(sectionId);
      } else {
        next.add(sectionId);
      }
      return next;
    });
  };

  // Get field width class
  const getFieldWidthClass = (field: FormFieldConfig): string => {
    if (!field.width || field.width === 'full') return '';
    const widthMap = {
      'half': 'form-field--half',
      'third': 'form-field--third',
      'two-thirds': 'form-field--two-thirds',
      'quarter': 'form-field--quarter'
    };
    return widthMap[field.width] || '';
  };

  // Render a single field
  const renderField = (field: FormFieldConfig) => {
    const fieldValue = form.formData[field.name] ?? field.defaultValue ?? '';
    const fieldError = showInlineErrors ? form.errors[field.name] : undefined;

    return (
      <div
        key={field.name}
        className={`form-field ${getFieldWidthClass(field)}`}
        style={{
          gridColumn: field.width === 'full' ? '1 / -1' : undefined
        }}
      >
        <DynamicFormFieldRenderer
          field={field}
          value={fieldValue}
          error={fieldError}
          onChange={(value) => handleFieldChange(field.name, value)}
          onBlur={() => handleFieldBlur(field.name)}
          disabled={externalIsSubmitting || form.isSubmitting}
          readOnly={readOnly}
          formData={form.formData}
        />
      </div>
    );
  };

  // Render section
  const renderSection = (section: FormSection) => {
    // Check section visibility
    if (section.visible && !section.visible(form.formData)) {
      return null;
    }

    const isCollapsed = collapsedSections.has(section.id);

    return (
      <div key={section.id} className={`dashboard-card ${section.className || ''}`} style={{ marginBottom: 'var(--spacing-6)' }}>
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            marginBottom: isCollapsed ? 0 : 'var(--spacing-4)',
            cursor: section.collapsible ? 'pointer' : 'default'
          }}
          onClick={section.collapsible ? () => toggleSection(section.id) : undefined}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--spacing-2)' }}>
            {section.icon && (
              <Icon
                name={section.icon as any}
                style={{ width: '20px', height: '20px', color: 'var(--color-primary-500)' }}
              />
            )}
            <h3 style={{
              fontSize: 'var(--font-size-lg)',
              fontWeight: 'var(--font-weight-bold)',
              color: 'var(--color-neutral-900)',
              margin: 0
            }}>
              {section.title}
            </h3>
          </div>
          {section.collapsible && (
            <Icon
              name={isCollapsed ? 'chevron-down' : 'chevron-up'}
              style={{
                width: '20px',
                height: '20px',
                color: 'var(--color-neutral-500)',
                transition: 'transform 0.2s'
              }}
            />
          )}
        </div>

        {section.description && !isCollapsed && (
          <p style={{
            fontSize: 'var(--font-size-sm)',
            color: 'var(--color-neutral-600)',
            marginBottom: 'var(--spacing-4)',
            marginTop: 'calc(var(--spacing-4) * -0.5)'
          }}>
            {section.description}
          </p>
        )}

        {!isCollapsed && (
          <div style={{
            display: 'grid',
            gridTemplateColumns: layout?.columns ? `repeat(${layout.columns}, 1fr)` : '1fr',
            gap: layout?.gap === 'sm' ? 'var(--spacing-3)' : layout?.gap === 'lg' ? 'var(--spacing-6)' : 'var(--spacing-4)'
          }}>
            {section.fields.map(renderField)}
          </div>
        )}
      </div>
    );
  };

  // Loading state
  if (loading) {
    return (
      <div className={viewMode === 'sp' ? 'force-mobile' : ''}>
        
        <InfoPageWrapper
          viewMode={viewMode}
          currentPage="data-form"
          onNavigate={handleNavigate}
          unreadCount={0}
          notifications={[]}
          onMarkNotificationAsRead={() => {}}
          onMarkAllNotificationsAsRead={() => {}}
          onLogout={handleLogout}
        >
          <div style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            minHeight: '400px'
          }}>
            <div style={{
              width: '40px',
              height: '40px',
              border: '4px solid var(--color-neutral-200)',
              borderTopColor: 'var(--color-primary-500)',
              borderRadius: 0,
              animation: 'spin 0.8s linear infinite'
            }} />
          </div>
        </InfoPageWrapper>
      </div>
    );
  }

  const isSubmitting = externalIsSubmitting || form.isSubmitting;

  return (
    <div className={viewMode === 'sp' ? 'force-mobile' : ''}>
      
      <InfoPageWrapper
        viewMode={viewMode}
        currentPage="data-form"
        onNavigate={handleNavigate}
        unreadCount={0}
        notifications={[]}
        onMarkNotificationAsRead={() => {}}
        onMarkAllNotificationsAsRead={() => {}}
        onLogout={handleLogout}
      >
        <div className={`dashboard-content form-page ${className}`}>
          {/* Breadcrumb Navigation */}
      {breadcrumbs.length > 0 && (
        <nav style={{
          paddingBottom: 'var(--spacing-3)',
          marginBottom: 'var(--spacing-4)'
        }}>
          <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
            fontSize: 'var(--font-size-sm)',
            color: 'var(--color-neutral-600)',
            flexWrap: 'wrap'
          }}>
            {breadcrumbs.map((crumb, index) => (
              <React.Fragment key={index}>
                {crumb.path ? (
                  <a
                    href="#"
                    onClick={(e) => {
                      e.preventDefault();
                      if (onCancel) onCancel();
                    }}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '4px',
                      color: 'var(--color-neutral-600)',
                      textDecoration: 'none',
                      transition: 'color 0.15s'
                    }}
                    onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--color-primary-600)')}
                    onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--color-neutral-600)')}
                  >
                    {index === 0 && <Icon name="table" style={{ width: '16px', height: '16px' }} />}
                    <span>{crumb.label}</span>
                  </a>
                ) : (
                  <span style={{
                    color: 'var(--color-neutral-900)',
                    fontWeight: 'var(--font-weight-medium)'
                  }}>
                    {crumb.label}
                  </span>
                )}
                {index < breadcrumbs.length - 1 && (
                  <Icon name="chevron-right" style={{ width: '12px', height: '12px', color: 'var(--color-neutral-400)' }} />
                )}
              </React.Fragment>
            ))}
          </div>
        </nav>
      )}

      {/* Page Header */}
      <div className="page-header" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
        <div>
          <h2 className="page-title">{title}</h2>
          {subtitle && (
            <p style={{
              fontSize: 'var(--font-size-sm)',
              color: 'var(--color-neutral-600)',
              marginTop: 'var(--spacing-2)'
            }}>
              {subtitle}
            </p>
          )}
        </div>

        {/* Header Actions */}
        {headerActions.length > 0 && (
          <div style={{ display: 'flex', gap: 'var(--spacing-2)' }}>
            {headerActions.map((action, index) => (
              <button
                key={index}
                type="button"
                className={`btn btn--${action.variant || 'secondary'}`}
                onClick={action.onClick}
              >
                {action.icon && <Icon name={action.icon as any} style={{ width: '16px', height: '16px' }} />}
                {action.label}
              </button>
            ))}
          </div>
        )}
      </div>

      {/* Success Message */}
      {(showSuccess && successMessage) && (
        <div style={{
          padding: 'var(--spacing-4)',
          backgroundColor: 'var(--color-success-50)',
          border: '1px solid var(--color-success-200)',
          borderRadius: 0,
          marginBottom: 'var(--spacing-4)',
          display: 'flex',
          alignItems: 'center',
          gap: 'var(--spacing-2)'
        }}>
          <Icon name="check-circle" style={{ width: '20px', height: '20px', color: 'var(--color-success-600)' }} />
          <span style={{ color: 'var(--color-success-700)', fontSize: 'var(--font-size-sm)' }}>
            {successMessage}
          </span>
        </div>
      )}

      {/* Error Summary */}
      {showErrorSummary && form.hasErrors && (
        <div style={{
          padding: 'var(--spacing-4)',
          backgroundColor: 'var(--color-error-50)',
          border: '1px solid var(--color-error-200)',
          borderRadius: 0,
          marginBottom: 'var(--spacing-4)'
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--spacing-2)', marginBottom: 'var(--spacing-2)' }}>
            <Icon name="error" style={{ width: '20px', height: '20px', color: 'var(--color-error-600)' }} />
            <h4 style={{
              fontSize: 'var(--font-size-md)',
              fontWeight: 'var(--font-weight-bold)',
              color: 'var(--color-error-700)',
              margin: 0
            }}>
              入力内容にエラーがあります
            </h4>
          </div>
          <ul style={{
            margin: 0,
            paddingLeft: 'var(--spacing-5)',
            color: 'var(--color-error-700)',
            fontSize: 'var(--font-size-sm)'
          }}>
            {Object.entries(form.errors).map(([field, message]) => (
              <li key={field}>{message}</li>
            ))}
          </ul>
        </div>
      )}

      {/* Form */}
      <form id={formId} onSubmit={form.handleSubmit} noValidate>
        {/* Render Sections or Flat Fields */}
        {sections.length > 0 ? (
          sections.map(renderSection)
        ) : (
          <div className="dashboard-card" style={{ marginBottom: 'var(--spacing-6)' }}>
            <div style={{
              display: 'grid',
              gridTemplateColumns: layout?.columns ? `repeat(${layout.columns}, 1fr)` : '1fr',
              gap: layout?.gap === 'sm' ? 'var(--spacing-3)' : layout?.gap === 'lg' ? 'var(--spacing-6)' : 'var(--spacing-4)'
            }}>
              {fields.map(renderField)}
            </div>
          </div>
        )}

        {/* Form Actions */}
        <div style={{
          display: 'flex',
          gap: 'var(--spacing-3)',
          justifyContent: 'flex-end',
          flexWrap: 'wrap'
        }}>
          {/* Cancel Button */}
          {onCancel && (
            <button
              type="button"
              className="btn btn--text"
              disabled={isSubmitting}
              onClick={onCancel}
            >
              {cancelButtonText}
            </button>
          )}

          {/* Custom Actions */}
          {customActions.map((action, index) => (
            <button
              key={index}
              type="button"
              className={`btn btn--${action.variant || 'secondary'}`}
              disabled={action.disabled || isSubmitting}
              onClick={() => action.onClick(form.formData)}
            >
              {action.icon && <Icon name={action.icon as any} style={{ width: '16px', height: '16px' }} />}
              {action.label}
            </button>
          ))}

          {/* Draft Save Button */}
          {showDraftButton && onDraftSave && !readOnly && (
            <button
              type="button"
              className="btn btn--secondary"
              disabled={isSubmitting || !form.isDirty}
              onClick={handleDraftSave}
            >
              <Icon name="file" style={{ width: '16px', height: '16px' }} />
              {draftButtonText}
            </button>
          )}

          {/* Submit Button */}
          {!readOnly && (
            <button
              type="submit"
              className="btn btn--primary"
              disabled={isSubmitting}
            >
              {isSubmitting ? (
                <>
                  <div style={{
                    width: '16px',
                    height: '16px',
                    border: '2px solid white',
                    borderTopColor: 'transparent',
                    borderRadius: 0,
                    animation: 'spin 0.6s linear infinite'
                  }} />
                  処理中...
                </>
              ) : (
                <>
                  <Icon name="check" style={{ width: '16px', height: '16px' }} />
                  {submitButtonText}
                </>
              )}
            </button>
          )}
        </div>
      </form>
        </div>
      </InfoPageWrapper>
    </div>
  );
};

export default FormPage;
