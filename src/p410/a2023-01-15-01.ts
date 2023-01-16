export function exportWarp(nums: number[], k: number): number {
  return splitArray(nums, k);
}

function sumArray(nums: number[]): number {
  return nums.reduce((a: number, x: number) => a + x, 0);
}

// 2023-01-15
// 410. Split Array Largest Sum
// 想不出來怎麼繼續
// Constraints:
// 1 <= nums.length <= 1000
// 0 <= nums[i] <= 10^6
// 1 <= k <= min(50, nums.length)
function splitArray(nums: number[], k: number): number {
  // 找到最大合計的陣列
  let maxSum = 0;
  let maxSubIndex = -1;
  for (let i = 0; i < k; i++) {
    const sub = nums.slice(i, length - i);
    const sum = sumArray(sub);
    if (sum > maxSum) {
      maxSum = sum;
      // eslint-disable-next-line  @typescript-eslint/no-unused-vars
      maxSubIndex = i;
    }
  }

  // 想不出來怎麼繼續

  return -1;
}
