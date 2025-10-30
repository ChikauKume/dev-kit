# モジュール構造: Clean Architecture

全機能で共通のClean Architecture 4層構造を定義します。

## 層構成

### 第1層: Domain（ビジネスルール）
**責務**: Laravel非依存のビジネスロジック
**含まれるもの**:
- Entity（エンティティ）
- ValueObject（値オブジェクト）
- RepositoryInterface（リポジトリインターフェース）
- DomainException（ドメイン例外）

### 第2層: Application（ユースケース）
**責務**: Laravel非依存の用途実装
**含まれるもの**:
- UseCase（ユースケース）
- DTO（データ転送オブジェクト）
- ApplicationException（アプリケーション例外）

### 第3層: Infrastructure（データ保存）
**責務**: Laravel依存のデータ永続化
**含まれるもの**:
- EloquentModel（Eloquentモデル）
- Repository実装（RepositoryInterfaceの実装）

### 第4層: Presentation（HTTP処理）
**責務**: Laravel依存のHTTPリクエスト/レスポンス処理
**含まれるもの**:
- Controller（コントローラー）
- FormRequest（フォームリクエスト）
- Routes（ルート定義）

## ディレクトリ構造テンプレート

```
app/Modules/{ModuleName}/
├── Domain/                        # 第1層
│   ├── {Entity}.php
│   ├── {RepositoryInterface}.php
│   ├── ValueObjects/
│   │   └── {ValueObject}.php
│   └── Exceptions/
│       └── {DomainException}.php
├── Application/                   # 第2層
│   ├── UseCases/
│   │   └── {UseCase}.php
│   ├── DTOs/
│   │   └── {DTO}.php
│   └── Exceptions/
│       └── {ApplicationException}.php
├── Infrastructure/                # 第3層
│   ├── {Model}.php
│   └── {Repository}.php
├── Presentation/                  # 第4層
│   ├── Controllers/
│   │   └── {Controller}.php
│   └── Requests/
│       └── {Request}.php
├── Providers/
│   └── {ModuleName}ServiceProvider.php
└── routes.php
```

## 依存関係のルール

```
Domain層 ← Application層 ← Infrastructure層 ← Presentation層
  ↑                           ↑
  └───────────────────────────┘
  （Presentation層はDomain層のインターフェースを使う）
```

- Domain層: 他の層に依存しない
- Application層: Domain層のみに依存
- Infrastructure層: Domain層、Application層に依存
- Presentation層: 全ての層に依存可能

## 命名規則

- Entity: 単数形（例: User, Video）
- Repository: {Entity}RepositoryInterface, Eloquent{Entity}Repository
- UseCase: 動詞+名詞（例: RegisterUser, LoginUser）
- Controller: {機能}Controller（例: AuthController）
