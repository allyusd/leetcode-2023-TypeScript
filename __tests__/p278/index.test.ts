import { exportWarp } from "../../src/p278";

describe("278. First Bad Version", () => {
  test.each([
    [5, 4, 4],
    [1, 1, 1],
    // 自己給的測項
    [7673, 334, 334],
    [192177144, 7298122, 7298122],
  ])("case %#", (n, bad, expected) => {
    const result = exportWarp(n, bad);

    expect(result).toStrictEqual(expected);
  });
});
