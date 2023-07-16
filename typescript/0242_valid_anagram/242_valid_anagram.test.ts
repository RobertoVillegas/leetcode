import { isAnagram } from "./242_valid_anagram";

describe("0242 Is Anagram", () => {
  it("should return true if the two strings are anagrams of each other", () => {
    expect(isAnagram("anagram", "nagaram")).toBe(true);
    expect(isAnagram("rat", "car")).toBe(false);
  });
});