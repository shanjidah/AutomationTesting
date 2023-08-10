const { expect } = require("@playwright/test");

exports.HomePage = class HomePage {
  /**
   * @param {import('@playwright/test').Page} page
   */
  constructor(page) {
    this.page = page;
    this.productMenu = this.page.locator(".card_travel");
  }

  // assertion of home page
  async gotoHomePage() {
    await expect(this.page).toHaveTitle("Automation Exercise");
  }
  async clickProductMenu() {
    await this.productMenu.click();

    await this.page.waitForLoadState("networkidle");
  }
};
