# データベース設計

## 命名規則

### テーブル名
- 複数形、スネークケース（例: `users`, `failed_login_attempts`）
- 中間テーブル: アルファベット順で結合（例: `post_tag`）

### カラム名
- スネークケース（例: `user_name`, `created_at`）
- 外部キー: `{テーブル名単数}_id`（例: `user_id`）

### インデックス名
- `{テーブル名}_{カラム名}_index`（例: `users_email_index`）

## 標準カラム

### 全テーブル共通
- `id`: BIGINT UNSIGNED, PRIMARY KEY, AUTO_INCREMENT
- `created_at`: TIMESTAMP, NOT NULL
- `updated_at`: TIMESTAMP, NOT NULL

### ソフトデリート使用時
- `deleted_at`: TIMESTAMP, NULLABLE

## データ型規約

| 用途 | データ型 | サイズ | 備考 |
|-----|---------|-------|------|
| 主キー | BIGINT UNSIGNED | - | AUTO_INCREMENT |
| 文字列（短） | VARCHAR | 255 | 名前、メール等 |
| 文字列（長） | TEXT | - | 説明文等 |
| 電話番号 | VARCHAR | 20 | ハイフン込みで保存 |
| パスワード | VARCHAR | 255 | ハッシュ化済み |
| 真偽値 | BOOLEAN | - | 0/1 |
| 列挙型 | ENUM | - | ('user', 'admin') |
| 日時 | TIMESTAMP | - | タイムゾーン対応 |

## インデックス戦略

### 必須インデックス
- 外部キー全て
- `email` カラム（UNIQUE）
- 検索に使用するカラム

### 複合インデックス
- WHERE句で複数カラム使用する場合
- 使用頻度の高い順に定義

## マイグレーション規約

### ファイル名
`{YYYY_MM_DD_HHMMSS}_create_{table}_table.php`

### up() メソッド
- テーブル作成のみ
- インデックス作成を含む

### down() メソッド
- テーブル削除のみ
- `Schema::dropIfExists('{table}');`

## リレーション規約

### belongsTo / hasMany
```php
// User.php
public function posts() {
    return $this->hasMany(Post::class);
}

// Post.php
public function user() {
    return $this->belongsTo(User::class);
}
```

### belongsToMany
```php
// Post.php
public function tags() {
    return $this->belongsToMany(Tag::class);
}

// Tag.php
public function posts() {
    return $this->belongsToMany(Post::class);
}
```

## ユーザー認証機能のテーブル

### users
| カラム | 型 | NULL | デフォルト | 備考 |
|-------|---|------|-----------|------|
| id | BIGINT UNSIGNED | NO | AUTO | 主キー |
| name | VARCHAR(255) | NO | - | ユーザー名 |
| email | VARCHAR(255) | NO | - | メールアドレス（UNIQUE） |
| phone | VARCHAR(20) | YES | NULL | 電話番号 |
| password | VARCHAR(255) | NO | - | ハッシュ化パスワード |
| role | ENUM('user', 'admin') | NO | 'user' | ユーザー権限 |
| created_at | TIMESTAMP | NO | - | 作成日時 |
| updated_at | TIMESTAMP | NO | - | 更新日時 |

### failed_login_attempts
| カラム | 型 | NULL | デフォルト | 備考 |
|-------|---|------|-----------|------|
| id | BIGINT UNSIGNED | NO | AUTO | 主キー |
| ip_address | VARCHAR(45) | NO | - | IPアドレス |
| email | VARCHAR(255) | NO | - | 試行メールアドレス |
| attempted_at | TIMESTAMP | NO | - | 試行日時 |
