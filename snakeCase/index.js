/**
  * Task description: Write a method to convert a string into snakeCase case.
  * Expected Result: (Robin Singh from USA) => "robin-singh-from-usa"
  * Task Complexity: 1 of 5
*/
const snakeCase = (str) => {
  return str.toLowerCase().replace(/[^a-z0-9 -]/g, '').replace(/\s+/g, '-').replace(/^-+|-+$/g, '');
}

module.exports = snakeCase
