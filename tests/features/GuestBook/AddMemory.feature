@dev @stage @prod @addMemory @guestBook
@all
Feature: Add a Memory

    Background:
        Given I navigate to tribute book page

    @AM001
    Scenario: Validate ability to Add a Memory
        Then I add tribute "This test messsage" to the book
        Then Thank you for sharing! message is displayed

    @AM002
    Scenario: Validate ability to Add a Memory with Photo
        Then I add media "This test messsage with photo" to the book
        Then Thank you for sharing! message is displayed




