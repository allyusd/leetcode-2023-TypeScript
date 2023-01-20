import { TreeNode } from "./TreeNode";

export function exportWarp(root: TreeNode | null, p: TreeNode | null, q: TreeNode | null): TreeNode | null {
  return lowestCommonAncestor(root, p, q);
}

// 2023-01-20
// 235. Lowest Common Ancestor of a Binary Search Tree
function lowestCommonAncestor(root: TreeNode | null, p: TreeNode | null, q: TreeNode | null): TreeNode | null {
	return null;
};
