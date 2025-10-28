import { useState, useCallback, useMemo } from 'react';

/**
 * Options for useDynamicTable hook
 */
export interface UseDynamicTableOptions<T = any> {
  /** Array of table data */
  data: T[];
  /** Initial column to sort by */
  defaultSortColumn?: string;
  /** Initial sort direction */
  defaultSortDirection?: 'asc' | 'desc';
  /** Whether rows can be selected */
  selectable?: boolean;
  /** Initial selected row IDs */
  initialSelectedIds?: (string | number)[];
}

/**
 * Return type for useDynamicTable hook
 */
export interface UseDynamicTableReturn<T = any> {
  /** Data sorted according to current sort settings */
  displayData: T[];
  /** Currently sorted column name */
  sortColumn: string | null;
  /** Current sort direction */
  sortDirection: 'asc' | 'desc';
  /** Array of selected row IDs */
  selectedIds: (string | number)[];
  /** Whether all rows are selected */
  allSelected: boolean;
  /** Whether some (but not all) rows are selected */
  someSelected: boolean;
  /** Handle column sort click */
  handleSort: (column: string) => void;
  /** Select or deselect all rows */
  handleSelectAll: () => void;
  /** Select or deselect a single row */
  handleSelectRow: (id: string | number) => void;
  /** Clear all selections */
  clearSelection: () => void;
  /** Check if a specific row is selected */
  isSelected: (id: string | number) => boolean;
}

/**
 * Custom hook for managing dynamic tables
 *
 * Handles table sorting, row selection, and data management.
 * Integrates with table components to provide comprehensive table functionality.
 *
 * Features:
 * - Column sorting (click to sort, click again to reverse)
 * - Row selection (individual and bulk)
 * - Automatic data sorting
 * - Selection state management
 *
 * @param options - Configuration options
 * @returns Table state and handlers
 *
 * @example
 * ```tsx
 * interface User {
 *   id: number;
 *   name: string;
 *   email: string;
 *   age: number;
 * }
 *
 * const users: User[] = [
 *   { id: 1, name: 'Alice', email: 'alice@example.com', age: 30 },
 *   { id: 2, name: 'Bob', email: 'bob@example.com', age: 25 }
 * ];
 *
 * const table = useDynamicTable<User>({
 *   data: users,
 *   defaultSortColumn: 'name',
 *   defaultSortDirection: 'asc',
 *   selectable: true
 * });
 *
 * return (
 *   <table>
 *     <thead>
 *       <tr>
 *         {table.selectable && (
 *           <th>
 *             <input
 *               type="checkbox"
 *               checked={table.allSelected}
 *               onChange={table.handleSelectAll}
 *             />
 *           </th>
 *         )}
 *         <th onClick={() => table.handleSort('name')}>Name</th>
 *         <th onClick={() => table.handleSort('email')}>Email</th>
 *       </tr>
 *     </thead>
 *     <tbody>
 *       {table.displayData.map(user => (
 *         <tr key={user.id}>
 *           <td>
 *             <input
 *               type="checkbox"
 *               checked={table.isSelected(user.id)}
 *               onChange={() => table.handleSelectRow(user.id)}
 *             />
 *           </td>
 *           <td>{user.name}</td>
 *           <td>{user.email}</td>
 *         </tr>
 *       ))}
 *     </tbody>
 *   </table>
 * );
 * ```
 */
export function useDynamicTable<T extends Record<string, any>>({
  data,
  defaultSortColumn,
  defaultSortDirection = 'asc',
  selectable = false,
  initialSelectedIds = []
}: UseDynamicTableOptions<T>): UseDynamicTableReturn<T> {
  const [sortColumn, setSortColumn] = useState<string | null>(defaultSortColumn || null);
  const [sortDirection, setSortDirection] = useState<'asc' | 'desc'>(defaultSortDirection);
  const [selectedIds, setSelectedIds] = useState<(string | number)[]>(initialSelectedIds);

  /**
   * Handle column sort
   * Toggles direction if same column, sets to asc if new column
   *
   * @param column - Column name to sort by
   */
  const handleSort = useCallback((column: string) => {
    setSortColumn(prevColumn => {
      if (prevColumn === column) {
        // Toggle direction if same column
        setSortDirection(prev => prev === 'asc' ? 'desc' : 'asc');
        return column;
      } else {
        // Set to asc if new column
        setSortDirection('asc');
        return column;
      }
    });
  }, []);

  /**
   * Sort data based on current sort settings
   * Memoized for performance
   */
  const displayData = useMemo(() => {
    if (!sortColumn) return data;

    return [...data].sort((a, b) => {
      const aVal = a[sortColumn];
      const bVal = b[sortColumn];

      // Handle null/undefined values
      if (aVal == null && bVal == null) return 0;
      if (aVal == null) return 1;
      if (bVal == null) return -1;

      // Compare values based on type
      let comparison = 0;
      if (typeof aVal === 'string' && typeof bVal === 'string') {
        // Case-insensitive string comparison
        comparison = aVal.toLowerCase().localeCompare(bVal.toLowerCase());
      } else if (typeof aVal === 'number' && typeof bVal === 'number') {
        comparison = aVal - bVal;
      } else if (aVal instanceof Date && bVal instanceof Date) {
        comparison = aVal.getTime() - bVal.getTime();
      } else {
        // Fallback to string comparison
        comparison = String(aVal).localeCompare(String(bVal));
      }

      return sortDirection === 'asc' ? comparison : -comparison;
    });
  }, [data, sortColumn, sortDirection]);

  /**
   * Select or deselect all rows
   * Toggles between all selected and none selected
   */
  const handleSelectAll = useCallback(() => {
    if (selectedIds.length === data.length && data.length > 0) {
      // Deselect all
      setSelectedIds([]);
    } else {
      // Select all (assumes each row has an 'id' property)
      setSelectedIds(data.map(row => row.id));
    }
  }, [data, selectedIds.length]);

  /**
   * Select or deselect a single row
   *
   * @param id - ID of the row to toggle
   */
  const handleSelectRow = useCallback((id: string | number) => {
    setSelectedIds(prev => {
      if (prev.includes(id)) {
        // Deselect
        return prev.filter(selectedId => selectedId !== id);
      } else {
        // Select
        return [...prev, id];
      }
    });
  }, []);

  /**
   * Clear all selections
   */
  const clearSelection = useCallback(() => {
    setSelectedIds([]);
  }, []);

  /**
   * Check if a specific row is selected
   *
   * @param id - ID of the row to check
   * @returns true if selected, false otherwise
   */
  const isSelected = useCallback((id: string | number): boolean => {
    return selectedIds.includes(id);
  }, [selectedIds]);

  // Calculate selection states
  const allSelected = selectable && selectedIds.length === data.length && data.length > 0;
  const someSelected = selectable && selectedIds.length > 0 && selectedIds.length < data.length;

  return {
    displayData,
    sortColumn,
    sortDirection,
    selectedIds,
    allSelected,
    someSelected,
    handleSort,
    handleSelectAll,
    handleSelectRow,
    clearSelection,
    isSelected
  };
}
