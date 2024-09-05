const add = function (n1, n2) {
    return n1 + n2;
};

const subtract = function (n1, n2) {
    return n1 - n2;

};

const sum = function (arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++)
        sum += arr[i]
    return sum;
};

const multiply = function (arr) {
    let multiply = 1;
    for (let n of arr)
        multiply = multiply * n
    return multiply;
};

const power = function (n1, n2) {
    return Math.pow(n1, n2)
};

const factorial = function (n) {

    let ans = 1;

    if (n === 0)
        return 1;
    for (let i = 2; i <= n; i++)
        ans = ans * i;
    return ans;

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
