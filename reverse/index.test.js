const reverse = require('.');

describe('reverse', () => {
    test('should reverse an array of numbers', () => {
        expect(reverse([1, 2, 3])).toEqual([3, 2, 1]);
    });

    test('should reverse an array of strings', () => {
        expect(reverse(['a', 'b', 'c'])).toEqual(['c', 'b', 'a']);
    });

    test('should return an empty array when given an empty array', () => {
        expect(reverse([])).toEqual([]);
    });

    test('should return the same array for a single-element array', () => {
        expect(reverse([1])).toEqual([1]);
    });

    test('should reverse an array with mixed types', () => {
        expect(reverse([1, 'two', { three: 3 }, [4]])).toEqual([[4], { three: 3 }, 'two', 1]);
    });

    test('should handle arrays with null and undefined values', () => {
        expect(reverse([null, undefined, 1, 2])).toEqual([2, 1, undefined, null]);
    });

    test('should not modify the original array', () => {
        const original = [1, 2, 3];
        const reversed = reverse(original);
        expect(reversed).toEqual([3, 2, 1]);
        expect(original).toEqual([1, 2, 3]);
    });

    test('should throw an error if the argument is not an array', () => {
        expect(() => reverse('not an array')).toThrow();
        expect(() => reverse(123)).toThrow();
        expect(() => reverse({ key: 'value' })).toThrow();
    });

    test('should maintain the reference of nested objects and arrays', () => {
        const nestedObj = { key: 'value' };
        const nestedArr = [1, 2];
        const original = [1, nestedObj, nestedArr];
        const reversed = reverse(original);
        expect(reversed[2]).toBe(1);
        expect(reversed[1]).toBe(nestedArr);
        expect(reversed[0]).toBe(nestedObj);
    });
});