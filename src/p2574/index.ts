export function exportWarp(nums: number[]): number[] {
  return leftRigthDifference(nums);
}

// 2023-02-25
// 2574. Left and Right Sum Differences
function leftRigthDifference(nums: number[]): number[] {
  const sum = (arr: number[]) => {
    return arr.reduce((p, c) => p + c);
  };

  const output: number[] = [];
  for (let i = 0; i < nums.length; i++) {
    const leftSum = i == 0 ? 0 : sum(nums.slice(0, i));
    const rightSum = i == nums.length - 1 ? 0 : sum(nums.slice(i + 1, nums.length));
    const answer = Math.abs(leftSum - rightSum);
    output.push(answer);
  }

  return output;
}
