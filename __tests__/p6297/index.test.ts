import { exportWarp } from "../../src/p6297";

describe("6297. Sort the Students by Their Kth Score", () => {
  test.each([
    [
      [
        [10, 6, 9, 1],
        [7, 5, 11, 2],
        [4, 8, 3, 15],
      ],
      2,
      [
        [7, 5, 11, 2],
        [10, 6, 9, 1],
        [4, 8, 3, 15],
      ],
    ],
    [
      [
        [3, 4],
        [5, 6],
      ],
      0,
      [
        [5, 6],
        [3, 4],
      ],
    ],
  ])("case %#", (score, k, expected) => {
    const result = exportWarp(score, k);
    expect(result).toStrictEqual(expected);
  });
});
