Feature: My Accounts Test for Login function
  As user I want to navigate to Login page and verify user can login and logout successfully


Scenario: verify User Should Navigate To Login Page Successfully
Given I am on homepage
When Click on My Account Link
And Call the method “selectMyAccountOptions” method and pass the parameter “Login”
Then Verify the text “Returning Customer”

  Scenario: verify That User Should Login AndLogout Successfully
    Given I am on homepage
    When Click on My Account Link
    And Call the method “selectMyAccountOptions” method and pass the parameter “Login”
    And Enter Email address
    And Enter Password on Login page
    And Click on Login button
    And Click on My Account Link.
    And Call the method “selectMyAccountOptions” method and pass the parameter “Logout”
    And Verify the text “Account Logout”
    Then Click on Continue button