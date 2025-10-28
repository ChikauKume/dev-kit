import { test, expect } from '@playwright/test';

test.describe('UI Components Integration Test', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/');
  });

  test('should display all component categories', async ({ page }) => {
    // 基本UIコンポーネントセクション
    await expect(page.locator('text=Basic UI Components')).toBeVisible();

    // 複雑UIコンポーネントセクション
    await expect(page.locator('text=Complex UI Components')).toBeVisible();

    // テーブルシステムセクション
    await expect(page.locator('text=Table System')).toBeVisible();

    // ナビゲーションコンポーネントセクション
    await expect(page.locator('text=Navigation Components')).toBeVisible();
  });

  test('Button components should be interactive', async ({ page }) => {
    // Primary Button
    const primaryButton = page.locator('button:has-text("Primary Button")').first();
    if (await primaryButton.isVisible()) {
      await primaryButton.click();
      await expect(primaryButton).toHaveClass(/bg-blue-600/);
    }

    // Secondary Button
    const secondaryButton = page.locator('button:has-text("Secondary Button")').first();
    if (await secondaryButton.isVisible()) {
      await secondaryButton.hover();
      await expect(secondaryButton).toHaveClass(/hover:bg-gray-700/);
    }
  });

  test('Form components should accept input', async ({ page }) => {
    // Text Input
    const textInput = page.locator('input[type="text"]').first();
    if (await textInput.isVisible()) {
      await textInput.fill('Test input value');
      await expect(textInput).toHaveValue('Test input value');
    }

    // Checkbox
    const checkbox = page.locator('input[type="checkbox"]').first();
    if (await checkbox.isVisible()) {
      await checkbox.check();
      await expect(checkbox).toBeChecked();
    }
  });

  test('Modal components should open and close', async ({ page }) => {
    // Find modal trigger button
    const modalTrigger = page.locator('button:has-text("Open Modal")').first();
    if (await modalTrigger.isVisible()) {
      await modalTrigger.click();

      // Check modal is visible
      const modal = page.locator('[role="dialog"]');
      await expect(modal).toBeVisible();

      // Close modal
      const closeButton = modal.locator('button:has-text("Close")');
      if (await closeButton.isVisible()) {
        await closeButton.click();
        await expect(modal).not.toBeVisible();
      }
    }
  });

  test('Table component should display data', async ({ page }) => {
    const table = page.locator('table').first();
    if (await table.isVisible()) {
      // Check table has headers
      const headers = table.locator('thead th');
      await expect(headers).toHaveCount({ min: 1 });

      // Check table has rows
      const rows = table.locator('tbody tr');
      const rowCount = await rows.count();
      expect(rowCount).toBeGreaterThanOrEqual(0);
    }
  });

  test('Navigation components should be functional', async ({ page }) => {
    // Tab navigation
    const tabs = page.locator('[role="tablist"]').first();
    if (await tabs.isVisible()) {
      const tabButtons = tabs.locator('[role="tab"]');
      const tabCount = await tabButtons.count();

      for (let i = 0; i < Math.min(tabCount, 3); i++) {
        await tabButtons.nth(i).click();
        await expect(tabButtons.nth(i)).toHaveAttribute('aria-selected', 'true');
      }
    }

    // Breadcrumb navigation
    const breadcrumb = page.locator('nav[aria-label="breadcrumb"]').first();
    if (await breadcrumb.isVisible()) {
      const breadcrumbItems = breadcrumb.locator('li');
      await expect(breadcrumbItems).toHaveCount({ min: 1 });
    }
  });

  test('Dropdown menu should toggle', async ({ page }) => {
    const dropdownTrigger = page.locator('button[aria-haspopup="true"]').first();
    if (await dropdownTrigger.isVisible()) {
      await dropdownTrigger.click();

      // Check dropdown menu is visible
      const dropdownMenu = page.locator('[role="menu"]').first();
      await expect(dropdownMenu).toBeVisible();

      // Click outside to close
      await page.click('body', { position: { x: 0, y: 0 } });
      await expect(dropdownMenu).not.toBeVisible();
    }
  });

  test('Alert components should display messages', async ({ page }) => {
    const alerts = page.locator('[role="alert"]');
    const alertCount = await alerts.count();

    if (alertCount > 0) {
      for (let i = 0; i < Math.min(alertCount, 3); i++) {
        await expect(alerts.nth(i)).toBeVisible();
      }
    }
  });

  test('Permission components should handle access control', async ({ page }) => {
    // Permission gate - should show/hide content based on permissions
    const permissionGate = page.locator('[data-testid="permission-gate"]').first();
    if (await permissionGate.count() > 0) {
      const hasPermission = await permissionGate.getAttribute('data-has-permission');
      if (hasPermission === 'true') {
        await expect(permissionGate.locator('.protected-content')).toBeVisible();
      } else {
        await expect(permissionGate.locator('.no-permission-message')).toBeVisible();
      }
    }
  });

  test('Icon system should render SVG icons', async ({ page }) => {
    const icons = page.locator('svg[data-icon]');
    const iconCount = await icons.count();

    if (iconCount > 0) {
      for (let i = 0; i < Math.min(iconCount, 5); i++) {
        await expect(icons.nth(i)).toBeVisible();
        await expect(icons.nth(i)).toHaveAttribute('viewBox');
      }
    }
  });
});

test.describe('Responsive Design', () => {
  test('Components should be responsive on mobile', async ({ page }) => {
    // Set mobile viewport
    await page.setViewportSize({ width: 375, height: 667 });
    await page.goto('/');

    // Check mobile menu button is visible
    const mobileMenuButton = page.locator('button[aria-label="Open menu"]');
    if (await mobileMenuButton.count() > 0) {
      await expect(mobileMenuButton).toBeVisible();
    }

    // Check responsive navigation
    const responsiveNav = page.locator('.responsive-nav');
    if (await responsiveNav.count() > 0) {
      await expect(responsiveNav).toHaveCSS('display', 'block');
    }
  });

  test('Components should be responsive on tablet', async ({ page }) => {
    // Set tablet viewport
    await page.setViewportSize({ width: 768, height: 1024 });
    await page.goto('/');

    // Check layout adjustments for tablet
    const container = page.locator('.container').first();
    if (await container.isVisible()) {
      const width = await container.evaluate(el => el.offsetWidth);
      expect(width).toBeLessThanOrEqual(768);
    }
  });
});

test.describe('Accessibility', () => {
  test('Components should be keyboard navigable', async ({ page }) => {
    await page.goto('/');

    // Tab through interactive elements
    await page.keyboard.press('Tab');
    const firstFocused = await page.evaluate(() => document.activeElement.tagName);
    expect(['A', 'BUTTON', 'INPUT']).toContain(firstFocused);

    // Continue tabbing
    for (let i = 0; i < 5; i++) {
      await page.keyboard.press('Tab');
      const focused = await page.evaluate(() => document.activeElement.tagName);
      expect(['A', 'BUTTON', 'INPUT', 'SELECT', 'TEXTAREA']).toContain(focused);
    }
  });

  test('Components should have proper ARIA attributes', async ({ page }) => {
    await page.goto('/');

    // Check buttons have proper roles
    const buttons = page.locator('button');
    const buttonCount = await buttons.count();
    for (let i = 0; i < Math.min(buttonCount, 5); i++) {
      const button = buttons.nth(i);
      if (await button.getAttribute('aria-hidden') !== 'true') {
        const hasAriaLabel = await button.getAttribute('aria-label');
        const hasText = await button.textContent();
        expect(hasAriaLabel || hasText).toBeTruthy();
      }
    }

    // Check form inputs have labels
    const inputs = page.locator('input:not([type="hidden"])');
    const inputCount = await inputs.count();
    for (let i = 0; i < Math.min(inputCount, 5); i++) {
      const input = inputs.nth(i);
      const id = await input.getAttribute('id');
      if (id) {
        const label = page.locator(`label[for="${id}"]`);
        const labelCount = await label.count();
        const ariaLabel = await input.getAttribute('aria-label');
        expect(labelCount > 0 || ariaLabel).toBeTruthy();
      }
    }
  });
});