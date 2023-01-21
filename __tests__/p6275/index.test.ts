import { exportWarp } from "../../src/p6275";

describe("6275. Minimum Operations to Make Array Equal II", () => {
  test.each([
    [[4, 3, 1, 4], [1, 3, 7, 1], 3, 2],
    [[3, 8, 5, 2], [2, 4, 1, 6], 1, -1],
  ])("case %#", (nums1, nums2, k, expected) => {
    const result = exportWarp(nums1, nums2, k);
    expect(result).toStrictEqual(expected);
  });
});
