import { exportWarp } from "../../src/p6337";

describe("6337. Count Distinct Numbers on Board", () => {
  test.each([
    [5, 4],
    [3, 2],
  ])("case %#", (n, expected) => {
    const result = exportWarp(n);

    expect(result).toStrictEqual(expected);
  });
});
