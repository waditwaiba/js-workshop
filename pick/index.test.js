const pick = require(".");

describe("pick", () => {
  test("should pick specified properties from the object", () => {
    expect(pick({ a: 1, b: 2, c: 3 }, ["a", "c"])).toEqual({ a: 1, c: 3 });
  });

  test("should return an empty object if no paths are specified", () => {
    expect(pick({ a: 1, b: 2, c: 3 }, [])).toEqual({});
  });

  test("should return an object with only existing paths", () => {
    expect(pick({ a: 1, b: 2, c: 3 }, ["a", "d"])).toEqual({ a: 1 });
  });

  test("should return an empty object if none of the paths exist in the object", () => {
    expect(pick({ a: 1, b: 2, c: 3 }, ["d", "e"])).toEqual({});
  });

  test("should handle objects with mixed data types", () => {
    expect(pick({ a: 1, b: "two", c: true }, ["b"])).toEqual({ b: "two" });
  });
});
//