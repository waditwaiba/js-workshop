/**
 * Task description: Get all the values from the source object
 * Expected Result: {a :1 ,b:2 : c:3} => [1,2,3]
 * Task Complexity: 1 of 5
 * @param {object} data - The source object
 * @returns {Array}
 */
const values = (data) => {
    const result = []
    for (let values in data) {
        result.push(data[values])
    }
    return result;
}

module.exports = values;
