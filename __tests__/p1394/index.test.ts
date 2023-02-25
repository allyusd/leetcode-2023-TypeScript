import { exportWarp } from "../../src/p1394";

describe("1394. Find Lucky Integer in an Array", () => {
  test.each([
    [[2, 2, 3, 4], 2],
    [[1, 2, 2, 3, 3, 3], 3],
    [[2, 2, 2, 3, 3], -1],
    // Wrong Answer
    [[4,3,2,2,4,1,3,4,3], 3],
  ])("case", (arr, expected) => {
    const result = exportWarp(arr);
    expect(result).toStrictEqual(expected);
  });
});
