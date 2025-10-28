import { useState, useRef, useEffect, ReactNode, MouseEvent } from 'react';
import { createPortal } from 'react-dom';

export interface DropdownMenuProps {
    children: ReactNode;
    align?: 'left' | 'right';
    width?: '48' | '56' | '64';
}

export interface DropdownMenuItemProps {
    children: ReactNode;
    onClick: () => void;
    className?: string;
    icon?: ReactNode;
    danger?: boolean;
}

type Position = 'top' | 'bottom';
type Align = 'left' | 'right';
type Width = '48' | '56' | '64';

export default function DropdownMenu({ children, align = 'right', width = '48' }: DropdownMenuProps) {
    const [open, setOpen] = useState(false);
    const [position, setPosition] = useState<Position>('bottom');
    const menuRef = useRef<HTMLDivElement>(null);
    const triggerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent | Event) => {
            if (menuRef.current && !menuRef.current.contains(event.target as Node) &&
                triggerRef.current && !triggerRef.current.contains(event.target as Node)) {
                setOpen(false);
            }
        };

        if (open) {
            document.addEventListener('mousedown', handleClickOutside);
            return () => document.removeEventListener('mousedown', handleClickOutside);
        }
    }, [open]);

    // 自動位置調整機能
    useEffect(() => {
        if (open && triggerRef.current) {
            const triggerRect = triggerRef.current.getBoundingClientRect();
            const spaceBelow = window.innerHeight - triggerRect.bottom;
            const spaceAbove = triggerRect.top;
            const headerHeight = 64; // ヘッダー高さ
            const menuHeight = 130; // メニュー高さ（3項目 + パディング）
            const margin = 30; // 余裕マージン

            // 画面下部に近い場合は上向きに表示
            if (spaceBelow < (menuHeight + margin) && spaceAbove > (headerHeight + menuHeight + margin)) {
                setPosition('top');
            } else {
                setPosition('bottom');
            }
        }
    }, [open]);

    const alignmentClasses: Record<Align, string> = {
        left: 'left-0',
        right: 'right-0',
    };

    const positionClasses: Record<Position, string> = {
        top: 'bottom-full mb-2',
        bottom: 'top-full mt-2'
    };

    // 位置に応じてoriginを調整
    const getOriginClass = (): string => {
        if (position === 'top') {
            return align === 'right' ? 'origin-bottom-right' : 'origin-bottom-left';
        } else {
            return align === 'right' ? 'origin-top-right' : 'origin-top-left';
        }
    };

    const widthClasses: Record<Width, string> = {
        '48': 'w-48',
        '56': 'w-56',
        '64': 'w-64',
    };

    return (
        <div className="relative">
            <div ref={triggerRef}>
                <button
                    onClick={() => setOpen(!open)}
                    className="flex items-center p-2 rounded-md text-gray-500 hover:text-gray-700 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 transition duration-150 ease-in-out"
                >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M10 6a2 2 0 110-4 2 2 0 010 4zM10 12a2 2 0 110-4 2 2 0 010 4zM10 18a2 2 0 110-4 2 2 0 010 4z" />
                    </svg>
                </button>
            </div>

            {open && createPortal(
                <div
                    ref={menuRef}
                    className={`fixed ${widthClasses[width]} ${getOriginClass()} rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none transform transition-all duration-150 ease-out`}
                    style={{
                        top: position === 'top' ?
                            (triggerRef.current?.getBoundingClientRect().top || 0) - 130 - 8 :
                            (triggerRef.current?.getBoundingClientRect().bottom || 0) + 8,
                        right: align === 'right' ?
                            window.innerWidth - (triggerRef.current?.getBoundingClientRect().right || 0) :
                            undefined,
                        left: align === 'left' ?
                            (triggerRef.current?.getBoundingClientRect().left || 0) :
                            undefined,
                        zIndex: 999999
                    }}
                >
                    <div
                        className="py-1"
                        onClick={(e) => {
                            // DropdownMenuItemがクリックされた場合はDropdownを閉じる
                            if (e.target instanceof Element && e.target.closest('button')) {
                                setOpen(false);
                            }
                        }}
                    >
                        {children}
                    </div>
                </div>,
                document.body
            )}
        </div>
    );
}

export function DropdownMenuItem({ children, onClick, className = '', icon = null, danger = false }: DropdownMenuItemProps) {
    const baseClasses = danger
        ? 'block w-full text-left px-4 py-2 text-sm text-red-700 hover:bg-red-50 hover:text-red-900 transition duration-150 ease-in-out'
        : 'block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900 transition duration-150 ease-in-out';

    return (
        <button
            onClick={onClick}
            className={`${baseClasses} ${className}`}
        >
            <div className="flex items-center">
                {icon && <span className="mr-2">{icon}</span>}
                {children}
            </div>
        </button>
    );
}
