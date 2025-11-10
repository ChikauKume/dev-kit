import React from 'react';
import Icon, { IconName } from '../icons/Icon';

export interface BreadcrumbItemMetadata {
    icon?: string;
}

export interface BreadcrumbItemData {
    label: string;
    url?: string;
    isActive?: boolean;
    metadata?: BreadcrumbItemMetadata;
}

export interface BreadcrumbItemProps {
    item: BreadcrumbItemData;
    isLast: boolean;
    separator: string;
    showSeparator?: boolean;
}

/**
 * パンくずアイテムコンポーネント
 * 個別のパンくず要素を表示
 */
export default function BreadcrumbItem({
    item,
    isLast,
    separator,
    showSeparator = true
}: BreadcrumbItemProps): React.ReactElement {
    const renderIcon = (): React.ReactElement | null => {
        const iconName = item.metadata?.icon;

        if (!iconName) return null;

        // アイコン名のマッピング（必要に応じて）
        const iconMapping: Record<string, string> = {
            'admin': 'settings',
            'permissions': 'organization',
            // その他は直接使用（storageは既にIconコンポーネントに存在）
        };

        const mappedIconName = (iconMapping[iconName] || iconName) as IconName;

        return <Icon name={mappedIconName} className="w-4 h-4" />;
    };

    const renderSeparator = (): React.ReactElement | null => {
        if (!showSeparator) return null;

        return <Icon name="chevron-right" className="w-3 h-3 text-gray-400 flex-shrink-0" />;
    };

    const renderContent = (): React.ReactElement => {
        const content = (
            <span className="flex items-center space-x-1">
                {renderIcon()}
                <span className="whitespace-nowrap">{item.label}</span>
            </span>
        );

        // アクティブ（現在ページ）の場合はリンクなし
        if (item.isActive || !item.url) {
            return (
                <span className="text-gray-900 font-medium" aria-current="page">
                    {content}
                </span>
            );
        }

        // リンク付きの場合
        return (
            <a
                href={item.url}
                className="text-gray-600 transition-colors duration-150"
                style={{
                    ':hover': { color: 'rgb(21, 52, 109)' }
                } as React.CSSProperties}
                onMouseEnter={(e) => (e.target as HTMLAnchorElement).style.color = 'rgb(21, 52, 109)'}
                onMouseLeave={(e) => (e.target as HTMLAnchorElement).style.color = ''}
            >
                {content}
            </a>
        );
    };

    return (
        <div className="flex items-center space-x-2">
            {renderContent()}
            {renderSeparator()}
        </div>
    );
}
