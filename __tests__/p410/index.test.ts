import { exportWarp } from "../../src/p410";

describe("410. Split Array Largest Sum", () => {
  test.each([
    [[7, 2, 5, 10, 8], 2, 18],
    [[1, 2, 3, 4, 5], 2, 9],
    // Wrong Answer
    [[1, 4, 4], 3, 4],
  ])("case", (nums, k, expected) => {
    const result = exportWarp(nums, k);
    expect(result).toStrictEqual(expected);
  });
});
