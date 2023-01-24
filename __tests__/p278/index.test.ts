import { exportWarp } from "../../src/p278";

describe("278. First Bad Version", () => {
  test.each([
    [5, 4, 4],
    [1, 1, 1],
  ])("case %#", (n, bad, expected) => {
    const result = exportWarp(n, bad);

    expect(result).toStrictEqual(expected);
  });
});
