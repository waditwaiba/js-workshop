const count = require('.');

describe('count', () => {
    test('should count the occurrences of a substring in a string', () => {
        expect(count("The quick brown fox jumps over the lazy dog", 'the')).toBe(2);
    });

    test('should handle case-insensitive matching', () => {
        expect(count("The quick brown fox jumps over the lazy dog", 'The')).toBe(2);
    });

    test('should return 0 when substring is not found', () => {
        expect(count("The quick brown fox jumps over the lazy dog", 'cat')).toBe(0);
    });

    test('should return 0 when searching for an empty string', () => {
        expect(count("The quick brown fox jumps over the lazy dog", '')).toBe(0);
    });

    test('should handle empty string input', () => {
        expect(count("", 'the')).toBe(0);
    });

    test('should handle special characters in the substring', () => {
        expect(count("The quick brown fox jumps over the lazy dog! Isn't it amazing?", '!')).toBe(1);
    });
});
