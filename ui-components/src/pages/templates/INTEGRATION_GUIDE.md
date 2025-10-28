# Template Integration Guide

**Version:** 1.0.0
**Last Updated:** 2025-10-18

## Table of Contents

1. [Overview](#overview)
2. [Architecture](#architecture)
3. [InfoPageWrapper Integration](#infopagewrapper-integration)
4. [TemplateNavigation Usage](#templatenavigation-usage)
5. [useViewMode Hook](#useviewmode-hook)
6. [Flash Message Pattern](#flash-message-pattern)
7. [Notification System Integration](#notification-system-integration)
8. [Route Mapping Pattern](#route-mapping-pattern)
9. [Laravel + Inertia.js Integration](#laravel--inertiajs-integration)
10. [Template-Specific Guides](#template-specific-guides)
11. [Best Practices](#best-practices)

---

## Overview

This guide provides comprehensive documentation for integrating the template system into your application. The templates are designed to work seamlessly with Laravel + Inertia.js but can also be used standalone with React Router.

### Key Features

- **Unified Layout System**: Consistent header, sidebar, navigation, and footer across all post-login pages
- **Responsive Design**: Built-in PC/SP view mode toggle with localStorage persistence
- **Notification System**: Header-based notification dropdown with badge indicators
- **Dynamic Navigation**: Context-aware navigation with automatic route highlighting
- **Flash Messages**: Success/error message display with auto-dismiss
- **View Mode Persistence**: Automatic saving and restoration of PC/SP preferences

---

## Architecture

### Component Hierarchy

```
Templates
├── InfoPageWrapper (Layout Container)
│   ├── Header (with notifications, user menu)
│   ├── Sidebar (PC mode only)
│   ├── Content Area (children)
│   └── Footer
├── TemplateNavigation (Route Selector)
└── Template Pages
    ├── DashboardPage
    ├── SettingsPage
    ├── NotificationsPage
    ├── ListPage
    ├── DetailPage
    └── FormPage
```

### State Management

Each template page manages its own state for:
- View mode (PC/SP)
- Notification dropdown visibility
- User menu visibility
- Hamburger menu state (SP mode)
- Sidebar collapse state (PC mode)
- Page-specific data

### Hook Integration

- **useViewMode**: Manages PC/SP view mode with localStorage persistence
- **useDynamicForm**: Form state management with validation
- **useDynamicTable**: Table state with sorting, selection, and pagination
- **useTableSearch**: Search/filter state management

---

## InfoPageWrapper Integration

### Purpose

`InfoPageWrapper` provides a unified layout wrapper for all post-login pages, including:
- Application header with logo, notifications, and user menu
- Responsive sidebar navigation (PC mode)
- Hamburger menu (SP mode)
- Footer with legal links

### Props Interface

```typescript
interface InfoPageWrapperProps {
  children: React.ReactNode;
  viewMode: 'pc' | 'sp';
  currentPage: string;
  onNavigate: (page: string) => void;

  // Notification System
  unreadCount?: number;
  notifications?: Array<{
    id: string | number;
    title: string;
    message: string;
    time: string;
    read: boolean;
    type?: 'info' | 'warning' | 'success' | 'danger';
  }>;
  onMarkNotificationAsRead?: (notificationId: string | number) => void;
  onMarkAllNotificationsAsRead?: () => void;
  onDismissNotification?: (notificationId: string | number) => void;

  // UI State Management
  showNotificationDropdown?: boolean;
  setShowNotificationDropdown?: (show: boolean) => void;
  showUserMenu?: boolean;
  setShowUserMenu?: (show: boolean) => void;
  isHamburgerOpen?: boolean;
  setIsHamburgerOpen?: (open: boolean) => void;
  sidebarCollapsed?: boolean;
  setSidebarCollapsed?: (collapsed: boolean) => void;

  // Refs
  notificationRef?: React.RefObject<HTMLDivElement | null>;
}
```

### Basic Usage

```tsx
import React, { useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import InfoPageWrapper from '../components/layout/InfoPageWrapper';
import { useViewMode } from '../hooks/useViewMode';

const MyPage: React.FC = () => {
  const navigate = useNavigate();
  const notificationRef = useRef<HTMLDivElement>(null);

  // View mode with persistence
  const [viewMode, setViewMode] = useViewMode();

  // UI state
  const [showNotificationDropdown, setShowNotificationDropdown] = useState(false);
  const [showUserMenu, setShowUserMenu] = useState(false);
  const [isHamburgerOpen, setIsHamburgerOpen] = useState(false);
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);

  // Notification state
  const [notifications, setNotifications] = useState([
    {
      id: 1,
      title: 'New Message',
      message: 'You have a new message',
      time: '5 minutes ago',
      read: false
    }
  ]);

  // Navigation handler
  const handleNavigate = (page: string) => {
    const routeMap: Record<string, string> = {
      'dashboard': '/pages/dashboard',
      'data-list': '/pages/data/list',
      'settings': '/pages/settings',
      'notifications': '/pages/notifications',
      'login': '/pages/login',
      'qna': '/pages/qna',
      'privacy': '/pages/privacy',
      'terms': '/pages/terms',
      'commercial': '/pages/commercial',
    };

    navigate(routeMap[page] || `/pages/${page}`);
  };

  // Notification handlers
  const handleMarkNotificationAsRead = (notificationId: string | number) => {
    setNotifications(prev =>
      prev.map(n => n.id === notificationId ? { ...n, read: true } : n)
    );
  };

  const handleMarkAllNotificationsAsRead = () => {
    setNotifications(prev => prev.map(n => ({ ...n, read: true })));
  };

  return (
    <div className={viewMode === 'sp' ? 'force-mobile' : ''}>
      <InfoPageWrapper
        viewMode={viewMode}
        currentPage="my-page"
        onNavigate={handleNavigate}
        unreadCount={notifications.filter(n => !n.read).length}
        showNotificationDropdown={showNotificationDropdown}
        setShowNotificationDropdown={setShowNotificationDropdown}
        showUserMenu={showUserMenu}
        setShowUserMenu={setShowUserMenu}
        isHamburgerOpen={isHamburgerOpen}
        setIsHamburgerOpen={setIsHamburgerOpen}
        sidebarCollapsed={sidebarCollapsed}
        setSidebarCollapsed={setSidebarCollapsed}
        notificationRef={notificationRef}
        notifications={notifications}
        onMarkNotificationAsRead={handleMarkNotificationAsRead}
        onMarkAllNotificationsAsRead={handleMarkAllNotificationsAsRead}
      >
        {/* Your page content here */}
        <div>
          <h1>My Page Content</h1>
        </div>
      </InfoPageWrapper>
    </div>
  );
};

export default MyPage;
```

### Key Points

1. **Force Mobile Class**: Wrap the entire page in a div with `force-mobile` class when `viewMode === 'sp'` to enable responsive styles
2. **Route Mapping**: Use a `routeMap` object to translate page identifiers to actual routes
3. **Notification State**: Manage notifications in parent component state
4. **Ref Usage**: Pass `notificationRef` for proper dropdown positioning and click-outside detection
5. **Current Page**: Set `currentPage` prop to highlight the active sidebar item

---

## TemplateNavigation Usage

### Purpose

`TemplateNavigation` provides a dropdown-based navigation system for switching between template pages during development and demonstration. It groups pages into three categories:
- Pre-login pages (auth flows)
- Post-login pages (dashboard, data management)
- Other pages (info pages, error pages)

### Props Interface

```typescript
interface TemplateNavigationProps {
  viewMode?: 'pc' | 'sp';
  onViewModeChange?: (mode: 'pc' | 'sp') => void;
  className?: string;
  hide?: boolean;
}
```

### Basic Usage

```tsx
import TemplateNavigation from '../components/navigation/TemplateNavigation';
import { useViewMode } from '../hooks/useViewMode';

const MyPage: React.FC = () => {
  const [viewMode, setViewMode] = useViewMode();

  return (
    <div className={viewMode === 'sp' ? 'force-mobile' : ''}>
      {/* Navigation with view mode toggle */}
      <TemplateNavigation
        viewMode={viewMode}
        onViewModeChange={setViewMode}
      />

      {/* Rest of your page */}
    </div>
  );
};
```

### Hiding Navigation

For production or when nesting within another navigation system:

```tsx
<TemplateNavigation hide={true} />
```

Or omit the component entirely:

```tsx
// InfoPageWrapper can be used without TemplateNavigation
<InfoPageWrapper {...props}>
  {/* content */}
</InfoPageWrapper>
```

### Navigation Without View Mode Toggle

```tsx
// Navigation only, no view mode buttons
<TemplateNavigation />
```

### Route Detection

`TemplateNavigation` automatically detects the current route and highlights the active page category. It uses React Router's `useLocation()` hook to determine which dropdown should be marked as active.

---

## useViewMode Hook

### Purpose

The `useViewMode` hook manages PC/SP view mode with automatic localStorage persistence. View mode is preserved across page navigation and browser sessions.

### API

```typescript
type ViewMode = 'pc' | 'sp';

const useViewMode = (): [ViewMode, (mode: ViewMode) => void] => {
  // Returns [currentMode, setMode]
};
```

### Usage

```tsx
import { useViewMode } from '../hooks/useViewMode';

const MyComponent: React.FC = () => {
  const [viewMode, setViewMode] = useViewMode();

  return (
    <div>
      <p>Current mode: {viewMode}</p>
      <button onClick={() => setViewMode('pc')}>PC Mode</button>
      <button onClick={() => setViewMode('sp')}>SP Mode</button>
    </div>
  );
};
```

### Implementation Details

- **Storage Key**: `app-view-mode`
- **Default Value**: `'pc'`
- **SSR Safe**: Checks for `window` availability
- **Type Safe**: Only accepts `'pc'` or `'sp'`

### localStorage Format

```javascript
// Stored as string
localStorage.getItem('app-view-mode') // => "pc" or "sp"
```

### Integration with CSS

Apply the `force-mobile` class to the root container when in SP mode:

```tsx
const [viewMode, setViewMode] = useViewMode();

return (
  <div className={viewMode === 'sp' ? 'force-mobile' : ''}>
    {/* Your content */}
  </div>
);
```

---

## Flash Message Pattern

### Purpose

Flash messages provide temporary success or error feedback to users after form submissions or actions.

### Implementation Pattern

```tsx
const MyPage: React.FC = () => {
  const [flashMessage, setFlashMessage] = useState<string | null>(null);

  const handleSave = () => {
    // Perform save operation
    setFlashMessage('Successfully saved!');

    // Auto-dismiss after 3 seconds
    setTimeout(() => setFlashMessage(null), 3000);
  };

  return (
    <div>
      {/* Flash Message Display */}
      {flashMessage && (
        <div style={{
          padding: 'var(--spacing-4)',
          marginBottom: 'var(--spacing-4)',
          backgroundColor: 'var(--color-success-50)',
          border: '1px solid var(--color-success-200)',
          borderRadius: 'var(--radius-md)',
          color: 'var(--color-success-700)',
          display: 'flex',
          alignItems: 'center',
          gap: 'var(--spacing-2)'
        }}>
          <Icon name="check-circle" style={{ width: '20px', height: '20px' }} />
          {flashMessage}
        </div>
      )}

      {/* Rest of content */}
    </div>
  );
};
```

### Variant Styles

#### Success Message

```tsx
<div style={{
  backgroundColor: 'var(--color-success-50)',
  border: '1px solid var(--color-success-200)',
  color: 'var(--color-success-700)'
}}>
  <Icon name="check-circle" />
  Success message
</div>
```

#### Error Message

```tsx
<div style={{
  backgroundColor: 'var(--color-error-50)',
  border: '1px solid var(--color-error-200)',
  color: 'var(--color-error-700)'
}}>
  <Icon name="error" />
  Error message
</div>
```

#### Warning Message

```tsx
<div style={{
  backgroundColor: 'var(--color-warning-50)',
  border: '1px solid var(--color-warning-200)',
  color: 'var(--color-warning-700)'
}}>
  <Icon name="warning" />
  Warning message
</div>
```

#### Info Message

```tsx
<div style={{
  backgroundColor: 'var(--color-info-50)',
  border: '1px solid var(--color-info-200)',
  color: 'var(--color-info-700)'
}}>
  <Icon name="info" />
  Info message
</div>
```

### Advanced Flash Message Component

```tsx
interface FlashMessageProps {
  message: string;
  type: 'success' | 'error' | 'warning' | 'info';
  onDismiss?: () => void;
  autoDismiss?: boolean;
  duration?: number;
}

const FlashMessage: React.FC<FlashMessageProps> = ({
  message,
  type = 'info',
  onDismiss,
  autoDismiss = true,
  duration = 3000
}) => {
  useEffect(() => {
    if (autoDismiss && onDismiss) {
      const timer = setTimeout(onDismiss, duration);
      return () => clearTimeout(timer);
    }
  }, [autoDismiss, onDismiss, duration]);

  const config = {
    success: {
      bg: 'var(--color-success-50)',
      border: 'var(--color-success-200)',
      color: 'var(--color-success-700)',
      icon: 'check-circle'
    },
    error: {
      bg: 'var(--color-error-50)',
      border: 'var(--color-error-200)',
      color: 'var(--color-error-700)',
      icon: 'error'
    },
    warning: {
      bg: 'var(--color-warning-50)',
      border: 'var(--color-warning-200)',
      color: 'var(--color-warning-700)',
      icon: 'warning'
    },
    info: {
      bg: 'var(--color-info-50)',
      border: 'var(--color-info-200)',
      color: 'var(--color-info-700)',
      icon: 'info'
    }
  };

  const style = config[type];

  return (
    <div style={{
      padding: 'var(--spacing-4)',
      marginBottom: 'var(--spacing-4)',
      backgroundColor: style.bg,
      border: `1px solid ${style.border}`,
      borderRadius: 'var(--radius-md)',
      color: style.color,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      gap: 'var(--spacing-2)'
    }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--spacing-2)' }}>
        <Icon name={style.icon as any} style={{ width: '20px', height: '20px' }} />
        <span>{message}</span>
      </div>
      {onDismiss && (
        <button
          onClick={onDismiss}
          style={{
            background: 'none',
            border: 'none',
            cursor: 'pointer',
            padding: 'var(--spacing-1)',
            color: style.color
          }}
        >
          <Icon name="close" style={{ width: '16px', height: '16px' }} />
        </button>
      )}
    </div>
  );
};
```

---

## Notification System Integration

### Architecture

The notification system consists of:
1. **Header Badge**: Unread count display
2. **Dropdown Panel**: Notification list with actions
3. **Notification Page**: Full notification history
4. **State Management**: Notification data and read status

### Notification Data Structure

```typescript
interface Notification {
  id: string | number;
  title: string;
  message: string;
  time: string;
  read: boolean;
  type?: 'info' | 'warning' | 'success' | 'danger';
}
```

### Complete Implementation

```tsx
const MyApp: React.FC = () => {
  const [notifications, setNotifications] = useState<Notification[]>([
    {
      id: 1,
      title: 'New Message',
      message: 'System notification message',
      time: '5 minutes ago',
      read: false,
      type: 'info'
    },
    {
      id: 2,
      title: 'Update Complete',
      message: 'Data sync completed',
      time: '1 hour ago',
      read: false,
      type: 'success'
    }
  ]);

  // Mark single notification as read
  const handleMarkAsRead = (notificationId: string | number) => {
    setNotifications(prev =>
      prev.map(n =>
        n.id === notificationId ? { ...n, read: true } : n
      )
    );
  };

  // Mark all notifications as read
  const handleMarkAllAsRead = () => {
    setNotifications(prev =>
      prev.map(n => ({ ...n, read: true }))
    );
  };

  // Dismiss/remove notification
  const handleDismissNotification = (notificationId: string | number) => {
    setNotifications(prev =>
      prev.filter(n => n.id !== notificationId)
    );
  };

  // Calculate unread count
  const unreadCount = notifications.filter(n => !n.read).length;

  return (
    <InfoPageWrapper
      unreadCount={unreadCount}
      notifications={notifications}
      onMarkNotificationAsRead={handleMarkAsRead}
      onMarkAllNotificationsAsRead={handleMarkAllAsRead}
      onDismissNotification={handleDismissNotification}
      // ... other props
    >
      {/* content */}
    </InfoPageWrapper>
  );
};
```

### Notification Icon Mapping

The system automatically maps notification types to icons:

```typescript
const getNotificationIcon = (type?: string) => {
  switch (type) {
    case 'warning':
      return 'warning';
    case 'success':
      return 'check';
    case 'danger':
      return 'close';
    case 'info':
    default:
      return 'info';
  }
};
```

### Custom Notification Rendering

Override the default notification display:

```tsx
// Custom notification with link
{
  id: 3,
  title: 'New Comment',
  message: 'Someone commented on your post',
  time: '10 minutes ago',
  read: false,
  type: 'info',
  link: '/posts/123',
  onClick: () => navigate('/posts/123')
}
```

---

## Route Mapping Pattern

### Purpose

Consistent route mapping ensures navigation works correctly across the application, whether using React Router directly or through the `onNavigate` callback pattern.

### Standard Route Map

```typescript
const routeMap: Record<string, string> = {
  // Dashboard
  'dashboard': '/pages/dashboard',

  // Data Management
  'data-list': '/pages/data/list',
  'data-add': '/pages/data/add',
  'data-edit': '/pages/data/edit',
  'data-detail': '/pages/data/detail',

  // Application Pages
  'statistics': '/pages/statistics',
  'notifications': '/pages/notifications',
  'settings': '/pages/settings',

  // Auth Pages
  'login': '/pages/login',
  'signup': '/pages/signup',
  'forgot-password': '/pages/forgot-password',

  // Info Pages
  'qna': '/pages/qna',
  'privacy': '/pages/privacy',
  'terms': '/pages/terms',
  'commercial': '/pages/commercial',

  // Error Pages
  'error-404': '/pages/error-404',
  'error-505': '/pages/error-505',
  'maintenance': '/pages/maintenance'
};
```

### Navigation Handler Pattern

```tsx
const handleNavigate = (page: string) => {
  const route = routeMap[page] || `/pages/${page}`;
  navigate(route);
};
```

### Dynamic Routes

For routes with parameters:

```tsx
const handleNavigate = (page: string, params?: Record<string, any>) => {
  let route = routeMap[page] || `/pages/${page}`;

  // Replace route parameters
  if (params) {
    Object.entries(params).forEach(([key, value]) => {
      route = route.replace(`:${key}`, String(value));
    });
  }

  navigate(route);
};

// Usage
handleNavigate('data-detail', { id: 123 });
// Navigates to: /pages/data/detail/123
```

### External Navigation

For external links or special navigation:

```tsx
const handleNavigate = (page: string) => {
  // Check for external URLs
  if (page.startsWith('http://') || page.startsWith('https://')) {
    window.location.href = page;
    return;
  }

  // Check for special actions
  if (page === 'logout') {
    // Perform logout
    handleLogout();
    return;
  }

  // Normal navigation
  const route = routeMap[page] || `/pages/${page}`;
  navigate(route);
};
```

---

## Laravel + Inertia.js Integration

### Overview

These templates are designed for seamless integration with Laravel + Inertia.js. Inertia acts as the bridge between Laravel backend and React frontend, eliminating the need for a separate API.

### Server-Side Setup

#### 1. Install Inertia.js

```bash
composer require inertiajs/inertia-laravel
npm install @inertiajs/react
```

#### 2. Laravel Controller Pattern

```php
<?php

namespace App\Http\Controllers;

use App\Models\Project;
use Illuminate\Http\Request;
use Inertia\Inertia;

class ProjectController extends Controller
{
    /**
     * Display list of projects
     */
    public function index(Request $request)
    {
        $projects = Project::query()
            ->when($request->search, function ($query, $search) {
                $query->where('name', 'like', "%{$search}%");
            })
            ->when($request->sort, function ($query, $sort) {
                $direction = $request->direction ?? 'asc';
                $query->orderBy($sort, $direction);
            })
            ->paginate($request->per_page ?? 20)
            ->withQueryString();

        return Inertia::render('Projects/List', [
            'projects' => $projects,
            'filters' => $request->only(['search', 'sort', 'direction']),
            'flash' => session('flash')
        ]);
    }

    /**
     * Display project details
     */
    public function show(Project $project)
    {
        $project->load(['owner', 'members', 'tasks']);

        return Inertia::render('Projects/Detail', [
            'project' => $project,
            'flash' => session('flash')
        ]);
    }

    /**
     * Show create form
     */
    public function create()
    {
        return Inertia::render('Projects/Form', [
            'mode' => 'create',
            'project' => null,
            'categories' => Category::all(),
            'users' => User::all()
        ]);
    }

    /**
     * Store new project
     */
    public function store(Request $request)
    {
        $validated = $request->validate([
            'name' => 'required|string|max:255',
            'description' => 'nullable|string',
            'status' => 'required|in:planning,active,completed',
            'owner_id' => 'required|exists:users,id'
        ]);

        $project = Project::create($validated);

        return redirect()
            ->route('projects.show', $project)
            ->with('flash', [
                'type' => 'success',
                'message' => 'Project created successfully!'
            ]);
    }

    /**
     * Show edit form
     */
    public function edit(Project $project)
    {
        return Inertia::render('Projects/Form', [
            'mode' => 'edit',
            'project' => $project,
            'categories' => Category::all(),
            'users' => User::all()
        ]);
    }

    /**
     * Update project
     */
    public function update(Request $request, Project $project)
    {
        $validated = $request->validate([
            'name' => 'required|string|max:255',
            'description' => 'nullable|string',
            'status' => 'required|in:planning,active,completed'
        ]);

        $project->update($validated);

        return redirect()
            ->route('projects.show', $project)
            ->with('flash', [
                'type' => 'success',
                'message' => 'Project updated successfully!'
            ]);
    }

    /**
     * Delete project
     */
    public function destroy(Project $project)
    {
        $project->delete();

        return redirect()
            ->route('projects.index')
            ->with('flash', [
                'type' => 'success',
                'message' => 'Project deleted successfully!'
            ]);
    }
}
```

### Client-Side Integration

#### 1. Page Component Structure

```tsx
// resources/js/Pages/Projects/List.tsx
import React from 'react';
import { router } from '@inertiajs/react';
import ListPage from '@/components/templates/data/ListPage';
import Layout from '@/Layouts/AppLayout';

interface Props {
  projects: {
    data: Project[];
    current_page: number;
    last_page: number;
    per_page: number;
    total: number;
    from: number;
    to: number;
  };
  filters: {
    search?: string;
    sort?: string;
    direction?: 'asc' | 'desc';
  };
  flash?: {
    type: 'success' | 'error' | 'warning' | 'info';
    message: string;
  };
}

const ProjectList: React.FC<Props> = ({ projects, filters, flash }) => {
  // Handle navigation to create page
  const handleCreate = () => {
    router.visit('/projects/create');
  };

  // Handle row click to detail page
  const handleRowClick = (project: Project) => {
    router.visit(`/projects/${project.id}`);
  };

  // Handle edit
  const handleEdit = (project: Project) => {
    router.visit(`/projects/${project.id}/edit`);
  };

  // Handle delete with confirmation
  const handleDelete = (project: Project) => {
    if (confirm('Are you sure you want to delete this project?')) {
      router.delete(`/projects/${project.id}`);
    }
  };

  // Handle sort change
  const handleSortChange = (column: string, direction: 'asc' | 'desc') => {
    router.get('/projects', {
      ...filters,
      sort: column,
      direction
    }, {
      preserveState: true,
      preserveScroll: true
    });
  };

  // Handle page change
  const handlePageChange = (page: number) => {
    router.get('/projects', {
      ...filters,
      page
    }, {
      preserveState: true,
      preserveScroll: true
    });
  };

  // Handle search
  const handleSearch = (searchValues: Record<string, any>) => {
    router.get('/projects', {
      ...filters,
      ...searchValues
    }, {
      preserveState: true,
      preserveScroll: true
    });
  };

  return (
    <ListPage
      title="Projects"
      subtitle="Manage all your projects"
      columns={[
        {
          key: 'id',
          label: 'ID',
          dataType: 'number',
          sortable: true,
          width: '80px'
        },
        {
          key: 'name',
          label: 'Project Name',
          dataType: 'text',
          sortable: true
        },
        {
          key: 'status',
          label: 'Status',
          dataType: 'badge',
          sortable: true,
          badgeConfig: {
            planning: { label: 'Planning', variant: 'warning' },
            active: { label: 'Active', variant: 'success' },
            completed: { label: 'Completed', variant: 'info' }
          }
        },
        {
          key: 'created_at',
          label: 'Created',
          dataType: 'date',
          sortable: true
        }
      ]}
      data={projects.data}
      pagination={{
        currentPage: projects.current_page,
        lastPage: projects.last_page,
        perPage: projects.per_page,
        total: projects.total,
        from: projects.from,
        to: projects.to
      }}
      sort={{
        column: filters.sort || 'id',
        direction: filters.direction || 'asc'
      }}
      searchConfig={{
        fields: [
          {
            name: 'search',
            label: 'Search',
            type: 'text',
            placeholder: 'Search projects...',
            width: 'full'
          }
        ]
      }}
      searchValues={filters}
      onSortChange={handleSortChange}
      onPageChange={handlePageChange}
      onSearchChange={handleSearch}
      createButton={{
        label: 'New Project',
        icon: 'plus-circle',
        onClick: handleCreate
      }}
      rowConfig={{
        clickable: true,
        onClick: handleRowClick
      }}
      rowActions={[
        {
          id: 'edit',
          label: 'Edit',
          icon: 'edit',
          variant: 'secondary',
          onClick: (project) => handleEdit(project)
        },
        {
          id: 'delete',
          label: 'Delete',
          icon: 'trash',
          variant: 'danger',
          onClick: (project) => handleDelete(project),
          confirm: {
            title: 'Delete Project',
            message: 'Are you sure you want to delete this project?'
          }
        }
      ]}
      flashMessage={flash && (
        <div className={`alert alert--${flash.type}`}>
          {flash.message}
        </div>
      )}
    />
  );
};

ProjectList.layout = (page: React.ReactNode) => (
  <Layout title="Projects">{page}</Layout>
);

export default ProjectList;
```

#### 2. Detail Page Integration

```tsx
// resources/js/Pages/Projects/Detail.tsx
import React from 'react';
import { router } from '@inertiajs/react';
import DetailPage from '@/components/templates/data/DetailPage';
import Layout from '@/Layouts/AppLayout';

interface Props {
  project: Project & {
    owner: User;
    members: User[];
    tasks: Task[];
  };
  flash?: {
    type: string;
    message: string;
  };
}

const ProjectDetail: React.FC<Props> = ({ project, flash }) => {
  const handleEdit = () => {
    router.visit(`/projects/${project.id}/edit`);
  };

  const handleDelete = () => {
    if (confirm('Are you sure?')) {
      router.delete(`/projects/${project.id}`);
    }
  };

  const handleBack = () => {
    router.visit('/projects');
  };

  return (
    <DetailPage
      title={project.name}
      subtitle={`Project ID: ${project.id}`}
      data={project}
      sections={[
        {
          id: 'basic',
          title: 'Basic Information',
          icon: 'info',
          fields: [
            { key: 'name', label: 'Project Name', type: 'text' },
            { key: 'description', label: 'Description', type: 'text' },
            {
              key: 'status',
              label: 'Status',
              type: 'badge',
              badgeConfig: {
                planning: { label: 'Planning', variant: 'warning' },
                active: { label: 'Active', variant: 'success' },
                completed: { label: 'Completed', variant: 'info' }
              }
            },
            { key: 'created_at', label: 'Created', type: 'date' }
          ]
        },
        {
          id: 'owner',
          title: 'Project Owner',
          icon: 'user',
          fields: [
            {
              key: 'owner.name',
              label: 'Name',
              type: 'text',
              render: (value, data) => data.owner?.name || '-'
            },
            {
              key: 'owner.email',
              label: 'Email',
              type: 'email',
              render: (value, data) => data.owner?.email || '-'
            }
          ]
        },
        {
          id: 'members',
          title: 'Team Members',
          icon: 'users',
          fields: [
            {
              key: 'members',
              label: 'Members',
              type: 'list',
              listConfig: {
                renderItem: (member: User) => (
                  <span className="status-badge status-badge--default">
                    {member.name}
                  </span>
                )
              }
            }
          ]
        }
      ]}
      actions={[
        {
          id: 'edit',
          label: 'Edit',
          icon: 'edit',
          variant: 'primary',
          onClick: handleEdit
        }
      ]}
      secondaryActions={[
        {
          id: 'delete',
          label: 'Delete',
          icon: 'trash',
          variant: 'danger',
          onClick: handleDelete,
          confirm: {
            title: 'Delete Project',
            message: 'Are you sure you want to delete this project? This action cannot be undone.',
            variant: 'danger'
          }
        }
      ]}
      backButton={{
        label: 'Back to List',
        onClick: handleBack
      }}
      breadcrumbs={[
        { label: 'Projects', path: '/projects' },
        { label: project.name }
      ]}
    />
  );
};

ProjectDetail.layout = (page: React.ReactNode) => (
  <Layout title="Project Details">{page}</Layout>
);

export default ProjectDetail;
```

#### 3. Form Page Integration

```tsx
// resources/js/Pages/Projects/Form.tsx
import React from 'react';
import { router, useForm } from '@inertiajs/react';
import FormPage from '@/components/templates/data/FormPage';
import Layout from '@/Layouts/AppLayout';

interface Props {
  mode: 'create' | 'edit';
  project?: Project;
  categories: Category[];
  users: User[];
}

const ProjectForm: React.FC<Props> = ({ mode, project, categories, users }) => {
  const { data, setData, post, put, processing, errors } = useForm({
    name: project?.name || '',
    description: project?.description || '',
    status: project?.status || 'planning',
    category_id: project?.category_id || '',
    owner_id: project?.owner_id || ''
  });

  const handleSubmit = (formData: any) => {
    if (mode === 'create') {
      post('/projects', {
        onSuccess: () => {
          router.visit('/projects');
        }
      });
    } else if (project) {
      put(`/projects/${project.id}`, {
        onSuccess: () => {
          router.visit(`/projects/${project.id}`);
        }
      });
    }
  };

  const handleCancel = () => {
    if (mode === 'edit' && project) {
      router.visit(`/projects/${project.id}`);
    } else {
      router.visit('/projects');
    }
  };

  return (
    <FormPage
      title={mode === 'create' ? 'Create New Project' : 'Edit Project'}
      subtitle={mode === 'edit' ? `Editing: ${project?.name}` : 'Fill in the details below'}
      sections={[
        {
          id: 'basic',
          title: 'Basic Information',
          icon: 'info',
          fields: [
            {
              name: 'name',
              label: 'Project Name',
              type: 'text',
              placeholder: 'Enter project name',
              required: true,
              width: 'full'
            },
            {
              name: 'description',
              label: 'Description',
              type: 'textarea',
              placeholder: 'Enter project description',
              rows: 4,
              width: 'full'
            },
            {
              name: 'status',
              label: 'Status',
              type: 'select',
              required: true,
              options: [
                { value: 'planning', label: 'Planning' },
                { value: 'active', label: 'Active' },
                { value: 'completed', label: 'Completed' }
              ],
              width: 'half'
            },
            {
              name: 'category_id',
              label: 'Category',
              type: 'select',
              required: true,
              options: categories.map(cat => ({
                value: cat.id,
                label: cat.name
              })),
              width: 'half'
            }
          ]
        },
        {
          id: 'ownership',
          title: 'Project Owner',
          icon: 'user',
          fields: [
            {
              name: 'owner_id',
              label: 'Owner',
              type: 'select',
              required: true,
              options: users.map(user => ({
                value: user.id,
                label: user.name
              })),
              width: 'full'
            }
          ]
        }
      ]}
      initialData={data}
      errors={errors}
      isSubmitting={processing}
      onSubmit={handleSubmit}
      onCancel={handleCancel}
      submitButtonText={mode === 'create' ? 'Create Project' : 'Save Changes'}
      breadcrumbs={[
        { label: 'Projects', path: '/projects' },
        { label: mode === 'create' ? 'New Project' : 'Edit' }
      ]}
      validateOnBlur={true}
      showErrorSummary={true}
    />
  );
};

ProjectForm.layout = (page: React.ReactNode) => (
  <Layout title="Project Form">{page}</Layout>
);

export default ProjectForm;
```

---

## Template-Specific Guides

### DashboardPage Template

#### Purpose
Dashboard template for displaying overview statistics, recent activities, and quick actions.

#### Key Features
- Stat cards with icons
- Recent activity feed
- Quick action buttons
- Responsive grid layout

#### Example Usage

```tsx
import React, { useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import InfoPageWrapper from '../components/layout/InfoPageWrapper';
import TemplateNavigation from '../components/navigation/TemplateNavigation';
import Icon from '../components/icons/Icon';
import { useViewMode } from '../hooks/useViewMode';

const DashboardPage: React.FC = () => {
  const navigate = useNavigate();
  const notificationRef = useRef<HTMLDivElement>(null);
  const [viewMode, setViewMode] = useViewMode();

  // UI State
  const [showNotificationDropdown, setShowNotificationDropdown] = useState(false);
  const [showUserMenu, setShowUserMenu] = useState(false);
  const [isHamburgerOpen, setIsHamburgerOpen] = useState(false);
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);

  // Notifications
  const [notifications, setNotifications] = useState([...]);

  // Stats data
  const stats = [
    { label: 'Total Users', value: '1,234', icon: 'user', color: 'var(--color-primary-500)' },
    { label: 'Total Data', value: '5,678', icon: 'document', color: 'var(--color-success-500)' },
    { label: 'This Month', value: '234', icon: 'chart-bar', color: 'var(--color-warning-500)' },
    { label: 'Active Rate', value: '87%', icon: 'chart-pie', color: 'var(--color-info-500)' }
  ];

  return (
    <div className={viewMode === 'sp' ? 'force-mobile' : ''}>
      <TemplateNavigation viewMode={viewMode} onViewModeChange={setViewMode} />
      <InfoPageWrapper
        viewMode={viewMode}
        currentPage="dashboard"
        onNavigate={handleNavigate}
        {...notificationProps}
      >
        <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--spacing-6)' }}>
          {/* Stats Grid */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
            gap: 'var(--spacing-4)'
          }}>
            {stats.map((stat, index) => (
              <div key={index} className="dashboard-card">
                <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--spacing-3)' }}>
                  <div style={{
                    width: '48px',
                    height: '48px',
                    borderRadius: 'var(--radius-md)',
                    background: `${stat.color}20`,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                  }}>
                    <Icon name={stat.icon as any} size="md" style={{ color: stat.color }} />
                  </div>
                  <div>
                    <div style={{ fontSize: 'var(--font-size-sm)', color: 'var(--color-neutral-600)' }}>
                      {stat.label}
                    </div>
                    <div style={{ fontSize: 'var(--font-size-2xl)', fontWeight: 'var(--font-weight-bold)' }}>
                      {stat.value}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Add more sections as needed */}
        </div>
      </InfoPageWrapper>
    </div>
  );
};

export default DashboardPage;
```

### SettingsPage Template

#### Purpose
Settings template for user profile management with edit/save functionality.

#### Key Features
- Profile view/edit mode toggle
- Flash message on save
- Form validation
- Responsive layout

#### Example Usage

```tsx
const SettingsPage: React.FC = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [flashMessage, setFlashMessage] = useState<string | null>(null);
  const [profileData, setProfileData] = useState({
    username: 'admin',
    email: 'admin@example.com',
    displayName: 'Admin User',
    phone: '090-1234-5678',
    department: 'Development'
  });

  const [editedData, setEditedData] = useState({ ...profileData });

  const handleSave = () => {
    setProfileData({ ...editedData });
    setIsEditing(false);
    setFlashMessage('Profile saved successfully!');
    setTimeout(() => setFlashMessage(null), 3000);
  };

  return (
    <InfoPageWrapper {...props}>
      <div style={{ padding: 'var(--spacing-6)', maxWidth: '1000px', margin: '0 auto' }}>
        {/* Flash Message */}
        {flashMessage && (
          <div className="flash-message flash-message--success">
            <Icon name="check-circle" />
            {flashMessage}
          </div>
        )}

        {/* Profile Card */}
        <div className="dashboard-card">
          <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 'var(--spacing-4)' }}>
            <h2>Profile Settings</h2>
            {!isEditing && (
              <button className="btn btn--primary" onClick={() => setIsEditing(true)}>
                <Icon name="edit" />
                Edit
              </button>
            )}
          </div>

          {isEditing ? (
            <div>
              <InputField
                label="Display Name"
                value={editedData.displayName}
                onChange={(e) => setEditedData({ ...editedData, displayName: e.target.value })}
              />
              {/* More fields */}
              <div style={{ display: 'flex', gap: 'var(--spacing-2)', marginTop: 'var(--spacing-4)' }}>
                <Button variant="text" onClick={() => setIsEditing(false)}>Cancel</Button>
                <Button variant="primary" onClick={handleSave}>Save</Button>
              </div>
            </div>
          ) : (
            <div>
              <p><strong>Display Name:</strong> {profileData.displayName}</p>
              <p><strong>Email:</strong> {profileData.email}</p>
              {/* More fields */}
            </div>
          )}
        </div>
      </div>
    </InfoPageWrapper>
  );
};
```

### NotificationsPage Template

#### Purpose
Full-page notification list with mark as read and filtering capabilities.

#### Key Features
- Notification list with type indicators
- Mark as read (individual/all)
- Empty state handling
- Icon-based type display

### ListPage Template

See [Laravel + Inertia.js Integration](#laravel--inertiajs-integration) section for complete example.

### DetailPage Template

See [Laravel + Inertia.js Integration](#laravel--inertiajs-integration) section for complete example.

### FormPage Template

See [Laravel + Inertia.js Integration](#laravel--inertiajs-integration) section for complete example.

---

## Best Practices

### 1. State Management

**DO:**
```tsx
// Centralize UI state at the page level
const MyPage: React.FC = () => {
  const [viewMode, setViewMode] = useViewMode();
  const [showNotificationDropdown, setShowNotificationDropdown] = useState(false);
  const [showUserMenu, setShowUserMenu] = useState(false);
  // ...
};
```

**DON'T:**
```tsx
// Avoid prop drilling through multiple levels
<Parent>
  <Child1 viewMode={viewMode}>
    <Child2 viewMode={viewMode}>
      <Child3 viewMode={viewMode} />
    </Child2>
  </Child1>
</Parent>
```

### 2. Navigation Consistency

**DO:**
```tsx
// Use consistent route mapping
const routeMap: Record<string, string> = {
  'dashboard': '/pages/dashboard',
  'settings': '/pages/settings'
};

const handleNavigate = (page: string) => {
  navigate(routeMap[page] || `/pages/${page}`);
};
```

**DON'T:**
```tsx
// Avoid hardcoded routes scattered throughout code
<button onClick={() => navigate('/pages/dashboard')}>Dashboard</button>
<button onClick={() => navigate('/pages/settings')}>Settings</button>
```

### 3. Error Handling

**DO:**
```tsx
// Provide user-friendly error messages with retry
{error && (
  <div className="error-message">
    <Icon name="error" />
    <span>{error.message}</span>
    {error.retry && (
      <button onClick={error.retry}>Retry</button>
    )}
  </div>
)}
```

**DON'T:**
```tsx
// Don't show raw error objects
{error && <div>{JSON.stringify(error)}</div>}
```

### 4. Loading States

**DO:**
```tsx
// Show meaningful loading indicators
if (loading) {
  return (
    <div className="loading-container">
      <Icon name="refresh" style={{ animation: 'spin 1s linear infinite' }} />
      <p>Loading data...</p>
    </div>
  );
}
```

**DON'T:**
```tsx
// Don't block entire UI or show nothing
if (loading) return null;
```

### 5. Responsive Design

**DO:**
```tsx
// Use viewMode to adapt layout
<div className={viewMode === 'sp' ? 'force-mobile' : ''}>
  <InfoPageWrapper viewMode={viewMode}>
    {/* Content automatically adapts */}
  </InfoPageWrapper>
</div>
```

**DON'T:**
```tsx
// Don't use separate components for mobile/desktop
{isMobile ? <MobileVersion /> : <DesktopVersion />}
```

### 6. Flash Messages

**DO:**
```tsx
// Auto-dismiss with clear visual feedback
const [flashMessage, setFlashMessage] = useState<string | null>(null);

const handleSuccess = () => {
  setFlashMessage('Success!');
  setTimeout(() => setFlashMessage(null), 3000);
};
```

**DON'T:**
```tsx
// Don't require manual dismissal for success messages
<div className="flash-message">
  {message}
  <button onClick={() => setMessage(null)}>Close</button>
</div>
```

### 7. Form Validation

**DO:**
```tsx
// Use integrated form hooks with validation
const form = useDynamicForm({
  initialData,
  validation: {
    name: { required: true, minLength: 3 },
    email: { required: true, email: true }
  }
});
```

**DON'T:**
```tsx
// Don't implement validation manually in components
const [errors, setErrors] = useState({});

const validate = () => {
  const newErrors = {};
  if (!name) newErrors.name = 'Required';
  // ...
};
```

### 8. Accessibility

**DO:**
```tsx
// Provide proper ARIA labels and semantic HTML
<button
  aria-label="Mark all notifications as read"
  onClick={handleMarkAllAsRead}
>
  <Icon name="check" />
  Mark All Read
</button>
```

**DON'T:**
```tsx
// Don't use divs for interactive elements
<div onClick={handleClick}>Click me</div>
```

### 9. Performance

**DO:**
```tsx
// Memoize expensive computations
const filteredData = useMemo(() => {
  return data.filter(item => item.status === 'active');
}, [data]);
```

**DON'T:**
```tsx
// Don't recalculate on every render
return data.filter(item => item.status === 'active').map(...);
```

### 10. Type Safety

**DO:**
```tsx
// Use TypeScript interfaces for props
interface MyPageProps {
  data: Project[];
  onUpdate: (project: Project) => void;
}

const MyPage: React.FC<MyPageProps> = ({ data, onUpdate }) => {
  // ...
};
```

**DON'T:**
```tsx
// Don't use any types
const MyPage = (props: any) => {
  // ...
};
```

---

## Additional Resources

### Related Documentation

- [DETAIL_PAGE_QUICK_REFERENCE.md](./DETAIL_PAGE_QUICK_REFERENCE.md) - DetailPage props and configuration
- [DETAIL_PAGE_REFACTORING_GUIDE.md](./DETAIL_PAGE_REFACTORING_GUIDE.md) - Migration guide for DetailPage
- [DETAIL_PAGE_REFACTORING_SUMMARY.md](./DETAIL_PAGE_REFACTORING_SUMMARY.md) - DetailPage refactoring summary

### External Links

- [Inertia.js Documentation](https://inertiajs.com/)
- [Laravel Documentation](https://laravel.com/docs)
- [React Router Documentation](https://reactrouter.com/)
- [TypeScript Documentation](https://www.typescriptlang.org/)

### Component API Reference

#### InfoPageWrapper

- **File**: `/src/components/layout/InfoPageWrapper.tsx`
- **Purpose**: Unified layout wrapper for post-login pages
- **Key Props**: `viewMode`, `currentPage`, `onNavigate`, `notifications`

#### TemplateNavigation

- **File**: `/src/components/navigation/TemplateNavigation.tsx`
- **Purpose**: Dropdown-based page navigation for templates
- **Key Props**: `viewMode`, `onViewModeChange`, `hide`

#### useViewMode Hook

- **File**: `/src/hooks/useViewMode.ts`
- **Purpose**: PC/SP view mode with localStorage persistence
- **Returns**: `[viewMode, setViewMode]`

---

## Troubleshooting

### Common Issues

#### 1. View Mode Not Persisting

**Problem**: View mode resets to PC after page reload.

**Solution**: Ensure `useViewMode` hook is being used correctly:

```tsx
// Correct
const [viewMode, setViewMode] = useViewMode();

// Incorrect
const [viewMode, setViewMode] = useState<'pc' | 'sp'>('pc');
```

#### 2. Notification Dropdown Not Closing

**Problem**: Notification dropdown stays open after clicking outside.

**Solution**: Ensure `notificationRef` is passed to `InfoPageWrapper`:

```tsx
const notificationRef = useRef<HTMLDivElement>(null);

<InfoPageWrapper
  notificationRef={notificationRef}
  // ...
/>
```

#### 3. Flash Message Not Showing

**Problem**: Flash message doesn't appear after form submission.

**Solution**: Check flash message state and rendering:

```tsx
const [flashMessage, setFlashMessage] = useState<string | null>(null);

// After success
setFlashMessage('Success!');

// In render
{flashMessage && <div className="flash-message">{flashMessage}</div>}
```

#### 4. Sidebar Not Showing in PC Mode

**Problem**: Sidebar doesn't appear when switching to PC mode.

**Solution**: Ensure `viewMode` is passed correctly and `force-mobile` class is conditionally applied:

```tsx
<div className={viewMode === 'sp' ? 'force-mobile' : ''}>
  <InfoPageWrapper viewMode={viewMode}>
    {/* ... */}
  </InfoPageWrapper>
</div>
```

---

## Version History

- **1.0.0** (2025-10-18): Initial comprehensive integration guide

---

## Support

For questions, issues, or feature requests, please refer to the project repository or contact the development team.
