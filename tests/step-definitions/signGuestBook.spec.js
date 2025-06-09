const { Given, When, And ,Then  } = require("@cucumber/cucumber");
var guestBook = require('../elements/guestBook');


When('I click Sign Guestbook', function () {
   return browser.useXpath().click(guestBook.signGuestBook).pause(3000)
});

Then('I fill out Sign Guestbook form', function () {
   return browser.useXpath()
      .setValue(guestBook.signGuestBook_name, browser.globals.signGuestbook_name)
      .setValue(guestBook.signGuestBook_email, browser.globals.signGuestbook_email)
      .click(guestBook.relationDropDown)
      .click("//div[text()='" + browser.globals.addMemory_relation + "']")
      .pause(2000)
});

Then('I click submit', function () {
   return browser.useXpath().click(guestBook.signGuestBook_submit).pause(1000)
});

Then('Thank you message is displayed', function () {
   return browser.useXpath().assert.elementPresent(guestBook.signGuestBook_thankYou)
});

When('I select Attended in-person checkbox', function () {
   return browser.useXpath().click(guestBook.attendedInPerson_checkbox).pause(1000)
      .setValue(guestBook.signGuestBook_address, browser.globals.signGuestbook_address)
      .setValue(guestBook.signGuestBook_city, browser.globals.signGuestbook_city)
      .click(guestBook.shipping_dropdownState)
      .click("//div[text()='" + browser.globals.signGuestbook_state + "']")
      .setValue(guestBook.signGuestBook_zipCode, browser.globals.signGuestbook_zipCode).pause(3000)

});