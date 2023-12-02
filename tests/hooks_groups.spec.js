const { test } = require("@playwright/test");

test.describe("All Tests", () => {
  // this particular function will run before each test of this file
  test.beforeEach("login", async ({ page }) => {
    await page.goto("https://www.saucedemo.com/v1/");
    await page.locator('[data-test="username"]').fill("standard_user");
    await page.locator('[data-test="password"]').fill("secret_sauce");
    await page.getByRole("button", { name: "LOGIN" }).click();
  });


  test("homepage", async ({ page }) => {
    await page.getByRole("link", { name: "Sauce Labs Backpack" }).click();
    await page.getByRole("button", { name: "ADD TO CART" }).click();
    await page.getByRole("button", { name: "<- Back" }).click();
    await page.getByRole("button", { name: "ADD TO CART" }).nth(4).click();
    await page.getByRole("link", { name: "Sauce Labs Fleece Jacket" }).click();
    await page.getByRole("button", { name: "ADD TO CART" }).click();
    await page.getByRole("button", { name: "<- Back" }).click();
    await page.getByRole("link", { name: "3" }).click();
    await page.getByRole("link", { name: "CHECKOUT" }).click();
  });

  test("logout", async ({ page }) => {
    await page.getByRole("button", { name: "Open Menu" }).click();
    await page.getByRole("link", { name: "Logout" }).click();
    await page.close();
  });
});
