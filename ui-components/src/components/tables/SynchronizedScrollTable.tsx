import React, { useEffect, ReactNode } from 'react';
import TableHeader from './TableHeader';
import TableBody from './TableBody';
import { TableColumn } from './TableBody';
import { useSynchronizedScroll } from '../../hooks/synchronizedScroll';
import { getTableConfig, generateScrollbarStyles, TablePresetConfig } from '../../config/tablePresets';

export interface SynchronizedScrollTableProps<T = any> {
    data: T[] | Record<string, any>;
    columns?: TableColumn<T>[];
    renderCell?: (value: any, column: TableColumn<T>, row: T) => React.ReactNode;
    className?: string;
    height?: string;
    tableClassName?: string;
    rowKey?: string | null;
    renderActions?: ((row: T) => React.ReactNode) | null;
    preset?: string;
    config?: Partial<TablePresetConfig>;
    integrated?: boolean;  // ナビゲーションと一体化するかどうか
    dynamicHeight?: string | null;  // 動的高さ（外部から渡される）
    needsScroll?: boolean | null;  // スクロールの必要性（外部から渡される）
    children?: ReactNode;
}

/**
 * スクロール同期機能付きテーブルコンポーネント
 * プリセット機能で各ページの要件に柔軟対応
 */
export default function SynchronizedScrollTable<T = any>({
    data,
    columns = [],
    renderCell = () => null,
    className = '',
    height = '100%',
    tableClassName = '',
    rowKey = null,
    renderActions = null,
    preset = 'matrix',
    config = {},
    integrated = false,  // ナビゲーションと一体化するかどうか
    dynamicHeight = null,  // 動的高さ（外部から渡される）
    needsScroll = null,  // スクロールの必要性（外部から渡される）
    children
}: SynchronizedScrollTableProps<T>) {
    const {
        headerRef,
        bodyRef,
        showScrollbar,
        isScrollbarDetectionComplete,
        handleHeaderScroll,
        handleBodyScroll
    } = useSynchronizedScroll(data, needsScroll);

    // プリセットとカスタム設定を統合（動的高さとスクロール必要性を追加）
    const tableConfig: TablePresetConfig = getTableConfig(preset, {
        ...config,
        dynamicHeight,
        needsScroll
    });

    // 統一スクロールバースタイルを生成
    const scrollbarStyles = generateScrollbarStyles(tableConfig, 'header-scrollbar-conditional') +
                           generateScrollbarStyles(tableConfig, 'table-body-scrollbar');

    const conditionalScrollbarStyles = `.header-scrollbar-conditional{scrollbar-width:${showScrollbar ? 'thin' : 'none'};-ms-overflow-style:${showScrollbar ? 'auto' : 'none'};}.header-scrollbar-conditional::-webkit-scrollbar{display:${showScrollbar ? 'block' : 'none'};}`;

    const allStyles = scrollbarStyles + conditionalScrollbarStyles;

    // スタイルをheadに動的追加
    useEffect(() => {
        const styleId = 'synchronized-table-scrollbar-styles';
        let styleElement = document.getElementById(styleId);

        if (!styleElement) {
            styleElement = document.createElement('style');
            styleElement.id = styleId;
            document.head.appendChild(styleElement);
        }

        styleElement.textContent = allStyles;
    }, [allStyles]);

    // If children are provided, render them directly without table structure
    if (children) {
        return (
            <div className={`flex flex-col overflow-hidden ${className}`} style={{ height }}>
                <div className={`bg-white rounded-lg shadow-sm flex flex-col overflow-hidden transition-opacity duration-300 ${isScrollbarDetectionComplete ? 'opacity-100' : 'opacity-0'} ${tableClassName}`}>
                    {children}
                </div>
            </div>
        );
    }

    return (
        <div className={`flex flex-col overflow-hidden ${className}`} style={{ height }}>
            <div className={`bg-white rounded-lg shadow-sm flex flex-col overflow-hidden transition-opacity duration-300 ${isScrollbarDetectionComplete ? 'opacity-100' : 'opacity-0'} ${tableClassName}`}>
                <TableHeader
                    columns={columns}
                    showScrollbar={showScrollbar}
                    onScroll={handleHeaderScroll}
                    headerRef={headerRef}
                    hasActions={!!renderActions}
                    config={tableConfig}
                    integrated={integrated}
                />

                <TableBody
                    data={data}
                    columns={columns}
                    renderCell={renderCell}
                    onScroll={handleBodyScroll}
                    bodyRef={bodyRef}
                    rowKey={rowKey}
                    renderActions={renderActions}
                    config={tableConfig}
                />
            </div>
        </div>
    );
}
