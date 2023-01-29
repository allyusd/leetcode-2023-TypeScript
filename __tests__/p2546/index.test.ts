import { exportWarp } from "../../src/p2546";

describe("2546. Apply Bitwise Operations to Make Strings Equal", () => {
  test.each([
    ["1010", "0110", true],
    ["11", "00", false],
    // 自己想的
    ["10", "00", false],
    ["10", "01", true],
    ["1010", "0100", true],
    ["1010", "0000", false],
    // Wrong Answer
    ["00", "10", false],
  ])("case %#", (s, target, expected) => {
    const result = exportWarp(s, target);
    expect(result).toStrictEqual(expected);
  });
});
