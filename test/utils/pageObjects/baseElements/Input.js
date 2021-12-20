const BaseElement = require("./BaseElement");
const logger = require("../../../config/logger.config");
const startTypingDestinationCityValue = require("../../userActions/startTypingDestinationCityValue");
const generateMoveToElementByCoordinatesActionObject = require("../../userActions/generateMoveToElementByCoordinatesActionObject");

class Input extends BaseElement{
  constructor(elementName, selector) {
    super(elementName, selector);
    this.elementName = elementName;
    this.selector = selector;
  }  

  async emulateUserTypingValueIntoInput() {
    const inputCoordinates = await this.getElementCoordinates();
    const moveToInputByCoordinates = generateMoveToElementByCoordinatesActionObject(inputCoordinates);
    await browser.performActions([
      moveToInputByCoordinates, 
      startTypingDestinationCityValue,
    ]);
    logger.info(`Destination city value was typed in the input "${this.elementName}" with coordinates (${inputCoordinates.x}, ${inputCoordinates.y}) `);
  }
}

module.exports = Input;
