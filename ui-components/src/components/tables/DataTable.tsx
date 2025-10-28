import React, { ReactNode } from 'react';
import SynchronizedScrollTable from './SynchronizedScrollTable';
import SearchFilterPanel from '../navigation/SearchFilterPanel';
import PaginationPanel from './PaginationPanel';
import { getTableConfig, TablePresetConfig } from '../../config/tablePresets';

export interface LaravelPagination {
    current_page: number;
    last_page: number;
    per_page: number;
    total: number;
    from: number;
    to: number;
    prev_page_url: string | null;
    next_page_url: string | null;
}

export interface DataTableProps {
    preset: string;
    data: any[];

    // 検索関連（オプショナル）
    onSearchChange?: ((value: string) => void) | null;
    onFilterChange?: ((filterKey: string, value: string) => void) | null;
    searchValue?: string;
    filterValues?: Record<string, string>;

    // ページング関連（オプショナル）
    onPageChange?: ((page: number) => void) | null;
    onPerPageChange?: ((perPage: number) => void) | null;
    pagination?: LaravelPagination | null;

    // その他
    children: ReactNode;
    className?: string;
}

/**
 * 統合データテーブルコンポーネント
 * 検索、フィルター、ページネーション機能を統合した共通テーブルコンポーネント
 *
 * @param {string} preset - テーブルプリセット名
 * @param {Array} data - 表示データ
 * @param {Function} onSearchChange - 検索値変更時のコールバック（オプショナル）
 * @param {Function} onFilterChange - フィルター値変更時のコールバック（オプショナル）
 * @param {string} searchValue - 現在の検索値
 * @param {Object} filterValues - 現在のフィルター値
 * @param {Function} onPageChange - ページ変更時のコールバック（オプショナル）
 * @param {Function} onPerPageChange - 表示件数変更時のコールバック（オプショナル）
 * @param {Object} pagination - Laravelのページネーションオブジェクト（オプショナル）
 * @param {ReactNode} children - テーブル内容
 * @param {string} className - 追加のCSSクラス
 */
export default function DataTable({
    preset,
    data,

    // 検索関連（オプショナル）
    onSearchChange = null,
    onFilterChange = null,
    searchValue = '',
    filterValues = {},

    // ページング関連（オプショナル）
    onPageChange = null,
    onPerPageChange = null,
    pagination = null,

    // その他
    children,
    className = ''
}: DataTableProps) {
    const config: TablePresetConfig = getTableConfig(preset);

    // 設定が取得できない場合のフォールバック
    if (!config) {
        console.warn(`Table preset "${preset}" not found`);
        return (
            <div className="bg-white rounded-lg shadow-sm overflow-hidden">
                <SynchronizedScrollTable
                    data={data}
                >
                    {children}
                </SynchronizedScrollTable>
            </div>
        );
    }

    // 検索機能が有効かどうか
    const isSearchEnabled = config.search?.enabled && (
        onSearchChange || config.search.type === 'client'
    );

    // ページング機能が有効かどうか
    const isPaginationEnabled = config.pagination?.enabled && (
        pagination || config.pagination.type === 'client'
    );

    // フィルター機能が有効かどうか
    const isFilterEnabled = config.filters && config.filters.length > 0 && onFilterChange;

    return (
        <div className={`space-y-0 ${className}`}>
            {/* 検索・フィルターパネル（条件付き表示） */}
            {(isSearchEnabled || isFilterEnabled) && (
                <SearchFilterPanel
                    config={config}
                    onSearchChange={isSearchEnabled ? onSearchChange : null}
                    onFilterChange={isFilterEnabled ? onFilterChange : null}
                    searchValue={searchValue}
                    filterValues={filterValues}
                />
            )}

            {/* テーブル */}
            <div className="bg-white rounded-lg shadow-sm overflow-hidden">
                <SynchronizedScrollTable
                    preset={preset}
                    data={data}
                    config={config}
                >
                    {children}
                </SynchronizedScrollTable>

                {/* ページネーション（条件付き表示） */}
                {isPaginationEnabled && pagination && (
                    <PaginationPanel
                        pagination={pagination}
                        onPageChange={onPageChange}
                        onPerPageChange={onPerPageChange}
                        config={config.pagination}
                    />
                )}
            </div>
        </div>
    );
}
