package com.nopcommerce.demo.steps;

import com.nopcommerce.demo.pages.ComputerPage;
import cucumber.api.PendingException;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import org.checkerframework.checker.units.qual.C;
import org.testng.Assert;

public class ComputerSteps {
    @Given("^I am on computer$")
    public void iAmOnComputer() {
    }

    @When("^I click on computer tab$")
    public void iClickOnComputerTab() {
        new ComputerPage().clickOnComputerTab();
    }

    @And("^I click on desktop tab$")
    public void iClickOnDesktopTab() {
        new ComputerPage().clickOnDesktopTab();

    }

    @Then("^I click on position tab$")
    public void iClickOnPositionTab() {
        new ComputerPage().clickOnPositionTab();
    }

    @Given("^I am On computer menu$")
    public void iAmOnComputerMenu() {
        new ComputerPage().clickOnComputerMenu();
    }


    @When("^I clickedd on desktop tab$")
    public void iClickeddOnDesktopTab() {
        new ComputerPage().clickOnDesktopTabb();

    }

    @And("^I clickedd on position tab$")
    public void iClickeddOnPositionTab() {
        new ComputerPage().clickOnPositionTabb();

    }


    @And("^I click on add to cart$")
    public void iClickOnAddToCart() {
        new ComputerPage().clickOnAddToCart();
    }

    @And("^I should see build your own computer text$")
    public void iShouldSeeBuildYourOwnComputerText() {
        String expectedText = "Build your own computer";
        String actualText = new ComputerPage().verifyMessage();
        Assert.assertEquals(actualText, expectedText, "message is not displayed");

    }
    @And("^I select first options from dropdown \"([^\"]*)\"$")
    public void iSelectFirstOptionsFromDropdown(String firstOptions) {
        new ComputerPage().selectFirstOptionFromDropDown(firstOptions);
    }

    @And("^I select third options from dropdown \"([^\"]*)\"$")
    public void iSelectThirdOptionsFromDropdown(String thirdOptions) {
        new ComputerPage().selectThirdOptionFromDropDown(thirdOptions);

    }

    @And("^I click on radio button$")
    public void iClickOnRadioButton() {
        new ComputerPage().clickOnRadioButton();
    }

    @And("^I click on radio buttonn$")
    public void iClickOnRadioButtonn() {
        new ComputerPage().clickOnRadioButtonn();
    }

    @And("^I click on check box$")
    public void iClickOnCheckBox() {
        new ComputerPage().clickOnCheckBox();
    }

    @And("^I should see  dollor amount displayed$")
    public void iShouldSeeDollorAmountDisplayed() {
        String expectedText1 = "$1,475.00";
        String actualText1 = new ComputerPage().verifyMessagee();
        Assert.assertEquals(actualText1,expectedText1,"");
    }

    @And("^I click On set Add to cart button$")
    public void iClickOnSetAddToCartButton() {
        new ComputerPage().setClickOnAddToCartButton();

    }

    @And("^I should see product added message displayed$")
    public void iShouldSeeProductAddedMessageDisplayed() {
        String expectedText2 = "The product has been added to your shopping cart";
        String actualText2 = new ComputerPage().verifyMessage1();
        Assert.assertEquals(actualText2, expectedText2, "Message not displayed");

    }

    @And("^I click On cross button$")
    public void iClickOnCrossButton() {
        new ComputerPage().clickOnCrossButton();
    }

    @And("^I do mousehover and add to cart$")
    public void iDoMousehoverAndAddToCart() {
        new ComputerPage().MouseHoverAndClickOnAddToCart();

    }

    @And("^I should see shopping cart displayed$")
    public void iShouldSeeShoppingCartDisplayed() {
        String expectedText3 = "Shopping cart";
        String actualText3 = new ComputerPage().verifyMessage2();
        Assert.assertEquals(actualText3, expectedText3, "Message not displayed");

    }

    @And("^I click on update basket$")
    public void iClickOnUpdateBasket() {
        new ComputerPage().updateBasket();
    }

    @And("^I click on update on shopping cartt$")
    public void iClickOnUpdateOnShoppingCartt() {
        new ComputerPage().updateOnShoppingCart();
    }

    @And("^I should see dollor displayed$")
    public void iShouldSeeDollorDisplayed() {
        String expectedText4 = "$2,950.00";
        String actualText4 = new ComputerPage().verifyMessage3();
        Assert.assertEquals(actualText4, expectedText4, "Message not displayed");
    }

    @And("^I click on checkbox$")
    public void iClickOnCheckbox() {
        new ComputerPage().checkBox();
    }

    @And("^I click on checkout$")
    public void iClickOnCheckout() {
        new ComputerPage().checkOut();
    }

    @And("^I should see Welcome Message displayedd$")
    public void iShouldSeeWelcomeMessageDisplayedd() {
        String expectedText5 = "Welcome, Please Sign In!";
        String actualText5 = new ComputerPage().verifyMessage4();
        Assert.assertEquals(actualText5, expectedText5, "Message not displayed");
    }
    @And("^I clickedd on guest tab$")
    public void iClickeddOnGuestTab() {
        new ComputerPage().checkOutAsGuesttab();
    }

    @And("^I enter firstname\"([^\"]*)\"$")
    public void iEnterFirstname(String first) {
        new ComputerPage().enterFirstName(first);

    }

    @And("^I enter lastname\"([^\"]*)\"$")
    public void iEnterLastname(String last) {
        new ComputerPage().enterLastName(last);

    }

    @And("^I enter emailid\"([^\"]*)\"$")
    public void iEnterEmailid(String email) {
        new ComputerPage().enterEmailId(email);

    }

    @And("^I select country \"([^\"]*)\"$")
    public void iSelectCountry(String country) {
        new ComputerPage().selectCounty(country);

    }

    @And("^I enter cityfield \"([^\"]*)\"$")
    public void iEnterCityfield(String city) {
        new ComputerPage().enterCityField(city);

    }

    @And("^I enter Address \"([^\"]*)\"$")
    public void iEnterAddress(String address) {
        new ComputerPage().enterAddress1(address);

    }

    @And("^I enter zipcode \"([^\"]*)\"$")
    public void iEnterZipcode(String zipCode) {
        new ComputerPage().enterzipCode(zipCode);

    }

    @And("^I enter phonenumber \"([^\"]*)\"$")
    public void iEnterPhonenumber(String mobile) {
        new ComputerPage().enterPhoneNumber(mobile);

    }

    @And("^I click on continue$")
    public void iClickOnContinue() {
        new ComputerPage().clickOnContinue();
    }

    @And("^I click on radiobuttonn$")
    public void iClickOnRadiobuttonn() {
        new ComputerPage().clickOOnRadioButton();
    }

    @And("^I click on continuee$")
    public void iClickOnContinuee() {
        new ComputerPage().clickOnContinuee();
    }

    @And("^I click on button$")
    public void iClickOnButton() {
        new ComputerPage().clickOnButton();
    }

    @And("^I selectCC$")
    public void iSelectCC() {
        new ComputerPage().selectCC();
    }

    @And("^I click on card type$")
    public void iClickOnCardType() {
        new ComputerPage().clickCardType();
    }

    @And("^I select MasterC \"([^\"]*)\"$")
    public void iSelectMasterC(String card) {
        new ComputerPage().selectMasterC(card);

    }

    @And("^I select card holder name \"([^\"]*)\"$")
    public void iSelectCardHolderName(String name) {
        new ComputerPage().selectCardHolderName(name);

    }

    @And("^I enter card number \"([^\"]*)\"$")
    public void iEnterCardNumber(String number) {
        new ComputerPage().enterCardNumber(number);

    }

    @And("^I click on expire month$")
    public void iClickOnExpireMonth() {
        new ComputerPage().clickOnExpireMonth();
    }

    @And("^I select expiremonth \"([^\"]*)\"$")
    public void iSelectExpiremonth(String month) {
        new ComputerPage().selecttExpireMonth(month);

    }

    @And("^I click on expire year$")
    public void iClickOnExpireYear() {
        new ComputerPage().clickOnExpireYear();
    }

    @And("^I select expire year \"([^\"]*)\"$")
    public void iSelectExpireYear(String year) {
        new ComputerPage().selecttExpireYear(year);

    }

    @And("^I enter card code \"([^\"]*)\"$")
    public void iEnterCardCode(String code) {
        new ComputerPage().enterCardCode(code);

    }

    @And("^I click On COntinueee$")
    public void iClickOnCOntinueee() {
        new ComputerPage().clickOnContinueee();
    }

    @And("^I should see Payment method text displayed$")
    public void iShouldSeePaymentMethodTextDisplayed() {
        String expectedText6 = "Payment Method:";
        String actualText6 = new ComputerPage().verifyMessage5();
        Assert.assertEquals(actualText6, expectedText6, "Message not displayed");
    }

    @And("^I should see credit card text displayed$")
    public void iShouldSeeCreditCardTextDisplayed() {
        String expectedText7 = "Credit Card";
        String actualText7 = new ComputerPage().verifyMessage6();
        Assert.assertEquals(actualText7, expectedText7, "Message not displayed");

    }

    @And("^I should see shipping method text displayed$")
    public void iShouldSeeShippingMethodTextDisplayed() {
        String expectedText8 = "Shipping Method:";
        String actualText8 = new ComputerPage().verifyMessage7();
        Assert.assertEquals(actualText8, expectedText8, "Message not displayed");
    }

    @And("^I should see next day air text displayed$")
    public void iShouldSeeNextDayAirTextDisplayed() {
        String expectedText9 = "Next Day Air";
        String actualText9 = new ComputerPage().verifyMessage8();
        Assert.assertEquals(actualText9, expectedText9, "Message not displayed");
    }

    @And("^I should see dollors text displayed$")
    public void iShouldSeeDollorsTextDisplayed() {
        String expectedText10 = "$2,950.00";
        String actualText10 = new ComputerPage().verifyMessage9();
        Assert.assertEquals(actualText10, expectedText10, "Message not displayed");
    }
    @And("^I click on Confirm buttonn$")
    public void iClickOnConfirmButtonn() {
        new ComputerPage().clickOnConfirm();
    }

    @And("^I should see thanks message text displayed$")
    public void iShouldSeeThanksMessageTextDisplayed() {
        String expectedText11 = "Thank you";
        String actualText11 = new ComputerPage().verifyMessage10();
        Assert.assertEquals(actualText11, expectedText11, "Message not displayed");
    }

    @And("^I should see successful message text displayed$")
    public void iShouldSeeSuccessfulMessageTextDisplayed() {
        String expectedText12 = "Your order has been successfully processed!";
        String actualText12 = new ComputerPage().verifyMessage11();
        Assert.assertEquals(actualText12, expectedText12, "Message not displayed");
    }
    @And("^I clicked On continued button$")
    public void iClickedOnContinuedButton() {
        new ComputerPage().clickOnConttinue();
    }

    @Then("^I should see welcome to our store text displayed$")
    public void iShouldSeeWelcomeToOurStoreTextDisplayed() {
        String expectedText13 = "Welcome to our store";
        String actualText13 = new ComputerPage().verifyMessage12();
        Assert.assertEquals(actualText13, expectedText13, "Message not displayed");

    }



}
