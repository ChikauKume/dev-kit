#!/usr/bin/env php
<?php
/**
 * Validation Rules Parser
 *
 * YAMLで定義されたバリデーションルールを読み込み、
 * 指定されたモジュール・Requestに対応する期待値を返す
 *
 * Usage:
 *   php parse-validation.php <ModuleName> <RequestClassName>
 *
 * Output (JSON):
 *   {
 *     "context": "registration",
 *     "fields": {
 *       "email": {
 *         "rules": ["required", "email", "unique:users,email"],
 *         "description": "メールアドレス"
 *       },
 *       ...
 *     }
 *   }
 */

declare(strict_types=1);

// Laravelのautoloaderを読み込む
require_once __DIR__ . '/../../../vendor/autoload.php';

use Symfony\Component\Yaml\Yaml;

// 引数チェック
if ($argc < 3) {
    fwrite(STDERR, "Usage: php parse-validation.php <ModuleName> <RequestClassName>\n");
    exit(1);
}

$moduleName = $argv[1];
$requestName = $argv[2];

// YAMLファイルのパス
$yamlPath = __DIR__ . '/../../config/validation-rules.yml';

if (!file_exists($yamlPath)) {
    // YAMLファイルが存在しない場合は空の結果を返す
    echo json_encode([
        'found' => false,
        'message' => 'validation-rules.yml not found',
    ]);
    exit(0);
}

try {
    // YAMLファイルを読み込み
    $config = Yaml::parseFile($yamlPath);

    // 指定されたモジュール・Requestの設定を取得
    if (isset($config['modules'][$moduleName][$requestName])) {
        $requestConfig = $config['modules'][$moduleName][$requestName];

        // 結果を出力
        echo json_encode([
            'found' => true,
            'module' => $moduleName,
            'request' => $requestName,
            'context' => $requestConfig['context'] ?? 'other',
            'description' => $requestConfig['description'] ?? '',
            'fields' => $requestConfig['fields'] ?? [],
        ], JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE);
    } else {
        // 設定が見つからない場合
        echo json_encode([
            'found' => false,
            'module' => $moduleName,
            'request' => $requestName,
            'message' => "No configuration found for {$moduleName}::{$requestName}",
        ]);
    }
} catch (Exception $e) {
    fwrite(STDERR, "Error: " . $e->getMessage() . "\n");
    exit(1);
}

exit(0);
