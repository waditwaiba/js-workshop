const { convertToCelsius, convertToFahrenheit } = require('.')

describe('convertToCelsius', () => {
    test('works', () => {
        expect(convertToCelsius(32)).toEqual(0);
    });

});

describe('convertToFahrenheit', () => {
    test('works', () => {
        expect(convertToFahrenheit(0)).toEqual(32);
    });

    test('works with negatives', () => {
        expect(convertToFahrenheit(-10)).toEqual(14);
    });
});
