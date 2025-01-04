const reverseString = require(".");

describe("reverseString", () => {
  test("reverses single word", () => {
    expect(reverseString("hello")).toEqual("olleh");
  });

  test("reverses multiple words", () => {
    expect(reverseString("hello there")).toEqual("ereht olleh");
  });
});
