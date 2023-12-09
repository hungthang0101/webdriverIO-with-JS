
Feature: Navigation Functionality
    Background: Go to the login page
        Given User login successful with normal account

    Scenario Outline: Verify successful navigate
        When User nevigate to <nevigationPage>
        Then User is accessed to <urlToNevigate>

    Examples:
        | nevigationPage | urlToNevigate                            |
        | All Items      | https://www.saucedemo.com/inventory.html |
        | About          | https://saucelabs.com/                   |


    Scenario: Verify Logout
        When User click on Logout
        Then User can not be accessed to Inventory page

