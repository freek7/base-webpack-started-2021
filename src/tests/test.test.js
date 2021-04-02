export const sum = (a, b) => a + b;

describe("Test sum fn", () => {
    test("1 + 2 equal 3", () => {
        expect(sum(1, 2)).toBe(3);
    });
});
