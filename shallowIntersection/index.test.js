const intersection = require(".")

describe("intersection", () => {
  test("should return the shallow intersection of two objects", () => {
    expect(intersection({ a: 1, b: 2 }, { c: 1, b: 2 })).toEqual({ b: 2 });
  });

  test("should return an empty object if there is no intersection", () => {
    expect(intersection({ a: 1, b: 2 }, { c: 3, d: 4 })).toEqual({});
  });

  test("should return the correct intersection when multiple keys match", () => {
    expect(intersection({ a: 1, b: 2, c: 3 }, { a: 1, b: 2, d: 4 })).toEqual({
      a: 1,
      b: 2,
    });
  });
});
