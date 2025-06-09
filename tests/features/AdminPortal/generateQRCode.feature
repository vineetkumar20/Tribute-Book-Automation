@dev @stage @prod 
@adminPortal 
@qrCode 
@all
Feature: Generate QR Code

Background:
Given I navigate and log into admin portal
Then I click "Generate QR Code" on the left hand nav

@QR001
Scenario: Generate QR Code
When I enter FuneralHome DomainID "701a2c2bde494fc1a710a0ba00cceaf6"
And I click Generate QR Code
Then QR Code has been generated