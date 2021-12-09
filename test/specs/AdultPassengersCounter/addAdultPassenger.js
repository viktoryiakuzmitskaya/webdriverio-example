const { expect } = require("chai");
const HomePage = require("../../pageObjects/pages/home.page");

describe.skip("Adult passengers counter", () => {
  it("should increase the amount by 1 with click on '+' button", async () => {
    await HomePage.open("https://www.jetblue.com/");
    await HomePage.acceptCookies();
    await HomePage.waitForElement(
      HomePage.travelersSelector.travelersDropdownTrigger, 5000
    );
    await HomePage.travelersSelector.travelersDropdownTrigger.click();
    const initialAdultPassengersAmount = Number(
      await HomePage.travelersSelector.adultPassengersCounter.getText()
    );
    await HomePage.travelersSelector.adultPassengersIncrementButton.click();
    const newAdultPassengersAmount = Number(
      await HomePage.travelersSelector.adultPassengersCounter.getText()
    );
    expect(newAdultPassengersAmount - initialAdultPassengersAmount).to.be.equal(
      1
    );
  });
});
