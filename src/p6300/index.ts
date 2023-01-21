export function exportWarp(nums1: number[], nums2: number[]): number {
  return getCommon(nums1, nums2);
}

// 2023-01-21
// 6300. Minimum Common Value
function getCommon(nums1: number[], nums2: number[]): number {
  if (nums1.length > nums2.length) {
    const tmp = nums1;
    nums1 = nums2;
    nums2 = tmp;
  }

  while (nums1.length > 0) {
    if (nums2.includes(nums1[0])) {
      return nums1[0];
    }

    nums1.shift();
  }

  return -1;
}
