/**
 * Task description: Creates an object composed of the inverted keys and values of object.
 * Expected Result: { 'a': 1, 'b': 2, 'c': 3 } => { '1': 'a', '2': 'b', '3': 'c' }
 * Task Complexity: 1 of 5
 * @param {Object} data - The object to invert.
 * @returns {Object} - Returns the new inverted object.
 */
const invert = (data) => {
    return Object.fromEntries(Object.entries(data).map(([key,value])=>[value,key]))
}

module.exports = invert;