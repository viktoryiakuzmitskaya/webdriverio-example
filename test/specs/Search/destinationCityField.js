const { expect } = require("chai");
const HomePage = require("../../pages/home.page");

describe("Destination city field", () => {
  it("should preserve only destination city value after receiving no results and navigating back in browser", async () => {
    await HomePage.open("https://www.jetblue.com/");
    await HomePage.acceptCookies();
    await HomePage.inputForDestinationCity.setValue("Dubrovnik, Croatia (DBV)");
    await HomePage.destinationCitySuggestedOption.click();
    await HomePage.inputForDepartureDate.setValue("Sun Feb 27");
    await HomePage.inputForReturnDate.setValue("Mon Feb 28");
    await HomePage.searchButton.click();
    await browser.pause(3000);
    // const destinationCity = await $("strong*=Dubrovnik, Croatia (DBV)");
    // await destinationCity.waitForDisplayed(10000);
    // await destinationCity.click();
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
