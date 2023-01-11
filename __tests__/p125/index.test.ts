import { exportWarp } from "../../src/p125";

describe.skip("125. Valid Palindrome", () => {
  test.each([
    ["A man, a plan, a canal: Panama", true],
    ["race a car", false],
    [" ", true],
  ])("case", (prices, expected) => {
    const result = exportWarp(prices);
    expect(result).toStrictEqual(expected);
  });
});
