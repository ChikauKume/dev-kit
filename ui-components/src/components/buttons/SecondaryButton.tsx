import React from 'react';

export interface SecondaryButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    type?: 'button' | 'submit' | 'reset';
    className?: string;
    disabled?: boolean;
    children?: React.ReactNode;
}

export default function SecondaryButton({
    type = 'button',
    className = '',
    disabled,
    children,
    ...props
}: SecondaryButtonProps): React.ReactElement {
    return (
        <button
            {...props}
            type={type}
            className={
                `inline-flex items-center px-4 py-2 bg-gray-600 border border-transparent font-semibold text-xs text-white uppercase tracking-widest hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2 transition ease-in-out duration-150 disabled:opacity-25 ${
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
