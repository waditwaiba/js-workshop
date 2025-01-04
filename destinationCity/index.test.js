const destinationCity = require(".");

describe("destinationCity", () => {
    test("test1", () => {
        expect(destinationCity([["London", "New York"], ["New York", "Lima"], ["Lima", "Sao Paulo"]])).toBe("Sao Paulo");
    });
    test("test2", () => {
        expect(destinationCity([["B", "C"], ["D", "B"], ["C", "A"]])).toBe("A");
    });
    test("test3", () => {
        expect(destinationCity([["A", "Z"]])).toBe("Z");
    });
});

