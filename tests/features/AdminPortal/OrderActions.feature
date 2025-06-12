@dev @stage @adminPortal
@adminPortal
@orderActions
@all
Feature: Verify Order Actions Dropdown


    Background:
        Given I navigate to tribute book page
        Then I place a new tribute book order
        Then I navigate and log into admin portal
        Then I see page with title "Orders Listing"
        When I click Ellipsis and select "Edit Order"
        Then I click on Order Actions button

    @OA001
    Scenario: View book under Order Actions dropdown
        Then I click link 'View Book'
        Then check that correct page is opened in a new tab "https://www.tributebook.com/"

    @OA002
    Scenario: Edit book under Order Actions dropdown
        Then I click link "Edit Book"
        Then Order Customizations page is opened

    #fails in dev
    @OA003
    Scenario: View Obituary under Order Actions dropdown
        Then I click link "View Obituary"
        Then check that correct page is opened in a new tab "https://demoresponsive.tributecenteronline.com/obituaries"

    @OA004
    Scenario: View Obituary under Order Actions dropdown
        Then I click link "Copy Form Link"
        Then check that correct page is opened in a new tab "https://www.tributebook.com/orders/customize-print-date"

    @OA005
    Scenario: Hold Order under Order Actions dropdown
        Then I click link "Hold Order"
        Then I populate Hold Order modal details and click Yes button
        Then I see flash message at the top "Order is now on hold."
        Then I click on Order Actions button
        Then I click link "Cancel Hold"
        Then I see flash message at the top "Order is no longer on hold"

    @OA006
    Scenario: Refund under Order Actions dropdown
        Then I click link "Refund"
        Then I populate Refund modal details and click Yes button
        Then I see flash message at the top "Order has been successfully refunded."


    # this seem to be always greyed out
    # @OA007
    # Scenario: View tracking under Order Actions dropdown


    @OA008
    Scenario: Resend Receipt under Order Actions dropdown
        Then I click link "Resend Receipt"
        Then I see flash message at the top "Order receipt has been successfully resent."

    # this seem to be always greyed out
    # @OA009
    # Scenario: Mark Damaged under Order Actions dropdown
    # Then I click link "Mark Damaged"

    @OA0010
    Scenario: Export Invoice under Order Actions dropdown
        Then I click link "Export Invoice"
        Then check that correct page is opened in a new tab "tributebook.com/admin?crudAction=exportInvoicePdf"

    @OA0011
    Scenario: Validate the ability to perform Print actions
        Then I click Cancel Print under Print Actions dropdown
        And I click Yes Im sure
        Then I see flash message at the top "Printing has been successfully cancelled."
