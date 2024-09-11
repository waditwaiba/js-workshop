const add = function (n1, n2) {
    return n1 + n2;

};

const subtract = function (n1, n2) {
    return n1 - n2;

};

const sum = function () {

};

const multiply = function (number) {
    let result = 1
    for (let n of number) {
        result = result * n
    }
    return result

};

const power = function (n1, n2) {
    return n1 ** n2;


};

const factorial = function (num) {
    if (num == 0)
        return 1;
    return num * factorial(num - 1);

};

// Do not edit below this line
module.exports = {
    add,
    subtract,
    sum,
    multiply,
    power,
    factorial
};
