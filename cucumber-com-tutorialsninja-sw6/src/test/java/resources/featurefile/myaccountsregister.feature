Feature: My Accounts Test for Register function
  As user I want to navigate to register page and verify user can register

  Scenario: verify User Should Navigate To Register Page Successfully
    Given I am on homepage
    When Click on My Account Link
    And Call the method “selectMyAccountOptions” method and pass the parameter “Register”
    Then Verify the text “Register Account”



  Scenario: verify That User Register Account Successfully
    Given I am on homepage
    When Click on My Account Link
    And Call the method “selectMyAccountOptions” method and pass the parameter “Register”
    And Enter First Name
    And Enter Last Name
    And Enter Email
    And Enter Telephone
    And Enter Password
    And Enter Password Confirm
    And Select Subscribe Yes radio button
    And Click on Privacy Policy check box
    And Click on Continue button
    And Verify the message “Your Account Has Been Created!”
    And Click on Continue button1
    And Click on My Account Link.
    And Call the method “selectMyAccountOptions” method and pass the parameter “Logout”
    And Verify the text “Account Logout”
    Then Click on Continue button after Logout


