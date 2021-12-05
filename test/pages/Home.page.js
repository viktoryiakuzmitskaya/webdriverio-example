const Page = require("./page");

class HomePage extends Page {
  get acceptCookiesFrame() {
    return $("//iframe[@class='truste_popframe']");
  }
  get acceptCookiesButton() {
    return $(".call");
  }
  get inputForDestinationCity() {
    return $("jb-autocomplete[data-qaid='autocomplete-city-selector'] input#jb-autocomplete-2-search");
  }
  get destinationCitySuggestedOption(){
    return $("jb-autocomplete[data-qaid='autocomplete-city-selector'] strong");
  }
  get inputForDepartureDate() {
    return $("#jb-date-picker-input-id-0");
  }
  get inputForReturnDate() {
    return $("#jb-date-picker-input-id-1");
  }
  get searchButton() {
    return $(".jb-booker-air-submit");
  }
  get errorForEmptyDestinationCity() {
    return $("#jb-error-id-4");
  }   
  get errorForEmptyDepartureDate() {
    return $("#jb-error-id-0");
  } 
  get errorForEmptyReturnDate() {
    return $("#jb-error-id-1");
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
