# 419 CSRF Error Issue - Inertia.js Logout

## 問題の概要

**発生日時**: 2025-11-11
**影響範囲**: ログアウト機能
**症状**: ログアウトボタンクリック時に419 Page Expired エラーが発生

## 技術的詳細

### 環境
- Laravel: 12.33.0
- PHP: 8.4.14
- Inertia.js: @inertiajs/react 2.2.8
- React: 19.2.0

### エラーの発生箇所
1. ユーザーがダッシュボードでログアウトボタンをクリック
2. `router.post('/logout')` が実行される
3. サーバーから419エラーが返される
4. Inertiaがエラーページ(419)をiframe内に表示

### 実施した対策と結果

#### 対策1: Dashboard.tsxの修正 ❌ 失敗
**内容**: 手動form送信から`router.post('/logout')`に変更
**ファイル**: `resources/js/Pages/Dashboard.tsx`
**結果**: CSRFエラー継続

```typescript
// Before (手動form送信)
const handleLogout = () => {
  const form = document.createElement('form');
  form.method = 'POST';
  form.action = '/logout';
  // ...CSRF token manual handling
  form.submit();
};

// After (Inertia router使用)
const handleLogout = () => {
  router.post('/logout');
};
```

#### 対策2: CSRF除外の削除 ❌ 効果なし
**内容**: `bootstrap/app.php`から一時的なCSRF除外を削除
**ファイル**: `bootstrap/app.php`
**結果**: エラー継続（予想通り）

#### 対策3: AuthController型修正 ✅ 成功（別問題）
**内容**: `showLoginForm()`の戻り値型を`Response`から`InertiaResponse`に修正
**ファイル**: `app/Modules/User/Presentation/Controllers/AuthController.php:35`
**結果**: ログイン画面表示は成功したが、ログアウトCSRF問題は未解決

#### 対策4: HandleInertiaRequestsでCSRFトークン明示的共有 ❌ 失敗
**内容**: ミドルウェアでCSRFトークンをInertia propsに追加
**ファイル**: `app/Http/Middleware/HandleInertiaRequests.php:47`
**結果**: エラー継続

```php
'csrf_token' => csrf_token(), // 追加
```

#### 対策5: app.tsxでCSRF Header明示的設定 ❌ 失敗
**内容**: Inertia routerのbeforeフックでCSRFヘッダーを設定
**ファイル**: `resources/js/app.tsx:12-20`
**結果**: エラー継続

```typescript
router.on('before', (event) => {
    const token = document.head.querySelector<HTMLMetaElement>('meta[name="csrf-token"]');
    if (token) {
        event.detail.visit.headers = {
            ...event.detail.visit.headers,
            'X-CSRF-TOKEN': token.content,
        };
    }
});
```

## 根本原因の仮説

### 仮説1: セッション無効化のタイミング問題
AuthController::logout()でセッションを無効化した後にリダイレクトを返しているため、CSRFトークンも無効化されている可能性。

```php
// AuthController::logout()
request()->session()->invalidate();
request()->session()->regenerateToken();
return redirect('/login'); // この時点でCSRFトークンが無効?
```

### 仮説2: Inertia.jsのCSRF自動処理の不具合
Inertia.jsは通常、メタタグからCSRFトークンを自動的に読み取って送信するが、何らかの理由で機能していない可能性。

### 仮説3: ミドルウェアの処理順序問題
CSRF検証がコントローラー到達前に失敗している可能性。POSTリクエスト自体がCSRF検証を通過していない。

## 未検証の対策案

### 案1: セッション処理順序の変更 (推奨度: ★★★★☆)
セッション無効化前にリダイレクトレスポンスを生成する、または処理順序を工夫する。

### 案2: GET Logoutに変更 (推奨度: ★★☆☆☆)
セキュリティ上の懸念があるが、CSRF問題を回避可能。

```php
// routes/web.php
Route::get('/logout', [AuthController::class, 'logout'])->name('logout');
```

```typescript
// Dashboard.tsx
router.visit('/logout');
```

**懸念点**: CSRF保護が失われるため、外部サイトからログアウトを強制される可能性。

### 案3: 専用ログアウトエンドポイント (推奨度: ★★★★★)
別のアプローチでログアウトを実装する。

```php
// ログアウト後、JSON応答を返す
return response()->json(['redirect' => '/login']);
```

```typescript
// フロントエンドでリダイレクトを処理
router.post('/logout', {}, {
    onSuccess: () => {
        window.location.href = '/login';
    }
});
```

### 案4: Laravel Debugbarでリクエスト詳細確認 (推奨度: ★★★★★)
開発環境でLaravel Debugbarを有効化し、POSTリクエストのヘッダーを確認。

```bash
composer require barryvdh/laravel-debugbar --dev
```

## 再発防止策

### 1. 検証スクリプトの導入 ✅ 完了
**ファイル**: `dev-kit/scripts/validate/inertia-usage.sh`
**機能**:
- 手動form作成の検出
- 手動form送信の検出
- 手動CSRF処理の検出（fetch API除く）
- axios CSRF設定確認
- Inertia router importの確認

**使用方法**:
```bash
npm run validate:inertia
```

### 2. Inertia.js使用ガイドラインの作成 (TODO)
**ファイル**: `dev-kit/docs/guidelines/inertia-js-best-practices.md`

推奨内容:
- ✅ DO: `router.post()`, `router.delete()`, `router.put()`を使用
- ❌ DON'T: 手動form作成・送信
- ❌ DON'T: 手動CSRF token処理（Inertiaが自動処理）
- ✅ DO: `<meta name="csrf-token">`タグの存在確認
- ✅ DO: 完全ページリロードが必要な場合は`Inertia::location()`使用

### 3. CI/CDパイプラインへの統合 (TODO)
```yaml
# .github/workflows/ci.yml
- name: Validate Inertia Usage
  run: npm run validate:inertia
```

### 4. コードレビューチェックリスト (TODO)
- [ ] Inertia.js routerメソッドを使用しているか
- [ ] 手動form送信を使用していないか
- [ ] CSRF tokenを手動で処理していないか
- [ ] 認証関連処理でセッション管理が適切か

## 参考資料

- [Inertia.js公式ドキュメント - CSRF Protection](https://inertiajs.com/csrf-protection)
- [Laravel公式ドキュメント - CSRF Protection](https://laravel.com/docs/11.x/csrf)
- [Inertia.js GitHub Issues - CSRF関連](https://github.com/inertiajs/inertia/issues?q=is%3Aissue+csrf)

## ステータス

**現在の状態**: 🔴 未解決
**優先度**: 🔥 高
**担当**: 未割当
**最終更新**: 2025-11-11

## 次のアクション

1. Laravel Debugbarを導入してリクエストヘッダーを確認
2. 案3（専用ログアウトエンドポイント）を実装・テスト
3. 成功した場合、ベストプラクティスとして文書化
4. 失敗した場合、Inertia.jsのGitHub Issuesで報告を検討
