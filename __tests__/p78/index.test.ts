import { exportWarp } from "../../src/p78";
import { arrayContainEqualWithoutOrder } from "../jestHelper/jestHelper";

describe("78. Subsets", () => {
  test.each([
    [
      [1, 2, 3],
      [[], [1], [2], [1, 2], [3], [1, 3], [2, 3], [1, 2, 3]],
    ],
    [[0], [[], [0]]],
  ])("case %#", (nums, expected) => {
    const result = exportWarp(nums);
    // expect(result).toStrictEqual(expected);
    console.log(result);
    console.log(expected);
    arrayContainEqualWithoutOrder(result, expected);
  });
});
