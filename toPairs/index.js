/**
  * Task description: Write a method that returns an array composed of nested array
  * Expected Result: {a : 1, b :2, c:3} => [['a', 1], ['b', 2], ['c', 3]]
  * Task Complexity: 2 of 5
  * @param {Object} obj - The object to query.
  * @returns {Array}
*/
const toPairs = (obj) => {
  return Object.entries(obj)
}

module.exports = toPairs