import { Link } from '@inertiajs/react';
import { ReactNode, MouseEvent } from 'react';

export type AlertType = 'system' | 'admin' | 'task' | 'activity' | 'default';
export type AlertPriority = 'urgent' | 'high' | 'medium' | 'low';

export interface Alert {
    id: number;
    type: AlertType;
    type_label: string;
    priority: AlertPriority;
    title: string;
    message: string;
    is_read: boolean;
    action_url?: string;
    created_at_human: string;
}

export interface AlertItemProps {
    alert: Alert;
    onMarkAsRead: (alertId: number) => void;
    onDismiss: (alertId: number) => void;
}

export default function AlertItem({ alert, onMarkAsRead, onDismiss }: AlertItemProps) {
    const getTypeIcon = (type: AlertType): ReactNode => {
        switch (type) {
            case 'system':
                return (
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z" clipRule="evenodd" />
                    </svg>
                );
            case 'admin':
                return (
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                );
            case 'task':
                return (
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M6 2a2 2 0 00-2 2v12a2 2 0 002 2h8a2 2 0 002-2V4a2 2 0 00-2-2H6zm1 2a1 1 0 000 2h6a1 1 0 100-2H7zm6 7a1 1 0 011 1v3a1 1 0 11-2 0v-3a1 1 0 011-1zm-3 3a1 1 0 100 2h.01a1 1 0 100-2H10zm-4 1a1 1 0 011-1h.01a1 1 0 110 2H7a1 1 0 01-1-1zm1-4a1 1 0 100 2h.01a1 1 0 100-2H7zm2 0a1 1 0 100 2h.01a1 1 0 100-2H9zm2 0a1 1 0 100 2h.01a1 1 0 100-2H11z" clipRule="evenodd" />
                    </svg>
                );
            case 'activity':
                return (
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M10 2a6 6 0 00-6 6v3.586l-.707.707A1 1 0 004 14h12a1 1 0 00.707-1.707L16 11.586V8a6 6 0 00-6-6zM10 18a3 3 0 01-3-3h6a3 3 0 01-3 3z" />
                    </svg>
                );
            default:
                return (
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                    </svg>
                );
        }
    };

    const getPriorityColor = (priority: AlertPriority): string => {
        switch (priority) {
            case 'urgent':
                return 'text-red-600';
            case 'high':
                return 'text-orange-600';
            case 'medium':
                return 'text-blue-600';
            case 'low':
                return 'text-gray-600';
            default:
                return 'text-gray-600';
        }
    };

    const handleItemClick = () => {
        // 未読の場合は既読にマーク
        if (!alert.is_read) {
            onMarkAsRead(alert.id);
        }

        // アクションURLがある場合は遷移
        if (alert.action_url) {
            window.location.href = alert.action_url;
        }
    };

    const handleMarkAsRead = (e: MouseEvent<HTMLButtonElement>) => {
        e.stopPropagation();
        onMarkAsRead(alert.id);
    };

    const handleDismiss = (e: MouseEvent<HTMLButtonElement>) => {
        e.stopPropagation();
        onDismiss(alert.id);
    };

    return (
        <div
            className={`p-4 hover:bg-gray-50 cursor-pointer transition-colors duration-200 ${
                !alert.is_read ? 'bg-blue-50/50' : ''
            }`}
            onClick={handleItemClick}
        >
            <div className="flex items-start space-x-3">
                {/* アイコン */}
                <div className={`flex-shrink-0 ${getPriorityColor(alert.priority)}`}>
                    {getTypeIcon(alert.type)}
                </div>

                {/* コンテンツ */}
                <div className="flex-1 min-w-0">
                    <div className="flex items-start justify-between">
                        <div className="flex-1">
                            <h4 className={`text-sm font-medium ${
                                alert.is_read ? 'text-gray-900' : 'text-gray-900 font-semibold'
                            }`}>
                                {alert.title}
                            </h4>
                            <p className="text-sm text-gray-600 mt-1 line-clamp-2">
                                {alert.message}
                            </p>
                        </div>

                        {/* 操作ボタン */}
                        <div className="flex items-center space-x-1 ml-2">
                            {!alert.is_read && (
                                <button
                                    onClick={handleMarkAsRead}
                                    className="p-1 text-gray-400 hover:text-blue-600 transition-colors duration-200"
                                    title="既読にする"
                                >
                                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                    </svg>
                                </button>
                            )}

                            <button
                                onClick={handleDismiss}
                                className="p-1 text-gray-400 hover:text-red-600 transition-colors duration-200"
                                title="非表示"
                            >
                                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                                    <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                                </svg>
                            </button>
                        </div>
                    </div>

                    {/* メタデータ */}
                    <div className="flex items-center justify-between mt-2">
                        <div className="flex items-center space-x-2">
                            <span className={`text-xs px-2 py-1 rounded-full ${
                                alert.type === 'system' ? 'bg-blue-100 text-blue-800' :
                                alert.type === 'admin' ? 'bg-purple-100 text-purple-800' :
                                alert.type === 'task' ? 'bg-orange-100 text-orange-800' :
                                'bg-green-100 text-green-800'
                            }`}>
                                {alert.type_label}
                            </span>

                            {alert.priority === 'urgent' && (
                                <span className="text-xs px-2 py-1 rounded-full bg-red-100 text-red-800">
                                    緊急
                                </span>
                            )}

                            {!alert.is_read && (
                                <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                            )}
                        </div>

                        <span className="text-xs text-gray-500">
                            {alert.created_at_human}
                        </span>
                    </div>
                </div>
            </div>
        </div>
    );
}
