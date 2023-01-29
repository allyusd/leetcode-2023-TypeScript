export function exportWarp(nums: number[]): number[] {
  return countSmaller(nums);
}

// 2023-01-28
// 315. Count of Smaller Numbers After Self
function countSmaller(nums: number[]): number[] {
  const output: number[] = [];

  for (let i = 0; i < nums.length; i++) {
    output[i] = 0;
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[j] < nums[i]) {
        output[i]++;
      }
    }
  }

  return output;
}
