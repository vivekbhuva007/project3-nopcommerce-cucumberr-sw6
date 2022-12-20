package com.nopcommerce.demo.steps;

import com.nopcommerce.demo.pages.ElectronicsPage;
import cucumber.api.PendingException;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import org.testng.Assert;

import static com.nopcommerce.demo.browserfactory.ManageBrowser.driver;

public class ElectronicsSteps {
    @Given("^I am on Electronics page$")
    public void iAmOnElectronicsPage() {
    }

    @When("^I click on electronics page$")
    public void iClickOnElectronicsPage() {
        new ElectronicsPage().electronicsPage();
    }

    @And("^I mouse hover on cell phone$")
    public void iMouseHoverOnCellPhone() {
        new ElectronicsPage().setMouseHooverOnCellPhone();

    }

    @Then("^I shouls see Cell phone text displayed$")
    public void iShoulsSeeCellPhoneTextDisplayed() {
        String expectedMessage = "Cell phones";
        Assert.assertEquals(new ElectronicsPage().cellPhone(), expectedMessage, "Message is not displayed");
    }


    @Given("^I am on Electronicss page$")
    public void iAmOnElectronicssPage() {
    }

    @When("^I click on electronicss page$")
    public void iClickOnElectronicssPage() {
        new ElectronicsPage().electronicsPage();
    }

    @And("^I mouse hoverr on cell phone$")
    public void iMouseHoverrOnCellPhone() {
        new ElectronicsPage().setMouseHooverOnCellPhone();
    }

    @And("^I should see Cell phone text displayed$")
    public void iShouldSeeCellPhoneTextDisplayed() {
        String expectedMessage = "Cell phones";
        Assert.assertEquals(new ElectronicsPage().cellPhone(), expectedMessage, "Message is not displayed");
    }


    @And("^I click on list view$")
    public void iClickOnListView() {
        new ElectronicsPage().listView();
    }

    @And("^I click on nokia lumia$")
    public void iClickOnNokiaLumia() {
        new ElectronicsPage().nokiaLumia();
    }

    @And("^I should see nokia lumia message displayed$")
    public void iShouldSeeNokiaLumiaMessageDisplayed() {
        String expectedMessage2 = "Nokia Lumia 1020";
        Assert.assertEquals(new ElectronicsPage().nokiaLumia1(), expectedMessage2, "Message is not displayed");

    }

    @And("^I should see dollorrr message displayed$")
    public void iShouldSeeDollorrrMessageDisplayed() {
        String expectedMessage3 = "$349.00";
        Assert.assertEquals(new ElectronicsPage().verifyText1$349(), expectedMessage3, "Message is not displayed");

    }

    @And("^I change quantity one$")
    public void iChangeQuantityOne() {
        new ElectronicsPage().changeQuntity1();
    }

    @And("^I clicked on add to cart$")
    public void iClickedOnAddToCart() {
        new ElectronicsPage().addToCart();
    }

    @And("^I should see added product message displayed$")
    public void iShouldSeeAddedProductMessageDisplayed() {
        String expectedMessage4 = "The product has been added to your shopping cart";
        Assert.assertEquals(new ElectronicsPage().message1(), expectedMessage4, "Message is not displayed");
    }

    @And("^I click on close button$")
    public void iClickOnCloseButton() {
        new ElectronicsPage().closeButton();
    }

    @And("^I click on shopping carttt$")
    public void iClickOnShoppingCarttt() {
        new ElectronicsPage().clickOnShoppingCart();

    }

    @And("^I should see shopping cart message displayed$")
    public void iShouldSeeShoppingCartMessageDisplayed() {
        String expectedMessage5 = "Shopping cart";
        Assert.assertEquals(new ElectronicsPage().verifyShoppingCart(), expectedMessage5);
    }

    @And("^I should see dollorr  message displayedd$")
    public void iShouldSeeDollorrMessageDisplayedd() {
        String expectedMessage6 = "$698.00";
        Assert.assertEquals(new ElectronicsPage().totalText698(), expectedMessage6);

    }


    @And("^I click on checkboxx$")
    public void iClickOnCheckboxx() {
        new ElectronicsPage().checkBox();
    }

    @And("^I click on checkoutt$")
    public void iClickOnCheckoutt() {
        new ElectronicsPage().checkOut();
    }

    @And("^I should verify welcome message sign in displayed$")
    public void iShouldVerifyWelcomeMessageSignInDisplayed() {
        String expectedMessage7 = "Welcome, Please Sign In!";
        Assert.assertEquals(new ElectronicsPage().welcomeMessage1(), expectedMessage7);
    }

    @And("^I click on register tab$")
    public void iClickOnRegisterTab() {
        new ElectronicsPage().registerTab();
    }

    @And("^I should verify register message displayed$")
    public void iShouldVerifyRegisterMessageDisplayed() {
        String expectedMessage8 = "Register";
        Assert.assertEquals(new ElectronicsPage().registerText(), expectedMessage8);
    }

    @And("^I  click on radioo buttonn$")
    public void iClickOnRadiooButtonn() {
        new ElectronicsPage().clickOnRadioButton();
    }

    @And("^I entered first name \"([^\"]*)\"$")
    public void iEnteredFirstName(String first){
        new ElectronicsPage().enterFirstname(first);

    }

    @And("^I entered last name  \"([^\"]*)\"$")
    public void iEnteredLastName(String last){
        new ElectronicsPage().enterLastname(last);

    }

    @And("^I enter EmailAddress \"([^\"]*)\"$")
    public void iEnterEmailAddress(String email){
        new ElectronicsPage().enterEmail1(email);

    }

    @And("^I enter password \"([^\"]*)\"$")
    public void iEnterPassword(String passcode){
        new ElectronicsPage().enterPassword(passcode);

    }

    @And("^I enter confirm password  \"([^\"]*)\"$")
    public void iEnterConfirmPassword(String passcode){
        new ElectronicsPage().enterConfirmPassword(passcode);

    }

    @And("^I clicked on register buttonn(\\d+)$")
    public void iClickedOnRegisterButtonn( ) {
        new ElectronicsPage().registerButton1();
    }

    @And("^I should verify registration completed message displayed$")
    public void iShouldVerifyRegistrationCompletedMessageDisplayed() {
        String expectedText0 = "Your registration completed";
        String actualText0 = new ElectronicsPage().verifyMessaage();
        Assert.assertEquals(actualText0, expectedText0, "Message not displayed");
    }

    @And("^I click on continue b$")
    public void iClickOnContinueB() {
        new ElectronicsPage().continueB();
    }

    @And("^I should verify shopping cart text displayed$")
    public void iShouldVerifyShoppingCartTextDisplayed() {
        String expectedMessage10 = "Shopping cart";
        Assert.assertEquals(new ElectronicsPage().shoppingCart1(), expectedMessage10);
    }

    @And("^I click on checkbox(\\d+)$")
    public void iClickOnCheckbox() {
        new ElectronicsPage().setCheckBox2();
    }

    @And("^I clicked checkout(\\d+)$")
    public void iClickedCheckout( ) {
        new ElectronicsPage().checkout3();
    }

    @And("^I entered country \"([^\"]*)\"$")
    public void iEnteredCountry(String country){
        new ElectronicsPage().enterCountry(country);

    }

    @And("^I entered city \"([^\"]*)\"$")
    public void iEnteredCity(String city){
        new ElectronicsPage().enterCity(city);

    }

    @And("^I entered Address(\\d+) \"([^\"]*)\"$")
    public void iEnteredAddress( String add){
        new ElectronicsPage().enterAddress1(add);

    }

    @And("^I entered zip postal code \"([^\"]*)\"$")
    public void iEnteredZipPostalCode(String zipcode){
        new ElectronicsPage().enterZipPostalCode(zipcode);

    }

    @And("^I entered phone number \"([^\"]*)\"$")
    public void iEnteredPhoneNumber(String phoneNumber){
        new ElectronicsPage().enterPhoneNumber(phoneNumber);

    }

    @And("^I clicked on continue(\\d+)$")
    public void iClickedOnContinue() {
        new ElectronicsPage().continue3();
    }

    @And("^I clicked no R button$")
    public void iClickedNoRButton() {
        new ElectronicsPage().setRadiobutton1();
    }

    @And("^I click on continue(\\d+)$")
    public void iClickOnContinue() {
        new ElectronicsPage().continue4();
    }

    @And("^I clicked on radioo button(\\d+)$")
    public void iClickedOnRadiooButton() {
        new ElectronicsPage().setRadiobutton2();
    }

    @And("^I clicked on Payment method buttonn$")
    public void iClickedOnPaymentMethodButtonn() {
        new ElectronicsPage().paymentMethodButton();
    }

    @And("^I select credit card \"([^\"]*)\"$")
    public void iSelectCreditCard(String cCard){
        new ElectronicsPage().selectCreditCard(cCard);

    }

    @And("^I selected card holder name \"([^\"]*)\"$")
    public void iSelectedCardHolderName(String cardHolder){
        new ElectronicsPage().selectCardHolderName(cardHolder);

    }

    @And("^I entered card number \"([^\"]*)\"$")
    public void iEnteredCardNumber(String cardNumber){
        new ElectronicsPage().enterCardNumber(cardNumber);

    }

    @And("^I select expiry month(\\d+) \"([^\"]*)\"$")
    public void iSelectExpiryMonth(String month){
        new ElectronicsPage().selecttExpireMonth(month);

    }

    @And("^I select year(\\d+) \"([^\"]*)\"$")
    public void iSelectYear( String year){
        new ElectronicsPage().selecttExpireYear(year);

    }

    @And("^I entered card code \"([^\"]*)\"$")
    public void iEnteredCardCode(String code){
        new ElectronicsPage().enterCardCode(code);

    }

    @And("^I clicked on check outt$")
    public void iClickedOnCheckOutt() {
        new ElectronicsPage().clickOnCheckOut();
    }

    @And("^I should verify credit card message displayed$")
    public void iShouldVerifyCreditCardMessageDisplayed() {
        String expectedText1 = "Credit Card";
        String actualText1 = new ElectronicsPage().verifyMessage1();
        Assert.assertEquals(actualText1, expectedText1, "Message not displayed");
    }

    @And("^I should verify second day card message displayed$")
    public void iShouldVerifySecondDayCardMessageDisplayed() {
        String expectedText2 = "2nd Day Air";
        String actualText2 = new ElectronicsPage().verifyMessage2();
        Assert.assertEquals(actualText2, expectedText2, "Message not displayed");
    }

    @And("^I should verify dollors(\\d+) message displayed$")
    public void iShouldVerifyDollorsMessageDisplaye() {
        String expectedText3 = "$698.00";
        String actualText3 = new ElectronicsPage().verifyMessage3();
        Assert.assertEquals(actualText3, expectedText3, "Message not displayed");
    }

    @And("^I clicked on confirm buttonn$")
    public void iClickedOnConfirmButtonn() {
        new ElectronicsPage().clickOnConfirm();
    }

    @And("^I should verify Thank you message displayed$")
    public void iShouldVerifyThankYouMessageDisplayed() {
        String expectedText4 = "Thank you";
        String actualText4 = new ElectronicsPage().verifyMessage4();
        Assert.assertEquals(actualText4, expectedText4, "Message not displayed");
    }

    @And("^I should verify Your order has been successfully processed  text$")
    public void iShouldVerifyYourOrderHasBeenSuccessfullyProcessedText() {
        String expectedText5 = "Your order has been successfully processed!";
        String actualText5 = new ElectronicsPage().verifyMessage5();
        Assert.assertEquals(actualText5, expectedText5, "Message not displayed");
    }

    @And("^I click on continue button(\\d+)$")
    public void iClickOnContinueButton() {
        new ElectronicsPage().clickOnContinue();
    }

    @And("^I should confirm  Welcome to our store text displayed$")
    public void iShouldConfirmWelcomeToOurStoreTextDisplayed() {
    }

    @And("^I clicked on logout$")
    public void iClickedOnLogout() {
        new ElectronicsPage().clickOnLogOut();
    }

    @Then("^I should confirm current url$")
    public void iShouldConfirmCurrentUrl() {
        String Url = driver.getCurrentUrl();
        Assert.assertEquals("https://demo.nopcommerce.com/", Url);



    }


}
