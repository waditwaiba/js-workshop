const fill = require(".");

describe("fill", () => {
  test("should create an array of given size filled with the specified value", () => {
    expect(fill(3, "a")).toEqual(["a", "a", "a"]);
  });

  test("should handle numeric values", () => {
    expect(fill(4, 42)).toEqual([42, 42, 42, 42]);
  });

  test("should handle boolean values", () => {
    expect(fill(2, true)).toEqual([true, true]);
  });

  test("should return an empty array if size is 0", () => {
    expect(fill(0, "a")).toEqual([]);
  });
});
