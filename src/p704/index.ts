export function exportWarp(nums: number[], target: number): number {
  return search(nums, target);
}

// 2023-01-11
// 704. Binary Search
// Constraints:
// 1 <= nums.length <= 104
// -104 < nums[i], target < 104
// All the integers in nums are unique.
// nums is sorted in ascending order.
function search(nums: number[], target: number, preIndex = 0): number {
  // 因為排序過，
  // 所以從中間開始找，等於就是答案，
  // 小於就用右邊的陣列，大於就用左邊的陣列。
  // 左右陣列都空的就是沒有
  const mid = Math.floor(nums.length / 2);
  // console.log(`mid ${mid}`);

  if (nums[mid] === target) {
    // console.log(`=== ${mid}`);

    return mid + preIndex;
  }

  if (nums[mid] < target) {
    // console.log(`< ${mid}`);

    // slice 包含前者，不包含後者
    return search(nums.slice(mid + 1, nums.length), target, mid + 1 + preIndex);
  }

  if (nums[mid] > target) {
    // console.log(`> ${mid}`);

    return search(nums.slice(0, mid), target, preIndex);
  }

  return -1;
}
