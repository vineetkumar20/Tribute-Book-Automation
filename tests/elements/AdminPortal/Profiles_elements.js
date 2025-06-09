var Profiles_elements = {
    
    addFuneralHome: "//span[normalize-space()='Add FuneralHome']",
    name: "//div[@class='row']/div[3]/div/div/input",
     

    
    domainID: "//input[@id='FuneralHome_domainId']",
    description: "//trix-editor[@role='textbox']",
    email: "//input[@id='FuneralHome_email']",
    address1:"//input[@id='FuneralHome_address1']",
    address2: "//input[@id='FuneralHome_address2']",
    city: "//input[@id='FuneralHome_city']",
    state: "//input[@id='FuneralHome_state']",
    zipcode: "//input[@id='FuneralHome_zip']",
    bookPrice: "//input[@id='FuneralHome_book_price']",
    dedicationPageSubtitle: "//input[@id='FuneralHome_dedication_page_subtitle']",
    phone: "//input[@id='FuneralHome_phone']",
    website: "//input[@id='FuneralHome_website']",
    logo: "//input[@id='FuneralHome_logo_file']",
    create: "//span[@class='action-label'][normalize-space()='Create']",

    funeralHome_names: "//table[@class='table datagrid ']/thead/following-sibling::tbody/tr/td[3]/span",
    actions_dropdown: "//td[@class='actions actions-as-dropdown']",
    edit: "//div[@class='dropdown-menu dropdown-menu-right show']//a[@class='dropdown-item action-edit']",
    delete: "//div[@class='dropdown-menu dropdown-menu-right show']//a[@class='dropdown-item action-delete text-danger']",
    seachbox: "//input[@placeholder='Search']",
    MobileCheckinRequireEmail: "//input[@id='FuneralHome_mobile_checkin_require_email']",
    MobileCheckinRequireAddress: "//input[@id='FuneralHome_mobile_checkin_require_address']",

   buttonSaveChanges: "//button[@class='action-saveAndReturn btn btn-primary action-save']"
                             
    
    



}


module.exports = Profiles_elements;