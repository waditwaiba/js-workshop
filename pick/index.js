/**
 * Task description: Creates an object composed of the picked object properties.
 * Expected Result: { 'a': 1, 'b': '2', 'c': 3 }, ['a', 'c'] => { 'a': 1, 'c': 3 }
 * Task Complexity: 1 of 5
 * @param {Object} data - The source object
 * @param {Array} paths - TThe property paths to pick.
 * @returns {Object}
 */
const pick = (data, paths) => {
    let result = {};
    for (let key of paths) {
        if (key in data) {
            result[key] = data[key]
        }
    }
    return result;
}

module.exports = pick;