const { Given, When, Then } = require("@cucumber/cucumber");
var guestBook = require('../elements/guestBook');
var orders = require('../elements/AdminPortal/Orders_elements');
var login = require('../elements/AdminPortal/Login_elements');



   Given('I place a new tribute book order', function () {
      return browser.useXpath()
         .click(guestBook.orderNow)
         //filling out shipping form 
         .setValue(guestBook.shipping_firstName, browser.globals.shipping_firstName)
         .setValue(guestBook.shipping_firstName, browser.globals.shipping_firstName)
         .setValue(guestBook.shipping_lastName, browser.globals.shipping_lastName)
         .pause(1000)
         .setValue(guestBook.shipping_address, browser.globals.shipping_address)
         .setValue(guestBook.shipping_apartment, browser.globals.shipping_apartment)
         .setValue(guestBook.shipping_city, browser.globals.shipping_city)
         .click(guestBook.shipping_dropdownCountry)
         .click("//div[text()='" + browser.globals.shipping_country + "']")
         .click(guestBook.shipping_dropdownState)
         .click("//div[text()='" + browser.globals.shipping_state + "']")
         .setValue(guestBook.shipping_zipCode, browser.globals.shipping_zipCode)
         .setValue(guestBook.shipping_email, browser.globals.shipping_email)
         .pause(2000)
         .click(guestBook.continueToPayment)
         //filling out payment method
         .setValue(guestBook.shipping_cardNumber_input, browser.globals.billing_cardNumber)
         .setValue(guestBook.shipping_experationDate_input, browser.globals.billing_cardCVC)
         .setValue(guestBook.shipping_cvc_input, browser.globals.billing_cardExperationDate)
         .setValue(guestBook.cardHolderName_input, browser.globals.billing_Name)
         //Add check the country 
         .pause(1000)
         .setValue(guestBook.billingZipCode, browser.globals.billing_zipCode)
         .pause(2000)
         .click(guestBook.pay)
         .pause(6000)
   });

   When('I click Ellipsis and select {string}', function (action) {
      return browser.useXpath()
         .click("//div[@class='dropdown dropdown-actions']")
         .click("//a[text()[normalize-space()='"+action+"']]")
         .pause(2000)

    });
  
   Then('I click on Order Actions button', function () {
      return browser.useXpath()
         .click(orders.orderActions_dropdown)
   }); 

   Then('I click link {string}', function (linktext) {
      return browser.useXpath()
         .click("//a[text()[normalize-space()='"+linktext+"']]")
         .pause(2000)
    });

   Then('Order Customizations page is opened', function () {
      return browser.useXpath()
         .assert.textContains('//*[@id="main"]/h1', "Order Customizations")
         .assert.elementPresent("//table[@id='tributes']")
   });

   Then('check that correct page is opened in a new tab {string}', function (url) {
      return browser.useXpath()
         .windowHandles(function (result) {
            var handle = result.value[1];
            browser.switchWindow(handle);
         })
         .pause(2000)
         .assert.urlContains(url)
   });

   Then('I populate Hold Order modal details and click Yes button', function() {
      return browser.useXpath()
      .assert.textContains(orders.orderActions_holdOrder_modal, "Hold Order")
      .click(orders.orderActions_holdOrder_reasonForHold_dropdown)
      .setValue(orders.orderActions_holdOrder_reasonForHold_dropdown, "Other").pause(1000)
      .setValue(orders.orderActions_holdOrder_additionalDetails_input, "test test test")
      .click(orders.orderActions_holdOrder_yesImSure_button)
  
   });


   Then('I see flash message at the top {string}', function (message) {
      return browser.useXpath()
         .pause(1000)
         .assert.textContains(orders.orderActions_flashMessage_text, message)
         .click(orders.orderActions_flashMessage_text).pause(1000)
   });

   Then('I populate Refund modal details and click Yes button', function () {
      return browser.useXpath()
      .assert.textContains(orders.orderActions_refund_modal, "Refund")
      .setValue(orders.orderActions_refund_reasonForRefund, "Not what I expected").pause(1000)
      .setValue(orders.orderActions_refund_additionalDetails_input, "test test test")
      .click(orders.orderActions_refund_yesImSure_button)
  
   });

   Then('I click Resend Receipt', function () {
      return browser.useXpath()
         .click(orders.orderActions_dropdown)
         .click(orders.orderActions_resendReceipt)
   });


   Then('{string} message is dispalyed', function (message) {
      return browser.useXpath()
         .click("//button[@data-bs-dismiss='alert']")
   });


   Then('I click Cancel Print under Print Actions dropdown', function () {
      return browser.useXpath()
         .click(orders.printActions_dropdown)
         .pause(3000)
         .click(orders.printActions_cancelPring_button)
   });

   Then('I click Yes Im sure', function () {return browser.useXpath()
      .click(orders.printActions_yesImSure_button)
   });

   Then('Media is not visiable anymore', function () {
      return browser.useXpath()
         .assert.elementPresent("//span[text()='No']")
   });

   Then('I click Show Media', function () {
      return browser.useXpath()
         .click(orders.editBook_showMedia_button)
   });
 
   Then('Media is visiable', function () {
      return browser.useXpath()
        .assert.elementPresent("//span[text()='Yes']")
   });




