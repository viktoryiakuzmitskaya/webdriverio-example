const logger = require("../../../config/logger.config");

class Page {
  async open(url) {
    logger.info(`Opening "${url}"`);
    await browser.url(url);
    logger.info(`Maximizing the window`);
    await browser.maximizeWindow();
  }
  async goBack() {
    logger.info(`Returning back`);
    await browser.back();
  }
  async waitForElement(element, milliseconds) {
      try {
        const isElementDisplayed = await element.waitForDisplayed(milliseconds);
        if (isElementDisplayed) { 
          logger.info(`Element is displayed`);
        } else {
          logger.error(`Element is not displayed`);
        }
      } catch(Error) {
          logger.error(`Element is not displayed- ${Error}`); 
      };
    }
    
  async highlightElement(element) {
    logger.info(`Highlighting the element`);
    const elementInitialBackgroundColor = (await element.getCSSProperty('backgroundColor')).value;
    logger.debug(`Intial background of highlighted element is "${elementInitialBackgroundColor}"`);
    await browser.execute("arguments[0].style.backgroundColor = '" + "yellow" + "'", element);
    await browser.pause(1000);
    await browser.execute("arguments[0].style.backgroundColor = '" + elementInitialBackgroundColor + "'", element);
  }
}

module.exports = Page;
