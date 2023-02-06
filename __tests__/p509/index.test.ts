import { exportWarp } from "../../src/p509";

describe("509. Fibonacci Number", () => {
  test.each([
    [2, 1],
    [3, 2],
    [4, 3],
  ])("case %#", (n, expected) => {
    const result = exportWarp(n);
    expect(result).toStrictEqual(expected);
  });
});
