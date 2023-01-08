import { exportWarp } from "../../src/p1";

describe('1. Two Sum', () => {
  test('Case 1', () => {
    let nums = [2,7,11,15];
    let target = 9;
    expect(exportWarp(nums, target)).toStrictEqual([0, 1]);
  });
  test('Case 2', () => {
    let nums = [3,2,4];
    let target = 6;
    expect(exportWarp(nums, target)).toStrictEqual([1,2]);
  });
  test('Case 3', () => {
    let nums = [3,3];
    let target = 6;
    expect(exportWarp(nums, target)).toStrictEqual([0,1]);
  });
});
