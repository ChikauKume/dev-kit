/**
 * テーブルコンポーネントのプリセット設定
 * 各ページの要件に応じた設定を定義
 */

interface ScrollbarConfig {
  width?: string;
  height?: string;
  trackColor?: string;
  thumbColor?: string;
  thumbHoverColor?: string;
  cornerColor?: string;
}

interface BorderConfig {
  header: string;
  cell: string;
  stickyCell: string;
}

interface SpacingConfig {
  cellGap: string;
  rowGap: string;
}

interface SearchConfig {
  enabled: boolean;
  type?: 'server' | 'client';
  placeholder?: string;
  searchFields?: string[];
  debounce?: number;
}

interface FilterOption {
  value: string;
  label: string;
}

interface FilterConfig {
  key: string;
  label: string;
  options: FilterOption[];
}

interface PaginationConfig {
  enabled: boolean;
  type?: 'server' | 'client';
  perPageOptions?: number[];
  defaultPerPage?: number;
  showInfo?: boolean;
}

interface TablePresetConfig {
  padding: string;
  headerPadding: string;
  borders: BorderConfig;
  spacing: SpacingConfig;
  stickyFirstColumn: boolean;
  rowHeight: string;
  headerBackground: string;
  hoverEffect: string;
  scrollHeight?: string;
  columnWidths: Record<string, string>;
  scrollbarConfig: ScrollbarConfig;
  search: SearchConfig;
  filters?: FilterConfig[];
  pagination: PaginationConfig;
}

export const TABLE_PRESETS: Record<string, TablePresetConfig> = {
  // 権限マトリックス用プリセット
  matrix: {
    padding: 'px-4 py-3',
    headerPadding: 'px-4 py-3',
    borders: {
      header: 'border-b border-gray-200',
      cell: '',
      stickyCell: 'border-r border-gray-200'
    },
    spacing: {
      cellGap: '',
      rowGap: 'divide-y divide-gray-200'
    },
    stickyFirstColumn: true,
    rowHeight: 'auto',
    headerBackground: 'bg-white',
    hoverEffect: 'hover:bg-gray-50',
    columnWidths: {
      default: '150px',  // デフォルト列幅
      resource: '200px', // リソース列
      view: '150px',     // 閲覧列
      create: '150px',   // 作成列
      edit: '150px',     // 編集列
      delete: '150px',   // 削除列
      manage: '150px',   // 管理列
      export: '150px',   // エクスポート列
      actions: '80px'    // 操作列
    },
    scrollbarConfig: {
      width: '17px',
      height: '17px',
      trackColor: '#f1f1f1',
      thumbColor: '#c1c1c1',
      thumbHoverColor: '#a8a8a8',
      cornerColor: '#f1f1f1'
    },
    // 検索機能設定（無効）
    search: {
      enabled: false
    },
    // ページング機能設定（無効）
    pagination: {
      enabled: false
    }
  },

  // 権限管理ページ用プリセット（matrixプリセットと統一）
  management: {
    padding: 'px-4 py-3',        // セル密度をmatrixと統一
    headerPadding: 'px-4 py-3',   // ヘッダー密度をmatrixと統一
    borders: {
      header: 'border-b border-gray-200',
      cell: '',
      stickyCell: 'border-r border-gray-200'
    },
    spacing: {
      cellGap: '',
      rowGap: 'divide-y divide-gray-200'
    },
    stickyFirstColumn: true,      // 固定左列をmatrixと統一
    rowHeight: 'auto',
    headerBackground: 'bg-white',
    hoverEffect: 'hover:bg-gray-50',
    columnWidths: {
      default: '150px',         // 列幅戦略をmatrixと統一
      display_name: '150px',    // 権限名列
      name: '120px',           // システム名列
      roles: '400px',          // 割り当てロール列（十分な幅を確保）
      actions: '80px'          // 操作列
    },
    scrollbarConfig: {
      width: '17px',
      height: '17px',
      trackColor: '#f1f1f1',
      thumbColor: '#c1c1c1',
      thumbHoverColor: '#a8a8a8',
      cornerColor: '#f1f1f1'
    },
    // 検索機能設定（有効）
    search: {
      enabled: true,
      type: 'server',
      placeholder: '権限名、表示名で検索...',
      searchFields: ['name', 'display_name', 'description'],
      debounce: 300
    },
    // フィルター設定（無効）
    filters: [],
    // ページング機能設定（無効 - 権限数は少ないため不要）
    pagination: {
      enabled: false
    }
  },

  // ユーザー管理ページ用プリセット
  users: {
    padding: 'px-6 py-4',
    headerPadding: 'px-6 py-3',
    borders: {
      header: 'border-b border-gray-200',
      cell: '',
      stickyCell: 'border-r border-gray-200'
    },
    spacing: {
      cellGap: '',
      rowGap: 'divide-y divide-gray-200'
    },
    stickyFirstColumn: false,
    rowHeight: 'auto',
    headerBackground: 'bg-white',
    hoverEffect: 'hover:bg-gray-50',
    scrollHeight: '400px', // デフォルト値（動的高さ使用時は上書きされる）
    columnWidths: {
      default: '200px',
      name: '250px',
      email: '300px',
      role: '200px',
      status: '120px',
      actions: '80px'
    },
    scrollbarConfig: {
      width: '17px',
      height: '17px',
      trackColor: '#f1f1f1',
      thumbColor: '#c1c1c1',
      thumbHoverColor: '#a8a8a8',
      cornerColor: '#f1f1f1'
    },
    // 検索機能設定（有効）
    search: {
      enabled: true,
      type: 'server',
      placeholder: 'ユーザー名、メールアドレスで検索...',
      searchFields: ['name', 'email'],
      debounce: 300
    },
    // フィルター設定
    filters: [
      {
        key: 'role',
        label: 'ロール',
        options: [
          { value: '', label: '全てのロール' },
          { value: 'admin', label: '管理者' },
          { value: 'manager', label: 'マネージャー' },
          { value: 'user', label: '一般ユーザー' }
        ]
      },
      {
        key: 'status',
        label: 'ステータス',
        options: [
          { value: '', label: '全てのステータス' },
          { value: 'active', label: 'アクティブ' },
          { value: 'inactive', label: '無効' }
        ]
      }
    ],
    // ページング機能設定（有効）
    pagination: {
      enabled: true,
      type: 'server',
      perPageOptions: [20, 50, 100],
      defaultPerPage: 20,
      showInfo: true
    }
  },

  // 部門管理ページ用プリセット（検索のみ、ページングなし）
  departments: {
    padding: 'px-4 py-3',
    headerPadding: 'px-4 py-3',
    borders: {
      header: 'border-b border-gray-200',
      cell: '',
      stickyCell: 'border-r border-gray-200'
    },
    spacing: {
      cellGap: '',
      rowGap: 'divide-y divide-gray-200'
    },
    stickyFirstColumn: false,
    rowHeight: 'auto',
    headerBackground: 'bg-white',
    hoverEffect: 'hover:bg-gray-50',
    columnWidths: {
      default: '150px',
      name: '200px',
      description: '300px',
      manager: '150px',
      team_count: '100px',
      status: '100px',
      actions: '80px'
    },
    scrollbarConfig: {
      width: '17px',
      height: '17px',
      trackColor: '#f1f1f1',
      thumbColor: '#c1c1c1',
      thumbHoverColor: '#a8a8a8',
      cornerColor: '#f1f1f1'
    },
    // 検索機能設定（無効）
    search: {
      enabled: false
    },
    // フィルター設定（無効）
    filters: [],
    // ページング機能設定（無効）
    pagination: {
      enabled: false
    }
  },

  // チーム管理ページ用プリセット（検索のみ、ページングなし）
  teams: {
    padding: 'px-4 py-3',
    headerPadding: 'px-4 py-3',
    borders: {
      header: 'border-b border-gray-200',
      cell: '',
      stickyCell: 'border-r border-gray-200'
    },
    spacing: {
      cellGap: '',
      rowGap: 'divide-y divide-gray-200'
    },
    stickyFirstColumn: false,
    rowHeight: 'auto',
    headerBackground: 'bg-white',
    hoverEffect: 'hover:bg-gray-50',
    columnWidths: {
      default: '150px',
      name: '200px',
      department: '150px',
      description: '300px',
      leader: '150px',
      member_count: '100px',
      status: '100px',
      actions: '80px'
    },
    scrollbarConfig: {
      width: '17px',
      height: '17px',
      trackColor: '#f1f1f1',
      thumbColor: '#c1c1c1',
      thumbHoverColor: '#a8a8a8',
      cornerColor: '#f1f1f1'
    },
    // 検索機能設定（無効）
    search: {
      enabled: false
    },
    // フィルター設定（無効）
    filters: [],
    // ページング機能設定（無効）
    pagination: {
      enabled: false
    }
  },

  // ロール管理ページ用プリセット
  roles: {
    padding: 'px-4 py-3',
    headerPadding: 'px-4 py-3',
    borders: {
      header: 'border-b border-gray-200',
      cell: '',
      stickyCell: 'border-r border-gray-200'
    },
    spacing: {
      cellGap: '',
      rowGap: 'divide-y divide-gray-200'
    },
    stickyFirstColumn: false,
    rowHeight: 'auto',
    headerBackground: 'bg-white',
    hoverEffect: 'hover:bg-gray-50',
    scrollHeight: '400px', // デフォルト値（動的高さ使用時は上書きされる）
    columnWidths: {
      default: '150px',
      display_name: '200px',
      name: '150px',
      permissions: '400px',
      user_count: '100px',
      actions: '80px'
    },
    scrollbarConfig: {
      width: '17px',
      height: '17px',
      trackColor: '#f1f1f1',
      thumbColor: '#c1c1c1',
      thumbHoverColor: '#a8a8a8',
      cornerColor: '#f1f1f1'
    },
    // 検索機能設定（有効）
    search: {
      enabled: true,
      type: 'server',
      placeholder: 'ロール名、表示名で検索...',
      searchFields: ['name', 'display_name'],
      debounce: 300
    },
    // フィルター設定（無効）
    filters: [],
    // ページング機能設定（無効 - ロール数は限定的なため不要）
    pagination: {
      enabled: false
    }
  },

  // 所属管理ページ用プリセット（検索・フィルター、ページングなし）
  assignments: {
    padding: 'px-6 py-4',
    headerPadding: 'px-6 py-3',
    borders: {
      header: 'border-b border-gray-200',
      cell: '',
      stickyCell: 'border-r border-gray-200'
    },
    spacing: {
      cellGap: '',
      rowGap: 'divide-y divide-gray-200'
    },
    stickyFirstColumn: false,
    rowHeight: 'auto',
    headerBackground: 'bg-white',
    hoverEffect: 'hover:bg-gray-50',
    columnWidths: {
      default: '200px',
      user: '250px',
      primary: '300px',
      secondary: '350px',
      count: '100px',
      actions: '80px'
    },
    scrollbarConfig: {
      width: '17px',
      height: '17px',
      trackColor: '#f1f1f1',
      thumbColor: '#c1c1c1',
      thumbHoverColor: '#a8a8a8',
      cornerColor: '#f1f1f1'
    },
    // 検索機能設定（有効・クライアントサイド）
    search: {
      enabled: true,
      type: 'client',
      placeholder: 'ユーザー名、メールアドレスで検索...',
      searchFields: ['user.name', 'user.email']
    },
    // フィルター設定
    filters: [
      {
        key: 'department_id',
        label: '部門',
        options: [] // 動的に設定
      },
      {
        key: 'team_id',
        label: 'チーム',
        options: [] // 動的に設定
      }
    ],
    // ページング機能設定（無効）
    pagination: {
      enabled: false
    }
  },

  // ユーザー権限設定ページ用プリセット
  userPermissions: {
    padding: 'px-6 py-4',
    headerPadding: 'px-6 py-3',
    borders: {
      header: 'border-b border-gray-200',
      cell: '',
      stickyCell: 'border-r border-gray-200'
    },
    spacing: {
      cellGap: '',
      rowGap: 'divide-y divide-gray-200'
    },
    stickyFirstColumn: false,
    rowHeight: 'auto',
    headerBackground: 'bg-white',
    hoverEffect: 'hover:bg-gray-50',
    columnWidths: {
      default: '200px',
      user: '250px',
      roles: '300px',
      direct_permissions: '120px',
      total_permissions: '120px',
      created_at: '150px',
      actions: '80px'
    },
    scrollbarConfig: {
      width: '17px',
      height: '17px',
      trackColor: '#f1f1f1',
      thumbColor: '#c1c1c1',
      thumbHoverColor: '#a8a8a8',
      cornerColor: '#f1f1f1'
    },
    // 検索機能設定（有効）
    search: {
      enabled: true,
      type: 'server',
      placeholder: 'ユーザー名、メールアドレスで検索...',
      searchFields: ['name', 'email'],
      debounce: 300
    },
    // フィルター設定
    filters: [
      {
        key: 'role_filter',
        label: 'ロール',
        options: [] // 動的に設定
      }
    ],
    // ページング機能設定（無効 - 小規模システムではユーザー数も限定的なため不要）
    pagination: {
      enabled: false
    }
  }
};

interface ColumnDefinition {
  key: string;
  width?: string;
}

/**
 * プリセット設定を取得する
 * @param presetName プリセット名
 * @param customConfig カスタム設定（オプション）
 * @returns 統合された設定
 */
export function getTableConfig(
  presetName: string = 'matrix',
  customConfig: Partial<TablePresetConfig> = {}
): TablePresetConfig {
  const preset = TABLE_PRESETS[presetName] || TABLE_PRESETS.matrix;

  // プリセットとカスタム設定を深くマージ
  return {
    ...preset,
    ...customConfig,
    borders: {
      ...preset.borders,
      ...customConfig.borders
    },
    spacing: {
      ...preset.spacing,
      ...customConfig.spacing
    },
    columnWidths: {
      ...preset.columnWidths,
      ...customConfig.columnWidths
    }
  } as TablePresetConfig;
}

/**
 * 列の幅を取得する
 * @param column 列定義
 * @param config テーブル設定
 * @returns 列幅（CSS値）
 */
export function getColumnWidth(column: ColumnDefinition, config: TablePresetConfig): string {
  const { columnWidths = {} } = config;

  // 1. 列自体のwidthプロパティを優先
  if (column.width) {
    return column.width;
  }

  // 2. プリセットの列固有幅をチェック
  if (columnWidths[column.key]) {
    return columnWidths[column.key];
  }

  // 3. デフォルト幅を使用
  return columnWidths.default || '150px';
}

/**
 * 統一スクロールバースタイルを生成する
 * @param config テーブル設定
 * @param className スクロールバーに適用するクラス名
 * @returns CSSスタイル文字列
 */
export function generateScrollbarStyles(
  config: TablePresetConfig,
  className: string = 'unified-scrollbar'
): string {
  const { scrollbarConfig = {} } = config;
  const {
    width = '17px',
    height = '17px',
    trackColor = '#f1f1f1',
    thumbColor = '#c1c1c1',
    thumbHoverColor = '#a8a8a8',
    cornerColor = '#f1f1f1'
  } = scrollbarConfig;

  return `.${className}{scrollbar-width:thin;-ms-overflow-style:auto;}.${className}::-webkit-scrollbar{width:${width};height:${height};}.${className}::-webkit-scrollbar-track{background:${trackColor};border-radius:0;}.${className}::-webkit-scrollbar-thumb{background:${thumbColor};border-radius:0;border:none;}.${className}::-webkit-scrollbar-thumb:hover{background:${thumbHoverColor};}.${className}::-webkit-scrollbar-corner{background:${cornerColor};}`;
}

export type {
  ScrollbarConfig,
  BorderConfig,
  SpacingConfig,
  SearchConfig,
  FilterOption,
  FilterConfig,
  PaginationConfig,
  TablePresetConfig,
  ColumnDefinition
};
