const { Given, When, Then } = require("@cucumber/cucumber");
var guestBook = require('../elements/guestBook');


   When('I click Order Now', function () {
      return browser.useXpath().click(guestBook.orderNow)
   });

   Then('I fill out Shipping form', function () {
      return browser.useXpath()
         .pause(2000)
         .setValue(guestBook.shipping_firstName, browser.globals.shipping_firstName)
         .setValue(guestBook.shipping_lastName, browser.globals.shipping_lastName)
         .setValue(guestBook.shipping_address, browser.globals.shipping_address)
         .setValue(guestBook.shipping_apartment, browser.globals.shipping_apartment)
         .setValue(guestBook.shipping_city, browser.globals.shipping_city)
         .click(guestBook.shipping_dropdownCountry)
         .click("//div[text()='" + browser.globals.shipping_country + "']")
         .click(guestBook.shipping_dropdownState)
         .click("//div[text()='" + browser.globals.shipping_state + "']")
         .setValue(guestBook.shipping_zipCode, browser.globals.shipping_zipCode)
         .setValue(guestBook.shipping_email, browser.globals.shipping_email)
         .pause(3000)
   });

   Then('I click Continue to Payment', function () {
      return browser.useXpath()
         .click(guestBook.continueToPayment)
   });

   Then('I fill out Payment Method form', function () {
      return browser.useXpath()
         .setValue(guestBook.shipping_cardNumber_input, browser.globals.billing_cardNumber)
         .setValue(guestBook.shipping_experationDate_input, browser.globals.billing_cardCVC)
         .setValue(guestBook.shipping_cvc_input, browser.globals.billing_cardExperationDate)
         .setValue(guestBook.cardHolderName_input, browser.globals.billing_Name)
         .setValue(guestBook.billingZipCode, browser.globals.billing_zipCode)
         .pause(2000)
   });

   Then('I click Pay', function () {
      return browser.useXpath().click(guestBook.pay).pause(3000)
   });


   Then('Order Details page is displayed', function () {
      return browser.useXpath()
         .waitForElementPresent("//h1[text()='Thank you for your order!']");
   });

   Then('I verify correcntness of Customer Information and Order Summary', function () {
      return browser.useXpath()
      .assert.textContains(guestBook.shippingAddressInfo, browser.globals.shipping_firstName)
      .assert.textContains(guestBook.shippingAddressInfo, browser.globals.shipping_lastName)
      .assert.textContains(guestBook.shippingAddressInfo, browser.globals.shipping_address)
      .assert.textContains(guestBook.shippingAddressInfo, browser.globals.shipping_apartment)
      .assert.textContains(guestBook.shippingAddressInfo, browser.globals.shipping_city)
      .assert.textContains(guestBook.shippingAddressInfo, "WI")
      .assert.textContains(guestBook.shippingAddressInfo, browser.globals.shipping_zipCode)
      .assert.textContains(guestBook.shippingAddressInfo, browser.globals.shipping_country)
      .pause(20000)
      .assert.textContains(guestBook.orderSummary, "69.95")
      .assert.textContains(guestBook.orderSummary, "89.57")
      
   });

   When('I select a number of {int} Books', function (int) {   
      for(var i = 1; i < 5; i++){
         browser.useXpath().click(guestBook.plus).pause(1000)
      }
      browser.pause(2000)
   });

   Then('I verify correcntness of order total with applied discount', function () {   
      return browser.useXpath().assert.elementPresent("//*[text()='347.85']")
   });

   When('I change Pring Date', function () {
      return browser.useXpath()
         .click(guestBook.editPrintDate)
         .click("//input[@name='releaseDate']")
         .click("//button[@class='react-datepicker__navigation react-datepicker__navigation--next']")
         .click("//div[@class='react-datepicker__month']/div[2]/div[4]").pause(2000)
      });
       
   When('I select Give Tribute Book as a gift', function () {
      return browser.useXpath().pause(2000)
         .click(guestBook.GiveTributeBookAsAGift_checkbox).pause(1000)
   });

   Then('I select Add a free card message', function () {
      return browser.useXpath().pause(2000)
         .click(guestBook.addAFreeCardMessage_checkbox)
   });

   Then('I fill out card message details', function () {
      return browser.useXpath()
         .setValue(guestBook.recipientsName,browser.globals.recipientName)    
   });

   Then('Do not share my purchase on the online obituary', function () {
      return browser.useXpath()
         .click(guestBook.DoNotShareMyPurchaseOnTheOnlineObituary_checkbox)
   });
 
   When('I click Continue to payment without entering any shipping info', function () {
      return browser.useXpath()
         .click(guestBook.continueToPayment).pause(2000)
   });

   Then('I validate required fileds of Shipping form', function () {
      return browser.useXpath()
         .assert.visible(guestBook.shipping_ThisFieldIsRequired_List)
         .assert.visible("//*[text()='This field is required, between 5 and 30 characters']")
         .assert.visible("//*[text()='This field is required. Please enter valid email address']")
   });

   Then('I select the delivery address to be {string}', function (custom) {
      return browser.useXpath()
      .click(guestBook.deliveryAddressDropdown)
      .element.findByText(custom).click()
   });