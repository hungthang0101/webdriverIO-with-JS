Feature: Verify the Patient Invitation

    Background: Go to the login page
        Given I am on the login page
        When I login with account which has email test444@gmail.com and password hello12345

    # Scenario Outline: Verify the Invitation Patient UI
    #     When I click to the Invitation page
    # Then I see the title on <xpath> which is displayed <title> and color is <color> and font size is <fontSize>

    # Examples:
    #     | xpath                                                      | title                             | color             | fontSize |
    #     | //div[@class="PatientInvitation_title__1e812"]             | Invite Patient                    | #2e65f3           | 36       |
    #     | //p[normalize-space()="Step 1: Enter Patient Information"] | Step 1: Enter Patient Information | rgb(46, 101, 243) | 18       |
    #     | //p[normalize-space()="Step 2: Send Invitation"]           | Step 2: Send Invitation           | rgb(46, 101, 243) | 18       |

    Scenario Outline: Verify Enter Patient Information validation
        When I click to the Invitation page
        And I input value <value> to <fieldXPath>
        Then I see the message of the <fieldXPath> which is <message>

        Examples:
            | fieldXPath                 | value       | message                   |
            | //input[@id='patientName'] |             | This field is required    |
            | //input[@id='email']       |             | This field is required    |
            | //input[@id='email']       | example.com | not a valid email         |
            | //input[@id='phoneNumber'] | example.com | This field is required    |
            | //input[@id='phoneNumber'] | example.com | Phone number is not valid |
