import { useState, useCallback, useMemo } from 'react';

/**
 * Options for useTableSearch hook
 */
export interface UseTableSearchOptions {
  /** Initial search/filter values */
  initialValues?: Record<string, any>;
  /** Callback when search is executed */
  onSearch?: (values: Record<string, any>) => void;
  /** Whether search is handled server-side (affects clear behavior) */
  serverSide?: boolean;
}

/**
 * Return type for useTableSearch hook
 */
export interface UseTableSearchReturn {
  /** Current search/filter values */
  searchValues: Record<string, any>;
  /** Set a single search value */
  setValue: (fieldName: string, value: any) => void;
  /** Set multiple search values */
  setValues: (values: Record<string, any>) => void;
  /** Execute search with current values */
  handleSearch: () => void;
  /** Clear all search values */
  handleClear: () => void;
  /** Whether any filters are currently active */
  hasActiveFilters: boolean;
}

/**
 * Custom hook for managing table search and filters
 *
 * Manages search/filter state for tables and provides methods to
 * update and clear filters. Supports both client-side and server-side
 * filtering patterns.
 *
 * Features:
 * - Search value state management
 * - Individual and bulk value updates
 * - Active filter detection
 * - Server-side search support
 * - Clear all filters
 *
 * @param options - Configuration options
 * @returns Search state and handlers
 *
 * @example
 * ```tsx
 * // Client-side filtering
 * const search = useTableSearch({
 *   initialValues: { status: '', name: '' }
 * });
 *
 * // Filter data locally
 * const filteredData = data.filter(row => {
 *   if (search.searchValues.status && row.status !== search.searchValues.status) {
 *     return false;
 *   }
 *   if (search.searchValues.name && !row.name.includes(search.searchValues.name)) {
 *     return false;
 *   }
 *   return true;
 * });
 *
 * return (
 *   <div>
 *     <input
 *       value={search.searchValues.name}
 *       onChange={(e) => search.setValue('name', e.target.value)}
 *     />
 *     <select
 *       value={search.searchValues.status}
 *       onChange={(e) => search.setValue('status', e.target.value)}
 *     >
 *       <option value="">All</option>
 *       <option value="active">Active</option>
 *       <option value="inactive">Inactive</option>
 *     </select>
 *     <button onClick={search.handleClear}>Clear</button>
 *   </div>
 * );
 * ```
 *
 * @example
 * ```tsx
 * // Server-side filtering
 * const search = useTableSearch({
 *   onSearch: (values) => {
 *     // Send to server
 *     fetchData({ filters: values });
 *   },
 *   serverSide: true
 * });
 *
 * return (
 *   <div>
 *     <input
 *       value={search.searchValues.query}
 *       onChange={(e) => search.setValue('query', e.target.value)}
 *     />
 *     <button onClick={search.handleSearch}>Search</button>
 *     <button onClick={search.handleClear}>Clear</button>
 *     {search.hasActiveFilters && <span>Filters active</span>}
 *   </div>
 * );
 * ```
 */
export function useTableSearch({
  initialValues = {},
  onSearch,
  serverSide = false
}: UseTableSearchOptions = {}): UseTableSearchReturn {
  const [searchValues, setSearchValues] = useState<Record<string, any>>(initialValues);

  /**
   * Set a single search value
   *
   * @param fieldName - Name of the search field
   * @param value - Value to set
   */
  const setValue = useCallback((fieldName: string, value: any) => {
    setSearchValues(prev => ({ ...prev, [fieldName]: value }));
  }, []);

  /**
   * Set multiple search values at once
   *
   * @param values - Object with field names and values
   */
  const setValues = useCallback((values: Record<string, any>) => {
    setSearchValues(prev => ({ ...prev, ...values }));
  }, []);

  /**
   * Execute search with current values
   * Calls onSearch callback if provided
   */
  const handleSearch = useCallback(() => {
    onSearch?.(searchValues);
  }, [searchValues, onSearch]);

  /**
   * Clear all search values
   * If server-side, also triggers search with empty values
   */
  const handleClear = useCallback(() => {
    setSearchValues({});
    if (serverSide) {
      onSearch?.({});
    }
  }, [serverSide, onSearch]);

  /**
   * Check if any filters are currently active
   * A filter is considered active if its value is not null, undefined, or empty string
   */
  const hasActiveFilters = useMemo(() => {
    return Object.values(searchValues).some(value =>
      value !== null && value !== undefined && value !== ''
    );
  }, [searchValues]);

  return {
    searchValues,
    setValue,
    setValues,
    handleSearch,
    handleClear,
    hasActiveFilters
  };
}
