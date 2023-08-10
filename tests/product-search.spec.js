// @ts-check
const { test, expect } = require("@playwright/test");
const {HomePage} = require('./utils/homepage')

const {ProductPage} = require('./utils/productpage')

test.beforeEach(async ({ page }) => {
  await page.goto("/", { waitUntil: "networkidle" });
  await expect(page).toHaveURL('/');
});

test("Goto the product page & varify search field @product @search", async ({ page }) => {

  const HomePages = new HomePage(page)
  await HomePages.gotoHomePage()

  await HomePages.clickProductMenu()

  //Seach  product & verify that product

  const ProductPages = new ProductPage(page)
  await ProductPages.searchProduct()

  await page.waitForTimeout(2000)

 
});

