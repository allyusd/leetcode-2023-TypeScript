import { exportWarp } from "../../src/p20";

describe("20. Valid Parentheses", () => {
  test("Case 1", () => {
    const s = "()";
    expect(exportWarp(s)).toStrictEqual(true);
  });
  test("Case 2", () => {
    const s = "()[]{}";
    expect(exportWarp(s)).toStrictEqual(true);
  });
  test("Case 3", () => {
    const s = "(]";
    expect(exportWarp(s)).toStrictEqual(false);
  });
  // 對應的符號，但是相反
  test("Case 4", () => {
    const s = ")(";
    expect(exportWarp(s)).toStrictEqual(false);
  });
  // 相同符號兩層
  test("Case 5", () => {
    const s = "(())";
    expect(exportWarp(s)).toStrictEqual(true);
  });
  // 所有符號套起來
  test("Case 6", () => {
    const s = "({[]})";
    expect(exportWarp(s)).toStrictEqual(true);
  });
  // 複合
  test("Case 7", () => {
    const s = "({[]})[]{}";
    expect(exportWarp(s)).toStrictEqual(true);
  });
  // 複合，沒有對應到
  test("Case 8", () => {
    const s = "({[[]})]{}";
    expect(exportWarp(s)).toStrictEqual(false);
  });
  // 條件是 1 <= s.length <= 10^4，所以有可能只有 1 個
  test("Case 9", () => {
    const s = "(";
    expect(exportWarp(s)).toStrictEqual(false);
  });
});
