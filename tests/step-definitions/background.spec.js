const { Given, When, Then } = require("@cucumber/cucumber");
var guestBook = require('../elements/guestBook');
var login = require('../elements/AdminPortal/Login_elements');
var generalMenu = require('../elements/AdminPortal/generalMenu_elements');


Then('I navigate and log into admin portal', function(){
   return browser.useXpath()
   .maximizeWindow()
   .pause(5000)
   .url(browser.globals.adminPortal).pause(2000)
   .setValue(login.username_input, browser.globals.adminUsername)
   .setValue(login.password_input, browser.globals.adminPassword)
   .pause(1000)
   .click(login.login_button)
})


Then('print out the password', function(){
   return console.log("password is ---" + browser.globals.adminPassword)
})

 Then('I see page with title {string}', function (pagetitle) {
   return browser.assert.titleEquals(pagetitle)
   .pause(5000)
   
 });

 Then('I click {string} on the left hand nav', function(menuitem){
   if(menuitem=="Orders"){
      return browser.useXpath().click(generalMenu.orders)

   }else if(menuitem=="Books"){
      return browser.useXpath().click(generalMenu.books)

   }else if(menuitem=="Book Edits"){
      return browser.useXpath().click(generalMenu.bookEdits)

   }else if(menuitem=="Profiles"){
      return browser.useXpath().click(generalMenu.profile)

   }else if(menuitem=="Generate QR Code"){
      return browser.useXpath().click(generalMenu.generateQRcode)

   }else if(menuitem=="Themes"){
      return browser.useXpath().click(generalMenu.themes).pause(1000)

   }else if(menuitem=="Admins"){
      return browser.useXpath().click(generalMenu.admins).pause(1000)

   }else{
      return browser.log('Navigation menu is not found')
   }

 })
