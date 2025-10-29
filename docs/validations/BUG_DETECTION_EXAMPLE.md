# バグ検知例: form-validation-error-display-validator.sh

## 検知対象のバグ

以下のようなバグを**自動検知**します:

1. **パスワード不一致のエラーがでない**
2. **利用規約同意なしでエラーでない**

## 検知の仕組み

### Step 1: フォームページの自動検出

```bash
# useDynamicValidation を使用しているページを自動検出
FORM_PAGES=$(find resources/js/Pages -name "*.tsx" | xargs grep -l "useDynamicValidation")
```

**検出例**:
- `resources/js/Pages/Auth/SignupPage.tsx`
- `resources/js/Pages/Auth/LoginPage.tsx`

---

### Step 2: バリデーションルール抽出

```bash
# SignupPage.tsx から抽出されるフィールド
validation_fields:
  - name
  - email
  - phone
  - password
  - password_confirmation  # ← パスワード不一致検証対象
  - terms_agreed           # ← 利用規約同意検証対象
```

---

### Step 3: エラー表示要素の確認

**✅ 正しい実装**:
```typescript
// SignupPage.tsx
const displayErrors = {
  password: errors?.password || validation.errors.password,
  passwordConfirm: errors?.password_confirmation || validation.errors.password_confirmation,
  agreeToTerms: errors?.terms_agreed || validation.errors.terms_agreed,
};

<SignupPageTemplate
  errors={displayErrors}  // ← errorsをテンプレートに渡している
/>
```

**検証ロジック**:
```bash
# テンプレート使用時: errors props が渡されているか
if grep -q "errors=" "$page_file"; then
    success "テンプレートに errors props を渡しています"
else
    error "errors props が渡されていません"
    # → バグ検知！
fi

# validation.errors の使用確認
if grep -q "validation\.errors\." "$page_file"; then
    success "validation.errors を使用しています"
else
    error "validation.errors が使用されていません"
    # → バグ検知！
fi
```

---

### Step 4: 各フィールドのエラー表示確認

**✅ 正しい実装**:
```typescript
const displayErrors = {
  passwordConfirm: errors?.password_confirmation || validation.errors.password_confirmation,
  agreeToTerms: errors?.terms_agreed || validation.errors.terms_agreed,
};
```

**検証ロジック**:
```bash
# password_confirmation フィールド
if grep -q "validation\.errors\.password_confirmation" "$page_file"; then
    success "password_confirmation - エラー表示実装済み"
else
    error "password_confirmation - エラー表示が実装されていません"
    # → 「パスワード不一致のエラーがでない」バグ検知！
fi

# terms_agreed フィールド
if grep -q "validation\.errors\.terms_agreed" "$page_file"; then
    success "terms_agreed - エラー表示実装済み"
else
    error "terms_agreed - エラー表示が実装されていません"
    # → 「利用規約同意なしでエラーでない」バグ検知！
fi
```

---

### Step 6: playwright-flows.yaml との整合性確認

**✅ 正しい定義**:
```yaml
# dev-kit/docs/specs/user-authentication/tests/playwright-flows.yaml

flows:
  - id: FLOW-006
    name: "フォームバリデーション"
    type: error  # ← 異常系フロー
    steps:
      - action: assert_text
        selector: ".form-error"  # ← バリデーションエラー表示確認
        expected_contains: "必須です"
```

**検証ロジック**:
```bash
# 異常系フローの存在確認
error_flow_count=$(grep -c "type: error" playwright-flows.yaml)
if [ "$error_flow_count" -eq 0 ]; then
    error "異常系フロー（type: error）が定義されていません"
    # → E2Eテストで異常系を確認していない！バグ検知！
fi

# .form-error アサーションの存在確認
form_error_assertions=$(grep -c "\.form-error" playwright-flows.yaml)
if [ "$form_error_assertions" -eq 0 ]; then
    error ".form-error のアサーションが定義されていません"
    # → UIでエラー表示を確認していない！バグ検知！
fi
```

---

## バグ検知の実例

### ケース1: エラー表示ロジックが欠落

**❌ バグのあるコード**:
```typescript
// SignupPage.tsx
const validation = useDynamicValidation({
  password_confirmation: [
    {
      type: 'custom',
      validator: (value: any) => value === formData.password,
      message: 'パスワードが一致しません',
    },
  ],
  terms_agreed: [
    {
      type: 'required',
      message: '利用規約に同意してください',
    },
  ],
});

// ❌ エラーを表示していない
<SignupPageTemplate
  // errors prop を渡していない！
/>
```

**検知結果**:
```
❌ ERROR: SignupPage - テンプレートに errors props が渡されていません
   → バリデーションエラーがUIに表示されません
```

---

### ケース2: 一部フィールドのエラー表示が欠落

**❌ バグのあるコード**:
```typescript
const displayErrors = {
  name: errors?.name || validation.errors.name,
  email: errors?.email || validation.errors.email,
  password: errors?.password || validation.errors.password,
  // ❌ password_confirmation のエラー表示がない！
  // ❌ terms_agreed のエラー表示がない！
};

<SignupPageTemplate
  errors={displayErrors}
/>
```

**検知結果**:
```
❌ password_confirmation - エラー表示が実装されていません
   → validation.errors.password_confirmation をUIに表示してください

❌ terms_agreed - エラー表示が実装されていません
   → validation.errors.terms_agreed をUIに表示してください
```

---

### ケース3: playwright-flows.yamlに異常系フローがない

**❌ バグのある定義**:
```yaml
# playwright-flows.yaml

flows:
  - id: FLOW-001
    name: "ユーザー登録"
    type: normal  # ← 正常系のみ
    steps:
      - action: type
        selector: "input[name='password']"
        value: "password123"
      - action: type
        selector: "input[name='password_confirmation']"
        value: "password123"  # ← 一致する場合のみテスト
      - action: click
        selector: "button[type='submit']"
      - action: assert_url
        expected: "/signup/confirm"

  # ❌ 異常系フロー（type: error）が定義されていない！
```

**検知結果**:
```
❌ ERROR: user-authentication - 異常系フロー（type: error）が定義されていません
   → フォームバリデーションエラー表示のE2Eテストが必要です

❌ ERROR: user-authentication - .form-error のアサーションが定義されていません
   → バリデーションエラー表示を確認するステップを追加してください
```

---

## 検知できるバグパターン

| バグパターン | 検知方法 | 検知ステップ |
|-------------|---------|------------|
| エラー表示ロジックが完全に欠落 | `errors=` の存在確認 | Step 3 |
| 一部フィールドのエラー表示欠落 | `validation.errors.{field}` の存在確認 | Step 4 |
| validation.errors を使用していない | `validation\.errors\.` の存在確認 | Step 3 |
| E2Eテストで異常系を確認していない | `type: error` の存在確認 | Step 6 |
| E2Eテストでエラー表示を確認していない | `.form-error` アサーションの存在確認 | Step 6 |

---

## 汎用性

このスクリプトは**全フォーム**に対して動作します:

✅ **自動検出**:
- `useDynamicValidation` を使用している全ページを自動検出
- 新規フォーム追加時も自動的に検証対象になる

✅ **自動抽出**:
- 各フォームのバリデーションフィールドを自動抽出
- フィールド名にハードコードしていない

✅ **テンプレート対応**:
- ui-componentsテンプレート使用/未使用を自動判定
- テンプレートごとに適切な検証方法を選択

---

## 実行例

```bash
$ ./dev-kit/scripts/validations/form-validation-error-display-validator.sh

[2025-10-28 22:39:24] ==============================================
[2025-10-28 22:39:24] フォームバリデーションエラー表示検証開始
[2025-10-28 22:39:24] ==============================================

[2025-10-28 22:39:24] Step 1: フォームページの検出
[2025-10-28 22:39:24] ------------------------------------------
[2025-10-28 22:39:24] 検出: LoginPage.tsx
[2025-10-28 22:39:24] 検出: SignupPage.tsx
[2025-10-28 22:39:24] 検出されたフォームページ数: 2

[2025-10-28 22:39:24] Step 2: バリデーションルール抽出
[2025-10-28 22:39:24] ------------------------------------------
[2025-10-28 22:39:24] 解析中: SignupPage
[2025-10-28 22:39:24]   → 6 個のバリデーションフィールドを検出

[2025-10-28 22:39:24] Step 4: 各フィールドのエラー表示確認
[2025-10-28 22:39:24] ------------------------------------------
[2025-10-28 22:39:24] 確認中: SignupPage
[2025-10-28 22:39:24]   ✅ password_confirmation - エラー表示実装済み
[2025-10-28 22:39:24]   ✅ terms_agreed - エラー表示実装済み

[2025-10-28 22:39:24] Step 6: playwright-flows.yaml との整合性確認
[2025-10-28 22:39:24] ------------------------------------------
[2025-10-28 22:39:24] 確認中: user-authentication
[2025-10-28 22:39:24] ✅   → 6 件の異常系フローが定義されています
[2025-10-28 22:39:24] ✅   → .form-error のアサーション定義済み

[2025-10-28 22:39:24] ==============================================
[2025-10-28 22:39:24] ✅ 全フォームでバリデーションエラー表示が正しく実装されています
[2025-10-28 22:39:24] ==============================================
```

---

## まとめ

**form-validation-error-display-validator.sh は、以下のバグを自動検知します**:

1. **パスワード不一致のエラーがでない**
   - Step 4で `validation.errors.password_confirmation` の使用を確認
   - 使用していなければエラー検知

2. **利用規約同意なしでエラーでない**
   - Step 4で `validation.errors.terms_agreed` の使用を確認
   - 使用していなければエラー検知

3. **E2Eテストで異常系を確認していない**
   - Step 6で `type: error` フローの存在を確認
   - 定義されていなければエラー検知

**汎用的に動作するため、新規フォーム追加時も追加設定なしで自動検知します。**
