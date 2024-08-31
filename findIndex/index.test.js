const findIndex = require('.'); // Assuming the function is in a file named findIndex.js

describe('findIndex', () => {
    const testArray = ['a', 'b', 'c', 'd'];

    test('should return the correct index for an existing element', () => {
        expect(findIndex(testArray, 'c')).toBe(2);
    });

    test('should return -1 for a non-existing element', () => {
        expect(findIndex(testArray, 'z')).toBe(-1);
    });

    test('should return the index of the first occurrence for duplicate elements', () => {
        const arrayWithDuplicates = ['a', 'b', 'c', 'b', 'd'];
        expect(findIndex(arrayWithDuplicates, 'b')).toBe(1);
    });

    test('should work with arrays of numbers', () => {
        const numberArray = [1, 2, 3, 4, 5];
        expect(findIndex(numberArray, 3)).toBe(2);
    });

    test('should work with arrays of mixed types', () => {
        const mixedArray = [1, 'two', { three: 3 }, [4]];
        expect(findIndex(mixedArray, { three: 3 })).toBe(2);
    });

    test('should return -1 for an empty array', () => {
        expect(findIndex([], 'anything')).toBe(-1);
    });

    test('should handle null and undefined elements', () => {
        const arrayWithNull = [null, undefined, 'a', 'b'];
        expect(findIndex(arrayWithNull, null)).toBe(0);
        expect(findIndex(arrayWithNull, undefined)).toBe(1);
    });

    test('should throw an error if the first argument is not an array', () => {
        expect(() => findIndex('not an array', 'a')).toThrow();
    });
});