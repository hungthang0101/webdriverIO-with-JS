Feature: Login Functionality
    Background: Go to the login page
        Given User am on the login page

    Scenario Outline: Verify successful login with valid credentials.
        When User log in with <username> and <password>
        Then User log in successfully

    Examples:
        | username                   | password       |
        | normal account             | valid password |
        | problem account            | valid password |
        | performance glitch account | valid password |


    Scenario Outline: Verify unsuccessful login with invalid credentials.
        When User log in with <username> and <password>
        Then User log in unsuccessfully and <message> display

    Examples:
        | username       | password       | message                                             |
        | locked account | valid password | Epic sadface: Sorry, this user has been locked out. |


    Scenario Outline: Verify error message displayed for incorrect login attempts.
        When User log in with <username> and <password>
        Then The error message is displayed with content is <message>

    Examples:
        | username        | password         | message                                                                   |
        | blank           | blank            | Epic sadface: Username is required                                        |
        | blank           | valid password   | Epic sadface: Username is required                                        |
        | normal account  | blank            | Epic sadface: Password is required                                        |
        | invalid account | invalid password | Epic sadface: Username and password do not match any user in this service |
        | invalid account | valid password   | Epic sadface: Username and password do not match any user in this service |
        | normal account  | invalid password | Epic sadface: Username and password do not match any user in this service |


