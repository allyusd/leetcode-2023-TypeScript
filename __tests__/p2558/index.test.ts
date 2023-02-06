import { exportWarp } from "../../src/p2558";

describe("2558. Take Gifts From the Richest Pile", () => {
  test.each([
    [[25, 64, 9, 4, 100], 4, 29],
    [[1, 1, 1, 1], 4, 4],
  ])("case %#", (gifts, k, expected) => {
    const result = exportWarp(gifts, k);
    expect(result).toStrictEqual(expected);
  });
});
