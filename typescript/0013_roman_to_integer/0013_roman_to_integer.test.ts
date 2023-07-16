import { romanToInt } from "./0013_roman_to_integer";

describe("0013 Roman to Integer Test", () => {
  it("should return the integer value of the roman numeral", () => {
    test("romanToInt", () => {
      expect(romanToInt("III")).toStrictEqual(3);
    });

    test("romanToInt", () => {
      expect(romanToInt("LVIII")).toStrictEqual(58);
    });

    test("romanToInt", () => {
      expect(romanToInt("MCMXCIV")).toStrictEqual(1994);
    });
  });
});