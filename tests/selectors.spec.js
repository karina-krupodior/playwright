import { test, expect } from "@playwright/test";

test("sauce demo", async ({ page }) => {
  await page.goto("https://www.saucedemo.com/v1/");
  await page.click("id=user-name");
  await page.locator("id=user-name").fill("Karina");
  // using CSS celector #login-button
  await page.locator("#login-button").click();
  // using XPath
  //input[@name="password"]
  await page.locator('xpath=//input[@name="user-name"]').fill("Karina");
  await page.locator('//input[@name="user-name"]').fill("Krupodor");
  // using TEXT
  await page.pause();
  await page.locator("text=LOGIN").click();
  await page.locator('input:has-text("LOGIN")').click();

});
