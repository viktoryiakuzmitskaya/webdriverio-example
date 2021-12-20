const { expect } = require("chai");
const HomePage = require("../../utils/pageObjects/pages/Home.page");

describe("Adult passengers counter", () => {
  it("should increase the amount by 1 with click on '+' button", async () => {
    await HomePage.open("https://www.jetblue.com/");
    await HomePage.acceptCookies();
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
