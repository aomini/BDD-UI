Feature: Sailracing Homepage
  As a Sailracing user
  I want to be able to see Shop now and next day delivery

  Scenario: A user visiting the homepage should see show now and next day delivery
    Given A user visits sr.hbgdevlab.com
    Then the user should see the following texts
      | OPTION                            |
      | Shop Now                          |
      | Free shipping & Next day delivery |
      | TOTAL COMMITMENT                  |
    When the user clicks "Sign in" option
# Then the user should see the following texts
#   | TEXTS             |
#   | Sign in           |
#   | continue to Gmail |
# When the user enters "email" into the "email input" field
# And the user cliks on "Next"
# Then the user should see "Couldn't find your Google Account" error message
