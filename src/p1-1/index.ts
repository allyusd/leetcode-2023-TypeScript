// 2023-09-19
export const title = "1. Two Sum";

export default function twoSum(nums: number[], target: number): number[] {
  for (let i = 0; i < nums.length; i++) {
    for (let j = 0; j < nums.length; j++) {
      if (i === j) {
        continue;
      }

      if (nums[i] + nums[j] === target) {
        return [i, j];
      }
    }
  }

  return [];
}
