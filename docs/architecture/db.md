# データベース設計

## 概要

このドキュメントでは、授業動画配信プラットフォームのデータベース構造を定義します。product.mdの要件定義とfeatures.mdの機能仕様に基づいて、必要なテーブル、カラム、リレーション、インデックスを詳細に記述しています。

## データベース基本情報

- **DBMS**: MySQL 8.0
- **文字コード**: utf8mb4
- **照合順序**: utf8mb4_unicode_ci
- **ストレージエンジン**: InnoDB

## ER図

```
[users] 1 ----< N [watch_histories]
[users] 1 ----< N [videos] (管理者が作成)
[videos] 1 ----< N [watch_histories]
[videos] N ----< 1 [categories]
[videos] N >----< N [tags] (中間テーブル: video_tag)

[users]
- id (PK)
- name
- email (UNIQUE)
- password
- profile_image_path
- role (ENUM: admin, user)
- last_login_at
- created_at
- updated_at

[videos]
- id (PK)
- user_id (FK → users.id) 管理者
- category_id (FK → categories.id)
- title
- description
- video_path
- thumbnail_path
- view_count
- is_published
- created_at
- updated_at

[categories]
- id (PK)
- name
- description
- sort_order
- created_at
- updated_at

[tags]
- id (PK)
- name
- created_at
- updated_at

[video_tag]
- video_id (FK → videos.id)
- tag_id (FK → tags.id)
- created_at

[watch_histories]
- id (PK)
- user_id (FK → users.id)
- video_id (FK → videos.id)
- watched_at
- watch_duration
- created_at
```

## テーブル一覧

### 第1フェーズ（MVP）テーブル

| テーブル名 | 論理名 | 説明 | 関連要件ID |
|-----------|--------|------|-----------|
| users | ユーザー | 一般ユーザーと管理者の情報 | REQ-1-1, REQ-1-2, REQ-1-3 |
| videos | 動画 | 動画コンテンツの情報 | REQ-2-1, REQ-2-2, REQ-3-1, REQ-3-2 |
| categories | カテゴリ | 動画のカテゴリ分類 | REQ-2-3 |
| tags | タグ | 動画のタグ | REQ-2-3 |
| video_tag | 動画タグ中間テーブル | 動画とタグの多対多関係 | REQ-2-3 |
| watch_histories | 視聴履歴 | ユーザーの動画視聴履歴 | REQ-1-3, REQ-3-2 |

### 第2フェーズ（拡張機能）テーブル

| テーブル名 | 論理名 | 説明 | 関連要件ID |
|-----------|--------|------|-----------|
| video_prices | 動画価格 | 有料動画の価格設定 | REQ-5-1 |
| purchases | 購入履歴 | 動画購入履歴 | REQ-5-1 |
| subscriptions | サブスクリプション | 月額会員情報 | REQ-5-2 |
| groups | グループ | ユーザーグループ | REQ-5-3 |
| group_user | グループユーザー中間テーブル | グループとユーザーの多対多関係 | REQ-5-3 |
| group_video | グループ動画中間テーブル | グループと動画の多対多関係 | REQ-5-3 |
| invitations | 招待 | 招待リンク情報 | REQ-5-4 |
| video_restrictions | 動画制限 | 視聴制限設定 | REQ-5-5 |
| two_factor_auth | 二段階認証 | 二段階認証情報 | REQ-5-7 |

## テーブル詳細定義

## 1. ユーザー関連テーブル

### 1.1. users

**論理名**: ユーザー
**要件ID**: REQ-1-1, REQ-1-2, REQ-1-3

**テーブル定義**:

| カラム名 | 型 | NULL | デフォルト | 制約 | 説明 |
|---------|-----|------|-----------|------|------|
| id | BIGINT UNSIGNED | NO | AUTO_INCREMENT | PRIMARY KEY | ユーザーID |
| name | VARCHAR(255) | NO | - | - | ユーザー名 |
| email | VARCHAR(255) | NO | - | UNIQUE | メールアドレス |
| password | VARCHAR(255) | NO | - | - | パスワード（bcryptハッシュ化） |
| profile_image_path | VARCHAR(255) | YES | NULL | - | プロフィール画像パス |
| role | ENUM('admin', 'user') | NO | 'user' | - | ユーザーロール |
| last_login_at | TIMESTAMP | YES | NULL | - | 最終ログイン日時 |
| email_verified_at | TIMESTAMP | YES | NULL | - | メール認証日時（第2フェーズ） |
| created_at | TIMESTAMP | NO | CURRENT_TIMESTAMP | - | 作成日時 |
| updated_at | TIMESTAMP | NO | CURRENT_TIMESTAMP | ON UPDATE | 更新日時 |

**インデックス**:
- PRIMARY KEY: `id`
- UNIQUE KEY: `email` (ユーザー認証の高速化)
- INDEX: `role` (権限チェックの高速化)
- INDEX: `last_login_at` (最終ログイン日時の検索用)

**データ制約**:
- email は UNIQUE制約（重複登録防止）
- password は NOT NULL、8文字以上（アプリケーション層でバリデーション）
- role は ENUM('admin', 'user')
- profile_image_path は最大5MBのJPEG/PNG形式（アプリケーション層でバリデーション）

**備考**:
- Laravel標準のusersテーブルを拡張
- パスワードはbcryptでハッシュ化（ソルト自動付与）
- roleによるRBAC（ロールベースアクセス制御）を実装

## 2. 動画関連テーブル

### 2.1. videos

**論理名**: 動画
**要件ID**: REQ-2-1, REQ-2-2, REQ-3-1, REQ-3-2

**テーブル定義**:

| カラム名 | 型 | NULL | デフォルト | 制約 | 説明 |
|---------|-----|------|-----------|------|------|
| id | BIGINT UNSIGNED | NO | AUTO_INCREMENT | PRIMARY KEY | 動画ID |
| user_id | BIGINT UNSIGNED | NO | - | FOREIGN KEY | アップロードした管理者のユーザーID |
| category_id | BIGINT UNSIGNED | NO | - | FOREIGN KEY | カテゴリID |
| title | VARCHAR(255) | NO | - | - | 動画タイトル |
| description | TEXT | YES | NULL | - | 動画説明文（最大5000文字） |
| video_path | VARCHAR(255) | NO | - | - | 動画ファイルパス |
| thumbnail_path | VARCHAR(255) | NO | - | - | サムネイル画像パス |
| view_count | INT UNSIGNED | NO | 0 | - | 視聴回数 |
| is_published | BOOLEAN | NO | TRUE | - | 公開状態（TRUE: 公開、FALSE: 非公開） |
| created_at | TIMESTAMP | NO | CURRENT_TIMESTAMP | - | 作成日時（アップロード日時） |
| updated_at | TIMESTAMP | NO | CURRENT_TIMESTAMP | ON UPDATE | 更新日時 |

**インデックス**:
- PRIMARY KEY: `id`
- INDEX: `user_id` (管理者による動画一覧取得の高速化)
- INDEX: `category_id` (カテゴリフィルタリングの高速化)
- INDEX: `is_published` (公開/非公開フィルタリングの高速化)
- INDEX: `view_count` (人気順ソートの高速化)
- INDEX: `created_at` (新着順ソートの高速化)
- FULLTEXT INDEX: `title, description` (タイトル・説明文検索の高速化、第2フェーズ）

**外部キー制約**:
- `user_id` → `users.id`
  - ON DELETE: RESTRICT (管理者削除時は動画を残す)
  - ON UPDATE: CASCADE
- `category_id` → `categories.id`
  - ON DELETE: RESTRICT (カテゴリ削除時は動画が紐づいていれば削除不可)
  - ON UPDATE: CASCADE

**データ制約**:
- title は NOT NULL、最大255文字
- description は最大5000文字
- video_path はMP4形式、最大2GB（アプリケーション層でバリデーション）
- thumbnail_path はJPEG/PNG形式、最大5MB（アプリケーション層でバリデーション）
- view_count は0以上の整数

**備考**:
- is_published がFALSEの場合、一般ユーザーから非表示
- video_path と thumbnail_path はLaravel Storageで管理

### 2.2. categories

**論理名**: カテゴリ
**要件ID**: REQ-2-3

**テーブル定義**:

| カラム名 | 型 | NULL | デフォルト | 制約 | 説明 |
|---------|-----|------|-----------|------|------|
| id | BIGINT UNSIGNED | NO | AUTO_INCREMENT | PRIMARY KEY | カテゴリID |
| name | VARCHAR(255) | NO | - | UNIQUE | カテゴリ名 |
| description | TEXT | YES | NULL | - | カテゴリ説明 |
| sort_order | INT UNSIGNED | NO | 0 | - | 表示順序 |
| created_at | TIMESTAMP | NO | CURRENT_TIMESTAMP | - | 作成日時 |
| updated_at | TIMESTAMP | NO | CURRENT_TIMESTAMP | ON UPDATE | 更新日時 |

**インデックス**:
- PRIMARY KEY: `id`
- UNIQUE KEY: `name` (カテゴリ名の重複防止)
- INDEX: `sort_order` (カテゴリ一覧表示の並び順)

**データ制約**:
- name は UNIQUE制約（重複防止）
- sort_order は0以上の整数

**備考**:
- 紐づく動画がある場合は削除不可（アプリケーション層で制御）

### 2.3. tags

**論理名**: タグ
**要件ID**: REQ-2-3

**テーブル定義**:

| カラム名 | 型 | NULL | デフォルト | 制約 | 説明 |
|---------|-----|------|-----------|------|------|
| id | BIGINT UNSIGNED | NO | AUTO_INCREMENT | PRIMARY KEY | タグID |
| name | VARCHAR(255) | NO | - | UNIQUE | タグ名 |
| created_at | TIMESTAMP | NO | CURRENT_TIMESTAMP | - | 作成日時 |
| updated_at | TIMESTAMP | NO | CURRENT_TIMESTAMP | ON UPDATE | 更新日時 |

**インデックス**:
- PRIMARY KEY: `id`
- UNIQUE KEY: `name` (タグ名の重複防止)

**データ制約**:
- name は UNIQUE制約（重複防止）

**備考**:
- 紐づく動画がある場合は削除不可（アプリケーション層で制御）

## 3. 中間テーブル

### 3.1. video_tag

**論理名**: 動画タグ中間テーブル
**要件ID**: REQ-2-3

**テーブル定義**:

| カラム名 | 型 | NULL | デフォルト | 制約 | 説明 |
|---------|-----|------|-----------|------|------|
| video_id | BIGINT UNSIGNED | NO | - | FOREIGN KEY | 動画ID |
| tag_id | BIGINT UNSIGNED | NO | - | FOREIGN KEY | タグID |
| created_at | TIMESTAMP | NO | CURRENT_TIMESTAMP | - | 作成日時 |

**インデックス**:
- PRIMARY KEY: `(video_id, tag_id)` (複合主キー)
- INDEX: `tag_id` (タグによる動画検索の高速化)

**外部キー制約**:
- `video_id` → `videos.id`
  - ON DELETE: CASCADE (動画削除時に中間テーブルのレコードも削除)
  - ON UPDATE: CASCADE
- `tag_id` → `tags.id`
  - ON DELETE: CASCADE (タグ削除時に中間テーブルのレコードも削除)
  - ON UPDATE: CASCADE

**備考**:
- 動画とタグの多対多関係を表現
- 1つの動画に複数のタグを付与可能

## 4. 視聴履歴テーブル

### 4.1. watch_histories

**論理名**: 視聴履歴
**要件ID**: REQ-1-3, REQ-3-2

**テーブル定義**:

| カラム名 | 型 | NULL | デフォルト | 制約 | 説明 |
|---------|-----|------|-----------|------|------|
| id | BIGINT UNSIGNED | NO | AUTO_INCREMENT | PRIMARY KEY | 視聴履歴ID |
| user_id | BIGINT UNSIGNED | NO | - | FOREIGN KEY | ユーザーID |
| video_id | BIGINT UNSIGNED | NO | - | FOREIGN KEY | 動画ID |
| watched_at | TIMESTAMP | NO | CURRENT_TIMESTAMP | - | 視聴開始日時 |
| watch_duration | INT UNSIGNED | YES | NULL | - | 視聴時間（秒） |
| created_at | TIMESTAMP | NO | CURRENT_TIMESTAMP | - | 作成日時 |

**インデックス**:
- PRIMARY KEY: `id`
- INDEX: `user_id` (ユーザーの視聴履歴一覧取得の高速化)
- INDEX: `video_id` (動画の視聴履歴統計の高速化)
- INDEX: `watched_at` (視聴日時順ソートの高速化)
- INDEX: `(user_id, watched_at)` (ユーザーの視聴履歴を日時順に取得する複合インデックス)

**外部キー制約**:
- `user_id` → `users.id`
  - ON DELETE: CASCADE (ユーザー削除時に視聴履歴も削除)
  - ON UPDATE: CASCADE
- `video_id` → `videos.id`
  - ON DELETE: CASCADE (動画削除時に視聴履歴も削除)
  - ON UPDATE: CASCADE

**データ制約**:
- watch_duration は0以上の整数（秒単位）

**備考**:
- 視聴開始時に自動記録
- プロフィール画面から視聴履歴を確認可能

## リレーション定義

### ユーザーと視聴履歴

```
users (1) ----< (N) watch_histories
- 1人のユーザーは複数の視聴履歴を持つ
- 外部キー: watch_histories.user_id → users.id
```

### ユーザーと動画（管理者が作成）

```
users (1) ----< (N) videos
- 1人の管理者は複数の動画をアップロードできる
- 外部キー: videos.user_id → users.id
```

### 動画と視聴履歴

```
videos (1) ----< (N) watch_histories
- 1つの動画は複数の視聴履歴を持つ
- 外部キー: watch_histories.video_id → videos.id
```

### 動画とカテゴリ

```
categories (1) ----< (N) videos
- 1つのカテゴリは複数の動画を持つ
- 外部キー: videos.category_id → categories.id
```

### 動画とタグ（多対多）

```
videos (N) >----< (N) tags
- 動画とタグは多対多の関係
- 中間テーブル: video_tag
- 外部キー: video_tag.video_id → videos.id
- 外部キー: video_tag.tag_id → tags.id
```

## インデックス戦略

### パフォーマンス要件

product.mdの成功指標「検索レスポンス1秒以内」を満たすためのインデックス設計：

**検索用インデックス**:
- `videos.title` (FULLTEXT): タイトル検索の高速化（第2フェーズで全文検索導入）
- `videos.category_id`: カテゴリフィルタリングの高速化
- `video_tag.tag_id`: タグフィルタリングの高速化

**ソート用インデックス**:
- `videos.created_at`: 新着順ソートの高速化
- `videos.view_count`: 人気順ソートの高速化
- `watch_histories.watched_at`: 視聴履歴の日時順ソート

**複合インデックス**:
- `watch_histories (user_id, watched_at)`: ユーザーの視聴履歴を日時順に取得する際の高速化

## データ容量見積もり

### users

- **想定レコード数**: 初期100件、年間1000件増加
- **1レコードあたりの容量**: 約500バイト（プロフィール画像パスを含む）
- **年間増加容量**: 約500KB

### videos

- **想定レコード数**: 初期50件、年間500件増加
- **1レコードあたりの容量**: 約1KB（動画ファイルパス、サムネイルパスを含む）
- **年間増加容量**: 約500KB
- **動画ファイル容量**: 1動画平均500MB、年間250GB増加

### categories

- **想定レコード数**: 初期10件、年間10件増加
- **1レコードあたりの容量**: 約300バイト
- **年間増加容量**: 約3KB

### tags

- **想定レコード数**: 初期50件、年間100件増加
- **1レコードあたりの容量**: 約200バイト
- **年間増加容量**: 約20KB

### watch_histories

- **想定レコード数**: 初期1000件、年間10万件増加
- **1レコードあたりの容量**: 約100バイト
- **年間増加容量**: 約10MB

## データ保持ポリシー

### 視聴履歴

- **対象テーブル**: watch_histories
- **保持期間**: 無期限（ユーザー削除時に削除）
- **削除方法**: ユーザー削除時にCASCADE削除

### 削除された動画の視聴履歴

- **対象テーブル**: watch_histories
- **保持期間**: 動画削除と同時に削除
- **削除方法**: 動画削除時にCASCADE削除

## バックアップ・リカバリ

### バックアップ戦略

- **フルバックアップ**: 毎日深夜2時
- **差分バックアップ**: 6時間ごと
- **保持期間**: 30日間

### リカバリ手順

1. MySQLサービス停止
2. バックアップファイルからデータベースをリストア
3. MySQLサービス再起動
4. データ整合性チェック

## マイグレーション管理

### 初期マイグレーション

```bash
# マイグレーション実行
./vendor/bin/sail artisan migrate

# シーダー実行（初期データ投入）
./vendor/bin/sail artisan db:seed
```

### マイグレーションファイル一覧

| ファイル名 | 説明 | 対応要件ID |
|-----------|------|-----------|
| 2024_01_01_000000_create_users_table.php | usersテーブル作成 | REQ-1-1, REQ-1-2, REQ-1-3 |
| 2024_01_01_000001_create_categories_table.php | categoriesテーブル作成 | REQ-2-3 |
| 2024_01_01_000002_create_tags_table.php | tagsテーブル作成 | REQ-2-3 |
| 2024_01_01_000003_create_videos_table.php | videosテーブル作成 | REQ-2-1, REQ-2-2, REQ-3-1, REQ-3-2 |
| 2024_01_01_000004_create_video_tag_table.php | video_tagテーブル作成 | REQ-2-3 |
| 2024_01_01_000005_create_watch_histories_table.php | watch_historiesテーブル作成 | REQ-1-3, REQ-3-2 |

## 第2フェーズでの拡張

### 追加予定テーブル

**収益化機能（REQ-5-1, REQ-5-2）**:
- `video_prices`: 動画ごとの価格設定
- `purchases`: 動画購入履歴
- `subscriptions`: 月額会員情報
- `payments`: 決済履歴

**アクセス管理強化（REQ-5-3, REQ-5-4）**:
- `groups`: ユーザーグループ
- `group_user`: グループとユーザーの中間テーブル
- `group_video`: グループと動画の中間テーブル
- `invitations`: 招待リンク情報

**視聴制限機能（REQ-5-5）**:
- `video_restrictions`: 視聴期限・回数制限設定

**セキュリティ強化（REQ-5-6, REQ-5-7）**:
- `two_factor_auth`: 二段階認証情報
- `backup_codes`: バックアップコード

### カラム追加予定

**users**:
- `email_verified_at`: メール認証日時（REQ-5-6）
- `two_factor_enabled`: 二段階認証有効化フラグ（REQ-5-7）

**videos**:
- `price`: 動画価格（REQ-5-1）
- `price_type`: 価格タイプ（買い切り/レンタル）（REQ-5-1）

## データベース設計原則

### 命名規則

- **テーブル名**: 小文字スネークケース、複数形（例: `users`, `watch_histories`）
- **カラム名**: 小文字スネークケース（例: `user_id`, `created_at`）
- **インデックス名**: `idx_{テーブル名}_{カラム名}` （例: `idx_videos_category_id`）
- **外部キー名**: `fk_{テーブル名}_{参照テーブル名}` （例: `fk_videos_categories`）

### 正規化方針

- **第3正規形**: 基本的に第3正規形を維持
- **非正規化**: パフォーマンス要件を満たすため、`videos.view_count`のみ意図的な非正規化を許可（視聴回数の集計コストを削減）

### セキュリティ考慮事項

- **パスワード**: bcryptでハッシュ化、ソルト自動付与（Laravelのデフォルト機能を使用）
- **個人情報**: 機密データ（メールアドレス、パスワード）は暗号化して保存
- **削除データ**: 論理削除（`deleted_at`）は使用せず、物理削除を基本とする（GDPR対応）
