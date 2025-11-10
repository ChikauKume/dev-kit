import { Link } from '@inertiajs/react';
import BreadcrumbItem, { BreadcrumbItemData } from './BreadcrumbItem';

export interface BreadcrumbsData {
    items: BreadcrumbItemData[];
}

export interface BreadcrumbNavProps {
    breadcrumbs: BreadcrumbsData;
    className?: string;
    showHome?: boolean;
    separator?: string;
}

/**
 * パンくずナビゲーションコンポーネント
 * デスクトップ専用設計（レスポンシブ対応なし）
 * UI/UX画面設計標準準拠：高さ48px、背景色#ffffff
 */
export default function BreadcrumbNav({
    breadcrumbs,
    className = '',
    showHome = true,
    separator = '>'
}: BreadcrumbNavProps): React.ReactElement | null {
    // パンくずデータの検証
    if (!breadcrumbs || !breadcrumbs.items || breadcrumbs.items.length === 0) {
        return null;
    }

    const items = breadcrumbs.items;

    return (
        <nav
            className={`bg-white border-b border-gray-200 px-6 py-3 flex-shrink-0 h-12 ${className}`}
            aria-label="パンくずナビゲーション"
        >
            <div className="flex items-center space-x-2 text-sm text-gray-600 max-w-screen-xl mx-auto">
                {items.map((item, index) => (
                    <BreadcrumbItem
                        key={index}
                        item={item}
                        isLast={index === items.length - 1}
                        separator={separator}
                        showSeparator={index < items.length - 1}
                    />
                ))}
            </div>
        </nav>
    );
}
