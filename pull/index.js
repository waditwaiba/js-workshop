/**
 * Task description: Removes all given values from array using values array for equality comparisons.
 * Expected Result: ['a', 'b', 'c', 'a', 'b', 'c'] => ['b', 'b']
 * Task Complexity: 1 of 5
 * @param {Array} array - The array to query.
 * @param {Array} values - The values to remove.
 * @returns {Array}
 */
const pull = (array, values) => {
   let result = []
   for (let i of array) {
      if (!values.includes(i)) {
         result.push(i)
      }

   }
   return result
}

module.exports = pull;
