#!/usr/bin/env node

/**
 * E2E Test Generator
 *
 * e2e.yaml から E2E シナリオを抽出し、Playwright スクリプトを自動生成
 *
 * Usage:
 *   node dev-kit/scripts/generate/e2e.cjs <spec-name>
 *   node dev-kit/scripts/generate/e2e.cjs user-authentication
 */

const fs = require('fs');
const path = require('path');

/**
 * e2e.yaml からシナリオを抽出（簡易YAMLパーサー）
 */
function parseE2ETestsYaml(yamlPath) {
  if (!fs.existsSync(yamlPath)) {
    throw new Error(`e2e.yaml not found: ${yamlPath}`);
  }

  const content = fs.readFileSync(yamlPath, 'utf-8');
  const lines = content.split('\n');

  const scenarios = [];
  let inScenariosSection = false;
  let currentScenario = null;
  let currentSteps = [];
  let inStepsSection = false;
  let currentIndent = 0;

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];

    // scenarios: セクション開始
    if (line.match(/^scenarios:/)) {
      inScenariosSection = true;
      continue;
    }

    if (!inScenariosSection) continue;

    // 次のトップレベルセクションで終了
    if (line.match(/^[a-z_]+:/) && !line.match(/^\s/)) {
      break;
    }

    // 新しいシナリオ開始（- id:）
    if (line.match(/^\s{2}-\s+id:\s*(.+)$/)) {
      // 前のシナリオを保存
      if (currentScenario) {
        currentScenario.steps = currentSteps;
        scenarios.push(currentScenario);
      }

      currentScenario = {
        id: line.match(/id:\s*(.+)$/)[1].trim(),
        name: '',
        category: '',
        description: '',
        steps: [],
      };
      currentSteps = [];
      inStepsSection = false;
      continue;
    }

    if (!currentScenario) continue;

    // シナリオのフィールド抽出
    if (line.match(/^\s{4}name:\s*(.+)$/)) {
      currentScenario.name = line.match(/name:\s*(.+)$/)[1].trim();
    }
    if (line.match(/^\s{4}category:\s*(.+)$/)) {
      currentScenario.category = line.match(/category:\s*(.+)$/)[1].trim();
    }
    if (line.match(/^\s{4}description:\s*\|?\s*$/)) {
      // 複数行descriptionの開始（次の行から読み込む）
      let j = i + 1;
      let desc = [];
      while (j < lines.length && lines[j].match(/^\s{6,}/)) {
        desc.push(lines[j].trim());
        j++;
      }
      currentScenario.description = desc.join(' ').trim();
      i = j - 1;
      continue;
    }

    // steps: セクション開始
    if (line.match(/^\s{4}steps:/)) {
      inStepsSection = true;
      continue;
    }

    if (!inStepsSection) continue;

    // ステップ抽出（- action:）
    if (line.match(/^\s{6}-\s+action:\s*(.+)$/)) {
      const action = line.match(/action:\s*(.+)$/)[1].trim();
      const step = { action };

      // 次の行からステップの詳細を読み込む
      let j = i + 1;
      while (j < lines.length) {
        const nextLine = lines[j];

        // 次のステップまたはセクション終了
        if (nextLine.match(/^\s{6}-\s+action:/) || nextLine.match(/^\s{0,4}[a-z_]+:/)) {
          break;
        }

        // ステップのプロパティを抽出
        if (nextLine.match(/^\s{8}(\w+):\s*(.+)$/)) {
          const [, key, value] = nextLine.match(/^\s{8}(\w+):\s*(.+)$/);
          step[key] = value.trim().replace(/^["']|["']$/g, '');
        }

        j++;
      }

      currentSteps.push(step);
      i = j - 1;
    }
  }

  // 最後のシナリオを保存
  if (currentScenario) {
    currentScenario.steps = currentSteps;
    scenarios.push(currentScenario);
  }

  return scenarios;
}

/**
 * アクションをPlaywrightコードに変換
 */
function convertActionToPlaywright(step, index) {
  const { action, url, selector, value, expected, description } = step;
  const lines = [];

  // コメント追加
  if (description) {
    lines.push(`    // ${description}`);
  }

  switch (action) {
    case 'navigate':
      lines.push(`    await page.goto('${url}');`);
      lines.push(`    await page.waitForLoadState('networkidle');`);
      break;

    case 'type':
      lines.push(`    await page.fill('${selector}', '${value}');`);
      break;

    case 'click':
      lines.push(`    await page.click('${selector}');`);
      break;

    case 'check':
      lines.push(`    await page.check('${selector}');`);
      break;

    case 'uncheck':
      lines.push(`    await page.uncheck('${selector}');`);
      break;

    case 'assert':
      if (expected) {
        lines.push(`    await expect(page.locator('${selector}')).toContainText('${expected}');`);
      } else {
        lines.push(`    await expect(page.locator('${selector}')).toBeVisible();`);
      }
      break;

    case 'assert_text_contains':
      lines.push(`    await expect(page.locator('${selector}')).toContainText('${expected}');`);
      break;

    case 'assert_not_visible':
      lines.push(`    await expect(page.locator('${selector}')).not.toBeVisible();`);
      break;

    case 'wait_for_navigation':
      if (url) {
        lines.push(`    await page.waitForURL('${url}');`);
      } else {
        lines.push(`    await page.waitForLoadState('networkidle');`);
      }
      break;

    case 'wait':
      const timeout = step.timeout || 1000;
      lines.push(`    await page.waitForTimeout(${timeout});`);
      break;

    case 'screenshot':
      const screenshotPath = step.path || `screenshots/step-${index}.png`;
      lines.push(`    await page.screenshot({ path: '${screenshotPath}' });`);
      break;

    default:
      lines.push(`    // TODO: Implement action '${action}'`);
      if (selector) lines.push(`    // Selector: ${selector}`);
      if (value) lines.push(`    // Value: ${value}`);
      if (expected) lines.push(`    // Expected: ${expected}`);
  }

  return lines.join('\n');
}

/**
 * Playwrightスクリプト生成
 */
function generatePlaywrightScript(scenario, specName) {
  // ファイル名: シナリオ名をPascalCaseに変換
  const fileName = scenario.name
    .replace(/[（）\(\)]/g, '')
    .replace(/[\s・]/g, '-')
    .replace(/[-]+/g, '-')
    + '.spec.ts';

  const stepsCode = scenario.steps
    .map((step, index) => convertActionToPlaywright(step, index))
    .join('\n\n');

  const template = `import { test, expect } from '@playwright/test';

/**
 * ${scenario.id}: ${scenario.name}
 *
 * ${scenario.description}
 *
 * Category: ${scenario.category}
 */

const BASE_URL = process.env.BASE_URL || 'http://localhost';

test.describe('${scenario.id}: ${scenario.name}', () => {
  test('${scenario.description}', async ({ page }) => {
${stepsCode}
  });
});
`;

  return { fileName, content: template };
}

/**
 * メイン処理
 */
function main() {
  const args = process.argv.slice(2);

  if (args.length === 0) {
    console.error('❌ Usage: node dev-kit/scripts/generate/e2e.cjs <spec-name>');
    console.error('   Example: node dev-kit/scripts/generate/e2e.cjs user-authentication');
    process.exit(1);
  }

  const specName = args[0];
  const yamlPath = path.join(__dirname, `../../docs/specs/${specName}/tests/e2e.yaml`);
  const outputDir = path.join(__dirname, `../../../tests/e2e/${specName}`);

  console.log('========================================');
  console.log('🚀 E2E Test Generator');
  console.log('========================================\n');

  console.log(`📖 Reading e2e.yaml: ${yamlPath}`);

  // YAMLからシナリオを抽出
  let scenarios;
  try {
    scenarios = parseE2ETestsYaml(yamlPath);
  } catch (error) {
    console.error(`❌ Error: ${error.message}`);
    process.exit(1);
  }

  if (scenarios.length === 0) {
    console.error('❌ No E2E scenarios found in e2e.yaml');
    console.error('   Please check the YAML structure');
    process.exit(1);
  }

  console.log(`✅ Found ${scenarios.length} E2E scenario(s)\n`);

  // 出力ディレクトリ作成
  if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir, { recursive: true });
    console.log(`📁 Created directory: ${outputDir}\n`);
  }

  // スクリプト生成
  let generatedCount = 0;
  let skippedCount = 0;

  scenarios.forEach((scenario, index) => {
    console.log(`📝 Processing ${scenario.id}: ${scenario.name}`);

    const { fileName, content } = generatePlaywrightScript(scenario, specName);
    const filePath = path.join(outputDir, fileName);

    // 既存ファイルをスキップ
    if (fs.existsSync(filePath)) {
      console.log(`   ⚠️  SKIP: ${fileName} already exists`);
      skippedCount++;
    } else {
      fs.writeFileSync(filePath, content, 'utf-8');
      console.log(`   ✅ Created: ${fileName}`);
      generatedCount++;
    }
  });

  console.log('\n========================================');
  console.log('✅ E2E Test Generation Complete!');
  console.log('========================================\n');

  console.log(`📊 Summary:`);
  console.log(`   Generated: ${generatedCount}`);
  console.log(`   Skipped:   ${skippedCount}`);
  console.log(`   Total:     ${scenarios.length}\n`);

  console.log('Next steps:');
  console.log(`  1. Review generated tests in: tests/e2e/${specName}/`);
  console.log(`  2. Run tests: npm run test:e2e`);
  console.log(`  3. Customize tests as needed\n`);
}

// 実行
if (require.main === module) {
  main();
}

module.exports = { parseE2ETestsYaml, convertActionToPlaywright };
