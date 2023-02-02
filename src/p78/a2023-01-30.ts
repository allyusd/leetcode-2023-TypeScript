export function exportWarp(nums: number[]): number[][] {
  return subsets(nums);
}

// 2023-01-30
// 78. Subsets
// 思路是把他當成 subarray 來解，但是題目要的是 subset，所以不對
function subsets(nums: number[]): number[][] {
  const output: number[][] = [[]];

  // for (let i of nums) {
  //   output.push([i]);
  // }

  for (let i = 0; i < nums.length; i++) {
    output.push(nums.slice(i, i + 1));
  }

  for (let i = 0; i < nums.length - 1; i++) {
    output.push(nums.slice(i, i + 1 + 1));
  }

  for (let i = 0; i < nums.length - 2; i++) {
    output.push(nums.slice(i, i + 1 + 2));
  }

  return output;
}
