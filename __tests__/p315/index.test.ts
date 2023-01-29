import { exportWarp } from "../../src/p315";
import { nums1 } from "./case1.data";
import { expected1 } from "./case1.expected";

describe("315. Count of Smaller Numbers After Self", () => {
  test.each([
    [
      [5, 2, 6, 1],
      [2, 1, 1, 0],
    ],
    [[-1], [0]],
    [
      [-1, -1],
      [0, 0],
    ],
    // Time Limit Exceeded
    [
      nums1,
      expected1,
    ],
  ])("case %#", (nums, expected) => {
    const result = exportWarp(nums);
    // console.log(result);

    expect(result).toStrictEqual(expected);
  });
});
