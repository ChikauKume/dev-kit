import React from 'react';
import Icon from '../icons/Icon';
import { LaravelPagination } from './DataTable';
import { PaginationConfig } from '../../config/tablePresets';

export interface PaginationPanelProps {
    pagination: LaravelPagination | null;
    onPageChange?: ((page: number) => void) | null;
    onPerPageChange?: ((perPage: number) => void) | null;
    config?: PaginationConfig;
}

/**
 * 統一ページネーションパネルコンポーネント
 *
 * @param {Object} pagination - Laravelのページネーションオブジェクト
 * @param {Function} onPageChange - ページ変更時のコールバック
 * @param {Function} onPerPageChange - 表示件数変更時のコールバック
 * @param {Object} config - プリセット設定からのページネーション設定
 */
export default function PaginationPanel({
    pagination,
    onPageChange = null,
    onPerPageChange = null,
    config
}: PaginationPanelProps) {
    // ページネーション機能が無効な場合は何も表示しない
    if (!pagination) {
        return null;
    }

    // ページ番号リンクの生成（省略表示対応）
    const renderPageNumbers = () => {
        if (!onPageChange) return null;

        const currentPage = pagination.current_page;
        const totalPages = pagination.last_page;

        // 表示するページ番号の配列を生成
        const pagesToShow: (number | string)[] = [];
        const maxVisible = 7; // 表示する最大ページ数

        if (totalPages <= maxVisible) {
            // 全ページを表示
            for (let i = 1; i <= totalPages; i++) {
                pagesToShow.push(i);
            }
        } else {
            // 省略表示
            if (currentPage <= 3) {
                // 先頭付近
                for (let i = 1; i <= 5; i++) {
                    pagesToShow.push(i);
                }
                pagesToShow.push('...');
                pagesToShow.push(totalPages);
            } else if (currentPage >= totalPages - 2) {
                // 末尾付近
                pagesToShow.push(1);
                pagesToShow.push('...');
                for (let i = totalPages - 4; i <= totalPages; i++) {
                    pagesToShow.push(i);
                }
            } else {
                // 中間
                pagesToShow.push(1);
                pagesToShow.push('...');
                for (let i = currentPage - 1; i <= currentPage + 1; i++) {
                    pagesToShow.push(i);
                }
                pagesToShow.push('...');
                pagesToShow.push(totalPages);
            }
        }

        return pagesToShow.map((page, index) => {
            if (page === '...') {
                return (
                    <span key={`ellipsis-${index}`} className="pagination-ellipsis">
                        ...
                    </span>
                );
            }

            const pageNumber = page as number;
            return (
                <button
                    key={pageNumber}
                    onClick={() => onPageChange(pageNumber)}
                    className={`pagination-page-btn ${pageNumber === currentPage ? 'active' : ''}`}
                    aria-current={pageNumber === currentPage ? 'page' : undefined}
                >
                    {pageNumber}
                </button>
            );
        });
    };

    return (
        <>
            <style jsx>{`
                .pagination-panel {
                    display: flex;
                    flex-direction: column;
                    align-items: flex-start;
                    justify-content: space-between;
                    gap: var(--spacing-3);
                    padding: var(--spacing-4) var(--spacing-6);
                    background: var(--color-neutral-white);
                    border-top: 1px solid var(--color-neutral-200);
                }

                @media (min-width: 640px) {
                    .pagination-panel {
                        flex-direction: row;
                        align-items: center;
                        gap: 0;
                    }
                }

                .per-page-selector {
                    display: flex;
                    align-items: center;
                    gap: var(--spacing-2);
                    flex-shrink: 0;
                }

                .per-page-label {
                    font-size: var(--font-size-sm);
                    color: var(--color-neutral-700);
                    white-space: nowrap;
                }

                .per-page-select {
                    border: 1px solid var(--color-neutral-300);
                    border-radius: var(--radius-md);
                    padding: var(--spacing-1) var(--spacing-2);
                    font-size: var(--font-size-sm);
                    background: var(--color-neutral-white);
                    color: var(--color-neutral-900);
                    width: 80px;
                    cursor: pointer;
                    transition: all 0.2s;
                }

                .per-page-select:focus {
                    outline: none;
                    ring: 2px solid var(--color-primary-500);
                    border-color: transparent;
                }

                .pagination-info {
                    font-size: var(--font-size-sm);
                    color: var(--color-neutral-700);
                }

                .pagination-info .font-medium {
                    font-weight: var(--font-weight-medium);
                }

                .pagination-controls {
                    display: flex;
                    align-items: center;
                    gap: var(--spacing-1);
                }

                .pagination-nav-btn {
                    display: flex;
                    align-items: center;
                    padding: var(--spacing-1) var(--spacing-2);
                    font-size: var(--font-size-sm);
                    border: 1px solid var(--color-neutral-300);
                    border-radius: var(--radius-md);
                    background: var(--color-neutral-white);
                    color: var(--color-neutral-700);
                    cursor: pointer;
                    transition: all 0.2s;
                }

                .pagination-nav-btn:hover:not(:disabled) {
                    background: var(--color-neutral-50);
                }

                .pagination-nav-btn:disabled {
                    background: var(--color-neutral-50);
                    color: var(--color-neutral-400);
                    border-color: var(--color-neutral-200);
                    cursor: not-allowed;
                }

                .pagination-pages {
                    display: flex;
                    align-items: center;
                    gap: var(--spacing-1);
                }

                .pagination-page-btn {
                    padding: var(--spacing-1) var(--spacing-3);
                    font-size: var(--font-size-sm);
                    border: 1px solid var(--color-neutral-300);
                    border-radius: var(--radius-md);
                    background: var(--color-neutral-white);
                    color: var(--color-neutral-700);
                    cursor: pointer;
                    transition: all 0.2s;
                    min-width: 32px;
                }

                .pagination-page-btn:hover {
                    background: var(--color-neutral-50);
                }

                .pagination-page-btn.active {
                    background: var(--color-primary-600);
                    color: var(--color-neutral-white);
                    border-color: var(--color-primary-600);
                }

                .pagination-ellipsis {
                    padding: var(--spacing-1) var(--spacing-3);
                    font-size: var(--font-size-sm);
                    color: var(--color-neutral-700);
                }
            `}</style>

            <div className="pagination-panel">
                {/* 表示件数選択（条件付き表示） */}
                {onPerPageChange && config?.perPageOptions && (
                    <div className="per-page-selector">
                        <label htmlFor="per-page-select" className="per-page-label">
                            表示件数:
                        </label>
                        <select
                            id="per-page-select"
                            value={pagination.per_page}
                            onChange={(e) => onPerPageChange(parseInt(e.target.value))}
                            className="per-page-select"
                        >
                            {config.perPageOptions.map(option => (
                                <option key={option} value={option}>{option}件</option>
                            ))}
                        </select>
                    </div>
                )}

                {/* ページネーション情報（条件付き表示） */}
                {config?.showInfo !== false && pagination.total > 0 && (
                    <div className="pagination-info">
                        <span className="font-medium">{pagination.from}</span>
                        <span> - </span>
                        <span className="font-medium">{pagination.to}</span>
                        <span> / </span>
                        <span className="font-medium">{pagination.total}</span>
                        <span>件</span>
                    </div>
                )}

                {/* ページネーションリンク（条件付き表示） */}
                {onPageChange && pagination.last_page > 1 && (
                    <div className="pagination-controls">
                        {/* 前へボタン */}
                        <button
                            onClick={() => onPageChange(pagination.current_page - 1)}
                            disabled={!pagination.prev_page_url}
                            className="pagination-nav-btn"
                            aria-label="前のページ"
                        >
                            <Icon name="chevron-left" className="h-4 w-4" />
                            <span style={{ marginLeft: 'var(--spacing-1)' }}>前へ</span>
                        </button>

                        {/* ページ番号 */}
                        <div className="pagination-pages">
                            {renderPageNumbers()}
                        </div>

                        {/* 次へボタン */}
                        <button
                            onClick={() => onPageChange(pagination.current_page + 1)}
                            disabled={!pagination.next_page_url}
                            className="pagination-nav-btn"
                            aria-label="次のページ"
                        >
                            <span style={{ marginRight: 'var(--spacing-1)' }}>次へ</span>
                            <Icon name="chevron-right" className="h-4 w-4" />
                        </button>
                    </div>
                )}
            </div>
        </>
    );
}
