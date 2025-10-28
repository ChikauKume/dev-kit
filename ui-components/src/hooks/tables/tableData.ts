import { useState, useCallback, useMemo } from 'react';

export interface UseTableDataOptions<T> {
  initialData?: T[];
  sortable?: boolean;
  filterable?: boolean;
}

export interface UseTableDataReturn<T> {
  data: T[];
  filteredData: T[];
  sortColumn: string | null;
  sortDirection: 'asc' | 'desc';
  searchQuery: string;
  setData: (data: T[]) => void;
  sortBy: (column: string) => void;
  setSearchQuery: (query: string) => void;
  filterData: (filterFn: (item: T) => boolean) => T[];
}

export function useTableData<T extends Record<string, any>>({
  initialData = [],
  sortable = true,
  filterable = true
}: UseTableDataOptions<T> = {}): UseTableDataReturn<T> {
  const [data, setData] = useState<T[]>(initialData);
  const [sortColumn, setSortColumn] = useState<string | null>(null);
  const [sortDirection, setSortDirection] = useState<'asc' | 'desc'>('asc');
  const [searchQuery, setSearchQuery] = useState('');

  const sortBy = useCallback((column: string) => {
    if (!sortable) return;

    setSortColumn(prevColumn => {
      if (prevColumn === column) {
        setSortDirection(prev => prev === 'asc' ? 'desc' : 'asc');
        return column;
      } else {
        setSortDirection('asc');
        return column;
      }
    });
  }, [sortable]);

  const sortedData = useMemo(() => {
    if (!sortColumn) return data;

    return [...data].sort((a, b) => {
      const aVal = a[sortColumn];
      const bVal = b[sortColumn];

      if (aVal === bVal) return 0;

      const comparison = aVal < bVal ? -1 : 1;
      return sortDirection === 'asc' ? comparison : -comparison;
    });
  }, [data, sortColumn, sortDirection]);

  const filteredData = useMemo(() => {
    if (!filterable || !searchQuery) return sortedData;

    const query = searchQuery.toLowerCase();
    return sortedData.filter(item =>
      Object.values(item).some(value =>
        String(value).toLowerCase().includes(query)
      )
    );
  }, [sortedData, searchQuery, filterable]);

  const filterData = useCallback((filterFn: (item: T) => boolean): T[] => {
    return data.filter(filterFn);
  }, [data]);

  return {
    data,
    filteredData,
    sortColumn,
    sortDirection,
    searchQuery,
    setData,
    sortBy,
    setSearchQuery,
    filterData
  };
}
