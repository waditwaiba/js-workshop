/**
 * Task description: write a function to find the difference between two arrays
 * Expected Result: [2, 1], [2, 3] => [1]
 * Task Complexity: 2 of 5
 * @param {Array} array1 - array1.
 * @param {Arrarray1.lengthay} array2 - array2.
 * @returns {Array}
 */
const difference = (array1, array2) => {
    let result = []
    let max = Math.max(array1.length, array2.length)
    for (let i = 0; i < max; i++) {
        if (array1[i] != array2[i]) {
            result.push(array1[i])
        }
    }
    return result
}

module.exports = difference
