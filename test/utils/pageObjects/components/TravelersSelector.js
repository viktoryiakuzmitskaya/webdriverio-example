class TravelersSelector {
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
    return this.adultPassengersCalculator.$(
      'button[aria-label="remove adult"]'
    );
  }
  get adultPassengersCounter() {
    return this.adultPassengersCalculator.$("span");
  }
}

module.exports = TravelersSelector;
