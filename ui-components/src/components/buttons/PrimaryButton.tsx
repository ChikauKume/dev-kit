import React from 'react';
import '../../styles/components/PrimaryButton.css';

export interface PrimaryButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    className?: string;
    disabled?: boolean;
    children?: React.ReactNode;
    dusk?: string;
}

const PrimaryButton = ({
    className = '',
    disabled,
    children,
    dusk,
    ...props
}: PrimaryButtonProps): React.ReactElement => {
    const buttonClasses = [
        'primary-btn',
        className
    ].filter(Boolean).join(' ');

    return (
        <button
            {...props}
            className={buttonClasses}
            disabled={disabled}
            dusk={dusk}
        >
            {children}
        </button>
    );
};

export default React.memo(PrimaryButton);
