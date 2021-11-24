const { expect } = require("chai");

describe("Search fields", () => {
  it('"To", "Depart", "Return" fields should be empty by default', async () => {
    await browser.url("https://www.jetblue.com/");
    await browser.maximizeWindow();
    const acceptCookiesFrame = await $("//iframe[@class='truste_popframe']");
    await acceptCookiesFrame.waitForDisplayed(3000);
    await browser.switchToFrame(acceptCookiesFrame);
    const acceptCookiesButton = await $(".call");
    await acceptCookiesButton.click();
    const inputForDestinationCity = await $("#jb-autocomplete-2-search");
    const inputForDepartureDate = await $("#jb-date-picker-input-id-0");
    const inputForReturnDate = await $("#jb-date-picker-input-id-1");
    expect(await inputForDestinationCity.getValue()).to.be.equal("");
    expect(await inputForDepartureDate.getValue()).to.be.equal("");
    expect(await inputForReturnDate.getValue()).to.be.equal("");
  });
});
