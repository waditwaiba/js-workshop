/**
 * Task description: Write a method to return the element index in the array.
 * Expected Result: ['a','b','c','d'] ,c => 2
 * Task Complexity: 1 of 5
 * @param {Array} array - Array of any elements
 * @param {Number} arrayElement- arrayElement.
 * @returns {Array}
 */
const findIndex = (array, element) => {
    return array.indexOf(element);
}


module.exports = findIndex;