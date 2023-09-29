import _ from "lodash";

export const title = "15. 3Sum";

// 2023-09-29
// Time Limit Exceeded
export default function threeSum(nums: number[]): number[][] {
  const output: number[][] = [];

  const add = (arr: number[]) => {
    let isNew = true;
    output.forEach((x) => {
      if (JSON.stringify(x) === JSON.stringify(arr)) {
        isNew = false;
      }
    });

    if (isNew) {
      output.push(arr);
    }
  };

  for (const i of _.range(nums.length)) {
    for (const j of _.range(nums.length)) {
      for (const k of _.range(nums.length)) {
        if (i !== j && j !== k && k !== i && nums[i] + nums[j] + nums[k] === 0) {
          add([nums[i], nums[j], nums[k]].sort());
        }
      }
    }
  }

  return output;
}
