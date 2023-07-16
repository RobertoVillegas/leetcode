import { twoSum } from "./0001_two_sum";

describe("0001 Two Sum Test", () => {
  it("should return the indices of two numbers such that they add up to a specific target", () => {
    test("twoSum", () => {
      const input = [2, 7, 11, 15];
      expect(twoSum(input, 9)).toStrictEqual([0, 1]);
    });

    test("twoSum", () => {
      const input = [3, 2, 4];
      expect(twoSum(input, 6)).toStrictEqual([1, 2]);
    });
  });
});