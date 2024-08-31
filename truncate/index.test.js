const truncate = require('.');

describe('truncate', () => {
    test('should extract the specified number of characters from the beginning of the string', () => {
        expect(truncate('Robin Singh', 4)).toBe('Robi');
    });

    test('should handle a number of characters greater than the string length', () => {
        expect(truncate('Hi', 10)).toBe('Hi');
    });

    test('should handle extracting zero characters', () => {
        expect(truncate('Hello', 0)).toBe('');
    });

    test('should handle extracting characters from an empty string', () => {
        expect(truncate('', 3)).toBe('');
    });

    test('should handle extracting characters with a negative number', () => {
        expect(truncate('Hello', -2)).toBe('Hello'); // Negative number should be treated as 0
    });
});
