const omit = require('.');

describe('omit', () => {
    test('should omit specified properties from the object', () => {
        expect(omit({ a: 1, b: 2, c: 3 }, ['a', 'c'])).toEqual({ b: 2 });
    });

    test('should return the original object if no paths are specified', () => {
        expect(omit({ a: 1, b: 2, c: 3 }, [])).toEqual({ a: 1, b: 2, c: 3 });
    });

    test('should return an empty object if all paths are omitted', () => {
        expect(omit({ a: 1, b: 2, c: 3 }, ['a', 'b', 'c'])).toEqual({});
    });

    test('should ignore paths that do not exist in the object', () => {
        expect(omit({ a: 1, b: 2, c: 3 }, ['d', 'e'])).toEqual({ a: 1, b: 2, c: 3 });
    });

    test('should handle objects with mixed data types', () => {
        expect(omit({ a: 1, b: 'two', c: true }, ['b'])).toEqual({ a: 1, c: true });
    });

    test('should not modify the original object', () => {
        const original = { a: 1, b: 2, c: 3 };
        const result = omit(original, ['a']);
        expect(result).toEqual({ b: 2, c: 3 });
        expect(original).toEqual({ a: 1, b: 2, c: 3 }); // original object remains unchanged
    });
});
