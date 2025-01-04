/** 
  * Task description: Write a method that reverts input array 
  * Expected Result: [1, 2, 3] => [3, 2, 1] 
  * Task Complexity: 1 of 5 
  * @param {Array} array - Array of any elements 
  * @returns {Array} 
*/
const reverse = (array) => {
  let res = [];
  for (let i = array.length - 1; i >= 0; i--) {

    res.push(array[i]);
  }
  return res;
}

module.exports = reverse