import React from 'react';

export interface DangerButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    className?: string;
    disabled?: boolean;
    children?: React.ReactNode;
}

export default function DangerButton({
    className = '',
    disabled,
    children,
    ...props
}: DangerButtonProps): React.ReactElement {
    return (
        <button
            {...props}
            className={
                `inline-flex items-center border border-transparent bg-red-600 px-4 py-2 text-xs font-semibold uppercase tracking-widest text-white transition duration-150 ease-in-out hover:bg-red-500 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 active:bg-red-700 ${
                    disabled && 'opacity-25'
                } ` + className
            }
            style={{
                borderRadius: 'var(--radius-md)',
                ...props.style
            }}
            disabled={disabled}
        >
            {children}
        </button>
    );
}
