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
        page_name: '',
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
    if (line.match(/^\s{4}page_name:\s*(.+)$/)) {
      currentScenario.page_name = line.match(/page_name:\s*(.+)$/)[1].trim();
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
  const { action, url, selector, value, expected, description, step_name } = step;
  const lines = [];

  // step_name が指定されていない場合、description を使用
  const effectiveStepName = step_name || description;

  // コメント追加（step_name も description もない場合のみ）
  if (description && !effectiveStepName) {
    lines.push(`    // ${description}`);
  }

  switch (action) {
    case 'navigate':
      lines.push(`    await page.goto('${url}');`);
      lines.push(`    await page.waitForLoadState('networkidle');`);
      // 視覚確認用の待機を自動追加
      lines.push(`    await page.waitForTimeout(500);`);
      break;

    case 'type':
      // フィールドが表示されるまで待機してから入力
      lines.push(`    await page.locator('${selector}').waitFor({ state: 'visible' });`);
      lines.push(`    await page.fill('${selector}', '${value}');`);
      break;

    case 'click':
      // :has-text() セレクタの場合は getByRole().filter() を使用（推奨）
      if (selector.includes(':has-text(')) {
        const match = selector.match(/^(.*?):has-text\(["'](.+?)["']\)$/);
        if (match) {
          const [, baseSelector, textContent] = match;
          // button:has-text("登録") → button で role="button" かつ text="登録"
          if (baseSelector === 'button') {
            lines.push(`    await page.getByRole('button', { name: '${textContent}' }).click();`);
          } else if (baseSelector === 'a') {
            lines.push(`    await page.getByRole('link', { name: '${textContent}' }).click();`);
          } else {
            // フォールバック: 従来の方法
            lines.push(`    await page.locator('${selector}').click();`);
          }
        } else {
          lines.push(`    await page.click('${selector}');`);
        }
      } else {
        lines.push(`    await page.click('${selector}');`);
      }
      // クリック後の処理完了を待つ
      lines.push(`    await page.waitForLoadState('domcontentloaded');`);
      break;

    case 'check':
      lines.push(`    await page.locator('${selector}').waitFor({ state: 'visible' });`);
      lines.push(`    await page.check('${selector}');`);
      break;

    case 'uncheck':
      lines.push(`    await page.locator('${selector}').waitFor({ state: 'visible' });`);
      lines.push(`    await page.uncheck('${selector}');`);
      break;

    case 'assert':
      if (expected) {
        // h1, h2など見出しタグの場合は first() を使用して最初の要素のみチェック
        if (selector.match(/^(h[1-6]|h1|h2|h3|h4|h5|h6)$/)) {
          lines.push(`    await expect(page.locator('${selector}').first()).toContainText('${expected}');`);
        } else {
          lines.push(`    await expect(page.locator('${selector}')).toContainText('${expected}');`);
        }
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
        lines.push(`    await page.waitForLoadState('networkidle');`);
        // 視覚確認用の待機を自動追加（リダイレクト後）
        lines.push(`    await page.waitForTimeout(1000);`);
      } else {
        lines.push(`    await page.waitForLoadState('networkidle');`);
        lines.push(`    await page.waitForTimeout(500);`);
      }
      break;

    case 'wait':
      const timeout = step.timeout || step.duration || 1000;
      lines.push(`    await page.waitForTimeout(${timeout});`);
      break;

    case 'screenshot':
      const screenshotPath = step.path || `screenshots/step-${index}.png`;
      lines.push(`    await page.screenshot({ path: '${screenshotPath}' });`);
      break;

    case 'assert_url':
      // 完全一致または正規表現でURLチェック
      if (expected.startsWith('/') && !expected.includes('*') && !expected.includes('?')) {
        // パス指定の場合は末尾一致でチェック（クエリパラメータを無視）
        lines.push(`    await expect(page).toHaveURL(new RegExp('${expected.replace(/\//g, '\\/')}(\\\\?.*)?$'));`);
      } else {
        lines.push(`    await expect(page).toHaveURL('${expected}');`);
      }
      break;

    case 'assert_visible':
      // text= セレクタの場合は getByText() を使用（推奨）
      if (selector.startsWith('text=')) {
        const textContent = selector.replace(/^text=["']?|["']?$/g, '');
        lines.push(`    await expect(page.getByText('${textContent}')).toBeVisible();`);
      } else {
        lines.push(`    await expect(page.locator('${selector}')).toBeVisible();`);
      }
      break;

    case 'assert_value':
      lines.push(`    await expect(page.locator('${selector}')).toHaveValue('${expected}');`);
      break;

    case 'assert_checked':
      if (expected === 'false' || expected === false) {
        lines.push(`    await expect(page.locator('${selector}')).not.toBeChecked();`);
      } else {
        lines.push(`    await expect(page.locator('${selector}')).toBeChecked();`);
      }
      break;

    case 'clear':
      lines.push(`    await page.locator('${selector}').clear();`);
      break;

    case 'blur':
      lines.push(`    await page.locator('${selector}').blur();`);
      break;

    default:
      lines.push(`    // TODO: Implement action '${action}'`);
      if (selector) lines.push(`    // Selector: ${selector}`);
      if (value) lines.push(`    // Value: ${value}`);
      if (expected) lines.push(`    // Expected: ${expected}`);
  }

  // step_name または description が指定されている場合は test.step() でラップ
  if (effectiveStepName) {
    const wrappedLines = [
      `    await test.step('${effectiveStepName}', async () => {`,
      ...lines.map(line => `  ${line}`), // インデントを2スペース追加
      `    });`
    ];
    return wrappedLines.join('\n');
  }

  return lines.join('\n');
}

/**
 * Playwrightスクリプト生成
 */
function generatePlaywrightScript(scenario, specName) {
  // ファイル名: IDを使用（page_nameだと複数シナリオで衝突するため）
  const fileName = `${scenario.id}.spec.ts`;

  // nameから種別と内容を抽出
  // 例: "ユーザー登録フロー（正常系）" → "正常系：ユーザー登録処理"
  let categoryLabel = '';
  let testContent = scenario.name;

  const normalMatch = scenario.name.match(/^(.+?)（正常系）$/);
  const errorMatch = scenario.name.match(/^(.+?)（異常系）$/);

  if (normalMatch) {
    testContent = normalMatch[1].replace(/フロー$/, '処理');
    categoryLabel = '正常系：' + testContent;
  } else if (errorMatch) {
    testContent = errorMatch[1].replace(/フロー$/, '処理');
    categoryLabel = '異常系：' + testContent;
  } else {
    // 種別が明示されていない場合
    categoryLabel = testContent.replace(/フロー$/, '処理');
  }

  const stepsCode = scenario.steps
    .map((step, index) => convertActionToPlaywright(step, index))
    .join('\n\n');

  const template = `import { test, expect } from '@playwright/test';

/**
 * ${categoryLabel}
 *
 * ${scenario.description}
 *
 * Scenario ID: ${scenario.id}
 * Category: ${scenario.category}
 */

const BASE_URL = process.env.BASE_URL || 'http://localhost';

/**
 * 視覚的検証: ページスタイルが適用されているか確認
 * ui-components CSS未適用による空白画面を検知
 */
async function verifyPageStyling(page, mainSelector = '#app > *') {
  // Reactアプリのマウント完了を待つ
  await page.waitForSelector(mainSelector, { timeout: 10000 });

  // メインコンテンツが存在することを確認
  const mainContent = page.locator(mainSelector);
  await expect(mainContent).toBeVisible();

  // スタイルが適用されているか確認（空白画面でない）
  const hasStyles = await mainContent.evaluate((el) => {
    const computed = window.getComputedStyle(el);
    // 背景色または文字色が設定されていることを確認
    // デフォルト値（rgba(0, 0, 0, 0)）でないことをチェック
    const bgColor = computed.backgroundColor;
    const textColor = computed.color;
    const hasBackground = bgColor !== 'rgba(0, 0, 0, 0)';
    const hasTextColor = textColor !== 'rgb(0, 0, 0)' && textColor !== '';
    return hasBackground || hasTextColor;
  });

  if (!hasStyles) {
    throw new Error('❌ Page styling not applied. Check ui-components CSS import in app.tsx');
  }
}

test.describe('${scenario.id}: ${scenario.name}', () => {
  test('${scenario.description}', async ({ page }) => {
${stepsCode}

    // 視覚的検証: スタイルが適用されていることを確認
    await verifyPageStyling(page);
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
    console.error('❌ Usage: node dev-kit/scripts/generate/e2e.cjs <spec-name> [--force]');
    console.error('   Example: node dev-kit/scripts/generate/e2e.cjs user-authentication');
    console.error('   --force: Overwrite existing test files');
    process.exit(1);
  }

  // オプション解析
  const forceOverwrite = args.includes('--force');
  const specName = args.find(arg => !arg.startsWith('--'));
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
  let overwrittenCount = 0;

  scenarios.forEach((scenario, index) => {
    console.log(`📝 Processing ${scenario.id}: ${scenario.name}`);

    const { fileName, content } = generatePlaywrightScript(scenario, specName);
    const filePath = path.join(outputDir, fileName);

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

  console.log('\n========================================');
  console.log('✅ E2E Test Generation Complete!');
  console.log('========================================\n');

  console.log(`📊 Summary:`);
  console.log(`   Generated:  ${generatedCount}`);
  console.log(`   Overwritten: ${overwrittenCount}`);
  console.log(`   Skipped:    ${skippedCount}`);
  console.log(`   Total:      ${scenarios.length}\n`);

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
