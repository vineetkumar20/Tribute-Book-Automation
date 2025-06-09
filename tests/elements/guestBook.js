
var guestBook = {
addAMemory: "//div[@class='header-buttons-container d-none d-m-flex']/a[1]",
signGuestBook: "//div[@class='header-buttons-container d-none d-m-flex']/a[3]",
shareTheBook: "//div[@class='header-buttons-container d-none d-m-flex']/a[4]",
addAMemory: "//div[@class='header-buttons-container d-none d-m-flex']/a[1]",
orderNow: "//div[@class='header-buttons-container d-none d-m-flex']/button",
viewTributeBook: "//button[@class='KeepsakeButtonStyles_keepsakeBtn__CfALX Root_seeInsideBookButton__UU4ry KeepsakeButtonStyles_keepsakeBtnCta__2__cr']",
message_input: "//textarea[@name='response']",
file_input: "//input[@id='multiple-image-file-picker']",
turnNextpageButton: "//a[@class='Turn_nextPageButton__BOAX0']",
    turnPrevPageButton: "//a[@class='Turn_prevPageButton__UmnPS']",

attendedInPerson_checkbox: "//input[@id='in-person-checkin']",
plus: "//*[text()='+']",
minus: "//span[text()='−']",
editPrintDate: "//a[text()='Edit']",
continue: "//button[text()='Continue']",
relationDropDown: "//div[text()='What is your relation to Test?']",

addMemory_firstname: "//input[@placeholder='First Name']",
addMemory_lastname:"//input[@placeholder='Last Name']",
addMemory_email:"//input[@placeholder='Email']",

GiveTributeBookAsAGift_checkbox: "//div[@class='d-flex flex-row align-items-center mt-4 mb-3']/input",
deliveryAddressDropdown: "//div[@class=' css-hlgwow']",
addAFreeCardMessage_checkbox: "//form[@method='POST']/div[14]/input",
shipping_firstName: "//input[@name='firstName']",
shipping_lastName: "//input[@name='lastName']",
shipping_address: "//input[@name='address1']",
shipping_apartment: "//input[@name='address2']",
shipping_city: "//input[@name='city']",
shipping_dropdownCountry: "//div[@id='country-select']",
shipping_dropdownState: "//div[@id='state-select']",
shipping_zipCode: "//input[@name='zip']",
shipping_email: "//input[@name='email']",
shipping_cardNumber_input:"//input[@id='cardNumber']",
shipping_experationDate_input:"//input[@id='cardExpiry']",
shipping_cvc_input: "//input[@id='cardCvc']",

DoNotShareMyPurchaseOnTheOnlineObituary_checkbox: "//div[@class='mt-4 d-flex flex-row align-items-center']/input",
continueToPayment: "//*[text()='Continue to Payment']",
cardNumber: "//input[@name='cardNumber']",
experationDate: "//input[@name='cardExpiry']",
cvc: "//input[@name='cardCvc']",
cardHolderName_input: "//input[@name='billingName']",
billingCountryDropDown: "//select[@id='billingCountry']",
billingZipCode: "//input[@name='billingPostalCode']",
pay: "//button[@class='SubmitButton SubmitButton--complete']",
postMessage: "//div[@style='display: flex; flex-direction: column;']/button",
thankYou: "//h2[text()='Thank you for sharing!']",
signGuestBook_thankYou: "//h2[text()='Thank You']",
signGuestBook_submit: "//button[text()='Sign Guestbook']",

orderDetailsPage_firstName: "//div[@class='checkout_deliveryInfo__mdDHT']/div/div[1]/div[1]/text()[1]",
orderDetailsPage_lastName: "//div[@class='checkout_deliveryInfo__mdDHT']/div/div[1]/div[1]/text()[3]",
orderDetailsPage_address: "//div[@class='checkout_deliveryInfo__mdDHT']/div/div[1]/div[2]",
orderDetailsPage_apartment: "//div[@class='checkout_deliveryInfo__mdDHT']/div/div[1]/div[3]",
orderDetailsPage_city: "//div[@class='checkout_deliveryInfo__mdDHT']/div/div[1]/div[4]/text()[1]",
orderDetailsPage_state: "//div[@class='checkout_deliveryInfo__mdDHT']/div/div[1]/div[4]/text()[4]",
orderDetailsPage_zipCode: "//div[@class='checkout_deliveryInfo__mdDHT']/div/div[1]/div[4]/text()[6]",
orderDetailsPage_country: "//div[@class='checkout_deliveryInfo__mdDHT']/div/div[1]/div[5]",
oderDetails_subtotal:"//div[@class='checkout_layoutColumn__X_4L6 checkout_column40Pct__lTY5j']/div/div[3]/div[1]/div[2]/text()[2]",
oderDetails_shipping:"//div[@class='checkout_layoutColumn__X_4L6 checkout_column40Pct__lTY5j']/div/div[3]/div[3]/div[2]/text()[2]" ,
oderDetails_taxes:"//div[@class='checkout_layoutColumn__X_4L6 checkout_column40Pct__lTY5j']/div/div[3]/div[4]/div[2]/div/text()[3]" ,
oderDetails_total: "//div[@class='checkout_layoutColumn__X_4L6 checkout_column40Pct__lTY5j']/div/div[5]/div/div[2]/text()[2]",

shippingAddressInfo: "//div[@class='checkout_column__Bzu1H']",
orderSummary: "//div[@class='checkout_layoutColumn__X_4L6 checkout_column40Pct__lTY5j']",





signGuestBook_name: "//input[@name='name']",
signGuestBook_email: "//input[@name='email']",
signGuestBook_stateDropDown: "//span[@id='react-select-19-live-region']/following-sibling::span/following-sibling::div",
signGuestBook_address: "//input[@name='address']",
signGuestBook_city: "//input[@name='city']",
signGuestBook_zipCode: "//input[@name='zip']",


shipping_ThisFieldIsRequired_List : "//*[text()='This field is required']",

recipientsName: "//input[@name='recipient-name']",
form: "//div[@class='row']/div[2]/div/input",
cardMessage : "//input[@name='recipient-name']",

};
module.exports = guestBook;