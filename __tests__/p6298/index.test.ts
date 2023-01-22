import { exportWarp } from "../../src/p6298";

describe("6298. Apply Bitwise Operations to Make Strings Equal", () => {
  test.each([
    ["1010", "0110", true],
    ["11", "00", false],
  ])("case %#", (s, target, expected) => {
    const result = exportWarp(s, target);
    expect(result).toStrictEqual(expected);
  });
});
