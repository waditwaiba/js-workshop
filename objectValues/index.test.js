const values = require(".");

describe("values", () => {
  test("should return an array of values from the object", () => {
    expect(values({ a: 1, b: 2, c: 3 })).toEqual([1, 2, 3]);
  });

  test("should return an empty array for an empty object", () => {
    expect(values({})).toEqual([]);
  });

  test("should handle objects with mixed data types", () => {
    expect(values({ a: 1, b: "two", c: true })).toEqual([1, "two", true]);
  });
});
