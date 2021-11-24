const { expect } = require("chai");

describe("Adult passengers counter", () => {
  it("should increase the amount by 1 with click on '+' button", async () => {   
    await browser.url("https://www.jetblue.com/");
    await browser.maximizeWindow();
    const acceptCookiesFrame = await $("//iframe[@class='truste_popframe']");
    await acceptCookiesFrame.waitForDisplayed(3000);
    await browser.switchToFrame(acceptCookiesFrame);
    const acceptCookiesButton = await $(".call");
    await acceptCookiesButton.click(); 
    const travelersDropdownTrigger = await $('button[title="Travelers"]'); 
    await travelersDropdownTrigger.waitForDisplayed(2000);
    await travelersDropdownTrigger.click();
    const adultPassengersCounter = await $('jb-incrementer[increaselabel="add adult"]');    
    const initialAdultPassengersAmount = await ((adultPassengersCounter.$('span').getText()));    
    const adultPassengersIncrementButton = await adultPassengersCounter.$('button[aria-label="add adult"]');
    await adultPassengersIncrementButton.click();
    const newAdultPassengersAmount = await adultPassengersCounter.$('span').getText();
    expect((Number(newAdultPassengersAmount)-Number(initialAdultPassengersAmount))).to.be.equal(1);
  });
});
