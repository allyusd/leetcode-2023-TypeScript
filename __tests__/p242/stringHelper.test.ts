import { StringHelper } from "../../src/p242/stringHelper";

describe("242. Valid Anagram - stringHelper", () => {
  test.each([
    // normal situation
    ["anagram", 3, "anaram"],
    // remove first
    ["anagram", 0, "nagram"],
    // remove last
    ["anagram", 6, "anagra"],
  ])("case", (str, index, expected) => {
    expect(StringHelper.removeCharByIndex(str, index)).toStrictEqual(expected);
  });
});
