@dev @stage @prod
@adminPortal
@themes
@all
Feature: Themes

    Background:
        Given I navigate and log into admin portal
        Then I click "Themes" on the left hand nav


    @T001
    Scenario: Create Edit & Delete Theme
        When I click Add Theme
        Then I fill out Create Theme form
        And I click Create
        Then Theme has been created
        Then I click edit Theme
        And I update Theme Name
        And I hit save changes
        Then Theme has been updated
        And I delete theme
        Then Theme has been deleted

