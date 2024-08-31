const keys = require('.');

describe('keys', () => {
    test('should return an array of property names for a simple object', () => {
        expect(keys({ 'a': 1, 'b': 2, 'c': 3 })).toEqual(['a', 'b', 'c']);
    });

    test('should return an empty array for an empty object', () => {
        expect(keys({})).toEqual([]);
    });

    test('should ignore non-enumerable properties', () => {
        const obj = {};
        Object.defineProperty(obj, 'a', { value: 1, enumerable: false });
        Object.defineProperty(obj, 'b', { value: 2, enumerable: true });
        expect(keys(obj)).toEqual(['b']);
    });

    test('should return an array of property names for an object with mixed data types', () => {
        expect(keys({ 'a': 1, 'b': 'two', 'c': true })).toEqual(['a', 'b', 'c']);
    });

    test('should return an array of property names for an object with symbol properties (ignoring symbols)', () => {
        const sym = Symbol('d');
        const obj = { 'a': 1, 'b': 2, 'c': 3 };
        obj[sym] = 4;
        expect(keys(obj)).toEqual(['a', 'b', 'c']);
    });

    test('should return an array of property names for inherited properties (ignoring inherited properties)', () => {
        const parent = { a: 1 };
        const child = Object.create(parent);
        child.b = 2;
        child.c = 3;
        expect(keys(child)).toEqual(['b', 'c']);
    });

    test('should handle objects with null or undefined values', () => {
        expect(keys({ 'a': null, 'b': undefined, 'c': 3 })).toEqual(['a', 'b', 'c']);
    });
});
