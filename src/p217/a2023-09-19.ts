// 2023-09-19
// Runtime Details 9579ms
// Beats 5.03% of users with TypeScript
export const title = "217. Contains Duplicate";

export default function containsDuplicate(nums: number[]): boolean {
  for (let i = 0; i < nums.length; i++) {
    for (let j = 0; j < nums.length; j++) {
      if (i !== j && nums[i] === nums[j]) {
        return true;
      }
    }
  }

  return false;
}
