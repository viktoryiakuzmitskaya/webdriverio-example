const { expect } = require("chai");

describe("Destination city field", () => {
  it("should preserve destination city value after receiving no results and navigating back in browser", async () => {
    await browser.url("https://www.jetblue.com/");
    await browser.maximizeWindow();
    const acceptCookiesFrame = await $("//iframe[@class='truste_popframe']");
    await acceptCookiesFrame.waitForDisplayed(3000);
    await browser.switchToFrame(acceptCookiesFrame);
    const acceptCookiesButton = await $(".call");
    await acceptCookiesButton.click();
    const inputForDestinationCity = await $("#jb-autocomplete-2-search");
    await inputForDestinationCity.waitForDisplayed(2000);
    const inputForDepartureDate = await $("#jb-date-picker-input-id-0");
    const inputForReturnDate = await $("#jb-date-picker-input-id-1");
    await inputForDestinationCity.addValue("Dubrovnik, Croatia (DBV)");
    const destinationCity = await $("strong*=Dubrovnik, Croatia (DBV)");
    await destinationCity.waitForDisplayed(2000);
    await destinationCity.click();
    await inputForDepartureDate.addValue("Tue Nov 30");
    await inputForReturnDate.addValue("Wed Dec 1");
    const searchButton = await $(".jb-booker-air-submit");
    await searchButton.click();
    const noFlightsFoundMessage = await $(
      "h2*=No flights have been found for your search criteria."
    );
    await noFlightsFoundMessage.waitForDisplayed(10000);
    await browser.back();
    await inputForDestinationCity.waitUntil(async function () {
      return (await this.getValue()) != "";
    });
    expect(await inputForDestinationCity.getValue()).to.be.equal(
      "Dubrovnik, Croatia (DBV)"
    );
    expect(await inputForDepartureDate.getValue()).to.be.equal("");
    expect(await inputForReturnDate.getValue()).to.be.equal("");
  });
});
