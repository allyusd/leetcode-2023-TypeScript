import { exportWarp } from "../../src/p2540";

describe("2540. Minimum Common Value", () => {
  test.each([
    [[1, 2, 3], [2, 4], 2],
    [[1, 2, 3, 6], [2, 3, 4, 5], 2],
    // first
    [[2, 3, 6], [2, 3, 4, 5], 2],
    // Wrong Answer
    [
      [6, 13, 18, 18, 28, 34, 37, 39, 46, 50, 52, 54, 62, 63, 65, 66, 75, 80, 97, 98],
      [10, 13, 13, 19, 27, 33, 40, 41, 43, 46, 56, 61, 69, 72, 78, 79, 82, 88, 91, 94],
      13,
    ],
  ])("case %#", (nums1, nums2, expected) => {
    const result = exportWarp(nums1, nums2);
    expect(result).toStrictEqual(expected);
  });
});
