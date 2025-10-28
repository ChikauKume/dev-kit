/**
 * AI自動駆動開発用ルーティング設定
 *
 * このファイルは以下の目的で使用されます：
 * 1. テンプレートコンポーネントとルートの対応関係を定義
 * 2. Laravel + Inertia.jsへの移行時の参照情報
 * 3. AIがコード生成する際の設計図
 *
 * @usage
 * AIがこのファイルを読み込み、Laravel側のroutes/web.phpと
 * Inertia.jsのページコンポーネントを自動生成します
 */

export interface RouteConfig {
  /** ルートパス（Laravel側で使用） */
  path: string;

  /** Laravel route name */
  name: string;

  /** テンプレートコンポーネントのパス */
  template: string;

  /** Inertia.jsページコンポーネントの出力先 */
  inertiaPage: string;

  /** 認証が必要か */
  auth: boolean;

  /** ゲストのみアクセス可能か */
  guest: boolean;

  /** ミドルウェア */
  middleware?: string[];

  /** ページタイトル */
  title: string;

  /** 説明 */
  description: string;
}

/**
 * 全ルート設定
 * AIはこの配列を元に自動的にコードを生成します
 */
export const routeConfigs: RouteConfig[] = [
  // ========================================
  // 認証関連ルート（ゲストのみ）
  // ========================================
  {
    path: '/login',
    name: 'login',
    template: 'src/pages/templates/auth/LoginPage.tsx',
    inertiaPage: 'Auth/LoginPage',
    auth: false,
    guest: true,
    title: 'ログイン',
    description: 'ユーザーログイン画面',
  },
  {
    path: '/signup',
    name: 'register',
    template: 'src/pages/templates/auth/SignupPage.tsx',
    inertiaPage: 'Auth/SignupPage',
    auth: false,
    guest: true,
    title: '新規登録',
    description: 'ユーザー新規登録画面',
  },
  {
    path: '/signup-confirm',
    name: 'register.confirm',
    template: 'src/pages/templates/auth/SignupConfirmPage.tsx',
    inertiaPage: 'Auth/SignupConfirmPage',
    auth: false,
    guest: true,
    title: '登録内容確認',
    description: 'ユーザー登録内容確認画面',
  },
  {
    path: '/signup-complete',
    name: 'register.complete',
    template: 'src/pages/templates/auth/SignupCompletePage.tsx',
    inertiaPage: 'Auth/SignupCompletePage',
    auth: false,
    guest: true,
    title: '登録完了',
    description: 'ユーザー登録完了画面',
  },
  {
    path: '/forgot-password',
    name: 'password.request',
    template: 'src/pages/templates/auth/ForgotPasswordPage.tsx',
    inertiaPage: 'Auth/ForgotPasswordPage',
    auth: false,
    guest: true,
    title: 'パスワード再設定',
    description: 'パスワード再設定リクエスト画面',
  },
  {
    path: '/reset-password/{token}',
    name: 'password.reset',
    template: 'src/pages/templates/auth/ResetPasswordPage.tsx',
    inertiaPage: 'Auth/ResetPasswordPage',
    auth: false,
    guest: true,
    title: 'パスワード再設定',
    description: 'パスワード再設定画面',
  },

  // ========================================
  // 認証後ルート
  // ========================================
  {
    path: '/dashboard',
    name: 'dashboard',
    template: 'src/pages/templates/dashboard/DashboardPage.tsx',
    inertiaPage: 'Dashboard/DashboardPage',
    auth: true,
    guest: false,
    title: 'ダッシュボード',
    description: 'ダッシュボード画面',
  },
  {
    path: '/data/list',
    name: 'data.index',
    template: 'src/pages/templates/data/DataListPage.tsx',
    inertiaPage: 'Data/DataListPage',
    auth: true,
    guest: false,
    title: 'データ一覧',
    description: 'データ一覧画面',
  },
  {
    path: '/data/form',
    name: 'data.create',
    template: 'src/pages/templates/data/DataFormPage.tsx',
    inertiaPage: 'Data/DataFormPage',
    auth: true,
    guest: false,
    title: 'データ登録',
    description: 'データ登録・編集画面',
  },
  {
    path: '/statistics',
    name: 'statistics.index',
    template: 'src/pages/templates/statistics/StatisticsPage.tsx',
    inertiaPage: 'Statistics/StatisticsPage',
    auth: true,
    guest: false,
    title: '統計',
    description: '統計情報画面',
  },
  {
    path: '/settings',
    name: 'settings.index',
    template: 'src/pages/templates/settings/SettingsPage.tsx',
    inertiaPage: 'Settings/SettingsPage',
    auth: true,
    guest: false,
    title: '設定',
    description: 'ユーザー設定画面',
  },
  {
    path: '/notifications',
    name: 'notifications.index',
    template: 'src/pages/templates/notifications/NotificationsPage.tsx',
    inertiaPage: 'Notifications/NotificationsPage',
    auth: true,
    guest: false,
    title: '通知',
    description: '通知一覧画面',
  },

  // ========================================
  // 情報ページ（公開）
  // ========================================
  {
    path: '/qna',
    name: 'qna',
    template: 'src/pages/templates/info/QnaPage.tsx',
    inertiaPage: 'Info/QnaPage',
    auth: false,
    guest: false,
    title: 'Q&A',
    description: 'よくある質問',
  },
  {
    path: '/privacy',
    name: 'privacy',
    template: 'src/pages/templates/info/PrivacyPage.tsx',
    inertiaPage: 'Info/PrivacyPage',
    auth: false,
    guest: false,
    title: 'プライバシーポリシー',
    description: 'プライバシーポリシー',
  },
  {
    path: '/terms',
    name: 'terms',
    template: 'src/pages/templates/info/TermsPage.tsx',
    inertiaPage: 'Info/TermsPage',
    auth: false,
    guest: false,
    title: '利用規約',
    description: '利用規約',
  },
  {
    path: '/commercial',
    name: 'commercial',
    template: 'src/pages/templates/info/CommercialPage.tsx',
    inertiaPage: 'Info/CommercialPage',
    auth: false,
    guest: false,
    title: '特定商取引法に基づく表記',
    description: '特定商取引法に基づく表記',
  },

  // ========================================
  // エラーページ
  // ========================================
  {
    path: '/404',
    name: '404',
    template: 'src/pages/templates/error/NotFoundPage.tsx',
    inertiaPage: 'Error/NotFoundPage',
    auth: false,
    guest: false,
    title: '404 Not Found',
    description: 'ページが見つかりません',
  },
  {
    path: '/500',
    name: '500',
    template: 'src/pages/templates/error/ServerErrorPage.tsx',
    inertiaPage: 'Error/ServerErrorPage',
    auth: false,
    guest: false,
    title: '500 Server Error',
    description: 'サーバーエラー',
  },
  {
    path: '/maintenance',
    name: 'maintenance',
    template: 'src/pages/templates/error/MaintenancePage.tsx',
    inertiaPage: 'Error/MaintenancePage',
    auth: false,
    guest: false,
    title: 'メンテナンス中',
    description: 'メンテナンス中',
  },
];

/**
 * ルート名からルート設定を取得
 */
export function getRouteConfig(name: string): RouteConfig | undefined {
  return routeConfigs.find(config => config.name === name);
}

/**
 * パスからルート設定を取得
 */
export function getRouteConfigByPath(path: string): RouteConfig | undefined {
  return routeConfigs.find(config => config.path === path);
}

/**
 * 認証が必要なルート一覧を取得
 */
export function getAuthRoutes(): RouteConfig[] {
  return routeConfigs.filter(config => config.auth);
}

/**
 * ゲスト専用ルート一覧を取得
 */
export function getGuestRoutes(): RouteConfig[] {
  return routeConfigs.filter(config => config.guest);
}

/**
 * 公開ルート一覧を取得
 */
export function getPublicRoutes(): RouteConfig[] {
  return routeConfigs.filter(config => !config.auth && !config.guest);
}
