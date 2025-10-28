import React, { useState } from 'react';
import PrimaryButton from '../../../components/buttons/PrimaryButton.jsx';
import SecondaryButton from '../../../components/buttons/SecondaryButton.jsx';
import DangerButton from '../../../components/buttons/DangerButton.jsx';
import Icon from '../../../components/icons/Icon.jsx';

const ButtonsPage: React.FC = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const handleLoadingDemo = (): void => {
    setIsLoading(true);
    setTimeout(() => setIsLoading(false), 2000);
  };

  return (
    <div className="buttons-page">
      <style>{`
        .buttons-page {
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
          display: flex;
          flex-wrap: wrap;
          gap: var(--spacing-3);
          align-items: center;
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

        .demo-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: var(--spacing-6);
        }
      `}</style>

      <div className="page-header">
        <h1 className="page-title">ボタンコンポーネント</h1>
        <p className="page-description">
          統一されたボタンコンポーネント群。
          プライマリ、セカンダリ、デンジャーの3つのバリエーションを提供します。
        </p>
      </div>

      <div className="component-section">
        <h2 className="section-title">ボタンコンポーネント</h2>

        <div className="demo-grid">
          {/* PrimaryButton */}
          <div className="component-card">
            <div className="component-info">
              <h3 className="component-name">PrimaryButton</h3>
              <p className="component-description">
                メインアクション用ボタン
              </p>
            </div>
            <div className="component-demo">
              <PrimaryButton onClick={() => alert('保存処理を実行します')}>
                保存する
              </PrimaryButton>
            </div>
            <div className="code-snippet">
              {`<PrimaryButton onClick={handleSave}>
  保存する
</PrimaryButton>`}
            </div>
          </div>

          {/* SecondaryButton */}
          <div className="component-card">
            <div className="component-info">
              <h3 className="component-name">SecondaryButton</h3>
              <p className="component-description">
                サブアクション用ボタン
              </p>
            </div>
            <div className="component-demo">
              <SecondaryButton onClick={() => alert('キャンセル処理を実行します')}>
                キャンセル
              </SecondaryButton>
            </div>
            <div className="code-snippet">
              {`<SecondaryButton onClick={handleCancel}>
  キャンセル
</SecondaryButton>`}
            </div>
          </div>

          {/* DangerButton */}
          <div className="component-card">
            <div className="component-info">
              <h3 className="component-name">DangerButton</h3>
              <p className="component-description">
                危険なアクション用ボタン
              </p>
            </div>
            <div className="component-demo">
              <DangerButton onClick={() => confirm('本当に削除しますか？')}>
                削除する
              </DangerButton>
            </div>
            <div className="code-snippet">
              {`<DangerButton onClick={handleDelete}>
  削除する
</DangerButton>`}
            </div>
          </div>

          {/* PrimaryButton (disabled) */}
          <div className="component-card">
            <div className="component-info">
              <h3 className="component-name">PrimaryButton (disabled)</h3>
              <p className="component-description">
                無効状態のボタン
              </p>
            </div>
            <div className="component-demo">
              <PrimaryButton disabled>
                無効なボタン
              </PrimaryButton>
            </div>
            <div className="code-snippet">
              {`<PrimaryButton disabled>
  無効なボタン
</PrimaryButton>`}
            </div>
          </div>

          {/* PrimaryButton (processing) */}
          <div className="component-card">
            <div className="component-info">
              <h3 className="component-name">PrimaryButton (processing)</h3>
              <p className="component-description">
                処理中状態のボタン
              </p>
            </div>
            <div className="component-demo">
              <PrimaryButton disabled onClick={handleLoadingDemo}>
                処理中...
              </PrimaryButton>
            </div>
            <div className="code-snippet">
              {`<PrimaryButton disabled>
  処理中...
</PrimaryButton>`}
            </div>
          </div>
        </div>
      </div>

      <div className="component-section">
        <h2 className="section-title">アイコン付きボタン例</h2>

        <div className="component-card">
          <div className="component-info">
            <h3 className="component-name">アイコン付きボタンの使用例</h3>
            <p className="component-description">
              ボタンにアイコンを組み合わせた実用的な例
            </p>
          </div>
          <div className="component-demo">
            <PrimaryButton>
              <Icon name="check" className="w-4 h-4 inline mr-2" />
              保存
            </PrimaryButton>
            <SecondaryButton>
              <Icon name="close" className="w-4 h-4 inline mr-2" />
              キャンセル
            </SecondaryButton>
            <DangerButton>
              <Icon name="delete" className="w-4 h-4 inline mr-2" />
              削除
            </DangerButton>
          </div>
          <div className="code-snippet">
            {`<PrimaryButton onClick={handleSave}>
  <Icon name="check" className="w-4 h-4 inline mr-2" />
  保存
</PrimaryButton>

<SecondaryButton onClick={handleCancel}>
  <Icon name="close" className="w-4 h-4 inline mr-2" />
  キャンセル
</SecondaryButton>

<DangerButton onClick={handleDelete}>
  <Icon name="delete" className="w-4 h-4 inline mr-2" />
  削除
</DangerButton>`}
          </div>
        </div>
      </div>

      <div className="component-section">
        <h2 className="section-title">使用方法</h2>
        <div className="component-card">
          <div className="component-info">
            <h3 className="component-name">インポートと基本的な使用方法</h3>
          </div>
          <div className="code-snippet">
            {`// インポート
import PrimaryButton from '../../../components/buttons/PrimaryButton.jsx';
import SecondaryButton from '../../../components/buttons/SecondaryButton.jsx';
import DangerButton from '../../../components/buttons/DangerButton.jsx';
import Icon from '../../../components/icons/Icon.jsx';

// 基本的な使用
function MyComponent() {
  const handleSave = () => {
    // 保存処理
  };

  const handleCancel = () => {
    // キャンセル処理
  };

  const handleDelete = () => {
    // 削除処理
  };

  return (
    <div>
      <PrimaryButton onClick={handleSave}>
        保存
      </PrimaryButton>

      <SecondaryButton onClick={handleCancel}>
        キャンセル
      </SecondaryButton>

      <DangerButton onClick={handleDelete}>
        削除
      </DangerButton>
    </div>
  );
}`}
          </div>
        </div>
      </div>

      <div className="component-section">
        <h2 className="section-title">使用上の注意</h2>
        <div className="component-card">
          <ul style={{ lineHeight: 'var(--line-height-relaxed)', color: 'var(--color-neutral-700)' }}>
            <li>PrimaryButtonは1ページに1つまでの使用を推奨します</li>
            <li>DangerButtonは削除や取り消し不可能なアクションに使用してください</li>
            <li>SecondaryButtonは補助的なアクションに適しています</li>
            <li>disabledプロパティでボタンを無効化できます</li>
            <li>アイコンと組み合わせることでより直感的なUIを作成できます</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ButtonsPage;
