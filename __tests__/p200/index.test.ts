import { exportWarp } from "../../src/p200";

describe("200. Number of Islands", () => {
  test.each([
    [
      [
        ["1", "1", "1", "1", "0"],
        ["1", "1", "0", "1", "0"],
        ["1", "1", "0", "0", "0"],
        ["0", "0", "0", "0", "0"],
      ],
      1,
    ],
    [
      [
        ["1", "1", "0", "0", "0"],
        ["1", "1", "0", "0", "0"],
        ["0", "0", "1", "0", "0"],
        ["0", "0", "0", "1", "1"],
      ],
      0,
    ],
  ])("case", (grid, expected) => {
    const result = exportWarp(grid);
    expect(result).toStrictEqual(expected);
  });
});
