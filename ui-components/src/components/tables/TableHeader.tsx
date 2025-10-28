import React from 'react';
import { getColumnWidth } from '../../config/tablePresets';
import { TableColumn } from './TableBody';

export interface TableHeaderConfig {
    headerPadding?: string;
    headerBackground?: string;
    borders?: {
        header?: string;
        cell?: string;
        stickyCell?: string;
    };
    stickyFirstColumn?: boolean;
    columnWidths?: {
        [key: string]: string;
    };
}

export interface TableHeaderProps<T = any> {
    columns: TableColumn<T>[];
    showScrollbar: boolean;
    onScroll?: (event: React.UIEvent<HTMLDivElement>) => void;
    headerRef?: React.RefObject<HTMLDivElement>;
    className?: string;
    hasActions?: boolean;
    config?: TableHeaderConfig;
    integrated?: boolean; // ナビゲーションと一体化するかどうか
}

/**
 * テーブルヘッダーコンポーネント
 * 固定ヘッダーとスクロール同期機能を提供
 * プリセット設定に基づく完全設定駆動
 */
export default function TableHeader<T = any>({
    columns,
    showScrollbar,
    onScroll,
    headerRef,
    className = '',
    hasActions = false,
    config = {},
    integrated = false  // ナビゲーションと一体化するかどうか
}: TableHeaderProps<T>) {
    const {
        headerPadding = 'px-4 py-3',
        headerBackground = 'bg-gray-50',
        borders = {},
        stickyFirstColumn = false
    } = config;

    const headerBorder = integrated ? '' : (borders.header || 'border-b border-gray-200');
    const stickyBorder = borders.stickyCell || 'border-r border-gray-200';

    return (
        <div className={`flex-none ${headerBackground} border-b border-gray-200 ${className}`}>
            <div
                ref={headerRef}
                className="overflow-x-auto header-scrollbar-conditional"
                style={{ overflowY: showScrollbar ? 'scroll' : 'hidden' }}
                onScroll={onScroll}
            >
                <table className="min-w-full" style={{ tableLayout: 'fixed', width: '750px' }}>
                    <colgroup>
                        {columns.map((column) => {
                            const width = getColumnWidth(column, config);
                            // Tailwind CSSクラスで幅を指定する代わりにstyleで直接指定
                            return (
                                <col key={column.key} style={{ width, minWidth: width, maxWidth: width }} />
                            );
                        })}
                        {hasActions && (
                            <col style={{
                                width: config.columnWidths?.actions || '80px',
                                minWidth: config.columnWidths?.actions || '80px',
                                maxWidth: config.columnWidths?.actions || '80px'
                            }} />
                        )}
                    </colgroup>
                    <thead>
                        <tr>
                            {columns.map((column, index) => {
                                const isFirstColumn = index === 0;
                                const isLastColumn = index === columns.length - 1;
                                const shouldStick = column.sticky || (stickyFirstColumn && isFirstColumn);
                                // 最後の列かつアクション列がない場合は右ボーダーを削除
                                const shouldShowRightBorder = !(isLastColumn && !hasActions);

                                return (
                                    <th
                                        key={column.key}
                                        className={`
                                            ${headerPadding} text-xs font-medium text-gray-500 uppercase tracking-wider
                                            ${column.align === 'center' ? 'text-center' : ''}
                                            ${column.align === 'right' ? 'text-right' : ''}
                                            ${column.align === 'left' || !column.align ? 'text-left' : ''}
                                            ${shouldStick ? `sticky left-0 bg-white ${stickyBorder}` : shouldShowRightBorder ? 'border-r border-gray-200' : ''}
                                        `}
                                    >
                                        {column.label}
                                    </th>
                                );
                            })}
                            {hasActions && (
                                <th
                                    className={`${headerPadding} text-center text-xs font-medium text-gray-500 uppercase tracking-wider`}
                                    style={{
                                        width: config.columnWidths?.actions || '80px',
                                        minWidth: config.columnWidths?.actions || '80px',
                                        maxWidth: config.columnWidths?.actions || '80px'
                                    }}
                                >
                                    操作
                                </th>
                            )}
                        </tr>
                    </thead>
                </table>
            </div>
        </div>
    );
}
