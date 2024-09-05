const add = function (n1, n2) {
    return n1 + n2
};

const subtract = function (n1, n2) {
    return n1 - n2
};

const sum = function (nums) {
    let sum = 0
    for (let num of nums) {
        sum += num

    }

    return sum
}

const multiply = function (product) {
    let multiply = 1
    for (let n of product) {
        multiply = multiply * n
    }
    return multiply
};

const power = function (p1,p2) {
    return p1 ** p2
};

const factorial = function (n) {
      let ans = 1; 
        if(n === 0)
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
