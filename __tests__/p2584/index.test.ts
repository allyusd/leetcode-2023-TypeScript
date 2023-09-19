import { exportWarp } from "../../src/p2584";
import { nums1 } from "./case1.data";

describe.skip("2584. Split the Array to Make Coprime Products", () => {
  test.each([
    // [[4, 7, 8, 15, 3, 5], 2],
    // [[4, 7, 15, 8, 3, 5], -1],
    // Time Limit Exceeded
    [nums1, -1],
  ])("case", (nums, expected) => {
    const result = exportWarp(nums);
    expect(result).toStrictEqual(expected);
  });
});
