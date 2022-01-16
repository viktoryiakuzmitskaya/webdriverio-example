const { When, Then } = require("@wdio/cucumber-framework");
const HomePage = require("../../utils/pageObjects/pages/Home.page");
const { expect } = require('chai');

When("I click Search Button", function() {
  return HomePage.searchForm.searchButton.click();
});

Then("Error messages for empty Destination City, Departure Date, Return Date fields are displayed", async function() {
  const SearchForm = HomePage.searchForm;  
  const errorMessageForEmptyDestinationCity =
    await SearchForm.errorForEmptyDestinationCity.getText();
  const errorMessageForEmptyDepartureDate =
    await SearchForm.errorForEmptyDepartureDate.getText();
  const errorMessageForEmptyReturnDate =
    await SearchForm.errorForEmptyReturnDate.getText();
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
