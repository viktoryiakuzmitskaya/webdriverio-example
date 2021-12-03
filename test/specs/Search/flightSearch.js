const { expect } = require("chai");
const HomePage = require("../../pages/home.page");

describe("Flight search", () => {
  it("should show error messages if required fields are empty", async () => {
    await HomePage.open("https://www.jetblue.com/");
    await HomePage.acceptCookies();
    await HomePage.searchButton.click();
    const errorMessageForEmptyDestinationCity =
      await HomePage.errorForEmptyDestinationCity.getText();
    const errorMessageForEmptyDepartureDate =
      await HomePage.errorForEmptyDepartureDate.getText();
    const errorMessageForEmptyReturnDate =
      await HomePage.errorForEmptyReturnDate.getText();
    expect(errorMessageForEmptyDestinationCity).to.be.equal(
      "Please enter a valid city."
    );
    expect(errorMessageForEmptyDepartureDate).to.be.equal(
      "Please enter a valid date."
    );
    expect(errorMessageForEmptyReturnDate).to.be.equal(
      "Please enter a valid date."
    );
  });
});
