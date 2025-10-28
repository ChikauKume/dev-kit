import { useState, useCallback } from 'react';

interface Permission {
  id: number | string;
  name?: string;
}

interface PermissionCategory {
  category: string;
  display_name: string;
  permissions: Permission[];
}

type CategoryStatus = 'none' | 'all' | 'partial';

interface SelectionStats {
  totalPermissions: number;
  selectedCount: number;
  unselectedCount: number;
  selectionRate: number;
}

interface CategoryStats {
  category: string;
  displayName: string;
  total: number;
  selected: number;
  status: CategoryStatus;
  selectionRate: number;
}

interface UsePermissionSelectionReturn {
  selectedPermissions: (number | string)[];
  setSelectedPermissions: React.Dispatch<React.SetStateAction<(number | string)[]>>;
  handlePermissionChange: (permissionId: number | string, checked: boolean) => void;
  updatePermissions: (newPermissions: (number | string)[]) => void;
  handleCategoryToggle: (categoryPermissions: Permission[]) => void;
  getCategoryStatus: (categoryPermissions: Permission[]) => CategoryStatus;
  resetPermissions: () => void;
  hasPermission: (permissionId: number | string) => boolean;
  hasPermissions: (permissionIds: (number | string)[]) => boolean;
  hasAnyPermission: (permissionIds: (number | string)[]) => boolean;
  getSelectionStats: (permissions: PermissionCategory[]) => SelectionStats;
  getCategoryStats: (permissions: PermissionCategory[]) => CategoryStats[];
}

export const usePermissionSelection = (
  initialPermissions: (number | string)[] = []
): UsePermissionSelectionReturn => {
  const [selectedPermissions, setSelectedPermissions] = useState<(number | string)[]>(initialPermissions);

  // 個別権限の選択/解除
  const handlePermissionChange = useCallback((permissionId: number | string, checked: boolean) => {
    setSelectedPermissions(prev => {
      if (checked) {
        return [...prev, permissionId];
      } else {
        return prev.filter(id => id !== permissionId);
      }
    });
  }, []);

  // 権限配列の直接更新
  const updatePermissions = useCallback((newPermissions: (number | string)[]) => {
    setSelectedPermissions(newPermissions);
  }, []);

  // カテゴリー全選択/全解除
  const handleCategoryToggle = useCallback((categoryPermissions: Permission[]) => {
    const categoryIds = categoryPermissions.map(p => p.id);

    setSelectedPermissions(prev => {
      const selectedInCategory = categoryIds.filter(id => prev.includes(id));
      const allSelected = selectedInCategory.length === categoryIds.length;

      if (allSelected) {
        // 全て外す
        return prev.filter(id => !categoryIds.includes(id));
      } else {
        // 全て選択
        return [...new Set([...prev, ...categoryIds])];
      }
    });
  }, []);

  // カテゴリーの選択状態を計算
  const getCategoryStatus = useCallback((categoryPermissions: Permission[]): CategoryStatus => {
    const categoryIds = categoryPermissions.map(p => p.id);
    const selectedInCategory = categoryIds.filter(id => selectedPermissions.includes(id));

    if (selectedInCategory.length === 0) {
      return 'none';
    } else if (selectedInCategory.length === categoryIds.length) {
      return 'all';
    } else {
      return 'partial';
    }
  }, [selectedPermissions]);

  // 権限リセット
  const resetPermissions = useCallback(() => {
    setSelectedPermissions([]);
  }, []);

  // 権限を持っているかチェック
  const hasPermission = useCallback((permissionId: number | string): boolean => {
    return selectedPermissions.includes(permissionId);
  }, [selectedPermissions]);

  // 複数権限を持っているかチェック
  const hasPermissions = useCallback((permissionIds: (number | string)[]): boolean => {
    return permissionIds.every(id => selectedPermissions.includes(id));
  }, [selectedPermissions]);

  // いずれかの権限を持っているかチェック
  const hasAnyPermission = useCallback((permissionIds: (number | string)[]): boolean => {
    return permissionIds.some(id => selectedPermissions.includes(id));
  }, [selectedPermissions]);

  // 選択状況の統計
  const getSelectionStats = useCallback((permissions: PermissionCategory[]): SelectionStats => {
    const totalPermissions = permissions.reduce((total, category) => total + category.permissions.length, 0);
    const selectedCount = selectedPermissions.length;

    return {
      totalPermissions,
      selectedCount,
      unselectedCount: totalPermissions - selectedCount,
      selectionRate: totalPermissions > 0 ? (selectedCount / totalPermissions) * 100 : 0
    };
  }, [selectedPermissions]);

  // カテゴリー別の選択状況
  const getCategoryStats = useCallback((permissions: PermissionCategory[]): CategoryStats[] => {
    return permissions.map(category => {
      const categoryIds = category.permissions.map(p => p.id);
      const selectedInCategory = categoryIds.filter(id => selectedPermissions.includes(id));

      return {
        category: category.category,
        displayName: category.display_name,
        total: categoryIds.length,
        selected: selectedInCategory.length,
        status: getCategoryStatus(category.permissions),
        selectionRate: categoryIds.length > 0 ? (selectedInCategory.length / categoryIds.length) * 100 : 0
      };
    });
  }, [selectedPermissions, getCategoryStatus]);

  return {
    selectedPermissions,
    setSelectedPermissions,
    handlePermissionChange,
    updatePermissions,
    handleCategoryToggle,
    getCategoryStatus,
    resetPermissions,
    hasPermission,
    hasPermissions,
    hasAnyPermission,
    getSelectionStats,
    getCategoryStats
  };
};
