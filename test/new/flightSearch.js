const { expect } = require("chai");
const HomePage = require("../../pages/home.page");

describe("Flight search", () => {
  it("should show error messages if required fields are empty", async () => {
    await HomePage.open("https://www.jetblue.com/");
    await HomePage.acceptCookies();
  //   const searchButton = await $(".jb-booker-air-submit");
  //   await searchButton.click();
  //   const errorMessages = await $("form").$$(".jb-error");
  //   const errorForEmptyDestinationCity = await errorMessages[0]
  //     .$("span")
  //     .getText();
  //   const errorForEmptyDepartureDate = await errorMessages[1]
  //     .$("span")
  //     .getText();
  //   const errorForEmptyReturnDate = await errorMessages[2].$("span").getText();
  //   expect(errorForEmptyDestinationCity).to.be.equal(
  //     "Please enter a valid city."
  //   );
  //   expect(errorForEmptyDepartureDate).to.be.equal(
  //     "Please enter a valid date."
  //   );
  //   expect(errorForEmptyReturnDate).to.be.equal("Please enter a valid date.");
  });
});
