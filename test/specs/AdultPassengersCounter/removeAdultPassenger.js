const { expect } = require("chai");
const HomePage = require("../../pageObjects/pages/home.page");

describe("Adult passengers counter", () => {
  it("should decrease the amount by 1 with click on '-' button", async () => {   
    await HomePage.open("https://www.jetblue.com/");
    await HomePage.acceptCookies();
    await HomePage.travelersDropdownTrigger.click();
    const initialAdultPassengersAmount = Number(await HomePage.adultPassengersCounter.getText());
    await HomePage.adultPassengersDecrementButton.click();
    const newAdultPassengersAmount = Number(await HomePage.adultPassengersCounter.getText());
    expect(initialAdultPassengersAmount - newAdultPassengersAmount).to.be.equal(1);
  });
});
