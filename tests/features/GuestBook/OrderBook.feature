@dev @stage
@guestBook
@orderBook
@all
Feature: Order Book

    Background:
        Given I navigate to tribute book page
        When I click Order Now


    @OB001
    Scenario: Ability to Place an Order
        Then I fill out Shipping form
        And I click Continue to Payment
        Then I fill out Payment Method form
        And I click Pay
        Then Order Details page is displayed
        And I verify correcntness of Customer Information and Order Summary


    @OB002
    Scenario: Ability to Place an Order for multiple Books with discount
        And I select a number of 5 Books
        Then I fill out Shipping form
        And I click Continue to Payment
        Then I fill out Payment Method form
        And I click Pay
        Then Order Details page is displayed
        And I verify correcntness of order total with applied discount


    @OB003
    Scenario: Ability to Place an Order with changing Pring Date
        And I change Pring Date
        Then I fill out Shipping form
        And I click Continue to Payment
        Then I fill out Payment Method form
        And I click Pay
        Then Order Details page is displayed


    @OB004
    Scenario: Ability to Place an Order and Give Tribute Book as a gift
        And I select Give Tribute Book as a gift
        Then I select the delivery address to be "Custom Address"
        Then I fill out Shipping form
        And I click Continue to Payment
        Then I fill out Payment Method form
        And I click Pay
        Then Order Details page is displayed


    @OB005
    Scenario: Ability to Place an Order and Give Tribute Book as a gift with adding a free card message
        And I select Give Tribute Book as a gift
        Then I select the delivery address to be "Custom Address"
        Then I fill out Shipping form
        And I select Add a free card message
        Then I fill out card message details
        And I click Continue to Payment
        Then I fill out Payment Method form
        And I click Pay
        Then Order Details page is displayed


    @OB006
    Scenario: Ability to Place an Order and do not share my purchase on the online obituary
        Then I fill out Shipping form
        And Do not share my purchase on the online obituary
        And I click Continue to Payment
        Then I fill out Payment Method form
        And I click Pay
        Then Order Details page is displayed


    @OB007
    Scenario: Shipping Form required fields
        And I click Continue to payment without entering any shipping info
        Then I validate required fileds of Shipping form