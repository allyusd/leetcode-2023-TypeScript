import { exportWarp } from "../../src/p6292";

describe("6292. Increment Submatrices by One", () => {
  test.each([
    [
      3,
      [
        [1, 1, 2, 2],
        [0, 0, 1, 1],
      ],
      [
        [1, 1, 0],
        [1, 2, 1],
        [0, 1, 1],
      ],
    ],
    [
      2,
      [[0, 0, 1, 1]],
      [
        [1, 1],
        [1, 1],
      ],
    ],
  ])("case", (n, queries, expected) => {
    const result = exportWarp(n, queries);
    expect(result).toStrictEqual(expected);
  });
});
