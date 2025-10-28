import React from 'react';
import Icon from '../icons/Icon';
import Button from '../buttons/Button';
import type { FilterConfig } from '../../types/statistics/StatisticsPageConfig';

interface FilterPanelProps {
  /** Filter configurations */
  filters: FilterConfig[];

  /** Filter change handler */
  onFilterChange: (filterId: string, value: any) => void;

  /** Apply filters handler */
  onApplyFilters?: () => void;

  /** Reset filters handler */
  onResetFilters?: () => void;

  /** Panel collapsed state */
  collapsed?: boolean;

  /** Toggle collapsed state */
  onToggleCollapsed?: () => void;

  /** Additional CSS classes */
  className?: string;
}

const FilterPanel: React.FC<FilterPanelProps> = ({
  filters,
  onFilterChange,
  onApplyFilters,
  onResetFilters,
  collapsed = false,
  onToggleCollapsed,
  className = ''
}) => {
  const handleInputChange = (filterId: string, value: any) => {
    onFilterChange(filterId, value);
  };

  const renderFilter = (filter: FilterConfig) => {
    switch (filter.type) {
      case 'date-range':
        return (
          <div className="filter-panel__field" key={filter.id}>
            <label className="filter-panel__label">
              {filter.label}
              {filter.required && <span className="filter-panel__required">*</span>}
            </label>
            <div className="filter-panel__date-range">
              <input
                type="date"
                className="filter-panel__input filter-panel__input--date"
                value={filter.value?.startDate || ''}
                onChange={(e) => handleInputChange(filter.id, { ...filter.value, startDate: e.target.value })}
                placeholder="開始日"
              />
              <span className="filter-panel__date-separator">〜</span>
              <input
                type="date"
                className="filter-panel__input filter-panel__input--date"
                value={filter.value?.endDate || ''}
                onChange={(e) => handleInputChange(filter.id, { ...filter.value, endDate: e.target.value })}
                placeholder="終了日"
              />
            </div>
          </div>
        );

      case 'select':
        return (
          <div className="filter-panel__field" key={filter.id}>
            <label className="filter-panel__label">
              {filter.label}
              {filter.required && <span className="filter-panel__required">*</span>}
            </label>
            <select
              className="filter-panel__select"
              value={filter.value || ''}
              onChange={(e) => handleInputChange(filter.id, e.target.value)}
            >
              <option value="">{filter.placeholder || '選択してください'}</option>
              {filter.options?.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
          </div>
        );

      case 'multi-select':
        return (
          <div className="filter-panel__field" key={filter.id}>
            <label className="filter-panel__label">
              {filter.label}
              {filter.required && <span className="filter-panel__required">*</span>}
            </label>
            <div className="filter-panel__multi-select">
              {filter.options?.map((option) => (
                <label key={option.value} className="filter-panel__checkbox-label">
                  <input
                    type="checkbox"
                    className="filter-panel__checkbox"
                    checked={Array.isArray(filter.value) && filter.value.includes(option.value)}
                    onChange={(e) => {
                      const currentValues = Array.isArray(filter.value) ? filter.value : [];
                      const newValues = e.target.checked
                        ? [...currentValues, option.value]
                        : currentValues.filter((v) => v !== option.value);
                      handleInputChange(filter.id, newValues);
                    }}
                  />
                  <span>{option.label}</span>
                </label>
              ))}
            </div>
          </div>
        );

      case 'checkbox':
        return (
          <div className="filter-panel__field" key={filter.id}>
            <label className="filter-panel__checkbox-label filter-panel__checkbox-label--single">
              <input
                type="checkbox"
                className="filter-panel__checkbox"
                checked={Boolean(filter.value)}
                onChange={(e) => handleInputChange(filter.id, e.target.checked)}
              />
              <span>{filter.label}</span>
            </label>
          </div>
        );

      case 'text':
        return (
          <div className="filter-panel__field" key={filter.id}>
            <label className="filter-panel__label">
              {filter.label}
              {filter.required && <span className="filter-panel__required">*</span>}
            </label>
            <input
              type="text"
              className="filter-panel__input"
              value={filter.value || ''}
              onChange={(e) => handleInputChange(filter.id, e.target.value)}
              placeholder={filter.placeholder}
            />
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className={`filter-panel ${collapsed ? 'filter-panel--collapsed' : ''} ${className}`}>
      <div className="filter-panel__header">
        <h3 className="filter-panel__title">
          <Icon name="filter" size="sm" />
          <span>フィルター</span>
        </h3>
        {onToggleCollapsed && (
          <button
            className="filter-panel__toggle"
            onClick={onToggleCollapsed}
            aria-label={collapsed ? 'フィルターを表示' : 'フィルターを非表示'}
          >
            <Icon name={collapsed ? 'chevron-down' : 'chevron-up'} size="sm" />
          </button>
        )}
      </div>

      {!collapsed && (
        <>
          <div className="filter-panel__body">
            {filters.map(renderFilter)}
          </div>

          <div className="filter-panel__actions">
            {onResetFilters && (
              <Button
                variant="text"
                size="sm"
                onClick={onResetFilters}
                icon="refresh"
              >
                リセット
              </Button>
            )}
            {onApplyFilters && (
              <Button
                variant="primary"
                size="sm"
                onClick={onApplyFilters}
                icon="check"
              >
                適用
              </Button>
            )}
          </div>
        </>
      )}
    </div>
  );
};

export default React.memo(FilterPanel);
