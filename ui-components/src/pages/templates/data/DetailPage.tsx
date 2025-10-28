import React, { useState, useMemo } from 'react';
import TemplateNavigation from '../../../components/navigation/TemplateNavigation';
import InfoPageWrapper from '../../../components/layout/InfoPageWrapper';
import Icon from '../../../components/icons/Icon';
import ConfirmModal from '../../../components/messages/ConfirmModal';
import type { DataDetailPageProps } from '../../../types/detail/DetailPageProps';
import type { DetailSection } from '../../../types/detail/DetailFieldConfig';
import '../../../styles/pages/templates/DetailPage.css';

// DetailFieldRenderer - handles different field types
const DetailFieldRenderer = ({ field, data }: any) => {
  const value = data[field.key];

  // Custom render function
  if (field.render) {
    return field.render(value, data);
  }

  // Handle empty/null values
  if (value === null || value === undefined || value === '') {
    return <span style={{ color: 'var(--color-neutral-400)' }}>{field.emptyText || '-'}</span>;
  }

  // Handle different field types
  switch (field.type) {
    case 'currency':
      const numValue = typeof value === 'string' ? parseFloat(value) : value;
      if (isNaN(numValue)) {
        return <span style={{ color: 'var(--color-neutral-400)' }}>{field.emptyText || '-'}</span>;
      }
      const decimals = field.decimals ?? 0;
      const formatted = numValue.toLocaleString('ja-JP', {
        minimumFractionDigits: decimals,
        maximumFractionDigits: decimals
      });
      const symbol = field.currencySymbol || '';
      return <span>{symbol}{formatted}</span>;

    case 'badge':
      const badgeConfig = field.badgeConfig?.[value];
      if (!badgeConfig) {
        return <span>{String(value)}</span>;
      }
      return (
        <span className={`status-badge status-badge--${badgeConfig.variant || 'default'}`}>
          {badgeConfig.label || value}
        </span>
      );

    case 'list':
      if (!Array.isArray(value) || value.length === 0) {
        return <span style={{ color: 'var(--color-neutral-400)' }}>{field.emptyText || '-'}</span>;
      }
      const renderItem = field.listConfig?.renderItem || ((item: any) => <span>{String(item)}</span>);
      return (
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 'var(--spacing-1)' }}>
          {value.map((item: any, index: number) => (
            <React.Fragment key={index}>
              {renderItem(item)}
            </React.Fragment>
          ))}
        </div>
      );

    case 'date':
      const dateValue = typeof value === 'string' ? new Date(value) : value;
      if (!(dateValue instanceof Date) || isNaN(dateValue.getTime())) {
        return <span>{String(value)}</span>;
      }
      return <span>{dateValue.toLocaleDateString('ja-JP')}</span>;

    case 'email':
      return <a href={`mailto:${value}`} style={{ color: 'var(--color-primary-600)' }}>{String(value)}</a>;

    case 'url':
      return <a href={value} target="_blank" rel="noopener noreferrer" style={{ color: 'var(--color-primary-600)' }}>{String(value)}</a>;

    case 'text':
    default:
      return <span>{String(value)}</span>;
  }
};

/**
 * DetailPage Component
 *
 * **React Router不要**: このコンポーネントはReact Routerに依存しません
 * **Inertia.js対応**: onNavigateコールバックでルーティング制御
 *
 * A fully dynamic, props-driven detail/show page component designed for both:
 * 1. Controlled mode: Integrated with parent components (via props)
 * 2. Standalone mode: Independent usage with window.location
 *
 * Supports flexible field layouts, sections, tabs, actions, and related data display.
 *
 * @example Controlled Mode (via TemplatePage)
 * ```tsx
 * <DetailPage
 *   title="プロジェクト詳細"
 *   data={project}
 *   sections={[...]}
 *   backButton={{ onClick: handleBack }}
 * />
 * ```
 *
 * @example Standalone Mode (with window.location)
 * ```tsx
 * <DetailPage
 *   title="プロジェクト詳細"
 *   data={project}
 *   sections={[...]}
 *   backButton={{ url: '/data/list' }}
 * />
 * ```
 */
const DetailPage: React.FC<DataDetailPageProps> = ({
  title,
  subtitle,
  data,
  fields = [],
  sections = [],
  tabs = [],
  layout,
  headerConfig,
  actions = [],
  secondaryActions = [],
  backButton,
  loading = false,
  error,
  emptyState,
  breadcrumbs,
  headerActions = [],
  stickyHeader = false,
  className = '',
  onLogout
}) => {
  // View mode state
  const [viewMode, setViewMode] = useState<'pc' | 'tablet' | 'sp'>('pc');

  // State for collapsible sections
  const [expandedSections, setExpandedSections] = useState<Set<string>>(() => {
    const initialExpanded = new Set<string>();
    sections.forEach((section) => {
      if (!section.collapsible || section.defaultCollapsed === false) {
        initialExpanded.add(section.id);
      }
    });
    return initialExpanded;
  });

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

  // State for active tab
  const [activeTab, setActiveTab] = useState<string>(() => {
    const visibleTabs = tabs.filter(tab =>
      !tab.visible || tab.visible(data)
    );
    return visibleTabs.length > 0 ? visibleTabs[0].id : '';
  });

  // State for confirmation modal
  const [confirmAction, setConfirmAction] = useState<{
    show: boolean;
    action?: () => void;
    config?: any;
  }>({ show: false });

  // Toggle section expansion
  const toggleSection = (sectionId: string) => {
    setExpandedSections((prev) => {
      const next = new Set(prev);
      if (next.has(sectionId)) {
        next.delete(sectionId);
      } else {
        next.add(sectionId);
      }
      return next;
    });
  };

  // Handle action click with confirmation
  const handleActionClick = (action: any) => {
    if (action.confirm) {
      setConfirmAction({
        show: true,
        action: () => action.onClick(data),
        config: action.confirm
      });
    } else {
      action.onClick(data);
    }
  };

  // Handle back button navigation (supports both controlled and standalone modes)
  const handleBackButtonClick = () => {
    if (backButton?.onClick) {
      // Controlled mode: use provided callback
      backButton.onClick();
    } else if (backButton?.url) {
      // Standalone mode: navigate to provided URL
      window.location.href = backButton.url;
    } else {
      // Default: browser back
      window.history.back();
    }
  };

  // Handle breadcrumb navigation (supports both controlled and standalone modes)
  const handleBreadcrumbClick = (crumb: { label: string; path?: string }, event: React.MouseEvent) => {
    if (crumb.path) {
      event.preventDefault();
      window.location.href = crumb.path;
    }
  };

  // Visible sections/fields based on data
  const visibleSections = useMemo(() => {
    return sections.filter(section =>
      !section.visible || section.visible(data)
    );
  }, [sections, data]);

  const visibleFields = useMemo(() => {
    return fields.filter(field =>
      !field.hidden && (!field.visible || field.visible(data))
    );
  }, [fields, data]);

  const visibleActions = useMemo(() => {
    return actions.filter(action => {
      const isVisible = typeof action.visible === 'function'
        ? action.visible(data)
        : action.visible !== false;
      return isVisible;
    });
  }, [actions, data]);

  const visibleSecondaryActions = useMemo(() => {
    return secondaryActions.filter(action => {
      const isVisible = typeof action.visible === 'function'
        ? action.visible(data)
        : action.visible !== false;
      return isVisible;
    });
  }, [secondaryActions, data]);

  // Render field
  const renderField = (field: any) => {
    const fieldClassName = typeof field.className === 'function'
      ? field.className(data[field.key], data)
      : field.className || '';

    const widthClass = field.width ? `detail-field--${field.width}` : '';

    return (
      <div
        key={field.key}
        className={`detail-field ${widthClass} ${fieldClassName}`}
      >
        <dt className={`detail-field__label ${field.labelClassName || ''}`}>
          {field.label}
          {field.tooltip && (
            <span className="detail-field__tooltip" title={field.tooltip}>
              <Icon name="info" style={{ width: '14px', height: '14px', marginLeft: '4px' }} />
            </span>
          )}
        </dt>
        <dd className={`detail-field__value ${field.valueClassName || ''}`}>
          <DetailFieldRenderer field={field} data={data} />
        </dd>
      </div>
    );
  };

  // Render section
  const renderSection = (section: DetailSection) => {
    const isExpanded = expandedSections.has(section.id);
    const sectionFields = section.fields.filter(field =>
      !field.hidden && (!field.visible || field.visible(data))
    );

    if (sectionFields.length === 0) return null;

    const layoutColumns = section.columns || layout?.columns || 2;
    const gridLayoutClass = section.layout === 'grid' || layout?.type === 'grid'
      ? `detail-fields--grid detail-fields--cols-${layoutColumns}`
      : '';

    return (
      <div key={section.id} className={`detail-section ${section.className || ''}`}>
        <div
          className="detail-section__header"
          onClick={section.collapsible ? () => toggleSection(section.id) : undefined}
          style={{ cursor: section.collapsible ? 'pointer' : 'default' }}
        >
          <div className="detail-section__title-wrapper">
            {section.icon && (
              <Icon
                name={section.icon as any}
                style={{ width: '20px', height: '20px', marginRight: 'var(--spacing-2)' }}
              />
            )}
            <h3 className="detail-section__title">{section.title}</h3>
          </div>
          {section.collapsible && (
            <Icon
              name={isExpanded ? 'chevron-up' : 'chevron-down'}
              style={{ width: '20px', height: '20px' }}
            />
          )}
        </div>
        {section.description && (
          <p className="detail-section__description">{section.description}</p>
        )}
        {isExpanded && (
          <dl className={`detail-fields ${gridLayoutClass}`}>
            {sectionFields.map(renderField)}
          </dl>
        )}
      </div>
    );
  };

  // Loading state
  if (loading) {
    return (
      <div className={viewMode === 'sp' ? 'force-mobile' : ''}>
        <TemplateNavigation
          viewMode={viewMode}
          onViewModeChange={setViewMode}
        />
        <InfoPageWrapper
          viewMode={viewMode}
          currentPage="data-detail"
          onNavigate={handleNavigate}
          unreadCount={0}
          notifications={[]}
          onMarkNotificationAsRead={() => {}}
          onMarkAllNotificationsAsRead={() => {}}
          onLogout={handleLogout}
        >
          <div className={`dynamic-data-detail-page ${className}`}>
            <div className="page-header">
              <h2 className="page-title">読み込み中...</h2>
            </div>
            <div className="dashboard-card" style={{ textAlign: 'center', padding: 'var(--spacing-12)' }}>
              <Icon
                name="refresh"
                style={{
                  width: '48px',
                  height: '48px',
                  animation: 'spin 1s linear infinite',
                  color: 'var(--color-primary-500)'
                }}
              />
              <p style={{ marginTop: 'var(--spacing-4)', color: 'var(--color-neutral-600)' }}>
                データを読み込んでいます...
              </p>
            </div>
          </div>
        </InfoPageWrapper>
      </div>
    );
  }

  // Error state
  if (error) {
    return (
      <div className={viewMode === 'sp' ? 'force-mobile' : ''}>
        <TemplateNavigation
          viewMode={viewMode}
          onViewModeChange={setViewMode}
        />
        <InfoPageWrapper
          viewMode={viewMode}
          currentPage="data-detail"
          onNavigate={handleNavigate}
          unreadCount={0}
          notifications={[]}
          onMarkNotificationAsRead={() => {}}
          onMarkAllNotificationsAsRead={() => {}}
          onLogout={handleLogout}
        >
          <div className={`dynamic-data-detail-page ${className}`}>
            <div className="page-header">
              <h2 className="page-title">エラー</h2>
            </div>
            <div className="dashboard-card" style={{ textAlign: 'center', padding: 'var(--spacing-12)' }}>
              <Icon
                name="error"
                style={{
                  width: '64px',
                  height: '64px',
                  color: 'var(--color-error-500)',
                  marginBottom: 'var(--spacing-4)'
                }}
              />
              <h3 style={{ fontSize: 'var(--font-size-xl)', marginBottom: 'var(--spacing-2)' }}>
                エラーが発生しました
              </h3>
              <p style={{ color: 'var(--color-neutral-600)', marginBottom: 'var(--spacing-4)' }}>
                {error.message}
              </p>
              {error.retry && (
                <button className="btn btn--primary" onClick={error.retry}>
                  <Icon name="refresh" style={{ width: '16px', height: '16px' }} />
                  再試行
                </button>
              )}
            </div>
          </div>
        </InfoPageWrapper>
      </div>
    );
  }

  // Empty/Not found state
  if (!data || Object.keys(data).length === 0) {
    return (
      <div className={viewMode === 'sp' ? 'force-mobile' : ''}>
        <TemplateNavigation
          viewMode={viewMode}
          onViewModeChange={setViewMode}
        />
        <InfoPageWrapper
          viewMode={viewMode}
          currentPage="data-detail"
          onNavigate={handleNavigate}
          unreadCount={0}
          notifications={[]}
          onMarkNotificationAsRead={() => {}}
          onMarkAllNotificationsAsRead={() => {}}
          onLogout={handleLogout}
        >
          <div className={`dynamic-data-detail-page ${className}`}>
            <div className="page-header">
              <h2 className="page-title">{emptyState?.title || 'データが見つかりません'}</h2>
            </div>
            <div className="dashboard-card" style={{ textAlign: 'center', padding: 'var(--spacing-12)' }}>
              {emptyState?.icon && (
                <Icon
                  name={emptyState.icon as any}
                  style={{
                    width: '64px',
                    height: '64px',
                    color: 'var(--color-neutral-400)',
                    marginBottom: 'var(--spacing-4)'
                  }}
                />
              )}
              <h3 style={{ fontSize: 'var(--font-size-xl)', marginBottom: 'var(--spacing-2)' }}>
                {emptyState?.title || 'データが見つかりません'}
              </h3>
              {emptyState?.description && (
                <p style={{ color: 'var(--color-neutral-600)', marginBottom: 'var(--spacing-4)' }}>
                  {emptyState.description}
                </p>
              )}
              {emptyState?.action && (
                <button className="btn btn--primary" onClick={emptyState.action.onClick}>
                  {emptyState.action.label}
                </button>
              )}
            </div>
          </div>
        </InfoPageWrapper>
      </div>
    );
  }

  // Get display title
  const displayTitle = headerConfig?.renderTitle
    ? headerConfig.renderTitle(data)
    : headerConfig?.titleField
    ? data[headerConfig.titleField]
    : title;

  const displaySubtitle = typeof headerConfig?.subtitle === 'function'
    ? headerConfig.subtitle(data)
    : headerConfig?.subtitle || subtitle;

  return (
    <div className={viewMode === 'sp' ? 'force-mobile' : ''}>
      <TemplateNavigation
        viewMode={viewMode}
        onViewModeChange={setViewMode}
      />
      <InfoPageWrapper
        viewMode={viewMode}
        currentPage="data-detail"
        onNavigate={handleNavigate}
        unreadCount={0}
        notifications={[]}
        onMarkNotificationAsRead={() => {}}
        onMarkAllNotificationsAsRead={() => {}}
      >
        <div className={`dynamic-data-detail-page ${className}`}>
          {/* Breadcrumbs */}
      {breadcrumbs && breadcrumbs.length > 0 && (
        <nav className="breadcrumbs">
          {breadcrumbs.map((crumb, index) => (
            <React.Fragment key={index}>
              {crumb.path ? (
                <a
                  href={crumb.path}
                  className="breadcrumb-link"
                  onClick={(e) => handleBreadcrumbClick(crumb, e)}
                >
                  {crumb.label}
                </a>
              ) : (
                <span className="breadcrumb-current">{crumb.label}</span>
              )}
              {index < breadcrumbs.length - 1 && (
                <Icon name="chevron-right" style={{ width: '12px', height: '12px', margin: '0 var(--spacing-2)' }} />
              )}
            </React.Fragment>
          ))}
        </nav>
      )}

      {/* Page Header */}
      <div className={`page-header ${stickyHeader ? 'page-header--sticky' : ''}`}>
        <div className="page-header__content">
          {backButton && (
            <button
              className="btn btn--text detail-back-button"
              onClick={handleBackButtonClick}
            >
              <Icon name={backButton.icon as any || 'arrow-left'} style={{ width: '16px', height: '16px' }} />
              {backButton.label || '戻る'}
            </button>
          )}

          <div className="page-header__title-section">
            {headerConfig?.showAvatar && (
              <div className="page-header__avatar">
                {headerConfig.renderAvatar
                  ? headerConfig.renderAvatar(data)
                  : headerConfig.avatarField && data[headerConfig.avatarField] && (
                    <img src={data[headerConfig.avatarField]} alt="" />
                  )
                }
              </div>
            )}

            <div>
              <h2 className="page-title">{displayTitle}</h2>
              {displaySubtitle && <p className="page-subtitle">{displaySubtitle}</p>}

              {headerConfig?.showStatus && headerConfig.statusField && (
                <div style={{ marginTop: 'var(--spacing-2)' }}>
                  {(() => {
                    const statusValue = data[headerConfig.statusField];
                    const statusConfig = headerConfig.statusBadgeConfig?.[statusValue];
                    const badgeVariant = statusConfig?.variant || 'default';
                    return (
                      <span className={`status-badge status-badge--${badgeVariant}`}>
                        {statusConfig?.label || statusValue}
                      </span>
                    );
                  })()}
                </div>
              )}
            </div>
          </div>
        </div>

        <div className="page-header__actions">
          {headerActions.map((action, index) => (
            <button
              key={index}
              className={`btn btn--${action.variant || 'secondary'}`}
              onClick={action.onClick}
            >
              {action.icon && <Icon name={action.icon as any} style={{ width: '16px', height: '16px' }} />}
              {action.label}
            </button>
          ))}

          {visibleSecondaryActions.map((action) => {
            const isDisabled = typeof action.disabled === 'function'
              ? action.disabled(data)
              : action.disabled;

            return (
              <button
                key={action.id}
                className={`btn btn--${action.variant || 'secondary'}`}
                onClick={() => handleActionClick(action)}
                disabled={isDisabled || action.loading}
                title={action.tooltip}
              >
                {action.icon && <Icon name={action.icon as any} style={{ width: '16px', height: '16px' }} />}
                {action.label}
              </button>
            );
          })}

          {visibleActions.map((action) => {
            const isDisabled = typeof action.disabled === 'function'
              ? action.disabled(data)
              : action.disabled;

            return (
              <button
                key={action.id}
                className={`btn btn--${action.variant || 'primary'}`}
                onClick={() => handleActionClick(action)}
                disabled={isDisabled || action.loading}
                title={action.tooltip}
              >
                {action.icon && <Icon name={action.icon as any} style={{ width: '16px', height: '16px' }} />}
                {action.label}
              </button>
            );
          })}
        </div>
      </div>

      {/* Main Content */}
      <div className="detail-content">
        {/* Tabs Layout */}
        {tabs.length > 0 ? (
          <div className="detail-tabs">
            <div className="detail-tabs__header">
              {tabs.filter(tab => !tab.visible || tab.visible(data)).map((tab) => (
                <button
                  key={tab.id}
                  className={`detail-tabs__tab ${activeTab === tab.id ? 'detail-tabs__tab--active' : ''}`}
                  onClick={() => setActiveTab(tab.id)}
                  disabled={tab.disabled}
                >
                  {tab.icon && <Icon name={tab.icon as any} style={{ width: '16px', height: '16px' }} />}
                  {tab.label}
                  {tab.badge && (
                    <span className="detail-tabs__badge">
                      {typeof tab.badge === 'function' ? tab.badge(data) : tab.badge}
                    </span>
                  )}
                </button>
              ))}
            </div>

            <div className="detail-tabs__content">
              {tabs.find(tab => tab.id === activeTab)?.renderContent
                ? tabs.find(tab => tab.id === activeTab)!.renderContent!(data)
                : tabs.find(tab => tab.id === activeTab)?.sections?.map(renderSection)
              }
            </div>
          </div>
        ) : (
          /* Sections/Fields Layout */
          <div className="dashboard-card">
            {visibleSections.length > 0 ? (
              visibleSections.map(renderSection)
            ) : visibleFields.length > 0 ? (
              <dl className={`detail-fields ${layout?.type === 'grid' ? `detail-fields--grid detail-fields--cols-${layout.columns || 2}` : ''}`}>
                {visibleFields.map(renderField)}
              </dl>
            ) : (
              <div style={{ textAlign: 'center', padding: 'var(--spacing-8)', color: 'var(--color-neutral-500)' }}>
                表示するフィールドがありません
              </div>
            )}
          </div>
        )}
      </div>

      {/* Confirmation Modal */}
      <ConfirmModal
        show={confirmAction.show}
        title={confirmAction.config?.title || '確認'}
        message={confirmAction.config?.message || 'この操作を実行してもよろしいですか？'}
        confirmText={confirmAction.config?.confirmText || '実行'}
        cancelText={confirmAction.config?.cancelText || 'キャンセル'}
        danger={confirmAction.config?.variant === 'danger'}
        onConfirm={() => {
          confirmAction.action?.();
          setConfirmAction({ show: false });
        }}
        onClose={() => setConfirmAction({ show: false })}
      />
        </div>
      </InfoPageWrapper>
    </div>
  );
};

export default DetailPage;
