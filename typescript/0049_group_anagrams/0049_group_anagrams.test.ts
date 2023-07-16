import { groupAnagrams } from "./0049_group_anagrams";

describe("0049 Group Anagrams Test", () => {
  it("should return the anagrams together in any order (sorted since I don't know how to use vitest properly)", () => {
    expect(
      groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"])
    ).toStrictEqual([["bat"], ["nat", "tan"], ["ate", "eat", "tea"]]);
    expect(groupAnagrams([""])).toStrictEqual([[""]]);
    expect(groupAnagrams(["a"])).toStrictEqual([["a"]]);
  });
});