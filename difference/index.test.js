const difference = require(".");

describe("difference", () => {
  test("should return the difference between two arrays", () => {
    expect(difference([2, 1], [2, 3])).toEqual([1]);
  });

  test("should return an empty array if there is no difference", () => {
    expect(difference([1, 2, 3], [1, 2, 3])).toEqual([]);
  });

  test("should handle arrays with duplicate elements", () => {
    expect(difference([1, 1, 2, 2], [2, 2])).toEqual([1, 1]);
  });

  test("should return all elements from array1 if array2 is empty", () => {
    expect(difference([1, 2, 3], [])).toEqual([1, 2, 3]);
  });

  test("should return an empty array if array1 is empty", () => {
    expect(difference([], [1, 2, 3])).toEqual([]);
  });

  test("should handle arrays with different data types", () => {
    expect(difference([1, "a", true], [1, "b", false])).toEqual(["a", true]);
  });
});
