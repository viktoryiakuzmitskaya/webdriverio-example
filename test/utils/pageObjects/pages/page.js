const logger = require("../../../config/logger.config");

class Page {
  async open(url) {
    await browser.url(url);
    await browser.maximizeWindow();
  }
  async goBack() {
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
    const elementInitialBackgroundColor = (await element.getCSSProperty('backgroundColor')).value;
    await browser.execute("arguments[0].style.backgroundColor = '" + "yellow" + "'", element);
    await browser.pause(1000);
    await browser.execute("arguments[0].style.backgroundColor = '" + elementInitialBackgroundColor + "'", element);
  }
}

module.exports = Page;
