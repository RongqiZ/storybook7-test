import { test, expect } from '@playwright/test';
import { resolve } from 'path';

const rootDir = resolve(__dirname, '..');

test('has title', async ({ page }) => {
  await page.goto(`file://${resolve(rootDir, 'storybook-static/iframe.html?viewMode=docs&id=configure-your-project--docs')}`);
  const header = await page.locator('#configure-your-project')
  const headerText = await header.innerText();
  expect(headerText).toBe('Configure your project')
});
