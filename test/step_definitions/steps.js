const { Given, When, Then, setDefaultTimeout, After } = require("@wdio/cucumber-framework");
const cucumberJson = require("wdio-cucumberjs-json-reporter").default;
const HomePage = require("../utils/pageObjects/pages/Home.page");
const { expect } = require('chai');
setDefaultTimeout(60000);


Given("I open {string} url", async function(url) {
  await HomePage.open(url);
});

Given("I accept cookies", async function() {
    await HomePage.acceptCookies();
});

When("I click Search Button", function() {
  return HomePage.searchForm.searchButton.click();
});

Then("To, Depart, Return fields should be empty", async function() {
  const SearchForm = HomePage.searchForm;  
  const inputForDestinationCityValue = await SearchForm.inputForDestinationCity.getValue();
  const inputForDepartureDateValue = await SearchForm.inputForDepartureDate.getValue();
  const inputForReturnDateValue = await SearchForm.inputForReturnDate.getValue();
  expect(inputForDestinationCityValue).to.be.equal("");
  expect(inputForDepartureDateValue).to.be.equal("");
  expect(inputForReturnDateValue).to.be.equal("");
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

After({timeout: 60000}, async function () {  
 const screenshot = await browser.takeScreenshot();
  cucumberJson.attach(screenshot, "image/png");
});