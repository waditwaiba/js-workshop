const camelize = require('.');

describe('camelize', () => {
    test('should convert a string to camel case', () => {
        expect(camelize('JavaScript exercises')).toBe('JavaScriptExercises');
    });

    test('should handle a string with multiple spaces', () => {
        expect(camelize('  javascript   exercises  ')).toBe('JavaScriptExercises');
    });

    test('should handle a single word string', () => {
        expect(camelize('javascript')).toBe('Javascript');
    });

    test('should handle an empty string', () => {
        expect(camelize('')).toBe('');
    });

    test('should handle strings with mixed casing', () => {
        expect(camelize('jAvAscript EXERCISES')).toBe('JavaScriptExercises');
    });

    test('should handle strings with special characters and numbers', () => {
        expect(camelize('java-script 2024 exercises!')).toBe('JavaScript2024Exercises!');
    });
});
