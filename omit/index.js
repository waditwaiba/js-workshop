/**
 * Task description: Omit the properties from the source object
 * Expected Result: {a :1 ,b:2 : c:3} => {b : 2}
 * Task Complexity: 1 of 5
 * @param {object} data - The source object
 * @param {Array} paths - The property paths to omit.
 * @returns {Object}
 */
const omit = (data, paths) => {
    let Result = Object.fromEntries(Object.entries(data).filter((k) => !paths.includes(k[0])))
    console.log(Result);
    return Result
}

module.exports = omit
