const { expect } = require("chai");
const HomePage = require("../../utils/pageObjects/pages/Home.page");

describe("Flight search", () => {
  it("should show error messages if required fields are empty", async () => {
    await HomePage.open("https://www.jetblue.com/");
    await HomePage.acceptCookies();
    await HomePage.waitForElement(
      HomePage.searchForm.searchButton, 5000
    );
    await HomePage.searchForm.searchButton.click();
    const errorMessageForEmptyDestinationCity =
      await HomePage.searchForm.errorForEmptyDestinationCity.getText();
    const errorMessageForEmptyDepartureDate =
      await HomePage.searchForm.errorForEmptyDepartureDate.getText();
    const errorMessageForEmptyReturnDate =
      await HomePage.searchForm.errorForEmptyReturnDate.getText();
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
