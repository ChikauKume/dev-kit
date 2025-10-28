import React, { useState, useMemo } from 'react';
import Icon from '../../../components/icons/Icon';
import InputField from '../../../components/forms/InputField';
import Checkbox from '../../../components/forms/Checkbox';
import PaginationPanel from '../../../components/tables/PaginationPanel';
import TemplateNavigation from '../../../components/navigation/TemplateNavigation';
import InfoPageWrapper from '../../../components/layout/InfoPageWrapper';
import { useViewMode } from '../../../hooks/useViewMode';
import type { DataListPageProps } from '../../../types/tables/TableProps';
import type { TableColumnConfig, ColumnDataType } from '../../../types/tables/TableColumnConfig';
import { useDynamicTable } from '../../../hooks/tables/dynamicTable';
import { useTableSearch } from '../../../hooks/tables/tableSearch';
import '../../../styles/pages/templates/ListPage.css';

/**
 * Format cell value based on column data type
 * Handles all 15 column data types dynamically
 */
const formatCellValue = (
  value: any,
  column: TableColumnConfig,
  row: Record<string, any>,
  index: number
): React.ReactNode => {
  // Custom render function takes precedence
  if (column.render) {
    return column.render(value, row, index);
  }

  // Handle null/undefined
  if (value === null || value === undefined) {
    return <span style={{ color: 'var(--color-neutral-400)' }}>-</span>;
  }

  const dataType = column.dataType || 'text';

  switch (dataType) {
    case 'text':
      return String(value);

    case 'number':
      const decimals = column.decimals ?? 0;
      const thousands = column.thousandsSeparator || ',';
      const numValue = Number(value);
      if (isNaN(numValue)) return value;
      const formatted = numValue.toFixed(decimals);
      const parts = formatted.split('.');
      parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, thousands);
      return parts.join('.');

    case 'currency':
      const currencySymbol = column.currencySymbol || '¥';
      const currencyDecimals = column.decimals ?? 0;
      const currencyValue = Number(value);
      if (isNaN(currencyValue)) return value;
      const currencyFormatted = currencyValue.toFixed(currencyDecimals);
      const currencyParts = currencyFormatted.split('.');
      currencyParts[0] = currencyParts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ',');
      return `${currencySymbol}${currencyParts.join('.')}`;

    case 'percentage':
      const pctValue = Number(value);
      if (isNaN(pctValue)) return value;
      const pctDecimals = column.decimals ?? 1;
      return `${pctValue.toFixed(pctDecimals)}%`;

    case 'date':
      const dateFormat = column.dateFormat || 'YYYY-MM-DD';
      const dateValue = value instanceof Date ? value : new Date(value);
      if (isNaN(dateValue.getTime())) return value;
      // Simple date formatting
      const year = dateValue.getFullYear();
      const month = String(dateValue.getMonth() + 1).padStart(2, '0');
      const day = String(dateValue.getDate()).padStart(2, '0');
      return `${year}-${month}-${day}`;

    case 'datetime':
      const dtValue = value instanceof Date ? value : new Date(value);
      if (isNaN(dtValue.getTime())) return value;
      const dtYear = dtValue.getFullYear();
      const dtMonth = String(dtValue.getMonth() + 1).padStart(2, '0');
      const dtDay = String(dtValue.getDate()).padStart(2, '0');
      const dtHour = String(dtValue.getHours()).padStart(2, '0');
      const dtMin = String(dtValue.getMinutes()).padStart(2, '0');
      return `${dtYear}-${dtMonth}-${dtDay} ${dtHour}:${dtMin}`;

    case 'time':
      const timeValue = value instanceof Date ? value : new Date(value);
      if (isNaN(timeValue.getTime())) return value;
      const timeFormat = column.timeFormat || '24h';
      let hours = timeValue.getHours();
      const minutes = String(timeValue.getMinutes()).padStart(2, '0');
      if (timeFormat === '12h') {
        const ampm = hours >= 12 ? 'PM' : 'AM';
        hours = hours % 12 || 12;
        return `${hours}:${minutes} ${ampm}`;
      }
      return `${String(hours).padStart(2, '0')}:${minutes}`;

    case 'boolean':
      return (
        <span className={`status-badge ${value ? 'status-badge--success' : 'status-badge--default'}`}>
          {value ? '有効' : '無効'}
        </span>
      );

    case 'badge':
      if (!column.badgeConfig || !column.badgeConfig[value]) {
        return <span className="status-badge status-badge--default">{value}</span>;
      }
      const badgeInfo = column.badgeConfig[value];
      const badgeVariantMap: Record<string, string> = {
        success: 'status-badge--success',
        warning: 'status-badge--warning',
        error: 'status-badge--danger',
        danger: 'status-badge--danger',
        info: 'status-badge--info',
        default: 'status-badge--default',
        primary: 'status-badge--primary',
        secondary: 'status-badge--default'
      };
      const badgeClass = badgeVariantMap[badgeInfo.variant] || 'status-badge--default';
      return <span className={`status-badge ${badgeClass}`}>{badgeInfo.label}</span>;

    case 'link':
      return (
        <a
          href={value}
          style={{ color: 'var(--color-primary-600)', fontWeight: 'var(--font-weight-medium)' }}
          onClick={(e) => e.stopPropagation()}
        >
          {value}
        </a>
      );

    case 'email':
      return (
        <a
          href={`mailto:${value}`}
          style={{ color: 'var(--color-primary-600)' }}
          onClick={(e) => e.stopPropagation()}
        >
          {value}
        </a>
      );

    case 'phone':
      return (
        <a
          href={`tel:${value}`}
          style={{ color: 'var(--color-primary-600)' }}
          onClick={(e) => e.stopPropagation()}
        >
          {value}
        </a>
      );

    case 'image':
      return (
        <img
          src={value}
          alt=""
          style={{
            width: '40px',
            height: '40px',
            objectFit: 'cover',
            borderRadius: 0
          }}
        />
      );

    case 'avatar':
      return (
        <img
          src={value}
          alt=""
          style={{
            width: '32px',
            height: '32px',
            objectFit: 'cover',
            borderRadius: 0
          }}
        />
      );

    case 'custom':
      // Custom type should always have a render function
      return value;

    default:
      return String(value);
  }
};

/**
 * ListPage Component
 *
 * A fully dynamic, props-driven data list/table component designed for Laravel + Inertia.js integration.
 * Supports dynamic columns, search/filter, sorting, pagination, row selection, and bulk actions.
 *
 * @example
 * ```tsx
 * <ListPage
 *   title="プロジェクト一覧"
 *   columns={[
 *     { key: 'id', label: 'ID', dataType: 'number', sortable: true },
 *     { key: 'name', label: 'プロジェクト名', dataType: 'text', sortable: true },
 *     { key: 'status', label: 'ステータス', dataType: 'badge', badgeConfig: {...} }
 *   ]}
 *   data={projects}
 *   selectable={true}
 *   rowActions={[...]}
 *   bulkActions={[...]}
 * />
 * ```
 */
const ListPage: React.FC<DataListPageProps> = ({
  title,
  subtitle,
  columns,
  data,
  searchConfig,
  pagination,
  rowActions = [],
  bulkActions = [],
  createButton,
  toolbarActions = [],
  sort,
  searchValues: externalSearchValues,
  onSortChange,
  onPageChange,
  onPerPageChange,
  onSearchChange,
  onRefresh,
  selectable = false,
  selectedIds: externalSelectedIds,
  onSelectionChange,
  rowConfig,
  emptyState,
  loading = false,
  error,
  exportConfig,
  stickyHeader = false,
  density = 'normal',
  showRowNumbers = false,
  className = '',
  breadcrumbs,
  headerActions = [],
  flashMessage,
  onLogout
}) => {
  // View mode state for PC/SP toggle
  const [viewMode, setViewMode] = useViewMode();

  // Navigation handler
  const handleNavigate = (page: string) => {
    // Detect current route prefix (/pages or /templates)
    const currentPath = typeof window !== 'undefined' ? window.location.pathname : '';
    const isTemplateRoute = currentPath.startsWith('/templates');
    const routePrefix = isTemplateRoute ? '/templates' : '/pages';

    const routeMap: Record<string, string> = {
      'dashboard': `${routePrefix}/dashboard`,
      'data-list': `${routePrefix}/data/list`,
      'statistics': `${routePrefix}/statistics`,
      'notifications': `${routePrefix}/notifications`,
      'settings': `${routePrefix}/settings`
    };

    const route = routeMap[page] || `${routePrefix}/${page}`;
    if (typeof window !== 'undefined') {
      window.location.href = route;
    }
  };

  const handleLogout = () => {
    if (onLogout) {
      onLogout();
      return;
    }
    handleNavigate('login');
  };

  // Search filter panel state
  const [isSearchFilterOpen, setIsSearchFilterOpen] = useState(
    searchConfig?.defaultCollapsed === false
  );

  // Initialize hooks
  const tableHook = useDynamicTable({
    data,
    defaultSortColumn: sort?.column,
    defaultSortDirection: sort?.direction || 'asc',
    selectable,
    initialSelectedIds: externalSelectedIds || []
  });

  const searchHook = useTableSearch({
    initialValues: externalSearchValues || {},
    onSearch: onSearchChange,
    serverSide: !!onSearchChange
  });

  // Use external selection if provided, otherwise use internal
  const selectedIds = externalSelectedIds !== undefined ? externalSelectedIds : tableHook.selectedIds;
  const handleSelectAll = onSelectionChange
    ? () => {
        const newSelectedIds = selectedIds.length === data.length ? [] : data.map(row => row[rowConfig?.idKey || 'id']);
        onSelectionChange(newSelectedIds, data.filter(row => newSelectedIds.includes(row[rowConfig?.idKey || 'id'])));
      }
    : tableHook.handleSelectAll;

  const handleSelectRow = (id: string | number) => {
    if (onSelectionChange) {
      const newSelectedIds = selectedIds.includes(id)
        ? selectedIds.filter(selectedId => selectedId !== id)
        : [...selectedIds, id];
      onSelectionChange(newSelectedIds, data.filter(row => newSelectedIds.includes(row[rowConfig?.idKey || 'id'])));
    } else {
      tableHook.handleSelectRow(id);
    }
  };

  const isAllSelected = selectedIds.length === data.length && data.length > 0;
  const isSomeSelected = selectedIds.length > 0 && selectedIds.length < data.length;

  // Get selected rows for bulk actions
  const selectedRows = useMemo(() => {
    return data.filter(row => selectedIds.includes(row[rowConfig?.idKey || 'id']));
  }, [data, selectedIds, rowConfig?.idKey]);

  // Visible columns (exclude hidden)
  const visibleColumns = useMemo(() => {
    return columns.filter(col => !col.hidden);
  }, [columns]);

  // Handle sort
  const handleSort = (columnKey: string) => {
    const column = columns.find(col => col.key === columnKey);
    if (!column?.sortable) return;

    if (onSortChange) {
      // Server-side sorting
      const newDirection = sort?.column === columnKey && sort?.direction === 'asc' ? 'desc' : 'asc';
      onSortChange(columnKey, newDirection);
    } else {
      // Client-side sorting
      tableHook.handleSort(columnKey);
    }
  };

  const currentSortColumn = onSortChange ? sort?.column : tableHook.sortColumn;
  const currentSortDirection = onSortChange ? sort?.direction : tableHook.sortDirection;

  // Display data (sorted or original)
  const displayData = onSortChange ? data : tableHook.displayData;

  // Handle search
  const handleSearch = () => {
    if (searchHook.handleSearch) {
      searchHook.handleSearch();
    }
  };

  const handleClearSearch = () => {
    searchHook.handleClear();
  };

  // Render search fields
  const renderSearchFields = () => {
    if (!searchConfig || (!searchConfig.fields && !searchConfig.groups)) return null;

    const fields = searchConfig.fields || [];

    // Sort fields by order property if specified
    const sortedFields = [...fields].sort((a, b) => {
      const orderA = a.order ?? 999;
      const orderB = b.order ?? 999;
      return orderA - orderB;
    });

    // Determine layout mode and columns
    const layout = searchConfig.layout || 'horizontal';
    const columns = searchConfig.columns || 4;
    const gap = searchConfig.gap || searchConfig.columnGap || 'var(--spacing-4)';
    const rowGap = searchConfig.rowGap || gap;
    const columnGap = searchConfig.columnGap || gap;

    // Check if any field uses grid positioning
    const usesGridPositioning = sortedFields.some(
      field => field.gridColumn || field.gridRow || field.gridColumnSpan
    );

    // Container styles based on layout mode
    const containerStyle: React.CSSProperties = usesGridPositioning
      ? {
          display: 'grid',
          gridTemplateColumns: `repeat(${columns}, 1fr)`,
          gap: rowGap === columnGap ? gap : undefined,
          rowGap: rowGap !== gap ? rowGap : undefined,
          columnGap: columnGap !== gap ? columnGap : undefined,
          marginBottom: 'var(--spacing-4)'
        }
      : {
          display: 'flex',
          gap: gap,
          marginBottom: 'var(--spacing-4)',
          flexWrap: 'wrap'
        };

    return (
      <div style={containerStyle}>
        {sortedFields.map((field) => {
          // Calculate field width
          const getFieldStyle = (): React.CSSProperties => {
            if (usesGridPositioning) {
              return {
                gridColumn: field.gridColumn
                  ? field.gridColumnSpan
                    ? `${field.gridColumn} / span ${field.gridColumnSpan}`
                    : field.gridColumn
                  : undefined,
                gridRow: field.gridRow,
                order: field.order
              };
            }

            // Flex layout
            const widthMap: Record<string, string> = {
              full: '1 1 100%',
              half: '1 1 calc((100% - var(--spacing-4)) / 2)',
              third: '1 1 calc((100% - var(--spacing-4) * 2) / 3)',
              quarter: '1 1 calc((100% - var(--spacing-4) * 3) / 4)',
              fifth: '1 1 calc((100% - var(--spacing-4) * 4) / 5)'
            };

            return {
              flex: widthMap[field.width || 'quarter'] || '1 1 200px',
              order: field.order
            };
          };

          if (field.type === 'text') {
            return (
              <div key={field.name} style={getFieldStyle()}>
                <InputField
                  type="text"
                  label={field.label}
                  placeholder={field.placeholder}
                  value={searchHook.searchValues[field.name] || ''}
                  onChange={(e) => searchHook.setValue(field.name, e.target.value)}
                  disabled={field.disabled}
                  borderColor={searchConfig.borderColor || '#d1d5db'}
                />
              </div>
            );
          }

          if (field.type === 'select') {
            return (
              <div key={field.name} style={getFieldStyle()}>
                <label
                  style={{
                    display: 'block',
                    fontSize: 'var(--font-size-sm)',
                    fontWeight: 'var(--font-weight-medium)',
                    marginBottom: 'var(--spacing-2)'
                  }}
                >
                  {field.label}
                </label>
                <select
                  value={searchHook.searchValues[field.name] || ''}
                  onChange={(e) => searchHook.setValue(field.name, e.target.value)}
                  disabled={field.disabled}
                  style={{
                    width: '100%',
                    padding: 'var(--spacing-3)',
                    border: `1px solid ${searchConfig.borderColor || '#d1d5db'}`,
                    borderRadius: 0,
                    fontSize: 'var(--font-size-sm)'
                  }}
                >
                  <option value="">{field.placeholder || 'すべて'}</option>
                  {field.options?.map((option) => (
                    <option key={option.value} value={option.value}>
                      {option.label}
                    </option>
                  ))}
                </select>
              </div>
            );
          }

          // Add more field types as needed
          return null;
        })}
      </div>
    );
  };

  // Render empty state
  if (!loading && data.length === 0 && !searchHook.hasActiveFilters) {
    return (
      <div className={viewMode === 'sp' ? 'force-mobile' : ''}>
        <TemplateNavigation
          viewMode={viewMode}
          onViewModeChange={setViewMode}
        />
        <InfoPageWrapper
          viewMode={viewMode}
          currentPage="data-list"
          onNavigate={handleNavigate}
          unreadCount={0}
          notifications={[]}
        >
          <div className={`dynamic-data-list-page ${className}`}>
            {/* Page Header */}
            <div className="page-header">
              <div>
                <h2 className="page-title">{title}</h2>
                {subtitle && <p className="page-subtitle">{subtitle}</p>}
              </div>
              <div style={{ display: 'flex', gap: 'var(--spacing-3)', alignItems: 'center' }}>
                {createButton && (
                  <button
                    className={`btn btn--${createButton.variant || 'primary'}`}
                    onClick={createButton.onClick}
                  >
                    {createButton.icon && <Icon name={createButton.icon as any} style={{ width: '16px', height: '16px' }} />}
                    {createButton.label}
                  </button>
                )}
              </div>
            </div>

            {/* Empty State */}
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
                {emptyState?.title || 'データがありません'}
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

  return (
    <div className={viewMode === 'sp' ? 'force-mobile' : ''}>
      <TemplateNavigation
        viewMode={viewMode}
        onViewModeChange={setViewMode}
      />
      <InfoPageWrapper
        viewMode={viewMode}
        currentPage="data-list"
        onNavigate={handleNavigate}
        unreadCount={0}
        notifications={[]}
        onLogout={handleLogout}
      >
        <div className={`dynamic-data-list-page ${className}`}>
          {/* Page Header */}
          <div className="page-header">
            <div>
              <h2 className="page-title">{title}</h2>
              {subtitle && <p className="page-subtitle">{subtitle}</p>}
            </div>
            <div style={{ display: 'flex', gap: 'var(--spacing-3)', alignItems: 'center' }}>
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
              {createButton && (
                <button
                  className={`btn btn--${createButton.variant || 'primary'}`}
                  onClick={createButton.onClick}
                >
                  {createButton.icon && <Icon name={createButton.icon as any} style={{ width: '16px', height: '16px' }} />}
                  {createButton.label}
                </button>
              )}
            </div>
          </div>

          {/* Flash Message */}
          {flashMessage && (
            <div style={{ marginBottom: 'var(--spacing-6)' }}>
              {flashMessage}
            </div>
          )}

          {/* Search/Filter Panel */}
          {searchConfig && (searchConfig.fields || searchConfig.groups) && (
            <div className="dashboard-card" style={{ marginBottom: 'var(--spacing-6)' }}>
              <div
                onClick={() => setIsSearchFilterOpen(!isSearchFilterOpen)}
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  cursor: 'pointer',
                  padding: 'var(--spacing-3)',
                  margin: 'calc(var(--spacing-4) * -1)',
                  marginBottom: isSearchFilterOpen ? 'var(--spacing-4)' : 'calc(var(--spacing-4) * -1)',
                  borderBottom: isSearchFilterOpen ? '1px solid var(--color-neutral-200)' : 'none'
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--spacing-2)' }}>
                  <Icon name="search" style={{ width: '18px', height: '18px' }} />
                  <span style={{ fontSize: 'var(--font-size-base)', fontWeight: 'var(--font-weight-semibold)' }}>
                    {searchConfig.title || '検索'}
                  </span>
                  {searchHook.hasActiveFilters && (
                    <span
                      className="status-badge status-badge--info"
                      style={{ marginLeft: 'var(--spacing-2)' }}
                    >
                      {Object.keys(searchHook.searchValues).filter(k => searchHook.searchValues[k]).length}件フィルター中
                    </span>
                  )}
                </div>
                <Icon
                  name={isSearchFilterOpen ? 'chevron-up' : 'chevron-down'}
                  style={{ width: '20px', height: '20px' }}
                />
              </div>

              {isSearchFilterOpen && (
                <div style={{ paddingTop: 'var(--spacing-4)' }}>
                  {renderSearchFields()}
                  <div style={{ display: 'flex', justifyContent: 'flex-end', gap: 'var(--spacing-3)' }}>
                    {(searchConfig.showClearButton !== false) && (
                      <button className="btn btn--secondary" onClick={handleClearSearch}>
                        <Icon name="close" style={{ width: '16px', height: '16px' }} />
                        {searchConfig.clearButtonText || 'クリア'}
                      </button>
                    )}
                    {(searchConfig.showSearchButton !== false) && (
                      <button className="btn btn--primary" onClick={handleSearch}>
                        <Icon name="search" style={{ width: '16px', height: '16px' }} />
                        {searchConfig.searchButtonText || '検索'}
                      </button>
                    )}
                  </div>
                </div>
              )}
            </div>
          )}

          {/* Error State */}
          {error && (
            <div className="dashboard-card" style={{ marginBottom: 'var(--spacing-6)' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--spacing-3)', color: 'var(--color-error-600)' }}>
                <Icon name="error" style={{ width: '20px', height: '20px' }} />
                <span>{error.message}</span>
                {error.retry && (
                  <button className="btn btn--secondary btn--sm" onClick={error.retry}>
                    再試行
                  </button>
                )}
              </div>
            </div>
          )}

          {/* Data Table */}
          <div className="dashboard-card">
            {/* Toolbar */}
            <div style={{ marginBottom: 'var(--spacing-4)', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <div style={{ fontSize: 'var(--font-size-sm)', color: 'var(--color-neutral-600)' }}>
                {selectedIds.length > 0 && `${selectedIds.length}件選択中`}
              </div>
              <div style={{ display: 'flex', gap: 'var(--spacing-2)' }}>
                {/* Toolbar Actions */}
                {toolbarActions.map((action, index) => (
                  <button
                    key={index}
                    className={`btn btn--${action.variant || 'text'} btn--sm`}
                    onClick={action.onClick}
                    disabled={action.disabled}
                  >
                    {action.icon && <Icon name={action.icon as any} style={{ width: '16px', height: '16px' }} />}
                    {action.label}
                  </button>
                ))}
                {/* Bulk Actions */}
                {bulkActions.map((action) => {
                  const minMet = !action.minSelections || selectedIds.length >= action.minSelections;
                  const maxMet = !action.maxSelections || selectedIds.length <= action.maxSelections;
                  const isDisabled = action.disabled || selectedIds.length === 0 || !minMet || !maxMet;

                  return (
                    <button
                      key={action.id}
                      className={`btn btn--${action.variant || 'text'} btn--sm`}
                      disabled={isDisabled}
                      onClick={() => action.onClick(selectedIds, selectedRows)}
                    >
                      {action.icon && <Icon name={action.icon as any} style={{ width: '16px', height: '16px' }} />}
                      {action.label}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Table */}
            <div style={{ overflowX: 'auto' }}>
              <table className={`data-table data-table--${density}`}>
                <thead>
                  <tr>
                    {selectable && (
                      <th style={{ width: '50px', textAlign: 'center' }}>
                        <Checkbox
                          checked={isAllSelected}
                          onChange={handleSelectAll}
                          aria-label="すべて選択"
                        />
                      </th>
                    )}
                    {showRowNumbers && (
                      <th style={{ width: '60px', textAlign: 'center' }}>No.</th>
                    )}
                    {visibleColumns.map((column) => {
                      const isSortable = column.sortable !== false && column.sortable !== undefined;
                      const isSorted = currentSortColumn === column.key;
                      const align = column.align || 'left';

                      return (
                        <th
                          key={column.key}
                          style={{
                            textAlign: align,
                            width: column.width,
                            minWidth: column.minWidth,
                            maxWidth: column.maxWidth,
                            cursor: isSortable ? 'pointer' : 'default',
                            userSelect: 'none'
                          }}
                          onClick={() => isSortable && handleSort(column.key)}
                          className={column.headerClassName}
                          title={column.tooltip}
                        >
                          <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--spacing-2)', justifyContent: align }}>
                            <span>{column.label}</span>
                            {isSortable && (
                              <Icon
                                name={isSorted && currentSortDirection === 'desc' ? 'arrow-down' : 'arrow-up'}
                                style={{
                                  width: '14px',
                                  height: '14px',
                                  opacity: isSorted ? 1 : 0.3
                                }}
                              />
                            )}
                          </div>
                        </th>
                      );
                    })}
                    {rowActions.length > 0 && (
                      <th style={{ width: '120px', textAlign: 'center' }}>操作</th>
                    )}
                  </tr>
                </thead>
                <tbody>
                  {loading ? (
                    <tr>
                      <td colSpan={visibleColumns.length + (selectable ? 1 : 0) + (showRowNumbers ? 1 : 0) + (rowActions.length > 0 ? 1 : 0)} style={{ textAlign: 'center', padding: 'var(--spacing-8)' }}>
                        <Icon name="refresh" style={{ width: '24px', height: '24px', animation: 'spin 1s linear infinite' }} />
                        <p style={{ marginTop: 'var(--spacing-2)' }}>読み込み中...</p>
                      </td>
                    </tr>
                  ) : displayData.length === 0 ? (
                    <tr>
                      <td colSpan={visibleColumns.length + (selectable ? 1 : 0) + (showRowNumbers ? 1 : 0) + (rowActions.length > 0 ? 1 : 0)} style={{ textAlign: 'center', padding: 'var(--spacing-8)' }}>
                        <Icon name="search" style={{ width: '48px', height: '48px', color: 'var(--color-neutral-400)' }} />
                        <p style={{ marginTop: 'var(--spacing-2)', color: 'var(--color-neutral-600)' }}>検索結果がありません</p>
                      </td>
                    </tr>
                  ) : (
                    displayData.map((row, rowIndex) => {
                      const rowId = row[rowConfig?.idKey || 'id'];
                      const isSelected = selectedIds.includes(rowId);
                      const rowClassName = typeof rowConfig?.className === 'function'
                        ? rowConfig.className(row, rowIndex)
                        : rowConfig?.className || '';
                      const isRowDisabled = typeof rowConfig?.disabled === 'function'
                        ? rowConfig.disabled(row)
                        : rowConfig?.disabled || false;

                      return (
                        <tr
                          key={rowId}
                          className={rowClassName}
                          onClick={() => rowConfig?.onClick?.(row, rowIndex)}
                          style={{
                            cursor: rowConfig?.clickable || rowConfig?.onClick ? 'pointer' : 'default'
                          }}
                        >
                          {selectable && (
                            <td>
                              <Checkbox
                                checked={isSelected}
                                onChange={() => handleSelectRow(rowId)}
                                disabled={isRowDisabled}
                                aria-label={`行${rowIndex + 1}を選択`}
                              />
                            </td>
                          )}
                          {showRowNumbers && (
                            <td style={{ textAlign: 'center', fontWeight: 'var(--font-weight-medium)' }}>
                              {rowIndex + 1}
                            </td>
                          )}
                          {visibleColumns.map((column) => {
                            const cellValue = row[column.key];
                            const align = column.align || 'left';
                            const cellClassName = typeof column.cellClassName === 'function'
                              ? column.cellClassName(cellValue, row)
                              : column.cellClassName || '';

                            return (
                              <td
                                key={column.key}
                                style={{ textAlign: align }}
                                className={cellClassName}
                              >
                                {formatCellValue(cellValue, column, row, rowIndex)}
                              </td>
                            );
                          })}
                          {rowActions.length > 0 && (
                            <td>
                              <div style={{ display: 'flex', gap: 'var(--spacing-2)', justifyContent: 'center' }}>
                                {rowActions.map((action) => {
                                  const isVisible = typeof action.visible === 'function'
                                    ? action.visible(row)
                                    : action.visible !== false;
                                  const isDisabled = typeof action.disabled === 'function'
                                    ? action.disabled(row)
                                    : action.disabled || false;

                                  if (!isVisible) return null;

                                  return (
                                    <button
                                      key={action.id}
                                      className={`btn btn--${action.variant || 'text'} btn--sm`}
                                      title={action.tooltip || action.label}
                                      disabled={isDisabled || action.loading}
                                      onClick={(e) => {
                                        e.stopPropagation();
                                        if (action.confirm) {
                                          if (window.confirm(`${action.confirm.title}\n\n${action.confirm.message}`)) {
                                            action.onClick(row, rowIndex);
                                          }
                                        } else {
                                          action.onClick(row, rowIndex);
                                        }
                                      }}
                                    >
                                      {action.icon && <Icon name={action.icon as any} style={{ width: '16px', height: '16px' }} />}
                                      {action.label && <span>{action.label}</span>}
                                    </button>
                                  );
                                })}
                              </div>
                            </td>
                          )}
                        </tr>
                      );
                    })
                  )}
                </tbody>
              </table>
            </div>

            {/* Pagination */}
            {pagination && (
              <div style={{ marginTop: 'var(--spacing-4)' }}>
                <PaginationPanel
                  pagination={{
                    current_page: pagination.currentPage,
                    last_page: pagination.lastPage,
                    total: pagination.total,
                    per_page: pagination.perPage,
                    from: pagination.from,
                    to: pagination.to,
                    prev_page_url: pagination.currentPage > 1 ? '#' : null,
                    next_page_url: pagination.currentPage < pagination.lastPage ? '#' : null
                  }}
                  onPageChange={(page) => onPageChange?.(page)}
                  onPerPageChange={(perPage) => onPerPageChange?.(perPage)}
                  config={{
                    perPageOptions: pagination.perPageOptions || [10, 20, 50, 100],
                    showInfo: pagination.showPageInfo !== false
                  }}
                />
              </div>
            )}
          </div>
        </div>
      </InfoPageWrapper>
    </div>
  );
};

export default ListPage;
