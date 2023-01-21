import { exportWarp } from "../../src/p6300";

describe("6300. Minimum Common Value", () => {
  test.each([
    [[1, 2, 3], [2, 4], 2],
    [[1, 2, 3, 6], [2, 3, 4, 5], 2],
  ])("case %#", (nums1, nums2, expected) => {
    const result = exportWarp(nums1, nums2);
    expect(result).toStrictEqual(expected);
  });
});
