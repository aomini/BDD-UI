const { Given, When, Then } = require("@cucumber/cucumber");
const {
  navigateToPage,
  confirmMultipleTextVisibility,
} = require("../common/action");

Given("A user visits sr.hbgdevlab.com", navigateToPage);

Then(/^the user should see the following .*$/, confirmMultipleTextVisibility);

When(/^the user clicks on "(.*)" .*$/, click);
