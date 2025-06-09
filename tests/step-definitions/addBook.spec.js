const { Given, When, Then } = require("@cucumber/cucumber");
var guestBook = require('../elements/guestBook');
var orders = require('../elements/AdminPortal/Orders_elements');
var login = require('../elements/AdminPortal/Login_elements');
var books = require('../elements/AdminPortal/Books_elements');
var generalMenu = require('../elements/AdminPortal/generalMenu_elements');
var profiles = require('../elements/AdminPortal/Profiles_elements');

const today = new Date();

// Get individual components
const day = today.getDate();
const month = today.getMonth(); // Zero-indexed (0 for January, 11 for December)
const year = today.getFullYear();

const formattedDate = `${month + 1}/${day}/${year}`;


When('I click Add Book', function () {
    return browser.useXpath()
        .click(books.addBook)
});

Then('I fill out Create Book form {string},{string},{string},{string},{string},{string},', function (domainID, obituaryID, deceasedFirstName, deceasedMiddleName, deceasedLastName, theme) {
    return browser.useXpath()
        .setValue(books.domainID_input,domainID)
        .setValue(books.obituaryID_input, obituaryID)
        .setValue(books.printDate_input, ["00202503040333",browser.Keys.ARROW_UP])
        .setValue(books.firstName_input,deceasedFirstName)
        .setValue(books. middleName_input,deceasedMiddleName)
        .setValue(books.lastName_input, deceasedLastName)
        .pause(1000)
        .setValue(books.decedentBirthDate_input, ["00192003040333",browser.Keys.ARROW_UP])
        .setValue(books.decedentDeathDate_input, ["00202003040333",browser.Keys.ARROW_UP])
        .setValue(books.obituaryText_input, "This obit is being used for automation testing").pause(2000)       
        .setValue(books.fieldPhotoFilename, "test file name")
        .click(books.theme_dropdown)
        .setValue(books.fieldDropdownTheme, theme, browser.Keys.RETURN)
        // .click("//div[text()='" + theme + "']")
});

Then('I click Create', function () {
    return browser.useXpath()
        .click(books.create_button).pause(2000)
        .pause(5000)
        .pause(4000)
        
});

Then('I seach for created book {string}', function (bookDomainID) {
    return browser.useXpath()
        .pause(4000)
        .sendKeys(books.seachBox, bookDomainID).pause(1000)
        .sendKeys(books.seachBox,browser.Keys.ENTER)
        .pause(10000)
        
});

Then('Created book has been found', function () {
    return browser.useXpath()
        .assert.elementPresent("//tbody//tr").pause(2000)
});

Then('I click Eclipsis\\/Edit', function () {
    return browser.useXpath()
        .pause(4000)
        .click("//a[@role='button']").pause(1000)
        .click("//a[@class='dropdown-item action-edit']")

});

Then('I edit created book {string}', function (domainID) {
    return browser.useXpath()
        .clearValue(books.domainID_input).pause(1000)
        .setValue(books.domainID_input, domainID).pause(1000)
    
});

Then('I click save changes', function () {
    return browser.useXpath()
        .click(books.saveChanges_button).pause(2000).click(generalMenu.books).pause(3000)
});

Then('I seach for edited book {string}', function (editedBookDomainID) {
    return browser.useXpath()
        .clearValue(books.seachBox).pause(1000)
        .sendKeys(books.seachBox, editedBookDomainID).pause(1000)
        .sendKeys(books.seachBox,browser.Keys.ENTER)
});

Then('Edited book has been found', function () {
    return browser.useXpath()
        .assert.elementPresent("//tbody//tr").pause(2000)

});

Then('I click Eclipsis\\/Delete', function () {
    return browser.useXpath()
        .click("//a[@role='button']").pause(1000)
        .click("//a[@class='dropdown-item action-delete text-danger']").pause(1000)
        .click("//span[@class='btn-label'][normalize-space()='Delete']").pause(1000)
    
});

Then('Book has been deleted', function () {
    return browser.useXpath()
        .assert.elementPresent("//td[@colspan='100']")
    
    
});
