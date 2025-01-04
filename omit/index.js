/**
 * Task description: Omit the properties from the source object
 * Expected Result: {a :1 ,b:2 : c:3} => {b : 2}
 * Task Complexity: 1 of 5
 * @param {object} data - The source object
 * @param {Array} paths - The property paths to omit.
 * @returns {Object}
 */
const omit = (data, paths) => {
    const result = {};
    for (let key in data) {
        const value = data[key];
        if (!paths.includes(key)) {
            result[key] = data[key];
        }
    }
    return result
}

module.exports = omit
