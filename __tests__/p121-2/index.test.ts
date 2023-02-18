import { exportWarp } from "../../src/p121-2";
import { prices1 } from "./case1.data";
import { prices2 } from "./case2.data";

describe("121. Best Time to Buy and Sell Stock", () => {
  test.each([
    [[7, 1, 5, 3, 6, 4], 5],
    [[7, 6, 4, 3, 1], 0],
    [prices1, 999],
    [prices2, 3],
  ])("case", (prices, expected) => {
    const result = exportWarp(prices);
    expect(result).toStrictEqual(expected);
  });
});
