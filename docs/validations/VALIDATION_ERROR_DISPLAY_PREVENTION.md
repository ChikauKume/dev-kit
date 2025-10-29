# バリデーションエラー表示バグ再発防止ガイド

## 概要

**パスワード不一致エラー**と**利用規約同意エラー**がUIに表示されないバグを自動検出するための再発防止システム。

## 問題の本質

### バックエンドバリデーション ≠ フロントエンドエラー表示

```typescript
// ❌ この実装の問題
const validation = useDynamicValidation({
  password_confirmation: [
    {
      type: 'custom',
      validator: (value: any) => value === formData.password,
      message: 'パスワードが一致しません',
    },
  ],
});

const handleSubmit = () => {
  if (validation.validateForm()) {
    // submit
  }
  // ❌ validateForm()はfalseを返すが、
  // ❌ validation.errorsは非同期で更新される
  // ❌ UIにエラーが表示されない
};
```

## 再発防止システム

### アーキテクチャ

```
release-gate.sh (全体統合スクリプト)
├── Gate 1: ルーティング整合性
├── Gate 2: Props整合性
├── Gate 3: バリデーションルール整合性
├── Gate 4: UIテンプレート使用チェック (frontend.sh)
├── Gate 5: 任意項目バリデーション
├── Gate 6: PHPUnit
├── Gate 7: フロントエンドビルド
└── Gate 8: バリデーションエラー表示E2Eテスト ★ NEW
    └── validation-error-display-test.sh
        ├── password-mismatch-error-test.js
        └── terms-agreement-error-test.js
```

## 使い方

### 1. 全ゲート実行（推奨）

```bash
./dev-kit/scripts/validations/release-gate.sh
```

リリース前に必ず実行してください。全8ゲートを通過しないとリリース不可。

### 2. バリデーションエラー表示テストのみ実行

```bash
./dev-kit/scripts/validations/validation-error-display-test.sh
```

バリデーション実装後に単体で実行してクイック確認。

## 検証内容

### Test 1: パスワード不一致エラー表示

**テストシナリオ**:
1. 新規登録ページにアクセス
2. 全フィールド入力（パスワードと確認用パスワードを異なる値に）
3. 送信ボタンをクリック

**合格条件**:
- ✅ `.form-error` セレクタが表示される
- ✅ エラーメッセージに「パスワードが一致しません」が含まれる
- ✅ URLが `/signup` のまま（送信ブロック）

**不合格条件**:
- ❌ エラーメッセージが表示されない
- ❌ 5秒待ってもエラーが表示されない
- ❌ フォームが送信される（URL遷移）

### Test 2: 利用規約同意エラー表示

**テストシナリオ**:
1. 新規登録ページにアクセス
2. 全フィールド入力（利用規約チェックボックスはチェックしない）
3. 送信ボタンをクリック

**合格条件**:
- ✅ `.form-error` セレクタが表示される
- ✅ エラーメッセージに「利用規約に同意してください」が含まれる
- ✅ URLが `/signup` のまま（送信ブロック）

**不合格条件**:
- ❌ エラーメッセージが表示されない
- ❌ 5秒待ってもエラーが表示されない
- ❌ フォームが送信される（URL遷移）

## 実行例

### 成功例

```bash
$ ./dev-kit/scripts/validations/validation-error-display-test.sh

[2025-10-28 14:30:00] ==============================================
[2025-10-28 14:30:00] バリデーションエラー表示E2Eテスト開始
[2025-10-28 14:30:00] ==============================================

[2025-10-28 14:30:00] Test 1: パスワード不一致エラー表示確認
[2025-10-28 14:30:00] ------------------------------------------
[2025-10-28 14:30:00] Playwrightテスト実行中...
[2025-10-28 14:30:05] ✅ パスワード不一致エラーが正しく表示される

[2025-10-28 14:30:05] Test 2: 利用規約同意エラー表示確認
[2025-10-28 14:30:05] ------------------------------------------
[2025-10-28 14:30:05] Playwrightテスト実行中...
[2025-10-28 14:30:10] ✅ 利用規約同意エラーが正しく表示される

[2025-10-28 14:30:10] ==============================================
[2025-10-28 14:30:10] バリデーションエラー表示E2Eテスト完了
[2025-10-28 14:30:10] ==============================================
[2025-10-28 14:30:10] ✅ 全てのバリデーションエラー表示テストに合格
[2025-10-28 14:30:10] ログファイル: /Users/.../logs/validation-error-display-test-20251028-143000.log
```

### 失敗例

```bash
$ ./dev-kit/scripts/validations/validation-error-display-test.sh

[2025-10-28 14:30:00] Test 1: パスワード不一致エラー表示確認
[2025-10-28 14:30:00] ------------------------------------------
[2025-10-28 14:30:00] Playwrightテスト実行中...
[2025-10-28 14:30:05] ❌ ERROR: パスワード不一致エラーが表示されません

Running 1 test using 1 worker
  ✓  password-mismatch-error-test.js:12:3 › パスワード不一致時にエラーメッセージが表示される (5010ms)

  1) password-mismatch-error-test.js:12:3 › パスワード不一致時にエラーメッセージが表示される

    Error: Timeout 5000ms exceeded.
    =========================== logs ===========================
    waiting for locator('.form-error')
    ============================================================

[2025-10-28 14:30:05] ❌ ERROR: 検証失敗: 1 件の問題が見つかりました
```

## トラブルシューティング

### エラー: テストスクリプトが見つかりません

**原因**: Playwrightテストファイルが存在しない

**解決策**:
```bash
ls -la dev-kit/scripts/validations/playwright-tests/
# password-mismatch-error-test.js
# terms-agreement-error-test.js
```

これらのファイルが存在することを確認してください。

### エラー: Timeout 5000ms exceeded

**原因**: エラーメッセージが5秒以内に表示されない

**確認事項**:
1. フロントエンドで `useDynamicValidation` が正しく実装されているか
2. バリデーションエラーが `.form-error` クラスを持つ要素に表示されるか
3. `validation.errors.password_confirmation` が正しく設定されているか

### エラー: npx: command not found

**原因**: Node.jsまたはPlaywrightがインストールされていない

**解決策**:
```bash
npm install
npx playwright install
```

## CI/CD統合

### GitHub Actions

```yaml
name: Release Gate

on:
  push:
    branches: [main, develop]
  pull_request:
    branches: [main]

jobs:
  release-gate:
    runs-on: ubuntu-latest

    steps:
      - uses: actions/checkout@v3

      - name: Setup Node.js
        uses: actions/setup-node@v3
        with:
          node-version: '18'

      - name: Install dependencies
        run: |
          npm install
          npx playwright install --with-deps

      - name: Run Release Gate
        run: ./dev-kit/scripts/validations/release-gate.sh
```

## 開発ワークフロー

### 新規フォーム実装時

1. **フォームコンポーネント実装**
   ```typescript
   const validation = useDynamicValidation({
     password_confirmation: [
       {
         type: 'custom',
         validator: (value: any) => value === formData.password,
         message: 'パスワードが一致しません',
       },
     ],
   });
   ```

2. **Playwrightテスト作成**
   ```javascript
   test('パスワード不一致時にエラー表示', async ({ page }) => {
     await page.fill('input[name="password"]', 'password123');
     await page.fill('input[name="password_confirmation"]', 'different456');
     await page.click('button[type="submit"]');
     await page.waitForSelector('.form-error', { timeout: 5000 });
   });
   ```

3. **テスト実行**
   ```bash
   ./dev-kit/scripts/validations/validation-error-display-test.sh
   ```

4. **全ゲート確認**
   ```bash
   ./dev-kit/scripts/validations/release-gate.sh
   ```

## ベストプラクティス

### 1. エラーメッセージは必ず `.form-error` クラスで表示

```typescript
// ✅ 正しい実装
<div className="form-error">
  {validation.errors.password_confirmation}
</div>
```

### 2. バリデーション失敗時は送信をブロック

```typescript
// ✅ 正しい実装
const handleSubmit = () => {
  if (!validation.validateForm()) {
    return; // 送信ブロック
  }
  // submit処理
};
```

### 3. 異常系テストを必ず追加

```javascript
// ✅ 正しいテスト戦略
test.describe('バリデーション', () => {
  test('正常系: 全項目正しく入力', async ({ page }) => { /* ... */ });
  test('異常系: パスワード不一致', async ({ page }) => { /* ... */ });
  test('異常系: 利用規約未同意', async ({ page }) => { /* ... */ });
});
```

## まとめ

### 再発防止の3本柱

1. **スクリプト自動検証**: Gate 8でE2Eテスト実行
2. **異常系テスト追加**: エラー表示シナリオを必ずテスト
3. **CI/CD統合**: 全PRでrelease-gate.sh実行

### 重要な教訓

- バックエンドバリデーションOK ≠ フロントエンドエラー表示OK
- happy pathだけでは不十分、異常系が必須
- 「エラーが発生すること」より「エラーが表示されること」が重要

**このシステムにより、バリデーションエラー表示バグは機械的に検出可能になりました。**
