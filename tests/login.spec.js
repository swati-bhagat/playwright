 const {test,expect}=require('@playwright/test');
 test("vaild login",async function ({page}) {

    await page.goto("https://practice.expandtesting.com/login")
    await page.locator("//input[@id='username']").type("practice");
    await page.locator("//input[@id='password']").type("SuperSecretPassword!");
    await page.locator("//button[normalize-space()='Login']").click();
    await page.waitForTimeout(5000)
    
   await expect(page).toHaveURL("https://practice.expandtesting.com/secure")
 })
