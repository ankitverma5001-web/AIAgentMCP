const { test, expect } = require('@playwright/test');

test('login, add iPhone X to cart, and verify on checkout page', async ({ page }) => {
  await page.goto('https://rahulshettyacademy.com/loginpagePractise/');

  await page.fill('input[name="username"]', 'rahulshettyacademy');
  await page.fill('input[name="password"]', 'Learning@830$3mK2');

  await Promise.all([
    page.waitForNavigation({ url: /.*angularpractice\/shop/, waitUntil: 'load' }),
    page.click('input#signInBtn'),
  ]);

  await expect(page).toHaveURL(/.*angularpractice\/shop/);
  await expect(page.locator('a.nav-link:has-text("Shop")')).toBeVisible();

  const productCard = page.locator('div.card:has-text("iphone X")');
  await expect(productCard).toBeVisible();
  await productCard.locator('button:has-text("Add")').click();

  await page.locator('a:has-text("Checkout")').click();
  await expect(page.locator('text=Product')).toBeVisible();
  await expect(page.locator('text=iphone X')).toBeVisible();
});
