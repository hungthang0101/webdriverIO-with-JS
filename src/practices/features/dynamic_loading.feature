Feature: Dynamic Loading
  As a user
  I want to see dynamically loaded content
  So that I can interact with it


  Background: Go to the dynamic loading page
    Given I am on the dynamic loading page

  Scenario: Wait for content to load
    When I click on the "Example 1: Element on page that is hidden" link
    And I click on the start button
    Then I should see the hidden content after it is loaded
    And I should see a loading spinner until the content is loaded


  Scenario: Wait for content to render
    When I click on the "Example 2: Element rendered after the fact" link
    And I click on the start button
    Then I should see the dynamically rendered content after it is loaded
