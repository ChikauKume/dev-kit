import React from 'react';
import { Link } from 'react-router-dom';
import Icon from '../../components/icons/Icon';
import '../../styles/pages/TemplatePage.css';

const HomePage: React.FC = () => {
  return (
    <div className="pages-container">
      <div className="pages-header">
        <h1 className="pages-title">汎用画面テンプレート</h1>
        <p className="pages-subtitle">
          データ駆動型の画面を素早く構築できる汎用テンプレート集
        </p>
      </div>

      {/* 構成要素（基本パーツ） */}
      <section>
        <h2 style={{
          fontSize: 'var(--font-size-xl)',
          fontWeight: 'var(--font-weight-semibold)',
          color: 'var(--color-neutral-900)',
          marginBottom: 'var(--spacing-4)',
          paddingBottom: 'var(--spacing-2)',
          borderBottom: '2px solid var(--color-neutral-400)'
        }}>
          構成要素（基本パーツ）
        </h2>
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
          </Link>

          {/* パーツ一覧ページへのリンク */}
          <Link to="/components" className="page-card" style={{
            background: 'var(--color-neutral-50)',
            borderColor: 'var(--color-neutral-300)'
          }}>
            <div className="page-card-icon" style={{
              background: 'var(--color-neutral-200)'
            }}>
              <Icon name="cube" size="lg" />
            </div>
            <h2 className="page-card-title">すべての構成要素を見る</h2>
            <p className="page-card-description">
              基本パーツの一覧ページへ移動
            </p>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
