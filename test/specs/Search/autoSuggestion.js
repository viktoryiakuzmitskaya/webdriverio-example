const { expect } = require("chai");
const HomePage = require("../../pageObjects/pages/home.page");

describe("AutoSuggestion", () => {
    it("Relevant autosuggestion option is displayed for 'To' field when user types in the value", async () => {
        await HomePage.open("https://www.jetblue.com/");
        await HomePage.acceptCookies();
        await HomePage.waitForElement(
          HomePage.searchForm.searchButton, 5000
        );
        const inputForDestinationCity = await HomePage.searchForm
        .inputForDestinationCity;
        const inputForDestinationCityCoordinates = await HomePage.searchForm.getInputCoordinates(inputForDestinationCity);
        await HomePage.searchForm.emulateUserTypingValueIntoInput(inputForDestinationCityCoordinates);
        const destinationCitySuggestedOptionText = await HomePage.searchForm.destinationCitySuggestedOption.getText();    
        await browser.pause(5000);
        expect(destinationCitySuggestedOptionText).to.be.equal("Dubro");
      });
});

  
  