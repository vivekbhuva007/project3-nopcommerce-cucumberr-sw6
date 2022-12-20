package com.nopcommerce.demo.steps;

import com.nopcommerce.demo.pages.HomePage;
import cucumber.api.PendingException;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class HomePageSteps {
    @Given("^I am on top menu page$")
    public void iAmOnTopMenuPage() {
    }

    @When("^I select computer \"([^\"]*)\"$")
    public void iSelectComputer(String computer) {
        new HomePage().selectMenu(computer);


    }

    @And("^i select  electronics\"([^\"]*)\"$")
    public void iSelectElectronics(String ele) {
        new HomePage().selectMenu(ele);

    }

    @And("^I selected apparel \"([^\"]*)\"$")
    public void iSelectedApparel(String app) {
        new HomePage().selectMenu(app);

    }

    @And("^I seelect  digital downloads\"([^\"]*)\"$")
    public void iSeelectDigitalDownloads(String dd) {
        new HomePage().selectMenu(dd);

    }

    @And("^I selecct books \"([^\"]*)\"$")
    public void iSelecctBooks(String books) {
        new HomePage().selectMenu(books);

    }

    @And("^i seleect jewelry \"([^\"]*)\"$")
    public void iSeleectJewelry(String jewelry) {
        new HomePage().selectMenu(jewelry);

    }

    @Then("^i sselect gift cards \"([^\"]*)\"$")
    public void iSselectGiftCards(String giftCard) {
        new HomePage().selectMenu(giftCard);

    }
}
