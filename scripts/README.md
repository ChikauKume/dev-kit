# スクリプト使用ガイド

## 📋 概要

design.md を唯一の真実として、**詳細な問題検出**を行うスクリプトです。

**重要方針**:
- 自動修正よりも**詳細な検出**を重視
- 箇所さえ判明すれば AI が適切に修正できるため
- エラー位置、原因、影響範囲、修正順序を明示

---

## 📂 スクリプト構成

```
scripts/
├── README.md                     - このファイル
├── common/                       - 共通ユーティリティ
│   └── clear-cache.sh           - キャッシュクリア
├── validations/                  - 検証スクリプト
│   ├── backend.sh               - バックエンド検証
│   └── frontend.sh              - フロントエンド検証
└── tests/                        - テスト実行スクリプト（エージェント専用）
    ├── backend.sh
    ├── frontend.sh
    └── integration.sh
```

**合計**: 6スクリプト（common 1 + validations 2 + tests 3）

---

## 🎯 メインスクリプト（用途別）

### 1. `validations/backend.sh` - バックエンド検証専用

**用途**: バックエンド実装の問題を詳細に検出する（修正はしない）

**使用方法**:
```bash
# 全ステップ検証（Step 1-7）
./scripts/validations/backend.sh

# 個別ステップ検証
./scripts/validations/backend.sh 4
```

**検証内容**:
- Step 1: フロントエンド実装（基本検証）
- Step 2: フロントエンド Playwright テスト
- Step 3: バックエンド実装 + **design.md 整合性確認**
- Step 4: バックエンドテスト（最重要）+ **エラー分類**
- Step 5: バックエンド統合テスト
- Step 6: E2E テスト
- Step 7: 総合品質検証 + **セキュリティ要件確認**

**詳細検出機能**:

#### Step 3: design.md 整合性確認
- CRITICAL-005: /register ルート検出（design.md は /signup）
- CRITICAL-006: /password/email ルート検出（design.md は /forgot-password）
- CRITICAL-009: HTMLネイティブバリデーション属性の使用検出（required, type="email"等）
- CRITICAL-011: ServiceProvider 登録漏れ検出
- 警告-001: CSS読込設定の未確認
- 具体的なファイル位置と修正方法を提示

#### Step 4: バックエンドテストエラー分類
失敗テストがある場合、以下を自動分類:
- CRITICAL-002: UserData DTO null ID エラー
  - 影響件数表示
  - 具体的ファイル位置（例: `app/Modules/User/Application/DTOs/UserData.php:35`）
  - 原因と推奨修正方法
- CRITICAL-003: パスワードハッシュ設定エラー
  - 影響件数表示
  - 具体的ファイル位置と推奨修正
- CRITICAL-004: バリデーションメッセージ言語混在
  - 影響件数表示
  - 具体的修正コード例を提示
- CRITICAL-013: ValidationException 握りつぶし検出
  - UseCase層での catch (ValidationException) で throw していない箇所を検出
- 警告-002: @test コメント不足検出
- その他のエラーパターン
  - UnknownTypeException 等の検出

#### Step 7: セキュリティ要件確認
- CRITICAL-007: Rate Limiting 未実装検出
  - 実装方法の具体的提示
- CRITICAL-008: エラーページ ui-components 未使用検出
  - 具体的修正方法を提示
- CRITICAL-014: バリデーションメッセージ末尾ピリオド不足
  - 日本語メッセージの末尾に「。」がない箇所を検出
- CRITICAL-015: failed_login_attempts テーブル未作成検出
  - ログイン失敗記録テーブルのマイグレーション確認
- CRITICAL-016: ユーザー列挙攻撃対策メッセージ統一確認（警告）
  - ログイン失敗時のエラーメッセージ統一チェック
- CRITICAL-017: パスワードハッシュアルゴリズム確認
  - config/hashing.php で bcrypt 設定確認
- CRITICAL-018: CSRF対策確認
  - 認証ルートが VerifyCsrfToken の $except に含まれていないか確認
- 警告-004: PHPStan 静的解析実行
  - 型エラー・コード品質の自動検出

**修正優先順位の提示**:
```
1️⃣  CRITICAL-002 (UserData DTO null ID) を修正
   → 修正後に合格見込み: 約 XX 件のテスト

2️⃣  CRITICAL-003 (パスワードハッシュ設定) を修正
   → 修正後に合格見込み: 約 XX 件のテスト

3️⃣  CRITICAL-004 (バリデーションメッセージ) を修正
   → 修正後に合格見込み: 約 XX 件のテスト
```

**終了コード**:
- `0`: 合格（100/100スコア）
- `1`: 不合格（100未満）

---

### 2. `./dev-kit/scripts/validations/frontend.sh` - フロントエンド検証専用

**用途**: フロントエンド実装の詳細検証（CLAUDE.md 準拠）

**使用方法**:
```bash
./dev-kit/scripts/validations/frontend.sh
```

**実際に実行されるスクリプト**: `scripts/validations/frontend.sh`

**検証内容（7フェーズ）**:

**Phase 1: useDynamicForm 使用検証**
- ❌ `form.setField` 使用検出（存在しないメソッド）
- ❌ `form.data` 使用検出（正しくは `form.formData`）
- ❌ Inertia `useForm` 使用検出（正しくは `useDynamicForm`）
- ⚠️ `validateField(field, value)` 2引数検出（推奨: `handleBlur(field)`）
- ⚠️ `setData()` 使用検出（Inertia メソッド）
- ❌ **CRITICAL-010**: `useDynamicValidation` 未使用検出
- ❌ **CRITICAL-019**: `form.submit()` の直接呼び出し検出

**Phase 2: TypeScript コンパイルチェック**
- TypeScript エラー検出（resources/js 配下）
- ⚠️ **警告-005**: `any` 型の使用検出

**Phase 3: 禁止パターンチェック**
- ❌ シンボリックリンク検出（ui-components へのリンク禁止）
- ⚠️ 独自 UI コンポーネント検出（推奨しない）
- ⚠️ インタラクティブ HTML 要素の直接使用検出
- ⚠️ `hideNavigation={false}` または未設定検出
- ❌ ui-components ディレクトリの直接編集検出
- ⚠️ CSS 読込設定チェック（app.tsx）
- ⚠️ デモ UI 用 props 使用検出（categories, viewMode 等）
- ❌ **CRITICAL-020**: HTMLネイティブバリデーション属性検出（required, type="email"等）
- ⚠️ **警告-006**: console.log 残存検出
- ❌ **CRITICAL-021**: window.location.href 直接使用検出

**Phase 4: Tailwind CSS 残存チェック**
- ❌ Tailwind CSS 残存検出（package.json, resources/css/）
- ❌ **CRITICAL-022**: className に Tailwind クラス名検出（flex, grid, bg-等）

**Phase 5: 推奨パターン使用状況**
- useDynamicForm 使用統計（インポート、handleChange、handleBlur、formData）
- hideNavigation={true} 使用統計
- ui-components テンプレートインポート統計

**Phase 6: バックエンドテスト要件チェック（任意）**
- ⚠️ テストメソッド名に日本語使用検出
- ⚠️ `@test` コメント不足検出
- ❌ テストスキップ使用検出（markTestSkipped, @skip）

**Phase 7: バリデーションロジック検証（新規追加）**
- ❌ **CRITICAL-023**: FormPage 使用時の validationRules 未定義検出
- ⚠️ **警告-007**: バリデーションメッセージのハードコード検出

**終了コード**:
- `0`: 合格または警告のみ
- `1`: CRITICAL ERROR あり

---

### 3. `common/clear-cache.sh` - キャッシュクリア

**用途**: テスト・検証実行前のキャッシュクリア（必須）

**使用方法**:
```bash
./scripts/common/clear-cache.sh
```

**実行内容**:
```bash
./vendor/bin/sail artisan route:clear
./vendor/bin/sail artisan config:clear
./vendor/bin/sail artisan cache:clear
./vendor/bin/sail artisan view:clear
```

**重要**: 全てのテスト・検証の前に必ず実行すること（CLAUDE.md に記載）

---

## 🚀 推奨ワークフロー

### パターン1: フロントエンド実装後
```bash
# 1. フロントエンド実装完了

# 2. フロントエンド検証
./dev-kit/scripts/validations/frontend.sh

# 3. エラーがあれば修正
#    → 表示されたエラーメッセージに従って修正

# 4. 再検証
./dev-kit/scripts/validations/frontend.sh

# 5. 全てPASSまで繰り返し
```

### パターン2: バックエンド実装後
```bash
# 1. バックエンド実装完了

# 2. キャッシュクリア（必須）
./scripts/common/clear-cache.sh

# 3. バックエンド検証
./scripts/validations/backend.sh

# 4. エラー分類結果を確認
#    → 表示された順番で AI に修正依頼

# 5. 修正完了後に再検証
./scripts/validations/backend.sh

# 6. 100/100 になるまで繰り返し
```

### パターン3: 全体検証（リリース前）
```bash
# 1. キャッシュクリア
./scripts/common/clear-cache.sh

# 2. フロントエンド検証
./dev-kit/scripts/validations/frontend.sh

# 3. バックエンド全体検証
./scripts/validations/backend.sh

# 4. 両方とも合格するまで修正・再検証
```

---

## 📊 検出例

### validate.sh - Step 4 実行時の出力例:
```
========================================
エラー原因の詳細分析
========================================

🔴 CRITICAL-002: UserData DTO null ID エラー (25件検出)
   📁 場所: app/Modules/User/Application/DTOs/UserData.php:35
   🔍 原因: User Entity の ID が null のまま UserData DTO に渡されている
   💥 影響範囲: LoginUserTest, CreateUserUseCaseTest など複数のテスト
   ✅ 推奨修正:
      1. UserData::fromEntity() で null ID をチェック
      2. User Entity 生成時に ID を必ず設定
      3. または DTO 側で null 許容にして呼び出し側で判定

🔴 CRITICAL-004: バリデーションメッセージ言語混在 (15件検出)
   📁 場所: lang/ja/validation.php (不完全な日本語化)
   🔍 原因: Laravel デフォルトの英語メッセージが残存している
   💥 影響範囲: PasswordResetControllerTest, AuthControllerTest など
   ✅ 推奨修正:
      1. lang/ja/validation.php に 'max.string' の翻訳を追加
         'max' => ['string' => ':attributeは:max文字以内で入力してください。']
      2. config/app.php で locale='ja', fallback_locale='ja' を確認
      3. FormRequest で attributes() メソッドを実装

========================================
推奨される修正順序（影響度順）
========================================
1️⃣  CRITICAL-002 (UserData DTO null ID) を修正
   → 修正後に合格見込み: 約 25 件のテスト

2️⃣  CRITICAL-004 (バリデーションメッセージ) を修正
   → 修正後に合格見込み: 約 15 件のテスト

📊 修正完了後の期待値:
   現在: 98/170 合格 (57%)
   目標: 170/170 合格 (100%)
```

### ./dev-kit/scripts/validations/frontend.sh 実行時の出力例:
```
【Phase 1】useDynamicForm使用検証
--------------------------------------------------
✅ PASS: form.setField は使用されていません
❌ CRITICAL ERROR: form.data が使用されています
   正しくは: form.formData
   参照: CLAUDE.md セクション2.2.1

   resources/js/Pages/Auth/Login.tsx:25:  const email = form.data.email;

【Phase 2】TypeScriptコンパイルチェック
--------------------------------------------------
✅ PASS: TypeScriptコンパイルエラーなし（resources/js配下）

【Phase 4】Tailwind CSS残存チェック
--------------------------------------------------
✅ PASS: Tailwind CSSは削除されています

================================================
📊 検証結果サマリー
================================================

❌ 1 件のCRITICAL ERRORが検出されました

【修正方法】
  1. 上記のエラーメッセージを確認
  2. CLAUDE.md セクション2 を参照
  3. dev-kit/ui-components/src/hooks/README.md を参照

【よくあるエラーと修正方法】

  ❌ form.setField → ✅ form.handleChange
  ❌ form.data.xxx → ✅ form.formData.xxx
  ❌ form.validateField(field, value) → ✅ form.handleBlur(field)
```

---

## 🎯 最終目標

### バックエンド検証:
```bash
./scripts/validations/backend.sh
```

の出力が以下になること:

```
✅ 全ステップ合格 - リリース可能
総合スコア: 100/100
```

### フロントエンド検証:
```bash
./dev-kit/scripts/validations/frontend.sh
```

の出力が以下になること:

```
✅ 全てのチェックに合格しました！
```

**これ以外の結果は全て「未完成」です。**

---

## 📁 tests/ フォルダ（エージェント専用）

以下のスクリプトはエージェントが自動的に使用します（手動実行不要）:

| スクリプト | 用途 | 呼び出し元 |
|-----------|------|----------|
| `tests/frontend.sh` | フロントエンドUI単体テスト | frontend-playwright-tester エージェント |
| `tests/backend.sh` | バックエンド統合テスト | backend-playwright-tester エージェント |
| `tests/integration.sh` | E2E統合テスト | integration-playwright-tester エージェント |

---

## 🔄 削除・移動されたスクリプト

以下のスクリプトは「自動修正よりも詳細検出が重要」という方針のもと削除されました:

**統合・削除されたスクリプト**:
- ~~`fix.sh`~~ - 自動修正機能（削除）
  - 理由: 箇所さえ判明すれば AI が対応できるため、検出に注力する方が効率的
- ~~`validate-design-compliance.sh`~~ - validate.sh Step 3/5 に統合
- ~~`validate-test-requirements.sh`~~ - validate.sh Step 4 に統合
- ~~`validate-ui-components.sh`~~ - validate-frontend.sh に統合済み
- ~~`validate-dynamic-form-usage.sh`~~ - validate-frontend.sh に統合済み
- ~~`verify-step-completion.sh`~~ - validate.sh に統合
- ~~`verify-all-steps.sh`~~ - validate.sh に統合
- ~~`fix-route-mismatch.sh`~~ - validate.sh の検出機能に置き換え

**リネーム・移動**:
- ~~`pre-commit-frontend-check.sh`~~ → `validations/frontend.sh`（リネーム + 移動）
- ~~`validate.sh`~~ → `validations/backend.sh`（リネーム + 移動）
- ~~`clear-cache.sh`~~ → `common/clear-cache.sh`（移動）
- ~~`run-backend-playwright-tests.sh`~~ → `tests/backend.sh`（リネーム + 移動）
- ~~`run-frontend-playwright-tests.sh`~~ → `tests/frontend.sh`（リネーム + 移動）
- ~~`run-integration-playwright-tests.sh`~~ → `tests/integration.sh`（リネーム + 移動）

---

## 📖 関連ドキュメント

- **CLAUDE.md** - AI 開発指示書（コマンド実行ベース）
- **dev-kit/ui-components/src/hooks/README.md** - useDynamicForm 完全ガイド
- **dev-kit/ui-components/LARAVEL_INTEGRATION_GUIDE.md** - UI統合ガイド
- **dev-kit/docs/architecture/tech.md** - 技術スタック詳細

---

**最終更新**: 2025-10-28
**作成者**: Claude AI（品質保証チーム）
**方針**: Detection over Correction（検出重視）
**スクリプト構成**:
- `common/`: 1個（共通ユーティリティ）
- `validations/`: 2個（検証スクリプト）
- `tests/`: 3個（テスト実行スクリプト）
- **合計**: 6個
