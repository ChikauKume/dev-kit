# E2Eテスト作成ガイドライン

## 概要

このドキュメントはPlaywright E2Eテストの作成時に守るべきルールとベストプラクティスを定義します。
Playwrightレポートの可読性を高め、日本語での一貫したレポート出力を保証するための規則を記載しています。

---

## 基本原則

### 原則1: すべての操作は `test.step` でラップする

Playwrightレポートで英語の自動生成メッセージ（例: "Wait for selector", "Expect toBeVisible"）を避けるため、**すべての操作を `test.step` でラップし、日本語のステップ名を明示的に指定します**。

#### ❌ ダメな例: ヘルパー関数を直接呼び出し

```typescript
test('ログイン機能のテスト', async ({ page }) => {
  await test.step('ログイン画面にアクセス', async () => {
    await page.goto('/login');
  });

  // ❌ NGパターン: ヘルパー関数を直接呼び出し
  await verifyPageStyling(page);
  // → レポートに英語表示: "Wait for selector", "Expect toBeVisible"
});
```

#### ✅ 良い例: test.stepでラップ

```typescript
test('ログイン機能のテスト', async ({ page }) => {
  await test.step('ログイン画面にアクセス', async () => {
    await page.goto('/login');
  });

  // ✅ OKパターン: test.stepでラップ
  await test.step('視覚的検証: ページスタイルが適用されているか確認', async () => {
    await verifyPageStyling(page);
  });
  // → レポートに日本語表示: "視覚的検証: ページスタイルが適用されているか確認"
});
```

---

### 原則2: ステップ名は必ず日本語で記載

すべての `test.step` のステップ名は日本語で記載します。これにより、Playwrightレポートが完全に日本語化され、非エンジニアでも理解しやすくなります。

#### ✅ 良い例

```typescript
await test.step('メールアドレスを入力', async () => {
  await page.fill('input[name="email"]', 'test@example.com');
});

await test.step('パスワードを入力', async () => {
  await page.fill('input[name="password"]', 'Password123!');
});

await test.step('ログインボタンをクリック', async () => {
  await page.click('button[type="submit"]');
});
```

#### ❌ ダメな例

```typescript
// ❌ 英語のステップ名
await test.step('Fill email address', async () => {
  await page.fill('input[name="email"]', 'test@example.com');
});
```

---

### 原則3: ヘルパー関数も例外なくラップ

共通ヘルパー関数（`verifyPageStyling`, `login`, `logout` など）の呼び出しも、必ず `test.step` でラップします。

#### 共通ヘルパー関数の例

```typescript
// ✅ ヘルパー関数の定義（内部操作も test.step でラップ）
async function verifyPageStyling(page, mainSelector = '#app > *') {
  await test.step('Reactアプリのマウント完了を待つ', async () => {
    await page.waitForSelector(mainSelector, { timeout: 10000 });
  });

  await test.step('メインコンテンツが表示されていることを確認', async () => {
    const mainContent = page.locator(mainSelector);
    await expect(mainContent).toBeVisible();
  });

  await test.step('スタイルが適用されているか確認（空白画面でない）', async () => {
    const mainContent = page.locator(mainSelector);
    const hasStyles = await mainContent.evaluate((el) => {
      const computed = window.getComputedStyle(el);
      const bgColor = computed.backgroundColor;
      const textColor = computed.color;
      const hasBackground = bgColor !== 'rgba(0, 0, 0, 0)';
      const hasTextColor = textColor !== 'rgb(0, 0, 0)' && textColor !== '';
      return hasBackground || hasTextColor;
    });

    if (!hasStyles) {
      throw new Error('❌ Page styling not applied. Check ui-components CSS import in app.tsx');
    }
  });
}

// ✅ 使用時は必ず test.step でラップ
await test.step('視覚的検証: ページスタイルが適用されているか確認', async () => {
  await verifyPageStyling(page);
});
```

**重要**: ヘルパー関数の**内部の操作**も `test.step` でラップすることで、レポートで各操作が日本語で表示されます。

---

## ファイル構成

### テストファイル命名規則

E2Eテストファイルは以下の命名規則に従います：

```
tests/e2e/{機能名}/E2E-{連番}.spec.ts
```

**例**:
- `tests/e2e/login/E2E-001.spec.ts` - ログイン・ダッシュボード表示(正常系)
- `tests/e2e/login/E2E-002.spec.ts` - ログアウトとセッション無効化(正常系)
- `tests/e2e/login/E2E-003.spec.ts` - ログイン失敗(異常系)
- `tests/e2e/login/E2E-004.spec.ts` - 認証済みユーザーのログイン画面アクセス(異常系)

### テストファイルの基本構造

```typescript
import { test, expect } from '@playwright/test';

/**
 * {テストシナリオ名}
 *
 * {テストシナリオの詳細説明}
 *
 * Scenario ID: E2E-{連番}
 * Category: normal | error
 */

const BASE_URL = process.env.BASE_URL || 'http://localhost';

// ヘルパー関数の定義（必要に応じて）
async function helperFunction(page) {
  // ...
}

test.describe('E2E-{連番}: {テストシナリオ名}', () => {
  test('{テストの詳細説明}', async ({ page }) => {
    await test.step('{ステップ1の日本語名}', async () => {
      // ステップ1の処理
    });

    await test.step('{ステップ2の日本語名}', async () => {
      // ステップ2の処理
    });

    // ヘルパー関数も test.step でラップ
    await test.step('{ヘルパー関数の目的を示す日本語名}', async () => {
      await helperFunction(page);
    });
  });
});
```

---

## 視覚的検証の実装

### verifyPageStyling ヘルパー関数

ui-components CSS未適用による空白画面を検知するため、すべてのE2Eテストで視覚的検証を実施します。

#### ヘルパー関数の実装例

```typescript
/**
 * 視覚的検証: ページスタイルが適用されているか確認
 * ui-components CSS未適用による空白画面を検知
 */
async function verifyPageStyling(page, mainSelector = '#app > *') {
  await test.step('Reactアプリのマウント完了を待つ', async () => {
    await page.waitForSelector(mainSelector, { timeout: 10000 });
  });

  await test.step('メインコンテンツが表示されていることを確認', async () => {
    const mainContent = page.locator(mainSelector);
    await expect(mainContent).toBeVisible();
  });

  await test.step('スタイルが適用されているか確認（空白画面でない）', async () => {
    const mainContent = page.locator(mainSelector);
    const hasStyles = await mainContent.evaluate((el) => {
      const computed = window.getComputedStyle(el);
      const bgColor = computed.backgroundColor;
      const textColor = computed.color;
      const hasBackground = bgColor !== 'rgba(0, 0, 0, 0)';
      const hasTextColor = textColor !== 'rgb(0, 0, 0)' && textColor !== '';
      return hasBackground || hasTextColor;
    });

    if (!hasStyles) {
      throw new Error('❌ Page styling not applied. Check ui-components CSS import in app.tsx');
    }
  });
}
```

**重要**: ヘルパー関数の内部操作も `test.step` でラップすることで、Playwrightレポートで各操作が日本語で表示されます。

#### 使用方法

```typescript
test('ログイン機能のテスト', async ({ page }) => {
  // テストステップ...

  // ✅ 必ず test.step でラップして使用
  await test.step('視覚的検証: ページスタイルが適用されているか確認', async () => {
    await verifyPageStyling(page);
  });
});
```

---

## 待機処理のベストプラクティス

### 推奨される待機方法

```typescript
// ✅ 推奨: ネットワークアイドル待機
await page.waitForLoadState('networkidle');

// ✅ 推奨: 特定の要素が表示されるまで待機
await page.waitForSelector('input[name="email"]', { state: 'visible' });

// ✅ 推奨: URLが変更されるまで待機
await page.waitForURL('/dashboard');

// ⚠️ 必要な場合のみ使用: 固定時間待機
await page.waitForTimeout(500);  // Reactマウント完了を待つなど
```

### 待機処理も test.step でラップ

待機処理が主目的のステップも、明示的にステップ名を付けます：

```typescript
await test.step('ログイン画面にアクセス', async () => {
  await page.goto('/login');
  await page.waitForLoadState('networkidle');
  await page.waitForTimeout(500);  // Reactマウント待ち
});
```

---

## 実装チェックリスト

新しいE2Eテストを作成する際は、以下のチェックリストを確認してください：

- [ ] ファイル名は `E2E-{連番}.spec.ts` 形式
- [ ] すべての操作が `test.step` でラップされている
- [ ] すべてのステップ名が日本語で記載されている
- [ ] ヘルパー関数の呼び出しも `test.step` でラップされている
- [ ] 視覚的検証（`verifyPageStyling`）が実装されている
- [ ] 視覚的検証も `test.step` でラップされている
- [ ] コメントにシナリオID（`E2E-{連番}`）とカテゴリ（`normal` or `error`）が記載されている

---

## レポート確認

E2Eテスト実行後、Playwrightレポートで以下を確認します：

```bash
npm run test:e2e
npm run test:e2e:show
```

### 確認ポイント

1. **すべてのステップが日本語で表示されているか**
   - ✅ "ログイン画面にアクセス"
   - ✅ "メールアドレスを入力"
   - ✅ "視覚的検証: ページスタイルが適用されているか確認"

2. **英語の自動生成メッセージが表示されていないか**
   - ❌ "Wait for selector locator('#app > *')"
   - ❌ "Expect "toBeVisible""
   - ❌ "Evaluate locator('#app > *')"

英語表示が含まれている場合は、該当の操作を `test.step` でラップしていない可能性があります。

---

## まとめ

- **すべての操作を `test.step` でラップ**
- **ステップ名は必ず日本語で記載**
- **ヘルパー関数の呼び出しも例外なくラップ**
- **Playwrightレポートで英語表示がないことを確認**

このガイドラインに従うことで、誰でも理解しやすい高品質なE2Eテストレポートを生成できます。
