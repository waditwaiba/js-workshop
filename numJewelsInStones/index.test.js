const numJewelsInStones = require(".");

describe("numJewelsInStones", () => {
    test("test1", () => {
        expect(numJewelsInStones("aA", "aAAbbbb")).toBe(3);
    });
    test("test2", () => {
        expect(numJewelsInStones("z", "ZZ")).toBe(0);
    });

});

