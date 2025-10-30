# エラー処理

## エラー分類

### 1. バリデーションエラー（FormRequest層）
**責務**: 入力データの形式検証
**処理層**: Presentation層（FormRequest）
**エラー形式**: Laravel Validation Errors

**例**:
- 必須項目未入力
- メール形式不正
- 文字数超過

### 2. ビジネスロジックエラー（UseCase層）
**責務**: ビジネスルール違反の検証
**処理層**: Application/Domain層
**エラー形式**: DomainException, ApplicationException

**例**:
- 認証失敗
- 権限不足
- トークン検証失敗

### 3. システムエラー（ミドルウェア層）
**責務**: システムレベルのエラー処理
**処理層**: ミドルウェア
**エラー形式**: HTTPException

**例**:
- 404 Not Found
- 500 Internal Server Error
- 認証要求

## バリデーション共通ルール

### 文字列フィールド
- **name**: required, min:2, max:255
- **email**: required, email, max:255, unique
- **password**: required, min:8, max:255, regex:/^(?=.*[A-Za-z])(?=.*\d).+$/

### 数値フィールド
- **phone**: nullable, regex:/^0\d{9,10}$/（半角数字、0始まり10-11桁）

### ブール値フィールド
- **agreeToTerms**: required, accepted

## エラーメッセージ規約

### 日本語メッセージ
全てのエラーメッセージは日本語で表示

### 語尾
文末は「。」で統一

**例**:
- ✅ "名前は2文字以上で入力してください。"
- ❌ "名前は2文字以上で入力してください"

### メッセージ定義場所
`lang/ja/validation.php`

## フロントエンドバリデーション

### リアルタイムバリデーション
- **onBlur**: フィールド離脱時にバリデーション実行
- **useDynamicValidation**: ui-components のバリデーションフック使用

### エラー表示
- 各フィールド直下に赤字でエラーメッセージ表示
- `.form-error` クラスで ui-components が自動スタイリング

### バックエンド送信前チェック
- クライアント側で不正入力を防止
- バックエンドバリデーションは最終防御

## エラーハンドリングパターン

### Controller
```php
try {
    $result = $this->useCase->execute($dto);
    return redirect('/success')->with('message', '成功しました。');
} catch (ValidationException $e) {
    return redirect()->back()
        ->withErrors($e->errors())
        ->withInput();
} catch (DomainException $e) {
    return redirect()->back()
        ->with('error', $e->getMessage());
}
```

### UseCase
```php
if (!$this->repository->findByEmail($email)) {
    throw new UserNotFoundException('ユーザーが見つかりません。');
}
```
