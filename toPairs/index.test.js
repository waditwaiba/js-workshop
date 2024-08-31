const toPairs = require('.');

describe('toPairs', () => {
    test('should return an array of key-value pairs from the object', () => {
        expect(toPairs({ a: 1, b: 2, c: 3 })).toEqual([['a', 1], ['b', 2], ['c', 3]]);
    });

    test('should return an empty array for an empty object', () => {
        expect(toPairs({})).toEqual([]);
    });

    test('should handle objects with mixed data types', () => {
        expect(toPairs({ a: 1, b: 'two', c: true })).toEqual([['a', 1], ['b', 'two'], ['c', true]]);
    });

    test('should return an array of pairs for objects with null or undefined values', () => {
        expect(toPairs({ a: null, b: undefined, c: 3 })).toEqual([['a', null], ['b', undefined], ['c', 3]]);
    });

    test('should ignore non-enumerable properties', () => {
        const obj = { a: 1, b: 2 };
        Object.defineProperty(obj, 'c', { value: 3, enumerable: false });
        expect(toPairs(obj)).toEqual([['a', 1], ['b', 2]]);
    });

    test('should handle objects with symbolic keys (ignoring symbols)', () => {
        const sym = Symbol('d');
        const obj = { a: 1, b: 2 };
        obj[sym] = 4;
        expect(toPairs(obj)).toEqual([['a', 1], ['b', 2]]);
    });
});
