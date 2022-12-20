Feature: Laptops and Notebooks Test
  As user I want to arrange listing in High To Low order and verify product added to shopping cart

  Scenario: verify Products Price Display High To Low Successfully
    Given I am on homepage
    When  Mouse hover on Laptops & Notebooks Tab and click
    And Click on “Show All Laptops & Notebooks”
    And Select Sort By "Price (High > Low)"
    Then Verify the Product price will arrange in High to Low order.

  Scenario: verify Products Price Display High To Low Successfully
    Given I am on homepage
    When I change currency to Pound Sterling
    And Mouse hover on Laptops & Notebooks Tab and click
    And Click on “Show All Laptops & Notebooks”
    And Select Sort By "Price (High > Low)"
    And  Select Product “MacBook”
    And Verify the text “MacBook”
    And Click on ‘Add To Cart’ button
    And Verify the message “Success: You have added MacBook to your shopping cart!”
    And Click on link shopping cart display into success message
    And Verify the text Shopping Cart
    And Verify the Product name MacBook
    And Change Quantity "2"
    And Click on “Update” Tab
    And Verify the message “Success: You have modified your shopping cart!”
    And Verify the Total £737.45
    And Click on “Checkout” button
    And Verify the text “Checkout”
    And Verify the Text “New Customer”
    And Click on “Guest Checkout” radio button
    And Click on “Continue” tab
    And Fill the mandatory fields
    And Click on “Continue” Button
    And Add Comments About your order into text area
    And Check the Terms & Conditions check box
    And Click on “Continue” button
    Then Verify the message “Warning: Payment method required!”

