const add = function (n1, n2) {
    return n1 + n2;
};

const subtract = function (n1, n2) {
    return n1 - n2;
};

const sum = function (num) {
    let Result = 0;
    for (let i = 0; i < num.length; i++) {
        Result += num[i];
    }
    console.log(Result);
    return Result
};

const multiply = function (number) {
    let Result = number.reduce(((acc, num) => acc * num), 1)
    console.log(Result);
    return Result

};

const power = function (n1, n2) {
    let Result = n1 ** n2;
    return Result
};

const factorial = function (num) {
    if (num == 0 || num == 1) {
        return 1;
    }
    let Result = num * factorial(num - 1);
    return Result
}

// Do not edit below this line
module.exports = {
    add,
    subtract,
    sum,
    multiply,
    power,
    factorial
};
