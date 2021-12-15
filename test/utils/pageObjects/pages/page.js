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
}

module.exports = Page;
