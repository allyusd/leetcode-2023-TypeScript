export function exportWarp(nums: number[], k: number): number {
  return splitArray(nums, k);
}

// 2023-01-15
// 410. Split Array Largest Sum
// 邊聽討論邊寫
// Wrong Answer
// Constraints:
// 1 <= nums.length <= 1000
// 0 <= nums[i] <= 10^6
// 1 <= k <= min(50, nums.length)
function splitArray(nums: number[], k: number): number {
  let low = 0;
  let high = nums.reduce((a: number, x: number) => a + x, 0);

  while (low < high) {
    const mid = Math.floor((low + high) / 2);
    // 目前 sub array 的合計
    let sum = 0;
    // 切成幾個 sub array
    let count = 1;

    for (let i = 0; i < nums.length; i++) {
      if (sum + nums[i] < mid) {
        sum = sum + nums[i];
      } else {
        count++;
        sum = nums[i];
      }
    }

    if (count > k) {
      low = mid + 1;
    } else {
      high = mid;
    }
  }

  // 為什麼最後會需要 -1，好像跟 while (low < high) 有沒有等於有關係，
  // 但是試著帶入範例去跑跟想像中不同
  return low - 1;
}
