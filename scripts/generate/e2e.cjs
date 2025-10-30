#!/usr/bin/env node

/**
 * E2E Test Generator
 *
 * design.md から E2E シナリオを抽出し、Playwright スクリプトを自動生成
 *
 * Usage:
 *   node dev-kit/scripts/e2e/generate-e2e-tests.js <spec-name>
 *   node dev-kit/scripts/e2e/generate-e2e-tests.js user-authentication
 */

const fs = require('fs');
const path = require('path');

/**
 * design.md からE2Eシナリオセクションを抽出
 */
function extractE2EScenariosFromDesign(designMdPath) {
  if (!fs.existsSync(designMdPath)) {
    throw new Error(`design.md not found: ${designMdPath}`);
  }

  const content = fs.readFileSync(designMdPath, 'utf-8');

  // E2Eテストシナリオセクションを抽出
  const e2eSectionMatch = content.match(/## E2Eテストシナリオ[\s\S]*$/);

  if (!e2eSectionMatch) {
    console.warn('⚠️  No "## E2Eテストシナリオ" section found in design.md');
    return [];
  }

  const e2eSection = e2eSectionMatch[0];

  // 各シナリオを抽出（#### E2E-XXX: で始まる）
  const scenarioPattern = /#### (E2E-\d+): (.+?)\n\n([\s\S]*?)(?=\n#### E2E-\d+:|$)/g;
  const scenarios = [];

  let match;
  while ((match = scenarioPattern.exec(e2eSection)) !== null) {
    const [, scenarioId, scenarioTitle, scenarioBody] = match;

    // 各フィールドを抽出
    const scenario = {
      id: scenarioId,
      title: scenarioTitle,
      purpose: extractField(scenarioBody, '**目的**:'),
      preconditions: extractListField(scenarioBody, '**前提条件**:'),
      steps: extractListField(scenarioBody, '**ステップ**:'),
      expectedResults: extractListField(scenarioBody, '**期待結果**:'),
      verifications: extractListField(scenarioBody, '**検証項目**:'),
    };

    scenarios.push(scenario);
  }

  return scenarios;
}

/**
 * フィールド抽出（単一行）
 */
function extractField(text, fieldName) {
  // エスケープ処理: ** を \*\* に変換
  const escapedFieldName = fieldName.replace(/\*/g, '\\*');
  const pattern = new RegExp(`${escapedFieldName}\\s*(.+?)(?=\\n\\*\\*|$)`, 's');
  const match = text.match(pattern);
  return match ? match[1].trim() : '';
}

/**
 * リスト形式フィールド抽出
 */
function extractListField(text, fieldName) {
  // エスケープ処理: ** を \*\* に変換
  const escapedFieldName = fieldName.replace(/\*/g, '\\*');
  const pattern = new RegExp(`${escapedFieldName}\\s*([\\s\\S]*?)(?=\\n\\*\\*|$)`);
  const match = text.match(pattern);

  if (!match) return [];

  const listText = match[1];
  const items = listText
    .split('\n')
    .filter(line => line.trim().match(/^[-\d\.]/))
    .map(line => line.replace(/^[-\d\.\s\[\]]+/, '').trim());

  return items;
}

/**
 * ステップをPlaywrightコマンドに変換
 */
function convertStepToPlaywright(step, stepIndex) {
  const commands = [];

  // URL遷移
  if (step.match(/`(.+?)`\s*にアクセス/)) {
    const url = step.match(/`(.+?)`/)[1];
    commands.push(`    // Step ${stepIndex + 1}: ${step}`);
    commands.push(`    await page.goto('${url}');`);
    commands.push(`    await page.waitForLoadState('networkidle');`);
    return commands.join('\n');
  }

  // 遷移確認
  if (step.match(/`(.+?)`\s*に遷移することを確認/)) {
    const url = step.match(/`(.+?)`/)[1];
    commands.push(`    // Step ${stepIndex + 1}: ${step}`);
    commands.push(`    await expect(page).toHaveURL('${url}');`);
    return commands.join('\n');
  }

  // リダイレクト確認
  if (step.match(/`(.+?)`\s*にリダイレクトされることを確認/)) {
    const url = step.match(/`(.+?)`/)[1];
    commands.push(`    // Step ${stepIndex + 1}: ${step}`);
    commands.push(`    await expect(page).toHaveURL('${url}');`);
    return commands.join('\n');
  }

  // フォーム入力（パターン: フィールド名: "値"）
  if (step.match(/(.+?):\s*"(.+?)"/)) {
    const [, fieldLabel, value] = step.match(/(.+?):\s*"(.+?)"/);
    const fieldName = inferFieldName(fieldLabel.trim());
    commands.push(`    // ${step}`);
    commands.push(`    await page.fill('input[name="${fieldName}"]', '${value}');`);
    return commands.join('\n');
  }

  // チェックボックス
  if (step.match(/(.+?):\s*チェック/)) {
    const fieldLabel = step.match(/(.+?):/)[1].trim();
    const fieldName = inferFieldName(fieldLabel);
    commands.push(`    // ${step}`);
    commands.push(`    await page.check('input[name="${fieldName}"]');`);
    return commands.join('\n');
  }

  // ボタンクリック
  if (step.match(/「(.+?)」.*?ボタンをクリック/) || step.match(/「(.+?)」をクリック/)) {
    const buttonText = step.match(/「(.+?)」/)[1];
    commands.push(`    // Step ${stepIndex + 1}: ${step}`);
    commands.push(`    await page.click('button:has-text("${buttonText}")');`);
    return commands.join('\n');
  }

  // テキスト表示確認
  if (step.match(/「?(.+?)」?が表示されることを確認/)) {
    const text = step.match(/「?(.+?)」?が表示/)[1];
    commands.push(`    // Step ${stepIndex + 1}: ${step}`);
    commands.push(`    await expect(page.locator('text=${text}')).toBeVisible();`);
    return commands.join('\n');
  }

  // テキスト非表示確認
  if (step.match(/(.+?)が表示されていないこと/)) {
    const text = step.match(/(.+?)が表示されていない/)[1];
    commands.push(`    // Step ${stepIndex + 1}: ${step}`);
    commands.push(`    await expect(page.locator('text=${text}')).not.toBeVisible();`);
    return commands.join('\n');
  }

  // エラーメッセージ表示
  if (step.match(/エラーメッセージが表示/)) {
    commands.push(`    // Step ${stepIndex + 1}: ${step}`);
    commands.push(`    await expect(page.locator('.form-error')).toBeVisible();`);
    return commands.join('\n');
  }

  // フォーム入力（複数行パターン）
  if (step.match(/フォームに(.+?)を入力/)) {
    commands.push(`    // Step ${stepIndex + 1}: ${step}`);
    return commands.join('\n');
  }

  // デフォルト（コメントのみ）
  commands.push(`    // Step ${stepIndex + 1}: ${step}`);
  commands.push(`    // TODO: Implement this step manually`);
  return commands.join('\n');
}

/**
 * フィールドラベルからname属性を推測
 */
function inferFieldName(label) {
  const mapping = {
    '名前': 'name',
    'メールアドレス': 'email',
    'メール': 'email',
    'パスワード（確認）': 'password_confirmation',
    'パスワード': 'password',
    '電話番号': 'phone',
    '利用規約': 'agreeToTerms',
  };

  return mapping[label] || label.toLowerCase().replace(/\s+/g, '_');
}

/**
 * Playwrightスクリプト生成
 */
function generatePlaywrightScript(scenario, specName) {
  const fileName = `${scenario.id.toLowerCase()}.spec.ts`;

  const stepsCode = scenario.steps
    .map((step, index) => convertStepToPlaywright(step, index))
    .join('\n\n');

  const template = `import { test, expect } from '@playwright/test';

/**
 * ${scenario.id}: ${scenario.title}
 *
 * 目的: ${scenario.purpose}
 */

test.describe('${scenario.id}: ${scenario.title}', () => {
  test('should ${scenario.purpose}', async ({ page }) => {
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
    console.error('❌ Usage: node generate-e2e-tests.js <spec-name>');
    console.error('   Example: node generate-e2e-tests.js user-authentication');
    process.exit(1);
  }

  const specName = args[0];
  const designMdPath = path.join(__dirname, `../../docs/specs/${specName}/design.md`);
  const outputDir = path.join(__dirname, `../../../tests/e2e/${specName}`);

  console.log('========================================');
  console.log('🚀 E2E Test Generator');
  console.log('========================================\n');

  console.log(`📖 Reading design.md: ${designMdPath}`);

  // E2Eシナリオ抽出
  const scenarios = extractE2EScenariosFromDesign(designMdPath);

  if (scenarios.length === 0) {
    console.error('❌ No E2E scenarios found in design.md');
    console.error('   Please add "## E2Eテストシナリオ" section to design.md');
    process.exit(1);
  }

  console.log(`✅ Found ${scenarios.length} E2E scenario(s)\n`);

  // 出力ディレクトリ作成
  if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir, { recursive: true });
    console.log(`📁 Created directory: ${outputDir}\n`);
  }

  // スクリプト生成
  scenarios.forEach((scenario, index) => {
    console.log(`📝 Generating ${scenario.id}: ${scenario.title}`);

    const { fileName, content } = generatePlaywrightScript(scenario, specName);
    const filePath = path.join(outputDir, fileName);

    fs.writeFileSync(filePath, content, 'utf-8');
    console.log(`   ✅ Created: ${filePath}`);
  });

  console.log('\n========================================');
  console.log('✅ E2E Test Generation Complete!');
  console.log('========================================\n');

  console.log('Next steps:');
  console.log(`  1. Review generated tests in: tests/e2e/${specName}/`);
  console.log(`  2. Run tests: npm run test:e2e tests/e2e/${specName}/`);
  console.log(`  3. Customize tests as needed\n`);
}

// 実行
if (require.main === module) {
  main();
}

module.exports = { extractE2EScenariosFromDesign, convertStepToPlaywright };
