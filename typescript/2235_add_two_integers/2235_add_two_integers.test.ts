import { sum } from "./2235_add_two_integers";

describe("2235 Add Two Integers Test", () => {
  it("should return the sum of two integers", () => {
    expect(sum(12, 5)).toStrictEqual(17);
    expect(sum(-10, 4)).toStrictEqual(-6);
  });
});