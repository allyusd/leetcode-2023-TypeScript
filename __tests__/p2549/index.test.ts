import { exportWarp } from "../../src/p2549";

describe("2549. Count Distinct Numbers on Board", () => {
  test.each([
    [5, 4],
    [3, 2],
    // 自己加
    [100, 99],
    [1, 1],
  ])("case %#", (n, expected) => {
    const result = exportWarp(n);

    expect(result).toStrictEqual(expected);
  });
});
