const { expect } = require("chai");
const HomePage = require("../../pages/home.page");

describe("Search fields", () => {
  it("To, Depart, Return fields should be empty by default", async () => {
    await HomePage.open("https://www.jetblue.com/");
    await HomePage.acceptCookies();
    const inputForDestinationCityValue = await HomePage.inputForDestinationCity.getValue();
    const inputForDepartureDateValue = await HomePage.inputForDepartureDate.getValue();
    const inputForReturnDateValue = await HomePage.inputForReturnDate.getValue();
    expect(inputForDestinationCityValue).to.be.equal("");
    expect(inputForDepartureDateValue).to.be.equal("");
    expect(inputForReturnDateValue).to.be.equal("");
  });
});
