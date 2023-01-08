export function exportWarp(nums: number[], target: number): number[] {
  return twoSum(nums, target);
}

// 1. Two Sum
function twoSum(nums: number[], target: number): number[] {
  const output:number[] = [];

  // 把所有的元素拿出來確認
  for (let i = 0; i < nums.length; i++) {
    for (let j = 0; j < nums.length; j++) {
      if (i === j) {
        continue;
      }

      if (nums[i] + nums[j] === target) {
        output.push(i);
        output.push(j);
        break;
      }
    }
    if (output.length !== 0) {
      break;
    }
  }

  return output;
}
