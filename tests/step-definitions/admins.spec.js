const { Given, When, Then } = require("@cucumber/cucumber");
var guestBook = require('../elements/guestBook');
var orders = require('../elements/AdminPortal/Orders_elements');
var login = require('../elements/AdminPortal/Login_elements');
var admins = require('../elements/AdminPortal/Admins_elements');
var generalMenu = require('../elements/AdminPortal/generalMenu_elements');





When('I click Add Admin', function () {
    return browser.useXpath()
    .click(admins.addAdmin)

  });

  Then('I fill out create admin form {string},{string},{string}', function (username, password, role) {
  return browser.useXpath()
  .sendKeys(admins.username, username)
    .sendKeys(admins.password, password)
    .click(admins.roles_dropdown)
    .click("//div[text()='"+role+"']").pause(4000)
   
  });

  
  Then('Admin with user name {string} has been created', function (username) {
    return browser.useXpath().pause(1000)
      .sendKeys(admins.seachbox, username).pause(1000)
      .sendKeys(admins.seachbox, browser.Keys.ENTER).pause(2000)
    .assert.elementPresent("//mark[text()='"+username+"']")
    
  });

  Then('I click edit admin', function () {
    return browser.useXpath()
      .click("//a[@role='button']//*[name()='svg']")
      .click("//a[@class='dropdown-item action-edit']")
    
  });

  Then('I update username {string}', function (usename2) {
    return browser.useXpath()
      .clearValue(admins.username).pause(1000)
      .sendKeys(admins.username,usename2).pause(3000)
  });
  
  Then('I hit save changes', function () {
    return browser.useXpath()
      .click(admins.saveChanges).pause(2000)
  });

  Then('Username has been updated to {string}', function (username2) {
    return browser.useXpath().pause(1000)
      .clearValue(admins.seachbox).pause(2000)
      .sendKeys(admins.seachbox, username2).pause(1000)
      .sendKeys(admins.seachbox, browser.Keys.ENTER).pause(4000)
      .assert.elementPresent("//mark[text()='"+username2+"']")
  });

  Then('I delete admin', function () {
    return browser.useXpath()
      .click("//a[@role='button']//*[name()='svg']").pause(1000)
      .click("//a[@class='dropdown-item action-delete text-danger']//span[@class='action-label'][normalize-space()='Delete']").pause(1000)
      .click("//span[@class='btn-label'][normalize-space()='Delete']").pause(1000)
    
  });

  Then('Admin has been deleted', function () {
    return browser.useXpath()
      .assert.elementPresent("//td[normalize-space()='No results found.']")
    });




  
