Feature: Product Listing and Sorting
    Background: Go to the login page
        Given User login successful with normal account

    Scenario Outline: Verify the presence of all expected products on the product listing page
        Then User see <productName> which is displayed on the product listing page

    Examples:
        | productName                       |
        | Sauce Labs Backpack               |
        | Sauce Labs Bike Light             |
        | Sauce Labs Bolt T-Shirt           |
        | Sauce Labs Fleece Jacket          |
        | Sauce Labs Onesie                 |
        | Test.allTheThings() T-Shirt (Red) |

    
    Scenario Outline: Verify the sorting functionality (e.g., by name, price) works as expected
        When User select to <sortItem>
        Then User see product list which is sorted corresponding with <sortItem> option

    Examples:
        | sortItem            |
        | Name (A to Z)       |
        | Name (Z to A)       |
        | Price (low to high) |
        | Price (high to low) |
