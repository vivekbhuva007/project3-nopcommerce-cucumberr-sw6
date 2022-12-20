package com.tutorialsninja.steps;

import com.tutorialsninja.pages.ComponentsPage;
import com.tutorialsninja.pages.DesktopPage;
import com.tutorialsninja.pages.HomePage;
import com.tutorialsninja.pages.LaptopsAndNotebooksPage;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import org.junit.Assert;

public class TopMenuTestSteps {
    @Given("^I am on homepage$")
    public void iAmOnHomepage() {

    }

    @When("^I Mouse hover on “Desktops” Tab and click$")
    public void iMouseHoverOnDesktopsTabAndClick() {
        new HomePage().mouseHoverOnDesktopsLinkAndClick();
    }

    @And("^I call selectMenu method and pass the menu = “Show All Desktops”$")
    public void iCallSelectMenuMethodAndPassTheMenuShowAllDesktops() {
        new HomePage().selectMenu("Show All Desktops");
    }

    @Then("^Verify the text ‘Desktops’$")
    public void verifyTheTextDesktops() {
        String expectedMessage = "Desktops";
        String actualMessage = new DesktopPage().getDesktopsText();
        Assert.assertEquals("Desktops page not displayed", expectedMessage, actualMessage);


    }
    @When("^I Mouse hover on “Laptops & Notebooks” Tab and click$")
    public void iMouseHoverOnLaptopsNotebooksTabAndClick() {
        new HomePage().mouseHoverOnLaptopsAndNotebooksLinkAndClick();

    }
    @And("^I call selectMenu method and pass the menu = “Show All Laptops & Notebooks”$")
    public void iCallSelectMenuMethodAndPassTheMenuShowAllLaptopsNotebooks() {
        new HomePage().selectMenu("Show All Laptops & Notebooks");
    }

    @Then("^I can Verify the text ‘Laptops & Notebooks’$")
    public void iCanVerifyTheTextLaptopsNotebooks() {
        String expectedMessage = "Laptops & Notebooks";
        String actualMessage = new LaptopsAndNotebooksPage().getLaptopsAndNotebooksText();
        Assert.assertEquals("Laptops & Notebooks not displayed", expectedMessage, actualMessage);


    }
    @When("^I Mouse hover on “Components” Tab and click$")
    public void iMouseHoverOnComponentsTabAndClick() {
        new HomePage().mouseHoverOnComponentLinkAndClick();
    }
    @And("^I call selectMenu method and pass the menu = “Show All Components”$")
    public void iCallSelectMenuMethodAndPassTheMenuShowAllComponents() {
        new HomePage().selectMenu("Show All Components");

    }

    @Then("^I can verify the text ‘Components’$")
    public void iCanVerifyTheTextComponents() {
        String expectedMessage = "Components";
        String actualMessage = new ComponentsPage().getComponentsText();
        Assert.assertEquals("Components not displayed", expectedMessage, actualMessage);

    }



}
