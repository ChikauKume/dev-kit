import React, { useEffect } from 'react';
import { generateScrollbarStyles } from '../../config/tablePresets';

export interface Tab {
    key: string;
    label: string;
}

export interface TabNavigationConfig {
    // スクロールバースタイル設定
    scrollbar?: {
        thumbColor?: string;
        trackColor?: string;
        width?: string;
        height?: string;
    };
}

export interface TabNavigationProps {
    tabs: Tab[];
    activeTab: string;
    onChange: (tabKey: string) => void;
    className?: string;
    config?: TabNavigationConfig;
    integrated?: boolean; // テーブルと一体化するかどうか
}

/**
 * タブナビゲーションコンポーネント
 * 横スクロール対応のタブ切り替え機能を提供
 * テーブルと統一されたスクロールバースタイル
 */
export default function TabNavigation({
    tabs,
    activeTab,
    onChange,
    className = '',
    config = {},
    integrated = false
}: TabNavigationProps): React.ReactElement {
    // 統一スクロールバースタイルを生成
    const scrollbarStyles = generateScrollbarStyles(config as any, 'tab-navigation-scrollbar');

    // スタイルをheadに動的追加
    useEffect(() => {
        const styleId = 'tab-navigation-scrollbar-styles';
        let styleElement = document.getElementById(styleId);

        if (!styleElement) {
            styleElement = document.createElement('style');
            styleElement.id = styleId;
            document.head.appendChild(styleElement);
        }

        styleElement.textContent = scrollbarStyles;

        return () => {
            // クリーンアップは他のコンポーネントも使用している可能性があるため行わない
        };
    }, [scrollbarStyles]);

    return (
        <div className={`bg-white ${integrated ? '' : 'border-b border-gray-200'} ${className}`}>
                <div className="overflow-x-auto tab-navigation-scrollbar">
                    <nav className="flex space-x-8 px-6 min-w-max">
                        {tabs.map((tab) => (
                            <button
                                key={tab.key}
                                onClick={() => onChange(tab.key)}
                                className={`
                                    py-4 px-1 border-b-2 font-medium text-sm whitespace-nowrap transition-colors duration-200
                                    ${activeTab === tab.key
                                        ? 'border-blue-500 text-blue-600'
                                        : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                                    }
                                `}
                            >
                                {tab.label}
                            </button>
                        ))}
                    </nav>
                </div>
            </div>
    );
}
