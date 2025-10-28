import { useState, useCallback, useMemo } from 'react';

export interface FilterConfig {
  [key: string]: any;
}

export interface UseDataFiltersReturn<T> {
  filters: FilterConfig;
  filteredData: T[];
  setFilter: (key: string, value: any) => void;
  clearFilter: (key: string) => void;
  clearAllFilters: () => void;
  hasActiveFilters: boolean;
}

export function useDataFilters<T extends Record<string, any>>(
  data: T[]
): UseDataFiltersReturn<T> {
  const [filters, setFilters] = useState<FilterConfig>({});

  const setFilter = useCallback((key: string, value: any) => {
    setFilters(prev => ({ ...prev, [key]: value }));
  }, []);

  const clearFilter = useCallback((key: string) => {
    setFilters(prev => {
      const newFilters = { ...prev };
      delete newFilters[key];
      return newFilters;
    });
  }, []);

  const clearAllFilters = useCallback(() => {
    setFilters({});
  }, []);

  const filteredData = useMemo(() => {
    if (Object.keys(filters).length === 0) return data;

    return data.filter(item => {
      return Object.entries(filters).every(([key, value]) => {
        if (value === '' || value === null || value === undefined) return true;

        const itemValue = item[key];

        if (typeof value === 'string' && typeof itemValue === 'string') {
          return itemValue.toLowerCase().includes(value.toLowerCase());
        }

        return itemValue === value;
      });
    });
  }, [data, filters]);

  const hasActiveFilters = Object.keys(filters).length > 0;

  return {
    filters,
    filteredData,
    setFilter,
    clearFilter,
    clearAllFilters,
    hasActiveFilters
  };
}
