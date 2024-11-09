/**
  * Task description: Write a method that to converts upper case letters to lower case, and lower case letters to upper case.
  * Expected Result: (AaBbc) => "aAbBC"
  * Task Complexity: 1 of 5
*/
const swapCase = (str) => {
  return str.split("").map((char) => char === char.toUpperCase() ? char.toLowerCase() : char.toUpperCase()).join("");
}

module.exports = swapCase;
