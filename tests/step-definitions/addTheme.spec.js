const { Given, When, Then } = require("@cucumber/cucumber");
var guestBook = require('../elements/guestBook');
var orders = require('../elements/AdminPortal/Orders_elements');
var login = require('../elements/AdminPortal/Login_elements');
var themes = require('../elements/AdminPortal/Themes_elements');






  When('I click Add Theme', function () {
    return browser.useXpath()
      .click(themes.addTheme).pause(2000)
  });


When('I fill out Create Theme form', function () {
    return browser.useXpath()
        .click(themes.active)
        .sendKeys(themes.themeName, "testTheme00101")  
        .sendKeys(themes.coverPhotoFile_fileInput, browser.globals.addMemory_photo).pause(1000)
        .sendKeys(themes.previewURL, "https://www.previewTheme00101.com")   
        .sendKeys(themes.obituaryTwoPagePhoto, "/Users/marinakalashnikova/Desktop/test_img/dolphin.png").pause(1000)
        .sendKeys(themes.obituaryOnePagePhoto, "/Users/marinakalashnikova/Desktop/test_img/rabbit.jpeg").pause(1000)
        .sendKeys(themes.obituaryQuoteAttribution,"This is obituary quote attribution for testing")
        .sendKeys(themes. eventsTwoPagePhoto,"/Users/marinakalashnikova/Desktop/test_img/fantasy.jpg").pause(1000)
        .sendKeys(themes.eventsOnePagePhoto, "/Users/marinakalashnikova/Desktop/test_img/spring.jpg").pause(1000)
        .sendKeys(themes.eventsQuoteaAttribution, "This is event quote attribution for testing")
        .sendKeys(themes.tributesTwoPagePhoto,"/Users/marinakalashnikova/Desktop/test_img/lion.jpeg").pause(1000)
        .sendKeys(themes.tributesOnePagePhoto, "/Users/marinakalashnikova/Desktop/test_img/nature.jpg").pause(1000)
        .sendKeys(themes.tributesQuoteAttribution, "This is tributes quote attribution")
        .sendKeys(themes.photosTwoPagePhoto,"/Users/marinakalashnikova/Desktop/test_img/tree.jpg").pause(1000)
        .sendKeys(themes.photosOnePagePhoto, "/Users/marinakalashnikova/Desktop/test_img/bambi.jpeg").pause(1000)
        .sendKeys(themes.photosQuote,"This is photo quote")
        .sendKeys(themes.photosQuoteAttribution, "This is photo quote attribution")
        .sendKeys(themes.giftsTwoPagePhoto,"/Users/marinakalashnikova/Desktop/test_img/city.jpg").pause(1000)
        .sendKeys(themes.giftsOnePagePhoto, "/Users/marinakalashnikova/Desktop/test_img/flower.png").pause(1000)
        .sendKeys(themes.giftsQuote,"This is gift quote")
        .sendKeys(themes. giftsQuoteAttribution,"This is gift quote attribution").pause(3000)
  });

  Then('Theme has been created', function () {
    return browser.useXpath().pause(2000)
        .setValue(themes.seachbox, "Theme00101").pause(2000)
        .sendKeys(themes.seachbox, browser.Keys.ENTER).pause(4000)
        .assert.elementPresent("//mark[text()='Theme00101']")
  });

  Then('I click edit Theme', function () {
    return browser.useXpath()
      .click("//a[@role='button']").pause(1000)
      .click("//span[normalize-space()='Edit']").pause(1000)
  });

  Then('I update Theme Name', function () {
      return browser.useXpath()
        .clearValue(themes.themeName).pause(1000)
        .sendKeys(themes.themeName, "Updated theme name").pause(1000)

  });

  Then('Theme has been updated', function () {
    return browser.useXpath()
        .clearValue(themes.seachbox).pause(1000)
        .sendKeys(themes.seachbox, "Updated theme name").pause(1000)
        .sendKeys(themes.seachBox, browser.Keys.ENTER).pause(4000)
        .assert.elementPresent("//mark[text()='Updated theme name']")

  });

  Then('I delete theme', function () {
    return browser.useXpath()
      .click("//a[@role='button']").pause(1000)
      .click("//a[@class='dropdown-item action-delete text-danger']").pause(1000)
      .click("//span[@class='btn-label'][normalize-space()='Delete']")
  });

  Then('Theme has been deleted', function () {
    return browser.useXpath()
       .assert.elementPresent("//td[normalize-space()='No results found.']")
  });
