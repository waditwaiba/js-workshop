
const palindromes = require(".");

describe("palindromes", () => {
  test("works with single words", () => {
    expect(palindromes("racecar")).toBe(true);
  });
  test("works with numbers in a string", () => {
    expect(palindromes("rac3e3car")).toBe(true);
  });
  test("works with unevenly spaced numbers in a string", () => {
    expect(palindromes("r3ace3car")).toBe(true);
  });
});