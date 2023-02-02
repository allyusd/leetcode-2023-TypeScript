export function exportWarp(nums: number[]): number[][] {
  return subsets(nums);
}

let output: number[][];
let n: number;
let k: number;

function backtrack(first: number, curr: number[], nums: number[]): void {
  // if the combination is done
  if (curr.length === k) {
    output.push([...curr]);
    return;
  }

  for (let i = first; i < n; i++) {
    // add i into the current combination
    curr.push(nums[i]);
    backtrack(i + 1, curr, nums);
    // backtrack
    curr.pop();
  }
}

// 2023-02-02
// 78. Subsets
// Official Solution - Approach 2: Backtracking
function subsets(nums: number[]): number[][] {
  output = [];
  n = nums.length;

  for (k = 0; k < n + 1; k++) {
    backtrack(0, [], nums);
  }

  return output;
}
