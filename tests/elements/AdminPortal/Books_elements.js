var Books_elements={


    addBook:"//span[normalize-space()='Add Book']",
    domainID_input:"//input[@id='Book_domainId']",
    obituaryID_input: "//input[@id='Book_obituaryId']",
    
    isPrivite_checkbox: "//input[@id='Book_isPrivate']",
    isDisabled_checkbox: "//input[@id='Book_isDisabled']",
    printDate_input: "//input[@id='Book_printDate']",
    firstName_input: "//input[@id='Book_decedentFirstName']",
    middleName_input:"//input[@id='Book_decedentMiddleName']",
    lastName_input: "//input[@id='Book_decedentLastName']",
    decedentBirthDate_input: "//input[@id='Book_decedentBirthDate']",
    decedentDeathDate_input: "//input[@id='Book_decedentDeathDate']",

    theme_dropdown: "//div[@id='Book_theme-ts-control']",
    dropdownTheme: "//select[@id='Book_theme']",
    fieldDropdownTheme: "//input[@class='dropdown-input']",

    obituaryText_input: "//textarea[@id='Book_obituaryText']",
    fieldPhotoFilename: "//input[@id='Book_photoFilename']",
    lastViewedAt_input: "//input[@id='Book_lastViewedAt']",
    createdAt_input: "//input[@id='Book_createdAt']",
    updatdAt_input: "//input[@id='Book_updatedAt']",
    create_button: "//*[text()='Create']",
    seachBox: "//input[@placeholder='Search']",
    saveChanges_button:"//span[contains(text(),'Save changes')]",


   

}

module.exports = Books_elements;


