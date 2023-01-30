import { exportWarp } from "../../src/p2547";

// No solution
describe.skip("2547. Minimum Cost to Split an Array", () => {
  test.each([
    [[1, 2, 1, 2, 1, 3, 3], 2, 8],
    [[1, 2, 1, 2, 1], 2, 6],
    [[1, 2, 1, 2, 1], 5, 10],
  ])("case %#", (nums, k, expected) => {
    const result = exportWarp(nums, k);
    expect(result).toStrictEqual(expected);
  });
});
