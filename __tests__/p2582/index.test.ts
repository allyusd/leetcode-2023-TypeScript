import { exportWarp } from "../../src/p2582";

describe("2582. Pass the Pillow", () => {
  test.each([
    [4, 5, 2],
    [3, 2, 3],
  ])("case", (word, m, expected) => {
    const result = exportWarp(word, m);
    expect(result).toStrictEqual(expected);
  });
});
