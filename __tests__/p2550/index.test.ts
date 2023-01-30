import { exportWarp } from "../../src/p2550";

// No solution
describe.skip("2550. Count Collisions of Monkeys on a Polygon", () => {
  test.each([
    [3, 6],
    [4, 14],
  ])("case %#", (n, expected) => {
    const result = exportWarp(n);

    expect(result).toStrictEqual(expected);
  });
});
