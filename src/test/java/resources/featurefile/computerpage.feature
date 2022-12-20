@sanity
Feature: ComputerPage Test
  As user I want to navigate to computer page

  Scenario: verify Product Arrange In Alphabetical Order
    Given I am on computer
    When I click on computer tab
    And I click on desktop tab
    Then I click on position tab

  Scenario: verify Product Added To Shopping Cart SuccessFully
    Given I am On computer menu
    When I clickedd on desktop tab
    And I clickedd on position tab
    And I click on add to cart
    And I should see build your own computer text
    And I select first options from dropdown "2.2 GHz Intel Pentium Dual-Core E2200"
    And I select third options from dropdown "8GB [+$60.00]"
    And I click on radio button
    And I click on radio buttonn
    And I click on check box
    And I should see  dollor amount displayed
    And I click On set Add to cart button
    And I should see product added message displayed
    And I click On cross button
    And I do mousehover and add to cart
    And I should see shopping cart displayed
    And I click on update basket
    And I click on update on shopping cartt
    And I should see dollor displayed
    And I click on checkbox
    And I click on checkout
    And I should see Welcome Message displayedd
    And I clickedd on guest tab
    And I enter firstname"Ganaati"
    And I enter lastname"kailash"
    And I enter emailid"Ganpati@gmail.com"
    And I select country "United Kingdom"
    And I enter cityfield "London"
    And I enter Address "10 Downing St"
    And I enter zipcode "OV16 7BH"
    And I enter phonenumber "07900 200004"
    And I click on continue
    And I click on radiobuttonn
    And I click on continuee
    And I click on button
    And I selectCC
    And I click on card type
    And I select MasterC "Master card"
    And I select card holder name "MR G K Patel"
    And I enter card number "0759 2136 2156 5987"
    And I click on expire month
    And I select expiremonth "04"
    And I click on expire year
    And I select expire year "2026"
    And I enter card code "859"
    And I click On COntinueee
    And I should see Payment method text displayed
    And I should see credit card text displayed
    And I should see shipping method text displayed
    And I should see next day air text displayed
    And I should see dollors text displayed
    And I click on Confirm buttonn
    And I should see thanks message text displayed
    And I should see successful message text displayed
    And I clicked On continued button
    Then I should see welcome to our store text displayed





