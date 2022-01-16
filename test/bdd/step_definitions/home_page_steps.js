const { Given } = require("@wdio/cucumber-framework");
const HomePage = require("../../utils/pageObjects/pages/Home.page");

Given("I open {string} url", function(url) {
  return HomePage.open(url);
});

Given("I accept cookies", function() {
  return HomePage.acceptCookies();
});