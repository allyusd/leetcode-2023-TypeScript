import { exportWarp } from "../../src/p242";

describe("242. Valid Anagram", () => {
  test.each([
    ["anagram", "nagaram", true],
    ["rat", "car", false],
    // 長度不同的話
    ["abc", "a", false],
    // 只有一個字母的話
    ["a", "a", true],
  ])("case", (s, t, expected) => {
    const result = exportWarp(s, t);
    expect(result).toStrictEqual(expected);
  });
});
