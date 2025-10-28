// Note: This hook requires @inertiajs/react to be installed
// Uncomment the import below when using with Inertia.js
// import { usePage } from '@inertiajs/react';

interface User {
  permissions?: string[];
  roles?: string[];
  data_scope?: string;
  role_display_name?: string;
}

interface Auth {
  user?: User;
}

interface UsePermissionsReturn {
  hasPermission: (permission: string) => boolean;
  hasRole: (role: string) => boolean;
  hasAnyRole: (roles: string[]) => boolean;
  canApproveAmount: (amount: number) => boolean;
  canAccessData: (scope: string) => boolean;
  isManager: () => boolean;
  isAdmin: () => boolean;
  isSystemAdministrator: () => boolean;
  getDataScope: () => string;
  user?: User;
  permissions: string[];
  roles: string[];
  roleDisplayName: string;
}

/**
 * Spatie権限管理のカスタムHook
 * フロントエンドでの権限チェックとロール判定を提供
 *
 * Note: This hook requires @inertiajs/react to be installed and configured
 */
export function usePermissions(): UsePermissionsReturn {
  // Uncomment when using with Inertia.js
  // const { auth } = usePage().props as { auth: Auth };

  // Placeholder for non-Inertia environments
  const auth: Auth = { user: undefined };

  /**
   * 指定された権限を持っているかチェック
   */
  const hasPermission = (permission: string): boolean => {
    return auth.user?.permissions?.includes(permission) || false;
  };

  /**
   * 指定されたロールを持っているかチェック
   */
  const hasRole = (role: string): boolean => {
    return auth.user?.roles?.includes(role) || false;
  };

  /**
   * 指定されたロールのいずれかを持っているかチェック
   */
  const hasAnyRole = (roles: string[]): boolean => {
    return roles.some(role => hasRole(role));
  };

  /**
   * 承認権限チェック（金額ベース）
   */
  const canApproveAmount = (amount: number): boolean => {
    const permissions = auth.user?.permissions || [];

    if (amount < 100000 && permissions.includes('approve.under-100k')) return true;
    if (amount < 1000000 && permissions.includes('approve.under-1m')) return true;
    if (amount < 10000000 && permissions.includes('approve.under-10m')) return true;
    if (amount < 50000000 && permissions.includes('approve.under-50m')) return true;
    if (permissions.includes('approve.unlimited')) return true;

    return false;
  };

  /**
   * データスコープ取得
   */
  const getDataScope = (): string => {
    return auth.user?.data_scope || 'own';
  };

  /**
   * データスコープに基づく権限チェック
   */
  const canAccessData = (scope: string): boolean => {
    const userScope = getDataScope();
    const scopeHierarchy = ['own', 'team', 'department', 'company'];
    const userScopeIndex = scopeHierarchy.indexOf(userScope);
    const requiredScopeIndex = scopeHierarchy.indexOf(scope);

    return userScopeIndex >= requiredScopeIndex;
  };

  /**
   * ロール階層チェック（管理者系ロールかどうか）
   */
  const isManager = (): boolean => {
    return hasAnyRole(['manager', 'department-head', 'executive']);
  };

  const isAdmin = (): boolean => {
    return hasRole('system-admin');
  };

  /**
   * システム管理者かどうか（後方互換性）
   */
  const isSystemAdministrator = (): boolean => {
    return hasRole('system-admin');
  };

  return {
    // 基本権限チェック
    hasPermission,
    hasRole,
    hasAnyRole,

    // 業務固有権限チェック
    canApproveAmount,
    canAccessData,

    // ロール判定
    isManager,
    isAdmin,
    isSystemAdministrator,

    // データ取得
    getDataScope,
    user: auth.user,
    permissions: auth.user?.permissions || [],
    roles: auth.user?.roles || [],
    roleDisplayName: auth.user?.role_display_name || '未定義',
  };
}
