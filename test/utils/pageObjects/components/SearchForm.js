const logger = require("../../../config/logger.config");
const BaseElement = require("../baseElements/BaseElement");
const Input = require("../baseElements/Input");

class SearchForm {
  constructor(componentName) {
    this.componentName = componentName;
  }
  get inputForDestinationCity() {
    return new Input("Destination City Input", "input#jb-autocomplete-2-search");
  }
  get destinationCitySuggestedOption() {
    return $("jb-autocomplete[data-qaid='autocomplete-city-selector'] strong");
  }
  get inputForDepartureDate() {
    return new Input("Departure Date Input", "#jb-date-picker-input-id-0");
  }
  get inputForReturnDate() {
    return new Input("Return Date Input", "#jb-date-picker-input-id-1");
  }
  get searchButton() {
    return new BaseElement("Search Button", ".jb-booker-air-submit");
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

  async waitForInputToBeNotEmpty(input) {
    await browser.waitUntil(async function () {
      logger.info(`Waiting for input "${input.elementName}" to be not empty`);
      return (await input.getValue()) != "";
    });
  }
}

module.exports = SearchForm;
