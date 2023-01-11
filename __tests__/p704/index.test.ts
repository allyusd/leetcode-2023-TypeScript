import { exportWarp } from "../../src/p704";

describe("704. Binary Search", () => {
  test.each([
    [[-1, 0, 3, 5, 9, 12], 9, 4],
    [[-1, 0, 3, 5, 9, 12], 2, -1],
    // 空陣列
    [[], 2, -1],
    // 第一個
    [[-1, 0, 3, 5, 9, 12], -1, 0],
    // 最後一個
    [[-1, 0, 3, 5, 9, 12], 12, 5],
    // 正中間
    [[-1, 0, 3, 5, 9], 3, 2],
  ])("case", (nums, target, expected) => {
    const result = exportWarp(nums, target);
    expect(result).toStrictEqual(expected);
  });
});
