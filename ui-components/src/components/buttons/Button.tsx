import React from 'react';
import '../../styles/components/Button.css';

/**
 * Button component props interface
 */
export interface ButtonProps {
  /** Button content */
  children?: React.ReactNode;

  /** Button variant style */
  variant?: 'primary' | 'secondary' | 'text' | 'danger';

  /** Button size */
  size?: 'sm' | 'md' | 'lg';

  /** Whether button is disabled */
  disabled?: boolean;

  /** Click event handler */
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;

  /** HTML button type */
  type?: 'button' | 'submit' | 'reset';

  /** Icon element to display */
  icon?: React.ReactNode;

  /** Icon position relative to text */
  iconPosition?: 'left' | 'right';

  /** Whether button should take full width */
  fullWidth?: boolean;

  /** Whether button is in loading state */
  loading?: boolean;

  /** Additional CSS classes */
  className?: string;

  /** Spread props for additional HTML button attributes */
  [key: string]: any;
}

const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'primary',
  size = 'md',
  disabled = false,
  onClick,
  type = 'button',
  icon = null,
  iconPosition = 'left',
  fullWidth = false,
  loading = false,
  className = '',
  ...props
}) => {
  const buttonClasses = [
    'btn',
    `btn--${variant}`,
    `btn--${size}`,
    fullWidth && 'btn--full-width',
    loading && 'btn--loading',
    icon && !children && 'btn--icon-only',
    className
  ].filter(Boolean).join(' ');

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (!disabled && !loading && onClick) {
      onClick(e);
    }
  };

  return (
    <button
      type={type}
      className={buttonClasses}
      disabled={disabled || loading}
      onClick={handleClick}
      {...props}
    >
      {loading && (
        <span className="btn__spinner">
          <svg className="spinner" width="16" height="16" viewBox="0 0 24 24">
            <circle className="spinner-circle" cx="12" cy="12" r="10" fill="none" strokeWidth="3" />
          </svg>
        </span>
      )}
      {icon && iconPosition === 'left' && !loading && (
        <span className="btn__icon btn__icon--left">{icon}</span>
      )}
      {children && <span className="btn__text">{children}</span>}
      {icon && iconPosition === 'right' && !loading && (
        <span className="btn__icon btn__icon--right">{icon}</span>
      )}
    </button>
  );
};

/* サンプル使用例 */
export const ButtonExamples = () => {
  const handleClick = () => {
    console.log('Button clicked!');
  };

  const IconSample = () => (
    <svg width="16" height="16" viewBox="0 0 20 20" fill="currentColor">
      <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
    </svg>
  );

  const SaveIcon = () => (
    <svg width="16" height="16" viewBox="0 0 20 20" fill="currentColor">
      <path d="M7.707 10.293a1 1 0 10-1.414 1.414l3 3a1 1 0 001.414 0l3-3a1 1 0 00-1.414-1.414L11 11.586V6h5a2 2 0 012 2v7a2 2 0 01-2 2H4a2 2 0 01-2-2V8a2 2 0 012-2h5v5.586l-1.293-1.293zM9 4a1 1 0 012 0v2H9V4z" />
    </svg>
  );

  return (
    <div className="button-examples">
      <h2>Button Component Examples</h2>
      
      <section className="example-section">
        <h3>Variants</h3>
        <div className="button-group">
          <Button variant="primary" onClick={handleClick}>
            Primary Button
          </Button>
          <Button variant="secondary" onClick={handleClick}>
            Secondary Button
          </Button>
          <Button variant="text" onClick={handleClick}>
            Text Button
          </Button>
          <Button variant="danger" onClick={handleClick}>
            Danger Button
          </Button>
        </div>
      </section>

      <section className="example-section">
        <h3>Sizes</h3>
        <div className="button-group">
          <Button size="sm" onClick={handleClick}>
            Small Button
          </Button>
          <Button size="md" onClick={handleClick}>
            Medium Button
          </Button>
          <Button size="lg" onClick={handleClick}>
            Large Button
          </Button>
        </div>
      </section>

      <section className="example-section">
        <h3>With Icons</h3>
        <div className="button-group">
          <Button icon={<IconSample />} onClick={handleClick}>
            Home
          </Button>
          <Button variant="secondary" icon={<SaveIcon />} iconPosition="right" onClick={handleClick}>
            Save Document
          </Button>
          <Button variant="primary" icon={<SaveIcon />} aria-label="Save" onClick={handleClick} />
        </div>
      </section>

      <section className="example-section">
        <h3>States</h3>
        <div className="button-group">
          <Button disabled>
            Disabled Button
          </Button>
          <Button loading>
            Loading...
          </Button>
          <Button fullWidth>
            Full Width Button
          </Button>
        </div>
      </section>

      <section className="example-section">
        <h3>Sample Actions</h3>
        <div className="button-group">
          <Button variant="primary" onClick={() => alert('Submitted!')}>
            Submit Form
          </Button>
          <Button variant="secondary" onClick={() => console.log('Cancelled')}>
            Cancel
          </Button>
          <Button variant="danger" onClick={() => window.confirm('Are you sure?')}>
            Delete Item
          </Button>
        </div>
      </section>
    </div>
  );
};

export default React.memo(Button);