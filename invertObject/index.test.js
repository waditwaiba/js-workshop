const invert = require('.');

describe('invert', () => {
    test('should invert the keys and values of an object', () => {
        expect(invert({ 'a': 1, 'b': 2, 'c': 3 })).toEqual({ '1': 'a', '2': 'b', '3': 'c' });
    });

    test('should handle objects with string values', () => {
        expect(invert({ 'a': 'x', 'b': 'y', 'c': 'z' })).toEqual({ 'x': 'a', 'y': 'b', 'z': 'c' });
    });

    test('should handle objects with duplicate values by overwriting keys', () => {
        expect(invert({ 'a': 1, 'b': 2, 'c': 1 })).toEqual({ '1': 'c', '2': 'b' });
    });

    test('should handle an empty object', () => {
        expect(invert({})).toEqual({});
    });

    test('should handle objects with boolean values', () => {
        expect(invert({ 'a': true, 'b': false })).toEqual({ 'true': 'a', 'false': 'b' });
    });

    test('should handle objects with mixed data types', () => {
        expect(invert({ 'a': 1, 'b': '2', 'c': true })).toEqual({ '1': 'a', '2': 'b', 'true': 'c' });
    });

    test('should handle objects with null and undefined values', () => {
        expect(invert({ 'a': null, 'b': undefined })).toEqual({ 'null': 'a', 'undefined': 'b' });
    });
});
