import { useEffect, ReactNode } from 'react';

export interface InfoModalProps {
    show: boolean;
    onClose: () => void;
    title?: string;
    message: string;
    type?: 'info' | 'warning' | 'error' | 'success';
    confirmText?: string;
    icon?: ReactNode;
}

interface TypeStyles {
    iconBg: string;
    iconColor: string;
    buttonColor: string;
    defaultIcon: ReactNode;
}

export default function InfoModal({
    show,
    onClose,
    title = '情報',
    message,
    type = 'info',
    confirmText = '確認',
    icon = null
}: InfoModalProps) {
    useEffect(() => {
        if (show) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }

        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [show]);

    // Escapeキーで閉じる
    useEffect(() => {
        const handleEscape = (event: KeyboardEvent) => {
            if (event.key === 'Escape' && show) {
                onClose();
            }
        };

        if (show) {
            document.addEventListener('keydown', handleEscape);
            return () => document.removeEventListener('keydown', handleEscape);
        }
    }, [show, onClose]);

    if (!show) return null;

    // タイプ別のスタイル設定
    const getTypeStyles = (): TypeStyles => {
        switch (type) {
            case 'warning':
                return {
                    iconBg: 'bg-yellow-100',
                    iconColor: 'text-yellow-600',
                    buttonColor: 'bg-yellow-600 hover:bg-yellow-700 focus:ring-yellow-500',
                    defaultIcon: (
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z" />
                        </svg>
                    )
                };
            case 'error':
                return {
                    iconBg: 'bg-red-100',
                    iconColor: 'text-red-600',
                    buttonColor: 'bg-red-600 hover:bg-red-700 focus:ring-red-500',
                    defaultIcon: (
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    )
                };
            case 'success':
                return {
                    iconBg: 'bg-green-100',
                    iconColor: 'text-green-600',
                    buttonColor: 'bg-green-600 hover:bg-green-700 focus:ring-green-500',
                    defaultIcon: (
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                        </svg>
                    )
                };
            default: // info
                return {
                    iconBg: 'bg-blue-100',
                    iconColor: 'text-blue-600',
                    buttonColor: 'bg-blue-600 hover:bg-blue-700 focus:ring-blue-500',
                    defaultIcon: (
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                    )
                };
        }
    };

    const styles = getTypeStyles();

    return (
        <div
            className="fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full z-50 flex items-center justify-center"
            onClick={onClose}
        >
            <div
                className="relative bg-white rounded-lg shadow-xl max-w-md w-full mx-4"
                onClick={(e) => e.stopPropagation()}
            >
                <div className="p-6">
                    <div className="flex items-start mb-4">
                        <div className={`flex-shrink-0 w-10 h-10 mx-auto ${styles.iconBg} rounded-full flex items-center justify-center mr-4`}>
                            <div className={styles.iconColor}>
                                {icon || styles.defaultIcon}
                            </div>
                        </div>
                        <div className="flex-1">
                            <h3 className="text-lg font-medium text-gray-900 mb-2">
                                {title}
                            </h3>
                        </div>
                    </div>

                    <div className="mb-6">
                        <p className="text-sm text-gray-600 whitespace-pre-wrap leading-relaxed">
                            {message}
                        </p>
                    </div>

                    <div className="flex justify-end">
                        <button
                            onClick={onClose}
                            className={`px-4 py-2 ${styles.buttonColor} text-white rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 transition duration-150 ease-in-out`}
                        >
                            {confirmText}
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
