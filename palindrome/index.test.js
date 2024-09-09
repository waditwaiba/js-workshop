const palindromes = require(".");

describe("palindromes", () => {
  test("works with single words", () => {
    expect(palindromes("racecar")).toBe(true);
  });
  test.skip("works with punctuation ", () => {
    expect(palindromes("racecar!")).toBe(true);
  });
  test.skip("works with upper-case letters ", () => {
    expect(palindromes("Racecar!")).toBe(true);
  });
  test.skip("works with multiple words", () => {
    expect(palindromes("A car, a man, a maraca.")).toBe(true);
  });
  test.skip("works with numbers in a string", () => {
    expect(palindromes("rac3e3car")).toBe(true);
  });
  test.skip("works with unevenly spaced numbers in a string", () => {
    expect(palindromes("r3ace3car")).toBe(false);
  });
});
