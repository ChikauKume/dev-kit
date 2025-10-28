import { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, NavLink, useNavigate, useLocation } from 'react-router-dom';
import Icon, { type IconName } from './components/icons/Icon.tsx';
import HomePage from './pages/_demo/HomePage.tsx';
import ComponentsPage from './pages/_demo/ComponentsPage.tsx';
import ButtonsPage from './pages/_demo/components/ButtonsPage.tsx';
import FormsPage from './pages/_demo/components/FormsPage.tsx';
import IconsPage from './pages/_demo/components/IconsPage.tsx';
import MessagesPage from './pages/_demo/components/MessagesPage.tsx';
import TablesPage from './pages/_demo/components/TablesPage.tsx';
import NavigationPage from './pages/_demo/components/NavigationPage.tsx';
import LayoutPage from './pages/_demo/components/LayoutPage.tsx';
import TemplatePage from './pages/_demo/TemplatePage.tsx';
import DataFormPage from './pages/_demo/containers/DataFormPage.tsx';
import UserList from './pages/_demo/containers/UserList.tsx';
import SettingsPage from './pages/_demo/containers/SettingsPage.tsx';
import NotificationsPage from './pages/_demo/containers/NotificationsPage.tsx';
import DashboardPage from './pages/_demo/containers/DashboardPage.tsx';
import StatisticsPage from './pages/_demo/containers/StatisticsPage.tsx';

// Auth templates
import LoginPage from './pages/templates/auth/LoginPage.tsx';
import ForgotPasswordPage from './pages/templates/auth/ForgotPasswordPage.tsx';
import ResetPasswordPage from './pages/templates/auth/ResetPasswordPage.tsx';
import PasswordResetEmailPage from './pages/templates/auth/PasswordResetEmailPage.tsx';
import SignupPage from './pages/templates/auth/SignupPage.tsx';
import SignupConfirmPage from './pages/templates/auth/SignupConfirmPage.tsx';
import SignupCompletePage from './pages/templates/auth/SignupCompletePage.tsx';

// Error templates
import Error404Page from './pages/templates/error/Error404Page.tsx';
import Error505Page from './pages/templates/error/Error505Page.tsx';
import MaintenancePage from './pages/templates/error/MaintenancePage.tsx';

// Info templates
import CommercialPage from './pages/templates/info/CommercialPage.tsx';
import TermsPage from './pages/templates/info/TermsPage.tsx';
import PrivacyPage from './pages/templates/info/PrivacyPage.tsx';
import QnaPage from './pages/templates/info/QnaPage.tsx';

// Data templates
import DataDetailPage from './pages/_demo/containers/DataDetailPage.tsx';
import ListPage from './pages/templates/data/ListPage.tsx';
import FormPage from './pages/templates/data/FormPage.tsx';
import DetailPage from './pages/templates/data/DetailPage.tsx';

// Container templates (Dashboard, Settings, Notifications, Statistics)
import DashboardTemplate from './pages/templates/dashboard/DashboardPage.tsx';
import SettingsTemplate from './pages/templates/settings/SettingsPage.tsx';
import NotificationsTemplate from './pages/templates/notifications/NotificationsPage.tsx';
import StatisticsTemplate from './pages/templates/statistics/StatisticsPage.tsx';

// Redirect handler component
function RedirectHandler() {
  const navigate = useNavigate();

  useEffect(() => {
    const redirectPath = sessionStorage.getItem('redirectPath');
    if (redirectPath) {
      sessionStorage.removeItem('redirectPath');
      navigate(redirectPath, { replace: true });
    }
  }, [navigate]);

  return null;
}

// Scroll to top on route change
function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

interface NavigationItem {
  path: string;
  label: string;
  icon: IconName;
}

function App() {

  const navigation: NavigationItem[] = [
    { path: '/', label: 'ホーム', icon: 'home' },
    { path: '/pages/login', label: 'ページ', icon: 'document' },
    { path: '/components', label: '構成要素', icon: 'cube' }
  ];


  return (
    <Router>
      <div className="app">
        <style>{`
          .nav-header {
            background: var(--color-neutral-white);
            border-bottom: 1px solid var(--color-neutral-200);
            position: sticky;
            top: 0;
            z-index: 50;
          }

          .nav-container {
            max-width: 1400px;
            margin: 0 auto;
            padding: 0 var(--spacing-4);
            display: flex;
            align-items: center;
            justify-content: space-between;
            height: 64px;
          }

          .nav-logo {
            font-size: var(--font-size-lg);
            font-weight: var(--font-weight-bold);
            color: var(--color-primary-700);
            text-decoration: none;
            transition: color 0.2s;
            white-space: nowrap;
            margin-right: var(--spacing-4);
          }

          .nav-logo:hover {
            color: var(--color-primary-800);
          }

          .nav-links {
            display: flex;
            list-style: none;
            margin: 0;
            padding: 0;
            gap: var(--spacing-1);
            flex-wrap: nowrap;
          }

          .nav-link {
            display: flex;
            align-items: center;
            gap: var(--spacing-1);
            padding: var(--spacing-2) var(--spacing-3);
            border-radius: var(--radius-md);
            text-decoration: none;
            color: var(--color-neutral-600);
            font-weight: var(--font-weight-medium);
            transition: all 0.2s;
            font-size: var(--font-size-xs);
            white-space: nowrap;
          }

          .nav-link:hover {
            background: var(--color-neutral-100);
            color: var(--color-neutral-900);
          }

          .nav-link.active {
            background: var(--color-primary-100);
            color: var(--color-primary-700);
          }


          @media (max-width: 768px) {
            .nav-links {
              display: none;
            }
          }
        `}</style>

        <nav className="nav-header">
          <div className="nav-container">
            <NavLink to="/" className="nav-logo">
              UI Components
            </NavLink>

            {/* デスクトップナビゲーション */}
            <ul className="nav-links">
              {navigation.map(item => (
                <li key={item.path}>
                  <NavLink
                    to={item.path}
                    className={({ isActive }) =>
                      `nav-link ${isActive ? 'active' : ''}`
                    }
                    end={item.path === '/'}
                  >
                    <Icon name={item.icon} className="w-4 h-4" />
                    {item.label}
                  </NavLink>
                </li>
              ))}
            </ul>

          </div>
        </nav>


        <main className="main-content">
          <RedirectHandler />
          <ScrollToTop />
          <Routes>
            {/* Home - Generic Templates Overview */}
            <Route path="/" element={<HomePage />} />

            {/* Page Templates Overview (with tab navigation) */}
            <Route path="/pages" element={<TemplatePage />} />

            {/* Auth Pages - Individual routes */}
            <Route path="/pages/login" element={<LoginPage />} />
            <Route path="/pages/signup" element={<SignupPage />} />
            <Route path="/pages/signup-confirm" element={<SignupConfirmPage />} />
            <Route path="/pages/signup-complete" element={<SignupCompletePage />} />
            <Route path="/pages/forgot-password" element={<ForgotPasswordPage />} />
            <Route path="/pages/reset-password" element={<ResetPasswordPage />} />
            <Route path="/pages/password-reset-email" element={<PasswordResetEmailPage />} />

            {/* Dashboard and Settings */}
            <Route path="/pages/dashboard" element={<DashboardPage />} />
            <Route path="/pages/statistics" element={<StatisticsPage />} />
            <Route path="/pages/settings" element={<SettingsPage />} />
            <Route path="/pages/notifications" element={<NotificationsPage />} />

            {/* Data Pages - Individual routes */}
            <Route path="/pages/data/list" element={<UserList />} />
            <Route path="/pages/data/add" element={<DataFormPage />} />
            <Route path="/pages/data/edit" element={<DataFormPage />} />
            <Route path="/pages/data/detail" element={<DataDetailPage />} />

            {/* Error Pages - Individual routes */}
            <Route path="/pages/error-404" element={<Error404Page />} />
            <Route path="/pages/error-505" element={<Error505Page />} />
            <Route path="/pages/maintenance" element={<MaintenancePage />} />

            {/* Info Pages - Individual routes */}
            <Route path="/pages/qna" element={<QnaPage />} />
            <Route path="/pages/terms" element={<TermsPage />} />
            <Route path="/pages/privacy" element={<PrivacyPage />} />
            <Route path="/pages/commercial" element={<CommercialPage />} />

            {/* Template Examples - Reusable page templates (動的コンテンツは空) */}
            {/* Auth Templates */}
            <Route path="/templates/login" element={<LoginPage />} />
            <Route path="/templates/signup" element={<SignupPage />} />
            <Route path="/templates/signup-confirm" element={<SignupConfirmPage />} />
            <Route path="/templates/signup-complete" element={<SignupCompletePage />} />
            <Route path="/templates/forgot-password" element={<ForgotPasswordPage />} />
            <Route path="/templates/reset-password" element={<ResetPasswordPage />} />
            <Route path="/templates/password-reset-email" element={<PasswordResetEmailPage />} />

            {/* Dashboard and Container Templates */}
            <Route path="/templates/dashboard" element={<DashboardTemplate />} />
            <Route path="/templates/settings" element={<SettingsTemplate />} />
            <Route path="/templates/notifications" element={<NotificationsTemplate />} />
            <Route path="/templates/statistics" element={<StatisticsTemplate title="統計" charts={[]} />} />

            {/* Data Templates */}
            <Route path="/templates/data/list" element={<ListPage title="データ一覧" columns={[]} data={[]} />} />
            <Route path="/templates/data/add" element={<FormPage title="データ作成" validation={{}} onSubmit={async () => {}} />} />
            <Route path="/templates/data/edit" element={<FormPage title="データ編集" validation={{}} onSubmit={async () => {}} />} />
            <Route path="/templates/data/detail" element={<DetailPage title="データ詳細" data={{}} />} />

            {/* Error Templates */}
            <Route path="/templates/error-404" element={<Error404Page />} />
            <Route path="/templates/error-505" element={<Error505Page />} />
            <Route path="/templates/maintenance" element={<MaintenancePage />} />

            {/* Info Templates */}
            <Route path="/templates/qna" element={<QnaPage />} />
            <Route path="/templates/terms" element={<TermsPage />} />
            <Route path="/templates/privacy" element={<PrivacyPage />} />
            <Route path="/templates/commercial" element={<CommercialPage />} />

            {/* Components Catalog */}
            <Route path="/components" element={<ComponentsPage />} />
            <Route path="/buttons" element={<ButtonsPage />} />
            <Route path="/forms" element={<FormsPage />} />
            <Route path="/messages" element={<MessagesPage />} />
            <Route path="/messages-notifications" element={<MessagesPage />} />
            <Route path="/tables" element={<TablesPage />} />
            <Route path="/tables-graphs" element={<TablesPage />} />
            <Route path="/navigation" element={<NavigationPage />} />
            <Route path="/layout" element={<LayoutPage />} />
            <Route path="/icons" element={<IconsPage />} />

            {/* <Route path="/playground" element={<PlaygroundPage />} /> */}
          </Routes>
        </main>

        <footer style={{
          textAlign: 'center',
          padding: 'var(--spacing-8)',
          color: 'var(--color-neutral-600)',
          borderTop: '1px solid var(--color-neutral-200)',
          backgroundColor: 'var(--color-neutral-white)'
        }}>
          <p>UI Components Library</p>
        </footer>
      </div>
    </Router>
  );
}

export default App;
