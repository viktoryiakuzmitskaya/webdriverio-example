const { expect } = require("chai");
const HomePage = require("../../pages/home.page");

describe("Destination city field", () => {
  it("should preserve only destination city value after receiving no results and navigating back in browser", async () => {
    await HomePage.open("https://www.jetblue.com/");
    await HomePage.acceptCookies();
  //   const inputForDestinationCity = await $("#jb-autocomplete-2-search");
  //   await inputForDestinationCity.waitForDisplayed(10000);
  //   const inputForDepartureDate = await $("#jb-date-picker-input-id-0");
  //   const inputForReturnDate = await $("#jb-date-picker-input-id-1");
  //   await inputForDestinationCity.addValue("Dubrovnik, Croatia (DBV)");
  //   const destinationCity = await $("strong*=Dubrovnik, Croatia (DBV)");
  //   await destinationCity.waitForDisplayed(10000);
  //   await destinationCity.click();
  //   await inputForDepartureDate.addValue("Sun Feb 27");
  //   await inputForReturnDate.addValue("Mon Feb 28");
  //   const searchButton = await $(".jb-booker-air-submit");
  //   await searchButton.click();
  //   const noFlightsFoundMessage = await $(
  //     "h2*=No flights have been found for your search criteria."
  //   );
  //   await noFlightsFoundMessage.waitForDisplayed(10000);
  //   await browser.back();
  //   await inputForDestinationCity.waitUntil(async function () {
  //     return (await this.getValue()) != "";
  //   });
  //   expect(await inputForDestinationCity.getValue()).to.be.equal(
  //     "Dubrovnik, Croatia (DBV)"
  //   );
  //   expect(await inputForDepartureDate.getValue()).to.be.equal("");
  //   expect(await inputForReturnDate.getValue()).to.be.equal("");
  });
});
