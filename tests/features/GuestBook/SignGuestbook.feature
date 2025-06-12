@dev @stage @prod
@guestBook
@signGuestBook
@all
Feature: Sign Guestbook


    Background:
        Given I navigate to tribute book page

    #fails in dev
    @SG001
    Scenario: Validate ability to Sign Guestbook
        When I click Sign Guestbook
        Then I fill out Sign Guestbook form
        And I click submit
        Then Thank you message is displayed


    @SG002
    Scenario: Validate ability to Sign Guestbook in person attend
        When I click Sign Guestbook
        Then I fill out Sign Guestbook form
        And I select Attended in-person checkbox
        And I click submit
        Then Thank you message is displayed
