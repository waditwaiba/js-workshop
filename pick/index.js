/**
 * Task description: Creates an object composed of the picked object properties.
 * Expected Result: { 'a': 1, 'b': '2', 'c': 3 }, ['a', 'c'] => { 'a': 1, 'c': 3 }
 * Task Complexity: 1 of 5
 * @param {Object} data - The source object
 * @param {Array} paths - TThe property paths to pick.
 * @returns {Object}
 */
const pick = (data, paths) => {
    return Object.fromEntries(Object.entries(data).filter((k) => paths.includes(k[0])))
}

module.exports = pick;