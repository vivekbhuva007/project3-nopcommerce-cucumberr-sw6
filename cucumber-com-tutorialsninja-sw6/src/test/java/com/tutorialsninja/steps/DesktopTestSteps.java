package com.tutorialsninja.steps;

import com.tutorialsninja.pages.DesktopPage;
import com.tutorialsninja.pages.HomePage;
import com.tutorialsninja.pages.ProductPage;
import com.tutorialsninja.pages.ShoppingCartPage;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Then;
import org.testng.Assert;

import java.util.ArrayList;
import java.util.Collections;

public class DesktopTestSteps {

    @And("^Select Sort By position \"([^\"]*)\"$")
    public void selectSortByPosition(String option)  {
        new DesktopPage().selectSortByOption("Name (Z - A)");

    }
    @And("^I can Select Sort By position Name: Z to A$")
    public void iCanSelectSortByPositionNameZToA() {
        new DesktopPage().selectSortByOption("Name (A - Z)");
    }

    @Then("^Verify the Product will arrange in Descending order$")
    public void verifyTheProductWillArrangeInDescendingOrder() {
        ArrayList<String> originalProductsName = new DesktopPage().getProductsNameList();
        Collections.reverse(originalProductsName);
        ArrayList<String> afterSortByZToAProductsName = new DesktopPage().getProductsNameList();
        Assert.assertEquals(originalProductsName, afterSortByZToAProductsName, "Product not sorted into Z to A order");
    }



    @And("^Select product “HP LP(\\d+)”$")
    public void selectProductHPLP(String productName) {
        new DesktopPage().selectProductByName("HP LP3065");

    }

    @And("^Verify the Text \"([^\"]*)\"$")
    public void verifyTheText()  {
        String expectedMessage = "HP LP3065";
        String actualMessage = new ProductPage().getProductText();
        org.junit.Assert.assertEquals("HP LP3065 Product not display", expectedMessage, actualMessage);

    }

    @And("^Select Delivery Date \"([^\"]*)\"$")
    public void selectDeliveryDate()  {
        new ProductPage().selectDeliveryDate("30", "November", "2023");
    }

    @And("^Enter Qty \"(\\d+)” using Select class\\.$")
    public void enterQtyUsingSelectClass()  {
        new ProductPage().enterQuantity("1");
    }

    @And("^Click on “Add to Cart” button$")
    public void clickOnAddToCartButton() {
        new ProductPage().clickOnAddToCartButton();
    }

    @And("^Verify the Message “Success: You have added HP LP(\\d+) to your shopping cart!”$")
    public void verifyTheMessageSuccessYouHaveAddedHPLPToYourShoppingCart() {
        String expectedMessage = "Success: You have added HP LP3065 to your shopping cart!";
        String actualMessage = new ProductPage().getProductAddedSuccessMessage();
        org.junit.Assert.assertEquals("HP LP3065 Product not added to cart", expectedMessage, actualMessage);

    }

    @And("^Click on link “shopping cart” display into success message$")
    public void clickOnLinkShoppingCartDisplayIntoSuccessMessage() {
        new ProductPage().clickOnShoppingCartLinkIntoMessage();
    }

    @And("^Verify the text \"([^\"]*)\"$")
    public void verifyTheTextInShoppingCart() {
        String expectedMessage = "Shopping Cart";
        String actualMessage = new ShoppingCartPage().getShoppingCartText();
        org.junit.Assert.assertEquals("Such text not on display", expectedMessage, actualMessage);

    }

    @And("^Verify the Product name \"([^\"]*)\"$")
    public void verifyTheProductName() {
        String expectedMessage = "HP LP3065";
        String actualMessage = new ShoppingCartPage().getProductName();
        org.junit.Assert.assertEquals("Such text not on display", expectedMessage, actualMessage);
    }

    @And("^Verify the Delivery Date \"([^\"]*)\"$")
    public void verifyTheDeliveryDate() {
        String expectedMessage = "2023-11-30";
        String actualMessage = new ShoppingCartPage().getDeliveryDate();
        org.junit.Assert.assertEquals("Such text not on display", expectedMessage, actualMessage);
    }

    @And("^Verify the Model \"([^\"]*)\"$")
    public void verifyTheModel() {
        String expectedMessage = "Product 21";
        String actualMessage = new ShoppingCartPage().getModel();
        org.junit.Assert.assertEquals("Such text not on display", expectedMessage, actualMessage);
    }

    @And("^Verify the Total \"([^\"]*)\"$")
    public void verifyTheTotal() {
        String expectedMessage = "£74.73";
        String actualMessage = new ShoppingCartPage().getTotal();
        org.junit.Assert.assertEquals("Such text not on display", expectedMessage, actualMessage);
    }


    @And("^I change currency to Pound Sterling$")
    public void iChangeCurrencyToPoundSterling() {
        new HomePage().selectCurrency("£ Pound Sterling");
    }
}
