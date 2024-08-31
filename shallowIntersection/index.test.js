import { intersection } from '.';

describe('intersection', () => {
    test('should return the shallow intersection of two objects', () => {
        expect(intersection({ a: 1, b: 2 }, { c: 1, b: 2 })).toEqual({ b: 2 });
    });

    test('should return an empty object if there is no intersection', () => {
        expect(intersection({ a: 1, b: 2 }, { c: 3, d: 4 })).toEqual({});
    });

    test('should return the correct intersection when multiple keys match', () => {
        expect(intersection({ a: 1, b: 2, c: 3 }, { a: 1, b: 2, d: 4 })).toEqual({ a: 1, b: 2 });
    });

    test('should return an empty object if one of the objects is empty', () => {
        expect(intersection({}, { a: 1, b: 2 })).toEqual({});
        expect(intersection({ a: 1, b: 2 }, {})).toEqual({});
    });

    test('should handle objects with mixed data types', () => {
        expect(intersection({ a: 1, b: '2', c: true }, { a: 1, b: 2, c: true })).toEqual({ a: 1, c: true });
    });

    test('should handle objects with null or undefined values', () => {
        expect(intersection({ a: null, b: undefined, c: 3 }, { a: null, b: 2, c: 3 })).toEqual({ a: null, c: 3 });
    });
});
