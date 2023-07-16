import { isPalindrome } from "./0009_palindrome_number";

describe("0009 Palindrome Number Test", () => {
  it("should return true if the input is a palindrome", () => {
    test("isPalindrome", () => {
      const input = 121;
      expect(isPalindrome(input)).toStrictEqual(true);
    });

    test("isPalindrome", () => {
      const input = -121;
      expect(isPalindrome(input)).toStrictEqual(false);
    });

    test("isPalindrome", () => {
      const input = 10;
      expect(isPalindrome(input)).toStrictEqual(false);
    });

    test("isPalindrome", () => {
      const input = -101;
      expect(isPalindrome(input)).toStrictEqual(false);
    });
  });
});