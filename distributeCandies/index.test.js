const distributeCandies = require(".");

describe("distributeCandies", () => {
    test("testcase1", () => {
        expect(distributeCandies([1, 1, 2, 2, 3, 3])).toBe(3);
    });
    test("testcase2", () => {
        expect(distributeCandies([1, 1, 2, 3])).toBe(2);
    });
    test("testcase3", () => {
        expect(distributeCandies([6, 6, 6, 6])).toBe(1);
    });
});
