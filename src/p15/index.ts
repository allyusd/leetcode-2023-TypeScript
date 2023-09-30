import _ from "lodash";

export const title = "15. 3Sum";

// 2023-09-29
// 解法: https://www.youtube.com/watch?v=jzZsG8n2R9A
export default function threeSum(nums: number[]): number[][] {
  const output: number[][] = [];

  // 先排序過
  nums = nums.sort((a, b) => a - b);

  let pre = null;
  for (let i = 0; i < nums.length; i++) {
    // 如果第一位跟上一次一樣就跳過
    if (nums[i] === pre) {
      continue;
    }

    pre = nums[i];

    // two sum 的 two point 解法
    let left = i + 1;
    let right = nums.length - 1;
    let preLeft = null;
    while (right > left) {
      // 第二位如果跟上次找到的一樣就跳過
      if (nums[left] === preLeft) {
        left++;
        continue;
      }

      const sum = nums[i] + nums[left] + nums[right];
      if (sum === 0) {
        output.push([nums[i], nums[left], nums[right]]);
        preLeft = nums[left];
        left++;
      } else if (sum > 0) {
        right--;
      } else {
        left++;
      }
    }
  }

  return output;
}
