Feature: Check Login page
  Background: Go to the login page
    Given I am on the login page

  Scenario: Verify UI the login page
    Then I see the login label is Login into your account
    And  I see the email address and password textbox are displayed
    And I see the a Login button has value which is LOGIN
    And Forgot Password hyperlink with value is Forgot password?

  Scenario Outline: Verify the Login validation
    When I input <username> and <password> of account
    And I click on Login button
    Then I should see a validation message which is This field is required

    Examples:
      | username          | password   |
      |                   | hello12345 |
      | test123@gmail.com |            |
      |                   |            |

  Scenario: Verify the Forgot Password hyperlink
    When I click on the Forgot Password hyperlink
    Then I see the Forgot Password page is displayed

  Scenario Outline: Verify logic Login function
    When I input <username> and <password> of account
    And I click on Login button
    Then I should see a error message which is <message>

    Examples:
      | username          | password   | message                                                         |
      | test123@gmail.com | hello12346 | Either email address or password is incorrect. Please try again |
      | test124@gmail.com | hello12345 | Either email address or password is incorrect. Please try again |
