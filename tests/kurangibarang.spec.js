const { chromium } = require('playwright');
import { form } from "../asset/utils.spec.js"

(async () => {
  // Launch browser
  const browser = await chromium.launch({ headless: false });
  const context = await browser.newContext();
  const page = await context.newPage();

  // Navigate to Saucedemo
  await page.goto('https://www.saucedemo.com/');

  // Login process
  await page.fill(username, 'standard_user'); // Replace with valid username
  await page.fill(password, 'secret_sauce');   // Replace with valid password
  await page.click('#login-button');

  // Assert login success
  await page.waitForSelector('.inventory_list');
  console.log('Login successful!');

  // Add items to the cart
  await page.click('button[data-test="add-to-cart-sauce-labs-backpack"]');
  await page.click('button[data-test="add-to-cart-sauce-labs-bike-light"]');
  console.log('Items added to the cart!');

  // Navigate to the cart
  await page.click('.shopping_cart_link');
  await page.waitForSelector('.cart_list');
  console.log('Cart page loaded!');

  // Remove an item from the cart
  await page.click('button[data-test="remove-sauce-labs-backpack"]');
  console.log('Item removed from the cart!');

  // Verify remaining items in the cart
  const remainingItems = await page.$$eval('.cart_item', items => items.length);
  console.log(`Remaining items in the cart: ${remainingItems}`);

  // Close browser
  await browser.close();
})();
