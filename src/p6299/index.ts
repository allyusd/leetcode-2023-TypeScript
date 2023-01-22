export function exportWarp(nums: number[], k: number): number {
  return minCost(nums, k);
}

// 2023-01-21
// 6299. Minimum Cost to Split an Array
function minCost(nums: number[], k: number): number {
  const trimmed = (nums: number[]): number[] => {
    return nums.filter(n => {
      const index = nums.indexOf(n);
      const lastIndex = nums.lastIndexOf(n);

      return index !== lastIndex;
    })
  };

  return -1;
}
