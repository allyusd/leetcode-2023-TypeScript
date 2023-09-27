import _ from "lodash";

// 2023-09-27
export const title = "1. Two Sum";

export default function twoSum(nums: number[], target: number): number[] {
  for (const i of _.range(nums.length)) {
    for (const j of _.range(nums.length)) {
      if (i !== j && nums[i] + nums[j] === target) {
        return [i, j];
      }
    }
  }

  return [];
}
