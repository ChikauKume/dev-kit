import React from 'react';
import { getColumnWidth } from '../../config/tablePresets';

export interface TableColumn<T = any> {
    key: string;
    label?: string;
    width?: string;
    align?: 'left' | 'center' | 'right';
    sticky?: boolean;
}

export interface TableBodyConfig {
    padding?: string;
    borders?: {
        header?: string;
        cell?: string;
        stickyCell?: string;
    };
    spacing?: {
        cellGap?: string;
        rowGap?: string;
    };
    stickyFirstColumn?: boolean;
    hoverEffect?: string;
    scrollHeight?: string;
    dynamicHeight?: string | null;
    needsScroll?: boolean | null;
    columnWidths?: {
        [key: string]: string;
    };
}

export interface TableBodyProps<T = any> {
    data: T[] | Record<string, any>;
    columns: TableColumn<T>[];
    renderCell: (value: any, column: TableColumn<T>, row: T) => React.ReactNode;
    onScroll?: (event: React.UIEvent<HTMLDivElement>) => void;
    bodyRef?: React.RefObject<HTMLDivElement>;
    className?: string;
    rowKey?: string | null;
    renderActions?: ((row: T) => React.ReactNode) | null;
    config?: TableBodyConfig;
}

/**
 * テーブルボディコンポーネント
 * スクロール可能なテーブルデータを表示
 * プリセット設定に基づく完全設定駆動
 */
export default function TableBody<T = any>({
    data,
    columns,
    renderCell,
    onScroll,
    bodyRef,
    className = '',
    rowKey = null,
    renderActions = null,
    config = {}
}: TableBodyProps<T>) {
    // dataが配列でない場合の処理
    const rows: any[] = Array.isArray(data) ? data : Object.entries(data).map(([key, value]) => ({
        key,
        ...value
    }));

    const {
        padding = 'px-4 py-3',
        borders = {},
        spacing = {},
        stickyFirstColumn = false,
        hoverEffect = 'hover:bg-gray-50',
        scrollHeight = '400px',
        dynamicHeight = null,
        needsScroll = null
    } = config;

    const rowGap = spacing.rowGap || 'divide-y divide-gray-200';
    const stickyBorder = borders.stickyCell || 'border-r border-gray-200';

    return (
        <div
            ref={bodyRef}
            className={`flex-1 ${needsScroll ? 'overflow-y-scroll overflow-x-auto' : 'overflow-y-hidden overflow-x-auto'} table-body-scrollbar ${className}`}
            style={needsScroll ? { maxHeight: dynamicHeight || scrollHeight } : { height: dynamicHeight || 'auto' }}
            onScroll={onScroll}
        >
            <div className="overflow-x-auto">
                <table className="min-w-full bg-white" style={{ tableLayout: 'fixed', width: '750px' }}>
                    <colgroup>
                        {columns.map((column) => {
                            const width = getColumnWidth(column, config);
                            // Tailwind CSSクラスで幅を指定する代わりにstyleで直接指定
                            return (
                                <col key={column.key} style={{ width, minWidth: width, maxWidth: width }} />
                            );
                        })}
                        {renderActions && (
                            <col style={{
                                width: config.columnWidths?.actions || '80px',
                                minWidth: config.columnWidths?.actions || '80px',
                                maxWidth: config.columnWidths?.actions || '80px'
                            }} />
                        )}
                    </colgroup>
                    <tbody className={rowGap}>
                        {rows.map((row, rowIndex) => {
                            let key: string | number;
                            if (rowKey) {
                                // rowKeyが"user"の場合は user.id を使用
                                if (rowKey === 'user' && row.user?.id) {
                                    key = row.user.id;
                                } else {
                                    key = row[rowKey];
                                }
                            } else {
                                key = row.key || rowIndex;
                            }
                            return (
                                <tr key={key} className={hoverEffect}>
                                    {columns.map((column, columnIndex) => {
                                        const isFirstColumn = columnIndex === 0;
                                        const shouldStick = column.sticky || (stickyFirstColumn && isFirstColumn);

                                        return (
                                            <td
                                                key={column.key}
                                                className={`
                                                    ${padding}
                                                    ${column.align === 'center' ? 'text-center' : ''}
                                                    ${column.align === 'right' ? 'text-right' : ''}
                                                    ${column.align === 'left' || !column.align ? 'text-left' : ''}
                                                    ${shouldStick ? `sticky left-0 bg-white ${stickyBorder}` : ''}
                                                    ${column.key === 'roles' ? 'whitespace-normal break-words' : 'whitespace-nowrap'}
                                                `}
                                            >
                                                {renderCell(row[column.key], column, row)}
                                            </td>
                                        );
                                    })}
                                    {renderActions && (
                                        <td
                                            className={`${padding} whitespace-nowrap text-center relative z-10`}
                                            style={{
                                                width: config.columnWidths?.actions || '80px',
                                                minWidth: config.columnWidths?.actions || '80px',
                                                maxWidth: config.columnWidths?.actions || '80px',
                                                textAlign: 'center'
                                            }}
                                        >
                                            {renderActions(row)}
                                        </td>
                                    )}
                                </tr>
                            );
                        })}
                    </tbody>
                </table>
            </div>
        </div>
    );
}
