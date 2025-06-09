var Orders_elements = {





addOrder_button: "//div[@class='global-actions']",
UseBookURLToAutofillOrderInf_input: "//input[@id='book-url']",
autoFill_button: "//button[@id='autofill-from-book-url']",
domainID_input:"//input[@id='OrderEntity_domain_id']",
  obituaryID_input :" //input[@id='OrderEntity_obituary_id']",
  deceasedFirstName_input:"//input[@id='OrderEntity_deceased_first_name']",
  deceasedMiddleName_input:" //input[@id='OrderEntity_deceased_middle_name']",
  deceasedLastName_input :"//input[@id='OrderEntity_deceased_last_name']",
    email_input: "//input[@id='OrderEntity_email']",
    funeralHome_input: "//input[@id='OrderEntity_funeralHomeName']",
    shippingFirstName_input: "//input[@id='OrderEntity_shipping_first_name']",
    shippingLastName_input: "//input[@id='OrderEntity_shipping_last_name']",
    shippingAddress1_input:"//input[@id='OrderEntity_address1']",
    shippingAddress2_input: "//input[@id='OrderEntity_address2']",
    shippingCity_input: "//input[@id='OrderEntity_city']",
    shippingState_input: "//input[@id='OrderEntity_state']",
    shippingZipcode_input: "//input[@id='OrderEntity_zip']",
    shippingCountry_dropdown: "//div[@class='ts-wrapper form-select single plugin-dropdown_input required invalid focus input-active']",
    qty_input: "//input[@id='OrderEntity_quantity']",
    basePrice_input: "//input[@id='OrderEntity_base_price']",
    shippingCost_input: "//input[@id='OrderEntity_shipping_cost']",
  continueToPayment_button: "//button[@class='action-saveAndReturn btn btn-primary action-save']",
    
  orderActions_dropdown:"//button[normalize-space()='Order Actions']",

    
    



  orderActions_viewBook_button: "//ul[@class='dropdown-menu p-2 show']/a[1]",
  orderActions_editBook_button: "//ul[@class='dropdown-menu p-2 show']/a[2]",
  orderActions_viewObituary_button: "//ul[@class='dropdown-menu p-2 show']/a[3]",
  orderActions_copyFormLink_button: "//ul[@class='dropdown-menu p-2 show']/a[4]",
  orderActions_holdOrder_button: "//ul[@class='dropdown-menu p-2 show']/a[5]",
  orderActions_holdOrder_modal: '//*[@id="holdOrderConfirmationModal"]/div/div',
  orderActions_holdOrder_reasonForHold_dropdown: "//select[@name='reasonForHold']",
  orderActions_holdOrder_additionalDetails_input: "//form[@id='holdOrderForm']//textarea[@id='additionalDetails']",
  orderActions_holdOrder_calendar_dropdown: "//input[@id='holdUntil']",
  orderActions_holdOrder_yesImSure_button: "//button[@form='holdOrderForm']",
  orderActions_holdOrder_No_button: "//div[@id='holdOrderConfirmationModal']//button[@type='button'][normalize-space()='No']",

  orderActions_flashMessage_text: '//*[@id="flash-messages"]/div',
  orderActions_flashMessage_dismiss: "//button[@data-bs-dismiss='alert']",
  
  


  orderActions_refund_button: "//ul[@class='dropdown-menu p-2 show']/a[6]",
  orderActions_refund_modal: '//*[@id="orderRefundModal"]/div/div',
  orderActions_refund_refundAmount_input: "//input[@name='amount']",
  orderActions_refund_reasonForRefund: "//select[@id='reasonForRefund']",
  orderActions_refund_additionalDetails_input: "//form[@id='orderRefundForm']//textarea[@id='additionalDetails']",
  orderActions_refund_yesImSure_button:"//button[@form='orderRefundForm']",
  orderActions_refund_No_button:"//div[@id='orderRefundModal']//button[@type='button'][normalize-space()='No']",

  
  
  
  
  



  orderActions_viewTracking: "//ul[@class='dropdown-menu p-2 show']/a[7]",
  orderActions_resendReceipt: "//ul[@class='dropdown-menu p-2 show']/a[8]",
  orderActions_markDamaged:"//ul[@class='dropdown-menu p-2 show']/a[9]",
  orderActions_exportInvoice:"//ul[@class='dropdown-menu p-2 show']/a[10]",
    



    
    
  printActions_dropdown: "//button[normalize-space()='Print Actions']",
  printActions_cancelPring_button: "//a[normalize-space()='Cancel Print']",
  
  printActions_yesImSure_button:"//button[@form='orderCancelPrintForm']",
  
    


  editBook_seachbox: "//input[@class='form-control form-control-sm']",
  editBook_edit_button: "//input[@name='action']",
  editBook_hideMedia_button: "//div[@class='content-wrapper']//input[2]",
  editBook_showMedia_button: "//div[@class='content-wrapper']//input[2]",

  tribute_input: "//textarea[@name='tributeContent']",
  
  saveEdit:"//div[@class='content-wrapper']//input[1]",
  
  



}
module.exports = Orders_elements;
