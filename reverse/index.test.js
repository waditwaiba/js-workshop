const reverse = require(".");

describe("reverse", () => {
  test("should reverse an array of numbers", () => {
    expect(reverse([1, 2, 3])).toEqual([3, 2, 1]);
  });

  test("should reverse an array of strings", () => {
    expect(reverse(["a", "b", "c"])).toEqual(["c", "b", "a"]);
  });

  test("should return an empty array when given an empty array", () => {
    expect(reverse([])).toEqual([]);
  });

  test("should return the same array for a single-element array", () => {
    expect(reverse([1])).toEqual([1]);
  });
});
