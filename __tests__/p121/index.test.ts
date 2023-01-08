import { exportWarp } from "../../src/p121";

describe("121. Best Time to Buy and Sell Stock", () => {
  test.each([
    [[7, 1, 5, 3, 6, 4], 5],
    [[7, 6, 4, 3, 1], 0],
  ])("case %p", (prices, expected) => {
    const result = exportWarp(prices);
    expect(result).toStrictEqual(expected);
  });
});
