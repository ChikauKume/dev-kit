import React, { useState, useRef, useEffect } from 'react';
import Icon from '../../../components/icons/Icon.tsx';
import Modal from '../../../components/messages/Modal.tsx';
import InfoModal from '../../../components/messages/InfoModal.tsx';
import ConfirmModal from '../../../components/messages/ConfirmModal.tsx';
import Dropdown from '../../../components/navigation/Dropdown.tsx';
import PrimaryButton from '../../../components/buttons/PrimaryButton.tsx';
import SecondaryButton from '../../../components/buttons/SecondaryButton.tsx';
import DangerButton from '../../../components/buttons/DangerButton.tsx';
import WarningButton from '../../../components/buttons/WarningButton.tsx';

const MessagesPage = () => {
  // モーダルの表示状態管理
  const [showModal, setShowModal] = useState(false);
  const [showInfoModal, setShowInfoModal] = useState(false);
  const [showConfirmModal, setShowConfirmModal] = useState(false);

  // Notification用の状態管理
  const [unreadCount, setUnreadCount] = useState(2);
  const [showNotificationDropdown, setShowNotificationDropdown] = useState(false);
  const notificationRef = useRef(null);

  // Toast用の状態管理
  const [showToast, setShowToast] = useState(false);
  const [toastConfig, setToastConfig] = useState({ type: 'success', title: '', message: '' });

  // Progress用の状態管理
  const [progressValue, setProgressValue] = useState(45);
  const [circularProgressValue, setCircularProgressValue] = useState(75);

  // Loader用の状態管理
  const [showFullScreenLoader, setShowFullScreenLoader] = useState(false);
  const [showModalLoader, setShowModalLoader] = useState(false);
  const [showSkeletonLoader, setShowSkeletonLoader] = useState(false);

  // AlertDialog用の状態管理
  const [showSuccessAlert, setShowSuccessAlert] = useState(false);
  const [showWarningAlert, setShowWarningAlert] = useState(false);
  const [showDangerAlert, setShowDangerAlert] = useState(false);
  const [showErrorAlert, setShowErrorAlert] = useState(false);
  const [showDeleteAlert, setShowDeleteAlert] = useState(false);
  const [showInfoAlert, setShowInfoAlert] = useState(false);
  const [showCustomAlert, setShowCustomAlert] = useState(false);

  // Snackbar用の状態管理
  const [showSuccessSnackbar, setShowSuccessSnackbar] = useState(false);
  const [showErrorSnackbar, setShowErrorSnackbar] = useState(false);
  const [showWarningSnackbar, setShowWarningSnackbar] = useState(false);
  const [showInfoSnackbar, setShowInfoSnackbar] = useState(false);
  const [showActionSnackbar, setShowActionSnackbar] = useState(false);

  // Badge/Tag component
  const Badge = ({ children, variant = 'default', size = 'md', removable = false, onRemove }) => {
    const variants = {
      default: {
        background: 'var(--color-neutral-100)',
        color: 'var(--color-neutral-700)',
        border: '1px solid var(--color-neutral-200)'
      },
      primary: {
        background: 'rgb(21, 52, 109)',
        color: 'white',
        border: 'none'
      },
      success: {
        background: 'var(--color-success-100)',
        color: 'var(--color-success-800)',
        border: '1px solid var(--color-success-200)'
      },
      warning: {
        background: 'var(--color-warning-100)',
        color: 'var(--color-warning-800)',
        border: '1px solid var(--color-warning-200)'
      },
      danger: {
        background: 'var(--color-error-100)',
        color: 'var(--color-error-800)',
        border: '1px solid var(--color-error-200)'
      },
      info: {
        background: 'var(--color-info-100)',
        color: 'var(--color-info-800)',
        border: '1px solid var(--color-info-200)'
      }
    };

    const sizes = {
      sm: {
        padding: 'var(--spacing-1) var(--spacing-2)',
        fontSize: 'var(--font-size-xs)',
        borderRadius: 'var(--radius-sm)'
      },
      md: {
        padding: 'var(--spacing-1) var(--spacing-3)',
        fontSize: 'var(--font-size-sm)',
        borderRadius: 'var(--radius-md)'
      },
      lg: {
        padding: 'var(--spacing-2) var(--spacing-4)',
        fontSize: 'var(--font-size-base)',
        borderRadius: 'var(--radius-md)'
      }
    };

    const variantStyle = variants[variant] || variants.default;
    const sizeStyle = sizes[size] || sizes.md;

    return (
      <span
        style={{
          display: 'inline-flex',
          alignItems: 'center',
          gap: 'var(--spacing-1)',
          ...variantStyle,
          ...sizeStyle,
          fontWeight: 'var(--font-weight-medium)',
          lineHeight: 1,
          whiteSpace: 'nowrap'
        }}
      >
        {children}
        {removable && (
          <button
            onClick={onRemove}
            style={{
              background: 'none',
              border: 'none',
              color: 'inherit',
              cursor: 'pointer',
              padding: 0,
              marginLeft: 'var(--spacing-1)',
              fontSize: 'var(--font-size-xs)',
              fontWeight: 'bold',
              opacity: 0.7,
              transition: 'opacity 0.2s'
            }}
            onMouseEnter={(e) => e.target.style.opacity = 1}
            onMouseLeave={(e) => e.target.style.opacity = 0.7}
          >
            ×
          </button>
        )}
      </span>
    );
  };

  // Avatar component
  const Avatar = ({
    src,
    alt,
    name,
    size = 'md',
    color = 'blue',
    status,
    clickable = false,
    onClick
  }) => {
    const sizes = {
      xs: '24px',
      sm: '32px',
      md: '40px',
      lg: '48px',
      xl: '64px'
    };

    const colors = {
      blue: { bg: '#3b82f6', text: 'white' },
      green: { bg: '#10b981', text: 'white' },
      purple: { bg: '#8b5cf6', text: 'white' },
      orange: { bg: '#f59e0b', text: 'white' },
      red: { bg: '#ef4444', text: 'white' },
      gray: { bg: '#6b7280', text: 'white' }
    };

    const statusColors = {
      online: '#10b981',
      away: '#f59e0b',
      busy: '#ef4444',
      offline: '#6b7280'
    };

    const avatarSize = sizes[size] || sizes.md;
    const colorConfig = colors[color] || colors.blue;

    // 名前からイニシャルを生成
    const getInitials = (name) => {
      if (!name) return '';
      const names = name.split(' ');
      if (names.length === 1) return names[0].charAt(0).toUpperCase();
      return (names[0].charAt(0) + names[names.length - 1].charAt(0)).toUpperCase();
    };

    const handleClick = () => {
      if (clickable && onClick) {
        onClick();
      }
    };

    return (
      <div
        style={{
          position: 'relative',
          display: 'inline-block',
          cursor: clickable ? 'pointer' : 'default'
        }}
        onClick={handleClick}
      >
        <div
          style={{
            width: avatarSize,
            height: avatarSize,
            borderRadius: '50%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: size === 'xs' ? '10px' : size === 'sm' ? '12px' : size === 'md' ? '14px' : size === 'lg' ? '16px' : '20px',
            fontWeight: '500',
            overflow: 'hidden',
            backgroundColor: src ? 'transparent' : colorConfig.bg,
            color: colorConfig.text,
            transition: 'transform 0.2s, box-shadow 0.2s',
            ...(clickable && {
              ':hover': {
                transform: 'scale(1.05)',
                boxShadow: '0 4px 8px rgba(0, 0, 0, 0.15)'
              }
            })
          }}
        >
          {src ? (
            <img
              src={src}
              alt={alt}
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                borderRadius: '50%'
              }}
              onError={(e) => {
                // 画像の読み込みが失敗した場合はイニシャル表示にフォールバック
                e.target.style.display = 'none';
                e.target.parentNode.style.backgroundColor = colorConfig.bg;
                e.target.parentNode.textContent = getInitials(alt || name);
              }}
            />
          ) : (
            getInitials(name)
          )}
        </div>

        {/* ステータスインジケーター */}
        {status && (
          <div
            style={{
              position: 'absolute',
              bottom: '0',
              right: '0',
              width: size === 'xs' ? '6px' : size === 'sm' ? '8px' : size === 'md' ? '10px' : size === 'lg' ? '12px' : '14px',
              height: size === 'xs' ? '6px' : size === 'sm' ? '8px' : size === 'md' ? '10px' : size === 'lg' ? '12px' : '14px',
              borderRadius: '50%',
              backgroundColor: statusColors[status],
              border: '2px solid white',
              transform: 'translate(25%, 25%)'
            }}
          />
        )}
      </div>
    );
  };

  // Carousel component
  const Carousel = ({
    images = [],
    showIndicators = true,
    showNavigation = true,
    showCaption = true,
    autoPlay = false,
    autoPlayInterval = 5000,
    height = '300px'
  }) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isPlaying, setIsPlaying] = useState(autoPlay);
    const intervalRef = useRef(null);

    // 自動再生の設定
    useEffect(() => {
      if (isPlaying && images.length > 1) {
        intervalRef.current = setInterval(() => {
          setCurrentIndex(prevIndex =>
            prevIndex === images.length - 1 ? 0 : prevIndex + 1
          );
        }, autoPlayInterval);
      } else {
        clearInterval(intervalRef.current);
      }

      return () => clearInterval(intervalRef.current);
    }, [isPlaying, images.length, autoPlayInterval]);

    // 前のスライドへ
    const goToPrevious = () => {
      setCurrentIndex(prevIndex =>
        prevIndex === 0 ? images.length - 1 : prevIndex - 1
      );
    };

    // 次のスライドへ
    const goToNext = () => {
      setCurrentIndex(prevIndex =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    };

    // 特定のスライドへ
    const goToSlide = (index) => {
      setCurrentIndex(index);
    };

    // 自動再生の切り替え
    const togglePlayPause = () => {
      setIsPlaying(!isPlaying);
    };

    if (images.length === 0) {
      return <div>No images to display</div>;
    }

    return (
      <div
        style={{
          position: 'relative',
          width: '100%',
          height: height,
          backgroundColor: '#f3f4f6',
          borderRadius: 'var(--radius-lg)',
          overflow: 'hidden',
          boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)'
        }}
      >
        {/* 画像表示エリア */}
        <div
          style={{
            position: 'relative',
            width: '100%',
            height: '100%',
            overflow: 'hidden'
          }}
        >
          {images.map((image, index) => (
            <div
              key={index}
              style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                opacity: index === currentIndex ? 1 : 0,
                transition: 'opacity 0.5s ease-in-out'
              }}
            >
              <img
                src={image.src}
                alt={image.alt}
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover'
                }}
              />
              {/* キャプション */}
              {showCaption && image.caption && (
                <div
                  style={{
                    position: 'absolute',
                    bottom: 0,
                    left: 0,
                    right: 0,
                    background: 'linear-gradient(transparent, rgba(0, 0, 0, 0.7))',
                    color: 'white',
                    padding: 'var(--spacing-4)',
                    fontSize: 'var(--font-size-sm)',
                    fontWeight: 'var(--font-weight-medium)'
                  }}
                >
                  {image.caption}
                </div>
              )}
            </div>
          ))}
        </div>

        {/* ナビゲーションボタン */}
        {showNavigation && images.length > 1 && (
          <>
            <button
              onClick={goToPrevious}
              style={{
                position: 'absolute',
                left: 'var(--spacing-3)',
                top: '50%',
                transform: 'translateY(-50%)',
                background: 'rgba(255, 255, 255, 0.9)',
                border: 'none',
                borderRadius: '50%',
                width: '40px',
                height: '40px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer',
                boxShadow: '0 2px 4px rgba(0, 0, 0, 0.2)',
                transition: 'background-color 0.2s, transform 0.2s',
                zIndex: 2
              }}
              onMouseEnter={(e) => {
                e.target.style.backgroundColor = 'rgba(255, 255, 255, 1)';
                e.target.style.transform = 'translateY(-50%) scale(1.1)';
              }}
              onMouseLeave={(e) => {
                e.target.style.backgroundColor = 'rgba(255, 255, 255, 0.9)';
                e.target.style.transform = 'translateY(-50%) scale(1)';
              }}
            >
              <Icon name="chevron-left" className="w-5 h-5" color="#374151" />
            </button>

            <button
              onClick={goToNext}
              style={{
                position: 'absolute',
                right: 'var(--spacing-3)',
                top: '50%',
                transform: 'translateY(-50%)',
                background: 'rgba(255, 255, 255, 0.9)',
                border: 'none',
                borderRadius: '50%',
                width: '40px',
                height: '40px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer',
                boxShadow: '0 2px 4px rgba(0, 0, 0, 0.2)',
                transition: 'background-color 0.2s, transform 0.2s',
                zIndex: 2
              }}
              onMouseEnter={(e) => {
                e.target.style.backgroundColor = 'rgba(255, 255, 255, 1)';
                e.target.style.transform = 'translateY(-50%) scale(1.1)';
              }}
              onMouseLeave={(e) => {
                e.target.style.backgroundColor = 'rgba(255, 255, 255, 0.9)';
                e.target.style.transform = 'translateY(-50%) scale(1)';
              }}
            >
              <Icon name="chevron-right" className="w-5 h-5" color="#374151" />
            </button>
          </>
        )}

        {/* インジケーター */}
        {showIndicators && images.length > 1 && (
          <div
            style={{
              position: 'absolute',
              bottom: 'var(--spacing-3)',
              left: '50%',
              transform: 'translateX(-50%)',
              display: 'flex',
              gap: 'var(--spacing-2)',
              zIndex: 2
            }}
          >
            {images.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                style={{
                  width: '12px',
                  height: '12px',
                  borderRadius: '50%',
                  border: 'none',
                  backgroundColor: index === currentIndex ? 'white' : 'rgba(255, 255, 255, 0.5)',
                  cursor: 'pointer',
                  transition: 'background-color 0.3s, transform 0.2s',
                  boxShadow: '0 1px 2px rgba(0, 0, 0, 0.2)'
                }}
                onMouseEnter={(e) => {
                  if (index !== currentIndex) {
                    e.target.style.backgroundColor = 'rgba(255, 255, 255, 0.8)';
                  }
                  e.target.style.transform = 'scale(1.2)';
                }}
                onMouseLeave={(e) => {
                  e.target.style.backgroundColor = index === currentIndex ? 'white' : 'rgba(255, 255, 255, 0.5)';
                  e.target.style.transform = 'scale(1)';
                }}
              />
            ))}
          </div>
        )}

        {/* 再生/一時停止ボタン（自動再生対応時） */}
        {autoPlay && (
          <button
            onClick={togglePlayPause}
            style={{
              position: 'absolute',
              top: 'var(--spacing-3)',
              right: 'var(--spacing-3)',
              background: 'rgba(0, 0, 0, 0.6)',
              border: 'none',
              borderRadius: 'var(--radius-md)',
              color: 'white',
              padding: 'var(--spacing-2)',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              transition: 'background-color 0.2s',
              zIndex: 2
            }}
            onMouseEnter={(e) => e.target.style.backgroundColor = 'rgba(0, 0, 0, 0.8)'}
            onMouseLeave={(e) => e.target.style.backgroundColor = 'rgba(0, 0, 0, 0.6)'}
          >
            <span style={{ fontSize: '12px', fontWeight: 'bold' }}>
              {isPlaying ? '⏸️' : '▶️'}
            </span>
          </button>
        )}

        {/* 画像カウンター */}
        <div
          style={{
            position: 'absolute',
            top: 'var(--spacing-3)',
            left: 'var(--spacing-3)',
            background: 'rgba(0, 0, 0, 0.6)',
            color: 'white',
            padding: 'var(--spacing-1) var(--spacing-2)',
            borderRadius: 'var(--radius-md)',
            fontSize: 'var(--font-size-xs)',
            fontWeight: 'var(--font-weight-medium)',
            zIndex: 2
          }}
        >
          {currentIndex + 1} / {images.length}
        </div>
      </div>
    );
  };

  // VideoPlayer component
  const VideoPlayer = ({
    src,
    poster,
    width = '100%',
    height = '300px',
    controls = true,
    autoPlay = false,
    muted = false,
    loop = false,
    customControls = false
  }) => {
    const videoRef = useRef(null);
    const [isPlaying, setIsPlaying] = useState(false);
    const [duration, setDuration] = useState(0);
    const [currentTime, setCurrentTime] = useState(0);
    const [volume, setVolume] = useState(1);
    const [isMuted, setIsMuted] = useState(muted);
    const [isFullscreen, setIsFullscreen] = useState(false);

    useEffect(() => {
      const video = videoRef.current;
      if (!video) return;

      const updateTime = () => setCurrentTime(video.currentTime);
      const updateDuration = () => setDuration(video.duration);

      video.addEventListener('timeupdate', updateTime);
      video.addEventListener('loadedmetadata', updateDuration);
      video.addEventListener('ended', () => setIsPlaying(false));

      return () => {
        video.removeEventListener('timeupdate', updateTime);
        video.removeEventListener('loadedmetadata', updateDuration);
        video.removeEventListener('ended', () => setIsPlaying(false));
      };
    }, []);

    const togglePlay = () => {
      if (videoRef.current) {
        if (isPlaying) {
          videoRef.current.pause();
        } else {
          videoRef.current.play();
        }
        setIsPlaying(!isPlaying);
      }
    };

    const handleVolumeChange = (e) => {
      const newVolume = parseFloat(e.target.value);
      setVolume(newVolume);
      if (videoRef.current) {
        videoRef.current.volume = newVolume;
      }
      setIsMuted(newVolume === 0);
    };

    const toggleMute = () => {
      if (videoRef.current) {
        videoRef.current.muted = !isMuted;
        setIsMuted(!isMuted);
      }
    };

    const handleSeek = (e) => {
      const rect = e.currentTarget.getBoundingClientRect();
      const percent = (e.clientX - rect.left) / rect.width;
      const newTime = percent * duration;
      if (videoRef.current) {
        videoRef.current.currentTime = newTime;
        setCurrentTime(newTime);
      }
    };

    const toggleFullscreen = () => {
      if (!document.fullscreenElement) {
        videoRef.current?.requestFullscreen();
        setIsFullscreen(true);
      } else {
        document.exitFullscreen();
        setIsFullscreen(false);
      }
    };

    const formatTime = (time) => {
      const minutes = Math.floor(time / 60);
      const seconds = Math.floor(time % 60);
      return `${minutes}:${seconds.toString().padStart(2, '0')}`;
    };

    return (
      <div className="video-player" style={{ width, position: 'relative' }}>
        <video
          ref={videoRef}
          src={src}
          poster={poster}
          width="100%"
          height={height}
          controls={!customControls && controls}
          autoPlay={autoPlay}
          muted={muted}
          loop={loop}
          style={{
            display: 'block',
            backgroundColor: '#000',
            borderRadius: 'var(--radius-md)'
          }}
        />

        {customControls && (
          <div className="custom-controls">
            <div className="progress-bar" onClick={handleSeek}>
              <div
                className="progress-fill"
                style={{ width: `${(currentTime / duration) * 100}%` }}
              />
            </div>

            <div className="controls-row">
              <div className="controls-left">
                <button onClick={togglePlay} className="control-button">
                  {isPlaying ? '⏸️' : '▶️'}
                </button>
                <button onClick={toggleMute} className="control-button">
                  {isMuted || volume === 0 ? '🔇' : volume > 0.5 ? '🔊' : '🔉'}
                </button>
                <input
                  type="range"
                  min="0"
                  max="1"
                  step="0.1"
                  value={isMuted ? 0 : volume}
                  onChange={handleVolumeChange}
                  className="volume-slider"
                />
                <span className="time-display">
                  {formatTime(currentTime)} / {formatTime(duration)}
                </span>
              </div>

              <div className="controls-right">
                <button onClick={toggleFullscreen} className="control-button">
                  {isFullscreen ? '🗗' : '⛶'}
                </button>
              </div>
            </div>
          </div>
        )}

        <style jsx>{`
          .video-player {
            border-radius: var(--radius-md);
            overflow: hidden;
            box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
          }

          .custom-controls {
            position: absolute;
            bottom: 0;
            left: 0;
            right: 0;
            background: linear-gradient(transparent, rgba(0, 0, 0, 0.7));
            padding: var(--spacing-3);
            color: white;
          }

          .progress-bar {
            height: 4px;
            background: rgba(255, 255, 255, 0.3);
            border-radius: 2px;
            cursor: pointer;
            margin-bottom: var(--spacing-2);
          }

          .progress-fill {
            height: 100%;
            background: var(--color-primary-500);
            border-radius: 2px;
            transition: width 0.1s ease;
          }

          .controls-row {
            display: flex;
            justify-content: space-between;
            align-items: center;
          }

          .controls-left {
            display: flex;
            align-items: center;
            gap: var(--spacing-2);
          }

          .controls-right {
            display: flex;
            align-items: center;
            gap: var(--spacing-2);
          }

          .control-button {
            background: none;
            border: none;
            color: white;
            font-size: 16px;
            cursor: pointer;
            padding: var(--spacing-1);
            border-radius: var(--radius-sm);
            transition: background-color 0.2s ease;
          }

          .control-button:hover {
            background: rgba(255, 255, 255, 0.2);
          }

          .volume-slider {
            width: 60px;
            accent-color: var(--color-primary-500);
          }

          .time-display {
            font-size: var(--font-size-sm);
            color: rgba(255, 255, 255, 0.9);
            white-space: nowrap;
          }
        `}</style>
      </div>
    );
  };

  // AlertDialog component
  const AlertDialog = ({
    show = false,
    type = 'info',
    title,
    message,
    confirmText = '確認',
    cancelText = 'キャンセル',
    showCancel = true,
    onConfirm,
    onCancel,
    onClose
  }) => {
    const typeConfig = {
      success: {
        icon: '✓',
        color: '#10b981',
        bgColor: '#ecfdf5',
        borderColor: '#10b981'
      },
      warning: {
        icon: '⚠',
        color: '#f59e0b',
        bgColor: '#fffbeb',
        borderColor: '#f59e0b'
      },
      danger: {
        icon: '✕',
        color: '#ef4444',
        bgColor: '#fef2f2',
        borderColor: '#ef4444'
      },
      info: {
        icon: 'ℹ',
        color: '#3b82f6',
        bgColor: '#eff6ff',
        borderColor: '#3b82f6'
      }
    };

    const config = typeConfig[type] || typeConfig.info;

    const handleBackdropClick = (e) => {
      if (e.target === e.currentTarget && onClose) {
        onClose();
      }
    };

    const handleConfirmClick = () => {
      if (onConfirm) onConfirm();
      if (onClose) onClose();
    };

    const handleCancelClick = () => {
      if (onCancel) onCancel();
      if (onClose) onClose();
    };

    if (!show) return null;

    return (
      <div
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: 'rgba(0, 0, 0, 0.5)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          zIndex: 1000,
          padding: 'var(--spacing-4)'
        }}
        onClick={handleBackdropClick}
      >
        <div
          style={{
            backgroundColor: 'white',
            borderRadius: 'var(--radius-lg)',
            boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
            maxWidth: '400px',
            width: '100%',
            maxHeight: '90vh',
            overflow: 'auto'
          }}
        >
          {/* ヘッダー */}
          <div
            style={{
              padding: 'var(--spacing-6)',
              borderBottom: '1px solid var(--color-neutral-200)',
              display: 'flex',
              alignItems: 'center',
              gap: 'var(--spacing-3)'
            }}
          >
            <div
              style={{
                width: '40px',
                height: '40px',
                borderRadius: '50%',
                backgroundColor: config.bgColor,
                border: `2px solid ${config.borderColor}`,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '20px',
                color: config.color,
                fontWeight: 'bold'
              }}
            >
              {config.icon}
            </div>
            <div>
              <h3
                style={{
                  margin: 0,
                  fontSize: 'var(--font-size-lg)',
                  fontWeight: 'var(--font-weight-semibold)',
                  color: 'var(--color-neutral-900)'
                }}
              >
                {title}
              </h3>
            </div>
          </div>

          {/* コンテンツ */}
          <div
            style={{
              padding: 'var(--spacing-6)'
            }}
          >
            <p
              style={{
                margin: 0,
                fontSize: 'var(--font-size-sm)',
                lineHeight: 'var(--line-height-relaxed)',
                color: 'var(--color-neutral-700)'
              }}
            >
              {message}
            </p>
          </div>

          {/* アクション */}
          <div
            style={{
              padding: 'var(--spacing-6)',
              paddingTop: 0,
              display: 'flex',
              gap: 'var(--spacing-3)',
              justifyContent: 'flex-end'
            }}
          >
            {showCancel && (
              <SecondaryButton onClick={handleCancelClick}>
                {cancelText}
              </SecondaryButton>
            )}
            <button
              onClick={handleConfirmClick}
              style={{
                padding: 'var(--spacing-2) var(--spacing-4)',
                borderRadius: 'var(--radius-md)',
                border: 'none',
                fontSize: 'var(--font-size-sm)',
                fontWeight: 'var(--font-weight-medium)',
                cursor: 'pointer',
                transition: 'all 0.2s',
                backgroundColor: config.color,
                color: 'white'
              }}
              onMouseEnter={(e) => {
                e.target.style.opacity = '0.9';
                e.target.style.transform = 'translateY(-1px)';
              }}
              onMouseLeave={(e) => {
                e.target.style.opacity = '1';
                e.target.style.transform = 'translateY(0)';
              }}
            >
              {confirmText}
            </button>
          </div>
        </div>
      </div>
    );
  };

  // Snackbar component
  const Snackbar = ({
    show,
    type = 'info',
    message,
    action = null,
    actionText = null,
    onAction = null,
    onClose,
    autoHide = true,
    duration = 4000,
    position = 'bottom-left'
  }) => {
    useEffect(() => {
      if (show && autoHide) {
        const timer = setTimeout(() => {
          onClose();
        }, duration);
        return () => clearTimeout(timer);
      }
    }, [show, autoHide, duration, onClose]);

    if (!show) return null;

    const typeStyles = {
      success: {
        backgroundColor: '#d4edda',
        borderColor: '#c3e6cb',
        color: '#155724',
        iconColor: '#28a745'
      },
      error: {
        backgroundColor: '#f8d7da',
        borderColor: '#f5c6cb',
        color: '#721c24',
        iconColor: '#dc3545'
      },
      warning: {
        backgroundColor: '#fff3cd',
        borderColor: '#ffeaa7',
        color: '#856404',
        iconColor: '#ffc107'
      },
      info: {
        backgroundColor: '#d1ecf1',
        borderColor: '#bee5eb',
        color: '#0c5460',
        iconColor: '#17a2b8'
      }
    };

    const positionStyles = {
      'top-left': { top: '20px', left: '20px' },
      'top-right': { top: '20px', right: '20px' },
      'bottom-left': { bottom: '20px', left: '20px' },
      'bottom-right': { bottom: '20px', right: '20px' },
      'top-center': { top: '20px', left: '50%', transform: 'translateX(-50%)' },
      'bottom-center': { bottom: '20px', left: '50%', transform: 'translateX(-50%)' }
    };

    const getIcon = () => {
      switch (type) {
        case 'success': return '✓';
        case 'error': return '✕';
        case 'warning': return '⚠';
        case 'info': return 'ℹ';
        default: return 'ℹ';
      }
    };

    return (
      <div
        style={{
          position: 'fixed',
          ...positionStyles[position],
          zIndex: 1000,
          minWidth: '300px',
          maxWidth: '500px',
          padding: '12px 16px',
          backgroundColor: typeStyles[type].backgroundColor,
          border: `1px solid ${typeStyles[type].borderColor}`,
          borderRadius: '8px',
          boxShadow: '0 4px 12px rgba(0, 0, 0, 0.15)',
          display: 'flex',
          alignItems: 'center',
          gap: '12px',
          animation: 'slideIn 0.3s ease-out',
          fontSize: '14px',
          lineHeight: '1.4'
        }}
      >
        <style>
          {`
            @keyframes slideIn {
              from {
                opacity: 0;
                transform: ${position.includes('bottom') ? 'translateY(100%)' : 'translateY(-100%)'} ${position.includes('center') ? 'translateX(-50%)' : ''};
              }
              to {
                opacity: 1;
                transform: ${position.includes('center') ? 'translateX(-50%)' : 'none'};
              }
            }
          `}
        </style>

        <span
          style={{
            color: typeStyles[type].iconColor,
            fontSize: '16px',
            fontWeight: 'bold',
            flexShrink: 0
          }}
        >
          {getIcon()}
        </span>

        <span
          style={{
            color: typeStyles[type].color,
            flex: 1
          }}
        >
          {message}
        </span>

        {action && actionText && (
          <button
            onClick={onAction}
            style={{
              background: 'none',
              border: 'none',
              color: typeStyles[type].iconColor,
              textDecoration: 'underline',
              cursor: 'pointer',
              fontSize: '14px',
              fontWeight: '500',
              padding: '0',
              marginLeft: '8px'
            }}
          >
            {actionText}
          </button>
        )}

        <button
          onClick={onClose}
          style={{
            background: 'none',
            border: 'none',
            color: typeStyles[type].color,
            cursor: 'pointer',
            fontSize: '16px',
            padding: '0',
            marginLeft: '8px',
            opacity: 0.7,
            flexShrink: 0
          }}
        >
          ×
        </button>
      </div>
    );
  };

  // 外部クリックで通知ドロップダウンを閉じる
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (notificationRef.current && !notificationRef.current.contains(event.target)) {
        setShowNotificationDropdown(false);
      }
    };

    if (showNotificationDropdown) {
      document.addEventListener('mousedown', handleClickOutside);
      return () => {
        document.removeEventListener('mousedown', handleClickOutside);
      };
    }
  }, [showNotificationDropdown]);

  // ローダーコンポーネント
  const FullScreenLoader = ({ show, message = "読み込み中..." }) => {
    if (!show) return null;
    return (
      <div style={{
        position: 'fixed',
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

  const ModalLoader = ({ show, onClose, message = "処理中..." }) => {
    if (!show) return null;
    return (
      <div style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        zIndex: 9999
      }}>
        <div style={{
          backgroundColor: 'white',
          borderRadius: 'var(--radius-lg)',
          padding: 'var(--spacing-8)',
          textAlign: 'center',
          minWidth: '300px',
          boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)'
        }}>
          <div style={{
            width: '40px',
            height: '40px',
            border: '4px solid #f3f4f6',
            borderTop: '4px solid rgb(21, 52, 109)',
            borderRadius: '50%',
            animation: 'spin 1s linear infinite',
            margin: '0 auto var(--spacing-4) auto'
          }} />
          <h3 style={{
            marginBottom: 'var(--spacing-2)',
            fontSize: 'var(--font-size-lg)',
            fontWeight: 'var(--font-weight-semibold)',
            color: 'var(--color-neutral-900)'
          }}>
            {message}
          </h3>
          <p style={{
            color: 'var(--color-neutral-600)',
            fontSize: 'var(--font-size-sm)',
            marginBottom: 'var(--spacing-4)'
          }}>
            しばらくお待ちください...
          </p>
          {onClose && (
            <button
              onClick={onClose}
              style={{
                padding: 'var(--spacing-2) var(--spacing-4)',
                backgroundColor: 'var(--color-neutral-100)',
                border: '1px solid var(--color-neutral-300)',
                borderRadius: 'var(--radius-md)',
                fontSize: 'var(--font-size-sm)',
                cursor: 'pointer'
              }}
            >
              キャンセル
            </button>
          )}
        </div>
      </div>
    );
  };


  // DashboardSection用のサンプルデータ
  const dashboardStats = [
    { label: '総ユーザー数', value: '1,234', icon: 'users', color: 'primary' },
    { label: 'アクティブセッション', value: '89', icon: 'user-check', color: 'success' },
    { label: '本日の訪問数', value: '456', icon: 'eye', color: 'info' },
    { label: 'エラー率', value: '0.23%', icon: 'warning', color: 'warning' }
  ];

  const getColorStyles = (color) => {
    const colorMap = {
      primary: { bg: '#f0f4f8', text: '#2c3e50', icon: '#2c3e50' },
      success: { bg: '#e6f4ea', text: '#137333', icon: '#34a853' },
      info: { bg: '#e8f0fe', text: '#1967d2', icon: '#4285f4' },
      warning: { bg: '#fef7e0', text: '#7a6100', icon: '#fbbc04' }
    };
    return colorMap[color] || colorMap.primary;
  };

  // FlashMessage コンポーネント
  const FlashMessage = ({ type, message, icon, onClose }) => {
    const alertStyles = {
      success: { bg: '#dcfce7', border: '#bbf7d0', text: '#15803d', iconColor: '#16a34a' },
      info: { bg: '#dbeafe', border: '#bfdbfe', text: '#1e40af', iconColor: '#3b82f6' },
      warning: { bg: '#fef3c7', border: '#fde68a', text: '#92400e', iconColor: '#f59e0b' },
      danger: { bg: '#fecaca', border: '#fecaca', text: '#b91c1c', iconColor: '#ef4444' }
    };

    const style = alertStyles[type] || alertStyles.info;
    const iconName = icon || {
      success: 'check',
      info: 'info',
      warning: 'warning',
      danger: 'error'
    }[type];

    return (
      <div style={{
        backgroundColor: style.bg,
        border: `1px solid ${style.border}`,
        borderRadius: 'var(--radius-md)',
        padding: 'var(--spacing-4)',
        marginBottom: 'var(--spacing-3)',
        display: 'flex',
        alignItems: 'center',
        gap: 'var(--spacing-3)'
      }}>
        <Icon name={iconName} style={{ color: style.iconColor, width: '20px', height: '20px', flexShrink: 0 }} />
        <div style={{ color: style.text, fontSize: 'var(--font-size-sm)', flex: 1 }}>
          {message}
        </div>
      </div>
    );
  };

  // Toast コンポーネント
  const Toast = ({ type, title, message, showToast, onClose }) => {
    if (!showToast) return null;

    const toastStyles = {
      success: { bg: '#059669', border: '#059669', text: '#ffffff', iconColor: '#ffffff' },
      info: { bg: '#3b82f6', border: '#3b82f6', text: '#ffffff', iconColor: '#ffffff' },
      warning: { bg: '#f59e0b', border: '#f59e0b', text: '#ffffff', iconColor: '#ffffff' },
      error: { bg: '#ef4444', border: '#ef4444', text: '#ffffff', iconColor: '#ffffff' }
    };

    const style = toastStyles[type] || toastStyles.info;
    const iconName = {
      success: 'check',
      info: 'info',
      warning: 'warning',
      error: 'error'
    }[type];

    return (
      <div style={{
        position: 'fixed',
        top: '20px',
        right: '20px',
        backgroundColor: style.bg,
        border: `1px solid ${style.border}`,
        borderRadius: 'var(--radius-lg)',
        padding: 'var(--spacing-4)',
        color: style.text,
        minWidth: '300px',
        maxWidth: '400px',
        boxShadow: '0 10px 25px rgba(0, 0, 0, 0.15)',
        zIndex: 1000,
        display: 'flex',
        alignItems: 'flex-start',
        gap: 'var(--spacing-3)',
        animation: 'slideInRight 0.3s ease-out'
      }}>
        <Icon name={iconName} style={{ color: style.iconColor, width: '20px', height: '20px', flexShrink: 0 }} />
        <div style={{ flex: 1 }}>
          <div style={{ fontWeight: 'var(--font-weight-semibold)', marginBottom: 'var(--spacing-1)' }}>
            {title}
          </div>
          <div style={{ fontSize: 'var(--font-size-sm)' }}>
            {message}
          </div>
        </div>
        <button
          onClick={onClose}
          style={{
            background: 'none',
            border: 'none',
            color: style.iconColor,
            cursor: 'pointer',
            padding: 'var(--spacing-1)',
            borderRadius: 'var(--radius-sm)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}
        >
          <Icon name="close" style={{ width: '16px', height: '16px' }} />
        </button>
      </div>
    );
  };

  // ProgressBar コンポーネント
  const ProgressBar = ({ value, max = 100, showLabel = false, color = 'primary', size = 'md' }) => {
    const percentage = Math.min((value / max) * 100, 100);

    const colorStyles = {
      primary: '#3b82f6',
      success: '#10b981',
      warning: '#f59e0b',
      danger: '#ef4444'
    };

    const sizeStyles = {
      sm: { height: '4px', fontSize: 'var(--font-size-xs)' },
      md: { height: '8px', fontSize: 'var(--font-size-sm)' },
      lg: { height: '12px', fontSize: 'var(--font-size-base)' }
    };

    const heightStyle = sizeStyles[size] || sizeStyles.md;
    const bgColor = colorStyles[color] || colorStyles.primary;

    return (
      <div style={{ width: '100%' }}>
        {showLabel && (
          <div style={{
            display: 'flex',
            justifyContent: 'space-between',
            marginBottom: 'var(--spacing-2)',
            fontSize: heightStyle.fontSize,
            color: 'var(--color-neutral-700)'
          }}>
            <span>進捗</span>
            <span>{Math.round(percentage)}%</span>
          </div>
        )}
        <div style={{
          width: '100%',
          height: heightStyle.height,
          backgroundColor: 'var(--color-neutral-200)',
          borderRadius: 'var(--radius-full)',
          overflow: 'hidden'
        }}>
          <div style={{
            width: `${percentage}%`,
            height: '100%',
            backgroundColor: bgColor,
            transition: 'width 0.3s ease-in-out',
            borderRadius: 'var(--radius-full)'
          }} />
        </div>
      </div>
    );
  };

  // CircularProgress コンポーネント
  const CircularProgress = ({ value, max = 100, size = 'md', color = 'primary', showLabel = false }) => {
    const percentage = Math.min((value / max) * 100, 100);

    const sizeStyles = {
      sm: { size: 40, strokeWidth: 3, fontSize: 'var(--font-size-xs)' },
      md: { size: 60, strokeWidth: 4, fontSize: 'var(--font-size-sm)' },
      lg: { size: 80, strokeWidth: 5, fontSize: 'var(--font-size-base)' }
    };

    const colorStyles = {
      primary: '#3b82f6',
      success: '#10b981',
      warning: '#f59e0b',
      danger: '#ef4444'
    };

    const style = sizeStyles[size] || sizeStyles.md;
    const bgColor = colorStyles[color] || colorStyles.primary;
    const radius = (style.size - style.strokeWidth * 2) / 2;
    const circumference = radius * 2 * Math.PI;
    const strokeDasharray = `${(percentage / 100) * circumference} ${circumference}`;

    return (
      <div style={{ position: 'relative', display: 'inline-flex', alignItems: 'center', justifyContent: 'center' }}>
        <svg width={style.size} height={style.size} style={{ transform: 'rotate(-90deg)' }}>
          <circle
            cx={style.size / 2}
            cy={style.size / 2}
            r={radius}
            fill="none"
            stroke="var(--color-neutral-200)"
            strokeWidth={style.strokeWidth}
          />
          <circle
            cx={style.size / 2}
            cy={style.size / 2}
            r={radius}
            fill="none"
            stroke={bgColor}
            strokeWidth={style.strokeWidth}
            strokeDasharray={strokeDasharray}
            strokeLinecap="round"
            style={{ transition: 'stroke-dasharray 0.3s ease-in-out' }}
          />
        </svg>
        {showLabel && (
          <div style={{
            position: 'absolute',
            inset: 0,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: style.fontSize,
            fontWeight: 'var(--font-weight-semibold)',
            color: 'var(--color-neutral-700)'
          }}>
            {Math.round(percentage)}%
          </div>
        )}
      </div>
    );
  };

  // SkeletonLoader コンポーネント
  const SkeletonLoader = ({ lines = 3, height = 16, className = '' }) => {
    return (
      <div className={className}>
        {Array.from({ length: lines }).map((_, index) => (
          <div
            key={index}
            style={{
              height: `${height}px`,
              backgroundColor: '#f3f4f6',
              borderRadius: 'var(--radius-sm)',
              marginBottom: index < lines - 1 ? 'var(--spacing-2)' : 0,
              animation: 'pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
              width: index === lines - 1 ? '75%' : '100%'
            }}
          />
        ))}
      </div>
    );
  };

  // Card component
  const Card = ({ children, header, footer, className = '', style = {} }) => {
    return (
      <div
        className={`card ${className}`}
        style={{
          backgroundColor: 'var(--color-neutral-white)',
          border: '1px solid var(--color-neutral-200)',
          borderRadius: 'var(--radius-lg)',
          overflow: 'hidden',
          boxShadow: '0 1px 3px 0 rgba(0, 0, 0, 0.1)',
          ...style
        }}
      >
        {header && (
          <div style={{
            padding: 'var(--spacing-4)',
            borderBottom: '1px solid var(--color-neutral-200)',
            backgroundColor: 'var(--color-neutral-50)'
          }}>
            {header}
          </div>
        )}
        <div style={{ padding: 'var(--spacing-4)' }}>
          {children}
        </div>
        {footer && (
          <div style={{
            padding: 'var(--spacing-4)',
            borderTop: '1px solid var(--color-neutral-200)',
            backgroundColor: 'var(--color-neutral-50)'
          }}>
            {footer}
          </div>
        )}
      </div>
    );
  };

  return (
    <div className="messages-page">
      <style jsx>{`
        .messages-page {
          padding: var(--spacing-8);
          max-width: 1200px;
          margin: 0 auto;
        }

        .page-header {
          margin-bottom: var(--spacing-8);
        }

        .page-title {
          font-size: var(--font-size-3xl);
          font-weight: var(--font-weight-bold);
          color: var(--color-neutral-900);
          margin-bottom: var(--spacing-4);
        }

        .page-description {
          color: var(--color-neutral-600);
          font-size: var(--font-size-lg);
          line-height: var(--line-height-relaxed);
        }

        .component-section {
          margin-bottom: var(--spacing-12);
        }

        .section-title {
          font-size: var(--font-size-2xl);
          font-weight: var(--font-weight-semibold);
          color: var(--color-neutral-900);
          margin-bottom: var(--spacing-6);
          border-bottom: 2px solid var(--color-primary-200);
          padding-bottom: var(--spacing-3);
        }

        .component-card {
          background: var(--color-neutral-white);
          border: 1px solid var(--color-neutral-200);
          border-radius: var(--radius-lg);
          padding: var(--spacing-6);
          margin-bottom: var(--spacing-6);
        }

        .component-info {
          margin-bottom: var(--spacing-4);
        }

        .component-name {
          font-size: var(--font-size-lg);
          font-weight: var(--font-weight-semibold);
          color: var(--color-neutral-900);
          margin-bottom: var(--spacing-2);
        }

        .component-description {
          font-size: var(--font-size-sm);
          color: var(--color-neutral-600);
          margin-bottom: var(--spacing-4);
        }

        .component-demo {
          padding: var(--spacing-4);
          background: var(--color-neutral-50);
          border: 1px solid var(--color-neutral-200);
          border-radius: var(--radius-md);
          margin-bottom: var(--spacing-4);
        }

        .button-group {
          display: flex;
          gap: var(--spacing-3);
          margin-bottom: var(--spacing-4);
          flex-wrap: wrap;
        }


        .code-snippet {
          background: var(--color-neutral-900);
          color: var(--color-neutral-100);
          padding: var(--spacing-4);
          border-radius: var(--radius-md);
          font-family: 'Monaco', 'Menlo', 'Ubuntu Mono', monospace;
          font-size: var(--font-size-sm);
          line-height: 1.5;
          overflow-x: auto;
          white-space: pre;
        }

        .usage-notes {
          background: var(--color-info-50);
          border: 1px solid var(--color-info-200);
          border-radius: var(--radius-md);
          padding: var(--spacing-6);
          margin-top: var(--spacing-8);
        }

        .usage-notes h2 {
          color: var(--color-info-800);
          margin-bottom: var(--spacing-4);
        }

        .usage-notes ul {
          color: var(--color-info-700);
          padding-left: var(--spacing-5);
        }

        .usage-notes li {
          margin-bottom: var(--spacing-2);
        }

        .dashboard-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: var(--spacing-4);
          margin-bottom: var(--spacing-4);
        }

        .stat-card {
          padding: var(--spacing-4);
          border-radius: var(--radius-md);
          display: flex;
          align-items: center;
          gap: var(--spacing-3);
        }

        .stat-icon {
          width: 40px;
          height: 40px;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: var(--radius-md);
        }

        .stat-content {
          flex: 1;
        }

        .stat-label {
          font-size: var(--font-size-sm);
          margin-bottom: var(--spacing-1);
        }

        .stat-value {
          font-size: var(--font-size-xl);
          font-weight: var(--font-weight-bold);
        }

        .notification-panel-demo {
          background: var(--color-neutral-white);
          border: 1px solid var(--color-neutral-200);
          border-radius: var(--radius-lg);
          padding: var(--spacing-4);
          max-width: 400px;
          margin: 0 auto;
          position: relative;
        }

        .notification-panel-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: var(--spacing-3) 0;
          border-bottom: 1px solid var(--color-neutral-200);
          margin-bottom: var(--spacing-4);
        }

        .notification-dropdown {
          position: absolute;
          top: calc(100% + 8px);
          right: -100px;
          width: 320px;
          background: var(--color-neutral-white);
          border: 1px solid var(--color-neutral-200);
          border-radius: var(--radius-lg);
          box-shadow: 0 10px 25px rgba(0, 0, 0, 0.15);
          z-index: 1000;
          max-height: 400px;
          overflow-y: auto;
        }

        .notification-dropdown-header {
          padding: var(--spacing-4);
          border-bottom: 1px solid var(--color-neutral-200);
          display: flex;
          align-items: center;
          justify-content: space-between;
        }

        .notification-dropdown-title {
          font-size: var(--font-size-lg);
          font-weight: var(--font-weight-semibold);
          color: var(--color-neutral-900);
          margin: 0;
        }

        .notification-close-btn {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 24px;
          height: 24px;
          border: none;
          background: none;
          cursor: pointer;
          border-radius: var(--radius-sm);
          transition: background 0.2s;
          color: var(--color-neutral-500);
        }

        .notification-close-btn:hover {
          background: var(--color-neutral-100);
          color: var(--color-neutral-700);
        }

        .notification-dropdown-content {
          padding: var(--spacing-2);
        }

        .notification-dropdown-footer {
          padding: var(--spacing-3);
          border-top: 1px solid var(--color-neutral-200);
        }

        .notification-title {
          font-size: var(--font-size-lg);
          font-weight: var(--font-weight-semibold);
          color: var(--color-neutral-900);
          margin: 0;
        }

        .notification-button {
          position: relative;
          display: flex;
          align-items: center;
          justify-content: center;
          width: 32px;
          height: 32px;
          border: none;
          background: var(--color-neutral-100);
          border-radius: var(--radius-md);
          cursor: pointer;
          transition: background 0.2s;
          color: var(--color-warning-600);
        }

        .notification-button:hover {
          background: var(--color-neutral-200);
          color: var(--color-warning-700);
        }

        .notification-badge {
          position: absolute;
          top: -6px;
          right: -6px;
          min-width: 24px;
          height: 24px;
          background: #ef4444;
          color: #ffffff !important;
          font-size: 14px;
          font-weight: bold;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 0 6px;
          border: 2px solid #ffffff;
          box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
          line-height: 1;
        }

        .notification-item {
          display: flex;
          gap: var(--spacing-3);
          padding: var(--spacing-3);
          border-radius: var(--radius-md);
          margin-bottom: var(--spacing-3);
          background: var(--color-neutral-50);
          border: 1px solid var(--color-neutral-200);
        }

        .notification-item.unread {
          background: var(--color-info-50);
          border-color: var(--color-info-200);
        }

        .notification-icon {
          color: var(--color-neutral-600);
          margin-top: var(--spacing-1);
          flex-shrink: 0;
        }

        .notification-item.unread .notification-icon {
          color: var(--color-info-600);
        }

        .notification-content {
          flex: 1;
        }

        .notification-item-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: var(--spacing-2);
        }

        .notification-item-title {
          font-size: var(--font-size-sm);
          font-weight: var(--font-weight-semibold);
          color: var(--color-neutral-900);
          margin: 0;
        }

        .notification-time {
          font-size: var(--font-size-xs);
          color: var(--color-neutral-500);
        }

        .notification-item-message {
          font-size: var(--font-size-sm);
          color: var(--color-neutral-700);
          margin: 0 0 var(--spacing-3) 0;
          line-height: 1.4;
        }

        .notification-item-actions {
          display: flex;
          gap: var(--spacing-2);
        }

        .notification-action-btn {
          display: flex;
          align-items: center;
          gap: var(--spacing-1);
          padding: var(--spacing-1) var(--spacing-2);
          border: 1px solid var(--color-neutral-300);
          background: var(--color-neutral-white);
          border-radius: var(--radius-sm);
          cursor: pointer;
          font-size: var(--font-size-xs);
          color: var(--color-neutral-600);
          transition: all 0.2s;
        }

        .notification-action-btn:hover {
          background: var(--color-neutral-100);
          border-color: var(--color-neutral-400);
        }

        .notification-footer-link {
          display: block;
          text-align: center;
          padding: var(--spacing-3);
          color: var(--color-primary-600);
          text-decoration: none;
          font-size: var(--font-size-sm);
          font-weight: var(--font-weight-medium);
          border-top: 1px solid var(--color-neutral-200);
          margin-top: var(--spacing-4);
          transition: color 0.2s;
        }

        .notification-footer-link:hover {
          color: var(--color-primary-700);
        }

        @keyframes slideInRight {
          from {
            transform: translateX(100%);
            opacity: 0;
          }
          to {
            transform: translateX(0);
            opacity: 1;
          }
        }

        @keyframes pulse {
          0%, 100% {
            opacity: 1;
          }
          50% {
            opacity: 0.5;
          }
        }

        .progress-demo-section {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: var(--spacing-6);
          align-items: center;
        }

        .skeleton-demo-section {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: var(--spacing-4);
        }

        .container-demo-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: var(--spacing-6);
        }

        .image-message-demo-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
          gap: var(--spacing-4);
          align-items: start;
        }

        @keyframes spin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }

        @keyframes pulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.5; }
        }
      `}</style>

      <div className="page-header">
        <h1 className="page-title">メッセージ / 通知</h1>
        <p className="page-description">
          ユーザーへの情報伝達、メッセージ表示、フィードバック、統計表示のためのコンポーネント群。
          モーダル、ローダー、状態表示、通知、トースト、ダッシュボード要素を提供します。
        </p>
      </div>

      {/* ダッシュボード要素 */}
      <div className="component-section">
        <h2 className="section-title">メッセージ/通知</h2>

        <div className="component-card">
          <div className="component-info">
            <h3 className="component-name">CardStyleMessage</h3>
            <p className="component-description">
              メッセージやお知らせを美しく表示するカード型コンポーネント
            </p>
          </div>
          <div className="component-demo">
            <div className="container-demo-grid">
              <Card>
                <h4 style={{ margin: '0 0 var(--spacing-3) 0', fontSize: 'var(--font-size-base)', fontWeight: 'var(--font-weight-semibold)' }}>基本カード</h4>
                <p style={{ margin: '0 0 var(--spacing-3) 0', fontSize: 'var(--font-size-sm)', color: 'var(--color-neutral-600)', lineHeight: 'var(--line-height-relaxed)' }}>
                  シンプルなカードコンポーネントです。テキストやその他のコンテンツを整理して表示できます。
                </p>
                <div style={{ display: 'flex', gap: 'var(--spacing-2)' }}>
                  <button style={{
                    padding: 'var(--spacing-2) var(--spacing-3)',
                    backgroundColor: 'rgb(21, 52, 109)',
                    color: 'white',
                    border: 'none',
                    borderRadius: 'var(--radius-md)',
                    fontSize: 'var(--font-size-sm)',
                    cursor: 'pointer'
                  }}>
                    詳細を見る
                  </button>
                </div>
              </Card>

              <Card
                header={
                  <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--spacing-2)' }}>
                    <Icon name="user" style={{ width: '20px', height: '20px', color: 'rgb(21, 52, 109)' }} />
                    <span style={{ fontSize: 'var(--font-size-base)', fontWeight: 'var(--font-weight-semibold)' }}>ユーザー情報</span>
                  </div>
                }
              >
                <div style={{ fontSize: 'var(--font-size-sm)', color: 'var(--color-neutral-600)' }}>
                  <p style={{ margin: '0 0 var(--spacing-2) 0' }}>名前: 田中太郎</p>
                  <p style={{ margin: '0 0 var(--spacing-2) 0' }}>部署: 営業部</p>
                  <p style={{ margin: '0' }}>最終ログイン: 2024-01-15</p>
                </div>
              </Card>

              <Card
                header={<span style={{ fontSize: 'var(--font-size-base)', fontWeight: 'var(--font-weight-semibold)' }}>統計情報</span>}
                footer={
                  <div style={{ fontSize: 'var(--font-size-xs)', color: 'var(--color-neutral-500)' }}>
                    最終更新: 2024-01-15 14:30
                  </div>
                }
              >
                <div style={{ textAlign: 'center' }}>
                  <div style={{ fontSize: 'var(--font-size-2xl)', fontWeight: 'var(--font-weight-bold)', color: 'rgb(21, 52, 109)', marginBottom: 'var(--spacing-2)' }}>
                    1,234
                  </div>
                  <div style={{ fontSize: 'var(--font-size-sm)', color: 'var(--color-neutral-600)' }}>
                    総ユーザー数
                  </div>
                </div>
              </Card>
            </div>
          </div>
          <div className="code-snippet">
            {`// 基本メッセージカード
<CardStyleMessage>
  <h4>お知らせタイトル</h4>
  <p>メッセージ内容</p>
</CardStyleMessage>

// ヘッダー付きメッセージ
<CardStyleMessage header={<span>重要なお知らせ</span>}>
  システムメンテナンスのお知らせです
</CardStyleMessage>

// ヘッダー・フッター付きメッセージ
<CardStyleMessage
  header={<span>システム通知</span>}
  footer={<span>2024-01-15 14:30</span>}
>
  アップデートが完了しました
</CardStyleMessage>`}
          </div>
        </div>

        <div className="component-card">
          <div className="component-info">
            <h3 className="component-name">ImageStyleMessage</h3>
            <p className="component-description">
              画像を含むメッセージやギャラリー表示を行うコンポーネント
            </p>
          </div>
          <div className="component-demo">
            <div className="image-message-demo-grid">
              {/* 単一画像メッセージ */}
              <div style={{
                border: '1px solid var(--color-neutral-200)',
                borderRadius: 'var(--radius-lg)',
                padding: 'var(--spacing-4)',
                backgroundColor: 'var(--color-neutral-white)',
                maxWidth: '300px'
              }}>
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: 'var(--spacing-3)',
                  marginBottom: 'var(--spacing-3)'
                }}>
                  <div style={{
                    width: '40px',
                    height: '40px',
                    borderRadius: '50%',
                    backgroundColor: 'var(--color-neutral-200)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                  }}>
                    <Icon name="user" style={{ width: '20px', height: '20px', color: 'var(--color-neutral-600)' }} />
                  </div>
                  <div>
                    <div style={{ fontSize: 'var(--font-size-sm)', fontWeight: 'var(--font-weight-semibold)' }}>田中太郎</div>
                    <div style={{ fontSize: 'var(--font-size-xs)', color: 'var(--color-neutral-500)' }}>2分前</div>
                  </div>
                </div>
                <p style={{
                  margin: '0 0 var(--spacing-3) 0',
                  fontSize: 'var(--font-size-sm)',
                  lineHeight: 'var(--line-height-relaxed)'
                }}>
                  新しいプロダクトのデザインが完成しました！
                </p>
                <div style={{
                  width: '100%',
                  height: '150px',
                  backgroundColor: 'var(--color-neutral-100)',
                  borderRadius: 'var(--radius-md)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  border: '1px solid var(--color-neutral-200)',
                  cursor: 'pointer',
                  transition: 'all 0.2s'
                }}>
                  <Icon name="image" style={{ width: '32px', height: '32px', color: 'var(--color-neutral-400)' }} />
                </div>
              </div>

              {/* 複数画像ギャラリー */}
              <div style={{
                border: '1px solid var(--color-neutral-200)',
                borderRadius: 'var(--radius-lg)',
                padding: 'var(--spacing-4)',
                backgroundColor: 'var(--color-neutral-white)',
                maxWidth: '320px'
              }}>
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: 'var(--spacing-3)',
                  marginBottom: 'var(--spacing-3)'
                }}>
                  <div style={{
                    width: '40px',
                    height: '40px',
                    borderRadius: '50%',
                    backgroundColor: 'var(--color-primary-100)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                  }}>
                    <Icon name="camera" style={{ width: '20px', height: '20px', color: 'rgb(21, 52, 109)' }} />
                  </div>
                  <div>
                    <div style={{ fontSize: 'var(--font-size-sm)', fontWeight: 'var(--font-weight-semibold)' }}>営業部</div>
                    <div style={{ fontSize: 'var(--font-size-xs)', color: 'var(--color-neutral-500)' }}>1時間前</div>
                  </div>
                </div>
                <p style={{
                  margin: '0 0 var(--spacing-3) 0',
                  fontSize: 'var(--font-size-sm)',
                  lineHeight: 'var(--line-height-relaxed)'
                }}>
                  会議の資料写真です（4枚）
                </p>
                <div style={{
                  display: 'grid',
                  gridTemplateColumns: '1fr 1fr',
                  gap: 'var(--spacing-2)'
                }}>
                  {[1, 2, 3, 4].map((index) => (
                    <div key={index} style={{
                      width: '100%',
                      height: '80px',
                      backgroundColor: 'var(--color-neutral-100)',
                      borderRadius: 'var(--radius-sm)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      border: '1px solid var(--color-neutral-200)',
                      cursor: 'pointer',
                      transition: 'all 0.2s',
                      position: 'relative'
                    }}>
                      <Icon name="image" style={{ width: '20px', height: '20px', color: 'var(--color-neutral-400)' }} />
                      {index === 4 && (
                        <div style={{
                          position: 'absolute',
                          top: 0,
                          left: 0,
                          right: 0,
                          bottom: 0,
                          backgroundColor: 'rgba(0, 0, 0, 0.5)',
                          borderRadius: 'var(--radius-sm)',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          color: 'white',
                          fontSize: 'var(--font-size-xs)',
                          fontWeight: 'var(--font-weight-semibold)'
                        }}>
                          +2
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>

              {/* プロフィール画像メッセージ */}
              <div style={{
                border: '1px solid var(--color-neutral-200)',
                borderRadius: 'var(--radius-lg)',
                padding: 'var(--spacing-4)',
                backgroundColor: 'var(--color-neutral-white)',
                maxWidth: '280px'
              }}>
                <div style={{ textAlign: 'center' }}>
                  <div style={{
                    width: '80px',
                    height: '80px',
                    borderRadius: '50%',
                    backgroundColor: 'var(--color-neutral-200)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    margin: '0 auto var(--spacing-3) auto',
                    border: '3px solid var(--color-primary-100)'
                  }}>
                    <Icon name="user" style={{ width: '40px', height: '40px', color: 'var(--color-neutral-500)' }} />
                  </div>
                  <h4 style={{
                    margin: '0 0 var(--spacing-2) 0',
                    fontSize: 'var(--font-size-base)',
                    fontWeight: 'var(--font-weight-semibold)'
                  }}>
                    佐藤花子
                  </h4>
                  <p style={{
                    margin: '0 0 var(--spacing-3) 0',
                    fontSize: 'var(--font-size-sm)',
                    color: 'var(--color-neutral-600)'
                  }}>
                    プロダクトデザイナー
                  </p>
                  <button style={{
                    padding: 'var(--spacing-2) var(--spacing-4)',
                    backgroundColor: 'rgb(21, 52, 109)',
                    color: 'white',
                    border: 'none',
                    borderRadius: 'var(--radius-md)',
                    fontSize: 'var(--font-size-sm)',
                    cursor: 'pointer',
                    transition: 'all 0.2s'
                  }}>
                    プロフィールを見る
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="code-snippet">
            {`// 単一画像メッセージ
<ImageStyleMessage
  user={{ name: "田中太郎", avatar: "/avatars/tanaka.jpg" }}
  timestamp="2分前"
  message="新しいプロダクトのデザインが完成しました！"
  image="/uploads/design.jpg"
/>

// 複数画像ギャラリー
<ImageStyleMessage
  user={{ name: "営業部", avatar: "/icons/department.jpg" }}
  timestamp="1時間前"
  message="会議の資料写真です（4枚）"
  images={[
    "/uploads/meeting1.jpg",
    "/uploads/meeting2.jpg",
    "/uploads/meeting3.jpg",
    "/uploads/meeting4.jpg"
  ]}
  showCount={2}
/>

// プロフィール画像メッセージ
<ImageStyleMessage
  type="profile"
  user={{
    name: "佐藤花子",
    role: "プロダクトデザイナー",
    avatar: "/avatars/sato.jpg"
  }}
  action={{ text: "プロフィールを見る", onClick: handleProfile }}
/>`}
          </div>
        </div>

        <div className="component-card">
          <div className="component-info">
            <h3 className="component-name">AnalyticStyleMessage</h3>
            <p className="component-description">
              数値やデータを分析レポート風に表示するメッセージコンポーネント
            </p>
          </div>
          <div className="component-demo">
            <div className="dashboard-grid">
              {dashboardStats.map((stat, index) => {
                const styles = getColorStyles(stat.color);
                return (
                  <div key={index} className="stat-card" style={{ backgroundColor: styles.bg }}>
                    <div className="stat-icon" style={{ backgroundColor: styles.bg, color: styles.icon }}>
                      <Icon name={stat.icon} style={{ width: '24px', height: '24px' }} />
                    </div>
                    <div className="stat-content">
                      <div className="stat-label" style={{ color: styles.text }}>
                        {stat.label}
                      </div>
                      <div className="stat-value" style={{ color: styles.text }}>
                        {stat.value}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
          <div className="code-snippet">
            {`<AnalyticStyleMessage
  stats={[
    { label: '新規メッセージ', value: '1,234', icon: 'message' },
    { label: '送信済み', value: '89', icon: 'check' },
    { label: 'エラー率', value: '0.23%', icon: 'warning' }
  ]}
/>`}
          </div>
        </div>

        <div className="component-card">
          <div className="component-info">
            <h3 className="component-name">FlashMessage</h3>
            <p className="component-description">
              フラッシュメッセージを表示するコンポーネント
            </p>
          </div>
          <div className="component-demo">
            <FlashMessage
              type="success"
              message="データの保存が正常に完了しました。"
            />
            <FlashMessage
              type="info"
              message="システムメンテナンスが2024年1月15日に予定されています。"
            />
            <FlashMessage
              type="warning"
              message="ディスク容量が90%を超えています。データのクリーンアップをお勧めします。"
            />
            <FlashMessage
              type="danger"
              message="接続エラーが発生しました。ネットワーク設定を確認してください。"
            />
          </div>
          <div className="code-snippet">
            {`<FlashMessage type="success" message="正常に完了しました" />
<FlashMessage type="info" message="お知らせメッセージ" />
<FlashMessage type="warning" message="注意が必要です" />
<FlashMessage type="danger" message="エラーが発生しました" />`}
          </div>
        </div>

        <div className="component-card">
          <div className="component-info">
            <h3 className="component-name">Notification</h3>
            <p className="component-description">
              ベルアイコンをクリックして通知ドロップダウンを表示するコンポーネント
            </p>
          </div>
          <div className="component-demo">
            <div style={{ marginBottom: 'var(--spacing-4)' }}>
              <SecondaryButton onClick={() => setUnreadCount(2)}>
                未読件数をリセット (2件)
              </SecondaryButton>
              <SecondaryButton
                onClick={() => setUnreadCount(0)}
                style={{ marginLeft: 'var(--spacing-2)' }}
              >
                全て既読にする
              </SecondaryButton>
            </div>

            {/* ベルアイコンのみの通知コンポーネント */}
            <div style={{
              display: 'flex',
              justifyContent: 'center',
              padding: 'var(--spacing-6)',
              background: 'var(--color-neutral-50)',
              border: '1px dashed var(--color-neutral-300)',
              borderRadius: 'var(--radius-md)'
            }}>
              <div ref={notificationRef} style={{ position: 'relative' }}>
                <button
                  className="notification-button"
                  onClick={() => setShowNotificationDropdown(!showNotificationDropdown)}
                  style={{
                    position: 'relative',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    width: '48px',
                    height: '48px',
                    border: 'none',
                    background: 'var(--color-neutral-white)',
                    borderRadius: 'var(--radius-full)',
                    cursor: 'pointer',
                    transition: 'all 0.2s',
                    color: 'var(--color-warning-600)',
                    boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)'
                  }}
                >
                  <Icon name="bell" style={{ width: '20px', height: '20px' }} />
                  {unreadCount > 0 && (
                    <span className="notification-badge">{unreadCount}</span>
                  )}
                </button>

                {/* ドロップダウン通知リスト */}
                {showNotificationDropdown && (
                  <div className="notification-dropdown">
                    <div className="notification-dropdown-header">
                      <h3 className="notification-dropdown-title">通知</h3>
                      <button
                        className="notification-close-btn"
                        onClick={() => setShowNotificationDropdown(false)}
                      >
                        <Icon name="close" className="w-4 h-4" />
                      </button>
                    </div>

                    <div className="notification-dropdown-content">
                      <div className="notification-item">
                        <Icon name="info" className="w-5 h-5 notification-icon" />
                        <div className="notification-content">
                          <div className="notification-item-header">
                            <h4 className="notification-item-title">新しいメッセージ</h4>
                            <span className="notification-time">2分前</span>
                          </div>
                          <p className="notification-item-message">管理者からの重要なお知らせがあります。</p>
                          <div className="notification-item-actions">
                            <button
                              className="notification-action-btn"
                              onClick={() => setUnreadCount(Math.max(0, unreadCount - 1))}
                            >
                              <Icon name="check" className="w-4 h-4" />
                              既読にする
                            </button>
                            <button className="notification-action-btn">
                              <Icon name="close" className="w-4 h-4" />
                              非表示
                            </button>
                          </div>
                        </div>
                      </div>

                      <div className="notification-item unread">
                        <Icon name="warning" className="w-5 h-5 notification-icon" />
                        <div className="notification-content">
                          <div className="notification-item-header">
                            <h4 className="notification-item-title">システムメンテナンス</h4>
                            <span className="notification-time">1時間前</span>
                          </div>
                          <p className="notification-item-message">本日22:00よりシステムメンテナンスを実施します。</p>
                          <div className="notification-item-actions">
                            <button
                              className="notification-action-btn"
                              onClick={() => setUnreadCount(Math.max(0, unreadCount - 1))}
                            >
                              <Icon name="check" className="w-4 h-4" />
                              既読にする
                            </button>
                            <button className="notification-action-btn">
                              <Icon name="close" className="w-4 h-4" />
                              非表示
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="notification-dropdown-footer">
                      <a href="#" className="notification-footer-link">すべての通知を表示</a>
                    </div>
                  </div>
                )}
              </div>
            </div>

            <p style={{
              textAlign: 'center',
              color: 'var(--color-neutral-600)',
              fontSize: 'var(--font-size-sm)',
              marginTop: 'var(--spacing-4)'
            }}>
              ベルアイコンをクリックして通知を表示 - 実運用ではナビゲーション等に配置
            </p>
          </div>
          <div className="code-snippet">
            {`<Notification
  notifications={notifications}
  unreadCount={unreadCount}
  onMarkAsRead={handleMarkAsRead}
  onMarkAllAsRead={handleMarkAllAsRead}
  onDismiss={handleDismiss}
  onClose={handleClose}
/>`}
          </div>
        </div>

        <div className="component-card">
          <div className="component-info">
            <h3 className="component-name">Toast</h3>
            <p className="component-description">
              画面右上に表示される一時的な通知メッセージ
            </p>
          </div>
          <div className="component-demo">
            <div className="button-group">
              <PrimaryButton onClick={() => {
                setToastConfig({ type: 'success', title: '成功', message: 'データの保存が完了しました' });
                setShowToast(true);
                setTimeout(() => setShowToast(false), 3000);
              }}>
                成功トースト表示
              </PrimaryButton>
              <SecondaryButton onClick={() => {
                setToastConfig({ type: 'info', title: '情報', message: '新しいメッセージが届きました' });
                setShowToast(true);
                setTimeout(() => setShowToast(false), 3000);
              }}>
                情報トースト表示
              </SecondaryButton>
              <DangerButton onClick={() => {
                setToastConfig({ type: 'error', title: 'エラー', message: '接続に失敗しました' });
                setShowToast(true);
                setTimeout(() => setShowToast(false), 3000);
              }}>
                エラートースト表示
              </DangerButton>
            </div>
            <p style={{ fontSize: 'var(--font-size-sm)', color: 'var(--color-neutral-600)', marginTop: 'var(--spacing-3)' }}>
              ※ トーストは3秒後に自動的に閉じます
            </p>
          </div>
          <div className="code-snippet">
            {`<Toast
  type="success"
  title="成功"
  message="データの保存が完了しました"
  showToast={showToast}
  onClose={() => setShowToast(false)}
/>`}
          </div>
        </div>





      </div>



      {/* モーダル */}
      <div className="component-section">
        <h2 className="section-title">モーダル</h2>

        <div className="component-card">
          <div className="component-info">
            <h3 className="component-name">Modal</h3>
            <p className="component-description">
              ユーザーへの情報表示、メッセージ通知、確認ダイアログとして使用するモーダルコンポーネント
            </p>
          </div>
          <div className="component-demo">
            <div className="button-group">
              <PrimaryButton onClick={() => setShowModal(true)}>
                基本モーダルを開く
              </PrimaryButton>
              <SecondaryButton onClick={() => setShowInfoModal(true)}>
                情報モーダル
              </SecondaryButton>
              <DangerButton onClick={() => setShowConfirmModal(true)}>
                確認モーダル
              </DangerButton>
            </div>
          </div>
          <div className="code-snippet">
            {`<Modal show={show} onClose={onClose}>
  <div>メッセージ内容</div>
</Modal>

<InfoModal
  show={show}
  title="お知らせ"
  message="情報メッセージ"
  onClose={onClose}
/>

<ConfirmModal
  show={show}
  title="確認"
  message="実行しますか？"
  onConfirm={onConfirm}
  onClose={onClose}
/>`}
          </div>
        </div>

      </div>

      {/* ローダー */}
      <div className="component-section">
        <h2 className="section-title">ローダー</h2>

        <div className="demo-grid">
          {/* FullScreenLoader */}
          <div className="component-card">
            <div className="component-info">
              <h3 className="component-name">FullScreenLoader</h3>
              <p className="component-description">
                画面全体を覆うフルスクリーンローダー。API通信や重い処理中に使用
              </p>
            </div>
            <div className="component-demo">
              <SecondaryButton onClick={() => {
                setShowFullScreenLoader(true);
                setTimeout(() => setShowFullScreenLoader(false), 3000);
              }}>
                フルスクリーンローダーを表示（3秒）
              </SecondaryButton>
            </div>
            <div className="code-snippet">
              {`<FullScreenLoader
  show={showLoader}
  message="データを読み込み中..."
/>`}
            </div>
          </div>

          {/* ModalLoader */}
          <div className="component-card">
            <div className="component-info">
              <h3 className="component-name">ModalLoader</h3>
              <p className="component-description">
                モーダル形式のローダー。キャンセル可能な処理に適用
              </p>
            </div>
            <div className="component-demo">
              <PrimaryButton onClick={() => {
                setShowModalLoader(true);
                setTimeout(() => setShowModalLoader(false), 3000);
              }}>
                モーダルローダーを表示（3秒）
              </PrimaryButton>
            </div>
            <div className="code-snippet">
              {`<ModalLoader
  show={showLoader}
  message="ファイルをアップロード中..."
  onClose={handleCancel}
/>`}
            </div>
          </div>

          {/* SkeletonLoader */}
          <div className="component-card">
            <div className="component-info">
              <h3 className="component-name">SkeletonLoader</h3>
              <p className="component-description">
                コンテンツ読み込み中のプレースホルダー表示
              </p>
            </div>
            <div className="component-demo">
              <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--spacing-4)' }}>
                <div>
                  <h4 style={{ marginBottom: 'var(--spacing-3)', fontSize: 'var(--font-size-sm)', fontWeight: 'var(--font-weight-medium)' }}>
                    3行テキスト
                  </h4>
                  <SkeletonLoader lines={3} height={16} />
                </div>
                <div>
                  <h4 style={{ marginBottom: 'var(--spacing-3)', fontSize: 'var(--font-size-sm)', fontWeight: 'var(--font-weight-medium)' }}>
                    大きなコンテンツ
                  </h4>
                  <SkeletonLoader lines={5} height={20} />
                </div>
              </div>
            </div>
            <div className="code-snippet">
              {`<SkeletonLoader lines={3} height={16} />
<SkeletonLoader lines={5} height={20} />`}
            </div>
          </div>
        </div>
      </div>

      {/* 状態 */}
      <div className="component-section">
        <h2 className="section-title">状態</h2>

        <div className="component-card">
          <div className="component-info">
            <h3 className="component-name">ProgressBar</h3>
            <p className="component-description">
              線形・円形のプログレスバーで作業の進捗状態を表示
            </p>
          </div>
          <div className="component-demo">
            <div className="progress-demo-section">
              <div>
                <h4 style={{ marginBottom: 'var(--spacing-3)', fontSize: 'var(--font-size-sm)', fontWeight: 'var(--font-weight-medium)' }}>線形プログレスバー</h4>
                <div style={{ marginBottom: 'var(--spacing-4)' }}>
                  <ProgressBar value={progressValue} showLabel={true} />
                </div>
                <div style={{ marginBottom: 'var(--spacing-4)' }}>
                  <ProgressBar value={progressValue} color="success" size="sm" />
                </div>
                <div style={{ marginBottom: 'var(--spacing-4)' }}>
                  <ProgressBar value={progressValue} color="warning" size="lg" showLabel={true} />
                </div>
                <div className="button-group">
                  <SecondaryButton onClick={() => setProgressValue(Math.max(0, progressValue - 10))}>-10%</SecondaryButton>
                  <SecondaryButton onClick={() => setProgressValue(Math.min(100, progressValue + 10))}>+10%</SecondaryButton>
                </div>
              </div>
              <div>
                <h4 style={{ marginBottom: 'var(--spacing-3)', fontSize: 'var(--font-size-sm)', fontWeight: 'var(--font-weight-medium)' }}>円形プログレス</h4>
                <div style={{ display: 'flex', gap: 'var(--spacing-4)', alignItems: 'center', marginBottom: 'var(--spacing-4)' }}>
                  <CircularProgress value={circularProgressValue} size="sm" showLabel={true} />
                  <CircularProgress value={circularProgressValue} size="md" color="success" showLabel={true} />
                  <CircularProgress value={circularProgressValue} size="lg" color="warning" showLabel={true} />
                </div>
                <div className="button-group">
                  <SecondaryButton onClick={() => setCircularProgressValue(Math.max(0, circularProgressValue - 15))}>-15%</SecondaryButton>
                  <SecondaryButton onClick={() => setCircularProgressValue(Math.min(100, circularProgressValue + 15))}>+15%</SecondaryButton>
                </div>
              </div>
            </div>
          </div>
          <div className="code-snippet">
            {`// 線形プログレスバー
<ProgressBar value={75} showLabel={true} color="primary" size="md" />

// 円形プログレス
<CircularProgress value={75} size="md" color="success" showLabel={true} />`}
          </div>
        </div>

      </div>

      {/* Usage Guidelines */}
      <div className="component-section">
        <h2 className="section-title">使用上の注意</h2>
        <div className="component-card">
          <ul style={{ lineHeight: 'var(--line-height-relaxed)', color: 'var(--color-neutral-700)' }}>
            <li>モーダルは重要なメッセージや情報の表示、ユーザーへの確認に使用してください</li>
            <li>InfoModalは一方向の情報伝達に、ConfirmModalは操作確認に適しています</li>
            <li>モーダルは一度に1つだけ表示し、ESCキーや背景クリックで閉じられるようにしてください</li>
            <li>FullScreenLoaderは重要な処理中に画面全体をブロックする場合に使用してください</li>
            <li>ModalLoaderはキャンセル可能な処理（ファイルアップロード等）に適しています</li>
            <li>SkeletonLoaderはコンテンツ読み込み中のプレースホルダーとして使用してください</li>
            <li>トースト通知は成功・エラー・情報の一時的な通知に適しています</li>
            <li>状態表示（プログレスバー）は長時間の処理進捗や完了度の可視化に使用してください</li>
            <li>線形プログレスは全体進捗、円形プログレスは部分進捗や状態値に適しています</li>
            <li>CardStyleMessageはメッセージやお知らせの表示に適したカード型レイアウトです</li>
            <li>ImageStyleMessageは画像を含むメッセージ表示に最適化されています</li>
            <li>単一画像、複数画像ギャラリー、プロフィール画像など様々な画像表示パターンに対応</li>
            <li>画像のクリックで拡大表示やライトボックス機能を実装可能です</li>
            <li>ダッシュボードカードは4個以下を1行に配置することを推奨します</li>
            <li>フラッシュメッセージは重要度に応じて適切な色とアイコンを使用してください</li>
            <li>ドロップダウンメニューは画面端での表示を考慮してアラインメントを調整してください</li>
            <li>Badgeは簡潔で分かりやすいテキストを使用してください</li>
            <li>ステータス表示には適切な色バリエーションを選択してください（成功=緑、警告=黄、エラー=赤）</li>
            <li>削除可能なTagは誤操作を防ぐため、確認ダイアログの使用を検討してください</li>
            <li>通知数表示のBadgeは数値が大きい場合は「99+」等の省略表示を検討してください</li>
            <li>アクセシビリティのため、フォーカス管理とキーボードナビゲーションに注意してください</li>
          </ul>
        </div>
      </div>

      {/* モーダルコンポーネントの表示 */}
      <Modal show={showModal} onClose={() => setShowModal(false)}>
        <div style={{ padding: 'var(--spacing-6)' }}>
          <h3 style={{
            marginBottom: 'var(--spacing-4)',
            fontSize: 'var(--font-size-xl)',
            fontWeight: 'var(--font-weight-semibold)'
          }}>
            基本モーダル
          </h3>
          <p style={{
            marginBottom: 'var(--spacing-4)',
            color: 'var(--color-neutral-600)'
          }}>
            これは基本的なメッセージ表示用モーダルです。重要な情報やお知らせをユーザーに伝える際に使用します。
          </p>
          <div style={{
            display: 'flex',
            gap: 'var(--spacing-3)',
            justifyContent: 'flex-end'
          }}>
            <SecondaryButton onClick={() => setShowModal(false)}>
              キャンセル
            </SecondaryButton>
            <PrimaryButton onClick={() => setShowModal(false)}>
              確認
            </PrimaryButton>
          </div>
        </div>
      </Modal>

      <InfoModal
        show={showInfoModal}
        onClose={() => setShowInfoModal(false)}
        title="お知らせ"
        message="これは情報表示専用のモーダルです。システムからの重要な通知やメッセージを表示します。"
      />

      <ConfirmModal
        show={showConfirmModal}
        onClose={() => setShowConfirmModal(false)}
        title="操作の確認"
        message="この操作を実行してもよろしいですか？実行後は元に戻すことができません。"
        onConfirm={() => {
          alert('操作が確認されました');
          setShowConfirmModal(false);
        }}
      />

      {/* Toast通知の表示 */}
      <Toast
        type={toastConfig.type}
        title={toastConfig.title}
        message={toastConfig.message}
        showToast={showToast}
        onClose={() => setShowToast(false)}
      />

      {/* ローダーコンポーネントの表示 */}
      <FullScreenLoader show={showFullScreenLoader} message="データを読み込み中..." />

      <ModalLoader
        show={showModalLoader}
        message="ファイルをアップロード中..."
        onClose={() => setShowModalLoader(false)}
      />

      {/* AlertDialog instances */}
      <AlertDialog
        show={showInfoAlert}
        type="info"
        title="情報"
        message="これは情報メッセージです。操作が正常に完了しました。"
        onClose={() => setShowInfoAlert(false)}
      />

      <AlertDialog
        show={showWarningAlert}
        type="warning"
        title="警告"
        message="この操作を続行しますか？データが変更される可能性があります。"
        confirmText="続行"
        cancelText="キャンセル"
        onConfirm={() => {
          alert('操作を続行しました');
          setShowWarningAlert(false);
        }}
        onCancel={() => setShowWarningAlert(false)}
      />

      <AlertDialog
        show={showErrorAlert}
        type="error"
        title="エラー"
        message="操作中にエラーが発生しました。ネットワーク接続を確認してください。"
        confirmText="再試行"
        cancelText="閉じる"
        onConfirm={() => {
          alert('再試行します');
          setShowErrorAlert(false);
        }}
        onCancel={() => setShowErrorAlert(false)}
      />

      <AlertDialog
        show={showSuccessAlert}
        type="success"
        title="成功"
        message="データの保存が完了しました。変更内容が正常に反映されています。"
        onClose={() => setShowSuccessAlert(false)}
      />

      <AlertDialog
        show={showDeleteAlert}
        type="error"
        title="削除確認"
        message="このアイテムを削除しますか？この操作は取り消せません。"
        confirmText="削除"
        cancelText="キャンセル"
        onConfirm={() => {
          alert('アイテムが削除されました');
          setShowDeleteAlert(false);
        }}
        onCancel={() => setShowDeleteAlert(false)}
      />

      {/* Snackbar instances */}
      <Snackbar
        show={showSuccessSnackbar}
        type="success"
        message="操作が正常に完了しました！"
        onClose={() => setShowSuccessSnackbar(false)}
        position="bottom-right"
      />

      <Snackbar
        show={showErrorSnackbar}
        type="error"
        message="エラーが発生しました。もう一度お試しください。"
        onClose={() => setShowErrorSnackbar(false)}
        position="top-right"
      />

      <Snackbar
        show={showWarningSnackbar}
        type="warning"
        message="この操作にはご注意ください。"
        onClose={() => setShowWarningSnackbar(false)}
        position="top-center"
      />

      <Snackbar
        show={showInfoSnackbar}
        type="info"
        message="新しい情報があります。"
        onClose={() => setShowInfoSnackbar(false)}
        position="bottom-left"
      />

      <Snackbar
        show={showActionSnackbar}
        type="info"
        message="新しいメッセージが届きました"
        action={true}
        actionText="表示"
        onAction={() => {
          alert('メッセージを表示します');
          setShowActionSnackbar(false);
        }}
        onClose={() => setShowActionSnackbar(false)}
        position="bottom-center"
        duration={6000}
      />
    </div>
  );
};

export default MessagesPage;