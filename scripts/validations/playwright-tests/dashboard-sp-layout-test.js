// Dashboard SPレイアウト自動検証テスト
//
// 検証内容:
// - viewMode='sp' でハンバーガーメニューボタン（☰）が表示されること
// - フッターが正しく表示されること
// - ハンバーガーメニューをクリックしてメニューが開くこと

import { test, expect } from '@playwright/test';

test.describe('Dashboard SPレイアウト検証', () => {
  test.beforeEach(async ({ page }) => {
    // localStorageでviewModeを'sp'に設定
    await page.goto('http://localhost/dashboard');

    // viewModeをSPに設定
    await page.evaluate(() => {
      localStorage.setItem('app-view-mode', 'sp');
    });

    // ページをリロード
    await page.reload();

    // ページがロードされるまで待機
    await page.waitForLoadState('networkidle');
  });

  test('viewMode=spでハンバーガーメニューボタンが表示される', async ({ page }) => {
    // 画面サイズをSPサイズに設定
    await page.setViewportSize({ width: 375, height: 667 });

    // ハンバーガーメニューボタンが存在することを確認
    // InfoPageWrapper.tsx line 193: onClick={() => setIsHamburgerOpen(!isHamburgerOpen)}
    const hamburgerButton = page.locator('button:has-text("☰")');

    await expect(hamburgerButton).toBeVisible({ timeout: 5000 });
  });

  test('ハンバーガーメニューをクリックしてメニューが開く', async ({ page }) => {
    // 画面サイズをSPサイズに設定
    await page.setViewportSize({ width: 375, height: 667 });

    // ハンバーガーメニューボタンをクリック
    const hamburgerButton = page.locator('button:has-text("☰")');
    await hamburgerButton.click();

    // ハンバーガーメニューが開くことを確認
    // InfoPageWrapper.tsx line 198: className="sp-hamburger-menu"
    const hamburgerMenu = page.locator('.sp-hamburger-menu.open');

    await expect(hamburgerMenu).toBeVisible({ timeout: 5000 });

    // メニュー内に「ホーム」が表示されることを確認
    const homeItem = hamburgerMenu.locator('text=ホーム');
    await expect(homeItem).toBeVisible();

    // メニュー内に「ログアウト」が表示されることを確認
    const logoutItem = hamburgerMenu.locator('text=ログアウト');
    await expect(logoutItem).toBeVisible();
  });

  test('フッターが正しく表示される', async ({ page }) => {
    // 画面サイズをSPサイズに設定
    await page.setViewportSize({ width: 375, height: 667 });

    // フッター要素を確認
    // InfoPageWrapper.tsx: <contentinfo>
    const footer = page.locator('contentinfo');

    await expect(footer).toBeVisible({ timeout: 5000 });

    // フッター内のリンクを確認
    const qaLink = footer.locator('a:has-text("Q&A")');
    await expect(qaLink).toBeVisible();

    const privacyLink = footer.locator('a:has-text("プライバシーポリシー")');
    await expect(privacyLink).toBeVisible();

    const termsLink = footer.locator('a:has-text("利用規約")');
    await expect(termsLink).toBeVisible();

    const commercialLink = footer.locator('a:has-text("特商法表記")');
    await expect(commercialLink).toBeVisible();

    // コピーライト表示を確認
    const copyright = footer.locator('text=© 2025 AppName. All rights reserved.');
    await expect(copyright).toBeVisible();
  });

  test('viewMode=pcではハンバーガーメニューが表示されない', async ({ page }) => {
    // viewModeをPCに変更
    await page.evaluate(() => {
      localStorage.setItem('app-view-mode', 'pc');
    });

    await page.reload();
    await page.waitForLoadState('networkidle');

    // 画面サイズは小さいまま
    await page.setViewportSize({ width: 375, height: 667 });

    // ハンバーガーメニューボタンが存在しないことを確認
    const hamburgerButton = page.locator('button:has-text("☰")');

    await expect(hamburgerButton).not.toBeVisible();
  });

  test('SPレイアウトでヘッダーが正しく表示される', async ({ page }) => {
    // 画面サイズをSPサイズに設定
    await page.setViewportSize({ width: 375, height: 667 });

    // ヘッダー内のロゴが表示されることを確認
    const logo = page.locator('.dashboard-logo:has-text("AppName")');
    await expect(logo).toBeVisible({ timeout: 5000 });

    // 通知ボタンが表示されることを確認
    const notificationButton = page.locator('button:has([name="bell"])');
    await expect(notificationButton).toBeVisible();

    // ハンバーガーメニューボタンが表示されることを確認
    const hamburgerButton = page.locator('button:has-text("☰")');
    await expect(hamburgerButton).toBeVisible();
  });
});
