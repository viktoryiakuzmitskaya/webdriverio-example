const startTypingDestinationCityValue = require("../../userActions/startTypingDestinationCityValue");
const generateMoveToElementByCoordinatesActionObject = require("../../userActions/generateMoveToElementByCoordinatesActionObject");

class SearchForm {
  get inputForDestinationCity() {
    return $("input#jb-autocomplete-2-search");
  }
  get destinationCitySuggestedOption() {
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

  async getInputCoordinates(input) {
    const inputLocation = await input.getLocation();
    const inputCoordinates = {
      x: Math.round(inputLocation.x),
      y: Math.round(inputLocation.y),
    };
    return inputCoordinates;
  }

  async emulateUserTypingValueIntoInput(inputCoordinates) {
    const moveToInputByCoordinates = generateMoveToElementByCoordinatesActionObject(inputCoordinates)
    await browser.performActions([
      moveToInputByCoordinates, 
      startTypingDestinationCityValue,
    ]);
  }
}

module.exports = SearchForm;
