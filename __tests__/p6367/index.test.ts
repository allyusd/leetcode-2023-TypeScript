import { exportWarp } from "../../src/p6367";

describe.skip("6367. Find the Maximum Number of Marked Indices", () => {
  test.each([
    [[3, 5, 2, 4], 2],
    [[9, 2, 5, 4], 4],
    [[7, 6, 8], 0],
  ])("case", (nums, expected) => {
    const result = exportWarp(nums);
    expect(result).toStrictEqual(expected);
  });
});
