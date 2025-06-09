@dev @stage @prod 
@adminPortal
@admins 
@all
Feature: Admins

Background:
Given I navigate and log into admin portal
Then I click "Admins" on the left hand nav

@A001 
Scenario: Create Edit & Delete Admin 
When I click Add Admin
Then I fill out create admin form "<username>","<password>","<role>"
And I click Create
Then Admin with user name "<username>" has been created
Then I click edit admin
And I update username "<usename2>" 
And I hit save changes
Then Username has been updated to "<usename2>"
Then I delete admin
And Admin has been deleted 

Examples:
| username   | password | role        |  usename2       |
| admin04004 | 8998Si00 | Super Admin | updatedUserName |



