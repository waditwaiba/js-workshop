const drop = require(".");

describe('drop', () => {
    test('should drop the first n elements from the array', () => {
        expect(drop([1, 2, 3, 4], 2)).toEqual([3, 4]);
    });

    test('should return an empty array if n is greater than or equal to the array length', () => {
        expect(drop([1, 2, 3], 3)).toEqual([]);
        expect(drop([1, 2, 3], 4)).toEqual([]);
    });

    test('should return the original array if n is 0', () => {
        expect(drop([1, 2, 3], 0)).toEqual([1, 2, 3]);
    });

    test('should handle negative n by returning the original array', () => {
        expect(drop([1, 2, 3], -1)).toEqual([1, 2, 3]);
    });

    test('should return an empty array if the input array is empty', () => {
        expect(drop([], 2)).toEqual([]);
    });

    test('should handle arrays with different data types', () => {
        expect(drop([1, 'a', true, null], 2)).toEqual([true, null]);
    });

    test('should throw an error if the first argument is not an array', () => {
        expect(() => drop('not an array', 2)).toThrow();
    });

    test('should throw an error if the second argument is not a number', () => {
        expect(() => drop([1, 2, 3], 'not a number')).toThrow();
    });
});