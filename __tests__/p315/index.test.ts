import { exportWarp } from "../../src/p315";

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
  ])("case %#", (nums, expected) => {
    const result = exportWarp(nums);

    expect(result).toStrictEqual(expected);
  });
});
