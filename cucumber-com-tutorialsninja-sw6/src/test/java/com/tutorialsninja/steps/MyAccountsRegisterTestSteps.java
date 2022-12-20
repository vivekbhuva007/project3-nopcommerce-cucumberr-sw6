package com.tutorialsninja.steps;

import com.tutorialsninja.pages.AccountLoginPage;
import com.tutorialsninja.pages.AccountRegisterPage;
import com.tutorialsninja.pages.HomePage;
import com.tutorialsninja.pages.MyAccountPage;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

import static com.tutorialsninja.utility.Utility.getAlphaNumericString;

public class MyAccountsRegisterTestSteps {
    @When("^Click on My Account Link$")
    public void clickOnMyAccountLink1() {
        new HomePage().clickOnMyQAccountTab();
    }

    @And("^Call the method “selectMyAccountOptions” method and pass the parameter “Register”$")
    public void callTheMethodSelectMyAccountOptionsMethodAndPassTheParameterRegister() {
    new HomePage().selectMyAccountOptions("Register");
    }

    @Then("^Verify the text “Register Account”$")
    public void verifyTheTextRegisterAccount() {
        String expectedMessage = "Register Account";
        String actualMessage = new AccountRegisterPage().getRegisterAccountText();
        org.junit.Assert.assertEquals("Register page not displayed", expectedMessage, actualMessage);

    }

    @And("^Call the method “selectMyAccountOptions” method and pass the parameter “Login”$")
    public void callTheMethodSelectMyAccountOptionsMethodAndPassTheParameterLogin() {
        new HomePage().selectMyAccountOptions("Login");
    }

    @Then("^Verify the text “Returning Customer”$")
    public void verifyTheTextReturningCustomer() {
        String expectedMessage = "Returning Customer";
        String actualMessage = new AccountLoginPage().getReturningCustomerText();
        org.junit.Assert.assertEquals("Login page not displayed", expectedMessage, actualMessage);

    }

    @And("^Enter First Name$")
    public void enterFirstName() {
        new AccountRegisterPage().enterFirstName("prime" + getAlphaNumericString(4));
    }

    @And("^Enter Last Name$")
    public void enterLastName() {
        new AccountRegisterPage().enterLastName("test" + getAlphaNumericString(4));

    }

    @And("^Enter Email$")
    public void enterEmail() {
        new AccountRegisterPage().enterEmail("prime" + getAlphaNumericString(4) + "@gmail.com");

    }

    @And("^Enter Telephone$")
    public void enterTelephone() {
        new AccountRegisterPage().enterTelephone("07988112233");

    }

    @And("^Enter Password$")
    public void enterPassword() {
        new AccountRegisterPage().enterPassword("test123");

    }

    @And("^Enter Password Confirm$")
    public void enterPasswordConfirm() {
        new AccountRegisterPage().enterConfirmPassword("test123");
    }

    @And("^Select Subscribe Yes radio button$")
    public void selectSubscribeYesRadioButton() {
        new AccountRegisterPage().selectSubscription("Yes");
    }

    @And("^Click on Privacy Policy check box$")
    public void clickOnPrivacyPolicyCheckBox() {
        new AccountRegisterPage().clickOnPrivacyPolicyCheckBox();
    }

    @And("^Click on Continue button$")
    public void clickOnContinueButton() {
        new AccountRegisterPage().clickOnContinueButton();
    }

    @And("^Verify the message “Your Account Has Been Created!”$")
    public void verifyTheMessageYourAccountHasBeenCreated() {
        String expectedMessage = "Your Account Has Been Created!";
        String actualMessage = new MyAccountPage().getYourAccountHasBeenCreatedText();
        org.junit.Assert.assertEquals("Account not created", expectedMessage, actualMessage);


    }
    @And("^Click on My Account Link\\.$")
    public void clickOnMyAccountLink() {
        new HomePage().clickOnMyQAccountTab();

    }

    @And("^Call the method “selectMyAccountOptions” method and pass the parameter “Logout”$")
    public void callTheMethodSelectMyAccountOptionsMethodAndPassTheParameterLogout() {
        new HomePage().selectMyAccountOptions("Logout");
    }

    @And("^Verify the text “Account Logout”$")
    public void verifyTheTextAccountLogout() {
        String expectedMessage = "Account Logout";
        String actualMessage = new MyAccountPage().getAccountLogoutText();
        org.junit.Assert.assertEquals("Not logged out", expectedMessage, actualMessage);

    }


    @And("^Click on Continue button(\\d+)$")
    public void clickOnContinueButtonOnRegisterPage() {
        new MyAccountPage().clickOnContinueButton();

    }

    @Then("^Click on Continue button after Logout$")
    public void clickOnContinueButtonAfterLogout() {
        new MyAccountPage().clickOnContinueButton();
    }
}
