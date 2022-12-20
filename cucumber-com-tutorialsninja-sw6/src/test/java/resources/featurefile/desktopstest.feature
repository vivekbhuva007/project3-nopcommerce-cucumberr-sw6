
Feature: Desktops Test
  As user I want to arrange listing in alphabetical order and verify product added to shopping cart

  #@smoke

  Scenario: User can verify Product Arrange In Alphabetical Order
    Given I am on homepage
    When I Mouse hover on “Desktops” Tab and click
    And I can Select Sort By position Name: Z to A
     Then  Verify the Product will arrange in Descending order


  Scenario: User can verify Product Added To Shopping Cart SuccessFully
    Given I am on homepage
    When I change currency to Pound Sterling
    And I Mouse hover on “Desktops” Tab and click
    And Select Sort By position "Name: A to Z"
   And Select product “HP LP3065”
    And Verify the Text "HP LP3065"
    And Select Delivery Date "2022-11-30"
    And Enter Qty "1” using Select class.
    And Click on “Add to Cart” button
    And Verify the Message “Success: You have added HP LP3065 to your shopping cart!”
    And Click on link “shopping cart” display into success message
    And Verify the text "Shopping Cart"
    And Verify the Product name "HP LP3065"
    And Verify the Delivery Date "2022-11-30"
    And Verify the Model "Product21"
    Then Verify the Total "£74.73"

