const { expect } = require("@playwright/test");

exports.ProductPage = class ProductPage {
  /**
   * @param {import('@playwright/test').Page} page
   */
  constructor(page) {
    this.page = page;
    this.searchField = page.locator("#search_product");
    this.searchSubmit = page.locator("#submit_search");
    this.searchProductText = page.locator(".title.text-center");
    this.productName = page.locator(
      "div.single-products > div.productinfo.text-center > p"
    );
    this.viewProduct = page
      .locator('//a[contains(text(),"View Product")]')
      .first();

    this.productQuantity = page.locator("#quantity");
    this.addToCartButton = page.locator(".btn-default.cart");
    this.viewCartDetails = page.locator(
      "#cartModal > div > div > div.modal-body > p:nth-child(2) > a > u"
    );
    this.cartProductQuantity = page.locator("td.cart_quantity > button");
  }

  // assertion of home page
  async searchProduct() {

    await expect(this.searchProductText).toContainText("All Products");
    await this.searchField.click();

    await this.searchField.type("Fancy Green Top");

    await this.searchSubmit.click();

    await expect(this.searchProductText).toContainText("Searched Products");

    await this.productName.click();

    // Add assertion to verify searched product

    await expect(this.productName).toHaveText("Fancy Green Top");
  }
  async clickProductMenu() {
    await this.productMenu.click();

    await this.page.waitForLoadState("networkidle");
  }

  // addto cart product & validate it

  async addToCartProduct() {
    await this.viewProduct.click();

    await this.productQuantity.clear();

    await this.productQuantity.click();

    await this.productQuantity.type("4");

    await this.addToCartButton.click();

    await this.viewCartDetails.click();

    await this.page.waitForLoadState("load");

    await expect(this.cartProductQuantity).toHaveText("4");
  }
};
