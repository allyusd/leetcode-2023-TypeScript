import { exportWarp } from "../../src/p6368";

describe("6368. Find the Divisibility Array of a String", () => {
  test.each([
    ["998244353", 3, [1, 1, 0, 0, 0, 1, 1, 0, 0]],
    ["1010", 10, [0, 1, 0, 1]],
  ])("case", (word, m, expected) => {
    const result = exportWarp(word, m);
    expect(result).toStrictEqual(expected);
  });
});
