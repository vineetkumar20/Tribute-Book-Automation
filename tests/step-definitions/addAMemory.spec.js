const { Given, When, Then } = require("@cucumber/cucumber");
var guestBook = require('../elements/guestBook');


Given('I add media {string} to the book', function (memory) {
   return browser.useXpath()
      .useXpath().click(guestBook.addAMemory)
      .setValue(guestBook.message_input, memory).pause(3000)
      .uploadFile(guestBook.file_input, browser.globals.addMemory_photo).pause(3000)
      .click(guestBook.continue)
      .setValue(guestBook.addMemory_firstname, browser.globals.addAMemory_firstname)
      .setValue(guestBook.addMemory_lastname, browser.globals.addAMemory_lastname)
      .setValue(guestBook.addMemory_email, browser.globals.addAMemory_email)
      .click(guestBook.relationDropDown)
      .click("//div[text()='" + browser.globals.addMemory_relation + "']")
      .pause(3000)
      .click(guestBook.postMessage).pause(5000)
 });
 
 When('I add tribute {string} to the book', function (memory) {
   return browser.useXpath()
       .click(guestBook.addAMemory)
       .setValue(guestBook.message_input, memory).pause(3000)
       .isVisible(guestBook.continue)
       .click(guestBook.continue)
       .setValue(guestBook.addMemory_firstname, browser.globals.addAMemory_firstname)
       .setValue(guestBook.addMemory_lastname, browser.globals.addAMemory_lastname)
       .setValue(guestBook.addMemory_email, browser.globals.addAMemory_email)
       .click(guestBook.relationDropDown)
       .click("//div[text()='" + browser.globals.addMemory_relation + "']")
       .pause(3000)
       .click(guestBook.postMessage).pause(5000)
 });

 Then('Thank you for sharing! message is displayed', function () {
   return browser.useXpath().assert.elementPresent(guestBook.thankYou)
});
   
