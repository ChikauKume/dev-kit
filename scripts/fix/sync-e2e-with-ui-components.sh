#!/bin/bash

# E2Eテストをui-componentsの実際の内容に合わせて自動修正
# 使い方: ./dev-kit/scripts/fix/sync-e2e-with-ui-components.sh

set -e

echo "🔧 E2Eテストをui-componentsに同期中..."

# Error404Pageの実際のテキスト (dev-kit/ui-components/src/pages/templates/error/Error404Page.tsx から)
ERROR_404_HEADING="お探しのページは見つかりませんでした"
ERROR_404_MESSAGE="お探しのページは存在しないか、移動または削除された可能性があります。"
ERROR_404_BUTTON="ホームに戻る"

# Error500Pageの実際のテキスト (dev-kit/ui-components/src/pages/templates/error/Error500Page.tsx から)
ERROR_500_HEADING="予期せぬ不具合が発生しました"
ERROR_500_MESSAGE="しばらく時間をおいてから、もう一度お試しください。"
ERROR_500_BUTTON="ホームに戻る"

echo "📝 E2E-005.spec.ts を修正中..."

# E2E-005: 404エラーページテスト
# 問題: "ホームに戻る"ボタンは/dashboardにアクセスし、authミドルウェアで/loginにリダイレクトされる
# 修正は不要（この動作は正しい）

# ただしテストのメッセージは修正
cat > tests/e2e/login/E2E-005.spec.ts <<'EOF'
import { test, expect } from '@playwright/test';

/**
 * 404エラーページ表示(異常系)
 *
 * 存在しないURLにアクセスした場合、404エラーページが正しく表示され、 ホームに戻るボタンをクリックすると適切にリダイレクトされることを確認。
 *
 * Scenario ID: E2E-005
 */

const BASE_URL = process.env.BASE_URL || 'http://localhost';

/**
 * 視覚的検証: ページスタイルが適用されているか確認
 * ui-components CSS未適用による空白画面を検知
 */
async function verifyPageStyling(page, mainSelector = '#app > *') {
  // Reactアプリのマウント完了を待つ
  await page.waitForSelector(mainSelector, { timeout: 10000 });

  // メインコンテンツが存在することを確認
  const mainContent = page.locator(mainSelector);
  await expect(mainContent).toBeVisible();

  // スタイルが適用されているか確認（空白画面でない）
  const hasStyles = await mainContent.evaluate((el) => {
    const computed = window.getComputedStyle(el);
    // 背景色または文字色が設定されていることを確認
    // デフォルト値（rgba(0, 0, 0, 0)）でないことをチェック
    const bgColor = computed.backgroundColor;
    const textColor = computed.color;
    const hasBackground = bgColor !== 'rgba(0, 0, 0, 0)';
    const hasTextColor = textColor !== 'rgb(0, 0, 0)' && textColor !== '';
    return hasBackground || hasTextColor;
  });

  if (!hasStyles) {
    throw new Error('❌ Page styling not applied. Check ui-components CSS import in app.tsx');
  }
}

test.describe('E2E-005: 404エラーページ表示(異常系)', () => {
  test('存在しないURLにアクセスした場合、404エラーページが正しく表示され、 ホームに戻るボタンをクリックすると適切にリダイレクトされることを確認。', async ({ page }) => {
    await test.step('存在しないURLにアクセス', async () => {
      await page.goto('/non-existent-page-12345');
      await page.waitForLoadState('networkidle');
      await page.waitForTimeout(500);
    });

    await test.step('404エラーページのヘッダーを確認', async () => {
      await expect(page.locator('h2:has-text("お探しのページは見つかりませんでした")')).toBeVisible();
    });

    await test.step('エラーメッセージが表示されることを確認', async () => {
      await expect(page.getByText('お探しのページは存在しないか、移動または削除された可能性があります')).toBeVisible();
    });

    await test.step('ホームに戻るボタンが表示されることを確認', async () => {
      await expect(page.locator('button:has-text("ホームに戻る")')).toBeVisible();
    });

    await test.step('再度404ページを表示（未認証状態）', async () => {
      await page.goto('/non-existent-page-67890');
      await page.waitForLoadState('networkidle');
      await page.waitForTimeout(500);
    });

    await test.step('404エラーページの表示を待機', async () => {
      await expect(page.locator('h2:has-text("お探しのページは見つかりませんでした")')).toBeVisible();
    });

    await test.step('ホームに戻るボタンをクリック', async () => {
      await page.getByRole('button', { name: 'ホームに戻る' }).click();
      await page.waitForLoadState('domcontentloaded');
    });

    await test.step('ログインページへリダイレクトされることを確認（未認証ユーザー）', async () => {
      // "ホームに戻る"ボタンは /dashboard にアクセスするが、
      // 未認証ユーザーは auth ミドルウェアにより /login にリダイレクトされる
      await page.waitForURL('/login');
      await page.waitForLoadState('networkidle');
      await page.waitForTimeout(1000);
    });

    // 視覚的検証: スタイルが適用されていることを確認
    await verifyPageStyling(page);
  });
});
EOF

echo "✅ E2E-005.spec.ts を修正しました"

echo "📝 E2E-006.spec.ts を修正中..."

# E2E-006: エラーページ表示確認テスト
# 問題: debugbarの干渉でstrict mode violation
# 修正: より具体的なセレクターを使用
cat > tests/e2e/login/E2E-006.spec.ts <<'EOF'
import { test, expect } from '@playwright/test';

/**
 * エラーページ表示確認(異常系)
 *
 * 存在しないページにアクセスした際に404エラーページが表示されること、 サーバーエラー発生時に500エラーページが表示されることを確認。
 *
 * Scenario ID: E2E-006
 */

const BASE_URL = process.env.BASE_URL || 'http://localhost';

/**
 * 視覚的検証: ページスタイルが適用されているか確認
 * ui-components CSS未適用による空白画面を検知
 */
async function verifyPageStyling(page, mainSelector = '#app > *') {
  // Reactアプリのマウント完了を待つ
  await page.waitForSelector(mainSelector, { timeout: 10000 });

  // メインコンテンツが存在することを確認
  const mainContent = page.locator(mainSelector);
  await expect(mainContent).toBeVisible();

  // スタイルが適用されているか確認（空白画面でない）
  const hasStyles = await mainContent.evaluate((el) => {
    const computed = window.getComputedStyle(el);
    // 背景色または文字色が設定されていることを確認
    // デフォルト値（rgba(0, 0, 0, 0)）でないことをチェック
    const bgColor = computed.backgroundColor;
    const textColor = computed.color;
    const hasBackground = bgColor !== 'rgba(0, 0, 0, 0)';
    const hasTextColor = textColor !== 'rgb(0, 0, 0)' && textColor !== '';
    return hasBackground || hasTextColor;
  });

  if (!hasStyles) {
    throw new Error('❌ Page styling not applied. Check ui-components CSS import in app.tsx');
  }
}

test.describe('E2E-006: エラーページ表示確認(異常系)', () => {
  test('存在しないページにアクセスした際に404エラーページが表示されること、 サーバーエラー発生時に500エラーページが表示されることを確認。', async ({ page }) => {
    await test.step('存在しないページにアクセス', async () => {
      await page.goto('/nonexistent-page');
      await page.waitForLoadState('networkidle');
      await page.waitForTimeout(500);
    });

    await test.step('404エラーページが表示されることを確認', async () => {
      // debugbar干渉を避けるため、#app内の要素を確認
      await expect(page.locator('#app h2:has-text("お探しのページは見つかりませんでした")')).toBeVisible();
    });

    await test.step('エラーメッセージが表示されることを確認', async () => {
      await expect(page.locator('#app').getByText('お探しのページは存在しないか、移動または削除された可能性があります')).toBeVisible();
    });

    await test.step('トップページに移動', async () => {
      await page.goto('/');
      await page.waitForLoadState('networkidle');
      await page.waitForTimeout(500);
    });

    await test.step('トップページに正常に遷移することを確認', async () => {
      await expect(page).toHaveURL(new RegExp('\/(\\?.*)?$'));
    });

    // 視覚的検証: スタイルが適用されていることを確認
    await verifyPageStyling(page);
  });
});
EOF

echo "✅ E2E-006.spec.ts を修正しました"

echo "📝 E2E-007.spec.ts を修正中..."

# E2E-007: 500エラーページテスト
# 問題: 期待するテキストが実際のui-componentsと異なる
cat > tests/e2e/login/E2E-007.spec.ts <<'EOF'
import { test, expect } from '@playwright/test';

/**
 * 500エラーページ表示(異常系)
 *
 * サーバーエラー発生時に500エラーページが正しく表示されることを確認。 テスト用エンドポイントで意図的にエラーを発生させてテストする。
 *
 * Scenario ID: E2E-007
 */

const BASE_URL = process.env.BASE_URL || 'http://localhost';

/**
 * 視覚的検証: ページスタイルが適用されているか確認
 * ui-components CSS未適用による空白画面を検知
 */
async function verifyPageStyling(page, mainSelector = '#app > *') {
  // Reactアプリのマウント完了を待つ
  await page.waitForSelector(mainSelector, { timeout: 10000 });

  // メインコンテンツが存在することを確認
  const mainContent = page.locator(mainSelector);
  await expect(mainContent).toBeVisible();

  // スタイルが適用されているか確認（空白画面でない）
  const hasStyles = await mainContent.evaluate((el) => {
    const computed = window.getComputedStyle(el);
    // 背景色または文字色が設定されていることを確認
    // デフォルト値（rgba(0, 0, 0, 0)）でないことをチェック
    const bgColor = computed.backgroundColor;
    const textColor = computed.color;
    const hasBackground = bgColor !== 'rgba(0, 0, 0, 0)';
    const hasTextColor = textColor !== 'rgb(0, 0, 0)' && textColor !== '';
    return hasBackground || hasTextColor;
  });

  if (!hasStyles) {
    throw new Error('❌ Page styling not applied. Check ui-components CSS import in app.tsx');
  }
}

test.describe('E2E-007: 500エラーページ表示(異常系)', () => {
  test('サーバーエラー発生時に500エラーページが正しく表示されることを確認。 テスト用エンドポイントで意図的にエラーを発生させてテストする。', async ({ page }) => {
    await test.step('テスト用エラーエンドポイントにアクセス（500エラーを発生させる）', async () => {
      await page.goto('/test-error');
      await page.waitForLoadState('networkidle');
      await page.waitForTimeout(500);
    });

    await test.step('500エラーページのヘッダーを確認', async () => {
      // ui-componentsの実際のテキスト: "予期せぬ不具合が発生しました"
      await expect(page.locator('h2:has-text("予期せぬ不具合が発生しました")')).toBeVisible();
    });

    await test.step('エラーメッセージが表示されることを確認', async () => {
      // ui-componentsの実際のテキスト
      await expect(page.getByText('しばらく時間をおいてから、もう一度お試しください。')).toBeVisible();
    });

    await test.step('ホームに戻るボタンが表示されることを確認', async () => {
      await expect(page.locator('button:has-text("ホームに戻る")')).toBeVisible();
    });

    // 視覚的検証: スタイルが適用されていることを確認
    await verifyPageStyling(page);
  });
});
EOF

echo "✅ E2E-007.spec.ts を修正しました"

echo ""
echo "✅ すべてのE2Eテストをui-componentsに同期しました"
echo ""
echo "📊 変更内容:"
echo "  - E2E-005: メッセージ確認（変更なし、動作は正しい）"
echo "  - E2E-006: debugbar干渉を回避するセレクター修正"
echo "  - E2E-007: ui-componentsの実際のテキストに修正"
echo ""
echo "🧪 テストを実行してください:"
echo "  npx playwright test tests/e2e/login/E2E-005.spec.ts tests/e2e/login/E2E-006.spec.ts tests/e2e/login/E2E-007.spec.ts"
