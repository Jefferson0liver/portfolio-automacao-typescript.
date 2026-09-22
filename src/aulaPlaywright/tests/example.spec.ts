import { test, expect } from '@playwright/test';

test('verificar titulo da pagina', async ({ page }) => {
  await page.goto('https://playwright.dev/');
  await expect(page).toHaveTitle(/Playwright/);
});