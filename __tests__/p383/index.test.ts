import { exportWarp } from "../../src/p383";

describe("383. Ransom Note", () => {
  test.each([
    ["a", "b", false],
    ["aa", "ab", false],
    ["aa", "aab", true],
  ])("case %#", (ransomNote, magazine, expected) => {
    const result = exportWarp(ransomNote, magazine);

    expect(result).toStrictEqual(expected);
  });
});
