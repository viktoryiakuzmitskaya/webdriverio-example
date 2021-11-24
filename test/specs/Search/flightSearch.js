const { expect } = require("chai");

describe("Flight search", () => {
  it('should show error messages if required fields are empty', async () => {
    await browser.url("https://www.jetblue.com/");
    await browser.maximizeWindow();
    const acceptCookiesFrame = await $("//iframe[@class='truste_popframe']");
    await acceptCookiesFrame.waitForDisplayed(10000);
    await browser.switchToFrame(acceptCookiesFrame);
    const acceptCookiesButton = await $(".call");
    await acceptCookiesButton.click();
    const searchButton = await $('.jb-booker-air-submit');
    await searchButton.click();  
    const errorMessages = await $('form').$$('.jb-error');
    const errorForEmptyDestinationCity = await errorMessages[0].$('span').getText();
    const errorForEmptyDepartureDate = await errorMessages[1].$('span').getText();
    const errorForEmptyReturnDate = await errorMessages[2].$('span').getText();
    expect(errorForEmptyDestinationCity).to.be.equal("Please enter a valid city.");
    expect(errorForEmptyDepartureDate).to.be.equal("Please enter a valid date.");
    expect(errorForEmptyReturnDate).to.be.equal("Please enter a valid date.");
  });
});
