const { test, expect } = require('@playwright/test');

test('Assertion and Locator', async ({ page }) => {
  await page.goto('https://www.saucedemo.com/');

  const getNewTitle = await page.title();

  await expect(getNewTitle).toBe('Swag Labs');
  console.log(`Title: ${getNewTitle}`);

  const InputUsername = page.locator('#user-name');
  await InputUsername.fill('standard_user');
  await expect(InputUsername).toHaveValue('standard_user');

  const InputPassword = page.locator('#password');
  await InputPassword.fill('secret_sauce');
  await expect(InputPassword).toHaveValue('secret_sauce');

  const LoginButton = page.locator('#login-button');
  await LoginButton.click();

  const buttonATC = page.locator('#add-to-cart-sauce-labs-backpack');
  await buttonATC.click();

  const linkCart = page.locator('#shopping_cart_container');
  await linkCart.click();

  await page.getByRole('button', { name: 'checkout' }).click();

  const inputFirstName = page.locator('#first-name');
  await inputFirstName.fill('pengguna');
  const inputLastName = page.locator('#last-name');
  await inputLastName.fill('satu');
  const inputPostCode = page.locator('#postal-code');
  await inputPostCode.fill('12345');
  await page.getByRole('button', { name: 'continue' }).click();

  await page.getByRole('button', { name: 'finish' }).click();

  await expect(page.getByText('Thank you for your order!')).toBeVisible();
});
