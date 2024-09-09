const keys = require(".");

describe("keys", () => {
  test("should return an array of property names for a simple object", () => {
    expect(keys({ a: 1, b: 2, c: 3 })).toEqual(["a", "b", "c"]);
  });

  test("should return an empty array for an empty object", () => {
    expect(keys({})).toEqual([]);
  });

  test("should return an array of property names for an object with mixed data types", () => {
    expect(keys({ a: 1, b: "two", c: true })).toEqual(["a", "b", "c"]);
  });
});
