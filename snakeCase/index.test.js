const snakeCase = require(".");

describe("snakeCase", () => {
  test("should convert a string to snake case", () => {
    expect(snakeCase("Robin Singh from USA.")).toBe("robin-singh-from-usa");
  });

  test("should handle strings with multiple spaces and special characters", () => {
    expect(snakeCase("Hello   World! How are you?")).toBe(
      "hello-world-how-are-you",
    );
  });

  test("should handle strings with leading and trailing spaces", () => {
    expect(snakeCase("  Leading and trailing spaces  ")).toBe(
      "leading-and-trailing-spaces",
    );
  });

  test("should handle single word strings", () => {
    expect(snakeCase("Singh")).toBe("singh");
  });

  test("should handle empty string", () => {
    expect(snakeCase("")).toBe("");
  });
});
