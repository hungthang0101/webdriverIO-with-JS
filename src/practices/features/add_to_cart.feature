
Feature: Add to Cart Functionality
    Background: Go to the login page
        Given User login successful with normal account


    Scenario: Verify that a product can be added to the cart and the cart's updated count after adding a product
        When User click on Add to cart button
        Then Add to cart button is changed to Remove button
            And User can see cart icon which is updated the value counter
            And The product is added to cart which is displayed correctly
