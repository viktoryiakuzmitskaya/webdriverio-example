const Page = require("./page");
const SearchForm = require("../components/SearchForm");
const TravelersSelector = require("../components/TravelersSelector");

class HomePage extends Page {
  get acceptCookiesFrame() {
    return $("//iframe[@class='truste_popframe']");
  }
  get acceptCookiesButton() {
    return $(".call");
  }
  get searchForm() {
    return new SearchForm();
  }
  get travelersSelector() {
    return new TravelersSelector();
  }

  async acceptCookies() {
    const acceptCookiesFrame = await this.acceptCookiesFrame;
    await this.acceptCookiesFrame.waitForDisplayed(10000);
    await browser.switchToFrame(acceptCookiesFrame);
    await this.acceptCookiesButton.click();
  }

  async waitForInputToDisplayPreviouslyEnteredData(input) {
    await input.waitUntil(async function () {
      return (await this.getValue()) != "";
    });
  }
}

module.exports = new HomePage();
