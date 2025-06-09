const { Given, When, Then } = require("@cucumber/cucumber");
var guestBook = require('../elements/guestBook');
var login = require('../elements/AdminPortal/Login_elements');
var generalMenu = require('../elements/AdminPortal/generalMenu_elements');
var profiles = require('../elements/AdminPortal/Profiles_elements');


  When('I click Add FuneralHome', function () {
    return browser.useXpath()
      .click(profiles.addFuneralHome).pause(3000)
    
  });

Then('I fill out Create FuneralHome form {string},{string},{string},{string},{string},{string},{string},{string},{string},{string},{string},{string},{string}',
  function (Name, DomainID, Description, Email, Address1, Address2, City, State, Zip, bookPrice, dedicationPageSubtitle, Phone, Website) {
    return browser.useXpath()
      .setValue("//div[@class='row']/div[3]/div/div/input","Home01001")
      .setValue(profiles.domainID,DomainID)
      .setValue(profiles.description, Description)
      .uploadFile(profiles.logo, browser.globals.addMemory_photo).pause(3000)
      .setValue(profiles.email,Email)
      .setValue(profiles.address1,Address1)
      .setValue(profiles.address2,Address2)
      .setValue(profiles.city,City)
      .setValue(profiles.state,State)
      .setValue(profiles.zipcode,Zip)
      .setValue(profiles.bookPrice,bookPrice)
      .setValue(profiles.dedicationPageSubtitle,dedicationPageSubtitle)
      .setValue(profiles.phone,Phone)
      .setValue(profiles.website, Website)
      // .click(profiles.MobileCheckinRequireEmail)
      // .click(profiles.MobileCheckinRequireAddress)
      .pause(4000)
  });

Then('I create profile', function () {
  return browser.useXpath()
  .click(profiles.create).pause(5000)
  
  });

  Then('I click Save Changes', function () {
    return browser.useXpath()
      .pause(3000)
      .click(profiles.buttonSaveChanges).pause(5000)
    
    });

  Then('I search for {string} and confirm that Funeral Home profile is present', function (domainID) {
    return browser.useXpath()
      .clearValue(profiles.seachbox).pause(1000)
      .sendKeys(profiles.seachbox, domainID)
      .sendKeys(profiles.seachbox,browser.Keys.ENTER).pause(2000)
      .assert.elementPresent("//mark[text()='"+ domainID + "']").pause(3000)
  
  });

  Then('I click edit created FuneralHome profile', function () {
    return browser.useXpath()
      .click("//a[@role='button']")
      .click(profiles.edit)
  });

  Then('I update domain ID to {string} and Save changes', function (domainID) {
    return browser.useXpath()
      .clearValue(profiles.domainID).pause(1000)
      .setValue(profiles.domainID, domainID).pause(1000)
      .click(profiles.buttonSaveChanges).pause(5000)
  });

  Then('I delete created funeralhome profile', function () {
    return browser.useXpath()
      .click("//a[@role='button']")
      .click(profiles.delete)
      .click("//span[@class='btn-label'][normalize-space()='Delete']").pause(2000)
  });

  Then('FuneralHome profile has been deleted sucessfully', function () {
    return browser.useXpath()
      .assert.elementPresent("//td[normalize-space()='No results found.']")
  });