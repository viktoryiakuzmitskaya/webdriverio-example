const { expect } = require("chai");
const acceptCookies = require("../../acceptCookies.js");

describe("Search fields", () => {
  it("To, Depart, Return fields should be empty by default", async () => {
    await browser.url("https://www.jetblue.com/");
    await browser.maximizeWindow();
    await acceptCookies();
    const inputForDestinationCity = await $("#jb-autocomplete-2-search");    
    await inputForDestinationCity.waitForDisplayed(10000);
    const inputForDepartureDate = await $("#jb-date-picker-input-id-0");
    const inputForReturnDate = await $("#jb-date-picker-input-id-1");
    expect(await inputForDestinationCity.getValue()).to.be.equal("");
    expect(await inputForDepartureDate.getValue()).to.be.equal("");
    expect(await inputForReturnDate.getValue()).to.be.equal("");
  });
});
