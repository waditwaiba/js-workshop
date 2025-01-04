const camelize = require('.');

describe('camelize', () => {
    test('should convert a string to camel case', () => {
        expect(camelize('JavaScript exercises')).toBe('JavascriptExercises');
    });

    test('should handle a string with multiple spaces', () => {
        expect(camelize('  javascript   exercises  ')).toBe('JavascriptExercises');
    });

    test('should handle a single word string', () => {
        expect(camelize('javascript')).toBe('Javascript');
    });

    test('should handle an empty string', () => {
        expect(camelize('')).toBe('');
    });
});
