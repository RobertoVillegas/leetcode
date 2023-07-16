import { search } from "./0704_binary_search";

describe("0704 Binary Search Test", () => {
  it("should return the index of the target number", () => {
    expect(search([-1, 0, 3, 5, 9, 12], 9)).toBe(4);
  });

  it("should return -1 if the target number does not exist in the array", () => {
    expect(search([-1, 0, 3, 5, 9, 12], 2)).toBe(-1);
  });
});
