import { useState, Children, isValidElement } from 'react';
import Icon from '../../../components/icons/Icon.tsx';

const LayoutPage = () => {
  // LoadingSpinner component
  const LoadingSpinner = ({
    size = 'md',
    color = '#007bff',
    backgroundColor = 'rgba(255, 255, 255, 0.9)',
    overlay = false,
    text = null,
    show = true
  }) => {
    if (!show) return null;

    const sizes = {
      sm: { width: '20px', height: '20px', borderWidth: '2px' },
      md: { width: '40px', height: '40px', borderWidth: '4px' },
      lg: { width: '60px', height: '60px', borderWidth: '6px' },
      xl: { width: '80px', height: '80px', borderWidth: '8px' }
    };

    const spinnerStyle = {
      width: sizes[size].width,
      height: sizes[size].height,
      border: `${sizes[size].borderWidth} solid #f3f3f3`,
      borderTop: `${sizes[size].borderWidth} solid ${color}`,
      borderRadius: '50%',
      animation: 'spin 1s linear infinite'
    };

    const containerStyle = {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      gap: '12px',
      ...(overlay && {
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: backgroundColor,
        zIndex: 9999
      })
    };

    return (
      <div style={containerStyle}>
        <style>
          {`
            @keyframes spin {
              0% { transform: rotate(0deg); }
              100% { transform: rotate(360deg); }
            }
          `}
        </style>
        <div style={spinnerStyle}></div>
        {text && (
          <span style={{
            fontSize: '14px',
            color: '#666',
            fontWeight: '500'
          }}>
            {text}
          </span>
        )}
      </div>
    );
  };

  // Basic Button components for demo
  const PrimaryButton = ({ children, onClick, style = {} }) => (
    <button
      onClick={onClick}
      style={{
        backgroundColor: '#007bff',
        color: 'white',
        border: 'none',
        padding: '8px 16px',
        borderRadius: '4px',
        cursor: 'pointer',
        fontSize: '14px',
        fontWeight: '500',
        ...style
      }}
    >
      {children}
    </button>
  );

  const SecondaryButton = ({ children, onClick, style = {} }) => (
    <button
      onClick={onClick}
      style={{
        backgroundColor: '#6c757d',
        color: 'white',
        border: 'none',
        padding: '8px 16px',
        borderRadius: '4px',
        cursor: 'pointer',
        fontSize: '14px',
        fontWeight: '500',
        ...style
      }}
    >
      {children}
    </button>
  );

  // Container component
  const Container = ({
    children,
    variant = 'default',
    size = 'medium',
    padding = 'default',
    centered = false,
    shadow = false,
    bordered = false,
    background = 'transparent',
    style = {}
  }) => {
    const variants = {
      default: {
        maxWidth: 'none',
        margin: '0'
      },
      constrained: {
        maxWidth: '1200px',
        margin: '0 auto'
      },
      narrow: {
        maxWidth: '800px',
        margin: '0 auto'
      },
      wide: {
        maxWidth: '1600px',
        margin: '0 auto'
      },
      fluid: {
        width: '100%',
        margin: '0'
      }
    };

    const sizes = {
      small: { padding: '12px' },
      medium: { padding: '24px' },
      large: { padding: '32px' },
      none: { padding: '0' }
    };

    const paddings = {
      none: '0',
      small: '8px',
      default: '16px',
      medium: '24px',
      large: '32px',
      xl: '48px'
    };

    const backgrounds = {
      transparent: 'transparent',
      white: '#ffffff',
      light: '#f8f9fa',
      dark: '#343a40',
      primary: '#e3f2fd',
      secondary: '#f5f5f5'
    };

    const containerStyle = {
      ...variants[variant],
      padding: padding === 'default' ? sizes[size].padding : paddings[padding],
      ...(centered && { textAlign: 'center' }),
      ...(shadow && {
        boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)',
        borderRadius: '8px'
      }),
      ...(bordered && {
        border: '1px solid #e0e0e0',
        borderRadius: '8px'
      }),
      backgroundColor: backgrounds[background],
      ...style
    };

    return (
      <div style={containerStyle}>
        {children}
      </div>
    );
  };

  // Grid System components
  const Grid = ({ children, columns = 12, gap = '16px', style = {} }) => {
    return (
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: `repeat(${columns}, 1fr)`,
          gap: gap,
          width: '100%',
          ...style
        }}
      >
        {children}
      </div>
    );
  };

  const GridItem = ({
    children,
    span = 1,
    offset = 0,
    order = 'initial',
    align = 'stretch',
    justify = 'stretch',
    style = {}
  }) => {
    return (
      <div
        style={{
          gridColumn: offset > 0 ? `${offset + 1} / span ${span}` : `span ${span}`,
          order: order,
          alignSelf: align,
          justifySelf: justify,
          ...style
        }}
      >
        {children}
      </div>
    );
  };

  const Row = ({ children, gap = '16px', justify = 'flex-start', align = 'stretch', wrap = true, style = {} }) => {
    return (
      <div
        style={{
          display: 'flex',
          gap: gap,
          justifyContent: justify,
          alignItems: align,
          flexWrap: wrap ? 'wrap' : 'nowrap',
          width: '100%',
          ...style
        }}
      >
        {children}
      </div>
    );
  };

  const Col = ({
    children,
    flex = '1',
    width = 'auto',
    minWidth = 'auto',
    maxWidth = 'none',
    order = 'initial',
    style = {}
  }) => {
    return (
      <div
        style={{
          flex: flex,
          width: width,
          minWidth: minWidth,
          maxWidth: maxWidth,
          order: order,
          ...style
        }}
      >
        {children}
      </div>
    );
  };

  // Stack component
  const Stack = ({
    children,
    direction = 'vertical',
    gap = '16px',
    align = 'stretch',
    justify = 'flex-start',
    wrap = false,
    divider = null,
    style = {}
  }) => {
    const isVertical = direction === 'vertical';
    const shouldWrap = Boolean(wrap);

    // Convert children to array to handle dividers
    const childrenArray = Children.toArray(children);

    // Render without dividers
    if (!divider) {
      return (
        <div
          style={{
            display: 'flex',
            flexDirection: isVertical ? 'column' : 'row',
            gap: gap,
            alignItems: isVertical ? align : justify,
            justifyContent: isVertical ? justify : align,
            flexWrap: shouldWrap ? 'wrap' : 'nowrap',
            ...style
          }}
        >
          {children}
        </div>
      );
    }

    // Render with dividers
    const elementsWithDividers = [];
    childrenArray.forEach((child, index) => {
      if (index > 0) {
        elementsWithDividers.push(
          <div
            key={`divider-${index}`}
            style={{
              margin: isVertical ? `${gap} 0` : `0 ${gap}`,
            }}
          >
            {divider}
          </div>
        );
      }
      elementsWithDividers.push(
        <div key={`child-${index}`}>
          {child}
        </div>
      );
    });

    return (
      <div
        style={{
          display: 'flex',
          flexDirection: isVertical ? 'column' : 'row',
          alignItems: isVertical ? align : justify,
          justifyContent: isVertical ? justify : align,
          flexWrap: shouldWrap ? 'wrap' : 'nowrap',
          ...style
        }}
      >
        {elementsWithDividers}
      </div>
    );
  };

  // Spacer component
  const Spacer = ({
    size = 'md',
    direction = 'vertical',
    customSize = null,
    style = {}
  }) => {
    const sizes = {
      xs: '4px',
      sm: '8px',
      md: '16px',
      lg: '24px',
      xl: '32px',
      '2xl': '48px',
      '3xl': '64px'
    };

    const actualSize = customSize || sizes[size] || sizes.md;
    const isVertical = direction === 'vertical';

    return (
      <div
        style={{
          width: isVertical ? '100%' : actualSize,
          height: isVertical ? actualSize : '100%',
          flexShrink: 0,
          ...style
        }}
      />
    );
  };

  const [activePcLayout, setActivePcLayout] = useState('standard');
  const [drawerCollapsed, setDrawerCollapsed] = useState(false);
  const [activeSpLayout, setActiveSpLayout] = useState('mobile-first');
  const [isPcDrawerOpen, setIsPcDrawerOpen] = useState(true);
  const [isOverlayDrawerOpen, setIsOverlayDrawerOpen] = useState(false);
  const [isSpHamburgerOpen, setIsSpHamburgerOpen] = useState(false);
  const [isSpDrawerOpen, setIsSpDrawerOpen] = useState(false);
  const [isSpFullscreenOpen, setIsSpFullscreenOpen] = useState(false);
  const [selectedTheme, setSelectedTheme] = useState('blue');

  // LoadingSpinner用の状態管理
  const [showDefaultSpinner, setShowDefaultSpinner] = useState(false);
  const [showLargeSpinner, setShowLargeSpinner] = useState(false);
  const [showSmallSpinner, setShowSmallSpinner] = useState(false);
  const [showCustomSpinner, setShowCustomSpinner] = useState(false);

  // Container用の状態管理
  const [containerVariant, setContainerVariant] = useState('default');



  return (
    <div className="layout-page">
      <style jsx>{`
        .layout-page {
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
        }

        .code-snippet {
          background: var(--color-neutral-900);
          color: var(--color-neutral-100);
          padding: var(--spacing-3);
          border-radius: var(--radius-md);
          font-family: var(--font-family-mono);
          font-size: var(--font-size-xs);
          margin-top: var(--spacing-3);
          overflow-x: auto;
        }

        .demo-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: var(--spacing-6);
        }

        .layout-demo {
          background: white;
          border: 2px dashed var(--color-neutral-200);
          border-radius: var(--radius-md);
          padding: var(--spacing-4);
          min-height: 200px;
        }

        .pc-layout-demo {
          background: white;
          border: 2px solid var(--color-primary-200);
          border-radius: var(--radius-md);
          padding: var(--spacing-4);
          min-height: 250px;
          width: 100%;
        }

        .sp-layout-demo {
          background: white;
          border: 2px solid var(--color-success-200);
          border-radius: var(--radius-md);
          padding: var(--spacing-4);
          min-height: 300px;
          width: 320px;
          margin: 0 auto;
        }

        .device-frame {
          border: 3px solid var(--color-neutral-400);
          border-radius: var(--radius-lg);
          padding: var(--spacing-2);
          background: var(--color-neutral-800);
        }

        .sp-frame {
          width: 320px;
          margin: 0 auto;
        }

        .pc-header {
          background: rgb(21, 52, 109);
          color: white;
          padding: var(--spacing-3);
          border-radius: var(--radius-sm) var(--radius-sm) 0 0;
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .pc-nav {
          background: #e5e7eb;
          padding: var(--spacing-2);
          border-radius: 0;
          margin-bottom: 0;
          display: flex;
          gap: var(--spacing-2);
        }

        .pc-nav-item {
          padding: var(--spacing-1) var(--spacing-2);
          background: transparent;
          border-radius: var(--radius-sm);
          font-size: var(--font-size-xs);
          display: flex;
          align-items: center;
          white-space: nowrap;
          border-bottom: 2px solid transparent;
          transition: all 0.15s ease-in-out;
          text-decoration: none;
          color: var(--color-neutral-500);
          font-weight: var(--font-weight-medium);
          position: relative;
        }

        .pc-nav-item::after {
          content: '';
          position: absolute;
          bottom: -2px;
          left: 0;
          right: 0;
          height: 2px;
          background: transparent;
          transition: all 0.15s ease-in-out;
        }

        .pc-nav-item:hover {
          color: var(--color-neutral-700);
          background: rgba(0, 0, 0, 0.05);
        }

        .pc-nav-item:hover::after {
          background: var(--color-neutral-300);
        }

        .pc-nav-item.active {
          color: var(--color-neutral-900);
          background: transparent;
        }

        .pc-nav-item.active::after {
          background: #6366f1;
        }

        .pc-main {
          display: flex;
        }

        .pc-sidebar {
          flex: 0 0 120px;
          background: rgb(55, 65, 81);
          color: white;
          padding: var(--spacing-2);
          border-radius: 0;
          font-size: var(--font-size-xs);
        }

        .pc-content {
          flex: 1;
          background: #f9fafb;
          padding: var(--spacing-3);
          border-radius: 0;
          font-size: var(--font-size-xs);
          min-height: 120px;
        }

        .pc-nav + .pc-content {
          border-radius: 0;
        }

        .pc-footer {
          background: rgb(21, 52, 109);
          color: white;
          padding: var(--spacing-2);
          border-radius: 0 0 var(--radius-sm) var(--radius-sm);
          text-align: center;
          font-size: var(--font-size-xs);
        }

        .sp-header {
          background: rgb(21, 52, 109);
          color: white;
          padding: var(--spacing-2);
          border-radius: var(--radius-sm) var(--radius-sm) 0 0;
          margin-bottom: 0;
          display: flex;
          justify-content: space-between;
          align-items: center;
          font-size: var(--font-size-xs);
        }

        .sp-nav {
          background: rgb(21, 52, 109);
          color: white;
          padding: var(--spacing-2);
          border-radius: 0 0 var(--radius-sm) var(--radius-sm);
          margin-bottom: 0;
          font-size: var(--font-size-xs);
          text-align: center;
        }

        .sp-nav-item {
          padding: var(--spacing-2) var(--spacing-1);
          border-radius: var(--radius-sm);
          cursor: pointer;
          transition: all 0.15s ease-in-out;
          min-width: 50px;
        }

        .sp-nav-item:hover {
          background: rgba(255, 255, 255, 0.1);
        }

        .sp-nav-item.active {
          background: rgba(255, 255, 255, 0.2);
          font-weight: var(--font-weight-semibold);
        }

        .sp-content {
          background: #f9fafb;
          padding: var(--spacing-3);
          border-radius: 0;
          font-size: var(--font-size-xs);
          min-height: 150px;
          margin-bottom: 0;
        }

        .sp-footer {
          background: rgb(21, 52, 109);
          color: white;
          padding: var(--spacing-2);
          border-radius: 0 0 var(--radius-sm) var(--radius-sm);
          text-align: center;
          font-size: var(--font-size-xs);
        }

        .pc-drawer-layout {
          display: flex;
          height: 220px;
        }

        .pc-drawer-sidebar {
          flex: 0 0 180px;
          background: rgb(55, 65, 81);
          color: white;
          padding: var(--spacing-2);
          border-radius: 0;
          font-size: var(--font-size-xs);
          transition: all 0.3s ease;
          margin-right: 0;
          position: relative;
          overflow: hidden;
        }

        .pc-drawer-sidebar.collapsed {
          flex: 0 0 50px;
        }

        .pc-drawer-content {
          flex: 1;
          background: #f9fafb;
          padding: var(--spacing-3);
          border-radius: 0;
          font-size: var(--font-size-xs);
        }

        .drawer-toggle {
          position: absolute;
          top: var(--spacing-2);
          left: var(--spacing-2);
          background: white;
          border: 1px solid #e5e7eb;
          border-radius: var(--radius-sm);
          padding: var(--spacing-1);
          cursor: pointer;
          font-size: var(--font-size-xs);
          transition: background 0.2s;
          z-index: 10;
        }

        .drawer-toggle:hover {
          background: #f3f4f6;
        }

        .drawer-menu-items {
          margin-top: 24px;
          opacity: 1;
          transition: opacity 0.3s ease;
        }

        .pc-drawer-sidebar.collapsed .drawer-menu-items {
          opacity: 0;
        }

        .drawer-menu-item {
          border-left: 4px solid transparent;
          padding: var(--spacing-2) var(--spacing-3);
          margin-bottom: var(--spacing-1);
          border-radius: var(--radius-xs);
          font-size: var(--font-size-xs);
          white-space: nowrap;
          color: white;
          display: flex;
          align-items: center;
          font-weight: var(--font-weight-medium);
          transition: all 0.15s ease-in-out;
        }

        .overlay-drawer-layout {
          position: relative;
          height: 220px;
          overflow: hidden;
        }

        .overlay-drawer-sidebar {
          position: absolute;
          top: 0;
          left: 0;
          width: 200px;
          height: 100%;
          background: rgb(55, 65, 81);
          color: white;
          border: 1px solid #e5e7eb;
          border-radius: var(--radius-sm);
          padding: var(--spacing-2);
          font-size: var(--font-size-xs);
          transform: translateX(-100%);
          transition: transform 0.3s ease;
          z-index: 20;
          box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
        }

        .overlay-drawer-sidebar.open {
          transform: translateX(0);
        }

        .overlay-drawer-backdrop {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: rgba(0, 0, 0, 0.3);
          opacity: 0;
          visibility: hidden;
          transition: all 0.3s ease;
          z-index: 10;
        }

        .overlay-drawer-backdrop.open {
          opacity: 1;
          visibility: visible;
        }

        .overlay-drawer-content {
          width: 100%;
          height: 100%;
          background: #f9fafb;
          padding: var(--spacing-3);
          border-radius: 0;
          font-size: var(--font-size-xs);
        }

        .overlay-menu-items {
          margin-top: 8px;
        }

        .overlay-menu-item {
          padding: var(--spacing-1) var(--spacing-2);
          margin-bottom: var(--spacing-1);
          border-radius: var(--radius-xs);
          font-size: var(--font-size-xs);
          color: white;
          display: flex;
          align-items: center;
          gap: 8px;
          cursor: pointer;
          transition: background-color 0.2s;
          white-space: nowrap;
        }

        .overlay-menu-item:hover {
          background: rgba(255, 255, 255, 0.1);
        }

        .sp-hamburger-menu {
          position: absolute;
          top: 100%;
          right: 0;
          background: rgb(55, 65, 81);
          border: 1px solid rgb(55, 65, 81);
          border-radius: var(--radius-sm);
          padding: var(--spacing-2);
          margin: var(--spacing-1) 0 0 0;
          transform: translateY(-10px);
          opacity: 0;
          visibility: hidden;
          transition: all 0.3s ease;
          z-index: 20;
          box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
          min-width: max-content;
        }

        .sp-hamburger-menu.open {
          transform: translateY(0);
          opacity: 1;
          visibility: visible;
        }

        .sp-hamburger-item {
          border-left: 4px solid transparent;
          padding: var(--spacing-2) var(--spacing-3);
          margin-bottom: var(--spacing-1);
          border-radius: var(--radius-xs);
          font-size: var(--font-size-xs);
          cursor: pointer;
          transition: all 0.15s ease-in-out;
          color: white;
          display: flex;
          align-items: center;
          white-space: nowrap;
          font-weight: var(--font-weight-medium);
        }

        .sp-hamburger-item:hover {
          border-left-color: rgba(255, 255, 255, 0.3);
          background: rgba(255, 255, 255, 0.1);
        }

        .sp-hamburger-item:first-child {
          border-left-color: white;
          background: rgba(255, 255, 255, 0.15);
        }

        .sp-drawer-layout {
          position: relative;
          height: 200px;
          overflow: hidden;
        }

        .sp-drawer-sidebar {
          position: absolute;
          top: 0;
          right: 0;
          width: 180px;
          height: 100%;
          background: rgb(55, 65, 81);
          border: 1px solid rgb(55, 65, 81);
          border-radius: var(--radius-sm);
          padding: var(--spacing-2);
          font-size: var(--font-size-xs);
          transform: translateX(50%);
          transition: all 0.25s ease-out;
          z-index: 20;
          box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
          color: white;
          visibility: hidden;
          opacity: 0;
        }

        .sp-drawer-sidebar.open {
          transform: translateX(0);
          visibility: visible;
          opacity: 1;
        }

        .sp-drawer-backdrop {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: rgba(0, 0, 0, 0.3);
          opacity: 0;
          visibility: hidden;
          transition: all 0.3s ease;
          z-index: 10;
        }

        .sp-drawer-backdrop.open {
          opacity: 1;
          visibility: visible;
        }

        .sp-drawer-content {
          width: 100%;
          height: 100%;
          background: #f9fafb;
          padding: var(--spacing-3);
          border-radius: 0;
          font-size: var(--font-size-xs);
        }

        .sp-drawer-menu-item {
          border-left: 4px solid transparent;
          padding: var(--spacing-2) var(--spacing-3);
          margin-bottom: var(--spacing-1);
          border-radius: var(--radius-xs);
          font-size: var(--font-size-xs);
          color: white;
          cursor: pointer;
          transition: all 0.15s ease-in-out;
          display: flex;
          align-items: center;
          white-space: nowrap;
          font-weight: var(--font-weight-medium);
        }

        .sp-drawer-menu-item:hover {
          border-left-color: rgba(255, 255, 255, 0.3);
          background: rgba(255, 255, 255, 0.1);
        }

        .sp-drawer-menu-item:first-child {
          border-left-color: white;
          background: rgba(255, 255, 255, 0.15);
        }

        .sp-fullscreen-overlay {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: rgb(21, 52, 109);
          color: white;
          z-index: 50;
          opacity: 0;
          visibility: hidden;
          transition: all 0.3s ease;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          border-radius: var(--radius-sm);
        }

        .sp-fullscreen-overlay.open {
          opacity: 1;
          visibility: visible;
        }

        .sp-fullscreen-menu {
          text-align: center;
          width: 100%;
          max-width: 200px;
          margin-top: var(--spacing-6);
        }

        .sp-fullscreen-close {
          position: absolute;
          top: var(--spacing-2);
          right: var(--spacing-2);
          background: none;
          border: none;
          color: white;
          font-size: 18px;
          cursor: pointer;
          padding: var(--spacing-1);
          z-index: 60;
        }

        .sp-fullscreen-item {
          border-left: 4px solid transparent;
          padding: var(--spacing-2) var(--spacing-3);
          margin-bottom: var(--spacing-1);
          border: 1px solid rgba(255, 255, 255, 0.2);
          border-radius: var(--radius-xs);
          font-size: var(--font-size-xs);
          font-weight: var(--font-weight-medium);
          cursor: pointer;
          transition: all 0.15s ease-in-out;
          background: rgba(255, 255, 255, 0.1);
          display: flex;
          align-items: center;
          justify-content: center;
          white-space: nowrap;
        }

        .sp-fullscreen-item:hover {
          border-left-color: rgba(255, 255, 255, 0.3);
          background: rgba(255, 255, 255, 0.2);
          transform: translateY(-2px);
        }

        .sp-fullscreen-item:first-child {
          border-left-color: white;
          background: rgba(255, 255, 255, 0.25);
        }


        .container-demo {
          max-width: 600px;
          margin: 0 auto;
          padding: var(--spacing-4);
          background: var(--color-primary-50);
          border-radius: var(--radius-md);
        }

        .container-content {
          background: white;
          padding: var(--spacing-3);
          border-radius: var(--radius-sm);
          text-align: center;
          font-size: var(--font-size-sm);
          color: var(--color-neutral-600);
        }

        .grid-demo {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));
          gap: var(--spacing-3);
        }

        .grid-item {
          background: var(--color-primary-100);
          padding: var(--spacing-3);
          border-radius: var(--radius-sm);
          text-align: center;
          font-size: var(--font-size-sm);
          color: var(--color-primary-700);
          font-weight: var(--font-weight-medium);
        }

        .sidebar-demo {
          display: flex;
          gap: var(--spacing-4);
          min-height: 200px;
        }

        .sidebar {
          flex: 0 0 200px;
          background: var(--color-neutral-100);
          padding: var(--spacing-4);
          border-radius: var(--radius-md);
        }

        .sidebar-item {
          padding: var(--spacing-2);
          margin-bottom: var(--spacing-2);
          border-radius: var(--radius-sm);
          font-size: var(--font-size-sm);
          color: white;
        }

        .main-content {
          flex: 1;
          background: var(--color-neutral-50);
          padding: var(--spacing-4);
          border-radius: var(--radius-md);
        }

        .content-block {
          background: white;
          padding: var(--spacing-3);
          border-radius: var(--radius-sm);
          margin-bottom: var(--spacing-3);
          font-size: var(--font-size-sm);
          color: var(--color-neutral-600);
        }

        .layout-selector {
          display: flex;
          gap: var(--spacing-2);
          margin-bottom: var(--spacing-4);
        }

        .layout-button {
          padding: var(--spacing-2) var(--spacing-3);
          border: 1px solid var(--color-neutral-300);
          border-radius: var(--radius-sm);
          background: white;
          font-size: var(--font-size-sm);
          cursor: pointer;
          transition: all 0.2s;
        }

        .layout-button.active {
          background: rgb(21, 52, 109);
          color: white;
          border-color: rgb(21, 52, 109);
        }

        .layout-button:hover:not(.active) {
          background: var(--color-neutral-50);
        }

        .theme-selector {
          display: flex;
          gap: var(--spacing-2);
          margin-bottom: var(--spacing-6);
          padding: var(--spacing-4);
          background: var(--color-neutral-50);
          border-radius: var(--radius-md);
          border: 1px solid var(--color-neutral-200);
        }

        .theme-button {
          padding: var(--spacing-2) var(--spacing-4);
          border: 1px solid var(--color-neutral-300);
          border-radius: var(--radius-sm);
          background: white;
          font-size: var(--font-size-sm);
          cursor: pointer;
          transition: all 0.2s;
          display: flex;
          align-items: center;
          gap: var(--spacing-2);
        }

        .theme-button.active {
          background: rgb(21, 52, 109);
          color: white;
          border-color: rgb(21, 52, 109);
        }

        .theme-button:hover:not(.active) {
          background: var(--color-neutral-50);
        }

        .theme-preview {
          width: 16px;
          height: 16px;
          border-radius: var(--radius-xs);
          border: 1px solid rgba(0, 0, 0, 0.1);
        }

        .theme-preview.white {
          background: linear-gradient(45deg, #f3f4f6 50%, #e5e7eb 50%);
        }

        .theme-preview.blue {
          background: linear-gradient(45deg, rgb(21, 52, 109) 50%, rgb(55, 65, 81) 50%);
        }

        .theme-preview.grey {
          background: linear-gradient(45deg, #4b5563 50%, #6b7280 50%);
        }

        .theme-demo-layout {
          border: 2px solid var(--color-neutral-200);
          border-radius: var(--radius-lg);
          overflow: hidden;
          background: white;
          min-height: 300px;
        }

        .theme-nav-header {
          border-bottom: 1px solid var(--color-neutral-200);
          position: relative;
          box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06);
        }

        .theme-nav-container {
          padding: 0 var(--spacing-4);
          display: flex;
          align-items: center;
          justify-content: space-between;
          height: 48px;
        }

        .theme-nav-logo {
          font-size: var(--font-size-lg);
          font-weight: var(--font-weight-bold);
          text-decoration: none;
          transition: color 0.2s;
        }

        .theme-user-menu {
          font-size: var(--font-size-xs);
          color: inherit;
        }

        .theme-main-content {
          display: flex;
          min-height: 200px;
        }

        .theme-sidebar {
          flex: 0 0 120px;
          padding: var(--spacing-3);
          border-right: 1px solid var(--color-neutral-200);
        }

        .theme-content {
          flex: 1;
          padding: var(--spacing-4);
        }

        .theme-menu-item {
          padding: var(--spacing-1);
          margin-bottom: var(--spacing-1);
          border-radius: var(--radius-xs);
          font-size: var(--font-size-xs);
          cursor: pointer;
          transition: background 0.2s;
          display: flex;
          align-items: center;
          white-space: nowrap;
        }

        .theme-footer {
          border-top: 1px solid var(--color-neutral-200);
          padding: var(--spacing-3);
          text-align: center;
          font-size: var(--font-size-xs);
          margin-top: auto;
        }

        /* White Theme */
        .white-theme .theme-nav-header {
          background: var(--color-neutral-white);
        }

        .white-theme .theme-nav-logo {
          color: var(--color-primary-700);
        }

        .white-theme .theme-nav-logo:hover {
          color: var(--color-primary-800);
        }

        .white-theme .theme-user-menu {
          color: var(--color-primary-700);
        }

        .white-theme .theme-sidebar {
          background: var(--color-neutral-white);
          border-right-color: var(--color-neutral-200);
        }

        .white-theme .theme-menu-item {
          border-left: 4px solid transparent;
          background: transparent;
          color: #4b5563;
          padding: var(--spacing-2) var(--spacing-3);
          margin-bottom: var(--spacing-1);
          font-weight: var(--font-weight-medium);
          transition: all 0.15s ease-in-out;
        }

        .white-theme .theme-menu-item:hover {
          border-left-color: #d1d5db;
          background: #f9fafb;
          color: #374151;
        }

        .white-theme .theme-menu-item:first-child {
          border-left-color: #6366f1;
          background: #eef2ff;
          color: #4338ca;
        }

        .white-theme .theme-menu-item svg {
          color: #4b5563;
        }

        .white-theme .theme-menu-item:hover svg {
          color: #374151;
        }

        .white-theme .theme-menu-item:first-child svg {
          color: #4338ca !important;
        }

        .white-theme .theme-content {
          background: #f9fafb;
          color: var(--color-neutral-900);
        }

        .white-theme .theme-footer {
          background: var(--color-neutral-white);
          color: var(--color-neutral-600);
          border-top-color: var(--color-neutral-200);
        }

        /* Blue Theme */
        .blue-theme .theme-nav-header {
          background: rgb(21, 52, 109);
        }

        .blue-theme .theme-nav-logo {
          color: white;
        }

        .blue-theme .theme-nav-logo:hover {
          color: #e1edff;
        }

        .blue-theme .theme-user-menu {
          color: white;
        }

        .blue-theme .theme-sidebar {
          background: rgb(55, 65, 81);
          border-right-color: rgb(55, 65, 81);
        }

        .blue-theme .theme-menu-item {
          border-left: 4px solid transparent;
          background: transparent;
          color: white;
          padding: var(--spacing-2) var(--spacing-3);
          margin-bottom: var(--spacing-1);
          font-weight: var(--font-weight-medium);
          transition: all 0.15s ease-in-out;
        }

        .blue-theme .theme-menu-item:hover {
          border-left-color: rgba(255, 255, 255, 0.3);
          background: rgba(21, 52, 109, 0.2);
        }

        .blue-theme .theme-menu-item:first-child {
          border-left-color: white;
          background: rgba(255, 255, 255, 0.1);
          color: white;
        }

        .blue-theme .theme-content {
          background: #f9fafb;
          color: #111827;
        }

        .blue-theme .theme-footer {
          background: rgb(21, 52, 109);
          color: white;
          border-top-color: rgb(55, 65, 81);
        }

        /* Grey Theme */
        .grey-theme .theme-nav-header {
          background: #374151;
        }

        .grey-theme .theme-nav-logo {
          color: white;
        }

        .grey-theme .theme-nav-logo:hover {
          color: #e5e7eb;
        }

        .grey-theme .theme-user-menu {
          color: white;
        }

        .grey-theme .theme-sidebar {
          background: #fefdf8;
          border-right-color: #f0eedc;
        }

        .grey-theme .theme-menu-item {
          border-left: 4px solid transparent;
          background: transparent;
          color: #111827;
          padding: var(--spacing-2) var(--spacing-3);
          margin-bottom: var(--spacing-1);
          font-weight: var(--font-weight-medium);
          transition: all 0.15s ease-in-out;
        }

        .grey-theme .theme-menu-item:hover {
          border-left-color: #9ca3af;
          background: rgba(55, 65, 81, 0.1);
          color: #111827;
        }

        .grey-theme .theme-menu-item:first-child {
          border-left-color: #374151;
          background: #f3f4f6;
          color: #111827;
        }

        .grey-theme .theme-menu-item svg {
          color: #4b5563 !important;
        }

        .grey-theme .theme-menu-item:hover svg {
          color: #111827 !important;
        }

        .grey-theme .theme-menu-item:first-child svg {
          color: #374151 !important;
        }

        .grey-theme .theme-content {
          background: #fafafa;
          color: #111827;
        }

        .grey-theme .theme-footer {
          background: #374151;
          color: white;
          border-top-color: #4b5563;
        }

        @media (max-width: 768px) {
          .demo-grid {
            grid-template-columns: 1fr;
          }

          .sidebar-demo {
            flex-direction: column;
          }

          .sidebar {
            flex: none;
          }

          .theme-selector {
            flex-direction: column;
          }
        }


      `}</style>
      <style jsx>{`
        .pc-sidebar {
          transition: all 0.3s ease;
        }

        .pc-sidebar.collapsed {
          flex: 0 0 40px;
        }

        .sidebar-item {
          border-left: 4px solid transparent;
          margin-bottom: var(--spacing-1);
          display: flex;
          align-items: center;
          gap: 8px;
          padding: var(--spacing-2) var(--spacing-3);
          border-radius: var(--radius-xs);
          cursor: pointer;
          transition: all 0.15s ease-in-out;
          white-space: nowrap;
          font-size: var(--font-size-xs);
          font-weight: var(--font-weight-medium);
          color: white;
        }

        .sidebar-item:hover {
          border-left-color: rgba(255, 255, 255, 0.3);
          background: rgba(255, 255, 255, 0.1);
        }

        .sidebar-item:first-child {
          border-left-color: white;
          background: rgba(255, 255, 255, 0.15);
        }

        .sidebar-item svg {
          color: white !important;
        }

        .pc-sidebar .sidebar-item svg {
          color: white !important;
        }
      `}</style>

      <div className="page-header">
        <h1 className="page-title">レイアウト</h1>
        <p className="page-description">
          PC（デスクトップ）とSP（スマートフォン）向けのレイアウトコンポーネント。
          デバイスごとに最適化されたレイアウト構造を提供します。
        </p>
      </div>

      {/* Tone and Manner Section */}
      <div className="component-section">
        <h2 className="section-title">配色</h2>
        <div className="component-card">
          <div className="component-info">
            <h3 className="component-name">Color Theme</h3>
            <p className="component-description">
              プロジェクトのブランドアイデンティティに合わせた配色テーマ。青基調はデフォルト、軽量なUIには白基調、汎用系はグレー基調を推奨します。
            </p>
          </div>
          <div className="component-demo">
            <div className="theme-selector">
              <button
                className={`theme-button ${selectedTheme === 'blue' ? 'active' : ''}`}
                onClick={() => setSelectedTheme('blue')}
              >
                <div className="theme-preview blue"></div>
                青基調
              </button>
              <button
                className={`theme-button ${selectedTheme === 'white' ? 'active' : ''}`}
                onClick={() => setSelectedTheme('white')}
              >
                <div className="theme-preview white"></div>
                白基調
              </button>
              <button
                className={`theme-button ${selectedTheme === 'grey' ? 'active' : ''}`}
                onClick={() => setSelectedTheme('grey')}
              >
                <div className="theme-preview grey"></div>
                グレー基調
              </button>
            </div>
            <div className={`theme-demo-layout ${selectedTheme}-theme`}>
              <nav className="theme-nav-header">
                <div className="theme-nav-container">
                  <a href="#" className="theme-nav-logo">
                    App Title
                  </a>
                </div>
              </nav>
              <div className="theme-main-content">
                <aside className="theme-sidebar">
                  <div className="theme-menu-item"><Icon name="dashboard" className="w-4 h-4" style={{ marginRight: '6px' }} />ダッシュボード</div>
                  <div className="theme-menu-item"><Icon name="users" className="w-4 h-4" style={{ marginRight: '6px' }} />ユーザー</div>
                  <div className="theme-menu-item"><Icon name="settings" className="w-4 h-4" style={{ marginRight: '6px' }} />設定</div>
                  <div className="theme-menu-item"><Icon name="clipboard" className="w-4 h-4" style={{ marginRight: '6px' }} />レポート</div>
                </aside>
                <main className="theme-content">
                  <h3 style={{ margin: '0 0 var(--spacing-3) 0', fontSize: 'var(--font-size-sm)' }}>テーマ適用サンプル</h3>
                  <p style={{ margin: '0 0 var(--spacing-2) 0', fontSize: 'var(--font-size-xs)', lineHeight: 'var(--line-height-relaxed)' }}>
                    現在のUI Componentsのレイアウトを再現したプレビューです。
                    <br />
                    選択したテーマに応じて、ヘッダー、サイドバー、フッターの色が変化します。
                  </p>
                  <div style={{
                    background: selectedTheme === 'blue' ? '#e1edff' :
                               selectedTheme === 'white' ? 'var(--color-primary-50)' : '#f3f4f6',
                    padding: 'var(--spacing-3)',
                    borderRadius: 'var(--radius-md)',
                    fontSize: 'var(--font-size-xs)',
                    color: selectedTheme === 'blue' ? 'rgb(21, 52, 109)' :
                           selectedTheme === 'white' ? 'var(--color-primary-700)' : '#374151'
                  }}>
                    🎨 ブランドアイデンティティに合わせた配色テーマで一貫性を保ちます
                  </div>
                </main>
              </div>
              <footer className="theme-footer">
                <p style={{ margin: 0 }}>© 2025 UI Components - {selectedTheme === 'blue' ? 'Blue Theme' : selectedTheme === 'white' ? 'White Theme' : 'Grey Theme'}</p>
              </footer>
            </div>
          </div>
          <div className="code-snippet">
            {`/* 青基調テーマ */
.blue-theme .pc-header {
  background: rgb(21, 52, 109); /* CWJ-BISブルー */
  color: white;
}
.blue-theme .sidebar {
  background: rgb(55, 65, 81); /* CWJ-BISサイドバーグレー */
  color: white;
}

/* 白基調テーマ */
.white-theme .pc-header {
  background: var(--color-neutral-white);
  color: var(--color-primary-700);
}

/* グレー基調テーマ */
.grey-theme .pc-header {
  background: #374151; /* UI-Componentsグレー */
  color: white;
}`}
          </div>
        </div>
      </div>

      {/* PC Layout */}
      <div className="component-section">
        <h2 className="section-title">PCレイアウト</h2>

        <div className="component-card">
          <div className="component-info">
            <h3 className="component-name">PC Layout</h3>
            <p className="component-description">
              デスクトップ向けのレイアウト。横幅を活用した多カラム構成が可能
            </p>
          </div>
          <div className="component-demo">
            <div className="layout-selector">
              <button
                className={`layout-button ${activePcLayout === 'standard' ? 'active' : ''}`}
                onClick={() => setActivePcLayout('standard')}
              >
                基本
              </button>
              <button
                className={`layout-button ${activePcLayout === 'drawer' ? 'active' : ''}`}
                onClick={() => setActivePcLayout('drawer')}
              >
                サイドバー固定
              </button>
              <button
                className={`layout-button ${activePcLayout === 'overlay' ? 'active' : ''}`}
                onClick={() => setActivePcLayout('overlay')}
              >
                オーバーレイ
              </button>
              <button
                className={`layout-button ${activePcLayout === 'navigation' ? 'active' : ''}`}
                onClick={() => setActivePcLayout('navigation')}
              >
                ナビゲーション
              </button>
            </div>
            <div className="pc-layout-demo">
              {activePcLayout === 'navigation' && (
                <div>
                  <div className="pc-header">
                    <span>App Title</span>
                  </div>
                  <div className="pc-nav">
                    <a href="#" className="pc-nav-item active"><Icon name="home" className="w-4 h-4" style={{ marginRight: '8px' }} />ホーム</a>
                    <a href="#" className="pc-nav-item"><Icon name="user" className="w-4 h-4" style={{ marginRight: '8px' }} />会社情報</a>
                    <a href="#" className="pc-nav-item"><Icon name="briefcase" className="w-4 h-4" style={{ marginRight: '8px' }} />サービス</a>
                    <a href="#" className="pc-nav-item"><Icon name="mail" className="w-4 h-4" style={{ marginRight: '8px' }} />お問い合わせ</a>
                  </div>
                  <div className="pc-content">
                    ナビゲーション表示レイアウト
                    <br />
                    フルワイドでコンテンツを表示
                    <br />
                    <br />
                    ヘッダー下にナビゲーション
                    <br />
                    メニューを配置するパターン
                  </div>
                  <div className="pc-footer">
                    © 2025 App Title
                  </div>
                </div>
              )}
              {activePcLayout === 'standard' && (
                <div>
                  <div className="pc-header">
                    <span>App Title</span>
                  </div>
                  <div className="pc-main">
                    <div className={`pc-sidebar ${drawerCollapsed ? 'collapsed' : ''}`}>
                      <div style={{ marginBottom: '8px', display: 'flex', alignItems: 'center', justifyContent: drawerCollapsed ? 'center' : 'flex-end' }}>
                        <button
                          onClick={() => setDrawerCollapsed(!drawerCollapsed)}
                          style={{ background: 'none', border: 'none', color: 'inherit', cursor: 'pointer' }}
                        >
                          <Icon name={drawerCollapsed ? 'chevron-right' : 'chevron-left'} className="w-4 h-4" style={{ color: 'white' }} />
                        </button>
                      </div>
                      <div className="sidebar-item">
                        <Icon name="dashboard" className="w-4 h-4" style={{ color: 'white' }} />
                        {!drawerCollapsed && <span>ダッシュボード</span>}
                      </div>
                      <div className="sidebar-item">
                        <Icon name="users" className="w-4 h-4" style={{ color: 'white' }} />
                        {!drawerCollapsed && <span>ユーザー</span>}
                      </div>
                      <div className="sidebar-item">
                        <Icon name="settings" className="w-4 h-4" style={{ color: 'white' }} />
                        {!drawerCollapsed && <span>設定</span>}
                      </div>
                      <div className="sidebar-item">
                        <Icon name="clipboard" className="w-4 h-4" style={{ color: 'white' }} />
                        {!drawerCollapsed && <span>レポート</span>}
                      </div>
                      <div className="sidebar-item">
                        <Icon name="star" className="w-4 h-4" style={{ color: 'white' }} />
                        {!drawerCollapsed && <span>分析</span>}
                      </div>
                    </div>
                    <div className="pc-content">
                      基本レイアウト
                      <br />
                      サイドバー付きの構成
                      <br />
                      <br />
                      標準的なレイアウト
                      <br />
                      ダッシュボードに最適
                      <br />
                      <br />
                      メインコンテンツエリア
                      <br />
                      管理画面向けの設計
                    </div>
                  </div>
                  <div className="pc-footer">
                    © 2025 App Title
                  </div>
                </div>
              )}
              {activePcLayout === 'drawer' && (
                <div>
                  <div className="pc-header">
                    <span>App Title</span>
                  </div>
                  <div className="pc-drawer-layout">
                    <div className={`pc-drawer-sidebar ${isPcDrawerOpen ? '' : 'collapsed'}`}>
                      <div className="drawer-menu-items" style={{ marginTop: '8px' }}>
                          <div className="drawer-menu-item" style={{ padding: 'var(--spacing-1) var(--spacing-2)' }}><Icon name="dashboard" className="w-4 h-4" style={{ color: 'white', marginRight: '8px' }} />ダッシュボード</div>
                        <div className="drawer-menu-item" style={{ padding: 'var(--spacing-1) var(--spacing-2)' }}><Icon name="users" className="w-4 h-4" style={{ color: 'white', marginRight: '8px' }} />ユーザー</div>
                        <div className="drawer-menu-item" style={{ padding: 'var(--spacing-1) var(--spacing-2)' }}><Icon name="settings" className="w-4 h-4" style={{ color: 'white', marginRight: '8px' }} />設定</div>
                        <div className="drawer-menu-item" style={{ padding: 'var(--spacing-1) var(--spacing-2)' }}><Icon name="clipboard" className="w-4 h-4" style={{ color: 'white', marginRight: '8px' }} />レポート</div>
                        <div className="drawer-menu-item" style={{ padding: 'var(--spacing-1) var(--spacing-2)' }}><Icon name="star" className="w-4 h-4" style={{ color: 'white', marginRight: '8px' }} />分析</div>
                      </div>
                    </div>
                    <div className="pc-drawer-content">
                      サイドバー固定レイアウト
                      <br />
                      サイドバーが常時表示
                      <br />
                      <br />
                      安定したナビゲーション
                      <br />
                      管理画面に最適
                      <br />
                      <br />
                      コンテンツ領域と
                      <br />
                      バランスの取れた設計
                    </div>
                  </div>
                  <div className="pc-footer">
                    © 2025 App Title
                  </div>
                </div>
              )}
              {activePcLayout === 'overlay' && (
                <div>
                  <div className="pc-header">
                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                      <button
                        className="drawer-toggle"
                        onClick={() => setIsOverlayDrawerOpen(!isOverlayDrawerOpen)}
                        style={{
                          position: 'static',
                          background: 'none',
                          border: 'none',
                          fontSize: '12px',
                          cursor: 'pointer',
                          padding: '2px 4px',
                          borderRadius: '3px'
                        }}
                      >
                        ≡
                      </button>
                      <span>App Title</span>
                    </div>
                  </div>
                  <div className="overlay-drawer-layout">
                    <div
                      className={`overlay-drawer-backdrop ${isOverlayDrawerOpen ? 'open' : ''}`}
                      onClick={() => setIsOverlayDrawerOpen(false)}
                    />
                    <div className={`overlay-drawer-sidebar ${isOverlayDrawerOpen ? 'open' : ''}`}>
                      <div className="overlay-menu-items" style={{ marginTop: '8px' }}>
                        <div className="overlay-menu-item">
                          <Icon name="dashboard" className="w-4 h-4" style={{ color: 'white' }} />
                          ダッシュボード
                        </div>
                        <div className="overlay-menu-item">
                          <Icon name="users" className="w-4 h-4" style={{ color: 'white' }} />
                          ユーザー
                        </div>
                        <div className="overlay-menu-item">
                          <Icon name="settings" className="w-4 h-4" style={{ color: 'white' }} />
                          設定
                        </div>
                        <div className="overlay-menu-item">
                          <Icon name="clipboard" className="w-4 h-4" style={{ color: 'white' }} />
                          レポート
                        </div>
                        <div className="overlay-menu-item">
                          <Icon name="star" className="w-4 h-4" style={{ color: 'white' }} />
                          分析
                        </div>
                      </div>
                    </div>
                    <div className="overlay-drawer-content">
                      オーバーレイドロワー
                      <br />
                      コンテンツの上に重なる
                      <br />
                      <br />
                      背景クリックで閉じる
                      <br />
                      <br />
                      モバイルライクなUX
                      <br />
                      <br />
                      画面サイズを問わず
                      <br />
                      一定の操作感
                    </div>
                  </div>
                  <div className="pc-footer">
                    © 2025 App Title
                  </div>
                </div>
              )}
            </div>
          </div>
          <div className="code-snippet">
            {`<div className="pc-layout">
  <header className="pc-header">
    <!-- ヘッダー：ロゴ、ナビゲーション、ユーザーメニュー -->
  </header>
  <main className="pc-main">
    <aside className="pc-sidebar">
      <!-- サイドバー：メニュー、フィルター -->
    </aside>
    <div className="pc-content">
      <!-- メインコンテンツ -->
    </div>
  </main>
</div>`}
          </div>
        </div>
      </div>

      {/* SP Layout */}
      <div className="component-section">
        <h2 className="section-title">SPレイアウト</h2>

        <div className="component-card">
          <div className="component-info">
            <h3 className="component-name">SP Layout</h3>
            <p className="component-description">
              スマートフォン向けのレイアウト。基本はハンバーガーメニューを使用した1カラム構成
            </p>
          </div>
          <div className="component-demo">
            <div className="layout-selector">
              <button
                className={`layout-button ${activeSpLayout === 'mobile-first' ? 'active' : ''}`}
                onClick={() => setActiveSpLayout('mobile-first')}
              >
                基本
              </button>
              <button
                className={`layout-button ${activeSpLayout === 'drawer' ? 'active' : ''}`}
                onClick={() => setActiveSpLayout('drawer')}
              >
                ドロワー
              </button>
              <button
                className={`layout-button ${activeSpLayout === 'fullscreen' ? 'active' : ''}`}
                onClick={() => setActiveSpLayout('fullscreen')}
              >
                全画面表示
              </button>
              <button
                className={`layout-button ${activeSpLayout === 'bottom-nav' ? 'active' : ''}`}
                onClick={() => setActiveSpLayout('bottom-nav')}
              >
                ボトムナビ
              </button>
            </div>
            <div className="sp-frame">
              <div className="sp-layout-demo">
                {activeSpLayout === 'mobile-first' && (
                  <div style={{ position: 'relative' }}>
                    <div className="sp-header">
                      <span>App Title</span>
                      <div style={{ position: 'relative' }}>
                        <button
                          style={{
                            background: 'none',
                            border: 'none',
                            cursor: 'pointer',
                            fontSize: '14px',
                            color: 'white'
                          }}
                          onClick={() => setIsSpHamburgerOpen(!isSpHamburgerOpen)}
                        >
                          ☰
                        </button>
                        {isSpHamburgerOpen && (
                          <div className={`sp-hamburger-menu ${isSpHamburgerOpen ? 'open' : ''}`}>
                            <div className="sp-hamburger-item"><Icon name="home" className="w-4 h-4" style={{ color: 'white', marginRight: '8px' }} />ホーム</div>
                            <div className="sp-hamburger-item"><Icon name="briefcase" className="w-4 h-4" style={{ color: 'white', marginRight: '8px' }} />サービス</div>
                            <div className="sp-hamburger-item"><Icon name="building" className="w-4 h-4" style={{ color: 'white', marginRight: '8px' }} />会社情報</div>
                            <div className="sp-hamburger-item"><Icon name="mail" className="w-4 h-4" style={{ color: 'white !important', marginRight: '8px' }} />お問い合わせ</div>
                            <div className="sp-hamburger-item"><Icon name="user" className="w-4 h-4" style={{ color: 'white', marginRight: '8px' }} />マイページ</div>
                          </div>
                        )}
                      </div>
                    </div>
                    <div className="sp-content">
                      基本のモバイルレイアウト
                      <br />
                      <br />
                      クリックでハンバーガー
                      <br />
                      メニューが表示される
                      <br />
                      <br />
                      縦スクロールでの
                      <br />
                      コンテンツ表示
                      <br />
                      <br />
                      最もスタンダードな
                      <br />
                      SP構成
                    </div>
                    <div className="sp-footer">
                      © 2025 App Title
                    </div>
                  </div>
                )}
                {activeSpLayout === 'fullscreen' && (
                  <div style={{ position: 'relative' }}>
                    <div className="sp-header">
                      <span>App Title</span>
                      <div style={{ position: 'relative' }}>
                        <button
                          style={{
                            background: 'none',
                            border: 'none',
                            cursor: 'pointer',
                            fontSize: '14px',
                            color: 'white'
                          }}
                          onClick={() => setIsSpFullscreenOpen(!isSpFullscreenOpen)}
                        >
                          ☰
                        </button>
                      </div>
                    </div>
                    <div className="sp-content">
                      全画面メニューレイアウト
                      <br />
                      <br />
                      ハンバーガークリックで
                      <br />
                      全画面にメニュー表示
                      <br />
                      <br />
                      シンプルで分かりやすい
                      <br />
                      ナビゲーション
                      <br />
                      <br />
                      モバイルアプリ風の
                      <br />
                      操作感を実現
                    </div>
                    <div className="sp-footer">
                      © 2025 App Title
                    </div>
                    <div className={`sp-fullscreen-overlay ${isSpFullscreenOpen ? 'open' : ''}`}>
                      <button
                        className="sp-fullscreen-close"
                        onClick={() => setIsSpFullscreenOpen(false)}
                      >
                        ×
                      </button>
                      <div className="sp-fullscreen-menu">
                        <div className="sp-fullscreen-item"><Icon name="home" className="w-4 h-4" style={{ color: 'white', marginRight: '8px' }} />ホーム</div>
                        <div className="sp-fullscreen-item"><Icon name="briefcase" className="w-4 h-4" style={{ color: 'white', marginRight: '8px' }} />サービス</div>
                        <div className="sp-fullscreen-item"><Icon name="building" className="w-4 h-4" style={{ color: 'white', marginRight: '8px' }} />会社情報</div>
                        <div className="sp-fullscreen-item"><Icon name="mail" className="w-4 h-4" style={{ color: 'white', marginRight: '8px' }} />お問い合わせ</div>
                        <div className="sp-fullscreen-item"><Icon name="user" className="w-4 h-4" style={{ color: 'white', marginRight: '8px' }} />マイページ</div>
                      </div>
                    </div>
                  </div>
                )}
                {activeSpLayout === 'bottom-nav' && (
                  <div>
                    <div className="sp-header">
                      <span>App Title</span>
                    </div>
                    <div className="sp-content">
                      ボトムナビゲーション
                      <br />
                      レイアウト
                      <br />
                      <br />
                      下部に固定された
                      <br />
                      タブナビゲーション
                      <br />
                      <br />
                      アプリライクな
                      <br />
                      操作感を実現
                      <br />
                      <br />
                      タブ切り替えで
                      <br />
                      コンテンツ表示
                    </div>
                    <div className="sp-nav" style={{
                      display: 'flex',
                      justifyContent: 'space-around',
                      alignItems: 'center',
                      padding: 'var(--spacing-3)'
                    }}>
                      <div className="sp-nav-item active" style={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        gap: '2px',
                        fontSize: '10px'
                      }}>
                        🏠
                        <span>ホーム</span>
                      </div>
                      <div className="sp-nav-item" style={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        gap: '2px',
                        fontSize: '10px'
                      }}>
                        📊
                        <span>分析</span>
                      </div>
                      <div className="sp-nav-item" style={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        gap: '2px',
                        fontSize: '10px'
                      }}>
                        💬
                        <span>メッセージ</span>
                      </div>
                      <div className="sp-nav-item" style={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        gap: '2px',
                        fontSize: '10px'
                      }}>
                        ⚙️
                        <span>設定</span>
                      </div>
                    </div>
                  </div>
                )}
                {activeSpLayout === 'drawer' && (
                  <div style={{ position: 'relative' }}>
                    <div className="sp-header">
                      <span>App Title</span>
                      <div style={{ position: 'relative' }}>
                        <button
                          style={{
                            background: 'none',
                            border: 'none',
                            cursor: 'pointer',
                            fontSize: '14px',
                            color: 'white'
                          }}
                          onClick={() => setIsSpDrawerOpen(!isSpDrawerOpen)}
                        >
                          ☰
                        </button>
                      </div>
                    </div>
                    <div className="sp-content">
                      ドロワーメニューレイアウト
                      <br />
                      <br />
                      右端のハンバーガークリックで
                      <br />
                      右からドロワーが表示
                      <br />
                      <br />
                      基本オプションと同じ
                      <br />
                      レイアウト構成
                      <br />
                      <br />
                      背景クリックで閉じる
                    </div>
                    <div className="sp-footer">
                      © 2025 App Title
                    </div>
                    <div
                      className={`sp-drawer-backdrop ${isSpDrawerOpen ? 'open' : ''}`}
                      onClick={() => setIsSpDrawerOpen(false)}
                    />
                    <div className={`sp-drawer-sidebar ${isSpDrawerOpen ? 'open' : ''}`}>
                      <button
                        style={{
                          position: 'absolute',
                          top: 'var(--spacing-2)',
                          right: 'var(--spacing-2)',
                          background: 'none',
                          border: 'none',
                          color: 'white',
                          fontSize: '18px',
                          cursor: 'pointer',
                          padding: 'var(--spacing-1)',
                          zIndex: 60
                        }}
                        onClick={() => setIsSpDrawerOpen(false)}
                      >
                        ×
                      </button>
                      <div style={{ marginTop: '32px' }}>
                        <div className="sp-drawer-menu-item"><Icon name="home" className="w-4 h-4" style={{ color: 'white', marginRight: '8px' }} />ホーム</div>
                        <div className="sp-drawer-menu-item"><Icon name="briefcase" className="w-4 h-4" style={{ color: 'white', marginRight: '8px' }} />サービス</div>
                        <div className="sp-drawer-menu-item"><Icon name="building" className="w-4 h-4" style={{ color: 'white', marginRight: '8px' }} />会社情報</div>
                        <div className="sp-drawer-menu-item"><Icon name="mail" className="w-4 h-4" style={{ color: 'white', marginRight: '8px' }} />お問い合わせ</div>
                        <div className="sp-drawer-menu-item"><Icon name="user" className="w-4 h-4" style={{ color: 'white', marginRight: '8px' }} />マイページ</div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
          <div className="code-snippet">
            {`<div className="sp-layout">
  <header className="sp-header">
    <!-- ヘッダー：ハンバーガーメニュー、タイトル -->
  </header>
  <main className="sp-content">
    <!-- メインコンテンツ：縦スクロール -->
  </main>
  <nav className="sp-bottom-nav">
    <!-- ボトムナビゲーション（オプション） -->
  </nav>
</div>`}
          </div>
        </div>
      </div>







      {/* Usage Guidelines */}
      <div className="component-section">
        <h2 className="section-title">使用上の注意</h2>
        <div className="component-card">
          <ul style={{ lineHeight: 'var(--line-height-relaxed)', color: 'var(--color-neutral-700)' }}>
            <li>PCレイアウトは横幅1024px以上のデスクトップ環境を想定しています</li>
            <li>SPレイアウトは横幅375px〜768pxのモバイル環境を想定しています</li>
            <li>タブレット端末（768px〜1024px）はSPレイアウト準拠で実装してください</li>
            <li>サイドバー付きレイアウトは管理画面やダッシュボードに適しています</li>
            <li>ボトムナビゲーションはアプリライクなUXを実現できます</li>
            <li>ドロワーメニューはコンテンツ領域を最大化したい場合に有効です</li>
            <li>レスポンシブ対応時は@mediaクエリでPC/SPレイアウトを切り替えてください</li>
            <li>タッチデバイスではボタンサイズを44px以上に設定することを推奨します</li>
            <li>青基調テーマはビジネス系システムに、グレー基調テーマは汎用系システムに適しています</li>
            <li>テーマ色はブランドガイドラインに合わせてカスタマイズしてください</li>
          </ul>
        </div>
      </div>

      {/* LoadingSpinner instances */}
      <LoadingSpinner
        show={showDefaultSpinner}
        overlay={true}
        size="md"
        text="読み込み中..."
      />

      <LoadingSpinner
        show={showLargeSpinner}
        overlay={true}
        size="lg"
        color="#28a745"
        text="データを処理中..."
        backgroundColor="rgba(40, 167, 69, 0.1)"
      />

      <LoadingSpinner
        show={showSmallSpinner}
        overlay={true}
        size="sm"
        color="#ffc107"
        text="少々お待ちください..."
        backgroundColor="rgba(255, 193, 7, 0.1)"
      />

      <LoadingSpinner
        show={showCustomSpinner}
        overlay={true}
        size="xl"
        color="#dc3545"
        text="重要な処理を実行中です..."
        backgroundColor="rgba(0, 0, 0, 0.7)"
      />
    </div>
  );
};

export default LayoutPage;