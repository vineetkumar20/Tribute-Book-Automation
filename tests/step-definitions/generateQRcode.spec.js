const { Given, When, Then } = require("@cucumber/cucumber");
var guestBook = require('../elements/guestBook');
var orders = require('../elements/AdminPortal/Orders_elements');
var login = require('../elements/AdminPortal/Login_elements');
var books = require('../elements/AdminPortal/Books_elements');
var generalMenu = require('../elements/AdminPortal/generalMenu_elements');
var generateQRCode = require('../elements/AdminPortal/generateQRcode_elements');



When('I enter FuneralHome DomainID {string}', function (domainID) {
    return browser.useXpath()
        .setValue(generateQRCode.domainID_input,domainID).pause(1000)
});
        
When('I click Generate QR Code', function () {
    return browser.useXpath()
        .click(generateQRCode.generateQRCode).pause(3000)
          
});
        
Then('QR Code has been generated', function () {
    return browser.useXpath().assert
        .elementPresent("//body[@style='margin: 0px; height: 100%; background-color: rgb(14, 14, 14);']/img")
});