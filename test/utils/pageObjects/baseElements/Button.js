const logger = require("../../../config/logger.config");

class Button {
    constructor(elementName, selector) {
      this.elementName = elementName;
      this.selector = selector;
    }
    async getButton() {
      this.button = await browser.$(this.selector);
      return this.button;
    }
    async click() {
        await this.getButton();
        logger.info(`Clicking "${this.elementName}"`);
        return this.button.click();
      }
  }
  
  module.exports = Button;
  