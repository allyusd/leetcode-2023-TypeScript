import { exportWarp } from "../../src/p2559";

describe("2559. Count Vowel Strings in Ranges", () => {
  test.each([
    [
      ["aba", "bcb", "ece", "aa", "e"],
      [
        [0, 2],
        [1, 4],
        [1, 1],
      ],
      [2, 3, 0],
    ],
    [
      ["a", "e", "i"],
      [
        [0, 2],
        [0, 1],
        [2, 2],
      ],
      [3, 2, 1],
    ],
  ])("case %#", (words, queries, expected) => {
    const result = exportWarp(words, queries);
    expect(result).toStrictEqual(expected);
  });
});
