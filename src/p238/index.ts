// 2023-09-21
export const title = "238. Product of Array Except Self";

// 看題目的直覺是雙 for 去跑，但是這樣是 O(n^2)，不符合題目要求
// Accepted
// Runtime 6545 ms Beats 6.41%
export default function productExceptSelf(nums: number[]): number[] {
  const output = [];

  for (let i = 0; i < nums.length; i++) {
    let product = 1;
    for (let j = 0; j < nums.length; j++) {
      if (i !== j) {
        product = product * nums[j];
      }
    }
    output.push(product + 0);
  }

  return output;
}
