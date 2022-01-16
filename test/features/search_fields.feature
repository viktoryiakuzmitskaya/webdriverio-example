Feature: Search Fields

Scenario: Flight search should show error messages if all required fields are empty
  Given I open "https://www.jetblue.com/" url
  And I accept cookies
  When I click Search Button
  Then Error messages for empty Destination City, Departure Date, Return Date fields are displayed

Scenario Outline: To, Depart, Return fields should be empty by default
  Given I open "<URL>" url
  Then To, Depart, Return fields should be empty

  Examples:
  | URL                             | 
  | https://www.jetblue.com/        | 
  | https://www.jetblue.com/flights | 