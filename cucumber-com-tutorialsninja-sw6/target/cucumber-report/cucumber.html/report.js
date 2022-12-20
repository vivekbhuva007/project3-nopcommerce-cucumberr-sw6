$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("desktopstest.feature");
formatter.feature({
  "line": 2,
  "name": "Desktops Test",
  "description": "As user I want to arrange listing in alphabetical order and verify product added to shopping cart",
  "id": "desktops-test",
  "keyword": "Feature"
});
formatter.before({
  "duration": 5934048900,
  "status": "passed"
});
formatter.scenario({
  "comments": [
    {
      "line": 5,
      "value": "#@smoke"
    }
  ],
  "line": 7,
  "name": "User can verify Product Arrange In Alphabetical Order",
  "description": "",
  "id": "desktops-test;user-can-verify-product-arrange-in-alphabetical-order",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 8,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 9,
  "name": "I Mouse hover on “Desktops” Tab and click",
  "keyword": "When "
});
formatter.step({
  "line": 10,
  "name": "I can Select Sort By position Name: Z to A",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "Verify the Product will arrange in Descending order",
  "keyword": "Then "
});
formatter.match({
  "location": "TopMenuTest.iAmOnHomepage()"
});
formatter.result({
  "duration": 108360600,
  "status": "passed"
});
formatter.match({
  "location": "TopMenuTest.iMouseHoverOnDesktopsTabAndClick()"
});
formatter.result({
  "duration": 177629200,
  "status": "passed"
});
formatter.match({
  "location": "DesktopTestSteps.iCanSelectSortByPositionNameZToA()"
});
formatter.result({
  "duration": 9109753900,
  "status": "passed"
});
formatter.match({
  "location": "DesktopTestSteps.verifyTheProductWillArrangeInDescendingOrder()"
});
formatter.result({
  "duration": 321186600,
  "error_message": "java.lang.AssertionError: Product not sorted into Z to A order: Lists differ at element [0]: Apple Cinema 30\" !\u003d Sony VAIO expected [Apple Cinema 30\"] but found [Sony VAIO]\r\n\tat org.testng.Assert.fail(Assert.java:96)\r\n\tat org.testng.Assert.failNotEquals(Assert.java:776)\r\n\tat org.testng.Assert.assertEqualsImpl(Assert.java:137)\r\n\tat org.testng.Assert.assertEquals(Assert.java:831)\r\n\tat com.tutorialsninja.steps.DesktopTestSteps.verifyTheProductWillArrangeInDescendingOrder(DesktopTestSteps.java:31)\r\n\tat ✽.Then Verify the Product will arrange in Descending order(desktopstest.feature:11)\r\n",
  "status": "failed"
});
formatter.after({
  "duration": 983331500,
  "status": "passed"
});
formatter.before({
  "duration": 3567491500,
  "status": "passed"
});
formatter.scenario({
  "line": 14,
  "name": "User can verify Product Added To Shopping Cart SuccessFully",
  "description": "",
  "id": "desktops-test;user-can-verify-product-added-to-shopping-cart-successfully",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 15,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 16,
  "name": "I change currency to Pound Sterling",
  "keyword": "When "
});
formatter.step({
  "line": 17,
  "name": "I Mouse hover on “Desktops” Tab and click",
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "Select Sort By position \"Name: A to Z\"",
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "Select product “HP LP3065”",
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "Verify the Text \"HP LP3065\"",
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "Select Delivery Date \"2022-11-30\"",
  "keyword": "And "
});
formatter.step({
  "line": 22,
  "name": "Enter Qty \"1” using Select class.",
  "keyword": "And "
});
formatter.step({
  "line": 23,
  "name": "Click on “Add to Cart” button",
  "keyword": "And "
});
formatter.step({
  "line": 24,
  "name": "Verify the Message “Success: You have added HP LP3065 to your shopping cart!”",
  "keyword": "And "
});
formatter.step({
  "line": 25,
  "name": "Click on link “shopping cart” display into success message",
  "keyword": "And "
});
formatter.step({
  "line": 26,
  "name": "Verify the text \"Shopping Cart\"",
  "keyword": "And "
});
formatter.step({
  "line": 27,
  "name": "Verify the Product name \"HP LP3065\"",
  "keyword": "And "
});
formatter.step({
  "line": 28,
  "name": "Verify the Delivery Date \"2022-11-30\"",
  "keyword": "And "
});
formatter.step({
  "line": 29,
  "name": "Verify the Model \"Product21\"",
  "keyword": "And "
});
formatter.step({
  "line": 30,
  "name": "Verify the Total \"£74.73\"",
  "keyword": "And "
});
formatter.match({
  "location": "TopMenuTest.iAmOnHomepage()"
});
formatter.result({
  "duration": 36400,
  "status": "passed"
});
formatter.match({
  "location": "DesktopTestSteps.iChangeCurrencyToPoundSterling()"
});
formatter.result({
  "duration": 622047100,
  "status": "passed"
});
formatter.match({
  "location": "TopMenuTest.iMouseHoverOnDesktopsTabAndClick()"
});
formatter.result({
  "duration": 177487500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Name: A to Z",
      "offset": 25
    }
  ],
  "location": "DesktopTestSteps.selectSortByPosition(String)"
});
formatter.result({
  "duration": 2837276100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "3065",
      "offset": 21
    }
  ],
  "location": "DesktopTestSteps.selectProductHPLP(String)"
});
formatter.result({
  "duration": 1497772300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "HP LP3065",
      "offset": 17
    }
  ],
  "location": "DesktopTestSteps.verifyTheText()"
});
formatter.result({
  "duration": 325200,
  "error_message": "cucumber.runtime.CucumberException: Arity mismatch: Step Definition \u0027com.tutorialsninja.steps.DesktopTestSteps.verifyTheText() in file:/C:/Users/user/IdeaProjects/week-16-com-tutorialsninja/target/test-classes/\u0027 with pattern [^Verify the Text \"([^\"]*)\"$] is declared with 0 parameters. However, the gherkin step has 1 arguments [HP LP3065]. \nStep: And Verify the Text \"HP LP3065\"\r\n\tat cucumber.runtime.StepDefinitionMatch.arityMismatch(StepDefinitionMatch.java:102)\r\n\tat cucumber.runtime.StepDefinitionMatch.transformedArgs(StepDefinitionMatch.java:60)\r\n\tat cucumber.runtime.StepDefinitionMatch.runStep(StepDefinitionMatch.java:37)\r\n\tat cucumber.runtime.Runtime.runStep(Runtime.java:300)\r\n\tat cucumber.runtime.model.StepContainer.runStep(StepContainer.java:44)\r\n\tat cucumber.runtime.model.StepContainer.runSteps(StepContainer.java:39)\r\n\tat cucumber.runtime.model.CucumberScenario.run(CucumberScenario.java:44)\r\n\tat cucumber.runtime.junit.ExecutionUnitRunner.run(ExecutionUnitRunner.java:102)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:63)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:18)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:238)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:63)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:236)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:53)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:229)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:309)\r\n\tat cucumber.runtime.junit.FeatureRunner.run(FeatureRunner.java:70)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:95)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:38)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:238)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:63)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:236)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:53)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:229)\r\n\tat org.junit.internal.runners.statements.RunAfters.evaluate(RunAfters.java:27)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:309)\r\n\tat cucumber.api.junit.Cucumber.run(Cucumber.java:100)\r\n\tat org.junit.runner.JUnitCore.run(JUnitCore.java:160)\r\n\tat com.intellij.junit4.JUnit4IdeaTestRunner.startRunnerWithArgs(JUnit4IdeaTestRunner.java:69)\r\n\tat com.intellij.rt.junit.IdeaTestRunner$Repeater$1.execute(IdeaTestRunner.java:38)\r\n\tat com.intellij.rt.execution.junit.TestsRepeater.repeat(TestsRepeater.java:11)\r\n\tat com.intellij.rt.junit.IdeaTestRunner$Repeater.startRunnerWithArgs(IdeaTestRunner.java:35)\r\n\tat com.intellij.rt.junit.JUnitStarter.prepareStreamsAndStart(JUnitStarter.java:235)\r\n\tat com.intellij.rt.junit.JUnitStarter.main(JUnitStarter.java:54)\r\n",
  "status": "failed"
});
formatter.match({
  "arguments": [
    {
      "val": "2022-11-30",
      "offset": 22
    }
  ],
  "location": "DesktopTestSteps.selectDeliveryDate()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "1",
      "offset": 11
    }
  ],
  "location": "DesktopTestSteps.enterQtyUsingSelectClass()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "DesktopTestSteps.clickOnAddToCartButton()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "3065",
      "offset": 49
    }
  ],
  "location": "DesktopTestSteps.verifyTheMessageSuccessYouHaveAddedHPLPToYourShoppingCart()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "DesktopTestSteps.clickOnLinkShoppingCartDisplayIntoSuccessMessage()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Shopping Cart",
      "offset": 17
    }
  ],
  "location": "DesktopTestSteps.verifyTheTextInShoppingCart()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "HP LP3065",
      "offset": 25
    }
  ],
  "location": "DesktopTestSteps.verifyTheProductName()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "2022-11-30",
      "offset": 26
    }
  ],
  "location": "DesktopTestSteps.verifyTheDeliveryDate()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Product21",
      "offset": 18
    }
  ],
  "location": "DesktopTestSteps.verifyTheModel()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "£74.73",
      "offset": 18
    }
  ],
  "location": "DesktopTestSteps.verifyTheTotal()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 1676035300,
  "status": "passed"
});
formatter.uri("laptopsandnotebooks.feature");
formatter.feature({
  "line": 1,
  "name": "Laptops and Notebooks Test",
  "description": "As user I want to arrange listing in High To Low order and verify product added to shopping cart",
  "id": "laptops-and-notebooks-test",
  "keyword": "Feature"
});
formatter.before({
  "duration": 3039559900,
  "status": "passed"
});
formatter.scenario({
  "line": 4,
  "name": "verify Products Price Display High To Low Successfully",
  "description": "",
  "id": "laptops-and-notebooks-test;verify-products-price-display-high-to-low-successfully",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 5,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "Mouse hover on Laptops \u0026 Notebooks Tab and click",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "Click on “Show All Laptops \u0026 Notebooks”",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "Select Sort By \"Price (High \u003e Low)\"",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "Verify the Product price will arrange in High to Low order.",
  "keyword": "And "
});
formatter.match({
  "location": "TopMenuTest.iAmOnHomepage()"
});
formatter.result({
  "duration": 25200,
  "status": "passed"
});
formatter.match({
  "location": "LaptopsAndNotebooksTestSteps.mouseHoverOnLaptopsNotebooksTabAndClick()"
});
formatter.result({
  "duration": 216256000,
  "status": "passed"
});
formatter.match({
  "location": "LaptopsAndNotebooksTestSteps.clickOnShowAllLaptopsNotebooks()"
});
formatter.result({
  "duration": 602799900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Price (High \u003e Low)",
      "offset": 16
    }
  ],
  "location": "LaptopsAndNotebooksTestSteps.selectSortBy()"
});
formatter.result({
  "duration": 174000,
  "error_message": "cucumber.runtime.CucumberException: Arity mismatch: Step Definition \u0027com.tutorialsninja.steps.LaptopsAndNotebooksTestSteps.selectSortBy() in file:/C:/Users/user/IdeaProjects/week-16-com-tutorialsninja/target/test-classes/\u0027 with pattern [^Select Sort By \"([^\"]*)\"$] is declared with 0 parameters. However, the gherkin step has 1 arguments [Price (High \u003e Low)]. \nStep: And Select Sort By \"Price (High \u003e Low)\"\r\n\tat cucumber.runtime.StepDefinitionMatch.arityMismatch(StepDefinitionMatch.java:102)\r\n\tat cucumber.runtime.StepDefinitionMatch.transformedArgs(StepDefinitionMatch.java:60)\r\n\tat cucumber.runtime.StepDefinitionMatch.runStep(StepDefinitionMatch.java:37)\r\n\tat cucumber.runtime.Runtime.runStep(Runtime.java:300)\r\n\tat cucumber.runtime.model.StepContainer.runStep(StepContainer.java:44)\r\n\tat cucumber.runtime.model.StepContainer.runSteps(StepContainer.java:39)\r\n\tat cucumber.runtime.model.CucumberScenario.run(CucumberScenario.java:44)\r\n\tat cucumber.runtime.junit.ExecutionUnitRunner.run(ExecutionUnitRunner.java:102)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:63)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:18)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:238)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:63)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:236)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:53)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:229)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:309)\r\n\tat cucumber.runtime.junit.FeatureRunner.run(FeatureRunner.java:70)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:95)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:38)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:238)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:63)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:236)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:53)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:229)\r\n\tat org.junit.internal.runners.statements.RunAfters.evaluate(RunAfters.java:27)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:309)\r\n\tat cucumber.api.junit.Cucumber.run(Cucumber.java:100)\r\n\tat org.junit.runner.JUnitCore.run(JUnitCore.java:160)\r\n\tat com.intellij.junit4.JUnit4IdeaTestRunner.startRunnerWithArgs(JUnit4IdeaTestRunner.java:69)\r\n\tat com.intellij.rt.junit.IdeaTestRunner$Repeater$1.execute(IdeaTestRunner.java:38)\r\n\tat com.intellij.rt.execution.junit.TestsRepeater.repeat(TestsRepeater.java:11)\r\n\tat com.intellij.rt.junit.IdeaTestRunner$Repeater.startRunnerWithArgs(IdeaTestRunner.java:35)\r\n\tat com.intellij.rt.junit.JUnitStarter.prepareStreamsAndStart(JUnitStarter.java:235)\r\n\tat com.intellij.rt.junit.JUnitStarter.main(JUnitStarter.java:54)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "LaptopsAndNotebooksTestSteps.verifyTheProductPriceWillArrangeInHighToLowOrder()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 1080854300,
  "status": "passed"
});
formatter.before({
  "duration": 3783648300,
  "status": "passed"
});
formatter.scenario({
  "line": 11,
  "name": "verify Products Price Display High To Low Successfully",
  "description": "",
  "id": "laptops-and-notebooks-test;verify-products-price-display-high-to-low-successfully",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 12,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 13,
  "name": "I change currency to Pound Sterling",
  "keyword": "When "
});
formatter.step({
  "line": 14,
  "name": "Mouse hover on Laptops \u0026 Notebooks Tab and click",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "Click on “Show All Laptops \u0026 Notebooks”",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "Select Sort By \"Price (High \u003e Low)\"",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "Select Product “MacBook”",
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "Verify the text “MacBook”",
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "Click on ‘Add To Cart’ button",
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "Verify the message “Success: You have added MacBook to your shopping cart!”",
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "Click on link shopping cart display into success message",
  "keyword": "And "
});
formatter.step({
  "line": 22,
  "name": "Verify the text Shopping Cart",
  "keyword": "And "
});
formatter.step({
  "line": 23,
  "name": "Verify the Product name MacBook",
  "keyword": "And "
});
formatter.step({
  "line": 24,
  "name": "Change Quantity \"2\"",
  "keyword": "And "
});
formatter.step({
  "line": 25,
  "name": "Click on “Update” Tab",
  "keyword": "And "
});
formatter.step({
  "line": 26,
  "name": "Verify the message “Success: You have modified your shopping cart!”",
  "keyword": "And "
});
formatter.step({
  "line": 27,
  "name": "Verify the Total £737.45",
  "keyword": "And "
});
formatter.step({
  "line": 28,
  "name": "Click on “Checkout” button",
  "keyword": "And "
});
formatter.step({
  "line": 29,
  "name": "Verify the text “Checkout”",
  "keyword": "And "
});
formatter.step({
  "line": 30,
  "name": "Verify the Text “New Customer”",
  "keyword": "And "
});
formatter.step({
  "line": 31,
  "name": "Click on “Guest Checkout” radio button",
  "keyword": "And "
});
formatter.step({
  "line": 32,
  "name": "Click on “Continue” tab",
  "keyword": "And "
});
formatter.step({
  "line": 33,
  "name": "Fill the mandatory fields",
  "keyword": "And "
});
formatter.step({
  "line": 34,
  "name": "Click on “Continue” Button",
  "keyword": "And "
});
formatter.step({
  "line": 35,
  "name": "Add Comments About your order into text area",
  "keyword": "And "
});
formatter.step({
  "line": 36,
  "name": "Check the Terms \u0026 Conditions check box",
  "keyword": "And "
});
formatter.step({
  "line": 37,
  "name": "Click on “Continue” button",
  "keyword": "And "
});
formatter.step({
  "line": 38,
  "name": "Verify the message “Warning: Payment method required!”",
  "keyword": "And "
});
formatter.match({
  "location": "TopMenuTest.iAmOnHomepage()"
});
formatter.result({
  "duration": 43700,
  "status": "passed"
});
formatter.match({
  "location": "DesktopTestSteps.iChangeCurrencyToPoundSterling()"
});
formatter.result({
  "duration": 615324100,
  "status": "passed"
});
formatter.match({
  "location": "LaptopsAndNotebooksTestSteps.mouseHoverOnLaptopsNotebooksTabAndClick()"
});
formatter.result({
  "duration": 176475700,
  "status": "passed"
});
formatter.match({
  "location": "LaptopsAndNotebooksTestSteps.clickOnShowAllLaptopsNotebooks()"
});
formatter.result({
  "duration": 598875700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Price (High \u003e Low)",
      "offset": 16
    }
  ],
  "location": "LaptopsAndNotebooksTestSteps.selectSortBy()"
});
formatter.result({
  "duration": 2500000,
  "error_message": "cucumber.runtime.CucumberException: Arity mismatch: Step Definition \u0027com.tutorialsninja.steps.LaptopsAndNotebooksTestSteps.selectSortBy() in file:/C:/Users/user/IdeaProjects/week-16-com-tutorialsninja/target/test-classes/\u0027 with pattern [^Select Sort By \"([^\"]*)\"$] is declared with 0 parameters. However, the gherkin step has 1 arguments [Price (High \u003e Low)]. \nStep: And Select Sort By \"Price (High \u003e Low)\"\r\n\tat cucumber.runtime.StepDefinitionMatch.arityMismatch(StepDefinitionMatch.java:102)\r\n\tat cucumber.runtime.StepDefinitionMatch.transformedArgs(StepDefinitionMatch.java:60)\r\n\tat cucumber.runtime.StepDefinitionMatch.runStep(StepDefinitionMatch.java:37)\r\n\tat cucumber.runtime.Runtime.runStep(Runtime.java:300)\r\n\tat cucumber.runtime.model.StepContainer.runStep(StepContainer.java:44)\r\n\tat cucumber.runtime.model.StepContainer.runSteps(StepContainer.java:39)\r\n\tat cucumber.runtime.model.CucumberScenario.run(CucumberScenario.java:44)\r\n\tat cucumber.runtime.junit.ExecutionUnitRunner.run(ExecutionUnitRunner.java:102)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:63)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:18)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:238)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:63)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:236)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:53)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:229)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:309)\r\n\tat cucumber.runtime.junit.FeatureRunner.run(FeatureRunner.java:70)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:95)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:38)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:238)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:63)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:236)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:53)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:229)\r\n\tat org.junit.internal.runners.statements.RunAfters.evaluate(RunAfters.java:27)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:309)\r\n\tat cucumber.api.junit.Cucumber.run(Cucumber.java:100)\r\n\tat org.junit.runner.JUnitCore.run(JUnitCore.java:160)\r\n\tat com.intellij.junit4.JUnit4IdeaTestRunner.startRunnerWithArgs(JUnit4IdeaTestRunner.java:69)\r\n\tat com.intellij.rt.junit.IdeaTestRunner$Repeater$1.execute(IdeaTestRunner.java:38)\r\n\tat com.intellij.rt.execution.junit.TestsRepeater.repeat(TestsRepeater.java:11)\r\n\tat com.intellij.rt.junit.IdeaTestRunner$Repeater.startRunnerWithArgs(IdeaTestRunner.java:35)\r\n\tat com.intellij.rt.junit.JUnitStarter.prepareStreamsAndStart(JUnitStarter.java:235)\r\n\tat com.intellij.rt.junit.JUnitStarter.main(JUnitStarter.java:54)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "LaptopsAndNotebooksTestSteps.selectProductMacBook()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "LaptopsAndNotebooksTestSteps.verifyTheTextMacBook()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "LaptopsAndNotebooksTestSteps.clickOnAddToCartButton()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "LaptopsAndNotebooksTestSteps.verifyTheMessageSuccessYouHaveAddedMacBookToYourShoppingCart()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "LaptopsAndNotebooksTestSteps.clickOnLinkShoppingCartDisplayIntoSuccessMessage()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "LaptopsAndNotebooksTestSteps.verifyTheTextShoppingCart()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "LaptopsAndNotebooksTestSteps.verifyTheProductNameMacBook()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "2",
      "offset": 17
    }
  ],
  "location": "LaptopsAndNotebooksTestSteps.changeQuantity()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "LaptopsAndNotebooksTestSteps.clickOnUpdateTab()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "LaptopsAndNotebooksTestSteps.verifyTheMessageSuccessYouHaveModifiedYourShoppingCart()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "737",
      "offset": 18
    },
    {
      "val": "45",
      "offset": 22
    }
  ],
  "location": "LaptopsAndNotebooksTestSteps.verifyTheTotal£()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "LaptopsAndNotebooksTestSteps.clickOnCheckoutButton()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "LaptopsAndNotebooksTestSteps.verifyTheTextCheckout()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "LaptopsAndNotebooksTestSteps.verifyTheTextNewCustomer()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "LaptopsAndNotebooksTestSteps.clickOnGuestCheckoutRadioButton()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "LaptopsAndNotebooksTestSteps.clickOnContinueTab()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "LaptopsAndNotebooksTestSteps.fillTheMandatoryFields()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "LaptopsAndNotebooksTestSteps.clickOnContinueButton1()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "LaptopsAndNotebooksTestSteps.addCommentsAboutYourOrderIntoTextArea()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "LaptopsAndNotebooksTestSteps.checkTheTermsConditionsCheckBox()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "LaptopsAndNotebooksTestSteps.clickOnContinueButton()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "LaptopsAndNotebooksTestSteps.verifyTheMessageWarningPaymentMethodRequired()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 981719700,
  "status": "passed"
});
formatter.uri("topmenu.feature");
formatter.feature({
  "line": 2,
  "name": "TopMenu Test",
  "description": "As user I want to navigate through top menu of the page",
  "id": "topmenu-test",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@regression"
    }
  ]
});
formatter.before({
  "duration": 3244050500,
  "status": "passed"
});
formatter.scenario({
  "comments": [
    {
      "line": 5,
      "value": "#@smoke"
    }
  ],
  "line": 7,
  "name": "User can verify User Should Navigate To Desktops Page Successfully",
  "description": "",
  "id": "topmenu-test;user-can-verify-user-should-navigate-to-desktops-page-successfully",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 8,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 9,
  "name": "I Mouse hover on “Desktops” Tab and click",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "I call selectMenu method and pass the menu \u003d “Show All Desktops”",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "Verify the text ‘Desktops’",
  "keyword": "Then "
});
formatter.match({
  "location": "TopMenuTest.iAmOnHomepage()"
});
formatter.result({
  "duration": 50900,
  "status": "passed"
});
formatter.match({
  "location": "TopMenuTest.iMouseHoverOnDesktopsTabAndClick()"
});
formatter.result({
  "duration": 182241600,
  "status": "passed"
});
formatter.match({
  "location": "TopMenuTest.iCallSelectMenuMethodAndPassTheMenuShowAllDesktops()"
});
formatter.result({
  "duration": 821370800,
  "status": "passed"
});
formatter.match({
  "location": "TopMenuTest.verifyTheTextDesktops()"
});
formatter.result({
  "duration": 32914700,
  "status": "passed"
});
formatter.after({
  "duration": 700729900,
  "status": "passed"
});
formatter.before({
  "duration": 3070678300,
  "status": "passed"
});
formatter.scenario({
  "line": 13,
  "name": "User can verify User Should Navigate To Laptops And Notebooks Page Successfully",
  "description": "",
  "id": "topmenu-test;user-can-verify-user-should-navigate-to-laptops-and-notebooks-page-successfully",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 14,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 15,
  "name": "I Mouse hover on “Desktops” Tab and click",
  "keyword": "When "
});
formatter.step({
  "line": 16,
  "name": "I call selectMenu method and pass the menu \u003d “Show All Laptops \u0026 Notebooks”",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "I can Verify the text ‘Laptops \u0026 Notebooks’",
  "keyword": "Then "
});
formatter.match({
  "location": "TopMenuTest.iAmOnHomepage()"
});
formatter.result({
  "duration": 22900,
  "status": "passed"
});
formatter.match({
  "location": "TopMenuTest.iMouseHoverOnDesktopsTabAndClick()"
});
formatter.result({
  "duration": 202056700,
  "status": "passed"
});
formatter.match({
  "location": "TopMenuTest.iCallSelectMenuMethodAndPassTheMenuShowAllLaptopsNotebooks()"
});
formatter.result({
  "duration": 45334200,
  "status": "passed"
});
formatter.match({
  "location": "TopMenuTest.iCanVerifyTheTextLaptopsNotebooks()"
});
formatter.result({
  "duration": 10373851600,
  "error_message": "org.openqa.selenium.WebDriverException: disconnected: received Inspector.detached event\n  (failed to check if window was closed: disconnected: Unable to receive message from renderer)\n  (Session info: chrome\u003d108.0.5359.125)\nBuild info: version: \u00274.6.0\u0027, revision: \u002779f1c02ae20\u0027\nSystem info: os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_121\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCommand: [8e38623db289c6e6b1d6c81469381e5a, findElement {using\u003dxpath, value\u003d//h2[contains(text(),\u0027Laptops \u0026 Notebooks\u0027)]}]\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 108.0.5359.125, chrome: {chromedriverVersion: 108.0.5359.71 (1e0e3868ee06..., userDataDir: C:\\Users\\user\\AppData\\Local...}, goog:chromeOptions: {debuggerAddress: localhost:64106}, networkConnectionEnabled: false, pageLoadStrategy: normal, platformName: WINDOWS, proxy: Proxy(), se:cdp: ws://localhost:64106/devtoo..., se:cdpVersion: 108.0.5359.125, setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:credBlob: true, webauthn:extension:largeBlob: true, webauthn:virtualAuthenticators: true}\nSession ID: 8e38623db289c6e6b1d6c81469381e5a\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:200)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:133)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:53)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:184)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.invokeExecute(DriverCommandExecutor.java:167)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:142)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:541)\r\n\tat org.openqa.selenium.remote.ElementLocation$ElementFinder$2.findElement(ElementLocation.java:162)\r\n\tat org.openqa.selenium.remote.ElementLocation.findElement(ElementLocation.java:60)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:365)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:357)\r\n\tat org.openqa.selenium.support.pagefactory.DefaultElementLocator.findElement(DefaultElementLocator.java:70)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:39)\r\n\tat com.sun.proxy.$Proxy23.getText(Unknown Source)\r\n\tat com.tutorialsninja.utility.Utility.getTextFromElement(Utility.java:64)\r\n\tat com.tutorialsninja.pages.LaptopsAndNotebooksPage.getLaptopsAndNotebooksText(LaptopsAndNotebooksPage.java:37)\r\n\tat com.tutorialsninja.steps.TopMenuTest.iCanVerifyTheTextLaptopsNotebooks(TopMenuTest.java:46)\r\n\tat ✽.Then I can Verify the text ‘Laptops \u0026 Notebooks’(topmenu.feature:17)\r\n",
  "status": "failed"
});
formatter.after({
  "duration": 7634400,
  "error_message": "org.openqa.selenium.NoSuchWindowException: no such window: target window already closed\nfrom unknown error: web view not found\n  (Session info: chrome\u003d108.0.5359.125)\nBuild info: version: \u00274.6.0\u0027, revision: \u002779f1c02ae20\u0027\nSystem info: os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_121\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCommand: [8e38623db289c6e6b1d6c81469381e5a, screenshot {}]\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 108.0.5359.125, chrome: {chromedriverVersion: 108.0.5359.71 (1e0e3868ee06..., userDataDir: C:\\Users\\user\\AppData\\Local...}, goog:chromeOptions: {debuggerAddress: localhost:64106}, networkConnectionEnabled: false, pageLoadStrategy: normal, platformName: WINDOWS, proxy: Proxy(), se:cdp: ws://localhost:64106/devtoo..., se:cdpVersion: 108.0.5359.125, setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:credBlob: true, webauthn:extension:largeBlob: true, webauthn:virtualAuthenticators: true}\nSession ID: 8e38623db289c6e6b1d6c81469381e5a\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:200)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:133)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:53)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:184)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.invokeExecute(DriverCommandExecutor.java:167)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:142)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:541)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:596)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:600)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.getScreenshotAs(RemoteWebDriver.java:331)\r\n\tat com.tutorialsninja.utility.Utility.getScreenshot(Utility.java:341)\r\n\tat com.tutorialsninja.Hooks.tearDown(Hooks.java:26)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.lang.reflect.Method.invoke(Method.java:498)\r\n\tat cucumber.runtime.Utils$1.call(Utils.java:40)\r\n\tat cucumber.runtime.Timeout.timeout(Timeout.java:16)\r\n\tat cucumber.runtime.Utils.invoke(Utils.java:34)\r\n\tat cucumber.runtime.java.JavaHookDefinition.execute(JavaHookDefinition.java:60)\r\n\tat cucumber.runtime.Runtime.runHookIfTagsMatch(Runtime.java:224)\r\n\tat cucumber.runtime.Runtime.runHooks(Runtime.java:212)\r\n\tat cucumber.runtime.Runtime.runAfterHooks(Runtime.java:206)\r\n\tat cucumber.runtime.model.CucumberScenario.run(CucumberScenario.java:46)\r\n\tat cucumber.runtime.junit.ExecutionUnitRunner.run(ExecutionUnitRunner.java:102)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:63)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:18)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:238)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:63)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:236)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:53)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:229)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:309)\r\n\tat cucumber.runtime.junit.FeatureRunner.run(FeatureRunner.java:70)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:95)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:38)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:238)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:63)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:236)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:53)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:229)\r\n\tat org.junit.internal.runners.statements.RunAfters.evaluate(RunAfters.java:27)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:309)\r\n\tat cucumber.api.junit.Cucumber.run(Cucumber.java:100)\r\n\tat org.junit.runner.JUnitCore.run(JUnitCore.java:160)\r\n\tat com.intellij.junit4.JUnit4IdeaTestRunner.startRunnerWithArgs(JUnit4IdeaTestRunner.java:69)\r\n\tat com.intellij.rt.junit.IdeaTestRunner$Repeater$1.execute(IdeaTestRunner.java:38)\r\n\tat com.intellij.rt.execution.junit.TestsRepeater.repeat(TestsRepeater.java:11)\r\n\tat com.intellij.rt.junit.IdeaTestRunner$Repeater.startRunnerWithArgs(IdeaTestRunner.java:35)\r\n\tat com.intellij.rt.junit.JUnitStarter.prepareStreamsAndStart(JUnitStarter.java:235)\r\n\tat com.intellij.rt.junit.JUnitStarter.main(JUnitStarter.java:54)\r\n",
  "status": "failed"
});
formatter.before({
  "duration": 3087657100,
  "status": "passed"
});
formatter.scenario({
  "line": 19,
  "name": "User can verify User Should Navigate To Components Page Successfully",
  "description": "",
  "id": "topmenu-test;user-can-verify-user-should-navigate-to-components-page-successfully",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 20,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 21,
  "name": "I Mouse hover on “Desktops” Tab and click",
  "keyword": "When "
});
formatter.step({
  "line": 22,
  "name": "I call selectMenu method and pass the menu \u003d “Show All Components”",
  "keyword": "And "
});
formatter.step({
  "line": 23,
  "name": "I can verify the text ‘Components’",
  "keyword": "Then "
});
formatter.match({
  "location": "TopMenuTest.iAmOnHomepage()"
});
formatter.result({
  "duration": 38500,
  "status": "passed"
});
formatter.match({
  "location": "TopMenuTest.iMouseHoverOnDesktopsTabAndClick()"
});
formatter.result({
  "duration": 12660400,
  "error_message": "org.openqa.selenium.json.JsonException: java.lang.reflect.InvocationTargetException\nBuild info: version: \u00274.6.0\u0027, revision: \u002779f1c02ae20\u0027\nSystem info: os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_121\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCommand: [24e4ec0f5764587daa32b6838b0a8a3d, actions {actions\u003d[org.openqa.selenium.interactions.Sequence@2954f6ab]}]\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 108.0.5359.125, chrome: {chromedriverVersion: 108.0.5359.71 (1e0e3868ee06..., userDataDir: C:\\Users\\user\\AppData\\Local...}, goog:chromeOptions: {debuggerAddress: localhost:64136}, networkConnectionEnabled: false, pageLoadStrategy: normal, platformName: WINDOWS, proxy: Proxy(), se:cdp: ws://localhost:64136/devtoo..., se:cdpVersion: 108.0.5359.125, setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:credBlob: true, webauthn:extension:largeBlob: true, webauthn:virtualAuthenticators: true}\nSession ID: 24e4ec0f5764587daa32b6838b0a8a3d\r\n\tat org.openqa.selenium.json.JsonOutput.convertUsingMethod(JsonOutput.java:362)\r\n\tat org.openqa.selenium.json.JsonOutput.lambda$new$16(JsonOutput.java:154)\r\n\tat org.openqa.selenium.json.JsonOutput.write(JsonOutput.java:287)\r\n\tat org.openqa.selenium.json.JsonOutput.lambda$new$22(JsonOutput.java:169)\r\n\tat java.util.stream.ForEachOps$ForEachOp$OfRef.accept(ForEachOps.java:184)\r\n\tat java.util.stream.ReferencePipeline$2$1.accept(ReferencePipeline.java:175)\r\n\tat java.util.Iterator.forEachRemaining(Iterator.java:116)\r\n\tat java.util.Spliterators$IteratorSpliterator.forEachRemaining(Spliterators.java:1801)\r\n\tat java.util.stream.AbstractPipeline.copyInto(AbstractPipeline.java:481)\r\n\tat java.util.stream.AbstractPipeline.wrapAndCopyInto(AbstractPipeline.java:471)\r\n\tat java.util.stream.ForEachOps$ForEachOp.evaluateSequential(ForEachOps.java:151)\r\n\tat java.util.stream.ForEachOps$ForEachOp$OfRef.evaluateSequential(ForEachOps.java:174)\r\n\tat java.util.stream.AbstractPipeline.evaluate(AbstractPipeline.java:234)\r\n\tat java.util.stream.ReferencePipeline.forEach(ReferencePipeline.java:418)\r\n\tat org.openqa.selenium.json.JsonOutput.lambda$new$23(JsonOutput.java:169)\r\n\tat org.openqa.selenium.json.JsonOutput.write(JsonOutput.java:287)\r\n\tat org.openqa.selenium.json.JsonOutput.lambda$new$24(JsonOutput.java:182)\r\n\tat com.google.common.collect.SingletonImmutableBiMap.forEach(SingletonImmutableBiMap.java:68)\r\n\tat org.openqa.selenium.json.JsonOutput.lambda$new$25(JsonOutput.java:177)\r\n\tat org.openqa.selenium.json.JsonOutput.write(JsonOutput.java:287)\r\n\tat org.openqa.selenium.json.JsonOutput.write(JsonOutput.java:278)\r\n\tat org.openqa.selenium.json.Json.toJson(Json.java:42)\r\n\tat org.openqa.selenium.remote.codec.AbstractHttpCommandCodec.encode(AbstractHttpCommandCodec.java:259)\r\n\tat org.openqa.selenium.remote.codec.AbstractHttpCommandCodec.encode(AbstractHttpCommandCodec.java:122)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:172)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.invokeExecute(DriverCommandExecutor.java:167)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:142)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:541)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.perform(RemoteWebDriver.java:609)\r\n\tat org.openqa.selenium.interactions.Actions$BuiltAction.perform(Actions.java:567)\r\n\tat org.openqa.selenium.interactions.Actions.perform(Actions.java:536)\r\n\tat com.tutorialsninja.utility.Utility.mouseHoverToElementAndClick(Utility.java:243)\r\n\tat com.tutorialsninja.pages.HomePage.mouseHoverOnDesktopsLinkAndClick(HomePage.java:67)\r\n\tat com.tutorialsninja.steps.TopMenuTest.iMouseHoverOnDesktopsTabAndClick(TopMenuTest.java:21)\r\n\tat ✽.When I Mouse hover on “Desktops” Tab and click(topmenu.feature:21)\r\n\tSuppressed: org.openqa.selenium.json.JsonException: Attempting to close incomplete json stream\nBuild info: version: \u00274.6.0\u0027, revision: \u002779f1c02ae20\u0027\nSystem info: os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_121\u0027\nDriver info: driver.version: RemoteWebDriver\r\n\t\tat org.openqa.selenium.json.JsonOutput.close(JsonOutput.java:303)\r\n\t\tat org.openqa.selenium.json.Json.toJson(Json.java:40)\r\n\t\tat org.openqa.selenium.remote.codec.AbstractHttpCommandCodec.encode(AbstractHttpCommandCodec.java:259)\r\n\t\tat org.openqa.selenium.remote.codec.AbstractHttpCommandCodec.encode(AbstractHttpCommandCodec.java:122)\r\n\t\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:172)\r\n\t\tat org.openqa.selenium.remote.service.DriverCommandExecutor.invokeExecute(DriverCommandExecutor.java:167)\r\n\t\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:142)\r\n\t\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:541)\r\n\t\tat org.openqa.selenium.remote.RemoteWebDriver.perform(RemoteWebDriver.java:609)\r\n\t\tat org.openqa.selenium.interactions.Actions$BuiltAction.perform(Actions.java:567)\r\n\t\tat org.openqa.selenium.interactions.Actions.perform(Actions.java:536)\r\n\t\tat com.tutorialsninja.utility.Utility.mouseHoverToElementAndClick(Utility.java:243)\r\n\t\tat com.tutorialsninja.pages.HomePage.mouseHoverOnDesktopsLinkAndClick(HomePage.java:67)\r\n\t\tat com.tutorialsninja.steps.TopMenuTest.iMouseHoverOnDesktopsTabAndClick(TopMenuTest.java:21)\r\n\t\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\t\tat sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\r\n\t\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\t\tat java.lang.reflect.Method.invoke(Method.java:498)\r\n\t\tat cucumber.runtime.Utils$1.call(Utils.java:40)\r\n\t\tat cucumber.runtime.Timeout.timeout(Timeout.java:16)\r\n\t\tat cucumber.runtime.Utils.invoke(Utils.java:34)\r\n\t\tat cucumber.runtime.java.JavaStepDefinition.execute(JavaStepDefinition.java:38)\r\n\t\tat cucumber.runtime.StepDefinitionMatch.runStep(StepDefinitionMatch.java:37)\r\n\t\tat cucumber.runtime.Runtime.runStep(Runtime.java:300)\r\n\t\tat cucumber.runtime.model.StepContainer.runStep(StepContainer.java:44)\r\n\t\tat cucumber.runtime.model.StepContainer.runSteps(StepContainer.java:39)\r\n\t\tat cucumber.runtime.model.CucumberScenario.run(CucumberScenario.java:44)\r\n\t\tat cucumber.runtime.junit.ExecutionUnitRunner.run(ExecutionUnitRunner.java:102)\r\n\t\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:63)\r\n\t\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:18)\r\n\t\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:238)\r\n\t\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:63)\r\n\t\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:236)\r\n\t\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:53)\r\n\t\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:229)\r\n\t\tat org.junit.runners.ParentRunner.run(ParentRunner.java:309)\r\n\t\tat cucumber.runtime.junit.FeatureRunner.run(FeatureRunner.java:70)\r\n\t\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:95)\r\n\t\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:38)\r\n\t\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:238)\r\n\t\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:63)\r\n\t\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:236)\r\n\t\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:53)\r\n\t\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:229)\r\n\t\tat org.junit.internal.runners.statements.RunAfters.evaluate(RunAfters.java:27)\r\n\t\tat org.junit.runners.ParentRunner.run(ParentRunner.java:309)\r\n\t\tat cucumber.api.junit.Cucumber.run(Cucumber.java:100)\r\n\t\tat org.junit.runner.JUnitCore.run(JUnitCore.java:160)\r\n\t\tat com.intellij.junit4.JUnit4IdeaTestRunner.startRunnerWithArgs(JUnit4IdeaTestRunner.java:69)\r\n\t\tat com.intellij.rt.junit.IdeaTestRunner$Repeater$1.execute(IdeaTestRunner.java:38)\r\n\t\tat com.intellij.rt.execution.junit.TestsRepeater.repeat(TestsRepeater.java:11)\r\n\t\tat com.intellij.rt.junit.IdeaTestRunner$Repeater.startRunnerWithArgs(IdeaTestRunner.java:35)\r\n\t\tat com.intellij.rt.junit.JUnitStarter.prepareStreamsAndStart(JUnitStarter.java:235)\r\n\t\tat com.intellij.rt.junit.JUnitStarter.main(JUnitStarter.java:54)\r\nCaused by: java.lang.reflect.InvocationTargetException\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.lang.reflect.Method.invoke(Method.java:498)\r\n\tat org.openqa.selenium.json.JsonOutput.convertUsingMethod(JsonOutput.java:358)\r\n\tat org.openqa.selenium.json.JsonOutput.lambda$new$16(JsonOutput.java:154)\r\n\tat org.openqa.selenium.json.JsonOutput.write(JsonOutput.java:287)\r\n\tat org.openqa.selenium.json.JsonOutput.lambda$new$22(JsonOutput.java:169)\r\n\tat java.util.stream.ForEachOps$ForEachOp$OfRef.accept(ForEachOps.java:184)\r\n\tat java.util.stream.ReferencePipeline$2$1.accept(ReferencePipeline.java:175)\r\n\tat java.util.Iterator.forEachRemaining(Iterator.java:116)\r\n\tat java.util.Spliterators$IteratorSpliterator.forEachRemaining(Spliterators.java:1801)\r\n\tat java.util.stream.AbstractPipeline.copyInto(AbstractPipeline.java:481)\r\n\tat java.util.stream.AbstractPipeline.wrapAndCopyInto(AbstractPipeline.java:471)\r\n\tat java.util.stream.ForEachOps$ForEachOp.evaluateSequential(ForEachOps.java:151)\r\n\tat java.util.stream.ForEachOps$ForEachOp$OfRef.evaluateSequential(ForEachOps.java:174)\r\n\tat java.util.stream.AbstractPipeline.evaluate(AbstractPipeline.java:234)\r\n\tat java.util.stream.ReferencePipeline.forEach(ReferencePipeline.java:418)\r\n\tat org.openqa.selenium.json.JsonOutput.lambda$new$23(JsonOutput.java:169)\r\n\tat org.openqa.selenium.json.JsonOutput.write(JsonOutput.java:287)\r\n\tat org.openqa.selenium.json.JsonOutput.lambda$new$24(JsonOutput.java:182)\r\n\tat com.google.common.collect.SingletonImmutableBiMap.forEach(SingletonImmutableBiMap.java:68)\r\n\tat org.openqa.selenium.json.JsonOutput.lambda$new$25(JsonOutput.java:177)\r\n\tat org.openqa.selenium.json.JsonOutput.write(JsonOutput.java:287)\r\n\tat org.openqa.selenium.json.JsonOutput.write(JsonOutput.java:278)\r\n\tat org.openqa.selenium.json.Json.toJson(Json.java:42)\r\n\tat org.openqa.selenium.remote.codec.AbstractHttpCommandCodec.encode(AbstractHttpCommandCodec.java:259)\r\n\tat org.openqa.selenium.remote.codec.AbstractHttpCommandCodec.encode(AbstractHttpCommandCodec.java:122)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:172)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.invokeExecute(DriverCommandExecutor.java:167)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:142)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:541)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.perform(RemoteWebDriver.java:609)\r\n\tat org.openqa.selenium.interactions.Actions$BuiltAction.perform(Actions.java:567)\r\n\tat org.openqa.selenium.interactions.Actions.perform(Actions.java:536)\r\n\tat com.tutorialsninja.utility.Utility.mouseHoverToElementAndClick(Utility.java:243)\r\n\tat com.tutorialsninja.pages.HomePage.mouseHoverOnDesktopsLinkAndClick(HomePage.java:67)\r\n\tat com.tutorialsninja.steps.TopMenuTest.iMouseHoverOnDesktopsTabAndClick(TopMenuTest.java:21)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.lang.reflect.Method.invoke(Method.java:498)\r\n\tat cucumber.runtime.Utils$1.call(Utils.java:40)\r\n\tat cucumber.runtime.Timeout.timeout(Timeout.java:16)\r\n\tat cucumber.runtime.Utils.invoke(Utils.java:34)\r\n\tat cucumber.runtime.java.JavaStepDefinition.execute(JavaStepDefinition.java:38)\r\n\tat cucumber.runtime.StepDefinitionMatch.runStep(StepDefinitionMatch.java:37)\r\n\tat cucumber.runtime.Runtime.runStep(Runtime.java:300)\r\n\tat cucumber.runtime.model.StepContainer.runStep(StepContainer.java:44)\r\n\tat cucumber.runtime.model.StepContainer.runSteps(StepContainer.java:39)\r\n\tat cucumber.runtime.model.CucumberScenario.run(CucumberScenario.java:44)\r\n\tat cucumber.runtime.junit.ExecutionUnitRunner.run(ExecutionUnitRunner.java:102)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:63)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:18)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:238)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:63)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:236)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:53)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:229)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:309)\r\n\tat cucumber.runtime.junit.FeatureRunner.run(FeatureRunner.java:70)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:95)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:38)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:238)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:63)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:236)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:53)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:229)\r\n\tat org.junit.internal.runners.statements.RunAfters.evaluate(RunAfters.java:27)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:309)\r\n\tat cucumber.api.junit.Cucumber.run(Cucumber.java:100)\r\n\tat org.junit.runner.JUnitCore.run(JUnitCore.java:160)\r\n\tat com.intellij.junit4.JUnit4IdeaTestRunner.startRunnerWithArgs(JUnit4IdeaTestRunner.java:69)\r\n\tat com.intellij.rt.junit.IdeaTestRunner$Repeater$1.execute(IdeaTestRunner.java:38)\r\n\tat com.intellij.rt.execution.junit.TestsRepeater.repeat(TestsRepeater.java:11)\r\n\tat com.intellij.rt.junit.IdeaTestRunner$Repeater.startRunnerWithArgs(IdeaTestRunner.java:35)\r\n\tat com.intellij.rt.junit.JUnitStarter.prepareStreamsAndStart(JUnitStarter.java:235)\r\n\tat com.intellij.rt.junit.JUnitStarter.main(JUnitStarter.java:54)\r\nCaused by: org.openqa.selenium.NoSuchWindowException: no such window: target window already closed\nfrom unknown error: web view not found\n  (Session info: chrome\u003d108.0.5359.125)\nBuild info: version: \u00274.6.0\u0027, revision: \u002779f1c02ae20\u0027\nSystem info: os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_121\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCommand: [24e4ec0f5764587daa32b6838b0a8a3d, findElement {using\u003dlink text, value\u003dDesktops}]\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 108.0.5359.125, chrome: {chromedriverVersion: 108.0.5359.71 (1e0e3868ee06..., userDataDir: C:\\Users\\user\\AppData\\Local...}, goog:chromeOptions: {debuggerAddress: localhost:64136}, networkConnectionEnabled: false, pageLoadStrategy: normal, platformName: WINDOWS, proxy: Proxy(), se:cdp: ws://localhost:64136/devtoo..., se:cdpVersion: 108.0.5359.125, setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:credBlob: true, webauthn:extension:largeBlob: true, webauthn:virtualAuthenticators: true}\nSession ID: 24e4ec0f5764587daa32b6838b0a8a3d\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:200)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:133)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:53)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:184)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.invokeExecute(DriverCommandExecutor.java:167)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:142)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:541)\r\n\tat org.openqa.selenium.remote.ElementLocation$ElementFinder$2.findElement(ElementLocation.java:162)\r\n\tat org.openqa.selenium.remote.ElementLocation.findElement(ElementLocation.java:60)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:365)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:357)\r\n\tat org.openqa.selenium.support.pagefactory.DefaultElementLocator.findElement(DefaultElementLocator.java:70)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:39)\r\n\tat com.sun.proxy.$Proxy23.getWrappedElement(Unknown Source)\r\n\tat org.openqa.selenium.interactions.PointerInput$Origin.asArg(PointerInput.java:260)\r\n\tat org.openqa.selenium.interactions.PointerInput$Move.encode(PointerInput.java:209)\r\n\tat org.openqa.selenium.interactions.Sequence.encode(Sequence.java:73)\r\n\tat org.openqa.selenium.interactions.Sequence.toJson(Sequence.java:82)\r\n\t... 78 more\r\n",
  "status": "failed"
});
formatter.match({
  "location": "TopMenuTest.iCallSelectMenuMethodAndPassTheMenuShowAllComponents()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "TopMenuTest.iCanVerifyTheTextComponents()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 38478700,
  "error_message": "org.openqa.selenium.NoSuchWindowException: no such window: target window already closed\nfrom unknown error: web view not found\n  (Session info: chrome\u003d108.0.5359.125)\nBuild info: version: \u00274.6.0\u0027, revision: \u002779f1c02ae20\u0027\nSystem info: os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_121\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCommand: [24e4ec0f5764587daa32b6838b0a8a3d, screenshot {}]\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 108.0.5359.125, chrome: {chromedriverVersion: 108.0.5359.71 (1e0e3868ee06..., userDataDir: C:\\Users\\user\\AppData\\Local...}, goog:chromeOptions: {debuggerAddress: localhost:64136}, networkConnectionEnabled: false, pageLoadStrategy: normal, platformName: WINDOWS, proxy: Proxy(), se:cdp: ws://localhost:64136/devtoo..., se:cdpVersion: 108.0.5359.125, setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:credBlob: true, webauthn:extension:largeBlob: true, webauthn:virtualAuthenticators: true}\nSession ID: 24e4ec0f5764587daa32b6838b0a8a3d\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:200)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:133)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:53)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:184)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.invokeExecute(DriverCommandExecutor.java:167)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:142)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:541)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:596)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:600)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.getScreenshotAs(RemoteWebDriver.java:331)\r\n\tat com.tutorialsninja.utility.Utility.getScreenshot(Utility.java:341)\r\n\tat com.tutorialsninja.Hooks.tearDown(Hooks.java:26)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.lang.reflect.Method.invoke(Method.java:498)\r\n\tat cucumber.runtime.Utils$1.call(Utils.java:40)\r\n\tat cucumber.runtime.Timeout.timeout(Timeout.java:16)\r\n\tat cucumber.runtime.Utils.invoke(Utils.java:34)\r\n\tat cucumber.runtime.java.JavaHookDefinition.execute(JavaHookDefinition.java:60)\r\n\tat cucumber.runtime.Runtime.runHookIfTagsMatch(Runtime.java:224)\r\n\tat cucumber.runtime.Runtime.runHooks(Runtime.java:212)\r\n\tat cucumber.runtime.Runtime.runAfterHooks(Runtime.java:206)\r\n\tat cucumber.runtime.model.CucumberScenario.run(CucumberScenario.java:46)\r\n\tat cucumber.runtime.junit.ExecutionUnitRunner.run(ExecutionUnitRunner.java:102)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:63)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:18)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:238)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:63)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:236)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:53)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:229)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:309)\r\n\tat cucumber.runtime.junit.FeatureRunner.run(FeatureRunner.java:70)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:95)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:38)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:238)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:63)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:236)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:53)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:229)\r\n\tat org.junit.internal.runners.statements.RunAfters.evaluate(RunAfters.java:27)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:309)\r\n\tat cucumber.api.junit.Cucumber.run(Cucumber.java:100)\r\n\tat org.junit.runner.JUnitCore.run(JUnitCore.java:160)\r\n\tat com.intellij.junit4.JUnit4IdeaTestRunner.startRunnerWithArgs(JUnit4IdeaTestRunner.java:69)\r\n\tat com.intellij.rt.junit.IdeaTestRunner$Repeater$1.execute(IdeaTestRunner.java:38)\r\n\tat com.intellij.rt.execution.junit.TestsRepeater.repeat(TestsRepeater.java:11)\r\n\tat com.intellij.rt.junit.IdeaTestRunner$Repeater.startRunnerWithArgs(IdeaTestRunner.java:35)\r\n\tat com.intellij.rt.junit.JUnitStarter.prepareStreamsAndStart(JUnitStarter.java:235)\r\n\tat com.intellij.rt.junit.JUnitStarter.main(JUnitStarter.java:54)\r\n",
  "status": "failed"
});
});