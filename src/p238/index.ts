// 2023-09-21
export const title = "238. Product of Array Except Self";

// 沒想法，偷看 Topics，研究 Prefix Sum 之後，
// 想到分別建立從左右累乘的陣列，最後取前後相乘，O(n) 符合題意
// Accepted
// Runtime 104ms Beats 28.33%
export default function productExceptSelf(nums: number[]): number[] {
  const output = [];

  const productF: number[] = [];
  const productB: number[] = [];

  let f = 1;
  let b = 1;
  for (let i = 0; i < nums.length; i++) {
    productF[i] = f;
    f = f * nums[i];

    productB[nums.length - 1 - i] = b;
    b = b * nums[nums.length - 1 - i];
  }

  for (let i = 0; i < nums.length; i++) {
    const p = (i == 0 ? 1 : productF[i]) * (i == nums.length - 1 ? 1 : productB[i]);
    output[i] = p + 0;
  }

  return output;
}
