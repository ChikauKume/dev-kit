import React from 'react';

export interface WarningButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    className?: string;
    disabled?: boolean;
    children?: React.ReactNode;
}

export default function WarningButton({
    className = '',
    disabled,
    children,
    ...props
}: WarningButtonProps): React.ReactElement {
    return (
        <button
            {...props}
            className={
                `inline-flex items-center border border-transparent bg-yellow-600 px-4 py-2 text-xs font-semibold uppercase tracking-widest text-white transition duration-150 ease-in-out hover:bg-yellow-500 focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:ring-offset-2 active:bg-yellow-700 ${
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
