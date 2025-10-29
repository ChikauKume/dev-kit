# 仕様書→テスト実装整合性検証ガイド

## 概要

**spec-to-test-validator.sh** は、design.md と playwright-flows.yaml に定義された仕様が、実際のPlaywrightテストとして実装されているかを検証するスクリプトです。

## 問題の背景

### 発生したバグ

- **パスワード不一致エラー**がUIに表示されない
- **利用規約同意エラー**がUIに表示されない

### 真の原因

```yaml
# playwright-flows.yaml に明確に定義されていた
- id: FLOW-006
  name: "フォームバリデーション"
  type: error
  description: "必須項目未入力でバリデーションエラー表示"
  steps:
    - action: assert_text
      selector: ".form-error"
      expected_contains: "必須です"
```

**しかし、対応するPlaywrightテストが実装されていなかった。**

## 検証内容

### Check 1: playwright-flows.yaml 存在確認
仕様書ディレクトリに playwright-flows.yaml が存在するか確認

### Check 2: 定義フロー数と実装テスト数の比較

**検証ロジック**:
```bash
# YAMLに定義されているフロー数
DEFINED_FLOWS=$(grep -c "^  - id: FLOW-" playwright-flows.yaml)
# 例: 11件

# 実装されているテストファイル数
IMPLEMENTED_TESTS=$(find tests/Playwright -name "*.spec.ts" | wc -l)
# 例: 5件

# 判定
if [ $DEFINED_FLOWS -gt $IMPLEMENTED_TESTS ]; then
    error "定義されたフロー数(11)が実装テスト数(5)より多い"
    error "未実装のE2Eテストが存在する可能性があります"
fi
```

**合格条件**: 実装テスト数 ≥ 定義フロー数

### Check 3: 各フローIDに対応するテスト実装確認

**検証ロジック**:
```bash
# YAMLから全フローIDを抽出
FLOW_IDS=$(grep "^  - id: FLOW-" playwright-flows.yaml | sed 's/.*id: //')
# 例: FLOW-001 FLOW-002 FLOW-003 ... FLOW-011

# 各フローIDがテストコードで参照されているか確認
for flow_id in $FLOW_IDS; do
    if grep -r "$flow_id" tests/Playwright > /dev/null 2>&1; then
        success "$flow_id - テスト実装済み"
    else
        error "$flow_id - テスト実装が見つかりません"
    fi
done
```

**合格条件**: 全フローIDがテストコード内で参照されている

### Check 4: 異常系フローの実装確認

**検証ロジック**:
```bash
# YAMLから異常系フロー（type: error）を抽出
ERROR_FLOWS=$(awk '/type: error/ {print prev} {prev=$0}' playwright-flows.yaml | \
              grep "id: FLOW-" | sed 's/.*id: //')
# 例: FLOW-006 FLOW-007 FLOW-008 FLOW-009 FLOW-010 FLOW-011

ERROR_FLOW_COUNT=$(echo "$ERROR_FLOWS" | wc -w)

if [ "$ERROR_FLOW_COUNT" -eq 0 ]; then
    error "異常系フローが1つも定義されていません"
    error "バリデーションエラー表示などの異常系テストが必要です"
fi
```

**合格条件**:
- 異常系フローが1つ以上定義されている
- 全異常系フローがテスト実装されている

### Check 5: バリデーションエラー表示テスト確認

**検証ロジック**:
```bash
# YAMLに ".form-error" アサーションが存在するか
VALIDATION_ERROR_ASSERTIONS=$(grep -c "\.form-error" playwright-flows.yaml)

if [ "$VALIDATION_ERROR_ASSERTIONS" -eq 0 ]; then
    error "playwright-flows.yamlに .form-error のアサーションがありません"
    error "バリデーションエラー表示確認が定義されていません"
fi

# テストコードでも .form-error を検証しているか
if grep -r "\.form-error" tests/Playwright > /dev/null 2>&1; then
    success "テストコードで .form-error の検証が実装されています"
else
    error "テストコードで .form-error の検証が見つかりません"
    error "バリデーションエラー表示テストが未実装の可能性"
fi
```

**合格条件**:
- YAMLに `.form-error` アサーション定義がある
- テストコードで `.form-error` を検証している

## 使い方

### 単体実行

```bash
./dev-kit/scripts/validations/spec-to-test-validator.sh user-authentication
```

### release-gate.sh 経由（推奨）

```bash
./dev-kit/scripts/validations/release-gate.sh
```

Gate 0として自動的に実行されます。

## 実行例

### 成功例

```bash
$ ./dev-kit/scripts/validations/spec-to-test-validator.sh user-authentication

[2025-10-28 15:00:00] ==============================================
[2025-10-28 15:00:00] 仕様書→テスト実装整合性検証開始: user-authentication
[2025-10-28 15:00:00] ==============================================

[2025-10-28 15:00:00] Check 1: playwright-flows.yaml 存在確認
[2025-10-28 15:00:00] ------------------------------------------
[2025-10-28 15:00:00] ✅ playwright-flows.yaml が存在します

[2025-10-28 15:00:00] Check 2: 定義フロー数と実装テスト数の比較
[2025-10-28 15:00:00] ------------------------------------------
[2025-10-28 15:00:00] 定義されているフロー数: 11
[2025-10-28 15:00:00] 実装されているテストファイル数: 11
[2025-10-28 15:00:00] ✅ 定義フロー数と実装テスト数が一致またはテストが十分に存在

[2025-10-28 15:00:00] Check 3: 各フローIDに対応するテスト実装確認
[2025-10-28 15:00:00] ------------------------------------------
[2025-10-28 15:00:00] Checking: FLOW-001
[2025-10-28 15:00:00] ✅ FLOW-001 - テスト実装済み
[2025-10-28 15:00:00] Checking: FLOW-002
[2025-10-28 15:00:00] ✅ FLOW-002 - テスト実装済み
...
[2025-10-28 15:00:00] Checking: FLOW-011
[2025-10-28 15:00:00] ✅ FLOW-011 - テスト実装済み

[2025-10-28 15:00:00] Check 4: 異常系フローの実装確認
[2025-10-28 15:00:00] ------------------------------------------
[2025-10-28 15:00:00] 定義されている異常系フロー数: 6
[2025-10-28 15:00:00] ✅ 異常系フローが定義されています: 6 件
[2025-10-28 15:00:00] ✅ FLOW-006 - 異常系テスト実装済み
...

[2025-10-28 15:00:00] Check 5: バリデーションエラー表示テスト確認
[2025-10-28 15:00:00] ------------------------------------------
[2025-10-28 15:00:00] バリデーションエラー表示アサーション数: 3
[2025-10-28 15:00:00] ✅ バリデーションエラー表示アサーションが定義されています
[2025-10-28 15:00:00] ✅ テストコードで .form-error の検証が実装されています

[2025-10-28 15:00:00] ==============================================
[2025-10-28 15:00:00] 仕様書→テスト実装整合性検証完了
[2025-10-28 15:00:00] ==============================================
[2025-10-28 15:00:00] ✅ 全ての仕様がテストとして実装されています
[2025-10-28 15:00:00] ログファイル: /Users/.../logs/spec-to-test-validator-20251028-150000.log
```

### 失敗例（未実装フロー検出）

```bash
$ ./dev-kit/scripts/validations/spec-to-test-validator.sh user-authentication

[2025-10-28 15:00:00] Check 2: 定義フロー数と実装テスト数の比較
[2025-10-28 15:00:00] ------------------------------------------
[2025-10-28 15:00:00] 定義されているフロー数: 11
[2025-10-28 15:00:00] 実装されているテストファイル数: 5
[2025-10-28 15:00:00] ❌ ERROR: 定義されたフロー数(11)が実装テスト数(5)より多い
[2025-10-28 15:00:00] ❌ ERROR: 未実装のE2Eテストが存在する可能性があります

[2025-10-28 15:00:00] Check 3: 各フローIDに対応するテスト実装確認
[2025-10-28 15:00:00] ------------------------------------------
[2025-10-28 15:00:00] Checking: FLOW-001
[2025-10-28 15:00:00] ✅ FLOW-001 - テスト実装済み
...
[2025-10-28 15:00:00] Checking: FLOW-006
[2025-10-28 15:00:00] ❌ ERROR: FLOW-006 - テスト実装が見つかりません
[2025-10-28 15:00:00] Checking: FLOW-007
[2025-10-28 15:00:00] ❌ ERROR: FLOW-007 - テスト実装が見つかりません
...

[2025-10-28 15:00:00] ==============================================
[2025-10-28 15:00:00] 仕様書→テスト実装整合性検証完了
[2025-10-28 15:00:00] ==============================================
[2025-10-28 15:00:00] ❌ ERROR: 検証失敗: 7 件の問題が見つかりました

未実装のフロー:
  - FLOW-006
  - FLOW-007
  - FLOW-008
  - FLOW-009
  - FLOW-010
  - FLOW-011

[2025-10-28 15:00:00] ログファイル: /Users/.../logs/spec-to-test-validator-20251028-150000.log
```

## トラブルシューティング

### エラー: 定義フロー数が実装テスト数より多い

**原因**: playwright-flows.yamlに定義されているフローの一部が未実装

**解決策**:
1. 未実装のフローIDを確認
2. integration-playwright-tester agentを使用してテスト実装
3. または手動でPlaywrightテストを作成

### エラー: FLOW-XXX - テスト実装が見つかりません

**原因**: 特定のフローIDがテストコード内で参照されていない

**解決策**:
```typescript
// tests/Playwright/user-authentication.spec.ts

test.describe('FLOW-006: フォームバリデーション', () => {
  test('必須項目未入力でバリデーションエラー表示', async ({ page }) => {
    await page.goto('/register');
    await page.click('button[type="submit"]');

    // ❌ エラーメッセージが表示されることを確認
    await page.waitForSelector('.form-error', { timeout: 5000 });

    const errorMessage = await page.locator('.form-error').textContent();
    expect(errorMessage).toContain('必須です');
  });
});
```

テストコード内に `FLOW-006` というコメントまたは文字列を含めてください。

### エラー: 異常系フローが1つも定義されていません

**原因**: playwright-flows.yamlに `type: error` のフローが存在しない

**解決策**:
```yaml
# playwright-flows.yaml

flows:
  # 正常系フロー
  - id: FLOW-001
    name: "ユーザー登録"
    type: normal
    # ...

  # 異常系フロー（必須）
  - id: FLOW-006
    name: "フォームバリデーション"
    type: error  # ← これが必須
    description: "必須項目未入力でバリデーションエラー表示"
    # ...
```

### エラー: バリデーションエラー表示テスト未実装

**原因**: `.form-error` セレクタを使ったアサーションがテストコードに存在しない

**解決策**:
```typescript
// テストコードに追加
await page.waitForSelector('.form-error', { timeout: 5000 });
const errorMessage = await page.locator('.form-error').textContent();
expect(errorMessage).toContain('パスワードが一致しません');
```

## 開発ワークフロー

### 新規機能開発時

1. **design.md作成**
   ```markdown
   ## テスト戦略

   - **E2E統合テスト（4つの主要機能フロー）**:
     - ユーザー登録フロー（正常系）
     - ログインフロー
     - ログアウトフロー
     - エラー表示フロー（異常系）
   ```

2. **playwright-flows.yaml作成**
   ```yaml
   flows:
     - id: FLOW-001
       name: "ユーザー登録"
       type: normal
       # ...

     - id: FLOW-006
       name: "バリデーションエラー表示"
       type: error
       steps:
         - action: assert_text
           selector: ".form-error"
           expected_contains: "必須です"
   ```

3. **Playwrightテスト実装**
   ```typescript
   // tests/Playwright/feature.spec.ts

   test.describe('FLOW-001: ユーザー登録', () => {
     // ...
   });

   test.describe('FLOW-006: バリデーションエラー表示', () => {
     // ...
   });
   ```

4. **spec-to-test-validator.sh実行**
   ```bash
   ./dev-kit/scripts/validations/spec-to-test-validator.sh feature-name
   ```

5. **release-gate.sh実行**
   ```bash
   ./dev-kit/scripts/validations/release-gate.sh
   ```

## まとめ

### 再発防止の仕組み

| 従来 | 改善後 |
|------|--------|
| design.mdに書く | design.mdに書く |
| playwright-flows.yamlに定義 | playwright-flows.yamlに定義 |
| **テスト実装を忘れる** ❌ | **spec-to-test-validator.shで検出** ✅ |
| リリース | Gate 0で即座にブロック |

### 重要な原則

1. **仕様書に書いてある ≠ 実装されている**
2. **YAML定義があっても、テストコード生成を確認**
3. **Gate 0が最優先（テストが存在するか確認）**
4. **異常系フローは必須（バリデーションエラー表示など）**

**このスクリプトにより、「仕様書に定義されているがテスト未実装」というバグパターンを根本的に防げます。**
