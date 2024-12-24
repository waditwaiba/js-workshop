/**
 * Reverses a given string.
 * @param {string} str - The string to reverse
 * @returns {string} The reversed string
 */

const reverseString = function (string) {
    console.log("string.split('')", string.split(""))
    console.log("string.split('').reverse()", string.split("").reverse())
    console.log("string.split('').reverse().join('')", string.split("").reverse().join(""))
    return string.split("").reverse().join("");
};

// Do not edit below this line
module.exports = reverseString;
