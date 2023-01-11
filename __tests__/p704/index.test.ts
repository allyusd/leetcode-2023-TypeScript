import { exportWarp } from "../../src/p704";

describe("704. Binary Search", () => {
  test.each([
    [[-1, 0, 3, 5, 9, 12], 9, 4],
    [[-1, 0, 3, 5, 9, 12], 2, -1],
  ])("case", (nums, target, expected) => {
    const result = exportWarp(nums, target);
    expect(result).toStrictEqual(expected);
  });
});
