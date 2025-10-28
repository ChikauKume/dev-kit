import React from 'react';
import { Link } from 'react-router-dom';
import Icon from '../../components/icons/Icon';
import '../../styles/pages/TemplatePage.css';

const ComponentsPage: React.FC = () => {
  return (
    <div className="pages-container">
      <div className="pages-header">
        <h1 className="pages-title">構成要素 - 基本パーツカタログ</h1>
        <p className="pages-subtitle">
          汎用テンプレートで使用される基本的なUIコンポーネント
        </p>
      </div>

      <div className="pages-grid">
        {/* ボタン */}
        <Link to="/buttons" className="page-card">
          <div className="page-card-icon">
            <Icon name="plus-circle" size="lg" />
          </div>
          <h2 className="page-card-title">ボタン</h2>
          <p className="page-card-description">
            様々なスタイルとサイズのボタンコンポーネント
          </p>
          <div style={{
            marginTop: 'var(--spacing-3)',
            display: 'flex',
            flexWrap: 'wrap',
            gap: 'var(--spacing-2)'
          }}>
            <span style={{
              fontSize: 'var(--font-size-xs)',
              padding: 'var(--spacing-1) var(--spacing-2)',
              background: 'var(--color-neutral-100)',
              borderRadius: 'var(--radius-sm)',
              color: 'var(--color-neutral-700)'
            }}>Primary</span>
            <span style={{
              fontSize: 'var(--font-size-xs)',
              padding: 'var(--spacing-1) var(--spacing-2)',
              background: 'var(--color-neutral-100)',
              borderRadius: 'var(--radius-sm)',
              color: 'var(--color-neutral-700)'
            }}>Secondary</span>
            <span style={{
              fontSize: 'var(--font-size-xs)',
              padding: 'var(--spacing-1) var(--spacing-2)',
              background: 'var(--color-neutral-100)',
              borderRadius: 'var(--radius-sm)',
              color: 'var(--color-neutral-700)'
            }}>Danger</span>
          </div>
        </Link>

        {/* フォーム */}
        <Link to="/forms" className="page-card">
          <div className="page-card-icon">
            <Icon name="edit" size="lg" />
          </div>
          <h2 className="page-card-title">フォーム</h2>
          <p className="page-card-description">
            入力フィールド、セレクト、チェックボックスなど
          </p>
          <div style={{
            marginTop: 'var(--spacing-3)',
            display: 'flex',
            flexWrap: 'wrap',
            gap: 'var(--spacing-2)'
          }}>
            <span style={{
              fontSize: 'var(--font-size-xs)',
              padding: 'var(--spacing-1) var(--spacing-2)',
              background: 'var(--color-neutral-100)',
              borderRadius: 'var(--radius-sm)',
              color: 'var(--color-neutral-700)'
            }}>Input</span>
            <span style={{
              fontSize: 'var(--font-size-xs)',
              padding: 'var(--spacing-1) var(--spacing-2)',
              background: 'var(--color-neutral-100)',
              borderRadius: 'var(--radius-sm)',
              color: 'var(--color-neutral-700)'
            }}>Select</span>
            <span style={{
              fontSize: 'var(--font-size-xs)',
              padding: 'var(--spacing-1) var(--spacing-2)',
              background: 'var(--color-neutral-100)',
              borderRadius: 'var(--radius-sm)',
              color: 'var(--color-neutral-700)'
            }}>Checkbox</span>
          </div>
        </Link>

        {/* メッセージ */}
        <Link to="/messages" className="page-card">
          <div className="page-card-icon">
            <Icon name="comment" size="lg" />
          </div>
          <h2 className="page-card-title">メッセージ</h2>
          <p className="page-card-description">
            アラート、通知、モーダルなどのメッセージコンポーネント
          </p>
          <div style={{
            marginTop: 'var(--spacing-3)',
            display: 'flex',
            flexWrap: 'wrap',
            gap: 'var(--spacing-2)'
          }}>
            <span style={{
              fontSize: 'var(--font-size-xs)',
              padding: 'var(--spacing-1) var(--spacing-2)',
              background: 'var(--color-neutral-100)',
              borderRadius: 'var(--radius-sm)',
              color: 'var(--color-neutral-700)'
            }}>Alert</span>
            <span style={{
              fontSize: 'var(--font-size-xs)',
              padding: 'var(--spacing-1) var(--spacing-2)',
              background: 'var(--color-neutral-100)',
              borderRadius: 'var(--radius-sm)',
              color: 'var(--color-neutral-700)'
            }}>Modal</span>
            <span style={{
              fontSize: 'var(--font-size-xs)',
              padding: 'var(--spacing-1) var(--spacing-2)',
              background: 'var(--color-neutral-100)',
              borderRadius: 'var(--radius-sm)',
              color: 'var(--color-neutral-700)'
            }}>Toast</span>
          </div>
        </Link>

        {/* テーブル */}
        <Link to="/tables" className="page-card">
          <div className="page-card-icon">
            <Icon name="table" size="lg" />
          </div>
          <h2 className="page-card-title">テーブル</h2>
          <p className="page-card-description">
            データ表示用のテーブルコンポーネント
          </p>
          <div style={{
            marginTop: 'var(--spacing-3)',
            display: 'flex',
            flexWrap: 'wrap',
            gap: 'var(--spacing-2)'
          }}>
            <span style={{
              fontSize: 'var(--font-size-xs)',
              padding: 'var(--spacing-1) var(--spacing-2)',
              background: 'var(--color-neutral-100)',
              borderRadius: 'var(--radius-sm)',
              color: 'var(--color-neutral-700)'
            }}>DataTable</span>
            <span style={{
              fontSize: 'var(--font-size-xs)',
              padding: 'var(--spacing-1) var(--spacing-2)',
              background: 'var(--color-neutral-100)',
              borderRadius: 'var(--radius-sm)',
              color: 'var(--color-neutral-700)'
            }}>Pagination</span>
          </div>
        </Link>

        {/* ナビゲーション */}
        <Link to="/navigation" className="page-card">
          <div className="page-card-icon">
            <Icon name="menu" size="lg" />
          </div>
          <h2 className="page-card-title">ナビゲーション</h2>
          <p className="page-card-description">
            タブ、ブレッドクラム、ページネーションなど
          </p>
          <div style={{
            marginTop: 'var(--spacing-3)',
            display: 'flex',
            flexWrap: 'wrap',
            gap: 'var(--spacing-2)'
          }}>
            <span style={{
              fontSize: 'var(--font-size-xs)',
              padding: 'var(--spacing-1) var(--spacing-2)',
              background: 'var(--color-neutral-100)',
              borderRadius: 'var(--radius-sm)',
              color: 'var(--color-neutral-700)'
            }}>Tab</span>
            <span style={{
              fontSize: 'var(--font-size-xs)',
              padding: 'var(--spacing-1) var(--spacing-2)',
              background: 'var(--color-neutral-100)',
              borderRadius: 'var(--radius-sm)',
              color: 'var(--color-neutral-700)'
            }}>Breadcrumb</span>
            <span style={{
              fontSize: 'var(--font-size-xs)',
              padding: 'var(--spacing-1) var(--spacing-2)',
              background: 'var(--color-neutral-100)',
              borderRadius: 'var(--radius-sm)',
              color: 'var(--color-neutral-700)'
            }}>Dropdown</span>
          </div>
        </Link>

        {/* レイアウト */}
        <Link to="/layout" className="page-card">
          <div className="page-card-icon">
            <Icon name="grid" size="lg" />
          </div>
          <h2 className="page-card-title">レイアウト</h2>
          <p className="page-card-description">
            カード、グリッド、サイドバーなどのレイアウトコンポーネント
          </p>
          <div style={{
            marginTop: 'var(--spacing-3)',
            display: 'flex',
            flexWrap: 'wrap',
            gap: 'var(--spacing-2)'
          }}>
            <span style={{
              fontSize: 'var(--font-size-xs)',
              padding: 'var(--spacing-1) var(--spacing-2)',
              background: 'var(--color-neutral-100)',
              borderRadius: 'var(--radius-sm)',
              color: 'var(--color-neutral-700)'
            }}>Card</span>
            <span style={{
              fontSize: 'var(--font-size-xs)',
              padding: 'var(--spacing-1) var(--spacing-2)',
              background: 'var(--color-neutral-100)',
              borderRadius: 'var(--radius-sm)',
              color: 'var(--color-neutral-700)'
            }}>Grid</span>
            <span style={{
              fontSize: 'var(--font-size-xs)',
              padding: 'var(--spacing-1) var(--spacing-2)',
              background: 'var(--color-neutral-100)',
              borderRadius: 'var(--radius-sm)',
              color: 'var(--color-neutral-700)'
            }}>Sidebar</span>
          </div>
        </Link>

        {/* アイコン */}
        <Link to="/icons" className="page-card">
          <div className="page-card-icon">
            <Icon name="star" size="lg" />
          </div>
          <h2 className="page-card-title">アイコン</h2>
          <p className="page-card-description">
            200個以上のSVGアイコンライブラリ
          </p>
          <div style={{
            marginTop: 'var(--spacing-3)',
            display: 'flex',
            flexWrap: 'wrap',
            gap: 'var(--spacing-2)'
          }}>
            <span style={{
              fontSize: 'var(--font-size-xs)',
              padding: 'var(--spacing-1) var(--spacing-2)',
              background: 'var(--color-neutral-100)',
              borderRadius: 'var(--radius-sm)',
              color: 'var(--color-neutral-700)'
            }}>200+ Icons</span>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default ComponentsPage;
