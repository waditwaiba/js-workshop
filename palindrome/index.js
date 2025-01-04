const palindromes = function (str) {
    let result = true
    for (let i = str.length; i < 0; i++) {

        result.push(str[i])
    }

    return result;

};

// Do not edit below this line
module.exports = palindromes;
