const sum = require(".")

describe("sum", () => {
    it("should add two numbers", () => {
        expect(sum(2, 3)).toEqual(5)
    })
})