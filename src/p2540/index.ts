export function exportWarp(nums1: number[], nums2: number[]): number {
  return getCommon(nums1, nums2);
}

// 2023-01-21
// 2540. Minimum Common Value
function getCommon(nums1: number[], nums2: number[]): number {
  if (nums1.length > nums2.length) {
    const tmp = nums1;
    nums1 = nums2;
    nums2 = tmp;
  }

  let hasCommon = false;
  let minCommon = Number.MAX_VALUE;
  let stack: number[][] = [nums1];

  while (stack.length > 0) {
    const array: number[] | undefined = stack.pop();

    // console.log(`array: ${array}`);
    if (array === undefined) {
      throw new Error(`undefined`);
    }

    const i = Math.floor(array.length / 2);
    // console.log(`i: ${i}`);
    // console.log(`length: ${array.length}`);

    if (nums2.includes(array[i])) {
      if (array[i] < minCommon) {
        minCommon = array[i];
      }
      hasCommon = true;
      stack = [];
      // console.log(`includes`);
    } else {
      if (i !== array.length - 1) {
        if (!(array[i + 1] > nums2[nums2.length - 1] || array[array.length - 1] < nums2[0])) {
          stack.push(array.slice(i + 1));
          // console.log(`push right`);
        }
      }
    }

    if (i !== 0) {
      if (!(array[0] > nums2[nums2.length - 1] || array[i - 1] < nums2[0])) {
        stack.push(array.slice(0, i));
        // console.log(`push left`);
      }
    }
  }

  return hasCommon ? minCommon : -1;
}
