const multi_combine = require('.');

describe('multi_combine', () => {
    test('should combine elements from 3 arrays as per the example', () => {
        const characters = ['A', 'B', 'C'];
        const numbers = ['1', '2', '3', '4', '5', '6', '7', '8'];
        const vowels = ['a', 'e', 'i', 'o', 'u'];
        expect(multi_combine(characters, numbers, vowels)).toBe('A1aB2eC3i4o5u678');
    });

    test('should handle arrays of different lengths', () => {
        const characters = ['X', 'Y'];
        const numbers = ['1', '2', '3'];
        const vowels = ['a', 'e'];
        expect(multi_combine(characters, numbers, vowels)).toBe('X1aY2e3');
    });

    test('should handle empty arrays', () => {
        const characters = [];
        const numbers = ['1', '2', '3'];
        const vowels = ['a', 'e'];
        expect(multi_combine(characters, numbers, vowels)).toBe('1a2e3');
    });

    test('should handle arrays with non-string elements', () => {
        const characters = ['A', 'B', 'C'];
        const numbers = [1, 2, 3, 4];
        const vowels = ['a', 'e', 'i'];
        expect(multi_combine(characters, numbers, vowels)).toBe('A1aB2eC3i4');
    });

    test('should return an empty string if all arrays are empty', () => {
        expect(multi_combine([], [], [])).toBe('');
    });


    test('should handle arrays with undefined or null elements', () => {
        const characters = ['A', undefined, 'C'];
        const numbers = [1, null, 3];
        const vowels = ['a', 'e', 'i'];
        expect(multi_combine(characters, numbers, vowels)).toBe('A1aeC3i');
    });

    test('should handle arrays with special characters', () => {
        const characters = ['@', '#', '$'];
        const numbers = ['1', '2', '3'];
        const vowels = ['!', '?', '&'];
        expect(multi_combine(characters, numbers, vowels)).toBe('@1!#2?$3&');
    });
});