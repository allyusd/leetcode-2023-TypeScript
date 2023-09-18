import { exportWarp } from "../../src/p322";

describe.skip("322. Coin Change", () => {
  test.each([
    [[1, 2, 5], 11, 3],
    [[2], 3, -1],
    [[1], 0, 0],
    // Wrong Answer
    [[186, 419, 83, 408], 6249, 20],
  ])("case %#", (coins, amount, expected) => {
    const result = exportWarp(coins, amount);
    expect(result).toStrictEqual(expected);
  });
});
