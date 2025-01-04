/** 
  * Task description: Write a method that to converts upper case letters to lower case, and lower case letters to upper case.
  * Expected Result: (AaBbc) => "aAbBC"
  * Task Complexity: 1 of 5
*/
  const swapCase = (str) => {
    // Use the Array.prototype.map() method to swap cases
    return str
      .split('')  // Split the string into an array of characters
      .map(char => {
        if (char === char.toUpperCase()) {
          return char.toLowerCase();  // Convert uppercase to lowercase
        } else {
          return char.toUpperCase();  // Convert lowercase to uppercase
        }
      })
      .join('');  // Join the array back into a string
  }
  module.exports = swapCase;




