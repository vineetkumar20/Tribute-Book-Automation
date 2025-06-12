@dev
# @stage
@prod
@adminPortal
@profiles
@all
Feature: Profiles


    Background:
        Given I navigate and log into admin portal
        Then I click "Profiles" on the left hand nav


    @AP001
    Scenario: Create Edit & Delete Funeral Home Profile
        When I click Add FuneralHome
        Then I fill out Create FuneralHome form "<Name>","<DomainID>","<Description>","<Email>","<Address1>","<Address2>","<City>","<State>","<Zip>","<Book Price>","<Dedication Page Subtitle>","<Phone>","<Website>"
        And I create profile
        Then I search for "<DomainID>" and confirm that Funeral Home profile is present
        Then I click edit created FuneralHome profile
        And I update domain ID to "0203gft5501EDITED" and Save changes
        Then I search for "0203gft5501EDITED" and confirm that Funeral Home profile is present
        Then I delete created funeralhome profile
        And FuneralHome profile has been deleted sucessfully


        Examples:
            | Name      | DomainID    | Description                               | Email                      | Address1        | Address2 | City     | State    | Zip   | Book Price | Dedication Page Subtitle | Phone      | Website               |
            | Home01001 | 0203gft5501 | This FuneralHome will be used for testing | marina.adperfect@gmail.com | 123 New York St | 304      | New York | New York | 22222 | 23         | Subtitle                 | 3333333333 | www.funeralhome01.com |
