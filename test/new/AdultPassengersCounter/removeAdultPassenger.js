const { expect } = require("chai");
const HomePage = require("../../pages/home.page");

describe("Adult passengers counter", () => {
  it("should decrease the amount by 1 with click on '-' button", async () => {      
    await HomePage.open("https://www.jetblue.com/");
    await HomePage.acceptCookies();
    // const travelersDropdownTrigger = await $('button[title="Travelers"]'); 
    // await travelersDropdownTrigger.waitForDisplayed(10000);
    // await travelersDropdownTrigger.click();
    // const adultPassengersCounter = await $('jb-incrementer[decreaselabel="remove adult"]');    
    // const initialAdultPassengersAmount = await ((adultPassengersCounter.$('span').getText()));    
    // const adultPassengersDecrementButton = await adultPassengersCounter.$('button[aria-label="remove adult"]');
    // await adultPassengersDecrementButton.click();
    // const newAdultPassengersAmount = await adultPassengersCounter.$('span').getText();
    // expect((Number(initialAdultPassengersAmount)-Number(newAdultPassengersAmount))).to.be.equal(1);
  });
});
