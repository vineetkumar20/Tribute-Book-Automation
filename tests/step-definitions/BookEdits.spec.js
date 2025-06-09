const { Given, When, Then } = require("@cucumber/cucumber");
var guestBook = require('../elements/guestBook');
var orders = require('../elements/AdminPortal/Orders_elements');
var login = require('../elements/AdminPortal/Login_elements');
var bookEdits = require('../elements/AdminPortal/BookEdits_elements');
var generalMenu = require('../elements/AdminPortal/generalMenu_elements');

//===========================
Given('I navigate to tribute book page', function(){
  return browser.maximizeWindow()
    .url(browser.globals.guestBookURL)
})

Then('I enter guest book URL into the search field and click customize book', function(){
  return browser.useXpath()
    .setValue(bookEdits.guestbookURL_seachbox, browser.globals.guestBookURL).pause(1000)
    .click(bookEdits.customizeBook_button).pause(3000)
})

Then('I search for contribution {string}', function (memory) {
    return browser.useXpath()
      .setValue(bookEdits.editBook_seachbox, memory).pause(2000)
});

Then('I click edit', function () {
    return browser.useXpath()
      .click(bookEdits.edit_button).pause(1000)
});

Then('I click Delete Media', function () {
    return browser.useXpath()
      .click(bookEdits.deleteMedia_button).pause(5000)
});

Then('contribution has been deleted for {string}', function (memory) {
    return browser.useXpath()
        .setValue(bookEdits.editBook_seachbox, memory).pause(3000)
    .assert.elementPresent(bookEdits.no_media_found)
});

 ///========================= 
 ///+++++++++++++++++++++++++++

Then('I click Hide button', function () {
  return browser.useXpath()
  .click(bookEdits.hideTributeMedia).pause(3000)
});

 ///+++++++++++++++++++++++++++
// ----------------------------
 Then('I update tribute {string}', function (tribute) {
  return browser.useXpath()
    .clearValue(bookEdits.trubite_input).pause(1000)
    .sendKeys(bookEdits.trubite_input, tribute).pause(1000)
});

Then('I click save edit', function () {
  return browser.useXpath()
    .click(bookEdits.saveEdits).pause(2000)
});

Then('search for updated tribute {string} and return to a previous value {string}', function (newtribute, tribute) {
  return browser.useXpath()
    .setValue(bookEdits.editBook_seachbox, newtribute).pause(2000)
    .assert.elementPresent("//tr[@class='odd']")
    .click(bookEdits.edit_button).pause(1000)
    .clearValue(bookEdits.trubite_input).pause(1000)
    .sendKeys(bookEdits.trubite_input, tribute).pause(1000)
});

// ----------------------------
//_+_+_+
Then('I enter Invalid book URL {string}', function (invalidBookdURL) {
  return browser.useXpath()
   .setValue(bookEdits.guestbookURL_seachbox, invalidBookdURL).pause(1000)
});

When('I click customize book', function () {
  return browser.useXpath()
   .click(bookEdits.customizeBook_button).pause(3000)
});

Then('{int} error is received', function (int) {
  return browser.useXpath()
    .assert.elementPresent("//div[@class='alert alert-danger mt-5 mb-5']")
});

//_+_+_+




