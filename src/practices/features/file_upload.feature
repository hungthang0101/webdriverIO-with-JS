Feature: File Upload Functionality
  As a user
  User want to be able to upload a file
  So that User can share it with others

  Background: User go to the upload page
    Given User am on the file upload page

  Scenario: Successful file upload
    When User select a file to upload
    And User click on the upload button
    Then User should see a success message
    And the file should be uploaded successfully

  Scenario: Empty file upload
    When User click on the upload button without selecting a file
    Then User should see an error message
    And the file should not be uploaded

  Scenario: Unsupported file type
    When User select a file with an unsupported file type
    And User click on the upload button
    Then User should see an error message
    And the file should not be uploaded