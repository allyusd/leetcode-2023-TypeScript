import { exportWarp } from "../../src/p2574";

describe("2574. Left and Right Sum Differences", () => {
  test.each([
    [
      [10, 4, 8, 3],
      [15, 1, 11, 22],
    ],
    [[1], [0]],
  ])("case", (nums, expected) => {
    const result = exportWarp(nums);
    expect(result).toStrictEqual(expected);
  });
});
