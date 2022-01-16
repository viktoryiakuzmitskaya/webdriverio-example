const { Given } = require("@wdio/cucumber-framework");
const HomePage = require("../utils/pageObjects/pages/Home.page");

Given("I open {string} url", async function(url) {
  await HomePage.open(url);
});

Given("I accept cookies", async function() {
    await HomePage.acceptCookies();
});