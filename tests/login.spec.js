import { test, expect } from "@playwright/test";

test("Login 1", async ({ page }) => {
  await page.goto("https://demo.applitools.com/");
  await page.pause();
  await page
    .getByPlaceholder("Enter your username")
    .fill("playwright@microsoft.com");
  await page.getByPlaceholder("Enter your password").fill("superPassword");
  await page.getByRole("link", { name: "Sign in" }).click();
});

test("Login 2", async ({ page }) => {
  await page.goto(
    "https://opensource-demo.orangehrmlive.com/web/index.php/auth/login"
  );
  await page.pause();
  await page.getByPlaceholder("Username").click();
  await page.getByPlaceholder("Username").fill("Admin");
  await page.getByPlaceholder("Password").click();
  await page.getByPlaceholder("Password").fill("admin123");
  await page.getByRole("button", { name: "Login" }).click();
  await page
    .locator("span")
    .filter({ hasText: "Krishna A" })
    .locator("i")
    .click();
  await page.getByRole("menuitem", { name: "Logout" }).click();
});

test.only("Login 3", async ({ page }) => {
  await page.pause();
  await page.goto(
    "https://admin-demo.nopcommerce.com/login?ReturnUrl=%2Fadmin%2F"
  );
  await page.getByLabel("Email:").click();
  await page.getByLabel("Email:").fill("");
  await page.getByLabel("Password:").click();
  await page.getByLabel("Password:").fill("");
  await page.getByLabel("Email:").click();
  await page.getByLabel("Email:").fill("admin@yourstore.com");
  await page.getByLabel("Password:").click();
  await page.getByLabel("Password:").fill("admin");
  await page.getByRole("button", { name: "Log in" }).click();
  await page.getByRole("link", { name: "Logout" }).click();

});
