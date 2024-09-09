const pull = require(".");

describe("pull", () => {
  test("should remove all given values from the array", () => {
    expect(pull(["a", "b", "c", "a", "b", "c"], ["a", "c"])).toEqual([
      "b",
      "b",
    ]);
  });

  test("should return the original array if no values to remove are specified", () => {
    expect(pull(["a", "b", "c"], [])).toEqual(["a", "b", "c"]);
  });

  test("should return an empty array if all values are removed", () => {
    expect(pull(["a", "b", "c"], ["a", "b", "c"])).toEqual([]);
  });

  test("should handle arrays with numbers", () => {
    expect(pull([1, 2, 3, 1, 2, 3], [1, 3])).toEqual([2, 2]);
  });

  test("should handle arrays with mixed types", () => {
    expect(pull([1, "two", 3, "four", 5], [1, "four"])).toEqual(["two", 3, 5]);
  });

  test("should not modify the original array", () => {
    const original = ["a", "b", "c", "a", "b", "c"];
    const result = pull(original, ["a", "c"]);
    expect(result).toEqual(["b", "b"]);
    expect(original).toEqual(["a", "b", "c", "a", "b", "c"]);
  });

  test("should handle removal of values not present in the array", () => {
    expect(pull(["a", "b", "c"], ["d", "e"])).toEqual(["a", "b", "c"]);
  });
});
