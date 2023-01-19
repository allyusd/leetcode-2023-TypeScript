import { exportWarp } from "../../src/p242";

describe("242. Valid Anagram", () => {
  test.each([
    ["anagram", "nagaram", true],
    ["rat", "car", false],
  ])("case", (s, t, expected) => {
    const result = exportWarp(s, t);
    expect(result).toStrictEqual(expected);
  });
});
