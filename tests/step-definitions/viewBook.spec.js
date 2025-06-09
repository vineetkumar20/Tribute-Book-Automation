const { Given, When, And ,Then  } = require("@cucumber/cucumber");
var guestBook = require('../elements/guestBook');


When('I click view Tribute Book', function () {
    return browser
    .useXpath()
    .click(guestBook.viewTributeBook)
    .pause(2000);

});

Then('I preview book till last page', function () {
    for (var i = 0; i < 35; i++) {
        browser
        .useXpath()
        .click(guestBook.turnNextpageButton)
     }
     browser.pause(3000);
});

Then('I preview book till first page', function () {
    for (var i = 0; i < 35; i++) {
        browser
        .useXpath()
        .waitForElementVisible(guestBook.turnPrevPageButton)
        .click(guestBook.turnPrevPageButton)
    }
    browser.pause(3000);
});

Then('I close Book', function () {
    return browser.useXpath()
       .click("//a[@class='Root_close__ajOUV']").pause(2000)
});