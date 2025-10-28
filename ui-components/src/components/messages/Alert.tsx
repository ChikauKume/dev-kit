import React, { useState, useEffect } from 'react';
import '../../styles/components/Alert.css';

type AlertVariant = 'info' | 'success' | 'warning' | 'error';
type ToastPosition = 'top-right' | 'top-left' | 'bottom-right' | 'bottom-left';

export interface AlertProps {
  variant?: AlertVariant;
  title?: string;
  message?: string;
  children?: React.ReactNode;
  closable?: boolean;
  onClose?: () => void;
  autoClose?: boolean;
  autoCloseDelay?: number;
  icon?: boolean;
  className?: string;
  [key: string]: any;
}

export interface ToastProps {
  variant?: AlertVariant;
  message: string;
  position?: ToastPosition;
  duration?: number;
  onClose?: () => void;
}

export interface AlertExamplesProps {}

const Alert: React.FC<AlertProps> = ({
  variant = 'info',
  title,
  message,
  children,
  closable = true,
  onClose,
  autoClose = false,
  autoCloseDelay = 5000,
  icon = true,
  className = '',
  ...props
}) => {
  const [isVisible, setIsVisible] = useState(true);
  const [isExiting, setIsExiting] = useState(false);

  useEffect(() => {
    if (autoClose && isVisible) {
      const timer = setTimeout(() => {
        handleClose();
      }, autoCloseDelay);

      return () => clearTimeout(timer);
    }
  }, [autoClose, autoCloseDelay, isVisible]);

  const handleClose = (): void => {
    setIsExiting(true);
    setTimeout(() => {
      setIsVisible(false);
      if (onClose) onClose();
    }, 300); // Match animation duration
  };

  if (!isVisible) return null;

  const alertClasses = [
    'alert',
    `alert--${variant}`,
    isExiting && 'alert--exiting',
    className
  ].filter(Boolean).join(' ');

  const getIcon = (): React.ReactElement | null => {
    if (!icon) return null;

    const icons: Record<AlertVariant, React.ReactElement> = {
      info: (
        <svg className="alert__icon" width="20" height="20" viewBox="0 0 20 20" fill="currentColor">
          <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
        </svg>
      ),
      success: (
        <svg className="alert__icon" width="20" height="20" viewBox="0 0 20 20" fill="currentColor">
          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
        </svg>
      ),
      warning: (
        <svg className="alert__icon" width="20" height="20" viewBox="0 0 20 20" fill="currentColor">
          <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
        </svg>
      ),
      error: (
        <svg className="alert__icon" width="20" height="20" viewBox="0 0 20 20" fill="currentColor">
          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
        </svg>
      )
    };

    return icons[variant] || icons.info;
  };

  return (
    <div className={alertClasses} role="alert" {...props}>
      {getIcon()}
      <div className="alert__content">
        {title && <h4 className="alert__title">{title}</h4>}
        {message && <p className="alert__message">{message}</p>}
        {children && <div className="alert__body">{children}</div>}
      </div>
      {closable && (
        <button
          className="alert__close"
          onClick={handleClose}
          aria-label="閉じる"
          type="button"
        >
          <svg width="16" height="16" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
          </svg>
        </button>
      )}
    </div>
  );
};

/* Toast Notification Component */
const Toast: React.FC<ToastProps> = ({
  variant = 'info',
  message,
  position = 'top-right',
  duration = 3000,
  onClose
}) => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
      if (onClose) onClose();
    }, duration);

    return () => clearTimeout(timer);
  }, [duration, onClose]);

  if (!isVisible) return null;

  return (
    <div className={`toast toast--${position} toast--${variant}`}>
      <Alert
        variant={variant}
        message={message}
        closable={false}
        autoClose={false}
      />
    </div>
  );
};

export const ToastMemoized = React.memo(Toast);
export { Toast };

/* Alert Examples Component */
export const AlertExamples: React.FC<AlertExamplesProps> = () => {
  const [showToast, setShowToast] = useState(false);
  const [alerts, setAlerts] = useState({
    info: true,
    success: true,
    warning: true,
    error: true,
    custom: true,
    autoClose: true
  });

  const handleAlertClose = (type: keyof typeof alerts): void => {
    setAlerts(prev => ({ ...prev, [type]: false }));
  };

  const resetAlert = (type: keyof typeof alerts): void => {
    setAlerts(prev => ({ ...prev, [type]: true }));
  };

  const showToastNotification = (): void => {
    setShowToast(true);
    setTimeout(() => setShowToast(false), 3000);
  };

  return (
    <div className="alert-examples">
      <h2>Alert Component Examples</h2>

      <section className="example-section">
        <h3>基本的なアラート</h3>

        {alerts.info ? (
          <Alert
            variant="info"
            title="情報"
            message="これは情報メッセージです。ユーザーに有用な情報を提供します。"
            onClose={() => handleAlertClose('info')}
          />
        ) : (
          <button onClick={() => resetAlert('info')} className="reset-btn">
            情報アラートを再表示
          </button>
        )}

        {alerts.success ? (
          <Alert
            variant="success"
            title="成功"
            message="操作が正常に完了しました。データは正常に保存されました。"
            onClose={() => handleAlertClose('success')}
          />
        ) : (
          <button onClick={() => resetAlert('success')} className="reset-btn">
            成功アラートを再表示
          </button>
        )}

        {alerts.warning ? (
          <Alert
            variant="warning"
            title="警告"
            message="この操作には注意が必要です。続行する前に確認してください。"
            onClose={() => handleAlertClose('warning')}
          />
        ) : (
          <button onClick={() => resetAlert('warning')} className="reset-btn">
            警告アラートを再表示
          </button>
        )}

        {alerts.error ? (
          <Alert
            variant="error"
            title="エラー"
            message="エラーが発生しました。もう一度お試しください。"
            onClose={() => handleAlertClose('error')}
          />
        ) : (
          <button onClick={() => resetAlert('error')} className="reset-btn">
            エラーアラートを再表示
          </button>
        )}
      </section>

      <section className="example-section">
        <h3>カスタムコンテンツ</h3>
        {alerts.custom ? (
          <Alert
            variant="info"
            title="システムアップデート"
            closable={true}
            onClose={() => handleAlertClose('custom')}
          >
            <p>新しいバージョンが利用可能です。以下の新機能が含まれています：</p>
            <ul style={{ marginTop: '8px', paddingLeft: '20px' }}>
              <li>パフォーマンスの向上</li>
              <li>新しいUIコンポーネント</li>
              <li>バグ修正</li>
            </ul>
            <button
              style={{ marginTop: '12px' }}
              className="alert-action-btn"
              onClick={() => alert('アップデートを開始しました')}
            >
              今すぐアップデート
            </button>
          </Alert>
        ) : (
          <button onClick={() => resetAlert('custom')} className="reset-btn">
            カスタムアラートを再表示
          </button>
        )}
      </section>

      <section className="example-section">
        <h3>自動クローズ</h3>
        {alerts.autoClose ? (
          <Alert
            variant="success"
            message="このアラートは5秒後に自動的に閉じます。"
            autoClose={true}
            autoCloseDelay={5000}
            onClose={() => handleAlertClose('autoClose')}
          />
        ) : (
          <button onClick={() => resetAlert('autoClose')} className="reset-btn">
            自動クローズアラートを再表示
          </button>
        )}
      </section>

      <section className="example-section">
        <h3>アイコンなし・閉じるボタンなし</h3>
        <Alert
          variant="info"
          message="これはシンプルな通知メッセージです。"
          icon={false}
          closable={false}
        />
      </section>

      <section className="example-section">
        <h3>タイトルなし</h3>
        <Alert
          variant="warning"
          message="タイトルなしのアラートメッセージです。簡潔な通知に使用します。"
        />
      </section>

      <section className="example-section">
        <h3>トースト通知（右上に表示）</h3>
        <button onClick={showToastNotification} className="show-toast-btn">
          トースト通知を表示
        </button>
        {showToast && (
          <Toast
            variant="success"
            message="保存が完了しました！"
            position="top-right"
            duration={3000}
          />
        )}
      </section>

      <section className="example-section">
        <h3>サンプルシナリオ</h3>
        <div className="scenario-alerts">
          <Alert
            variant="success"
            title="注文完了"
            message="ご注文番号: #12345"
          >
            <p>確認メールを送信しました。</p>
          </Alert>

          <Alert
            variant="error"
            title="ログインエラー"
            message="メールアドレスまたはパスワードが正しくありません。"
          />

          <Alert
            variant="warning"
            title="ストレージ容量"
            message="残り容量が10%未満です。不要なファイルを削除してください。"
          />

          <Alert
            variant="info"
            title="メンテナンスのお知らせ"
            message="明日午前2時から4時までメンテナンスを実施します。"
          />
        </div>
      </section>
    </div>
  );
};

export default React.memo(Alert);
