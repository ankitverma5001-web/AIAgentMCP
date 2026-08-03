const { test, expect } = require('@playwright/test');

test('homepage has Playwright in title and get started link', async ({ page }) => {
  await page.goto('https://playwright.dev/');
  await expect(page).toHaveTitle(/Playwright/);
  const getStarted = page.locator('text=Get started');
  await expect(getStarted).toBeVisible();
});
