export function exportWarp(nums: number[]): number[][] {
  return subsets(nums);
}

// 2023-02-02
// 78. Subsets
// Official Solution - Approach 1: Cascading
function subsets(nums: number[]): number[][] {
  const output: number[][] = [[]];

  for (const i of nums) {
    const tmp = [...output];

    for (const j of tmp) {
      output.push([...j, i]);
    }
  }

  return output;
}
