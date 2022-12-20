package com.tutorialsninja.steps;

import com.tutorialsninja.pages.AccountLoginPage;
import cucumber.api.java.en.And;

public class MyAccountsLoginTestSteps {
    @And("^Enter Email address$")
    public void enterEmailAddress() {
        new AccountLoginPage().enterEmailAddress("prime123@gmail.com");

    }
    @And("^Enter Password on Login page$")
    public void enterPasswordOnLoginPage() {
        new AccountLoginPage().enterPassword("test123");
    }

    @And("^Click on Login button$")
    public void clickOnLoginButton() {
       new AccountLoginPage().clickOnLoginButton();
    }

}
