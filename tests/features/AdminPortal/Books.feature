@dev @stage @prod
@adminPortal
@addBook
@all
Feature: Add Book

    Background:
        Given I navigate and log into admin portal
        Then I click "Books" on the left hand nav


    @B001
    Scenario: Add Book Edit & Delete book
        Then I see page with title "Book"
        When I click Add Book
        Then I fill out Create Book form "<domainID>","<obituaryID>","<deceasedFirstName>","<deceasedMiddleName>","<deceasedLastName>","<theme>",
        And I click Create
        Then I see page with title "Book"
        Then I seach for created book "<domainID>"
        And Created book has been found
        Then I click Eclipsis/Edit
        And I edit created book "34gg323542fftEDITED"
        Then I click save changes
        Then I seach for edited book "34gg323542fftEDITED"
        And Edited book has been found
        Then I click Eclipsis/Delete
        And Book has been deleted

        Examples:
            | domainID                  | obituaryID | deceasedFirstName | deceasedMiddleName | deceasedLastName | theme  |
            | 34gg323542fftDefaultTheme | 2343442    | Andrew            | Setg               | Minaj            | Floral |



