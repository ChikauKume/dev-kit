import { Link } from '@inertiajs/react';
import { MouseEvent } from 'react';
import AlertItem, { Alert } from './AlertItem';

export interface AlertPanelProps {
    alerts?: Alert[];
    unreadCount?: number;
    hasUnread?: boolean;
    onMarkAsRead: (alertId: number) => void;
    onMarkAllAsRead: () => void;
    onDismiss: (alertId: number) => void;
    onClose: () => void;
}

export default function AlertPanel({
    alerts = [],
    unreadCount = 0,
    hasUnread = false,
    onMarkAsRead,
    onMarkAllAsRead,
    onDismiss,
    onClose
}: AlertPanelProps) {
    return (
        <div className="w-96 bg-white rounded-lg shadow-lg border border-gray-200 max-h-96 flex flex-col">
            {/* ヘッダー */}
            <div className="flex items-center justify-between p-4 border-b border-gray-200">
                <div className="flex items-center space-x-2">
                    <h3 className="font-semibold text-gray-900">アラート</h3>
                    {hasUnread && (
                        <span className="px-2 py-1 bg-red-100 text-red-600 text-xs rounded-full">
                            {unreadCount}件未読
                        </span>
                    )}
                </div>

                <div className="flex items-center space-x-2">
                    {/* 全て既読ボタン */}
                    {hasUnread && (
                        <button
                            onClick={onMarkAllAsRead}
                            className="text-xs font-medium"
                            style={{ color: 'rgb(21, 52, 109)' }}
                            onMouseEnter={(e: MouseEvent<HTMLButtonElement>) => (e.currentTarget.style.opacity = '0.8')}
                            onMouseLeave={(e: MouseEvent<HTMLButtonElement>) => (e.currentTarget.style.opacity = '1')}
                        >
                            全て既読
                        </button>
                    )}

                    {/* 閉じるボタン */}
                    <button
                        onClick={onClose}
                        className="text-gray-400 hover:text-gray-600 p-1"
                    >
                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                        </svg>
                    </button>
                </div>
            </div>

            {/* コンテンツエリア */}
            <div className="flex-1 overflow-y-auto">
                {alerts.length > 0 ? (
                    <div className="divide-y divide-gray-100">
                        {alerts.map((alert) => (
                            <AlertItem
                                key={alert.id}
                                alert={alert}
                                onMarkAsRead={onMarkAsRead}
                                onDismiss={onDismiss}
                            />
                        ))}
                    </div>
                ) : (
                    <div className="p-8 text-center text-gray-500">
                        <svg className="w-12 h-12 mx-auto mb-4 text-gray-300" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M10 2a6 6 0 00-6 6v3.586l-.707.707A1 1 0 004 14h12a1 1 0 00.707-1.707L16 11.586V8a6 6 0 00-6-6zM10 18a3 3 0 01-3-3h6a3 3 0 01-3 3z" />
                        </svg>
                        <p>アラートはありません</p>
                    </div>
                )}
            </div>

            {/* フッター */}
            {alerts.length > 0 && (
                <div className="p-3 border-t border-gray-200 bg-gray-50">
                    <Link
                        href="/alerts"
                        className="block w-full text-center text-sm font-medium"
                        style={{ color: 'rgb(21, 52, 109)' }}
                        onMouseEnter={(e: MouseEvent<HTMLAnchorElement>) => (e.currentTarget.style.opacity = '0.8')}
                        onMouseLeave={(e: MouseEvent<HTMLAnchorElement>) => (e.currentTarget.style.opacity = '1')}
                    >
                        すべてのアラートを表示
                    </Link>
                </div>
            )}
        </div>
    );
}
