package com.tutorialsninja.pages;

import com.tutorialsninja.utility.Utility;
import org.apache.log4j.LogManager;
import org.apache.log4j.Logger;
import org.openqa.selenium.By;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.CacheLookup;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

import java.util.List;

public class AccountRegisterPage extends Utility {
    private static final Logger log = LogManager.getLogger(HomePage.class.getName());

    public AccountRegisterPage() {
        PageFactory.initElements(driver, this);
    }
    @CacheLookup
    @FindBy(xpath = "//h1[contains(text(),'Register Account')]")
    WebElement registerAccountText;
    @CacheLookup
    @FindBy(id = "input-firstname")
    WebElement firstNameField;

    @CacheLookup
    @FindBy(id = "input-lastname")
    WebElement LastNameField;
    @CacheLookup
    @FindBy(id = "input-email")
    WebElement emailField;
    @CacheLookup
    @FindBy(id = "input-telephone")
    WebElement telephoneField;
    @CacheLookup
    @FindBy(id = "input-password")
    WebElement passwordField;
    @CacheLookup
    @FindBy(id = "input-confirm")
    WebElement passwordConfirmField;
    @CacheLookup
    @FindBy(xpath = "//fieldset[3]//input")
    WebElement subscribeRadios;

    @CacheLookup
    @FindBy(xpath = "//div[@class = 'buttons']//input[@name='agree']")
    WebElement privacyPolicyCheckBox;
    @CacheLookup
    @FindBy(xpath = "//div[@class = 'buttons']//input[@value='Continue']")
    WebElement continueBtn;
    @CacheLookup
    @FindBy(xpath = "//form[contains(@action,'login')]//input[@type='submit']")
    WebElement loginBtn;




    public String getRegisterAccountText() {
        return getTextFromElement(registerAccountText);
    }

    public void enterFirstName(String fName) {
        sendTextToElement(firstNameField, fName);
    }

    public void enterLastName(String lName) {
        sendTextToElement(LastNameField, lName);
    }

    public void enterEmail(String email) {
        sendTextToElement(emailField, email);
    }

    public void enterTelephone(String telephone) {
        sendTextToElement(telephoneField, telephone);
    }

    public void enterPassword(String password) {
        sendTextToElement(passwordField, password);
    }

    public void enterConfirmPassword(String cPassword) {
        sendTextToElement(passwordConfirmField, cPassword);
    }

    public void selectSubscription(String option) {
        List<WebElement> radioButtons = getListOfElements(By.xpath("//fieldset[3]//input"));
        for (WebElement e : radioButtons) {
            if (e.getText().equals(option)) {
                e.click();
                break;
            }
        }
    }

    public void clickOnPrivacyPolicyCheckBox() {
        clickOnElement(privacyPolicyCheckBox);
    }

    public void clickOnContinueButton() {
        clickOnElement(continueBtn);
    }

}
