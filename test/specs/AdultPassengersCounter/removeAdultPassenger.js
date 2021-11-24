const { expect } = require("chai");

describe("Adult passengers counter", () => {
  it("should decrease the amount by 1 with click on '-' button", async () => {    
    await browser.url("https://www.jetblue.com/");
    await browser.maximizeWindow();
    const acceptCookiesFrame = await $("//iframe[@class='truste_popframe']");
    await acceptCookiesFrame.waitForDisplayed(10000);
    await browser.switchToFrame(acceptCookiesFrame);
    const acceptCookiesButton = await $(".call");
    await acceptCookiesButton.click();
    const travelersDropdownTrigger = await $('button[title="Travelers"]'); 
    await travelersDropdownTrigger.waitForDisplayed(10000);
    await travelersDropdownTrigger.click();
    const adultPassengersCounter = await $('jb-incrementer[decreaselabel="remove adult"]');    
    const initialAdultPassengersAmount = await ((adultPassengersCounter.$('span').getText()));    
    const adultPassengersDecrementButton = await adultPassengersCounter.$('button[aria-label="remove adult"]');
    await adultPassengersDecrementButton.click();
    const newAdultPassengersAmount = await adultPassengersCounter.$('span').getText();
    expect((Number(initialAdultPassengersAmount)-Number(newAdultPassengersAmount))).to.be.equal(1);
  });
});
