import { test, expect } from '@playwright/test';


test('test', async ({ page }) => {
  await page.goto('http://secure.smartbearsoftware.com/samples/TestComplete11/WebOrders/Login.aspx');
  await page.getByLabel('Username:').click();
  await page.getByLabel('Username:').fill('Tester');
  await page.getByLabel('Password:').click();
  await page.getByLabel('Password:').fill('test');
  await page.locator("input[id='ctl00_MainContent_login_button']").click()
  //await page.goto('http://secure.smartbearsoftware.com/samples/TestComplete11/WebOrders/default.aspx');
 // await page.getByRole('link', { name: 'Logout' }).click();
  await page.goto('http://secure.smartbearsoftware.com/samples/TestComplete11/WebOrders/Login.aspx?ReturnUrl=%2fsamples%2fTestComplete11%2fWebOrders%2fDefault.aspx');
  await expect(page.locator("//a[@id='ctl00_logout']")).toHaveText('Logout');

});