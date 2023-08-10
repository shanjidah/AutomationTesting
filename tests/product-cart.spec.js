// @ts-check
const { test, expect } = require("@playwright/test");
const { HomePage } = require("./utils/homepage");
const { ProductPage } = require("./utils/productpage");

test.beforeEach(async ({ page }) => {
  await page.goto("/", { waitUntil: "networkidle" });
  await expect(page).toHaveURL("/");
});

test("View product & verify product quantity @product", async ({ page }) => {

  const HomePages = new HomePage(page)
  await HomePages.gotoHomePage()

  // view product from homepage & add it to cart

  const ProductPages = new ProductPage(page)
  await ProductPages.addToCartProduct();

});
