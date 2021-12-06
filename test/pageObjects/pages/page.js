class Page {
    async open (url) {
        await browser.url(url);
        await browser.maximizeWindow();
    }
    async goBack() {
        await browser.back();
    }
    async waitForElement(element, milliseconds) {
        await element.waitForDisplayed(milliseconds);
    }
}

module.exports = Page;