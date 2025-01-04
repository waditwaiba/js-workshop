/**
 * Task description: write a function to find the difference between two arrays
 * Expected Result: [2, 1], [2, 3] => [1]
 * Task Complexity: 2 of 5
 * @param {Array} array1 - array1.
 * @param {Array} array2 - array2.
 * @returns {Array}
 */
const difference = (array1, array2) => {
    let result = []
    for (let i = 0; i < array1.length; i++) {
        if (!array2.includes(array1[i])) {
            result.push(array1[i])
        }
    }
    return result;
}


module.exports = difference
