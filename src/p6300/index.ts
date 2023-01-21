export function exportWarp(nums1: number[], nums2: number[]): number {
  return getCommon(nums1, nums2);
}

// 2023-01-21
// 6300. Minimum Common Value
function getCommon(nums1: number[], nums2: number[]): number {
  while (nums1.length > 0 && nums2.length > 0) {
    if (nums1[0] < nums2[0]) {
      if (nums2.includes(nums1[0])) {
        return nums1[0];
      }
      nums1.shift();
    } else {
      if (nums1.includes(nums2[0])) {
        return nums2[0];
      }
      nums2.shift();
    }
  }

  return -1;
}
