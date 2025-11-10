import { useState, useEffect, useCallback } from 'react';
import { Link, router, usePage } from '@inertiajs/react';
import AlertPanel from './AlertPanel';
import Icon from '../icons/Icon';
import { Alert } from './AlertItem';

export interface AlertsData {
    recent_alerts: Alert[];
    unread_count: number;
    has_unread: boolean;
}

export interface AlertBellProps {
    initialAlerts?: AlertsData | null;
    className?: string;
}

interface PageProps {
    auth?: {
        user?: {
            id?: number;
        };
    };
    [key: string]: any;
}

declare global {
    interface Window {
        Echo?: {
            private: (channel: string) => {
                listen: (event: string, callback: (event: any) => void) => void;
                stopListening: (event: string) => void;
            };
            leaveChannel: (channel: string) => void;
        };
    }
}

export default function AlertBell({ initialAlerts = null, className = '' }: AlertBellProps) {
    const { auth } = usePage<PageProps>().props;
    const userId = auth?.user?.id;

    const [alerts, setAlerts] = useState<AlertsData | null>(initialAlerts);
    const [showPanel, setShowPanel] = useState(false);
    const [loading, setLoading] = useState(false);
    const [isRinging, setIsRinging] = useState(false);
    const [lastAlertCount, setLastAlertCount] = useState(initialAlerts?.unread_count || 0);

    // アラートデータを取得
    const fetchAlerts = async () => {
        if (loading) return;

        setLoading(true);
        try {
            const response = await fetch('/alerts/data');
            const data: AlertsData = await response.json();
            setAlerts(data);
        } catch (error) {
            console.error('アラートの取得に失敗しました:', error);
        } finally {
            setLoading(false);
        }
    };

    // ベル振動トリガー
    const triggerBellRing = useCallback(() => {
        if (isRinging) return; // 既に振動中なら無視
        setIsRinging(true);
        setTimeout(() => setIsRinging(false), 2000);
    }, [isRinging]);

    // 初回ロード時にアラートを取得
    useEffect(() => {
        if (!initialAlerts) {
            fetchAlerts();
        }
    }, [initialAlerts]);

    // Echo リアルタイム通知の設定
    useEffect(() => {
        if (!userId || !window.Echo) return;

        const channel = window.Echo.private(`user.${userId}`);

        channel.listen('.alert.created', (event) => {
            triggerBellRing();
            fetchAlerts();
        });

        return () => {
            channel.stopListening('.alert.created');
            window.Echo.leaveChannel(`user.${userId}`);
        };
    }, [userId, triggerBellRing]);

    // アラート数変化の検知（追加の安全策）
    useEffect(() => {
        const currentCount = alerts?.unread_count || 0;
        if (currentCount > lastAlertCount) {
            triggerBellRing();
        }
        setLastAlertCount(currentCount);
    }, [alerts?.unread_count, lastAlertCount, triggerBellRing]);

    // パネルを開く時にアラートを再取得
    const handleBellClick = () => {
        if (!showPanel) {
            fetchAlerts();
        }
        setShowPanel(!showPanel);
    };

    // CSRFトークンを取得するヘルパー関数
    const getCSRFToken = (): string | null => {
        return document.querySelector<HTMLMetaElement>('meta[name="csrf-token"]')?.getAttribute('content') || null;
    };

    // アクションハンドラー
    const handleMarkAsRead = async (alertId: number) => {
        try {
            const token = getCSRFToken();
            if (!token) {
                // CSRFトークンがない場合はInertia.jsのrouterを使用
                router.post(`/alerts/${alertId}/read`, {}, {
                    onSuccess: () => fetchAlerts(),
                    onError: (error) => console.error('既読処理に失敗しました:', error),
                });
                return;
            }

            const response = await fetch(`/alerts/${alertId}/read`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'X-CSRF-TOKEN': token,
                },
            });

            const result = await response.json();
            if (result.success) {
                await fetchAlerts();
            }
        } catch (error) {
            console.error('既読処理に失敗しました:', error);
        }
    };

    const handleMarkAllAsRead = async () => {
        try {
            const token = getCSRFToken();
            if (!token) {
                // CSRFトークンがない場合はInertia.jsのrouterを使用
                router.post('/alerts/read-all', {}, {
                    onSuccess: () => fetchAlerts(),
                    onError: (error) => console.error('一括既読処理に失敗しました:', error),
                });
                return;
            }

            const response = await fetch('/alerts/read-all', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'X-CSRF-TOKEN': token,
                },
            });

            const result = await response.json();
            if (result.success) {
                await fetchAlerts();
            }
        } catch (error) {
            console.error('一括既読処理に失敗しました:', error);
        }
    };

    const handleDismiss = async (alertId: number) => {
        try {
            const token = getCSRFToken();
            if (!token) {
                // CSRFトークンがない場合はInertia.jsのrouterを使用
                router.post(`/alerts/${alertId}/dismiss`, {}, {
                    onSuccess: () => fetchAlerts(),
                    onError: (error) => console.error('非表示処理に失敗しました:', error),
                });
                return;
            }

            const response = await fetch(`/alerts/${alertId}/dismiss`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'X-CSRF-TOKEN': token,
                },
            });

            const result = await response.json();
            if (result.success) {
                await fetchAlerts();
            }
        } catch (error) {
            console.error('非表示処理に失敗しました:', error);
        }
    };

    const unreadCount = alerts?.unread_count || 0;
    const hasUnread = alerts?.has_unread || false;

    return (
        <div className={`relative ${className}`}>
            {/* ベルアイコン */}
            <button
                onClick={handleBellClick}
                className="p-2 text-white hover:bg-white/20 rounded-md relative transition-colors duration-200"
                title="アラート"
            >
                <Icon
                    name="bell"
                    className={`w-10 h-10 transition-transform origin-top ${isRinging ? 'animate-bell-ring' : ''}`}
                />

                {/* 未読件数バッジ */}
                {hasUnread && (
                    <span className="absolute -top-1 -right-1 min-w-[20px] h-5 bg-red-500 text-white text-xs rounded-full flex items-center justify-center px-1">
                        {unreadCount > 99 ? '99+' : unreadCount}
                    </span>
                )}

                {/* ローディング状態 */}
                {loading && (
                    <div className="absolute inset-0 flex items-center justify-center">
                        <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                    </div>
                )}
            </button>

            {/* アラートパネル */}
            {showPanel && alerts && (
                <div className="absolute right-0 top-12 z-50">
                    <AlertPanel
                        alerts={alerts.recent_alerts || []}
                        unreadCount={unreadCount}
                        hasUnread={hasUnread}
                        onMarkAsRead={handleMarkAsRead}
                        onMarkAllAsRead={handleMarkAllAsRead}
                        onDismiss={handleDismiss}
                        onClose={() => setShowPanel(false)}
                    />
                </div>
            )}

            {/* 背景クリックでパネルを閉じる */}
            {showPanel && (
                <div
                    className="fixed inset-0 z-40"
                    onClick={() => setShowPanel(false)}
                />
            )}
        </div>
    );
}
