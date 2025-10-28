// パスワード不一致エラー表示E2Eテスト
//
// 検証内容:
// - パスワードと確認用パスワードが異なる場合、エラーメッセージが表示されること
// - エラーメッセージは「パスワードが一致しません」を含むこと
// - エラーが表示されている間、フォーム送信が実行されないこと

import { test, expect } from '@playwright/test';

test.describe('パスワード不一致エラー表示テスト', () => {
  test.beforeEach(async ({ page }) => {
    // 新規登録ページへアクセス
    await page.goto('http://localhost/signup');

    // ページがロードされるまで待機
    await page.waitForLoadState('networkidle');
  });

  test('パスワード不一致時にエラーメッセージが表示される', async ({ page }) => {
    // 名前入力
    await page.locator('input[name="name"]').fill('テストユーザー');

    // メールアドレス入力
    await page.locator('input[name="email"]').fill('test@example.com');

    // パスワード入力（異なる値）
    await page.locator('input[name="password"]').fill('password123');
    await page.locator('input[name="password_confirmation"]').fill('different456');

    // 利用規約同意
    await page.locator('input[name="terms_agreed"]').check();

    // 次へボタンをクリック
    await page.locator('button[type="submit"]').click();

    // エラーメッセージが表示されるまで待機（最大5秒）
    await page.waitForSelector('.form-error', { timeout: 5000 });

    // エラーメッセージの内容を確認
    const errorMessage = await page.locator('.form-error').textContent();

    // アサーション
    expect(errorMessage).toContain('パスワードが一致しません');

    // フォームが送信されていないことを確認（URLが変わっていない）
    expect(page.url()).toContain('/signup');
  });

  test('パスワード一致時はエラーが表示されない', async ({ page }) => {
    // 名前入力
    await page.locator('input[name="name"]').fill('テストユーザー');

    // メールアドレス入力
    await page.locator('input[name="email"]').fill('test@example.com');

    // パスワード入力（同じ値）
    await page.locator('input[name="password"]').fill('password123');
    await page.locator('input[name="password_confirmation"]').fill('password123');

    // 利用規約同意
    await page.locator('input[name="terms_agreed"]').check();

    // 次へボタンをクリック
    await page.locator('button[type="submit"]').click();

    // エラーメッセージが表示されないことを確認
    const errorCount = await page.locator('.form-error').count();
    expect(errorCount).toBe(0);

    // 確認画面に遷移することを確認
    await page.waitForURL('**/signup/confirm', { timeout: 5000 });
  });
});
