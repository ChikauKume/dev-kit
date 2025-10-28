import React, { useState } from 'react';
import Icon from '../../../components/icons/Icon';
import TabNavigation from '../../../components/navigation/TabNavigation';
import NavLink from '../../../components/navigation/NavLink';
import ResponsiveNavLink from '../../../components/navigation/ResponsiveNavLink';
import DropdownMenu from '../../../components/navigation/DropdownMenu';
import SecondaryButton from '../../../components/buttons/SecondaryButton';

interface Tab {
  key: string;
  label: string;
  icon?: string;
}

interface AccordionItem {
  title: string;
  content: React.ReactNode;
}

interface AccordionProps {
  items: AccordionItem[];
  allowMultiple?: boolean;
}

interface NavItem {
  path: string;
  label: string;
  icon: string;
}

const NavigationPage: React.FC = () => {
  // タブナビゲーションの状態
  const [activeTab, setActiveTab] = useState<string>('overview');

  // ハンバーガーメニューとドロワーの状態
  const [isDrawerOpen, setIsDrawerOpen] = useState<boolean>(false);
  const [isHamburgerMenuOpen, setIsHamburgerMenuOpen] = useState<boolean>(false);

  // ドロップダウンメニューの状態
  const [showDropdown, setShowDropdown] = useState<boolean>(false);
  const [dropdownAlign, setDropdownAlign] = useState<'left' | 'right'>('right');

  // Accordion用の状態管理
  const [openAccordions, setOpenAccordions] = useState<Record<number, boolean>>({ 0: true });

  // Accordion component
  const Accordion: React.FC<AccordionProps> = ({ items, allowMultiple = false }) => {
    const toggleAccordion = (index: number): void => {
      setOpenAccordions(prev => {
        if (allowMultiple) {
          return { ...prev, [index]: !prev[index] };
        } else {
          return { [index]: !prev[index] };
        }
      });
    };

    return (
      <div style={{ border: '1px solid var(--color-neutral-200)', borderRadius: 'var(--radius-lg)', overflow: 'hidden' }}>
        {items.map((item, index) => (
          <div key={index}>
            <button
              onClick={() => toggleAccordion(index)}
              style={{
                width: '100%',
                padding: 'var(--spacing-4)',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                backgroundColor: openAccordions[index] ? 'var(--color-neutral-100)' : 'var(--color-neutral-white)',
                border: 'none',
                borderBottom: index < items.length - 1 ? '1px solid var(--color-neutral-200)' : 'none',
                cursor: 'pointer',
                fontSize: 'var(--font-size-sm)',
                fontWeight: 'var(--font-weight-medium)',
                color: 'var(--color-neutral-900)',
                textAlign: 'left',
                transition: 'background-color 0.2s'
              }}
            >
              <span>{item.title}</span>
              <Icon
                name={openAccordions[index] ? 'chevron-up' : 'chevron-down'}
                style={{
                  width: '16px',
                  height: '16px',
                  color: 'var(--color-neutral-600)',
                  transition: 'transform 0.2s'
                }}
              />
            </button>
            {openAccordions[index] && (
              <div style={{
                padding: 'var(--spacing-4)',
                backgroundColor: 'var(--color-neutral-50)',
                borderBottom: index < items.length - 1 ? '1px solid var(--color-neutral-200)' : 'none',
                fontSize: 'var(--font-size-sm)',
                color: 'var(--color-neutral-700)',
                lineHeight: 'var(--line-height-relaxed)'
              }}>
                {item.content}
              </div>
            )}
          </div>
        ))}
      </div>
    );
  };

  // サンプルタブデータ
  const tabs: Tab[] = [
    { key: 'overview', label: '概要', icon: 'dashboard' },
    { key: 'users', label: 'ユーザー', icon: 'users' },
    { key: 'settings', label: '設定', icon: 'settings' },
    { key: 'reports', label: 'レポート', icon: 'chart' }
  ];



  const toggleDrawer = (): void => {
    setIsDrawerOpen(!isDrawerOpen);
  };

  const closeDrawer = (): void => {
    setIsDrawerOpen(false);
  };

  const toggleHamburgerMenu = (): void => {
    setIsHamburgerMenuOpen(!isHamburgerMenuOpen);
  };

  // ドロワーメニューのナビゲーションアイテム
  const drawerNavItems: NavItem[] = [
    { path: '/', label: 'ホーム', icon: 'home' },
    { path: '/buttons', label: 'ボタン', icon: 'cube' },
    { path: '/forms', label: 'フォーム', icon: 'edit' },
    { path: '/messages', label: 'メッセージ', icon: 'clipboard' },
    { path: '/tables', label: 'テーブル', icon: 'table' },
    { path: '/navigation', label: 'ナビゲーション', icon: 'menu' },
    { path: '/icons', label: 'アイコン', icon: 'star' }
  ];

  return (
    <div className="navigation-page">
      <style jsx>{`
        .navigation-page {
          padding: var(--spacing-8);
          max-width: 1200px;
          margin: 0 auto;
        }

        .page-header {
          margin-bottom: var(--spacing-8);
        }

        .page-title {
          font-size: var(--font-size-3xl);
          font-weight: var(--font-weight-bold);
          color: var(--color-neutral-900);
          margin-bottom: var(--spacing-4);
        }

        .page-description {
          color: var(--color-neutral-600);
          font-size: var(--font-size-lg);
          line-height: var(--line-height-relaxed);
        }

        .component-section {
          margin-bottom: var(--spacing-12);
        }

        .section-title {
          font-size: var(--font-size-2xl);
          font-weight: var(--font-weight-semibold);
          color: var(--color-neutral-900);
          margin-bottom: var(--spacing-6);
          border-bottom: 2px solid var(--color-primary-200);
          padding-bottom: var(--spacing-3);
        }

        .component-card {
          background: var(--color-neutral-white);
          border: 1px solid var(--color-neutral-200);
          border-radius: var(--radius-lg);
          padding: var(--spacing-6);
          margin-bottom: var(--spacing-6);
        }

        .component-info {
          margin-bottom: var(--spacing-4);
        }

        .component-name {
          font-size: var(--font-size-lg);
          font-weight: var(--font-weight-semibold);
          color: var(--color-neutral-900);
          margin-bottom: var(--spacing-2);
        }

        .component-description {
          font-size: var(--font-size-sm);
          color: var(--color-neutral-600);
          margin-bottom: var(--spacing-4);
        }

        .component-demo {
          padding: var(--spacing-4);
          background: var(--color-neutral-50);
          border: 1px solid var(--color-neutral-200);
          border-radius: var(--radius-md);
        }

        .code-snippet {
          background: var(--color-neutral-900);
          color: var(--color-neutral-100);
          padding: var(--spacing-3);
          border-radius: var(--radius-md);
          font-family: var(--font-family-mono);
          font-size: var(--font-size-xs);
          margin-top: var(--spacing-3);
          overflow-x: auto;
        }

        .tab-navigation-wrapper {
          border: 1px solid var(--color-neutral-200);
          border-radius: var(--radius-lg) var(--radius-lg) 0 0;
          overflow: hidden;
        }

        .tab-navigation-wrapper > div {
          border-radius: var(--radius-lg) var(--radius-lg) 0 0;
        }

        .tab-navigation-wrapper button {
          padding: var(--spacing-3) var(--spacing-1) !important;
        }

        .dropdown-controls {
          display: flex;
          gap: var(--spacing-3);
          margin-bottom: var(--spacing-4);
          align-items: center;
        }

        .alignment-btn {
          position: relative;
          transition: all 0.2s ease !important;
        }

        .alignment-btn.active {
          background: var(--color-primary-600) !important;
          color: var(--color-neutral-white) !important;
          border-color: var(--color-primary-600) !important;
          font-weight: var(--font-weight-semibold);
          transform: scale(1.05);
          box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
        }

        .alignment-btn:not(.active) {
          background: var(--color-neutral-100) !important;
          color: var(--color-neutral-600) !important;
          border-color: var(--color-neutral-300) !important;
        }

        .alignment-btn:not(.active):hover {
          background: var(--color-neutral-200) !important;
          color: var(--color-neutral-700) !important;
        }

        .dropdown-demo {
          position: relative;
          display: inline-block;
        }

        .tab-content {
          padding: var(--spacing-6);
          background: white;
          border: 1px solid var(--color-neutral-200);
          border-top: none;
          border-radius: 0 0 var(--radius-lg) var(--radius-lg);
          min-height: 150px;
        }

        .nav-links-demo {
          display: flex;
          gap: var(--spacing-4);
          flex-wrap: wrap;
        }

        .responsive-nav-demo {
          display: flex;
          flex-direction: column;
          gap: var(--spacing-2);
        }

        .breadcrumb-demo {
          background: white;
          padding: var(--spacing-4);
          border: 1px solid var(--color-neutral-200);
          border-radius: var(--radius-md);
        }

        .breadcrumb-items {
          display: flex;
          align-items: center;
          gap: var(--spacing-2);
        }

        .breadcrumb-separator {
          color: var(--color-neutral-400);
        }

        .breadcrumb-item {
          display: flex;
          align-items: center;
          gap: var(--spacing-1);
          color: var(--color-primary-600);
          text-decoration: none;
          font-size: var(--font-size-sm);
        }

        .breadcrumb-item:hover {
          text-decoration: underline;
        }

        .breadcrumb-item.current {
          color: var(--color-neutral-700);
          cursor: default;
        }

        .alert-panel-demo {
          background: white;
          border: 1px solid var(--color-neutral-200);
          border-radius: var(--radius-md);
          max-width: 300px;
        }

        .alert-panel-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: var(--spacing-3);
          border-bottom: 1px solid var(--color-neutral-200);
        }

        .alert-title {
          font-size: var(--font-size-sm);
          font-weight: var(--font-weight-semibold);
          margin: 0;
        }

        .alert-button {
          background: none;
          border: none;
          cursor: pointer;
          color: var(--color-neutral-600);
          hover: var(--color-neutral-800);
        }

        .alert-item {
          display: flex;
          padding: var(--spacing-3);
          gap: var(--spacing-3);
          border-bottom: 1px solid var(--color-neutral-100);
        }

        .alert-icon {
          color: rgb(21, 52, 109);
          margin-top: var(--spacing-1);
        }

        .alert-content {
          flex: 1;
        }

        .alert-item-header {
          margin-bottom: var(--spacing-1);
        }

        .alert-item-title {
          font-size: var(--font-size-sm);
          font-weight: var(--font-weight-medium);
          margin: 0;
          color: var(--color-neutral-900);
        }

        .alert-item-message {
          font-size: var(--font-size-xs);
          color: var(--color-neutral-600);
          margin: 0 0 var(--spacing-2) 0;
          line-height: var(--line-height-relaxed);
        }

        .alert-item-actions {
          display: flex;
          gap: var(--spacing-2);
        }

        .alert-action-btn {
          display: flex;
          align-items: center;
          gap: var(--spacing-1);
          background: none;
          border: none;
          cursor: pointer;
          font-size: var(--font-size-xs);
          color: var(--color-neutral-500);
          padding: var(--spacing-1);
        }

        .alert-action-btn:hover {
          color: var(--color-neutral-700);
        }

        .alert-footer-link {
          display: block;
          text-align: center;
          padding: var(--spacing-3);
          background: var(--color-neutral-50);
          border-top: 1px solid var(--color-neutral-200);
          color: rgb(21, 52, 109);
          text-decoration: none;
          font-size: var(--font-size-sm);
          font-weight: var(--font-weight-medium);
        }

        .alert-footer-link:hover {
          opacity: 0.8;
        }


        .hamburger-demo {
          background: var(--color-neutral-white);
          border: 1px solid var(--color-neutral-200);
          border-radius: var(--radius-lg);
          padding: var(--spacing-4);
          position: relative;
        }

        .hamburger-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: var(--spacing-4);
        }

        .hamburger-button {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 40px;
          height: 40px;
          border: none;
          background: transparent;
          border-radius: var(--radius-md);
          cursor: pointer;
          transition: all 0.2s;
          color: var(--color-neutral-700);
        }

        .hamburger-button:hover {
          background: var(--color-neutral-200);
        }

        .hamburger-button.active {
          background: var(--color-primary-100);
          color: var(--color-primary-700);
        }

        .hamburger-button .hamburger-icon {
          transition: transform 0.3s ease;
        }

        .hamburger-button.active .hamburger-icon {
          transform: rotate(90deg);
        }

        .hamburger-menu {
          position: absolute;
          top: 100%;
          right: 0;
          background: var(--color-neutral-white);
          border: 1px solid var(--color-neutral-200);
          border-radius: var(--radius-md);
          box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
          min-width: 200px;
          z-index: 50;
          opacity: 0;
          transform: translateY(-10px);
          visibility: hidden;
          transition: all 0.2s ease;
        }

        .hamburger-menu.open {
          opacity: 1;
          transform: translateY(0);
          visibility: visible;
        }

        .hamburger-nav-list {
          list-style: none;
          margin: 0;
          padding: var(--spacing-2);
        }

        .hamburger-nav-item {
          margin-bottom: var(--spacing-1);
        }

        .hamburger-nav-item:last-child {
          margin-bottom: 0;
        }

        .hamburger-nav-link {
          display: flex;
          align-items: center;
          gap: var(--spacing-2);
          padding: var(--spacing-2) var(--spacing-3);
          border-radius: var(--radius-sm);
          text-decoration: none;
          color: var(--color-neutral-600);
          font-size: var(--font-size-sm);
          font-weight: var(--font-weight-medium);
          transition: all 0.2s;
        }

        .hamburger-nav-link:hover {
          background: var(--color-neutral-100);
          color: var(--color-neutral-900);
        }

        .hamburger-nav-link.active {
          background: var(--color-primary-100);
          color: var(--color-primary-700);
        }

        .drawer-overlay {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: rgba(0, 0, 0, 0.5);
          z-index: 60;
          opacity: 0;
          visibility: hidden;
          transition: all 0.3s;
        }

        .drawer-overlay.open {
          opacity: 1;
          visibility: visible;
        }

        .drawer {
          position: fixed;
          top: 0;
          left: 0;
          bottom: 0;
          width: 280px;
          background: var(--color-neutral-white);
          z-index: 70;
          transform: translateX(-100%);
          transition: transform 0.3s;
          overflow-y: auto;
        }

        .drawer.open {
          transform: translateX(0);
        }

        .drawer-header {
          padding: var(--spacing-6);
          border-bottom: 1px solid var(--color-neutral-200);
          display: flex;
          align-items: center;
          justify-content: space-between;
        }

        .drawer-title {
          font-size: var(--font-size-xl);
          font-weight: var(--font-weight-bold);
          color: var(--color-primary-700);
        }

        .drawer-close {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 32px;
          height: 32px;
          border: none;
          background: none;
          border-radius: var(--radius-md);
          cursor: pointer;
          transition: background 0.2s;
          color: var(--color-neutral-500);
        }

        .drawer-close:hover {
          background: var(--color-neutral-100);
        }

        .drawer-nav {
          padding: var(--spacing-4);
        }

        .drawer-nav-list {
          list-style: none;
          margin: 0;
          padding: 0;
        }

        .drawer-nav-item {
          margin-bottom: var(--spacing-1);
        }

        .drawer-nav-link {
          display: flex;
          align-items: center;
          gap: var(--spacing-3);
          padding: var(--spacing-3) var(--spacing-4);
          border-radius: var(--radius-md);
          text-decoration: none;
          color: var(--color-neutral-600);
          font-weight: var(--font-weight-medium);
          transition: all 0.2s;
        }

        .drawer-nav-link:hover {
          background: var(--color-neutral-100);
          color: var(--color-neutral-900);
        }

        .drawer-nav-link.active {
          background: var(--color-primary-100);
          color: var(--color-primary-700);
        }

        @media (max-width: 768px) {
          .nav-links-demo {
            flex-direction: column;
          }
        }

        .accordion-demo-section {
          display: flex;
          flex-direction: column;
          gap: var(--spacing-4);
        }
      `}</style>

      <div className="page-header">
        <h1 className="page-title">ナビゲーション</h1>
        <p className="page-description">
          ページ間の移動、階層表示、検索・フィルタリング機能を提供するコンポーネント群
        </p>
      </div>

      {/* タブナビゲーション */}
      <div className="component-section">
        <h2 className="section-title">タブナビゲーション</h2>

        <div className="component-card">
          <div className="component-info">
            <h3 className="component-name">TabNavigation</h3>
            <p className="component-description">
              コンテンツを複数のタブに分けて表示するナビゲーションコンポーネント
            </p>
          </div>
          <div className="component-demo">
            <div className="tab-navigation-wrapper">
              <TabNavigation
                tabs={tabs}
                activeTab={activeTab}
                onTabChange={setActiveTab}
                integrated={true}
              />
            </div>
            <div className="tab-content">
              {activeTab === 'overview' && (
                <div>
                  <h4>概要タブの内容</h4>
                  <p>ここに概要情報が表示されます</p>
                </div>
              )}
              {activeTab === 'users' && (
                <div>
                  <h4>ユーザータブの内容</h4>
                  <p>ユーザー関連の情報がここに表示されます</p>
                </div>
              )}
              {activeTab === 'settings' && (
                <div>
                  <h4>設定タブの内容</h4>
                  <p>各種設定項目がここに表示されます</p>
                </div>
              )}
              {activeTab === 'reports' && (
                <div>
                  <h4>レポートタブの内容</h4>
                  <p>レポートとダッシュボードがここに表示されます</p>
                </div>
              )}
            </div>
          </div>
          <div className="code-snippet">
            {`<TabNavigation
  tabs={[
    { key: 'tab1', label: 'タブ1', icon: 'icon-name' },
    { key: 'tab2', label: 'タブ2' }
  ]}
  activeTab={activeTab}
  onTabChange={setActiveTab}
/>`}
          </div>
        </div>
      </div>

      {/* ナビゲーションリンク */}
      <div className="component-section">
        <h2 className="section-title">ナビゲーションリンク</h2>

        <div className="component-card">
          <div className="component-info">
            <h3 className="component-name">NavLink</h3>
            <p className="component-description">
              デスクトップナビゲーション用のリンクコンポーネント
            </p>
          </div>
          <div className="component-demo">
            <div className="nav-links-demo">
              <NavLink href="#" active>
                <Icon name="dashboard" className="w-4 h-4 inline mr-2" />
                ダッシュボード
              </NavLink>
              <NavLink href="#">
                <Icon name="users" className="w-4 h-4 inline mr-2" />
                ユーザー管理
              </NavLink>
              <NavLink href="#">
                <Icon name="settings" className="w-4 h-4 inline mr-2" />
                設定
              </NavLink>
            </div>
          </div>
          <div className="code-snippet">
            {`<NavLink href="/dashboard" active>
  ダッシュボード
</NavLink>`}
          </div>
        </div>

        <div className="component-card">
          <div className="component-info">
            <h3 className="component-name">SidebarLink</h3>
            <p className="component-description">
              サイドバーナビゲーション用のリンクコンポーネント
            </p>
          </div>
          <div className="component-demo">
            <div className="responsive-nav-demo">
              <ResponsiveNavLink href="#" active>
                <Icon name="dashboard" className="w-4 h-4 inline mr-2" />
                ダッシュボード
              </ResponsiveNavLink>
              <ResponsiveNavLink href="#">
                <Icon name="users" className="w-4 h-4 inline mr-2" />
                ユーザー管理
              </ResponsiveNavLink>
              <ResponsiveNavLink href="#">
                <Icon name="settings" className="w-4 h-4 inline mr-2" />
                設定
              </ResponsiveNavLink>
            </div>
          </div>
          <div className="code-snippet">
            {`<SidebarLink href="/dashboard" active>
  ダッシュボード
</SidebarLink>`}
          </div>
        </div>
      </div>

      {/* パンくずナビゲーション */}
      <div className="component-section">
        <h2 className="section-title">パンくずナビゲーション</h2>

        <div className="component-card">
          <div className="component-info">
            <h3 className="component-name">BreadcrumbNav</h3>
            <p className="component-description">
              現在のページ位置を階層的に表示するナビゲーション
            </p>
          </div>
          <div className="component-demo">
            <div className="breadcrumb-demo">
              <div className="breadcrumb-items">
                <a href="#" className="breadcrumb-item">
                  <Icon name="home" className="w-4 h-4" />
                  <span>ホーム</span>
                </a>
                <span className="breadcrumb-separator">
                  <Icon name="chevron-right" className="w-4 h-4" />
                </span>
                <a href="#" className="breadcrumb-item">
                  <span>マスタ管理</span>
                </a>
                <span className="breadcrumb-separator">
                  <Icon name="chevron-right" className="w-4 h-4" />
                </span>
                <span className="breadcrumb-item current">
                  <span>ユーザー一覧</span>
                </span>
              </div>
            </div>
          </div>
          <div className="code-snippet">
            {`<BreadcrumbNav items={[
  { label: 'ホーム', href: '/', icon: 'home' },
  { label: 'マスタ管理', href: '/master' },
  { label: 'ユーザー一覧' }
]} />`}
          </div>
        </div>
      </div>

      {/* ドロップダウンメニュー */}
      <div className="component-section">
        <h2 className="section-title">ドロップダウンメニュー</h2>

        <div className="component-card">
          <div className="component-info">
            <h3 className="component-name">DropdownMenu</h3>
            <p className="component-description">
              基本的なドロップダウンコンポーネント
            </p>
          </div>
          <div className="component-demo">
            <div className="dropdown-controls">
              <label>表示位置:</label>
              <SecondaryButton
                onClick={() => setDropdownAlign('left')}
                className={`alignment-btn ${dropdownAlign === 'left' ? 'active' : ''}`}
              >
                左
              </SecondaryButton>
              <SecondaryButton
                onClick={() => setDropdownAlign('right')}
                className={`alignment-btn ${dropdownAlign === 'right' ? 'active' : ''}`}
              >
                右
              </SecondaryButton>
              <div className="dropdown-demo">
                <DropdownMenu
                  isOpen={showDropdown}
                  onToggle={() => setShowDropdown(!showDropdown)}
                  align={dropdownAlign}
                  trigger={
                    <SecondaryButton onClick={() => setShowDropdown(!showDropdown)}>
                      <Icon name="more-vertical" className="w-4 h-4" />
                    </SecondaryButton>
                  }
                >
                  <div style={{ padding: 'var(--spacing-2)' }}>
                    <div style={{ padding: 'var(--spacing-2)', cursor: 'pointer' }}>プロフィール</div>
                    <div style={{ padding: 'var(--spacing-2)', cursor: 'pointer' }}>設定</div>
                    <hr style={{ margin: 'var(--spacing-2) 0' }} />
                    <div style={{ padding: 'var(--spacing-2)', cursor: 'pointer', color: 'var(--color-danger-600)' }}>ログアウト</div>
                  </div>
                </DropdownMenu>
              </div>
            </div>
          </div>
          <div className="code-snippet">
            {`<DropdownMenu
  isOpen={isOpen}
  onToggle={onToggle}
  align="right"
  trigger={<button>メニュー</button>}
>
  <div>ドロップダウンの内容</div>
</DropdownMenu>`}
          </div>
        </div>
      </div>

      {/* ハンバーガーメニュー */}
      <div className="component-section">
        <h2 className="section-title">ハンバーガーメニュー</h2>

        <div className="component-card">
          <div className="component-info">
            <h3 className="component-name">HamburgerMenu</h3>
            <p className="component-description">
              モバイル向けのハンバーガーメニューボタン（3本線アイコン）
            </p>
          </div>
          <div className="component-demo">
            <div className="hamburger-demo">
              <div className="hamburger-header">
                <h4>サイトタイトル</h4>
                <button
                  className={`hamburger-button ${isHamburgerMenuOpen ? 'active' : ''}`}
                  onClick={toggleHamburgerMenu}
                  aria-label={isHamburgerMenuOpen ? 'メニューを閉じる' : 'メニューを開く'}
                >
                  <Icon name="menu" className="w-5 h-5 hamburger-icon" />
                </button>
              </div>

              {/* ハンバーガーメニュードロップダウン */}
              <div className={`hamburger-menu ${isHamburgerMenuOpen ? 'open' : ''}`}>
                <ul className="hamburger-nav-list">
                  {drawerNavItems.map((item, index) => (
                    <li key={item.path} className="hamburger-nav-item">
                      <a
                        href={item.path}
                        className={`hamburger-nav-link ${item.path === '/navigation' ? 'active' : ''}`}
                        onClick={(e) => {
                          e.preventDefault();
                          setIsHamburgerMenuOpen(false);
                        }}
                      >
                        <Icon name={item.icon} className="w-4 h-4" />
                        {item.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              <p style={{ color: 'var(--color-neutral-600)', fontSize: 'var(--font-size-sm)' }}>
                ハンバーガーメニューボタン - クリックして状態変化を確認
                <br />
                状態: {isHamburgerMenuOpen ? '開いている' : '閉じている'}
              </p>
            </div>
          </div>
          <div className="code-snippet">
            {`// 状態管理
const [isMenuOpen, setIsMenuOpen] = useState(false);

const toggleMenu = () => {
  setIsMenuOpen(!isMenuOpen);
};

// ハンバーガーボタンとメニュー
<div className="hamburger-demo">
  <button
    className={\`hamburger-button \${isMenuOpen ? 'active' : ''}\`}
    onClick={toggleMenu}
    aria-label={isMenuOpen ? 'メニューを閉じる' : 'メニューを開く'}
  >
    <Icon name="menu" className="hamburger-icon" />
  </button>

  {/* ドロップダウンメニュー */}
  <div className={\`hamburger-menu \${isMenuOpen ? 'open' : ''}\`}>
    <ul className="hamburger-nav-list">
      {navItems.map(item => (
        <li key={item.path} className="hamburger-nav-item">
          <a href={item.path} className="hamburger-nav-link">
            <Icon name={item.icon} />
            {item.label}
          </a>
        </li>
      ))}
    </ul>
  </div>
</div>`}
          </div>
        </div>
      </div>

      {/* ドロワーメニュー */}
      <div className="component-section">
        <h2 className="section-title">ドロワーメニュー</h2>

        <div className="component-card">
          <div className="component-info">
            <h3 className="component-name">DrawerMenu</h3>
            <p className="component-description">
              スライド式のナビゲーションドロワー（ハンバーガーメニューと組み合わせて使用）
            </p>
          </div>
          <div className="component-demo">
            <div className="hamburger-demo">
              <div className="hamburger-header">
                <h4>サイトタイトル</h4>
                <button
                  className="hamburger-button"
                  onClick={toggleDrawer}
                  aria-label="メニューを開く"
                >
                  <Icon name="menu" className="w-5 h-5" />
                </button>
              </div>
              <p style={{ color: 'var(--color-neutral-600)', fontSize: 'var(--font-size-sm)' }}>
                ハンバーガーメニューをクリックしてドロワーを開く
              </p>
            </div>

            {/* ドロワーオーバーレイ */}
            <div
              className={`drawer-overlay ${isDrawerOpen ? 'open' : ''}`}
              onClick={closeDrawer}
            />

            {/* ドロワーメニュー */}
            <div className={`drawer ${isDrawerOpen ? 'open' : ''}`}>
              <div className="drawer-header">
                <div className="drawer-title">ナビゲーション</div>
                <button
                  className="drawer-close"
                  onClick={closeDrawer}
                  aria-label="メニューを閉じる"
                >
                  <Icon name="close" className="w-4 h-4" />
                </button>
              </div>

              <nav className="drawer-nav">
                <ul className="drawer-nav-list">
                  {drawerNavItems.map((item, index) => (
                    <li key={item.path} className="drawer-nav-item">
                      <a
                        href={item.path}
                        className={`drawer-nav-link ${item.path === '/navigation' ? 'active' : ''}`}
                        onClick={(e) => {
                          e.preventDefault();
                          closeDrawer();
                        }}
                      >
                        <Icon name={item.icon} className="w-5 h-5" />
                        {item.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </nav>
            </div>
          </div>
          <div className="code-snippet">
            {`// ドロワーオーバーレイ
<div className="drawer-overlay" onClick={closeDrawer} />

// ドロワーメニュー
<div className={\`drawer \${isOpen ? 'open' : ''}\`}>
  <div className="drawer-header">
    <h3>ナビゲーション</h3>
    <button onClick={closeDrawer}>
      <Icon name="close" />
    </button>
  </div>
  <nav className="drawer-nav">
    <ul className="drawer-nav-list">
      {navItems.map(item => (
        <li key={item.path}>
          <a href={item.path} className="drawer-nav-link">
            <Icon name={item.icon} />
            {item.label}
          </a>
        </li>
      ))}
    </ul>
  </nav>
</div>`}
          </div>
        </div>
      </div>

      {/* アコーディオンナビゲーション */}
      <div className="component-section">
        <h2 className="section-title">アコーディオンナビゲーション</h2>

        <div className="component-card">
          <div className="component-info">
            <h3 className="component-name">Accordion</h3>
            <p className="component-description">
              展開・折りたたみ可能なナビゲーションコンテンツ（FAQやメニュー整理に最適）
            </p>
          </div>
          <div className="component-demo">
            <div className="accordion-demo-section">
              <div>
                <h4 style={{ marginBottom: 'var(--spacing-3)', fontSize: 'var(--font-size-sm)', fontWeight: 'var(--font-weight-medium)' }}>基本アコーディオン（単一展開）</h4>
                <Accordion
                  items={[
                    {
                      title: "よくある質問",
                      content: "このセクションでは、システムに関する最も頻繁に寄せられる質問とその回答をご覧いただけます。新しい質問がある場合は、サポートチームまでお気軽にお問い合わせください。"
                    },
                    {
                      title: "機能ガイド",
                      content: (
                        <div>
                          <p style={{ margin: '0 0 var(--spacing-2) 0' }}>• ダッシュボードの使い方</p>
                          <p style={{ margin: '0 0 var(--spacing-2) 0' }}>• データのインポート・エクスポート</p>
                          <p style={{ margin: '0 0 var(--spacing-2) 0' }}>• レポート作成手順</p>
                          <p style={{ margin: '0' }}>• ユーザー権限の管理</p>
                        </div>
                      )
                    },
                    {
                      title: "トラブルシューティング",
                      content: "システムで問題が発生した場合は、まずこちらのトラブルシューティングガイドをご確認ください。ログイン問題、パフォーマンスの問題、データ同期に関する解決策を提供しています。"
                    }
                  ]}
                  allowMultiple={false}
                />
              </div>

              <div>
                <h4 style={{ marginBottom: 'var(--spacing-3)', fontSize: 'var(--font-size-sm)', fontWeight: 'var(--font-weight-medium)' }}>複数展開可能アコーディオン</h4>
                <Accordion
                  items={[
                    {
                      title: "ナビゲーションメニュー",
                      content: (
                        <div>
                          <p style={{ margin: '0 0 var(--spacing-2) 0' }}>• ダッシュボード</p>
                          <p style={{ margin: '0 0 var(--spacing-2) 0' }}>• ユーザー管理</p>
                          <p style={{ margin: '0 0 var(--spacing-2) 0' }}>• レポート</p>
                          <p style={{ margin: '0' }}>• 設定</p>
                        </div>
                      )
                    },
                    {
                      title: "管理者メニュー",
                      content: (
                        <div>
                          <p style={{ margin: '0 0 var(--spacing-2) 0' }}>• システム設定</p>
                          <p style={{ margin: '0 0 var(--spacing-2) 0' }}>• ユーザー権限管理</p>
                          <p style={{ margin: '0' }}>• ログ管理</p>
                        </div>
                      )
                    }
                  ]}
                  allowMultiple={true}
                />
              </div>
            </div>
          </div>
          <div className="code-snippet">
            {`// 基本アコーディオン（単一展開）
<Accordion
  items={[
    { title: "項目1", content: "内容1" },
    { title: "項目2", content: "内容2" }
  ]}
  allowMultiple={false}
/>

// 複数展開可能アコーディオン
<Accordion
  items={[
    { title: "項目1", content: "内容1" },
    { title: "項目2", content: "内容2" }
  ]}
  allowMultiple={true}
/>`}
          </div>
        </div>
      </div>

      {/* 使用上の注意 */}
      <div className="component-section">
        <h2 className="section-title">使用上の注意</h2>
        <div className="component-card">
          <ul style={{ lineHeight: 'var(--line-height-relaxed)', color: 'var(--color-neutral-700)' }}>
            <li>タブナビゲーションは5つ以下のタブに制限することを推奨します</li>
            <li>パンくずは3〜4階層までが理想的です</li>
            <li>NavLinkは現在のページをactiveプロパティで示してください</li>
            <li>SidebarLinkはサイドバーメニュー内で使用してください</li>
            <li>ハンバーガーメニューは768px以下のモバイル画面で表示することが一般的です</li>
            <li>ハンバーガーメニューボタンには適切なaria-labelを設定してください</li>
            <li>ドロワーメニューは外部クリック、ESCキー、閉じるボタンで閉じられるようにしてください</li>
            <li>ドロワーメニューはハンバーガーメニューと組み合わせて使用します</li>
            <li>アコーディオンの単一展開モードはFAQやヘルプページに適しています</li>
            <li>アコーディオンの複数展開モードはナビゲーションメニューや設定画面に適しています</li>
            <li>アコーディオンは長いコンテンツを整理し、ユーザーが必要な情報のみを表示できます</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default NavigationPage;
