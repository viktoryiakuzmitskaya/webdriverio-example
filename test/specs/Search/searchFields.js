const { expect } = require("chai");
const HomePage = require("../../utils/pageObjects/pages/Home.page");

describe("Search fields", () => {
  it("To, Depart, Return fields should be empty by default", async () => {
    await HomePage.open("https://www.jetblue.com/");
    await HomePage.acceptCookies();
    await HomePage.waitForElement(
      HomePage.searchForm.inputForDestinationCity, 5000
    );
    const inputForDestinationCityValue = await HomePage.searchForm.inputForDestinationCity.getValue();
    const inputForDepartureDateValue = await HomePage.searchForm.inputForDepartureDate.getValue();
    const inputForReturnDateValue = await HomePage.searchForm.inputForReturnDate.getValue();
    expect(inputForDestinationCityValue).to.be.equal("");
    expect(inputForDepartureDateValue).to.be.equal("");
    expect(inputForReturnDateValue).to.be.equal("");
  });
});
