@dev @stage @prod 
@adminPortal
@editBook  
@all
Feature: Edit Book


@BE001
Scenario Outline: Delete Media (contributoion with an image)
Given I navigate to tribute book page
When I add media "<contribution>" to the book 
Then I navigate and log into admin portal
Then I click "Book Edits" on the left hand nav
Then I enter guest book URL into the search field and click customize book
Then I search for contribution "<contribution>"
And I click edit
Then I click Delete Media
And contribution has been deleted for "<contribution>"



Examples:
    |contribution|
    # |MEDIA0010101|
    # |contributionWithImage|
    |contributionWithImageNewer|


@BE002
Scenario: Hide and unhide media 
Then I navigate and log into admin portal
When I click Ellipsis and select "Edit Book"
Then I search for contribution "This media will be used for automation testing" 
And Media is visiable
And I click edit
Then I click Hide button
Then I search for contribution "This media will be used for automation testing" 
And Media is not visiable anymore 
And I click edit
And I click Show Media
Then I search for contribution "This media will be used for automation testing" 
And Media is visiable


@BE003 
Scenario: Delete Tribute (contributoion without an image)
Given I navigate to tribute book page
When I add tribute "<contribution>" to the book 
Then I navigate and log into admin portal
Then I click "Book Edits" on the left hand nav
Then I enter guest book URL into the search field and click customize book
Then I search for contribution "<contribution>"
And I click edit
Then I click Hide button
And contribution has been deleted for "<contribution>"

Examples:
    |contribution|
    # |TRIBUTE00010002|
    # |contributionWithoutImage|
    |contributionWithoutImageNew|

@BE004
Scenario Outline: Update Tribute
Then I navigate and log into admin portal
Then I click "Book Edits" on the left hand nav
Then I enter guest book URL into the search field and click customize book
Then I search for contribution "<original_tribute>"
And I click edit
Then I update tribute "<edited_tribute>" 
Then I click save edit
Then search for updated tribute "<edited_tribute>" and return to a previous value "<original_tribute>"
Then I click save edit

Examples:
    | original_tribute | edited_tribute | 
    | TR0020202        | TR0020202-EDITED | 
    # | Tribute00202     | Tribute00202-EDITED | 


@BE005
Scenario: Invalid Book URL
Then I navigate and log into admin portal
Then I click "Book Edits" on the left hand nav
Then I enter Invalid book URL "https://www.invalidBook.com"
And I click customize book
Then 400 error is received


# #test run throughs an error but doesn't fail the test , don't knoe why
# @actions
# Scenario: test secrets
# Then I navigate and log into admin portal
# Then print out the password
# When I click Ellipsis and select "PPPP"
# Then I search for contribution "This media will be used for automation testing" 

