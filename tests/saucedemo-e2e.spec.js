const { test, expect } = require('@playwright/test');

test('End-to-End Test on Sauce Demo', async ({ page }) => {
  // Navigate to the Sauce Demo website
  await page.goto('https://www.saucedemo.com/');

  // Step 1: Login
  await page.fill('#user-name', 'standard_user'); // Username
  await page.fill('#password', 'secret_sauce');  // Password
  await page.click('#login-button');            // Click Login button

  // Verify successful login by checking the presence of the inventory page
  await expect(page.locator('.inventory_list')).toBeVisible();

  // Step 2: Add a product to the cart
  await page.click('text=Add to cart', { nth: 0 }); // Add the first product to the cart

  // Verify the cart badge updates
  const cartBadge = page.locator('.shopping_cart_badge');
  await expect(cartBadge).toHaveText('1');

  // Step 3: Go to the cart
  await page.click('.shopping_cart_link');

  // Verify the cart page is displayed
  await expect(page.locator('.cart_list')).toBeVisible();

  // Step 4: Proceed to checkout
  await page.click('#checkout');

  // Fill in checkout information
  await page.fill('#first-name', 'John'); // First name
  await page.fill('#last-name', 'Doe');  // Last name
  await page.fill('#postal-code', '12345'); // Postal code
  await page.click('#continue');

  // Verify the checkout overview page
  await expect(page.locator('.summary_info')).toBeVisible();

  // Step 5: Finish the checkout
  await page.click('#finish');

  // Verify the order confirmation
  await expect(page.locator('.complete-header')).toHaveText('Thank you for your order!');

  //test

  // End of the test
});
