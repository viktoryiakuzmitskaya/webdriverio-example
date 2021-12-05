const { expect } = require("chai");
const HomePage = require("../../pages/Home.page");
const SelectFlightsPage = require("../../pages/SelectFlights.page");

describe("Destination city field", () => {
  it("should preserve destination city value after receiving no results and navigating back in browser", async () => {
    await HomePage.open("https://www.jetblue.com/");
    await HomePage.acceptCookies();
    await HomePage.inputForDestinationCity.setValue("Dubrovnik, Croatia (DBV)");
    await HomePage.destinationCitySuggestedOption.click();
    await HomePage.inputForDepartureDate.setValue("Sun Feb 27");
    await HomePage.inputForReturnDate.setValue("Mon Feb 28");
    await HomePage.searchButton.click();
    await SelectFlightsPage.waitForElement(
      SelectFlightsPage.noFlightsFoundMessage
    );
    await SelectFlightsPage.goBack();
    await HomePage.waitForInputToDisplayPreviouslyEnteredData(
      HomePage.inputForDestinationCity
    );
    await browser.pause(3000);
    expect(await HomePage.inputForDestinationCity.getValue()).to.be.equal(
      "Dubrovnik, Croatia (DBV)"
    );
  });
});
