import { test } from "@playwright/test";
test.skip("Test one", async ({ page }) => {});

test("not test ready", async ({ page }) => {
  test.fail();
});

test.fixme("test need to fixed", async ({ page }) => {});

test("slow test", async ({ page }) => {
  test.slow();
});

test("skip this test", async ({ page, browserName }) => {
  test.skip(browserName === "firefox", "Still working on it");
});

test("Test login page @smoke", async ({ page }) => {
  // ...
});

test("Test full report @slow", async ({ page }) => {
  // ...
});
