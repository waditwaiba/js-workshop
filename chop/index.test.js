const chop = require('.');

describe('chop', () => {
    test('should chop a string into chunks of the specified length', () => {
        expect(chop('javascript', 2)).toEqual(["ja", "va", "sc", "ri", "pt"]);
    });

    test('should handle chunk length greater than string length', () => {
        expect(chop('js', 5)).toEqual(['js']);
    });

    test('should handle empty string', () => {
        expect(chop('', 3)).toEqual([]);
    });

    test('should handle chunk length of 1', () => {
        expect(chop('hello', 1)).toEqual(['h', 'e', 'l', 'l', 'o']);
    });

    test('should handle chunk length equal to string length', () => {
        expect(chop('test', 4)).toEqual(['test']);
    });

    test('should handle string with special characters', () => {
        expect(chop('hello!@#', 3)).toEqual(['hel', 'lo!', '@#']);
    });
});
