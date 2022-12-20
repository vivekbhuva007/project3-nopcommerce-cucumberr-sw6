package com.tutorialsninja.steps;

import com.tutorialsninja.pages.*;
import cucumber.api.java.en.And;
import cucumber.api.java.en.When;
import org.testng.Assert;

import java.util.ArrayList;
import java.util.Collections;
import java.util.List;

public class LaptopsAndNotebooksTestSteps {
    @When("^Mouse hover on Laptops & Notebooks Tab and click$")
    public void mouseHoverOnLaptopsNotebooksTabAndClick() {
        new HomePage().mouseHoverOnLaptopsAndNotebooksLinkAndClick();
    }

    @And("^Click on “Show All Laptops & Notebooks”$")
    public void clickOnShowAllLaptopsNotebooks() {
        new HomePage().selectMenu("Show All Laptops & Notebooks");
    }

    @And("^Select Sort By \"([^\"]*)\"$")
    public void selectSortBy() {
        new DesktopPage().selectSortByOption("Price (High > Low)");

    }

    @And("^Verify the Product price will arrange in High to Low order\\.$")
    public void verifyTheProductPriceWillArrangeInHighToLowOrder() {
        List<Double> originalProductsPrice = new LaptopsAndNotebooksPage().getProductsPriceList();
        Collections.sort(originalProductsPrice, Collections.reverseOrder());
        ArrayList<Double> afterSortByPrice = new LaptopsAndNotebooksPage().getProductsPriceList();
        Assert.assertEquals(originalProductsPrice, afterSortByPrice, "Product not sorted by price High to Low");
    }

    @And("^Select Product “MacBook”$")
    public void selectProductMacBook() {
        new LaptopsAndNotebooksPage().selectProductByName("MacBook");
    }

    @And("^Verify the text “MacBook”$")
    public void verifyTheTextMacBook() {
        String expectedMessage = "MacBook";
        String actualMessage = new ProductPage().getProductText();
        org.junit.Assert.assertEquals("MacBook", expectedMessage, actualMessage);

    }

    @And("^Click on ‘Add To Cart’ button$")
    public void clickOnAddToCartButton() {
        new ProductPage().clickOnAddToCartButton();
    }

    @And("^Verify the message “Success: You have added MacBook to your shopping cart!”$")
    public void verifyTheMessageSuccessYouHaveAddedMacBookToYourShoppingCart() {
        String expectedMessage = "Success: You have added MacBook to your shopping cart!";
        String actualMessage = new ProductPage().getProductAddedSuccessMessage();
        org.junit.Assert.assertEquals("No such message displayed", expectedMessage, actualMessage);

    }

    @And("^Click on link shopping cart display into success message$")
    public void clickOnLinkShoppingCartDisplayIntoSuccessMessage() {
        new ProductPage().clickOnShoppingCartLinkIntoMessage();
    }

    @And("^Verify the text Shopping Cart$")
    public void verifyTheTextShoppingCart() {
        String expectedMessage = "Shopping Cart";
        String actualMessage = new ShoppingCartPage().getShoppingCartText();
        org.junit.Assert.assertEquals("No such message displayed", expectedMessage, actualMessage);

    }

    @And("^Verify the Product name MacBook$")
    public void verifyTheProductNameMacBook() {
        String expectedMessage = "MacBook";
        String actualMessage = new ShoppingCartPage().getProductName();
        org.junit.Assert.assertEquals("No such text displayed", expectedMessage, actualMessage);

    }

    @And("^Change Quantity \"([^\"]*)\"$")
    public void changeQuantity(){
        new ShoppingCartPage().changeQuantity("2");
    }

    @And("^Click on “Update” Tab$")
    public void clickOnUpdateTab() {
        new ShoppingCartPage().clickOnQtyUpdateButton();
    }

    @And("^Verify the message “Success: You have modified your shopping cart!”$")
    public void verifyTheMessageSuccessYouHaveModifiedYourShoppingCart() {
        String expectedMessage = "Success: You have modified your shopping cart!";
        String actualMessage = new ShoppingCartPage().getSuccessModifiedMessage();
        org.junit.Assert.assertEquals("No such text displayed", expectedMessage, actualMessage);

    }

    @And("^Verify the Total £(\\d+)\\.(\\d+)$")
    public void verifyTheTotal£() {
        String expectedMessage = "£737.45";
        String actualMessage = new ShoppingCartPage().getTotal();
        org.junit.Assert.assertEquals("Total displayed does not match", expectedMessage, actualMessage);

    }

    @And("^Click on “Checkout” button$")
    public void clickOnCheckoutButton() {
    }

    @And("^Verify the text “Checkout”$")
    public void verifyTheTextCheckout() {
    }

    @And("^Verify the Text “New Customer”$")
    public void verifyTheTextNewCustomer() {
    }

    @And("^Click on “Guest Checkout” radio button$")
    public void clickOnGuestCheckoutRadioButton() {
    }

    @And("^Click on “Continue” tab$")
    public void clickOnContinueTab() {
    }

    @And("^Fill the mandatory fields$")
    public void fillTheMandatoryFields() {
    }

    @And("^Click on “Continue” Button$")
    public void clickOnContinueButton1() {
    }

    @And("^Add Comments About your order into text area$")
    public void addCommentsAboutYourOrderIntoTextArea() {
    }

    @And("^Check the Terms & Conditions check box$")
    public void checkTheTermsConditionsCheckBox() {
    }

    @And("^Click on “Continue” button$")
    public void clickOnContinueButton() {
    }

    @And("^Verify the message “Warning: Payment method required!”$")
    public void verifyTheMessageWarningPaymentMethodRequired() {
    }
}
