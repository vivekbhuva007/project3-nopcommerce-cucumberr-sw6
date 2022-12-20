@regression
Feature: TopMenu Test
  As user I want to navigate through top menu of the page

  #@smoke

  Scenario: User can verify User Should Navigate To Desktops Page Successfully
    Given I am on homepage
    And I Mouse hover on “Desktops” Tab and click
    And I call selectMenu method and pass the menu = “Show All Desktops”
    Then Verify the text ‘Desktops’

  Scenario: User can verify User Should Navigate To Laptops And Notebooks Page Successfully
    Given I am on homepage
    When I Mouse hover on “Laptops & Notebooks” Tab and click
    And I call selectMenu method and pass the menu = “Show All Laptops & Notebooks”
    Then I can Verify the text ‘Laptops & Notebooks’

  Scenario: User can verify User Should Navigate To Components Page Successfully
    Given I am on homepage
    When I Mouse hover on “Components” Tab and click
    And I call selectMenu method and pass the menu = “Show All Components”
    Then I can verify the text ‘Components’

