const convertToCelsius = function (fehrenheit) {
    return Number(((fehrenheit - 32) * 5 / 9).toFixed(1));

};

const convertToFahrenheit = function (celsius) {
    return Number(((celsius * 9 / 5) + 32).toFixed(1));
};

// Do not edit below this line
module.exports = {
    convertToCelsius,
    convertToFahrenheit
};
