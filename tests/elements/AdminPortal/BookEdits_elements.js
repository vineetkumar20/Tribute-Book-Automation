var BookEdits_elements = {

    guestbookURL_seachbox: "//input[@id='book-url']",
    customizeBook_button: "//a[@id='customize-from-book-url']",
    // edit_button: '//*[@id="medias-edit"]/input',
    edit_button:"//input[@name='action']",

  
    editBook_seachbox: "//input[@class='form-control form-control-sm']",
    deleteMedia_button:"//input[@id='saveTributeForm']",
    hideTributeMedia: "//div[@class='content-wrapper']//input[2]",

    trubite_input: "//textarea[@name='tributeContent']",
    saveEdits: "//div[@class='content-wrapper']//input[1]",
    no_media_found: "//td[text()='No matching records found']"

}

module.exports = BookEdits_elements;