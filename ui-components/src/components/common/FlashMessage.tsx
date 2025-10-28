import React from 'react';
import Icon from '../icons/Icon';
import '../../styles/components/FlashMessage.css';

interface FlashMessageProps {
  type: 'success' | 'info' | 'warning' | 'danger';
  message: string;
  icon?: string;
  onClose?: () => void;
}

const FlashMessage: React.FC<FlashMessageProps> = ({ type, message, icon, onClose }) => {
  const iconName = icon || {
    success: 'check',
    info: 'info',
    warning: 'warning',
    danger: 'error'
  }[type];

  const flashClasses = [
    'flash-message',
    `flash-message--${type}`
  ].join(' ');

  return (
    <div className={flashClasses}>
      <Icon name={iconName} className="flash-message__icon" />
      <div className="flash-message__message">
        {message}
      </div>
      {onClose && (
        <button
          onClick={onClose}
          className="flash-message__close"
          aria-label="閉じる"
        >
          <Icon name="close" />
        </button>
      )}
    </div>
  );
};

export default React.memo(FlashMessage);
