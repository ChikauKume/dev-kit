#!/usr/bin/env node

/**
 * PHPUnit Test Generator
 *
 * phpunit.yaml から Unit/Feature テストを抽出し、PHPUnit スクリプトを自動生成
 *
 * Usage:
 *   node dev-kit/scripts/generate/phpunit.cjs <spec-name>
 *   node dev-kit/scripts/generate/phpunit.cjs user-authentication
 */

const fs = require('fs');
const path = require('path');

/**
 * phpunit.yaml から Unit テスト定義を抽出
 */
function parseUnitTests(yamlPath) {
  if (!fs.existsSync(yamlPath)) {
    throw new Error(`phpunit.yaml not found: ${yamlPath}`);
  }

  const content = fs.readFileSync(yamlPath, 'utf-8');
  const yaml = require('yaml');
  const parsed = yaml.parse(content);

  const unitTests = [];

  if (!parsed.unit_tests || parsed.unit_tests.length === 0) {
    return unitTests;
  }

  // 新形式: unit_tests -> suite形式
  parsed.unit_tests.forEach((suite) => {
    const suiteName = suite.suite || 'UnknownSuite';
    const description = suite.description || '';

    // suite名からテストクラス名を生成
    // 例: "Domain/ValueObjects/Email" -> "EmailTest"
    const suitePathParts = suiteName.split('/');
    const targetClassName = suitePathParts[suitePathParts.length - 1];
    const testClassName = `${targetClassName}Test`;

    // namespace を生成
    // 例: "Domain/ValueObjects/Email" -> "Tests\Unit\Modules\User\Domain\ValueObjects"
    const namespace = `Tests\\Unit\\Modules\\User\\${suitePathParts.slice(0, -1).join('\\')}`;
    const testClass = `${namespace}\\${testClassName}`;

    const tests = suite.tests || [];

    unitTests.push({
      id: `unit-${suiteName.replace(/\//g, '-').toLowerCase()}`,
      name: description,
      target_class: `App\\Modules\\User\\${suiteName}`,
      test_class: testClass,
      test_cases: tests.map(test => ({
        name: test.name,
        category: test.category,
        input: test.input,
        expected: test.expected,
        assertion: test.assertion,
        setup: test.setup || null
      }))
    });
  });

  return unitTests;
}

/**
 * phpunit.yaml から Feature テスト定義を抽出
 */
function parseFeatureTests(yamlPath) {
  if (!fs.existsSync(yamlPath)) {
    throw new Error(`phpunit.yaml not found: ${yamlPath}`);
  }

  const content = fs.readFileSync(yamlPath, 'utf-8');
  const yaml = require('yaml');
  const parsed = yaml.parse(content);

  const featureTests = [];

  if (!parsed.feature_tests || parsed.feature_tests.length === 0) {
    return featureTests;
  }

  // 新形式: feature_tests -> suite形式
  parsed.feature_tests.forEach((suite) => {
    const suiteName = suite.suite || 'UnknownSuite';
    const method = suite.method || 'index';
    const description = suite.description || '';

    // suite名からテストクラス名を生成
    // 例: "Presentation/Controllers/AuthController" -> "AuthControllerTest"
    const suitePathParts = suiteName.split('/');
    const targetClassName = suitePathParts[suitePathParts.length - 1];
    const testClassName = `${targetClassName}Test`;

    // namespace を生成
    const namespace = `Tests\\Feature\\Modules\\User\\${suitePathParts.slice(0, -1).join('\\')}`;
    const testClass = `${namespace}\\${testClassName}`;

    const tests = suite.tests || [];

    featureTests.push({
      id: `feature-${suiteName.replace(/\//g, '-').toLowerCase()}-${method}`,
      name: description,
      endpoint: method,
      test_class: testClass,
      test_cases: tests.map(test => ({
        name: test.name,
        category: test.category,
        request: test.request,
        expected: test.expected,
        assertion: test.assertion,
        setup: test.setup || null
      }))
    });
  });

  return featureTests;
}

/**
 * アサーションを PHPUnit コードに変換
 */
function convertAssertionToPhpUnit(assertion) {
  const { type, expression, params } = assertion;
  const lines = [];

  switch (type) {
    case 'assertTrue':
      lines.push(`        $this->assertTrue(${expression});`);
      break;

    case 'assertFalse':
      lines.push(`        $this->assertFalse(${expression});`);
      break;

    case 'assertEquals':
      if (params && params.length >= 2) {
        lines.push(`        $this->assertEquals(${params[0]}, ${params[1]});`);
      }
      break;

    case 'assertNull':
      lines.push(`        $this->assertNull(${expression});`);
      break;

    case 'assertArrayHasKey':
      if (params && params.length >= 2) {
        lines.push(`        $this->assertArrayHasKey(${params[0]}, ${params[1]});`);
      }
      break;

    case 'assertStatus':
      if (params && params.length >= 1) {
        lines.push(`        $response->assertStatus(${params[0]});`);
      }
      break;

    case 'assertRedirect':
      if (params && params.length >= 1) {
        lines.push(`        $response->assertRedirect('${params[0]}');`);
      }
      break;

    case 'assertSessionHas':
      if (params && params.length >= 1) {
        lines.push(`        $response->assertSessionHas('${params[0]}');`);
      }
      break;

    case 'assertSessionHasErrors':
      if (params && params.length >= 1) {
        const fields = Array.isArray(params[0]) ? params[0] : params;
        lines.push(`        $response->assertSessionHasErrors([${fields.map(f => `'${f}'`).join(', ')}]);`);
      }
      break;

    case 'assertAuthenticatedAs':
      if (params && params.length >= 1) {
        lines.push(`        $this->assertAuthenticatedAs(${params[0]});`);
      }
      break;

    case 'assertGuest':
      lines.push(`        $this->assertGuest();`);
      break;

    case 'assertDatabaseHas':
      if (params && params.length >= 2) {
        lines.push(`        $this->assertDatabaseHas('${params[0]}', ${params[1]});`);
      }
      break;

    case 'assertInertia':
      if (params && params.length >= 1) {
        lines.push(`        $response->assertInertia(${params[0]});`);
      }
      break;

    default:
      lines.push(`        // TODO: Implement assertion '${type}'`);
      if (expression) lines.push(`        // Expression: ${expression}`);
      if (params) lines.push(`        // Params: ${JSON.stringify(params)}`);
  }

  return lines.join('\n');
}

/**
 * Unit Test スクリプト生成
 */
function generateUnitTestScript(unitTest, specName) {
  const testClassParts = unitTest.test_class.split('\\');
  const testClassName = testClassParts[testClassParts.length - 1];
  const namespace = testClassParts.slice(0, -1).join('\\');

  // メソッド名の重複を防ぐためのカウンター
  const methodNameCounts = {};

  const testCasesCode = unitTest.test_cases
    .map((testCase, index) => {
      let methodName = 'test_' + testCase.name
        .replace(/[（）]/g, '_')
        .replace(/[\s　]+/g, '_')
        .replace(/[^a-zA-Z0-9_]/g, '')
        .toLowerCase();

      // 重複チェック: 同じメソッド名が既に存在する場合は連番を追加
      if (methodNameCounts[methodName]) {
        methodNameCounts[methodName]++;
        methodName = `${methodName}_${methodNameCounts[methodName]}`;
      } else {
        methodNameCounts[methodName] = 1;
      }

      // 新形式のYAMLではassertionは文字列
      const assertionComment = testCase.assertion || 'TODO: Implement test';

      return `    /**
     * @test
     * ${testCase.name}
     */
    public function ${methodName}(): void
    {
        // ${assertionComment}
        $this->markTestIncomplete('TODO: Implement ${testCase.name}');
    }`;
    })
    .join('\n\n');

  const template = `<?php

declare(strict_types=1);

namespace ${namespace};

use Illuminate\\Support\\Facades\\Validator;
use PHPUnit\\Framework\\TestCase;

/**
 * ${unitTest.name}
 *
 * Target: ${unitTest.target_class}
 * Spec: ${specName}
 */
final class ${testClassName} extends TestCase
{
${testCasesCode}
}
`;

  return { fileName: `${testClassName}.php`, content: template };
}

/**
 * Feature Test スクリプト生成
 */
function generateFeatureTestScript(featureTest, specName) {
  const testClassParts = featureTest.test_class.split('\\');
  const testClassName = testClassParts[testClassParts.length - 1];
  const namespace = testClassParts.slice(0, -1).join('\\');

  // メソッド名の重複を防ぐためのカウンター
  const methodNameCounts = {};

  const testCasesCode = featureTest.test_cases
    .map((testCase, index) => {
      let methodName = 'test_' + testCase.name
        .replace(/[（）]/g, '_')
        .replace(/[\s　]+/g, '_')
        .replace(/[^a-zA-Z0-9_]/g, '')
        .toLowerCase();

      // 重複チェック: 同じメソッド名が既に存在する場合は連番を追加
      if (methodNameCounts[methodName]) {
        methodNameCounts[methodName]++;
        methodName = `${methodName}_${methodNameCounts[methodName]}`;
      } else {
        methodNameCounts[methodName] = 1;
      }

      // 新形式のYAMLではassertionは文字列
      const assertionComment = testCase.assertion || 'TODO: Implement test';

      // リクエスト情報があればコメントとして記載
      let requestComment = '';
      if (testCase.request) {
        requestComment = `
        // Request: ${testCase.request.method} ${testCase.request.url}`;
        if (testCase.request.data) {
          requestComment += `
        // Data: ${JSON.stringify(testCase.request.data)}`;
        }
      }

      return `    /**
     * @test
     * ${testCase.name}
     */
    public function ${methodName}(): void
    {${requestComment}
        // ${assertionComment}
        $this->markTestIncomplete('TODO: Implement ${testCase.name}');
    }`;
    })
    .join('\n\n');

  const template = `<?php

declare(strict_types=1);

namespace ${namespace};

use Illuminate\\Foundation\\Testing\\RefreshDatabase;
use Illuminate\\Support\\Facades\\Hash;
use Illuminate\\Support\\Facades\\Session;
use Tests\\TestCase;

/**
 * ${featureTest.name}
 *
 * Endpoint: ${featureTest.endpoint}
 * Spec: ${specName}
 */
final class ${testClassName} extends TestCase
{
    use RefreshDatabase;

${testCasesCode}
}
`;

  return { fileName: `${testClassName}.php`, content: template };
}

/**
 * メイン処理
 */
function main() {
  const args = process.argv.slice(2);

  if (args.length === 0) {
    console.error('❌ Usage: node dev-kit/scripts/generate/phpunit.cjs <spec-name> [--force]');
    console.error('   Example: node dev-kit/scripts/generate/phpunit.cjs user-authentication');
    console.error('   --force: Overwrite existing test files');
    process.exit(1);
  }

  // オプション解析
  const forceOverwrite = args.includes('--force');
  const specName = args.find(arg => !arg.startsWith('--'));
  const yamlPath = path.join(__dirname, `../../docs/specs/${specName}/tests/phpunit.yaml`);
  const unitOutputDir = path.join(__dirname, `../../../tests/Unit`);
  const featureOutputDir = path.join(__dirname, `../../../tests/Feature`);

  console.log('========================================');
  console.log('🚀 PHPUnit Test Generator');
  console.log('========================================\n');

  console.log(`📖 Reading phpunit.yaml: ${yamlPath}`);

  // YAML からテスト定義を抽出
  let unitTests = [];
  let featureTests = [];
  try {
    unitTests = parseUnitTests(yamlPath);
    featureTests = parseFeatureTests(yamlPath);
  } catch (error) {
    console.error(`❌ Error: ${error.message}`);
    process.exit(1);
  }

  if (unitTests.length === 0 && featureTests.length === 0) {
    console.error('❌ No PHPUnit tests found in phpunit.yaml');
    console.error('   Please check the YAML structure');
    process.exit(1);
  }

  console.log(`✅ Found ${unitTests.length} Unit test(s) and ${featureTests.length} Feature test(s)\n`);

  let generatedCount = 0;
  let skippedCount = 0;
  let overwrittenCount = 0;

  // Unit Test 生成
  if (unitTests.length > 0) {
    console.log('📝 Generating Unit Tests...\n');
    unitTests.forEach((unitTest) => {
      console.log(`📝 Processing ${unitTest.id}: ${unitTest.name}`);

      const { fileName, content } = generateUnitTestScript(unitTest, specName);
      const testClassPath = unitTest.test_class.replace(/\\/g, '/').replace('Tests/', '');
      const filePath = path.join(__dirname, '../../../tests', testClassPath + '.php');
      const fileDir = path.dirname(filePath);

      // ディレクトリ作成
      if (!fs.existsSync(fileDir)) {
        fs.mkdirSync(fileDir, { recursive: true });
        console.log(`   📁 Created directory: ${fileDir}`);
      }

      const fileExists = fs.existsSync(filePath);

      // 既存ファイルの処理
      if (fileExists && !forceOverwrite) {
        console.log(`   ⚠️  SKIP: ${fileName} already exists (use --force to overwrite)`);
        skippedCount++;
      } else {
        fs.writeFileSync(filePath, content, 'utf-8');
        if (fileExists) {
          console.log(`   🔄 Overwritten: ${fileName}`);
          overwrittenCount++;
        } else {
          console.log(`   ✅ Created: ${fileName}`);
          generatedCount++;
        }
      }
    });
  }

  // Feature Test 生成
  if (featureTests.length > 0) {
    console.log('\n📝 Generating Feature Tests...\n');
    featureTests.forEach((featureTest) => {
      console.log(`📝 Processing ${featureTest.id}: ${featureTest.name}`);

      const { fileName, content } = generateFeatureTestScript(featureTest, specName);
      const testClassPath = featureTest.test_class.replace(/\\/g, '/').replace('Tests/', '');
      const filePath = path.join(__dirname, '../../../tests', testClassPath + '.php');
      const fileDir = path.dirname(filePath);

      // ディレクトリ作成
      if (!fs.existsSync(fileDir)) {
        fs.mkdirSync(fileDir, { recursive: true });
        console.log(`   📁 Created directory: ${fileDir}`);
      }

      const fileExists = fs.existsSync(filePath);

      // 既存ファイルの処理
      if (fileExists && !forceOverwrite) {
        console.log(`   ⚠️  SKIP: ${fileName} already exists (use --force to overwrite)`);
        skippedCount++;
      } else {
        fs.writeFileSync(filePath, content, 'utf-8');
        if (fileExists) {
          console.log(`   🔄 Overwritten: ${fileName}`);
          overwrittenCount++;
        } else {
          console.log(`   ✅ Created: ${fileName}`);
          generatedCount++;
        }
      }
    });
  }

  console.log('\n========================================');
  console.log('✅ PHPUnit Test Generation Complete!');
  console.log('========================================\n');

  console.log(`📊 Summary:`);
  console.log(`   Generated:   ${generatedCount}`);
  console.log(`   Overwritten: ${overwrittenCount}`);
  console.log(`   Skipped:     ${skippedCount}`);
  console.log(`   Total:       ${unitTests.length + featureTests.length}\n`);

  console.log('Next steps:');
  console.log(`  1. Review generated tests in:`);
  console.log(`     - tests/Unit/`);
  console.log(`     - tests/Feature/`);
  console.log(`  2. Run tests: ./vendor/bin/sail artisan test`);
  console.log(`  3. Implement missing functionality to make tests pass\n`);
}

// 実行
if (require.main === module) {
  main();
}

module.exports = { parseUnitTests, parseFeatureTests };
