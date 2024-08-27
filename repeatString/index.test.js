const repeatString = require('.')

describe('repeatString', () => {
    test('repeats the string', () => {
        expect(repeatString('hey', 3)).toEqual('heyheyhey');
    });
    test.skip('repeats the string many times', () => {
        expect(repeatString('hello', 10)).toEqual('hellohellohellohellohellohellohellohellohellohello');
    });
    test.skip('repeats the string 1 times', () => {
        expect(repeatString('hi', 1)).toEqual('hi');
    });
    test.skip('repeats the string 0 times', () => {
        expect(repeatString('bye', 0)).toEqual('');
    });
    test.skip('returns ERROR with negative numbers', () => {
        expect(repeatString('goodbye', -1)).toEqual('ERROR');
    });
    test.skip('works with blank strings', () => {
        expect(repeatString('', 10)).toEqual('');
    });
});