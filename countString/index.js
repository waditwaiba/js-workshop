/**
  * Task description: Write a method to count the occurrence of a substring in a string
  * Expected Result: (The quick brown fox jumps over the lazy dog) => 2
  * Task Complexity: 1 of 5
*/

const count = (str, wordToFind) => {
  let arrayOfString = str.split(" ");
  let count = 0;
  for (let word of arrayOfString) {
    if (word.toUpperCase() === wordToFind.toUpperCase()) {
      count = count + 1;
    }
  }
  return count
}
module.exports = count;