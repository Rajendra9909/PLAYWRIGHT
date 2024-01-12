//import { test, expect } from '@playwright/test';

const{test, expect} = require('@playwright/test');
test('test', async ({ page }) => {
  await page.goto('https://admin-demo.nopcommerce.com/login');
  await page.getByLabel('Email:').clear()
  await page.getByLabel('Email:').fill('admin@yourstore.com');
  await page.pause();
  await page.getByLabel('Password:').clear()
  await page.getByLabel('Password:').fill('admin');
  await page.locator("//button[normalize-space()='Log in']").click();
  await expect(page.locator("//a[normalize-space()='Logout']")).toHaveText('Logout');

});