import React from 'react';

interface FullScreenLoaderProps {
  show: boolean;
  message?: string;
}

const FullScreenLoader: React.FC<FullScreenLoaderProps> = ({ show, message = "読み込み中..." }) => {
  if (!show) return null;

  return (
    <div style={{
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      backgroundColor: 'rgba(255, 255, 255, 0.9)',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      zIndex: 9999
    }}>
      <div style={{
        width: '48px',
        height: '48px',
        border: '4px solid #f3f4f6',
        borderTop: '4px solid rgb(21, 52, 109)',
        borderRadius: '50%',
        animation: 'spin 1s linear infinite'
      }} />
      <p style={{
        marginTop: 'var(--spacing-4)',
        fontSize: 'var(--font-size-lg)',
        color: 'var(--color-neutral-600)',
        fontWeight: 'var(--font-weight-medium)'
      }}>
        {message}
      </p>
    </div>
  );
};

export default FullScreenLoader;
