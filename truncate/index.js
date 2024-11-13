/**
  * Task description: Write a method to extract a specified number of characters from a string.
  * Expected Result: (Robin Singh,4) => "Robi"
  * Task Complexity: 1 of 5
*/
const truncate = (str, char) => {
  return str.slice(0, char)
}

module.exports = truncate;
