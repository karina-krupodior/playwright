import { test, expect } from "@playwright/test";

test("Assetions", async ({ page }) => {
  await page.goto("https://kitchen.applitools.com/");
  // Assetion
  // check element present or not
  //   await page.getByRole("heading", { name: "The Kitchen" }).click();
  // or
  await expect(page.locator("text=The Kitchen")).toHaveCount(1);

  if (await page.$("text=The Kitchen")) {
    // statement returns true or false
    await page.locator("text=The Kitchen").click();
  }

  // check element hidden or visible
  await expect(page.locator("text=The Kitchen")).toBeVisible();
  // await expect.soft(page.locator("text=The Kitchen")).toBeHidden();

  // check element enabled or disabled
  await expect(page.locator("text=The Kitchen")).toBeEditable();
  // expect.soft(page.locator("text=The Kitchen")).toBeDisabled();

  // ckeck test
  await expect(page.locator("text=The Kitchen")).toHaveText("The Kitchen");
  // await expect
  //   .soft(page.locator("text=The Kitchen"))
  //   .not.toHaveText("The Kitchen");

  // check attribute value
  await expect
    .soft(page.locator("text=The Kitchen"))
    .toHaveAttribute("class", "chakra-heading css-dpmy2a");
  // await expect
  //   .soft(page.locator("The Kitchen"))
  //   .toHaveClass("chakra-heading css-dpmy2a");

  // check url
  await expect.soft(page).toHaveURL("https://kitchen.applitools.com/");
  // check title
  await expect.soft(page).toHaveTitle("The Kitchen");

  await page.pause();
  // visual validation with screenshot
  await expect(page).toHaveScreenshot();
});
