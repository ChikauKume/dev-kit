import React from 'react';
import Icon from '../../../components/icons/Icon';
import { useViewMode } from '../../../hooks/useViewMode';

interface MaintenancePageProps {
  // This component is standalone and doesn't require any props
  // Props interface is provided for consistency with other template pages
  hideNavigation?: boolean;
}

const MaintenancePage: React.FC<MaintenancePageProps> = ({ hideNavigation }) => {
  const [viewMode, setViewMode] = useViewMode();
  return (
    <div className={viewMode === 'sp' ? 'force-mobile' : ''}>
      <div className="login-screen">
        <div className="login-card" style={{ maxWidth: '500px' }}>
        <div style={{ marginBottom: 'var(--spacing-6)' }}>
          <div style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: 'var(--spacing-3)',
            marginBottom: 'var(--spacing-3)'
          }}>
            <Icon name="cog" style={{ width: '32px', height: '32px', color: 'rgb(21, 52, 109)' }} />
            <h2 style={{
              fontSize: 'var(--font-size-lg)',
              fontWeight: 'var(--font-weight-bold)',
              color: 'var(--color-neutral-900)',
              margin: 0
            }}>
              メンテナンス中
            </h2>
          </div>
          <p className="login-subtitle" style={{ textAlign: 'left', marginBottom: 'var(--spacing-3)' }}>
            現在、システムメンテナンスを実施しております。
          </p>
          <p className="login-subtitle" style={{ textAlign: 'left' }}>
            ご不便をおかけして申し訳ございませんが、しばらくお待ちください。
          </p>
        </div>

        <div style={{
          background: 'var(--color-neutral-50)',
          padding: 'var(--spacing-4)',
          borderRadius: 0,
          marginBottom: 'var(--spacing-4)'
        }}>
          <div style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            fontSize: 'var(--font-size-sm)',
            color: 'var(--color-neutral-700)',
            marginBottom: 'var(--spacing-2)'
          }}>
            <span style={{ fontWeight: 'var(--font-weight-medium)' }}>メンテナンス期間</span>
          </div>
          <div style={{
            fontSize: 'var(--font-size-sm)',
            color: 'var(--color-neutral-900)'
          }}>
            2024年10月14日 2:00 〜 6:00（予定）
          </div>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--spacing-3)' }}>
          <button
            type="button"
            className="login-button"
            onClick={() => window.location.reload()}
            style={{ margin: 0 }}
          >
            ページを更新
          </button>
        </div>
        </div>
      </div>
    </div>
  );
};

export default MaintenancePage;
