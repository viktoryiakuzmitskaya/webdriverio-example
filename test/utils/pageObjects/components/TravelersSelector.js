const BaseElement = require("../baseElements/BaseElement");

class TravelersSelector {
  constructor(componentName) {
    this.componentName = componentName;
  }
  get travelersDropdownTrigger() {
    return new BaseElement("Travelers Dropdown Trigger", 'button[title="Travelers"]');
  }
  get adultPassengersCounter() {
    return new BaseElement("Adult Passengers Counter", 'jb-incrementer[increaselabel="add adult"] span');
  }
  get adultPassengersIncrementButton() {
    return new BaseElement("Adult Passengers Increment Button", 'button[aria-label="add adult"]');
  }
  get adultPassengersDecrementButton() {
    return new BaseElement("Adult Passengers Decrement Button", 
      'button[aria-label="remove adult"]'
    );
  }
}

module.exports = TravelersSelector;
