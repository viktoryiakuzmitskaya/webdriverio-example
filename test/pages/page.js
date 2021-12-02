class Page {
    async open (url) {
        await browser.url(url);
        await browser.maximizeWindow();
    }
}

module.exports = Page;