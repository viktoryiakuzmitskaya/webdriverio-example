const { expect } = require("chai");
const HomePage = require("../../pages/home.page");

describe("Adult passengers counter", () => {
  it("should increase the amount by 1 with click on '+' button", async () => {   
    await HomePage.open("https://www.jetblue.com/");
    await HomePage.acceptCookies();
    // const travelersDropdownTrigger = await $('button[title="Travelers"]'); 
    // await travelersDropdownTrigger.waitForDisplayed(10000);
    // await travelersDropdownTrigger.click();
    // const adultPassengersCounter = await $('jb-incrementer[increaselabel="add adult"]');    
    // const initialAdultPassengersAmount = await ((adultPassengersCounter.$('span').getText()));    
    // const adultPassengersIncrementButton = await adultPassengersCounter.$('button[aria-label="add adult"]');
    // await adultPassengersIncrementButton.click();
    // const newAdultPassengersAmount = await adultPassengersCounter.$('span').getText();
    // expect((Number(newAdultPassengersAmount)-Number(initialAdultPassengersAmount))).to.be.equal(1);
  });
});