import { TreeNode } from "./TreeNode";

export function exportWarp(root: TreeNode | null, k: number): number {
  return kthLargestLevelSum(root, k);
}

// 2023-03-04
// 6308. Kth Largest Sum in a Binary Tree
function kthLargestLevelSum(root: TreeNode | null, k: number): number {
  if (root === null) {
    return -1;
  }

  const levelSums: number[] = [];
  let maxLevel = 1;

  const dfs = (root: TreeNode, level = 1): void => {
    // console.log(root.val);
    if (levelSums[level] === undefined) {
      levelSums[level] = 0;
    }

    levelSums[level] += root.val;

    if (levelSums[level] > levelSums[maxLevel]) {
      maxLevel = level;
    }

    if (root.left !== null) {
      dfs(root.left, level + 1);
    }

    if (root.right !== null) {
      dfs(root.right, level + 1);
    }
  };

  dfs(root);

  // console.log(`levelSums: ${levelSums}`);
  // console.log(`maxLevel: ${maxLevel}`);

  // console.log(`levelSums sort: ${levelSums.sort((a, b) => b - a)}`);
  // console.log(`levelSums.length: ${levelSums.length}`);
  // console.log(`levelSums max level: ${levelSums.length - 1}`);

  if (levelSums.length - 1 < k) {
    return -1;
  }

  return levelSums.sort((a, b) => b - a)[k - 1];
}
