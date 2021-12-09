class Page {
  async open(url) {
    await browser.url(url);
    await browser.maximizeWindow();
  }
  async goBack() {
    await browser.back();
  }
  async waitForElement(element, milliseconds) {
    await element.waitForDisplayed(milliseconds);
  }
  async highlightElement(element) {
    const elementInitialBackgroundColor = (await element.getCSSProperty('backgroundColor')).value;
    await browser.execute("arguments[0].style.backgroundColor = '" + "yellow" + "'", element);
    await browser.pause(1000);
    await browser.execute("arguments[0].style.backgroundColor = '" + elementInitialBackgroundColor + "'", element);
  }
}

module.exports = Page;
