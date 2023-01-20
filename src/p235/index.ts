import { TreeNode } from "./TreeNode";

export function exportWarp(root: TreeNode | null, p: TreeNode | null, q: TreeNode | null): TreeNode | null {
  return lowestCommonAncestor(root, p, q);
}

// 2023-01-20
// 235. Lowest Common Ancestor of a Binary Search Tree
function lowestCommonAncestor(root: TreeNode | null, p: TreeNode | null, q: TreeNode | null): TreeNode | null {
  if (root === null || p === null || q === null) {
    return null;
  }

  const dfs = (root: TreeNode, target: TreeNode, ancestor: TreeNode[]): TreeNode[] => {
    if (root.val === target.val) {
      return ancestor.concat([root]);
    }

    if (root.left !== null) {
      const tmp = dfs(root.left, target, ancestor.concat([root]));
      if (tmp.length > 0 && tmp[tmp.length - 1].val === target.val) {
        return tmp;
      }
    }

    if (root.right !== null) {
      const tmp = dfs(root.right, target, ancestor.concat([root]));
      if (tmp.length > 0 && tmp[tmp.length - 1].val === target.val) {
        return tmp;
      }
    }

    return [];
  };

  const pAncestor: TreeNode[] = dfs(root, p, []);
  // console.log(`hi ${JSON.stringify(pAncestor)}`);

  const qAncestor: TreeNode[] = dfs(root, q, []);
  // console.log(`hi ${JSON.stringify(qAncestor)}`);

  let pIndex = pAncestor.length - 1;
  let qIndex = qAncestor.length - 1;

  while (!(pIndex === 0 && qIndex === 0)) {
    if (pAncestor[pIndex].val === qAncestor[qIndex].val) {
      // console.log("found");
      break;
    }

    if (pIndex > qIndex) {
      pIndex--;
    } else {
      qIndex--;
    }
  }

  // console.log(pIndex);
  return pAncestor[pIndex];
}
