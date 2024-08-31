const fromPairs = require('.');

describe('fromPairs', () => {
    test('should convert array of pairs into an object', () => {
        expect(fromPairs([['a', 1], ['b', 2]])).toEqual({ a: 1, b: 2 });
    });

    test('should handle an empty array', () => {
        expect(fromPairs([])).toEqual({});
    });

    test('should handle arrays with multiple data types', () => {
        expect(fromPairs([['a', 1], ['b', 'two'], ['c', true]])).toEqual({ a: 1, b: 'two', c: true });
    });

    test('should overwrite values when keys are duplicated', () => {
        expect(fromPairs([['a', 1], ['a', 2]])).toEqual({ a: 2 });
    });

    test('should handle nested arrays as values', () => {
        expect(fromPairs([['a', [1, 2, 3]], ['b', [4, 5, 6]]])).toEqual({ a: [1, 2, 3], b: [4, 5, 6] });
    });

    test('should handle objects as values', () => {
        expect(fromPairs([['a', { x: 10 }], ['b', { y: 20 }]])).toEqual({ a: { x: 10 }, b: { y: 20 } });
    });

    test('should handle pairs with undefined values', () => {
        expect(fromPairs([['a', undefined], ['b', 2]])).toEqual({ a: undefined, b: 2 });
    });

    test('should handle pairs with null values', () => {
        expect(fromPairs([['a', null], ['b', 2]])).toEqual({ a: null, b: 2 });
    });
});
