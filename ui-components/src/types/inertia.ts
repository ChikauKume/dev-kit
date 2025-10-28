/**
 * Inertia.js標準Props型定義
 *
 * このファイルは、Laravel + Inertia.jsから自動的に渡される標準Propsの型を定義します。
 * テンプレートコンポーネントはこれらの型を使用することで、Laravel側の実装を簡素化できます。
 *
 * @see https://inertiajs.com/shared-data
 * @see https://inertiajs.com/error-handling
 */

/**
 * Inertia.js標準エラーオブジェクト
 *
 * Laravelのバリデーションエラーが自動的に変換されて渡されます
 *
 * @example Laravel Controller
 * ```php
 * $request->validate([
 *   'email' => 'required|email',
 *   'password' => 'required|min:8',
 * ]);
 * // バリデーション失敗時、自動的に { email: "...", password: "..." } が渡される
 * ```
 *
 * @example React Component
 * ```tsx
 * interface Props extends InertiaSharedProps {
 *   // ...
 * }
 *
 * const LoginPage: React.FC<Props> = ({ errors }) => {
 *   // errors.email, errors.password を直接使用可能
 * };
 * ```
 */
export interface InertiaErrors {
  [key: string]: string;
}

/**
 * Inertia.js標準フラッシュメッセージ
 *
 * Laravelのセッションフラッシュメッセージが自動的に渡されます
 *
 * @example Laravel Controller
 * ```php
 * // 成功メッセージ
 * return redirect()->route('dashboard')
 *   ->with('success', 'ログインに成功しました');
 *
 * // エラーメッセージ
 * return back()->with('error', 'ログインに失敗しました');
 *
 * // ステータスメッセージ（パスワードリセット等）
 * return back()->with('status', 'パスワードリセットリンクを送信しました');
 * ```
 *
 * @example React Component
 * ```tsx
 * const DashboardPage: React.FC<Props> = ({ flash }) => {
 *   return (
 *     <>
 *       {flash?.success && <Alert type="success">{flash.success}</Alert>}
 *       {flash?.error && <Alert type="error">{flash.error}</Alert>}
 *     </>
 *   );
 * };
 * ```
 */
export interface InertiaFlash {
  /** 成功メッセージ */
  success?: string;

  /** エラーメッセージ */
  error?: string;

  /** ステータスメッセージ（パスワードリセット等で使用） */
  status?: string;

  /** 警告メッセージ */
  warning?: string;

  /** 情報メッセージ */
  info?: string;

  /** カスタムメッセージ（プロジェクト固有） */
  [key: string]: string | undefined;
}

/**
 * Inertia.js標準の共有Props
 *
 * すべてのInertia.jsページコンポーネントに自動的に渡される標準Props
 *
 * @example HandleInertiaRequests.php (Laravel側)
 * ```php
 * public function share(Request $request): array
 * {
 *     return array_merge(parent::share($request), [
 *         'auth' => [
 *             'user' => $request->user(),
 *         ],
 *         'flash' => [
 *             'success' => fn () => $request->session()->get('success'),
 *             'error' => fn () => $request->session()->get('error'),
 *             'status' => fn () => $request->session()->get('status'),
 *         ],
 *     ]);
 * }
 * ```
 *
 * @example React Component
 * ```tsx
 * interface Props extends InertiaSharedProps {
 *   // ページ固有のProps
 *   stats?: any[];
 * }
 *
 * const DashboardPage: React.FC<Props> = ({ auth, flash, errors, stats }) => {
 *   // auth.user, flash.success, errors などが自動的に利用可能
 * };
 * ```
 */
export interface InertiaSharedProps {
  /**
   * バリデーションエラー
   * Laravel側でバリデーション失敗時に自動設定される
   */
  errors?: InertiaErrors;

  /**
   * フラッシュメッセージ
   * Laravel側でwith()メソッドで設定されたメッセージ
   */
  flash?: InertiaFlash;

  /**
   * 認証情報（オプション）
   * HandleInertiaRequestsで共有設定した場合のみ
   */
  auth?: {
    user?: {
      id: number;
      name: string;
      email: string;
      [key: string]: any;
    } | null;
  };

  /**
   * その他の共有データ
   * プロジェクト固有の共有データを許容
   */
  [key: string]: any;
}

/**
 * 認証ページ用の基本Props
 *
 * ログイン、サインアップ、パスワードリセット等の認証ページで使用する基本型
 *
 * @example LoginPage
 * ```tsx
 * interface LoginPageProps extends BaseAuthPageProps {
 *   // ページ固有のProps（オプション）
 *   redirectUrl?: string;
 * }
 * ```
 */
export interface BaseAuthPageProps extends InertiaSharedProps {
  /**
   * テンプレートナビゲーションを非表示にするか
   * 本番環境では通常true
   */
  hideNavigation?: boolean;

  /**
   * 旧実装との互換性用（非推奨）
   * 新規実装では errors を使用してください
   * @deprecated Use errors instead
   */
  loginErrors?: {
    email?: string;
    password?: string;
  };

  /**
   * 旧実装との互換性用（非推奨）
   * 新規実装では flash.error を使用してください
   * @deprecated Use flash.error instead
   */
  loginFormError?: string;
}

/**
 * ダッシュボードページ用の基本Props
 *
 * ログイン後のページで使用する基本型
 *
 * @example DashboardPage
 * ```tsx
 * interface DashboardPageProps extends BaseDashboardPageProps {
 *   stats: Array<{ label: string; value: string; icon: string; color: string }>;
 *   notifications: Array<{ id: number; title: string; message: string; read: boolean }>;
 * }
 * ```
 */
export interface BaseDashboardPageProps extends InertiaSharedProps {
  /**
   * テンプレートナビゲーションを非表示にするか
   * 本番環境では通常true
   */
  hideNavigation?: boolean;
}
