import { exportWarp } from "../../src/p1";

describe('1. Two Sum', () => {
  test('Case 1', () => {
    const nums = [2,7,11,15];
    const target = 9;
    expect(exportWarp(nums, target)).toStrictEqual([0, 1]);
  });
  test('Case 2', () => {
    const nums = [3,2,4];
    const target = 6;
    expect(exportWarp(nums, target)).toStrictEqual([1,2]);
  });
  test('Case 3', () => {
    const nums = [3,3];
    const target = 6;
    expect(exportWarp(nums, target)).toStrictEqual([0,1]);
  });
});
