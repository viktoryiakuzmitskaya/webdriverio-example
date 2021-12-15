const Page = require("./page");

class SelectFlightsPage extends Page {
  get noFlightsFoundMessage() {
    return $("h2*=No flights have been found for your search criteria.");
  }
}

module.exports = new SelectFlightsPage();
