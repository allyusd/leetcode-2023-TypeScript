import { exportWarp } from "../../src/p6291";

describe("6291. Difference Between Element Sum and Digit Sum of an Array", () => {
  test.each([
    [[1, 15, 6, 3], 9],
    [[1, 2, 3, 4], 0],
  ])("case", (nums, expected) => {
    const result = exportWarp(nums);
    expect(result).toStrictEqual(expected);
  });
});
