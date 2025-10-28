# プロジェクト開発ガイドライン

## プロジェクト概要

このプロジェクトはReact + TypeScriptベースのUIコンポーネントライブラリです。ネイビーテーマの一貫したデザインシステムと200個以上のSVGアイコンを提供します。

## 技術スタック

- **React**: 18.2.0
- **TypeScript**: 5.6.3
- **React Router**: 6.8.1（SPA routing）
- **Vite**: 5.4.20（ビルドツール）
- **CSS**: バニラCSS with CSS変数

## プロジェクト構造

```
src/
├── components/
│   ├── basic/               # 基本コンポーネント
│   │   └── ApplicationLogo.tsx
│   ├── icon/                # アイコンライブラリ
│   │   └── Icon.tsx        # 200+アイコン定義
│   ├── Button.tsx           # ボタンコンポーネント
│   ├── InputField.tsx       # フォーム入力コンポーネント
│   └── Alert.tsx            # アラートコンポーネント
├── pages/                   # ページコンポーネント
│   ├── HomePage.tsx
│   ├── ButtonsPage.tsx
│   ├── FormsPage.tsx
│   ├── MessagesPage.tsx
│   ├── TablesPage.tsx
│   ├── NavigationPage.tsx
│   ├── LayoutPage.tsx
│   └── IconsPage.tsx
├── config/                  # 設定ファイル
│   └── tablePresets.ts
├── hooks/                   # カスタムフック
│   ├── useSynchronizedScroll.ts
│   ├── useTableHeight.ts
│   └── usePermissionSelection.ts
├── styles/                  # コンポーネント別CSS
│   ├── Button.css
│   ├── InputField.css
│   └── Alert.css
├── App-with-router.tsx      # ルーティング設定
├── main.tsx                 # エントリーポイント
└── index.css                # グローバルスタイル
```

## 開発ルール

### 1. TypeScript

- **必須**: すべての新規コンポーネントはTypeScriptで記述
- **型定義**: propsとstateには明示的な型定義を使用
- **strictモード**: `tsconfig.json`で`strict: true`が有効

### 2. コンポーネント作成

```tsx
// 良い例
interface ButtonProps {
  variant?: 'primary' | 'secondary' | 'text' | 'danger';
  size?: 'sm' | 'md' | 'lg';
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
  children: React.ReactNode;
  [key: string]: any;  // spread propsのため
}

const Button: React.FC<ButtonProps> = ({ variant = 'primary', ...props }) => {
  // 実装
};

export default Button;
```

### 3. CSSスタイリング

- **CSS変数**: デザイントークンとして使用（`index.css`で定義）
- **BEM命名規則**: `.component-name__element--modifier`
- **レスポンシブ**: モバイルファーストアプローチ

```css
/* 良い例 */
.btn {
  background: var(--color-primary-500);
  padding: var(--spacing-3);
}

.btn--large {
  padding: var(--spacing-4);
}

@media (max-width: 768px) {
  .btn {
    width: 100%;
  }
}
```

### 4. アイコン追加

新しいアイコンを追加する場合：

1. `src/components/icon/Icon.tsx`の`IconName`型に追加
2. `iconPaths`オブジェクトにSVGパス定義を追加
3. `src/pages/IconsPage.tsx`の適切なカテゴリーに追加

```tsx
// Icon.tsx
export type IconName =
  | 'existing-icon'
  | 'new-icon';  // 追加

const iconPaths: Record<IconName, React.ReactElement> = {
  'new-icon': <path d="..." />  // SVGパス追加
};
```

### 5. ルーティング

新しいページを追加する場合：

1. `src/pages/`に新しいページコンポーネントを作成
2. `src/App-with-router.tsx`にルート定義を追加

```tsx
// App-with-router.tsx
import NewPage from './pages/NewPage.tsx';

<Route path="/new-page" element={<NewPage />} />
```

### 6. カスタムフック

再利用可能なロジックはカスタムフックとして抽出：

```tsx
// hooks/useExample.ts
import { useState } from 'react';

interface UseExampleReturn {
  value: string;
  setValue: (val: string) => void;
}

export const useExample = (): UseExampleReturn => {
  const [value, setValue] = useState<string>('');
  return { value, setValue };
};
```

## コーディング規約

### 1. ファイル命名

- コンポーネント: `PascalCase.tsx`
- フック: `useCamelCase.ts`
- 設定: `camelCase.ts`
- CSS: `PascalCase.css`（対応するコンポーネント名）

### 2. インポート順序

```tsx
// 1. React関連
import React, { useState } from 'react';

// 2. サードパーティライブラリ
import { Link } from 'react-router-dom';

// 3. 内部コンポーネント
import Button from './components/Button';

// 4. スタイル
import './styles/Component.css';
```

### 3. コンポーネント構造

```tsx
// 1. 型定義
interface ComponentProps {
  // props定義
}

// 2. コンポーネント定義
const Component: React.FC<ComponentProps> = ({ prop1, prop2 }) => {
  // 3. Hooks
  const [state, setState] = useState<string>('');

  // 4. イベントハンドラー
  const handleClick = () => {
    // 処理
  };

  // 5. JSX return
  return (
    <div>
      {/* コンポーネント */}
    </div>
  );
};

// 6. エクスポート
export default Component;
```

### 4. アクセシビリティ

- **ARIA属性**: 適切に使用（`aria-label`, `aria-describedby`等）
- **セマンティックHTML**: `<button>`, `<nav>`, `<main>`等を使用
- **キーボード操作**: すべてのインタラクティブ要素に対応

```tsx
// 良い例
<button
  aria-label="閉じる"
  onClick={handleClose}
  disabled={isLoading}
>
  <Icon name="close" />
</button>
```

## ビルド・デプロイ

### 開発環境
```bash
npm run dev
```

### 本番ビルド
```bash
npm run build
```

出力先: `dist/`

### プレビュー
```bash
npm run serve
```

## トラブルシューティング

### TypeScriptエラー

- `tsconfig.json`の設定を確認
- 型定義が不足している場合は`@types/*`パッケージをインストール

### ルーティング404エラー

- `npm run serve`を使用（`--single`フラグでSPAをサポート）
- 開発環境では`npm run dev`を使用

### ビルドサイズ警告

- コード分割: `React.lazy()`と`Suspense`を使用
- 不要なインポートを削除
- dynamic importを検討

## コミット規約

```
<type>: <subject>

<body>

<footer>
```

**Type:**
- `feat`: 新機能
- `fix`: バグ修正
- `docs`: ドキュメント更新
- `style`: スタイル修正（コード整形）
- `refactor`: リファクタリング
- `test`: テスト追加・修正
- `chore`: ビルド・設定変更

**例:**
```
feat: Add weather icons to icon library

- Add sun, moon, cloud, rain, bolt icons
- Update IconsPage categories
- Add weather category to icon search

Closes #123
```

## レビューチェックリスト

- [ ] TypeScript型定義は適切か
- [ ] CSS変数を使用しているか
- [ ] レスポンシブデザインに対応しているか
- [ ] アクセシビリティ対応は十分か
- [ ] エラーハンドリングがあるか
- [ ] 既存のコンポーネントと一貫性があるか
- [ ] ドキュメント（JSDoc）は追加したか

## Playwright MCP使用ルール

### 絶対的な禁止事項

1. **いかなる形式のコード実行も禁止**
   - Python、JavaScript、Bash等でのブラウザ操作
   - MCPツールを調査するためのコード実行
   - subprocessやコマンド実行によるアプローチ

2. **利用可能なのはMCPツールの直接呼び出しのみ**
   - playwright:browser_navigate
   - playwright:browser_screenshot
   - 他のPlaywright MCPツール

3. **エラー時は即座に報告**
   - 回避策を探さない
   - 代替手段を実行しない
   - エラーメッセージをそのまま伝える

## 参考リンク

- [プロジェクトREADME](./README.md)
- [TypeScript公式ドキュメント](https://www.typescriptlang.org/)
- [React公式ドキュメント](https://react.dev/)
- [Vite公式ドキュメント](https://vitejs.dev/)
