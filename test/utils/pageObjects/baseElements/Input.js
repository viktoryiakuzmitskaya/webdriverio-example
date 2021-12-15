const logger = require("../../../config/logger.config");

class Input {
  constructor(elementName, selector) {
    this.elementName = elementName;
    this.selector = selector;
  }
  async getInput() {
    this.input = await browser.$(this.selector);
    return this.input;
  }
  async getValue() {
    await this.getInput();
    const inputValue = await this.input.getValue();
    logger.info(`Value of "${this.elementName}" element is "${inputValue}"`);
    return this.input.getValue();
  }
  async setValue(value) {
    await this.getInput();
    logger.info(`Setting "${value}" value to "${this.elementName}" element`);
    return this.input.setValue(value);
  }
  // async waitForInputToDisplayPreviouslyEnteredData(value) {
  //   await browser.waitUntil(async function () {
  //     const inputValue = await this.input.getValue();
  //     return (await inputValue) == value;
  //   });
  // }
}

module.exports = Input;
