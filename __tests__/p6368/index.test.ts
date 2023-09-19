import { exportWarp } from "../../src/p6368";
import { word1 } from "./case1.data";

describe.skip("6368. Find the Divisibility Array of a String", () => {
  test.each([
    ["998244353", 3, [1, 1, 0, 0, 0, 1, 1, 0, 0]],
    ["1010", 10, [0, 1, 0, 1]],
    // Wrong Answer
    ["86217457695827338571", 8, [1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]],
    // Time Limit Exceeded
    [word1, 999999958, [1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]],
  ])("case", (word, m, expected) => {
    const result = exportWarp(word, m);
    expect(result).toStrictEqual(expected);
  });
});
