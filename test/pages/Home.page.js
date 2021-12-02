const Page = require("./page");

class HomePage extends Page {
  get acceptCookiesFrame() {
    return $("//iframe[@class='truste_popframe']");
  }
  get acceptCookiesButton() {
    return $(".call");
  }
  get inputForDestinationCity() {
    return $("#jb-autocomplete-2-search");
  }
  get inputForDepartureDate() {
    return $("#jb-date-picker-input-id-0");
  }
  get inputForReturnDate() {
    return $("#jb-date-picker-input-id-1");
  }

  async acceptCookies() {
    const acceptCookiesFrame = await this.acceptCookiesFrame;
    await this.acceptCookiesFrame.waitForDisplayed(10000);
    await browser.switchToFrame(acceptCookiesFrame);
    await this.acceptCookiesButton.click();
  }
}

module.exports = new HomePage();
