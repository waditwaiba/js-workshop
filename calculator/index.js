const add = function (n1, n2) {
    return n1+n2;
};

const subtract = function (n1, n2) {
    return n1-n2;
};

const sum = function (num) {
    let result=0;
    for (let i = 0; i < array.length; i++) {
        result += num[i];
    }
    return result
};

const multiply = function (number) {
    // let sum;
    // const result = number.forEach(element => element*sum);
    const result = number.reduce((accu,currentValue)=>accu*currentValue,1)
    return result;
};

const power = function (n1, n2) {
    return n1**n2;
};

const factorial = function (num) {
    // let result=1;
    // for (let i = 2; i < num; i++) {
    //     result=result*i;
    // }
    // return result;
    
    if (num<=1) {
        return 1;
    }
    return num * factorial(num-1);
    
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
