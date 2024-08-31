const printEvenNumbers = require('.'); // Assuming the function is in a file named printEvenNumbers.js

describe('printEvenNumbers', () => {
    // Helper function to capture console.log output
    const captureConsoleLog = (fn) => {
        const originalConsoleLog = console.log;
        let output = '';
        console.log = (msg) => { output += msg + '\n'; };
        fn();
        console.log = originalConsoleLog;
        return output.trim();
    };

    test('should print even numbers up to 15', () => {
        const output = captureConsoleLog(() => printEvenNumbers(15));
        expect(output).toBe('0,2,4,6,8,10,12,14');
    });

    test('should print even numbers up to 10', () => {
        const output = captureConsoleLog(() => printEvenNumbers(10));
        expect(output).toBe('0,2,4,6,8');
    });

    test('should print only 0 for size 1', () => {
        const output = captureConsoleLog(() => printEvenNumbers(1));
        expect(output).toBe('0');
    });

    test('should print nothing for size 0', () => {
        const output = captureConsoleLog(() => printEvenNumbers(0));
        expect(output).toBe('');
    });

    test('should handle large sizes', () => {
        const output = captureConsoleLog(() => printEvenNumbers(100));
        const expectedOutput = Array.from({ length: 50 }, (_, i) => i * 2).join(',');
        expect(output).toBe(expectedOutput);
    });

    test('should throw an error for negative sizes', () => {
        expect(() => printEvenNumbers(-5)).toThrow();
    });

    test('should throw an error for non-integer sizes', () => {
        expect(() => printEvenNumbers(10.5)).toThrow();
    });

    test('should throw an error for non-number sizes', () => {
        expect(() => printEvenNumbers('15')).toThrow();
        expect(() => printEvenNumbers([])).toThrow();
        expect(() => printEvenNumbers({})).toThrow();
    });
});