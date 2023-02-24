import { exportWarp } from "../../src/p1784";

describe("1784. Check if Binary String Has at Most One Segment of Ones", () => {
  test.each([
    ["1001", false],
    ["110", true],
  ])("case", (s, expected) => {
    const result = exportWarp(s);
    expect(result).toStrictEqual(expected);
  });
});
