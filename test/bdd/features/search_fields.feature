Feature: Flight search

Scenario: Flight search should show error messages if all required fields are empty
  Given I open "https://www.jetblue.com/" url
  And I accept cookies
  When I click Search Button
  Then Error messages for empty Destination City, Departure Date, Return Date fields are displayed

Scenario Outline: Page titles <URL>
  Given I open "<URL>" url
  Then Page title should be "<Title>"
  When I wait "3" seconds

  Examples:
  | URL                             | Title                                                                      |
  | https://www.jetblue.com/        | Airline Tickets, Flights & Airfare: Book Direct - Official Site \| JetBlue |
  | https://www.jetblue.com/flights | Flights \| JetBlue                                                         |