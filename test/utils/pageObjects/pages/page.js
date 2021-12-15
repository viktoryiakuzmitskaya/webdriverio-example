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
}

module.exports = Page;
