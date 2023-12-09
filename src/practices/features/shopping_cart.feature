
Feature: Shopping Cart Functionality
    Background: Go to the login page
        Given User login successful with normal account
            And User open shopping cart page with some product are added


    Scenario: Verify that a product can be removed from the cart
        When User click on Remove button
        Then User see the product which is removed

    Scenario: Verify the checkout process, including entering user information
        When User go to checkout page
            And User enter Fisrt Name is <firstName>, Last Name is <lastName> and Zip Code is <zipCode>
        Then User can see the validation message which is <message>

    Examples:
        | firstName | lastName | zipCode | message                        |
        | blank     | valid    | valid   | Error: First Name is required  |
        | valid     | blank    | valid   | Error: Last Name is required   |
        | valid     | valid    | blank   | Error: Postal Code is required |

    @Run
    Scenario: Verify the final order summary page
        When User go to checkout page
            And User enter Fisrt Name is valid, Last Name is valid and Zip Code is valid
        Then User see product which is displayed correctly on the final order summary page
            And User is nevigated to the checkout complete page