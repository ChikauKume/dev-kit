import React from 'react';

export interface FilterOption {
    value: string;
    label: string;
}

export interface FilterConfig {
    key: string;
    label: string;
    options: FilterOption[];
}

export interface SearchConfig {
    enabled: boolean;
    placeholder?: string;
}

export interface SearchFilterConfig {
    search?: SearchConfig;
    filters?: FilterConfig[];
}

export interface SearchFilterPanelProps {
    config: SearchFilterConfig;
    onSearchChange?: ((value: string) => void) | null;
    onFilterChange?: ((key: string, value: string) => void) | null;
    searchValue?: string;
    filterValues?: Record<string, string>;
}

/**
 * 統一検索・フィルターパネルコンポーネント
 *
 * @param {SearchFilterConfig} config - プリセット設定からの検索・フィルター設定
 * @param {Function} onSearchChange - 検索値変更時のコールバック
 * @param {Function} onFilterChange - フィルター値変更時のコールバック
 * @param {string} searchValue - 現在の検索値
 * @param {Object} filterValues - 現在のフィルター値
 */
export default function SearchFilterPanel({
    config,
    onSearchChange = null,
    onFilterChange = null,
    searchValue = '',
    filterValues = {}
}: SearchFilterPanelProps): JSX.Element | null {
    // 検索機能とフィルター機能のどちらかが無効な場合の制御
    const hasSearch = config?.search?.enabled && onSearchChange;
    const hasFilters = config?.filters?.length > 0 && onFilterChange;

    // どちらも無効な場合は何も表示しない
    if (!hasSearch && !hasFilters) {
        return null;
    }

    return (
        <div className="bg-white rounded-lg shadow-sm p-4 mb-6">
            <div className="flex flex-wrap gap-4 items-end">
                {/* 検索ボックス（条件付き表示） */}
                {hasSearch && (
                    <div className="flex-1 min-w-64">
                        <label htmlFor="search-input" className="block text-sm font-medium text-gray-700 mb-1">
                            検索
                        </label>
                        <input
                            id="search-input"
                            type="text"
                            value={searchValue}
                            onChange={(e) => onSearchChange(e.target.value)}
                            placeholder={config.search?.placeholder || '検索...'}
                            className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        />
                    </div>
                )}

                {/* フィルター項目（条件付き表示） */}
                {hasFilters && config.filters!.map((filter, index) => (
                    <div key={filter.key} className="min-w-32">
                        <label
                            htmlFor={`filter-${filter.key}`}
                            className="block text-sm font-medium text-gray-700 mb-1"
                        >
                            {filter.label}
                        </label>
                        <select
                            id={`filter-${filter.key}`}
                            value={filterValues[filter.key] || ''}
                            onChange={(e) => onFilterChange!(filter.key, e.target.value)}
                            className="w-full border border-gray-300 rounded-md px-3 py-2 pr-8 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent appearance-none bg-white"
                            style={{
                                backgroundImage: `url("data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 20 20'%3E%3Cpath stroke='%236B7280' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='M6 8l4 4 4-4'/%3E%3C/svg%3E")`,
                                backgroundPosition: 'right 0.5rem center',
                                backgroundRepeat: 'no-repeat',
                                backgroundSize: '1.5em 1.5em',
                            }}
                        >
                            {filter.options.map(option => (
                                <option key={option.value} value={option.value}>
                                    {option.label}
                                </option>
                            ))}
                        </select>
                    </div>
                ))}
            </div>
        </div>
    );
}
