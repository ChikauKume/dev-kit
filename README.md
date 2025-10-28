# dev-kit

複数プロジェクト間で共有可能な開発ツールとテンプレート集

## 構成

```
dev-kit/
├── ui-components/    # 共通UIライブラリ
├── docs/
│   ├── templates/    # ドキュメントテンプレート
│   ├── architecture/ # システム固有（gitignore対象）
│   ├── specs/        # システム固有（gitignore対象）
│   └── test-reports/ # システム固有（gitignore対象）
└── scripts/          # 検証・テストスクリプト
```

システム固有のドキュメントは各プロジェクトのGitリポジトリで管理されます。
