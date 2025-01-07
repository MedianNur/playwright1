// @ts-check
const { test, expect } = require('@playwright/test');

test('has title and checks element', async ({ page }) => {
  // Navigasi ke URL Shopee
  await page.goto('https://shopee.co.id/');

  // Memeriksa apakah judul halaman mengandung "Shopee"
  await expect(page).toHaveTitle(/Shopee/);

  // Menemukan elemen tertentu di halaman (misalnya, ikon dengan atribut tertentu)
  const element = page.locator("//a[@class='jsl9A1']//*[name()='svg']");

  // Memeriksa bahwa elemen tersebut memang ada dan terlihat
  await expect(element).toBeVisible();
});
