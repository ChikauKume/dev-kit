# E2E Test Generator Features

## Overview

E2E Test Generator (`dev-kit/scripts/generate/e2e.cjs`) automatically generates Playwright test scripts from YAML specifications with built-in best practices.

## Automatic Features

### 1. Visual Confirmation Timeouts

**Purpose**: Make video recordings clearly show navigation and redirects for manual review.

**Automatic Behavior**:

- **`navigate` action**: Adds 500ms wait after page load
  ```typescript
  await page.goto('/login');
  await page.waitForLoadState('networkidle');
  await page.waitForTimeout(500); // Auto-added
  ```

- **`wait_for_navigation` with URL**: Adds 1000ms wait after redirect
  ```typescript
  await page.waitForURL('/dashboard');
  await page.waitForTimeout(1000); // Auto-added
  ```

- **`wait_for_navigation` without URL**: Adds 500ms wait after networkidle
  ```typescript
  await page.waitForLoadState('networkidle');
  await page.waitForTimeout(500); // Auto-added
  ```

**Why Important**:
- Video recordings can show state transitions clearly
- Manual reviewers can verify redirects happened correctly
- Prevents "too fast to see" issues in test recordings

### 2. Japanese Test Steps Support

**Purpose**: Display test steps in Japanese in Playwright HTML reports for better readability.

**How to Use**:

Add `step_name` field to any step in your e2e.yaml:

```yaml
scenarios:
  - id: E2E-001
    name: ユーザー登録（正常系）
    category: normal
    description: 新規ユーザーが登録フォームから正常に登録できることを確認
    steps:
      - action: navigate
        url: /register
        step_name: 登録画面にアクセス

      - action: type
        selector: input[name="email"]
        value: test@example.com
        step_name: メールアドレスを入力

      - action: click
        selector: button[type="submit"]
        step_name: 登録ボタンをクリック

      - action: wait_for_navigation
        url: /dashboard
        step_name: ダッシュボードへリダイレクトされることを確認
```

**Generated Code**:

```typescript
await test.step('登録画面にアクセス', async () => {
  await page.goto('/register');
  await page.waitForLoadState('networkidle');
  await page.waitForTimeout(500);
});

await test.step('メールアドレスを入力', async () => {
  await page.fill('input[name="email"]', 'test@example.com');
});

await test.step('登録ボタンをクリック', async () => {
  await page.click('button[type="submit"]');
});

await test.step('ダッシュボードへリダイレクトされることを確認', async () => {
  await page.waitForURL('/dashboard');
  await page.waitForTimeout(1000);
});
```

**Benefits**:
- Playwright HTML report shows Japanese step names in "Test Steps" section
- Better readability for Japanese-speaking teams
- Easier to understand test flow without reading code

## Usage

```bash
node dev-kit/scripts/generate/e2e.cjs <spec-name> [--force]
```

Examples:
```bash
# Generate new tests (skip existing files)
node dev-kit/scripts/generate/e2e.cjs user-authentication

# Regenerate all tests (overwrite existing files)
node dev-kit/scripts/generate/e2e.cjs user-authentication --force
```

### Options

- `--force`: Overwrite existing test files. Use this to regenerate tests after updating e2e.yaml or generator improvements.

## Notes

- **Visual timeouts are always added automatically** - no YAML configuration needed
- **`step_name` is optional** - if not provided, `description` field is automatically used as `step_name`
- **`description` fallback** - existing e2e.yaml files with `description` fields will automatically generate Japanese test steps without any changes
- **Existing tests are not overwritten** - generator skips files that already exist (use `--force` to overwrite)
- **Both features prevent common issues** identified during test review:
  - Videos too fast to verify redirects
  - Test steps not readable in Japanese

## Supported Actions

All actions support both automatic timeout insertion (where applicable) and `step_name` wrapping:

- `navigate`
- `type`
- `click`
- `check` / `uncheck`
- `assert` / `assert_text_contains` / `assert_not_visible` / `assert_visible`
- `assert_url` / `assert_value` / `assert_checked`
- `wait_for_navigation`
- `wait`
- `screenshot`
- `clear` / `blur`
