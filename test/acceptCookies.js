async function acceptCookies() {
  const acceptCookiesFrame = await $("//iframe[@class='truste_popframe']");
  await acceptCookiesFrame.waitForDisplayed(10000);
  await browser.switchToFrame(acceptCookiesFrame);
  const acceptCookiesButton = await $(".call");
  await acceptCookiesButton.click();
}

module.exports = acceptCookies;