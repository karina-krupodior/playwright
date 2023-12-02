const { test, expect } = require("@playwright/test");
const { hello, helloWorld } = require("./demo/hello");
const { title } = require("process");

console.log(hello());
console.log(helloWorld());

test("My first test", async ({ page }) => {
  await page.goto("https://www.google.com/");
  await expect(page).toHaveTitle("Google");
});
