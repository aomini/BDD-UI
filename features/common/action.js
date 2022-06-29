const helper = require("./browser");
const selector = require("./selectors");

const baseURl = "https://sr.hbgdevlab.com/";
const email = "rakesh@random.com";
const password = "asdfasdf";

const actions = {
  navigateToPage() {
    return this.driver.get(baseURl);
  },
  enterInput(text, inputField) {
    const itemSelector = selector[inputField];
    const mapText = {
      "<email>": email,
      "<password": password,
    };
    const value = mapText[text] || text;
    return helper(this.driver).waitAndLocateByCSS(itemSelector).click();
  },
  async click(identifier) {
    const itemSelector = selector[identifier];
    await helper(this.driver).waitAndLocateByXpath(itemSelector).click();
  },
  async confirmUserId() {
    await helper(this.driver).waitAndLocateByXpath(
      `//a[contains(@aria-label, "${email}")]`
    );
  },
  confirmTextVisibility: async function (text) {
    await helper(this.driver).waitAndLocateByXpath(
      `//*[contains(text(), "${text}")]`
    );
  },
  confirmMultipleTextVisibility: async function (dataTable) {
    console.log(dataTable);
    // convert cucumber dataTables to array of objects
    const arrayOfObjects = dataTable.hashes();
    const locateText = [];

    arrayOfObjects.forEach((value) => {
      const textArray = Object.values(value);
      const [text] = textArray;
      locateText.push(
        helper(this.driver).waitAndLocateByXpath(`//*[text()="${text}"]`)
      );
    });

    await Promise.all(locateText);
  },
};
module.exports = actions;
