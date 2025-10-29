# Validation Scripts

このディレクトリには、プロジェクトのリリース前に実行する検証スクリプトが含まれています。

## スクリプト一覧

### メインゲート

#### `release-gate.sh`
**全ゲートを統合実行するメインスクリプト**

```bash
./dev-kit/scripts/validations/release-gate.sh
```

**実行内容**:
- Gate 0: 仕様書→テスト実装整合性チェック
- Gate 1: ルーティング整合性チェック
- Gate 2: Props整合性チェック
- Gate 3: バリデーションルール整合性
- Gate 4: フロントエンド検証（frontend.sh）
- Gate 5: 任意項目バリデーション
- Gate 6: PHPUnit全テスト実行
- Gate 7: フロントエンドビルド確認
- Gate 8: フォームバリデーションエラー表示検証

**リリース判定**: 全ゲート合格でリリース可能

---

### 個別検証スクリプト

#### `frontend.sh`
**フロントエンド全体の静的検証**

```bash
./dev-kit/scripts/validations/frontend.sh
```

**検証内容**:
- Phase 1: 構文チェック（ESLint）
- Phase 2: TypeScript型チェック
- Phase 3: import文の整合性
- Phase 4: useDynamicValidation使用チェック
- Phase 5: 未使用変数検出
- Phase 6: テストコード品質チェック
- Phase 7: UIテンプレート厳密検証
  - 7-1: テンプレートインポート確認
  - 7-2: 禁止パターン検出（インラインスタイル）
  - 7-3: return文の構造チェック
  - 7-4: Props完全性チェック
  - 7-4-SP: SPレイアウト検証
- Phase 8: バリデーションロジック検証

**用途**: フロントエンド実装後の品質確認

---

#### `backend.sh`
**バックエンド全体の静的検証**

```bash
./dev-kit/scripts/validations/backend.sh
```

**検証内容**:
- Phase 1: PHP構文チェック
- Phase 2: Clean Architecture準拠チェック
- Phase 3: バリデーションルールチェック
- Phase 4: リポジトリパターンチェック
- Phase 5: 日本語バリデーションメッセージチェック
- Phase 6: データベースマイグレーション整合性

**用途**: バックエンド実装後の品質確認

---

#### `spec-test.sh`
**仕様書とテスト実装の整合性検証（汎用）**

```bash
./dev-kit/scripts/validations/spec-test.sh <spec-name>
```

**検証内容**:
- playwright-flows.yaml 存在確認
- 定義フロー数と実装テスト数の比較
- 各フローIDに対応するテスト実装確認
- 異常系フローの実装確認
- バリデーションエラー表示テスト確認

**用途**:
- 仕様書に定義された全フローがテスト実装されているか確認
- 新規機能実装時のテスト漏れ検出

**汎用性**: 全spec（user-authentication, video-management等）で使用可能

**ドキュメント**: `dev-kit/docs/validations/SPEC_TO_TEST_VALIDATOR_GUIDE.md`

---

#### `form-error.sh`
**全フォームのバリデーションエラー表示検証（汎用）**

```bash
./dev-kit/scripts/validations/form-error.sh
```

**検証内容**:
- Step 1: フォームページの自動検出（useDynamicValidation使用ページ）
- Step 2: バリデーションルール抽出
- Step 3: バリデーションエラー表示要素の確認
- Step 4: 各フィールドのエラー表示確認
- Step 5: フォーム送信前のバリデーション実行確認
- Step 6: playwright-flows.yamlとの整合性確認

**用途**:
- 全フォームで異常系バリデーションエラーが表示されることを確認
- 「パスワード不一致エラーが出ない」「利用規約同意なしでエラーでない」等の再発防止

**汎用性**:
- 全フォームページを自動検出
- 新規フォーム追加時も自動的に検証対象になる
- SignupPage, LoginPageだけでなく、今後追加される全フォームに対応

**ドキュメント**: `dev-kit/docs/validations/VALIDATION_ERROR_DISPLAY_PREVENTION.md`

---

## ディレクトリ構成

```
dev-kit/scripts/validations/
├── README.md           # このファイル
├── release-gate.sh     # メインゲート
├── frontend.sh         # フロントエンド検証
├── backend.sh          # バックエンド検証
├── spec-test.sh        # 仕様書→テスト整合性検証（汎用）
└── form-error.sh       # フォームエラー表示検証（汎用）
```

## ドキュメント

関連ドキュメントは `dev-kit/docs/validations/` に配置:

```
dev-kit/docs/validations/
├── SPEC_TO_TEST_VALIDATOR_GUIDE.md              # 仕様書→テスト整合性検証ガイド
├── VALIDATION_ERROR_DISPLAY_PREVENTION.md       # バリデーションエラー表示再発防止ガイド
└── dashboard-sp-layout-checklist.md             # SPレイアウト検証チェックリスト
```

## 実行タイミング

### リリース前（必須）
```bash
./dev-kit/scripts/validations/release-gate.sh
```
全ゲート合格でリリース可能

### 開発中（推奨）

**フロントエンド実装後**:
```bash
./dev-kit/scripts/validations/frontend.sh
```

**バックエンド実装後**:
```bash
./dev-kit/scripts/validations/backend.sh
```

**仕様書作成後**:
```bash
./dev-kit/scripts/validations/spec-to-test-validator.sh <spec-name>
```

**フォーム実装後**:
```bash
./dev-kit/scripts/validations/form-validation-error-display-validator.sh
```

## 汎用性の原則

このディレクトリのスクリプトは**汎用的**に設計されています:

✅ **汎用的（Good）**:
- 全フォームを自動検出して検証
- 全specに対応
- 設定ファイル（playwright-flows.yaml等）から自動的にテスト対象を抽出

❌ **機能特化（Bad）**:
- SignupPage専用のテスト
- Dashboard専用のテスト
- 特定フィールド名にハードコード

**機能特化のテストは、各spec配下のtests/ディレクトリに配置してください**:
```
dev-kit/docs/specs/user-authentication/tests/
└── (機能特化のPlaywrightテスト)
```

## CI/CD統合

```yaml
# .github/workflows/release-gate.yml
jobs:
  release-gate:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - name: Run Release Gate
        run: ./dev-kit/scripts/validations/release-gate.sh
```

## トラブルシューティング

### エラー: 検証失敗

各スクリプトはログファイルを生成します:
```
logs/release-gate-YYYYMMDD-HHMMSS.log
logs/frontend-YYYYMMDD-HHMMSS.log
logs/backend-YYYYMMDD-HHMMSS.log
logs/spec-to-test-validator-YYYYMMDD-HHMMSS.log
logs/form-validation-error-display-YYYYMMDD-HHMMSS.log
```

ログファイルで詳細なエラー内容を確認してください。

### 個別実行で問題を特定

全ゲート失敗時は、個別スクリプトで問題箇所を特定:

1. `frontend.sh` 実行
2. `backend.sh` 実行
3. `spec-to-test-validator.sh` 実行
4. `form-validation-error-display-validator.sh` 実行

問題が特定されたら、該当箇所を修正して再実行。

## まとめ

- **release-gate.sh**: リリース前に必ず実行（全ゲート統合）
- **frontend.sh / backend.sh**: 開発中の品質確認
- **spec-to-test-validator.sh**: 仕様書→テスト整合性確認（汎用）
- **form-validation-error-display-validator.sh**: 全フォームバリデーション確認（汎用）

**全スクリプトは汎用的に設計されており、新規機能追加時も追加設定なしで動作します。**
