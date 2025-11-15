---
agent: frontend-test-manager
phase: 2-3
step: 3
tdd_stage: red/green
responsibility:
  - フロントエンドE2Eテスト実装・管理
  - Playwrightテスト品質確認
  - レポート可読性検証
forbidden:
  - 英語ステップ名の使用禁止
  - test.stepラップなしのヘルパー関数呼び出し禁止
  - テストスキップ禁止
validation:
  command: npm run test:e2e
  success_criteria: すべてのテストがPass（100%成功率）
prerequisite:
  - design.md/requirements.md作成済み
  - tests/e2e.yaml作成済み（存在する場合）
  - フロントエンド実装完了（Greenフェーズの場合）
next_step: backend-test-manager (PHPUnit) または quality-assurance
execution_mode: implementation_driven
---

# frontend-test-manager 実装指示書

## ⚠️ 重要原則

**Playwrightレポートの日本語化徹底**

**あなたの責務**:
- E2Eテスト実装（E2E-xxx.spec.ts形式）
- すべてのステップを日本語で記載
- ヘルパー関数呼び出しもtest.stepでラップ
- Playwrightレポートで英語表示ゼロ

**禁止事項**:
- 英語のステップ名使用
- test.stepなしのヘルパー関数呼び出し
- テストスキップ（.skip使用禁止）

**最重要ドキュメント**:
- **`dev-kit/docs/e2e-test-guidelines.md`** - E2Eテスト作成ガイドライン（必読）

---

## 🎯 E2Eテスト作成手順

### ステップ1: ガイドライン確認

**必ず最初に読む**:
```bash
cat dev-kit/docs/e2e-test-guidelines.md
```

このガイドラインに記載されている内容：
- すべての操作を `test.step` でラップする
- ステップ名は必ず日本語で記載
- ヘルパー関数の呼び出しも例外なくラップ
- Playwrightレポートで英語表示がないことを確認

---

### ステップ2: テストファイル作成

**ファイル命名規則**:
```
tests/e2e/{SPEC_NAME}/E2E-{連番}.spec.ts
```

**例**:
- `tests/e2e/login/E2E-001.spec.ts` - ログイン・ダッシュボード表示(正常系)
- `tests/e2e/login/E2E-002.spec.ts` - ログアウトとセッション無効化(正常系)
- `tests/e2e/login/E2E-003.spec.ts` - ログイン失敗(異常系)

---

### ステップ3: テスト実装の必須パターン

#### ✅ 正しい実装パターン

```typescript
import { test, expect } from '@playwright/test';

/**
 * ログイン・ダッシュボード表示(正常系)
 *
 * 登録済みユーザーがログインし、ダッシュボードに遷移することを確認。
 *
 * Scenario ID: E2E-001
 * Category: normal
 */

// ヘルパー関数（内部操作も test.step でラップ）
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

test.describe('E2E-001: ログイン・ダッシュボード表示(正常系)', () => {
  test('登録済みユーザーがログインし、ダッシュボードに遷移することを確認。', async ({ page }) => {
    await test.step('ログイン画面にアクセス', async () => {
      await page.goto('/login');
      await page.waitForLoadState('networkidle');
    });

    await test.step('メールアドレスを入力', async () => {
      await page.fill('input[name="email"]', 'test@example.com');
    });

    await test.step('パスワードを入力', async () => {
      await page.fill('input[name="password"]', 'Password123!');
    });

    await test.step('ログインボタンをクリック', async () => {
      await page.click('button[type="submit"]');
    });

    await test.step('ダッシュボードに遷移することを確認', async () => {
      await page.waitForURL('/dashboard');
      await expect(page).toHaveURL('/dashboard');
    });

    // ✅ ヘルパー関数も必ず test.step でラップ
    await test.step('視覚的検証: ページスタイルが適用されているか確認', async () => {
      await verifyPageStyling(page);
    });
  });
});
```

#### ❌ 間違った実装パターン

```typescript
test('ログイン機能のテスト', async ({ page }) => {
  // ❌ 英語のステップ名
  await test.step('Access login page', async () => {
    await page.goto('/login');
  });

  // ❌ ヘルパー関数を直接呼び出し（test.stepなし）
  await verifyPageStyling(page);
  // → レポートに英語表示: "Wait for selector", "Expect toBeVisible"
});
```

---

### ステップ4: テスト実行と検証

```bash
# E2Eテスト実行
npm run test:e2e

# レポート表示
npm run test:e2e:show
```

**レポート確認項目**:
1. ✅ すべてのステップが日本語で表示されているか
2. ❌ 英語の自動生成メッセージ（"Wait for selector", "Expect toBeVisible"など）がないか

**英語表示が含まれている場合**:
- 該当の操作を `test.step` でラップしていない可能性
- `dev-kit/docs/e2e-test-guidelines.md` を再確認

---

## 📋 実装チェックリスト

新しいE2Eテストを作成する際は、以下を確認：

- [ ] `dev-kit/docs/e2e-test-guidelines.md` を読んだ
- [ ] ファイル名は `E2E-{連番}.spec.ts` 形式
- [ ] すべての操作が `test.step` でラップされている
- [ ] すべてのステップ名が日本語で記載されている
- [ ] ヘルパー関数の呼び出しも `test.step` でラップされている
- [ ] 視覚的検証（`verifyPageStyling`）が実装されている
- [ ] 視覚的検証も `test.step` でラップされている
- [ ] コメントにシナリオID（`E2E-{連番}`）とカテゴリ（`normal` or `error`）が記載されている
- [ ] Playwrightレポートで英語表示がゼロであることを確認

---

## 🚨 よくある間違い

### 間違い1: ヘルパー関数を直接呼び出し

```typescript
// ❌ ダメな例1: ヘルパー関数を直接呼び出し
await verifyPageStyling(page);
// → レポートに英語表示が出る

// ❌ ダメな例2: ヘルパー関数の呼び出しはラップしたが、内部操作はラップしていない
async function verifyPageStyling(page, mainSelector = '#app > *') {
  await page.waitForSelector(mainSelector, { timeout: 10000 });  // 英語表示
  const mainContent = page.locator(mainSelector);
  await expect(mainContent).toBeVisible();  // 英語表示
}

// ✅ 正しい例: 呼び出しと内部操作の両方をラップ
async function verifyPageStyling(page, mainSelector = '#app > *') {
  await test.step('Reactアプリのマウント完了を待つ', async () => {
    await page.waitForSelector(mainSelector, { timeout: 10000 });
  });

  await test.step('メインコンテンツが表示されていることを確認', async () => {
    const mainContent = page.locator(mainSelector);
    await expect(mainContent).toBeVisible();
  });
}

// 使用時も test.step でラップ
await test.step('視覚的検証: ページスタイルが適用されているか確認', async () => {
  await verifyPageStyling(page);
});
```

### 間違い2: 英語のステップ名

```typescript
// ❌ ダメな例
await test.step('Fill email address', async () => {
  await page.fill('input[name="email"]', 'test@example.com');
});

// ✅ 正しい例
await test.step('メールアドレスを入力', async () => {
  await page.fill('input[name="email"]', 'test@example.com');
});
```

### 間違い3: 画面ベースのファイル命名

```typescript
// ❌ ダメな例: Login.spec.ts, Dashboard.spec.ts

// ✅ 正しい例: E2E-001.spec.ts, E2E-002.spec.ts
```

---

## 📊 完了確認

**完了条件**:
- ✅ すべてのE2Eテストが100%パス
- ✅ Playwrightレポートが完全に日本語化
- ✅ 英語の自動生成メッセージがゼロ
- ✅ 視覚的検証が全テストに実装

**次のステップ**:
- PHPUnitテストが未実施の場合 → backend-test-manager
- すべてのテストが完了している場合 → quality-assurance

---

## 📚 参考ドキュメント

**必読**:
- **`dev-kit/docs/e2e-test-guidelines.md`** - E2Eテスト作成ガイドライン

**その他**:
- `dev-kit/docs/workflow.md` - 全体ワークフロー
- `dev-kit/docs/architecture/testing.md` - テスト戦略
- `playwright.config.ts` - Playwright設定

---

**最終更新日**: 2025-11-10
**重要な変更**: Playwrightレポート日本語化ガイドライン追加、test.stepラップ必須化
