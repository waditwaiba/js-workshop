const swapCase = require('.');

describe('swapCase', () => {
    test('should swap the case of each letter in the string', () => {
        expect(swapCase('AaBbc')).toBe('aAbBC');
    });

    test('should handle an empty string', () => {
        expect(swapCase('')).toBe('');
    });

    test('should handle a string with only lowercase letters', () => {
        expect(swapCase('abcdef')).toBe('ABCDEF');
    });

    test('should handle a string with only uppercase letters', () => {
        expect(swapCase('ABCDEF')).toBe('abcdef');
    });

    test('should handle a string with mixed casing', () => {
        expect(swapCase('Hello World')).toBe('hELLO wORLD');
    });

    test('should handle a string with numbers and special characters', () => {
        expect(swapCase('Hello123!')).toBe('hELLO123!');
    });
});
