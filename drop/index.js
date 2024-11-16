/**
 * Task description: Write a method to creates a slice of array with n elements dropped from the beginning.
 * Expected Result: [1, 2, 3, 4] => [3, 4]
 * Task Complexity: 1 of 5
 * @param {Array} array - Array of any elements
 * @param {Number} elementToDrop - number of elements to drop.
 * @returns {Array}
 */
const drop = (array, elementsToDrop) => {
    if (elementsToDrop >= 0) {
        return array.slice(elementsToDrop);
    } else {
        return array;
    }
}

module.exports = drop;

