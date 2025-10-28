import React, { useState } from 'react';
import Icon from '../../../components/icons/Icon';

/**
 * アイコン一覧ページ
 * Laravel system/icons ページと同等の機能を提供
 */
const IconsPage: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [copiedIcon, setCopiedIcon] = useState<string>('');

  // アイコンの定義とカテゴリ分類
  const iconCategories: Record<string, string[]> = {
    'navigation': ['dashboard', 'home', 'menu', 'chevron-up', 'chevron-down', 'chevron-left', 'chevron-right', 'arrow-up', 'arrow-down', 'arrow-left', 'arrow-right', 'arrow-circle-up', 'arrow-circle-down', 'arrow-circle-left', 'arrow-circle-right', 'navigation'],
    'user': ['users', 'user', 'user-plus', 'user-shield', 'user-cog', 'user-group', 'assignments', 'people-group', 'users-line', 'network-wired'],
    'organization': ['building', 'building-office', 'building-user', 'department', 'organization', 'sitemap', 'diagram-project'],
    'security': ['shield', 'shield-check', 'lock', 'unlock', 'key', 'hierarchy'],
    'data': ['table-cells', 'table', 'folder', 'folder-open', 'file', 'document', 'clipboard', 'clipboard-list', 'storage', 'database', 'cog'],
    'business': ['project', 'code', 'briefcase', 'cube', 'product', 'tasks', 'file-contract', 'handshake'],
    'analytics': ['chart', 'analytics', 'chart-bar', 'chart-line', 'chart-pie'],
    'system': ['settings', 'cog', 'cogs', 'wrench', 'tools', 'hammer', 'screwdriver', 'sliders'],
    'finance': ['currency-yen', 'price', 'wallet', 'credit-card', 'receipt'],
    'notification': ['bell', 'notification', 'inbox'],
    'feedback': ['check', 'check-circle', 'check-double', 'close', 'times', 'warning', 'exclamation', 'info', 'success', 'error', 'question', 'plus-circle', 'minus-circle'],
    'action': ['plus', 'minus', 'search', 'filter', 'edit', 'pencil', 'pen', 'delete', 'list', 'star', 'eye', 'eye-off', 'refresh', 'undo', 'redo', 'spinner'],
    'communication': ['envelope', 'mail', 'comment', 'comments', 'message', 'paper-plane', 'phone'],
    'media': ['video', 'music', 'photo', 'image', 'film', 'microphone', 'camera'],
    'shopping': ['shopping-cart', 'cart', 'tag', 'tags'],
    'social': ['share', 'share-alt', 'thumbs-up', 'thumbs-down', 'flag', 'heart', 'retweet', 'bookmark'],
    'time': ['calendar', 'calendar-alt', 'calendar-check', 'clock', 'stopwatch', 'hourglass', 'history'],
    'location': ['location', 'map', 'map-marker', 'compass', 'globe'],
    'weather': ['sun', 'moon', 'cloud', 'cloud-rain', 'bolt'],
    'device': ['laptop', 'desktop', 'tablet', 'mobile-alt', 'device-mobile', 'keyboard', 'mouse', 'print', 'wifi', 'bluetooth'],
    'ui': ['bars', 'ellipsis', 'ellipsis-v', 'toggle-on', 'toggle-off', 'expand', 'compress', 'grid', 'list'],
    'education': ['book', 'graduation-cap', 'bookmark-alt'],
    'health': ['heart-pulse', 'hospital', 'pills', 'syringe', 'stethoscope'],
    'transport': ['car', 'plane', 'train', 'ship', 'bicycle', 'truck'],
    'food': ['coffee', 'pizza', 'utensils', 'wine-glass'],
    'gaming': ['gamepad', 'dice', 'trophy', 'medal', 'crown', 'play', 'pause', 'stop']
  };

  // 全アイコンのリスト
  const allIcons: string[] = Object.values(iconCategories).flat();

  // カテゴリ名の日本語マッピング
  const categoryLabels: Record<string, string> = {
    'all': '全て',
    'navigation': 'ナビゲーション',
    'user': 'ユーザー',
    'organization': '組織・建物',
    'security': 'セキュリティ',
    'data': 'ファイル・データ',
    'business': 'ビジネス',
    'analytics': '分析・グラフ',
    'system': 'システム・設定',
    'finance': '金融・決済',
    'notification': '通知',
    'feedback': 'フィードバック',
    'action': 'アクション',
    'communication': 'コミュニケーション',
    'media': 'メディア',
    'shopping': 'ショッピング',
    'social': 'ソーシャル',
    'time': '時間・カレンダー',
    'location': '位置情報・地図',
    'weather': '天気',
    'device': 'デバイス',
    'ui': 'UI制御',
    'education': '教育',
    'health': '医療・健康',
    'transport': '交通',
    'food': '飲食',
    'gaming': 'ゲーム・エンタメ'
  };

  // フィルタリング済みアイコンのリスト
  const filteredIcons = allIcons.filter(iconName => {
    const matchesSearch = iconName.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'all' ||
      iconCategories[selectedCategory]?.includes(iconName);
    return matchesSearch && matchesCategory;
  });

  // カテゴリーごとにグループ化されたアイコン
  const groupedIcons: Record<string, string[]> = {};

  if (selectedCategory === 'all') {
    // 全カテゴリー表示の場合、各カテゴリーでフィルタリング
    Object.entries(iconCategories).forEach(([category, icons]) => {
      const filtered = icons.filter(iconName =>
        iconName.toLowerCase().includes(searchTerm.toLowerCase())
      );
      if (filtered.length > 0) {
        groupedIcons[category] = filtered;
      }
    });
  } else {
    // 特定カテゴリー表示の場合
    groupedIcons[selectedCategory] = filteredIcons;
  }

  // アイコンクリック時のコードコピー機能
  const handleIconClick = async (iconName: string): Promise<void> => {
    const codeText = `<Icon name="${iconName}" className="w-5 h-5" />`;
    try {
      await navigator.clipboard.writeText(codeText);
      setCopiedIcon(iconName);
      setTimeout(() => setCopiedIcon(''), 2000);
    } catch (err) {
      console.error('コピーに失敗しました:', err);
      // Fallback for older browsers
      const textArea = document.createElement('textarea');
      textArea.value = codeText;
      document.body.appendChild(textArea);
      textArea.select();
      document.execCommand('copy');
      document.body.removeChild(textArea);
      setCopiedIcon(iconName);
      setTimeout(() => setCopiedIcon(''), 2000);
    }
  };

  return (
    <div className="icons-page">
      <style jsx>{`
        .icons-page {
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

        .controls {
          display: grid;
          grid-template-columns: 1fr auto;
          gap: var(--spacing-4);
          margin-bottom: var(--spacing-6);
          padding: var(--spacing-6);
          background: var(--color-neutral-white);
          border: 1px solid var(--color-neutral-200);
          border-radius: var(--radius-lg);
        }

        .search-control {
          display: flex;
          flex-direction: column;
        }

        .category-control {
          display: flex;
          flex-direction: column;
          min-width: 200px;
        }

        .control-label {
          font-weight: var(--font-weight-medium);
          color: var(--color-neutral-700);
          margin-bottom: var(--spacing-2);
        }

        .search-input {
          padding: var(--spacing-3) var(--spacing-4);
          border: 1px solid var(--color-neutral-300);
          border-radius: var(--radius-md);
          font-size: var(--font-size-base);
          transition: border-color 0.2s, box-shadow 0.2s;
        }

        .search-input:focus {
          outline: none;
          border-color: var(--color-primary-500);
          box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.1);
        }

        .category-select {
          padding: var(--spacing-3) var(--spacing-4);
          border: 1px solid var(--color-neutral-300);
          border-radius: var(--radius-md);
          font-size: var(--font-size-base);
          background: white;
          cursor: pointer;
          transition: border-color 0.2s, box-shadow 0.2s;
        }

        .category-select:focus {
          outline: none;
          border-color: var(--color-primary-500);
          box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.1);
        }

        .results-count {
          color: var(--color-neutral-600);
          margin-bottom: var(--spacing-4);
          font-size: var(--font-size-sm);
        }

        .category-section {
          margin-bottom: var(--spacing-8);
        }

        .category-header {
          font-size: var(--font-size-lg);
          font-weight: var(--font-weight-semibold);
          color: var(--color-neutral-900);
          margin-bottom: var(--spacing-4);
          padding-bottom: var(--spacing-2);
          border-bottom: 2px solid var(--color-primary-500);
        }

        .icons-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
          gap: var(--spacing-4);
          margin-bottom: var(--spacing-6);
        }

        .icon-item {
          display: flex;
          flex-direction: column;
          align-items: center;
          padding: var(--spacing-4);
          background: var(--color-neutral-white);
          border: 1px solid var(--color-neutral-200);
          border-radius: var(--radius-lg);
          cursor: pointer;
          transition: all 0.2s;
          position: relative;
        }

        .icon-item:hover {
          border-color: var(--color-primary-300);
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
          transform: translateY(-2px);
        }

        .icon-display {
          margin-bottom: var(--spacing-3);
          color: var(--color-neutral-700);
        }

        .icon-name {
          font-size: var(--font-size-sm);
          font-weight: var(--font-weight-medium);
          color: var(--color-neutral-900);
          text-align: center;
        }

        .copied-indicator {
          position: absolute;
          top: -8px;
          right: -8px;
          background: var(--color-success-500);
          color: white;
          font-size: var(--font-size-xs);
          padding: var(--spacing-1) var(--spacing-2);
          border-radius: var(--radius-full);
          animation: fadeIn 0.2s ease-out;
        }

        @keyframes fadeIn {
          from { opacity: 0; transform: scale(0.8); }
          to { opacity: 1; transform: scale(1); }
        }

        .usage-section {
          background: var(--color-neutral-white);
          border: 1px solid var(--color-neutral-200);
          border-radius: var(--radius-lg);
          padding: var(--spacing-6);
        }

        .usage-title {
          font-size: var(--font-size-xl);
          font-weight: var(--font-weight-semibold);
          color: var(--color-neutral-900);
          margin-bottom: var(--spacing-4);
        }

        .usage-steps {
          list-style: none;
          padding: 0;
        }

        .usage-step {
          margin-bottom: var(--spacing-3);
          font-size: var(--font-size-sm);
          color: var(--color-neutral-700);
        }

        .usage-code {
          background: var(--color-neutral-100);
          color: var(--color-primary-700);
          padding: var(--spacing-1) var(--spacing-2);
          border-radius: var(--radius-sm);
          font-family: var(--font-family-mono);
          font-size: var(--font-size-sm);
          margin-left: var(--spacing-2);
        }

        @media (max-width: 768px) {
          .controls {
            grid-template-columns: 1fr;
          }

          .icons-grid {
            grid-template-columns: repeat(auto-fill, minmax(120px, 1fr));
            gap: var(--spacing-3);
          }
        }
      `}</style>

      <div className="page-header">
        <h1 className="page-title">SVGアイコン一覧</h1>
        <p className="page-description">
          システム全体で使用する統一されたSVGアイコンライブラリです。
          アイコンをクリックするとReactコンポーネントのコードがコピーされます。
        </p>
      </div>

      <div className="controls">
        <div className="search-control">
          <label className="control-label">アイコン検索</label>
          <input
            type="text"
            className="search-input"
            placeholder="アイコン名で検索..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        <div className="category-control">
          <label className="control-label">カテゴリ</label>
          <select
            className="category-select"
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
          >
            {Object.entries(categoryLabels).map(([key, label]) => (
              <option key={key} value={key}>{label}</option>
            ))}
          </select>
        </div>
      </div>

      <div className="results-count">
        {filteredIcons.length}個のアイコンが見つかりました
      </div>

      {Object.entries(groupedIcons).map(([category, icons]) => (
        <div key={category} className="category-section">
          <h2 className="category-header">
            {categoryLabels[category] || category}
            <span style={{ marginLeft: 'var(--spacing-2)', fontSize: 'var(--font-size-sm)', color: 'var(--color-neutral-500)' }}>
              ({icons.length})
            </span>
          </h2>
          <div className="icons-grid">
            {icons.map((iconName) => (
              <div
                key={iconName}
                className="icon-item"
                onClick={() => handleIconClick(iconName)}
                title={`${iconName} - クリックでコードをコピー`}
              >
                <div className="icon-display">
                  <Icon name={iconName} className="w-8 h-8" />
                </div>
                <div className="icon-name">{iconName}</div>
                {copiedIcon === iconName && (
                  <div className="copied-indicator">コピー済み</div>
                )}
              </div>
            ))}
          </div>
        </div>
      ))}

      <div className="usage-section">
        <h3 className="usage-title">使用方法</h3>
        <ul className="usage-steps">
          <li className="usage-step">
            <strong>1. インポート:</strong>
            <code className="usage-code">import Icon from '../../../components/icons/Icon.jsx';</code>
          </li>
          <li className="usage-step">
            <strong>2. 基本的な使用:</strong>
            <code className="usage-code">&lt;Icon name="dashboard" className="w-5 h-5" /&gt;</code>
          </li>
          <li className="usage-step">
            <strong>3. カスタマイズ:</strong>
            <code className="usage-code">&lt;Icon name="users" className="w-8 h-8 text-blue-600" /&gt;</code>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default IconsPage;
