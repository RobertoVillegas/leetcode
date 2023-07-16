import { isValid } from "./0020_valid_parentheses";

describe("0020 Valid Parentheses Test", () => {
  it("should return true if the input string is valid ", () => {
    test("isValid", () => {
      const input = "()";
      expect(isValid(input)).toStrictEqual(true);
    });

    test("isValid", () => {
      const input = "()[]{}";
      expect(isValid(input)).toStrictEqual(true);
    });

    test("isValid", () => {
      const input = "(]";
      expect(isValid(input)).toStrictEqual(false);
    });

    test("isValid", () => {
      const input = "([)]";
      expect(isValid(input)).toStrictEqual(false);
    });

    test("isValid", () => {
      const input = "{[]}";
      expect(isValid(input)).toStrictEqual(true);
    });
  });
});