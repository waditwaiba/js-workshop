const repeatString = require('.')

describe('repeatString', () => {
    test('repeats the string', () => {
        expect(repeatString('hey', 3)).toEqual('heyheyhey');
    });
    test('repeats the string many times', () => {
        expect(repeatString('hello', 10)).toEqual('hellohellohellohellohellohellohellohellohellohello');
    });
    test('repeats the string 1 times', () => {
        expect(repeatString('hi', 1)).toEqual('hi');
    });
    test('repeats the string 0 times', () => {
        expect(repeatString('bye', 0)).toEqual('');
    });
    test('returns ERROR with negative numbers', () => {
        expect(repeatString('goodbye', -1)).toEqual('ERROR');
    });
    test('works with blank strings', () => {
        expect(repeatString('', 10)).toEqual('');
    });
});