const Button = require("../baseElements/Button");
const Counter = require("../baseElements/Counter");

class TravelersSelector {
  constructor(componentName) {
    this.componentName = componentName;
  }
  get travelersDropdownTrigger() {
    return new Button("Travelers Dropdown Trigger", 'button[title="Travelers"]');
  }
  get adultPassengersCounter() {
    return new Counter("Adult Passengers Counter", 'jb-incrementer[increaselabel="add adult"] span');
  }
  get adultPassengersIncrementButton() {
    return new Button("Adult Passengers Increment Button", 'button[aria-label="add adult"]');
  }
  get adultPassengersDecrementButton() {
    return new Button("Adult Passengers Decrement Button", 
      'button[aria-label="remove adult"]'
    );
  }
}

module.exports = TravelersSelector;
