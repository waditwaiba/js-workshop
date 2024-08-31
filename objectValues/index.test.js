const values = require('.');

describe('values', () => {
    test('should return an array of values from the object', () => {
        expect(values({ a: 1, b: 2, c: 3 })).toEqual([1, 2, 3]);
    });

    test('should return an empty array for an empty object', () => {
        expect(values({})).toEqual([]);
    });

    test('should handle objects with mixed data types', () => {
        expect(values({ a: 1, b: 'two', c: true })).toEqual([1, 'two', true]);
    });

    test('should return an array of values for objects with null or undefined values', () => {
        expect(values({ a: null, b: undefined, c: 3 })).toEqual([null, undefined, 3]);
    });

    test('should ignore non-enumerable properties', () => {
        const obj = { a: 1, b: 2 };
        Object.defineProperty(obj, 'c', { value: 3, enumerable: false });
        expect(values(obj)).toEqual([1, 2]);
    });

    test('should handle objects with symbolic keys (ignoring symbols)', () => {
        const sym = Symbol('d');
        const obj = { a: 1, b: 2 };
        obj[sym] = 4;
        expect(values(obj)).toEqual([1, 2]);
    });
});
