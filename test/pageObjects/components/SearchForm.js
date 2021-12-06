class SearchForm {
  get inputForDestinationCity() {
    return $(
      "jb-autocomplete[data-qaid='autocomplete-city-selector'] input#jb-autocomplete-2-search"
    );
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
}

module.exports = SearchForm;
