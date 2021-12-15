const logger = require("../../../config/logger.config");

class BaseElement {
  constructor(elementName, selector) {
    this.elementName = elementName;
    this.selector = selector;
  }

  async getElement() {
    try {
      this.element = await browser.$(this.selector);
      if (this.element) {
        logger.info(`Element "${this.elementName}" is displayed`);
        return this.element;
      } else {
        logger.error(`Element "${this.elementName}" is not displayed`);
      }
    } catch (Error) {
      logger.error(`Element "${this.elementName}" is not displayed - ${Error}`);
    }
  }  

  async click() {
    await this.getElement();
    logger.info(`Clicking "${this.elementName}"`);
    return this.element.click();
  }

  async getText() {
    await this.getElement();
    const elementText = await this.element.getText();
    logger.info(`Text value of "${this.elementName}" is "${elementText}"`);
    return this.element.getText();
  }

  async getValue() {
    await this.getElement();
    const elementValue = await this.element.getValue();
    logger.info(`Value of "${this.elementName}" element is "${elementValue}"`);
    return this.element.getValue();
  }

  async setValue(value) {
    await this.getElement();
    logger.info(`Setting "${value}" value to "${this.elementName}" element`);
    return this.element.setValue(value);
  }  

  async highlightElement() {
    await this.getElement();
    logger.info(`Highlighting the element`);
    const elementInitialBackgroundColor = (await this.element.getCSSProperty('backgroundColor')).value;
    logger.debug(`Intial background color of element "${this.elementName}" is "${elementInitialBackgroundColor}"`);
    await browser.execute("arguments[0].style.backgroundColor = '" + "yellow" + "'", this.element);
    logger.debug(`Current background color of element "${this.elementName}" is yellow`);
    await browser.pause(1000);
    logger.debug(`Initial background color of element "${this.elementName}" is returned`);
    await browser.execute("arguments[0].style.backgroundColor = '" + elementInitialBackgroundColor + "'", this.element);
  } 

  async getElementCoordinates() {
    await this.getElement();
    const elementLocation = await this.element.getLocation();
    const elementCoordinates = {
      x: Math.round(elementLocation.x),
      y: Math.round(elementLocation.y),
    };
    logger.debug(`Element coordinates are (${elementCoordinates.x}, ${elementCoordinates.y})`);
    return elementCoordinates;
  }

}

module.exports = BaseElement;
