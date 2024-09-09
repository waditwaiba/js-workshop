const toPairs = require(".");

describe("toPairs", () => {
  test("should return an array of key-value pairs from the object", () => {
    expect(toPairs({ a: 1, b: 2, c: 3 })).toEqual([
      ["a", 1],
      ["b", 2],
      ["c", 3],
    ]);
  });

  test("should return an empty array for an empty object", () => {
    expect(toPairs({})).toEqual([]);
  });

  test("should handle objects with mixed data types", () => {
    expect(toPairs({ a: 1, b: "two", c: true })).toEqual([
      ["a", 1],
      ["b", "two"],
      ["c", true],
    ]);
  });
});
