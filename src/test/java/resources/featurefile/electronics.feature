Feature: electronics Test
  As user I want to navigate to electronics page

  Scenario: test Name Verify User Should Navigate To Cell Phones Page Successfully
    Given I am on Electronics page
    When I click on electronics page
    And I mouse hover on cell phone
    Then I shouls see Cell phone text displayed

  Scenario: verify That The Product Added Successfully And Place Order Successfully
    Given I am on Electronicss page
    When I click on electronicss page
    And I mouse hoverr on cell phone
    And I should see Cell phone text displayed
    And I click on list view
    And I click on nokia lumia
    And I should see nokia lumia message displayed
    And I should see dollorrr message displayed
    And I change quantity one
    And I clicked on add to cart
    And I should see added product message displayed
    And I click on close button
    And I click on shopping carttt
    And I should see shopping cart message displayed
    And I should see dollorr  message displayedd
    And I click on checkboxx
    And I click on checkoutt
    And I should verify welcome message sign in displayed
    And I click on register tab
    And I should verify register message displayed
    And I  click on radioo buttonn
    And I entered first name "Prime"
    And I entered last name  "Testing"
    And I enter EmailAddress "test12@gmail.com"
    And I enter password "william123"
    And I enter confirm password  "william123"
    And I clicked on register buttonn1
    And I should verify registration completed message displayed
    And I click on continue b
    And I should verify shopping cart text displayed
    And I click on checkbox2
    And I clicked checkout3
    And I entered country "United Kingdon"
    And I entered city "London"
    And I entered Address1 "50 high RD"
    And I entered zip postal code "Wd10 5td"
    And I entered phone number "0700400700"
    And  I clicked on continue3
    And I clicked no R button
    And I click on continue4
    And I clicked on radioo button2
    And I clicked on Payment method buttonn
    And I select credit card "Visa"
    And I selected card holder name "xyz"
    And I entered card number "3252 7814 7648 5333"
    And I select expiry month1 "01"
    And I select year1 "2030"
    And I entered card code "111"
    And I clicked on check outt
    And I should verify credit card message displayed
    And I should verify second day card message displayed
    And I should verify dollors4 message displayed
    And I clicked on confirm buttonn
    And I should verify Thank you message displayed
    And I should verify Your order has been successfully processed  text
    And I click on continue button5
    And I should confirm  Welcome to our store text displayed
    And I clicked on logout
    Then I should confirm current url








