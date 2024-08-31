const sumOfPairs = require('.');

describe('sumOfPairs', () => {
    test('should return the correct sum for arrays of equal length', () => {
        expect(sumOfPairs([4, 6, 7], [8, 1, 9])).toEqual([12, 7, 16]);
    });

    test('should handle cases where the first array is longer', () => {
        expect(sumOfPairs([4, 6, 7, 10], [8, 1, 9])).toEqual([12, 7, 16, 10]);
    });

    test('should handle cases where the second array is longer', () => {
        expect(sumOfPairs([4, 6], [8, 1, 9])).toEqual([12, 7, 9]);
    });

    test('should handle cases where both arrays are empty', () => {
        expect(sumOfPairs([], [])).toEqual([]);
    });

    test('should handle cases where one array is empty', () => {
        expect(sumOfPairs([4, 6, 7], [])).toEqual([4, 6, 7]);
        expect(sumOfPairs([], [8, 1, 9])).toEqual([8, 1, 9]);
    });

    test('should return an empty array if both inputs are empty', () => {
        expect(sumOfPairs([], [])).toEqual([]);
    });

    test('should handle negative numbers correctly', () => {
        expect(sumOfPairs([-1, -2, -3], [1, 2, 3])).toEqual([0, 0, 0]);
    });
});
