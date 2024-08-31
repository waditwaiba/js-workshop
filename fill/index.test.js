const fill = require(".");

describe('fill', () => {
    test('should create an array of given size filled with the specified value', () => {
        expect(fill(3, 'a')).toEqual(['a', 'a', 'a']);
    });

    test('should handle numeric values', () => {
        expect(fill(4, 42)).toEqual([42, 42, 42, 42]);
    });

    test('should handle boolean values', () => {
        expect(fill(2, true)).toEqual([true, true]);
    });

    test('should handle object values', () => {
        const obj = { key: 'value' };
        const result = fill(3, obj);
        expect(result).toEqual([obj, obj, obj]);
        // Check that the same object reference is used
        expect(result[0]).toBe(obj);
        expect(result[1]).toBe(obj);
        expect(result[2]).toBe(obj);
    });

    test('should return an empty array if size is 0', () => {
        expect(fill(0, 'a')).toEqual([]);
    });

    test('should handle large array sizes', () => {
        const result = fill(1000, 'x');
        expect(result.length).toBe(1000);
        expect(result.every(item => item === 'x')).toBe(true);
    });

    test('should throw an error if arraySize is negative', () => {
        expect(() => fill(-1, 'a')).toThrow();
    });

    test('should throw an error if arraySize is not an integer', () => {
        expect(() => fill(3.5, 'a')).toThrow();
    });

    test('should throw an error if arraySize is not a number', () => {
        expect(() => fill('3', 'a')).toThrow();
    });
});