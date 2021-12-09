const { expect } = require("chai");
const HomePage = require("../../pageObjects/pages/Home.page");
const SelectFlightsPage = require("../../pageObjects/pages/SelectFlights.page");

describe("Destination city field", () => {
  it("should preserve destination city value after receiving no results and navigating back in browser", async () => {
    await HomePage.open("https://www.jetblue.com/");
    await HomePage.acceptCookies();
    await HomePage.waitForElement(
      HomePage.searchForm.inputForDestinationCity, 5000
    );
    await HomePage.searchForm.inputForDestinationCity.setValue("Dubrovnik, Croatia (DBV)");
    await HomePage.searchForm.destinationCitySuggestedOption.click();
    await HomePage.searchForm.inputForDepartureDate.setValue("Sun Feb 27");
    await HomePage.searchForm.inputForReturnDate.setValue("Mon Feb 28");
    await HomePage.searchForm.searchButton.click();
    await SelectFlightsPage.waitForElement(
      SelectFlightsPage.noFlightsFoundMessage, 10000
    );
    await SelectFlightsPage.goBack();
    await HomePage.waitForInputToDisplayPreviouslyEnteredData(
      HomePage.searchForm.inputForDestinationCity
    );
    expect(await HomePage.searchForm.inputForDestinationCity.getValue()).to.be.equal(
      "Dubrovnik, Croatia (DBV)"
    );
  });
});
