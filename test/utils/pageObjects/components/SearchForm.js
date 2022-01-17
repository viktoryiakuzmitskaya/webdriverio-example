const BaseElement = require("../baseElements/BaseElement");
const Input = require("../baseElements/Input");

class SearchForm {
  constructor(componentName) {
    this.componentName = componentName;
  }
  get inputForDestinationCity() {
    return new Input("Destination City Input", "input#jb-autocomplete-2-search");
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
    return new BaseElement("Error For Empty Destination City", "#jb-error-id-4");
  }
  get errorForEmptyDepartureDate() {
    return new BaseElement("Error For Empty Departure Date", "#jb-error-id-0");
  }
  get errorForEmptyReturnDate() {
    return new BaseElement("Error For Empty Return Date", "#jb-error-id-1");
  }

}

module.exports = SearchForm;
