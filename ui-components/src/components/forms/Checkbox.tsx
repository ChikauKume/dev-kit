import React from 'react';

export interface CheckboxProps extends React.InputHTMLAttributes<HTMLInputElement> {
    className?: string;
}

export default function Checkbox({ className = '', ...props }: CheckboxProps): React.ReactElement {
    return (
        <input
            {...props}
            type="checkbox"
            style={{
                borderColor: 'rgb(209, 213, 219)',
                borderRadius: '4px',
                ...((props as any).style || {})
            }}
            className={
                'text-indigo-600 shadow-sm focus:ring-indigo-500 ' +
                className
            }
        />
    );
}
