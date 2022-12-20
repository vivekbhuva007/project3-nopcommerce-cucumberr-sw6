package com.nopcommerce.demo.pages;

import com.aventstack.extentreports.Status;
import com.nopcommerce.demo.utility.Utility;
import org.apache.log4j.LogManager;
import org.apache.log4j.Logger;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.CacheLookup;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

public class ComputerPage extends Utility {
    private static final Logger log = LogManager.getLogger(ComputerPage.class.getName());

    public ComputerPage() {
        PageFactory.initElements(driver, this);
    }
    @CacheLookup
    @FindBy(xpath = "//ul[@class='top-menu mobile']/child::li[1]/a[1]")
    WebElement computerClick;
    @CacheLookup
    @FindBy(xpath = "//div[@class='item-grid']/child::div[1]/div[1]/h2[1]")
    WebElement deskTopClick;

    @CacheLookup
    @FindBy(id = "products-orderby")
    WebElement positionZToA;

    @CacheLookup
    @FindBy(linkText = "Computers")
    WebElement computerMenu;

    @CacheLookup
    @FindBy(xpath = "//h2//a[@title='Show products in category Desktops']")
    WebElement DeskTopClick;

    @CacheLookup
    @FindBy(id = "products-orderby")
    WebElement positionAToZ;
    @CacheLookup
    @FindBy(xpath = "//button[@onclick='return AjaxCart.addproducttocart_catalog(\"/addproducttocart/catalog/1/1/1\"),!1']")
    WebElement addToCart;
    @CacheLookup
    @FindBy(xpath = "//h1[contains(text(),'Build your own computer')]")
    WebElement verifyBuildyourowncomputer;
    @CacheLookup
    @FindBy(id = "product_attribute_1")
    WebElement selectFirstOptionFromProcessor;
    @CacheLookup
    @FindBy(id = "product_attribute_2")
    WebElement selectThirdOptionFromRam;
    @CacheLookup
    @FindBy(id = "product_attribute_3_7")
    WebElement clickOnRadioButtonFromHdd;

    @CacheLookup
    @FindBy(id = "product_attribute_4_9")
    WebElement clickOnRadioButtonFromOS;


    @CacheLookup
    @FindBy(id = "product_attribute_5_12")
    WebElement checkTwoCheckBoxes;


    @CacheLookup
    @FindBy(id = "price-value-1")
    WebElement verifyPrice;


    @CacheLookup
    @FindBy(id = "add-to-cart-button-1")
    WebElement clickOnAddToCartButton;


    @CacheLookup
    @FindBy(xpath = "//div//p[contains(text(),'The product has been added to your ')]")
    WebElement verifyMessage1;

    @CacheLookup
    @FindBy(xpath = "//span[@title='Close']")
    WebElement clickOnCrossButton;


    @CacheLookup
    @FindBy(xpath = "//span[contains(text(),'Shopping cart')]")
    WebElement mouseHoverOnShoppingCart;


    @CacheLookup
    @FindBy(xpath = "//button[contains(text(),'Go to cart')]")
    WebElement clickOnAddToCart1;
    @CacheLookup
    @FindBy(xpath = "//h1[contains(text(),'Shopping cart')]")
    WebElement verifyMessage2;
    @CacheLookup
    @FindBy(xpath = "//input[@class='qty-input']")
    WebElement clickOnUpdateBasket;
    @CacheLookup
    @FindBy(xpath = "//button[@id='updatecart']")
    WebElement clickOnUpdateShoppingCart;
    @CacheLookup
    @FindBy(xpath = "//span//strong[contains(text(),'$2,950.00')]")
    WebElement verifyMessage3;
    @CacheLookup
    @FindBy(id = "termsofservice")
    WebElement clickOnCheckBox;
    @CacheLookup
    @FindBy(id = "checkout")
    WebElement clickOnCheckOut;
    @CacheLookup
    @FindBy(xpath = "//h1[contains(text(),'Welcome, Please Sign In!')]")
    WebElement verifyMessage4;

    @CacheLookup
    @FindBy(xpath = "//button[contains(text(),'Checkout as Guest')]")
    WebElement checkOutAsAGuest;

    @CacheLookup
    @FindBy(id = "BillingNewAddress_FirstName")
    WebElement firstNameField;
    @CacheLookup
    @FindBy(id = "BillingNewAddress_LastName")
    WebElement lastNameField;
    @CacheLookup
    @FindBy(id = "BillingNewAddress_Email")
    WebElement emailField;
    @CacheLookup
    @FindBy(id = "BillingNewAddress_CountryId")
    WebElement selectCounty;
    @CacheLookup
    @FindBy(id = "BillingNewAddress_City")
    WebElement cityField;
    @CacheLookup
    @FindBy(id = "BillingNewAddress_Address1")
    WebElement address1;
    @CacheLookup
    @FindBy(id = "zipcode")
    WebElement zipcode;

    @CacheLookup
    @FindBy(id = "BillingNewAddress_PhoneNumber")
    WebElement phoneNumber;
    @CacheLookup
    @FindBy(xpath = "//button[@type='button' and @onclick='Billing.save()']")
    WebElement clickContinue;

    @CacheLookup
    @FindBy(id = "paymentmethod_1")
    WebElement clickRadioButton;
    @CacheLookup
    @FindBy(xpath = "//button[@type='button' and @onclick='ShippingMethod.save()']")
    WebElement clickOnContinuee;


    @CacheLookup
    @FindBy(id = "paymentmethod_1")
    WebElement radioButton;

    @CacheLookup
    @FindBy(xpath = "//button[@type='button' and @onclick='PaymentMethod.save()']")
    WebElement selectCreditCard;

    @CacheLookup
    @FindBy(id = "CreditCardType")
    WebElement selectMasterCard;

    @CacheLookup
    @FindBy(id = "CreditCardType")
    WebElement selectMC;

    @CacheLookup
    @FindBy(id = "CardholderName")
    WebElement cardHolderName;

    @CacheLookup
    @FindBy(id = "CardNumber")
    WebElement cardNumber;
    @CacheLookup
    @FindBy(id = "ExpireMonth")
    WebElement expireMonth;
    @CacheLookup
    @FindBy(id = "ExpireMonth")
    WebElement selectExpireMonth;

    @CacheLookup
    @FindBy(id = "ExpireYear")
    WebElement expireYear;
    @CacheLookup
    @FindBy(id = "ExpireYear")
    WebElement selectExpireYear;

    @CacheLookup
    @FindBy(xpath = "//input[@id='CardCode']")
    WebElement cardCode;

    @CacheLookup
    @FindBy(xpath = "//button[contains(@class,'payment-info-next-step-button')]")
    WebElement clickOOOnContinue;

    @CacheLookup
    @FindBy(xpath = "//span[contains(text(),'Payment Method:')]")
    WebElement verifyMessage5;

    @CacheLookup
    @FindBy(xpath = "//span[contains(text(),'Credit Card')]")
    WebElement verifyMessage6;
    @CacheLookup
    @FindBy(xpath = "//span[contains(text(),'Shipping Method:')]")
    WebElement verifyMessage7;
    @CacheLookup
    @FindBy(xpath = "//ul//li//span[contains(text(),'Next Day Air')]")
    WebElement verifyMessage8;
    @CacheLookup
    @FindBy(xpath = "//span//strong[contains(text(),'$2,950.00')]")
    WebElement verifyMessage9;
    @CacheLookup
    @FindBy(xpath = "//button[@type='button' and @onclick='ConfirmOrder.save()']")
    WebElement clickonConfirm;
    @CacheLookup
    @FindBy(xpath = "//h1[contains(text(),'Thank you')]")
    WebElement verifyMessage10;

    @CacheLookup
    @FindBy(xpath = "//strong[contains(text(),'Your order has been successfully processed!')]")
    WebElement verifyMessage11;
    @CacheLookup
    @FindBy(xpath = "//button[@type='button' and @onclick='setLocation(\"/\")']")
    WebElement clickOnCon;

    @CacheLookup
    @FindBy(xpath = "//h2[contains(text(),'Welcome to our store')]")
    WebElement verifyMessage12;


    public void clickOnComputerTab() {


        clickOnElement(computerClick);
    }


    public void clickOnDesktopTab() {


        clickOnElement(deskTopClick);
    }


    public void clickOnPositionTab() {

        clickOnElement(positionZToA);
    }


    public void clickOnComputerMenu() {


        clickOnElement(computerMenu);
    }


    public void clickOnDesktopTabb() {


        clickOnElement(DeskTopClick);

    }


    public void clickOnPositionTabb() {

        clickOnElement(positionAToZ);

    }


    public void clickOnAddToCart() {

        clickOnElement(addToCart);
    }


    public String verifyMessage() {

        return getTextFromElement(verifyBuildyourowncomputer);

    }


    public void selectFirstOptionFromDropDown(String option) {
        selectByVisibleTextFromDropDown(selectFirstOptionFromProcessor, option);

    }


    public void selectThirdOptionFromDropDown(String option) {

        selectByVisibleTextFromDropDown(selectThirdOptionFromRam, option);
    }


    public void clickOnRadioButton() {

        clickOnElement(clickOnRadioButtonFromHdd);
    }


    public void clickOnRadioButtonn() {

        clickOnElement(clickOnRadioButtonFromOS);
    }


    public void clickOnCheckBox() {

        clickOnElement(checkTwoCheckBoxes);
    }


    public String verifyMessagee() {

        return getTextFromElement(verifyPrice);
    }


    public void setClickOnAddToCartButton() {

        clickOnElement(clickOnAddToCartButton);
    }


    public String verifyMessage1() {

        return getTextFromElement(verifyMessage1);
    }


    public void clickOnCrossButton() {

        clickOnElement(clickOnCrossButton);
    }


    public void MouseHoverAndClickOnAddToCart() {

        mouseHoverToElementAndClick(mouseHoverOnShoppingCart);
        clickOnElement(clickOnAddToCart1);


    }


    public String verifyMessage2() {

        return getTextFromElement(verifyMessage2);

    }


    public void updateBasket() {

        clearAndEnterQuantity(clickOnUpdateBasket, "2");
    }


    public void updateOnShoppingCart() {


        clickOnElement(clickOnUpdateShoppingCart);
    }


    public String verifyMessage3() {


        return getTextFromElement(verifyMessage3);

    }


    public void checkBox() {

        clickOnElement(clickOnCheckBox);
    }


    public void checkOut() {

        clickOnElement(clickOnCheckOut);
    }


    public String verifyMessage4() {

        return getTextFromElement(verifyMessage4);
    }


    public void checkOutAsGuesttab() {

        clickOnElement(checkOutAsAGuest);
    }


    public void enterFirstName(String name) {
        sendTextToElement(firstNameField, name);
    }

    public void enterLastName(String name) {

        sendTextToElement(lastNameField, name);
    }

    public void enterEmailId(String email) {

        sendTextToElement(emailField, email);
    }

    public void selectCounty(String text) {

        selectByVisibleTextFromDropDown(selectCounty, text);
    }


    public void enterCityField(String text) {

        sendTextToElement(cityField, text);

    }

    public void enterAddress1(String text) {

        sendTextToElement(address1, text);
    }

    public void enterzipCode(String text) {

        sendTextToElement(zipcode, text);
    }

    public void enterPhoneNumber(String text) {

        sendTextToElement(phoneNumber, text);
    }

    public void clickOnContinue() {

        clickOnElement(clickContinue);
    }


    public void clickOOnRadioButton() {

        clickOnElement(clickRadioButton);

    }


    public void clickOnContinuee() {

        clickOnElement(clickOnContinuee);
    }

    public void clickOnButton() {

        clickOnElement(radioButton);
    }

    public void selectCC() {

        clickOnElement(selectCreditCard);
    }

    public void clickCardType() {

        clickOnElement(selectMasterCard);
    }

    public void selectMasterC(String text) {

        selectByVisibleTextFromDropDown(selectMC, text);
    }
    //  2.28 Fill all the details
    // By cardHolderName = By.id("CardholderName");

    public void selectCardHolderName(String text) {

        sendTextToElement(cardHolderName, text);
    }

    public void enterCardNumber(String text) {

        sendTextToElement(cardNumber, text);
    }

    public void clickOnExpireMonth() {

        clickOnElement(expireMonth);
    }

    public void selecttExpireMonth(String text) {

        selectByVisibleTextFromDropDown(selectExpireMonth, text);
    }
    //  By expireYear = By.id("ExpireYear");

    public void clickOnExpireYear() {

        clickOnElement(expireYear);
    }

    //   By selectExpireYear = By.id("ExpireYear");
    public void selecttExpireYear(String text) {

        selectByVisibleTextFromDropDown(selectExpireYear, text);
    }
    //  By cardCode = By.xpath("//input[@id='CardCode']");

    public void enterCardCode(String text) {

        sendTextToElement(cardCode, text);
    }


    public void clickOnContinueee() {

        clickOnElement(clickOOOnContinue);
    }


    public String verifyMessage5() {

        return getTextFromElement(verifyMessage5);
    }

    public String verifyMessage6() {

        return getTextFromElement(verifyMessage6);
    }


    public String verifyMessage7() {

        return getTextFromElement(verifyMessage7);
    }

    public String verifyMessage8() {

        return getTextFromElement(verifyMessage8);
    }

    public String verifyMessage9() {

        return getTextFromElement(verifyMessage9);
    }

    public void clickOnConfirm() {

        clickOnElement(clickonConfirm);
    }


    public String verifyMessage10() {

        return getTextFromElement(verifyMessage10);
    }

    public String verifyMessage11() {

        return getTextFromElement(verifyMessage11);
    }

    public void clickOnConttinue() {

        clickOnElement(clickOnCon);

    }

    public String verifyMessage12() {

        return getTextFromElement(verifyMessage12);
    }


}

