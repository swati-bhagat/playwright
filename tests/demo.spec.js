import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://convertifile.com/');
  await page.getByRole('textbox', { name: 'Search here' }).click();
  await page.getByRole('link', { name: 'IMG  PDF IMG to PDF Easily' }).click();
  await page.getByRole('button', { name: 'Choose File' }).click();
  await page.getByRole('button', { name: 'Choose File' }).setInputFiles('istockphoto-1412581424-612x612.jpg');
  const downloadPromise = page.waitForEvent('download');
  await page.getByRole('button', { name: 'Download PDF' }).click();
  const download = await downloadPromise;
});