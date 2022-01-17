const logger = require("../../../config/logger.config");
const Page = require("./page");
const SearchForm = require("../components/SearchForm");
const BaseElement = require("../baseElements/BaseElement");

class HomePage extends Page {
  get acceptCookiesFrame() {
    return $("//iframe[@class='truste_popframe']");
  }
  get acceptCookiesButton() {
    return new BaseElement("Accept Cookies Button", ".call");
  }
  get searchForm() {
    return new SearchForm("Search Form");
  }

  async acceptCookies() {
    const acceptCookiesFrame = await this.acceptCookiesFrame;
    await this.acceptCookiesFrame.waitForDisplayed(10000);
    await browser.switchToFrame(acceptCookiesFrame);
    await this.acceptCookiesButton.click();
    logger.info(`Cookies are accepted`);
  }
}

module.exports = new HomePage();
