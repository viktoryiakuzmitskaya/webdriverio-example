const Page = require("./page");
const SearchForm = require("../components/SearchForm")

class HomePage extends Page {
  get searchForm() {
    return new SearchForm();
  }
  get acceptCookiesFrame() {
    return $("//iframe[@class='truste_popframe']");
  }
  get acceptCookiesButton() {
    return $(".call");
  }   
  get travelersDropdownTrigger() {
    return $('button[title="Travelers"]');
  } 
  get adultPassengersCalculator() {
    return $('jb-incrementer[increaselabel="add adult"]');
  }
  get adultPassengersIncrementButton() {
    return this.adultPassengersCalculator.$('button[aria-label="add adult"]');
  }
  get adultPassengersDecrementButton() {
    return this.adultPassengersCalculator.$('button[aria-label="remove adult"]');
  }
  get adultPassengersCounter() {
    return this.adultPassengersCalculator.$('span');
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
