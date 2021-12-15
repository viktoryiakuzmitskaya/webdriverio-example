const { expect } = require("chai");
const HomePage = require("../../utils/pageObjects/pages/Home.page");

describe("AutoSuggestion", () => {
    it("Relevant autosuggestion option is displayed for 'To' field when user types in the value", async () => {
        await HomePage.open("https://www.jetblue.com/");
        await HomePage.acceptCookies();
        await HomePage.searchForm.inputForDestinationCity.highlightElement(); 
        await HomePage.searchForm.inputForDestinationCity.emulateUserTypingValueIntoInput();
        const destinationCitySuggestedOption = await HomePage.searchForm.destinationCitySuggestedOption;
        const destinationCitySuggestedOptionText = await destinationCitySuggestedOption.getText(); 
        await browser.pause(5000);
        expect(destinationCitySuggestedOptionText).to.be.equal("Dubro");
      });
});

  
  