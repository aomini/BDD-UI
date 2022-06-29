const { By, until } = require("selenium-webdriver");

const timeout = 10000;

const browser = (driver) => {
  const waitAndLocateByCSS = (selector) => {
    return driver.wait(until.elementLocated(By.css(selector)), timeout);
  };

  const waitAndLocateByXpath = (selector) => {
    return driver.wait(until.elementLocated(By.xpath(selector)), timeout);
  };

  return {
    waitAndLocateByCSS,
    waitAndLocateByXpath,
  };
};

module.exports = browser;
