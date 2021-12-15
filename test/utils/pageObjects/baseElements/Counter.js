const logger = require("../../../config/logger.config");

class Counter {
    constructor(elementName, selector) {
      this.elementName = elementName;
      this.selector = selector;
    }
    async getCounter() {
      this.counter = await browser.$(this.selector);
      return this.counter;
    }
    async getText() {
        await this.getCounter();
        const counterText = await this.counter.getText();
        logger.info(`Text value of "${this.elementName}" is "${counterText}"`);
        return this.counter.getText();
      }
  }
  
  module.exports = Counter;
  