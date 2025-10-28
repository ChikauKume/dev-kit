# Custom Hooks Documentation

This directory contains custom React hooks for managing dynamic forms, tables, and other reusable logic.

## Dynamic Form System Hooks

### useDynamicValidation

Validates form fields based on dynamic validation rules passed from Laravel.

**Location:** `src/hooks/forms/useDynamicValidation.ts`

**Features:**
- Support for 15+ validation rule types
- Real-time field validation
- Full form validation
- Cross-field validation support
- Custom validator functions

**Supported Validation Types:**
- `required` - Field must have a value
- `email` - Must be valid email format
- `min`/`minLength` - Minimum length/value
- `max`/`maxLength` - Maximum length/value
- `pattern` - Regular expression match
- `numeric` - Must be a number
- `integer` - Must be an integer
- `url` - Must be valid URL
- `date` - Must be valid date
- `dateAfter` - Date must be after specified date
- `dateBefore` - Date must be before specified date
- `custom` - Custom validator function

**Example:**
```typescript
const { errors, validateField, validateForm, hasErrors } = useDynamicValidation({
  email: [
    { type: 'required', message: 'Email is required' },
    { type: 'email', message: 'Invalid email format' }
  ],
  age: [
    { type: 'required', message: 'Age is required' },
    { type: 'numeric', message: 'Age must be a number' },
    { type: 'min', value: 18, message: 'Must be 18 or older' }
  ],
  password: [
    { type: 'required', message: 'Password is required' },
    { type: 'minLength', value: 8, message: 'Password must be at least 8 characters' },
    {
      type: 'custom',
      message: 'Password must contain uppercase and lowercase',
      validator: (value) => /[a-z]/.test(value) && /[A-Z]/.test(value)
    }
  ]
});

// Validate single field
const isValid = validateField('email', 'user@example.com');

// Validate entire form
const allValid = validateForm({
  email: 'user@example.com',
  age: 25,
  password: 'SecurePass123'
});

// Check errors
if (hasErrors) {
  console.log(errors); // { email: 'Invalid email format', ... }
}
```

### useDynamicForm

Complete form state management with integrated validation.

**Location:** `src/hooks/forms/useDynamicForm.ts`

**Features:**
- Form state management
- Integrated validation (uses useDynamicValidation)
- Dirty state tracking
- Async form submission
- Success/error callbacks
- Form reset capability

**Example:**
```typescript
const form = useDynamicForm({
  initialData: {
    name: '',
    email: '',
    role: 'user'
  },
  validation: {
    name: [{ type: 'required', message: 'Name is required' }],
    email: [
      { type: 'required', message: 'Email is required' },
      { type: 'email', message: 'Invalid email' }
    ]
  },
  onSubmit: async (data) => {
    // Send to server
    await fetch('/api/users', {
      method: 'POST',
      body: JSON.stringify(data)
    });
  },
  onSuccess: () => {
    alert('User created successfully!');
  },
  onError: (error) => {
    alert(`Error: ${error.message}`);
  }
});

// In component
<form onSubmit={form.handleSubmit}>
  <input
    name="name"
    value={form.formData.name}
    onChange={(e) => form.handleChange('name', e.target.value)}
    onBlur={() => form.handleBlur('name')}
  />
  {form.errors.name && <span className="error">{form.errors.name}</span>}

  <input
    name="email"
    value={form.formData.email}
    onChange={(e) => form.handleChange('email', e.target.value)}
    onBlur={() => form.handleBlur('email')}
  />
  {form.errors.email && <span className="error">{form.errors.email}</span>}

  <button type="submit" disabled={form.isSubmitting || form.hasErrors}>
    {form.isSubmitting ? 'Submitting...' : 'Submit'}
  </button>

  {form.isDirty && (
    <button type="button" onClick={form.resetForm}>
      Reset
    </button>
  )}
</form>
```

## Dynamic Table System Hooks

### useDynamicTable

Manages table sorting, selection, and data display.

**Location:** `src/hooks/tables/useDynamicTable.ts`

**Features:**
- Column sorting (click to sort, click again to reverse)
- Row selection (individual and bulk)
- Automatic data sorting by column
- Selection state management
- Type-safe with generics

**Example:**
```typescript
interface User {
  id: number;
  name: string;
  email: string;
  role: string;
  status: 'active' | 'inactive';
}

const users: User[] = [
  { id: 1, name: 'Alice', email: 'alice@example.com', role: 'admin', status: 'active' },
  { id: 2, name: 'Bob', email: 'bob@example.com', role: 'user', status: 'active' }
];

const table = useDynamicTable<User>({
  data: users,
  defaultSortColumn: 'name',
  defaultSortDirection: 'asc',
  selectable: true,
  initialSelectedIds: []
});

// In component
<table>
  <thead>
    <tr>
      <th>
        <input
          type="checkbox"
          checked={table.allSelected}
          indeterminate={table.someSelected}
          onChange={table.handleSelectAll}
        />
      </th>
      <th onClick={() => table.handleSort('name')} style={{ cursor: 'pointer' }}>
        Name {table.sortColumn === 'name' && (table.sortDirection === 'asc' ? '↑' : '↓')}
      </th>
      <th onClick={() => table.handleSort('email')} style={{ cursor: 'pointer' }}>
        Email {table.sortColumn === 'email' && (table.sortDirection === 'asc' ? '↑' : '↓')}
      </th>
      <th onClick={() => table.handleSort('role')} style={{ cursor: 'pointer' }}>
        Role {table.sortColumn === 'role' && (table.sortDirection === 'asc' ? '↑' : '↓')}
      </th>
    </tr>
  </thead>
  <tbody>
    {table.displayData.map(user => (
      <tr key={user.id} className={table.isSelected(user.id) ? 'selected' : ''}>
        <td>
          <input
            type="checkbox"
            checked={table.isSelected(user.id)}
            onChange={() => table.handleSelectRow(user.id)}
          />
        </td>
        <td>{user.name}</td>
        <td>{user.email}</td>
        <td>{user.role}</td>
      </tr>
    ))}
  </tbody>
</table>

{table.selectedIds.length > 0 && (
  <div>
    <p>{table.selectedIds.length} rows selected</p>
    <button onClick={table.clearSelection}>Clear Selection</button>
  </div>
)}
```

### useTableSearch

Manages search and filter state for tables.

**Location:** `src/hooks/tables/useTableSearch.ts`

**Features:**
- Search/filter value management
- Active filter detection
- Support for both client-side and server-side filtering
- Bulk value updates
- Clear all filters

**Example (Client-side):**
```typescript
const search = useTableSearch({
  initialValues: {
    name: '',
    status: '',
    role: ''
  }
});

// Filter data locally
const filteredData = data.filter(row => {
  if (search.searchValues.name && !row.name.toLowerCase().includes(search.searchValues.name.toLowerCase())) {
    return false;
  }
  if (search.searchValues.status && row.status !== search.searchValues.status) {
    return false;
  }
  if (search.searchValues.role && row.role !== search.searchValues.role) {
    return false;
  }
  return true;
});

// In component
<div className="search-panel">
  <input
    placeholder="Search by name"
    value={search.searchValues.name}
    onChange={(e) => search.setValue('name', e.target.value)}
  />

  <select
    value={search.searchValues.status}
    onChange={(e) => search.setValue('status', e.target.value)}
  >
    <option value="">All Statuses</option>
    <option value="active">Active</option>
    <option value="inactive">Inactive</option>
  </select>

  {search.hasActiveFilters && (
    <button onClick={search.handleClear}>Clear Filters</button>
  )}
</div>
```

**Example (Server-side):**
```typescript
const search = useTableSearch({
  onSearch: (values) => {
    // Fetch data from server with filters
    fetchData({ filters: values });
  },
  serverSide: true
});

// In component
<div className="search-panel">
  <input
    placeholder="Search"
    value={search.searchValues.query || ''}
    onChange={(e) => search.setValue('query', e.target.value)}
  />

  <button onClick={search.handleSearch}>Search</button>
  <button onClick={search.handleClear}>Clear</button>
</div>
```

## Combining Multiple Hooks

You can combine these hooks for complex functionality:

```typescript
function UserManagementPage() {
  // Search/filter management
  const search = useTableSearch({
    initialValues: { name: '', role: '' }
  });

  // Filter data based on search
  const filteredUsers = users.filter(user => {
    if (search.searchValues.name && !user.name.includes(search.searchValues.name)) {
      return false;
    }
    if (search.searchValues.role && user.role !== search.searchValues.role) {
      return false;
    }
    return true;
  });

  // Table management (sorting, selection)
  const table = useDynamicTable<User>({
    data: filteredUsers,
    defaultSortColumn: 'name',
    selectable: true
  });

  // Form management for creating new user
  const form = useDynamicForm({
    initialData: { name: '', email: '', role: 'user' },
    validation: {
      name: [{ type: 'required', message: 'Name is required' }],
      email: [
        { type: 'required', message: 'Email is required' },
        { type: 'email', message: 'Invalid email' }
      ]
    },
    onSubmit: async (data) => {
      await createUser(data);
    }
  });

  return (
    <div>
      {/* Search panel */}
      <div className="search-panel">
        <input
          value={search.searchValues.name}
          onChange={(e) => search.setValue('name', e.target.value)}
          placeholder="Search by name"
        />
      </div>

      {/* Table with sorting and selection */}
      <table>
        <thead>
          <tr>
            <th>
              <input
                type="checkbox"
                checked={table.allSelected}
                onChange={table.handleSelectAll}
              />
            </th>
            <th onClick={() => table.handleSort('name')}>Name</th>
            <th onClick={() => table.handleSort('email')}>Email</th>
          </tr>
        </thead>
        <tbody>
          {table.displayData.map(user => (
            <tr key={user.id}>
              <td>
                <input
                  type="checkbox"
                  checked={table.isSelected(user.id)}
                  onChange={() => table.handleSelectRow(user.id)}
                />
              </td>
              <td>{user.name}</td>
              <td>{user.email}</td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Create user form */}
      <form onSubmit={form.handleSubmit}>
        <input
          value={form.formData.name}
          onChange={(e) => form.handleChange('name', e.target.value)}
          onBlur={() => form.handleBlur('name')}
        />
        {form.errors.name && <span>{form.errors.name}</span>}

        <button type="submit" disabled={form.isSubmitting}>
          Create User
        </button>
      </form>
    </div>
  );
}
```

## Hook Dependencies

```
useDynamicForm
  └─ useDynamicValidation (internal dependency)

useDynamicTable (standalone)

useTableSearch (standalone)
```

## Integration with Laravel + Inertia.js

These hooks are designed to work seamlessly with Laravel + Inertia.js:

```typescript
// In your Inertia page component
interface Props {
  users: User[];
  validationRules: Record<string, ValidationRule[]>;
  columns: TableColumnConfig[];
}

export default function UsersPage({ users, validationRules, columns }: Props) {
  // Laravel controls validation rules via props
  const form = useDynamicForm({
    validation: validationRules, // Passed from Laravel
    onSubmit: (data) => router.post('/users', data)
  });

  // Use table hook for client-side features
  const table = useDynamicTable({ data: users });

  // Render table and form...
}
```

## TypeScript Support

All hooks are fully typed with TypeScript. When using with generic data types:

```typescript
interface Product {
  id: number;
  name: string;
  price: number;
  category: string;
}

// Type-safe table hook
const table = useDynamicTable<Product>({
  data: products
});

// displayData is typed as Product[]
table.displayData.forEach(product => {
  console.log(product.price); // TypeScript knows price exists
});
```

## Best Practices

1. **Use memoization for expensive computations:**
   ```typescript
   const filteredData = useMemo(() =>
     data.filter(/* ... */),
     [data, search.searchValues]
   );
   ```

2. **Clear errors on field change:**
   ```typescript
   // Good - using handleChange
   form.handleChange('email', value); // Clears error automatically

   // Avoid - using setValue directly
   form.setValue('email', value); // Error remains
   ```

3. **Validate on blur, not on every keystroke:**
   ```typescript
   <input
     onChange={(e) => form.handleChange('email', e.target.value)}
     onBlur={() => form.handleBlur('email')} // Validate when user leaves field
   />
   ```

4. **Use type parameters for better type inference:**
   ```typescript
   // Good
   const table = useDynamicTable<User>({ data });

   // Avoid
   const table = useDynamicTable({ data }); // Less type safety
   ```

## Testing

Example test for useDynamicValidation:

```typescript
import { renderHook, act } from '@testing-library/react';
import { useDynamicValidation } from './useDynamicValidation';

describe('useDynamicValidation', () => {
  it('validates required fields', () => {
    const { result } = renderHook(() =>
      useDynamicValidation({
        email: [{ type: 'required', message: 'Email is required' }]
      })
    );

    act(() => {
      const isValid = result.current.validateField('email', '');
    });

    expect(result.current.hasErrors).toBe(true);
    expect(result.current.errors.email).toBe('Email is required');
  });
});
```
