// 2023-09-19
// Runtime Details 179ms
// Beats 14.86% of users with TypeScript
export const title = "217. Contains Duplicate";

export default function containsDuplicate(nums: number[]): boolean {
  const sorted = nums.sort();

  for (let i = 0; i < sorted.length - 1; i++) {
    if (sorted[i] === sorted[i + 1]) {
      return true;
    }
  }

  return false;
}
