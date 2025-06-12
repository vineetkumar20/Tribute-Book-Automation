@dev @stage @prod
@guestBook
@previewBook
@all
Feature: Preview book

    Background:
        Given I navigate to tribute book page

    @PB001
    Scenario: Validate ability to preview the Book
        When I click view Tribute Book
        Then I preview book till last page
        And I preview book till first page
        Then I close Book
