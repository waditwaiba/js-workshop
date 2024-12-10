/**
  * Task description: Write a method to count the occurrence of a substring in a string
  * Expected Result: ("The quick brown fox jumps over the lazy dog", "The") => 2
  * Task Complexity: 1 of 5
*/

const count = (str, wordToFind) => {
  const words = str.toLowerCase().split(" ")
  return words.filter(word => word === wordToFind.toLowerCase()).length
}

module.exports = count;
