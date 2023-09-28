import _ from "lodash";

// 2023-09-28
export const title = "167. Two Sum II - Input Array Is Sorted";

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
