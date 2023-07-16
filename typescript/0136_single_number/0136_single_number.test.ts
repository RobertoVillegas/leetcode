import { singleNumber } from "./0136_single_number";

describe("0136 Single Number Test", () => {
  it("should return the number that appears only once in the array", () => {
    test("singleNumber", () => {
      const input = [2, 2, 1];
      expect(singleNumber(input)).toStrictEqual(1);
    });

    test("singleNumber", () => {
      const input = [4, 1, 2, 1, 2];
      expect(singleNumber(input)).toStrictEqual(4);
    });

    test("singleNumber", () => {
      const input = [1];
      expect(singleNumber(input)).toStrictEqual(1);
    });
  });
});