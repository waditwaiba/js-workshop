/**
  * Task description: Write a method that to add up each element in the same position and
    create a new array containing the sum of each pair. 
    If the arrays are of different size. then consider the non existing elements to be zero
  * Expected Result: ([4, 6, 7],[8, 1, 9]) => [12, 7, 16]
  * Task Complexity: 1 of 5
*/
const sumOfPairs = (num1, num2) => {
  let result = [];
  for (let i = 0; i < Math.max(num1.length, num2.length); i++) {
    result.push((num1[i] || 0) + (num2[i] || 0));
  }
  return result
}

module.exports = sumOfPairs;
