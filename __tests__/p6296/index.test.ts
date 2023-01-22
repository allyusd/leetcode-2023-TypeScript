import { exportWarp } from "../../src/p6296";

describe("6296. Alternating Digit Sum", () => {
  test.each([
    [521, 4],
    // [111, 1],
    // [886996, 0],
  ])("case %#", (n, expected) => {
    const result = exportWarp(n);
    expect(result).toStrictEqual(expected);
  });
});
